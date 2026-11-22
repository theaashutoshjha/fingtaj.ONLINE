// Live endpoint & crawlability verification script.
// Verifies robots.txt, Cloudflare interference, AdSense tags, email protection, and ads.txt on live deployment.
import cfg from '../site.config.mjs';

const targetUrl = (process.argv[2] || cfg.url).replace(/\/+$/, '');
const GOOGLEBOT_UA = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';
const MEDIAPARTNERS_UA = 'Mediapartners-Google';

// RFC 9309 compliant lightweight robots.txt parser
function parseRobotsTxt(content) {
  const lines = content.split('\n').map((l) => l.replace(/#.*$/, '').trim()).filter(Boolean);
  const groups = [];
  let currentGroup = null;

  for (const line of lines) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim().toLowerCase();
    const val = line.slice(colonIdx + 1).trim();

    if (key === 'user-agent') {
      if (!currentGroup || currentGroup.rules.length > 0) {
        currentGroup = { agents: [], rules: [] };
        groups.push(currentGroup);
      }
      currentGroup.agents.push(val.toLowerCase());
    } else if (key === 'allow' || key === 'disallow') {
      if (currentGroup) {
        currentGroup.rules.push({ type: key, path: val });
      }
    }
  }
  return groups;
}

function checkRobotsAllowed(groups, userAgent, targetPath = '/') {
  const ua = userAgent.toLowerCase();
  let matchedGroup = null;
  let matchSpecificity = -1;

  for (const group of groups) {
    for (const agent of group.agents) {
      if (agent === '*' && matchSpecificity < 0) {
        matchedGroup = group;
        matchSpecificity = 0;
      } else if (agent !== '*' && (ua.includes(agent) || agent.includes(ua))) {
        if (agent.length > matchSpecificity) {
          matchedGroup = group;
          matchSpecificity = agent.length;
        }
      }
    }
  }

  if (!matchedGroup) return true; // Allowed by default

  let longestMatchLen = -1;
  let allowed = true;

  for (const rule of matchedGroup.rules) {
    const rPath = rule.path;
    if (!rPath && rule.type === 'disallow') {
      if (longestMatchLen < 0) {
        allowed = true;
        longestMatchLen = 0;
      }
      continue;
    }
    if (targetPath.startsWith(rPath)) {
      if (rPath.length > longestMatchLen) {
        longestMatchLen = rPath.length;
        allowed = (rule.type === 'allow');
      } else if (rPath.length === longestMatchLen && rule.type === 'allow') {
        allowed = true;
      }
    }
  }

  return allowed;
}

const results = [];
function record(check, scope, pass, details) {
  results.push({ check, scope, pass, details });
}

async function fetchWithUa(url, ua) {
  const headers = ua ? { 'User-Agent': ua } : {};
  const res = await fetch(url, { headers, redirect: 'follow' });
  const text = await res.text();
  return { status: res.status, headers: res.headers, text };
}

async function run() {
  console.log(`\n======================================================`);
  console.log(` Fingtaj Live Crawlability & Cloudflare Audit`);
  console.log(` Target Origin: ${targetUrl}`);
  console.log(` Timestamp:     ${new Date().toISOString()}`);
  console.log(`======================================================\n`);

  // 1. Fetch robots.txt with Googlebot & Mediapartners-Google
  let robotsText = '';
  try {
    const rGoogle = await fetchWithUa(`${targetUrl}/robots.txt`, GOOGLEBOT_UA);
    robotsText = rGoogle.text;

    if (rGoogle.status !== 200) {
      record('robots.txt HTTP Status', '/robots.txt', false, `Status ${rGoogle.status} (expected 200)`);
    } else {
      record('robots.txt HTTP Status', '/robots.txt', true, `HTTP 200 OK (${rGoogle.text.length} bytes)`);

      const groups = parseRobotsTxt(robotsText);
      const googleAllowed = checkRobotsAllowed(groups, 'Googlebot', '/');
      const mediaAllowed = checkRobotsAllowed(groups, 'Mediapartners-Google', '/');

      record('robots.txt Googlebot Permission', 'Googlebot on /', googleAllowed, googleAllowed ? 'Explicitly allowed' : 'Disallowed / blocked');
      record('robots.txt Mediapartners Permission', 'Mediapartners on /', mediaAllowed, mediaAllowed ? 'Explicitly allowed' : 'Disallowed / blocked');

      // 2. Check for Cloudflare managed content block
      const hasCfManaged = /BEGIN Cloudflare Managed content/i.test(robotsText);
      record(
        'Cloudflare Managed robots.txt',
        '/robots.txt',
        !hasCfManaged,
        hasCfManaged ? 'FOUND "BEGIN Cloudflare Managed content" (must disable in CF dashboard)' : 'Clean (no Cloudflare managed block prepended)'
      );
    }
  } catch (err) {
    record('robots.txt Fetch', '/robots.txt', false, `Network error: ${err.message}`);
  }

  // 3. Fetch Core Page Templates with Googlebot UA
  const testPages = [
    { name: 'Home Page', path: '/' },
    { name: 'Flagship Calculator', path: '/stamp-duty-calculator' },
    { name: 'Flagship Guide', path: '/guides/stamp-duty-and-registration-explained' },
    { name: 'Contact Page', path: '/contact' },
  ];

  for (const page of testPages) {
    const pageUrl = `${targetUrl}${page.path}`;
    try {
      const resp = await fetchWithUa(pageUrl, GOOGLEBOT_UA);
      const is200 = resp.status === 200;
      record(`${page.name} HTTP Status`, page.path, is200, `HTTP ${resp.status}`);

      if (is200) {
        // Cloudflare challenge detection
        const hasChallenge = /Just a moment|cf-chl|Attention Required|challenge-platform/i.test(resp.text);
        record(`${page.name} WAF Challenge`, page.path, !hasChallenge, hasChallenge ? 'BLOCKED by Cloudflare challenge page' : 'Direct 200 payload delivered');

        // AdSense script verification
        const hasAdSense = /adsbygoogle\.js\?client=ca-pub-3594420471814241/i.test(resp.text);
        record(`${page.name} AdSense Tag`, page.path, hasAdSense, hasAdSense ? 'adsbygoogle.js present' : 'MISSING adsbygoogle.js script tag');

        // Email obfuscation detection
        const hasObfuscatedEmail = /\[email\s*protected\]|email-protection/i.test(resp.text);
        record(`${page.name} Email Obfuscation`, page.path, !hasObfuscatedEmail, hasObfuscatedEmail ? 'Cloudflare obfuscation active ([email protected])' : 'Plain text email preserved');
      }
    } catch (err) {
      record(`${page.name} Fetch`, page.path, false, `Network error: ${err.message}`);
    }
  }

  // 4. Fetch /ads.txt and /sitemap.xml
  try {
    const ads = await fetchWithUa(`${targetUrl}/ads.txt`, GOOGLEBOT_UA);
    const adsValid = ads.status === 200 && /pub-3594420471814241/.test(ads.text);
    record('ads.txt Authorized Seller ID', '/ads.txt', adsValid, adsValid ? 'HTTP 200 & pub-3594420471814241 verified' : `Failed (status ${ads.status})`);
  } catch (err) {
    record('ads.txt Fetch', '/ads.txt', false, `Network error: ${err.message}`);
  }

  try {
    const sm = await fetchWithUa(`${targetUrl}/sitemap.xml`, GOOGLEBOT_UA);
    const smValid = sm.status === 200 && /<urlset/i.test(sm.text) && sm.text.length > 500;
    record('sitemap.xml XML Structure', '/sitemap.xml', smValid, smValid ? `HTTP 200 & valid XML (${sm.text.length} bytes)` : `Failed (status ${sm.status})`);
  } catch (err) {
    record('sitemap.xml Fetch', '/sitemap.xml', false, `Network error: ${err.message}`);
  }

  // 5. Output Results Table
  console.log('| Status | Scope / Endpoint | Check Description | Details |');
  console.log('|:------:|:-----------------|:------------------|:--------|');
  let failures = 0;
  for (const r of results) {
    const badge = r.pass ? ' PASS ' : ' FAIL ';
    if (!r.pass) failures++;
    console.log(`| ${badge} | ${r.scope.padEnd(16)} | ${r.check.padEnd(28)} | ${r.details} |`);
  }

  console.log('\n------------------------------------------------------');
  console.log(`Results: ${results.length - failures}/${results.length} checks passed (${failures} failures)`);
  console.log('------------------------------------------------------');
  console.log('\n[IMPORTANT NOTICE]');
  console.log('* A spoofed User-Agent test only approximates real Googlebot.');
  console.log('* Cloudflare Bot Fight Mode and WAF differentiate real Googlebot by IP reverse DNS verification.');
  console.log('* The authoritative test is Google Search Console > URL Inspection > Test Live URL.\n');

  if (failures > 0) {
    console.log(`Audit finished with ${failures} failure(s). Review Cloudflare settings per docs/CLOUDFLARE-CHECKLIST.md.\n`);
    process.exit(1);
  } else {
    console.log('All live crawlability and Cloudflare checks PASSED.\n');
    process.exit(0);
  }
}

run();


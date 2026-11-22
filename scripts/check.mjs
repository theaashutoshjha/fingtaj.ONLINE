// Post-build SEO / integrity audit of dist/. Exits non-zero on hard failures.
import fs from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';
import cfg from '../site.config.mjs';

const dist = path.resolve(import.meta.dirname, '../dist');
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));
const files = walk(dist);
const htmls = files.filter((f) => f.endsWith('.html') && !f.endsWith('404.html'));
const exists = (u) => { const p = u.split(/[?#]/)[0]; if (p === '/' || p === '') return true; const rel = p.replace(/^\//, ''); return [rel, rel + '.html', rel + '/index.html'].some((c) => fs.existsSync(path.join(dist, c)) && fs.statSync(path.join(dist, c)).isFile()); };
const redirectSrc = fs.readFileSync(path.join(dist, '_redirects'), 'utf8').split('\n').map((l) => l.split(/\s+/)[0]);

const errors = [], warns = [];
const titles = new Map(), descs = new Map();
const allDates = new Set();
let totalWords = 0;

for (const f of htmls) {
  const rel = path.relative(dist, f).replace(/\\/g, '/');
  const $ = cheerio.load(fs.readFileSync(f, 'utf8'));
  const E = (m) => errors.push(`${rel}: ${m}`), W = (m) => warns.push(`${rel}: ${m}`);
  const title = $('title').text(), desc = $('meta[name=description]').attr('content') || '';
  if (!title) E('missing <title>'); else if (title.length > 65) W(`title ${title.length} chars`); else if (title.length < 20) W(`title short (${title.length})`);
  if (desc.length < 70) W(`description short (${desc.length})`); if (desc.length > 165) W(`description long (${desc.length})`);
  (titles.get(title) || titles.set(title, []).get(title)).push(rel); (descs.get(desc) || descs.set(desc, []).get(desc)).push(rel);
  if ($('h1').length !== 1) E(`h1 count ${$('h1').length}`);
  const canon = $('link[rel=canonical]').attr('href');
  if (!canon || !canon.startsWith(cfg.url)) E('bad canonical');
  if (!$('meta[name=viewport]').length) E('no viewport');
  if ($('html').attr('lang') !== 'en-IN') E('lang');
  if (!$(`meta[name="google-adsense-account"][content="${cfg.adsensePub}"]`).length) E('adsense meta missing');
  if (!$(`script[src*="adsbygoogle.js?client=${cfg.adsensePub}"]`).length) E('adsense script missing');
  if (cfg.gaId && !$('script:not([src])').text().includes(`gtag('config','${cfg.gaId}')`)) E('GA missing');
  if (!$('meta[property="og:image"]').attr('content')) E('og:image');
  $('img').each((_, el) => { if (!$(el).attr('alt') && $(el).attr('alt') !== '') E('img without alt'); if (!$(el).attr('width')) W('img without width/height'); const s = $(el).attr('src'); if (s?.startsWith('/') && !exists(s)) E('missing image ' + s); });
  
  // JSON-LD validation and date extraction
  $('script[type="application/ld+json"]').each((_, el) => {
    try {
      const parsed = JSON.parse($(el).contents().text());
      const findDates = (obj) => {
        if (!obj || typeof obj !== 'object') return;
        if (obj.datePublished) allDates.add(String(obj.datePublished).slice(0, 10));
        if (obj.dateModified) allDates.add(String(obj.dateModified).slice(0, 10));
        if (Array.isArray(obj['@graph'])) obj['@graph'].forEach(findDates);
      };
      findDates(parsed);
    } catch {
      E('invalid JSON-LD');
    }
  });

  // Extract meta and time dates
  const pubTime = $('meta[property="article:published_time"]').attr('content');
  const modTime = $('meta[property="article:modified_time"]').attr('content');
  if (pubTime) allDates.add(pubTime.slice(0, 10));
  if (modTime) allDates.add(modTime.slice(0, 10));
  $('time[datetime]').each((_, el) => {
    const dt = $(el).attr('datetime');
    if (dt) allDates.add(dt.slice(0, 10));
  });

  // Author byline check on guides
  if (rel.startsWith('guides/')) {
    const authorLink = $('.byline a[href^="/authors/"]');
    if (!authorLink.length || !authorLink.text().trim()) {
      E('missing author byline');
    }
  }

  // Date presence check on guides
  if (rel.startsWith('guides/')) {
    if (!pubTime || !modTime) E('missing published/modified article meta dates');
  }

  // Internal link checking
  $('a[href]').each((_, el) => {
    const h = $(el).attr('href');
    if (h.startsWith('/') && !h.startsWith('//') && !exists(h) && !redirectSrc.includes(h.split(/[?#]/)[0])) E(`broken internal link ${h}`);
    if (/blogger|blogspot/.test(h)) E('blogger link ' + h);
    if (/^https?:\/\//.test(h) && $(el).attr('target') === '_blank' && !/noopener/.test($(el).attr('rel') || '')) W('target=_blank without noopener');
  });

  // Word count check: fail on any page below 450 words
  const text = $('main').text().replace(/\s+/g, ' ').trim();
  const wc = text ? text.split(' ').length : 0;
  totalWords += wc;
  if (rel !== 'index.html' && wc < 450 && !/sitemap|category|guides|calculators/.test(rel)) {
    E(`page below 450 words: ${wc} words (minimum 450 required)`);
  }

  // Check for unresolved [VERIFY] or [OWNER] markers in visible text
  const mainText = $('main').text();
  if (/\[VERIFY|\[OWNER/i.test(mainText)) {
    E('unresolved [VERIFY] or [OWNER] marker in visible content');
  }
  if (/lorem ipsum|undefined|\[object|NaN/.test(mainText)) {
    E('placeholder/undefined/NaN text');
  }
}

// Global checks
for (const [t, l] of titles) if (l.length > 1) errors.push(`duplicate title "${t}": ${l.join(', ')}`);
for (const [t, l] of descs) if (l.length > 1) warns.push(`duplicate description: ${l.join(', ')}`);

// Dates diversity check: ensure dates are not identical across all pages
if (allDates.size < 2) {
  errors.push(`identical dates across all pages (${[...allDates].join(', ')}): date diversity required`);
}

// Sitemap coverage
const sm = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');
const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (locs.length !== htmls.length) warns.push(`sitemap has ${locs.length} URLs for ${htmls.length} pages`);
for (const l of locs) if (!exists(l.replace(cfg.url, '') || '/')) errors.push('sitemap URL has no file: ' + l);

// Required files
for (const need of ['ads.txt', 'robots.txt', 'llms.txt', 'feed.xml', '_redirects', '_headers', `${cfg.indexNowKey}.txt`, 'og-image.png', 'favicon.svg']) {
  if (!fs.existsSync(path.join(dist, need))) errors.push('missing file ' + need);
}

// Ads.txt check
const adsTxt = fs.readFileSync(path.join(dist, 'ads.txt'), 'utf8');
if (!/pub-3594420471814241/.test(adsTxt)) errors.push('ads.txt publisher mismatch');

console.log(`pages checked: ${htmls.length} | total visible words ≈ ${totalWords.toLocaleString()} | distinct dates: ${[...allDates].join(', ')}`);
console.log(`errors: ${errors.length} | warnings: ${warns.length}`);
errors.slice(0, 60).forEach((e) => console.log('  ERROR', e));
warns.slice(0, 40).forEach((w) => console.log('  warn ', w));
process.exit(errors.length ? 1 : 0);

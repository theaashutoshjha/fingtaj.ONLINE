// Instant indexing via IndexNow (Bing, Yandex, Seznam, Naver, Yep and others share submissions).
//   npm run indexnow            → submit only new/changed pages since the last run
//   npm run indexnow:all        → submit every URL in the sitemap (use once after launch)
//   node scripts/indexnow.mjs --wait   → first wait until the live site serves the key file (for CI after a deploy)
//   node scripts/indexnow.mjs --dry    → show what would be sent
// Google does not support IndexNow — see README ("Getting Google to index quickly").
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import cfg from '../site.config.mjs';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const stateFile = path.join(root, 'indexnow-state.json');
const args = new Set(process.argv.slice(2));
const host = new URL(cfg.url).host;
const keyLocation = `${cfg.url}/${cfg.indexNowKey}.txt`;

const sitemap = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const fileFor = (u) => { const p = u.replace(cfg.url, '') || '/'; return p === '/' ? 'index.html' : p.replace(/^\//, '') + '.html'; };
const digest = (u) => crypto.createHash('md5').update(fs.readFileSync(path.join(dist, fileFor(u)))).digest('hex');
const state = fs.existsSync(stateFile) ? JSON.parse(fs.readFileSync(stateFile, 'utf8')) : {};

// Build date is embedded in every page's JSON-LD, so ignore it when deciding whether content changed.
const stable = (u) => crypto.createHash('md5').update(fs.readFileSync(path.join(dist, fileFor(u)), 'utf8').replace(/"dateModified":"\d{4}-\d{2}-\d{2}"/g, '').replace(/modified_time" content="[^"]+"/g, '')).digest('hex');
const now = Object.fromEntries(urls.map((u) => [u, stable(u)]));
const toSend = args.has('--all') ? urls : urls.filter((u) => state[u] !== now[u]);

if (args.has('--wait')) {
  for (let i = 0; i < 40; i++) {
    try { const r = await fetch(keyLocation, { cache: 'no-store' }); if (r.ok && (await r.text()).trim() === cfg.indexNowKey) break; } catch {}
    console.log('waiting for deployment to go live…'); await new Promise((r) => setTimeout(r, 15000));
  }
}

console.log(`${urls.length} URLs in sitemap, ${toSend.length} to submit${args.has('--all') ? ' (all)' : ' (new or changed)'}`);
if (!toSend.length || args.has('--dry')) { if (args.has('--dry')) toSend.slice(0, 20).forEach((u) => console.log('  ' + u)); process.exit(0); }

let ok = true;
for (let i = 0; i < toSend.length; i += 9000) {
  const res = await fetch('https://api.indexnow.org/indexnow', { method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' }, body: JSON.stringify({ host, key: cfg.indexNowKey, keyLocation, urlList: toSend.slice(i, i + 9000) }) });
  console.log('IndexNow response:', res.status, res.statusText, res.status === 200 || res.status === 202 ? '(accepted)' : await res.text());
  if (![200, 202].includes(res.status)) ok = false;
}
if (ok) { fs.writeFileSync(stateFile, JSON.stringify(now, null, 1)); console.log('state saved to indexnow-state.json'); }
else { console.error('Submission failed. If you see 403, the key file is not live yet — deploy first.'); process.exit(1); }

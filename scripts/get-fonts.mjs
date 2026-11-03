// One-off: downloads Fraunces (headings) and DM Sans (body) from Google Fonts and stores the latin / latin-ext WOFF2 files in assets/fonts.
// The site then self-hosts them (no third-party font requests). Run: node scripts/get-fonts.mjs
import fs from 'node:fs';
import path from 'node:path';

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';
const out = path.resolve(import.meta.dirname, '../assets/fonts');
fs.mkdirSync(out, { recursive: true });
const families = [
  { name: 'fraunces', url: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500..800&display=swap', subsets: ['latin'] },
  { name: 'dmsans', url: 'https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400..700&display=swap', subsets: ['latin', 'latin-ext'] },
];
const result = {};
for (const f of families) {
  const css = await (await fetch(f.url, { headers: { 'User-Agent': UA } })).text();
  const blocks = [...css.matchAll(/\/\*\s*([\w-]+)\s*\*\/\s*@font-face\s*\{([^}]+)\}/g)];
  for (const [, subset, body] of blocks) {
    if (!f.subsets.includes(subset)) continue;
    const src = body.match(/url\((https:[^)]+\.woff2)\)/)?.[1];
    const range = body.match(/unicode-range:\s*([^;]+);/)?.[1] || '';
    const file = `${f.name}-${subset}.woff2`;
    fs.writeFileSync(path.join(out, file), Buffer.from(await (await fetch(src)).arrayBuffer()));
    result[file] = { range, bytes: fs.statSync(path.join(out, file)).size };
  }
}
fs.writeFileSync(path.join(out, 'fonts.json'), JSON.stringify(result, null, 1));
console.log(result);

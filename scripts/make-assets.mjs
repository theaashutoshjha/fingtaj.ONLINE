// Generates the binary assets that are committed to the repo (so the Cloudflare build needs no image tooling):
//   public/favicon.svg, logo-*.png, apple-touch-icon.png, favicon.ico, og-image.png and public/img/og-<topic>.png (1200x630 social cards)
// Run `npm run assets` after changing the logo or topics.
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { TOPICS } from './lib/guides.mjs';
import { MARK_SVG_FILE } from './lib/icons.mjs';

const root = path.resolve(import.meta.dirname, '..');
const R = (...p) => path.join(root, ...p);
fs.mkdirSync(R('public/img'), { recursive: true });

fs.writeFileSync(R('public/favicon.svg'), MARK_SVG_FILE);
const logo = Buffer.from(MARK_SVG_FILE);
await sharp(logo).resize(512, 512).png().toFile(R('public/logo-512.png'));
await sharp(logo).resize(192, 192).png().toFile(R('public/logo-192.png'));
await sharp(logo).resize(180, 180).png().toFile(R('public/apple-touch-icon.png'));
await sharp(logo).resize(48, 48).png().toFile(R('public/favicon.ico'));

const card = (kicker, title, sub, hue) => `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><defs><pattern id="r" width="12" height="40" patternUnits="userSpaceOnUse"><path d="M0 40V26M6 40V33" stroke="#f5efe4" stroke-opacity=".28" stroke-width="2"/></pattern></defs>
<rect width="1200" height="630" fill="#16231e"/><rect x="0" y="574" width="1200" height="56" fill="url(#r)"/><rect x="0" y="0" width="14" height="630" fill="${hue}"/>
<g transform="translate(84,70)"><rect width="76" height="76" rx="21" fill="#f5efe4"/><path d="M24 55V38a14 14 0 0 1 28 0v17" fill="none" stroke="#16231e" stroke-width="5.4" stroke-linecap="round"/><rect x="16" y="55" width="44" height="6" rx="3" fill="#c1502e"/></g>
<text x="182" y="124" font-family="Georgia,'Times New Roman',serif" font-weight="700" font-size="54" fill="#f5efe4" letter-spacing="-2">fingtaj<tspan fill="#e0714d">.</tspan></text>
<text x="84" y="268" font-family="Arial,Helvetica,sans-serif" font-weight="700" font-size="24" letter-spacing="4" fill="#e9a27f">${kicker}</text>
<text x="84" y="356" font-family="Georgia,'Times New Roman',serif" font-weight="700" font-size="${title.length > 30 ? 66 : 78}" fill="#f5efe4" letter-spacing="-2">${title}</text>
<text x="84" y="436" font-family="Arial,Helvetica,sans-serif" font-size="32" fill="#bcc4bb">${sub}</text>
<text x="84" y="520" font-family="Arial,Helvetica,sans-serif" font-size="26" fill="#8d9a92">fingtaj.online</text></svg>`;
await sharp(Buffer.from(card('CALCULATORS &amp; GUIDES', 'Measure twice.', 'Build once. For Indian homes.', '#c1502e'))).png().toFile(R('public/og-image.png'));
for (const t of TOPICS) {
  await sharp(Buffer.from(card('GUIDES', t.name.replace('&', '&amp;'), 'Practical guides · free calculators', t.hue))).png().toFile(R('public/img', `og-${t.id}.png`));
}
console.log('assets generated');

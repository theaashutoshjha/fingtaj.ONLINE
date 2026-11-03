import path from 'node:path';
import { pathToFileURL } from 'node:url';
import fs from 'node:fs';
import cfg from '../../site.config.mjs';

const root = path.resolve(import.meta.dirname, '../..');

export const TOPICS = [
  { id: 'land-measurement', file: 'land', name: 'Land & Measurement', icon: 'land', hue: '#2f6b57', desc: 'Land units, plot measurement, carpet area, FSI, land records and circle rate — explained so you know exactly what you are buying.' },
  { id: 'building-materials', file: 'materials', name: 'Building Materials', icon: 'brick', hue: '#c1502e', desc: 'Cement, steel, bricks, sand, concrete grades, waterproofing, paint, tiles and pipes: what to choose, how to check quality and how much to order.' },
  { id: 'house-construction', file: 'construction', name: 'House Construction', icon: 'frame', hue: '#3d5a80', desc: 'From budget and contractor agreements to foundations, soil tests, approvals, inspections and completion certificates.' },
  { id: 'property-buying', file: 'property', name: 'Property Buying & Registration', icon: 'key', hue: '#7a3b69', desc: 'Stamp duty, RERA, documents, title checks, mutation, home loans and the true total cost of buying a flat or plot.' },
  { id: 'power-solar-water', file: 'energy', name: 'Power, Solar & Water', icon: 'sun', hue: '#b8842a', desc: 'Electricity bills, appliance use, rooftop solar, inverters, AC sizing, water tanks and rainwater harvesting.' },
  { id: 'interiors-maintenance', file: 'interiors', name: 'Interiors & Maintenance', icon: 'sofa', hue: '#5d7a2f', desc: 'Staircases, kitchens, ceilings, flooring, roofing, damp and leakage repairs and renovation planning.' },
];

// calculator names as they appear in guide text → slug, so they can be auto-linked
const ALIASES = {
  'land-area-converter': ['Land Area Converter'], 'plot-area-calculator': ['Plot Area Calculator'], 'carpet-area-calculator': ['Carpet Area Calculator'], 'land-price-calculator': ['Land Price Calculator'],
  'brick-quantity-calculator': ['Brick Quantity Calculator'], 'plaster-calculator': ['Plaster Calculator'], 'concrete-calculator': ['Concrete Quantity Calculator', 'Concrete Calculator'], 'steel-weight-calculator': ['Steel Weight Calculator'],
  'tile-flooring-calculator': ['Tile and Flooring Calculator', 'Tile & Flooring Calculator', 'Tile Calculator'], 'paint-quantity-calculator': ['Paint Quantity Calculator', 'Paint Calculator'], 'excavation-calculator': ['Excavation & Earthwork Calculator', 'Excavation Calculator'], 'staircase-calculator': ['Staircase Calculator'],
  'construction-cost-calculator': ['House Construction Cost Calculator'], 'house-budget-planner': ['House Building Budget Planner', 'House Budget Planner'], 'interior-cost-calculator': ['Home Interior Cost Calculator', 'Interior Cost Calculator'], 'material-thumb-rule-estimator': ['Cement and Steel Thumb-Rule Estimator'],
  'stamp-duty-calculator': ['Stamp Duty and Registration Calculator', 'Stamp Duty Calculator'], 'total-property-cost-calculator': ['Total Property Purchase Cost Calculator', 'Total Property Cost Calculator'], 'home-loan-emi-calculator': ['Home Loan EMI Calculator'], 'home-affordability-calculator': ['Home Affordability Calculator'], 'rental-yield-calculator': ['Rental Yield Calculator'],
  'electricity-bill-calculator': ['Electricity Bill Calculator'], 'appliance-energy-calculator': ['Appliance Power Consumption Calculator'], 'solar-rooftop-calculator': ['Rooftop Solar Calculator'], 'inverter-battery-calculator': ['Inverter and Battery Calculator', 'Inverter & Battery Size Calculator'], 'water-tank-calculator': ['Water Tank Calculator'], 'rainwater-harvesting-calculator': ['Rainwater Harvesting Calculator'],
  'unit-converter': ['Construction Unit Converter'], 'ac-tonnage-calculator': ['AC Tonnage Calculator'], 'sloped-roof-area-calculator': ['Sloped Roof Area Calculator'],
};

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
export const slugify = (s) => s.toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const plain = (h) => h.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim();

export async function loadGuides(calcSlugs) {
  const guides = [];
  for (const topic of TOPICS) {
    const mod = await import(pathToFileURL(path.join(root, 'content/guides', topic.file + '.mjs')).href);
    const extraFile = path.join(root, 'content/guides', 'extra-' + topic.file + '.mjs');
    const extra = fs.existsSync(extraFile) ? (await import(pathToFileURL(extraFile).href)).default : {};
    for (const g of mod.default) guides.push({ ...g, topic, sections: [...g.sections, ...(extra[g.slug] || [])] });
    for (const k of Object.keys(extra)) if (!mod.default.some((g) => g.slug === k)) throw new Error('extra content for unknown guide ' + k);
  }
  const seen = new Set();
  const errors = [];
  for (const g of guides) {
    if (seen.has(g.slug)) errors.push('duplicate slug ' + g.slug); seen.add(g.slug);
    for (const c of g.calcs || []) if (!calcSlugs.includes(c)) errors.push(`${g.slug}: unknown calculator ${c}`);
    if (g.desc.length > 165 || g.desc.length < 70) errors.push(`${g.slug}: description length ${g.desc.length}`);
  }
  if (errors.length) throw new Error('Guide content errors:\n' + errors.join('\n'));

  const aliasList = Object.entries(ALIASES).flatMap(([slug, names]) => names.map((n) => [n, slug])).sort((a, b) => b[0].length - a[0].length);
  const link = (text, used) => {
    let out = esc(text);
    for (const [name, slug] of aliasList) {
      if (used.has(slug)) continue;
      const e = esc(name), i = out.indexOf(e);
      if (i > -1 && !/<a [^>]*$/.test(out.slice(0, i)) && !out.slice(i).startsWith(e + '</a>')) { out = out.slice(0, i) + `<a href="/${slug}">${e}</a>` + out.slice(i + e.length); used.add(slug); }
    }
    return out;
  };

  for (const g of guides) {
    g.urlPath = '/guides/' + g.slug;
    g.pub = cfg.buildDate; g.upd = cfg.buildDate;
    const used = new Set(); const toc = []; const ids = new Set();
    const html = g.sections.map(([h, ...blocks]) => {
      let id = slugify(h).slice(0, 60); while (ids.has(id)) id += '-2'; ids.add(id); toc.push({ id, text: h });
      const body = blocks.map((b) => {
        if (typeof b === 'string') return `<p>${link(b, used)}</p>`;
        if (Array.isArray(b)) return `<ul>${b.map((x) => `<li>${link(x, used)}</li>`).join('')}</ul>`;
        if (b.ol) return `<ol>${b.ol.map((x) => `<li>${link(x, used)}</li>`).join('')}</ol>`;
        if (b.table) { const [head, rows] = b.table; return `<div class="table-wrap"><table><thead><tr>${head.map((c) => `<th>${esc(c)}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`; }
        if (b.note) return `<blockquote>${link(b.note, used)}</blockquote>`;
        throw new Error('unknown block in ' + g.slug);
      }).join('');
      return `<h2 id="${id}">${esc(h)}</h2>${body}`;
    }).join('\n');
    g.html = html; g.toc = toc;
    g.faqHtml = g.faqs.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('');
    const text = plain(html) + ' ' + g.faqs.map((f) => f.join(' ')).join(' ');
    g.words = text.split(' ').length; g.readMin = Math.max(2, Math.round(g.words / 220));
  }
  return guides;
}

export function relatedGuides(guides, g, n = 3) {
  const t = new Set(g.tags);
  return guides.filter((x) => x !== g).map((x) => ({ x, s: x.tags.filter((k) => t.has(k)).length * 2 + (x.topic === g.topic ? 1 : 0) + (x.calcs.some((c) => g.calcs.includes(c)) ? 1.5 : 0) }))
    .sort((a, b) => b.s - a.s).slice(0, n).map((r) => r.x);
}
export const guidesForCalc = (guides, c, n = 4) => guides.filter((g) => g.calcs.includes(c.slug)).slice(0, n);

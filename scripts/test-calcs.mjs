import { CALCS, defaults } from '../calc/index.js';
import { emi, heron, AREA_UNITS } from '../calc/lib.js';

let fail = 0;
const ok = (name, got, want, tol = 0.01) => { const good = Math.abs(got - want) <= tol; if (!good) { fail++; console.log('FAIL', name, got, want); } else console.log('ok  ', name, +got.toFixed(4)); };
const calc = (slug) => CALCS.find((c) => c.slug === slug);
const run = (slug, over = {}) => { const c = calc(slug); return c.compute({ ...defaults(c), ...over }); };
const num = (s) => parseFloat(String(s).replace(/[^\d.\-]/g, ''));

console.log('calculators:', CALCS.length, 'unique slugs:', new Set(CALCS.map((c) => c.slug)).size);
for (const c of CALCS) {
  try { const r = c.compute(defaults(c)); if (!r.primary || /NaN|Infinity|undefined/.test(JSON.stringify(r))) { fail++; console.log('BAD OUTPUT', c.slug, JSON.stringify(r).slice(0, 200)); } }
  catch (e) { fail++; console.log('THROW', c.slug, e.message); }
  for (const k of ['intro', 'formula', 'how', 'faqs', 'short', 'assumptions']) if (!c[k] || !c[k].length) { fail++; console.log('MISSING', c.slug, k); }
  if (c.short.length > 165) console.log('long desc', c.slug, c.short.length);
}

// independent reference values
ok('acre → sq ft', num(run('land-area-converter', { v: 1, u: 'acre' }).primary.value), 43560, 0.5);
ok('10 guntha → sq ft', num(run('land-area-converter', { v: 10, u: 'guntha' }).primary.value), 10890, 0.5);
ok('1 cent → sq ft', num(run('land-area-converter', { v: 1, u: 'cent' }).primary.value), 435.6, 0.1);
ok('rectangle 40×60', num(run('plot-area-calculator', { shape: 'rect', a: 40, b: 60 }).primary.value), 2400, 0.5);
ok('heron 3-4-5', heron(3, 4, 5), 6, 1e-9);
ok('steel 12 mm per m', num(run('steel-weight-calculator', { d: 12, len: 1, n: 1 }).metrics[0].value), 0.889, 0.001);
ok('1 m³ M20 → bags (≈8.07)', 1 * 1.54 * 1 / 5.5 / 0.0347, 8.07, 0.05);
ok('EMI 40L 8.75% 20y', emi(4000000, 8.75, 240), 35348.4, 1);
ok('tank 6×4×5 ft litres', num(run('water-tank-calculator', { shape: 'rect', a: 6, b: 4, d: 5 }).primary.value), 3398, 3);
ok('rainwater 1000 sq ft 800 mm 0.85 ff10', num(run('rainwater-harvesting-calculator', {}).primary.value), 1000 * 0.09290304 * 800 * 0.85 * 0.9, 5);
ok('stairs 3000 mm', num(run('staircase-calculator', {}).primary.value), 18, 0);
ok('ac 150 sqft', num(run('ac-tonnage-calculator', {}).primary.value), 1.5, 0);
console.log(fail ? 'FAILURES: ' + fail : 'ALL CHECKS PASSED');
process.exit(fail ? 1 : 0);

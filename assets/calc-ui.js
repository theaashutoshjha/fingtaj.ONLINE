// Hydrates a server-rendered calculator form. The page already contains results for the default inputs,
// so crawlers and no-JS visitors see real numbers; this script makes it live.
import { renderResult } from '/assets/calc/lib.js';

const form = document.getElementById('calc-form');
const out = document.getElementById('calc-result');
if (form && out) {
  const slug = form.dataset.slug, cat = form.dataset.cat;
  const mod = await import(`/assets/calc/${cat}.js`);
  const calc = mod.default.find((c) => c.slug === slug);

  const read = () => {
    const v = {};
    for (const f of calc.inputs) {
      const el = form.elements[f.id];
      if (!el) continue;
      if (f.kind === 'text') v[f.id] = el.value;
      else if (f.kind === 'select') v[f.id] = isNaN(el.value) || el.value === '' ? el.value : Number(el.value);
      else { const n = parseFloat(el.value); v[f.id] = isFinite(n) ? n : 0; }
    }
    return v;
  };
  const run = () => {
    let html;
    try {
      const r = calc.compute(read());
      html = /NaN|Infinity/.test(JSON.stringify(r)) ? '<p class="result-note">Please enter valid values to see the result.</p>' : renderResult(r);
    } catch (e) { html = '<p class="result-note">Please enter valid values to see the result.</p>'; }
    const open = out.querySelector('details')?.open;
    out.innerHTML = html;
    if (open) out.querySelector('details')?.setAttribute('open', '');
  };

  // sync number <-> range
  form.addEventListener('input', (e) => {
    const t = e.target;
    if (t.type === 'range') form.elements[t.dataset.for].value = t.value;
    else if (t.type === 'number') { const r = form.querySelector(`input[type=range][data-for="${t.name}"]`); if (r) r.value = t.value; }
    run();
  });
  form.addEventListener('submit', (e) => e.preventDefault());

  // restore values from the URL so results can be shared
  const q = new URLSearchParams(location.search);
  let touched = false;
  for (const f of calc.inputs) if (q.has(f.id) && form.elements[f.id]) { form.elements[f.id].value = q.get(f.id); const r = form.querySelector(`input[type=range][data-for="${f.id}"]`); if (r) r.value = q.get(f.id); touched = true; }
  if (touched) run();

  document.getElementById('calc-share')?.addEventListener('click', async (e) => {
    const p = new URLSearchParams(read());
    const url = location.origin + location.pathname + '?' + p.toString();
    try { await navigator.clipboard.writeText(url); e.target.textContent = 'Link copied ✓'; } catch { prompt('Copy this link', url); }
    setTimeout(() => (e.target.textContent = 'Copy link to these numbers'), 2000);
  });
  document.getElementById('calc-reset')?.addEventListener('click', () => { form.reset(); form.querySelectorAll('input[type=range]').forEach((r) => (r.value = form.elements[r.dataset.for].defaultValue)); run(); });
}

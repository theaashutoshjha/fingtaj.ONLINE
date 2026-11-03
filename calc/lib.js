// Shared helpers for every FinGTaj calculator. Runs in Node (build-time, tests) and in the browser.

export const inr = (v) => {
  if (!isFinite(v)) return '₹0';
  const neg = v < 0;
  const s = Math.round(Math.abs(v)).toString();
  const last3 = s.slice(-3);
  const rest = s.slice(0, -3);
  const out = rest ? rest.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + last3 : last3;
  return (neg ? '-' : '') + '₹' + out;
};

export const words = (v) => {
  if (!isFinite(v)) return '₹0';
  const a = Math.abs(v), sign = v < 0 ? '-' : '';
  const t = (n) => String(+n.toFixed(2));
  if (a >= 1e7) return `${sign}₹${t(a / 1e7)} Cr`;
  if (a >= 1e5) return `${sign}₹${t(a / 1e5)} Lakh`;
  return inr(v);
};

export const pct = (v, d = 2) => (isFinite(v) ? v.toFixed(d).replace(/\.?0+$/, '') : '0') + '%';
export const num = (v, d = 0) => (isFinite(v) ? Number(v.toFixed(d)).toLocaleString('en-IN') : '0');

export const yearsMonths = (months) => {
  const m = Math.max(0, Math.round(months));
  const y = Math.floor(m / 12), r = m % 12;
  return [y ? `${y} yr${y > 1 ? 's' : ''}` : '', r ? `${r} mo` : ''].filter(Boolean).join(' ') || '0 mo';
};

// ---- finance maths -------------------------------------------------------
export const emi = (P, annualRate, months) => {
  const r = annualRate / 1200;
  if (months <= 0) return 0;
  if (r === 0) return P / months;
  const f = Math.pow(1 + r, months);
  return (P * r * f) / (f - 1);
};

// Future value of a monthly SIP (instalment at the start of each month — the convention used by AMFI-style calculators).
export const sipFV = (monthly, annualRate, years) => {
  const n = Math.round(years * 12), i = annualRate / 1200;
  if (i === 0) return monthly * n;
  return monthly * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
};

export const fv = (P, annualRate, years, perYear = 1) => P * Math.pow(1 + annualRate / 100 / perYear, perYear * years);

// Reducing-balance amortisation, aggregated per year.
export const amortise = (P, annualRate, months, extra = () => 0) => {
  const r = annualRate / 1200, pay = emi(P, annualRate, months);
  let bal = P, rows = [], yp = 0, yi = 0, paid = 0, totalInt = 0, m = 0;
  while (bal > 0.5 && m < 1200) {
    m++;
    const int = bal * r;
    let prin = Math.min(bal, pay - int);
    const ex = Math.min(bal - prin, extra(m));
    prin += ex;
    bal -= prin; yp += prin; yi += int; paid += pay + ex; totalInt += int;
    if (m % 12 === 0 || bal <= 0.5) {
      rows.push([`Year ${Math.ceil(m / 12)}`, inr(yp), inr(yi), inr(Math.max(0, bal))]);
      yp = 0; yi = 0;
    }
  }
  return { emi: pay, months: m, totalInterest: totalInt, totalPaid: paid, rows };
};

// Solve IRR for dated cash flows (XIRR) with bisection + Newton fallback.
export const xirr = (flows) => {
  const t0 = flows[0].date;
  const f = (r) => flows.reduce((s, c) => s + c.amount / Math.pow(1 + r, (c.date - t0) / 31536000000), 0);
  let lo = -0.9999, hi = 100;
  if (f(lo) * f(hi) > 0) return NaN;
  for (let i = 0; i < 200; i++) {
    const mid = (lo + hi) / 2;
    if (f(lo) * f(mid) <= 0) hi = mid; else lo = mid;
  }
  return (lo + hi) / 2;
};

// ---- indian income tax (FY 2025-26 & FY 2026-27 slabs) ---------------------
const slabTax = (income, slabs) => {
  let tax = 0, prev = 0;
  for (const [limit, rate] of slabs) {
    if (income > prev) tax += (Math.min(income, limit) - prev) * rate;
    prev = limit;
  }
  return tax;
};
export const NEW_SLABS = [[400000, 0], [800000, 0.05], [1200000, 0.10], [1600000, 0.15], [2000000, 0.20], [2400000, 0.25], [Infinity, 0.30]];
export const OLD_SLABS = [[250000, 0], [500000, 0.05], [1000000, 0.20], [Infinity, 0.30]];

const surchargeRate = (income, regime) => {
  if (income > 20000000) return regime === 'new' ? 0.25 : 0.37;
  if (income > 10000000) return 0.15;
  if (income > 5000000) return 0.10;
  return 0;
};

// taxable = income after all deductions. Returns {slab, rebate, surcharge, cess, total}
export const incomeTax = (taxable, regime) => {
  taxable = Math.max(0, taxable);
  let slab = slabTax(taxable, regime === 'new' ? NEW_SLABS : OLD_SLABS);
  let rebate = 0;
  if (regime === 'new' && taxable <= 1200000) rebate = Math.min(slab, 60000);
  else if (regime === 'new' && taxable > 1200000) {
    // marginal relief: tax payable cannot exceed income above ₹12L
    const excess = taxable - 1200000;
    if (slab > excess) rebate = slab - excess;
  }
  if (regime === 'old' && taxable <= 500000) rebate = Math.min(slab, 12500);
  const afterRebate = slab - rebate;
  const surcharge = afterRebate * surchargeRate(taxable, regime);
  const cess = (afterRebate + surcharge) * 0.04;
  return { slab, rebate, surcharge, cess, total: afterRebate + surcharge + cess };
};

// ---- rendering of a result object (shared by build + browser) ----------------
export const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const PALETTE = ['#2f6b57', '#c8922b', '#3d5a80', '#a23b5a', '#6b4e8a'];

const donut = (items) => {
  const total = items.reduce((s, i) => s + Math.max(0, i.value), 0);
  if (!total) return '';
  const R = 52, C = 2 * Math.PI * R;
  let off = 0;
  const arcs = items.map((it, k) => {
    const len = (Math.max(0, it.value) / total) * C;
    const a = `<circle r="${R}" cx="70" cy="70" fill="none" stroke="${it.color || PALETTE[k % PALETTE.length]}" stroke-width="22" stroke-dasharray="${len.toFixed(2)} ${(C - len).toFixed(2)}" stroke-dashoffset="${(-off).toFixed(2)}" transform="rotate(-90 70 70)"/>`;
    off += len;
    return a;
  }).join('');
  const legend = items.map((it, k) => `<li><i style="background:${it.color || PALETTE[k % PALETTE.length]}"></i><span>${esc(it.label)}</span><b>${esc(it.display ?? inr(it.value))}</b></li>`).join('');
  return `<div class="chart"><svg viewBox="0 0 140 140" role="img" aria-label="Breakdown chart">${arcs}</svg><ul class="legend">${legend}</ul></div>`;
};

export const renderResult = (r) => {
  if (!r) return '';
  const metrics = (r.metrics || []).map((m) => `<div class="metric${m.tone ? ' ' + m.tone : ''}"><span>${esc(m.label)}</span><b>${esc(m.value)}</b></div>`).join('');
  const chart = r.chart ? donut(r.chart) : '';
  const table = r.table
    ? `<details class="sched"${r.table.open ? ' open' : ''}><summary>${esc(r.table.title)}</summary><div class="table-wrap"><table><thead><tr>${r.table.headers.map((h) => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${r.table.rows.map((row) => `<tr>${row.map((c) => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div></details>`
    : '';
  const note = r.note ? `<p class="result-note">${esc(r.note)}</p>` : '';
  return `<div class="primary"><span>${esc(r.primary.label)}</span><b>${esc(r.primary.value)}</b></div><div class="metrics">${metrics}</div>${chart}${note}${table}`;
};

// Input field helper: kind = money | pct | yrs | mo | num | select | text
export const F = (id, label, def, min, max, step, kind = 'money', help = '') => ({ id, label, def, min, max, step, kind, help });
export const SEL = (id, label, def, options, help = '') => ({ id, label, def, kind: 'select', options, help });

// ---- construction helpers ---------------------------------------------------
export const f2 = (v, d = 2) => (isFinite(v) ? Number(v).toLocaleString('en-IN', { maximumFractionDigits: d, minimumFractionDigits: 0 }) : '0');
export const M2_PER_SQFT = 0.09290304;
export const SQFT_PER_M2 = 10.7639104;
export const CUFT_PER_M3 = 35.3146667;
export const FT = 0.3048;      // metres per foot
export const INCH = 0.0254;    // metres per inch
export const CEMENT_BAG_M3 = 0.0347; // one 50 kg bag � 0.0347 m� (bulk density � 1,440 kg/m�)
export const heron = (a, b, c) => { const s = (a + b + c) / 2, q = s * (s - a) * (s - b) * (s - c); return q > 0 ? Math.sqrt(q) : NaN; };

// Area units, expressed in square feet. "bigha" and "katha" are regional and are supplied by the user.
export const AREA_UNITS = [
  ['sqft', 'Square feet (sq ft)', 1], ['sqyd', 'Square yard / gaj', 9], ['sqm', 'Square metre (sq m)', SQFT_PER_M2],
  ['are', 'Are', 1076.39104], ['hectare', 'Hectare', 107639.104], ['acre', 'Acre', 43560],
  ['guntha', 'Guntha', 1089], ['cent', 'Cent', 435.6], ['kanal', 'Kanal', 5445], ['marla', 'Marla (Punjab)', 272.25],
  ['ground', 'Ground (Tamil Nadu)', 2400], ['bigha', 'Bigha (local size)', null], ['biswa', 'Biswa (1/20 bigha)', null], ['katha', 'Katha (local size)', null],
];

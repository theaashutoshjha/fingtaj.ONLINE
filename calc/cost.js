import { f2, inr, pct, F, SEL } from './lib.js';

const CAT = 'cost';
const slice = (label, value, color) => ({ label, value, color });

export default [
  {
    slug: 'construction-cost-calculator', category: CAT, title: 'House Construction Cost Calculator',
    short: 'Estimate the cost of building a house from built-up area and your local construction rate, with fees and contingency.',
    tags: ['construction cost', 'house', 'budget', 'per sq ft'],
    intro: [
      'The usual way to budget a house is a rate per square foot of built-up area. The right rate depends on your city, the quality of finishes, the structure and what the contractor includes. In 2025–26 many Indian cities see roughly ₹1,800 to ₹3,500 per sq ft for good-quality residential construction, but local quotes decide the real number.',
      'Enter the built-up area per floor, the number of floors and the rate quoted by your contractor or engineer. The calculator adds architect and engineer fees, approvals and a contingency, which many first-time builders forget, and shows a typical split of where the money goes.',
    ],
    formula: 'Construction cost = Built-up area × floors × rate; Total = Construction cost × (1 + fees % + approvals % + contingency %)',
    how: ['Built-up area includes wall thickness, staircase and balconies if they are covered.', 'Professional fees are commonly 2–5 percent; approvals and utility connections 1–3 percent; a contingency of 10 percent protects you from price rises and design changes.', 'The split between structure, finishing and services is a typical pattern, not a quotation.'],
    assumptions: ['The rate is entered by you; compare at least three local quotes. “Grey structure” rates exclude finishing, while “turnkey” rates include it.', 'Land cost, interior furniture and appliances are not included.'],
    faqs: [
      ['What is the construction cost per sq ft in India?', 'It varies by city and specification. Basic construction can start below ₹1,800 per sq ft in smaller towns while premium finishes in metros can exceed ₹3,500. Get itemised quotes before relying on any average.'],
      ['What is the difference between grey structure and turnkey?', 'Grey structure covers foundation, columns, slabs, brickwork and plaster. Turnkey includes flooring, doors, electrical, plumbing, paint and fixtures, so the rate is higher.'],
      ['How much contingency should I keep?', '10 percent is the usual minimum. Increase it if soil conditions are uncertain or if you plan changes during construction.'],
    ],
    inputs: [F('area', 'Built-up area per floor (sq ft)', 1200, 100, 100000, 50, 'num'), F('floors', 'Number of floors', 2, 1, 20, 1, 'num'), F('rate', 'Construction rate (₹ per sq ft)', 2400, 500, 20000, 50), F('fee', 'Architect / engineer fees', 3, 0, 10, 0.5, 'pct'), F('appr', 'Approvals and connections', 2, 0, 10, 0.5, 'pct'), F('cont', 'Contingency', 10, 0, 30, 1, 'pct')],
    compute(v) {
      const base = v.area * v.floors * v.rate, fee = base * v.fee / 100, appr = base * v.appr / 100, cont = base * v.cont / 100, total = base + fee + appr + cont;
      const split = [['Foundation and structure', 0.38], ['Masonry and plaster', 0.14], ['Flooring and tiling', 0.10], ['Doors and windows', 0.08], ['Electrical', 0.07], ['Plumbing and sanitary', 0.08], ['Painting and finishes', 0.07], ['Other and site costs', 0.08]];
      return {
        primary: { label: 'Estimated total project cost', value: inr(total) },
        metrics: [{ label: 'Total built-up area', value: f2(v.area * v.floors, 0) + ' sq ft' }, { label: 'Construction cost', value: inr(base) }, { label: 'Fees', value: inr(fee) }, { label: 'Approvals and connections', value: inr(appr) }, { label: 'Contingency', value: inr(cont), tone: 'warn' }, { label: 'All-in cost per sq ft', value: inr(total / (v.area * v.floors)) }],
        chart: [slice('Construction', base, '#2f6b57'), slice('Fees and approvals', fee + appr, '#3d5a80'), slice('Contingency', cont, '#c8922b')],
        table: { title: 'Typical split of the construction cost', headers: ['Item', 'Share', 'Amount'], rows: split.map(([n, s]) => [n, Math.round(s * 100) + '%', inr(base * s)]) },
      };
    },
  },
  {
    slug: 'house-budget-planner', category: CAT, title: 'House Building Budget Planner',
    short: 'Turn your total budget into a plan: land, construction, interiors, approvals and a safety reserve.',
    tags: ['budget', 'house', 'plan', 'construction cost'],
    intro: [
      'Most first-time builders spend the budget on construction and then run out of money for the finishing, furniture and moving in. Splitting the total into land, civil work, interiors, approvals and a reserve at the start prevents that.',
      'Enter your total budget and the share you want to allocate to each head. The planner shows the rupee amount for each and warns if the shares do not add up to 100 percent.',
    ],
    formula: 'Amount for each head = Total budget × share %',
    how: ['Typical splits: land 25–40 percent, civil construction 40–50 percent, interiors 8–12 percent, approvals and fees 3–6 percent, reserve 8–10 percent.', 'If you already own the land, set the land share to zero and redistribute.'],
    assumptions: ['The defaults suit an average residential project; adjust to your plan.', 'Loan interest during construction is not included — add it to the reserve.'],
    faqs: [
      ['What share of the budget should go to land?', 'In many cities land takes 25 to 40 percent of the total. In expensive metros it can be higher, which reduces what is left for construction.'],
      ['Why keep a reserve?', 'Cost overruns, price increases for steel and cement, design changes and weather delays are almost certain on any build.'],
      ['Where do loan costs fit?', 'Interest during construction is a real cost; add it as a separate line or increase the reserve.'],
    ],
    inputs: [F('total', 'Total budget', 6000000, 100000, 1e10, 50000), F('land', 'Land', 30, 0, 80, 1, 'pct'), F('civil', 'Civil construction', 45, 0, 90, 1, 'pct'), F('inter', 'Interiors and furniture', 10, 0, 40, 1, 'pct'), F('fees', 'Approvals, fees and connections', 5, 0, 20, 1, 'pct'), F('res', 'Reserve', 10, 0, 30, 1, 'pct')],
    compute(v) {
      const t = v.land + v.civil + v.inter + v.fees + v.res, rows = [['Land', v.land], ['Civil construction', v.civil], ['Interiors and furniture', v.inter], ['Approvals, fees and connections', v.fees], ['Reserve', v.res]];
      return {
        primary: { label: 'Budget allocated', value: pct(t, 1) + ' of total' },
        metrics: rows.map(([n, s]) => ({ label: n, value: inr(v.total * s / 100) })),
        chart: rows.map(([n, s], i) => ({ label: n, value: s, color: ['#2f6b57', '#3d5a80', '#c8922b', '#6b4e8a', '#a23b5a'][i], display: inr(v.total * s / 100) })),
        note: Math.abs(t - 100) > 0.01 ? `The shares add up to ${t}%, not 100%. Adjust them so the plan balances.` : '',
      };
    },
  },
  {
    slug: 'interior-cost-calculator', category: CAT, title: 'Home Interior Cost Calculator',
    short: 'Estimate the interior cost of a flat or house from carpet area and your quality tier, with a room-wise split.',
    tags: ['interior', 'modular kitchen', 'wardrobe', 'renovation'],
    intro: [
      'Interior costs are driven by carpet area, the materials you choose and how much is custom carpentry. A basic package with ready furniture costs far less than full custom woodwork with premium finishes. Many full-home interior quotes in Indian cities fall between roughly ₹800 and ₹2,500 per sq ft of carpet area, and luxury work goes beyond that.',
      'Enter the carpet area and the rate in your quote. The calculator shows the total and a typical room-wise split, with a contingency for changes during the work.',
    ],
    formula: 'Interior cost = Carpet area × rate per sq ft × (1 + contingency %)',
    how: ['The kitchen and wardrobes usually take the largest share because of custom carpentry.', 'Bathrooms and false ceilings are often priced separately by contractors.', 'Always compare the same scope: quotes differ on whether appliances, lights and curtains are included.'],
    assumptions: ['The room split is typical and varies by house.', 'GST and designer fees may be extra.'],
    faqs: [
      ['Is it cheaper to buy ready furniture?', 'Often yes for sofas, beds and loose furniture. Built-in wardrobes and kitchens are usually custom because they must fit the space.'],
      ['How can I reduce interior costs?', 'Prioritise the kitchen, wardrobes and storage; skip decorative false ceilings; use laminates instead of veneers; phase non-essential rooms.'],
      ['How long do interiors take?', 'A full 2BHK usually takes 45 to 90 days from design approval, depending on the scope and carpentry.'],
    ],
    inputs: [F('area', 'Carpet area (sq ft)', 1000, 100, 50000, 50, 'num'), F('rate', 'Interior rate (₹ per sq ft)', 1400, 300, 10000, 50), F('cont', 'Contingency', 10, 0, 30, 1, 'pct')],
    compute(v) {
      const base = v.area * v.rate, total = base * (1 + v.cont / 100);
      const split = [['Living and dining', 0.20], ['Kitchen', 0.28], ['Bedrooms and wardrobes', 0.32], ['Bathrooms', 0.08], ['Lighting, ceiling and décor', 0.12]];
      return { primary: { label: 'Estimated interior cost', value: inr(total) }, metrics: [{ label: 'Base cost', value: inr(base) }, { label: 'Contingency', value: inr(total - base), tone: 'warn' }, { label: 'Per sq ft of carpet area', value: inr(total / v.area) }], table: { title: 'Typical room-wise split', open: true, headers: ['Area', 'Share', 'Amount'], rows: split.map(([n, s]) => [n, Math.round(s * 100) + '%', inr(base * s)]) } };
    },
  },
  {
    slug: 'material-thumb-rule-estimator', category: CAT, title: 'Cement & Steel Thumb-Rule Estimator',
    short: 'Rough planning estimate of cement bags and steel for a house from its built-up area, using editable rules of thumb.',
    tags: ['cement', 'steel', 'thumb rule', 'estimate', 'house'],
    intro: [
      'Before drawings are ready, builders use thumb rules to get a rough idea of materials: about 0.4 bags of cement and 3 to 4 kg of steel per square foot of built-up area for a typical residential building. These numbers are only for early budgeting; the structural design and bill of quantities decide the real amounts.',
      'Adjust the per-square-foot values to match your engineer’s guidance and enter current prices to see a rough material budget.',
    ],
    formula: 'Cement bags = Built-up area × bags per sq ft;  Steel = Built-up area × kg per sq ft',
    how: ['Defaults are 0.4 bags of cement and 3.5 kg of steel per sq ft of built-up area.', 'Higher floors, longer spans and weak soil push both numbers up.', 'Never order materials purely from a thumb rule; use your structural drawings.'],
    assumptions: ['Rules of thumb for ordinary low-rise residential work only.', 'Prices are examples; enter current local rates.'],
    faqs: [
      ['How many bags of cement for a 1,000 sq ft house?', 'Using the 0.4 bags/sq ft rule it is around 400 bags for the whole building including masonry and plaster. Actual use varies with design.'],
      ['How much steel for a 1,000 sq ft house?', 'About 3,000 to 4,500 kg is a common range for a single floor RCC house; multi-storey buildings need more.'],
      ['Are thumb rules safe to use for design?', 'No. They are for rough budgeting only. A licensed structural engineer must design the structure.'],
    ],
    inputs: [F('area', 'Total built-up area (sq ft)', 1500, 100, 100000, 50, 'num'), F('cem', 'Cement (bags per sq ft)', 0.4, 0.2, 0.8, 0.05, 'num'), F('st', 'Steel (kg per sq ft)', 3.5, 2, 6, 0.1, 'num'), F('pc', 'Cement price per bag', 400, 100, 1000, 5), F('ps', 'Steel price per kg', 65, 30, 150, 1)],
    compute(v) {
      const bags = v.area * v.cem, kg = v.area * v.st;
      return { primary: { label: 'Cement (rough estimate)', value: f2(Math.ceil(bags), 0) + ' bags' }, metrics: [{ label: 'Steel', value: f2(kg, 0) + ' kg' }, { label: 'Steel in tonnes', value: f2(kg / 1000, 2) }, { label: 'Cement cost', value: inr(bags * v.pc) }, { label: 'Steel cost', value: inr(kg * v.ps) }, { label: 'Cement + steel budget', value: inr(bags * v.pc + kg * v.ps), tone: 'good' }], note: 'Planning figure only. Use the structural design and bill of quantities for ordering.' };
    },
  },
];

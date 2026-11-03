import { f2, inr, pct, F, SEL, FT, M2_PER_SQFT } from './lib.js';

const CAT = 'energy';

export default [
  {
    slug: 'electricity-bill-calculator', category: CAT, title: 'Electricity Bill Calculator',
    short: 'Calculate your monthly electricity bill from units consumed using slab rates, fixed charge and duty — enter your own state tariff.',
    tags: ['electricity', 'bill', 'tariff', 'units', 'slab'],
    intro: [
      'Residential electricity in India is charged on a slab basis: the first block of units costs the least, and each higher block costs more. On top of the energy charge you pay a fixed or demand charge, taxes and electricity duty. Every state electricity regulator sets its own tariff, and it is revised regularly.',
      'Because tariffs differ, this calculator does not guess your state’s rates. Enter the slab limits and rates printed on your latest bill or published by your discom, and it works out the bill and the effective cost per unit.',
    ],
    formula: 'Energy charge = Σ (units in each slab × slab rate);  Bill = (Energy charge + Fixed charge) × (1 + duty %)',
    how: ['Units are split across the slabs: the first block up to the first limit, the next block up to the second limit and so on.', 'Fixed charge is per month and often depends on sanctioned load.', 'Electricity duty or tax is applied as a percentage of the energy and fixed charges. Fuel adjustment and other surcharges can be added in the duty field.'],
    assumptions: ['The default rates are only an illustration. Replace them with your own tariff.', 'Time-of-day tariffs and subsidies are not modelled.'],
    faqs: [
      ['Where can I find my tariff slabs?', 'On the back of your bill, on your electricity distribution company’s website, or in the state electricity regulatory commission’s tariff order.'],
      ['Why does my bill jump when I cross a slab?', 'Units above each limit are billed at a higher rate; in some states the higher rate applies to the whole consumption once a threshold is crossed. Check your tariff order.'],
      ['How can I reduce my bill?', 'Use efficient appliances (5-star AC, BLDC fans, LED lighting), set AC to 24–26 °C and consider rooftop solar. See our guides on reducing electricity bills.'],
    ],
    inputs: [F('u', 'Units consumed (kWh)', 320, 0, 100000, 5, 'num'), F('l1', 'Slab 1 up to (units)', 100, 0, 5000, 5, 'num'), F('r1', 'Slab 1 rate (₹/unit)', 3.5, 0, 50, 0.05, 'num'), F('l2', 'Slab 2 up to (units)', 200, 0, 5000, 5, 'num'), F('r2', 'Slab 2 rate (₹/unit)', 5.5, 0, 50, 0.05, 'num'), F('l3', 'Slab 3 up to (units)', 400, 0, 5000, 5, 'num'), F('r3', 'Slab 3 rate (₹/unit)', 7, 0, 50, 0.05, 'num'), F('r4', 'Rate above slab 3 (₹/unit)', 8.5, 0, 50, 0.05, 'num'), F('fixed', 'Fixed charge per month', 120, 0, 10000, 5), F('duty', 'Duty / tax / surcharge', 6, 0, 40, 0.5, 'pct')],
    compute(v) {
      const lims = [v.l1, v.l2, v.l3, Infinity], rates = [v.r1, v.r2, v.r3, v.r4]; let prev = 0, energy = 0;
      for (let i = 0; i < 4; i++) { const take = Math.max(0, Math.min(v.u, lims[i]) - prev); energy += take * rates[i]; prev = Math.max(prev, lims[i]); }
      const sub = energy + v.fixed, duty = sub * v.duty / 100, bill = sub + duty;
      return { primary: { label: 'Monthly electricity bill', value: inr(bill) }, metrics: [{ label: 'Energy charge', value: inr(energy) }, { label: 'Fixed charge', value: inr(v.fixed) }, { label: 'Duty / tax', value: inr(duty) }, { label: 'Effective cost per unit', value: '₹' + f2(v.u ? bill / v.u : 0, 2), tone: 'warn' }, { label: 'Annual bill at this usage', value: inr(bill * 12) }], chart: [{ label: 'Energy charge', value: energy, color: '#2f6b57' }, { label: 'Fixed charge', value: v.fixed, color: '#3d5a80' }, { label: 'Duty / tax', value: duty, color: '#c8922b' }], note: 'Illustrative defaults — enter your own state tariff for an accurate bill.' };
    },
  },
  {
    slug: 'appliance-energy-calculator', category: CAT, title: 'Appliance Power Consumption Calculator',
    short: 'Find the monthly units and cost of your AC, fans, lights, fridge and other appliances from wattage and daily use.',
    tags: ['appliance', 'power', 'consumption', 'electricity', 'ac', 'units'],
    intro: [
      'Electricity cost is power (watts) × time (hours). A 1,500 W air conditioner running 8 hours a day uses 12 units a day; a 10 W LED bulb uses 0.1 unit for 10 hours. Adding up your appliances shows where the units go and what saving each change would bring.',
      'Enter wattage, daily hours and number for each appliance, then the cost per unit you pay. For an AC or refrigerator whose compressor cycles on and off, use the average hours it actually runs.',
    ],
    formula: 'Units per month = Σ (watts × hours per day × number × 30) ÷ 1000;  Cost = Units × tariff',
    how: ['Watts are the rated power; check the appliance label. An inverter AC draws less than its peak rating most of the time.', '1 kilowatt-hour (kWh) equals one unit of electricity on your bill.', 'Use your average cost per unit (bill ÷ units) for a realistic estimate.'],
    assumptions: ['Constant power during use. Real appliances vary with load and temperature.', 'Standby power is not included.'],
    faqs: [
      ['How many units does a 1.5 ton AC use?', 'A 1.5 ton AC draws roughly 1,000 to 1,600 W; running 8 hours a day it uses about 8 to 13 units a day depending on the model and conditions.'],
      ['Which appliance uses the most power?', 'Air conditioners, geysers, room heaters and irons draw the most while they are on. Refrigerators use less power but run all day.'],
      ['How do I measure real consumption?', 'A plug-in energy meter shows the actual units used by any appliance.'],
    ],
    inputs: [F('w1', 'AC — watts', 1400, 0, 5000, 10, 'num'), F('h1', 'AC — hours per day', 8, 0, 24, 0.5, 'num'), F('n1', 'AC — number', 1, 0, 20, 1, 'num'), F('w2', 'Ceiling fan — watts', 75, 0, 5000, 5, 'num'), F('h2', 'Ceiling fan — hours per day', 12, 0, 24, 0.5, 'num'), F('n2', 'Ceiling fan — number', 4, 0, 50, 1, 'num'), F('w3', 'LED light — watts', 9, 0, 5000, 1, 'num'), F('h3', 'LED light — hours per day', 6, 0, 24, 0.5, 'num'), F('n3', 'LED light — number', 10, 0, 100, 1, 'num'), F('w4', 'Refrigerator — watts', 150, 0, 5000, 5, 'num'), F('h4', 'Refrigerator — effective hours per day', 8, 0, 24, 0.5, 'num'), F('n4', 'Refrigerator — number', 1, 0, 10, 1, 'num'), F('tariff', 'Cost per unit (₹)', 7, 0, 50, 0.1, 'num')],
    compute(v) {
      const rows = [['Air conditioner', v.w1 * v.h1 * v.n1], ['Ceiling fans', v.w2 * v.h2 * v.n2], ['LED lights', v.w3 * v.h3 * v.n3], ['Refrigerator', v.w4 * v.h4 * v.n4]];
      const monthly = rows.map(([n, wh]) => [n, wh * 30 / 1000]), total = monthly.reduce((s, r) => s + r[1], 0);
      return { primary: { label: 'Units per month', value: f2(total, 0) + ' kWh' }, metrics: [{ label: 'Monthly cost', value: inr(total * v.tariff), tone: 'warn' }, { label: 'Daily units', value: f2(total / 30, 1) }, { label: 'Annual cost', value: inr(total * v.tariff * 12) }], table: { title: 'Monthly use by appliance', open: true, headers: ['Appliance', 'Units / month', 'Cost'], rows: monthly.map(([n, u]) => [n, f2(u, 1), inr(u * v.tariff)]) } };
    },
  },
  {
    slug: 'solar-rooftop-calculator', category: CAT, title: 'Rooftop Solar Calculator',
    short: 'Estimate the solar system size, roof area, cost, yearly savings and payback period from your monthly electricity use.',
    tags: ['solar', 'rooftop', 'net metering', 'savings', 'payback'],
    intro: [
      'A rooftop solar plant converts sunlight to electricity that reduces your grid bill. In most of India a 1 kW system produces about 4 to 5 units a day on average over the year, needs roughly 80 to 100 sq ft of shadow-free roof, and can offset a large share of a typical household’s consumption.',
      'Enter your average monthly consumption and the installed cost per kW quoted by installers. The calculator estimates the system size, the roof area required, annual savings and the simple payback period. Subsidies may be available under central or state schemes; enter the net amount you expect after any subsidy.',
    ],
    formula: 'Size (kW) = Monthly units ÷ 30 ÷ daily yield per kW;  Savings = Units generated × tariff;  Payback = Net cost ÷ yearly savings',
    how: ['Daily yield per kW depends on location, tilt and shading; 4 kWh/kW/day is a conservative planning value.', 'Net cost is the installed cost less any subsidy you will receive.', 'Payback ignores panel degradation (about 0.5 percent a year) and tariff changes, both of which are small compared with the uncertainty in prices.'],
    assumptions: ['Your system exports surplus under net metering or you use most of the generation yourself.', 'Costs and subsidies change; get at least three quotes and check eligibility on the official scheme portal.'],
    faqs: [
      ['How many solar panels do I need?', 'A typical 1 kW system uses 2 to 3 panels of 400 to 550 W each. The calculator gives the kW size; installers convert it to panels.'],
      ['Is there a subsidy for rooftop solar?', 'The central government and many states have offered rooftop solar subsidies for residential consumers. Terms change, so check the official national portal and your state agency before you buy.'],
      ['How long do solar panels last?', 'Panels carry 25-year performance warranties; inverters usually last 8 to 12 years and may need replacement.'],
    ],
    inputs: [F('m', 'Monthly electricity use (units)', 400, 50, 20000, 10, 'num'), F('y', 'Daily yield per kW (units)', 4, 3, 6, 0.1, 'num'), F('c', 'Installed cost per kW', 60000, 30000, 150000, 1000), F('sub', 'Subsidy you expect (₹)', 0, 0, 1e7, 1000), F('t', 'Electricity tariff (₹ per unit)', 7, 1, 30, 0.1, 'num'), F('a', 'Roof area per kW (sq ft)', 90, 60, 150, 5, 'num')],
    compute(v) {
      const kw = Math.ceil(v.m / 30 / v.y * 2) / 2, gen = kw * v.y * 365, cost = kw * v.c - v.sub, save = gen * v.t;
      return { primary: { label: 'Recommended system size', value: f2(kw, 1) + ' kW' }, metrics: [{ label: 'Roof area needed', value: f2(kw * v.a, 0) + ' sq ft' }, { label: 'Net system cost', value: inr(Math.max(0, cost)) }, { label: 'Yearly generation', value: f2(gen, 0) + ' units' }, { label: 'Yearly saving', value: inr(save), tone: 'good' }, { label: 'Simple payback', value: save > 0 ? f2(Math.max(0, cost) / save, 1) + ' years' : '—' }, { label: '25-year saving (approx.)', value: inr(save * 25 - Math.max(0, cost)) }], note: 'Rounded up to the nearest 0.5 kW. Actual output depends on sunshine, tilt, shading and cleaning.' };
    },
  },
  {
    slug: 'inverter-battery-calculator', category: CAT, title: 'Inverter & Battery Size Calculator',
    short: 'Size an inverter and battery bank for your home from the load in watts and the backup hours you need.',
    tags: ['inverter', 'battery', 'backup', 'power cut'],
    intro: [
      'The inverter must handle the total load of appliances you will run during a power cut, and the battery must store enough energy for the backup time you want. A common mistake is to size the inverter on the sum of ratings without allowing for power factor and starting current.',
      'Enter the total watts you want to back up, the hours of backup and the battery type. The calculator suggests inverter capacity in VA and the battery capacity in ampere-hours, and how many 12 V batteries make the bank.',
    ],
    formula: 'Inverter VA = Load W ÷ 0.8 × 1.2 headroom;  Battery Ah = (Load W × hours) ÷ (System V × depth of discharge × efficiency)',
    how: ['Power factor of about 0.8 converts watts to VA; 20 percent headroom covers starting surges of fans and refrigerators.', 'Lead-acid batteries should be discharged only about 50 percent to last; lithium batteries tolerate about 80 percent.', 'Efficiency of around 85 percent accounts for inverter and charging losses.'],
    assumptions: ['Air conditioners and heavy motors need a much larger inverter and bank; this calculator is meant for lights, fans, TV, router and similar loads.', 'Battery life and backup time reduce with age.'],
    faqs: [
      ['Can an inverter run an AC?', 'Only with a very large inverter and battery bank, which is expensive. A 1.5 ton AC needs a 3 kVA or larger system and many batteries; solar with a hybrid inverter is a better route.'],
      ['Which is better — tubular or lithium?', 'Tubular lead-acid batteries cost less upfront; lithium lasts longer, is lighter and allows deeper discharge but costs more.'],
      ['What size battery for 4 hours of backup?', 'Enter your total watts and 4 hours; the calculator returns the Ah needed at your battery type and system voltage.'],
    ],
    inputs: [F('w', 'Load to back up (watts)', 500, 50, 20000, 10, 'num'), F('h', 'Backup hours', 4, 0.5, 24, 0.5, 'num'), SEL('v', 'System voltage', 24, [[12, '12 V'], [24, '24 V'], [48, '48 V']]), SEL('dod', 'Battery type', 0.5, [[0.5, 'Lead-acid / tubular (50% usable)'], [0.8, 'Lithium (80% usable)']]), F('eff', 'System efficiency', 85, 60, 100, 1, 'pct'), F('ah', 'Battery size you plan to use (Ah)', 150, 40, 400, 10, 'num')],
    compute(v) {
      const va = v.w / 0.8 * 1.2, ah = v.w * v.h / (+v.v * +v.dod * v.eff / 100), series = +v.v / 12, parallel = Math.ceil(ah / v.ah);
      return { primary: { label: 'Battery capacity needed', value: f2(Math.ceil(ah), 0) + ' Ah at ' + v.v + ' V' }, metrics: [{ label: 'Inverter size', value: f2(Math.ceil(va / 100) * 100, 0) + ' VA' }, { label: 'Energy stored needed', value: f2(v.w * v.h / 1000 / (+v.dod * v.eff / 100), 2) + ' kWh' }, { label: `${v.ah} Ah 12 V batteries`, value: f2(series * parallel, 0), tone: 'good' }, { label: 'Series × parallel', value: `${series} × ${parallel}` }] };
    },
  },
  {
    slug: 'water-tank-calculator', category: CAT, title: 'Water Tank Capacity Calculator',
    short: 'Calculate the capacity of a rectangular or cylindrical water tank in litres and the days of supply for your family.',
    tags: ['water tank', 'sump', 'capacity', 'litres', 'overhead tank'],
    intro: [
      'Tank capacity in litres is volume in cubic metres multiplied by 1,000. For a rectangular tank, volume is length × width × water depth; for a cylindrical tank, it is π × radius² × water depth. Water depth is a little less than the tank height because of freeboard.',
      'Enter the dimensions in feet and how many people use the water. The calculator shows capacity and the number of days it would last, using a planning figure of 135 litres per person per day for domestic use (adjust to your usage).',
    ],
    formula: 'Rectangular: V = L × W × D;  Cylindrical: V = π × (d/2)² × D;  Litres = m³ × 1,000',
    how: ['Use the internal dimensions of the tank, not the outside size.', 'Fill depth is usually 90–95 percent of the height to leave air space.', 'One cubic foot is about 28.3 litres.'],
    assumptions: ['135 litres per person per day is a commonly used planning value for domestic supply; actual use varies.', 'Fire-fighting and garden requirements are not included.'],
    faqs: [
      ['How big should my overhead tank be?', 'A common rule is to store about one day of water: for a family of five at 135 litres per person that is about 700 litres, so a 1,000-litre tank is typical.'],
      ['How do I convert cubic feet to litres?', 'Multiply by 28.317.'],
      ['Where should I place the tank?', 'Away from direct heat, with a cover, an overflow pipe, and access for cleaning at least twice a year.'],
    ],
    inputs: [SEL('shape', 'Tank shape', 'rect', [['rect', 'Rectangular'], ['cyl', 'Cylindrical']]), F('a', 'Length or diameter (ft)', 6, 0.5, 100, 0.1, 'num'), F('b', 'Width (ft) — rectangular only', 4, 0.5, 100, 0.1, 'num'), F('d', 'Water depth (ft)', 5, 0.5, 30, 0.1, 'num'), F('p', 'People using the water', 5, 1, 200, 1, 'num'), F('lpcd', 'Litres per person per day', 135, 40, 400, 5, 'num')],
    compute(v) {
      const m3 = (v.shape === 'rect' ? v.a * v.b * v.d : Math.PI * Math.pow(v.a / 2, 2) * v.d) * FT * FT * FT, litres = m3 * 1000, daily = v.p * v.lpcd;
      return { primary: { label: 'Tank capacity', value: f2(litres, 0) + ' litres' }, metrics: [{ label: 'Volume', value: f2(m3, 2) + ' m³' }, { label: 'Daily family use', value: f2(daily, 0) + ' litres' }, { label: 'Days of supply', value: f2(litres / daily, 1), tone: 'good' }] };
    },
  },
  {
    slug: 'rainwater-harvesting-calculator', category: CAT, title: 'Rainwater Harvesting Calculator',
    short: 'Estimate how many litres of rainwater your roof can collect each year from its area and local rainfall.',
    tags: ['rainwater', 'harvesting', 'roof', 'water'],
    intro: [
      'Rainwater collected from a roof is a free source of water and recharges groundwater. The yield is the roof area multiplied by annual rainfall and a runoff coefficient that accounts for losses: about 0.8 to 0.9 for concrete or sheet roofs and lower for tiled or green roofs.',
      'Enter the catchment area, the average annual rainfall for your town (from the India Meteorological Department) and the runoff coefficient. A first-flush loss accounts for the water you discard to wash the dirty roof at the start of rain.',
    ],
    formula: 'Harvestable water (litres) = Roof area (m²) × Rainfall (mm) × Runoff coefficient × (1 − first-flush loss)',
    how: ['1 mm of rain on 1 m² of roof gives 1 litre of water.', 'Rainfall is seasonal, so storage tanks capture only part of the yearly total; recharge pits take the rest.', 'Local authorities in many cities mandate rainwater harvesting for plots above a certain size.'],
    assumptions: ['Annual average rainfall; real years vary widely.', 'Runoff coefficient is a typical value for the roof type.'],
    faqs: [
      ['How much rainwater can a 1,000 sq ft roof collect?', 'With 800 mm of annual rainfall and a 0.85 coefficient, about 63,000 litres a year — roughly 63 cubic metres.'],
      ['What is first flush?', 'The first minutes of rain wash dust and debris off the roof. A first-flush diverter sends that water away so only cleaner water reaches the tank.'],
      ['Can I drink harvested rainwater?', 'Not without filtration and disinfection. Use it for gardening, washing and flushing, or treat it properly before drinking.'],
    ],
    inputs: [F('area', 'Roof catchment area (sq ft)', 1000, 50, 1e6, 50, 'num'), F('rain', 'Annual rainfall (mm)', 800, 100, 6000, 25, 'num'), SEL('c', 'Roof type', 0.85, [[0.9, 'Concrete / metal sheet (0.90)'], [0.85, 'Concrete, average (0.85)'], [0.75, 'Clay tiles (0.75)'], [0.4, 'Green roof (0.40)']]), F('ff', 'First-flush loss', 10, 0, 30, 1, 'pct')],
    compute(v) {
      const litres = v.area * M2_PER_SQFT * v.rain * +v.c * (1 - v.ff / 100);
      return { primary: { label: 'Water collected per year', value: f2(litres, 0) + ' litres' }, metrics: [{ label: 'In cubic metres', value: f2(litres / 1000, 1) }, { label: 'Average per day', value: f2(litres / 365, 0) + ' litres' }, { label: '10,000-litre tanker loads', value: f2(litres / 10000, 1), tone: 'good' }] };
    },
  },
];

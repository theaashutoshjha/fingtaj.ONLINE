import { f2, inr, F, SEL, M2_PER_SQFT } from './lib.js';

const CAT = 'tools';

const CONV = [
  ['ft-m', 'Feet → metres', 0.3048], ['m-ft', 'Metres → feet', 1 / 0.3048], ['in-mm', 'Inches → millimetres', 25.4], ['mm-in', 'Millimetres → inches', 1 / 25.4],
  ['sqft-sqm', 'Square feet → square metres', M2_PER_SQFT], ['sqm-sqft', 'Square metres → square feet', 1 / M2_PER_SQFT], ['sqyd-sqft', 'Square yards (gaj) → square feet', 9], ['acre-sqft', 'Acres → square feet', 43560],
  ['cuft-cum', 'Cubic feet → cubic metres', 0.0283168466], ['cum-cuft', 'Cubic metres → cubic feet', 35.3146667], ['cum-l', 'Cubic metres → litres', 1000], ['cuft-l', 'Cubic feet → litres', 28.3168466],
  ['kg-lb', 'Kilograms → pounds', 2.20462262], ['quintal-kg', 'Quintals → kilograms', 100], ['tonne-kg', 'Tonnes → kilograms', 1000], ['kg-quintal', 'Kilograms → quintals', 0.01], ['bag-kg', 'Cement bags (50 kg) → kilograms', 50], ['kgcm2-mpa', 'kg/cm² → MPa (N/mm²)', 0.0980665],
];

export default [
  {
    slug: 'unit-converter', category: CAT, title: 'Construction Unit Converter',
    short: 'Convert the units used on Indian building sites: feet, metres, inches, mm, sq ft, cubic feet, litres, quintals and more.',
    tags: ['unit', 'convert', 'feet', 'metre', 'cubic'],
    intro: [
      'Building work in India mixes feet and inches with metres and millimetres, square feet with square metres, and cubic feet with cubic metres. Drawings may be in metric while material is sold in imperial units. A quick, reliable converter avoids costly mistakes.',
      'Choose the conversion you need, enter the value, and read the result and the reverse conversion. Standard factors are used throughout.',
    ],
    formula: 'Result = Value × conversion factor',
    how: ['1 foot = 0.3048 m; 1 inch = 25.4 mm; 1 sq ft = 0.0929 sq m; 1 cubic foot = 28.317 litres.', '1 cubic metre = 35.315 cubic feet = 1,000 litres; 1 quintal = 100 kg; 1 tonne = 1,000 kg.', 'To change the unit pair, pick another conversion from the list.'],
    assumptions: ['Factors are exact international values; local trade units may differ slightly.'],
    faqs: [
      ['How many square feet are in a square metre?', 'One square metre is about 10.764 square feet.'],
      ['How many litres are in a cubic foot?', 'One cubic foot is about 28.317 litres.'],
      ['How do I convert feet and inches to metres?', 'Convert inches to feet (divide by 12), add to the feet, then multiply by 0.3048.'],
    ],
    inputs: [SEL('c', 'Conversion', 'ft-m', CONV.map(([k, l]) => [k, l])), F('v', 'Value', 100, 0, 1e12, 0.01, 'num')],
    compute(v) {
      const row = CONV.find((r) => r[0] === v.c), res = v.v * row[2];
      return { primary: { label: row[1], value: f2(res, 4) }, metrics: [{ label: 'Factor used', value: f2(row[2], 6) }, { label: 'Reverse (result back to start)', value: f2(res / row[2], 4) }] };
    },
  },
  {
    slug: 'ac-tonnage-calculator', category: CAT, title: 'AC Tonnage Calculator',
    short: 'Find the right air conditioner size in tons for a room based on area, sun exposure, occupants and heat-producing appliances.',
    tags: ['ac', 'tonnage', 'air conditioner', 'cooling'],
    intro: [
      'An air conditioner that is too small never cools the room; one that is too large switches off before it dries the air, leaving the room clammy and wasting electricity. Cooling load depends on room area, ceiling height, how much sun the room gets, how many people use it and what heat-producing equipment it holds.',
      'This calculator uses a rule-of-thumb cooling load in BTU per hour, then converts to tons of refrigeration (1 ton = 12,000 BTU/h). It gives a good starting point; an HVAC professional can refine it for unusual rooms.',
    ],
    formula: 'Load (BTU/h) = Area × factor × (height ÷ 10) + 600 per extra person + 3.4 × appliance watts;  Tons = Load ÷ 12,000',
    how: ['The area factor is about 90 BTU per sq ft for a shaded room, 100 for a normal room (roughly 1 ton per 120 sq ft) and 120 or more for a top-floor or heavily sun-exposed room in Indian summers.', 'People beyond the first two add about 600 BTU/h each; every watt of equipment adds about 3.4 BTU/h.', 'Choose the nearest standard size at or above the result: 1, 1.5, 2 tons.'],
    assumptions: ['Rule-of-thumb estimate for Indian conditions; it does not replace a professional load calculation.', 'Insulation, window glass and orientation change the result.'],
    faqs: [
      ['Which AC for a 150 sq ft room?', 'A normal room of 150 sq ft usually needs a 1.5-ton AC; a 1-ton unit may suffice only if the room is shaded and rarely occupied by more than two people.'],
      ['Is a 5-star inverter AC worth it?', 'Usually yes if you use the AC for several hours a day: lower running cost offsets the higher price within a few seasons.'],
      ['Does ceiling height matter?', 'Yes. A taller room holds more air; the calculator scales the load with height relative to 10 ft.'],
    ],
    inputs: [F('area', 'Room area (sq ft)', 150, 30, 2000, 5, 'num'), F('h', 'Ceiling height (ft)', 10, 7, 20, 0.5, 'num'), SEL('f', 'Sun exposure', 100, [[90, 'Shaded / low floor (90)'], [100, 'Normal (100)'], [120, 'Top floor or strong sun (120)']]), F('p', 'People regularly in the room', 2, 1, 20, 1, 'num'), F('w', 'Heat-producing equipment (watts)', 300, 0, 10000, 50, 'num')],
    compute(v) {
      const load = v.area * +v.f * (v.h / 10) + Math.max(0, v.p - 2) * 600 + v.w * 3.4, tons = load / 12000, std = [0.75, 1, 1.5, 2, 2.5, 3].find((t) => t >= tons - 0.05) || Math.ceil(tons * 2) / 2;
      return { primary: { label: 'Recommended AC size', value: std + ' ton' }, metrics: [{ label: 'Cooling load', value: f2(load, 0) + ' BTU/h' }, { label: 'Exact tonnage', value: f2(tons, 2) + ' ton' }, { label: 'Capacity in kW', value: f2(load * 0.000293071, 2) }], note: 'Rule-of-thumb estimate. For large or unusual rooms consult an HVAC professional.' };
    },
  },
  {
    slug: 'sloped-roof-area-calculator', category: CAT, title: 'Sloped Roof Area Calculator',
    short: 'Calculate the true area of a sloped roof from its plan area, slope and overhang, for sheets, tiles or waterproofing.',
    tags: ['roof', 'slope', 'sheet', 'tile', 'area'],
    intro: [
      'The surface of a sloped roof is larger than the floor area below it. The steeper the slope, the bigger the difference. Sheets, tiles and waterproofing are bought by the roof surface area, so measuring only the plan area will leave you short.',
      'Enter the plan dimensions, the slope (as an angle or rise per 12 inches of run), and the overhang you want on each side. The calculator returns the true roof surface area and the number of standard sheets or tiles you need.',
    ],
    formula: 'True roof area = Plan area (including overhang) ÷ cos(slope angle)',
    how: ['A slope of 3 in 12 is about 14°, 6 in 12 about 26.6° and 9 in 12 about 36.9°.', 'Overhang extends the roof beyond the walls on all sides, protecting walls from rain.', 'Add 8–10 percent for overlaps and cutting waste.'],
    assumptions: ['A simple two-way or single-plane slope; hip roofs with several planes need each plane measured separately.', 'Sheet and tile coverage values are entered by you.'],
    faqs: [
      ['What roof slope is best for rain?', 'Metal sheets work from about 10° upward; clay tile roofs generally need 20° to 30°. Heavy-rain regions use steeper slopes.'],
      ['How do I convert a pitch to degrees?', 'Take the rise per 12 inches of run and compute atan(rise ÷ 12). For example 6 in 12 is about 26.6°.'],
      ['Should I include the overhang?', 'Yes, because sheets and tiles cover the overhang too.'],
    ],
    inputs: [F('l', 'Building length (ft)', 40, 5, 1000, 0.5, 'num'), F('w', 'Building width (ft)', 25, 5, 1000, 0.5, 'num'), F('s', 'Roof slope (degrees)', 20, 0, 60, 0.5, 'num'), F('o', 'Overhang on each side (ft)', 1.5, 0, 6, 0.25, 'num'), F('cov', 'Coverage of one sheet / tile (sq ft)', 20, 0.5, 200, 0.5, 'num'), F('waste', 'Overlap and wastage', 10, 0, 25, 1, 'pct')],
    compute(v) {
      const plan = (v.l + 2 * v.o) * (v.w + 2 * v.o), area = plan / Math.cos(v.s * Math.PI / 180), buy = area * (1 + v.waste / 100);
      return { primary: { label: 'True roof area', value: f2(area, 0) + ' sq ft' }, metrics: [{ label: 'Plan area with overhang', value: f2(plan, 0) + ' sq ft' }, { label: 'Increase over plan area', value: f2((area / plan - 1) * 100, 1) + '%' }, { label: 'Area to buy (with wastage)', value: f2(buy, 0) + ' sq ft' }, { label: 'Sheets / tiles needed', value: f2(Math.ceil(buy / v.cov), 0), tone: 'good' }] };
    },
  },
];

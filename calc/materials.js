import { f2, inr, F, SEL, FT, INCH, CEMENT_BAG_M3, CUFT_PER_M3, M2_PER_SQFT } from './lib.js';

const CAT = 'materials';
const BAG_KG = 50;

// size (m) of one unit including its mortar joint (nominal) and without (actual)
const BRICKS = {
  modular: { label: 'Modular brick 190 × 90 × 90 mm', nominal: 0.2 * 0.1 * 0.1, actual: 0.19 * 0.09 * 0.09 },
  traditional: { label: 'Traditional brick 9 × 4.5 × 3 in', nominal: 0.2386 * 0.1243 * 0.0862, actual: 0.2286 * 0.1143 * 0.0762 },
  aac: { label: 'AAC block 600 × 200 × 200 mm (thin joint)', nominal: 0.6 * 0.2 * 0.2, actual: 0.595 * 0.195 * 0.195 },
};
const MIXES = { M7_5: ['M7.5 (1 : 4 : 8)', 1, 4, 8], M10: ['M10 (1 : 3 : 6)', 1, 3, 6], M15: ['M15 (1 : 2 : 4)', 1, 2, 4], M20: ['M20 (1 : 1.5 : 3)', 1, 1.5, 3], M25: ['M25 (1 : 1 : 2)', 1, 1, 2] };
const mixOptions = Object.entries(MIXES).map(([k, v]) => [k, v[0]]);

export default [
  {
    slug: 'brick-quantity-calculator', category: CAT, title: 'Brick Quantity Calculator',
    short: 'Estimate the number of bricks or AAC blocks, cement bags and sand needed for a wall of any size.',
    tags: ['brick', 'wall', 'masonry', 'aac', 'mortar', 'cement', 'sand'],
    intro: [
      'The number of bricks in a wall depends on its volume, the size of the brick including the mortar joint, and how much of the wall is taken up by doors and windows. This calculator works that out for modular bricks, traditional bricks and AAC blocks, and adds the cement and sand needed for the mortar.',
      'Enter the total length and height of the wall, its thickness and the area of openings. A wastage allowance of around 5 percent covers breakage and cutting; increase it for poor-quality bricks or complex layouts.',
    ],
    formula: 'Bricks = Wall volume (net of openings) ÷ Volume of one brick with mortar; Mortar = Wall volume − Bricks × actual brick volume',
    how: ['Wall volume is length × height × thickness minus the volume of doors and windows.', 'Dry mortar volume is the wet mortar volume × 1.33 (the extra accounts for voids that fill with water when mixed).', 'Cement is one part and sand is the remaining parts of the chosen ratio; one 50 kg bag of cement is about 0.0347 m³.'],
    assumptions: ['Standard 10 mm mortar joints for clay bricks. AAC blocks assume a thin adhesive joint — follow the manufacturer’s mix and quantity for adhesive.', 'Quantities are estimates for budgeting; order a small buffer and confirm actual brick dimensions from your supplier.'],
    faqs: [
      ['How many bricks are needed per square foot of wall?', 'For a 9-inch wall with modular bricks it is roughly 10 to 11 bricks per sq ft of wall face, and for a 4.5-inch partition about 5 to 5.5. Larger traditional bricks need fewer. Use the calculator for your exact size because brick dimensions vary by region.'],
      ['Which mortar ratio should I use?', 'A 1:6 cement-sand mortar is common for ordinary brickwork; 1:4 is used where higher strength is needed such as load-bearing walls and foundation masonry. Follow your engineer’s specification.'],
      ['Should I add wastage?', 'Yes, 5 percent is typical. Add more if you are using fly-ash bricks that crack easily or cutting many bricks for openings.'],
    ],
    inputs: [F('len', 'Total wall length (ft)', 100, 1, 100000, 1, 'num'), F('ht', 'Wall height (ft)', 10, 1, 100, 0.5, 'num'), F('th', 'Wall thickness (inches)', 9, 2, 24, 0.5, 'num', '4.5 or 9 for bricks; 4, 6 or 8 for AAC blocks.'), F('open', 'Doors and windows (sq ft)', 60, 0, 100000, 5, 'num'), SEL('type', 'Brick / block type', 'modular', Object.entries(BRICKS).map(([k, b]) => [k, b.label])), SEL('ratio', 'Mortar ratio (cement : sand)', 6, [[4, '1 : 4'], [5, '1 : 5'], [6, '1 : 6']]), F('waste', 'Wastage', 5, 0, 20, 1, 'pct')],
    compute(v) {
      const b = BRICKS[v.type], area = Math.max(0, v.len * v.ht - v.open) * FT * FT, vol = area * v.th * INCH;
      const nBricks = vol / b.nominal, mortarWet = Math.max(0, vol - nBricks * b.actual), dry = mortarWet * 1.33, r = +v.ratio;
      const cementM3 = dry / (1 + r), bags = cementM3 / CEMENT_BAG_M3, sandM3 = dry * r / (1 + r);
      const total = Math.ceil(nBricks * (1 + v.waste / 100));
      return {
        primary: { label: 'Bricks / blocks needed (with wastage)', value: f2(total, 0) },
        metrics: [{ label: 'Net wall volume', value: f2(vol, 2) + ' m³' }, { label: 'Wall area (net)', value: f2(area / (FT * FT), 0) + ' sq ft' }, { label: 'Cement (50 kg bags)', value: f2(Math.ceil(bags), 0) }, { label: 'Sand', value: f2(sandM3 * CUFT_PER_M3, 0) + ' cu ft', tone: '' }, { label: 'Sand (approx. weight)', value: f2(sandM3 * 1.6, 2) + ' tonnes' }, { label: 'Wet mortar volume', value: f2(mortarWet, 2) + ' m³' }],
        note: 'Typical planning estimate. Final quantities depend on actual brick size, joint thickness and site wastage.',
      };
    },
  },
  {
    slug: 'plaster-calculator', category: CAT, title: 'Plaster Calculator (Cement & Sand)',
    short: 'Calculate cement bags and sand for internal or external plastering from the wall area and plaster thickness.',
    tags: ['plaster', 'cement', 'sand', 'wall'],
    intro: [
      'Plastering uses a mix of cement and sand applied over masonry. Quantity depends on the area, how thick the plaster is, and the cement-sand ratio. Internal walls are usually plastered 12 mm thick in a 1:5 or 1:6 mix, and external walls 15–20 mm thick in a stronger 1:4 mix.',
      'Enter the total wall area in square feet and the thickness. The calculator gives cement bags and sand including a wastage allowance for rebound and uneven surfaces.',
    ],
    formula: 'Wet volume = Area × Thickness; Dry volume = Wet volume × 1.27 (+ wastage); Cement = Dry volume ÷ (1 + sand parts)',
    how: ['Wall area is converted to m² and multiplied by thickness in metres.', 'A dry-volume factor of about 1.27 accounts for shrinkage when cement and sand are mixed with water.', 'Bags are rounded up to whole 50 kg bags.'],
    assumptions: ['Uniform thickness; real walls are uneven so plaster usage is often 10–20 percent higher than theory.', 'Waterproofing admixtures and primers are extra.'],
    faqs: [
      ['How thick should plaster be?', 'Internal plaster is typically 12 mm and external plaster 15 to 20 mm. Ceiling plaster is usually 6 to 10 mm. Thicker coats should be applied in layers.'],
      ['What is the best cement-sand ratio for plastering?', 'External walls generally use 1:4, internal walls 1:5 or 1:6. A richer mix is stronger but cracks more if applied too thick or cured badly.'],
      ['How many bags of cement for 1,000 sq ft of plaster?', 'Roughly 7 to 10 bags for 12 mm of plaster in a 1:5 mix, including wastage; use the calculator for your own numbers.'],
    ],
    inputs: [F('area', 'Plaster area (sq ft)', 1000, 10, 1e7, 10, 'num'), F('t', 'Thickness (mm)', 12, 6, 40, 1, 'num'), SEL('ratio', 'Mix (cement : sand)', 5, [[3, '1 : 3'], [4, '1 : 4'], [5, '1 : 5'], [6, '1 : 6']]), F('waste', 'Wastage', 10, 0, 30, 1, 'pct')],
    compute(v) {
      const wet = v.area * M2_PER_SQFT * v.t / 1000, dry = wet * 1.27 * (1 + v.waste / 100), r = +v.ratio;
      const cem = dry / (1 + r), bags = Math.ceil(cem / CEMENT_BAG_M3), sand = dry * r / (1 + r);
      return { primary: { label: 'Cement needed', value: f2(bags, 0) + ' bags (50 kg)' }, metrics: [{ label: 'Sand', value: f2(sand * CUFT_PER_M3, 0) + ' cu ft' }, { label: 'Sand (approx. weight)', value: f2(sand * 1.6, 2) + ' tonnes' }, { label: 'Wet plaster volume', value: f2(wet, 2) + ' m³' }, { label: 'Dry volume incl. wastage', value: f2(dry, 2) + ' m³' }] };
    },
  },
  {
    slug: 'concrete-calculator', category: CAT, title: 'Concrete Quantity Calculator (Cement, Sand, Aggregate)',
    short: 'Estimate concrete volume and the cement bags, sand and aggregate for slabs, footings, beams and columns.',
    tags: ['concrete', 'slab', 'footing', 'column', 'beam', 'cement', 'sand', 'aggregate', 'rcc'],
    intro: [
      'Concrete is a mix of cement, sand and coarse aggregate. For small jobs, a nominal mix by volume (such as M20 = 1 : 1.5 : 3) is used; for larger structural work, engineers specify a design mix. This calculator estimates volume for rectangular members (slabs, footings, plinth beams, rectangular columns) and circular columns, then converts it to materials.',
      'Enter dimensions of one member and how many identical members you have. You can add circular columns in the second group. The wastage allowance covers spillage and over-pouring.',
    ],
    formula: 'Wet volume = L × W × T × nos (+ π/4 × D² × L × nos); Dry volume = Wet × 1.54; each material = Dry volume × its part ÷ sum of parts',
    how: ['The dry volume is about 1.54 times the wet volume because the loose materials compress when mixed and compacted.', 'One 50 kg bag of cement is about 0.0347 m³. Sand and aggregate are shown in cubic feet and approximate tonnes.', 'Nominal mixes above M20 are not recommended by the Indian standard for reinforced concrete; use a design mix for M25 and higher.'],
    assumptions: ['Reinforcement volume is not subtracted (conservative). Steel adds about 1–3 percent of the concrete volume.', 'Ready-mix concrete is ordered by cubic metre — add 3–5 percent for site loss.'],
    faqs: [
      ['What concrete grade should I use for a residential slab?', 'M20 is the minimum for reinforced concrete under IS 456, and M25 is common for slabs and beams. Your structural engineer’s drawing decides it.'],
      ['How much cement is in one cubic metre of M20 concrete?', 'Roughly 8 to 8.5 bags (about 400 kg) of cement per cubic metre for a 1:1.5:3 nominal mix.'],
      ['Is site mixing or ready-mix better?', 'Ready-mix gives more consistent quality for slabs and large pours. Site mixing is fine for small, non-structural jobs if proportions are measured by volume and the mix is cured properly.'],
    ],
    inputs: [F('l', 'Rectangular member — length (ft)', 20, 0, 10000, 0.5, 'num'), F('w', 'Rectangular member — width (ft)', 15, 0, 10000, 0.5, 'num'), F('t', 'Thickness / depth (inches)', 5, 0, 120, 0.5, 'num'), F('n', 'Number of such members', 1, 0, 1000, 1, 'num'), F('d', 'Circular column — diameter (inches)', 0, 0, 120, 1, 'num'), F('cl', 'Circular column — length (ft)', 0, 0, 200, 0.5, 'num'), F('cn', 'Number of circular columns', 0, 0, 1000, 1, 'num'), SEL('grade', 'Concrete mix', 'M20', mixOptions), F('waste', 'Wastage', 5, 0, 20, 1, 'pct')],
    compute(v) {
      const rect = v.l * FT * v.w * FT * v.t * INCH * v.n, circ = Math.PI / 4 * Math.pow(v.d * INCH, 2) * v.cl * FT * v.cn, wet = (rect + circ) * (1 + v.waste / 100);
      const [, c, s, a] = MIXES[v.grade], sum = c + s + a, dry = wet * 1.54, cem = dry * c / sum, bags = Math.ceil(cem / CEMENT_BAG_M3), sand = dry * s / sum, agg = dry * a / sum;
      return {
        primary: { label: 'Concrete volume (with wastage)', value: f2(wet, 2) + ' m³' },
        metrics: [{ label: 'In cubic feet', value: f2(wet * CUFT_PER_M3, 1) }, { label: 'Cement (50 kg bags)', value: f2(bags, 0), tone: 'good' }, { label: 'Sand', value: f2(sand * CUFT_PER_M3, 0) + ' cu ft' }, { label: 'Sand (approx. weight)', value: f2(sand * 1.6, 2) + ' tonnes' }, { label: 'Aggregate', value: f2(agg * CUFT_PER_M3, 0) + ' cu ft' }, { label: 'Aggregate (approx. weight)', value: f2(agg * 1.5, 2) + ' tonnes' }],
        chart: [{ label: 'Cement', value: cem, color: '#6b7280', display: f2(cem * CUFT_PER_M3, 0) + ' cu ft' }, { label: 'Sand', value: sand, color: '#c8922b', display: f2(sand * CUFT_PER_M3, 0) + ' cu ft' }, { label: 'Aggregate', value: agg, color: '#2f6b57', display: f2(agg * CUFT_PER_M3, 0) + ' cu ft' }],
        note: 'Nominal mix estimate. For structural work follow the mix design and quantities specified by your structural engineer.',
      };
    },
  },
  {
    slug: 'steel-weight-calculator', category: CAT, title: 'TMT Steel Weight Calculator',
    short: 'Calculate the weight of TMT / rebar steel bars from diameter and length using the standard d²/162 formula.',
    tags: ['steel', 'tmt', 'rebar', 'weight', 'bar'],
    intro: [
      'Steel bars are bought by weight but specified by diameter and length, so converting between them is a daily task on site. The standard formula used in India for the weight of a plain or ribbed round bar is d² ÷ 162 kilograms per metre, where d is the nominal diameter in millimetres.',
      'Enter the bar diameter, the length of each bar and the number of bars to get total weight, the number of standard 12 m lengths, and an optional cost at your current rate per kg.',
    ],
    formula: 'Weight per metre (kg/m) = d² ÷ 162;  Total weight = kg/m × length × number of bars',
    how: ['The 162 constant comes from steel density (about 7,850 kg/m³): π/4 × d² × 7,850 ÷ 10⁶ ≈ d² ÷ 162.', 'TMT bars are usually sold in 12 m lengths, so the calculator shows how many full lengths you need.', 'Add lap length and cutting wastage (commonly 3–5 percent) to the cutting list before ordering.'],
    assumptions: ['Nominal diameter is used; actual weight of a bar may differ by a small permitted tolerance under IS 1786.', 'Price is whatever per-kg rate you enter; steel prices change often.'],
    faqs: [
      ['What is the weight of a 12 mm bar per metre?', '12² ÷ 162 = 0.889 kg per metre, so a 12 m bar weighs about 10.7 kg.'],
      ['Which grade of TMT should I use?', 'Fe500 and Fe500D are widely used for residential work. Fe500D has better ductility and is preferred in earthquake-prone areas. Your structural drawings specify the grade.'],
      ['How much steel does a house need?', 'Thumb rules range from about 3 to 4.5 kg per sq ft of built-up area, depending on spans, floors and soil. A structural design gives the real figure.'],
    ],
    inputs: [SEL('d', 'Bar diameter', 12, [[6, '6 mm'], [8, '8 mm'], [10, '10 mm'], [12, '12 mm'], [16, '16 mm'], [20, '20 mm'], [25, '25 mm'], [32, '32 mm']]), F('len', 'Length of each bar (m)', 12, 0.1, 100, 0.1, 'num'), F('n', 'Number of bars', 100, 1, 100000, 1, 'num'), F('rate', 'Price per kg (optional)', 65, 0, 1000, 0.5, 'money')],
    compute(v) {
      const d = +v.d, kgm = d * d / 162, total = kgm * v.len * v.n;
      return { primary: { label: 'Total weight', value: f2(total, 1) + ' kg' }, metrics: [{ label: 'Weight per metre', value: f2(kgm, 3) + ' kg/m' }, { label: 'Weight in tonnes', value: f2(total / 1000, 3) }, { label: 'Total length', value: f2(v.len * v.n, 1) + ' m' }, { label: 'Standard 12 m bars', value: f2(Math.ceil(v.len * v.n / 12), 0) }, { label: 'Estimated cost', value: inr(total * v.rate), tone: 'good' }] };
    },
  },
  {
    slug: 'tile-flooring-calculator', category: CAT, title: 'Tile & Flooring Calculator',
    short: 'Find how many tiles and boxes you need for a room, including wastage, for any tile size.',
    tags: ['tile', 'flooring', 'floor', 'room'],
    intro: [
      'The number of tiles for a floor is the floor area divided by the area of one tile, plus wastage for cutting and breakage. Diagonal layouts, large-format tiles and patterned designs waste more than a straight layout.',
      'Enter the room size, pick a tile size and the wastage, and you get the count, the number of boxes and the area to buy. Enter a price per square foot to see the material cost.',
    ],
    formula: 'Tiles = (Floor area ÷ Tile area) × (1 + wastage %)',
    how: ['Tile size is the actual face size in millimetres; the grout line is ignored for small joints.', 'Boxes are rounded up because tiles are sold in full boxes.', 'Keep a few spare tiles from the same batch for future repairs, since shades vary between batches.'],
    assumptions: ['One rectangular room; for several rooms add their areas.', 'Skirting is not included — add its length × height separately.'],
    faqs: [
      ['How much wastage should I allow?', 'About 5 to 7 percent for straight layouts, 10 to 15 percent for diagonal or patterned layouts and for large-format tiles.'],
      ['What size tile is best for a living room?', 'Larger tiles such as 600 × 600 mm or 800 × 800 mm make rooms look bigger with fewer grout lines; very large tiles need a flatter substrate and careful installation.'],
      ['Do I include the area under furniture?', 'Yes for fixed items you will move; skip only built-in units like wardrobes if they sit on the finished floor.'],
    ],
    inputs: [F('l', 'Room length (ft)', 14, 1, 1000, 0.5, 'num'), F('w', 'Room width (ft)', 12, 1, 1000, 0.5, 'num'), SEL('size', 'Tile size', '600x600', [['300x300', '300 × 300 mm (1 × 1 ft)'], ['600x600', '600 × 600 mm (2 × 2 ft)'], ['600x1200', '600 × 1200 mm (2 × 4 ft)'], ['800x800', '800 × 800 mm'], ['800x1600', '800 × 1600 mm'], ['300x600', '300 × 600 mm']]), F('waste', 'Wastage', 8, 0, 25, 1, 'pct'), F('perbox', 'Tiles per box', 4, 1, 100, 1, 'num'), F('price', 'Price per sq ft (optional)', 60, 0, 10000, 1)],
    compute(v) {
      const [tw, th] = v.size.split('x').map(Number), tileSqft = (tw / 1000) * (th / 1000) / M2_PER_SQFT, area = v.l * v.w, need = Math.ceil(area / tileSqft * (1 + v.waste / 100)), boxes = Math.ceil(need / v.perbox);
      return { primary: { label: 'Tiles needed', value: f2(need, 0) }, metrics: [{ label: 'Boxes to buy', value: f2(boxes, 0) }, { label: 'Floor area', value: f2(area, 0) + ' sq ft' }, { label: 'Area of tiles bought', value: f2(boxes * v.perbox * tileSqft, 0) + ' sq ft' }, { label: 'Estimated material cost', value: inr(boxes * v.perbox * tileSqft * v.price), tone: 'good' }] };
    },
  },
  {
    slug: 'paint-quantity-calculator', category: CAT, title: 'Paint Quantity Calculator',
    short: 'Estimate litres of paint and primer for the walls and ceiling of a room, with doors, windows and number of coats.',
    tags: ['paint', 'wall', 'primer', 'ceiling'],
    intro: [
      'Paint quantity depends on the area you are covering, the number of coats and the coverage of the paint. Ceiling and wall area, minus doors and windows, gives the paintable area; two coats of emulsion over one coat of primer is the standard specification for new walls.',
      'Coverage figures on tins are measured on smooth, well-prepared surfaces. Rough or highly absorbent walls need more paint, so the default coverage here is intentionally conservative.',
    ],
    formula: 'Wall area = 2(L + W) × H − openings; Paint = Area × coats ÷ coverage per litre',
    how: ['Door and window sizes are taken as standard 21 sq ft and 12 sq ft; edit the count to match.', 'Primer is calculated separately at its own coverage.', 'Round up to the next tin size and buy a little extra for touch-ups.'],
    assumptions: ['Coverage defaults: emulsion about 110 sq ft per litre per coat, primer about 120 sq ft per litre. Check your product’s data sheet.', 'Trims, grills and textured finishes use more paint.'],
    faqs: [
      ['How many coats of paint do I need?', 'Two coats of emulsion over one coat of primer give even colour on new or repaired walls. Repainting a similar colour can need only one or two coats.'],
      ['Is putty included?', 'No. Wall putty is a separate step (usually two coats) and is estimated by area; ask the contractor for brand coverage.'],
      ['How much paint for a 2BHK?', 'For a 1,000 sq ft carpet-area flat, 40 to 60 litres of emulsion for two coats is a typical range, depending on ceilings and wall heights.'],
    ],
    inputs: [F('l', 'Room length (ft)', 14, 1, 1000, 0.5, 'num'), F('w', 'Room width (ft)', 12, 1, 1000, 0.5, 'num'), F('h', 'Room height (ft)', 10, 6, 30, 0.5, 'num'), F('doors', 'Number of doors', 1, 0, 50, 1, 'num'), F('wins', 'Number of windows', 2, 0, 50, 1, 'num'), SEL('ceil', 'Paint the ceiling?', 1, [[1, 'Yes'], [0, 'No']]), F('coats', 'Coats of paint', 2, 1, 4, 1, 'num'), F('cov', 'Paint coverage (sq ft per litre per coat)', 110, 40, 250, 5, 'num'), F('pcov', 'Primer coverage (sq ft per litre)', 120, 40, 250, 5, 'num'), F('price', 'Paint price per litre (optional)', 400, 0, 5000, 10)],
    compute(v) {
      const walls = Math.max(0, 2 * (v.l + v.w) * v.h - v.doors * 21 - v.wins * 12), ceil = +v.ceil ? v.l * v.w : 0, area = walls + ceil;
      const paint = area * v.coats / v.cov, primer = area / v.pcov;
      return { primary: { label: 'Paint needed', value: f2(Math.ceil(paint * 10) / 10, 1) + ' litres' }, metrics: [{ label: 'Paintable area', value: f2(area, 0) + ' sq ft' }, { label: 'Walls', value: f2(walls, 0) + ' sq ft' }, { label: 'Ceiling', value: f2(ceil, 0) + ' sq ft' }, { label: 'Primer needed', value: f2(Math.ceil(primer * 10) / 10, 1) + ' litres' }, { label: 'Estimated paint cost', value: inr(paint * v.price), tone: 'good' }] };
    },
  },
  {
    slug: 'excavation-calculator', category: CAT, title: 'Excavation & Earthwork Calculator',
    short: 'Calculate excavation volume, loose soil volume after swell and the number of truck loads for foundations or pits.',
    tags: ['excavation', 'earthwork', 'foundation', 'soil', 'pit'],
    intro: [
      'Excavation is the first big cost on a building site, and it is charged by volume. Soil also expands when dug (swell), so the volume you must carry away is larger than the hole you dig.',
      'Enter the length, width and depth of the excavation. The calculator gives the bank volume, the loose volume after swell and the truck trips needed, which is what contractors actually quote against.',
    ],
    formula: 'Bank volume = L × W × D;  Loose volume = Bank volume × (1 + swell %);  Truck loads = Loose volume ÷ truck capacity',
    how: ['Bank volume is the soil in its natural, undisturbed state.', 'Swell is the percentage increase in volume after soil is excavated — about 20 to 30 percent for common soil.', 'For irregular pits, split the area into rectangles and add the volumes.'],
    assumptions: ['Vertical sides. Deep or loose-soil excavations need slopes or shoring, which increases volume.', 'Truck capacity is the usable loaded volume; check with your transporter.'],
    faqs: [
      ['What is swell factor?', 'It is the increase in volume when soil is dug up and loosened. Clay and wet soil swell more; sand swells less. A typical planning value is 25 percent.'],
      ['How deep should a house foundation be?', 'It depends on soil bearing capacity, water table and the structure. Shallow isolated footings are often 4 to 6 ft below ground for small houses, but only a soil test and a structural engineer can set it.'],
      ['Who pays for disposal of excavated soil?', 'Check your contract; many contractors quote “excavation and disposal” separately from “excavation and stacking at site”.'],
    ],
    inputs: [F('l', 'Length (ft)', 40, 1, 10000, 0.5, 'num'), F('w', 'Width (ft)', 30, 1, 10000, 0.5, 'num'), F('d', 'Depth (ft)', 5, 0.5, 100, 0.5, 'num'), F('swell', 'Swell factor', 25, 0, 60, 1, 'pct'), F('truck', 'Truck capacity (m³)', 6, 1, 30, 0.5, 'num'), F('rate', 'Excavation rate per m³ (optional)', 250, 0, 10000, 5)],
    compute(v) {
      const bank = v.l * FT * v.w * FT * v.d * FT, loose = bank * (1 + v.swell / 100);
      return { primary: { label: 'Excavation volume (bank)', value: f2(bank, 1) + ' m³' }, metrics: [{ label: 'In cubic feet', value: f2(bank * CUFT_PER_M3, 0) }, { label: 'Loose volume after swell', value: f2(loose, 1) + ' m³' }, { label: 'Truck loads', value: f2(Math.ceil(loose / v.truck), 0), tone: 'warn' }, { label: 'Estimated excavation cost', value: inr(bank * v.rate), tone: 'good' }] };
    },
  },
  {
    slug: 'staircase-calculator', category: CAT, title: 'Staircase Calculator (Riser & Tread)',
    short: 'Design a comfortable staircase: number of steps, riser height, tread depth and total run from the floor-to-floor height.',
    tags: ['staircase', 'stairs', 'riser', 'tread'],
    intro: [
      'A comfortable staircase has a riser (step height) of about 150–180 mm and a tread (step depth) of about 250–300 mm. If steps are too steep or too shallow, they tire people and increase the risk of falls, especially for children and older family members.',
      'Enter the floor-to-floor height and your preferred riser and tread. The calculator finds the number of risers, adjusts the riser so all steps are exactly equal and checks the comfort rule 2R + T.',
    ],
    formula: 'Risers = round(Height ÷ target riser);  Actual riser = Height ÷ Risers;  Treads = Risers − 1;  Comfort check: 2R + T ≈ 550–700 mm',
    how: ['All risers in a flight must be exactly equal; small differences are a trip hazard.', 'The total horizontal run equals the number of treads multiplied by the tread depth.', 'The Indian National Building Code limits residential risers to 190 mm and requires treads of at least 250 mm; check current local bye-laws.'],
    assumptions: ['A straight flight is assumed; landings and turns add extra run.', 'Headroom of at least 2.1 m above the steps must also be provided.'],
    faqs: [
      ['What is the ideal riser height?', 'Between 150 and 175 mm is comfortable for most homes; 190 mm is generally the maximum permitted for residential stairs.'],
      ['How much floor space does a staircase need?', 'The total run shown by the calculator plus any landing. A 3 m floor height with 165 mm risers needs about 18 steps and a run near 4.5 m.'],
      ['What is the 2R + T rule?', 'Twice the riser plus the tread should be roughly 600 to 650 mm for a natural walking stride.'],
    ],
    inputs: [F('h', 'Floor-to-floor height (mm)', 3000, 1500, 6000, 10, 'num'), F('r', 'Target riser height (mm)', 165, 120, 200, 1, 'num'), F('t', 'Tread depth (mm)', 270, 200, 400, 5, 'num'), F('wd', 'Stair width (mm)', 1000, 600, 2500, 50, 'num')],
    compute(v) {
      const n = Math.max(2, Math.round(v.h / v.r)), riser = v.h / n, treads = n - 1, run = treads * v.t, rule = 2 * riser + v.t, ang = Math.atan(riser / v.t) * 180 / Math.PI;
      const ok = rule >= 550 && rule <= 700 && riser <= 190 && v.t >= 250;
      return { primary: { label: 'Number of risers', value: String(n) }, metrics: [{ label: 'Actual riser height', value: f2(riser, 1) + ' mm' }, { label: 'Number of treads', value: String(treads) }, { label: 'Total horizontal run', value: f2(run / 1000, 2) + ' m' }, { label: '2R + T', value: f2(rule, 0) + ' mm', tone: ok ? 'good' : 'warn' }, { label: 'Slope angle', value: f2(ang, 1) + '°' }], note: ok ? 'This arrangement meets the usual comfort and code limits for a residential staircase.' : 'Check: the riser should be 190 mm or less, the tread at least 250 mm and 2R + T between about 550 and 700 mm.' };
    },
  },
];

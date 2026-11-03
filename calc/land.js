import { f2, inr, heron, F, SEL, AREA_UNITS, SQFT_PER_M2 } from './lib.js';

const CAT = 'land';

const unitSqft = (id, bigha, katha) => {
  if (id === 'bigha') return bigha;
  if (id === 'biswa') return bigha / 20;
  if (id === 'katha') return katha;
  return AREA_UNITS.find((u) => u[0] === id)[2];
};
const unitOptions = AREA_UNITS.map(([id, label]) => [id, label]);

export default [
  {
    slug: 'land-area-converter', category: CAT, title: 'Land Area Converter',
    short: 'Convert land area between sq ft, gaj, sq m, acre, hectare, guntha, cent, kanal, marla, bigha and katha.',
    tags: ['land', 'area', 'bigha', 'guntha', 'cent', 'acre', 'unit'],
    intro: [
      'India uses a mix of metric, imperial and traditional land units, and the traditional ones change from state to state. A plot advertised in cents in Kerala, gunthas in Maharashtra, kanal and marla in Punjab or bigha in the north can all be converted here to square feet, square metres, acres or any other unit.',
      'The fixed units (acre, hectare, guntha, cent, kanal, marla, ground) use their standard values. Bigha and katha are different in almost every state and sometimes between districts, so you enter the size used in your local revenue records. Always confirm the unit in the sale deed or land record before you pay for land.',
    ],
    formula: 'Area in sq ft = value × (sq ft per unit); every other unit = sq ft ÷ (sq ft per target unit)',
    how: ['1 acre = 43,560 sq ft = 4,840 sq yd = 40 guntha; 1 hectare = 2.471 acres = 10,000 sq m.', '1 guntha = 1,089 sq ft; 1 cent = 435.6 sq ft; 1 kanal = 20 marla = 5,445 sq ft; 1 ground = 2,400 sq ft; 1 gaj = 1 sq yard = 9 sq ft.', 'Bigha, biswa and katha are customary units. Enter the sq ft value that applies in your state or district.'],
    assumptions: ['Bigha default of 27,000 sq ft and katha default of 720 sq ft are only commonly quoted figures — they are not universal. Replace them with the value in your land records.', 'Conversions describe area only; the legally recorded area in the registered document governs a transaction.'],
    faqs: [
      ['How many square feet are in one bigha?', 'It depends on the state and sometimes the district, ranging from roughly 14,000 to over 27,000 sq ft. There is no single national value, so use the figure from your local revenue department.'],
      ['How many gaj are in an acre?', 'One acre is 4,840 square yards, which is 4,840 gaj, because one gaj equals one square yard.'],
      ['Which unit should I trust in a sale deed?', 'Trust the area written in the registered deed and the land record (for example 7/12 extract, khasra or patta), and ask for the local unit to be converted into square feet or square metres in writing.'],
    ],
    inputs: [F('v', 'Area', 10, 0, 1e9, 0.01, 'num'), SEL('u', 'Convert from', 'guntha', unitOptions), F('bigha', 'Local bigha size (sq ft)', 27000, 1000, 100000, 100, 'num', 'Check your state record; sizes differ widely.'), F('katha', 'Local katha size (sq ft)', 720, 100, 10000, 10, 'num', 'Differs between states, commonly around 720 sq ft in parts of eastern India.')],
    compute(v) {
      const sqft = v.v * unitSqft(v.u, v.bigha, v.katha);
      const rows = AREA_UNITS.map(([id, label]) => [label, f2(sqft / unitSqft(id, v.bigha, v.katha), 4)]);
      const pick = (id) => f2(sqft / unitSqft(id, v.bigha, v.katha), 3);
      return {
        primary: { label: 'Area in square feet', value: f2(sqft, 2) + ' sq ft' },
        metrics: [{ label: 'Square metres', value: pick('sqm') }, { label: 'Gaj (sq yd)', value: pick('sqyd') }, { label: 'Acres', value: pick('acre') }, { label: 'Hectares', value: pick('hectare') }, { label: 'Guntha', value: pick('guntha') }, { label: 'Cent', value: pick('cent') }],
        table: { title: 'All units', open: true, headers: ['Unit', 'Value'], rows },
      };
    },
  },
  {
    slug: 'plot-area-calculator', category: CAT, title: 'Plot Area Calculator',
    short: 'Find the area of a rectangular, triangular, trapezoid or four-sided irregular plot from its side lengths.',
    tags: ['plot', 'area', 'irregular', 'measure'],
    intro: [
      'Most plots are not perfect rectangles. This calculator handles the four shapes you meet most often: rectangle, triangle (from three sides), trapezoid (two parallel sides and the distance between them) and an irregular four-sided plot, which is split into two triangles along a measured diagonal.',
      'Enter dimensions in feet or metres, pick the shape and read the area in square feet, square metres, gaj, guntha, cent and acres. For plots with more than four sides, measure from one corner to every other corner and split the plot into triangles, as explained in our guide to measuring an irregular plot.',
    ],
    formula: 'Rectangle = A × B; Triangle = √[s(s−a)(s−b)(s−c)]; Trapezoid = ½ (A + B) × H; Quadrilateral = triangle(A, B, diagonal) + triangle(C, D, diagonal)',
    how: ['For the four-sided shape, sides A and B must meet at one corner, sides C and D at the opposite corner, and the diagonal E joins the two corners where the pairs meet.', 'Triangles use Heron’s formula, which needs only the three side lengths.', 'If the dimensions cannot form a real triangle, the calculator tells you to re-check the measurements.'],
    assumptions: ['Sides are straight lines and the ground is level; slopes make the true surface larger than the plan area.', 'Legal area comes from a licensed survey, not a tape measurement.'],
    faqs: [
      ['How do I measure an irregular plot?', 'Measure the boundary sides and one or more diagonals so the plot can be divided into triangles, then add the triangle areas. Use a long tape, keep it taut and level, and measure twice.'],
      ['Do I enter feet or metres?', 'Either. Choose the unit that matches your tape; results are shown in all common units.'],
      ['Why does it say the dimensions are invalid?', 'In a triangle, each side must be shorter than the sum of the other two. If not, one of the measurements is wrong.'],
    ],
    inputs: [SEL('shape', 'Plot shape', 'rect', [['rect', 'Rectangle (A × B)'], ['tri', 'Triangle (sides A, B, C)'], ['trap', 'Trapezoid (parallel sides A, B; height C)'], ['quad', 'Four-sided (A, B, C, D and diagonal E)']]), SEL('unit', 'Measured in', 'ft', [['ft', 'Feet'], ['m', 'Metres']]), F('a', 'Side A', 40, 0, 100000, 0.1, 'num'), F('b', 'Side B', 60, 0, 100000, 0.1, 'num'), F('c', 'Side C / height', 40, 0, 100000, 0.1, 'num'), F('d', 'Side D', 60, 0, 100000, 0.1, 'num'), F('e', 'Diagonal E', 72, 0, 100000, 0.1, 'num')],
    compute(v) {
      let area;
      if (v.shape === 'rect') area = v.a * v.b;
      else if (v.shape === 'tri') area = heron(v.a, v.b, v.c);
      else if (v.shape === 'trap') area = 0.5 * (v.a + v.b) * v.c;
      else area = heron(v.a, v.b, v.e) + heron(v.c, v.d, v.e);
      if (!isFinite(area) || area <= 0) return { primary: { label: 'Area', value: 'Check dimensions' }, metrics: [], note: 'These side lengths cannot form a valid shape. Re-measure the plot and make sure each triangle’s longest side is shorter than the other two combined.' };
      const sqft = v.unit === 'm' ? area * SQFT_PER_M2 : area;
      return {
        primary: { label: 'Plot area', value: f2(sqft, 1) + ' sq ft' },
        metrics: [{ label: 'Square metres', value: f2(sqft / SQFT_PER_M2, 2) }, { label: 'Gaj (sq yd)', value: f2(sqft / 9, 2) }, { label: 'Guntha', value: f2(sqft / 1089, 3) }, { label: 'Cent', value: f2(sqft / 435.6, 3) }, { label: 'Acres', value: f2(sqft / 43560, 4) }],
      };
    },
  },
  {
    slug: 'carpet-area-calculator', category: CAT, title: 'Carpet Area & Super Built-up Area Calculator',
    short: 'Convert between carpet area, built-up area and super built-up area and see the real loading you are paying for.',
    tags: ['carpet area', 'super built-up', 'rera', 'flat', 'loading'],
    intro: [
      'Builders often quote price on super built-up area, which includes your walls and a share of lobbies, stairs, lifts and clubhouse. Under RERA, the legally defined figure is carpet area — the usable floor area inside the walls of the flat. The gap between the two is called loading, and it commonly ranges from about 20 to 40 percent.',
      'Use this to work out the carpet area you actually get for a quoted super built-up area, or the other way round, and to compare the real price per square foot of usable space across projects.',
    ],
    formula: 'Built-up = Carpet × (1 + wall %); Super built-up = Built-up × (1 + common-area %); Loading = (Super built-up ÷ Carpet) − 1',
    how: ['Internal and external walls usually add 10–15 percent over carpet area to give built-up area.', 'Shared common areas then add another 15–30 percent to reach super built-up area.', 'Price per carpet sq ft = total price ÷ carpet area; this is the fairest number for comparing projects.'],
    assumptions: ['Wall and common-area percentages are typical ranges — your builder’s agreement shows the exact figures.', 'Always check the carpet area written in the RERA registration and the agreement for sale.'],
    faqs: [
      ['What is carpet area under RERA?', 'RERA defines carpet area as the net usable floor area of an apartment, excluding external walls, areas under services shafts, exclusive balcony or verandah and exclusive open terrace, but including the area covered by internal partition walls.'],
      ['What is a normal loading?', 'It varies by city and project, and 25 to 35 percent is common. Very high loading means you pay for a lot of area you cannot use as rooms.'],
      ['Which area should I compare when buying?', 'Compare the price per square foot of carpet area, because super built-up area is calculated differently by every builder.'],
    ],
    inputs: [SEL('mode', 'I know my', 'carpet', [['carpet', 'Carpet area'], ['sba', 'Super built-up area']]), F('area', 'Area (sq ft)', 800, 50, 100000, 10, 'num'), F('wall', 'Wall thickness addition', 12, 0, 30, 0.5, 'pct'), F('common', 'Common-area share', 20, 0, 60, 0.5, 'pct'), F('price', 'Total price (optional)', 7500000, 0, 1e10, 10000)],
    compute(v) {
      const k = (1 + v.wall / 100) * (1 + v.common / 100);
      const carpet = v.mode === 'carpet' ? v.area : v.area / k;
      const builtUp = carpet * (1 + v.wall / 100), sba = builtUp * (1 + v.common / 100);
      const m = [{ label: 'Carpet area', value: f2(carpet, 0) + ' sq ft' }, { label: 'Built-up area', value: f2(builtUp, 0) + ' sq ft' }, { label: 'Super built-up area', value: f2(sba, 0) + ' sq ft' }, { label: 'Carpet in sq m', value: f2(carpet / SQFT_PER_M2, 1) }];
      if (v.price > 0) { m.push({ label: 'Price per SBA sq ft', value: inr(v.price / sba) }); m.push({ label: 'Price per carpet sq ft', value: inr(v.price / carpet), tone: 'warn' }); }
      return { primary: { label: 'Loading (SBA over carpet)', value: f2((k - 1) * 100, 1) + '%' }, metrics: m, chart: [{ label: 'Carpet area', value: carpet, color: '#2f6b57', display: f2(carpet, 0) + ' sq ft' }, { label: 'Walls', value: builtUp - carpet, color: '#c8922b', display: f2(builtUp - carpet, 0) + ' sq ft' }, { label: 'Common areas', value: sba - builtUp, color: '#3d5a80', display: f2(sba - builtUp, 0) + ' sq ft' }] };
    },
  },
  {
    slug: 'land-price-calculator', category: CAT, title: 'Land Price Calculator',
    short: 'Work out the total price of a plot from its rate per sq ft, gaj, cent, guntha or acre — and compare rates across units.',
    tags: ['land', 'price', 'rate', 'plot'],
    intro: [
      'Plot rates are quoted in different units in different cities: per sq ft in metros, per gaj in north India, per cent in Kerala and Tamil Nadu, per guntha in Maharashtra and Karnataka, per acre for farmland. That makes comparing offers confusing.',
      'Enter the rate in the unit you were quoted and the plot size, and the calculator returns the total price plus the same rate expressed in every other common unit so you can compare like with like.',
    ],
    formula: 'Total price = Rate per unit × Area in that unit; Rate per sq ft = Total price ÷ Area in sq ft',
    how: ['The plot size is converted to square feet using the standard unit values.', 'The total price is then expressed per sq ft, per gaj, per sq m, per cent, per guntha and per acre.'],
    assumptions: ['Stamp duty, registration, brokerage and development charges are not included — see the Total Property Cost Calculator.', 'Rates are entered by you; this tool does not look up market prices.'],
    faqs: [
      ['How do I convert a rate per gaj to a rate per sq ft?', 'Divide the rate per gaj by 9, because one gaj (square yard) is 9 square feet.'],
      ['Why compare rates in one unit?', 'A rate that sounds cheap in one unit can be dearer in another. Converting to a single unit such as sq ft removes the confusion.'],
      ['What else should I budget for?', 'Registration, stamp duty, brokerage, boundary wall, soil testing and development charges. Our guide on the total cost of buying a plot lists them.'],
    ],
    inputs: [F('rate', 'Rate', 12000, 1, 1e10, 100), SEL('ru', 'Rate is per', 'sqyd', unitOptionsNoLocal()), F('size', 'Plot size', 200, 0.01, 1e8, 0.5, 'num'), SEL('su', 'Plot size is in', 'sqyd', unitOptionsNoLocal())],
    compute(v) {
      const rSq = AREA_UNITS.find((u) => u[0] === v.ru)[2], sSq = AREA_UNITS.find((u) => u[0] === v.su)[2];
      const total = v.rate * (v.size * sSq / rSq), sqft = v.size * sSq, per = (id) => inr(total / sqft * AREA_UNITS.find((u) => u[0] === id)[2]);
      return {
        primary: { label: 'Total land price', value: inr(total) },
        metrics: [{ label: 'Plot area', value: f2(sqft, 1) + ' sq ft' }, { label: 'Per sq ft', value: per('sqft') }, { label: 'Per gaj (sq yd)', value: per('sqyd') }, { label: 'Per sq m', value: per('sqm') }, { label: 'Per cent', value: per('cent') }, { label: 'Per guntha', value: per('guntha') }, { label: 'Per acre', value: per('acre') }],
      };
    },
  },
];

function unitOptionsNoLocal() { return AREA_UNITS.filter((u) => u[2] !== null).map(([id, label]) => [id, label]); }

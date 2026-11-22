// Code-generated SVG diagrams for the 25 flagship guides.
// Generates accessible, responsive SVG figures with alt text, width/height, and captions.

const fig = (svg, caption, alt, width = 640, height = 320) => ({
  rawHtml: `<figure class="guide-diagram" style="margin:28px 0;background:var(--bg-subtle,#f8f6f0);border:1px solid var(--border,#e4ddcf);border-radius:8px;padding:16px;text-align:center">
<div style="max-width:${width}px;margin:0 auto">
<svg viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" role="img" aria-label="${alt}" style="width:100%;height:auto;display:block">
${svg}
</svg>
</div>
<figcaption style="margin-top:12px;font-size:0.875rem;color:var(--ink-light,#555);line-height:1.4">${caption}</figcaption>
</figure>`
});

export const DIAGRAMS = {
  // 1. Land measurement units
  landUnits: fig(`
    <rect width="640" height="320" fill="#faf8f5" rx="6"/>
    <text x="320" y="32" font-family="system-ui,sans-serif" font-size="16" font-weight="bold" fill="#16231e" text-anchor="middle">Standard Indian Land Measurement Hierarchy</text>
    <rect x="40" y="55" width="560" height="70" fill="#2f6b57" rx="4"/>
    <text x="320" y="85" font-family="system-ui,sans-serif" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">1 ACRE = 43,560 sq ft (4,840 sq yd / gaj)</text>
    <text x="320" y="110" font-family="system-ui,sans-serif" font-size="13" fill="#d8e8e1" text-anchor="middle">= 4,046.86 sq metres = 0.4047 hectare</text>
    <line x1="180" y1="125" x2="180" y2="165" stroke="#2f6b57" stroke-width="2"/>
    <line x1="460" y1="125" x2="460" y2="165" stroke="#2f6b57" stroke-width="2"/>
    <rect x="40" y="165" width="260" height="75" fill="#e8f2ee" stroke="#2f6b57" stroke-width="1.5" rx="4"/>
    <text x="170" y="195" font-family="system-ui,sans-serif" font-size="15" font-weight="bold" fill="#16231e" text-anchor="middle">40 Gunthas</text>
    <text x="170" y="218" font-family="system-ui,sans-serif" font-size="13" fill="#2f6b57" text-anchor="middle">1 Guntha = 1,089 sq ft</text>
    <text x="170" y="233" font-family="system-ui,sans-serif" font-size="11" fill="#666" text-anchor="middle">(MH, Karnataka, Gujarat)</text>
    <rect x="340" y="165" width="260" height="75" fill="#e8f2ee" stroke="#2f6b57" stroke-width="1.5" rx="4"/>
    <text x="470" y="195" font-family="system-ui,sans-serif" font-size="15" font-weight="bold" fill="#16231e" text-anchor="middle">100 Cents</text>
    <text x="470" y="218" font-family="system-ui,sans-serif" font-size="13" fill="#2f6b57" text-anchor="middle">1 Cent = 435.6 sq ft</text>
    <text x="470" y="233" font-family="system-ui,sans-serif" font-size="11" fill="#666" text-anchor="middle">(Kerala, TN, AP, Telangana)</text>
    <rect x="40" y="260" width="560" height="42" fill="#fff" stroke="#c1502e" stroke-dasharray="4" rx="4"/>
    <text x="320" y="286" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#c1502e" text-anchor="middle">Variable Units: Bigha (14,400 to 27,225 sq ft) and Katha (720 to 1,361 sq ft) vary by state</text>
  `, 'Visual hierarchy comparing standard national land units (Acre, Guntha, Cent) against variable customary units (Bigha, Katha).', 'Indian land measurement hierarchy diagram comparing Acre, Guntha, Cent, and Bigha'),

  // 2. Bigha variation
  bighaVariation: fig(`
    <rect width="640" height="320" fill="#faf8f5" rx="6"/>
    <text x="320" y="28" font-family="system-ui,sans-serif" font-size="16" font-weight="bold" fill="#16231e" text-anchor="middle">Why One Bigha Differs Across Indian States (Sq Ft)</text>
    <g transform="translate(60, 50)">
      <text x="0" y="20" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#333">UP (Pucca)</text>
      <rect x="110" y="6" width="380" height="22" fill="#2f6b57" rx="3"/>
      <text x="498" y="22" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#2f6b57">27,225 sq ft</text>
      <text x="0" y="60" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#333">Bihar</text>
      <rect x="110" y="46" width="380" height="22" fill="#2f6b57" rx="3"/>
      <text x="498" y="62" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#2f6b57">27,220 sq ft</text>
      <text x="0" y="100" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#333">Rajasthan (Pucca)</text>
      <rect x="110" y="86" width="380" height="22" fill="#2f6b57" rx="3"/>
      <text x="498" y="102" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#2f6b57">27,225 sq ft</text>
      <text x="0" y="140" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#333">Gujarat (Vigha)</text>
      <rect x="110" y="126" width="244" height="22" fill="#3d5a80" rx="3"/>
      <text x="362" y="142" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#3d5a80">17,424 sq ft</text>
      <text x="0" y="180" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#333">West Bengal</text>
      <rect x="110" y="166" width="201" height="22" fill="#c1502e" rx="3"/>
      <text x="320" y="182" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#c1502e">14,400 sq ft</text>
      <text x="0" y="220" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#333">Himachal Pradesh</text>
      <rect x="110" y="206" width="122" height="22" fill="#7a3b69" rx="3"/>
      <text x="240" y="222" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#7a3b69">8,712 sq ft</text>
    </g>
    <text x="320" y="300" font-family="system-ui,sans-serif" font-size="12" fill="#666" text-anchor="middle">Warning: Always check the specific district revenue khasra; 1 Bigha in HP is roughly 1/3 of a Bigha in UP.</text>
  `, 'Bar chart illustrating state-by-state variations in 1 Bigha from 8,712 sq ft (HP) to 27,225 sq ft (UP).', 'Bigha size comparison chart across Indian states in square feet'),

  // 3. Acre breakdown
  acreGrid: fig(`
    <rect width="640" height="320" fill="#faf8f5" rx="6"/>
    <text x="320" y="30" font-family="system-ui,sans-serif" font-size="16" font-weight="bold" fill="#16231e" text-anchor="middle">Decomposing 1 Acre (43,560 sq ft)</text>
    <rect x="60" y="55" width="240" height="200" fill="#e8f2ee" stroke="#2f6b57" stroke-width="2" rx="4"/>
    <text x="180" y="90" font-family="system-ui,sans-serif" font-size="16" font-weight="bold" fill="#2f6b57" text-anchor="middle">Guntha Division</text>
    <text x="180" y="120" font-family="system-ui,sans-serif" font-size="28" font-weight="bold" fill="#16231e" text-anchor="middle">40</text>
    <text x="180" y="145" font-family="system-ui,sans-serif" font-size="14" fill="#2f6b57" text-anchor="middle">Gunthas in 1 Acre</text>
    <text x="180" y="190" font-family="system-ui,sans-serif" font-size="13" fill="#444" text-anchor="middle">1 Guntha = 1,089 sq ft</text>
    <text x="180" y="215" font-family="system-ui,sans-serif" font-size="13" fill="#444" text-anchor="middle">= 121 sq yards (gaj)</text>
    <rect x="340" y="55" width="240" height="200" fill="#fdf0ea" stroke="#c1502e" stroke-width="2" rx="4"/>
    <text x="460" y="90" font-family="system-ui,sans-serif" font-size="16" font-weight="bold" fill="#c1502e" text-anchor="middle">Cent Division</text>
    <text x="460" y="120" font-family="system-ui,sans-serif" font-size="28" font-weight="bold" fill="#16231e" text-anchor="middle">100</text>
    <text x="460" y="145" font-family="system-ui,sans-serif" font-size="14" fill="#c1502e" text-anchor="middle">Cents in 1 Acre</text>
    <text x="460" y="190" font-family="system-ui,sans-serif" font-size="13" fill="#444" text-anchor="middle">1 Cent = 435.6 sq ft</text>
    <text x="460" y="215" font-family="system-ui,sans-serif" font-size="13" fill="#444" text-anchor="middle">= 48.4 sq yards (gaj)</text>
    <text x="320" y="290" font-family="system-ui,sans-serif" font-size="14" font-weight="bold" fill="#16231e" text-anchor="middle">Rule of Thumb: 1 Guntha = 2.5 Cents exactly (1,089 ÷ 435.6 = 2.5)</text>
  `, 'Grid comparing Guntha and Cent breakdowns of 1 Acre, illustrating the exact 2.5 cent per guntha conversion ratio.', 'Acre to Guntha and Cent visual conversion diagram'),

  // 4. Irregular plot triangulation
  irregularPlot: fig(`
    <rect width="640" height="320" fill="#faf8f5" rx="6"/>
    <text x="320" y="28" font-family="system-ui,sans-serif" font-size="16" font-weight="bold" fill="#16231e" text-anchor="middle">Measuring an Irregular 4-Sided Plot via Diagonal Triangulation</text>
    <polygon points="120,240 180,90 480,70 440,250" fill="#eef3fa" stroke="#3d5a80" stroke-width="2.5"/>
    <line x1="120" y1="240" x2="480" y2="70" stroke="#c1502e" stroke-width="2" stroke-dasharray="6,4"/>
    <text x="130" y="160" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#16231e">Side A (40 ft)</text>
    <text x="320" y="70" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#16231e">Side B (60 ft)</text>
    <text x="480" y="165" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#16231e">Side C (45 ft)</text>
    <text x="270" y="265" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#16231e">Side D (65 ft)</text>
    <text x="285" y="145" font-family="system-ui,sans-serif" font-size="14" font-weight="bold" fill="#c1502e" transform="rotate(-23, 285, 145)">Diagonal E (72 ft)</text>
    <text x="220" y="180" font-family="system-ui,sans-serif" font-size="14" font-weight="bold" fill="#2f6b57">Triangle 1: Heron(A, B, E)</text>
    <text x="360" y="210" font-family="system-ui,sans-serif" font-size="14" font-weight="bold" fill="#3d5a80">Triangle 2: Heron(C, D, E)</text>
    <text x="320" y="300" font-family="system-ui,sans-serif" font-size="12" fill="#555" text-anchor="middle">Total Plot Area = Area(Triangle 1) + Area(Triangle 2). Measured with one tape diagonal.</text>
  `, 'Diagram of a quadrilateral plot split into two triangles along a measured diagonal using Heron’s formula.', 'Irregular plot measurement using diagonal triangulation and Herons formula'),

  // 5. Carpet area vs builtup vs super builtup
  carpetArea: fig(`
    <rect width="640" height="320" fill="#faf8f5" rx="6"/>
    <text x="320" y="26" font-family="system-ui,sans-serif" font-size="16" font-weight="bold" fill="#16231e" text-anchor="middle">Carpet Area vs. Built-up Area vs. Super Built-up Area</text>
    <rect x="60" y="50" width="520" height="210" fill="#f0ebe1" stroke="#999" stroke-width="2" rx="4"/>
    <text x="320" y="75" font-family="system-ui,sans-serif" font-size="14" font-weight="bold" fill="#7a3b69" text-anchor="middle">SUPER BUILT-UP AREA (Includes Common Lobby, Lift, Staircase, Corridor)</text>
    <rect x="90" y="90" width="460" height="150" fill="#d9e6eb" stroke="#3d5a80" stroke-width="2" rx="4"/>
    <text x="320" y="115" font-family="system-ui,sans-serif" font-size="14" font-weight="bold" fill="#3d5a80" text-anchor="middle">BUILT-UP AREA (Includes External Walls, Balcony &amp; Terrace)</text>
    <rect x="130" y="130" width="380" height="95" fill="#2f6b57" rx="4"/>
    <text x="320" y="165" font-family="system-ui,sans-serif" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle">RERA CARPET AREA (Usable Net Floor Space)</text>
    <text x="320" y="195" font-family="system-ui,sans-serif" font-size="13" fill="#e2f0ea" text-anchor="middle">Area enclosed within internal walls (bedroom, living, kitchen, toilets)</text>
    <text x="320" y="295" font-family="system-ui,sans-serif" font-size="12" fill="#555" text-anchor="middle">RERA Mandate: Developers must legally price apartments strictly on RERA Carpet Area.</text>
  `, 'Nested floor plan diagram illustrating RERA Carpet Area, Built-up Area, and Super Built-up Area.', 'Carpet area vs built-up area vs super built-up area comparison diagram'),

  // 6. FSI / FAR
  fsiFar: fig(`
    <rect width="640" height="320" fill="#faf8f5" rx="6"/>
    <text x="320" y="28" font-family="system-ui,sans-serif" font-size="16" font-weight="bold" fill="#16231e" text-anchor="middle">Understanding Floor Space Index (FSI / FAR)</text>
    <rect x="60" y="60" width="220" height="200" fill="#eef3fa" stroke="#3d5a80" stroke-width="2" rx="4"/>
    <text x="170" y="90" font-family="system-ui,sans-serif" font-size="14" font-weight="bold" fill="#3d5a80" text-anchor="middle">Plot Area: 2,000 sq ft</text>
    <rect x="90" y="120" width="160" height="120" fill="#2f6b57" rx="3"/>
    <text x="170" y="165" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#fff" text-anchor="middle">Max Ground Coverage</text>
    <text x="170" y="185" font-family="system-ui,sans-serif" font-size="13" fill="#fff" text-anchor="middle">60% = 1,200 sq ft</text>
    <text x="170" y="205" font-family="system-ui,sans-serif" font-size="11" fill="#d8e8e1" text-anchor="middle">(Footprint with setbacks)</text>
    <rect x="340" y="60" width="240" height="200" fill="#faf0ea" stroke="#c1502e" stroke-width="2" rx="4"/>
    <text x="460" y="90" font-family="system-ui,sans-serif" font-size="14" font-weight="bold" fill="#c1502e" text-anchor="middle">FAR = 1.5 Permitted</text>
    <text x="460" y="115" font-family="system-ui,sans-serif" font-size="13" fill="#666" text-anchor="middle">Total Built Area: 3,000 sq ft</text>
    <rect x="370" y="130" width="180" height="30" fill="#c1502e" rx="2"/>
    <text x="460" y="150" font-family="system-ui,sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">First Floor: 1,200 sq ft</text>
    <rect x="370" y="170" width="180" height="30" fill="#c1502e" rx="2"/>
    <text x="460" y="190" font-family="system-ui,sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">Ground Floor: 1,200 sq ft</text>
    <rect x="370" y="210" width="180" height="30" fill="#b8842a" rx="2"/>
    <text x="460" y="230" font-family="system-ui,sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">Second Floor: 600 sq ft</text>
    <text x="320" y="295" font-family="system-ui,sans-serif" font-size="12" fill="#555" text-anchor="middle">FAR Formula: Total Built-up Area across all floors ÷ Total Plot Area.</text>
  `, 'Diagram explaining Floor Area Ratio (FAR/FSI) showing how plot area and ground coverage constrain floor counts.', 'Floor space index and floor area ratio building envelope calculation diagram'),

  // 7. Circle rate valuation
  circleRate: fig(`
    <rect width="640" height="320" fill="#faf8f5" rx="6"/>
    <text x="320" y="30" font-family="system-ui,sans-serif" font-size="16" font-weight="bold" fill="#16231e" text-anchor="middle">Circle Rate (Guidance Value) vs. Market Agreement Value</text>
    <rect x="50" y="65" width="230" height="100" fill="#eef3fa" stroke="#3d5a80" stroke-width="2" rx="4"/>
    <text x="165" y="100" font-family="system-ui,sans-serif" font-size="15" font-weight="bold" fill="#3d5a80" text-anchor="middle">Market Agreement Value</text>
    <text x="165" y="125" font-family="system-ui,sans-serif" font-size="13" fill="#555" text-anchor="middle">Actual price agreed between</text>
    <text x="165" y="145" font-family="system-ui,sans-serif" font-size="13" fill="#555" text-anchor="middle">buyer and seller (e.g. ₹60 Lakh)</text>
    <rect x="360" y="65" width="230" height="100" fill="#fdf0ea" stroke="#c1502e" stroke-width="2" rx="4"/>
    <text x="475" y="100" font-family="system-ui,sans-serif" font-size="15" font-weight="bold" fill="#c1502e" text-anchor="middle">Government Circle Rate</text>
    <text x="475" y="125" font-family="system-ui,sans-serif" font-size="13" fill="#555" text-anchor="middle">Minimum statutory base value</text>
    <text x="475" y="145" font-family="system-ui,sans-serif" font-size="13" fill="#555" text-anchor="middle">per sq ft/sq m (e.g. ₹50 Lakh)</text>
    <polygon points="320,170 340,210 300,210" fill="#16231e"/>
    <rect x="150" y="215" width="340" height="60" fill="#2f6b57" rx="4"/>
    <text x="320" y="240" font-family="system-ui,sans-serif" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">TAXABLE REGISTRATION VALUE</text>
    <text x="320" y="262" font-family="system-ui,sans-serif" font-size="13" fill="#d8e8e1" text-anchor="middle">Stamp Duty attaches to HIGHER of the two values (₹60 Lakh)</text>
    <text x="320" y="302" font-family="system-ui,sans-serif" font-size="11" fill="#c1502e" text-anchor="middle">Sec 50C Income Tax Warning: Selling below circle rate triggers capital gains tax penalty on the difference.</text>
  `, 'Flowchart illustrating how stamp duty evaluates the higher of market value or government circle rate.', 'Circle rate guidance value versus market value comparison flow diagram'),

  // 8. Cement types comparison
  cementTypes: fig(`
    <rect width="640" height="320" fill="#faf8f5" rx="6"/>
    <text x="320" y="28" font-family="system-ui,sans-serif" font-size="16" font-weight="bold" fill="#16231e" text-anchor="middle">Cement Types Compared: OPC 53 vs PPC vs PSC</text>
    <rect x="40" y="60" width="175" height="210" fill="#fdf0ea" stroke="#c1502e" stroke-width="1.5" rx="4"/>
    <text x="127" y="90" font-family="system-ui,sans-serif" font-size="15" font-weight="bold" fill="#c1502e" text-anchor="middle">OPC 53 (IS 269)</text>
    <text x="127" y="115" font-family="system-ui,sans-serif" font-size="12" fill="#555" text-anchor="middle">Rapid early strength gain</text>
    <text x="127" y="145" font-family="system-ui,sans-serif" font-size="12" font-weight="bold" fill="#16231e" text-anchor="middle">Best Applications:</text>
    <text x="127" y="170" font-family="system-ui,sans-serif" font-size="11" fill="#444" text-anchor="middle">RCC Columns &amp; Slabs</text>
    <text x="127" y="190" font-family="system-ui,sans-serif" font-size="11" fill="#444" text-anchor="middle">Fast Formwork Cycle</text>
    <text x="127" y="215" font-family="system-ui,sans-serif" font-size="11" fill="#c1502e" text-anchor="middle">High heat of hydration</text>
    <rect x="232" y="60" width="175" height="210" fill="#e8f2ee" stroke="#2f6b57" stroke-width="1.5" rx="4"/>
    <text x="320" y="90" font-family="system-ui,sans-serif" font-size="15" font-weight="bold" fill="#2f6b57" text-anchor="middle">PPC (IS 1489)</text>
    <text x="320" y="115" font-family="system-ui,sans-serif" font-size="12" fill="#555" text-anchor="middle">Fly-ash pozzolanic blend</text>
    <text x="320" y="145" font-family="system-ui,sans-serif" font-size="12" font-weight="bold" fill="#16231e" text-anchor="middle">Best Applications:</text>
    <text x="320" y="170" font-family="system-ui,sans-serif" font-size="11" fill="#444" text-anchor="middle">Brick Masonry &amp; Plaster</text>
    <text x="320" y="190" font-family="system-ui,sans-serif" font-size="11" fill="#444" text-anchor="middle">General House Slabs</text>
    <text x="320" y="215" font-family="system-ui,sans-serif" font-size="11" fill="#2f6b57" text-anchor="middle">Low cracking, smoother</text>
    <rect x="425" y="60" width="175" height="210" fill="#eef3fa" stroke="#3d5a80" stroke-width="1.5" rx="4"/>
    <text x="512" y="90" font-family="system-ui,sans-serif" font-size="15" font-weight="bold" fill="#3d5a80" text-anchor="middle">PSC (IS 455)</text>
    <text x="512" y="115" font-family="system-ui,sans-serif" font-size="12" fill="#555" text-anchor="middle">Slag blended cement</text>
    <text x="512" y="145" font-family="system-ui,sans-serif" font-size="12" font-weight="bold" fill="#16231e" text-anchor="middle">Best Applications:</text>
    <text x="512" y="170" font-family="system-ui,sans-serif" font-size="11" fill="#444" text-anchor="middle">Water Sumps &amp; Basements</text>
    <text x="512" y="190" font-family="system-ui,sans-serif" font-size="11" fill="#444" text-anchor="middle">Coastal / High Sulfate Soil</text>
    <text x="512" y="215" font-family="system-ui,sans-serif" font-size="11" fill="#3d5a80" text-anchor="middle">Highest chemical resistance</text>
    <text x="320" y="295" font-family="system-ui,sans-serif" font-size="12" fill="#555" text-anchor="middle">Curing Standard: OPC requires minimum 7 days wet curing; PPC and PSC require 10 to 14 days.</text>
  `, 'Comparison matrix of OPC 53, PPC, and PSC cement types showing strength characteristics and optimal house construction applications.', 'OPC versus PPC versus PSC cement properties and comparison diagram'),

  // 9. TMT steel rebar
  tmtSteel: fig(`
    <rect width="640" height="320" fill="#faf8f5" rx="6"/>
    <text x="320" y="28" font-family="system-ui,sans-serif" font-size="16" font-weight="bold" fill="#16231e" text-anchor="middle">TMT Steel Rebar Structure &amp; Weight Formula (IS 1786)</text>
    <g transform="translate(100, 70)">
      <circle cx="80" cy="80" r="70" fill="#444" stroke="#222" stroke-width="2"/>
      <circle cx="80" cy="80" r="45" fill="#888"/>
      <text x="80" y="75" font-family="system-ui,sans-serif" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle">Ferrite-Pearlite</text>
      <text x="80" y="90" font-family="system-ui,sans-serif" font-size="10" fill="#fff" text-anchor="middle">Ductile Core</text>
      <text x="80" y="175" font-family="system-ui,sans-serif" font-size="11" font-weight="bold" fill="#333" text-anchor="middle">Martensite Rim (Tough)</text>
    </g>
    <g transform="translate(320, 65)">
      <rect x="0" y="0" width="270" height="175" fill="#fff" stroke="#2f6b57" stroke-width="1.5" rx="4"/>
      <text x="135" y="30" font-family="system-ui,sans-serif" font-size="14" font-weight="bold" fill="#2f6b57" text-anchor="middle">Nominal Weight Formula</text>
      <text x="135" y="65" font-family="system-ui,sans-serif" font-size="18" font-weight="bold" fill="#16231e" text-anchor="middle">Weight (kg/m) = d² / 162</text>
      <text x="20" y="100" font-family="system-ui,sans-serif" font-size="12" fill="#444">• 8 mm bar: 0.395 kg/m</text>
      <text x="20" y="120" font-family="system-ui,sans-serif" font-size="12" fill="#444">• 10 mm bar: 0.617 kg/m</text>
      <text x="20" y="140" font-family="system-ui,sans-serif" font-size="12" fill="#444">• 12 mm bar: 0.888 kg/m</text>
      <text x="20" y="160" font-family="system-ui,sans-serif" font-size="12" fill="#444">• 16 mm bar: 1.580 kg/m</text>
    </g>
    <text x="320" y="280" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#c1502e" text-anchor="middle">Recommendation: Use Fe 500D (Ductile) grade in earthquake zones III, IV, and V for higher elongation.</text>
  `, 'Cross-section of a Thermo-Mechanically Treated (TMT) steel bar showing core-rim structure and nominal weight formulas per metre.', 'TMT steel bar cross section and d squared over 162 weight formula diagram'),

  // 10. Brick types compared
  brickTypes: fig(`
    <rect width="640" height="320" fill="#faf8f5" rx="6"/>
    <text x="320" y="28" font-family="system-ui,sans-serif" font-size="16" font-weight="bold" fill="#16231e" text-anchor="middle">Wall Masonry Units: Red Clay vs. Fly Ash vs. AAC Block</text>
    <g transform="translate(40, 60)">
      <rect x="0" y="0" width="170" height="190" fill="#fff" stroke="#c1502e" stroke-width="2" rx="4"/>
      <rect x="25" y="20" width="120" height="40" fill="#c1502e" rx="2"/>
      <text x="85" y="45" font-family="system-ui,sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">Red Clay Brick</text>
      <text x="85" y="85" font-family="system-ui,sans-serif" font-size="12" font-weight="bold" fill="#16231e" text-anchor="middle">190×90×90 mm</text>
      <text x="85" y="110" font-family="system-ui,sans-serif" font-size="11" fill="#555" text-anchor="middle">Weight: ~3.0 - 3.5 kg</text>
      <text x="85" y="130" font-family="system-ui,sans-serif" font-size="11" fill="#555" text-anchor="middle">Mortar: 10-12 mm joint</text>
      <text x="85" y="150" font-family="system-ui,sans-serif" font-size="11" fill="#555" text-anchor="middle">Density: ~1,800 kg/m³</text>
      <text x="85" y="175" font-family="system-ui,sans-serif" font-size="11" font-weight="bold" fill="#c1502e" text-anchor="middle">Traditional loadbearing</text>
    </g>
    <g transform="translate(235, 60)">
      <rect x="0" y="0" width="170" height="190" fill="#fff" stroke="#3d5a80" stroke-width="2" rx="4"/>
      <rect x="25" y="20" width="120" height="40" fill="#556b82" rx="2"/>
      <text x="85" y="45" font-family="system-ui,sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">Fly Ash Brick</text>
      <text x="85" y="85" font-family="system-ui,sans-serif" font-size="12" font-weight="bold" fill="#16231e" text-anchor="middle">230×110×75 mm</text>
      <text x="85" y="110" font-family="system-ui,sans-serif" font-size="11" fill="#555" text-anchor="middle">Weight: ~2.8 - 3.2 kg</text>
      <text x="85" y="130" font-family="system-ui,sans-serif" font-size="11" fill="#555" text-anchor="middle">Mortar: 8-10 mm joint</text>
      <text x="85" y="150" font-family="system-ui,sans-serif" font-size="11" fill="#555" text-anchor="middle">Density: ~1,700 kg/m³</text>
      <text x="85" y="175" font-family="system-ui,sans-serif" font-size="11" font-weight="bold" fill="#3d5a80" text-anchor="middle">Uniform, less plaster</text>
    </g>
    <g transform="translate(430, 60)">
      <rect x="0" y="0" width="170" height="190" fill="#fff" stroke="#2f6b57" stroke-width="2" rx="4"/>
      <rect x="15" y="15" width="140" height="50" fill="#a4c2b7" rx="2"/>
      <text x="85" y="45" font-family="system-ui,sans-serif" font-size="12" font-weight="bold" fill="#16231e" text-anchor="middle">AAC Block</text>
      <text x="85" y="85" font-family="system-ui,sans-serif" font-size="12" font-weight="bold" fill="#16231e" text-anchor="middle">600×200×150 mm</text>
      <text x="85" y="110" font-family="system-ui,sans-serif" font-size="11" fill="#555" text-anchor="middle">Weight: ~12 - 14 kg</text>
      <text x="85" y="130" font-family="system-ui,sans-serif" font-size="11" fill="#555" text-anchor="middle">Joint: 2-3 mm adhesive</text>
      <text x="85" y="150" font-family="system-ui,sans-serif" font-size="11" fill="#555" text-anchor="middle">Density: ~600 kg/m³</text>
      <text x="85" y="175" font-family="system-ui,sans-serif" font-size="11" font-weight="bold" fill="#2f6b57" text-anchor="middle">65% lighter dead load</text>
    </g>
    <text x="320" y="285" font-family="system-ui,sans-serif" font-size="12" fill="#555" text-anchor="middle">Efficiency: 1 AAC block replaces roughly 8 to 9 standard red bricks, speeding up construction and reducing dead load.</text>
  `, 'Visual comparison of red clay brick, fly ash brick, and AAC block showing dimensions, weight, and joint thickness.', 'Red brick versus fly ash versus AAC block comparison diagram'),

  // 11. Concrete grades
  concreteGrades: fig(`
    <rect width="640" height="320" fill="#faf8f5" rx="6"/>
    <text x="320" y="28" font-family="system-ui,sans-serif" font-size="16" font-weight="bold" fill="#16231e" text-anchor="middle">Concrete Grades &amp; Nominal Mix Proportions (IS 456)</text>
    <g transform="translate(50, 60)">
      <rect x="0" y="0" width="120" height="180" fill="#fff" stroke="#999" rx="4"/>
      <text x="60" y="30" font-family="system-ui,sans-serif" font-size="16" font-weight="bold" fill="#555" text-anchor="middle">M10</text>
      <text x="60" y="55" font-family="system-ui,sans-serif" font-size="14" font-weight="bold" fill="#16231e" text-anchor="middle">1 : 3 : 6</text>
      <text x="60" y="85" font-family="system-ui,sans-serif" font-size="11" fill="#666" text-anchor="middle">1 Cement</text>
      <text x="60" y="105" font-family="system-ui,sans-serif" font-size="11" fill="#666" text-anchor="middle">3 Sand</text>
      <text x="60" y="125" font-family="system-ui,sans-serif" font-size="11" fill="#666" text-anchor="middle">6 Aggregate</text>
      <text x="60" y="160" font-family="system-ui,sans-serif" font-size="11" font-weight="bold" fill="#777" text-anchor="middle">PCC Base Only</text>
    </g>
    <g transform="translate(190, 60)">
      <rect x="0" y="0" width="120" height="180" fill="#fff" stroke="#3d5a80" rx="4"/>
      <text x="60" y="30" font-family="system-ui,sans-serif" font-size="16" font-weight="bold" fill="#3d5a80" text-anchor="middle">M15</text>
      <text x="60" y="55" font-family="system-ui,sans-serif" font-size="14" font-weight="bold" fill="#16231e" text-anchor="middle">1 : 2 : 4</text>
      <text x="60" y="85" font-family="system-ui,sans-serif" font-size="11" fill="#666" text-anchor="middle">1 Cement</text>
      <text x="60" y="105" font-family="system-ui,sans-serif" font-size="11" fill="#666" text-anchor="middle">2 Sand</text>
      <text x="60" y="125" font-family="system-ui,sans-serif" font-size="11" fill="#666" text-anchor="middle">4 Aggregate</text>
      <text x="60" y="160" font-family="system-ui,sans-serif" font-size="11" font-weight="bold" fill="#3d5a80" text-anchor="middle">Flooring Bed</text>
    </g>
    <g transform="translate(330, 60)">
      <rect x="0" y="0" width="120" height="180" fill="#e8f2ee" stroke="#2f6b57" stroke-width="2" rx="4"/>
      <text x="60" y="30" font-family="system-ui,sans-serif" font-size="16" font-weight="bold" fill="#2f6b57" text-anchor="middle">M20</text>
      <text x="60" y="55" font-family="system-ui,sans-serif" font-size="14" font-weight="bold" fill="#16231e" text-anchor="middle">1 : 1.5 : 3</text>
      <text x="60" y="85" font-family="system-ui,sans-serif" font-size="11" fill="#2f6b57" text-anchor="middle">1 Cement</text>
      <text x="60" y="105" font-family="system-ui,sans-serif" font-size="11" fill="#2f6b57" text-anchor="middle">1.5 Sand</text>
      <text x="60" y="125" font-family="system-ui,sans-serif" font-size="11" fill="#2f6b57" text-anchor="middle">3 Aggregate</text>
      <text x="60" y="160" font-family="system-ui,sans-serif" font-size="11" font-weight="bold" fill="#2f6b57" text-anchor="middle">Min. RCC Grade</text>
    </g>
    <g transform="translate(470, 60)">
      <rect x="0" y="0" width="120" height="180" fill="#fdf0ea" stroke="#c1502e" stroke-width="2" rx="4"/>
      <text x="60" y="30" font-family="system-ui,sans-serif" font-size="16" font-weight="bold" fill="#c1502e" text-anchor="middle">M25</text>
      <text x="60" y="55" font-family="system-ui,sans-serif" font-size="14" font-weight="bold" fill="#16231e" text-anchor="middle">1 : 1 : 2</text>
      <text x="60" y="85" font-family="system-ui,sans-serif" font-size="11" fill="#c1502e" text-anchor="middle">1 Cement</text>
      <text x="60" y="105" font-family="system-ui,sans-serif" font-size="11" fill="#c1502e" text-anchor="middle">1 Sand</text>
      <text x="60" y="125" font-family="system-ui,sans-serif" font-size="11" fill="#c1502e" text-anchor="middle">2 Aggregate</text>
      <text x="60" y="160" font-family="system-ui,sans-serif" font-size="11" font-weight="bold" fill="#c1502e" text-anchor="middle">Design Mix Standard</text>
    </g>
    <text x="320" y="285" font-family="system-ui,sans-serif" font-size="12" fill="#555" text-anchor="middle">IS 456 Mandate: M20 is the absolute minimum grade for reinforced concrete (RCC) structural elements.</text>
  `, 'Nominal concrete mix ratios for M10, M15, M20, and M25 showing cement, sand, and aggregate proportions.', 'Concrete grades nominal mix proportions M15 M20 M25 diagram'),

  // 12. Steps to build a house
  stepsToBuild: fig(`
    <rect width="640" height="320" fill="#faf8f5" rx="6"/>
    <text x="320" y="26" font-family="system-ui,sans-serif" font-size="16" font-weight="bold" fill="#16231e" text-anchor="middle">6 Sequential Phases of House Construction in India</text>
    <g transform="translate(30, 55)">
      <rect x="0" y="0" width="85" height="180" fill="#2f6b57" rx="4"/>
      <text x="42" y="25" font-family="system-ui,sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">01. PRE-BUILD</text>
      <text x="42" y="60" font-family="system-ui,sans-serif" font-size="10" fill="#d8e8e1" text-anchor="middle">• Soil Test</text>
      <text x="42" y="80" font-family="system-ui,sans-serif" font-size="10" fill="#d8e8e1" text-anchor="middle">• Arch. Plan</text>
      <text x="42" y="100" font-family="system-ui,sans-serif" font-size="10" fill="#d8e8e1" text-anchor="middle">• Structural</text>
      <text x="42" y="120" font-family="system-ui,sans-serif" font-size="10" fill="#d8e8e1" text-anchor="middle">• Sanction</text>
      <rect x="95" y="0" width="85" height="180" fill="#3d5a80" rx="4"/>
      <text x="137" y="25" font-family="system-ui,sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">02. SUB</text>
      <text x="137" y="60" font-family="system-ui,sans-serif" font-size="10" fill="#d8e8e1" text-anchor="middle">• Excavate</text>
      <text x="137" y="80" font-family="system-ui,sans-serif" font-size="10" fill="#d8e8e1" text-anchor="middle">• PCC 1:4:8</text>
      <text x="137" y="100" font-family="system-ui,sans-serif" font-size="10" fill="#d8e8e1" text-anchor="middle">• Footings</text>
      <text x="137" y="120" font-family="system-ui,sans-serif" font-size="10" fill="#d8e8e1" text-anchor="middle">• Plinth Beam</text>
      <rect x="190" y="0" width="85" height="180" fill="#c1502e" rx="4"/>
      <text x="232" y="25" font-family="system-ui,sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">03. FRAME</text>
      <text x="232" y="60" font-family="system-ui,sans-serif" font-size="10" fill="#f6d3c8" text-anchor="middle">• Columns</text>
      <text x="232" y="80" font-family="system-ui,sans-serif" font-size="10" fill="#f6d3c8" text-anchor="middle">• Shuttering</text>
      <text x="232" y="100" font-family="system-ui,sans-serif" font-size="10" fill="#f6d3c8" text-anchor="middle">• Slab Rebar</text>
      <text x="232" y="120" font-family="system-ui,sans-serif" font-size="10" fill="#f6d3c8" text-anchor="middle">• RCC Pour</text>
      <rect x="285" y="0" width="85" height="180" fill="#7a3b69" rx="4"/>
      <text x="327" y="25" font-family="system-ui,sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">04. MASON</text>
      <text x="327" y="60" font-family="system-ui,sans-serif" font-size="10" fill="#eed9e7" text-anchor="middle">• Brick/AAC</text>
      <text x="327" y="80" font-family="system-ui,sans-serif" font-size="10" fill="#eed9e7" text-anchor="middle">• Door Frames</text>
      <text x="327" y="100" font-family="system-ui,sans-serif" font-size="10" fill="#eed9e7" text-anchor="middle">• Wall Chasing</text>
      <text x="327" y="120" font-family="system-ui,sans-serif" font-size="10" fill="#eed9e7" text-anchor="middle">• Plastering</text>
      <rect x="380" y="0" width="85" height="180" fill="#b8842a" rx="4"/>
      <text x="422" y="25" font-family="system-ui,sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">05. SERVICES</text>
      <text x="422" y="60" font-family="system-ui,sans-serif" font-size="10" fill="#faedd2" text-anchor="middle">• Plumbing</text>
      <text x="422" y="80" font-family="system-ui,sans-serif" font-size="10" fill="#faedd2" text-anchor="middle">• Wiring</text>
      <text x="422" y="100" font-family="system-ui,sans-serif" font-size="10" fill="#faedd2" text-anchor="middle">• Waterproof</text>
      <text x="422" y="120" font-family="system-ui,sans-serif" font-size="10" fill="#faedd2" text-anchor="middle">• Drainage</text>
      <rect x="475" y="0" width="85" height="180" fill="#5d7a2f" rx="4"/>
      <text x="517" y="25" font-family="system-ui,sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">06. FINISH</text>
      <text x="517" y="60" font-family="system-ui,sans-serif" font-size="10" fill="#e5ebd7" text-anchor="middle">• Flooring</text>
      <text x="517" y="80" font-family="system-ui,sans-serif" font-size="10" fill="#e5ebd7" text-anchor="middle">• Putty &amp; Paint</text>
      <text x="517" y="100" font-family="system-ui,sans-serif" font-size="10" fill="#e5ebd7" text-anchor="middle">• Fixtures</text>
      <text x="517" y="120" font-family="system-ui,sans-serif" font-size="10" fill="#e5ebd7" text-anchor="middle">• OC / Power</text>
    </g>
    <text x="320" y="280" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#16231e" text-anchor="middle">Typical Duration: 8 to 12 months for a 1,500 sq ft independent house.</text>
  `, 'Flowchart diagram illustrating the 6 chronological stages of independent house construction in India.', 'Six stages of house construction process workflow diagram'),

  // 13. Construction cost breakdown
  costBreakdown: fig(`
    <rect width="640" height="320" fill="#faf8f5" rx="6"/>
    <text x="320" y="28" font-family="system-ui,sans-serif" font-size="16" font-weight="bold" fill="#16231e" text-anchor="middle">Typical House Construction Cost Breakdown (Per Sq Ft)</text>
    <g transform="translate(60, 60)">
      <rect x="0" y="0" width="520" height="36" fill="#2f6b57" rx="3"/>
      <text x="260" y="23" font-family="system-ui,sans-serif" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">Building Materials: 55% – 60% (Cement, Steel, Bricks, Sand, Aggregate)</text>
      <rect x="0" y="46" width="520" height="36" fill="#3d5a80" rx="3"/>
      <text x="260" y="69" font-family="system-ui,sans-serif" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">Labour &amp; Contractor Charges: 22% – 25% (Masons, Barbenders, Helpers)</text>
      <rect x="0" y="92" width="520" height="36" fill="#c1502e" rx="3"/>
      <text x="260" y="115" font-family="system-ui,sans-serif" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">Flooring, Paint &amp; Fixtures: 12% – 15% (Tiles, Sanitaryware, Electrical)</text>
      <rect x="0" y="138" width="520" height="36" fill="#b8842a" rx="3"/>
      <text x="260" y="161" font-family="system-ui,sans-serif" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">Approvals, Architect &amp; Contingency: 5% – 8% (Municipal Sanction, Soil Test)</text>
    </g>
    <text x="320" y="275" font-family="system-ui,sans-serif" font-size="14" font-weight="bold" fill="#16231e" text-anchor="middle">Average Benchmark (2026): ₹1,800 to ₹2,400 per sq ft for Standard Quality RCC.</text>
    <text x="320" y="298" font-family="system-ui,sans-serif" font-size="11" fill="#666" text-anchor="middle">Varies by city tier and finishing specs (premium finishes push total above ₹2,800/sq ft).</text>
  `, 'Stacked horizontal bar chart depicting construction cost breakdown: materials 55-60%, labour 22-25%, finishing 12-15%, approvals 5-8%.', 'House construction cost percentage distribution per square foot diagram'),

  // 14. Construction budget planning
  budgetPlanning: fig(`
    <rect width="640" height="320" fill="#faf8f5" rx="6"/>
    <text x="320" y="28" font-family="system-ui,sans-serif" font-size="16" font-weight="bold" fill="#16231e" text-anchor="middle">Cash Flow Disbursement by Construction Milestones</text>
    <g transform="translate(60, 60)">
      <line x1="40" y1="180" x2="480" y2="180" stroke="#999" stroke-width="1.5"/>
      <line x1="40" y1="20" x2="40" y2="180" stroke="#999" stroke-width="1.5"/>
      <circle cx="40" cy="180" r="5" fill="#2f6b57"/>
      <circle cx="120" cy="155" r="5" fill="#2f6b57"/>
      <circle cx="200" cy="125" r="5" fill="#2f6b57"/>
      <circle cx="280" cy="90" r="5" fill="#2f6b57"/>
      <circle cx="380" cy="50" r="5" fill="#2f6b57"/>
      <circle cx="460" cy="30" r="5" fill="#2f6b57"/>
      <polyline points="40,180 120,155 200,125 280,90 380,50 460,30" fill="none" stroke="#2f6b57" stroke-width="3"/>
      <text x="40" y="200" font-family="system-ui,sans-serif" font-size="10" fill="#333" text-anchor="middle">Booking (10%)</text>
      <text x="120" y="200" font-family="system-ui,sans-serif" font-size="10" fill="#333" text-anchor="middle">Plinth (20%)</text>
      <text x="200" y="200" font-family="system-ui,sans-serif" font-size="10" fill="#333" text-anchor="middle">Slab 1 (40%)</text>
      <text x="280" y="200" font-family="system-ui,sans-serif" font-size="10" fill="#333" text-anchor="middle">Slab 2 (60%)</text>
      <text x="380" y="200" font-family="system-ui,sans-serif" font-size="10" fill="#333" text-anchor="middle">Plaster (80%)</text>
      <text x="460" y="200" font-family="system-ui,sans-serif" font-size="10" fill="#333" text-anchor="middle">Finish (100%)</text>
    </g>
    <text x="320" y="290" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#c1502e" text-anchor="middle">Contractor Protection: Never pay more than 10-15% ahead of physically certified work on site.</text>
  `, 'Disbursement milestone curve showing construction expenditure tracking against work progress stages.', 'House construction budget cash flow milestone curve diagram'),

  // 15. Plan approval workflow
  planApproval: fig(`
    <rect width="640" height="320" fill="#faf8f5" rx="6"/>
    <text x="320" y="28" font-family="system-ui,sans-serif" font-size="16" font-weight="bold" fill="#16231e" text-anchor="middle">Municipal Building Plan Sanction Workflow in India</text>
    <g transform="translate(40, 60)">
      <rect x="0" y="0" width="120" height="70" fill="#2f6b57" rx="4"/>
      <text x="60" y="28" font-family="system-ui,sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">1. DRAWINGS</text>
      <text x="60" y="48" font-family="system-ui,sans-serif" font-size="10" fill="#d8e8e1" text-anchor="middle">Licensed Architect</text>
      <line x1="120" y1="35" x2="145" y2="35" stroke="#16231e" stroke-width="2"/>
      <rect x="145" y="0" width="120" height="70" fill="#3d5a80" rx="4"/>
      <text x="205" y="28" font-family="system-ui,sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">2. PORTAL</text>
      <text x="205" y="48" font-family="system-ui,sans-serif" font-size="10" fill="#d8e8e1" text-anchor="middle">Online OBPS / Scrutiny</text>
      <line x1="265" y1="35" x2="290" y2="35" stroke="#16231e" stroke-width="2"/>
      <rect x="290" y="0" width="120" height="70" fill="#c1502e" rx="4"/>
      <text x="350" y="28" font-family="system-ui,sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">3. SITE VISIT</text>
      <text x="350" y="48" font-family="system-ui,sans-serif" font-size="10" fill="#f6d3c8" text-anchor="middle">Junior Engineer Check</text>
      <line x1="410" y1="35" x2="435" y2="35" stroke="#16231e" stroke-width="2"/>
      <rect x="435" y="0" width="125" height="70" fill="#2f6b57" rx="4"/>
      <text x="497" y="28" font-family="system-ui,sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">4. SANCTION</text>
      <text x="497" y="48" font-family="system-ui,sans-serif" font-size="10" fill="#d8e8e1" text-anchor="middle">Fees Paid &amp; LP Order</text>
    </g>
    <rect x="70" y="165" width="500" height="85" fill="#fff" stroke="#999" rx="4"/>
    <text x="320" y="190" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#16231e" text-anchor="middle">Mandatory Prerequisite Documents for Sanction:</text>
    <text x="320" y="212" font-family="system-ui,sans-serif" font-size="12" fill="#444" text-anchor="middle">Registered Sale Deed • Latest Khata / RTC • Tax Paid Receipts • Encumbrance Certificate (15 yrs)</text>
    <text x="320" y="232" font-family="system-ui,sans-serif" font-size="12" fill="#444" text-anchor="middle">Soil Investigation Report • Structural Stability Certificate from Registered Engineer</text>
    <text x="320" y="295" font-family="system-ui,sans-serif" font-size="12" fill="#555" text-anchor="middle">Validity: Plan sanctions are typically valid for 3 to 5 years from issuance date.</text>
  `, 'Flowchart of municipal building plan sanction workflow from architectural drawing preparation to site verification and sanction order.', 'Building plan approval workflow process diagram in India'),

  // 16. Thumb rules for house materials
  thumbRules: fig(`
    <rect width="640" height="320" fill="#faf8f5" rx="6"/>
    <text x="320" y="28" font-family="system-ui,sans-serif" font-size="16" font-weight="bold" fill="#16231e" text-anchor="middle">Thumb Rules for 1,000 Sq Ft Built-up Area House</text>
    <g transform="translate(50, 60)">
      <rect x="0" y="0" width="125" height="180" fill="#fff" stroke="#2f6b57" stroke-width="2" rx="4"/>
      <text x="62" y="30" font-family="system-ui,sans-serif" font-size="15" font-weight="bold" fill="#2f6b57" text-anchor="middle">Cement</text>
      <text x="62" y="65" font-family="system-ui,sans-serif" font-size="20" font-weight="bold" fill="#16231e" text-anchor="middle">400 - 450</text>
      <text x="62" y="85" font-family="system-ui,sans-serif" font-size="12" fill="#555" text-anchor="middle">Bags (50kg)</text>
      <text x="62" y="125" font-family="system-ui,sans-serif" font-size="11" fill="#666" text-anchor="middle">~0.4 to 0.45</text>
      <text x="62" y="145" font-family="system-ui,sans-serif" font-size="11" fill="#666" text-anchor="middle">bags per sq ft</text>
    </g>
    <g transform="translate(190, 60)">
      <rect x="0" y="0" width="125" height="180" fill="#fff" stroke="#c1502e" stroke-width="2" rx="4"/>
      <text x="62" y="30" font-family="system-ui,sans-serif" font-size="15" font-weight="bold" fill="#c1502e" text-anchor="middle">TMT Steel</text>
      <text x="62" y="65" font-family="system-ui,sans-serif" font-size="20" font-weight="bold" fill="#16231e" text-anchor="middle">3.0 - 4.0</text>
      <text x="62" y="85" font-family="system-ui,sans-serif" font-size="12" fill="#555" text-anchor="middle">Tonnes</text>
      <text x="62" y="125" font-family="system-ui,sans-serif" font-size="11" fill="#666" text-anchor="middle">~3.0 to 4.0 kg</text>
      <text x="62" y="145" font-family="system-ui,sans-serif" font-size="11" fill="#666" text-anchor="middle">per sq ft</text>
    </g>
    <g transform="translate(330, 60)">
      <rect x="0" y="0" width="125" height="180" fill="#fff" stroke="#3d5a80" stroke-width="2" rx="4"/>
      <text x="62" y="30" font-family="system-ui,sans-serif" font-size="15" font-weight="bold" fill="#3d5a80" text-anchor="middle">Sand</text>
      <text x="62" y="65" font-family="system-ui,sans-serif" font-size="20" font-weight="bold" fill="#16231e" text-anchor="middle">1,200 - 1,500</text>
      <text x="62" y="85" font-family="system-ui,sans-serif" font-size="12" fill="#555" text-anchor="middle">Cubic Feet</text>
      <text x="62" y="125" font-family="system-ui,sans-serif" font-size="11" fill="#666" text-anchor="middle">~1.2 to 1.5</text>
      <text x="62" y="145" font-family="system-ui,sans-serif" font-size="11" fill="#666" text-anchor="middle">cu ft per sq ft</text>
    </g>
    <g transform="translate(470, 60)">
      <rect x="0" y="0" width="125" height="180" fill="#fff" stroke="#b8842a" stroke-width="2" rx="4"/>
      <text x="62" y="30" font-family="system-ui,sans-serif" font-size="15" font-weight="bold" fill="#b8842a" text-anchor="middle">Aggregate</text>
      <text x="62" y="65" font-family="system-ui,sans-serif" font-size="20" font-weight="bold" fill="#16231e" text-anchor="middle">1,000 - 1,200</text>
      <text x="62" y="85" font-family="system-ui,sans-serif" font-size="12" fill="#555" text-anchor="middle">Cubic Feet</text>
      <text x="62" y="125" font-family="system-ui,sans-serif" font-size="11" fill="#666" text-anchor="middle">~1.0 to 1.2</text>
      <text x="62" y="145" font-family="system-ui,sans-serif" font-size="11" fill="#666" text-anchor="middle">cu ft per sq ft</text>
    </g>
    <text x="320" y="285" font-family="system-ui,sans-serif" font-size="12" fill="#555" text-anchor="middle">Estimates include RCC structure, brick masonry, and internal/external plaster for standard residential frames.</text>
  `, 'Infographic of material thumb rules per 1,000 sq ft built-up area: cement 400-450 bags, steel 3-4 tonnes, sand 1,200-1,500 cu ft.', 'Material thumb rules estimator per 1000 square feet construction diagram'),

  // 17. Foundation types
  foundationTypes: fig(`
    <rect width="640" height="320" fill="#faf8f5" rx="6"/>
    <text x="320" y="28" font-family="system-ui,sans-serif" font-size="16" font-weight="bold" fill="#16231e" text-anchor="middle">Common Residential Foundation Types Compared</text>
    <g transform="translate(40, 60)">
      <rect x="0" y="0" width="170" height="190" fill="#fff" stroke="#2f6b57" stroke-width="2" rx="4"/>
      <text x="85" y="30" font-family="system-ui,sans-serif" font-size="14" font-weight="bold" fill="#2f6b57" text-anchor="middle">Isolated Pad Footing</text>
      <rect x="75" y="55" width="20" height="60" fill="#999"/>
      <polygon points="50,145 120,145 105,115 65,115" fill="#2f6b57"/>
      <rect x="40" y="145" width="90" height="20" fill="#2f6b57"/>
      <text x="85" y="180" font-family="system-ui,sans-serif" font-size="11" fill="#333" text-anchor="middle">Normal hard soil / rocky</text>
    </g>
    <g transform="translate(235, 60)">
      <rect x="0" y="0" width="170" height="190" fill="#fff" stroke="#3d5a80" stroke-width="2" rx="4"/>
      <text x="85" y="30" font-family="system-ui,sans-serif" font-size="14" font-weight="bold" fill="#3d5a80" text-anchor="middle">Raft / Mat Foundation</text>
      <rect x="40" y="55" width="15" height="70" fill="#999"/>
      <rect x="115" y="55" width="15" height="70" fill="#999"/>
      <rect x="20" y="125" width="130" height="35" fill="#3d5a80"/>
      <text x="85" y="180" font-family="system-ui,sans-serif" font-size="11" fill="#333" text-anchor="middle">Low bearing capacity / sandy</text>
    </g>
    <g transform="translate(430, 60)">
      <rect x="0" y="0" width="170" height="190" fill="#fff" stroke="#c1502e" stroke-width="2" rx="4"/>
      <text x="85" y="30" font-family="system-ui,sans-serif" font-size="14" font-weight="bold" fill="#c1502e" text-anchor="middle">Under-Reamed Pile</text>
      <rect x="75" y="50" width="20" height="80" fill="#c1502e"/>
      <circle cx="85" cy="110" r="22" fill="#c1502e"/>
      <circle cx="85" cy="145" r="22" fill="#c1502e"/>
      <text x="85" y="180" font-family="system-ui,sans-serif" font-size="11" fill="#333" text-anchor="middle">Black cotton swelling clay</text>
    </g>
    <text x="320" y="285" font-family="system-ui,sans-serif" font-size="12" fill="#555" text-anchor="middle">Safety Warning: Soil Safe Bearing Capacity (SBC) from a certified geotechnical test decides foundation type.</text>
  `, 'Cross-sections comparing isolated pad footing, raft foundation, and under-reamed pile foundation for different soil types.', 'Foundation types isolated footing raft pile cross section diagram'),

  // 18. Stamp duty components
  stampDutyComponents: fig(`
    <rect width="640" height="320" fill="#faf8f5" rx="6"/>
    <text x="320" y="28" font-family="system-ui,sans-serif" font-size="16" font-weight="bold" fill="#16231e" text-anchor="middle">Anatomy of Property Registration Expenses in India</text>
    <g transform="translate(50, 60)">
      <rect x="0" y="0" width="260" height="85" fill="#2f6b57" rx="4"/>
      <text x="130" y="35" font-family="system-ui,sans-serif" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle">Base Stamp Duty</text>
      <text x="130" y="60" font-family="system-ui,sans-serif" font-size="13" fill="#d8e8e1" text-anchor="middle">4% to 7% of property valuation</text>
      <rect x="280" y="0" width="260" height="85" fill="#3d5a80" rx="4"/>
      <text x="410" y="35" font-family="system-ui,sans-serif" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle">Registration Fee</text>
      <text x="410" y="60" font-family="system-ui,sans-serif" font-size="13" fill="#d8e8e1" text-anchor="middle">1% (often capped at ₹30k or 1%)</text>
      <rect x="0" y="100" width="260" height="85" fill="#c1502e" rx="4"/>
      <text x="130" y="135" font-family="system-ui,sans-serif" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle">Local Surcharges / Cess</text>
      <text x="130" y="160" font-family="system-ui,sans-serif" font-size="13" fill="#f6d3c8" text-anchor="middle">1% Metro Cess / ZP surcharge</text>
      <rect x="280" y="100" width="260" height="85" fill="#b8842a" rx="4"/>
      <text x="410" y="135" font-family="system-ui,sans-serif" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle">Concessions &amp; Rebates</text>
      <text x="410" y="160" font-family="system-ui,sans-serif" font-size="13" fill="#faedd2" text-anchor="middle">1% - 2% rebate for women buyers</text>
    </g>
    <text x="320" y="285" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#16231e" text-anchor="middle">Total Cash Outlay: Expect 6% to 9% on top of the base property purchase price.</text>
  `, 'Component breakdown diagram of property registration costs: base stamp duty, registration fee, municipal surcharges, and female concessions.', 'Stamp duty and registration fee components breakdown diagram'),

  // 19. Hidden costs flat
  hiddenCosts: fig(`
    <rect width="640" height="320" fill="#faf8f5" rx="6"/>
    <text x="320" y="28" font-family="system-ui,sans-serif" font-size="16" font-weight="bold" fill="#16231e" text-anchor="middle">The Hidden Cash Outlays Beyond Base Flat Cost</text>
    <g transform="translate(60, 60)">
      <rect x="0" y="0" width="520" height="32" fill="#2f6b57" rx="3"/>
      <text x="260" y="21" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#fff" text-anchor="middle">Base Agreement Value: 100% (Advertised price)</text>
      <rect x="0" y="40" width="520" height="32" fill="#3d5a80" rx="3"/>
      <text x="260" y="61" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#fff" text-anchor="middle">+ Stamp Duty &amp; Registration: 6% to 8% (Mandatory state taxes)</text>
      <rect x="0" y="80" width="520" height="32" fill="#c1502e" rx="3"/>
      <text x="260" y="101" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#fff" text-anchor="middle">+ GST (Under-Construction): 5% non-affordable (1% affordable)</text>
      <rect x="0" y="120" width="520" height="32" fill="#7a3b69" rx="3"/>
      <text x="260" y="141" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#fff" text-anchor="middle">+ Car Parking &amp; Club Charges: ₹3 Lakh to ₹7 Lakh</text>
      <rect x="0" y="160" width="520" height="32" fill="#b8842a" rx="3"/>
      <text x="260" y="181" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#fff" text-anchor="middle">+ Advance Maintenance &amp; Sinking Fund: 1 to 2 Years Advance</text>
    </g>
    <text x="320" y="280" font-family="system-ui,sans-serif" font-size="14" font-weight="bold" fill="#c1502e" text-anchor="middle">Rule of Thumb: Add 15% to 20% over the base quoted price for your total buying budget.</text>
  `, 'Stacked bar chart visualizing the hidden costs of purchasing an apartment in India beyond the advertised agreement value.', 'Hidden costs of buying a flat in India percentage breakdown diagram'),

  // 20. Document verification tree
  documentTree: fig(`
    <rect width="640" height="320" fill="#faf8f5" rx="6"/>
    <text x="320" y="28" font-family="system-ui,sans-serif" font-size="16" font-weight="bold" fill="#16231e" text-anchor="middle">Property Legal Verification Hierarchy</text>
    <g transform="translate(60, 55)">
      <rect x="140" y="0" width="240" height="40" fill="#2f6b57" rx="4"/>
      <text x="260" y="25" font-family="system-ui,sans-serif" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">1. MOTHER DEED (30 Yrs Chain)</text>
      <line x1="260" y1="40" x2="260" y2="70" stroke="#16231e" stroke-width="2"/>
      <rect x="40" y="70" width="200" height="45" fill="#3d5a80" rx="4"/>
      <text x="140" y="92" font-family="system-ui,sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">2. Encumbrance Cert (EC)</text>
      <text x="140" y="107" font-family="system-ui,sans-serif" font-size="10" fill="#d8e8e1" text-anchor="middle">Form 15 (Nil Charges Check)</text>
      <rect x="280" y="70" width="200" height="45" fill="#3d5a80" rx="4"/>
      <text x="380" y="92" font-family="system-ui,sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">3. Revenue Mutation</text>
      <text x="380" y="107" font-family="system-ui,sans-serif" font-size="10" fill="#d8e8e1" text-anchor="middle">Khata / Patta / 7/12 in seller name</text>
      <line x1="260" y1="115" x2="260" y2="145" stroke="#16231e" stroke-width="2"/>
      <rect x="40" y="145" width="200" height="45" fill="#c1502e" rx="4"/>
      <text x="140" y="167" font-family="system-ui,sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">4. Approvals &amp; Sanctions</text>
      <text x="140" y="182" font-family="system-ui,sans-serif" font-size="10" fill="#f6d3c8" text-anchor="middle">RERA Number &amp; Building Plan</text>
      <rect x="280" y="145" width="200" height="45" fill="#c1502e" rx="4"/>
      <text x="380" y="167" font-family="system-ui,sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">5. Municipal Certificates</text>
      <text x="380" y="182" font-family="system-ui,sans-serif" font-size="10" fill="#f6d3c8" text-anchor="middle">Occupancy (OC) &amp; Completion (CC)</text>
    </g>
    <text x="320" y="285" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#16231e" text-anchor="middle">Golden Rule: Always conduct a 30-year title search through an independent property advocate.</text>
  `, 'Hierarchy tree of property document due diligence: mother deed chain, encumbrance certificate, revenue mutation, RERA approval, and occupancy certificate.', 'Property documents verification due diligence tree diagram'),

  // 21. Home loan disbursement schedule
  loanDisbursement: fig(`
    <rect width="640" height="320" fill="#faf8f5" rx="6"/>
    <text x="320" y="28" font-family="system-ui,sans-serif" font-size="16" font-weight="bold" fill="#16231e" text-anchor="middle">Composite Plot &amp; Construction Loan Disbursement Stages</text>
    <g transform="translate(40, 60)">
      <rect x="0" y="0" width="105" height="180" fill="#2f6b57" rx="4"/>
      <text x="52" y="30" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#fff" text-anchor="middle">Stage 1</text>
      <text x="52" y="65" font-family="system-ui,sans-serif" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle">Plot Purchase</text>
      <text x="52" y="90" font-family="system-ui,sans-serif" font-size="11" fill="#d8e8e1" text-anchor="middle">Up to 75%</text>
      <text x="52" y="110" font-family="system-ui,sans-serif" font-size="10" fill="#d8e8e1" text-anchor="middle">of registered</text>
      <text x="52" y="125" font-family="system-ui,sans-serif" font-size="10" fill="#d8e8e1" text-anchor="middle">plot value</text>
      <rect x="115" y="0" width="105" height="180" fill="#3d5a80" rx="4"/>
      <text x="167" y="30" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#fff" text-anchor="middle">Stage 2</text>
      <text x="167" y="65" font-family="system-ui,sans-serif" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle">Plinth Level</text>
      <text x="167" y="90" font-family="system-ui,sans-serif" font-size="11" fill="#d8e8e1" text-anchor="middle">20% of build</text>
      <text x="167" y="110" font-family="system-ui,sans-serif" font-size="10" fill="#d8e8e1" text-anchor="middle">After site visit</text>
      <text x="167" y="125" font-family="system-ui,sans-serif" font-size="10" fill="#d8e8e1" text-anchor="middle">&amp; engineer cert</text>
      <rect x="230" y="0" width="105" height="180" fill="#c1502e" rx="4"/>
      <text x="282" y="30" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#fff" text-anchor="middle">Stage 3</text>
      <text x="282" y="65" font-family="system-ui,sans-serif" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle">Roof Slabs</text>
      <text x="282" y="90" font-family="system-ui,sans-serif" font-size="11" fill="#f6d3c8" text-anchor="middle">40% of build</text>
      <text x="282" y="110" font-family="system-ui,sans-serif" font-size="10" fill="#f6d3c8" text-anchor="middle">Per floor slab</text>
      <text x="282" y="125" font-family="system-ui,sans-serif" font-size="10" fill="#f6d3c8" text-anchor="middle">inspection</text>
      <rect x="345" y="0" width="105" height="180" fill="#b8842a" rx="4"/>
      <text x="397" y="30" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#fff" text-anchor="middle">Stage 4</text>
      <text x="397" y="65" font-family="system-ui,sans-serif" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle">Brick &amp; Plaster</text>
      <text x="397" y="90" font-family="system-ui,sans-serif" font-size="11" fill="#faedd2" text-anchor="middle">25% of build</text>
      <text x="397" y="110" font-family="system-ui,sans-serif" font-size="10" fill="#faedd2" text-anchor="middle">Masonry + internal</text>
      <text x="397" y="125" font-family="system-ui,sans-serif" font-size="10" fill="#faedd2" text-anchor="middle">plastering done</text>
      <rect x="460" y="0" width="100" height="180" fill="#5d7a2f" rx="4"/>
      <text x="510" y="30" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#fff" text-anchor="middle">Stage 5</text>
      <text x="510" y="65" font-family="system-ui,sans-serif" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle">Finishing</text>
      <text x="510" y="90" font-family="system-ui,sans-serif" font-size="11" fill="#e5ebd7" text-anchor="middle">Final 15%</text>
      <text x="510" y="110" font-family="system-ui,sans-serif" font-size="10" fill="#e5ebd7" text-anchor="middle">Occupancy cert</text>
      <text x="510" y="125" font-family="system-ui,sans-serif" font-size="10" fill="#e5ebd7" text-anchor="middle">&amp; completion</text>
    </g>
    <text x="320" y="285" font-family="system-ui,sans-serif" font-size="12" fill="#555" text-anchor="middle">Interest Note: Pre-EMI interest is charged only on the cumulatively disbursed amount, not the sanctioned total.</text>
  `, 'Milestone stages of plot purchase and construction composite loan disbursement by lending institutions.', 'Home loan construction disbursement milestone schedule diagram'),

  // 22. Electricity bill slab calculation
  electricitySlabs: fig(`
    <rect width="640" height="320" fill="#faf8f5" rx="6"/>
    <text x="320" y="28" font-family="system-ui,sans-serif" font-size="16" font-weight="bold" fill="#16231e" text-anchor="middle">Telescopic Electricity Tariff Slab Structure</text>
    <g transform="translate(60, 60)">
      <rect x="0" y="0" width="120" height="180" fill="#e8f2ee" stroke="#2f6b57" stroke-width="2" rx="4"/>
      <text x="60" y="30" font-family="system-ui,sans-serif" font-size="14" font-weight="bold" fill="#2f6b57" text-anchor="middle">0 - 100 Units</text>
      <text x="60" y="65" font-family="system-ui,sans-serif" font-size="18" font-weight="bold" fill="#16231e" text-anchor="middle">₹3.50</text>
      <text x="60" y="85" font-family="system-ui,sans-serif" font-size="11" fill="#555" text-anchor="middle">per kWh unit</text>
      <text x="60" y="130" font-family="system-ui,sans-serif" font-size="11" fill="#666" text-anchor="middle">Subsidized</text>
      <text x="60" y="150" font-family="system-ui,sans-serif" font-size="11" fill="#666" text-anchor="middle">Lifeline tier</text>
    </g>
    <g transform="translate(195, 60)">
      <rect x="0" y="0" width="120" height="180" fill="#eef3fa" stroke="#3d5a80" stroke-width="2" rx="4"/>
      <text x="60" y="30" font-family="system-ui,sans-serif" font-size="14" font-weight="bold" fill="#3d5a80" text-anchor="middle">101 - 250 Units</text>
      <text x="60" y="65" font-family="system-ui,sans-serif" font-size="18" font-weight="bold" fill="#16231e" text-anchor="middle">₹6.20</text>
      <text x="60" y="85" font-family="system-ui,sans-serif" font-size="11" fill="#555" text-anchor="middle">per kWh unit</text>
      <text x="60" y="130" font-family="system-ui,sans-serif" font-size="11" fill="#666" text-anchor="middle">Normal</text>
      <text x="60" y="150" font-family="system-ui,sans-serif" font-size="11" fill="#666" text-anchor="middle">domestic tier</text>
    </g>
    <g transform="translate(330, 60)">
      <rect x="0" y="0" width="120" height="180" fill="#fdf0ea" stroke="#c1502e" stroke-width="2" rx="4"/>
      <text x="60" y="30" font-family="system-ui,sans-serif" font-size="14" font-weight="bold" fill="#c1502e" text-anchor="middle">251 - 400 Units</text>
      <text x="60" y="65" font-family="system-ui,sans-serif" font-size="18" font-weight="bold" fill="#16231e" text-anchor="middle">₹8.50</text>
      <text x="60" y="85" font-family="system-ui,sans-serif" font-size="11" fill="#555" text-anchor="middle">per kWh unit</text>
      <text x="60" y="130" font-family="system-ui,sans-serif" font-size="11" fill="#666" text-anchor="middle">Higher</text>
      <text x="60" y="150" font-family="system-ui,sans-serif" font-size="11" fill="#666" text-anchor="middle">consumption</text>
    </g>
    <g transform="translate(465, 60)">
      <rect x="0" y="0" width="120" height="180" fill="#faf0ea" stroke="#7a3b69" stroke-width="2" rx="4"/>
      <text x="60" y="30" font-family="system-ui,sans-serif" font-size="14" font-weight="bold" fill="#7a3b69" text-anchor="middle">&gt; 400 Units</text>
      <text x="60" y="65" font-family="system-ui,sans-serif" font-size="18" font-weight="bold" fill="#16231e" text-anchor="middle">₹10.50+</text>
      <text x="60" y="85" font-family="system-ui,sans-serif" font-size="11" fill="#555" text-anchor="middle">per kWh unit</text>
      <text x="60" y="130" font-family="system-ui,sans-serif" font-size="11" fill="#666" text-anchor="middle">Heavy AC &amp;</text>
      <text x="60" y="150" font-family="system-ui,sans-serif" font-size="11" fill="#666" text-anchor="middle">appliance usage</text>
    </g>
    <text x="320" y="285" font-family="system-ui,sans-serif" font-size="12" fill="#555" text-anchor="middle">Telescopic Principle: Units in higher slabs are charged at higher marginal rates; fixed charges &amp; fuel surcharge are added.</text>
  `, 'Telescopic slab tariff structure illustrating marginal cost progression from low-consumption to high-consumption tiers.', 'Electricity bill slab calculation rate structure diagram'),

  // 23. Solar rooftop system
  solarSystem: fig(`
    <rect width="640" height="320" fill="#faf8f5" rx="6"/>
    <text x="320" y="26" font-family="system-ui,sans-serif" font-size="16" font-weight="bold" fill="#16231e" text-anchor="middle">Grid-Connected Residential Rooftop Solar Architecture</text>
    <g transform="translate(40, 50)">
      <rect x="0" y="30" width="130" height="120" fill="#3d5a80" rx="4"/>
      <text x="65" y="65" font-family="system-ui,sans-serif" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">Solar PV Panels</text>
      <text x="65" y="90" font-family="system-ui,sans-serif" font-size="12" fill="#d8e8e1" text-anchor="middle">Mono PERC Array</text>
      <text x="65" y="115" font-family="system-ui,sans-serif" font-size="11" fill="#d8e8e1" text-anchor="middle">(Generates DC Power)</text>
      <line x1="130" y1="90" x2="165" y2="90" stroke="#c1502e" stroke-width="3"/>
      <text x="148" y="80" font-family="system-ui,sans-serif" font-size="10" font-weight="bold" fill="#c1502e">DC</text>
      <rect x="165" y="30" width="130" height="120" fill="#2f6b57" rx="4"/>
      <text x="230" y="65" font-family="system-ui,sans-serif" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">Solar Inverter</text>
      <text x="230" y="90" font-family="system-ui,sans-serif" font-size="12" fill="#d8e8e1" text-anchor="middle">Grid-Tied MPPT</text>
      <text x="230" y="115" font-family="system-ui,sans-serif" font-size="11" fill="#d8e8e1" text-anchor="middle">(Converts to 230V AC)</text>
      <line x1="295" y1="90" x2="330" y2="90" stroke="#2f6b57" stroke-width="3"/>
      <text x="312" y="80" font-family="system-ui,sans-serif" font-size="10" font-weight="bold" fill="#2f6b57">AC</text>
      <rect x="330" y="30" width="120" height="120" fill="#b8842a" rx="4"/>
      <text x="390" y="65" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#fff" text-anchor="middle">Home Loads</text>
      <text x="390" y="90" font-family="system-ui,sans-serif" font-size="11" fill="#faedd2" text-anchor="middle">Fans, Lights, AC</text>
      <text x="390" y="115" font-family="system-ui,sans-serif" font-size="11" fill="#faedd2" text-anchor="middle">(Self Consumption)</text>
      <line x1="450" y1="90" x2="480" y2="90" stroke="#16231e" stroke-width="3"/>
      <rect x="480" y="30" width="100" height="120" fill="#7a3b69" rx="4"/>
      <text x="530" y="60" font-family="system-ui,sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">Bi-Directional</text>
      <text x="530" y="80" font-family="system-ui,sans-serif" font-size="12" font-weight="bold" fill="#fff" text-anchor="middle">Net Meter</text>
      <text x="530" y="105" font-family="system-ui,sans-serif" font-size="10" fill="#eed9e7" text-anchor="middle">Import / Export</text>
      <text x="530" y="125" font-family="system-ui,sans-serif" font-size="10" fill="#eed9e7" text-anchor="middle">Discom Grid</text>
    </g>
    <rect x="50" y="200" width="540" height="55" fill="#fff" stroke="#2f6b57" stroke-width="1.5" rx="4"/>
    <text x="320" y="222" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#2f6b57" text-anchor="middle">PM Surya Ghar Subsidy Benchmark (2026):</text>
    <text x="320" y="242" font-family="system-ui,sans-serif" font-size="12" fill="#333" text-anchor="middle">1 kW: ₹30,000 | 2 kW: ₹60,000 | 3 kW+: Maximum ₹78,000 Central Subsidy.</text>
    <text x="320" y="295" font-family="system-ui,sans-serif" font-size="11" fill="#666" text-anchor="middle">Average generation: 1 kWp installed capacity generates ~4.0 units (kWh) of clean electricity per sunny day in India.</text>
  `, 'Schematic flow of on-grid rooftop solar architecture: solar PV array, string inverter, domestic loads, bi-directional net meter, and discom grid.', 'Rooftop solar on-grid architecture and net metering diagram'),

  // 24. Inverter battery sizing
  inverterSizing: fig(`
    <rect width="640" height="320" fill="#faf8f5" rx="6"/>
    <text x="320" y="28" font-family="system-ui,sans-serif" font-size="16" font-weight="bold" fill="#16231e" text-anchor="middle">How to Size Home Inverter (VA) and Battery (Ah)</text>
    <g transform="translate(60, 60)">
      <rect x="0" y="0" width="240" height="180" fill="#fff" stroke="#2f6b57" stroke-width="2" rx="4"/>
      <text x="120" y="30" font-family="system-ui,sans-serif" font-size="15" font-weight="bold" fill="#2f6b57" text-anchor="middle">1. Inverter Sizing (VA)</text>
      <text x="120" y="60" font-family="system-ui,sans-serif" font-size="12" fill="#555" text-anchor="middle">Total Running Load (Watts)</text>
      <text x="120" y="80" font-family="system-ui,sans-serif" font-size="12" fill="#555" text-anchor="middle">÷ Power Factor (0.8)</text>
      <rect x="20" y="105" width="200" height="55" fill="#e8f2ee" rx="3"/>
      <text x="120" y="127" font-family="system-ui,sans-serif" font-size="11" font-weight="bold" fill="#2f6b57" text-anchor="middle">Example: 500W load</text>
      <text x="120" y="147" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#16231e" text-anchor="middle">500 ÷ 0.8 = 625 VA → 900 VA</text>
    </g>
    <g transform="translate(340, 60)">
      <rect x="0" y="0" width="240" height="180" fill="#fff" stroke="#c1502e" stroke-width="2" rx="4"/>
      <text x="120" y="30" font-family="system-ui,sans-serif" font-size="15" font-weight="bold" fill="#c1502e" text-anchor="middle">2. Battery Sizing (Ah)</text>
      <text x="120" y="60" font-family="system-ui,sans-serif" font-size="12" fill="#555" text-anchor="middle">(Watts × Backup Hours)</text>
      <text x="120" y="80" font-family="system-ui,sans-serif" font-size="12" fill="#555" text-anchor="middle">÷ (12V Battery × 0.8 Efficiency)</text>
      <rect x="20" y="105" width="200" height="55" fill="#fdf0ea" rx="3"/>
      <text x="120" y="127" font-family="system-ui,sans-serif" font-size="11" font-weight="bold" fill="#c1502e" text-anchor="middle">Example: 500W for 3 hours</text>
      <text x="120" y="147" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#16231e" text-anchor="middle">1,500 ÷ 9.6 ≈ 156 Ah → 150/180 Ah</text>
    </g>
    <text x="320" y="285" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#16231e" text-anchor="middle">Battery Type: Tubular lead-acid or Lithium-ion (LiFePO4) with pure sine wave inverter.</text>
  `, 'Formula flowchart explaining home inverter VA capacity and battery Ah calculation for residential power backup.', 'Inverter VA and battery Ah calculation formula diagram'),

  // 25. Water tank demand & sizing
  waterTank: fig(`
    <rect width="640" height="320" fill="#faf8f5" rx="6"/>
    <text x="320" y="26" font-family="system-ui,sans-serif" font-size="16" font-weight="bold" fill="#16231e" text-anchor="middle">Water Storage Planning per NBC 2016 Norms</text>
    <g transform="translate(60, 55)">
      <rect x="0" y="0" width="520" height="45" fill="#3d5a80" rx="3"/>
      <text x="260" y="28" font-family="system-ui,sans-serif" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">NBC 2016 Standard: 135 Litres Per Person Per Day (5-person family = 675 L/day)</text>
      <g transform="translate(30, 65)">
        <rect x="0" y="0" width="200" height="120" fill="#eef3fa" stroke="#3d5a80" stroke-width="2" rx="4"/>
        <text x="100" y="28" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#3d5a80" text-anchor="middle">Underground Sump</text>
        <text x="100" y="55" font-family="system-ui,sans-serif" font-size="18" font-weight="bold" fill="#16231e" text-anchor="middle">3,000 to 5,000 L</text>
        <text x="100" y="80" font-family="system-ui,sans-serif" font-size="11" fill="#555" text-anchor="middle">60% of total storage</text>
        <text x="100" y="100" font-family="system-ui,sans-serif" font-size="11" fill="#555" text-anchor="middle">Holds 2-3 days supply</text>
      </g>
      <g transform="translate(290, 65)">
        <rect x="0" y="0" width="200" height="120" fill="#e8f2ee" stroke="#2f6b57" stroke-width="2" rx="4"/>
        <text x="100" y="28" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#2f6b57" text-anchor="middle">Overhead Tank (OHT)</text>
        <text x="100" y="55" font-family="system-ui,sans-serif" font-size="18" font-weight="bold" fill="#16231e" text-anchor="middle">1,000 to 1,500 L</text>
        <text x="100" y="80" font-family="system-ui,sans-serif" font-size="11" fill="#2f6b57" text-anchor="middle">40% of total storage</text>
        <text x="100" y="100" font-family="system-ui,sans-serif" font-size="11" fill="#2f6b57" text-anchor="middle">Gravity distribution</text>
      </g>
    </g>
    <text x="320" y="290" font-family="system-ui,sans-serif" font-size="13" font-weight="bold" fill="#c1502e" text-anchor="middle">Volume Conversion: 1 Cubic Metre = 1,000 Litres (1 cu ft ≈ 28.3 litres).</text>
  `, 'Household water storage demand diagram based on NBC 2016 135 lpcd standard, comparing underground sump and overhead tank capacities.', 'Water tank capacity planning underground sump and overhead tank diagram')
};


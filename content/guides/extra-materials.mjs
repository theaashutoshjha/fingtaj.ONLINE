// Expanded sections for Building Materials flagship guides.
import { DIAGRAMS } from './diagrams.mjs';

export default {
  'types-of-cement-opc-ppc-psc': [
    ['Cement Types and Hydration Matrix', DIAGRAMS.cementTypes],
    ['State-wise cement selection and environmental exposure (As on November 2026)',
      { table: [
        ['Region / State', 'Dominant Soil / Exposure Condition', 'Recommended Cement Type per IS 456', 'Key Construction Rationale'],
        [
          ['Coastal Maharashtra & Goa', 'Severe marine exposure, high salinity & humidity', 'Portland Slag Cement (PSC) or PPC', 'Prevents chloride attack on reinforcement rebar and reduces permeability.'],
          ['Karnataka & Interior Deccan', 'Normal inland, hard granite bedrock', 'PPC (IS 1489 Part 1) or OPC 43/53', 'PPC provides superior long-term durability and cohesive plastering mortar.'],
          ['Coastal Tamil Nadu & Kerala', 'High groundwater, tidal saline environment', 'PSC (IS 455) or Sulfate-Resistant PPC', 'Resists ground sulfate expansion and prevents concrete spalling.'],
          ['Punjab, Haryana & UP', 'Alluvial plains, temperature extremes (0°C to 48°C)', 'PPC for general RCC; OPC 53 for winter cold pour', 'PPC prevents thermal cracking during intense summer hydration.'],
          ['Rajasthan (Desert / Saline)', 'High sulfate alkaline soils, arid climate', 'Sulfate-Resisting Portland Cement or PPC', 'Protects substructure concrete footings from alkaline mineral expansion.']
        ]
      ] },
      'Under IS 456:2000 (Table 4 and Table 5), environmental exposure is categorized from "Mild" to "Extreme". Coastal and aggressive soil conditions mandate blended cements (PPC/PSC) with low permeability rather than high-early-strength pure OPC.'
    ],
    ['Common mistakes when purchasing and storing cement',
      [
        'Using OPC 53 for general wall plastering and brickwork: High heat of hydration in OPC 53 causes rapid drying shrinkage, resulting in extensive map cracking on plastered surfaces.',
        'Accepting cement bags manufactured more than 90 days earlier: Per IS 269 and IS 1489, cement strength drops by roughly 20% after 3 months of atmospheric storage.',
        'Mixing different cement brands or grades in the same concrete slab or plaster batch, creating uneven setting rates and structural stress cracks.',
        'Storing cement bags directly on bare concrete floors or against exterior walls: Always stack on wooden pallets raised at least 150mm above the ground and 300mm away from walls.',
        'Stopping curing too early: Blended cements (PPC and PSC) hydrate more slowly and require a mandatory minimum of 10 to 14 days of wet curing compared to 7 days for OPC.'
      ]
    ],
    ['Checklist for receiving cement bags at the construction site',
      { ol: [
        'Inspect the manufacturer packaging for the official BIS Standard Mark (ISI mark) and license CM/L number.',
        'Check the printed date of manufacture (Week and Year) printed on the side edge of every bag; reject stock older than 60–90 days.',
        'Verify the grade and type: "OPC 53", "OPC 43", "PPC (Fly Ash Based)", or "PSC".',
        'Check bag condition: Reject torn, damp, or re-stitched bags, or bags containing hard lumps that cannot be powdered between your fingers.',
        'Perform basic field quality tests: Insert your dry hand into a bag (it should feel cool, not warm) and pinch a sample (it should feel silky smooth without gritty sand).',
        'Store in a completely weather-tight shed in stacks no higher than 10 bags to prevent warehouse set (compaction hardening).'
      ] }
    ],
    ['Worked numerical example for a 1,200 sq ft RCC slab',
      'Suppose an owner is casting a 1,200 sq ft residential roof slab of 5 inches (0.4167 ft) thickness using standard M20 nominal concrete mix (1:1.5:3). Let us calculate the exact number of cement bags required.',
      'Step 1 (Calculate Wet Concrete Volume): Wet Volume = 1,200 sq ft × 0.4167 ft = 500 cubic feet = 14.16 cubic metres.',
      'Step 2 (Apply Dry Volume Expansion Factor): As detailed on our How We Calculate page, concrete shrinks during mixing as water fills voids. The standard dry volume factor is 1.54. Dry Mix Volume = 14.16 m³ × 1.54 = 21.81 m³.',
      'Step 3 (Calculate Cement Volume): In an M20 mix (1 part cement + 1.5 parts sand + 3 parts aggregate = 5.5 total parts), cement share = 1 ÷ 5.5 = 18.18% of dry volume. Cement Volume = 21.81 m³ × (1 / 5.5) = 3.965 m³.',
      'Step 4 (Convert to 50 kg Bags): One standard 50 kg cement bag has a volume of 0.0347 m³ (based on density of 1,440 kg/m³). Number of Bags = 3.965 m³ ÷ 0.0347 m³/bag = 114.2 bags. Adding standard 5% on-site handling and shuttering wastage gives 114.2 × 1.05 = 120 bags.',
      'Conclusion: For this 1,200 sq ft slab, order exactly 120 bags of cement. Whether you choose PPC or OPC, the volume calculation remains 120 bags, but PPC will demand at least 10 days of continuous water ponding.',
      '<!-- [OWNER: add real photo of cement bag date stamping and site stacking on wooden pallets] -->'
    ],
    ['Sources and official standards',
      [
        'IS 456:2000 (Reaffirmed 2021) – Plain and Reinforced Concrete: Code of Practice.',
        'IS 269:2015 – Ordinary Portland Cement: Specification (33, 43 and 53 Grades).',
        'IS 1489 (Part 1):2015 – Portland Pozzolana Cement: Specification (Fly Ash Based).',
        'IS 455:2015 – Portland Slag Cement: Specification.',
        'CPWD Specifications 2019 (Volume 1) – Section 3: Mortar and Section 4: Concrete Work.'
      ]
    ]
  ],

  'tmt-steel-grades-fe500-fe500d-fe550': [
    ['TMT Bar Cross-Section and Mass Formula', DIAGRAMS.tmtSteel],
    ['State-wise seismic zoning and recommended TMT steel grades (As on November 2026)',
      { table: [
        ['State / Territory', 'Primary Seismic Zone (IS 1893)', 'Mandatory / Recommended Steel Grade', 'Key Structural Hazard Factor'],
        [
          ['Delhi / NCR', 'Zone IV (Severe Seismic Risk)', 'Fe 500D or Fe 550D only', 'High earthquake vulnerability requires minimum 16% elongation to absorb lateral ground shocks without brittle rebar fracture.'],
          ['Uttarakhand & Himachal', 'Zone IV & Zone V (Very Severe)', 'Fe 500D (Ductile Grade)', 'Tectonic fault lines require high ductility rebars that deform plastically during tremors.'],
          ['Maharashtra (Mumbai/Pune)', 'Zone III (Moderate Seismic Risk)', 'Fe 500 or Fe 500D', 'Zone III RCC frames require ductile detailing per IS 13920.'],
          ['Tamil Nadu & Karnataka', 'Zone II & Zone III (Low to Moderate)', 'Fe 500 or Fe 550', 'General residential frame design; Fe 500 provides standard structural strength.'],
          ['Gujarat (Kutch / Saurashtra)', 'Zone IV & Zone V (Bhuj fault zone)', 'Fe 500D or Corrosion-Resistant (CRS)', 'High seismic risk combined with coastal salinity demands ductile, corrosion-resistant steel.']
        ]
      ] },
      'The "D" designation in Fe 500D stands for "Ductile". Per IS 1786:2008, standard Fe 500 requires a minimum elongation of 12%, whereas Fe 500D mandates a minimum elongation of 16% with tightly controlled phosphorus and sulphur limits (maximum 0.040% each).'
    ],
    ['Common mistakes when purchasing and inspecting TMT steel',
      [
        'Buying commercial re-rolled steel instead of primary primary-producer TMT: Secondary re-rolled bars often fail elongation and tensile strength tests and lack uniform ribbed bonding.',
        'Purchasing steel without verifying weight per metre (rolling margin): Under-weight bars may save upfront cost but violate structural engineering safety tolerances.',
        'Allowing steel to rust heavily on bare earth: Light brownish surface patina is normal, but deep pitting flaking weakens the effective structural cross-section.',
        'Using broken bricks or stones instead of certified concrete/PVC cover blocks: Improper cover exposes rebars to rapid moisture corrosion and concrete spalling.',
        'Bending bars cold beyond 90 degrees and re-straightening them on site: Re-bending severely weakens the crystalline structure of high-strength steel.'
      ]
    ],
    ['Checklist for on-site TMT steel verification',
      { ol: [
        'Inspect the rolled marking on the bar surface: Confirm brand name, diameter (e.g. 12mm), and grade ("Fe 500D") are embossed at 1-metre intervals.',
        'Demand the manufacturer’s Test Certificate (MTC) for the specific batch, checking yield stress (minimum 500 N/mm²) and elongation (minimum 16%).',
        'Cut a precise 1.0-metre sample from a delivery bundle and weigh it on a calibrated platform scale.',
        'Compare measured weight against the theoretical standard formula: `Weight = d² ÷ 162.28 kg/m`. Check that it falls within BIS rolling tolerances (±7% for 8-10mm, ±4% for 16mm+).',
        'Ensure rebar is stored on elevated wooden or concrete sleepers at least 200mm above ground, covered with waterproof tarpaulins.'
      ] }
    ],
    ['Worked numerical example using our Steel Weight Calculator',
      'Suppose a structural drawing specifies reinforcement for 10 RCC columns, each 10 feet (3.048 m) high. Each column requires 4 vertical main bars of 16mm diameter, and 8mm stirrups (lateral ties) spaced at 6 inches (150 mm) c/c with a perimeter of 40 inches (1.016 m) per tie. Let us compute the total steel weight.',
      'Step 1 (Calculate Main Vertical Rebars): 10 columns × 4 bars = 40 bars of 16mm. Length per bar (including 40d foundation lap) = 10 ft + (40 × 0.052 ft) ≈ 12 ft (3.66 m). Total length = 40 × 3.66 m = 146.4 metres. Using formula `d²/162`: 16² ÷ 162 = 1.580 kg/m. Total 16mm weight = 146.4 m × 1.580 kg/m = 231.3 kg.',
      'Step 2 (Calculate 8mm Stirrups): Number of ties per 10-ft column = 20 ties. Total ties for 10 columns = 200 ties. Length per tie (including 135° seismic hooks) = 1.016 m + 0.15 m = 1.166 m. Total 8mm length = 200 × 1.166 m = 233.2 metres. Using formula `8²/162` = 0.395 kg/m. Total 8mm weight = 233.2 m × 0.395 kg/m = 92.1 kg.',
      'Step 3 (Total Weight and Procurement): Total structural weight = 231.3 kg (16mm) + 92.1 kg (8mm) = 323.4 kg. Adding standard 5% cutting and bend wastage gives 323.4 × 1.05 = 339.6 kg (0.34 tonnes).',
      'Conclusion: Our Steel Weight Calculator accurately establishes the bill of quantities before placing orders with distributors, preventing contractor over-ordering or steel theft.',
      '<!-- [OWNER: add real photo of TMT steel rebar inspection showing embossed grade and digital weighbridge slip] -->'
    ],
    ['Sources and official standards',
      [
        'IS 1786:2008 (Reaffirmed 2018) – High Strength Deformed Steel Bars and Wires for Concrete Reinforcement.',
        'IS 13920:2016 – Ductile Design and Detailing of Reinforced Concrete Structures Subjected to Seismic Forces.',
        'IS 456:2000 – Section 5.6: Reinforcement Specifications and Section 26: Detailing Rules.',
        'SP 34:1987 – Handbook on Concrete Reinforcement and Detailing (BIS).',
        'National Building Code of India 2016 (Part 6: Structural Design, Section 5: Concrete).'
      ]
    ]
  ],

  'brick-types-compared-red-fly-ash-aac-concrete': [
    ['Masonry Units Dimension and Property Comparison', DIAGRAMS.brickTypes],
    ['State-wise wall masonry preferences and environmental norms (As on November 2026)',
      { table: [
        ['State / Region', 'Dominant Masonry Choice', 'Government Mandate / Environmental Rule', 'Key Technical Reason'],
        [
          ['Delhi & NCR', 'Fly Ash Bricks & AAC Blocks', 'Red clay brick manufacturing banned within NCR air quality zones', 'Environmental compliance (MoEFCC fly ash utilization notification); high dimensional uniformity.'],
          ['Maharashtra (Mumbai/Pune)', 'AAC Blocks (600×200×150mm)', 'Standard in all mid-rise and high-rise RCC frames', '65% dead load reduction lowers structural column steel; faster laying in high-rises.'],
          ['Karnataka (Bengaluru)', 'Solid Concrete Blocks & AAC', 'Concrete blocks dominate independent houses; AAC in apartments', 'Abundant aggregate quarry supply; high compressive strength (5 to 7.5 N/mm²).'],
          ['Uttar Pradesh & Bihar', 'Traditional Red Clay Bricks (Class 1)', 'Widely available from fertile Gangetic alluvial soil kilns', 'High local mason familiarity; economical for load-bearing single-storey homes.'],
          ['Tamil Nadu (Chennai/Coimbatore)', 'Fly Ash Bricks & Hollow Concrete Blocks', 'Thermal power plant fly ash utilization mandated', 'Smooth surfaces require only 10–12mm plastering compared to 15–20mm for uneven clay bricks.']
        ]
      ] },
      'The Ministry of Environment, Forest and Climate Change (MoEFCC) mandates the progressive utilization of fly ash bricks within a 300 km radius of thermal power plants to preserve agricultural topsoil.'
    ],
    ['Common mistakes during wall masonry work',
      [
        'Using AAC blocks for structural load-bearing walls without RCC frame support: AAC blocks are infill masonry units and lack the point-load capacity required for load-bearing walls.',
        'Failing to soak traditional red clay bricks in clean water for at least 2 hours before laying: Dry clay bricks instantly suck water out of fresh cement mortar, preventing proper hydration and causing weak, powdery joints.',
        'Using thick 15mm cement mortar beds for AAC blocks instead of specialized 2–3mm polymer-modified thin-bed adhesive.',
        'Skipping horizontal RCC bond beams (patli) in 4-inch partition walls exceeding 8 feet in height or 10 feet in length, resulting in wall buckling.',
        'Omitting galvanized wire mesh (chicken mesh) over the junction where brickwork meets RCC columns before plastering, leading to unavoidable settlement cracks.'
      ]
    ],
    ['Checklist for inspecting wall masonry during construction',
      { ol: [
        'Confirm that the foundation or RCC floor slab is thoroughly cleaned and dampened before laying the first masonry course.',
        'Check verticality of every course using a mason’s plumb bob (sahul) and verify horizontal alignment with a spirit level and taut string line.',
        'Ensure uniform joint thickness: 10mm to 12mm for clay and fly ash bricks; 2mm to 3mm for AAC block adhesive.',
        'Verify that frog (indentation) on red bricks is placed facing UPWARDS so it fills completely with mortar to create a mechanical shear key.',
        'Stagger vertical joints (perpend alignment) by at least one-quarter brick length to maintain proper structural bond.',
        'Ensure continuous wet curing of brick masonry joints for a minimum of 7 consecutive days.'
      ] }
    ],
    ['Worked numerical example using our Brick Quantity Calculator',
      'Suppose you are constructing a 9-inch (230 mm) thick exterior boundary wall that is 50 feet long and 8 feet high, with one gate opening of 10 ft × 8 ft. Let us calculate the number of standard modular bricks (190×90×90 mm) and mortar bags required.',
      'Step 1 (Calculate Net Wall Area): Gross wall area = 50 ft × 8 ft = 400 sq ft. Deduct gate opening = 10 ft × 8 ft = 80 sq ft. Net wall area = 400 − 80 = 320 sq ft.',
      'Step 2 (Calculate Masonry Volume): Wall thickness = 9 inches = 0.75 ft. Net masonry volume = 320 sq ft × 0.75 ft = 240 cubic feet = 6.796 cubic metres.',
      'Step 3 (Calculate Brick Count): Nominal modular brick size with mortar joint is 200 mm × 100 mm × 100 mm (0.2m × 0.1m × 0.1m = 0.002 m³). Bricks per m³ = 1 ÷ 0.002 = 500 bricks. Total bricks = 6.796 m³ × 500 = 3,398 bricks. Adding 5% on-site breakage and cutting wastage gives 3,398 × 1.05 = 3,568 bricks.',
      'Step 4 (Calculate Mortar Quantity): In 9-inch brickwork, mortar occupies approximately 25% to 28% of total masonry volume (approx 1.80 m³). Using a standard 1:6 cement-to-sand mix, this requires approximately 7 bags of cement and 58 cubic feet of sand.',
      'Conclusion: Our Brick Quantity Calculator produces these verified counts instantly, enabling accurate procurement and avoiding material overages.',
      '<!-- [OWNER: add real photo of brick masonry laying showing plumb bob check and frog facing up] -->'
    ],
    ['Sources and official standards',
      [
        'IS 1077:1992 – Common Burnt Clay Building Bricks: Specification.',
        'IS 2185 (Part 3):1984 – Concrete Masonry Units: Autoclaved Cellular (Aerated) Concrete Blocks.',
        'IS 12894:2002 – Pulverized Fuel Ash-Lime Bricks: Specification.',
        'IS 2212:1991 – Code of Practice for Brickwork (BIS).',
        'CPWD Specifications 2019 (Volume 1) – Section 6: Brick Work.'
      ]
    ]
  ],

  'concrete-grades-m15-m20-m25-explained': [
    ['Concrete Grades & Nominal Mix Hierarchy', DIAGRAMS.concreteGrades],
    ['State-wise concrete mix practices and testing standards (As on November 2026)',
      { table: [
        ['State / Agency', 'Minimum Structural RCC Grade', 'Nominal Mix vs Design Mix Policy', 'Official Testing Authority'],
        [
          ['CPWD (All India)', 'M25 for all RCC structural members', 'Nominal mixes restricted to M20; M25 and above strictly design mix', 'CPWD Specifications 2019 (cpwd.gov.in)'],
          ['Maharashtra (BMC / PWD)', 'M20 minimum; M25 coastal / high-rise', 'Ready Mix Concrete (RMC) mandatory in municipal corporation limits', 'BMC Building Proposal Dept / PWD Maharashtra'],
          ['Karnataka (BBMP / PWD)', 'M20 for G+1; M25 for G+2 and above', 'Batching plant / weigh-batcher mandatory on commercial pours', 'Karnataka PWD Specifications'],
          ['Uttar Pradesh PWD', 'M20 for rural/semi-urban; M25 urban', 'Gauge box (farmi) volumetric batching permitted only under 50 m³', 'UP PWD Schedule of Rates'],
          ['Tamil Nadu PWD', 'M20 minimum; M25 for all water-retaining sumps', 'Continuous cube compressive testing mandated per 15 m³ batch', 'TNPWD Building Division']
        ]
      ] },
      'Per IS 456:2000 Clause 6.1, concrete grades are designated by "M" (for Mix) followed by the characteristic compressive strength in N/mm² (MPa) tested on a 150mm cube at 28 days of wet curing.'
    ],
    ['Common mistakes during concrete batching, pouring and curing',
      [
        'Adding excess water on site to increase workability: Increasing water-cement ratio from 0.45 to 0.65 reduces 28-day concrete compressive strength by nearly 40% and causes severe surface dusting.',
        'Batching ingredients by arbitrary shovel counts instead of standardized wooden gauge boxes (farmi): Shovel measurement causes wild fluctuations in cement-sand proportions.',
        'Pouring concrete from a height exceeding 1.5 metres: Free-fall pouring causes immediate segregation, where heavy coarse aggregates separate from cement slurry.',
        'Over-vibrating with needle vibrators: Vibrating beyond 10–15 seconds per insertion forces aggregates to sink to the bottom and pumps weak cement laitance to the top.',
        'Removing slab formwork props prematurely: Stripping props before the specified period (7 days for slabs up to 4.5m span; 14 days for beams) causes structural micro-cracking and excessive deflection.'
      ]
    ],
    ['Checklist for RCC slab casting day quality control',
      { ol: [
        'Inspect shuttering formwork: Verify that centering plates are watertight, props are plumb and braced, and form oil has been applied evenly.',
        'Check reinforcement rebar placement against structural drawings: Verify bar diameter, spacing, cranked bars, and cover blocks (20mm for slabs).',
        'Ensure electrical conduit pipes and fan boxes are securely wired to rebars and sealed with tape to prevent cement slurry ingress.',
        'Prepare standardized wooden gauge boxes (farmi: 300mm × 300mm × 385mm = 34.7 litres = 1 cement bag volume) for volumetric batching.',
        'Cast at least 6 standard test cubes (150×150×150 mm) during the pour: 3 cubes to be crushed at 7 days and 3 cubes at 28 days.',
        'Commence continuous water curing (ponding method with mortar bunds) within 12 to 14 hours after the slab has set.'
      ] }
    ],
    ['Worked numerical example using our Concrete Calculator',
      'Suppose an owner is casting an RCC ground beam and column footing batch requiring 5.0 cubic metres of compacted wet concrete using an M20 nominal mix (1:1.5:3). Let us calculate the exact quantities of cement bags, sand, and 20mm crushed stone aggregate.',
      'Step 1 (Dry Volume Calculation): Wet volume = 5.0 m³. Applying standard IS 456 dry volume coefficient of 1.54: Dry volume = 5.0 × 1.54 = 7.70 m³.',
      'Step 2 (Cement Requirement): Sum of mix parts = 1 + 1.5 + 3 = 5.5. Cement volume = 7.70 × (1 ÷ 5.5) = 1.40 m³. Since 1 cement bag = 0.0347 m³, Bags = 1.40 ÷ 0.0347 = 40.35 bags. Adding 5% site wastage = 42 bags.',
      'Step 3 (Sand Requirement): Sand volume = 7.70 × (1.5 ÷ 5.5) = 2.10 m³. Converting to cubic feet (1 m³ = 35.3147 cu ft): Sand = 2.10 × 35.3147 = 74.16 cu ft (approx 0.74 brass; ~3.3 tonnes).',
      'Step 4 (Coarse Aggregate Requirement): Aggregate volume = 7.70 × (3 ÷ 5.5) = 4.20 m³. In cubic feet: 4.20 × 35.3147 = 148.32 cu ft (approx 1.48 brass; ~6.3 tonnes of 20mm aggregate).',
      'Conclusion: Our Concrete Calculator computes these proportions automatically. By measuring dry ingredients with a farmi box rather than shovels, the concrete achieves its full 20 N/mm² design strength without cracking.',
      '<!-- [OWNER: add real photo of concrete cube casting and slump cone test on site] -->'
    ],
    ['Sources and official standards',
      [
        'IS 456:2000 (Reaffirmed 2021) – Plain and Reinforced Concrete: Code of Practice.',
        'IS 516:1959 (Reaffirmed 2018) – Methods of Tests for Strength of Concrete.',
        'IS 1199:2018 (Parts 1 to 7) – Methods of Sampling and Analysis of Concrete (Slump & Workability).',
        'IS 10262:2019 – Concrete Mix Proportioning: Guidelines (Design Mix Standards).',
        'IS 383:2016 – Coarse and Fine Aggregate for Concrete: Specification.'
      ]
    ]
  ]
};

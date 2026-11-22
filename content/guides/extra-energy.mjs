// Expanded sections for Power, Solar & Water flagship guides.
import { DIAGRAMS } from './diagrams.mjs';

export default {
  'how-electricity-bill-is-calculated-in-india': [
    ['Telescopic Tariff Slab Structure', DIAGRAMS.electricitySlabs],
    ['State-wise domestic electricity tariff structures (As on November 2026)',
      { table: [
        ['State / Discom', 'Typical Domestic Slab Structure', 'Fixed Monthly Charges', 'Regulatory Authority / Tariff Order'],
        [
          ['Maharashtra (MSEDCL)', '0-100: ₹5.88; 101-300: ₹11.26; 301-500: ₹15.72; >500: ₹17.81', '₹138/single-phase/month', 'MERC Multi-Year Tariff Order (merc.gov.in)'],
          ['Karnataka (BESCOM)', 'Simplified 2-tier: 0-100 units: ₹4.75; >100 units: ₹7.00', '₹70 to ₹110 per kW of sanctioned load', 'KERC Tariff Order 2023-24 (kerc.karnataka.gov.in)'],
          ['Delhi (BSES / TPDDL)', '0-200: Free (Zero bill subsidy); 201-400: ₹4.50 (50% subsidy); >400: ₹6.50-₹8.00', '₹20 to ₹125 per kW of sanctioned load', 'DERC Tariff Regulations (derc.gov.in)'],
          ['Uttar Pradesh (UPPCL)', '0-150: ₹5.50; 151-300: ₹6.00; 301-500: ₹6.50; >500: ₹7.00', '₹110 per kW of sanctioned load/month', 'UPERC Tariff Order (uperc.org)'],
          ['Tamil Nadu (TANGEDCO)', 'First 100 units free; 101-200: ₹2.25; 201-400: ₹4.50; 401-500: ₹6.00; >500: ₹8.00+', 'Fixed bi-monthly charge linked to slabs', 'TNERC Tariff Regulations (tnerc.gov.in)']
        ]
      ] },
      'Domestic electricity tariffs in India are determined by State Electricity Regulatory Commissions (SERCs) using "telescopic" billing. In a telescopic system, your consumption is divided into incremental blocks, with each successive block billed at a higher marginal rate.'
    ],
    ['Common misunderstandings regarding electricity bills',
      [
        'Thinking that crossing a slab raises the rate on all units: In a telescopic system, if you consume 250 units, the first 100 units are still billed at the lower Tier-1 rate, and only the excess 150 units are charged at Tier-2.',
        'Ignoring Fuel and Power Purchase Cost Adjustment (FPPCA / FAC): Discoms add a floating per-unit fuel surcharge (typically ₹0.30 to ₹1.50/unit) that fluctuates monthly depending on coal and gas prices.',
        'Underestimating the cost of excess sanctioned load: Having a sanctioned load of 7 kW when your peak demand is only 3 kW incurs unnecessary fixed monthly demand charges month after month.',
        'Overlooking power factor penalties on high-consumption single-phase or three-phase domestic connections.',
        'Leaving phantom loads (inverter idle consumption, old geysers, unmaintained ACs) running 24/7, which easily adds 50 to 100 units monthly.'
      ]
    ],
    ['Actionable checklist to audit and lower your monthly power bill',
      { ol: [
        'Inspect your monthly bill statement to identify your Sanctioned Load (kW) and compare it against your actual Maximum Demand Indicator (MDI) reading.',
        'If MDI consistently stays below 50% of sanctioned load for 12 months, apply for load reduction on the discom portal to cut fixed monthly charges.',
        'Verify that your meter is telescopic by checking that the unit breakdown matches the official SERC tariff order.',
        'Replace all incandescent and CFL bulbs with 5-star Bureau of Energy Efficiency (BEE) LED lighting.',
        'Use our Appliance Energy Calculator to audit high-consumption appliances (ACs, water geysers, water pumps, refrigerators).',
        'Consider grid-tied rooftop solar if your monthly consumption consistently exceeds 300 to 400 units, taking advantage of the PM Surya Ghar subsidy.'
      ] }
    ],
    ['Worked numerical example using our Electricity Bill Calculator',
      'Suppose a household in Maharashtra (MSEDCL) with a 3 kW single-phase domestic connection consumes 350 kWh (units) in a month. Let us calculate the total electricity bill using standard MSEDCL telescopic slabs.',
      'Step 1 (Calculate Energy Charges Across Slabs):',
      '• Slab 1 (First 100 units at ₹5.88): 100 × ₹5.88 = ₹588.00.',
      '• Slab 2 (Next 200 units at ₹11.26, from 101 to 300): 200 × ₹11.26 = ₹2,252.00.',
      '• Slab 3 (Remaining 50 units at ₹15.72, from 301 to 350): 50 × ₹15.72 = ₹786.00.',
      '• Total Energy Charges = ₹588 + ₹2,252 + ₹786 = ₹3,626.00.',
      'Step 2 (Add Fixed Charges): Fixed single-phase monthly charge = ₹138.00.',
      'Step 3 (Add Fuel Adjustment Charge - FAC): At ₹0.65 per unit: 350 × ₹0.65 = ₹227.50.',
      'Step 4 (Add State Electricity Duty): Government of Maharashtra levies 16% electricity duty on (Energy Charges + Fixed Charges + FAC): 16% of (₹3,626 + ₹138 + ₹227.50) = 16% of ₹3,991.50 = ₹638.64.',
      'Step 5 (Grand Total Bill): ₹3,991.50 + ₹638.64 = ₹4,630.14 (Effective average cost = ₹13.23 per unit).',
      'Conclusion: Our Electricity Bill Calculator breaks down these identical layers so you can identify exactly how much crossing into upper slabs costs your household.',
      '<!-- [OWNER: add real photo of digital smart meter reading and printed discom electricity bill] -->'
    ],
    ['Sources and official standards',
      [
        'Electricity Act, 2003 – Sections 61 and 62 (Tariff Determination by Regulatory Commissions).',
        'State Electricity Regulatory Commissions (MERC, KERC, DERC, UPERC, TNERC) Annual Tariff Orders.',
        'Bureau of Energy Efficiency (BEE) – Standards & Labelling Program for Household Appliances.',
        'Central Electricity Authority (CEA) – National Electricity Plan (Distribution).',
        'Discom Consumer Charters (MSEDCL, BESCOM, BSES Rajdhani, UPPCL, TANGEDCO).'
      ]
    ]
  ],

  'rooftop-solar-for-home-complete-guide': [
    ['On-Grid Solar System Architecture', DIAGRAMS.solarSystem],
    ['State-wise solar subsidies under PM Surya Ghar Muft Bijli Yojana (As on November 2026)',
      { table: [
        ['System Capacity', 'Central Government Subsidy (CFA)', 'Estimated Turnkey Cost (Excl. Subsidy)', 'Net Owner Investment', 'Average Daily Generation'],
        [
          ['1 kW System', '₹30,000 fixed', '₹60,000 - ₹75,000', '₹30,000 - ₹45,000', '4.0 to 4.5 units (kWh) / day'],
          ['2 kW System', '₹60,000 fixed', '₹1,20,000 - ₹1,45,000', '₹60,000 - ₹85,000', '8.0 to 9.0 units (kWh) / day'],
          ['3 kW System', '₹78,000 (Maximum cap)', '₹1,75,000 - ₹2,10,000', '₹97,000 - ₹1,32,000', '12.0 to 14.0 units (kWh) / day'],
          ['4 kW to 10 kW', '₹78,000 (Capped at 3kW level)', '₹50,000 to ₹55,000 per kW', 'Cost minus ₹78,000', '4.0 to 4.5 units per kW / day'],
          ['Housing Societies (GHS)', '₹18,000 per kW (up to 500 kW)', '₹45,000 - ₹52,000 per kW', 'Cost minus subsidy', 'Powers common lifts, pumps, lighting']
        ]
      ] },
      'The PM Surya Ghar: Muft Bijli Yojana launched by the Ministry of New and Renewable Energy (MNRE) provides direct benefit transfer (DBT) subsidies deposited directly into the homeowner’s bank account following discom net meter commissioning.'
    ],
    ['Common mistakes during rooftop solar installation',
      [
        'Installing solar panels in shaded areas: A shadow covering even 10% of a panel can reduce the output of the entire series string by 50% due to module cell bypass diode activation.',
        'Buying panels that are not approved on the ALMM (Approved List of Models and Manufacturers): Systems with non-ALMM panels are strictly ineligible for government subsidy.',
        'Mounting panels facing North or flat without tilt: In India (Northern Hemisphere), solar panels must face TRUE SOUTH at an angle roughly equal to the local latitude (typically 12° in South India to 28° in North India).',
        'Using undersized aluminium DC cabling instead of certified copper solar cable (4mm² or 6mm² UV-resistant cross-linked polyethylene).',
        'Skipping independent dedicated earthing (grounding) and lightning arresters: Direct lightning strikes will instantly destroy string inverters and home appliances.'
      ]
    ],
    ['Step-by-step checklist to apply for PM Surya Ghar rooftop solar',
      { ol: [
        'Register on the National Portal for Rooftop Solar (`pmsuryaghar.gov.in`) with your consumer account number and mobile number.',
        'Submit your application for rooftop solar feasibility approval from your local distribution company (DISCOM).',
        'Upon feasibility approval, select a registered, empanelled vendor who uses ALMM-approved DCR (Domestic Content Requirement) solar modules.',
        'Install the system: Monocrystalline PERC panels, grid-tied string inverter, and galvanized structural mounting frame elevated at least 1.5m above terrace floor.',
        'Submit work completion report and net-metering application on the national portal.',
        'DISCOM inspects the installation, installs the bi-directional net meter, and commissions the system.',
        'Submit bank details (cancelled cheque); the central subsidy (up to ₹78,000) is credited directly to your bank account within 30 days.'
      ] }
    ],
    ['Worked numerical example using our Solar Rooftop Calculator',
      'Suppose a household in Bengaluru consumes an average of 420 units (kWh) of electricity per month, paying an average electricity bill of ₹3,400 monthly. Let us size the rooftop solar system and calculate payback.',
      'Step 1 (Determine Daily Energy Demand): Monthly units = 420 kWh. Daily units = 420 ÷ 30 = 14.0 kWh per day.',
      'Step 2 (Size Solar System Capacity): Under standard Indian solar insolation, 1 kWp installed capacity generates ~4.0 units per day. Required capacity = 14.0 kWh ÷ 4.0 kWh/kWp = 3.5 kWp. Sizing to a standard 3.0 kWp grid-tied system covers ~360 units monthly (approx 86% of total consumption).',
      'Step 3 (Calculate Roof Shadow-Free Space): Modern Monocrystalline PERC panels require approximately 80 to 100 sq ft per kW. A 3 kW system requires roughly 250 to 300 sq ft of shadow-free rooftop space.',
      'Step 4 (Calculate Capital Outlay & Subsidy):',
      '• Gross Turnkey 3 kW System Cost = ₹1,85,000.',
      '• PM Surya Ghar Central Financial Assistance = ₹78,000.',
      '• Net Investment Paid by Homeowner = ₹1,85,000 − ₹78,000 = ₹1,07,000.',
      'Step 5 (Calculate Annual Savings and ROI Payback):',
      '• Monthly bill savings = ~360 units × ₹7.50/unit = ₹2,700 per month = ₹32,400 per year.',
      '• Simple Payback Period = ₹1,07,000 ÷ ₹32,400 = 3.3 years.',
      '• Lifespan: Solar panels come with a 25-year performance warranty. After payback in Year 4, the household receives free electricity for the remaining 21+ years.',
      'Conclusion: Our Solar Rooftop Calculator helps you model exact system sizes, subsidy amounts, and payback timelines.',
      '<!-- [OWNER: add real photo of rooftop solar panel array facing south with net meter setup] -->'
    ],
    ['Sources and official standards',
      [
        'Ministry of New and Renewable Energy (MNRE) – PM Surya Ghar: Muft Bijli Yojana Operational Guidelines (pmsuryaghar.gov.in).',
        'MNRE Approved List of Models and Manufacturers (ALMM) for Solar Photovoltaic Modules.',
        'Central Electricity Authority (Technical Standards for Connectivity of the Distributed Generation Resources) Regulations.',
        'IS 16221 (Parts 1 & 2) – Safety Requirements for Grid-Connected Power Inverters for Solar Systems.',
        'State Electricity Regulatory Commissions (SERCs) – Net Metering & Grid Connectivity Regulations.'
      ]
    ]
  ],

  'how-to-size-an-inverter-and-battery-for-home': [
    ['Inverter VA and Battery Ah Sizing Formulas', DIAGRAMS.inverterSizing],
    ['State-wise backup power needs and battery recommendations (As on November 2026)',
      { table: [
        ['Region / Setting', 'Typical Outage Pattern', 'Recommended Inverter Type', 'Recommended Battery Chemistry'],
        [
          ['Tier-1 Metro Urban (e.g. Mumbai, Delhi, Bengaluru)', 'Short, infrequent cuts (15 to 45 mins)', '600 VA to 900 VA Pure Sine Wave', '100 Ah to 150 Ah Tall Tubular or Lithium (LiFePO4). Low cycle demand.'],
          ['Tier-2 / Tier-3 Towns (e.g. Lucknow, Patna, Indore)', 'Moderate cuts (2 to 4 hours daily)', '1,000 VA to 1,500 VA Pure Sine Wave', '150 Ah to 220 Ah Heavy Duty Tall Tubular. High cycle durability.'],
          ['Rural & Semi-Urban Feeder Outages', 'Extended load shedding (6 to 10 hours daily)', '1,500 VA to 2,500 VA (24V system with dual batteries)', 'Dual 200 Ah Tubular batteries in series, or Solar Hybrid Inverter with panel charging.'],
          ['Apartments with Diesel Generator (DG) Backup', 'Instant DG changeover (1 to 2 min delay)', 'Small 600 VA Inverter or UPS mode', 'Small 80 Ah to 100 Ah battery strictly to prevent desktop PC / router reboot.'],
          ['Coastal / High Humidity Zones', 'Summer grid fluctuations during monsoon storms', 'Pure Sine Wave with conformal PCB coating', 'Sealed Gel or Lithium battery to minimize terminal corrosion and acid fumes.']
        ]
      ] },
      'A domestic power backup system consists of two distinct components: the Inverter (rated in VA or Watts), which dictates HOW MANY appliances can run simultaneously; and the Battery (rated in Ah), which dictates HOW LONG those appliances can run.'
    ],
    ['Common mistakes when buying an inverter and battery',
      [
        'Buying a Modified Sine Wave (Square Wave) inverter instead of Pure Sine Wave: Modified sine wave inverters produce high total harmonic distortion (THD), causing annoying humming noises in ceiling fans and overheating television and laptop circuitry.',
        'Equating VA with Watts: Inverters have a power factor (typically 0.8). An 800 VA inverter can deliver only 800 × 0.8 = 640 Watts of actual real power.',
        'Discharging lead-acid batteries beyond 50% Depth of Discharge (DoD): Frequently draining a tubular lead-acid battery to zero cuts its lifespan from 5 years down to less than 18 months.',
        'Neglecting regular distilled water top-ups in tubular batteries: Letting electrolyte levels fall below the minimum indicator causes lead plates to dry out and oxidize irreversibly.',
        'Connecting heavy inductive heating loads (geysers, room heaters, iron, microwave) to a small domestic inverter, which immediately triggers overload tripping.'
      ]
    ],
    ['Step-by-step checklist for sizing and maintaining your power backup',
      { ol: [
        'List all essential appliances needed during a power cut and sum their wattage (e.g. 3 fans = 225W, 4 LED lights = 40W, 1 TV = 100W, 1 WiFi router = 15W; Total = 380W).',
        'Calculate required Inverter VA: Total Watts ÷ 0.8 (Power Factor). Add a 20% future safety margin.',
        'Calculate required Battery Ah: (Total Watts × Required Backup Hours) ÷ (Battery Voltage × Efficiency Factor).',
        'Use our Inverter and Battery Calculator to check your exact numbers before visiting a dealer.',
        'Position the battery in a well-ventilated location away from direct sunlight; ensure battery electrolyte floats are checked every 45 to 60 days.'
      ] }
    ],
    ['Worked numerical example using our Inverter and Battery Calculator',
      'Suppose a family in a Tier-2 town experiences 3-hour power outages during summer evenings. They need to run: 3 ceiling fans (75W each = 225W), 4 LED tubelights (10W each = 40W), 1 television (100W), and 1 Wi-Fi router (15W). Let us calculate the correct inverter VA and battery Ah.',
      'Step 1 (Calculate Total Continuous Load): Total Watts = 225 + 40 + 100 + 15 = 380 Watts.',
      'Step 2 (Size the Inverter): Operating power factor is approx 0.8. Inverter capacity required = 380 W ÷ 0.8 = 475 VA. Adding a 25% safety margin to accommodate starting motor surges = 475 × 1.25 = 593.75 VA. Therefore, a standard commercial 700 VA or 900 VA Pure Sine Wave Inverter is optimal.',
      'Step 3 (Calculate Energy Consumption): Total energy needed for 3 hours of backup = 380 Watts × 3 hours = 1,140 Watt-hours (Wh).',
      'Step 4 (Size the Battery): Assuming a standard single 12V battery system with an inverter efficiency factor of 80% (0.8) to account for heat and battery discharge resistance: Required Ah = 1,140 Wh ÷ (12V × 0.8) = 1,140 ÷ 9.6 = 118.75 Ah.',
      'Step 5 (Apply Battery Safety Factor): To avoid discharging a tubular battery beyond 70% Depth of Discharge (DoD) and ensure 4–5 years of service life, multiply by 1.25: 118.75 × 1.25 = 148.4 Ah. Therefore, a standard commercial 150 Ah Tall Tubular Battery is the perfect match.',
      'Conclusion: Our Inverter and Battery Calculator models these exact electrical equations, preventing you from overspending on an oversized system or suffering premature battery failure.',
      '<!-- [OWNER: add real photo of home inverter and tall tubular battery installation with float level indicators] -->'
    ],
    ['Sources and official standards',
      [
        'IS 13314:1992 – Solid State Inverters for Domestic and Similar Use.',
        'IS 13369:1992 – Stationary Lead-Acid Batteries (With Tubular Positive Plates).',
        'Bureau of Energy Efficiency (BEE) – Star Rating Guidelines for Inverters and Storage Batteries.',
        'National Electrical Code of India (SP 30) – Domestic Electrical Installations and Backup Sizing.',
        'Central Electricity Authority (Safety Requirements for Battery Energy Storage Systems).'
      ]
    ]
  ],

  'water-tank-and-sump-planning-for-a-house': [
    ['Domestic Water Storage Sizing Architecture', DIAGRAMS.waterTank],
    ['State-wise domestic water supply norms and rainfall benchmarks (As on November 2026)',
      { table: [
        ['City / Water Board', 'Official Water Supply Benchmark (NBC 2016)', 'Supply Schedule / Reliability', 'Recommended Storage Reserve Ratio'],
        [
          ['Bengaluru (BWSSB)', '135 to 150 litres per capita per day (lpcd)', 'Alternate days or twice a week in suburbs', 'Underground Sump = 70% of storage (3-day buffer); Overhead Tank = 30%.'],
          ['Chennai (CMWSSB)', '120 to 135 lpcd', 'Intermittent; tanker top-ups common in dry summers', 'Large underground sump (5,000L+) essential for tanker discharge.'],
          ['Delhi (DJB)', '135 to 200 lpcd', 'Piped supply for 2 to 4 hours daily at low pressure', 'Sump with booster pump; 2 days storage capacity.'],
          ['Mumbai (BMC)', '135 to 150 lpcd', 'Daily scheduled piped supply (1 to 3 hours high pressure)', 'Standard 1.5 to 2 days consumption split (60% sump, 40% overhead).'],
          ['Hyderabad (HMWSSB)', '135 to 150 lpcd', 'Alternate day piped supply schedule', 'Dual day storage reserve; mandatory rainwater harvesting pit.']
        ]
      ] },
      'The National Building Code of India 2016 (Part 9: Plumbing Services, Section 1: Water Supply) establishes 135 litres per capita per day (lpcd) as the national design minimum for residential communities with full flushing sewerage systems.'
    ],
    ['Common mistakes when planning water tanks and sumps',
      [
        'Placing underground water sumps too close to septic tanks or sewage soak pits: The National Building Code mandates a minimum 15-metre safety separation to eliminate contamination risks.',
        'Casting underground sumps in brick masonry without proper RCC structural design: Brick sumps crack under earth and water pressure, causing continuous underground leakage or groundwater contamination.',
        'Exceeding structural terrace capacity with oversized overhead tanks: A 2,000-litre water tank weighs over 2.1 tonnes (2,100 kg); it must sit directly over an RCC column or load-bearing beam, never in the middle of a thin slab span.',
        'Omitting fine insect-proof brass wire mesh on the tank overflow and ventilation pipes, allowing mosquitoes to breed.',
        'Failing to provide a proper 1:50 floor slope in the underground sump towards a small submersible pump suction sump pit, making annual cleaning difficult.'
      ]
    ],
    ['Checklist for water tank sizing and construction inspection',
      { ol: [
        'Calculate total daily household water demand: Family members × 135 litres/day (e.g. 5 persons × 135 = 675 L/day).',
        'Determine local municipal supply reliability: For daily supply, store 1.5 to 2 days reserve (approx 1,000L to 1,500L); for alternate-day supply, store 3 to 4 days reserve (3,000L to 4,000L).',
        'Allocate storage split: 60% in underground sump (keeps structural weight low) and 40% in overhead tank (gravity distribution).',
        'Ensure underground sump is cast in waterproof M20/M25 RCC with crystalline waterproofing admixture; perform 7-day water holding test before backfilling.',
        'Use food-grade, multi-layer UV-stabilized polyethylene overhead tanks (e.g. 4-layer or 5-layer tanks with foam insulation to prevent water heating during summer).',
        'Install float valves on both sump and overhead tanks along with an automatic water level controller to prevent dry running and overflow.'
      ] }
    ],
    ['Worked numerical example using our Water Tank Calculator',
      'Suppose an independent 3BHK house in a metro suburb will be occupied by a family of 5 persons. Municipal piped water is supplied every alternate day. Let us size the underground RCC sump and overhead tank.',
      'Step 1 (Calculate Daily Consumption): 5 persons × 135 lpcd (NBC 2016 norm) = 675 litres per day.',
      'Step 2 (Establish Storage Requirement): Because water is supplied every alternate day, we require a 3-day buffer to guard against pipe repairs: Total Storage = 675 L/day × 3 days = 2,025 litres (round up to 2,500 litres minimum for safety).',
      'Step 3 (Allocate Storage Split):',
      '• Underground Sump (approx 65%): 2,500 L × 0.65 ≈ 1,625 L (construct a 2,000 to 3,000 litre sump).',
      '• Overhead Tank (approx 35%): 2,500 L × 0.35 ≈ 875 L (select a standard commercial 1,000 litre overhead tank).',
      'Step 4 (Calculate Internal Dimensions for a 3,000 Litre Sump):',
      '• 1 cubic metre = 1,000 litres. 3,000 litres = 3.0 cubic metres = 105.94 cubic feet.',
      '• Design dimensions: Length = 6.0 ft, Width = 4.5 ft, Depth = 4.0 ft (plus 1 ft freeboard space at top).',
      '• Effective water volume = 6 × 4.5 × 4.0 = 108 cubic feet = 3,058 litres.',
      'Step 5 (Structural Check for Overhead Tank): 1,000 litres of water + 40 kg tank weight = 1,040 kg (1.04 tonnes). The structural engineer must locate the tank directly over Column C-3 and specify an elevated 3-ft masonry pier base.',
      'Conclusion: Our Water Tank Calculator computes these dimensional volumes and load weights automatically.',
      '<!-- [OWNER: add real photo of underground RCC sump construction showing reinforcement and water-holding test] -->'
    ],
    ['Sources and official standards',
      [
        'National Building Code of India 2016 (Part 9: Plumbing Services, Section 1: Water Supply).',
        'IS 1172:1993 – Code of Basic Requirements for Water Supply, Drainage and Sanitation.',
        'IS 3370 (Parts 1 to 4) – Code of Practice for Concrete Structures for the Storage of Liquids.',
        'Central Public Health and Environmental Engineering Organisation (CPHEEO) Water Manual.',
        'Bureau of Indian Standards – Specifications for Polyethylene Water Storage Tanks (IS 12701).'
      ]
    ]
  ]
};

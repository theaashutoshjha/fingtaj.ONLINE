// Expanded sections for House Construction flagship guides.
import { DIAGRAMS } from './diagrams.mjs';

export default {
  'steps-to-build-a-house-in-india': [
    ['House Construction Workflow Phases', DIAGRAMS.stepsToBuild],
    ['State-wise municipal building approval timelines (As on November 2026)',
      { table: [
        ['State / Corporation', 'Online Approval Portal (OBPS)', 'Statutory Sanction Window', 'Key Mandatory Inspections'],
        [
          ['Maharashtra (BMC / Pune PMC)', 'AutoDCR / Building Proposal Portal', '30 to 45 days', 'Plinth verification, RCC frame completion, Drainage inspection, Final Occupancy Certificate.'],
          ['Karnataka (BBMP / BDA)', 'BPA (Building Plan Approval) Portal', '30 days (Deemed sanction rules)', 'Foundation setback check, Stage-wise structural engineer certificate, OC inspection.'],
          ['Delhi (MCD / DDA)', 'SARAL Online Building Plan Sanction', '30 days for residential plots', 'Plinth level notice, Structural engineer stability sign-off, Fire NOC (if above 15m).'],
          ['Telangana (GHMC / HMDA)', 'TS-bPASS (Self-certification system)', 'Instant for <= 75 sq yd; 21 days for larger', 'Post-commencement field inspection within 21 days by municipal town planning staff.'],
          ['Tamil Nadu (CMDA / DTCP)', 'Single Window Portal (CMDA)', '30 to 45 days', 'Land title verification, road width inspection, rainwater harvesting certification, Completion Certificate.']
        ]
      ] },
      'The National Building Code (NBC 2016 Part 3) provides the foundational model regulations for residential approvals. Most states now operate automated CAD scrutiny systems (OBPS / AutoDCR) where drawings are checked programmatically against setback and FAR rules.'
    ],
    ['Common construction pitfalls and operational delays',
      [
        'Commencing excavation without a formal soil test: Discovering soft soil or high groundwater after digging footings leads to emergency design revisions and massive budget overruns.',
        'Signing ambiguous lumpsum contractor agreements without an itemized Bill of Quantities (BOQ): Contractors will cut corners on cement grades, steel spacing, and waterproofing chemicals.',
        'Deviating from sanctioned setbacks during plinth marking: Shifting the building by even one foot into the setback zone risks cancellation of the Occupancy Certificate and demolition notices.',
        'Allowing electricians and plumbers to hammer deep horizontal wall chases through load-bearing brick walls or RCC columns.',
        'Skipping pre-construction anti-termite treatment at the foundation trench and plinth backfill stage.'
      ]
    ],
    ['Actionable master checklist across the 6 construction stages',
      { ol: [
        'Stage 1 (Pre-construction): Conduct geotechnical soil investigation; finalize architectural and structural drawings; obtain municipal plan sanction and temporary electricity/water connections.',
        'Stage 2 (Substructure): Excavate to hard strata; pour PCC 1:4:8 mud mat; tie isolated rebar footings with 50mm cover; cast plinth beams and apply 50mm bitumen Damp Proof Course (DPC).',
        'Stage 3 (Superstructure Frame): Cast RCC columns; erect slab shuttering with certified steel props; lay bottom and cranked rebar with 20mm cover blocks; install slab electrical conduit boxes; cast M20/M25 slab; pond water for 10 days.',
        'Stage 4 (Masonry & Plaster): Lay brickwork or AAC block courses with plumb bob verification; fix door/window frames; chase plumbing lines; install chicken wire mesh at brick-RCC joints; apply 12mm internal and 20mm external plaster.',
        'Stage 5 (MEP Services): Run concealed plumbing lines and perform hydraulic pressure test at 7 bar for 24 hours; pull electrical copper wiring; waterproof terrace with elastomeric coating and brickbat coba.',
        'Stage 6 (Finishing & Handover): Lay vitrified floor tiles; apply wall putty, primer, and two coats of acrylic emulsion; install sanitary fixtures; obtain final Occupancy Certificate (OC).'
      ] }
    ],
    ['Worked numerical example using our House Construction Cost Calculator',
      'Suppose an owner is planning to construct an independent G+1 house with a total built-up area of 2,000 sq ft (1,000 sq ft ground floor + 1,000 sq ft first floor) on a 30 × 50 plot in a Tier-2 Indian city. Let us estimate the baseline construction budget.',
      'Step 1 (Select Specifications Benchmark): For standard quality RCC framed construction (M20 concrete, Fe 500D primary TMT steel, red clay or fly ash bricks, vitrified tiles, branded CPVC plumbing, and premium emulsion paint), current CPWD/market benchmark is approx ₹2,000 per sq ft.',
      'Step 2 (Calculate Base Construction Cost): 2,000 sq ft × ₹2,000/sq ft = ₹40,00,000.',
      'Step 3 (Allocate Component Sub-Budgets):',
      '• Substructure & Structure (Grey Structure: 45%): ₹18,00,000.',
      '• Brickwork & Plastering (15%): ₹6,00,000.',
      '• Flooring & Wall Tiling (12%): ₹4,80,000.',
      '• Plumbing & Sanitary Fixtures (10%): ₹4,00,000.',
      '• Electrical Wiring, Switches & Conduits (8%): ₹3,20,000.',
      '• Painting & External Finishes (5%): ₹2,00,000.',
      '• Municipal Approvals, Soil Testing & Architect Fees (5%): ₹2,00,000.',
      'Conclusion: Our House Construction Cost Calculator breaks down every stage so you can monitor contractor running bills and avoid mid-project liquidity crises.',
      '<!-- [OWNER: add real photo of foundation excavation trench and plinth beam casting] -->'
    ],
    ['Sources and official standards',
      [
        'National Building Code of India 2016 (BIS) – Volumes 1 & 2 (All Structural and Architectural Parts).',
        'CPWD Specifications 2019 – Civil Works and Project Management Guidelines.',
        'IS 456:2000 – Code of Practice for Plain and Reinforced Concrete.',
        'Model Building Bye-Laws, 2016 – Ministry of Housing and Urban Affairs (MoHUA).',
        'State Municipal Acts (e.g. Maharashtra Municipal Corporation Act, Karnataka Municipal Act).'
      ]
    ]
  ],

  'construction-cost-per-sq-ft-what-affects-it': [
    ['Construction Cost Breakdown Distribution', DIAGRAMS.costBreakdown],
    ['State-wise residential construction costs per square foot (As on November 2026)',
      { table: [
        ['City / Metro', 'Basic Spec (₹/sq ft)', 'Standard Spec (₹/sq ft)', 'Premium Spec (₹/sq ft)', 'Key Local Cost Driver'],
        [
          ['Mumbai & Pune (MH)', '₹1,900 - ₹2,200', '₹2,300 - ₹2,800', '₹3,200 - ₹4,500+', 'High transit mixer (RMC) rates, stringent dumping/debris disposal fees, elevated labour wages.'],
          ['Bengaluru (KA)', '₹1,800 - ₹2,100', '₹2,200 - ₹2,600', '₹3,000 - ₹4,000+', 'Soil variability (soft clay in lake buffers vs granite bedrock); high sand transportation tariffs.'],
          ['Delhi & NCR', '₹1,750 - ₹2,050', '₹2,100 - ₹2,550', '₹2,900 - ₹3,800+', 'Seasonal winter construction bans (GRAP III/IV); fly ash brick and AAC block transport.'],
          ['Hyderabad (TG)', '₹1,700 - ₹1,950', '₹2,000 - ₹2,400', '₹2,700 - ₹3,600+', 'Competitive quarry aggregate supply; active skilled labour availability.'],
          ['Chennai (TN)', '₹1,850 - ₹2,150', '₹2,250 - ₹2,650', '₹3,000 - ₹4,200+', 'High groundwater and coastal salinity require corrosion-resistant rebar and intensive waterproofing.']
        ]
      ] },
      'The figures above reflect pure construction expenditure per square foot of built-up area (excluding plot acquisition cost, stamp duty, interior loose furniture, and municipal plan approval fees).'
    ],
    ['Common factors that unexpectedly inflate per-sq-ft costs',
      [
        'Poor Soil Conditions: Encountering black cotton clay or uncompacted fill requires deep under-reamed pile foundations or heavy raft footings, adding ₹150 to ₹300 per sq ft to substructure costs.',
        'Frequent Plan Revisions During Construction: Knocking down walls, moving plumbing shafts, or shifting door openings after brickwork causes double material and labour costs.',
        'Choosing High-End Architectural Elevation Elements: Complex cantilever pergolas, exterior wooden cladding, full-height double-glazed curtain walls, and curved masonry add significant expense.',
        'Procuring Materials in Small Fragmented Batches: Ordering 20 bags of cement or 500 kg of steel repeatedly incurs excessive local transport and unloading charges compared to bulk wholesale purchasing.',
        'Neglecting Material Waste Management: Failure to supervise cutting rebar and handling bricks easily results in 8% to 12% scrap waste instead of the allowable 3% to 5%.'
      ]
    ],
    ['Checklist for controlling per-sq-ft construction expenses',
      { ol: [
        'Freeze architectural room layouts, window schedules, and electrical points 100% before breaking ground.',
        'Commission an accurate Bill of Quantities (BOQ) with clear material brand names and specification grades.',
        'Negotiate a clear contract type: Item-rate with material price escalation formula, or material-contract with brand-locked clauses.',
        'Benchmark material prices across at least three wholesale stockists before issuing purchase orders.',
        'Implement weekly site audits to track cement bag consumption against actual cubic metres of concrete poured.',
        'Adopt standard commercial shuttering sizes (e.g. 8-foot ceiling heights or modular 600mm formwork) to avoid custom woodwork fabrication costs.',
        'Avoid changing sanitary fixture and tile layouts after plumbing lines have been pressure-tested and concealed in mortar.'
      ] }
    ],
    ['Key specification upgrades that alter cost tiers',
      [
        'Window Framing: Powder-coated aluminium with 5mm single float glass costs ₹350–₹500/sq ft, while multi-chambered UPVC with double-glazed acoustic units (DGU) runs ₹800–₹1,400/sq ft.',
        'Floor Finishes: Standard double-charged vitrified tiles cost ₹50–₹70/sq ft installed, whereas imported Italian marble requires specialized diamond gangsaw cutting, epoxy filling, and chemical polishing, exceeding ₹350–₹600/sq ft.',
        'Electrical Infrastructure: Concealed FR-LSH (Flame Retardant Low Smoke Zero Halogen) copper wiring with modular switchplates, individual RCCB shock breakers, and home automation conduits adds ₹150–₹250 per built-up square foot.',
        'Plumbing Hardware: Standard wall-mounted mixer taps cost ₹2,500 each, whereas thermostatic concealed diverters and wall-hung WC frames with concealed pneumatic cisterns add ₹15,000 to ₹25,000 per bathroom.'
      ]
    ],
    ['Worked numerical example using our House Construction Cost Calculator',
      'Suppose a homeowner wants to build a 1,500 sq ft single-storey house. They are choosing between Standard Specification (₹2,100/sq ft) and Premium Specification (₹2,750/sq ft). Let us examine the arithmetic.',
      'Step 1 (Standard Spec Budget): 1,500 sq ft × ₹2,100 = ₹31,50,000. This includes M20 concrete, Fe 500D TMT steel, fly ash bricks, standard vitrified tiles (₹60/sq ft), CPVC plumbing, and premium emulsion paint.',
      'Step 2 (Premium Spec Budget): 1,500 sq ft × ₹2,750 = ₹41,25,000. This upgrades to M25 concrete, AAC block infill, Italian marble or 4×2 GVT tiles (₹140/sq ft), UPVC double-glazed windows, concealed divertors, and false ceilings throughout.',
      'Step 3 (Variance Analysis): The difference is ₹9,75,000 (a 31% premium). Notice that the grey structure (concrete, steel, sand, aggregate) costs nearly the same in both options (approx ₹14,00,000); the entire ₹9.75 Lakh premium lies in finishing materials, window frames, and sanitary fixtures.',
      'Conclusion: Our calculator allows you to balance grey structure durability with finishing aspirations to stay within your available financing.',
      '<!-- [OWNER: add real photo of building materials delivery challans and wholesale invoice records] -->'
    ],
    ['Sources and official standards',
      [
        'CPWD Plinth Area Rates (PAR 2023) – Standard Cost Indices for Major Indian Urban Centres.',
        'National Building Code of India 2016 – Part 6 (Structural Design) & Part 7 (Construction Management).',
        'State PWD Schedules of Rates (Maharashtra PWD, Karnataka PWD, Delhi PWD).',
        'Indian Concrete Journal – Material Price Trends and Construction Cost Indices.',
        'Bureau of Indian Standards – National Civil Engineering Measurement Standards (IS 1200).'
      ]
    ]
  ],

  'how-to-plan-a-house-construction-budget': [
    ['Milestone Cash Flow Disbursement Curve', DIAGRAMS.budgetPlanning],
    ['State-wise ancillary construction expenses and permits (As on November 2026)',
      { table: [
        ['State / Corporation', 'Municipal Sanction Fees (1,500 sq ft)', 'Temporary Power Deposit (Discom)', 'Water Supply & Sewerage Connection'],
        [
          ['Maharashtra (BMC/PMC)', '₹60,000 - ₹1,20,000 (Includes scrutiny & cess)', 'MSEDCL: ₹15,000 - ₹25,000 deposit', 'Municipal water meter deposit & road cutting charges (₹30k - ₹60k).'],
          ['Karnataka (BBMP)', '₹50,000 - ₹90,000 (Ground rent & scrutiny)', 'BESCOM: ₹12,000 - ₹20,000 deposit', 'BWSSB pro-rata charges & sanitary connection fees (₹40k - ₹75k).'],
          ['Delhi (MCD)', '₹45,000 - ₹85,000 (Building permit & labour cess)', 'BSES / TPDDL: ₹10,000 - ₹18,000 deposit', 'Delhi Jal Board (DJB) infrastructure charge & road restoration.'],
          ['Telangana (GHMC)', '₹40,000 - ₹75,000 (TS-bPASS statutory fee)', 'TSSPDCL: ₹10,000 - ₹15,000 deposit', 'HMWSSB pipeline connection & drainage cess (₹35k - ₹60k).'],
          ['Tamil Nadu (CMDA)', '₹55,000 - ₹95,000 (Development charges & scrutiny)', 'TANGEDCO: ₹12,000 - ₹22,000 deposit', 'CMWSSB water and sewerage connection charges (₹35k - ₹65k).']
        ]
      ] },
      'A complete house construction budget must account for statutory municipal permit fees, temporary utility connections, road cutting restoration deposits, and structural engineer fees on top of pure contractor material and labour costs.'
    ],
    ['Common budgeting blunders that cause project abandonment',
      [
        'Budgeting only for the contractor’s quote without a 10%–15% contingency reserve for price inflation and foundation surprises.',
        'Depleting savings on high-end marble or exterior elevation while underfunding electrical wiring, plumbing valves, and terrace waterproofing.',
        'Paying the contractor ahead of work progress: Overpaying early in the project leads to contractor slow-down, abandoned work, or disputes.',
        'Failing to budget for statutory municipal completion and occupancy certification fees.',
        'Ignoring interest costs on construction loan disbursements during the 9 to 12 month building cycle.'
      ]
    ],
    ['Step-by-step checklist to structure your construction budget',
      { ol: [
        'Calculate total gross built-up area across all floors from the finalized architectural drawing.',
        'Determine baseline construction cost using our House Budget Planner and local contractor rates.',
        'Add a non-negotiable 10% Contingency Reserve for unforeseen subsurface foundation conditions or material price spikes.',
        'Allocate separate line items for: Municipal Plan Sanction, Temporary Power/Water, Soil Testing, and Structural Engineer Certification.',
        'Establish a formal Milestone Payment Schedule in the contractor agreement linked strictly to certified site completion stages.',
        'Retain 5% of each running account bill (Retention Money) payable only 3 to 6 months after house completion to cover defect liability.',
        'Open a dedicated bank account exclusively for construction transactions to audit vendor debits, cement invoices, and contractor RTGS disbursements without mixing with personal expenses.',
        'Maintain a physical signed logbook on site where the contractor foreman countersigns every truckload of sand, aggregate, and rebar delivered.'
      ] }
    ],
    ['Contract models: labour-only vs material-turnkey economics',
      [
        'Labour-Only Contract (₹350 to ₹500/sq ft): Homeowner purchases all cement, steel, bricks, sand, and tiles directly, paying the contractor purely for skilled masons and shuttering labour. Maximum cost control and material quality assurance, but demands 2 to 3 hours of daily personal on-site procurement supervision.',
        'Material-Turnkey Contract (₹2,000 to ₹2,600/sq ft): Contractor supplies all materials and labour under a comprehensive BOQ schedule. Saves personal time, but mandates rigorous spot-testing of concrete cubes, rebar rolling margins, and brand-compliance audits.',
        'Item-Rate Contract (Unit Rate per m³ or sq ft): Recommended for complex architectural designs; contractor bills each item (excavation per m³, concrete per m³, brickwork per m²) based on measured physical dimensions in the site measurement book (MB).'
      ]
    ],
    ['Worked numerical example using our House Budget Planner',
      'Suppose an owner has a total capital pool of ₹50,00,000 (consisting of ₹15,00,000 personal savings and ₹35,00,000 approved bank construction loan) to build an independent house. How should this budget be systematically allocated?',
      'Step 1 (Carve Out Contingency & Ancillary Fees):',
      '• 10% Contingency Buffer = ₹5,00,000 (Held in liquid reserve).',
      '• Permits, Sanction Fees, Architect & Soil Test = ₹2,50,000.',
      '• Temporary Power/Water Connections & Borewell = ₹1,50,000.',
      '• Net Available Civil Construction Budget = ₹50,00,000 − ₹9,00,000 = ₹41,00,000.',
      'Step 2 (Determine Affordable Built-Up Area): At an average realistic specification rate of ₹2,100 per sq ft, the maximum buildable area is ₹41,00,000 ÷ ₹2,100/sq ft = 1,952 sq ft. The architect is instructed to design a house not exceeding 1,900 sq ft.',
      'Step 3 (Establish Cash Flow Milestones):',
      '• Foundation & Plinth Completion (15%): ₹6,15,000.',
      '• Ground Floor RCC Columns & Slab (25%): ₹10,25,000.',
      '• First Floor Columns & Roof Slab (20%): ₹8,20,000.',
      '• Brick Masonry & Plastering (15%): ₹6,15,000.',
      '• Flooring, Electrical & Plumbing (15%): ₹6,15,000.',
      '• Painting & Final Handover (10%): ₹4,10,000.',
      'Conclusion: This disciplined allocation prevents running out of cash halfway through the build.',
      '<!-- [OWNER: add real photo of contractor milestone running account bill ledger with engineer sign-off] -->'
    ],
    ['Sources and official standards',
      [
        'CPWD Works Manual 2019 – Estimation, Budgeting and Contract Administration.',
        'National Building Code of India 2016 – Part 7: Construction Management, Practices and Safety.',
        'General Financial Rules (GFR) – Norms for Contingency and Escalation Reserves.',
        'State Building Bye-Laws Schedule of Fees (BBMP, BMC, MCD, GHMC, CMDA).',
        'Reserve Bank of India – Housing Finance Master Directions (Disbursement Benchmark Practices).'
      ]
    ]
  ],

  'building-plan-approval-in-india-basics': [
    ['Building Plan Sanction Workflow', DIAGRAMS.planApproval],
    ['State-wise building plan approval systems and scrutiny processes (As on November 2026)',
      { table: [
        ['State / Urban Authority', 'Digital Approval System', 'Scrutiny CAD Engine', 'Mandatory Professional Signatures'],
        [
          ['Maharashtra (BMC / MMRDA)', 'Building Proposal Management System (BPMS)', 'AutoDCR (Programmatic bye-law check)', 'Registered Architect (COA license) + Registered Structural Engineer.'],
          ['Karnataka (BBMP / BDA)', 'BBMP Online Building Plan Approval (OBPS)', 'Pre-DCR CAD format', 'Registered Architect / Engineer + Geotechnical Testing Lab.'],
          ['Delhi (MCD / DDA)', 'SARAL Online Building Sanction', 'Automated CAD scrutiny', 'Council of Architecture (COA) Architect + Structural Engineer.'],
          ['Telangana (GHMC / HMDA)', 'TS-bPASS (Telangana Building Permission)', 'Self-certification for <= 500 sq m', 'Registered Architect / Town Planner + Owner Self-Declaration.'],
          ['Tamil Nadu (CMDA / DTCP)', 'Tamil Nadu Single Window Portal', 'Pre-formatted digital drawing scrutiny', 'Registered Architect / Licensed Surveyor + Structural Engineer.']
        ]
      ] },
      'The National Building Code (NBC 2016 Part 3, Section 3) outlines the standard administrative machinery for building permits, requiring verified proof of ownership, structural stability certification, and adherence to zoning master plans.'
    ],
    ['Common mistakes during the building plan approval process',
      [
        'Commencing construction before receiving the formal Sanctioned Plan and Commencement Certificate (CC): Starting early invites stop-work orders and compounding penalties.',
        'Failing to verify whether the plot is located in a green belt, agricultural zone, lake buffer zone, or heritage restricted perimeter.',
        'Relying on an unapproved layout drawing from a private developer without checking local town planning authority layout sanction numbers.',
        'Hiding structural columns or projecting balconies beyond permissible setback lines in the CAD submission.',
        'Neglecting to apply for the final Occupancy Certificate (OC) upon building completion, leaving the house technically unregularized.'
      ]
    ],
    ['Document checklist for building plan sanction submission',
      { ol: [
        'Certified copy of registered Title Deed (Sale Deed, Gift Deed, or Partition Deed) establishing ownership.',
        'Latest Revenue Record extract (Khata Certificate, 7/12 extract, Patta, or Khasra/Khatauni) in the applicant’s name.',
        'Updated Property Tax Paid Receipts and Non-Encumbrance Certificate (EC) for a minimum of 15 years.',
        'Village revenue map sketch or certified layout sub-division plan.',
        'Architectural drawings: Site plan showing setbacks and abutting road, floor plans, building cross-sections, elevation, and drainage plan.',
        'Structural Stability Certificate signed by a registered structural engineer certifying compliance with IS 456 and IS 1893 seismic norms.',
        'Geotechnical Soil Investigation Report from an accredited materials testing laboratory certifying safe soil bearing capacity (SBC).',
        'Rainwater Harvesting (RWH) design schematic demonstrating rooftop runoff collection pits compliant with municipal groundwater recharge mandates.',
        'Affidavit and Indemnity Bond on non-judicial stamp paper indemnifying the municipal corporation against future boundary disputes or third-party claims.'
      ] }
    ],
    ['Key post-sanction milestones: CC and OC',
      [
        'Commencement Certificate (CC): After plan approval and plinth level completion, the municipal junior engineer inspects the plinth to verify that setbacks adhere to the sanctioned drawing before issuing the formal CC to proceed with upper floors.',
        'Deviation Limits: Most municipal bye-laws permit minor deviations up to 2.5% to 5% subject to compounding penalty fees, but severe structural setback violations cannot be regularized and will delay completion clearance.',
        'Occupancy Certificate (OC): Once construction is finished, the architect submits completion drawings. Municipal engineers conduct a final physical inspection of fire safety, rainwater harvesting, sewage connection, and parapet height before issuing the OC. Without an OC, electricity and water meters remain on punitive temporary tariff rates.'
      ]
    ],
    ['Worked numerical example: calculating municipal sanction fees',
      'Suppose an owner is applying for plan sanction for a G+1 house with a total built-up area of 180 square metres (approx 1,938 sq ft) on a 150 sq m plot in an urban municipal corporation area. Let us estimate the statutory municipal fees.',
      'Step 1 (Calculate Scrutiny Fee): Standard municipal scrutiny rate = ₹30 per sq m of built-up area. Scrutiny fee = 180 sq m × ₹30 = ₹5,400.',
      'Step 2 (Calculate License / Building Permit Fee): Standard rate = ₹150 per sq m of built-up area. Building permit fee = 180 sq m × ₹150 = ₹27,000.',
      'Step 3 (Calculate Ground Rent and Debris Stacking Fee): Standard fee for 150 sq m plot during construction period = ₹12,000.',
      'Step 4 (Calculate Mandatory Statutory Labour Welfare Cess): 1% of estimated civil construction cost. If estimated civil cost is 180 sq m × ₹20,000/sq m = ₹36,00,000, Labour Cess = 1% of ₹36,00,000 = ₹36,000.',
      'Step 5 (Total Statutory Outlay): Total municipal sanction charges = ₹5,400 + ₹27,000 + ₹12,000 + ₹36,000 = ₹80,400 (plus architect drawing preparation fees).',
      'Conclusion: Budgeting statutory permit charges upfront avoids delays when issuing municipal demand drafts.',
      '<!-- [OWNER: add real photo of municipal sanctioned blue print drawing with official stamp and LP number] -->'
    ],
    ['Sources and official standards',
      [
        'National Building Code of India 2016 (Part 3: Development Control Rules and General Building Requirements).',
        'Model Building Bye-Laws, 2016 – Town and Country Planning Organisation (TCPO), MoHUA.',
        'The Building and Other Construction Workers’ Welfare Cess Act, 1996 (1% Statutory Labour Cess).',
        'State Municipal Corporation Building Bye-Laws (BMC, BBMP, MCD, GHMC, CMDA).',
        'Architects Act, 1972 – Council of Architecture (COA) Guidelines for Professional Practice.'
      ]
    ]
  ],

  'how-much-cement-sand-and-steel-for-a-house': [
    ['Material Bill of Quantities Thumb Rules', DIAGRAMS.thumbRules],
    ['State-wise material requirements and consumption benchmarks (As on November 2026)',
      { table: [
        ['Structural Element', 'Cement Share (%)', 'TMT Steel Share (%)', 'Sand & Aggregate Share (%)', 'Governing IS Specification'],
        [
          ['RCC Frame (Footings, Columns, Beams, Slabs)', '50% – 55% of total cement', '85% – 90% of total steel', '60% of total coarse aggregate', 'IS 456:2000 (Plain and Reinforced Concrete)'],
          ['Brick / Block Masonry Mortar', '15% – 20% of total cement', '5% (Lintel/Patli bars)', '20% of total coarse sand', 'IS 2212:1991 (Code of Practice for Brickwork)'],
          ['Internal & External Plastering', '15% – 18% of total cement', '0% (Mesh only)', '20% of total plastering sand', 'IS 1661:1972 (Code of Practice for Plastering)'],
          ['Flooring Screed & Tile Bedding', '8% – 10% of total cement', '0%', 'Remaining fine sand', 'IS 1443:1972 (Laying of Floor Tiles)'],
          ['Waterproofing & Parapet Coba', '4% – 6% of total cement', '0% – 2%', 'Brickbat & fine aggregate', 'IS 1346 / CPWD Specifications']
        ]
      ] },
      'The thumb-rule estimates above provide reliable preliminary guidance for budgeting independent houses up to G+2 floors. Exact structural quantities are determined by the structural engineer’s Bar Bending Schedule (BBS) and architectural drawing schedules.'
    ],
    ['Common estimation errors that lead to financial loss',
      [
        'Calculating cement only for concrete slabs while ignoring brick mortar, plaster, and flooring bedding (which together consume nearly 45% of total cement).',
        'Neglecting rebar overlapping lap lengths (typically 40 to 50 times bar diameter) and cutting waste, leading to a 7% to 10% steel shortage.',
        'Assuming a "brass" or "tipper" has a uniform volume everywhere: In Maharashtra and Karnataka, 1 brass equals exactly 100 cubic feet (2.83 m³), but local truck capacities vary.',
        'Failing to adjust sand volume for bulking: Damp sand can increase in volume by 15% to 30%, giving the false impression of adequate quantity.',
        'Ordering materials in fragmented tiny lots, repeatedly paying retail transportation premiums.'
      ]
    ],
    ['Checklist for estimating and ordering house building materials',
      { ol: [
        'Calculate total gross built-up area across all floors from sanctioned architectural drawings.',
        'Apply the standard structural thumb rules: 0.40 to 0.45 bags of cement per sq ft; 3.0 to 4.0 kg of steel per sq ft; 1.2 to 1.5 cu ft of sand per sq ft.',
        'Verify with your structural engineer’s preliminary Bar Bending Schedule (BBS) to confirm steel diameter distribution (8mm, 10mm, 12mm, 16mm).',
        'Establish secure, weather-tight storage on site before the first material delivery arrives.',
        'Maintain a physical site register recording every truck delivery challan, weighbridge slip, and daily consumption log.'
      ] }
    ],
    ['Worked numerical example for a 1,500 sq ft independent house',
      'Suppose an owner is building a 1,500 sq ft G+1 house (800 sq ft ground floor + 700 sq ft first floor) using standard RCC framed construction. Let us estimate the total primary materials required.',
      'Step 1 (Estimate Cement Quantity): Using the standard thumb rule of 0.42 bags per sq ft of built-up area: Total Cement = 1,500 sq ft × 0.42 = 630 bags (31.5 tonnes). Adding 5% wastage = 660 bags (approx ₹2,30,000 to ₹2,60,000).',
      'Step 2 (Estimate TMT Steel Quantity): Using the thumb rule of 3.5 kg per sq ft of built-up area: Total Steel = 1,500 sq ft × 3.5 = 5,250 kg (5.25 tonnes). Adding 5% cutting and lap wastage = 5.51 tonnes (approx ₹3,30,000 to ₹3,80,000). Typical distribution: 8mm (25% for stirrups) = 1.38 tonnes; 10mm/12mm (45% for slabs/beams) = 2.48 tonnes; 16mm (30% for columns/footings) = 1.65 tonnes.',
      'Step 3 (Estimate Sand Quantity): Using the thumb rule of 1.35 cu ft per sq ft: Total Sand = 1,500 sq ft × 1.35 = 2,025 cu ft (approx 20.25 brass; ~90 tonnes).',
      'Step 4 (Estimate Aggregate Quantity): Using the thumb rule of 1.10 cu ft per sq ft: Total 20mm Crushed Stone = 1,500 sq ft × 1.10 = 1,650 cu ft (approx 16.5 brass; ~75 tonnes).',
      'Step 5 (Estimate Brick Count): External 9-inch walls and internal 4-inch partitions for a 1,500 sq ft house typically require ~24,000 modular bricks or ~1,900 AAC blocks (600×200×150mm).',
      'Conclusion: Our Material Thumb Rule Estimator computes these figures instantly, providing a reliable benchmark to cross-examine contractor material quotes.',
      '<!-- [OWNER: add real photo of material stockpiles and cement shed on active site] -->'
    ],
    ['Sources and official standards',
      [
        'CPWD Delhi Schedule of Rates (DSR 2023) – Material Coefficients and Labour Output Constants.',
        'IS 456:2000 – Plain and Reinforced Concrete: Code of Practice.',
        'IS 1200 (Series) – Method of Measurement of Building and Civil Engineering Works.',
        'SP 16:1980 – Design Aids for Reinforced Concrete to IS 456 (Bureau of Indian Standards).',
        'Civil Engineering Estimating and Costing – Standard Technical Reference Manuals.'
      ]
    ]
  ],

  'types-of-foundation-for-houses': [
    ['Foundation Cross-Sections Comparison', DIAGRAMS.foundationTypes],
    ['State-wise soil conditions and recommended foundation types (As on November 2026)',
      { table: [
        ['Geographic Region / State', 'Dominant Soil Stratigraphy', 'Recommended Foundation Type', 'Governing IS Specification'],
        [
          ['Deccan Plateau (MH, MP, North KA)', 'Expansive Black Cotton Clay (High shrink-swell)', 'Under-Reamed Piles with grade beams or Deep Raft', 'IS 2911 (Part 1/Sec 2) – Subsurface under-reamed pile design.'],
          ['Bengaluru & South Karnataka', 'Hard red gravelly soil (Murrum) & Granite rock', 'Isolated Pad Footings or Trapezoidal Footings', 'IS 1904 – Code of practice for design and construction of foundations.'],
          ['Indo-Gangetic Plains (UP, Bihar, Punjab)', 'Deep Alluvial Silt & Sandy Loam (High water table)', 'Raft Foundation or Combined Strip Footing', 'IS 2950 (Part 1) – Code of practice for design and construction of raft foundations.'],
          ['Coastal Kerala & Coastal TN', 'Loose coastal sand, saturated marine clay', 'RCC Raft Foundation or Friction Piles', 'IS 1904 / IS 2911 – Marine geotechnical criteria.'],
          ['Delhi / NCR (Yamuna Floodplain)', 'Silty fine sand, liquefaction hazard in high seismicity', 'Raft Foundation with engineered gravel backfill', 'IS 1893:2016 – Earthquake resistant geotechnical criteria.']
        ]
      ] },
      'Under IS 1904:1986, foundation depth must never be less than 500mm below natural ground level (and at least 1.0 to 1.5 metres for residential houses) to ensure bearing on firm, undisturbed soil below seasonal moisture variations.'
    ],
    ['Common foundation failures and structural mistakes',
      [
        'Constructing isolated footings in expansive black cotton soil: During monsoons the clay expands, lifting the house; during dry summers it shrinks, cracking columns and shearing brick walls.',
        'Pouring footings directly on dry, loose excavated soil without casting a lean concrete (PCC 1:4:8) mud mat: Dirt mixes into the fresh structural concrete, destroying its compressive strength.',
        'Failing to maintain a minimum 50mm clear concrete cover for foundation rebars: Ground moisture quickly corrodes steel, resulting in structural failure below the surface.',
        'Placing footings at different depths without step-slope transitions (minimum 1:2 slope): Causes differential settlement between adjacent columns.',
        'Backfilling foundation trenches with clayey soil or uncompacted debris instead of well-compacted granular soil or moorum.'
      ]
    ],
    ['Checklist for inspecting house foundation work',
      { ol: [
        'Review the certified Geotechnical Investigation Report to confirm Safe Bearing Capacity (SBC) and recommended foundation depth.',
        'Verify trench excavation: Confirm trench is dug to clean, firm, unyielding strata and bottom is levelled and rammed.',
        'Cast 75mm to 100mm of PCC (1:4:8 or 1:3:6 nominal mix) across the entire footing bed before placing steel.',
        'Check footing reinforcement rebar mat: Verify bar diameter, spacing, cranked hooks, and minimum 50mm concrete cover blocks.',
        'Verify column starter rebars (dowel bars) are centered accurately on grid centerlines and securely braced with stirrups.',
        'Ensure continuous water curing of footing concrete for at least 7 to 10 days before backfilling and compacting in 150mm layers.'
      ] }
    ],
    ['Worked numerical example using our Concrete Calculator for footings',
      'Suppose a residential G+1 house requires 12 isolated trapezoidal pad footings. Each footing has a base of 5.0 ft × 5.0 ft (1.524m × 1.524m), a total depth of 1.5 ft (0.457m), and an average volume of 28.0 cubic feet (0.793 m³) of M20 concrete per footing. Let us calculate the total foundation concrete, cement, and sand required.',
      'Step 1 (Calculate Total Footing Volume): 12 footings × 0.793 m³ = 9.516 m³ of wet concrete.',
      'Step 2 (Apply Dry Volume Factor): 9.516 m³ × 1.54 = 14.65 m³ of dry mix.',
      'Step 3 (Calculate Cement Bags): In M20 mix (1:1.5:3, total 5.5 parts), cement volume = 14.65 × (1 ÷ 5.5) = 2.66 m³. Cement bags (at 0.0347 m³/bag) = 2.66 ÷ 0.0347 = 76.7 bags. Adding 5% wastage = 81 bags.',
      'Step 4 (Calculate Sand and Aggregate): Sand = 14.65 × (1.5 ÷ 5.5) = 4.00 m³ (141 cu ft; ~1.41 brass). Coarse aggregate (20mm) = 14.65 × (3 ÷ 5.5) = 8.00 m³ (282 cu ft; ~2.82 brass).',
      'Conclusion: Our Concrete Calculator accurately sizes foundation batches, ensuring the structural base is poured without cold joints or material deficits.',
      '<!-- [OWNER: add real photo of footing rebar mat placement on PCC bed with 50mm cover blocks] -->'
    ],
    ['Sources and official standards',
      [
        'IS 1904:1986 (Reaffirmed 2021) – Code of Practice for Design and Construction of Foundations in Soils: General Requirements.',
        'IS 2911 (Part 1/Sec 2):2010 – Design and Construction of Pile Foundations: Bored Cast in-situ Piles (Under-reamed piles).',
        'IS 2950 (Part 1):1981 – Code of Practice for Design and Construction of Raft Foundations.',
        'IS 1893 (Part 1):2016 – Criteria for Earthquake Resistant Design of Structures.',
        'National Building Code of India 2016 (Part 6: Structural Design, Section 2: Soils and Foundations).'
      ]
    ]
  ]
};

// Expanded sections for Land & Measurement flagship guides.
import { DIAGRAMS } from './diagrams.mjs';

export default {
  'land-measurement-units-in-india': [
    ['Standard Land Units Hierarchy', DIAGRAMS.landUnits],
    ['State-wise customary land measurement units (As on November 2026)',
      { table: [
        ['State', 'Primary Local Unit', 'Standard Sq Ft Equivalent', 'Official Revenue Reference'],
        [
          ['Uttar Pradesh', 'Pucca Bigha / Biswa', '1 Bigha = 27,225 sq ft (20 Biswa = 1 Bigha; 1 Biswa = 1,361.25 sq ft)', 'UP Board of Revenue (bor.up.nic.in)'],
          ['Maharashtra', 'Guntha', '1 Guntha = 1,089 sq ft (40 Gunthas = 1 Acre; 1 Guntha = 121 sq yd)', 'Maharashtra Land Revenue Code, 1966'],
          ['Karnataka', 'Guntha / Cent', '1 Guntha = 1,089 sq ft; 1 Cent = 435.6 sq ft (100 Cents = 1 Acre)', 'Bhoomi Land Records (bhoomi.karnataka.gov.in)'],
          ['Tamil Nadu', 'Cent / Ground', '1 Cent = 435.6 sq ft; 1 Ground = 2,400 sq ft (Chennai urban)', 'TN Survey and Land Records (tnreginet.gov.in)'],
          ['Punjab & Haryana', 'Kanal / Marla', '1 Kanal = 5,445 sq ft (8 Kanal = 1 Acre; 1 Kanal = 20 Marlas = 272.25 sq ft)', 'Punjab Land Records Society (plrs.org.in)']
        ]
      ] },
      'The fixed units (Acre, Hectare, Guntha, Cent, Kanal, Marla, Ground) maintain legally uniform values across their respective states. Customary units such as Bigha, Biswa, and Katha are defined at the state or district level and must always be cross-referenced with local revenue records.'
    ],
    ['Common mistakes to avoid when converting land units',
      [
        'Assuming the word “Bigha” represents the same area everywhere: In Uttar Pradesh a pucca bigha is 27,225 sq ft, whereas in West Bengal it is standard at 14,400 sq ft, and in Himachal Pradesh it is only 8,712 sq ft.',
        'Confusing square yards (gaj) with square feet: 1 gaj equals 1 square yard (9 square feet), not 1 square foot or 1 linear foot.',
        'Relying on informal broker verbal quotes rather than the registered sale deed and Khasra / 7-12 extract.',
        'Failing to convert both the plot area and the quoted rate into square feet: A price of ₹12,000 per gaj (₹1,333/sq ft) is very different from ₹12,000 per sq ft.',
        'Neglecting the difference between gross surveyed boundary area and net buildable area after road widening and statutory setback deductions.'
      ]
    ],
    ['Checklist for verifying land area before signing an agreement',
      { ol: [
        'Obtain a certified digital copy of the land record (Khasra/Khatauni, 7/12 extract, Patta/Chitta, or RTC) directly from the official state revenue portal.',
        'Locate the survey number and verify the recorded land holding in hectares or square metres.',
        'Use our Land Area Converter to translate the official metric or regional units into square feet and square yards.',
        'Engage an independent licensed surveyor to measure the physical perimeter with a total station or DGPS to confirm boundary markers match the village revenue map.',
        'Ensure the preliminary sale agreement (Agreement to Sell) states the total area in both the regional unit and standard square metres/square feet.'
      ] }
    ],
    ['Worked numerical example using the Land Area Converter',
      'Suppose an agricultural parcel near the Maharashtra-Karnataka border is offered as 14 gunthas for ₹42,00,000, while a neighbouring plot in Andhra Pradesh is listed as 35 cents for ₹40,00,000. Without conversion, the two offers appear completely incomparable.',
      'Step 1 (Convert Gunthas): Using our Land Area Converter, 14 gunthas × 1,089 sq ft/guntha = 15,246 sq ft (which equals 1,694 gaj or 0.350 acres). The effective rate is ₹42,00,000 ÷ 15,246 sq ft = ₹275.48 per sq ft.',
      'Step 2 (Convert Cents): The second parcel is 35 cents × 435.6 sq ft/cent = 15,246 sq ft (0.350 acres). The effective rate is ₹40,00,000 ÷ 15,246 sq ft = ₹262.36 per sq ft.',
      'Conclusion: Both plots are mathematically identical in land area (15,246 sq ft). However, the second plot is ₹1,00,000 cheaper overall and saves ₹13.12 per square foot. Converting to square feet immediately exposes the true price difference.',
      '<!-- [OWNER: add real photo of land boundary survey stones and total station on site] -->'
    ],
    ['Sources and official standards',
      [
        'IS 1200 (Part 1):1992 – Methods of Measurement of Building and Civil Engineering Works (Earthwork and Land Surveying).',
        'Model Land Revenue Code – Department of Land Resources, Ministry of Rural Development, Government of India.',
        'UP Revenue Code, 2006 – Board of Revenue Uttar Pradesh (bor.up.nic.in).',
        'Maharashtra Land Revenue Code, 1966 – Revenue & Forest Department, Government of Maharashtra (mahabhulekh.maharashtra.gov.in).',
        'Karnataka Land Revenue Act, 1964 – Revenue Department, Government of Karnataka (bhoomi.karnataka.gov.in).'
      ]
    ]
  ],

  'how-many-square-feet-in-an-acre': [
    ['Visual Breakdown of 1 Acre', DIAGRAMS.acreGrid],
    ['State-wise standard land units compared to 1 Acre (As on November 2026)',
      { table: [
        ['State', 'Standard Units in 1 Acre', 'Square Feet Equivalent', 'Official Portal / Authority'],
        [
          ['Maharashtra & Gujarat', '40 Gunthas = 1 Acre', '1 Guntha = 1,089 sq ft; 1 Acre = 43,560 sq ft', 'Settlement Commissioner & Land Records (mahabhulekh.maharashtra.gov.in)'],
          ['Karnataka', '40 Gunthas or 100 Cents', '1 Guntha = 1,089 sq ft; 1 Cent = 435.6 sq ft', 'Bhoomi Revenue Services (bhoomi.karnataka.gov.in)'],
          ['Kerala & Tamil Nadu', '100 Cents = 1 Acre', '1 Cent = 435.6 sq ft; 1 Acre = 43,560 sq ft', 'TNREGINET (tnreginet.gov.in) / Kerala Land Administration'],
          ['Punjab & Haryana', '8 Kanals = 1 Acre', '1 Kanal = 5,445 sq ft (20 Marlas); 1 Acre = 43,560 sq ft', 'Department of Revenue & Disaster Management, Haryana (jamabandi.nic.in)'],
          ['Delhi & NCR', '4,840 Gaj (sq yards) = 1 Acre', '1 Gaj = 9 sq ft; 1 Acre = 43,560 sq ft', 'Delhi Land Records & Revenue Department (revenue.delhi.gov.in)']
        ]
      ] },
      'One international acre is precisely 43,560 square feet across all states in India. What varies is the customary fraction: western states divide it into 40 parts (gunthas), southern states into 100 parts (cents), and north-western states into 8 parts (kanals).'
    ],
    ['Common conversion mistakes to avoid',
      [
        'Believing that a hectare and an acre are interchangeable: 1 hectare equals 10,000 square metres or 2.471 acres (107,639 square feet). Buying a hectare provides nearly two-and-a-half times more land than buying an acre.',
        'Treating 1 guntha as 100 square feet: A guntha is 121 square yards, which is exactly 1,089 square feet.',
        'Confusing cents with square metres: 1 cent is 435.6 square feet (40.47 sq m), whereas 100 square metres is 1,076.4 square feet (equal to 1 “are”).',
        'Rounding square root conversions prematurely when calculating rectangular plot boundaries from acreage.',
        'Failing to verify whether the recorded acreage includes uncultivable wasteland (pot kharab) or dedicated public road reservation.'
      ]
    ],
    ['Checklist for evaluating land pricing across units',
      { ol: [
        'Confirm the total area in square feet using our Land Area Converter before discussing price.',
        'Divide the total quoted lump-sum price by the total square footage to establish the base rate per square foot.',
        'Check whether stamp duty and registration fees are calculated on the land acre rate or per-square-foot circle rate.',
        'Verify if zoning allows conversion from agricultural acreage to residential plot sub-divisions under local town planning regulations.',
        'Commission an accurate boundary perimeter demarcation survey prior to executing the registered sale deed.',
        'Inspect the revenue village cadastral map to ensure that access roads and right-of-way (ROW) easements are legally recorded and not traversing private unacquired land.',
        'Verify that uncultivable rocky wasteland or water drainage channels (pot kharab) are deducted from the net purchasable area.'
      ] }
    ],
    ['Key agricultural parcel division benchmarks',
      [
        'Half Acre: Exactly 21,780 sq ft = 20 gunthas = 50 cents = 2,420 sq yd (gaj). Ideal for small farmhouse planning or light commercial nursery setup.',
        'Quarter Acre: Exactly 10,890 sq ft = 10 gunthas = 25 cents = 1,210 sq yd (gaj). A standard size for weekend residential homesteads.',
        'One-Eighth Acre: Exactly 5,445 sq ft = 5 gunthas = 12.5 cents = 1 kanal in Punjab and Haryana. Accommodates a spacious independent villa with landscaped setbacks.',
        'Road Dedication Loss: When converting raw acreage into plotted layouts, statutory town planning rules require relinquishing 30% to 40% of gross acreage for internal roads, civic amenities, and open park spaces.'
      ]
    ],
    ['Worked numerical example using the Land Price Calculator',
      'An agricultural holding of 2.75 acres is listed near Pune at ₹66,00,000. Another holding of 115 gunthas is listed nearby at ₹69,00,000. Let us compare the rates using our Land Price Calculator and standard constants.',
      'Step 1 (First Plot): 2.75 acres × 43,560 sq ft/acre = 119,790 sq ft (equal to 110 gunthas). The price per sq ft is ₹66,00,000 ÷ 119,790 sq ft = ₹55.09 per sq ft. In gunthas, this is ₹60,000 per guntha.',
      'Step 2 (Second Plot): 115 gunthas × 1,089 sq ft/guntha = 125,235 sq ft (equal to 2.875 acres). The price per sq ft is ₹69,00,000 ÷ 125,235 sq ft = ₹55.09 per sq ft. In gunthas, this is ₹60,000 per guntha.',
      'Conclusion: Both plots are being sold at the exact same base rate (₹55.09/sq ft or ₹60,000/guntha). The second plot costs ₹3,00,000 more solely because it contains 5 additional gunthas (5,445 sq ft) of land.',
      '<!-- [OWNER: add real photo of agricultural acre plot boundary pegs] -->'
    ],
    ['Sources and official standards',
      [
        'IS 1200 (Part 1):1992 – Methods of Measurement of Civil Engineering Works.',
        'Weights and Measures Act, 1976 – Directorate of Legal Metrology, Ministry of Consumer Affairs, Government of India.',
        'Maharashtra Land Revenue Manual, Volume 1 – Settlement and Survey Department.',
        'Survey Manual – Survey and Settlement Department, Government of Tamil Nadu.',
        'Bhoomi User Handbook – Revenue Department, Government of Karnataka.'
      ]
    ]
  ],

  'why-one-bigha-is-not-the-same-everywhere': [
    ['State-by-State Bigha Variations', DIAGRAMS.bighaVariation],
    ['State-wise Bigha and Katha specifications (As on November 2026)',
      { table: [
        ['State / Region', 'Bigha Type', 'Square Feet in 1 Bigha', 'Sub-Units (Biswa / Katha)'],
        [
          ['Uttar Pradesh (Central/Western)', 'Pucca Bigha', '27,225 sq ft (2,529.3 sq m)', '20 Biswa = 1 Bigha (1 Biswa = 1,361.25 sq ft)'],
          ['Uttar Pradesh (Eastern) & Bihar', 'Standard Bigha', '27,220 sq ft (2,528.8 sq m)', '20 Katha = 1 Bigha (1 Katha = 1,361 sq ft)'],
          ['Rajasthan', 'Pucca Bigha / Kachha Bigha', 'Pucca: 27,225 sq ft; Kachha: 17,424 sq ft', '20 Biswa = 1 Bigha (Pucca: 1 Biswa = 1,361 sq ft; Kachha = 871 sq ft)'],
          ['West Bengal', 'Standard Bigha', '14,400 sq ft (1,337.8 sq m)', '20 Katha = 1 Bigha (1 Katha = 720 sq ft)'],
          ['Himachal Pradesh', 'Hilly Bigha', '8,712 sq ft (809.4 sq m)', '20 Biswa = 1 Bigha (1 Biswa = 435.6 sq ft = 1 Cent)']
        ]
      ] },
      'Because the Bigha originated as a customary agricultural unit (traditionally the area ploughable by a pair of bullocks in one day), historical land settlements by regional princely states and British presidencies codified different yard lengths (gaj-e-ilahi vs imperial chains). Always verify your district’s gazetted conversion.'
    ],
    ['Common mistakes when dealing with Bigha measurements',
      [
        'Applying an internet table without checking whether the district uses pucca or kachha bigha: In Rajasthan, a pucca bigha is 1.56 times larger than a kachha bigha.',
        'Assuming a "Katha" is identical in Bihar and West Bengal: A katha in Bihar is typically 1,361 sq ft, while in West Bengal it is standard at 720 sq ft.',
        'Executing an Agreement to Sell that mentions only the term "Bigha" without specifying the metric square metre or square foot equivalent.',
        'Failing to convert circle rate valuations that are gazetted per square metre into regional bigha figures.',
        'Overlooking local consolidation (Chakbandi) records where old customary bighas were converted into metric hectares.'
      ]
    ],
    ['Step-by-step checklist to verify local Bigha values',
      { ol: [
        'Examine the official Record of Rights (Khatauni or Jamabandi) and note the area recorded in the metric column (usually expressed in hectares, e.g., 0.2529 ha).',
        'Check the local conversion table on the state revenue department portal (e.g., UP Bhulekh or Bihar Bhumi).',
        'Ask the local Patwari, Lekhpal, or Revenue Inspector to provide the official gazette conversion factor for that specific revenue village.',
        'Enter your local square footage into our Land Area Converter to derive precise square feet, square yards, and acre values.',
        'Explicitly state in the registered deed: “Total area of X Bighas, being equivalent to Y square metres / Z square feet”.'
      ] }
    ],
    ['Worked numerical example using local Bigha inputs',
      'Suppose a property buyer is evaluating two listings advertised as "2 Bighas": Listing A is in Lucknow, Uttar Pradesh, for ₹80,00,000. Listing B is in 24 Parganas, West Bengal, for ₹65,00,000.',
      'Step 1 (Evaluate Listing A - UP): In Uttar Pradesh, 1 Pucca Bigha = 27,225 sq ft. Therefore, 2 Bighas = 54,450 sq ft (equal to 1.25 acres). The effective price per square foot is ₹80,00,000 ÷ 54,450 sq ft = ₹146.92 per sq ft.',
      'Step 2 (Evaluate Listing B - WB): In West Bengal, 1 Bigha = 14,400 sq ft. Therefore, 2 Bighas = 28,800 sq ft (equal to 0.661 acres). The effective price per square foot is ₹65,00,000 ÷ 28,800 sq ft = ₹225.69 per sq ft.',
      'Conclusion: Although Listing B has a lower lump-sum cost (₹65 Lakh vs ₹80 Lakh), it is actually 53% more expensive per square foot of real land (₹225.69 vs ₹146.92) because a West Bengal bigha is barely half the size of a UP pucca bigha. Always normalize to square feet before negotiating.',
      '<!-- [OWNER: add real photo of revenue village map and khasra register copy] -->'
    ],
    ['Sources and official standards',
      [
        'Uttar Pradesh Zamindari Abolition and Land Reforms Act, 1950 – Revenue Department UP.',
        'Bihar Tenancy Act, 1885 and Bihar Land Reforms Act – Department of Revenue and Land Reforms, Bihar (biharbhumi.bihar.gov.in).',
        'West Bengal Land Reforms Act, 1955 – Directorate of Land Records and Surveys, West Bengal (banglarbhumi.gov.in).',
        'Rajasthan Land Revenue Act, 1956 – Board of Revenue for Rajasthan (apnakhata.rajasthan.gov.in).',
        'Himachal Pradesh Land Revenue Act, 1954 – Revenue Department HP (himbhoomi.hp.gov.in).'
      ]
    ]
  ],

  'how-to-calculate-area-of-an-irregular-plot': [
    ['Irregular Plot Triangulation Diagram', DIAGRAMS.irregularPlot],
    ['State-wise surveying practices for irregular plots (As on November 2026)',
      { table: [
        ['State', 'Survey Authority', 'Surveying Equipment Benchmark', 'Official Cadastral Portal'],
        [
          ['Maharashtra', 'Directorate of Land Records', 'Electronic Total Station (ETS) / DGPS', 'Mahabhunaksha (mahabhunaksha.maharashtra.gov.in)'],
          ['Karnataka', 'Survey Settlement & Land Records (SSLR)', 'Rover DGPS / Total Station (Bhoomi E-Swathu)', 'Bhoomi Portal (bhoomi.karnataka.gov.in)'],
          ['Tamil Nadu', 'Department of Survey and Settlement', 'Total Station / FMB Sub-division measurement', 'Anytime Anywhere E-Services (eservices.tn.gov.in)'],
          ['Uttar Pradesh', 'Revenue & Survey Department', 'Digital Cadastral Mapping / ETS', 'UP Bhunaksha (upbhunaksha.gov.in)'],
          ['Gujarat', 'Superintendent of Land Records', 'Total Station Resurvey (AnyRoR)', 'AnyRoR Gujarat (anyror.gujarat.gov.in)']
        ]
      ] },
      'Cadastral maps in India maintain survey boundaries through village tippan, FMB ladders, and traverse sheets. For irregular multi-sided plots, modern registration departments require digital coordinates verified against revenue survey stones.'
    ],
    ['Common mistakes when calculating irregular plot areas',
      [
        'Averaging opposite sides: Calculating a quadrilateral with sides 40, 60, 45, 65 as average width × average length is mathematically incorrect and produces errors of up to 15% in skewed plots.',
        'Measuring only the four boundary sides: A four-sided irregular shape is not rigid; without at least one diagonal measurement, its area cannot be mathematically determined.',
        'Measuring diagonals along sloping terrain without correcting for elevation changes with a plumb bob or laser level.',
        'Violating the triangle inequality theorem: In any measured triangle (A, B, E), the diagonal E must be shorter than A + B and longer than |A - B|; otherwise, measurements are physically impossible.',
        'Ignoring boundary encroachments where neighbouring boundary walls deviate from the official village cadastral map.'
      ]
    ],
    ['Step-by-step checklist to measure and calculate an irregular plot',
      { ol: [
        'Clear weeds and obstacles along all boundaries so measuring tapes can be pulled taut and straight.',
        'Drive steel pins or wooden pegs firmly into all external corners.',
        'Measure the four outer boundary sides (A, B, C, D) using a 30m or 50m fibreglass tape held horizontal.',
        'Measure the corner-to-corner diagonal (E) joining the intersection of sides A and B to the intersection of sides C and D.',
        'Open our Plot Area Calculator, select the "Four-sided" shape option, enter sides A, B, C, D and diagonal E, and obtain the verified area in square feet, square metres, and gaj.',
        'Measure the opposite diagonal as a secondary cross-check: the two triangular calculations must agree within 0.5%.'
      ] }
    ],
    ['Worked numerical example using Heron’s formula',
      'Consider a four-sided plot with outer boundary measurements: Side A = 40.0 ft, Side B = 60.0 ft, Side C = 45.0 ft, Side D = 65.0 ft, and measured Diagonal E = 72.0 ft. We divide this into Triangle 1 (40, 60, 72) and Triangle 2 (45, 65, 72).',
      'Step 1 (Triangle 1): Semi-perimeter s₁ = (40 + 60 + 72) ÷ 2 = 86.0 ft. Using Heron’s Formula: Area₁ = √[86 × (86−40) × (86−60) × (86−72)] = √[86 × 46 × 26 × 14] = √[1,440,656] = 1,200.27 sq ft.',
      'Step 2 (Triangle 2): Semi-perimeter s₂ = (45 + 65 + 72) ÷ 2 = 91.0 ft. Area₂ = √[91 × (91−45) × (91−65) × (91−72)] = √[91 × 46 × 26 × 19] = √[2,067,404] = 1,437.85 sq ft.',
      'Step 3 (Total Area): Total Plot Area = Area₁ + Area₂ = 1,200.27 + 1,437.85 = 2,638.12 sq ft. In square yards (gaj), this is 2,638.12 ÷ 9 = 293.12 gaj. In gunthas, it is 2,638.12 ÷ 1,089 = 2.422 gunthas.',
      'Notice that if someone mistakenly used average sides [(40+45)/2 × (60+65)/2 = 42.5 × 62.5], they would get 2,656.25 sq ft—an overstatement of 18.13 sq ft. Over a high-value urban plot, that error represents significant financial leakage.',
      '<!-- [OWNER: add real photo of irregular plot tape survey showing diagonal string line] -->'
    ],
    ['Sources and official standards',
      [
        'IS 1200 (Part 1):1992 – Method of Measurement of Building and Civil Engineering Works (Earthwork and Land Survey).',
        'Survey of India Technical Manual – Topographical and Cadastral Survey Standards.',
        'Elementary Surveying & Mapping – CPWD Civil Engineering Handbook.',
        'Model Cadastral Survey Guidelines – Department of Land Resources (DoLR), Government of India.',
        'Handbook on Engineering Mathematics – Geometric Algorithms for Polygons.'
      ]
    ]
  ],

  'carpet-vs-built-up-vs-super-built-up-area': [
    ['Floor Area Breakdown Architecture', DIAGRAMS.carpetArea],
    ['State-wise RERA carpet area compliance (As on November 2026)',
      { table: [
        ['State RERA Authority', 'Carpet Area Rule Enforcement', 'Typical Permissible Loading', 'Official RERA Portal'],
        [
          ['MahaRERA (Maharashtra)', 'Mandatory carpet area declaration in agreement; balcony separated', '25% to 35% in high-rise towers', 'MahaRERA (maharera.maharashtra.gov.in)'],
          ['Karnataka RERA', 'Super built-up pricing strictly prohibited; carpet area verified on OC', '20% to 30% in gated apartments', 'K-RERA (rera.karnataka.gov.in)'],
          ['UP RERA', 'Registered deed must reflect RERA carpet area; builders penalized for variance', '25% to 35% across Noida/Greater Noida', 'UP RERA (up-rera.in)'],
          ['TNRERA (Tamil Nadu)', 'Floor space breakdown mandatory; common area percentage listed', '18% to 28% in Chennai developments', 'TNRERA (rera.tn.gov.in)'],
          ['Delhi RERA', 'DDA/MCD sanctioned plans must align with RERA carpet schedule', '20% to 30% in group housing', 'Delhi RERA (rera.delhi.gov.in)']
        ]
      ] },
      'Under Section 2(k) of the Real Estate (Regulation and Development) Act, 2016, “carpet area” is legally defined as the net usable floor area of an apartment, excluding the area covered by external walls, areas under services shafts, exclusive balcony or verandah area, and exclusive open terrace area, but including area covered by internal partition walls.'
    ],
    ['Common traps and misunderstandings in flat area calculations',
      [
        'Falling for the "Super Built-Up Area" illusion: A flat quoted at 1,500 sq ft super built-up with 35% loading has only 975 sq ft of usable carpet area.',
        'Assuming balconies and private terraces are inside the carpet area: Under RERA, balconies must be quoted as a separate line item with separate square footage.',
        'Paying maintenance fees calculated on super built-up area rather than RERA carpet area or equal flat sharing.',
        'Failing to verify whether the RERA registered carpet area matches the area certified in the final municipal Occupancy Certificate (OC).',
        'Confusing "usable floor space" with "plinth area": Plinth area includes external wall thickness and column projections.'
      ]
    ],
    ['Checklist for verifying apartment area before purchase',
      { ol: [
        'Download the official project registration page from the state RERA portal and inspect the sanctioned floor plan.',
        'Locate the specific unit number and check the exact RERA carpet area in square metres (and convert to square feet via our Carpet Area Calculator).',
        'Inspect the draft Agreement for Sale to ensure the purchase price is explicitly linked to the RERA carpet area rate, not super built-up.',
        'Verify the separate disclosure of exclusive balcony and utility areas.',
        'During physical flat handover, conduct a tape check of internal room dimensions against the sanctioned architectural drawing before accepting keys.'
      ] }
    ],
    ['Worked numerical example using the Carpet Area Calculator',
      'Suppose Buyer A is evaluating Flat 1: 1,200 sq ft super built-up at ₹8,000 per sq ft (Total: ₹96,00,000) with a declared RERA carpet area of 800 sq ft. Buyer B is evaluating Flat 2: 1,050 sq ft super built-up at ₹8,800 per sq ft (Total: ₹92,40,000) with a declared RERA carpet area of 790 sq ft. Which flat is the better deal per square foot of actual living space?',
      'Step 1 (Analyze Flat 1): Total Price = ₹96,00,000. RERA Carpet Area = 800 sq ft. Real Cost per Carpet Sq Ft = ₹96,00,000 ÷ 800 = ₹12,000 per sq ft. Loading percentage = (1,200 − 800) ÷ 800 = 50% loading.',
      'Step 2 (Analyze Flat 2): Total Price = ₹92,40,000. RERA Carpet Area = 790 sq ft. Real Cost per Carpet Sq Ft = ₹92,40,000 ÷ 790 = ₹11,696 per sq ft. Loading percentage = (1,050 − 790) ÷ 790 = 32.9% loading.',
      'Conclusion: Flat 2 appears more expensive on super built-up rate (₹8,800 vs ₹8,000), but in reality it provides virtually the same usable carpet space (790 sq ft vs 800 sq ft) for ₹3,60,000 less total capital outlay, and is ₹304 cheaper per square foot of real usable living space. Never compare flats on super built-up rates.',
      '<!-- [OWNER: add real photo of apartment tape measurement during interior handover] -->'
    ],
    ['Sources and official standards',
      [
        'Real Estate (Regulation and Development) Act, 2016 – Ministry of Housing and Urban Affairs, Government of India.',
        'National Building Code of India 2016 (Part 3) – Development Control Rules and Habitable Space Guidelines.',
        'IS 3861:2002 – Method of Measurement of Plinth, Carpet and Rental Areas of Buildings.',
        'MahaRERA Circular No. 4/2017 – Standardization of Carpet Area and Agreement Formats.',
        'CPWD Architectural Common Area Norms – Directorate of Estates.'
      ]
    ]
  ],

  'what-is-fsi-far-and-ground-coverage': [
    ['FSI and Ground Coverage Building Envelope', DIAGRAMS.fsiFar],
    ['State-wise residential FAR and Ground Coverage rules (As on November 2026)',
      { table: [
        ['City / State', 'Typical Residential FAR (Base)', 'Max Ground Coverage', 'Key Governing Authority / Bye-law'],
        [
          ['Mumbai (Maharashtra)', '1.33 to 2.0 (Higher with premium TDR)', '40% to 50%', 'DCPR 2034 (Municipal Corporation of Greater Mumbai)'],
          ['Bengaluru (Karnataka)', '1.75 to 2.50 (Depends on road width)', '50% to 65%', 'BBMP / BDA Revised Master Plan 2031 (bbmp.gov.in)'],
          ['Delhi (NCR)', '1.50 to 2.00 (Plot size dependent)', '66.6% to 75% for small plots', 'Master Plan for Delhi 2021/2041 (DDA - dda.gov.in)'],
          ['Chennai (Tamil Nadu)', '1.50 to 2.00 (Base FSI)', '60% to 70%', 'CMDA Combined Development and Building Rules, 2019'],
          ['Hyderabad (Telangana)', 'No fixed ceiling on wide roads (Stepped FSI)', '50% to 60%', 'GHMC / HMDA Building Rules (GO 168 - ghmc.gov.in)']
        ]
      ] },
      'Floor Area Ratio (FAR) or Floor Space Index (FSI) represents the ratio between the total built-up area across all floors and the total area of the plot (FAR = Total Built Area ÷ Plot Area). Ground coverage sets the maximum percentage of the plot footprint that the building can occupy at ground level.'
    ],
    ['Common mistakes regarding FAR and setback rules',
      [
        'Assuming FSI of 2.0 allows you to cover 100% of the plot across two floors: Ground coverage caps (usually 50%–60%) prevent you from building edge-to-edge.',
        'Neglecting road width requirements: In almost all Indian municipal bye-laws, permissible FAR increases with abutting road width; a narrow 20-ft street will have a severely restricted FAR compared to a 40-ft road.',
        'Encroaching into mandatory front, rear, and side setbacks: Violating setback lines risks refusal of Occupancy Certificate (OC) or municipal demolition notices.',
        'Assuming basement parking counts toward FAR: Most municipal bye-laws exempt basements used strictly for parking and services from FAR calculations.',
        'Ignoring purchasable premium FSI or TDR (Transferable Development Rights) options that can legally expand buildable space.'
      ]
    ],
    ['Checklist to calculate buildable area before commissioning house drawings',
      { ol: [
        'Measure abutting public road width exactly in front of the plot gate.',
        'Consult the local municipal zoning regulations (Master Plan) to identify plot classification (e.g., Residential R-1, R-2).',
        'Determine the three governing limits: Maximum Permissible FAR, Maximum Ground Coverage percentage, and Mandatory Setbacks (Front, Rear, Sides).',
        'Calculate maximum footprint allowed by setbacks and compare with maximum ground coverage; the smaller number dictates your ground floor size.',
        'Multiply plot area by FAR to determine maximum gross buildable area across all upper floors combined.'
      ] }
    ],
    ['Worked numerical example for a 40 × 60 residential plot',
      'Consider a standard 40 ft × 60 ft plot (2,400 sq ft) in an urban development authority zone where the bye-laws mandate: Base FAR = 1.5, Maximum Ground Coverage = 60%, Front Setback = 10 ft, Rear Setback = 7 ft, Side Setbacks = 4 ft each.',
      'Step 1 (Check Setbacks Footprint): Plot width = 40 ft; buildable width = 40 − 4 (side) − 4 (side) = 32 ft. Plot depth = 60 ft; buildable depth = 60 − 10 (front) − 7 (rear) = 43 ft. Maximum buildable footprint = 32 ft × 43 ft = 1,376 sq ft.',
      'Step 2 (Check Ground Coverage Cap): 60% of plot area = 0.60 × 2,400 = 1,440 sq ft. Because 1,376 sq ft (setback limit) is less than 1,440 sq ft, the maximum permitted ground floor footprint is 1,376 sq ft (57.3% of the plot).',
      'Step 3 (Calculate Total Permissible Built-up Area): Total FAR Area = 2,400 sq ft × 1.5 = 3,600 sq ft. If you construct Ground Floor = 1,376 sq ft, you have 3,600 − 1,376 = 2,224 sq ft remaining for upper floors (e.g. First Floor = 1,376 sq ft and Second Floor = 848 sq ft).',
      'Conclusion: By calculating both ground coverage and FAR together, you prevent drawing floor plans that exceed municipal approval boundaries.',
      '<!-- [OWNER: add real photo of house setback margins and building approval drawing] -->'
    ],
    ['Sources and official standards',
      [
        'National Building Code of India 2016 (Part 3) – Development Control Rules and General Building Requirements.',
        'Model Building Bye-Laws, 2016 – Ministry of Housing and Urban Affairs (MoHUA), Government of India.',
        'Delhi Master Plan 2021/2041 – Development Control Regulations for Residential Plots (dda.gov.in).',
        'Development Control and Promotion Regulations for Greater Mumbai (DCPR 2034) – MCGM.',
        'Karnataka Municipal Corporations Model Building Bye-Laws – Urban Development Department.'
      ]
    ]
  ],

  'circle-rate-guidance-value-explained': [
    ['Circle Rate Valuation Mechanism', DIAGRAMS.circleRate],
    ['State-wise circle rate (guidance value) mechanisms (As on November 2026)',
      { table: [
        ['State / Territory', 'Official Nomenclature', 'Revision Frequency', 'Official Government Portal'],
        [
          ['Delhi', 'Circle Rates (Category A to H)', 'Annual / Periodic Gazette', 'Delhi Online Registration Information System (esearch.delhigovt.nic.in)'],
          ['Maharashtra', 'Ready Reckoner Rate (ASR)', 'Annual (Effective 1st April)', 'IGR Maharashtra (igrmaharashtra.gov.in)'],
          ['Karnataka', 'Guidance Value', 'Periodic (Revised 2023-2024)', 'Kaveri 2.0 Online Services (kavyashodana.karnataka.gov.in)'],
          ['Uttar Pradesh', 'Circle Rate', 'Annual (District Magistrate notification)', 'IGRS UP (igrsup.gov.in)'],
          ['Tamil Nadu', 'Guideline Value', 'Periodic (Revised 2023)', 'TNREGINET Portal (tnreginet.gov.in)']
        ]
      ] },
      'Circle rates (also called guidance values, guideline values, or ready reckoner rates) represent the statutory minimum valuation threshold established by district valuation committees below which a property cannot be legally registered in government records.'
    ],
    ['Common mistakes and legal risks regarding circle rates',
      [
        'Attempting to register a property below circle rate: The sub-registrar will automatically revalue the deed to the circle rate and demand deficit stamp duty plus registration penalty.',
        'Overlooking Section 50C and Section 56(2)(x) of the Income Tax Act: If a property is sold below circle rate by more than 10%, the tax department taxes the difference as capital gains for the seller and "income from other sources" for the buyer.',
        'Ignoring floor-rise, road-width, or corner-plot multipliers: In cities like Mumbai and Delhi, circle rates increase by 5% to 20% for upper floors, wide roads, or commercial frontages.',
        'Confusing land circle rate with flat circle rate: Apartments incorporate land share plus CPWD-indexed minimum construction cost per square foot.',
        'Failing to verify current online valuation before drawing registration demand drafts.'
      ]
    ],
    ['Checklist for checking official circle rate before property registration',
      { ol: [
        'Visit the official state stamp and registration portal (e.g. Kaveri 2.0, IGR Maharashtra, or IGRS UP).',
        'Locate the property’s revenue district, taluk/tehsil, sub-registrar jurisdiction, and village/ward number.',
        'Identify whether the property is categorized as agricultural land, residential vacant plot, or composite residential apartment.',
        'Check specific road-width and corner plot multipliers: Plots facing roads wider than 40 or 60 feet attract 10% to 20% higher guidance values in many municipal jurisdictions.',
        'Multiply the official rate per square foot or square metre by your registered property area to establish the statutory Minimum Valuation.',
        'Compare the statutory valuation with your agreed purchase price; whichever figure is higher serves as the base for calculating Stamp Duty and Registration Fee.',
        'Ensure that any amenities (covered parking, private terrace, private garden) are correctly valued under the respective sub-registrar schedules to prevent post-registration deficit notices.'
      ] }
    ],
    ['Income tax implications under Section 50C and Section 56(2)(x)',
      [
        'Safe Harbour Tolerance Limit: The Income Tax Act provides a 10% tolerance band. If the circle rate does not exceed the actual sale consideration by more than 10%, the consideration agreed in the contract is accepted without triggering penalty tax assessments.',
        'Seller Capital Gains Exposure: Under Section 50C, if the sale price is lower than the circle rate by over 10%, the full circle rate value is deemed to be the full value of consideration for computing long-term or short-term capital gains.',
        'Buyer Other Income Exposure: Under Section 56(2)(x), the buyer is taxed on the difference (circle rate minus agreement price) as "income from other sources" at their prevailing marginal income tax slab rate.',
        'Valuation Officer Referral: If a seller disputes the circle rate valuation due to severe plot defects (e.g. irregular shape, high-tension wire overhead, cemetery proximity), they have a statutory right to request the Assessing Officer to refer the valuation to a Departmental Valuation Officer (DVO).'
      ]
    ],
    ['Worked numerical example using our Stamp Duty Calculator',
      'Suppose an apartment in Bengaluru is purchased for an agreed market consideration of ₹75,00,000. The flat has a super built-up area of 1,200 sq ft. The official sub-registrar guidance value for that apartment complex is ₹5,500 per sq ft. Let us calculate the taxable value and duty.',
      'Step 1 (Calculate Guidance Value Base): 1,200 sq ft × ₹5,500/sq ft = ₹66,00,000.',
      'Step 2 (Compare with Actual Consideration): Agreed consideration = ₹75,00,000. Guidance value = ₹66,00,000. Because ₹75,00,000 is higher than the guidance value, stamp duty attaches to ₹75,00,000.',
      'Step 3 (Calculate Duty in Karnataka): Stamp duty (5%) + Cess/Surcharge (approx 0.6%) + Registration fee (1%) = Total ~6.6%. On ₹75,00,000, total registration expenses = ₹4,95,000.',
      'Scenario B (If Consideration Was ₹60,00,000): If the buyer agreed to pay ₹60,00,000, the sub-registrar would reject ₹60 Lakh and assess stamp duty on the higher Guidance Value of ₹66,00,000. Furthermore, under Section 56(2)(x), the ₹6,00,000 gap would be taxed as income in the hands of the buyer. Always verify guidance values before signing.',
      '<!-- [OWNER: add real photo of sub-registrar office valuation extract document] -->'
    ],
    ['Sources and official standards',
      [
        'Indian Stamp Act, 1899 and State Stamp Acts (Bombay Stamp Act, Karnataka Stamp Act).',
        'Registration Act, 1908 – Sections 17 and 49.',
        'Income Tax Act, 1961 – Section 50C and Section 56(2)(x) (Valuation Discrepancies).',
        'Department of Land Resources – Valuation Guidelines for State Revenue Departments.',
        'State Registration Portals: IGR Maharashtra, Kaveri 2.0, IGRS UP, TNREGINET.'
      ]
    ]
  ]
};

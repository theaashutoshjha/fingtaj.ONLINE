# Fingtaj Editorial Publishing Cadence & 100-Article Expansion Plan

## 1. Publishing Governance and Cadence
To maintain consistent search engine discovery, editorial quality control, and AdSense content compliance, Fingtaj follows a disciplined publishing schedule:
- **Publishing Cadence:** 2 to 3 new or deeply upgraded guides published per calendar week.
- **Minimum Substantive Depth:** Every published guide must achieve **1,200+ words** of substantive, mathematically and legally verified content.
- **Editorial Rule:** Zero generic AI filler, zero spun content, zero fabricated credentials, and zero unsupported claims. Every guide must include primary citations (BIS, NBC, CPWD, RERA, state revenue gazettes), worked numerical examples connecting to our calculators, actionable checklists, and regional comparison tables.
- **Schema Validation:** Every guide record incorporates:
  ```javascript
  status: 'published' | 'draft',
  publishDate: 'YYYY-MM-DD',
  published: 'YYYY-MM-DD',
  modified: 'YYYY-MM-DD',
  author: 'ashutosh-jha',
  reviewedBy: { name: '...', credential: '...' } // optional
  ```
- **Draft Isolation:** The build system (`scripts/build.mjs` and `scripts/lib/guides.mjs`) strictly excludes guides where `status === 'draft'` or `publishDate > current_date` from HTML generation, `sitemap.xml`, `feed.xml`, `llms.txt`, and `search-index.json`.

---

## 2. Status of Existing 72 Guides
- **25 Flagship Guides:** Deeply expanded in this sprint to 1,150–1,600+ words each with 5-state statutory comparison tables, common mistake warnings, step-by-step checklists, worked numerical examples, code-generated SVG diagrams, and verified primary sources. `status: 'published'`, `modified: '2026-11-22'`.
- **47 Established Guides:** Fully published as part of the core foundational library (`published: '2026-11-03'`, `status: 'published'`). Scheduled for incremental expansion and diagram updates in upcoming editorial batches at 2 per week.

---

## 3. 100 High-Quality Upcoming Articles Plan (1,200+ Words Each)

Below is the structured catalog of 100 planned upcoming guides across our 6 core verticals, designed to capture high-intent Indian home building and property search queries.

### Category 1: Land & Measurement (18 Articles)
1. **How to Read a Khasra and Khatauni in Uttar Pradesh (UP Bhulekh Guide)**
   - *Target Keyword:* khasra khatauni up bhulekh check online
   - *Focus:* Reading column entries, unrecorded mortgages, joint ownership shares, mutation codes.
   - *Primary Source:* UP Board of Revenue / UP Bhulekh.
2. **7/12 Extract (Saat Bara Utara) Verification in Maharashtra**
   - *Target Keyword:* mahabhulekh 7 12 extract verification
   - *Focus:* Gaon Namuna 7 and 12, Pherphar (mutation) entries, liabilities column (Kharaba).
   - *Primary Source:* Mahabhulekh / Revenue Dept. Maharashtra.
3. **Bhoomi RTC (Pahani) Reading and Verification in Karnataka**
   - *Target Keyword:* karnataka bhoomi rtc pahani verification
   - *Focus:* Column 9 (ownership), Column 10 (tenancy), Column 11 (mortgages / hypothecations).
   - *Primary Source:* Bhoomi Portal, Revenue Dept. Karnataka.
4. **Patta Chitta Verification in Tamil Nadu: Step-by-Step**
   - *Target Keyword:* eservices tn gov in patta chitta verification
   - *Focus:* A-Register check, FMB (Field Measurement Book) sketch matching, survey sub-divisions.
   - *Primary Source:* Tamil Nadu Land Administration Department.
5. **Bangalore A-Khata vs B-Khata vs E-Khata: Legal Risks and Regularization**
   - *Target Keyword:* a khata vs b khata bangalore differences
   - *Focus:* BBMP property tax registers, DC conversion compliance, Akrama Sakrama status, bank loan eligibility.
   - *Primary Source:* BBMP Act / Karnataka Municipal Corporations Act.
6. **Converting Agricultural Land to Residential (CLU / NA Process in India)**
   - *Target Keyword:* agricultural to non agricultural land conversion process
   - *Focus:* NA order application, premium conversion charges, tehsildar verification, master plan zoning check.
   - *Primary Source:* State Land Revenue Codes (Maharashtra, Karnataka, Gujarat, UP).
7. **Boundary Disputes and Encroachment: Legal Remedies Under Land Revenue Codes**
   - *Target Keyword:* land boundary dispute resolution demarcation
   - *Focus:* Demarcation application (Tatkal / Hadd-basti), panchnama, revenue survey appeal process.
   - *Primary Source:* State Survey and Settlement Acts.
8. **Field Measurement Book (FMB) Sketch: How to Read Survey Marks and G-Lines**
   - *Target Keyword:* how to read fmb sketch survey map
   - *Focus:* Tie lines, offset lines, ladder measurements, boundary stones (F-lines).
   - *Primary Source:* Survey of India / State Survey Departments.
9. **Calculating Road Widening Dedication and Setbacks from Master Plan Maps**
   - *Target Keyword:* master plan road widening setback deduction
   - *Focus:* Right of Way (ROW) verification, TDR (Transferable Development Rights) compensation.
   - *Primary Source:* Urban Development Authority Master Plans.
10. **Lakes, Nalas and Buffer Zones: NGT Rules for Residential Plots**
    - *Target Keyword:* ngt buffer zone distance lake nala construction
    - *Focus:* 75-metre lake buffer, 50-metre primary drain, 25-metre secondary drain buffer compliance.
    - *Primary Source:* National Green Tribunal (NGT) Principal Bench Orders.
11. **Layout Regularization Schemes (LRS / Akrama Sakrama / Bhu Aadhaar)**
    - *Target Keyword:* unauthorized layout regularization rules penalties
    - *Focus:* Unapproved sub-division risks, compounding penalties, municipal water/power connection prerequisites.
    - *Primary Source:* State Urban Development Notifications.
12. **High-Tension (HT) Line Buffer and Construction Restrictions**
    - *Target Keyword:* high tension line distance from house building
    - *Focus:* CEA Central Electricity Authority safety clearance regulations (horizontal and vertical clearance).
    - *Primary Source:* CEA Regulations, 2010.
13. **Coastal Regulation Zone (CRZ) Norms for Coastal Plots in India**
    - *Target Keyword:* crz rules residential construction distance from htlin
    - *Focus:* CRZ-I to CRZ-IV classification, No Development Zone (NDZ) 200m/50m rules.
    - *Primary Source:* MoEFCC CRZ Notification 2019.
14. **Guntas to Square Feet and Acre Conversion in Telangana (Dharani Portal Units)**
    - *Target Keyword:* guntas to sq ft dharani telangana land
    - *Focus:* Revenue conversion factors, Passbook verification, agricultural survey numbering.
    - *Primary Source:* Telangana Dharani Portal.
15. **Measuring Sloping Plots: Stepped Taping vs Total Station Surveying**
    - *Target Keyword:* measuring sloping land contour survey civil
    - *Focus:* Horizontal projection vs slope distance, cut-and-fill volume estimations.
    - *Primary Source:* Survey of India / IS 1200 Part 1.
16. **Corner Plots vs Intermediary Plots: FSI and Road-Width Advantages**
    - *Target Keyword:* corner plot advantages bye laws setback fsi
    - *Focus:* Multiple frontage setbacks, splay requirements, ventilation and parking benefits.
    - *Primary Source:* Model Building Bye-Laws (NBC 2016).
17. **D-Form Patta Land and Assigned Land: Why Buying It Is Illegal**
    - *Target Keyword:* assigned land buying legal consequences india
    - *Focus:* Prohibition of transfer of assigned lands acts, cancellation of registration, eviction procedures.
    - *Primary Source:* State Assigned Land (Prohibition of Transfer) Acts.
18. **Understanding Circle Rates in Delhi: Category A to H Colony Classification**
    - *Target Keyword:* delhi circle rates category a to h list
    - *Focus:* Municipal valuation tiers, construction cost minimums, DDA leasehold vs freehold conversion.
    - *Primary Source:* Delhi Revenue Department Gazette.

---

### Category 2: Building Materials & Quality Testing (18 Articles)
19. **Field Testing of Cement: 6 Visual and Physical Tests Before Pouring**
    - *Target Keyword:* field tests for cement quality on site
    - *Focus:* Color uniformity, temperature test, lump presence, water float test, glass plate setting.
    - *Primary Source:* IS 269:2015.
20. **Slump Cone Test for Concrete Workability: Step-by-Step Procedure**
    - *Target Keyword:* slump test procedure concrete is 1199
    - *Focus:* True slump, shear slump, collapse slump; acceptable limits for footings, slabs, and columns.
    - *Primary Source:* IS 1199 (Part 2):2018.
21. **Compressive Strength Test of Concrete Cubes (7-Day vs 28-Day Curing)**
    - *Target Keyword:* concrete cube test 7 day 28 day strength calculation
    - *Focus:* 150mm cube casting, tamping, curing tank temperature, UTM compressive testing.
    - *Primary Source:* IS 516:1959 / IS 456.
22. **Silt Content Test for River Sand: Jar Test Method**
    - *Target Keyword:* silt content test in sand procedure limit
    - *Focus:* Salt water meniscus reading, 8% maximum permissible silt volume per CPWD norms.
    - *Primary Source:* IS 2386 (Part 2):1963.
23. **Manufactured Sand (M-Sand) vs Plastering Sand (P-Sand): Gradation Differences**
    - *Target Keyword:* m sand vs p sand differences civil
    - *Focus:* Zone II vs Zone IV sieve passing, micro-fines, plaster bond strength.
    - *Primary Source:* IS 383:2016.
24. **TMT Steel Bar Weight Tolerance and Gauge Verification On-Site**
    - *Target Keyword:* tmt bar weight tolerance rolling margin is 1786
    - *Focus:* Rolling margin limits (±7% for 8–10mm, ±4% for 16mm+), cutting 1m sample for weighbridge check.
    - *Primary Source:* IS 1786:2008.
25. **Testing Brick Quality at Site: 5-Step Practical Field Method**
    - *Target Keyword:* brick quality test on site drop ringing water absorption
    - *Focus:* Metallic ringing sound, 1m drop test, nail scratch hardness, 24-hr cold water absorption.
    - *Primary Source:* IS 1077 / IS 3495.
26. **Fly Ash Bricks vs Red Clay Bricks: Compressive Strength and Thermal Conductivity**
    - *Target Keyword:* fly ash bricks vs clay bricks cost strength
    - *Focus:* Uniform dimensional stability, mortar savings, efflorescence resistance, manufacturing standards.
    - *Primary Source:* IS 12894:2002.
27. **AAC Block Jointing Mortar: Thin-Bed Adhesive vs Conventional Cement Mortar**
    - *Target Keyword:* aac block adhesive vs cement mortar comparison
    - *Focus:* Polymer-modified thin bed (2–3mm) vs 12mm mortar, reduction in thermal bridging, drying time.
    - *Primary Source:* IS 2185 (Part 3).
28. **Water-Cement Ratio (W/C) in Concrete: Why Excess Water Weakens RCC**
    - *Target Keyword:* water cement ratio effect on concrete strength
    - *Focus:* Abram’s Law, porosity, bleeding, segregation, target W/C of 0.45 to 0.50.
    - *Primary Source:* IS 456:2000 Clause 5.4.
29. **Concrete Admixtures: Plasticizers, Superplasticizers, and Waterproofing Liquids**
    - *Target Keyword:* concrete admixtures types uses retarders plasticizers
    - *Focus:* Integral waterproofing compounds, dosage rates (per 50kg bag), slump retention.
    - *Primary Source:* IS 9103:1999.
30. **UPVC vs CPVC vs PPR Pipes for Domestic Plumbing: Pressure Ratings and Uses**
    - *Target Keyword:* upvc vs cpvc vs ppr plumbing pipes comparison
    - *Focus:* Hot vs cold water temperature limits, solvent cement joints vs heat fusion joints.
    - *Primary Source:* IS 15778 (CPVC) / IS 4985 (UPVC).
31. **Vitrified Tiles vs Ceramic Tiles vs Italian Marble: Durability and Porosity**
    - *Target Keyword:* vitrified tiles vs ceramic tiles differences flooring
    - *Focus:* Water absorption (<0.05% vitrified vs >3% ceramic), double charged vs glazed vitrified (GVT).
    - *Primary Source:* IS 15622:2017.
32. **Anti-Termite Treatment (Pre-Construction) Stages per IS 6313**
    - *Target Keyword:* pre construction anti termite treatment procedure is 6313
    - *Focus:* Trench bottom, backfill soil, plinth wall interface, chemical emulsion (Chlorpyrifos/Imidacloprid).
    - *Primary Source:* IS 6313 (Part 2):2013.
33. **Ready Mix Concrete (RMC) vs Site Mix Concrete: Transit Time and Quality Control**
    - *Target Keyword:* rmc vs site mix concrete pros cons residential
    - *Focus:* Transit mixer time limits (90 minutes max without retarder), automated batching accuracy.
    - *Primary Source:* IS 4926:2003.
34. **Shuttering (Formwork) Striking Periods: When to Remove Props and Side Boards**
    - *Target Keyword:* shuttering removal time is 456 columns beams slabs
    - *Focus:* Vertical formwork (16–24 hrs), slab props (7–14 days), beam props (14–21 days).
    - *Primary Source:* IS 456:2000 Clause 11.3.
35. **Cover Blocks in RCC: Why 20mm, 25mm, and 40mm Spacers Matter**
    - *Target Keyword:* cover blocks in rcc slab beam column footing
    - *Focus:* Reinforcement corrosion prevention, fire rating cover, PVC vs concrete cover blocks.
    - *Primary Source:* IS 456:2000 Clause 26.4.
36. **Paints: Primer, Putty, Undercoat, and Emulsion Layers Explained**
    - *Target Keyword:* wall painting sequence primer putty emulsion coats
    - *Focus:* Moisture content check (Protimeter <12%), curing period before painting, drying between coats.
    - *Primary Source:* CPWD Painting Specifications.

---

### Category 3: House Construction & Engineering (18 Articles)
37. **Soil Testing (Geotechnical Investigation): Boreholes, SPT, and SBC Values**
    - *Target Keyword:* soil testing for house construction cost procedure
    - *Focus:* Safe Bearing Capacity (SBC) calculation, identifying black cotton and loose sandy soils.
    - *Primary Source:* IS 1892 / IS 2131.
38. **Black Cotton Soil Foundation Design: Under-Reamed Piles and Raft Footings**
    - *Target Keyword:* foundation for black cotton soil under reamed pile
    - *Focus:* Swelling and shrinkage mechanics, bulb diameter, depth below active moisture zone.
    - *Primary Source:* IS 2911 (Part 1/Sec 2).
39. **Plinth Beam Design and Damp Proof Course (DPC) Construction**
    - *Target Keyword:* plinth beam and dpc construction details
    - *Focus:* Tie beam structural function, 50mm M20 concrete DPC with waterproofing compound.
    - *Primary Source:* NBC 2016 / IS 456.
40. **Column Spacing and Sizing for a G+1 and G+2 Residential House**
    - *Target Keyword:* column size for g+1 g+2 house span distance
    - *Focus:* 9"x12" vs 9"x15" columns, maximum span between columns (4m to 5m), reinforcement rebars.
    - *Primary Source:* IS 456 / SP 16 Design Aids.
41. **RCC Slab Reinforcement: One-Way vs Two-Way Slab Detailing**
    - *Target Keyword:* one way vs two way slab reinforcement detailing
    - *Focus:* Aspect ratio (Ly/Lx), cranked bars, top distribution steel, deflection checks.
    - *Primary Source:* IS 456 Clause 24 / SP 34.
42. **Lintel Beams and Chajja Projections: Sizing and Bearing Lengths**
    - *Target Keyword:* lintel beam size and bearing over doors windows
    - *Focus:* Minimum 100mm/150mm bearing length, sunshade cantilever reinforcement.
    - *Primary Source:* IS 456.
43. **Staircase Reinforcement Detailing: Waist Slab, Riser, and Tread Bars**
    - *Target Keyword:* staircase reinforcement detailing waist slab rebar
    - *Focus:* Cranked bar detailing at landing beam junctions, distribution steel.
    - *Primary Source:* SP 34 (Handbook on Concrete Reinforcement).
44. **Parapet Wall Height, Coping, and Weep Holes: NBC Guidelines**
    - *Target Keyword:* parapet wall height standard nbc 2016
    - *Focus:* 1.05m minimum safety height, RCC coping, terrace rainwater scupper pipes.
    - *Primary Source:* National Building Code 2016.
45. **Curing Methods: Ponding vs Wet Hessian vs Membrane Curing**
    - *Target Keyword:* concrete curing methods ponding burlap time duration
    - *Focus:* Hydration temperatures, curing duration (7 days OPC vs 10 days blended cements).
    - *Primary Source:* IS 456 Clause 13.5.
46. **Cold Joints in Concrete: How to Avoid and Treat Construction Joints**
    - *Target Keyword:* construction cold joint concrete prevention repair
    - *Focus:* Delay in pour, surface hacking, epoxy bonding agents, waterstops in retaining walls.
    - *Primary Source:* IS 456 Clause 5.3.
47. **Plastering Thickness: Internal (12mm) vs External (20mm Double Coat)**
    - *Target Keyword:* plaster thickness internal external wall cpwd
    - *Focus:* 1:4 and 1:6 mortar mixes, chicken mesh (wire mesh) installation at brick-column junctions.
    - *Primary Source:* IS 1661:1972 / CPWD.
48. **Electrical Conduit Routing Before RCC Slab Casting**
    - *Target Keyword:* electrical conduit laying in roof slab tips
    - *Focus:* Fan box fixing, deep boxes, heavy gauge PVC conduit routing, avoiding rebar congestion.
    - *Primary Source:* National Electrical Code of India / NBC 2016.
49. **Plumbing Pipe Embedment in Brickwork and Wall Chasing Best Practices**
    - *Target Keyword:* plumbing pipe concealment wall chasing rules
    - *Focus:* Wall chaser machines vs manual hammering, avoiding horizontal chases on load-bearing walls.
    - *Primary Source:* NBC 2016 Part 9.
50. **Waterproofing Basement Walls and Retaining Structures**
    - *Target Keyword:* basement waterproofing external membrane box method
    - *Focus:* Hydrostatic water pressure, bitumen membrane, bentonite clay, sump pump provision.
    - *Primary Source:* IS 3067 / IS 1642.
51. **Construction Timeline: Month-by-Month Schedule for a 1,500 Sq Ft House**
    - *Target Keyword:* house construction timeline stages month by month
    - *Focus:* Excavation (Month 1), Plinth (Month 2), Structure (Month 3–4), Masonry/Plaster (Month 5–6), Finishing (Month 7–8).
    - *Primary Source:* CPWD Project Management Norms.
52. **Contractor Billing: Item-Rate vs Running Account (RA) Bills Verification**
    - *Target Keyword:* contractor running bill ra bill checking civil
    - *Focus:* Measurement book (MB) entries, retention money deduction (5%), mobilization advance recovery.
    - *Primary Source:* CPWD Manual.
53. **Cracks in RCC and Masonry: Thermal vs Structural vs Settlement Cracks**
    - *Target Keyword:* cracks in walls ceiling concrete causes repair
    - *Focus:* Diagonal shear cracks, horizontal slab junction cracks, crack width monitoring gauges.
    - *Primary Source:* IS 456 / BRE Digest.
54. **Seismic Bands in Masonry: Plinth, Lintel, and Roof Bands (IS 4326)**
    - *Target Keyword:* earthquake resistant house construction seismic bands is 4326
    - *Focus:* Continuous horizontal reinforced concrete bands in seismic zones III, IV, and V.
    - *Primary Source:* IS 4326:2013.

---

### Category 4: Property Buying, Registration & Legal (18 Articles)
55. **Agreement to Sell (ATS) vs Absolute Sale Deed: Critical Legal Differences**
    - *Target Keyword:* agreement to sell vs sale deed differences
    - *Focus:* Section 54 Transfer of Property Act, possession transfer, conveyance registration requirement.
    - *Primary Source:* Transfer of Property Act, 1882 / Indian Registration Act, 1908.
56. **Encumbrance Certificate (EC): How to Read Nil Encumbrance vs Charges**
    - *Target Keyword:* encumbrance certificate how to read nil ec
    - *Focus:* Form 15 (entry recorded) vs Form 16 (nil encumbrance), minimum 30-year search window.
    - *Primary Source:* State Inspector General of Registration Portals.
57. **Title Search Report: What an Advocate Checks Across 30 Years of Records**
    - *Target Keyword:* 30 year title search report property purchase
    - *Focus:* Mother deed, chain of custody, family tree / genealogical certificates, revenue mutation continuity.
    - *Primary Source:* Bar Council of India Conveyancing Practices.
58. **TDS on Property Purchase Under Section 194-IA (1% on Property Over ₹50 Lakh)**
    - *Target Keyword:* section 194 ia tds property purchase 26qb
    - *Focus:* Form 26QB filing, inclusion of parking and amenity charges in threshold, penalty for non-deduction.
    - *Primary Source:* Income Tax Department / Section 194-IA.
59. **TDS on Purchase of Property from Non-Resident Indian (NRI) Under Section 195**
    - *Target Keyword:* tds on property purchase from nri section 195
    - *Focus:* Long-term capital gains withholding (20% + surcharge/cess), Lower Deduction Certificate (Form 13).
    - *Primary Source:* Income Tax Act, 1961 Section 195.
60. **Capital Gains Tax Exemption Under Section 54 and Section 54F (New House Reinvestment)**
    - *Target Keyword:* section 54 capital gains tax exemption property
    - *Focus:* 2-year purchase / 3-year construction window, Capital Gains Account Scheme (CGAS) deposit.
    - *Primary Source:* Income Tax Act, 1961.
61. **RERA Carpet Area Definition vs Earlier Built-Up Area Practice**
    - *Target Keyword:* rera carpet area definition internal partition walls
    - *Focus:* Net usable floor area excluding external walls, service shafts, and balconies.
    - *Primary Source:* Real Estate (Regulation and Development) Act, 2016 Section 2(k).
62. **How to File a Complaint on State RERA Portals (Step-by-Step Procedure)**
    - *Target Keyword:* how to file rera complaint against builder online
    - *Focus:* Form M (regulatory violation) vs Form N (compensation), statutory filing fees, hearing procedure.
    - *Primary Source:* State RERA Rules.
63. **Occupancy Certificate (OC) vs Completion Certificate (CC): Why Living Without OC Is Risky**
    - *Target Keyword:* occupancy certificate vs completion certificate differences
    - *Focus:* Municipal disconnection risk, property tax penalty rates, resale difficulties, bank mortgage bar.
    - *Primary Source:* State Municipal Corporation Acts.
64. **Mutation of Property (Dakhil Kharij / Khata Transfer) After Registration**
    - *Target Keyword:* property mutation process dakhil kharij online
    - *Focus:* Notice period, objections, revenue tehsildar order, updating property tax ledger.
    - *Primary Source:* State Land Revenue Acts.
65. **Home Loan Disbursement Stages for Under-Construction Apartments (Construction-Linked Plan)**
    - *Target Keyword:* home loan disbursement stages under construction flat
    - *Focus:* Pre-EMI vs Full EMI, engineer stage certification, builder demand letter verification.
    - *Primary Source:* RBI Master Direction on Housing Finance.
66. **Home Loan Balance Transfer (Refinancing): When Does It Make Financial Sense?**
    - *Target Keyword:* home loan balance transfer calculation processing fees
    - *Focus:* Break-even period formula, MODT (Memorandum of Deposit of Title Deeds) charges, foreclosure rules.
    - *Primary Source:* RBI Fair Practices Code.
67. **Joint Home Loan: Tax Benefits Under Section 24(b) and 80C for Co-Borrowers**
    - *Target Keyword:* joint home loan tax benefits co owner husband wife
    - *Focus:* Co-owner vs co-borrower requirement, doubling deduction limits (up to ₹4 lakh interest, ₹3 lakh 80C).
    - *Primary Source:* Income Tax Department.
68. **Freehold Property vs Leasehold Property: Conversion Costs and Rights**
    - *Target Keyword:* freehold vs leasehold property differences conversion
    - *Focus:* 99-year lease expiration risks, ground rent, conversion charges to municipal authorities (e.g. DDA).
    - *Primary Source:* State Housing Boards and Development Authorities.
69. **Power of Attorney (GPA) Sales: Why Supreme Court Banned Suraj Lamp Judgment**
    - *Target Keyword:* gpa sale property legal supreme court suraj lamp
    - *Focus:* Suraj Lamp & Industries judgment, invalidity of GPA/SA/Will transfers as conveyances.
    - *Primary Source:* Supreme Court of India (2011) Suraj Lamp Case.
70. **Inheritance and Succession of Property in India (Hindu vs Muslim vs Indian Succession Act)**
    - *Target Keyword:* property inheritance laws in india legal heir certificate
    - *Focus:* Class I legal heirs, partition deeds, relinquishment deeds, probate of will requirements.
    - *Primary Source:* Hindu Succession Act, 1956 / Indian Succession Act, 1925.
71. **Buying a Resale Flat: 15-Point Due Diligence Checklist**
    - *Target Keyword:* resale flat purchase document verification checklist
    - *Focus:* Society NOC, share certificate transfer, outstanding maintenance dues, original chain of deeds.
    - *Primary Source:* Cooperative Societies Acts.
72. **Car Parking Allocation in Housing Societies: Open vs Stilt vs Covered Parking Law**
    - *Target Keyword:* car parking allotment rules supreme court rera
    - *Focus:* Supreme Court Nahalchand Laloochand ruling, prohibition of sale of open parking spaces by builders.
    - *Primary Source:* Real Estate (Regulation and Development) Act, 2016.

---

### Category 5: Power, Solar, Inverter & Water Infrastructure (14 Articles)
73. **PM Surya Ghar Muft Bijli Yojana: Subsidy Slab Structure and Application Process**
    - *Target Keyword:* pm surya ghar subsidy calculation online apply
    - *Focus:* Central Financial Assistance (₹30,000 for 1kW, ₹60,000 for 2kW, ₹78,000 for 3kW+), DISCOM inspection.
    - *Primary Source:* MNRE PM Surya Ghar Operational Guidelines.
74. **On-Grid vs Off-Grid vs Hybrid Solar Systems for Homes: Cost and Battery ROI**
    - *Target Keyword:* on grid vs off grid vs hybrid solar system home
    - *Focus:* Battery replacement capital expenditure, power-cut backup requirements, net metering payback.
    - *Primary Source:* Central Electricity Authority (CEA).
75. **Bi-Directional Net Metering: How Solar Export and Import Units Are Settled**
    - *Target Keyword:* net metering calculation electricity bill solar units
    - *Focus:* Banking of surplus solar units, peak vs off-peak time-of-day (TOD) settlement, annual true-up.
    - *Primary Source:* State Electricity Regulatory Commission (SERC) Net Metering Regulations.
76. **Solar Rooftop Shadow Analysis: Calculating Seasonal Sun Angle and Orientation**
    - *Target Keyword:* solar panel shadow analysis south facing angle india
    - *Focus:* True South orientation, optimal tilt angle (latitude ± 5°), winter solstice shadow lengths.
    - *Primary Source:* National Institute of Solar Energy (NISE).
77. **Lithium-Ion vs Tubular Lead-Acid Batteries for Home Inverters**
    - *Target Keyword:* lithium ion vs tubular battery for inverter price life
    - *Focus:* Depth of Discharge (DOD 90% vs 50%), cycle life (3000 cycles vs 1000 cycles), warranty comparison.
    - *Primary Source:* Bureau of Energy Efficiency (BEE).
78. **Pure Sine Wave vs Modified Sine Wave Inverters: Motor and Appliance Safety**
    - *Target Keyword:* pure sine wave vs modified sine wave inverter differences
    - *Focus:* Harmonic distortion (THD <3%), humming noise in ceiling fans, inductive load overheating risks.
    - *Primary Source:* IS 13314.
79. **Sizing Domestic Water Booster Pumps: Head, Flow Rate, and Bar Pressure**
    - *Target Keyword:* water booster pump sizing for house pressure head
    - *Focus:* Static head, frictional pipe losses, flow rate in LPM, optimal pressure (2.0 to 3.0 bar).
    - *Primary Source:* NBC 2016 Part 9.
80. **Rainwater Harvesting Recharge Pit Sizing per NBC 2016**
    - *Target Keyword:* rainwater harvesting recharge pit design calculation
    - *Focus:* Filter media layers (boulders, coarse gravel, coarse sand), borewell recharge design.
    - *Primary Source:* Central Ground Water Board (CGWB) / NBC 2016.
81. **Overhead Water Tank Cleaning and Disinfection Protocol**
    - *Target Keyword:* overhead water tank cleaning method bleaching powder ratio
    - *Focus:* Bleaching powder / sodium hypochlorite dosing (50 ppm contact), sludge drain, UV sterilization.
    - *Primary Source:* CPWD Public Health Engineering Guidelines.
82. **Submersible Borewell Pump Selection: Sizing HP from Bore Depth and Discharge**
    - *Target Keyword:* borewell submersible pump hp calculation depth
    - *Focus:* Total dynamic head (TDH), delivery pipe diameter, stage calculation, submersible motor sizing.
    - *Primary Source:* IS 8034 / IS 9283.
83. **Earthing (Grounding) Installation for Residential Homes: Chemical vs Pipe Earthing**
    - *Target Keyword:* house earthing installation chemical pipe earthing is 3043
    - *Focus:* Soil resistance, copper vs GI electrode, earth resistance testing (<5 ohms benchmark).
    - *Primary Source:* IS 3043:2018 (Code of Practice for Earthing).
84. **Residual Current Circuit Breaker (RCCB / ELCB): Sizing 30mA for Shock Protection**
    - *Target Keyword:* rccb elcb selection 30ma 100ma home electrical safety
    - *Focus:* Human threshold of ventricular fibrillation, 30mA tripping sensitivity, MCB vs RCCB function.
    - *Primary Source:* IS 12640 / National Electrical Code.
85. **Air Conditioner Power Consumption: 3-Star vs 5-Star ISEER Energy Savings**
    - *Target Keyword:* 3 star vs 5 star ac electricity consumption comparison
    - *Focus:* Indian Seasonal Energy Efficiency Ratio (ISEER), annual kWh consumption calculation, tariff ROI.
    - *Primary Source:* Bureau of Energy Efficiency (BEE) AC Star Tables.
86. **Preventing Water Hammer in Residential Plumbing Lines**
    - *Target Keyword:* water hammer in pipes causes fix shock arrester
    - *Focus:* Pressure surge on quick-closing valves, installing pneumatic water hammer arresters.
    - *Primary Source:* NBC 2016 Plumbing.

---

### Category 6: Interiors, Waterproofing & Home Maintenance (14 Articles)
87. **Terrace Waterproofing Systems: Brick Bat Coba vs Polyurethane (PU) Liquid Membrane**
    - *Target Keyword:* terrace waterproofing brick bat coba vs pu coating
    - *Focus:* Thermal expansion cracks, elastomeric elongation, slope maintenance (1:100 to rainwater drains).
    - *Primary Source:* IS 1346:1991 (Waterproofing with Bitumen Felts) / CPWD.
88. **Bathroom Waterproofing: Recessed Slab Detailing and Angle Fillet Treatment**
    - *Target Keyword:* bathroom sunken slab waterproofing steps angle fillet
    - *Focus:* Sunken slab depth (300mm), cinder filling vs autoclaved block infill, 300mm coving up walls.
    - *Primary Source:* IS 11466 / CPWD.
89. **Crystalline Waterproofing for Retaining Walls and Underground Sumps**
    - *Target Keyword:* crystalline waterproofing capillary pores concrete
    - *Focus:* Hydrophilic crystal growth in microscopic capillary tracts, self-healing hairline cracks.
    - *Primary Source:* ACI 212.3R / IS 456.
90. **Gypsum Board vs POP (Plaster of Paris) False Ceiling: Cost and Moisture Resistance**
    - *Target Keyword:* gypsum vs pop false ceiling differences cost
    - *Focus:* GI perimeter channel framing, joint taping, moisture sagging in humid coastal regions.
    - *Primary Source:* IS 2095 (Gypsum Plasterboards).
91. **Modular Kitchen Carcase Materials: Commercial Plywood (BWP/BWR) vs MDF vs HDHMR**
    - *Target Keyword:* modular kitchen material bwp plywood vs hdhmr
    - *Focus:* IS 710 (Boiling Water Proof marine ply), screw holding capacity, water swelling tests.
    - *Primary Source:* IS 710 (Marine Plywood) / IS 303.
92. **Granite vs Quartz vs Nano White for Kitchen Countertops**
    - *Target Keyword:* kitchen countertop granite vs quartz vs nano white
    - *Focus:* Mohs hardness, scratch resistance, heat tolerance, lemon acid stain porosity.
    - *Primary Source:* ASTM C615 (Granite Specifications).
93. **Efflorescence (Shora) on Brick Walls: Causes, Neutralization and Chemical Treatment**
    - *Target Keyword:* efflorescence on walls shora treatment white powder
    - *Focus:* Soluble salts in groundwater/bricks, zinc chloride/muriatic wash, siliconate water repellent.
    - *Primary Source:* IS 1077 Efflorescence Test Standards.
94. **Rising Dampness at Plinth Level: Installing Chemical DPC Injections**
    - *Target Keyword:* rising dampness treatment chemical dpc injection
    - *Focus:* Capillary action from ground soil, silicone micro-emulsion pressure grouting.
    - *Primary Source:* BRE Digest 245.
95. **Termite Retreatment in Existing Homes: Drilling and Chemical Barrier at Wall Floor Junctions**
    - *Target Keyword:* post construction anti termite treatment drilling chemical
    - *Focus:* 12mm holes at 300mm intervals, injecting Imidacloprid emulsion under pressure.
    - *Primary Source:* IS 6313 (Part 3):2013.
96. **UPVC Windows vs Powder-Coated Aluminium Windows: Thermal and Acoustic Insulation**
    - *Target Keyword:* upvc windows vs aluminium windows cost soundproof
    - *Focus:* Multi-chambered fusion welded frames, double glazed units (DGU 5-12-5), wind load resistance.
    - *Primary Source:* IS 16098 / EN 12608.
97. **Flush Doors vs Solid Wood Doors: Core Construction and Warpage Prevention**
    - *Target Keyword:* flush door vs solid wood door comparison is 2202
    - *Focus:* Solid timber core, lipping margins, decorative veneer lamination, water resistance tests.
    - *Primary Source:* IS 2202 (Part 1):1999.
98. **Painting Order of Work During Home Renovation: When to Polish, Paint and Floor**
    - *Target Keyword:* house painting sequence during renovation civil
    - *Focus:* Masonry modifications → Electrical chasing → Tile laying → Ceiling framing → Primer/Putty → Final coat.
    - *Primary Source:* CPWD Maintenance Manual.
99. **Tile Grouting: Epoxy Grout vs Cementitious Grout for Bathrooms and Living Rooms**
    - *Target Keyword:* epoxy grout vs cement grout tiles waterproof
    - *Focus:* Water permeability, chemical resistance, anti-fungal properties, joint widths.
    - *Primary Source:* ANSI A118.3.
100. **Home Deep Cleaning and Periodic Structural Health Checklist for Homeowners**
     - *Target Keyword:* annual home maintenance checklist structural check
     - *Focus:* Terrace drain clearing before monsoon, expansion joint inspection, electrical panel terminal tightening.
     - *Primary Source:* NBC 2016 Building Maintenance Recommendations.

---

## 4. Weekly Publishing Calendar (Phase 1: Next 12 Weeks)
Each published guide will follow the complete Fingtaj editorial standard: verified primary source citations, worked numerical examples, checklists, common pitfalls, and code-generated SVGs.

| Week | Target Publication Dates | Planned Article Topics | Word Target |
| :--- | :--- | :--- | :--- |
| **Week 1** | Dec 1, Dec 4, 2026 | #1 (UP Khasra Khatauni) & #19 (Field Testing Cement) & #55 (ATS vs Sale Deed) | 1,250+ each |
| **Week 2** | Dec 8, Dec 11, 2026 | #2 (7/12 Extract Maharashtra) & #37 (Soil Testing SPT/SBC) | 1,300+ each |
| **Week 3** | Dec 15, Dec 18, 2026 | #3 (Bhoomi Pahani Karnataka) & #73 (PM Surya Ghar Subsidy) & #87 (Terrace Waterproofing) | 1,350+ each |
| **Week 4** | Dec 22, Dec 25, 2026 | #4 (Patta Chitta TN) & #20 (Slump Cone Test IS 1199) | 1,200+ each |
| **Week 5** | Dec 29, Jan 1, 2027 | #5 (Bangalore Khata Types) & #56 (Encumbrance Certificate) & #38 (Black Cotton Soil) | 1,400+ each |
| **Week 6** | Jan 5, Jan 8, 2027 | #6 (Agricultural Land CLU/NA) & #21 (Cube Compressive Test) | 1,300+ each |
| **Week 7** | Jan 12, Jan 15, 2027 | #7 (Boundary Disputes) & #74 (On-Grid vs Off-Grid Solar) & #88 (Bathroom Waterproofing) | 1,250+ each |
| **Week 8** | Jan 19, Jan 22, 2027 | #8 (FMB Survey Marks) & #57 (30-Year Title Search) | 1,350+ each |
| **Week 9** | Jan 26, Jan 29, 2027 | #9 (Road Widening Setbacks) & #22 (Silt Content Jar Test) & #39 (Plinth Beam & DPC) | 1,250+ each |
| **Week 10**| Feb 2, Feb 5, 2027 | #10 (NGT Lake Buffer Zones) & #58 (TDS Section 194-IA) | 1,300+ each |
| **Week 11**| Feb 9, Feb 12, 2027 | #11 (Layout Regularization LRS) & #75 (Net Metering Billing) & #89 (Crystalline Waterproofing) | 1,250+ each |
| **Week 12**| Feb 16, Feb 19, 2027 | #12 (High Tension Buffer CEA) & #23 (M-Sand vs P-Sand) | 1,300+ each |

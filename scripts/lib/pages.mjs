import cfg from '../../site.config.mjs';
import { esc } from './layout.mjs';

const M = cfg.email;
const mail = `<a href="mailto:${M}">${M}</a>`;
const L = (u, t) => `<a href="${u}">${t}</a>`;

export const STATIC_PAGES = [
  {
    path: '/about',
    title: 'About Fingtaj – Mission, Principles and Team',
    type: 'AboutPage',
    kicker: 'Our story',
    desc: 'Why Fingtaj exists: free calculators and plain-English guides so Indian families can check the numbers before they build, buy or renovate a home.',
    published: '2026-11-03',
    modified: '2026-11-22',
    html: `<p class="lead">Building or buying a home in India is usually the single largest financial commitment an individual or family will ever make. Yet the arithmetic surrounding land measurement, construction materials, municipal approvals, and registration duties is notoriously fragmented, opaque, and driven by commercial interests.</p>

<p>Fingtaj was founded by Ashutosh Jha to solve a simple, persistent problem: finding a straight, mathematically verifiable answer to everyday housing questions. Whether calculating how many standard modular bricks are required for a 9-inch load-bearing wall, converting regional bigha measurements into standard square feet, sizing an underground water sump per National Building Code norms, or budgeting the true stamp duty and registration expenses for an apartment purchase, homeowners are typically confronted with conflicting advice, unstated assumptions, and broker sales talk.</p>

<p>Our mission is to provide transparent, formula-backed, and independently verifiable tools. Every calculator on Fingtaj runs client-side in your web browser, states its underlying geometric or engineering formulas explicitly, and never stores or transmits the numbers you enter. Our editorial guides translate complex Indian Standards (BIS), the National Building Code (NBC 2016), CPWD specifications, and state revenue rules into plain, actionable language.</p>

<h2>What You Will Find on Fingtaj</h2>
<ul>
  <li><strong>${L('/calculators', '30 Free Construction and Property Calculators')}:</strong> Interactive planning tools covering land area conversion, brick and mortar estimation, cement and sand plaster quantities, concrete mix proportions (M15, M20, M25), TMT steel weight, house construction budgeting, home loan reducing-balance EMI, stamp duty, rooftop solar sizing, and rainwater harvesting capacity.</li>
  <li><strong>${L('/guides', '72 Practical Field Guides')}:</strong> Deep, practical guides organised across the six core stages of home ownership in India: land units and boundary surveys, building material quality tests, structural construction stages, legal documentation and title verification, energy and water infrastructure, and interior maintenance.</li>
  <li><strong>Transparent Formulas and Assumptions:</strong> We do not hide our mathematics behind a black box. Our ${L('/how-we-calculate', 'How We Calculate')} page documents every dry-volume factor, bulk density value, and geometric equation used across our code.</li>
</ul>

<h2>Named Authorship and Governance</h2>
<p>Fingtaj is founded and led by ${cfg.founder}. Content addressing property documentation, title verification workflows, home loan financing arithmetic, and circle rates is researched and drafted by the founder. For technical construction, structural engineering, and building bye-law topics, our editorial guidelines mandate adherence to published Bureau of Indian Standards codes and CPWD schedules.</p>

<p>We believe in total transparency regarding credentials: we do not falsely present ourselves as licensed civil engineers, structural consultants, or legal advocates. Where structural safety, soil bearing capacity, seismic design, or formal legal title is involved, our guides explicitly advise readers to engage licensed professionals registered with the relevant municipal corporations or state bar councils.</p>

<h2>How We Make Money (Advertising Independence)</h2>
<p><strong>Fingtaj is 100% free for all users.</strong> We believe access to fundamental construction maths and legal documentation checklists should never sit behind a paywall or lead-generation trap. Our sole method of monetisation is automated digital display advertising delivered through Google AdSense.</p>

<ul>
  <li><strong>Zero Paid Endorsements:</strong> We do not accept sponsored posts, paid product placements, or promotional mentions from cement manufacturers, steel brands, real estate builders, contractors, or lending institutions.</li>
  <li><strong>Zero Affiliate Steering:</strong> We do not earn commissions by recommending particular lenders, brokers, or suppliers. Advertisers on our site have zero editorial influence or advance access to our articles.</li>
  <li><strong>Editorial Firewalls:</strong> Advertisements are clearly separated from informational content. An advertisement appearing alongside an article is never an editorial endorsement of that product or brand.</li>
</ul>

<h2>Our Editorial Commitments</h2>
<ol>
  <li><strong>Primary Standards First:</strong> All technical proportions and formulas cite authoritative Indian sources, including IS 456 for concrete, IS 1786 for reinforcing steel, IS 1077 for clay bricks, and the National Building Code of India 2016. See our full directory of ${L('/sources', 'Standards and Sources')}.</li>
  <li><strong>Respect for Regional Variation:</strong> India does not have a single uniform bigha, circle rate schedule, or electricity slab structure. Our calculators and guides explicitly require local inputs rather than substituting generic national estimates.</li>
  <li><strong>Open and Transparent Corrections:</strong> We treat factual accuracy with absolute seriousness. If a state notification, standard revision, or formula discrepancy is identified, we verify and publish updates promptly on our dedicated ${L('/corrections', 'Corrections Log')}.</li>
</ol>

<p>For questions, partnership inquiries, or error reports, visit our ${L('/contact', 'Contact page')} or write directly to ${mail}.</p>`,
  },
  {
    path: '/editorial-policy',
    kicker: 'Trust',
    title: 'Editorial Policy and Research Methodology',
    type: 'WebPage',
    desc: 'How Fingtaj researches, fact-checks, updates and corrects its construction and property guides, including our independence and advertising policy.',
    published: '2026-11-03',
    modified: '2026-11-22',
    html: `<p class="lead">Decisions made during land acquisition and home building involve substantial financial capital and carry direct implications for structural durability and personal safety. This Editorial Policy defines the research standards, citation protocols, review processes, and commercial boundaries that govern everything published on Fingtaj.</p>

<h2>1. Research Standards and Primary Sourcing</h2>
<p>Every factual statement, material constant, formula, and legal explanation published on Fingtaj must be grounded in verified primary documentation. Our primary sources include:</p>
<ul>
  <li><strong>Bureau of Indian Standards (BIS):</strong> National engineering codes including IS 456:2000 (Plain and Reinforced Concrete), IS 1786:2008 (High Strength Deformed Steel Bars), IS 269:2015 (Ordinary Portland Cement), IS 1489:2015 (Portland Pozzolana Cement), IS 383:2016 (Aggregates), and IS 1200 (Civil Measurement).</li>
  <li><strong>National Building Code of India 2016 (NBC 2016):</strong> Architectural dimensions, room ventilation norms, fire exit guidelines, water demand standards, and staircase safety rules.</li>
  <li><strong>Central and State Public Works Departments (CPWD/PWD):</strong> Specifications, plinth area rate schedules, and construction quality testing methodologies.</li>
  <li><strong>Statutory Acts and State Regulations:</strong> The Real Estate (Regulation and Development) Act 2016 (RERA), The Registration Act 1908, The Indian Stamp Act 1899, and gazette notifications published by state revenue departments.</li>
  <li><strong>Regulators and National Portals:</strong> Reserve Bank of India (RBI) housing loan master directions, Ministry of New and Renewable Energy (MNRE) guidelines for rooftop solar (PM Surya Ghar), and State Electricity Regulatory Commissions (SERCs).</li>
</ul>
<p>We do not use secondary blog summaries, content farms, or promotional brochures as the basis for technical claims.</p>

<h2>2. Authorship and Review Protocol</h2>
<p>Content on Fingtaj is authored by founder Ashutosh Jha and reviewed against statutory codes and standard engineering manuals. Articles dealing with real estate legal processes, stamp duty calculation, home loan economics, and land conversions are written directly by the founder based on published government gazettes.</p>

<p>For structural engineering, soil mechanics, and structural design articles, our policy requires referencing established BIS codes verbatim. We explicitly disclose that Fingtaj writers are not practicing licensed structural engineers or architects. Consequently, every technical guide contains an explicit directive that on-site soil testing and structural design must be executed and signed by a licensed professional engineer registered with the local municipal authority.</p>

<h2>3. Addressing Regional Variations and Date-Stamping</h2>
<p>Unlike financial metrics that are national, Indian property rules, building bye-laws, circle rates, and customary land measures (such as the bigha, katha, biswa, and ground) differ substantially between states and even across districts within the same state. Our editorial approach mandates:</p>
<ul>
  <li>Explicitly identifying regional variations rather than pretending a single rule applies nationwide.</li>
  <li>Providing state-by-state reference tables with explicit "as on" dates and direct references to official state registration or revenue portals.</li>
  <li>Designing our calculators so that users input their local values (such as local bigha square footage, circle rates, or electricity slab charges) rather than relying on hardcoded assumptions.</li>
  <li>Every guide and calculator displays verifiable published and modified dates so readers know the exact temporal context of the content.</li>
</ul>

<h2>4. Commercial Independence and Advertising Disclosure</h2>
<p><strong>How We Make Money:</strong> Fingtaj is entirely self-funded and sustained exclusively through automated programmatic display advertising via Google AdSense. We operate under strict commercial firewalls:</p>
<ul>
  <li><strong>No Sponsored Content:</strong> We do not publish "sponsored articles", paid guest contributions, or advertorials. No entity can pay to alter our conclusions, formulas, or material comparisons.</li>
  <li><strong>No Product Placements:</strong> We do not accept payment or free material from cement companies, steel manufacturers, paint brands, or building material distributors to recommend their products.</li>
  <li><strong>No Builder or Broker Affiliation:</strong> We maintain zero financial relationships with real estate developers, property marketing agencies, property brokers, or mortgage originators. We do not operate lead-generation funnels.</li>
  <li><strong>Advertiser Separation:</strong> Advertisers have zero editorial involvement. Advertisements served programmatically by Google AdSense are clearly delineated from our editorial copy.</li>
</ul>

<h2>5. Fact-Checking, Corrections and Transparency</h2>
<p>Despite thorough cross-checking, statutory fees, circle rates, and tariffs change over time. When an error, outdated rate, or broken link is reported, our editorial team investigates against primary government notifications. Confirmed corrections are implemented within 48 business hours and recorded on our publicly accessible ${L('/corrections', 'Corrections Log')} with details of what was corrected, the date of modification, and the supporting official citation.</p>

<h2>6. Software and AI Tools Transparency</h2>
<p>We may utilize automated linting, formula test harnesses, and software tools to assist in formatting and proofreading. However, all technical assertions, engineering constants, mathematical models, and legal citations are verified by humans against primary statutory sources before publication. We do not publish automated, unverified content.</p>`,
  },
  {
    path: '/how-we-calculate',
    kicker: 'Trust',
    title: 'How We Calculate – Formulas, Constants and Test Suite',
    type: 'WebPage',
    desc: 'The constants, formulas, conversion factors and testing behind every Fingtaj construction, land, property and energy calculator.',
    published: '2026-11-03',
    modified: '2026-11-22',
    html: `<p class="lead">Every calculator on Fingtaj runs client-side in your web browser using pure vanilla JavaScript. No inputs or calculations are ever transmitted to an external server or stored in a remote database. This page documents the mathematical models, standard constants, bulk densities, dry-volume multipliers, and automated test harnesses used across our tools.</p>

<h2>1. Unit Conversion Constants</h2>
<p>All linear and volumetric conversions follow standard international SI definitions and standard Indian land surveying practices:</p>
<ul>
  <li><strong>Length:</strong> 1 international foot = 0.3048 m; 1 inch = 25.4 mm; 1 metre = 3.28084 feet.</li>
  <li><strong>Area:</strong> 1 square foot = 0.09290304 m²; 1 square metre = 10.7639104 sq ft; 1 square yard (gaj) = 9 sq ft = 0.836127 m².</li>
  <li><strong>Standard Land Units:</strong> 1 acre = 43,560 sq ft = 4,840 sq yd = 40 guntha (standard 1,089 sq ft) = 100 cents (435.6 sq ft). 1 hectare = 10,000 m² = 107,639.1 sq ft = 2.47105 acres. 1 kanal (Punjab/Haryana/J&amp;K) = 20 marla = 5,445 sq ft. 1 ground (Tamil Nadu) = 2,400 sq ft.</li>
  <li><strong>Variable Customary Units:</strong> Bigha, biswa, and katha vary widely by state and revenue circle. Our calculators do not impose an arbitrary national default; users are prompted to enter their local revenue figure.</li>
</ul>

<h2>2. Building Material Constants and Dry-Volume Multipliers</h2>
<p>When mixing concrete, mortar, or plaster, the dry ingredients occupy significantly greater volume before water is added and voids are compacted. Our calculators apply standard engineering coefficients:</p>
<ul>
  <li><strong>Cement Bag Volume:</strong> One standard 50 kg cement bag is computed as 0.03472 m³ (based on standard bulk density of 1,440 kg/m³). In cubic feet, 1 bag ≈ 1.226 cu ft.</li>
  <li><strong>Dry Volume Factor for Concrete:</strong> Concrete loses volume during mixing due to voids between aggregate particles being filled by sand and cement paste. A dry volume multiplier of <strong>1.54</strong> (representing a 54% volume reduction) is applied per standard CPWD / IS 456 estimating conventions.</li>
  <li><strong>Dry Volume Factor for Mortar:</strong> Brickwork mortar uses a dry volume factor of <strong>1.33</strong> (33% shrinkage).</li>
  <li><strong>Dry Volume Factor for Plaster:</strong> Wall plastering uses a factor of <strong>1.27</strong> to <strong>1.30</strong> plus an additional 15% allowance for wall unevenness, masonry joints, and rebound loss.</li>
  <li><strong>TMT Steel Bar Weight Formula:</strong> Per IS 1786, steel weight per linear metre is calculated using the standard formula <code>Weight (kg/m) = d² ÷ 162.28</code> (commonly rounded to <code>d² / 162</code>), derived from steel density of 7,850 kg/m³.</li>
  <li><strong>Nominal Concrete Mix Proportions:</strong> M10 (1:3:6), M15 (1:2:4), M20 (1:1.5:3). For M20 nominal mix, 1 cubic metre of compacted wet concrete requires approximately 8.07 bags of cement, 0.42 m³ sand, and 0.85 m³ coarse aggregate. For structural RCC work exceeding M20, design mixes per IS 10262 must be formulated by a qualified materials laboratory.</li>
  <li><strong>Brickwork Quantities:</strong> Standard modular brick (190 mm × 90 mm × 90 mm) with 10 mm mortar joints (nominal 200 mm × 100 mm × 100 mm) yields exactly 500 bricks per cubic metre of masonry. Traditional bricks (9 in × 4.25 in × 2.75 in) require approximately 470 to 500 bricks per m³ depending on joint thickness and frog volume. A standard 5% to 7% wastage allowance is recommended.</li>
</ul>

<h2>3. Geometric Algorithms and Plot Measurement</h2>
<ul>
  <li><strong>Irregular Quadrilaterals:</strong> A four-sided plot with sides A, B, C, D and measured diagonal E is calculated by dividing the quadrilateral into two distinct triangles (A-B-E and C-D-E) and evaluating each via <strong>Heron’s Formula</strong>: <code>Area = √[s(s−a)(s−b)(s−c)]</code>, where semi-perimeter <code>s = (a + b + c) / 2</code>. If any triangle violates the triangle inequality theorem (the sum of any two sides must exceed the third), the calculator flags an impossible geometry error.</li>
  <li><strong>Staircase Geometry:</strong> Evaluated using the French architectural comfort equation (Blondel's formula): <code>2R + T ≈ 550 mm to 700 mm</code> (optimal range 600–640 mm), adhering to NBC 2016 maximum riser height (190 mm residential) and minimum tread depth (250 mm residential).</li>
</ul>

<h2>4. Financial and Power Formulas</h2>
<ul>
  <li><strong>Home Loan Reducing-Balance EMI:</strong> Computed using the standard mathematical formula: <code>EMI = [P × r × (1 + r)ⁿ] ÷ [(1 + r)ⁿ − 1]</code>, where <code>P</code> is principal loan amount, <code>r</code> is monthly interest rate (annual rate / 12 / 100), and <code>n</code> is loan tenure in months. This matches the exact PMT formula used by RBI-regulated banks.</li>
  <li><strong>Rooftop Solar Yield:</strong> Daily generation is modelled at 4.0 kWh per installed kWp under standard Indian solar insolation conditions (1,500 kWh/kWp annually), adjustable for local shading and seasonal tilt.</li>
  <li><strong>Water Sump Sizing:</strong> Sized per NBC 2016 domestic consumption benchmarks of 135 litres per capita per day (lpcd) for residences with full flushing systems.</li>
</ul>

<h2>5. Automated Test Suite and Verification</h2>
<p>Every single calculator on Fingtaj is covered by an automated test harness executed during each continuous integration build (<code>npm run test</code>). The suite validates boundary conditions, decimal accuracy, and compares calculator results against independently computed reference benchmarks. If any mathematical discrepancy is detected, the build terminates with a non-zero error.</p>

<p>For questions regarding our mathematical models or to submit edge cases for inclusion in our test harness, please contact our editorial desk at ${mail}.</p>`,
  },
  {
    path: '/sources',
    kicker: 'Trust',
    title: 'Standards, Legal Gazettes and Official Sources',
    type: 'WebPage',
    desc: 'The Indian standards, laws and official sources Fingtaj uses for its construction, property and energy guides and calculators.',
    published: '2026-11-03',
    modified: '2026-11-22',
    html: `<p class="lead">At Fingtaj, we do not base our guides or calculation models on hearsay, marketing claims, or unverified secondary blog posts. Every formula, dimensional rule, test procedure, and legal explanation references primary Indian Standards, statutory enactments, and government departmental gazettes. Below is our complete primary reference directory.</p>

<h2>1. Bureau of Indian Standards (BIS) Codes</h2>
<p>The Bureau of Indian Standards is the statutory national standards body of India. Our structural and material guides reference the following published codes of practice:</p>
<ul>
  <li><strong>IS 456:2000 (Reaffirmed 2021):</strong> <em>Plain and Reinforced Concrete – Code of Practice.</em> Specifies structural concrete design criteria, minimum cement contents, maximum water-cement ratios, nominal mix proportions (M10, M15, M20), standard curing periods (minimum 7 days for OPC, 10 days for mineral admixtures), and minimum cover requirements for reinforcement.</li>
  <li><strong>IS 1786:2008 (Reaffirmed 2018):</strong> <em>High Strength Deformed Steel Bars and Wires for Concrete Reinforcement.</em> Governs cold-worked and thermo-mechanically treated (TMT) steel grades (Fe 415, Fe 500, Fe 500D, Fe 550, Fe 550D, Fe 600), chemical composition limits (carbon, sulphur, phosphorus), elongation, and nominal mass per linear metre (<code>d² / 162</code>).</li>
  <li><strong>IS 269:2015:</strong> <em>Ordinary Portland Cement – Specification.</em> Regulates physical and chemical requirements for 33, 43, and 53 grade OPC, compressive strength milestones (3-day, 7-day, 28-day), and setting times.</li>
  <li><strong>IS 1489:2015 (Parts 1 &amp; 2):</strong> <em>Portland Pozzolana Cement – Specification.</em> Governs fly-ash based and calcined clay based PPC, heat of hydration, and sulfate resistance properties.</li>
  <li><strong>IS 455:2015:</strong> <em>Portland Slag Cement – Specification.</em> Criteria for ground granulated blast-furnace slag blended cements used in marine, coastal, and water-retaining structures.</li>
  <li><strong>IS 383:2016:</strong> <em>Coarse and Fine Aggregate for Concrete – Specification.</em> Regulates grading zones (Zone I to Zone IV for sand), manufactured sand (M-sand) characteristics, flakiness and elongation indices, and silt content limits.</li>
  <li><strong>IS 1077:1992:</strong> <em>Common Burnt Clay Building Bricks – Specification.</em> Classification of traditional red bricks into compressive strength classes (3.5 N/mm² to 35 N/mm²), water absorption limits (maximum 20% by weight), and efflorescence tests.</li>
  <li><strong>IS 2185 (Part 3):1984:</strong> <em>Concrete Masonry Units – Autoclaved Cellular (Aerated) Concrete Blocks.</em> Standards for AAC blocks, block density classes, thermal conductivity, and compressive strength.</li>
  <li><strong>IS 1200 (Series):</strong> <em>Method of Measurement of Building and Civil Engineering Works.</em> Standard national rules for measuring earthwork (Part 1), concrete work (Part 2), brickwork (Part 3), stone masonry (Part 4), and plastering (Part 12).</li>
  <li><strong>IS 1893 (Part 1):2016:</strong> <em>Criteria for Earthquake Resistant Design of Structures.</em> Seismic zoning maps of India (Zones II through V) and foundational design considerations.</li>
</ul>

<h2>2. National Building Code of India 2016 (NBC 2016)</h2>
<p>Published by BIS, the National Building Code provides model building regulations adopted by municipal corporations across Indian states:</p>
<ul>
  <li><strong>Part 3 – Development Control Rules and General Building Requirements:</strong> Setbacks, ground coverage limits, Floor Area Ratio (FAR) / Floor Space Index (FSI) definitions, natural ventilation, habitable room dimensions (minimum 9.5 m² area, 2.75 m clear height), and staircase safety norms.</li>
  <li><strong>Part 4 – Fire and Life Safety:</strong> Residential fire exit widths, travel distances, and fire-resistant construction materials.</li>
  <li><strong>Part 6 – Structural Design:</strong> Structural safety, foundation depth, and soil bearing capacity considerations.</li>
  <li><strong>Part 9 – Plumbing Services:</strong> Domestic water supply benchmarks (135 lpcd for standard piped dwellings), drainage slope, and rainwater harvesting installation guidelines.</li>
</ul>

<h2>3. Central Public Works Department (CPWD) Documents</h2>
<ul>
  <li><strong>CPWD Specifications (2019, Volumes 1 &amp; 2):</strong> Comprehensive technical execution standards for civil construction, masonry joints, curing methods, and quality control tolerances.</li>
  <li><strong>CPWD Delhi Schedule of Rates (DSR 2023):</strong> Standard analysis of labor constants, material dry volumes, and equipment outputs.</li>
  <li><strong>CPWD Plinth Area Rates (PAR 2023):</strong> Benchmark plinth area construction cost indices across major Indian urban centres.</li>
</ul>

<h2>4. Real Estate Regulatory Authority (RERA) Official Portals</h2>
<p>Under the Real Estate (Regulation and Development) Act, 2016, all commercial real estate projects exceeding 500 m² or 8 apartments must be registered with the relevant state authority. Official state portals referenced on Fingtaj include:</p>
<ul>
  <li><strong>MahaRERA (Maharashtra):</strong> <a href="https://maharera.maharashtra.gov.in" target="_blank" rel="noopener">maharera.maharashtra.gov.in</a></li>
  <li><strong>Karnataka RERA:</strong> <a href="https://rera.karnataka.gov.in" target="_blank" rel="noopener">rera.karnataka.gov.in</a></li>
  <li><strong>UP RERA (Uttar Pradesh):</strong> <a href="https://www.up-rera.in" target="_blank" rel="noopener">www.up-rera.in</a></li>
  <li><strong>TNRERA (Tamil Nadu &amp; Andaman):</strong> <a href="https://www.rera.tn.gov.in" target="_blank" rel="noopener">www.rera.tn.gov.in</a></li>
  <li><strong>Delhi RERA:</strong> <a href="https://rera.delhi.gov.in" target="_blank" rel="noopener">rera.delhi.gov.in</a></li>
  <li><strong>Telangana RERA:</strong> <a href="https://rera.telangana.gov.in" target="_blank" rel="noopener">rera.telangana.gov.in</a></li>
</ul>

<h2>5. State Registration and Revenue Departments</h2>
<p>Stamp duty schedules, circle rates (guidance values), and registration fees are statutory state levies verified through official inspectorate portals:</p>
<ul>
  <li><strong>Inspector General of Registration, Maharashtra:</strong> <a href="https://igrmaharashtra.gov.in" target="_blank" rel="noopener">igrmaharashtra.gov.in</a></li>
  <li><strong>Kaveri Online Services, Karnataka:</strong> <a href="https://kavyashodana.karnataka.gov.in" target="_blank" rel="noopener">kavyashodana.karnataka.gov.in</a></li>
  <li><strong>IGRS Uttar Pradesh:</strong> <a href="https://igrsup.gov.in" target="_blank" rel="noopener">igrsup.gov.in</a></li>
  <li><strong>TNREGINET, Tamil Nadu:</strong> <a href="https://tnreginet.gov.in" target="_blank" rel="noopener">tnreginet.gov.in</a></li>
  <li><strong>Delhi Online Registration Information System (DORIS):</strong> <a href="https://esearch.delhigovt.nic.in" target="_blank" rel="noopener">esearch.delhigovt.nic.in</a></li>
</ul>

<h2>6. Energy and Central Banking Authorities</h2>
<ul>
  <li><strong>Ministry of New and Renewable Energy (MNRE):</strong> PM Surya Ghar Muft Bijli Yojana subsidy guidelines and technical standards for grid-tied rooftop solar systems (<a href="https://pmsuryaghar.gov.in" target="_blank" rel="noopener">pmsuryaghar.gov.in</a>).</li>
  <li><strong>Bureau of Energy Efficiency (BEE):</strong> Standards and Labelling program for room air conditioners, water heaters, and distribution transformers.</li>
  <li><strong>Reserve Bank of India (RBI):</strong> Master Direction on Housing Finance and External Benchmark Lending Rate (EBLR) regulations (<a href="https://www.rbi.org.in" target="_blank" rel="noopener">www.rbi.org.in</a>).</li>
</ul>

<p>If you identify a recently gazetted amendment or revised standard that has not yet been reflected in our guides, please notify our editorial desk at ${mail}.</p>`,
  },
  {
    path: '/contact',
    kicker: 'Say hello',
    title: 'Contact Fingtaj – Editorial, Corrections and Inquiries',
    type: 'ContactPage',
    desc: 'Contact Fingtaj for corrections, calculator issues, topic requests or business enquiries. We reply within 2–3 business days.',
    published: '2026-11-03',
    modified: '2026-11-22',
    html: `<p class="lead">We welcome correspondence from individual home builders, property buyers, civil engineers, architects, and researchers. Whether you have identified an outdated circle rate notification, discovered an edge-case calculation bug, or wish to suggest a new calculator tool, we review every message received.</p>

<div class="panel" style="margin:24px 0;padding:20px;border-left:4px solid var(--accent)">
  <h3 style="margin-top:0">Primary Contact Channel</h3>
  <p style="margin:0 0 8px 0"><strong>Email:</strong> ${mail}</p>
  <p style="margin:0;font-size:0.95rem;color:var(--ink-light)">Please include a clear, specific subject line (e.g., "[Correction] Stamp Duty Schedule Karnataka" or "[Calculator Bug] Irregular Plot Diagonal").</p>
</div>

<h2>How to Submit a Technical Correction</h2>
<p>Fingtaj takes mathematical and statutory accuracy seriously. If you believe a figure, standard reference, or calculation result on any page is inaccurate, please provide the following details in your email to facilitate prompt verification:</p>
<ul>
  <li><strong>Page Address:</strong> The exact URL on fingtaj.online where the disputed information appears.</li>
  <li><strong>Specific Discrepancy:</strong> The exact text, number, or formula you believe is in error.</li>
  <li><strong>Authoritative Citation:</strong> A citation to an official primary document (such as a Bureau of Indian Standards code number, state gazette notification, municipal circular, or RERA order) that demonstrates the correct figure.</li>
  <li><strong>Your Calculation / Workings:</strong> For calculator bugs, please include the exact inputs entered, the output generated by our tool, and your expected output calculated by hand or spreadsheet.</li>
</ul>
<p>Confirmed corrections are logged and published on our public ${L('/corrections', 'Corrections Log')} within 48 to 72 business hours.</p>

<h2>Response Time and Operating Hours</h2>
<p>Our editorial team monitors incoming correspondence from Monday through Friday. We operate under the following service commitments:</p>
<ul>
  <li><strong>Factual and Calculation Corrections:</strong> Acknowledged within 24 hours; technical investigation and resolution completed within 48 to 72 hours.</li>
  <li><strong>General Reader Inquiries and Suggestions:</strong> Responded to within 2 to 3 business days.</li>
  <li><strong>Commercial and Advertising Inquiries:</strong> Reviewed weekly. Note that we do not reply to requests for paid guest posts, sponsored articles, or text-link purchases.</li>
</ul>

<h2>Form Fallback and Email Guidance</h2>
<p>To preserve reader privacy and avoid collecting personal contact data on our servers, Fingtaj intentionally does not use an embedded contact form. If your default desktop email client does not open automatically when clicking our email link, please manually copy our address (<code>contact@fingtaj.online</code>) into your webmail provider (Gmail, Outlook, Yahoo, or Apple Mail). If sending attachments (such as official gazettes, land survey sketches, or municipal bye-law PDFs), please restrict file formats to PDF, PNG, or JPEG under 10 MB.</p>

<h2>Editorial Scope and What We Cannot Provide</h2>
<p>To avoid misunderstandings, please review the boundaries of our correspondence:</p>
<ul>
  <li><strong>No Personalized Professional Advice:</strong> We cannot provide structural engineering assessments, foundation recommendations, custom architectural drawings, or legal title clearance opinions for your specific property. By law and safety principles, site-specific engineering design requires an on-site physical inspection and soil report by a locally licensed professional.</li>
  <li><strong>No Sponsored Posts or Paid Links:</strong> We do not sell links, accept pre-written marketing articles, or publish affiliate endorsements. Messages proposing commercial link placements will be marked as spam and permanently discarded.</li>
  <li><strong>No Brokerage or Valuation Services:</strong> We do not buy, sell, broker, or provide certified valuation reports for real estate parcels.</li>
</ul>

<h2>Postal and Registered Communications</h2>
<p>Fingtaj is a digital-first independent educational publication founded and operated in India.</p>
<p><strong>Registered Administrative Handle:</strong> Fingtaj Editorial Operations, c/o Ashutosh Jha (Founder). For formal legal notices or correspondence requiring registered postal delivery, please email our administrative desk at ${mail} to request our complete registered postal mailing coordinates.<!-- [OWNER: add registered postal address here] --></p>`,
  },
  {
    path: '/privacy-policy',
    kicker: 'Legal',
    title: 'Privacy Policy – Data Protection and Cookie Governance',
    type: 'WebPage',
    desc: 'How Fingtaj handles your data: calculators run in your browser, we use Google Analytics and Google AdSense, and you control cookie consent.',
    published: '2026-11-03',
    modified: '2026-11-22',
    html: `<p class="lead">This Privacy Policy governs the manner in which Fingtaj (“we”, “us”, or “our”), accessible at <strong>fingtaj.online</strong>, collects, utilizes, maintains, and discloses information collected from users of this website. We are committed to preserving your digital privacy and maintaining full compliance with applicable data protection laws, including the Digital Personal Data Protection Act, 2023 (India), the General Data Protection Regulation (EU GDPR), and the UK GDPR.</p>

<h2>1. Zero Server-Side Storage of Calculator Inputs</h2>
<p>Fingtaj is built with a privacy-by-design architecture. All 30 calculators—including plot measurement calculations, building material quantities, home loan reducing-balance EMI calculations, and rooftop solar sizing—execute exclusively in your local web browser via client-side JavaScript. <strong>We do not transmit, log, record, or store the numbers, financial figures, property dimensions, or rates you enter into our calculators on any remote server.</strong></p>
<p>If you choose to use the "Copy link to these numbers" feature, the input values are encoded directly into the URL fragment hash on your local clipboard. No server receives or stores this information unless you explicitly share that link with a third party.</p>

<h2>2. Information We Collect</h2>
<ul>
  <li><strong>Correspondence Data:</strong> If you contact us via email, we receive your email address and any content provided in your message. We use this information solely to review, investigate, and respond to your inquiry or reported correction. We never sell, rent, or trade email addresses.</li>
  <li><strong>Technical Log Data:</strong> Like virtually all websites hosted on modern Content Delivery Networks (CDNs), our hosting provider (Cloudflare) automatically receives standard technical request data when your browser requests a web page. This includes your Internet Protocol (IP) address, browser user-agent, operating system, referring URL, and the timestamp of the request. This data is processed strictly for routing web traffic, mitigating Distributed Denial of Service (DDoS) attacks, and ensuring server security.</li>
</ul>

<h2>3. Third-Party Vendors and Cookies</h2>
<p>Fingtaj utilizes industry-standard third-party services to support site operation, analyze aggregated traffic trends, and display digital advertisements:</p>

<h3>A. Google AdSense (Display Advertising)</h3>
<p>We use Google AdSense to serve programmatic digital display advertising across our website. Google and its third-party certified vendor partners use cookies (such as the DoubleClick cookie) and device identifiers to serve ads based on a user’s prior visits to this website or other websites across the Internet.</p>
<ul>
  <li>Google's use of advertising cookies enables it and its partners to serve ads to users based on their visit to fingtaj.online and/or other sites on the Internet.</li>
  <li>Users may opt out of personalized advertising by visiting the <a href="https://adssettings.google.com" target="_blank" rel="noopener">Google Ad Settings portal</a>.</li>
  <li>To learn more about how Google collects and processes data across partner websites, please consult Google’s official documentation: <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">How Google uses information from sites or apps that use our services</a>.</li>
</ul>

<h3>B. Google Analytics 4 (Aggregated Analytics)</h3>
<p>We use Google Analytics 4 (GA4) to understand how visitors engage with our guides and calculators (e.g., measuring average reading time, identifying broken navigation paths, and tracking popular tools). GA4 collects pseudonymous session identifiers via first-party cookies (<code>_ga</code>, <code>_ga_*</code>). GA4 does not log or store full IP addresses. You can prevent Google Analytics from recognizing your browser across subsequent visits by disabling cookies in your browser or by installing the official <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">Google Analytics Opt-out Browser Add-on</a>.</p>

<h3>C. Cloudflare (Security and Content Delivery)</h3>
<p>Cloudflare provides our edge caching, SSL/TLS certificate termination, and bot protection. Cloudflare may set operational security cookies (such as <code>__cf_bm</code>) to detect malicious bot activity and protect the website against automated abuse.</p>

<h2>4. Cookie Consent Governance</h2>
<p>Fingtaj implements a granular consent framework. When you first visit our website, a consent notice enables you to accept or decline non-essential analytics and advertising cookies. In compliance with European Economic Area (EEA), United Kingdom, and Swiss data protection directives, non-essential cookies (including Google Analytics and AdSense ad personalization cookies) remain disabled by default until you grant consent.</p>
<p>Your preference is stored locally in your browser’s <code>localStorage</code> under the key <code>fg-consent</code>. You can revoke or reset your consent at any time by clearing your browser cookies and site storage for fingtaj.online. Detailed explanations of each cookie are provided in our ${L('/cookie-policy', 'Cookie Policy')}.</p>

<h2>5. Data Retention and Security</h2>
<p>We do not maintain user registration accounts, member databases, or marketing mailing lists. Editorial and correction correspondence received via email is retained only for the duration required to complete the investigation and update the relevant content, after which it is archived or deleted. We enforce HTTPS encryption (TLS 1.3) across all traffic on fingtaj.online to protect data in transit.</p>

<h2>6. Your Statutory Rights</h2>
<p>Under India's Digital Personal Data Protection Act, 2023, the EU GDPR, and equivalent privacy statutes, you possess rights concerning personal data held about you (which on our site is limited strictly to emails you have sent to us):</p>
<ul>
  <li>The right to request confirmation and access to personal correspondence data we hold.</li>
  <li>The right to request correction of inaccurate personal data.</li>
  <li>The right to request erasure of your email correspondence from our mail spool.</li>
</ul>
<p>To exercise any of these rights, contact our privacy desk at ${mail}.</p>

<h2>7. Children’s Online Privacy</h2>
<p>Fingtaj is directed at adults making home construction, real estate purchase, and property financing decisions. We do not knowingly collect personal information from individuals under the age of 18.</p>

<h2>8. Policy Updates</h2>
<p>We may update this Privacy Policy periodically to reflect legal amendments or updates to our third-party integrations. Any revisions will be reflected by the "Last modified" date displayed at the top of this document.</p>`,
  },
  {
    path: '/terms',
    kicker: 'Legal',
    title: 'Terms of Use and Content Licensing',
    type: 'WebPage',
    desc: 'The terms that govern your use of Fingtaj, including content licence, accuracy, no-advice and limitation of liability.',
    published: '2026-11-03',
    modified: '2026-11-22',
    html: `<p class="lead">Please read these Terms of Use (“Terms”) carefully before accessing or using fingtaj.online (“the Website”, “Fingtaj”). By browsing, reading, or utilizing any calculator or guide on the Website, you agree to be legally bound by these Terms. If you do not agree with any part of these Terms, your sole recourse is to discontinue use of the Website immediately.</p>

<h2>1. Educational Purpose and No Professional Relationship</h2>
<p>Fingtaj is an independent educational digital publication founded to promote mathematical and statutory literacy regarding Indian land measurement, building materials, construction estimations, and real estate documentation. <strong>The content, calculators, formulas, diagrams, and checklists provided on this Website are for informational and preliminary planning purposes only.</strong></p>
<p>Nothing contained on Fingtaj constitutes, or is intended to constitute:</p>
<ul>
  <li>Structural, civil, geotechnical, or architectural engineering advice or design;</li>
  <li>Formal legal advice, conveyancing, or property title certification;</li>
  <li>Certified real estate valuation or appraisal;</li>
  <li>Tax, accounting, financial planning, or mortgage origination advice.</li>
</ul>
<p>Use of the Website does not create any engineer-client, architect-client, attorney-client, or advisory relationship between you and Fingtaj or its founder Ashutosh Jha. Every construction project is unique and requires site-specific structural design and on-site supervision by licensed professionals registered with the appropriate statutory bodies.</p>

<h2>2. Intellectual Property Rights and Permitted Use</h2>
<p>All materials published on Fingtaj—including but not limited to written articles, calculation algorithms, JavaScript source code, SVG diagrams, layout designs, logos, and custom tabular datasets—are the exclusive intellectual property of Fingtaj and its founder, protected under the Copyright Act, 1957 (India) and international copyright treaties.</p>

<h3>Permitted Non-Commercial Quotation</h3>
<p>You may quote up to one hundred (100) words of text from any article on Fingtaj for non-commercial educational or commentary purposes, provided that you include clear, prominent attribution naming "Fingtaj" and include an active, followable hyperlink to the specific source URL on fingtaj.online.</p>

<h3>Strict Prohibitions</h3>
<ul>
  <li><strong>No Automated Scraping:</strong> You may not use automated scrapers, web spiders, data extraction scripts, or automated tools to copy, harvest, or aggregate articles, calculator code, or datasets from this Website without prior written authorization.</li>
  <li><strong>No Commercial Redistribution:</strong> You may not mirror, republish, sell, license, or incorporate our calculator scripts, formulas, or articles into any commercial software application, mobile app, or paid real estate service.</li>
  <li><strong>No Framing:</strong> You may not embed or display any page or calculator of fingtaj.online within an iframe or windowed environment on another website without express written consent.</li>
</ul>

<h2>3. Accuracy of Information and Inherent Estimation Limits</h2>
<p>While Fingtaj undertakes meticulous research to reflect current Bureau of Indian Standards (BIS) specifications, the National Building Code (NBC 2016), and state gazetted circle rates, construction costs and statutory regulations vary significantly across India and change frequently. We make no representations, warranties, or guarantees—express or implied—regarding the completeness, accuracy, reliability, or timeliness of any calculation output or article.</p>
<p>Calculator outputs are theoretical estimates based on standard nominal mixes, average dry volumes, and user-supplied parameters. Real-world material requirements and labor expenses are influenced by soil stratigraphy, contractor workmanship, structural detailing, material shrinkage, site wastage, and local supply chain fluctuations.</p>

<h2>4. Acceptable Use and Security</h2>
<p>When using Fingtaj, you agree that you will not:</p>
<ul>
  <li>Attempt to probe, scan, or breach the vulnerability of any system, server, or network connected to the Website;</li>
  <li>Introduce viruses, trojans, worms, logic bombs, or other technologically malicious materials;</li>
  <li>Conduct denial-of-service attacks or perform actions that impose an unreasonable or disproportionately large load on our hosting infrastructure;</li>
  <li>Misrepresent your identity or affiliation when corresponding with our editorial desk.</li>
</ul>

<h2>5. Third-Party Links and Advertising Content</h2>
<p>The Website contains hyperlinks directing users to external portals operated by state governments, municipal authorities, BIS, RERA, and regulatory agencies. These links are provided solely for reader convenience and reference. Fingtaj has no operational control over external websites and accepts no responsibility for their content, accuracy, or data handling practices.</p>
<p>The Website displays programmatic advertisements served by Google AdSense. We do not endorse, sponsor, or guarantee the products, builders, or services advertised in display units. Any transactions or interactions between you and third-party advertisers are solely between you and the respective third party.</p>

<h2>6. Limitation of Liability and Indemnification</h2>
<p>To the fullest extent permitted by applicable Indian law, Fingtaj, its founder Ashutosh Jha, contributors, and agents shall not be liable for any direct, indirect, incidental, consequential, special, punitive, or exemplary damages arising out of or in connection with your access to, use of, or inability to use the Website, its guides, or its calculators.</p>
<p>This includes, without limitation, damages for structural defects, foundation failures, contractual disputes with builders or laborers, material purchasing shortfalls or overages, property title defects, municipal demolition orders, tax penalties, or financial losses incurred in reliance on calculator outputs or articles. You agree to indemnify, defend, and hold harmless Fingtaj and its founder from any claims, liabilities, losses, or legal costs arising from your violation of these Terms or your misuse of the Website.</p>

<h2>7. Governing Law and Exclusive Jurisdiction</h2>
<p>These Terms and any dispute or claim arising out of or in connection with them or their subject matter shall be governed by and construed in accordance with the substantive laws of the Republic of India. The courts of competent jurisdiction located in India shall have exclusive jurisdiction to settle any dispute or legal claim arising under these Terms.</p>

<h2>8. Amendments</h2>
<p>We reserve the right to revise or amend these Terms of Use at our sole discretion. Any changes become effective immediately upon posting to this page with an updated modification date.</p>

<p>For inquiries regarding these Terms or licensing requests, please email ${mail}.</p>`,
  },
  {
    path: '/disclaimer',
    kicker: 'Legal',
    title: 'Disclaimer – Professional Advice and Accuracy Limits',
    type: 'WebPage',
    desc: 'Fingtaj content is educational only and is not engineering, legal, tax or financial advice. Read our disclaimer on accuracy, estimates and liability.',
    published: '2026-11-03',
    modified: '2026-11-22',
    html: `<p class="lead">This Disclaimer applies to all web pages, digital calculators, conversion tools, articles, visual diagrams, and data tables published on Fingtaj (fingtaj.online). Please read this document thoroughly before utilizing any number, estimate, or recommendation presented on this Website.</p>

<h2>1. Educational and Informational Resource Only</h2>
<p>Everything published on Fingtaj is prepared strictly as an educational resource to assist property buyers and home builders in understanding basic mathematical principles, standard Indian building codes, and legal procedures. <strong>Nothing on this Website constitutes, or should be construed as, professional structural engineering, geotechnical analysis, architectural planning, legal conveyancing, or tax advisory services.</strong></p>
<p>No fiduciary, consulting, advisory, or contractual relationship is created between you and Fingtaj or its founder Ashutosh Jha through your use of this Website or through correspondence with our editorial email.</p>

<h2>2. Engineering and Building Safety Warning</h2>
<p>Civil construction is inherently site-specific and governed by complex physical variables that cannot be captured by a generalized web calculator or online article:</p>
<ul>
  <li><strong>Soil Bearing Capacity (SBC):</strong> Foundation depth, footing type (isolated, strip, raft, or pile), and concrete reinforcement depend fundamentally on subsurface soil mechanics, groundwater table depth, and seismic zone classification (IS 1893:2016). You must commission a registered geotechnical laboratory to perform standard penetration testing (SPT) and soil boreholes before finalizing foundation dimensions.</li>
  <li><strong>Structural Engineering Sanction:</strong> The Bureau of Indian Standards (IS 456:2000) and the National Building Code of India 2016 mandate that reinforced concrete design, column sizing, beam detailing, and slab thicknesses must be designed and certified by a qualified structural engineer holding a valid license issued by the relevant municipal corporation or urban development authority.</li>
  <li><strong>Do Not Build Solely on Calculator Estimates:</strong> Never commence earthwork, pour foundations, or procure structural steel bars based solely on calculator results or online thumb rules. Doing so creates serious risks of catastrophic structural cracking, foundation settlement, structural collapse, or municipal condemnation.</li>
</ul>

<h2>3. Mathematical Estimates vs. Actual Material Consumption</h2>
<p>Calculators on Fingtaj provide preliminary budgeting approximations based on theoretical geometric equations, CPWD dry-volume coefficients, and standard nominal mix proportions. Real-world construction and material consumption deviate from theoretical values due to:</p>
<ul>
  <li>On-site material wastage during handling, cutting, and transportation (typically 3%–7% for steel rebar, 5%–10% for bricks and tiles, and 2%–5% for cement and sand);</li>
  <li>Slump loss, shuttering unevenness, and over-excavation of footings and trenches;</li>
  <li>Variations in sand moisture content (bulking of fine aggregate) and aggregate grading;</li>
  <li>Contractor workmanship, batching inaccuracies, and curing conditions.</li>
</ul>
<p>Final bills of quantities (BOQ) must always be prepared from vetted architectural and structural working drawings by a certified quantity surveyor.</p>

<h2>4. Dynamic State Regulations, Taxes and Bye-Laws</h2>
<p>Real estate governance in India is primarily under the legislative purview of individual states and local urban local bodies (ULBs):</p>
<ul>
  <li><strong>Stamp Duty and Registration:</strong> Stamp duty percentages, municipal surcharges, registration caps, and gender-based concessions change via state gazette notifications. Circle rates (guidance values / ready reckoner rates) are revised periodically by district valuation committees.</li>
  <li><strong>Building Bye-Laws and FAR:</strong> Setbacks, ground coverage limitations, maximum permissible heights, and Floor Space Index (FSI / FAR) rules vary by municipal jurisdiction, plot width, and abutting road width.</li>
  <li><strong>Electricity and Solar Tariffs:</strong> Discom tariff slabs, fixed charges, fuel adjustment surcharges, and rooftop solar net metering regulations are set by State Electricity Regulatory Commissions (SERCs) and revised through annual tariff orders.</li>
</ul>
<p>While Fingtaj strives to keep state-wise comparison tables up to date, you must verify all current statutory rates and municipal requirements with the respective local sub-registrar office, municipal planning department, or discom before executing financial transactions.</p>

<h2>5. Financial and Home Loan Disclaimer</h2>
<p>Loan EMI calculations, interest amortizations, and affordability estimates are mathematical projections based on the reducing-balance method. Actual loan sanction amounts, processing fees, credit verification charges, loan-to-value (LTV) limits, and interest rates are determined exclusively by individual lending institutions based on applicant credit scores (CIBIL/Experian), property valuation reports, and statutory RBI lending guidelines. Income tax deductions under Sections 24(b), 80C, and 80EEA of the Income Tax Act, 1961 are subject to statutory conditions and individual taxpayer eligibility.</p>

<h2>6. Complete Limitation of Liability</h2>
<p>Under no circumstances shall Fingtaj, its founder, contributors, or technical operators be held liable for any personal injury, property damage, structural defect, financial loss, contractor dispute, municipal penalty, or legal cost arising from reliance on any information, table, formula, or calculator output hosted on this Website. All content is provided strictly “as is” and “as available”. Your use of Fingtaj is entirely at your own risk.</p>

<p>For related policies, please read our ${L('/editorial-policy', 'Editorial Policy')}, ${L('/terms', 'Terms of Use')}, and ${L('/privacy-policy', 'Privacy Policy')}.</p>`,
  },
  {
    path: '/cookie-policy',
    kicker: 'Legal',
    title: 'Cookie Policy – Tracking and Consent',
    type: 'WebPage',
    desc: 'Which cookies Fingtaj uses (Google Analytics, Google AdSense, consent preference) and how you can control them.',
    published: '2026-11-03',
    modified: '2026-11-22',
    html: `<p class="lead">This Cookie Policy explains how Fingtaj (fingtaj.online) uses cookies, local browser storage, and related tracking technologies. It describes what these technologies are, why we use them, the specific cookies deployed on our site, and your rights to control their placement on your device.</p>

<h2>1. What Are Cookies and Local Storage?</h2>
<p>Cookies are small alphanumeric text files placed on your computer, tablet, or smartphone by websites you visit. They are widely utilized to make websites function efficiently, remember user preferences, and provide analytical data to website operators. Local Storage (HTML5 <code>localStorage</code>) is a similar web browser technology that allows websites to store key-value data directly on your device without transmitting it back to the server on every HTTP request.</p>

<h2>2. How Fingtaj Uses Cookies and Local Storage</h2>
<p>Fingtaj maintains a minimal cookie footprint. We do not operate user registration databases, login accounts, or shopping carts. Tracking technologies on our site are restricted to three functional categories:</p>
<ul>
  <li><strong>Essential / Operational Storage:</strong> Required to preserve your cookie preferences and secure website traffic against malicious bots.</li>
  <li><strong>Aggregated Analytical Cookies:</strong> Used via Google Analytics 4 to understand aggregate reader behavior, popular guides, and navigation paths without tracking personal identities.</li>
  <li><strong>Advertising Cookies:</strong> Deployed via Google AdSense to serve programmatic digital display advertising, prevent ad fraud, and measure ad performance.</li>
</ul>

<h2>3. Comprehensive Inventory of Cookies and Storage Tokens</h2>
<div class="table-wrap">
  <table>
    <thead>
      <tr>
        <th>Cookie / Token Name</th>
        <th>Provider / Domain</th>
        <th>Category</th>
        <th>Purpose &amp; Data Collected</th>
        <th>Typical Lifespan</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>fg-consent</code></td>
        <td>Fingtaj (Local Storage)</td>
        <td>Strictly Necessary</td>
        <td>Stores your cookie consent choice (<code>granted</code> or <code>denied</code>) so you are not repeatedly prompted on subsequent page visits.</td>
        <td>Persistent until cleared by user</td>
      </tr>
      <tr>
        <td><code>_ga</code></td>
        <td>Google Analytics (<code>fingtaj.online</code>)</td>
        <td>Analytics / Performance</td>
        <td>Distinguishes unique users across browsing sessions by assigning a pseudonymous, randomly generated client identifier.</td>
        <td>2 years from creation/update</td>
      </tr>
      <tr>
        <td><code>_ga_*</code> (e.g. <code>_ga_GRXC5MH7PC</code>)</td>
        <td>Google Analytics (<code>fingtaj.online</code>)</td>
        <td>Analytics / Performance</td>
        <td>Maintains and tracks session state for the specific GA4 measurement stream.</td>
        <td>2 years</td>
      </tr>
      <tr>
        <td><code>IDE</code> / <code>DSID</code></td>
        <td>Google DoubleClick (<code>doubleclick.net</code>)</td>
        <td>Advertising / Targeting</td>
        <td>Used by Google AdSense to serve targeted advertisements based on user activity across the web and measure ad impressions.</td>
        <td>Up to 13 months</td>
      </tr>
      <tr>
        <td><code>__cf_bm</code> / <code>cf_clearance</code></td>
        <td>Cloudflare (<code>fingtaj.online</code>)</td>
        <td>Security / Operational</td>
        <td>Cloudflare bot management token; distinguishes human users from automated scrapers and malicious bots to protect site availability.</td>
        <td>30 minutes to 1 year</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>4. Your Consent and How to Control Cookies</h2>
<p>Fingtaj respects your right to decide which cookies you receive. We offer multiple layers of user control:</p>

<h3>A. On-Site Consent Notice</h3>
<p>When you visit Fingtaj from jurisdictions with statutory consent mandates (such as the European Economic Area, the UK, or Switzerland), analytics and advertising cookies remain strictly blocked until you click <strong>Accept</strong> on our cookie banner. If you choose <strong>Decline</strong>, only strictly necessary operational cookies are permitted, Google Analytics operates in consent-denied mode, and only non-personalized advertising is requested.</p>

<h3>B. Browser-Level Controls</h3>
<p>You can configure or modify your web browser settings to accept, reject, or delete cookies at any time. If you choose to reject cookies entirely, you can still use all 30 calculators and read all 72 guides on Fingtaj without limitation, because our tools execute purely via local JavaScript. Follow the official instructions for your browser:</p>
<ul>
  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener">Google Chrome cookie management</a></li>
  <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener">Mozilla Firefox cookie settings</a></li>
  <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener">Apple Safari cookie preferences</a></li>
  <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener">Microsoft Edge cookie controls</a></li>
</ul>

<h3>C. Third-Party Opt-Out Tools</h3>
<ul>
  <li><strong>Google Analytics Opt-Out:</strong> Download and install the official <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">Google Analytics Opt-out Browser Add-on</a>.</li>
  <li><strong>Google Ad Personalization:</strong> Manage personalized advertising preferences directly on the <a href="https://adssettings.google.com" target="_blank" rel="noopener">Google Ad Settings portal</a>.</li>
  <li><strong>Industry Opt-Out Portals:</strong> You can opt out of behavioral advertising from participating network advertisers via the <a href="https://optout.aboutads.info" target="_blank" rel="noopener">Digital Advertising Alliance (US)</a> or the <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener">European Interactive Digital Advertising Alliance (EDAA)</a>.</li>
</ul>

<h2>5. Legal Compliance</h2>
<p>This policy complies with the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023 (India), the EU ePrivacy Directive (Directive 2002/58/EC as amended), the General Data Protection Regulation (Regulation (EU) 2016/679), and the UK Data Protection Act 2018.</p>

<p>For questions regarding our use of cookies, contact our privacy desk at ${mail}.</p>`,
  },
  {
    path: '/faq',
    kicker: 'Help',
    title: 'Frequently Asked Questions – Help & FAQ',
    type: 'FAQPage',
    desc: 'Answers about Fingtaj: who runs it, how accurate the calculators are, whether it gives professional advice, how it earns money and how to report errors.',
    published: '2026-11-03',
    modified: '2026-11-22',
    faqs: [
      ['What is Fingtaj and what is its editorial mission?', 'Fingtaj is an independent educational digital publication providing 30 free construction and real estate calculators alongside 72 practical field guides. Our mission is to make the complex arithmetic behind Indian land measurement, structural material quantities, municipal building approvals, stamp duty schedules, and home maintenance transparent, verifiable, and free from commercial bias.'],
      ['Who owns and operates Fingtaj?', 'Fingtaj was founded and is operated by Ashutosh Jha. Articles on property documentation, home loan financing, circle rates, and stamp duty are researched and written directly by the founder. Construction engineering and material guides are based on published Bureau of Indian Standards (BIS) codes and National Building Code specifications.'],
      ['How accurate are the calculators and what formulas do they use?', 'Our calculators use standard engineering and financial formulas—such as IS 456 nominal concrete mix proportions, IS 1786 steel bar mass formulas (d²/162), Heron’s geometric formula for irregular plots, and the standard reducing-balance EMI equation used by Indian banks. Results are tested against independent calculation benchmarks via an automated test suite on every build. They are intended for budgeting and preliminary planning; certified quantities require architectural working drawings.'],
      ['Why do some calculators ask me to enter my own rates or unit sizes?', 'India does not have a single national land measurement or tax structure. A bigha or katha varies by state and district, circle rates and stamp duty percentages differ by state revenue department, and electricity tariffs follow state regulatory commission slabs. Rather than misleading readers with an arbitrary national average, our calculators let you input your verified local values.'],
      ['Does Fingtaj give engineering, architectural, or legal advice?', 'No. Content on Fingtaj is strictly educational. We do not provide site-specific structural designs, soil bearing capacity certifications, or legal title clearance opinions. Building safety and legal compliance require on-site inspection and formal certification by locally licensed structural engineers, registered architects, and legal advocates.'],
      ['How does Fingtaj make money and are any articles sponsored?', 'Fingtaj is funded entirely through automated digital display advertising via Google AdSense. We do not publish sponsored posts, accept paid product placements from cement or steel brands, or collect referral commissions from property builders, brokers, or lenders. Advertisers have zero editorial influence.'],
      ['Are my calculator inputs or plot dimensions stored on your servers?', 'No. All calculations run client-side in your web browser using vanilla JavaScript. The numbers, measurements, and loan figures you input never leave your device and are never sent to or stored in any remote server or database.'],
      ['Which Indian Standards and building codes do you reference?', 'We cite primary national standards including IS 456:2000 (Concrete), IS 1786:2008 (TMT Steel), IS 269 (OPC), IS 1489 (PPC), IS 383 (Aggregates), IS 1077 (Clay Bricks), IS 1200 (Measurement of Works), and the National Building Code of India 2016 (NBC 2016). See our Standards and Sources page for complete citations.'],
      ['How do I report a factual error, calculation bug, or outdated rate?', 'Email our editorial desk at contact@fingtaj.online with the page URL, details of the discrepancy, and an authoritative source citation (such as an official gazette or BIS code). Confirmed corrections are verified and published on our public Corrections Log within 48 to 72 business hours.'],
      ['Can builders, material brands, or contractors pay to be listed on Fingtaj?', 'No. We maintain a strict policy against commercial placements. We do not sell featured spots, publish sponsored reviews, or accept fees to promote contractors or building material brands.'],
      ['How frequently are the calculators and guides reviewed and updated?', 'Content is reviewed whenever relevant statutory codes, circle rate schedules, solar subsidies (such as PM Surya Ghar), or discom tariffs are revised. Every page displays verifiable published and modified dates reflecting its editorial timeline.'],
      ['What should I do if my land records and sale deed show different plot areas?', 'Do not pay the purchase balance until the discrepancy is resolved. Hire an independent licensed land surveyor to conduct a physical total station survey, check the survey map and revenue khasra/khatauni, and if necessary, file an application with the local tehsildar or revenue office for boundary correction before registration.'],
    ],
    get html() {
      return `<p class="lead">Here are detailed answers to the most common questions regarding our calculation methodology, editorial independence, Indian Standards compliance, and privacy practices. If your question is not addressed below, please write to us via our ${L('/contact', 'Contact page')}.</p>
<div class="faq">${this.faqs.map(([q, a]) => `<details open><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div>`;
    },
  },
  {
    path: '/corrections',
    kicker: 'Transparency',
    title: 'Corrections Policy and Public Modification Log',
    type: 'WebPage',
    desc: 'Our public record of editorial and calculation corrections. Fingtaj promptly investigates and transparently logs all factual revisions.',
    published: '2026-11-03',
    modified: '2026-11-22',
    html: `<p class="lead">At Fingtaj, editorial integrity and mathematical precision are fundamental. When a calculation bug, inaccurate regulatory fee, outdated circle rate notification, or typographical error is identified, we correct it promptly and record the revision transparently on this public log.</p>

<h2>1. Our Editorial Corrections Policy</h2>
<p>We adhere to strict verification and disclosure principles whenever content modifications occur:</p>
<ul>
  <li><strong>Substantive Corrections:</strong> A substantive correction involves any modification to a mathematical formula, calculation output, material constant, statutory stamp duty percentage, circle rate citation, or legal requirement. All substantive corrections are dated, logged on this page, and noted within the affected article or calculator.</li>
  <li><strong>Minor Typos and Clarifications:</strong> Routine spelling corrections, grammatical enhancements, and internal link updates that do not alter the factual meaning of a sentence are executed without an individual log entry, but update the page's modified timestamp.</li>
  <li><strong>No Silent Retractions:</strong> We do not secretly delete, overwrite, or hide factual mistakes. If an earlier article cited an obsolete gazette or an unverified thumb rule, we explicitly document the updated standard and explain the revision.</li>
</ul>

<h2>2. How to Report an Error</h2>
<p>We actively invite readers, civil engineers, surveyors, and legal professionals to scrutinize our tools and guides. To submit an error report, email our editorial desk at ${mail} with the following information:</p>
<ol>
  <li>The exact URL of the guide or calculator containing the suspected error;</li>
  <li>The specific figure, sentence, or formula output in question;</li>
  <li>A reference or link to the official primary source (such as a BIS code clause, state gazette notification, or municipal bye-law) demonstrating the correct figure;</li>
  <li>Your contact information so our research team can follow up if technical clarification is needed.</li>
</ol>
<p>Our team investigates all technical reports within 24 to 48 hours. Confirmed corrections are implemented immediately upon verification.</p>

<h2>3. Chronological Corrections Log</h2>
<div class="table-wrap">
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Page / Calculator</th>
        <th>Category</th>
        <th>Description of Revision and Authoritative Source</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2026-11-22</td>
        <td><code>/stamp-duty-and-registration-explained</code></td>
        <td>Regulatory Update</td>
        <td>Updated state stamp duty comparison table to reflect latest gazetted schedules across Maharashtra (IGR Maharashtra), Karnataka (Kaveri 2.0), Uttar Pradesh, Tamil Nadu, and Delhi as on November 2026.</td>
      </tr>
      <tr>
        <td>2026-11-22</td>
        <td><code>/rooftop-solar-for-home-complete-guide</code></td>
        <td>Subsidy Update</td>
        <td>Refreshed central financial assistance benchmarks to align with Ministry of New and Renewable Energy (MNRE) PM Surya Ghar Muft Bijli Yojana national portal guidelines (up to ₹78,000 for 3 kW residential systems).</td>
      </tr>
      <tr>
        <td>2026-11-22</td>
        <td><code>/concrete-grades-m15-m20-m25-explained</code></td>
        <td>Technical Clarification</td>
        <td>Clarified that nominal mix proportions for M20 (1:1.5:3) per IS 456:2000 are recommended only for minor structural works and that RCC frame structures above M20 require laboratory design mixes per IS 10262.</td>
      </tr>
      <tr>
        <td>2026-11-22</td>
        <td><code>/water-tank-and-sump-planning-for-a-house</code></td>
        <td>Code Citation</td>
        <td>Added explicit citation to National Building Code of India 2016 (Part 9, Section 1) for the residential 135 lpcd domestic supply standard.</td>
      </tr>
      <tr>
        <td>2026-11-03</td>
        <td>All Pages</td>
        <td>Initial Release</td>
        <td>Initial publication of 30 calculators and 72 guides on fingtaj.online.</td>
      </tr>
    </tbody>
  </table>
</div>

<p>For questions regarding historical revisions or to verify a previous calculation version, contact our editorial team at ${mail}.</p>`,
  },
];

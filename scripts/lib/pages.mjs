import cfg from '../../site.config.mjs';
import { esc } from './layout.mjs';

const M = cfg.email;
const mail = `<a href="mailto:${M}">${M}</a>`;
const L = (u, t) => `<a href="${u}">${t}</a>`;

export const STATIC_PAGES = [
  {
    path: '/about', title: 'About Fingtaj', type: 'AboutPage', kicker: 'Our story', desc: 'Why Fingtaj exists: free calculators and plain-English guides so Indian families can check the numbers before they build, buy or renovate a home.',
    html: `<p class="lead">A home is the biggest cheque most families will ever write — and most of the advice around it comes from someone who is selling something.</p>
<p>Fingtaj started from a simple irritation: finding a straight answer to questions like <em>“how many bricks does this wall need?”</em>, <em>“what is a bigha in square feet?”</em> or <em>“what will stamp duty really cost me?”</em> meant wading through brochures, broker talk and forum arguments. We wanted one place where the arithmetic is shown, the assumptions are stated and nobody is paid to steer you.</p>
<h2>What you will find here</h2>
<ul><li><strong>${L('/calculators', '30 free calculators')}</strong> for land and area, building materials, construction cost, property and home loans, and power, solar and water. Every page shows its formula, assumptions, a worked example and FAQs.</li>
<li><strong>${L('/guides', '72 practical guides')}</strong> in six topics that follow the journey of a home: know your land, choose materials, build, buy and register, power and water, interiors and upkeep.</li></ul>
<h2>The people behind it</h2>
<p>Fingtaj was founded by ${cfg.founder} and is written by the ${cfg.team}. We are not a construction company, builder, broker or lender, and we sell no materials or services. Our job is to explain how things work, give you reliable arithmetic and point you to the official source or the right professional. We do not present ourselves as licensed engineers or architects — on anything that affects safety, title or tax, we will tell you to ask one.</p>
<h2>How we work</h2>
<ul><li><strong>Standards before opinions.</strong> Technical content follows Indian Standards, the National Building Code and official portals — see ${L('/sources', 'standards and sources')}.</li>
<li><strong>Your numbers, not guesses.</strong> Stamp duty, tariffs and bigha or katha sizes differ by state and change often, so calculators ask for your local value instead of inventing one.</li>
<li><strong>Tested maths.</strong> Calculators are checked against independently computed values — see ${L('/how-we-calculate', 'how we calculate')}.</li>
<li><strong>Open corrections.</strong> Every page shows when it was last reviewed, and errors are fixed openly. Tell us at ${mail}.</li></ul>
<h2>How Fingtaj is funded</h2>
<p>Reading and using Fingtaj is free. We earn from display advertising served by Google AdSense. We do not take payment to recommend a builder, brand or contractor, and advertisers have no say over what we publish. If that ever changes, paid content will be labelled clearly. Details are in the ${L('/editorial-policy', 'editorial policy')}.</p>
<h2>What we are not</h2>
<p>Nothing here replaces a structural engineer, architect, lawyer, surveyor or tax adviser. Please read the ${L('/disclaimer', 'disclaimer')}, and ${L('/contact', 'write to us')} with corrections, ideas or a calculator you wish existed.</p>`,
  },
  {
    path: '/editorial-policy', kicker: 'Trust', title: 'Editorial Policy', type: 'WebPage', desc: 'How Fingtaj researches, fact-checks, updates and corrects its construction and property guides, including our independence and advertising policy.',
    html: `<p>People use our guides to make costly and sometimes safety-critical decisions about land, buildings and money. This policy explains the standards we apply.</p>
<h2>Independence</h2>
<p>We do not accept payment for favourable coverage of any builder, material brand, contractor, bank or product. Advertisers cannot see or approve content before it is published, and an ad on a page is not an endorsement. We currently publish no sponsored or affiliate content; if that changes, it will be clearly labelled.</p>
<h2>Who writes the content</h2>
<p>Content is written by the ${cfg.team}. We do not present the team as licensed engineers or architects. On matters of structure, safety, law or tax, each guide says that a licensed professional must make the final call.</p>
<h2>Research and sourcing</h2>
<ol><li><strong>Standards and law:</strong> Bureau of Indian Standards codes, the National Building Code of India, the RERA Act, stamp and registration laws, and notifications from the relevant government bodies.</li><li><strong>Official portals and product documents:</strong> state land-record and registration portals, electricity regulators, manufacturers’ technical data sheets.</li><li><strong>Reputable secondary sources</strong> for context, never as the sole basis for a technical or legal claim.</li></ol>
<p>Figures that vary by state or change frequently — stamp duty rates, tariffs, subsidies, land unit sizes, material prices — are presented as ranges or as editable inputs, with a pointer to the official source.</p>
<h2>Accuracy and updates</h2>
<p>Every page shows when it was last reviewed. We review pages when a relevant rule, standard or tariff changes and at least twice a year. Where we are unsure of a number, we leave it out rather than guess.</p>
<h2>Corrections</h2>
<p>If you find a mistake, email ${mail} with the page address and the source. We verify and correct confirmed errors promptly, and note material corrections on the page.</p>
<h2>Calculators</h2>
<p>Formulas, constants and assumptions are documented on each calculator page and on ${L('/how-we-calculate', 'How we calculate')}. Results are planning estimates, not a bill of quantities, quotation or design.</p>
<h2>Advertising</h2>
<p>Ads are served automatically by Google AdSense. We do not choose advertisers and we do not write content to attract particular ads.</p>
<h2>Use of AI tools</h2>
<p>We may use software tools to help draft and proofread. All technical claims, numbers and formulas are checked against standards and official sources before publication, and calculator code is tested.</p>`,
  },
  {
    path: '/how-we-calculate', kicker: 'Trust', title: 'How We Calculate', type: 'WebPage', desc: 'The constants, formulas, conversion factors and testing behind every Fingtaj construction, land, property and energy calculator.',
    html: `<p>Every calculator runs in your browser with plain JavaScript. Nothing you enter is sent to our servers. This page lists the conventions so that you can reproduce a result by hand or in a spreadsheet.</p>
<h2>Units and conversions</h2>
<ul><li>1 foot = 0.3048 m; 1 inch = 25.4 mm; 1 sq ft = 0.09290304 m²; 1 m³ = 35.3147 cu ft = 1,000 litres.</li>
<li>1 acre = 43,560 sq ft; 1 hectare = 107,639.1 sq ft; 1 guntha = 1,089 sq ft; 1 cent = 435.6 sq ft; 1 kanal = 5,445 sq ft; 1 marla = 272.25 sq ft; 1 ground = 2,400 sq ft; 1 gaj = 1 sq yd = 9 sq ft.</li>
<li>Bigha, biswa and katha vary by state and district, so they are inputs, not constants.</li></ul>
<h2>Material constants</h2>
<ul><li>A 50 kg cement bag is taken as 0.0347 m³ (bulk density about 1,440 kg/m³).</li>
<li>Dry volume factors: concrete 1.54, cement mortar 1.33, plaster 1.27.</li>
<li>Nominal concrete mixes (cement : sand : aggregate): M7.5 1:4:8, M10 1:3:6, M15 1:2:4, M20 1:1.5:3, M25 1:1:2 — nominal mixes above M20 are not recommended for structural work by IS 456; use a design mix.</li>
<li>Steel weight per metre = d² ÷ 162 (d in mm). Sand ≈ 1.6 t/m³, aggregate ≈ 1.5 t/m³.</li>
<li>Brick sizes: modular 190×90×90 mm (200×100×100 nominal with joint), traditional 9×4.5×3 in with 10 mm joints, AAC 600×200×200 mm with a thin joint.</li></ul>
<h2>Geometry and design checks</h2>
<ul><li>Triangle area by Heron’s formula; irregular plots by splitting into triangles.</li>
<li>Staircase: risers = round(height ÷ target riser); comfort check 2R + T ≈ 550–700 mm; riser ≤ 190 mm and tread ≥ 250 mm.</li>
<li>Sloped roof area = plan area ÷ cos(slope). Rainwater yield = roof area × rainfall × runoff coefficient.</li></ul>
<h2>Money and energy</h2>
<ul><li>EMI = P × r × (1+r)ⁿ ÷ [(1+r)ⁿ − 1] on a reducing balance, the same as the spreadsheet PMT function.</li>
<li>Stamp duty and registration use rates that you enter; no state rates are built in because they change often.</li>
<li>Electricity bills use the slab limits and rates that you enter. Energy = watts × hours ÷ 1,000.</li>
<li>Solar yield assumes 4 kWh per kW per day by default, editable.</li></ul>
<h2>Rounding</h2>
<p>Calculations use full precision; results are rounded for display. Quantities of bags, tiles and sheets are rounded up.</p>
<h2>Testing</h2>
<p>An automated test suite runs on every build. It checks that every calculator returns valid numbers and compares key results — land conversions, steel weight, concrete cement content, EMI, tank volume, rainfall yield, staircase and AC sizing — with independently calculated values.</p>
<h2>Limits</h2>
<ul><li>Estimates assume ordinary conditions and constant inputs; real projects have wastage, local practices and design variations.</li><li>Thumb-rule estimates are for budgeting only. Structural design, bill of quantities and electrical design need qualified professionals.</li></ul>
<h2>Report a problem</h2><p>If a result differs from your own calculation, write to ${mail} with your inputs. We investigate and publish fixes.</p>`,
  },
  {
    path: '/sources', kicker: 'Trust', title: 'Standards and Sources', type: 'WebPage', desc: 'The Indian standards, laws and official sources Fingtaj uses for its construction, property and energy guides and calculators.',
    html: `<p>We rely on primary sources wherever possible. This page lists the main standards, laws and official sources behind our content, so you can read them yourself. Always use the latest edition and local amendments.</p>
<h2>Building and materials</h2>
<ul><li>IS 456 — Plain and reinforced concrete: code of practice (concrete grades, mixes, curing, cover).</li>
<li>IS 1786 — High strength deformed steel bars and wires for concrete reinforcement (Fe 415, Fe 500, Fe 550, with “D” ductile grades).</li>
<li>IS 269 (OPC), IS 1489 (PPC), IS 455 (PSC) — Cement specifications.</li>
<li>IS 383 — Coarse and fine aggregates for concrete; IS 2116 — sand for masonry mortars.</li>
<li>IS 1077 — Common burnt clay building bricks; IS 2185 — concrete masonry units including autoclaved aerated concrete blocks.</li>
<li>IS 1200 — Methods of measurement of building and civil engineering works.</li>
<li>National Building Code of India 2016 (BIS) — general building requirements, staircases, water supply and fire safety.</li></ul>
<h2>Land and property</h2>
<ul><li>Real Estate (Regulation and Development) Act, 2016 and state RERA rules and portals.</li>
<li>Registration Act, 1908 and the Indian Stamp Act, 1899, with state stamp and registration schedules and circle-rate notifications.</li>
<li>State land-record portals (for example Bhulekh, Bhoomi, Mahabhulekh, e-Dharani) and revenue department conversion tables.</li>
<li>Goods and Services Tax notifications on residential property.</li>
<li>Income Tax Department guidance on house-property income and capital gains.</li></ul>
<h2>Energy, water and appliances</h2>
<ul><li>State electricity regulatory commission tariff orders and your distribution company’s tariff schedule.</li>
<li>Bureau of Energy Efficiency star-labelling programme for appliances.</li>
<li>Ministry of New and Renewable Energy and state nodal agency guidelines for rooftop solar and net metering.</li>
<li>India Meteorological Department rainfall data; National Building Code water-supply norms.</li></ul>
<h2>How we use them</h2>
<p>We summarise and explain these sources in plain language, give worked examples and flag where a rule differs by state. Standards are copyrighted by BIS; we do not reproduce them. If a standard has been revised since we wrote a page, please tell us at ${mail}.</p>`,
  },
  {
    path: '/contact', kicker: 'Say hello', title: 'Contact Us', type: 'ContactPage', desc: 'Contact Fingtaj for corrections, calculator issues, topic requests or business enquiries. We reply within 2–3 business days.',
    html: `<p>We welcome corrections, questions and suggestions. We read every message and aim to reply within 2–3 business days.</p>
<div class="panel" style="margin:16px 0"><b>Email</b><br>${mail}</div>
<h2>What to write about</h2>
<ul><li><strong>Corrections:</strong> found an error or outdated figure? Send the page address and the official source.</li><li><strong>Calculator issues:</strong> if a result looks wrong, send the inputs you used.</li><li><strong>Topic requests:</strong> tell us what you want explained.</li><li><strong>Business enquiries:</strong> use a clear subject line.</li></ul>
<h2>What we cannot do</h2>
<p>We cannot give personal engineering, legal, tax or financial advice by email — please consult a licensed structural engineer, architect, lawyer or tax professional. We do not accept paid posts, sponsored content or link-insertion requests.</p>`,
  },
  {
    path: '/privacy-policy', kicker: 'Legal', title: 'Privacy Policy', type: 'WebPage', desc: 'How Fingtaj handles your data: calculators run in your browser, we use Google Analytics and Google AdSense, and you control cookie consent.',
    html: `<p>This Privacy Policy explains how Fingtaj (“we”, “us”), operated at fingtaj.online, collects, uses and protects information. By using the site you agree to it. We do not sell, trade or rent personal information.</p>
<h2>1. Calculators run on your device</h2><p>Values you enter into our calculators are processed in your browser and are not sent to or stored on our servers. If you use “Copy link to these numbers”, the values are placed in a link on your clipboard — sharing that link shares those numbers.</p>
<h2>2. Information we collect</h2>
<ul><li><strong>Information you send us:</strong> if you email us, we receive your email address and message and use them only to reply.</li><li><strong>Automatically collected data:</strong> through our hosting provider and analytics we receive standard technical data such as IP address, browser and device type, pages viewed, referring site and time on page.</li></ul>
<h2>3. Cookies and similar technologies</h2><p>We use cookies and local storage for analytics, advertising and to remember your cookie choice. See the ${L('/cookie-policy', 'Cookie Policy')}.</p>
<h2>4. Third-party services</h2>
<ul><li><strong>Google Analytics 4</strong> measures how visitors use the site. IP addresses are not logged or stored by GA4. You can opt out with the <a href="https://tools.google.com/dlpage/gaoptout" rel="noopener">Google Analytics opt-out add-on</a>.</li>
<li><strong>Google AdSense</strong> shows ads. Google and its partners use cookies to serve ads based on your visits to this and other sites. Manage personalised ads in <a href="https://adssettings.google.com" rel="noopener">Google Ad Settings</a> or learn more at <a href="https://policies.google.com/technologies/partner-sites" rel="noopener">How Google uses data when you use our partners’ sites</a>.</li>
<li><strong>Cloudflare</strong> hosts and secures the website and may process request data such as IP addresses to deliver content and prevent abuse.</li></ul>
<h2>5. Consent</h2><p>Where required (for example in the European Economic Area, the UK and Switzerland), analytics and advertising storage stay disabled until you accept in the cookie notice. You can change your choice by clearing this site’s data in your browser.</p>
<h2>6. Your rights</h2><p>Under India’s Digital Personal Data Protection Act, 2023 and similar laws you may request access to, correction of, or deletion of personal data we hold about you (limited to emails you have sent). Write to ${mail}.</p>
<h2>7. External links</h2><p>We link to government portals and other sites. We do not control their content or privacy practices.</p>
<h2>8. Children</h2><p>Fingtaj is not directed at children under 13 and we do not knowingly collect their data.</p>
<h2>9. Security and retention</h2><p>We take reasonable steps to protect information; no method of transmission over the internet is completely secure. Emails are kept only as long as needed to respond.</p>
<h2>10. Changes</h2><p>We may update this policy and will change the “last updated” date when we do.</p>
<h2>Contact</h2><p>${mail}</p>`,
  },
  {
    path: '/terms', kicker: 'Legal', title: 'Terms of Use', type: 'WebPage', desc: 'The terms that govern your use of Fingtaj, including content licence, accuracy, no-advice and limitation of liability.',
    html: `<p>By using fingtaj.online you agree to these Terms. If you do not agree, please do not use the site.</p>
<h2>1. About the site</h2><p>Fingtaj is an independent educational website about land, construction, property and home topics. Nothing on it is engineering, architectural, legal, tax or financial advice.</p>
<h2>2. Intellectual property</h2><p>Articles, calculators, text, tables and design are the property of Fingtaj and protected by law. You may link to our pages and quote up to 100 words of an article for non-commercial purposes with a clear link and attribution. Other reproduction, scraping or commercial use needs written permission.</p>
<h2>3. Accuracy</h2><p>We work to keep information accurate, but codes, tariffs, duties, subsidies and prices change and differ by state. We do not guarantee completeness or timeliness. Verify important information with the relevant authority or a licensed professional.</p>
<h2>4. Calculators</h2><p>Calculator outputs are estimates based on the inputs and assumptions shown. They are not quotations, structural designs or bills of quantities, and actual quantities and costs will differ.</p>
<h2>5. No professional advice</h2><p>Consult a licensed structural engineer, architect, surveyor, lawyer or tax professional before making construction, purchase or legal decisions.</p>
<h2>6. Third-party links and ads</h2><p>The site links to third-party sites and shows advertisements served by Google AdSense. We do not control or endorse them.</p>
<h2>7. Acceptable use</h2><p>Do not use the site unlawfully, interfere with its operation, attempt unauthorised access, or scrape or redistribute content in breach of these Terms.</p>
<h2>8. Limitation of liability</h2><p>To the fullest extent permitted by law, Fingtaj and its owner are not liable for any loss or damage arising from use of, or reliance on, the site or its calculators. The site is provided “as is”.</p>
<h2>9. Governing law</h2><p>These Terms are governed by the laws of India, with exclusive jurisdiction of Indian courts.</p>
<h2>10. Changes</h2><p>We may update these Terms; continued use means you accept them.</p>
<h2>Contact</h2><p>${mail}</p>`,
  },
  {
    path: '/disclaimer', kicker: 'Legal', title: 'Disclaimer', type: 'WebPage', desc: 'Fingtaj content is educational only and is not engineering, legal, tax or financial advice. Read our disclaimer on accuracy, estimates and liability.',
    html: `<p>This disclaimer applies to all content on Fingtaj (fingtaj.online), including guides, calculators and comparisons.</p>
<h2>Educational content only</h2><p>Everything we publish is general information. It is not structural, architectural, legal, tax or financial advice and does not consider your plot, soil, design, location or finances. Building safety depends on proper design and supervision by licensed professionals. Always consult a structural engineer, architect, surveyor, lawyer or tax adviser before you build, buy or invest.</p>
<h2>Estimates, not quotations</h2><p>Calculators and thumb rules produce planning estimates. Actual quantities, costs, bills and savings depend on design, site conditions, wastage, local rates and workmanship. Do not order materials or sign contracts solely on a calculator result.</p>
<h2>Rules vary by state and change</h2><p>Stamp duty, registration charges, land units, building bye-laws, electricity tariffs and subsidies differ across India and are revised often. Verify with the relevant state or local authority.</p>
<h2>Accuracy</h2><p>We aim to be accurate and cite primary sources, but we accept no liability for errors, omissions or outdated information.</p>
<h2>No affiliation or sponsorship</h2><p>Unless explicitly disclosed, we are not affiliated with or paid by any builder, brand, contractor, bank or product mentioned.</p>
<h2>External links</h2><p>We do not endorse or control external websites and are not responsible for them.</p>
<h2>Limitation of liability</h2><p>Fingtaj and its owner are not liable for any loss arising from reliance on the content. Use is at your own risk.</p>
<p>See also: ${L('/editorial-policy', 'Editorial policy')} · ${L('/terms', 'Terms of use')} · ${L('/privacy-policy', 'Privacy policy')}.</p>`,
  },
  {
    path: '/cookie-policy', kicker: 'Legal', title: 'Cookie Policy', type: 'WebPage', desc: 'Which cookies Fingtaj uses (Google Analytics, Google AdSense, consent preference) and how you can control them.',
    html: `<p>This policy explains what cookies are, which ones Fingtaj uses and how to manage them.</p>
<h2>What are cookies?</h2><p>Cookies are small text files stored on your device by websites. They help sites work, remember preferences and measure usage.</p>
<h2>Cookies and storage we use</h2>
<div class="table-wrap"><table><thead><tr><th>Name / provider</th><th>Purpose</th><th>Duration</th></tr></thead><tbody>
<tr><td>fg-consent (localStorage, Fingtaj)</td><td>Remembers your cookie choice</td><td>Until cleared</td></tr>
<tr><td>_ga, _ga_* (Google Analytics)</td><td>Distinguishes visitors and measures usage</td><td>Up to 2 years</td></tr>
<tr><td>Google AdSense / DoubleClick cookies</td><td>Serve and measure ads and, where allowed, personalise them</td><td>Up to 13 months</td></tr>
<tr><td>Cloudflare security cookies (if set)</td><td>Bot protection and performance</td><td>Session to 1 year</td></tr></tbody></table></div>
<h2>Your choices</h2>
<ul><li><strong>Cookie notice:</strong> accept or decline non-essential cookies. In the EEA, UK and Switzerland, analytics and ad storage stay off until you accept.</li><li><strong>Browser settings:</strong> block or delete cookies; some features may not work.</li><li><strong>Google Analytics:</strong> install the <a href="https://tools.google.com/dlpage/gaoptout" rel="noopener">opt-out add-on</a>.</li><li><strong>Personalised ads:</strong> manage them in <a href="https://adssettings.google.com" rel="noopener">Google Ad Settings</a>.</li></ul>
<p>See the ${L('/privacy-policy', 'Privacy Policy')}. Questions: ${mail}.</p>`,
  },
  {
    path: '/faq', kicker: 'Help', title: 'Frequently Asked Questions', type: 'FAQPage', desc: 'Answers about Fingtaj: who runs it, how accurate the calculators are, whether it gives professional advice, how it earns money and how to report errors.',
    faqs: [
      ['What is Fingtaj?', 'Fingtaj is an independent Indian website with 30 free calculators and 72 practical guides on land measurement, building materials, house construction, property buying, solar and water, and home maintenance.'],
      ['Who writes the content?', 'The Fingtaj Editorial Team, under founder Ashutosh Jha. We follow Indian standards and official sources, and we recommend licensed professionals for design, legal and tax decisions.'],
      ['Are the calculators accurate?', 'They use standard formulas and constants documented on How We Calculate and are tested against independent values. They give planning estimates, not quotations or designs.'],
      ['Why do some calculators ask me to enter rates?', 'Stamp duty, electricity tariffs, bigha sizes and similar figures differ by state and change often. We let you enter your local value instead of guessing.'],
      ['Does Fingtaj give engineering or legal advice?', 'No. Content is educational. Consult a licensed structural engineer, architect, lawyer or tax professional for decisions about your project.'],
      ['How does Fingtaj make money?', 'Through display advertising from Google AdSense. We do not take payment for recommending brands or contractors.'],
      ['Are my calculator inputs stored?', 'No. Calculators run in your browser and your inputs are not sent to our servers.'],
      ['How do I report an error?', 'Email us the page address and what is wrong using the Contact page. Confirmed errors are corrected promptly.'],
    ],
    get html() { return `<p>Quick answers about how Fingtaj works. Can’t find yours? ${L('/contact', 'Contact us')}.</p><div class="faq">${this.faqs.map(([q, a]) => `<details open><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div>`; },
  },
];

// Expanded sections for Property Buying & Registration flagship guides.
import { DIAGRAMS } from './diagrams.mjs';

export default {
  'stamp-duty-and-registration-explained': [
    ['Anatomy of Stamp Duty & Registration Expenses', DIAGRAMS.stampDutyComponents],
    ['State-wise stamp duty and registration fee schedules (As on November 2026)',
      { table: [
        ['State / Territory', 'Male Buyer Stamp Duty', 'Female Buyer Stamp Duty', 'Registration Fee', 'Official Source Portal'],
        [
          ['Maharashtra (Mumbai/Pune)', '6% (5% Base + 1% Metro Cess)', '5% (1% Concession on residential)', '1% (Capped at ₹30,000 for residential)', 'IGR Maharashtra (igrmaharashtra.gov.in)'],
          ['Karnataka (Urban Bengaluru)', '5% Base + 10% Surcharge + 2% Urban Cess (~5.6%)', 'Same as male (concessions only <= ₹45L)', '1% of property consideration', 'Kaveri 2.0 (kavyashodana.karnataka.gov.in)'],
          ['Uttar Pradesh (Noida/Lucknow)', '7% of circle rate or market value', '6% (1% Rebate up to ₹10 Lakh valuation)', '1% of property valuation', 'IGRS UP (igrsup.gov.in)'],
          ['Tamil Nadu (Chennai)', '7% Base Stamp Duty', '7% (No gender concession)', '2% (Revised registration fee)', 'TNREGINET (tnreginet.gov.in)'],
          ['Delhi (NCT)', '6% of circle rate valuation', '4% (2% Concession for women; 5% joint)', '1% + ₹100 pasting fee', 'DORIS Delhi (esearch.delhigovt.nic.in)']
        ]
      ] },
      'Stamp duty is a statutory state tax levied under the Indian Stamp Act, 1899 (or state-specific stamp acts) on instruments of conveyance, while the registration fee is governed by the Registration Act, 1908. Failure to pay adequate stamp duty renders the sale deed inadmissible as evidence in court under Section 35 of the Indian Stamp Act.'
    ],
    ['Common mistakes during stamp duty and registration payment',
      [
        'Paying stamp duty on the declared sale agreement value when the official circle rate (guidance value) is higher: The sub-registrar will impound the deed and demand penalty charges.',
        'Ignoring Section 56(2)(x) of the Income Tax Act: When buying below circle rate by more than 10%, the difference between circle rate and purchase price is taxed as income in the hands of the buyer.',
        'Overlooking local municipal surcharges: In Maharashtra, an additional 1% Metro Cess applies in Mumbai, Pune, Thane, and Nagpur; in Karnataka, municipal and transport cesses add roughly 0.6% to the 5% base rate.',
        'Forgetting that female buyer concessions apply only when the property is registered solely in the woman’s name or joint ownership as specified by state rules.',
        'Making offline cash payments for stamp duty: Virtually all states now mandate electronic payment via e-Stamping (Stock Holding Corporation of India / GRAS / Kaveri 2.0).'
      ]
    ],
    ['Step-by-step checklist for property registration day',
      { ol: [
        'Compute the official Guidance Value / Circle Rate from the state registration portal.',
        'Calculate total stamp duty and registration fees using our Stamp Duty Calculator.',
        'Generate and pay the e-Stamp / GRAS challan online through authorized net banking or SHCIL portal.',
        'Draft the final Sale Deed through an experienced conveyancing advocate, ensuring schedule boundaries and PAN details match identity proofs.',
        'Book an appointment slot on the sub-registrar office (SRO) portal.',
        'Carry two identity proofs (Aadhaar and PAN card) of buyer, seller, and two witnesses with original title deeds and tax paid receipts to the SRO.',
        'Verify thumb impressions and web camera photographs during biometric capture and collect the registered deed token.'
      ] }
    ],
    ['Worked numerical example using our Stamp Duty Calculator',
      'Suppose a buyer is acquiring a residential property in Delhi with an agreed consideration of ₹80,00,000. The property has a plot area of 100 sq m in a Category C colony where the residential circle rate is ₹64,000 per sq m. Let us calculate the stamp duty for a male buyer versus a female buyer.',
      'Step 1 (Determine Statutory Base Value): Circle rate valuation = 100 sq m × ₹64,000/sq m = ₹64,00,000. Agreed market consideration = ₹80,00,000. Because ₹80,00,000 is higher than circle rate valuation, duty attaches to ₹80,00,000.',
      'Step 2 (Calculate for Male Buyer): In Delhi, male stamp duty is 6%. Stamp duty = 6% of ₹80,00,000 = ₹4,80,000. Registration fee = 1% of ₹80,00,000 = ₹80,000. Total outgo = ₹4,80,000 + ₹80,000 + ₹100 = ₹5,60,100.',
      'Step 3 (Calculate for Female Buyer): Female buyer stamp duty in Delhi is 4%. Stamp duty = 4% of ₹80,00,000 = ₹3,20,000. Registration fee = 1% = ₹80,00,000 × 1% = ₹80,000. Total outgo = ₹3,20,000 + ₹80,000 + ₹100 = ₹4,00,100.',
      'Conclusion: Registering the property in the name of a female family member saves exactly ₹1,60,000 in immediate cash taxes on this transaction. Our Stamp Duty Calculator enables you to evaluate these gender concessions instantly.',
      '<!-- [OWNER: add real photo of sub-registrar office registration token slip and e-stamp certificate] -->'
    ],
    ['Sources and official standards',
      [
        'Indian Stamp Act, 1899 – Sections 3, 27, 35, and 47A (Valuation and Impounding).',
        'Registration Act, 1908 – Sections 17 (Compulsory Documents) and 49 (Effect of Non-Registration).',
        'Income Tax Act, 1961 – Section 50C and Section 56(2)(x).',
        'Inspector General of Registration State Portals: IGR Maharashtra, Kaveri 2.0 Karnataka, IGRS UP, TNREGINET, DORIS Delhi.',
        'Stock Holding Corporation of India Limited (SHCIL) – E-Stamping Guidelines and Verification Services.'
      ]
    ]
  ],

  'hidden-costs-of-buying-a-flat': [
    ['Hidden Buying Costs Beyond Flat Price', DIAGRAMS.hiddenCosts],
    ['State-wise ancillary flat purchase costs (As on November 2026)',
      { table: [
        ['Cost Component', 'Typical Rate / Charge Range', 'Statutory / Developer Levied', 'Key Legal Reference / Warning'],
        [
          ['Goods and Services Tax (GST)', '5% (Non-affordable); 1% (Affordable <= ₹45L & <= 60/90 sq m)', 'Statutory (Central & State GST)', 'Applies only to under-construction flats. Ready-to-move flats with Occupancy Certificate (OC) are 100% exempt from GST.'],
          ['Covered / Stilt Car Parking', '₹2,50,000 to ₹7,00,000 per bay', 'Developer Allotment Charge', 'Supreme Court (Nahalchand case) ruled builders cannot sell open parking spaces; only stilt/covered garages can be allotted.'],
          ['Advance Maintenance & Sinking Fund', '₹1.50 to ₹3.50 per sq ft/month (1 to 2 yrs advance)', 'Developer / Society Transfer', 'Held in escrow until registered Resident Welfare Association (RWA) takes over building maintenance.'],
          ['Clubhouse & Amenity Membership', '₹1,50,000 to ₹5,00,000 lump sum', 'Developer Agreement Charge', 'Mandatory condition in most large township agreements.'],
          ['Electricity / Water Infrastructure & Meter', '₹50,000 to ₹1,50,000 per apartment', 'Discom & Water Board Charges', 'Developer pro-rata recovery of transformer, substation, and water board feeder main deposits.']
        ]
      ] },
      'Many first-time home buyers budget only for the advertised base rate (e.g. ₹6,000/sq ft) and are blindsided when final demand letters demand an additional 15% to 22% in statutory taxes, parking allotments, and upfront maintenance deposits.'
    ],
    ['Common financial traps when budgeting a flat purchase',
      [
        'Assuming GST applies to all properties: Buying a ready flat with a valid municipal Occupancy Certificate (OC) saves 5% straight away because completed real estate is not a "service".',
        'Paying unvetted "documentation and legal fees" of ₹30,000 to ₹50,000 directly to builder panel advocates without independent representation.',
        'Failing to verify whether the base price includes floor-rise charges (PLC) and preferential facing premiums (e.g. park facing or corner flat).',
        'Overlooking the 1% TDS deduction under Section 194-IA: The buyer must deduct 1% from the total consideration (including parking and amenity fees) and deposit via Form 26QB.',
        'Underestimating annual municipal property taxes and ongoing society maintenance dues in high-amenity complexes.'
      ]
    ],
    ['Checklist to calculate the true all-inclusive purchase cost',
      { ol: [
        'Request the complete cost sheet ("All-Inclusive Cost Breakdown") from the developer, refusing verbal quotes.',
        'Verify if the project has received an Occupancy Certificate (OC) to determine if 5% GST is applicable.',
        'Check RERA registered carpet area and confirm parking allotment is explicitly named in the draft Agreement for Sale.',
        'Use our Total Property Cost Calculator to compute stamp duty, registration fee, GST, and developer add-ons.',
        'Confirm whether your bank home loan sanctions funding against the base cost only or includes parking and statutory taxes (most banks fund only up to 80% of registered agreement value).'
      ] }
    ],
    ['Worked numerical example using our Total Property Cost Calculator',
      'Suppose a buyer selects a 2BHK under-construction apartment in Pune with an advertised base agreement value of ₹70,00,000. Let us calculate the true total cash outlay required to receive keys.',
      'Step 1 (Base Agreement Value): ₹70,00,000.',
      'Step 2 (Statutory Taxes):',
      '• GST at 5% (Under-construction) = ₹3,50,000.',
      '• Maharashtra Stamp Duty at 6% (5% Base + 1% Metro Cess) = ₹4,20,000.',
      '• Registration Fee (Capped) = ₹30,000.',
      '• Total Statutory Taxes = ₹8,00,000.',
      'Step 3 (Developer Ancillary Allotments):',
      '• Covered Stilt Car Parking = ₹3,50,000.',
      '• Clubhouse / Sports Amenity Membership = ₹2,00,000.',
      '• Electricity Meter, Transformer & Water Infrastructure = ₹1,20,000.',
      '• Advance Maintenance (2 Years at ₹3/sq ft on 1,000 sq ft) = ₹72,000.',
      '• Sinking Fund Deposit = ₹50,000.',
      '• Total Developer Add-ons = ₹7,92,000.',
      'Step 4 (Legal & Documentation): Advocate title scrutiny & drafting = ₹25,000.',
      'Step 5 (Grand Total All-Inclusive Outlay): ₹70,00,000 + ₹8,00,000 + ₹7,92,000 + ₹25,000 = ₹86,17,000.',
      'Conclusion: The actual capital required is ₹86,17,000—which is ₹16,17,000 (23.1%) HIGHER than the advertised ₹70 Lakh sticker price. Always budget the full 23% add-on before committing down payments.',
      '<!-- [OWNER: add real photo of developer all-inclusive cost breakdown sheet with stamp] -->'
    ],
    ['Sources and official standards',
      [
        'Central Goods and Services Tax Act, 2017 – Notification No. 03/2019-Central Tax (Rate) on Real Estate.',
        'Supreme Court of India – Nahalchand Laloochand Pvt. Ltd. v. Panchali Co-operative Housing Society Ltd. (Car Parking Allotment).',
        'Real Estate (Regulation and Development) Act, 2016 – Sections 13 and 19 (All-Inclusive Disclosures).',
        'Income Tax Act, 1961 – Section 194-IA (TDS on Property Consideration including Amenities).',
        'State Registration and Stamp Acts (Maharashtra, Karnataka, UP, TN, Delhi).'
      ]
    ]
  ],

  'documents-to-check-before-buying-property': [
    ['Property Due Diligence Verification Hierarchy', DIAGRAMS.documentTree],
    ['State-wise statutory property verification portals (As on November 2026)',
      { table: [
        ['Document Type', 'Primary Official Issuing Authority', 'Online Search & Verification Portal', 'Key Verification Purpose'],
        [
          ['Mother Deed & Title Chain', 'Sub-Registrar Office (SRO)', 'State IGR E-Search Portals (IGR Maharashtra, Kaveri 2.0, IGRS UP)', 'Establishes continuous, unbroken 30-year chain of ownership.'],
          ['Encumbrance Certificate (EC)', 'Sub-Registrar Jurisdiction', 'State IGR Online EC Services (Form 15 vs Form 16)', 'Verifies whether property is free from registered bank mortgages, court attachments, or liens.'],
          ['Revenue Mutation Record', 'Revenue Department / Tehsildar', 'Bhulekh (UP), Bhoomi (KA), Mahabhulekh (MH), Patta/Chitta (TN)', 'Confirms seller is recognized as legal owner in government revenue ledgers.'],
          ['Sanctioned Building Plan', 'Municipal Corporation / BDA / DDA / BMC', 'Municipal Online Building Approval Portal', 'Confirms construction complies with sanctioned setbacks, height limits, and FAR.'],
          ['Occupancy Certificate (OC)', 'Municipal Building Proposal Dept', 'Municipal Corporation Town Planning Division', 'Certifies building was constructed per sanctioned plan and is fit for human habitation.']
        ]
      ] },
      'Under the Transfer of Property Act, 1882 (Principle of Caveat Emptor – Buyer Beware), the burden of title verification rests entirely on the property purchaser. An unverified title defect remains the buyer’s permanent liability.'
    ],
    ['Critical document pitfalls and warning signs',
      [
        'Relying on a 5-year or 10-year Encumbrance Certificate: Indian courts recognize adverse possession claims after 12 years and mortgages can be registered for 20+ years; always demand a minimum 30-year EC search.',
        'Purchasing a flat without an Occupancy Certificate (OC): Living without an OC risks municipal water/power disconnection, commercial penalty property tax rates, and denial of home loan refinancing.',
        'Accepting Power of Attorney (GPA) transfers as title deeds: In 2011, the Supreme Court of India (Suraj Lamp judgment) held that GPA sales do not convey legal title to immovable property.',
        'Overlooking missing family tree / genealogical certificates in inherited land, exposing you to future partition lawsuits from undisclosed legal heirs.',
        'Failing to verify whether the property is subject to pending bank hypothecation via CERSAI (Central Registry of Securitisation Asset Reconstruction and Security Interest of India).'
      ]
    ],
    ['Master 10-point due diligence document checklist',
      { ol: [
        'Mother Deed and Link Documents: Complete chronological chain of title deeds establishing ownership for the past 30 years.',
        'Encumbrance Certificate (EC): Form 15 showing zero active charges or bank mortgages for a minimum 30-year continuous period.',
        'Latest Revenue Mutation Extract: Khata Certificate (A-Khata in Bangalore), 7/12 extract (Maharashtra), or Khasra/Khatauni (UP) in the current seller’s name.',
        'Up-to-Date Property Tax Paid Receipts for the past 3 consecutive assessment years.',
        'Sanctioned Building Plan and Commencement Certificate (CC) issued by the competent municipal planning body.',
        'Occupancy Certificate (OC) or Completion Certificate (CC) issued by the municipal corporation.',
        'RERA Project Registration Certificate and sanctioned RERA layout drawings for newly developed projects.',
        'No Objection Certificates (NOCs) from Fire Safety Department, Airport Authority of India (height clearance), and Pollution Control Board (if applicable).',
        'Cooperative Housing Society / RWA NOC and Share Certificate transfer clearance in resale apartments.',
        'CERSAI Search Report verifying no institutional bank or NBFC has registered an equitable mortgage against the property.'
      ] }
    ],
    ['Worked legal scenario: resolving an encumbrance discrepancy',
      'Suppose a buyer conducts an online search on Kaveri 2.0 for a residential plot in Bengaluru and the 15-year Encumbrance Certificate displays an entry dated 2018 showing a "Memorandum of Deposit of Title Deeds (MODT)" in favour of State Bank of India for ₹45,00,000.',
      'Step 1 (Identify Nature of Charge): The entry indicates that the previous owner pledged the original title deeds to secure a home loan or mortgage.',
      'Step 2 (Request Discharge Documents): The buyer must immediately demand from the seller: (a) Original Loan Closure / No Dues Certificate (NDC) from State Bank of India, and (b) Registered Deed of Reconveyance (Cancellation of MODT) executed at the sub-registrar office.',
      'Step 3 (Re-check EC): After the Deed of Reconveyance is registered, a fresh Form 15 EC must be extracted showing the cancellation entry.',
      'Conclusion: Never pay a token advance or sign an Agreement to Sell while an active MODT remains uncancelled on the Encumbrance Certificate.',
      '<!-- [OWNER: add real photo of certified encumbrance certificate extract with sub-registrar digital signature] -->'
    ],
    ['Sources and official standards',
      [
        'Transfer of Property Act, 1882 – Section 54 (Sale of Immovable Property) and Section 55 (Rights & Liabilities).',
        'Registration Act, 1908 – Sections 17, 28, and 49.',
        'Supreme Court of India – Suraj Lamp & Industries Pvt. Ltd. v. State of Haryana (2011) (Invalidity of GPA Sales).',
        'Central Registry of Securitisation Asset Reconstruction and Security Interest of India (CERSAI) – Online Asset Search (cersai.org.in).',
        'Bar Council of India – Standards of Professional Conveyancing and Title Due Diligence.'
      ]
    ]
  ],

  'home-loan-for-plot-and-construction': [
    ['Construction Loan Disbursement Schedule', DIAGRAMS.loanDisbursement],
    ['State-wise lending parameters for plot and construction loans (As on November 2026)',
      { table: [
        ['Lending Institution', 'Max Loan-to-Value (LTV) for Plot', 'Max LTV for Construction', 'Max Construction Window', 'Primary RBI Guideline'],
        [
          ['State Bank of India (SBI)', '70% – 75% of registered plot value', '80% – 85% of estimated civil cost', '3 to 5 years from plot purchase', 'RBI Master Direction on Housing Finance (rbi.org.in)'],
          ['HDFC Bank', '75% of agreement value', '80% of vetted engineer estimate', '3 years from first disbursement', 'External Benchmark Lending Rate (Repo Linked)'],
          ['ICICI Bank', '70% – 75% of valuation', '80% – 85% of construction cost', '2 to 3 years from sanction', 'LTV limits linked to loan amount tiers'],
          ['Bank of Baroda', '75% of circle rate or cost', '80% of civil construction estimate', '3 years from disbursement', 'EBLR benchmarked home loan framework'],
          ['Punjab National Bank', '70% of plot cost', '80% – 85% of approved estimate', '3 years from plot deed', 'Standard stage-wise disbursement protocol']
        ]
      ] },
      'Under Reserve Bank of India (RBI) housing finance regulations, banks cannot disburse construction loans in a single lump sum. Funds must be released in tranches strictly linked to physical structural milestones verified by the bank’s empanelled civil engineer.'
    ],
    ['Common mistakes during plot and construction home loans',
      [
        'Borrowing a pure "Plot Loan" without realizing that interest rates on vacant plots are 1%–2% higher and offer ZERO tax deductions under Section 24(b) until house construction is completed.',
        'Failing to complete house construction within the bank’s mandated 3-year window: Banks will reclassify the loan from residential home loan to commercial land loan, hiking interest rates by 2% to 4%.',
        'Submitting unrealistic construction cost estimates prepared by unqualified contractors without municipal sanctioned plans.',
        'Paying full regular EMIs prematurely: During construction, borrowers should opt for Pre-EMI (paying interest only on disbursed amounts) to preserve cash flow.',
        'Neglecting to preserve all material and contractor invoices: Banks inspect bills before disbursing the final 15%–20% finishing tranche.'
      ]
    ],
    ['Checklist to secure and manage a composite home loan',
      { ol: [
        'Obtain clear marketable title deeds and 30-year Encumbrance Certificate for the plot.',
        'Secure sanctioned architectural building plans and license permit from the local municipal authority.',
        'Have a licensed structural engineer or registered architect prepare a detailed stage-wise Cost Estimate on their official letterhead.',
        'Apply for a "Composite Plot and Construction Loan" rather than a standalone land loan to secure standard home loan interest rates.',
        'Coordinate timely site inspections with the bank’s empanelled engineer before each structural stage (plinth, slab, plaster) to avoid disbursement delays.',
        'Upon house completion, submit the municipal Occupancy Certificate (OC) to the bank to convert the facility into a standard full EMI loan.'
      ] }
    ],
    ['Worked numerical example using our Home Loan EMI Calculator',
      'Suppose an owner obtains a composite loan of ₹40,00,000 for 20 years at an interest rate of 8.75% per annum linked to the RBI repo rate. Let us examine the monthly EMI and total interest outgo.',
      'Step 1 (Monthly Interest Rate Calculation): Annual rate = 8.75%. Monthly rate r = 8.75 ÷ 12 ÷ 100 = 0.00729167. Tenure in months n = 20 × 12 = 240 months.',
      'Step 2 (Apply Reducing-Balance EMI Formula): EMI = [P × r × (1+r)ⁿ] ÷ [(1+r)ⁿ − 1].',
      'Numerator = 40,00,000 × 0.00729167 × (1.00729167)²⁴⁰ = 29,166.68 × 5.7196 = 166,821.8.',
      'Denominator = (1.00729167)²⁴⁰ − 1 = 4.7196.',
      'Monthly EMI = 166,821.8 ÷ 4.7196 = ₹35,348.43.',
      'Step 3 (Total Repayment Analysis): Total paid over 20 years = 240 × ₹35,348.43 = ₹84,83,623. Total interest paid = ₹84,83,623 − ₹40,00,000 = ₹44,83,623 (the interest paid exceeds the original loan amount!).',
      'Step 4 (Pre-EMI During Construction): If the bank disburses only ₹10,00,000 in Stage 1 for foundation work, your Pre-EMI is simply the monthly interest: ₹10,00,000 × 0.00729167 = ₹7,292 per month, saving cash while construction is underway.',
      'Conclusion: Our Home Loan EMI Calculator allows you to model both Pre-EMI and full amortizations to manage your cash flow accurately.',
      '<!-- [OWNER: add real photo of bank loan sanction letter and engineer stage-wise inspection report] -->'
    ],
    ['Sources and official standards',
      [
        'Reserve Bank of India (RBI) – Master Direction: Non-Banking Financial Company – Housing Finance Company (Reserve Bank) Directions, 2021.',
        'RBI Circular on External Benchmark Based Lending Rates (Repo Linked Loan Framework).',
        'National Housing Bank (NHB) – Guidelines for Loan-to-Value (LTV) Ratios and Risk Weights.',
        'Income Tax Act, 1961 – Section 24(b) (Interest on Housing Loan) and Section 80C (Principal Repayment).',
        'State Bank of India (SBI) / HDFC Bank Housing Loan Operating Manuals.'
      ]
    ]
  ]
};

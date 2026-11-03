import { f2, inr, pct, emi, amortise, F, SEL } from './lib.js';

const CAT = 'property';

export default [
  {
    slug: 'stamp-duty-calculator', category: CAT, title: 'Stamp Duty & Registration Calculator',
    short: 'Estimate stamp duty, registration fee and total cost on a property purchase using your state’s current rates.',
    tags: ['stamp duty', 'registration', 'circle rate', 'property'],
    intro: [
      'Stamp duty and registration charges are levied by state governments and are usually a few percent of the property value. In most states duty is charged on the higher of the agreement value and the government-set circle rate (also called guidance value or ready-reckoner rate), so buying below the circle rate does not reduce the duty.',
      'Rates differ by state, city, buyer category (for example women buyers often get a concession), and they change with state budgets and notifications. Enter the rates published by your state’s registration department, and this calculator does the arithmetic.',
    ],
    formula: 'Duty base = Higher of (agreement value, circle-rate value);  Stamp duty = Base × duty %;  Registration = Base × registration % (or a capped amount)',
    how: ['Choose how duty is calculated in your state: higher of the two values, agreement value only, or circle value only.', 'Add surcharges such as cess or local-body duty as a separate percentage.', 'Some states cap registration fees at a fixed amount; use the cap field if applicable.'],
    assumptions: ['No state rates are built in, because they change often. Check the current rate on your state registration department’s website.', 'Concessions, rebates and exemptions are not applied unless you reflect them in the percentages.'],
    faqs: [
      ['What is circle rate?', 'It is the minimum value per unit area set by the state or local authority for registration purposes. It goes by many names: guidance value, ready reckoner rate, market guideline value and circle rate.'],
      ['Is stamp duty charged on the sale price or circle rate?', 'In most states on the higher of the two. Some states allow the lower value in particular cases; confirm with the sub-registrar office.'],
      ['Can I pay stamp duty online?', 'Many states offer online payment through e-stamping or their registration portal. Use only official government portals.'],
    ],
    inputs: [F('agr', 'Agreement / sale value', 5000000, 10000, 1e10, 10000), F('circle', 'Circle-rate value of the property', 5500000, 0, 1e10, 10000), SEL('basis', 'Duty is charged on', 'higher', [['higher', 'Higher of the two values'], ['agr', 'Agreement value'], ['circle', 'Circle-rate value']]), F('sd', 'Stamp duty', 6, 0, 15, 0.1, 'pct'), F('extra', 'Cess / local-body duty (on duty base)', 1, 0, 5, 0.1, 'pct'), F('reg', 'Registration fee', 1, 0, 5, 0.05, 'pct'), F('regcap', 'Registration fee cap (₹, 0 for none)', 0, 0, 1e7, 1000)],
    compute(v) {
      const base = v.basis === 'agr' ? v.agr : v.basis === 'circle' ? v.circle : Math.max(v.agr, v.circle);
      const duty = base * v.sd / 100, cess = base * v.extra / 100; let reg = base * v.reg / 100; if (v.regcap > 0) reg = Math.min(reg, v.regcap);
      const total = duty + cess + reg;
      return { primary: { label: 'Stamp duty + registration', value: inr(total) }, metrics: [{ label: 'Duty base value', value: inr(base) }, { label: 'Stamp duty', value: inr(duty) }, { label: 'Cess / local duty', value: inr(cess) }, { label: 'Registration fee', value: inr(reg) }, { label: 'Total as % of price', value: pct(total / v.agr * 100, 2) }, { label: 'Price + duties', value: inr(v.agr + total), tone: 'good' }], chart: [{ label: 'Property price', value: v.agr, color: '#2f6b57' }, { label: 'Stamp duty, cess and registration', value: total, color: '#c8922b' }] };
    },
  },
  {
    slug: 'total-property-cost-calculator', category: CAT, title: 'Total Property Purchase Cost Calculator',
    short: 'Add up the real cost of buying a home: price, GST, stamp duty, registration, brokerage, parking and deposits.',
    tags: ['property cost', 'gst', 'buying', 'flat', 'registration'],
    intro: [
      'The price in the builder’s brochure is only part of what you pay. GST on under-construction flats, stamp duty, registration, brokerage, parking, club membership, maintenance deposits and legal fees can add 10 to 15 percent or more.',
      'Enter the base price and the percentages that apply in your state and project. You will see the all-in cost and the actual money you need to arrange.',
    ],
    formula: 'All-in cost = Base price + GST + Stamp duty + Registration + Brokerage + Parking + Other charges',
    how: ['GST on residential property under construction is 5 percent without input tax credit (1 percent for affordable housing as notified); ready-to-move-in property with a completion certificate has no GST.', 'Stamp duty and registration are state levies; enter your state’s percentages.', 'Brokerage is typically 1 to 2 percent when a broker is involved.'],
    assumptions: ['GST rates and conditions are set by the GST Council and can change; confirm the current rate for your property.', 'Home-loan processing fees and interest are not included.'],
    faqs: [
      ['Is GST charged on ready-to-move-in flats?', 'No. GST applies to under-construction property. A flat that already has a completion or occupancy certificate at the time of sale is outside GST.'],
      ['What other costs should I expect?', 'Maintenance deposit, society transfer fees, legal fees, interiors, moving costs and home insurance. Keep 2 to 3 percent aside for these.'],
      ['Can I finance the stamp duty?', 'Banks lend only against the property cost; stamp duty and registration usually have to be paid from your own funds.'],
    ],
    inputs: [F('price', 'Base price of the property', 6000000, 10000, 1e10, 10000), SEL('gst', 'GST', 5, [[0, '0% — ready to move in'], [1, '1% — affordable housing'], [5, '5% — under construction']]), F('sd', 'Stamp duty', 6, 0, 15, 0.1, 'pct'), F('reg', 'Registration fee', 1, 0, 5, 0.1, 'pct'), F('brok', 'Brokerage', 1, 0, 3, 0.1, 'pct'), F('park', 'Parking, club and other charges', 300000, 0, 1e8, 5000), F('dep', 'Maintenance deposit and legal fees', 100000, 0, 1e8, 5000)],
    compute(v) {
      const gst = v.price * v.gst / 100, sd = v.price * v.sd / 100, reg = v.price * v.reg / 100, brok = v.price * v.brok / 100, total = v.price + gst + sd + reg + brok + v.park + v.dep;
      return { primary: { label: 'All-in cost', value: inr(total) }, metrics: [{ label: 'Extra over base price', value: inr(total - v.price), tone: 'warn' }, { label: 'Extra as % of price', value: pct((total / v.price - 1) * 100, 1) }, { label: 'GST', value: inr(gst) }, { label: 'Stamp duty', value: inr(sd) }, { label: 'Registration', value: inr(reg) }, { label: 'Brokerage', value: inr(brok) }], chart: [{ label: 'Base price', value: v.price, color: '#2f6b57' }, { label: 'Taxes and duties', value: gst + sd + reg, color: '#c8922b' }, { label: 'Brokerage and other', value: brok + v.park + v.dep, color: '#3d5a80' }] };
    },
  },
  {
    slug: 'home-loan-emi-calculator', category: CAT, title: 'Home Loan EMI Calculator',
    short: 'Calculate the EMI, total interest and year-wise repayment of a home or construction loan.',
    tags: ['home loan', 'emi', 'construction loan', 'interest'],
    intro: [
      'A home or construction loan is repaid in equated monthly instalments (EMIs) over 10 to 30 years. Early EMIs are mostly interest; over time more of each instalment goes to principal. A small difference in rate or tenure changes the total cost by lakhs of rupees.',
      'Enter the loan amount, rate and tenure. If you are building rather than buying, remember that banks release construction loans in stages and charge interest only on the amount disbursed until the house is complete.',
    ],
    formula: 'EMI = P × r × (1 + r)ⁿ ÷ [(1 + r)ⁿ − 1], where r is the monthly rate and n the number of months',
    how: ['Interest is charged on the outstanding balance (reducing-balance method).', 'Part-prepayments reduce interest and tenure; floating-rate home loans to individuals carry no prepayment penalty under RBI rules.', 'Income-tax deductions on interest and principal exist only in the old tax regime, with limits.'],
    assumptions: ['The rate is fixed for the tenure; floating rates change with the lender’s benchmark.', 'Processing fees and insurance are not included.'],
    faqs: [
      ['How much home loan can I get?', 'Banks usually allow total EMIs up to 40–50 percent of net monthly income. Use the Home Affordability Calculator to estimate your limit.'],
      ['How does a construction loan differ?', 'It is disbursed in stages as work progresses, with interest on the disbursed amount only (pre-EMI), and converts to full EMIs after completion.'],
      ['Should I choose a longer tenure?', 'A longer tenure lowers the EMI but raises total interest sharply. Choose the shortest tenure you can comfortably afford.'],
    ],
    inputs: [F('P', 'Loan amount', 4000000, 100000, 1e9, 50000), F('rate', 'Interest rate (p.a.)', 8.75, 5, 20, 0.05, 'pct'), F('yrs', 'Tenure', 20, 1, 30, 1, 'yrs')],
    compute(v) {
      const a = amortise(v.P, v.rate, v.yrs * 12);
      return { primary: { label: 'Monthly EMI', value: inr(a.emi) }, metrics: [{ label: 'Total interest', value: inr(a.totalInterest), tone: 'warn' }, { label: 'Total payment', value: inr(a.totalPaid) }, { label: 'Interest as % of loan', value: pct(a.totalInterest / v.P * 100, 1) }], chart: [{ label: 'Principal', value: v.P, color: '#2f6b57' }, { label: 'Interest', value: a.totalInterest, color: '#c8922b' }], table: { title: 'Year-wise repayment schedule', headers: ['Year', 'Principal paid', 'Interest paid', 'Closing balance'], rows: a.rows } };
    },
  },
  {
    slug: 'home-affordability-calculator', category: CAT, title: 'Home Affordability Calculator',
    short: 'Find the maximum home price you can afford from your income, existing EMIs, down payment and interest rate.',
    tags: ['affordability', 'home loan', 'budget', 'income'],
    intro: [
      'Lenders decide how much you can borrow from your income and existing EMIs; you also need a down payment and enough cash for stamp duty and registration. This calculator combines all of these into a realistic maximum property price.',
      'It uses the share of income that can go to EMIs (typically 40 to 50 percent) and subtracts a reserve for duties and registration so the answer is not overstated.',
    ],
    formula: 'Max EMI = Income × share − existing EMIs;  Loan = EMI × [(1+r)ⁿ − 1] ÷ [r(1+r)ⁿ];  Price ≈ (Loan + Down payment) ÷ (1 + duty reserve %)',
    how: ['The allowed share is the fixed-obligation-to-income ratio your lender permits.', 'Down payment plus loan equals the budget; part of it must pay for stamp duty, registration and other costs.'],
    assumptions: ['Eligibility is also affected by credit score, employment type and property value; treat the figure as an upper estimate.', 'The duty reserve is a percentage of the property price that you must pay in cash.'],
    faqs: [
      ['How much EMI is safe?', 'Keep the total of all EMIs under about 40 percent of take-home pay so you can handle emergencies and still save.'],
      ['How much down payment do I need?', 'Banks usually finance up to 75–90 percent of the property value depending on the loan size, so you need 10–25 percent plus duties and fees.'],
      ['Will a co-applicant help?', 'Yes, adding an earning co-applicant raises the eligible loan amount.'],
    ],
    inputs: [F('inc', 'Net monthly income', 120000, 10000, 1e7, 1000), F('ex', 'Existing monthly EMIs', 10000, 0, 1e6, 500), F('foir', 'Share of income for EMIs', 45, 20, 60, 1, 'pct'), F('rate', 'Interest rate (p.a.)', 8.75, 5, 20, 0.05, 'pct'), F('yrs', 'Tenure', 20, 1, 30, 1, 'yrs'), F('down', 'Down payment you have', 1500000, 0, 1e9, 50000), F('dr', 'Cash needed for duties and fees (% of price)', 8, 0, 20, 0.5, 'pct')],
    compute(v) {
      const maxEmi = Math.max(0, v.inc * v.foir / 100 - v.ex), r = v.rate / 1200, n = v.yrs * 12;
      const loan = maxEmi * (Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n)), price = (loan + v.down) / (1 + v.dr / 100);
      return { primary: { label: 'Affordable property price', value: inr(price) }, metrics: [{ label: 'Eligible loan', value: inr(loan) }, { label: 'Maximum new EMI', value: inr(maxEmi) }, { label: 'Down payment', value: inr(v.down) }, { label: 'Cash set aside for duties and fees', value: inr(price * v.dr / 100) }], note: maxEmi === 0 ? 'Your existing EMIs already use up the allowed share of income.' : '' };
    },
  },
  {
    slug: 'rental-yield-calculator', category: CAT, title: 'Rental Yield Calculator',
    short: 'Calculate gross and net rental yield and payback period for a property you plan to buy and let out.',
    tags: ['rental yield', 'rent', 'investment', 'property'],
    intro: [
      'Rental yield is the annual rent as a percentage of the property’s value. In many Indian cities gross yields are only 2 to 4 percent for residential property, which is lower than home loan interest rates, so the real return depends heavily on price appreciation.',
      'Enter the property cost, monthly rent and annual costs such as property tax, maintenance and vacancy. The calculator shows gross yield, net yield and how many years of rent it takes to recover the purchase price.',
    ],
    formula: 'Gross yield = Annual rent ÷ Property cost;  Net yield = (Annual rent − annual costs − vacancy loss) ÷ Property cost',
    how: ['Vacancy is the number of months a year the property sits empty between tenants.', 'Costs include property tax, society maintenance paid by the owner, repairs and brokerage on re-letting.', 'Income tax on rent is not deducted — it depends on your slab.'],
    assumptions: ['Rent and costs stay constant; real rents rise over time.', 'Price appreciation and loan interest are not included.'],
    faqs: [
      ['What is a good rental yield in India?', 'Residential yields of 2–4 percent are typical in large cities; commercial property often yields 6–9 percent. Compare with the interest rate on a bank FD or home loan.'],
      ['Is rent taxable?', 'Yes. Rental income is taxed under “income from house property” after a 30 percent standard deduction, as per the Income Tax Act. Verify current rules.'],
      ['Should I buy to rent out?', 'Only if the total return including expected appreciation beats alternatives after tax and costs; low yield means you rely on price growth.'],
    ],
    inputs: [F('price', 'Property cost', 8000000, 10000, 1e10, 50000), F('rent', 'Monthly rent', 25000, 500, 1e7, 500), F('costs', 'Annual owner costs (tax, maintenance, repairs)', 30000, 0, 1e8, 1000), F('vac', 'Vacancy (months per year)', 1, 0, 12, 0.5, 'num')],
    compute(v) {
      const annual = v.rent * 12, net = v.rent * (12 - v.vac) - v.costs;
      return { primary: { label: 'Gross rental yield', value: pct(annual / v.price * 100, 2) }, metrics: [{ label: 'Net rental yield', value: pct(net / v.price * 100, 2), tone: net > 0 ? 'good' : 'warn' }, { label: 'Annual rent', value: inr(annual) }, { label: 'Net annual income', value: inr(net) }, { label: 'Years of net rent to recover price', value: net > 0 ? f2(v.price / net, 1) : '—' }] };
    },
  },
];

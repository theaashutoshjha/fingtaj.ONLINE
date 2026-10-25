import React, { useState } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';
import { Link } from 'react-router-dom';

export default function LoanEmiCalculator() {
  const [amount, setAmount] = useState<number>(5000000);
  const [rate, setRate] = useState<number>(8.75);
  const [years, setYears] = useState<number>(20);
  const [copied, setCopied] = useState<boolean>(false);

  // E = [P * r * (1+r)^n] / [ (1+r)^n - 1 ]
  const r = rate / (12 * 100);
  const n = years * 12;
  const emi = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalPayment = emi * n;
  const totalInterest = totalPayment - amount;

  const formatINR = (val: number) => '₹' + Math.round(val).toLocaleString('en-IN');

  const copyResults = () => {
    const text = `Loan EMI: Principal ${formatINR(amount)}, Rate ${rate}%, Tenure ${years} yrs => Monthly EMI: ${formatINR(emi)}, Interest: ${formatINR(totalInterest)}, Total: ${formatINR(totalPayment)}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <CalculatorLayout
      category="Debt & Mortgages"
      badge="Reducing Balance Method"
      title="Home & Personal Loan EMI Amortization Calculator"
      subtitle="Compute equated monthly installments and interest distributions across home, personal, and vehicular financing facilities under RBI Master Directions."
      formula="E = [ P × r × (1 + r)^n ] / [ (1 + r)^n - 1 ]"
      whoItsFor={
        <>
          <p>
            <strong>What It Computes:</strong> This tool calculates your uniform Equated Monthly Installment (EMI), total cumulative interest payable over the loan tenure, and aggregate financial outflow across home loans, car loans, mortgage property loans, and retail personal credit.
          </p>
          <p>
            <strong>Target Audience:</strong> Designed for home buyers, vehicular purchasers, debt consoliders, and prospective mortgage borrowers evaluating affordability, bank loan eligibility criteria, and Fixed Obligation to Income Ratio (FOIR) limits.
          </p>
        </>
      }
      mathematicalPrinciples={
        <>
          <p>
            Equated Monthly Installment amortization is the universally mandated mechanism under Reserve Bank of India (RBI) guidelines for retail credit facilities. Under the monthly reducing balance approach, interest is computed strictly against the outstanding unpaid principal balance at the beginning of each monthly cycle.
          </p>
          <p>
            In the initial amortization phases, the majority of the monthly remittance services accrued interest liabilities, with only a nominal slice curtailing principal balance. As tenure advances, the principal balance diminishes, accelerating equity build-up and compressing interest exposure.
          </p>
        </>
      }
      formulaExplanation={
        <>
          <p>
            To understand the operational mechanics of the reducing balance formula:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
            <li><strong>P (Principal Disbursed):</strong> The sanctioned net loan disbursed to the seller or borrower.</li>
            <li><strong>r (Periodic Monthly Rate):</strong> The annual percentage rate (APR) divided by 12 months and 100: <code className="text-amber-300">r = Rate / (12 × 100)</code>. For 8.75%, <code className="text-amber-300">r = 0.00729167</code>.</li>
            <li><strong>n (Total Tenure in Months):</strong> Total monthly installments across the loan lifetime (<code className="text-amber-300">Years × 12</code>).</li>
            <li><strong>Numerator vs Denominator:</strong> The numerator models the compounded interest load over time, while the denominator annuity factor scales that load into equal monthly installments.</li>
          </ul>
        </>
      }
      variables={[
        { variable: 'E', name: 'Equated Monthly Installment', definition: 'Uniform monthly installment comprising blended principal repayment and interest charges.' },
        { variable: 'P', name: 'Sanctioned Principal Amount', definition: 'Total capital disbursed by the lending institution net of administrative fees.' },
        { variable: 'r', name: 'Monthly Fractional Interest Rate', definition: 'Annual interest rate divided by 12 months and 100: r = R / (12 × 100).' },
        { variable: 'n', name: 'Loan Duration in Monthly Cycles', definition: 'Total duration of the loan facility expressed in calendar months.' },
      ]}
      workedExample={
        <>
          <div className="font-semibold text-white mb-1">
            Real-World Scenario: ₹50,00,000 Home Loan at 8.75% Annual Interest for 20 Years (240 Monthly Cycles)
          </div>
          <p className="text-xs text-slate-300">
            Let us walk through the exact numbers for a 20-year housing loan:
          </p>
          <div className="space-y-1.5 font-mono text-xs bg-slate-900/60 p-3 rounded border border-slate-800/80 mt-2">
            <div>• Sanctioned Loan Principal (P): ₹50,00,000</div>
            <div>• Annual Interest Rate: 8.75% p.a.</div>
            <div>• Monthly Rate (r): 8.75 / 1200 = 0.007291667</div>
            <div>• Total Tenure in Months (n): 20 × 12 = 240 Months</div>
            <div>• Compounding Term: (1 + r)^240 = (1.007291667)^240 ≈ 5.717654</div>
            <div>• Numerator: 50,00,000 × 0.007291667 × 5.717654 ≈ ₹2,08,443.43</div>
            <div>• Denominator: 5.717654 - 1 = 4.717654</div>
            <div className="text-amber-300 font-bold">• Monthly EMI (E): 2,08,443.43 / 4.717654 = ₹44,186 / Month</div>
            <div className="pt-2 border-t border-slate-800 text-slate-300">
              • Total Repayment over 20 Years: 240 × ₹44,186 = ₹1,06,04,640
            </div>
            <div className="text-rose-400 font-bold">
              • Total Bank Interest Paid: ₹1,06,04,640 - ₹50,00,000 = ₹56,04,640 (112% of loan!)
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            <strong>Key Insight:</strong> Over 20 years at 8.75%, you repay <strong>more than double</strong> the original borrowed amount in bank interest. In Month 1, ₹36,458 (82.5%) of your ₹44,186 EMI is pure interest!
          </p>
        </>
      }
      howToReadResults={
        <>
          <p>
            <strong>The 40% FOIR Affordability Rule:</strong> Lending banks look at your Fixed Obligation to Income Ratio (FOIR). Your total combined monthly EMIs across all existing debts should ideally never exceed 40% to 50% of your net monthly take-home salary.
          </p>
          <p>
            <strong>Prepayment Leverage:</strong> Because reducing balance math front-loads interest, prepaying even 1 extra EMI per year in the first 5 years saves hundreds of thousands in interest and truncates your loan tenure by 3 to 4 years.
          </p>
        </>
      }
      statutoryNotes={
        <>
          <p><strong>RBI Master Direction on Prepayment:</strong> Scheduled commercial banks and Housing Finance Companies (HFCs) are strictly prohibited from levying foreclosure charges or prepayment penalties on floating-rate term loans sanctioned to individual borrowers.</p>
          <p><strong>Section 24(b) Tax Deductions:</strong> Under the Old Tax Regime, home loan borrowers can claim up to ₹2,00,000 annual interest deduction for self-occupied properties and up to ₹1,50,000 principal repayment under Section 80C.</p>
        </>
      }
      faqs={[
        {
          question: 'What is the financial impact of voluntary annual principal prepayments?',
          answer: 'Because interest is calculated on a reducing balance basis, each rupee remitted as prepay directly strikes the core principal rather than future interest. Prepaying even one additional EMI per annum can truncate a 20-year home loan by 3 to 4.5 years, slashing aggregate interest outgo by upwards of 20% over the life of the loan.',
        },
        {
          question: 'What statutory income tax deductions apply to home loan EMIs in India?',
          answer: 'Under the Old Tax Regime, Section 24(b) permits interest deduction up to ₹2,00,000 per financial year for self-occupied property. Principal repayment qualifies under Section 80C up to ₹1,50,000. Under the New Tax Regime (Section 115BAC), Section 80C deductions and self-occupied housing interest deductions are vacated.',
        },
        {
          question: 'Are foreclosure and prepayment penalties legally permissible on floating-rate loans?',
          answer: 'No. As per RBI Master Directions, banks and Housing Finance Companies (HFCs) are strictly prohibited from levying foreclosure charges or prepayment penalties on floating-rate term loans sanctioned to individual borrowers for non-business objectives.',
        },
        {
          question: 'How do banks treat floating vs fixed interest rates?',
          answer: 'Most Indian home loans are linked to an External Benchmark Lending Rate (EBLR), typically the RBI Repo Rate. When RBI adjusts the repo rate, banks automatically adjust your loan tenure (or EMI) to reflect the new interest rate.',
        },
        {
          question: 'What is the difference between flat rate and reducing balance EMI?',
          answer: 'In a flat rate loan, interest is computed against the full original loan amount for the whole tenure, making the effective interest rate almost double the advertised rate. The reducing balance method computes interest strictly on the remaining unpaid balance, ensuring fair interest charges.',
        },
      ]}
      relatedArticles={[
        {
          title: 'How Loan EMI is Calculated: The Reducing Balance Formula & Prepayment Impact',
          path: '/articles/how-loan-emi-is-calculated',
          readTime: '8 min',
          summary: 'A mathematical breakdown of equated monthly installments, why early payments are 80%+ interest, and prepayment math.',
        },
        {
          title: 'New vs Old Tax Regime in India: Slabs, Deductions, and Break-Even Salary Analysis',
          path: '/articles/new-vs-old-tax-regime',
          readTime: '10 min',
          summary: 'Understand how Section 24(b) home loan interest deductions compare between the Old and New Tax Regimes.',
        },
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label htmlFor="emi-amount-input" className="font-medium text-slate-200">Principal Loan Amount</label>
              <span className="font-mono text-amber-400 font-semibold">{formatINR(amount)}</span>
            </div>
            <input
              id="emi-amount-input"
              type="range"
              min="100000"
              max="20000000"
              step="50000"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-500">
              <span>₹1 Lakh</span>
              <span>₹1 Crore</span>
              <span>₹2 Crore</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label htmlFor="emi-rate-input" className="font-medium text-slate-200">Annual Interest Rate (% p.a.)</label>
              <span className="font-mono text-amber-400 font-semibold">{rate.toFixed(2)}%</span>
            </div>
            <input
              id="emi-rate-input"
              type="range"
              min="4"
              max="24"
              step="0.05"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-500">
              <span>4%</span>
              <span>12%</span>
              <span>24%</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label htmlFor="emi-years-input" className="font-medium text-slate-200">Loan Tenure (Years)</label>
              <span className="font-mono text-amber-400 font-semibold">{years} Years ({years * 12} Mos)</span>
            </div>
            <input
              id="emi-years-input"
              type="range"
              min="1"
              max="30"
              step="1"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-500">
              <span>1 Year</span>
              <span>15 Years</span>
              <span>30 Years</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 bg-slate-950 border border-slate-800 rounded-lg p-6 flex flex-col justify-between space-y-6 min-h-[220px]">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">Monthly EMI</span>
              <span className="text-2xl font-mono font-extrabold text-amber-300 tabular-nums">{formatINR(emi)}</span>
            </div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-rose-400">Total Interest Payable</span>
              <span className="text-lg font-mono font-bold text-rose-400 tabular-nums">{formatINR(totalInterest)}</span>
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Outflow (Principal + Interest)</span>
              <span className="text-lg font-mono font-bold text-slate-200 tabular-nums">{formatINR(totalPayment)}</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={copyResults}
              className="w-full py-2.5 px-4 text-xs font-semibold text-slate-200 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              {copied ? '✓ Copied to Clipboard!' : 'Copy EMI Calculation'}
            </button>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}

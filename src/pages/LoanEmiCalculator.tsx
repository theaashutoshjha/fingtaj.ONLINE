import React, { useState } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';

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
      variables={[
        { variable: 'E', name: 'Equated Monthly Installment', definition: 'Uniform monthly installment comprising blended principal repayment and interest charges.' },
        { variable: 'P', name: 'Sanctioned Principal Amount', definition: 'Total capital disbursed by the lending institution net of administrative fees.' },
        { variable: 'r', name: 'Monthly Fractional Interest Rate', definition: 'Annual interest rate divided by 12 months and 100: r = R / (12 × 100).' },
        { variable: 'n', name: 'Loan Duration in Monthly Cycles', definition: 'Total duration of the loan facility expressed in calendar months.' },
      ]}
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
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label htmlFor="emi-amount-input" className="font-medium text-slate-200">Principal Loan Amount</label>
              <span className="font-mono text-cyan-400 font-semibold">{formatINR(amount)}</span>
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
              <span className="font-mono text-cyan-400 font-semibold">{rate.toFixed(2)}%</span>
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
              <span className="font-mono text-cyan-400 font-semibold">{years} Years ({years * 12} Mos)</span>
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
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Monthly EMI</span>
              <span className="text-2xl font-mono font-extrabold text-cyan-300 tabular-nums">{formatINR(emi)}</span>
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

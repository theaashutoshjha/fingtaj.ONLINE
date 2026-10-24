import React, { useState } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';

export default function PpfCalculator() {
  const [annual, setAnnual] = useState<number>(150000);
  const [years, setYears] = useState<number>(15);
  const [copied, setCopied] = useState<boolean>(false);

  const rate = 0.071; // 7.1% statutory
  let balance = 0;
  let totalDeposited = 0;

  for (let t = 1; t <= years; t++) {
    balance += annual;
    totalDeposited += annual;
    balance += balance * rate;
  }
  const totalInterest = balance - totalDeposited;

  const formatINR = (val: number) => '₹' + Math.round(val).toLocaleString('en-IN');

  const copyResults = () => {
    const text = `PPF Calculation: Annual ₹${annual} for ${years} yrs => Deposited: ${formatINR(totalDeposited)}, Interest: ${formatINR(totalInterest)}, Tax-Free Maturity: ${formatINR(balance)}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <CalculatorLayout
      category="Small Savings & Retirement"
      badge="PPF Scheme 2019"
      title="Public Provident Fund (PPF) Maturity Calculator"
      subtitle="Model compound accumulation, annual interest accrual, and 100% tax-free maturity corpus under the statutory 7.1% sovereign rate."
      formula="A = P × [ { (1 + r)^t - 1 } / r ] × (1 + r)"
      mathematicalPrinciples={
        <>
          <p>
            The Public Provident Fund is a statutory sovereign small-savings vehicle governed by the Ministry of Finance. PPF accounts enjoy unequivocal Exempt-Exempt-Exempt (EEE) fiscal status under Section 80C of the Income Tax Act: contributions qualify for deduction, interest accrued is 100% tax-free, and maturity proceeds are exempt from capital gains.
          </p>
          <p>
            Interest is calculated on the minimum balance held between the close of the 5th day and the end of each calendar month and compounded annually on March 31st. Consequently, deposits remitted after the 5th day forfeit interest accretion for that entire calendar month.
          </p>
        </>
      }
      variables={[
        { variable: 'A', name: 'Maturity Corpus', definition: 'Aggregate terminal balance payable at completion of the 15-year statutory lock-in.' },
        { variable: 'P', name: 'Annual Statutory Contribution', definition: 'Periodic deposit remitted per financial year (min ₹500, max ₹1,50,000).' },
        { variable: 'r', name: 'Government Notified Rate', definition: 'Currently benchmarked at 7.1% per annum, compounded annually.' },
        { variable: 't', name: 'Account Tenure', definition: 'Statutory 15-year base period, extendable in 5-year blocks.' },
      ]}
      statutoryNotes={
        <>
          <p><strong>Government Savings Promotion Act:</strong> Under Section 15, PPF balances cannot be attached by any order or decree of any civil court for debts or contractual liabilities.</p>
          <p><strong>5th-of-Month Rule:</strong> Funds must clear on or before the 5th of each month to earn interest for that month.</p>
        </>
      }
      faqs={[
        {
          question: 'Why is the 5th of the month critical for PPF remittances?',
          answer: 'Per Rule 8 of the PPF Scheme 2019, interest is calculated on the minimum ledger balance between the close of the 5th day and the terminal day of each month. If a deposit clears on the 6th, that capital does not earn interest for the 25 remaining days of that calendar month.',
        },
        {
          question: 'Can PPF balances be attached by a court decree for outstanding debts?',
          answer: 'Under Section 15 of the Government Savings Promotion Act, a PPF account balance cannot be attached by any order or decree of any civil or commercial court in respect of any debt or liability incurred by the account holder.',
        },
        {
          question: 'How are premature closures governed under PPF statutory provisions?',
          answer: 'Premature closure is permitted exclusively after 5 financial years under defined conditions: life-threatening medical treatment of the account holder or dependents, higher education of the child, or change in residency status, accompanied by a 1% interest rate penalty from account opening.',
        },
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label htmlFor="ppf-annual-input" className="font-medium text-slate-200">Annual Deposit (Limit: ₹1.5L)</label>
              <span className="font-mono text-cyan-400 font-semibold">{formatINR(annual)}</span>
            </div>
            <input
              id="ppf-annual-input"
              type="range"
              min="500"
              max="150000"
              step="500"
              value={annual}
              onChange={(e) => setAnnual(Number(e.target.value))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-500">
              <span>₹500 Min</span>
              <span>₹75,000</span>
              <span>₹1,50,000 Max</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label htmlFor="ppf-years-input" className="font-medium text-slate-200">Account Horizon (Years)</label>
              <span className="font-mono text-cyan-400 font-semibold">{years} Years</span>
            </div>
            <input
              id="ppf-years-input"
              type="range"
              min="15"
              max="30"
              step="5"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-500">
              <span>15 Years (Base)</span>
              <span>20 Years</span>
              <span>25 Years</span>
              <span>30 Years</span>
            </div>
          </div>

          <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-400">
            Statutory Ministry of Finance Rate: <span className="text-cyan-400 font-bold font-mono">7.1% p.a.</span> (Compounded annually on March 31).
          </div>
        </div>

        <div className="lg:col-span-6 bg-slate-950 border border-slate-800 rounded-lg p-6 flex flex-col justify-between space-y-6 min-h-[220px]">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Capital Deposited</span>
              <span className="text-lg font-mono font-bold text-slate-200 tabular-nums">{formatINR(totalDeposited)}</span>
            </div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Total Accrued Interest</span>
              <span className="text-lg font-mono font-bold text-emerald-400 tabular-nums">{formatINR(totalInterest)}</span>
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="text-sm font-semibold uppercase tracking-wider text-cyan-400">Maturity Corpus (100% Tax-Free)</span>
              <span className="text-2xl font-mono font-extrabold text-cyan-300 tabular-nums">{formatINR(balance)}</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={copyResults}
              className="w-full py-2.5 px-4 text-xs font-semibold text-slate-200 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              {copied ? '✓ Copied to Clipboard!' : 'Copy PPF Projection'}
            </button>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}

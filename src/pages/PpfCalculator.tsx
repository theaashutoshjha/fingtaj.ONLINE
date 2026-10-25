import React, { useState } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';
import { Link } from 'react-router-dom';

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
      whoItsFor={
        <>
          <p>
            <strong>What It Computes:</strong> This sovereign calculator projects your exact year-by-year balance accumulation, annual compounding interest accretion, and terminal tax-free maturity corpus under the Government of India's Public Provident Fund Scheme 2019 at the notified 7.1% sovereign rate.
          </p>
          <p>
            <strong>Target Audience:</strong> Designed for risk-averse savers, long-term retirement planners, parents securing long-range educational funds, and taxpayers seeking the rare triple Exempt-Exempt-Exempt (EEE) statutory status where neither deposits, interest, nor withdrawals ever face taxation.
          </p>
        </>
      }
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
      formulaExplanation={
        <>
          <p>
            When annual contributions are deposited in a lump-sum at the start of the financial year (between April 1st and April 5th), the formula reduces to a classic compound annuity due:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-300">
            <li><strong>P:</strong> Annual contribution (minimum ₹500, statutory ceiling ₹1,50,000 per financial year).</li>
            <li><strong>r:</strong> Sovereign interest rate notified quarterly by the Ministry of Finance (currently benchmarked at 7.1% p.a.).</li>
            <li><strong>t:</strong> Compounding tenure in years (initial 15-year base period, extendable in 5-year blocks).</li>
            <li><strong>Compounding Timing:</strong> Compounded annually on March 31st each fiscal year.</li>
          </ul>
        </>
      }
      variables={[
        { variable: 'A', name: 'Maturity Corpus', definition: 'Aggregate terminal balance payable at completion of the 15-year statutory lock-in.' },
        { variable: 'P', name: 'Annual Statutory Contribution', definition: 'Periodic deposit remitted per financial year (min ₹500, max ₹1,50,000).' },
        { variable: 'r', name: 'Government Notified Rate', definition: 'Currently benchmarked at 7.1% per annum, compounded annually.' },
        { variable: 't', name: 'Account Tenure', definition: 'Statutory 15-year base period, extendable in 5-year blocks.' },
      ]}
      workedExample={
        <>
          <div className="font-semibold text-white mb-1">
            Real-World Scenario: Depositing the Full Statutory Cap of ₹1,50,000 Each Year for 15 Years at 7.1%
          </div>
          <p className="text-xs text-slate-300">
            Let us trace the numbers for an investor depositing ₹1,50,000 between April 1st and April 5th each year:
          </p>
          <div className="space-y-1.5 font-mono text-xs bg-slate-900/60 p-3 rounded border border-slate-800/80 mt-2">
            <div>• Annual Investment (P): ₹1,50,000</div>
            <div>• Total Sovereign Tenure (t): 15 Complete Financial Years</div>
            <div>• Statutory Rate (r): 7.10% Compounded Annually</div>
            <div>• Cumulative Capital Deposited: 15 × ₹1,50,000 = ₹22,50,000</div>
            <div>• Total Tax-Free Compound Interest Earned: ₹18,18,209</div>
            <div className="text-amber-300 font-extrabold text-sm pt-1 border-t border-slate-800">
              • Guaranteed 100% Tax-Free Maturity Corpus: ₹40,68,209 (~₹40.7 Lakhs)
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            <strong>Key Insight:</strong> Your ₹22.5 Lakhs of principal yields <strong>₹18.18 Lakhs in pure tax-free interest</strong>. In the 30% tax bracket, earning ₹18.18L tax-free in PPF is equivalent to earning over ₹26 Lakhs in a taxable bank fixed deposit!
          </p>
        </>
      }
      howToReadResults={
        <>
          <p>
            <strong>The 5-Year Block Extension Advantage:</strong> If you don't need immediate liquidity after 15 years, you can extend your PPF account in 5-year blocks. Extending from 15 to 20 years expands your corpus from ₹40.7 Lakhs to over <strong>₹66.5 Lakhs</strong>; extending to 25 years pushes the corpus past <strong>₹1.03 Crore</strong>!
          </p>
          <p>
            <strong>Asset Class Allocation:</strong> PPF provides sovereign capital protection and zero credit risk, making it an ideal debt-anchor in an asset allocation strategy alongside equity SIPs.
          </p>
        </>
      }
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
        {
          question: 'What is the maximum amount I can deposit across all PPF accounts in a year?',
          answer: 'The statutory annual ceiling is ₹1,50,000 per financial year per individual across all PPF accounts (including minor children accounts). Any amount deposited in excess of ₹1.5L does not earn interest and is not eligible for tax benefits.',
        },
        {
          question: 'Can Non-Resident Indians (NRIs) open a new PPF account?',
          answer: 'No. NRIs are not permitted to open fresh PPF accounts. However, if an Indian resident opened a PPF account prior to becoming an NRI, they are legally permitted to maintain the account until its original 15-year maturity on a non-repatriation basis.',
        },
      ]}
      relatedArticles={[
        {
          title: 'PPF Rules & Interest Calculation Guide: The 5th Day Rule and 15-Year Extensions',
          path: '/articles/ppf-rules-interest-calculation-guide',
          readTime: '8 min',
          summary: 'A complete statutory manual on Public Provident Fund Scheme 2019, deposit timing, and the April 5th lump sum strategy.',
        },
        {
          title: 'Understanding Real vs Nominal Returns: How Inflation Stealthily Erodes Savings',
          path: '/articles/understanding-real-vs-nominal-returns',
          readTime: '8 min',
          summary: 'Evaluate real purchasing power growth of sovereign debt against historical consumer price inflation.',
        },
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label htmlFor="ppf-annual-input" className="font-medium text-slate-200">Annual Deposit (Limit: ₹1.5L)</label>
              <span className="font-mono text-amber-400 font-semibold">{formatINR(annual)}</span>
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
              <span className="font-mono text-amber-400 font-semibold">{years} Years</span>
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
            Statutory Ministry of Finance Rate: <span className="text-amber-400 font-bold font-mono">7.1% p.a.</span> (Compounded annually on March 31).
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
              <span className="text-sm font-semibold uppercase tracking-wider text-amber-400">Maturity Corpus (100% Tax-Free)</span>
              <span className="text-2xl font-mono font-extrabold text-amber-300 tabular-nums">{formatINR(balance)}</span>
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

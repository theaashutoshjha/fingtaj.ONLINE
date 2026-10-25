import React from 'react';
import ArticleLayout from '../../components/ArticleLayout';
import { Link } from 'react-router-dom';

export default function PpfInterestGuide() {
  return (
    <ArticleLayout
      title="PPF Rules & Interest Calculation Guide: The 5th Day Rule, Tax-Free Compounding & 15-Year Extensions"
      subtitle="A complete statutory manual on Public Provident Fund Scheme 2019, how depositing after the 5th costs you a full month of interest, and maximizing the triple EEE tax exemption."
      category="Sovereign Savings & Debt"
      readTime="8 min"
      publishedDate="October 2026"
      calculatorLink={{
        name: 'PPF Maturity & Interest Calculator',
        path: '/ppf-calculator',
        badge: '7.1% Sovereign EEE',
      }}
    >
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          1. The Triple EEE Sovereign Privilege
        </h2>
        <p>
          Established under the Public Provident Fund Act of 1968 and governed today by the <strong>Public Provident Fund Scheme, 2019</strong> notified by the Ministry of Finance, the Public Provident Fund (PPF) is India's premier risk-free, sovereign-backed long-term debt savings vehicle.
        </p>
        <p>
          It enjoys the coveted <strong>Exempt-Exempt-Exempt (EEE)</strong> statutory tax status under the Income Tax Act, 1961:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
          <li><strong>Exempt at Investment:</strong> Contributions qualify for Section 80C tax deduction up to ₹1,50,000 per financial year (under the Old Tax Regime).</li>
          <li><strong>Exempt during Accrual:</strong> Annual compounding interest is 100% tax-free under Section 10(11). No TDS is ever deducted.</li>
          <li><strong>Exempt at Withdrawal:</strong> The entire maturity corpus at 15 years is fully tax-free and not subject to capital gains tax.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          2. The Critical "5th of the Month" Mathematical Rule
        </h2>
        <p>
          Under Paragraph 7(1) of the PPF Scheme 2019, interest is calculated on the <strong>minimum balance in the account between the close of the 5th day and the end of the calendar month</strong>.
        </p>
        <p>
          This single statutory clause has massive financial repercussions:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-slate-800 my-4">
            <thead className="bg-slate-900 text-slate-300">
              <tr>
                <th className="p-3 border-b border-slate-800">Deposit Scenario</th>
                <th className="p-3 border-b border-slate-800">Deposit Date</th>
                <th className="p-3 border-b border-slate-800">Minimum Balance (5th to 30th)</th>
                <th className="p-3 border-b border-slate-800">Interest Credited for that Month</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              <tr>
                <td className="p-3 font-semibold text-emerald-400">Optimal Execution</td>
                <td className="p-3">On or before 5th of Month</td>
                <td className="p-3">Includes newly deposited funds</td>
                <td className="p-3 text-emerald-400 font-bold">Full 1 Month Interest Earned</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-rose-400">Delayed Deposit</td>
                <td className="p-3">6th or later in the Month</td>
                <td className="p-3">Excludes new funds (pre-deposit balance)</td>
                <td className="p-3 text-rose-400 font-bold">Zero Interest on New Deposit for that Month!</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          If you deposit ₹1,50,000 on <strong>April 6th</strong> instead of <strong>April 5th</strong>, your ₹1.5 Lakh sits completely idle for the rest of April earning ₹0! At the current 7.1% interest rate, that single day's delay costs you <code className="bg-slate-900 px-1.5 py-0.5 rounded text-rose-400 font-mono">₹1,50,000 × (7.1 / 1200) = ₹887.50</code> in lost tax-free returns in month one, which compounds to tens of thousands of rupees over a 15-year lifecycle.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          3. Golden Strategy: The April 1st to 5th Annual Lump Sum
        </h2>
        <p>
          Because PPF interest is calculated monthly but credited annually on March 31st, the single most mathematically optimal way to maximize PPF returns is to <strong>deposit your full annual quota of ₹1,50,000 in a single lump sum between April 1st and April 5th</strong> at the very beginning of the financial year.
        </p>
        <p>
          By doing this, your entire ₹1,50,000 earns interest for all 12 calendar months of that fiscal year. Depositing in monthly tranches or at the end of the year (in February or March) produces significantly lower total interest.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          4. Extension Rules: The 5-Year Block Power Move
        </h2>
        <p>
          A PPF account matures after 15 complete financial years. However, subscribers are not forced to close the account. Under Paragraph 13 of the Scheme, you have two extension options:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
            <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider">Option A: Extension with Fresh Contributions</h3>
            <p className="text-xs text-slate-300">Submit <strong>Form 4</strong> within 1 year of maturity. You can continue depositing up to ₹1.5L annually in 5-year renewable blocks indefinitely while retaining complete EEE tax-free status.</p>
          </div>
          <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
            <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Option B: Extension Without Contributions</h3>
            <p className="text-xs text-slate-300">If no form is submitted, the account automatically extends in 5-year blocks. Your entire accumulated corpus continues to earn 7.1% tax-free interest, and you can withdraw any amount once per fiscal year.</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          5. Loan and Partial Withdrawal Protections
        </h2>
        <p>
          A unique statutory feature under the PPF Scheme is that <strong>a PPF account cannot be attached by any court of law</strong> in respect of any debt or liability incurred by the subscriber. Partial withdrawals are permitted from the 7th financial year onwards, and loans against PPF balance are available between the 3rd and 6th financial year at 1% interest above the prevailing PPF rate.
        </p>
        <p>
          Model your 15-year compounding trajectory, monthly vs annual interest, and 5-year extension milestones with our{' '}
          <Link to="/ppf-calculator" className="text-amber-400 hover:underline font-semibold">
            FingTaj Public Provident Fund (PPF) Calculator
          </Link>.
        </p>
      </section>
    </ArticleLayout>
  );
}

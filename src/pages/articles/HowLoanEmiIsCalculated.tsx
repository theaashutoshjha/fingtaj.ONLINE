import React from 'react';
import ArticleLayout from '../../components/ArticleLayout';
import { Link } from 'react-router-dom';

export default function HowLoanEmiIsCalculated() {
  return (
    <ArticleLayout
      title="How Loan EMI is Calculated: The Reducing Balance Formula, Amortization Schedule & Prepayment Impact"
      subtitle="An engineer's mathematical breakdown of equated monthly installments, why early payments are almost pure interest, and how a single annual prepayment can slice 4 years off your mortgage."
      category="Debt & Mortgages"
      readTime="8 min"
      publishedDate="October 2026"
      calculatorLink={{
        name: 'Home Loan EMI Calculator',
        path: '/loan-emi-calculator',
        badge: 'Reducing Balance',
      }}
    >
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          1. The Reducing Balance Invariant Mandated by the RBI
        </h2>
        <p>
          Whenever an individual borrows capital for a home purchase, vehicle acquisition, or personal expenditure from an Indian scheduled commercial bank or Housing Finance Company (HFC), the loan operates under a statutory rule codified in the <em>Reserve Bank of India (RBI) Master Direction – Non-Banking Financial Company – Systemically Important Non-Deposit taking Company and Deposit taking Company (Reserve Bank) Directions</em> and corresponding banking guidelines: <strong>the Monthly Reducing Balance Method</strong>.
        </p>
        <p>
          Unlike historical "flat rate" scams where borrowers were charged interest on the entire original principal regardless of how much had already been reimbursed, reducing balance accounting calculates interest strictly on the <strong>unpaid principal remaining at the start of that specific month</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          2. The Exact EMI Formula Explained in Plain English
        </h2>
        <p>
          The algebraic formula used by every core banking system (such as Infosys Finacle or TCS BaNCS) to compute your uniform Equated Monthly Installment (EMI) is:
        </p>

        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-amber-300 text-sm overflow-x-auto">
          E = [ P × r × (1 + r)^n ] / [ (1 + r)^n - 1 ]
        </div>

        <p>
          Let us break down each mathematical component without academic jargon:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-300">
          <li>
            <strong>P (Principal Loan Sanctioned):</strong> The exact capital amount disbursed to the borrower or seller. For instance, ₹50,00,000.
          </li>
          <li>
            <strong>r (Periodic Monthly Interest Rate):</strong> Banks advertise an <em>annual</em> interest rate (e.g., 8.75% per annum). But since installments occur monthly, this rate must be converted to a fractional monthly rate: <code className="bg-slate-900 px-1.5 py-0.5 rounded text-amber-400">r = 8.75 / (12 × 100) = 0.00729167</code>.
          </li>
          <li>
            <strong>n (Total Compounding Periods in Months):</strong> A 20-year mortgage has <code className="bg-slate-900 px-1.5 py-0.5 rounded text-amber-400">20 × 12 = 240</code> monthly installments.
          </li>
          <li>
            <strong>(1 + r)^n (The Compounding Factor):</strong> This exponential factor captures the continuous compounding effect over the two decades of the loan lifecycle.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          3. Step-by-Step Worked Calculation with Real Numbers
        </h2>
        <p>
          Consider a real-world scenario of an IT professional in Bengaluru purchasing an apartment with a sanctioned home loan of <strong>₹50,00,000</strong> at <strong>8.75% p.a.</strong> for a <strong>20-year (240 months)</strong> tenure:
        </p>

        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 space-y-3 font-mono text-xs sm:text-sm">
          <div>Step 1: Calculate monthly rate r = 8.75 / 1200 = 0.007291667</div>
          <div>Step 2: Calculate (1 + r)^240 = (1.007291667)^240 ≈ 5.717654</div>
          <div>Step 3: Calculate Numerator = 50,00,000 × 0.007291667 × 5.717654 ≈ ₹2,08,443.43</div>
          <div>Step 4: Calculate Denominator = 5.717654 - 1 = 4.717654</div>
          <div>Step 5: EMI = Numerator / Denominator = 2,08,443.43 / 4.717654 ≈ <strong className="text-amber-300">₹44,186 per month</strong></div>
        </div>

        <p>
          Now let us look at the full 240-month financial commitment:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-slate-300">
          <li><strong>Total Outflow Over 20 Years:</strong> 240 × ₹44,186 = <strong>₹1,06,04,640</strong></li>
          <li><strong>Original Principal Repaid:</strong> ₹50,00,000</li>
          <li><strong>Total Interest Paid to Bank:</strong> <strong>₹56,04,640 (112% of the original loan value!)</strong></li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          4. The Front-Loaded Amortization Trap
        </h2>
        <p>
          Most borrowers assume that each month's ₹44,186 payment is half principal and half interest. This is mathematically incorrect. Because interest is calculated against the full outstanding principal, early payments are overwhelmingly consumed by interest charges:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-slate-800 my-4">
            <thead className="bg-slate-900 text-slate-300">
              <tr>
                <th className="p-3 border-b border-slate-800">Payment Period</th>
                <th className="p-3 border-b border-slate-800">Opening Principal</th>
                <th className="p-3 border-b border-slate-800">Monthly EMI</th>
                <th className="p-3 border-b border-slate-800">Interest Component</th>
                <th className="p-3 border-b border-slate-800">Principal Repaid</th>
                <th className="p-3 border-b border-slate-800">% to Interest</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              <tr>
                <td className="p-3 font-semibold text-white">Month 1</td>
                <td className="p-3">₹50,00,000</td>
                <td className="p-3 font-mono text-amber-400">₹44,186</td>
                <td className="p-3 text-rose-400">₹36,458</td>
                <td className="p-3 text-emerald-400">₹7,728</td>
                <td className="p-3 font-bold text-rose-400">82.5%</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Month 60 (Year 5)</td>
                <td className="p-3">₹44,53,100</td>
                <td className="p-3 font-mono text-amber-400">₹44,186</td>
                <td className="p-3 text-rose-400">₹32,471</td>
                <td className="p-3 text-emerald-400">₹11,715</td>
                <td className="p-3 font-bold text-rose-400">73.5%</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Month 144 (Year 12)</td>
                <td className="p-3">₹30,75,200</td>
                <td className="p-3 font-mono text-amber-400">₹44,186</td>
                <td className="p-3 text-rose-400">₹22,423</td>
                <td className="p-3 text-emerald-400">₹21,763</td>
                <td className="p-3 font-bold text-amber-400">50.7%</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Month 220 (Year 18.3)</td>
                <td className="p-3">₹8,12,000</td>
                <td className="p-3 font-mono text-amber-400">₹44,186</td>
                <td className="p-3 text-rose-400">₹5,921</td>
                <td className="p-3 text-emerald-400">₹38,265</td>
                <td className="p-3 font-bold text-emerald-400">13.4%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Notice that for the first 12 years of a 20-year loan, more than half of every single EMI goes directly to bank interest profit rather than building home equity.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          5. The Prepayment Hack: Why Prepaying in Years 1–5 Saves Millions
        </h2>
        <p>
          Because of reducing balance mathematics, any voluntary prepayment you remit in the opening years directly strikes the <strong>core principal balance</strong>, entirely eliminating all future interest that would have compounded on that portion.
        </p>
        <p>
          For our ₹50 Lakh loan at 8.75%:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
          <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
            <span className="text-xs uppercase font-mono text-amber-400 font-bold">Strategy A: 1 Extra EMI / Year</span>
            <div className="text-xl font-bold text-white">Save ~₹11.2 Lakhs</div>
            <p className="text-xs text-slate-400">Paying just 13 EMIs instead of 12 each year slashes tenure from 20 years down to 16.5 years.</p>
          </div>
          <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
            <span className="text-xs uppercase font-mono text-emerald-400 font-bold">Strategy B: 5% Annual Top-Up</span>
            <div className="text-xl font-bold text-white">Save ~₹19.4 Lakhs</div>
            <p className="text-xs text-slate-400">Increasing your EMI by 5% each year as your salary increases reduces loan duration from 20 years to under 12 years.</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          6. Statutory Protection: No Foreclosure Penalties on Floating Rates
        </h2>
        <p>
          Many borrowers hesitate to prepay out of fear of banking fines. Under the <strong>RBI Master Circular on Advances – Loans and Advances, Regulatory Restrictions</strong>, Indian banks and housing finance corporations are <em>strictly prohibited from levying foreclosure charges or prepayment penalties</em> on floating-rate term loans granted to individual borrowers. You are legally entitled to prepay any amount, anytime, without penalty.
        </p>
        <p>
          To model your exact amortization curve, test prepayments, and print your monthly repayment schedule, use the{' '}
          <Link to="/loan-emi-calculator" className="text-amber-400 hover:underline font-semibold">
            FingTaj Home Loan EMI Amortization Calculator
          </Link>.
        </p>
      </section>
    </ArticleLayout>
  );
}

import React from 'react';
import ArticleLayout from '../../components/ArticleLayout';
import { Link } from 'react-router-dom';

export default function InflationErosionGuide() {
  return (
    <ArticleLayout
      title="Understanding Real vs Nominal Returns: How Inflation Stealthily Erodes Savings"
      subtitle="The Fisher Equation demystified: why an 7.5% bank fixed deposit can leave you poorer in purchasing power after tax, and how to protect long-term retirement capital."
      category="Macroeconomics & Inflation"
      readTime="8 min"
      publishedDate="October 2026"
      calculatorLink={{
        name: 'Inflation-Adjusted Return Calculator',
        path: '/inflation-adjusted-return-calculator',
        badge: 'Fisher Equation',
      }}
    >
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          1. The Money Illusion: Nominal Growth vs. Real Purchasing Power
        </h2>
        <p>
          In behavioral economics, Nobel laureate Irving Fisher identified what is widely known as <strong>"The Money Illusion"</strong>: the psychological tendency of people to think of wealth in terms of nominal face-value currency amounts (e.g., "I have ₹1 Crore in the bank!") rather than in terms of the actual basket of physical goods and services that currency can purchase.
        </p>
        <p>
          If your bank balance doubles over 12 years, but the cost of housing, healthcare, quality education, and food quadruples over the identical window, you are not twice as wealthy—you have experienced a <strong>50% reduction in real living standards</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          2. The Mathematical Foundation: The Exact Fisher Equation
        </h2>
        <p>
          While many financial columnists approximate real returns by simply subtracting inflation from nominal returns (<code className="bg-slate-900 px-1.5 py-0.5 rounded text-amber-400">r ≈ n - i</code>), this linear subtraction introduces significant errors over multi-year horizons or during elevated inflation regimes.
        </p>
        <p>
          The mathematically rigorous formula formulated by Irving Fisher is:
        </p>

        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-amber-300 text-sm overflow-x-auto">
          (1 + r_nominal) = (1 + r_real) × (1 + i_inflation)
        </div>

        <p>
          Solving for the true <strong>Real Rate of Return (r_real)</strong>:
        </p>

        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-amber-300 text-sm overflow-x-auto">
          r_real = [ (1 + r_nominal) / (1 + i_inflation) ] - 1
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          3. The Bank Fixed Deposit Shock: Negative Real Yields
        </h2>
        <p>
          Let us calculate what happens to a conservative saver in India who invests ₹10,00,000 into a 5-year Bank Fixed Deposit yielding <strong>7.25% p.a.</strong>, assuming an average Consumer Price Index (CPI) inflation rate of <strong>6.00%</strong> and a 30% personal income tax slab:
        </p>

        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 space-y-3 font-mono text-xs sm:text-sm">
          <div>Step 1: Gross Nominal Return = 7.25% p.a.</div>
          <div>Step 2: Section 194A Tax Outgo (30% slab + 4% cess) = 7.25% × 31.2% = 2.262% tax</div>
          <div>Step 3: Post-Tax Net Nominal Return = 7.25% - 2.262% = <strong>4.988% p.a.</strong></div>
          <div>Step 4: Real Return Calculation using Fisher Equation:</div>
          <div className="text-rose-400 font-bold pl-4">
            r_real = [(1 + 0.04988) / (1 + 0.06000)] - 1 = (1.04988 / 1.06) - 1 = -0.00955 (-0.955% per year!)
          </div>
        </div>

        <p>
          Even though the bank sends celebratory SMS alerts declaring steady interest credits, this investor is <strong>losing roughly 1% of their true purchasing power every single year</strong>! After 10 years, their accumulated capital buys significantly fewer groceries, petrol, and hospital visits than when they started.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          4. Headline CPI vs. Real Lifestyle Inflation in India
        </h2>
        <p>
          The official Indian Consumer Price Index (CPI) released by the Ministry of Statistics and Programme Implementation (MoSPI) tracks a broad national basket heavily weighted toward rural cereals, vegetables, and basic commodities (food weight is ~45.86%).
        </p>
        <p>
          For urban middle-class and affluent families, actual <strong>Lifestyle Inflation</strong> runs much higher than headline CPI:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
          <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg">
            <div className="text-[11px] font-mono text-amber-400">Healthcare / Medical</div>
            <div className="text-lg font-bold text-white mt-1">11% - 14% p.a.</div>
            <p className="text-[11px] text-slate-400">Hospital room rents, surgeries, and specialized diagnostics.</p>
          </div>
          <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg">
            <div className="text-[11px] font-mono text-amber-400">Higher Education</div>
            <div className="text-lg font-bold text-white mt-1">10% - 12% p.a.</div>
            <p className="text-[11px] text-slate-400">Private university degrees, engineering, and MBA fees.</p>
          </div>
          <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg">
            <div className="text-[11px] font-mono text-emerald-400">Prime Urban Housing</div>
            <div className="text-lg font-bold text-white mt-1">8% - 10% p.a.</div>
            <p className="text-[11px] text-slate-400">Metro residential rentals in Bengaluru, Mumbai, NCR.</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          5. Asset Classes That Beat Long-Term Inflation
        </h2>
        <p>
          To preserve and expand purchasing power across decades, a portfolio must maintain substantial exposure to assets that possess <strong>pricing power</strong>:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-300">
          <li>
            <strong>Diversified Equity Mutual Funds:</strong> Equities represent fractional ownership in productive corporations that pass rising input costs directly to consumers via higher product prices, historically yielding 12% to 14% nominal CAGR (~6% to 8% real return).
          </li>
          <li>
            <strong>Sovereign Gold Bonds (SGBs) / Gold ETFs:</strong> Precious metals historically track global monetary debasement over multi-century intervals.
          </li>
          <li>
            <strong>Commercial & Rental Real Estate:</strong> Long-term leases with contractual 5% to 7% annual rent escalation clauses.
          </li>
        </ul>
        <p>
          Model your future purchasing power, discount retirement milestones against inflation, and verify real CAGR with our{' '}
          <Link to="/inflation-adjusted-return-calculator" className="text-amber-400 hover:underline font-semibold">
            Real Inflation-Adjusted Return Calculator
          </Link>{' '}
          or test your fixed income yields in our{' '}
          <Link to="/fd-calculator" className="text-amber-400 hover:underline font-semibold">
            Fixed Deposit & TDS Calculator
          </Link>.
        </p>
      </section>
    </ArticleLayout>
  );
}

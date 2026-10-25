import React from 'react';
import ArticleLayout from '../../components/ArticleLayout';
import { Link } from 'react-router-dom';

export default function SipVsLumpSum() {
  return (
    <ArticleLayout
      title="SIP vs Lump Sum Investing: Rupee Cost Averaging, Market Volatility, and 20-Year Return Analysis"
      subtitle="A rigorous comparative analysis of systematic monthly investing versus one-time lump-sum capital deployment across bull, bear, and sideways equity market cycles."
      category="Wealth & Investments"
      readTime="9 min"
      publishedDate="October 2026"
      calculatorLink={{
        name: 'Systematic Investment Plan (SIP) Calculator',
        path: '/sip-calculator',
        badge: 'Annuity Due',
      }}
    >
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          1. The Fundamental Dilemma: Timing vs. Time in the Market
        </h2>
        <p>
          One of the most persistent debates in retail wealth management centers around capital deployment methodology: should an investor with available liquidity invest a single lump sum into equity mutual funds immediately, or stagger the allocation across monthly installments through a Systematic Investment Plan (SIP)?
        </p>
        <p>
          While conventional financial theory argues that lump-sum allocations mathematically outperform systematic investments in persistently upward-trending secular bull markets (because capital starts compounding earlier), real-world equity markets are characterized by severe drawdown regimes, cyclical drawdowns, and emotional behavioral pitfalls.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          2. The Mechanics of Rupee Cost Averaging (RCA)
        </h2>
        <p>
          A Systematic Investment Plan eliminates the psychological hazard of market timing through <strong>Rupee Cost Averaging</strong>. Under RCA, you commit a fixed rupee amount on a designated date each month rather than buying a fixed number of mutual fund units.
        </p>
        <p>
          Consider this simple demonstration across a volatile 4-month market cycle:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-slate-800 my-4">
            <thead className="bg-slate-900 text-slate-300">
              <tr>
                <th className="p-3 border-b border-slate-800">Month</th>
                <th className="p-3 border-b border-slate-800">Monthly Commitment</th>
                <th className="p-3 border-b border-slate-800">Mutual Fund NAV</th>
                <th className="p-3 border-b border-slate-800">Units Acquired</th>
                <th className="p-3 border-b border-slate-800">Cumulative Units</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              <tr>
                <td className="p-3">Month 1</td>
                <td className="p-3">₹10,000</td>
                <td className="p-3 font-mono">₹100</td>
                <td className="p-3 text-amber-400 font-semibold">100.00</td>
                <td className="p-3">100.00</td>
              </tr>
              <tr>
                <td className="p-3">Month 2 (Correction -25%)</td>
                <td className="p-3">₹10,000</td>
                <td className="p-3 font-mono text-rose-400">₹75</td>
                <td className="p-3 text-amber-400 font-semibold">133.33</td>
                <td className="p-3">233.33</td>
              </tr>
              <tr>
                <td className="p-3">Month 3 (Bear Market -50%)</td>
                <td className="p-3">₹10,000</td>
                <td className="p-3 font-mono text-rose-400">₹50</td>
                <td className="p-3 text-amber-400 font-semibold">200.00</td>
                <td className="p-3">433.33</td>
              </tr>
              <tr>
                <td className="p-3">Month 4 (Recovery)</td>
                <td className="p-3">₹10,000</td>
                <td className="p-3 font-mono text-emerald-400">₹100</td>
                <td className="p-3 text-amber-400 font-semibold">100.00</td>
                <td className="p-3 font-bold text-white">533.33</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 space-y-2 text-xs sm:text-sm">
          <div className="font-bold text-white">Outcome Comparison:</div>
          <div>Total Rupee Capital Invested: <strong>₹40,000</strong></div>
          <div>Total Units Procured: <strong>533.33 units</strong></div>
          <div>Effective Average Cost per Unit: ₹40,000 / 533.33 = <strong className="text-amber-300">₹75.00 per unit</strong></div>
          <div>Portfolio Value at Month 4 (NAV ₹100): 533.33 × ₹100 = <strong className="text-emerald-400">₹53,333 (+33.3% Absolute Return)</strong></div>
        </div>

        <p>
          Notice the striking counter-intuitive mathematical result: even though the NAV ended at the exact same ₹100 where it started, the SIP investor booked a <strong>+33.3% profit</strong> simply because market volatility allowed them to procure 200 units at the market bottom! A lump-sum investor who entered at Month 1 with ₹40,000 would have generated exactly <strong>0% return</strong> at Month 4.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          3. Empirical Historical Performance in Indian Equities (Nifty 50)
        </h2>
        <p>
          Historical backtesting of the Nifty 50 Total Return Index (TRI) over rolling 10-year and 15-year periods between 2000 and 2025 demonstrates two distinct behavioral realities:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-300">
          <li>
            <strong>Lump-Sum Superiority in Pure Bull Regimes:</strong> When entered at cyclical valuation lows (e.g., March 2009 or March 2020), lump sum achieves higher annualized CAGR because 100% of the capital is exposed to the compounding trajectory for the entire duration.
          </li>
          <li>
            <strong>SIP Elimination of Sequence of Returns Risk:</strong> If an investor deployed a lump sum at the market peak in January 2008 (Nifty PE &gt; 28), it took over 5 years just to break even. Conversely, an investor who commenced an SIP in January 2008 was heavily buying through the 2008–2009 financial crisis and enjoyed a 16%+ CAGR by 2014.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          4. When Should You Choose Each Approach?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
            <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider">Choose SIP If:</h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>• You receive a predictable monthly cash flow (salary or recurring professional income).</li>
              <li>• Market valuations (Nifty PE / Price-to-Book) are hovering in the high historical quartile.</li>
              <li>• You want to automate disciplined investing and completely remove emotional market timing anxiety.</li>
              <li>• You wish to leverage <Link to="/step-up-sip-calculator" className="text-amber-400 underline">annual step-up top-ups</Link> as your income expands.</li>
            </ul>
          </div>

          <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
            <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider">Choose Lump Sum (or STP) If:</h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>• You received an inheritance, annual bonus, property sale proceed, or ESOP liquidity event.</li>
              <li>• Equity markets have undergone a sharp valuation drawdown of 15% to 30% from recent highs.</li>
              <li>• Alternatively, park the lump sum in an ultra-short debt fund and execute a <strong>Systematic Transfer Plan (STP)</strong> into equity over 6 to 12 months.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          5. Statutory Tax Treatment Under Finance Act 2024
        </h2>
        <p>
          Remember that for tax computation under Section 112A, <strong>every individual SIP installment is treated as an independent investment tranche</strong> with its own holding period.
        </p>
        <p>
          If you run an SIP for 3 years and redeem all units today, only the units purchased more than 12 months ago qualify for Long-Term Capital Gains (LTCG) taxed at 12.5% on profits exceeding ₹1,25,000. Units procured within the last 12 months are categorized as Short-Term Capital Gains (STCG) and taxed at 20% under Section 111A.
        </p>
        <p>
          Simulate your own systematic investment scenarios using the{' '}
          <Link to="/sip-calculator" className="text-amber-400 hover:underline font-semibold">
            FingTaj SIP Wealth Calculator
          </Link>{' '}
          or measure your annualized compounding speed with our{' '}
          <Link to="/cagr-calculator" className="text-amber-400 hover:underline font-semibold">
            CAGR Calculator
          </Link>.
        </p>
      </section>
    </ArticleLayout>
  );
}

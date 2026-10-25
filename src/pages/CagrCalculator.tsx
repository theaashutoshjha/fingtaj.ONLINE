import React, { useState } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';
import { Link } from 'react-router-dom';

export default function CagrCalculator() {
  const [initialValue, setInitialValue] = useState<number>(500000);
  const [finalValue, setFinalValue] = useState<number>(1850000);
  const [years, setYears] = useState<number>(8.5);
  const [copied, setCopied] = useState<boolean>(false);

  // CAGR = (End / Start) ^ (1 / Years) - 1
  const absoluteReturn = initialValue > 0 ? ((finalValue - initialValue) / initialValue) * 100 : 0;
  const cagr = initialValue > 0 && years > 0 ? (Math.pow(finalValue / initialValue, 1 / years) - 1) * 100 : 0;
  const totalGain = finalValue - initialValue;

  const formatINR = (val: number) => '₹' + Math.round(val).toLocaleString('en-IN');

  const copyResults = () => {
    const text = `CAGR Analysis: Initial ${formatINR(initialValue)} to Final ${formatINR(finalValue)} over ${years} yrs => Absolute Return: ${absoluteReturn.toFixed(2)}%, Annualized CAGR: ${cagr.toFixed(2)}%, Net Gain: ${formatINR(totalGain)}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <CalculatorLayout
      category="Wealth & Performance"
      badge="Geometric Mean Return Engine"
      title="CAGR & Absolute Return Calculator"
      subtitle="Determine the true Compound Annual Growth Rate and point-to-point geometric performance across stocks, mutual funds, real estate, and portfolio assets."
      formula="CAGR = ( Final_Value / Initial_Value )^( 1 / n ) - 1"
      whoItsFor={
        <>
          <p>
            <strong>What It Computes:</strong> This tool calculates the smoothed annualized geometric growth rate that an investment would have required to expand from its initial entry price to its terminal valuation over an arbitrary timeframe, alongside the total absolute percentage return and net rupee profit.
          </p>
          <p>
            <strong>Target Audience:</strong> Essential for equity investors, property owners, private equity founders, and mutual fund allocators seeking to normalize fluctuating, volatile returns into an apples-to-apples annual performance figure. It cuts through misleading "multi-bagger" absolute claims to reveal whether an asset actually outperformed benchmark indices or sovereign fixed deposits.
          </p>
        </>
      }
      mathematicalPrinciples={
        <>
          <p>
            Financial markets rarely move in a steady straight line. An equity fund might surge 35% in year one, crash 18% in year two, and gain 14% in year three. Standard arithmetic averages (<code className="bg-slate-900 px-1 rounded text-amber-300">(35 - 18 + 14) / 3 = 10.33%</code>) fundamentally distort reality because investment returns compound multiplicatively rather than additively.
          </p>
          <p>
            The <strong>Compound Annual Growth Rate (CAGR)</strong> represents the geometric mean of an investment. It answers: <em>"If this portfolio had grown at a perfectly steady, constant annual interest rate each year, what single rate would connect the starting value to the terminal value?"</em>
          </p>
          <p>
            By taking the <code className="bg-slate-900 px-1 rounded text-amber-300">n-th root</code> of the terminal-to-initial capital ratio, CAGR completely eliminates the distortive noise of intermediate peak-and-trough volatility.
          </p>
        </>
      }
      formulaExplanation={
        <>
          <p>
            To demystify the formula into straightforward mathematical operations:
          </p>
          <div className="font-mono text-amber-200 bg-slate-950 p-3 rounded border border-slate-800 text-xs space-y-1">
            <div>1. Compute Growth Ratio = Final Valuation / Initial Capital</div>
            <div>2. Apply Time Exponent = Ratio raised to the power of (1 / Tenure in Years)</div>
            <div>3. Subtract 1 to isolate the net fractional rate, then multiply by 100 for percentage.</div>
          </div>
          <p>
            Unlike simple interest, the fraction <code className="text-amber-300">1 / n</code> accounts for the exponential acceleration of past interest generating its own subsequent interest.
          </p>
        </>
      }
      variables={[
        { variable: 'Final_Value', name: 'Terminal Realized Valuation', definition: 'The current market value or final sale consideration of the asset net of liquidation brokerage.' },
        { variable: 'Initial_Value', name: 'Original Cost of Acquisition', definition: 'The initial lump-sum capital committed at the inception timestamp.' },
        { variable: 'n', name: 'Holding Duration (Years)', definition: 'Exact duration of ownership expressed in calendar years (e.g., 8.5 years for 8 years and 6 months).' },
        { variable: 'CAGR', name: 'Compound Annual Growth Rate', definition: 'The equivalent constant geometric annual compounding rate.' },
      ]}
      workedExample={
        <>
          <div className="font-semibold text-white mb-1">
            Real-World Scenario: Measuring a Real Estate or Equity Folio Growth from ₹5,00,000 to ₹18,50,000 in 8.5 Years
          </div>
          <p className="text-xs text-slate-300">
            Suppose an investor invested ₹5,00,000 into a diversified equity fund or residential land plot, selling it 8.5 years later for ₹18,50,000:
          </p>
          <div className="space-y-1.5 font-mono text-xs bg-slate-900/60 p-3 rounded border border-slate-800/80 mt-2">
            <div>• Initial Purchase Cost: ₹5,00,000</div>
            <div>• Final Sale Value: ₹18,50,000</div>
            <div>• Absolute Net Profit: ₹18,50,000 - ₹5,00,000 = ₹13,50,000</div>
            <div>• Absolute Return Percentage: (13,50,000 / 5,00,000) × 100 = <strong className="text-emerald-400">+270.00% ("3.7x Bag")</strong></div>
            <div className="pt-2 border-t border-slate-800 text-slate-300">
              • Step 1: Ratio = 18,50,000 / 5,00,000 = 3.7000
            </div>
            <div>• Step 2: Time Power = 1 / 8.5 ≈ 0.117647</div>
            <div>• Step 3: (3.7000)^0.117647 ≈ 1.1661</div>
            <div className="text-amber-300 font-extrabold text-sm">
              • Annualized CAGR: (1.1661 - 1) × 100 = 16.61% per annum
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            <strong>Interpretation:</strong> While "+270%" sounds astronomical in promotional media, the true annualized CAGR is <strong>16.61%</strong>. This is a very respectable equity return that comfortably beat both the Nifty 50 TRI (~13%) and fixed deposits (~7%), but it puts the gain in clear annual context.
          </p>
        </>
      }
      howToReadResults={
        <>
          <p>
            <strong>CAGR vs. Inflation & Fixed Income:</strong> Compare your calculated CAGR against the risk-free rate (7% bank FD or 7.1% PPF) and consumer inflation (6% CPI). If an illiquid investment returned only 8% CAGR over 10 years, you were barely compensated for liquidity risk and equity drawdown anxiety.
          </p>
          <p>
            <strong>CAGR vs. XIRR Limitation:</strong> Note that CAGR assumes a <em>single lump-sum in and a single lump-sum out</em>. If you invested via multiple installments (SIP) or withdrew dividends along the way, you must evaluate Extended Internal Rate of Return (XIRR) rather than simple CAGR.
          </p>
        </>
      }
      statutoryNotes={
        <>
          <p>
            <strong>SEBI Performance Advertising Regulations:</strong> Under Securities and Exchange Board of India (SEBI) Mutual Fund Regulations, fund houses are strictly mandated to publish point-to-point performance in terms of CAGR for all periods exceeding 1 year (typically 1-year, 3-year, 5-year, and since inception). Performance for periods under 1 year can only be expressed as absolute returns.
          </p>
          <p>
            <strong>Capital Gains Benchmark:</strong> Long-term capital gains on assets held beyond statutory thresholds are subject to Section 112 / 112A taxation. Knowing your CAGR allows you to calculate post-tax net real CAGR.
          </p>
        </>
      }
      faqs={[
        {
          question: 'What is the key difference between Absolute Return and CAGR?',
          answer: 'Absolute return measures total capital growth from start to finish with zero consideration of how many years elapsed (e.g., doubling your money is +100% absolute return). CAGR factors in time: doubling in 3 years is a spectacular 26% CAGR, whereas doubling over 12 years is a modest 6.0% CAGR (barely matching inflation).',
        },
        {
          question: 'Can CAGR be calculated for negative returns or losses?',
          answer: 'Yes. If your investment declined from ₹10 Lakhs to ₹6 Lakhs over 3 years, the formula yields a negative CAGR of -15.66% per year, showing the steady annualized rate of capital impairment.',
        },
        {
          question: 'Why does SEBI mandate CAGR instead of simple average returns?',
          answer: 'Simple arithmetic averages hide catastrophic compounding drawdowns. For example, losing 50% in Year 1 and gaining 50% in Year 2 produces a simple average of 0%, but an investor with ₹100 is left with ₹75 (a real loss of -25%). CAGR accurately reflects this terminal loss.',
        },
        {
          question: 'When should I use XIRR instead of CAGR?',
          answer: 'Use CAGR when evaluating a single lump-sum deposit and redemption. If you made multiple periodic contributions, dividend reinvestments, or staggered partial withdrawals at different dates, you must use XIRR (Extended Internal Rate of Return).',
        },
        {
          question: 'How do I compare real estate CAGR against equity mutual funds?',
          answer: 'When computing real estate CAGR, make sure your initial value includes stamp duty, registration fees, and brokerage, and subtract maintenance expenses, property taxes, and final sale brokerage from your terminal price to calculate true net CAGR.',
        },
      ]}
      relatedArticles={[
        {
          title: 'SIP vs Lump Sum Investing: Rupee Cost Averaging and Market Cycles',
          path: '/articles/sip-vs-lump-sum-investing',
          readTime: '9 min',
          summary: 'A rigorous comparative analysis of systematic monthly investing versus one-time lump-sum capital deployment.',
        },
        {
          title: 'Understanding Real vs Nominal Returns: How Inflation Stealthily Erodes Savings',
          path: '/articles/understanding-real-vs-nominal-returns',
          readTime: '8 min',
          summary: 'The Fisher Equation demystified: why high nominal returns can leave you poorer after tax and CPI inflation.',
        },
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label htmlFor="cagr-start-input" className="font-medium text-slate-200">Initial Investment Value</label>
              <span className="font-mono text-amber-400 font-semibold">{formatINR(initialValue)}</span>
            </div>
            <input
              id="cagr-start-input"
              type="range"
              min="10000"
              max="10000000"
              step="10000"
              value={initialValue}
              onChange={(e) => setInitialValue(Number(e.target.value))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-500">
              <span>₹10,000</span>
              <span>₹50 Lakh</span>
              <span>₹1 Crore</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label htmlFor="cagr-end-input" className="font-medium text-slate-200">Final (Terminal) Value</label>
              <span className="font-mono text-emerald-400 font-semibold">{formatINR(finalValue)}</span>
            </div>
            <input
              id="cagr-end-input"
              type="range"
              min="10000"
              max="25000000"
              step="25000"
              value={finalValue}
              onChange={(e) => setFinalValue(Number(e.target.value))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-500">
              <span>₹10,000</span>
              <span>₹1 Crore</span>
              <span>₹2.5 Crore</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label htmlFor="cagr-years-input" className="font-medium text-slate-200">Investment Duration (Years)</label>
              <span className="font-mono text-amber-400 font-semibold">{years.toFixed(1)} Years</span>
            </div>
            <input
              id="cagr-years-input"
              type="range"
              min="0.5"
              max="35"
              step="0.5"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-500">
              <span>6 Months (0.5y)</span>
              <span>15 Years</span>
              <span>35 Years</span>
            </div>
          </div>
        </div>

        {/* Output Panel */}
        <div className="lg:col-span-6 bg-slate-950 border border-slate-800 rounded-lg p-6 flex flex-col justify-between space-y-6 min-h-[260px]">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Net Capital Gain / Profit</span>
              <span className={`text-lg font-mono font-bold tabular-nums ${totalGain >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                {totalGain >= 0 ? '+' : ''}{formatINR(totalGain)}
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Absolute Return</span>
              <span className={`text-lg font-mono font-bold tabular-nums ${absoluteReturn >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                {absoluteReturn >= 0 ? '+' : ''}{absoluteReturn.toFixed(2)}%
              </span>
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="text-sm font-semibold uppercase tracking-wider text-amber-400">Annualized CAGR</span>
              <span className={`text-2xl font-mono font-extrabold tabular-nums ${cagr >= 0 ? 'text-amber-300' : 'text-rose-400'}`}>
                {cagr >= 0 ? '+' : ''}{cagr.toFixed(2)}% p.a.
              </span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={copyResults}
              className="w-full py-2.5 px-4 text-xs font-semibold text-slate-200 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              {copied ? '✓ Copied to Clipboard!' : 'Copy CAGR Summary'}
            </button>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}

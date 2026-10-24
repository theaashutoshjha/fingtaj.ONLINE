import React, { useState } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';

export default function SipCalculator() {
  const [monthly, setMonthly] = useState<number>(25000);
  const [rate, setRate] = useState<number>(12.5);
  const [years, setYears] = useState<number>(15);
  const [copied, setCopied] = useState<boolean>(false);

  // M = P * [ ((1+i)^n - 1) / i ] * (1+i)
  const i = rate / (12 * 100);
  const n = years * 12;
  const totalInvested = monthly * n;
  const maturity = monthly * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
  const capitalGains = maturity - totalInvested;

  const formatINR = (val: number) => '₹' + Math.round(val).toLocaleString('en-IN');

  const copyResults = () => {
    const text = `SIP Calculation: Monthly ₹${monthly}, Rate ${rate}%, Tenure ${years} yrs => Invested: ${formatINR(totalInvested)}, Gains: ${formatINR(capitalGains)}, Maturity: ${formatINR(maturity)}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <CalculatorLayout
      category="Wealth & Investments"
      badge="Annuity Due Model"
      title="Systematic Investment Plan (SIP) Calculator"
      subtitle="Model compounding capital gains and maturity corpus from disciplined monthly mutual fund investments under Rupee Cost Averaging."
      formula="M = P × [ { (1 + i)^n - 1 } / i ] × (1 + i)"
      mathematicalPrinciples={
        <>
          <p>
            A Systematic Investment Plan operates mathematically as an annuity due, wherein predetermined periodic installments are invested at the onset of each compounding cycle rather than in arrears. Over multi-year horizons, the non-linear curvature of compounding yields disproportionate returns relative to the invested principal.
          </p>
          <p>
            By allocating funds systematically on a monthly cadence, investors benefit from Rupee Cost Averaging, dampening the volatility of cyclical equity markets by procuring more mutual fund units during asset market contractions and fewer units during market expansions.
          </p>
        </>
      }
      variables={[
        { variable: 'M', name: 'Terminal Accumulated Corpus', definition: 'The terminal maturity corpus accumulated at redemption, combining cumulative principal contributions and capital gains.' },
        { variable: 'P', name: 'Periodic Monthly Installment', definition: 'Fixed contribution debited monthly via National Automated Clearing House (NACH) mandate.' },
        { variable: 'i', name: 'Periodic Fractional Interest Rate', definition: 'The expected nominal annual compound growth rate divided by 12 months: i = r / (12 × 100).' },
        { variable: 'n', name: 'Total Number of Compounding Periods', definition: 'Total monthly installments across the investment lifecycle (Years × 12).' },
      ]}
      statutoryNotes={
        <>
          <p><strong>Direct Equity & Mutual Fund Statutory Rules:</strong> Under the Indian Finance Act 2024 revisions, equity mutual fund units held for more than 12 months qualify as Long-Term Capital Gains (LTCG) and are taxed at 12.5% on profits exceeding the statutory annual threshold of ₹1,25,000 under Section 112A.</p>
          <p>Units redeemed under 12 months are classified as Short-Term Capital Gains (STCG) and taxed at 20% under Section 111A.</p>
        </>
      }
      faqs={[
        {
          question: 'How does Rupee Cost Averaging optimize SIP returns compared to lump-sum allocations?',
          answer: 'Rupee Cost Averaging automatically executes contrarian unit acquisition without requiring active market timing. When net asset values (NAVs) compress during corrections, a constant rupee commitment procures higher units, directly lowering the volume-weighted average acquisition cost per mutual fund unit over multi-year cycles.',
        },
        {
          question: 'What is the statutory tax treatment of equity mutual fund SIP redemptions in India?',
          answer: 'Under the Indian Finance Act 2024 revisions, equity mutual fund units held for more than 12 months qualify as Long-Term Capital Gains (LTCG) and are taxed at 12.5% on profits exceeding ₹1,25,000 per financial year under Section 112A. Units redeemed within 12 months are taxed at 20% under Section 111A.',
        },
        {
          question: 'Why does the annuity due formula multiply the terminal sum by (1 + i)?',
          answer: 'In an SIP, the debit occurs on the agreed date at the beginning of the monthly cycle, granting that individual installment one full month of compounding interest before subsequent cycles begin. The additional (1 + i) factor rigorously adjusts for this lead compounding interval.',
        },
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label htmlFor="sip-monthly-input" className="font-medium text-slate-200">Monthly Investment Amount</label>
              <span className="font-mono text-cyan-400 font-semibold">{formatINR(monthly)}</span>
            </div>
            <input
              id="sip-monthly-input"
              type="range"
              min="500"
              max="200000"
              step="500"
              value={monthly}
              onChange={(e) => setMonthly(Number(e.target.value))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-500">
              <span>₹500</span>
              <span>₹1,00,000</span>
              <span>₹2,00,000</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label htmlFor="sip-rate-input" className="font-medium text-slate-200">Expected Annual CAGR (%)</label>
              <span className="font-mono text-cyan-400 font-semibold">{rate.toFixed(1)}%</span>
            </div>
            <input
              id="sip-rate-input"
              type="range"
              min="1"
              max="30"
              step="0.5"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-500">
              <span>1%</span>
              <span>12%</span>
              <span>30%</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label htmlFor="sip-years-input" className="font-medium text-slate-200">Investment Tenure (Years)</label>
              <span className="font-mono text-cyan-400 font-semibold">{years} Years</span>
            </div>
            <input
              id="sip-years-input"
              type="range"
              min="1"
              max="40"
              step="1"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-500">
              <span>1 Year</span>
              <span>15 Years</span>
              <span>40 Years</span>
            </div>
          </div>
        </div>

        {/* Output Panel with min-h-[160px] to prevent CLS */}
        <div className="lg:col-span-6 bg-slate-950 border border-slate-800 rounded-lg p-6 flex flex-col justify-between space-y-6 min-h-[220px]">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Capital Invested</span>
              <span className="text-lg font-mono font-bold text-slate-200 tabular-nums">{formatINR(totalInvested)}</span>
            </div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Estimated Capital Gains</span>
              <span className="text-lg font-mono font-bold text-emerald-400 tabular-nums">{formatINR(capitalGains)}</span>
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="text-sm font-semibold uppercase tracking-wider text-cyan-400">Estimated Maturity Corpus</span>
              <span className="text-2xl font-mono font-extrabold text-cyan-300 tabular-nums">{formatINR(maturity)}</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={copyResults}
              className="w-full py-2.5 px-4 text-xs font-semibold text-slate-200 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              {copied ? '✓ Copied to Clipboard!' : 'Copy Calculation Summary'}
            </button>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}

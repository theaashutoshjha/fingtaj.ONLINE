import React, { useState } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';
import { Link } from 'react-router-dom';

export default function FdCalculator() {
  const [principal, setPrincipal] = useState<number>(500000);
  const [rate, setRate] = useState<number>(7.25);
  const [years, setYears] = useState<number>(3);
  const [isSenior, setIsSenior] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  // Quarterly compounding: A = P * (1 + r/4)^(4*t)
  const r = rate / 100;
  const maturity = principal * Math.pow(1 + (r / 4), 4 * years);
  const totalInterest = maturity - principal;
  const annualizedInterest = totalInterest / years;
  const tdsLimit = isSenior ? 50000 : 40000;
  const tdsExceeded = annualizedInterest > tdsLimit;

  const formatINR = (val: number) => '₹' + Math.round(val).toLocaleString('en-IN');

  const copyResults = () => {
    const text = `Fixed Deposit: Principal ${formatINR(principal)} @ ${rate}% for ${years} yrs => Interest: ${formatINR(totalInterest)}, Maturity: ${formatINR(maturity)}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <CalculatorLayout
      category="Banking & Fixed Income"
      badge="Section 194A TDS Rules"
      title="Fixed Deposit (FD) / Cumulative Term Deposit Calculator"
      subtitle="Compute interest yields, terminal maturity amounts, and Section 194A TDS thresholds under standard Indian quarterly compounding conventions."
      formula="A = P × [ 1 + (r / 4) ]^(4 × t)"
      whoItsFor={
        <>
          <p>
            <strong>What It Computes:</strong> This banking calculator models the quarterly compounding interest, gross maturity proceeds, annualized interest outgo, and Section 194A Tax Deducted at Source (TDS) threshold triggers on cumulative term deposits booked with scheduled commercial, public, or private sector banks in India.
          </p>
          <p>
            <strong>Target Audience:</strong> Essential for senior citizens managing fixed-income living portfolios, risk-averse savers safeguarding emergency contingency capital, and short-term goal planners (1 to 5 years) requiring guaranteed nominal capital protection under DICGC sovereign insurance.
          </p>
        </>
      }
      mathematicalPrinciples={
        <>
          <p>
            Scheduled commercial banks in India (governed by Reserve Bank of India Master Directions) compute interest on domestic term deposits exceeding six months using quarterly compound interest intervals.
          </p>
          <p>
            Under Section 194A of the Income Tax Act, banking institutions are statutorily mandated to deduct 10% Tax Deducted at Source (TDS) if total interest credited across all branches of the bank exceeds ₹40,000 per financial year for regular assessees, or ₹50,000 for senior citizens (aged 60 years or above).
          </p>
        </>
      }
      formulaExplanation={
        <>
          <p>
            In Indian commercial banking practice:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-300">
            <li><strong>P:</strong> The initial lump-sum principal booked in the fixed deposit account.</li>
            <li><strong>r / 4:</strong> The annual nominal interest rate divided by 4 quarters: <code className="text-amber-300">r / 400</code>. For 7.25%, the quarterly rate is <code className="text-amber-300">0.018125</code>.</li>
            <li><strong>4 × t:</strong> Total compounding quarters across the deposit tenure. For 3 years, interest compounds exactly <code className="text-amber-300">12 times</code>.</li>
            <li><strong>Cumulative vs Non-Cumulative:</strong> Cumulative FDs reinvest interest every quarter, creating compounding growth. Non-cumulative FDs pay simple monthly or quarterly interest into your savings account.</li>
          </ul>
        </>
      }
      variables={[
        { variable: 'A', name: 'Terminal Maturity Corpus', definition: 'Compounded principal plus accrued interest at completion of the deposit period.' },
        { variable: 'P', name: 'Initial Term Principal', definition: 'Lump-sum capital deposited with the banking institution.' },
        { variable: 'r', name: 'Annual Contractual Interest Rate', definition: 'Nominal percentage interest agreed upon account booking.' },
        { variable: 't', name: 'Duration in Years', definition: 'Deposit tenure expressed in years or fractional years.' },
      ]}
      workedExample={
        <>
          <div className="font-semibold text-white mb-1">
            Real-World Scenario: ₹5,00,000 Deposited for 3 Years at 7.25% p.a. (Quarterly Compounding)
          </div>
          <p className="text-xs text-slate-300">
            Let us calculate the returns for a regular individual depositor:
          </p>
          <div className="space-y-1.5 font-mono text-xs bg-slate-900/60 p-3 rounded border border-slate-800/80 mt-2">
            <div>• Principal Deposit (P): ₹5,00,000</div>
            <div>• Annual Interest Rate (r): 7.25% p.a.</div>
            <div>• Compounding Quarters: 4 × 3 = 12 Quarters</div>
            <div>• Quarterly Rate: 7.25 / 400 = 0.018125</div>
            <div>• Compound Factor: (1 + 0.018125)^12 ≈ 1.24036</div>
            <div className="text-amber-300 font-bold">• Terminal Maturity Value (A): ₹5,00,000 × 1.24036 = ₹6,20,180</div>
            <div className="text-emerald-400 font-bold">• Total Interest Accrued: ₹6,20,180 - ₹5,00,000 = ₹1,20,180</div>
            <div className="text-amber-400">• Annualized Average Interest: ₹1,20,180 / 3 = ₹40,060 / Year</div>
            <div className="text-rose-400 font-semibold">• Section 194A TDS: Exceeds ₹40k limit! 10% TDS (₹4,006/yr) triggered.</div>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            <strong>Key Insight:</strong> Quarterly compounding produces <strong>₹1,20,180 in interest</strong>, compared to ₹1,08,750 under simple interest (+₹11,430 bonus compounding yield).
          </p>
        </>
      }
      howToReadResults={
        <>
          <p>
            <strong>Post-Tax Yield Reality:</strong> Remember that bank FD interest is fully taxable at your marginal slab rate under both New and Old Tax Regimes. If you are in the 30% slab, your 7.25% nominal FD yields an effective post-tax return of only <strong>~5.0%</strong>, which trails headline inflation.
          </p>
          <p>
            <strong>DICGC ₹5 Lakh Safety Limit:</strong> The Deposit Insurance and Credit Guarantee Corporation (DICGC) insures bank deposits up to ₹5,00,000 per depositor per bank (principal + interest). For deposits exceeding ₹15–20 Lakhs, split capital across multiple scheduled commercial banks.
          </p>
        </>
      }
      statutoryNotes={
        <>
          <p><strong>Section 194A Withholding:</strong> Resident assessees with nil taxable income can avert TDS deduction by submitting statutory Form 15G (below 60 years) or Form 15H (senior citizens) at the beginning of each financial year.</p>
        </>
      }
      faqs={[
        {
          question: 'How can taxpayers avert mandatory TDS on bank term deposits?',
          answer: 'Eligible resident individuals whose total calculated tax liability on estimated total income is nil may execute and furnish Form 15G (for individuals below 60 years) or Form 15H (for senior citizens aged 60 and above) at the beginning of each financial year to prevent withholding.',
        },
        {
          question: 'What penalty applies to premature liquidation of a fixed deposit?',
          answer: 'Per standard commercial banking schedule covenants, premature withdrawal typically attracts a 0.50% to 1.00% penal interest rate cut. The effective interest paid corresponds to the contractual rate applicable for the actual period the deposit remained with the bank, minus the penal haircut.',
        },
        {
          question: 'Is FD interest taxable on accrual basis or upon receipt at maturity?',
          answer: 'Under Section 145 of the Income Tax Act, interest on cumulative fixed deposits must be disclosed and taxed annually on an accrual basis in accordance with the assessee regular method of accounting and Annual Information Statement (AIS) records.',
        },
        {
          question: 'Do senior citizens receive higher FD interest rates in India?',
          answer: 'Yes. Most Indian commercial banks provide an additional 0.50% interest rate premium for senior citizens (aged 60+) and up to 0.75% to 0.80% for super senior citizens (aged 80+) on domestic term deposits.',
        },
        {
          question: 'What is a 5-year Tax Saver Fixed Deposit?',
          answer: 'A Tax Saver FD has a statutory 5-year lock-in period with zero premature liquidation or loan facility. Deposits qualify for deduction up to ₹1,50,000 under Section 80C under the Old Tax Regime, but interest earned remains fully taxable.',
        },
      ]}
      relatedArticles={[
        {
          title: 'Understanding Real vs Nominal Returns: How Inflation Stealthily Erodes Savings',
          path: '/articles/understanding-real-vs-nominal-returns',
          readTime: '8 min',
          summary: 'The Fisher Equation demystified: why an 7.5% bank fixed deposit can leave you poorer in purchasing power after tax.',
        },
        {
          title: 'PPF Rules & Interest Calculation Guide: The 5th Day Rule and Tax-Free Compounding',
          path: '/articles/ppf-rules-interest-calculation-guide',
          readTime: '8 min',
          summary: 'Compare taxable bank FDs against 100% tax-free Public Provident Fund sovereign compounding.',
        },
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label htmlFor="fd-amount-input" className="font-medium text-slate-200">Deposit Amount (₹)</label>
              <span className="font-mono text-amber-400 font-semibold">{formatINR(principal)}</span>
            </div>
            <input
              id="fd-amount-input"
              type="range"
              min="10000"
              max="10000000"
              step="10000"
              value={principal}
              onChange={(e) => setPrincipal(Number(e.target.value))}
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
              <label htmlFor="fd-rate-input" className="font-medium text-slate-200">Interest Rate (%)</label>
              <span className="font-mono text-amber-400 font-semibold">{rate.toFixed(2)}%</span>
            </div>
            <input
              id="fd-rate-input"
              type="range"
              min="3"
              max="12"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-500">
              <span>3%</span>
              <span>7.25%</span>
              <span>12%</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <label htmlFor="fd-years-input" className="font-medium text-slate-200">Tenure (Years)</label>
                <span className="font-mono text-amber-400 font-semibold">{years} Years</span>
              </div>
              <input
                id="fd-years-input"
                type="range"
                min="1"
                max="10"
                step="0.5"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="fd-citizen-select" className="text-sm font-medium text-slate-200 block">Depositor Category</label>
              <select
                id="fd-citizen-select"
                value={isSenior ? 'senior' : 'regular'}
                onChange={(e) => setIsSenior(e.target.value === 'senior')}
                className="w-full bg-slate-950 border border-slate-700 text-slate-200 rounded-lg px-3 py-2 text-sm focus:border-amber-500 focus:outline-none"
              >
                <option value="regular">Regular Citizen (TDS threshold ₹40k)</option>
                <option value="senior">Senior Citizen 60+ (TDS threshold ₹50k)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 bg-slate-950 border border-slate-800 rounded-lg p-6 flex flex-col justify-between space-y-6 min-h-[220px]">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Principal Deposit</span>
              <span className="text-lg font-mono font-bold text-slate-200 tabular-nums">{formatINR(principal)}</span>
            </div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Total Cumulative Interest</span>
              <span className="text-lg font-mono font-bold text-emerald-400 tabular-nums">{formatINR(totalInterest)}</span>
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="text-sm font-semibold uppercase tracking-wider text-amber-400">Terminal Maturity Value</span>
              <span className="text-2xl font-mono font-extrabold text-amber-300 tabular-nums">{formatINR(maturity)}</span>
            </div>

            {tdsExceeded && (
              <div className="p-2.5 rounded bg-amber-950/40 border border-amber-800/60 text-xs text-amber-300">
                ⚠️ Annual interest (~{formatINR(annualizedInterest)}/yr) exceeds ₹{tdsLimit / 1000}k threshold. Bank will deduct 10% TDS under Section 194A unless Form 15G/15H is submitted.
              </div>
            )}
          </div>

          <div className="pt-2">
            <button
              onClick={copyResults}
              className="w-full py-2.5 px-4 text-xs font-semibold text-slate-200 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              {copied ? '✓ Copied to Clipboard!' : 'Copy FD Calculation'}
            </button>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}

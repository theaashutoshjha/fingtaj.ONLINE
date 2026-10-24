import React, { useState } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';

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
      variables={[
        { variable: 'A', name: 'Terminal Maturity Corpus', definition: 'Compounded principal plus accrued interest at completion of the deposit period.' },
        { variable: 'P', name: 'Initial Term Principal', definition: 'Lump-sum capital deposited with the banking institution.' },
        { variable: 'r', name: 'Annual Contractual Interest Rate', definition: 'Nominal percentage interest agreed upon account booking.' },
        { variable: 't', name: 'Duration in Years', definition: 'Deposit tenure expressed in years or fractional years.' },
      ]}
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
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label htmlFor="fd-amount-input" className="font-medium text-slate-200">Deposit Amount (₹)</label>
              <span className="font-mono text-cyan-400 font-semibold">{formatINR(principal)}</span>
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
              <span className="font-mono text-cyan-400 font-semibold">{rate.toFixed(2)}%</span>
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
                <span className="font-mono text-cyan-400 font-semibold">{years} Years</span>
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
                className="w-full bg-slate-950 border border-slate-700 text-slate-200 rounded-lg px-3 py-2 text-sm focus:border-cyan-500 focus:outline-none"
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
              <span className="text-sm font-semibold uppercase tracking-wider text-cyan-400">Terminal Maturity Value</span>
              <span className="text-2xl font-mono font-extrabold text-cyan-300 tabular-nums">{formatINR(maturity)}</span>
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

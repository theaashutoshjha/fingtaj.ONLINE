import React, { useState } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';
import { Link } from 'react-router-dom';

export default function RdCalculator() {
  const [monthlyDeposit, setMonthlyDeposit] = useState<number>(10000);
  const [rate, setRate] = useState<number>(7.0);
  const [months, setMonths] = useState<number>(36);
  const [copied, setCopied] = useState<boolean>(false);

  // Indian Banks' Association (IBA) & RBI formula for Recurring Deposit (quarterly compounding):
  // M = P * [ (1 + i)^n - 1 ] / [ 1 - (1 + i)^(-1/3) ]
  // where i = r / 400, n = quarters = months / 3
  const i = rate / 400;
  const n = months / 3;
  const maturity = monthlyDeposit * ((Math.pow(1 + i, n) - 1) / (1 - Math.pow(1 + i, -1 / 3)));
  const totalInvested = monthlyDeposit * months;
  const totalInterest = maturity - totalInvested;

  // Section 194A TDS Threshold check: ₹40,000 / financial year for general, ₹50,000 for senior citizens
  const annualInterestEstimated = totalInterest / (months / 12);
  const tdsApplicable = annualInterestEstimated > 40000;

  const formatINR = (val: number) => '₹' + Math.round(val).toLocaleString('en-IN');

  const copyResults = () => {
    const text = `Recurring Deposit (RD) Summary: Monthly ₹${monthlyDeposit}, Rate ${rate}%, Tenure ${months} mos => Total Deposited: ${formatINR(totalInvested)}, Interest Earned: ${formatINR(totalInterest)}, Maturity: ${formatINR(maturity)}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <CalculatorLayout
      category="Banking & Fixed Income"
      badge="IBA Quarterly Compounding"
      title="Recurring Deposit (RD) Calculator"
      subtitle="Compute maturity proceeds, accrued quarterly compound interest, and Section 194A TDS implications on monthly bank term deposits."
      formula="M = P × [ { (1 + i)^n - 1 } / { 1 - (1 + i)^(-1/3) } ]"
      whoItsFor={
        <>
          <p>
            <strong>What It Computes:</strong> This tool computes the terminal maturity value and cumulative interest earned on a bank Recurring Deposit (RD) in India, adhering strictly to the quarterly compounding convention mandated by the Indian Banks' Association (IBA) and Reserve Bank of India (RBI).
          </p>
          <p>
            <strong>Target Audience:</strong> Tailored for disciplined monthly savers, parents budgeting for upcoming school fees, and conservative investors building guaranteed emergency reserves who prefer guaranteed sovereign-insured capital preservation over market-linked volatility.
          </p>
        </>
      }
      mathematicalPrinciples={
        <>
          <p>
            In Indian commercial banking, Recurring Deposits do not compound on a simple monthly or annual basis. Under the <strong>RBI Master Direction – Reserve Bank of India (Interest Rate on Deposits) Directions</strong>, interest on term deposits of 6 months and above must be calculated and compounded on a <strong>quarterly basis</strong> (every 3 calendar months).
          </p>
          <p>
            Because installments are deposited monthly while compounding occurs quarterly, each monthly tranche is invested for a fractional compounding exponent. The IBA standardized this closed-form mathematical expression:
          </p>
          <div className="bg-slate-950 p-3 rounded font-mono text-amber-300 text-xs border border-slate-800">
            M = P × [ (1 + i)^n - 1 ] / [ 1 - (1 + i)^(-1/3) ]
          </div>
          <p>
            Here, the term <code className="bg-slate-900 px-1 rounded text-amber-300">(1 + i)^(-1/3)</code> accounts for the exact 1/3rd fraction of a quarter elapsed between successive monthly installments.
          </p>
        </>
      }
      formulaExplanation={
        <>
          <p>
            To understand the operational mechanics:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-300">
            <li><strong>P:</strong> The fixed monthly deposit debited from your savings account.</li>
            <li><strong>i = r / 400:</strong> The annual nominal interest rate divided by 4 quarters (and 100). For 7%, <code className="text-amber-300">i = 0.0175</code>.</li>
            <li><strong>n = months / 3:</strong> The total duration expressed in full and fractional quarters. For 36 months, <code className="text-amber-300">n = 12 quarters</code>.</li>
            <li><strong>Denominator factor:</strong> Converts discrete monthly inflows into their equivalent quarterly compounded stream.</li>
          </ul>
        </>
      }
      variables={[
        { variable: 'M', name: 'Maturity Amount', definition: 'The terminal gross maturity proceeds credited to your linked savings account.' },
        { variable: 'P', name: 'Monthly Installment Amount', definition: 'Fixed monthly remittance committed under auto-debit standing instruction.' },
        { variable: 'r', name: 'Annual Interest Rate (%)', definition: 'Contractual annual interest rate locked in for the entire tenure at account opening.' },
        { variable: 'i', name: 'Quarterly Fractional Rate', definition: 'Quarterly interest rate: i = r / (4 × 100).' },
        { variable: 'n', name: 'Compounding Quarters', definition: 'Total number of 3-month compounding cycles: n = Months / 3.' },
      ]}
      workedExample={
        <>
          <div className="font-semibold text-white mb-1">
            Real-World Scenario: Depositing ₹10,000 Per Month in a 3-Year (36-Month) Bank RD at 7.00% p.a.
          </div>
          <p className="text-xs text-slate-300">
            Suppose an individual opens an auto-debit RD of ₹10,000 monthly with a public or private sector commercial bank:
          </p>
          <div className="space-y-1.5 font-mono text-xs bg-slate-900/60 p-3 rounded border border-slate-800/80 mt-2">
            <div>• Monthly Deposit (P): ₹10,000</div>
            <div>• Annual Interest Rate (r): 7.00% p.a.</div>
            <div>• Quarterly Rate (i): 7.00 / 400 = 0.0175</div>
            <div>• Total Quarters (n): 36 / 3 = 12 Quarters</div>
            <div>• Cumulative Capital Deposited: 36 × ₹10,000 = ₹3,60,000</div>
            <div>• Numerator: (1 + 0.0175)^12 - 1 = (1.231439 - 1) = 0.231439</div>
            <div>• Denominator: 1 - (1.0175)^(-1/3) = 1 - 0.994237 = 0.005763</div>
            <div className="text-amber-300 font-bold">• Terminal Maturity Value (M): ₹10,000 × (0.231439 / 0.005763) = ₹4,01,627</div>
            <div className="text-emerald-400 font-bold">• Total Accrued Interest: ₹4,01,627 - ₹3,60,000 = ₹41,627</div>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            <strong>Key Insight:</strong> The investor earns <strong>₹41,627</strong> in guaranteed compound interest, which is higher than simple interest (₹38,500) due to quarterly compounding.
          </p>
        </>
      }
      howToReadResults={
        <>
          <p>
            <strong>Section 194A TDS Alert:</strong> Interest earned on Recurring Deposits is subject to Tax Deducted at Source (TDS). If your aggregate interest across all term deposits in a single banking institution exceeds <strong>₹40,000 in a financial year</strong> (₹50,000 for senior citizens), the bank will deduct 10% TDS (or 20% if PAN is not linked).
          </p>
          <p>
            <strong>Post-Tax Yield:</strong> Unlike PPF which is completely tax-free, RD interest is fully taxable under "Income from Other Sources" at your applicable income tax slab. If you are in the 30% slab, a 7% nominal RD yields roughly 4.8% post-tax.
          </p>
        </>
      }
      statutoryNotes={
        <>
          <p>
            <strong>DICGC Insurance Guarantee:</strong> Under the Deposit Insurance and Credit Guarantee Corporation (DICGC) Act, deposits (combining savings, RD, and FD) across all branches of a single commercial or cooperative bank are insured up to <strong>₹5,00,000 per depositor</strong> (principal and accrued interest).
          </p>
          <p>
            <strong>Premature Liquidation Penalty:</strong> Premature withdrawal of an RD usually attracts a statutory penal rate of 0.5% to 1.0% below the applicable rate for the period the deposit remained with the bank.
          </p>
        </>
      }
      faqs={[
        {
          question: 'Is Recurring Deposit interest taxable under the New Tax Regime?',
          answer: 'Yes. Interest on Recurring Deposits is fully taxable under "Income from Other Sources" at your marginal slab rate under both the New and Old Tax Regimes. There is no special tax exemption for bank RDs (unlike 5-year tax-saver FDs under Section 80C).',
        },
        {
          question: 'Can I submit Form 15G or 15H to avoid TDS on Recurring Deposits?',
          answer: 'Yes. If your total estimated taxable income for the financial year is below the basic exemption threshold, you can submit Form 15G (for individuals below 60) or Form 15H (for senior citizens aged 60+) to prevent the bank from deducting Section 194A TDS.',
        },
        {
          question: 'What happens if I miss a monthly RD installment?',
          answer: 'Banks permit a grace window of 15 to 30 days. If the auto-debit fails due to insufficient savings balance, banks levy a minor penalty (typically ₹1.50 to ₹2.00 per ₹100 per month). If consecutive installments are missed (usually 4 to 6 months), the bank reserves the right to premature-close the account.',
        },
        {
          question: 'How does an RD differ from an equity SIP?',
          answer: 'An RD offers 100% guaranteed, fixed interest backed by bank and DICGC sovereign guarantees, with zero capital risk. An equity SIP invests in mutual funds with fluctuating Net Asset Values (NAVs) and market risk, but historically yields 12% to 14% CAGR over multi-year horizons to beat inflation.',
        },
        {
          question: 'Can I take a loan against my Recurring Deposit?',
          answer: 'Yes. Most Indian banks permit loans or overdraft facilities up to 85% to 90% of the accumulated RD value at an interest rate typically 1% to 2% higher than the contracted RD deposit rate, allowing liquidity without breaking the deposit.',
        },
      ]}
      relatedArticles={[
        {
          title: 'Understanding Real vs Nominal Returns: How Inflation Stealthily Erodes Savings',
          path: '/articles/understanding-real-vs-nominal-returns',
          readTime: '8 min',
          summary: 'The Fisher Equation demystified: why an 7% bank deposit can leave you poorer in purchasing power after tax and inflation.',
        },
        {
          title: 'PPF Rules & Interest Calculation Guide: The 5th Day Rule and Tax-Free Compounding',
          path: '/articles/ppf-rules-interest-calculation-guide',
          readTime: '8 min',
          summary: 'Compare taxable bank RDs against 100% tax-free Public Provident Fund sovereign compounding.',
        },
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label htmlFor="rd-monthly-input" className="font-medium text-slate-200">Monthly Deposit Amount</label>
              <span className="font-mono text-amber-400 font-semibold">{formatINR(monthlyDeposit)}</span>
            </div>
            <input
              id="rd-monthly-input"
              type="range"
              min="500"
              max="200000"
              step="500"
              value={monthlyDeposit}
              onChange={(e) => setMonthlyDeposit(Number(e.target.value))}
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
              <label htmlFor="rd-rate-input" className="font-medium text-slate-200">Annual Interest Rate (% p.a.)</label>
              <span className="font-mono text-amber-400 font-semibold">{rate.toFixed(2)}%</span>
            </div>
            <input
              id="rd-rate-input"
              type="range"
              min="3"
              max="11"
              step="0.05"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-500">
              <span>3%</span>
              <span>7% (Standard)</span>
              <span>11% (Small Fin Bank)</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label htmlFor="rd-months-input" className="font-medium text-slate-200">Deposit Tenure (Months)</label>
              <span className="font-mono text-amber-400 font-semibold">{months} Months ({(months / 12).toFixed(1)} Yrs)</span>
            </div>
            <input
              id="rd-months-input"
              type="range"
              min="6"
              max="120"
              step="3"
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-500">
              <span>6 Months</span>
              <span>36 Months (3 Yrs)</span>
              <span>120 Months (10 Yrs)</span>
            </div>
          </div>
        </div>

        {/* Output Panel */}
        <div className="lg:col-span-6 bg-slate-950 border border-slate-800 rounded-lg p-6 flex flex-col justify-between space-y-6 min-h-[260px]">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Capital Deposited</span>
              <span className="text-lg font-mono font-bold text-slate-200 tabular-nums">{formatINR(totalInvested)}</span>
            </div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Total Accrued Interest</span>
              <span className="text-lg font-mono font-bold text-emerald-400 tabular-nums">{formatINR(totalInterest)}</span>
            </div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-sm font-semibold uppercase tracking-wider text-amber-400">Maturity Proceeds</span>
              <span className="text-2xl font-mono font-extrabold text-amber-300 tabular-nums">{formatINR(maturity)}</span>
            </div>
            <div className="flex items-center justify-between pt-1 text-xs">
              <span className="text-slate-400 font-semibold">Sec 194A TDS Status (₹40k threshold)</span>
              <span className={`font-mono font-bold ${tdsApplicable ? 'text-amber-400' : 'text-emerald-400'}`}>
                {tdsApplicable ? '⚠️ Exceeds ₹40k/yr (TDS Likely)' : '✓ Within ₹40k Limit'}
              </span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={copyResults}
              className="w-full py-2.5 px-4 text-xs font-semibold text-slate-200 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              {copied ? '✓ Copied to Clipboard!' : 'Copy RD Calculation Summary'}
            </button>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}

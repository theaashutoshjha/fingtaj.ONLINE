import React, { useState } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';
import { Link } from 'react-router-dom';

export default function NpsCalculator() {
  const [monthlyContribution, setMonthlyContribution] = useState<number>(10000);
  const [currentAge, setCurrentAge] = useState<number>(30);
  const [expectedRoi, setExpectedRoi] = useState<number>(10);
  const [annuitySharePercent, setAnnuitySharePercent] = useState<number>(40);
  const [annuityRate, setAnnuityRate] = useState<number>(6.5);
  const [copied, setCopied] = useState<boolean>(false);

  // Years to retirement (Age 60)
  const years = Math.max(1, 60 - currentAge);
  const totalMonths = years * 12;
  const i = expectedRoi / (12 * 100);

  // Total investment and corpus compounding
  const totalInvested = monthlyContribution * totalMonths;
  const totalCorpus = monthlyContribution * ((Math.pow(1 + i, totalMonths) - 1) / i) * (1 + i);
  const totalGains = totalCorpus - totalInvested;

  // Annuity vs Lump sum breakdown
  const annuityCorpus = totalCorpus * (annuitySharePercent / 100);
  const lumpSumCorpus = totalCorpus * ((100 - annuitySharePercent) / 100);

  // Monthly pension from annuity
  const monthlyPension = (annuityCorpus * (annuityRate / 100)) / 12;

  const formatINR = (val: number) => '₹' + Math.round(val).toLocaleString('en-IN');

  const copyResults = () => {
    const text = `NPS Retirement Calculation: Age ${currentAge} to 60 (${years} yrs), Monthly ₹${monthlyContribution}, Expected Return ${expectedRoi}% => Total Corpus: ${formatINR(totalCorpus)}, Tax-Free Lump Sum (60%): ${formatINR(lumpSumCorpus)}, Annuity (40%): ${formatINR(annuityCorpus)}, Monthly Pension @ ${annuityRate}%: ${formatINR(monthlyPension)}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <CalculatorLayout
      category="Retirement & Pension"
      badge="PFRDA Annuity Engine"
      title="National Pension System (NPS) Calculator"
      subtitle="Model retirement accumulation, 60% tax-free lump-sum withdrawals, and monthly annuity pensions under PFRDA statutory frameworks."
      formula="Corpus = P × [ { (1 + i)^n - 1 } / i ] × (1 + i)  |  Pension = (Annuity_Corpus × r_annuity) / 12"
      whoItsFor={
        <>
          <p>
            <strong>What It Computes:</strong> This specialized retirement engineering tool estimates the total terminal corpus accumulated at age 60 under the National Pension System (NPS Tier-I), the statutory 60% tax-free lump-sum distribution, the mandatory minimum 40% annuity allocation, and the resulting guaranteed monthly pension payout.
          </p>
          <p>
            <strong>Target Audience:</strong> Ideal for Indian corporate employees, central and state government staff under the NPS regime, and self-employed professionals aiming to secure lifelong post-retirement cash flows while leveraging unique tax deductions under Section 80CCD(1B) and Section 80CCD(2).
          </p>
        </>
      }
      mathematicalPrinciples={
        <>
          <p>
            The National Pension System functions as a defined-contribution, market-linked pension program governed by the Pension Fund Regulatory and Development Authority (PFRDA). Contributions are dynamically allocated across four asset classes: Equity (Scheme E), Corporate Debt (Scheme C), Government Securities (Scheme G), and Alternative Assets (Scheme A).
          </p>
          <p>
            During the accumulation phase, periodic monthly contributions compound under an annuity due model. Upon attaining the statutory retirement age of 60, PFRDA regulations govern capital distribution:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-300">
            <li><strong>Lump-Sum Withdrawal (Up to 60%):</strong> Completely exempt from income tax under Section 10(12A).</li>
            <li><strong>Annuity Purchase (Minimum 40%):</strong> Must be transferred to an IRDAI-empanelled Annuity Service Provider (ASP) such as LIC, HDFC Life, or SBI Life to generate lifetime monthly pensions.</li>
          </ul>
        </>
      }
      formulaExplanation={
        <>
          <p>
            The calculation operates in two synchronized mathematical stages:
          </p>
          <div className="font-mono text-amber-200 bg-slate-950 p-3 rounded border border-slate-800 text-xs space-y-1.5">
            <div>Stage 1: Accumulation Corpus = P × [((1 + i)^n - 1) / i] × (1 + i)</div>
            <div>Stage 2: Lump Sum (Tax-Free) = Total Corpus × (1 - Annuity%)</div>
            <div>Stage 3: Annuity Corpus = Total Corpus × Annuity%</div>
            <div>Stage 4: Monthly Pension = (Annuity Corpus × Annual Annuity Rate) / 12</div>
          </div>
          <p>
            Where <code className="text-amber-300">n = (60 - Current_Age) × 12</code> total compounding monthly cycles.
          </p>
        </>
      }
      variables={[
        { variable: 'P', name: 'Monthly NPS Contribution', definition: 'Periodic monthly contribution remitted to Tier-1 PRAN (Permanent Retirement Account Number).' },
        { variable: 'Current_Age', name: 'Subscriber Current Age', definition: 'Your current age in years, with statutory superannuation assumed at 60 years.' },
        { variable: 'ROI (%)', name: 'Blended Expected Portfolio Return', definition: 'Annualized weighted return across Equity (E), Corporate Bonds (C), and G-Secs (G).' },
        { variable: 'Annuity (%)', name: 'Mandatory Annuity Percentage', definition: 'Percentage of corpus reserved for annuity purchase (statutory minimum is 40%).' },
        { variable: 'Annuity_Rate', name: 'Annuity Service Provider Yield', definition: 'Guaranteed annual yield offered by life insurers on immediate annuity with return of purchase price.' },
      ]}
      workedExample={
        <>
          <div className="font-semibold text-white mb-1">
            Real-World Scenario: A 30-Year-Old Investing ₹10,000/Month Until Retirement at Age 60 (30-Year Horizon)
          </div>
          <p className="text-xs text-slate-300">
            Suppose a software engineer aged 30 deposits ₹10,000 monthly into an active choice NPS portfolio (75% Equity, 25% Debt) with an expected 10% CAGR and a 6.5% annuity yield:
          </p>
          <div className="space-y-1.5 font-mono text-xs bg-slate-900/60 p-3 rounded border border-slate-800/80 mt-2">
            <div>• Total Contribution Horizon: 60 - 30 = 30 Years (360 Months)</div>
            <div>• Cumulative Capital Invested: 360 × ₹10,000 = ₹36,00,000</div>
            <div>• Compounded Capital Gains: ₹1,91,92,971</div>
            <div className="text-amber-300 font-bold">• Total Terminal Corpus at Age 60: ₹2,27,92,971 (~₹2.28 Crore)</div>
            <div className="pt-2 border-t border-slate-800 text-slate-300">
              • 60% Tax-Free Lump Sum (Direct Cash): ₹1,36,75,783
            </div>
            <div>• 40% Annuity Corpus Transferred to Insurer: ₹91,17,188</div>
            <div className="text-emerald-400 font-extrabold text-sm">
              • Lifelong Monthly Pension: (₹91,17,188 × 6.5%) / 12 = ₹49,385 / Month
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            <strong>Key Insight:</strong> The subscriber receives a tax-free cash payout of <strong>₹1.37 Crore</strong> at age 60 while securing a guaranteed monthly pension of <strong>₹49,385</strong> for the remainder of their life.
          </p>
        </>
      }
      howToReadResults={
        <>
          <p>
            <strong>The 60% Lump Sum Strategy:</strong> Because the 60% lump sum is 100% tax-free under Section 10(12A), it can be deployed into debt mutual funds, senior citizen savings schemes (SCSS), or liquid assets to generate additional tax-efficient monthly income.
          </p>
          <p>
            <strong>Annuity Taxation:</strong> Remember that while the annuity corpus transfer is tax-free, the monthly pension receipts are treated as salary income and taxed according to your applicable slab rates in retirement.
          </p>
        </>
      }
      statutoryNotes={
        <>
          <p>
            <strong>Exclusive Section 80CCD(1B) Tax Deduction:</strong> NPS provides an exclusive tax deduction of up to <strong>₹50,000 per financial year</strong> over and above the Section 80C limit of ₹1,50,000 under the Old Tax Regime.
          </p>
          <p>
            <strong>Section 80CCD(2) Corporate Benefit:</strong> Employer contributions up to 14% of Basic + DA for Central/State Govt employees and 10% for private sector corporate employees are completely tax-exempt even under the New Tax Regime (Section 115BAC).
          </p>
        </>
      }
      faqs={[
        {
          question: 'Can I withdraw 100% of my NPS corpus without buying an annuity?',
          answer: 'Under PFRDA regulations, if your accumulated NPS corpus at age 60 is ₹5,00,000 or less, you are permitted to withdraw 100% of the corpus as a lump sum without any mandatory annuity requirement.',
        },
        {
          question: 'What happens to the annuity purchase price upon the subscriber demise?',
          answer: 'Subscribers can select an "Annuity with Return of Purchase Price" option. Under this variant, monthly pensions are paid throughout the subscriber lifetime (and spouse lifetime if joint), and upon death, 100% of the original purchase capital is refunded to the legal nominee.',
        },
        {
          question: 'Can I extend NPS investments beyond the age of 60?',
          answer: 'Yes. PFRDA permits subscribers to defer annuity purchase and continue contributing to their NPS Tier-I account up to the age of 75 years.',
        },
        {
          question: 'Is NPS Tier-II also eligible for tax deductions?',
          answer: 'No. NPS Tier-II is a voluntary open-ended savings account with unrestricted withdrawals, and investments do not qualify for Section 80CCD deductions (except for Central Government employees claiming 80C with a 3-year lock-in).',
        },
        {
          question: 'How does Auto Choice differ from Active Choice in NPS?',
          answer: 'Under Active Choice, you actively choose your allocation across Equity (up to 75%), Corporate Debt, and G-Secs. Under Auto Choice (Lifecycle Funds), the system automatically rebalances your asset mix away from equity into debt as you age to protect capital.',
        },
      ]}
      relatedArticles={[
        {
          title: 'Understanding Real vs Nominal Returns: How Inflation Stealthily Erodes Savings',
          path: '/articles/understanding-real-vs-nominal-returns',
          readTime: '8 min',
          summary: 'The Fisher Equation demystified: why high nominal returns can leave you poorer after tax and CPI inflation.',
        },
        {
          title: 'New vs Old Tax Regime in India: Slabs, Deductions, and Break-Even Salary Analysis',
          path: '/articles/new-vs-old-tax-regime',
          readTime: '10 min',
          summary: 'A statutory guide for salaried professionals navigating Section 115BAC, NPS 80CCD deductions, and standard deduction.',
        },
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label htmlFor="nps-monthly-input" className="font-medium text-slate-200">Monthly Contribution Amount</label>
              <span className="font-mono text-amber-400 font-semibold">{formatINR(monthlyContribution)}</span>
            </div>
            <input
              id="nps-monthly-input"
              type="range"
              min="1000"
              max="150000"
              step="500"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(Number(e.target.value))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-500">
              <span>₹1,000</span>
              <span>₹50,000</span>
              <span>₹1,50,000</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label htmlFor="nps-age-input" className="font-medium text-slate-200">Current Age (Years)</label>
              <span className="font-mono text-amber-400 font-semibold">{currentAge} Yrs ({years} Yrs to 60)</span>
            </div>
            <input
              id="nps-age-input"
              type="range"
              min="18"
              max="58"
              step="1"
              value={currentAge}
              onChange={(e) => setCurrentAge(Number(e.target.value))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-500">
              <span>18 Yrs</span>
              <span>40 Yrs</span>
              <span>58 Yrs</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label htmlFor="nps-roi-input" className="font-medium text-slate-200">Expected Blended Return (% p.a.)</label>
              <span className="font-mono text-amber-400 font-semibold">{expectedRoi.toFixed(1)}%</span>
            </div>
            <input
              id="nps-roi-input"
              type="range"
              min="5"
              max="15"
              step="0.5"
              value={expectedRoi}
              onChange={(e) => setExpectedRoi(Number(e.target.value))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-500">
              <span>5% (Debt)</span>
              <span>10% (Balanced)</span>
              <span>15% (High Equity)</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <label htmlFor="nps-annuity-share" className="font-medium text-slate-200">Annuity Share (%)</label>
                <span className="font-mono text-amber-400 font-semibold">{annuitySharePercent}%</span>
              </div>
              <input
                id="nps-annuity-share"
                type="range"
                min="40"
                max="100"
                step="5"
                value={annuitySharePercent}
                onChange={(e) => setAnnuitySharePercent(Number(e.target.value))}
                className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-[10px] text-slate-500 block">Min 40% mandated</span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <label htmlFor="nps-annuity-rate" className="font-medium text-slate-200">Annuity Rate (%)</label>
                <span className="font-mono text-emerald-400 font-semibold">{annuityRate.toFixed(1)}%</span>
              </div>
              <input
                id="nps-annuity-rate"
                type="range"
                min="4"
                max="9"
                step="0.25"
                value={annuityRate}
                onChange={(e) => setAnnuityRate(Number(e.target.value))}
                className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-[10px] text-slate-500 block">Insurer payout yield</span>
            </div>
          </div>
        </div>

        {/* Output Panel */}
        <div className="lg:col-span-6 bg-slate-950 border border-slate-800 rounded-lg p-6 flex flex-col justify-between space-y-6 min-h-[260px]">
          <div className="space-y-3.5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Capital Contributed</span>
              <span className="text-base font-mono font-bold text-slate-200 tabular-nums">{formatINR(totalInvested)}</span>
            </div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Total Accumulated Corpus (Age 60)</span>
              <span className="text-xl font-mono font-extrabold text-amber-300 tabular-nums">{formatINR(totalCorpus)}</span>
            </div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">Tax-Free Lump Sum ({100 - annuitySharePercent}%)</span>
              <span className="text-base font-mono font-bold text-emerald-400 tabular-nums">{formatINR(lumpSumCorpus)}</span>
            </div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">Annuity Corpus ({annuitySharePercent}%)</span>
              <span className="text-base font-mono font-bold text-amber-400 tabular-nums">{formatINR(annuityCorpus)}</span>
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="text-sm font-semibold uppercase tracking-wider text-amber-400">Estimated Monthly Pension</span>
              <span className="text-xl font-mono font-extrabold text-amber-300 tabular-nums">{formatINR(monthlyPension)}</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={copyResults}
              className="w-full py-2.5 px-4 text-xs font-semibold text-slate-200 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              {copied ? '✓ Copied to Clipboard!' : 'Copy NPS Calculation Summary'}
            </button>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}

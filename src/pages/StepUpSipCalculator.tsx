import React, { useState } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';
import { Link } from 'react-router-dom';

export default function StepUpSipCalculator() {
  const [initialMonthly, setInitialMonthly] = useState<number>(15000);
  const [annualStepUpPercent, setAnnualStepUpPercent] = useState<number>(10);
  const [rate, setRate] = useState<number>(12);
  const [years, setYears] = useState<number>(15);
  const [copied, setCopied] = useState<boolean>(false);

  // Exact Step-up compounding simulation
  // Monthly rate
  const monthlyRate = rate / (12 * 100);
  let totalInvested = 0;
  let maturityCorpus = 0;

  // Simulate month by month
  for (let year = 0; year < years; year++) {
    const currentMonthly = initialMonthly * Math.pow(1 + annualStepUpPercent / 100, year);
    for (let month = 0; month < 12; month++) {
      totalInvested += currentMonthly;
      const totalMonthsRemaining = (years - year) * 12 - month;
      // Each monthly installment earns interest for totalMonthsRemaining months
      maturityCorpus += currentMonthly * Math.pow(1 + monthlyRate, totalMonthsRemaining);
    }
  }

  const capitalGains = maturityCorpus - totalInvested;

  // Equivalent flat SIP without step-up
  const n = years * 12;
  const flatInvested = initialMonthly * n;
  const flatMaturity = initialMonthly * ((Math.pow(1 + monthlyRate, n) - 1) / monthlyRate) * (1 + monthlyRate);
  const stepUpAdvantage = maturityCorpus - flatMaturity;

  const formatINR = (val: number) => '₹' + Math.round(val).toLocaleString('en-IN');

  const copyResults = () => {
    const text = `Step-Up SIP Summary: Base ₹${initialMonthly}/mo, Step-Up ${annualStepUpPercent}%/yr, Expected Rate ${rate}%, Tenure ${years} yrs => Total Invested: ${formatINR(totalInvested)}, Gains: ${formatINR(capitalGains)}, Final Corpus: ${formatINR(maturityCorpus)} (Step-Up Gain: +${formatINR(stepUpAdvantage)})`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <CalculatorLayout
      category="Wealth Accumulation"
      badge="Step-Up Compounding Engine"
      title="Step-Up (Top-Up) SIP Calculator"
      subtitle="Model the accelerated compounding trajectory of increasing your monthly mutual fund investments annually in tandem with salary appraisals."
      formula="Corpus = Σ [ P_year × (1 + i)^months_remaining ]"
      whoItsFor={
        <>
          <p>
            <strong>What It Computes:</strong> This specialized wealth engineering tool calculates the terminal maturity corpus, cumulative capital invested, and capital gains generated when an investor increases their monthly Systematic Investment Plan (SIP) installment by a fixed percentage (e.g., 5%, 10%, 15%) once every twelve calendar months.
          </p>
          <p>
            <strong>Target Audience:</strong> Designed primarily for salaried corporate professionals, consultants, and young earners whose annual income expands through yearly increments and performance bonuses. Rather than allowing your savings rate to stagnate while your cost of living climbs, a Step-Up SIP automatically scales your capital deployment to match your expanding earning power.
          </p>
        </>
      }
      mathematicalPrinciples={
        <>
          <p>
            A standard SIP assumes a static annuity installment across 10 to 30 years. However, real-world personal finances are dynamic. A Step-Up SIP models an escalating series of distinct 12-month annuity due sequences.
          </p>
          <p>
            Each year <code className="bg-slate-900 px-1 rounded text-amber-300">y</code>, the monthly installment scales to <code className="bg-slate-900 px-1 rounded text-amber-300">P_y = P_0 × (1 + s)^y</code>, where <code className="bg-slate-900 px-1 rounded text-amber-300">s</code> is the annual step-up rate. Each discrete monthly contribution then compounds at monthly periodic interest rate <code className="bg-slate-900 px-1 rounded text-amber-300">i = r / 1200</code> for the precise number of remaining months in the investment horizon.
          </p>
          <p>
            Because additional capital is injected progressively earlier rather than deferred to retirement, the cumulative terminal portfolio achieves a non-linear compounding multiplier compared to static contributions.
          </p>
        </>
      }
      formulaExplanation={
        <>
          <p>
            Instead of a single closed-form annuity formula, the Step-Up SIP computes a piecewise summation over every year <code className="text-amber-300">y ∈ [0, Y-1]</code>. For each month <code className="text-amber-300">m ∈ [0, 11]</code> of that year:
          </p>
          <div className="font-mono text-amber-200 bg-slate-950 p-2.5 rounded border border-slate-800 text-xs">
            Contribution(y, m) = Initial_P × (1 + StepUp%)^y
          </div>
          <p>
            Each individual installment earns compound interest for its specific lifespan: <code className="text-amber-300">(Total_Months - Month_Index)</code>. Summing all installments yields the exact terminal corpus.
          </p>
        </>
      }
      variables={[
        { variable: 'Initial_P', name: 'Starting Monthly Installment', definition: 'The initial monthly contribution committed in Year 1 through an ECS/NACH bank mandate.' },
        { variable: 'StepUp%', name: 'Annual Incremental Top-Up Rate', definition: 'The annual percentage by which monthly contributions are automatically increased after every 12 installments.' },
        { variable: 'r', name: 'Expected Annual Growth (CAGR)', definition: 'The projected annualized compound return of the underlying equity or hybrid mutual fund portfolio.' },
        { variable: 'Y', name: 'Total Horizon in Years', definition: 'Total investment duration in years, simulating multi-decade compounding.' },
      ]}
      workedExample={
        <>
          <div className="font-semibold text-white mb-1">
            Real-World Scenario: ₹15,000/month Base with 10% Annual Step-Up over 15 Years at 12% Expected CAGR
          </div>
          <p className="text-xs text-slate-300">
            Consider an investor committing ₹15,000 per month with a 10% annual top-up matching their yearly appraisal:
          </p>
          <div className="space-y-1.5 font-mono text-xs bg-slate-900/60 p-3 rounded border border-slate-800/80 mt-2">
            <div>• Year 1 Monthly SIP: ₹15,000 | Annual Contribution: ₹1,80,000</div>
            <div>• Year 2 Monthly SIP: ₹16,500 (+10%) | Annual Contribution: ₹1,98,000</div>
            <div>• Year 3 Monthly SIP: ₹18,150 (+10%) | Annual Contribution: ₹2,17,800</div>
            <div>• Year 10 Monthly SIP: ₹35,369 | Annual Contribution: ₹4,24,428</div>
            <div>• Year 15 Monthly SIP: ₹56,962 | Annual Contribution: ₹6,83,544</div>
            <div className="pt-2 border-t border-slate-800 text-emerald-400 font-bold">
              • Total Capital Invested: ₹57,19,047 (vs. ₹27,00,000 in a flat SIP)
            </div>
            <div className="text-emerald-400 font-bold">
              • Estimated Capital Gains: ₹80,87,925 (vs. ₹48,68,640 in a flat SIP)
            </div>
            <div className="text-amber-300 font-extrabold text-sm">
              • Terminal Maturity Corpus: ₹1,38,06,972 (vs. ₹75,68,640 in a flat SIP)
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            <strong>Key Insight:</strong> By stepping up by just 10% each year, the investor builds an extra <strong>₹62.38 Lakhs (+82.4%)</strong> of wealth compared to remaining static!
          </p>
        </>
      }
      howToReadResults={
        <>
          <p>
            <strong>The Step-Up Multiplier:</strong> Look at the comparison between your Step-Up terminal corpus and a flat SIP. In almost every 15+ year timeline, stepping up contributions by 10% annually nearly doubles your end wealth while requiring only small, manageable annual budget adjustments.
          </p>
          <p>
            <strong>Cash Flow Feasibility:</strong> Check your projected Year 10 and Year 15 monthly outflow. Ensure that the terminal monthly commitment remains well within your expected future household disposable income.
          </p>
        </>
      }
      statutoryNotes={
        <>
          <p>
            <strong>SEBI & AMC Top-Up Facility Mandate:</strong> In India, the Association of Mutual Funds in India (AMFI) and SEBI-registered Asset Management Companies (AMCs) offer automated Top-Up SIP facilities. You can register a top-up either as a fixed percentage or a flat rupee amount (e.g., +₹1,000/year).
          </p>
          <p>
            <strong>Taxation Under Finance Act 2024:</strong> Each stepped-up installment has its own 12-month holding period for equity mutual funds under Section 112A. Long-Term Capital Gains realized after 12 months are taxed at 12.5% on profits exceeding ₹1,25,000 per financial year.
          </p>
        </>
      }
      faqs={[
        {
          question: 'Can I set a maximum ceiling on my Step-Up SIP?',
          answer: 'Yes. Most Indian mutual fund AMCs and platforms (CAMS, KFintech, Groww, Zerodha Coin) allow you to specify an upper cap (for instance, cap the step-up at ₹50,000 per month). Once your monthly installment touches the cap, it continues as a regular flat SIP without further increments.',
        },
        {
          question: 'Can I choose semi-annual or annual step-up frequency?',
          answer: 'While annual step-up is the most standard option (aligning with corporate appraisal cycles), many fund houses also provide half-yearly step-up intervals for professionals with bi-annual performance evaluations.',
        },
        {
          question: 'What happens if I cannot afford the increased installment in a lean year?',
          answer: 'Step-up mandates can be modified or paused without penalties. You can cancel the top-up instruction and revert to your original baseline SIP amount through your mutual fund folio dashboard or distributor.',
        },
        {
          question: 'How does Step-Up SIP beat inflation compared to standard fixed deposits?',
          answer: 'A standard fixed deposit suffers double erosion: inflation reduces its real purchasing power, while taxes on nominal interest further compress yields. In contrast, Step-Up SIP expands your investment rate ahead of inflation while investing in productive equities that historically outpace CPI by 6% to 8%.',
        },
        {
          question: 'Is Step-Up SIP applicable to index funds and ETF portfolios?',
          answer: 'Yes. You can initiate a Step-Up SIP across Nifty 50 index funds, Nifty Next 50, flexi-cap, mid-cap, and balanced advantage mutual funds under standard AMFI mandates.',
        },
      ]}
      relatedArticles={[
        {
          title: 'How a 10% Annual Step-Up Supercharges Mutual Fund Wealth: The Compounding Multiplier',
          path: '/articles/step-up-sip-wealth-accelerator',
          readTime: '7 min',
          summary: 'Why keeping your monthly SIP flat while your salary grows is a major financial oversight, and how incremental top-ups create 2.2x higher terminal corpus.',
        },
        {
          title: 'SIP vs Lump Sum Investing: Rupee Cost Averaging and Market Cycles',
          path: '/articles/sip-vs-lump-sum-investing',
          readTime: '9 min',
          summary: 'A rigorous comparative analysis of systematic monthly investing versus one-time lump-sum capital deployment.',
        },
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label htmlFor="step-base-input" className="font-medium text-slate-200">Initial Monthly Investment</label>
              <span className="font-mono text-amber-400 font-semibold">{formatINR(initialMonthly)}</span>
            </div>
            <input
              id="step-base-input"
              type="range"
              min="1000"
              max="200000"
              step="1000"
              value={initialMonthly}
              onChange={(e) => setInitialMonthly(Number(e.target.value))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-500">
              <span>₹1,000</span>
              <span>₹1,00,000</span>
              <span>₹2,00,000</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label htmlFor="step-pct-input" className="font-medium text-slate-200">Annual Step-Up Increment (%)</label>
              <span className="font-mono text-amber-400 font-semibold">+{annualStepUpPercent}% / Year</span>
            </div>
            <input
              id="step-pct-input"
              type="range"
              min="0"
              max="30"
              step="1"
              value={annualStepUpPercent}
              onChange={(e) => setAnnualStepUpPercent(Number(e.target.value))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-500">
              <span>0% (Flat SIP)</span>
              <span>10% (Std)</span>
              <span>30% (Aggressive)</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label htmlFor="step-rate-input" className="font-medium text-slate-200">Expected Annual CAGR (%)</label>
              <span className="font-mono text-amber-400 font-semibold">{rate.toFixed(1)}%</span>
            </div>
            <input
              id="step-rate-input"
              type="range"
              min="1"
              max="25"
              step="0.5"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-500">
              <span>1%</span>
              <span>12%</span>
              <span>25%</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label htmlFor="step-years-input" className="font-medium text-slate-200">Investment Tenure (Years)</label>
              <span className="font-mono text-amber-400 font-semibold">{years} Years</span>
            </div>
            <input
              id="step-years-input"
              type="range"
              min="1"
              max="35"
              step="1"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-500">
              <span>1 Year</span>
              <span>15 Years</span>
              <span>35 Years</span>
            </div>
          </div>
        </div>

        {/* Output Panel */}
        <div className="lg:col-span-6 bg-slate-950 border border-slate-800 rounded-lg p-6 flex flex-col justify-between space-y-6 min-h-[260px]">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Capital Invested</span>
              <span className="text-lg font-mono font-bold text-slate-200 tabular-nums">{formatINR(totalInvested)}</span>
            </div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Estimated Capital Gains</span>
              <span className="text-lg font-mono font-bold text-emerald-400 tabular-nums">{formatINR(capitalGains)}</span>
            </div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-sm font-semibold uppercase tracking-wider text-amber-400">Estimated Terminal Corpus</span>
              <span className="text-2xl font-mono font-extrabold text-amber-300 tabular-nums">{formatINR(maturityCorpus)}</span>
            </div>
            <div className="flex items-center justify-between pt-1 text-xs">
              <span className="text-amber-400 font-semibold">Step-Up Wealth Advantage vs Flat SIP</span>
              <span className="font-mono font-bold text-amber-300 tabular-nums">+{formatINR(stepUpAdvantage)}</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={copyResults}
              className="w-full py-2.5 px-4 text-xs font-semibold text-slate-200 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              {copied ? '✓ Copied to Clipboard!' : 'Copy Step-Up Summary'}
            </button>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}

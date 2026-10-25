import React, { useState } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';
import { Link } from 'react-router-dom';

export default function InflationCalculator() {
  const [principal, setPrincipal] = useState<number>(2000000);
  const [nominal, setNominal] = useState<number>(11.0);
  const [inflation, setInflation] = useState<number>(6.0);
  const [years, setYears] = useState<number>(15);
  const [copied, setCopied] = useState<boolean>(false);

  const nominalFuture = principal * Math.pow(1 + (nominal / 100), years);
  // Fisher real rate: ((1 + nominal) / (1 + inflation)) - 1
  const realRate = ((1 + (nominal / 100)) / (1 + (inflation / 100))) - 1;
  const realFuture = principal * Math.pow(1 + realRate, years);
  const eroded = nominalFuture - realFuture;

  const formatINR = (val: number) => '₹' + Math.round(val).toLocaleString('en-IN');

  const copyResults = () => {
    const text = `Inflation Analysis: Principal ${formatINR(principal)} @ Nominal ${nominal}% vs CPI ${inflation}% for ${years} yrs => Nominal: ${formatINR(nominalFuture)} | Real Purchasing Power: ${formatINR(realFuture)} (Eroded: ${formatINR(eroded)})`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <CalculatorLayout
      category="Macroeconomics & Wealth"
      badge="Fisher Equation"
      title="Real Inflation-Adjusted Return & Purchasing Power Calculator"
      subtitle="Model future capital purchasing power degradation by discounting nominal investment growth against Consumer Price Index (CPI) inflation."
      formula="Real Rate (r) = [ (1 + Nominal Rate) / (1 + Inflation Rate) ] - 1"
      whoItsFor={
        <>
          <p>
            <strong>What It Computes:</strong> This macroeconomic calculation engine quantifies the exact erosion of future capital purchasing power using the exact Fisher equation. It computes your apparent nominal terminal corpus, the true inflation-adjusted real purchasing power in today's rupees, and the total wealth destroyed by consumer price inflation over your planning horizon.
          </p>
          <p>
            <strong>Target Audience:</strong> Critical for retirement goal planners, pension accumulators, parents projecting college tuition inflation, and conservative fixed-income investors holding bank deposits who must evaluate whether their post-tax yields beat real living costs.
          </p>
        </>
      }
      mathematicalPrinciples={
        <>
          <p>
            Nominal investment returns represent money illusion if not adjusted against the Consumer Price Index (CPI). To measure real wealth expansion, economists apply the exact Fisher Equation. Simple subtraction (Nominal Rate minus Inflation Rate) creates systematic mathematical distortion over multi-decade planning horizons.
          </p>
          <p>
            The real purchasing power of future wealth reflects how many identical baskets of consumer goods and services the terminal corpus can procure relative to baseline present-day rupees. Failure to account for realistic inflation leads to chronic underfunded retirement reserves.
          </p>
        </>
      }
      formulaExplanation={
        <>
          <p>
            The Fisher Equation operates in three distinct computational steps:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-300">
            <li><strong>Nominal Future Value:</strong> <code className="text-amber-300">FV_nominal = Principal × (1 + r_nominal)^t</code>. The raw monetary sum in your future account.</li>
            <li><strong>Exact Real Rate:</strong> <code className="text-amber-300">r_real = [(1 + r_nominal) / (1 + r_inflation)] - 1</code>. Avoids the error of simple subtraction.</li>
            <li><strong>Real Purchasing Power:</strong> <code className="text-amber-300">FV_real = Principal × (1 + r_real)^t</code>. The true economic value of that future sum measured in today's baseline purchasing power.</li>
          </ul>
        </>
      }
      variables={[
        { variable: 'Nominal Future', name: 'Nominal Terminal Corpus', definition: 'Apparent future monetary value of assets unadjusted for price level escalation.' },
        { variable: 'Real Purchasing Power', name: 'Deflated Real Value', definition: 'Actual purchasing equivalence measured in current purchasing units.' },
        { variable: 'Nominal Growth', name: 'Contractual / Market Return', definition: 'Annualized nominal return prior to inflation discounting.' },
        { variable: 'CPI Inflation', name: 'Consumer Price Inflation', definition: 'Annualized inflation rate reflecting retail living expenditure expansion.' },
      ]}
      workedExample={
        <>
          <div className="font-semibold text-white mb-1">
            Real-World Scenario: ₹20,00,000 Invested at 11% Nominal Growth for 15 Years against 6% Average CPI Inflation
          </div>
          <p className="text-xs text-slate-300">
            Consider an investor parking ₹20 Lakhs in an equity-hybrid portfolio over a 15-year horizon:
          </p>
          <div className="space-y-1.5 font-mono text-xs bg-slate-900/60 p-3 rounded border border-slate-800/80 mt-2">
            <div>• Starting Capital (P): ₹20,00,000</div>
            <div>• Nominal Growth Rate (r_nom): 11.0% p.a.</div>
            <div>• Annual CPI Inflation (i): 6.0% p.a.</div>
            <div>• Planning Horizon (t): 15 Years</div>
            <div className="text-slate-300">• Nominal Future Value: ₹20,00,000 × (1.11)^15 = <strong className="text-slate-200">₹95,69,114 (~₹95.7 Lakhs)</strong></div>
            <div className="pt-1 border-t border-slate-800 text-slate-300">
              • Fisher Real Rate: (1 + 0.11) / (1 + 0.06) - 1 = (1.11 / 1.06) - 1 = <strong className="text-amber-300">4.717% p.a.</strong>
            </div>
            <div>• Real Purchasing Power Corpus: ₹20,00,000 × (1.04717)^15 = <strong className="text-amber-300">₹39,92,868 (~₹39.9 Lakhs)</strong></div>
            <div className="text-rose-400 font-bold">
              • Wealth Destroyed by Inflation: ₹95,69,114 - ₹39,92,868 = ₹55,76,246 (58.3% of nominal corpus!)
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            <strong>Key Insight:</strong> Although your nominal bank balance reaches nearly ₹1 Crore (₹95.7 Lakhs), its actual purchasing power in terms of real goods and services is only <strong>₹39.9 Lakhs</strong>. Over half of your apparent gains were consumed by inflation!
          </p>
        </>
      }
      howToReadResults={
        <>
          <p>
            <strong>The Purchasing Power Benchmark:</strong> When setting retirement goals, always plan your target corpus in real terms. If you determine you need ₹2 Crores in today's rupees to retire, in 20 years at 6% inflation you will actually require over <strong>₹6.4 Crores in nominal cash</strong> to buy that exact same lifestyle!
          </p>
          <p>
            <strong>Negative Real Yield Warning:</strong> If your expected nominal return is less than or equal to inflation (common in traditional savings accounts and post-tax FDs), your Real Purchasing Power drops below your starting principal, signifying real capital destruction.
          </p>
        </>
      }
      statutoryNotes={
        <>
          <p><strong>Historical Reserve Bank of India CPI Benchmarks:</strong> Long-term Indian consumer inflation has historically trended between 5% and 7% over rolling decades, with medical and educational expenses inflating at 9% to 12%.</p>
        </>
      }
      faqs={[
        {
          question: 'Why is simple subtraction (Nominal - Inflation) mathematically inaccurate?',
          answer: 'Linear subtraction ignores the compounding cross-product term. At 12% nominal growth and 6% inflation, naive subtraction suggests a 6.0% real return. The rigorous Fisher equation yields: (1.12 / 1.06) - 1 = 5.66%. Over 25 years, this 34-basis-point divergence causes significant discrepancies in projected retirement capital.',
        },
        {
          question: 'How does inflation affect fixed income and debt instrument real yields?',
          answer: 'When debt instruments yield 7% nominal interest and the investor is taxed at the 30% marginal bracket, net post-tax nominal yield drops to 4.90%. With CPI at 5.5%, the real after-tax yield becomes negative (-0.57%), resulting in guaranteed structural erosion of purchasing power.',
        },
        {
          question: 'What asset classes historically beat Indian CPI over 10+ year horizons?',
          answer: 'Broad-based equity indices (NIFTY 50 and S&P BSE SENSEX) have historically delivered 11.5% to 14% nominal CAGR over rolling 15-year intervals, yielding a net real purchasing power premium of 5% to 7% above domestic CPI inflation.',
        },
        {
          question: 'What is lifestyle inflation vs headline CPI inflation?',
          answer: 'Official CPI tracks an all-India basket weighted ~46% toward basic rural food and cereals. Urban professional lifestyle inflation (encompassing private healthcare, international vacations, school fees, and quality housing) typically runs at 8% to 12% annually.',
        },
        {
          question: 'How does the Rule of 72 apply to inflation?',
          answer: 'Dividing 72 by the annual inflation rate tells you how quickly purchasing power is cut in half. At 6% inflation, prices double (and currency purchasing power halves) every 12 years (72 / 6 = 12). At 8% inflation, purchasing power halves in just 9 years.',
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
          title: 'SIP vs Lump Sum Investing: Rupee Cost Averaging and Volatility Protection',
          path: '/articles/sip-vs-lump-sum-investing',
          readTime: '9 min',
          summary: 'Discover how disciplined equity compounding outpaces CPI inflation over 10 to 20-year horizons.',
        },
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label htmlFor="inf-principal-input" className="font-medium text-slate-200">Initial Principal Amount</label>
              <span className="font-mono text-amber-400 font-semibold">{formatINR(principal)}</span>
            </div>
            <input
              id="inf-principal-input"
              type="range"
              min="50000"
              max="20000000"
              step="50000"
              value={principal}
              onChange={(e) => setPrincipal(Number(e.target.value))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-500">
              <span>₹50,000</span>
              <span>₹1 Crore</span>
              <span>₹2 Crore</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label htmlFor="inf-nominal-input" className="font-medium text-slate-200">Nominal Annual Return (%)</label>
              <span className="font-mono text-amber-400 font-semibold">{nominal.toFixed(1)}%</span>
            </div>
            <input
              id="inf-nominal-input"
              type="range"
              min="1"
              max="25"
              step="0.5"
              value={nominal}
              onChange={(e) => setNominal(Number(e.target.value))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-500">
              <span>1%</span>
              <span>11%</span>
              <span>25%</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <label htmlFor="inf-cpi-input" className="font-medium text-slate-200">Expected CPI Inflation (%)</label>
                <span className="font-mono text-rose-400 font-semibold">{inflation.toFixed(1)}%</span>
              </div>
              <input
                id="inf-cpi-input"
                type="range"
                min="2"
                max="15"
                step="0.5"
                value={inflation}
                onChange={(e) => setInflation(Number(e.target.value))}
                className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <label htmlFor="inf-years-input" className="font-medium text-slate-200">Horizon (Years)</label>
                <span className="font-mono text-amber-400 font-semibold">{years} Years</span>
              </div>
              <input
                id="inf-years-input"
                type="range"
                min="1"
                max="35"
                step="1"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 bg-slate-950 border border-slate-800 rounded-lg p-6 flex flex-col justify-between space-y-6 min-h-[220px]">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Nominal Future Corpus</span>
              <span className="text-lg font-mono font-bold text-slate-200 tabular-nums">{formatINR(nominalFuture)}</span>
            </div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">Real Purchasing Power Corpus</span>
              <span className="text-2xl font-mono font-extrabold text-amber-300 tabular-nums">{formatINR(realFuture)}</span>
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-rose-400">Purchasing Power Eroded by Inflation</span>
              <span className="text-lg font-mono font-bold text-rose-400 tabular-nums">{formatINR(eroded)}</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={copyResults}
              className="w-full py-2.5 px-4 text-xs font-semibold text-slate-200 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              {copied ? '✓ Copied to Clipboard!' : 'Copy Inflation Analysis'}
            </button>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}

import React, { useState } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';

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
      variables={[
        { variable: 'Nominal Future', name: 'Nominal Terminal Corpus', definition: 'Apparent future monetary value of assets unadjusted for price level escalation.' },
        { variable: 'Real Purchasing Power', name: 'Deflated Real Value', definition: 'Actual purchasing equivalence measured in current purchasing units.' },
        { variable: 'Nominal Growth', name: 'Contractual / Market Return', definition: 'Annualized nominal return prior to inflation discounting.' },
        { variable: 'CPI Inflation', name: 'Consumer Price Inflation', definition: 'Annualized inflation rate reflecting retail living expenditure expansion.' },
      ]}
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
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label htmlFor="inf-principal-input" className="font-medium text-slate-200">Initial Principal Amount</label>
              <span className="font-mono text-cyan-400 font-semibold">{formatINR(principal)}</span>
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
              <span className="font-mono text-cyan-400 font-semibold">{nominal.toFixed(1)}%</span>
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
                <span className="font-mono text-cyan-400 font-semibold">{years} Years</span>
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
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Real Purchasing Power Corpus</span>
              <span className="text-2xl font-mono font-extrabold text-cyan-300 tabular-nums">{formatINR(realFuture)}</span>
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

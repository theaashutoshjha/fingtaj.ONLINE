import React, { useState } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';
import { Link } from 'react-router-dom';

export default function CapitalGainsCalculator() {
  const [assetType, setAssetType] = useState<string>('equity');
  const [buyCost, setBuyCost] = useState<number>(500000);
  const [salePrice, setSalePrice] = useState<number>(850000);
  const [holdingMonths, setHoldingMonths] = useState<number>(18);
  const [copied, setCopied] = useState<boolean>(false);

  const gain = Math.max(0, salePrice - buyCost);
  let tax = 0;
  let classification = '';

  if (assetType === 'equity') {
    if (holdingMonths > 12) {
      classification = 'LTCG (Sec 112A @ 12.5%)';
      const taxableGain = Math.max(0, gain - 125000); // ₹1.25L statutory exemption
      tax = taxableGain * 0.125 * 1.04; // 12.5% + 4% cess
    } else {
      classification = 'STCG (Sec 111A @ 20%)';
      tax = gain * 0.20 * 1.04; // 20% + 4% cess
    }
  } else {
    classification = 'Debt Fund (Sec 50AA - Slab Rate ~30%)';
    tax = gain * 0.30 * 1.04;
  }

  const netInHand = gain - tax;
  const formatINR = (val: number) => '₹' + Math.round(val).toLocaleString('en-IN');

  const copyResults = () => {
    const text = `Capital Gains: Buy ${formatINR(buyCost)}, Sell ${formatINR(salePrice)} (${classification}) => Gain: ${formatINR(gain)}, Tax: ${formatINR(tax)}, Net In Hand: ${formatINR(netInHand)}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <CalculatorLayout
      category="Capital Markets & Securities"
      badge="Finance Act 2024 Revisions"
      title="Mutual Fund & Equity Capital Gains Tax (LTCG / STCG) Estimator"
      subtitle="Estimate direct tax liability under restructured Section 111A (20% STCG) and Section 112A (12.5% LTCG above ₹1.25 Lakh exemption) enacted under Finance Act 2024."
      formula="Tax = ( Gross Gains - Statutory Exemption ) × Applicable Statutory Rate × 1.04 (Cess)"
      whoItsFor={
        <>
          <p>
            <strong>What It Computes:</strong> This securities tax calculator models capital gains taxes on transactions in listed equity shares, equity-oriented mutual funds, and debt funds. It automatically classifies holdings into Short-Term (STCG) vs Long-Term (LTCG), factors in the revised statutory ₹1,25,000 Section 112A annual exemption, applies the mandatory 4% Health & Education Cess, and computes your net post-tax take-home profit.
          </p>
          <p>
            <strong>Target Audience:</strong> Designed for active stock traders, mutual fund SIP/lump-sum investors, angel investors, and portfolio allocators preparing advance tax installments (under Section 211) and financial year-end tax-loss harvesting plans.
          </p>
        </>
      }
      mathematicalPrinciples={
        <>
          <p>
            The Finance Act 2024 enacted comprehensive structural reforms across India's capital gains regime. For listed equity securities and units of equity-oriented mutual funds subject to Securities Transaction Tax (STT): Short-Term Capital Gains (holding &le; 12 months) under Section 111A increased from 15% to 20%.
          </p>
          <p>
            Long-Term Capital Gains (holding &gt; 12 months) under Section 112A increased from 10% to 12.5%, while the annual aggregate tax-exempt threshold was enhanced from ₹1,00,000 to ₹1,25,000 per financial year. Debt mutual funds purchased on or after April 1, 2023 are classified as specified mutual funds under Section 50AA and taxed strictly at normal slab rates regardless of holding duration.
          </p>
        </>
      }
      formulaExplanation={
        <>
          <p>
            The capital gains tax computation follows statutory tax code algorithms:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-300">
            <li><strong>Gross Realized Capital Gain:</strong> <code className="text-amber-300">Sale Consideration - Full Value of Acquisition Cost</code> (net of transfer brokerage and STT).</li>
            <li><strong>Equity LTCG (&gt; 12 Months):</strong> <code className="text-amber-300">Tax = (Gain - ₹1,25,000 Exemption) × 12.5% × 1.04</code>. Profits up to ₹1.25 Lakh per financial year across all equity holdings are 100% tax-exempt.</li>
            <li><strong>Equity STCG (&le; 12 Months):</strong> <code className="text-amber-300">Tax = Gain × 20% × 1.04 (Effective 20.8%)</code>. Zero threshold exemption applies.</li>
            <li><strong>Debt Funds (Section 50AA):</strong> Treated as deemed short-term capital gains and taxed at the assessee's marginal income slab rate without any indexation benefit.</li>
          </ul>
        </>
      }
      variables={[
        { variable: 'STCG (Sec 111A)', name: 'Short-Term Rate', definition: '20% flat tax on equity held for 12 months or less, plus 4% health and education cess.' },
        { variable: 'LTCG (Sec 112A)', name: 'Long-Term Rate', definition: '12.5% flat tax on equity held over 12 months on profits surpassing ₹1,25,000 annually.' },
        { variable: 'Sec 50AA', name: 'Debt Fund Classification', definition: 'Specified debt mutual funds taxed at the assessee marginal income tax bracket without indexation.' },
      ]}
      workedExample={
        <>
          <div className="font-semibold text-white mb-1">
            Real-World Scenario: Selling ₹5,00,000 of Mutual Fund Units for ₹8,50,000 after 18 Months of Holding
          </div>
          <p className="text-xs text-slate-300">
            Let us calculate the net tax for an equity mutual fund investor:
          </p>
          <div className="space-y-1.5 font-mono text-xs bg-slate-900/60 p-3 rounded border border-slate-800/80 mt-2">
            <div>• Cost of Acquisition: ₹5,00,000</div>
            <div>• Sale Consideration: ₹8,50,000</div>
            <div>• Realized Gross Profit: ₹8,50,000 - ₹5,00,000 = ₹3,50,000</div>
            <div>• Holding Duration: 18 Months (&gt; 12 Months → Section 112A LTCG)</div>
            <div>• Statutory Exemption: ₹1,25,000</div>
            <div>• Net Taxable Capital Gain: ₹3,50,000 - ₹1,25,000 = ₹2,25,000</div>
            <div>• Base Tax @ 12.5%: ₹2,25,000 × 0.125 = ₹28,125</div>
            <div>• + 4% Health & Education Cess: ₹28,125 × 0.04 = ₹1,125</div>
            <div className="text-rose-400 font-bold pt-1 border-t border-slate-800">
              • Total Tax Liability: ₹28,125 + ₹1,125 = ₹29,250 (Effective Tax Rate: 8.36%)
            </div>
            <div className="text-emerald-400 font-extrabold text-sm">
              • Net Post-Tax Profit In Hand: ₹3,50,000 - ₹29,250 = ₹3,20,750
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            <strong>Key Insight:</strong> Thanks to the statutory ₹1.25 Lakh tax-free bracket, the effective tax rate on a ₹3.5 Lakh capital gain is only <strong>8.36%</strong>, leaving over 91.6% of your profits in your pocket.
          </p>
        </>
      }
      howToReadResults={
        <>
          <p>
            <strong>The Tax-Loss Harvesting Strategy:</strong> Every financial year, you can harvest up to ₹1,25,000 in long-term equity capital gains completely tax-free under Section 112A. Redeeming and immediately reinvesting equity units allows you to step up your acquisition cost base, eliminating future tax drag.
          </p>
          <p>
            <strong>Advance Tax Calendar:</strong> If your total estimated net tax liability (after TDS) exceeds ₹10,000 in a financial year, remember to remit advance tax installments on capital gains realized during each quarter (by 15th June, 15th Sept, 15th Dec, and 15th March) to avoid Section 234C interest penalties.
          </p>
        </>
      }
      statutoryNotes={
        <>
          <p><strong>Set-Off Rules (Section 70(3)):</strong> Long-term capital losses (LTCL) can only be set off against long-term capital gains. They cannot be adjusted against short-term capital gains or salary income.</p>
        </>
      }
      faqs={[
        {
          question: 'Can LTCG losses on equity be set off against STCG gains?',
          answer: 'No. Under Section 70(3) of the Income Tax Act, long-term capital losses (LTCL) can only be set off against long-term capital gains. They cannot be adjusted against short-term capital gains or salary income.',
        },
        {
          question: 'Is grandfathering protection still available for equity bought before January 31, 2018?',
          answer: 'Yes. The grandfathering mechanism under Section 55(2)(ac) remains legally binding: the cost of acquisition for listed shares acquired before February 1, 2018 is deemed to be the higher of actual purchase price or lower of the fair market value (highest price on Jan 31, 2018) and actual sale value.',
        },
        {
          question: 'Are capital gains tax exemptions available for reinvestment under Section 54F?',
          answer: 'Yes. Assessees realizing long-term capital gains from equity securities can claim exemption under Section 54F if the entire net consideration is deployed into acquiring or constructing a residential house property in India within statutory time windows, subject to a ₹10 Crore statutory cap.',
        },
        {
          question: 'What is the taxation of unlisted equity shares in India?',
          answer: 'Under the Finance Act 2024 revisions, unlisted shares (startups, pre-IPO stocks) have a 24-month holding period for LTCG and are taxed at 12.5% without indexation. STCG on unlisted shares is taxed at the assessee marginal income tax slab rate.',
        },
        {
          question: 'How are capital losses carried forward to subsequent assessment years?',
          answer: 'Under Section 74, unadjusted short-term and long-term capital losses can be carried forward for up to 8 assessment years, provided the income tax return is filed on or before the due date under Section 139(1).',
        },
      ]}
      relatedArticles={[
        {
          title: 'SIP vs Lump Sum Investing: Rupee Cost Averaging and Market Volatility',
          path: '/articles/sip-vs-lump-sum-investing',
          readTime: '9 min',
          summary: 'A rigorous comparative analysis of systematic monthly investing versus one-time lump-sum capital deployment.',
        },
        {
          title: 'New vs Old Tax Regime in India: Slabs, Deductions, and Break-Even Salary Analysis',
          path: '/articles/new-vs-old-tax-regime',
          readTime: '10 min',
          summary: 'A statutory guide for salaried and professional taxpayers navigating Section 115BAC.',
        },
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 space-y-4">
          <div className="space-y-1.5">
            <label htmlFor="cg-asset-select" className="block text-xs font-semibold text-slate-300 uppercase tracking-wide">Asset Category</label>
            <select
              id="cg-asset-select"
              value={assetType}
              onChange={(e) => setAssetType(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 text-slate-200 rounded-lg px-3 py-2 text-sm focus:border-amber-500 focus:outline-none"
            >
              <option value="equity">Listed Equity Shares / Mutual Funds (&gt;65% equity)</option>
              <option value="debt">Debt Mutual Funds (Sec 50AA - Marginal Slab Rate)</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="cg-buy-input" className="block text-xs font-semibold text-slate-300 uppercase tracking-wide">Purchase Cost (₹)</label>
              <input
                id="cg-buy-input"
                type="number"
                inputMode="numeric"
                value={buyCost}
                step={10000}
                min={0}
                onChange={(e) => setBuyCost(Number(e.target.value))}
                className="w-full bg-slate-950 border border-slate-700 text-slate-100 rounded-lg px-3.5 py-2 font-mono text-sm focus:border-amber-500 focus:outline-none"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="cg-sale-input" className="block text-xs font-semibold text-slate-300 uppercase tracking-wide">Sale Price (₹)</label>
              <input
                id="cg-sale-input"
                type="number"
                inputMode="numeric"
                value={salePrice}
                step={10000}
                min={0}
                onChange={(e) => setSalePrice(Number(e.target.value))}
                className="w-full bg-slate-950 border border-slate-700 text-slate-100 rounded-lg px-3.5 py-2 font-mono text-sm focus:border-amber-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between text-xs text-slate-300">
              <label htmlFor="cg-holding-input" className="font-semibold uppercase">Holding Period (Months)</label>
              <span className="text-amber-400 font-mono font-bold">{holdingMonths} Months</span>
            </div>
            <input
              id="cg-holding-input"
              type="range"
              min="1"
              max="60"
              step="1"
              value={holdingMonths}
              onChange={(e) => setHoldingMonths(Number(e.target.value))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-400">
            Holding Rule: Equity held &gt; 12 months is LTCG. Short-term holding (&le; 12 months) is STCG.
          </div>
        </div>

        <div className="lg:col-span-6 bg-slate-950 border border-slate-800 rounded-lg p-6 flex flex-col justify-between space-y-6 min-h-[220px]">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Realized Gross Gain</span>
              <span className="text-lg font-mono font-bold text-slate-200 tabular-nums">{formatINR(gain)}</span>
            </div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Applicable Tax Classification</span>
              <span className="text-sm font-mono font-bold text-amber-400">{classification}</span>
            </div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-rose-400">Tax Liability (+4% Cess)</span>
              <span className="text-lg font-mono font-bold text-rose-400 tabular-nums">{formatINR(tax)}</span>
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Net Post-Tax Profit In Hand</span>
              <span className="text-2xl font-mono font-extrabold text-emerald-400 tabular-nums">{formatINR(netInHand)}</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={copyResults}
              className="w-full py-2.5 px-4 text-xs font-semibold text-slate-200 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              {copied ? '✓ Copied to Clipboard!' : 'Copy Capital Gains Assessment'}
            </button>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}

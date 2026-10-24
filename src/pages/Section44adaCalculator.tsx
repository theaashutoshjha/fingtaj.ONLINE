import React, { useState } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';

export default function Section44adaCalculator() {
  const [gross, setGross] = useState<number>(4500000);
  const [regime, setRegime] = useState<string>('new');
  const [copied, setCopied] = useState<boolean>(false);

  // 50% deemed taxable income
  const deemed = gross * 0.50;
  let tax = 0;

  if (regime === 'new') {
    if (deemed > 1500000) tax = 140000 + (deemed - 1500000) * 0.30;
    else if (deemed > 1200000) tax = 80000 + (deemed - 1200000) * 0.20;
    else if (deemed > 1000000) tax = 50000 + (deemed - 1000000) * 0.15;
    else if (deemed > 700000) tax = 20000 + (deemed - 700000) * 0.10;
    else if (deemed > 300000) tax = (deemed - 300000) * 0.05;

    if (deemed <= 700000) tax = 0;
  } else {
    const taxableOld = Math.max(0, deemed - 175000); // 1.5L 80C + 25k 80D
    if (taxableOld > 1000000) tax = 112500 + (taxableOld - 1000000) * 0.30;
    else if (taxableOld > 500000) tax = 12500 + (taxableOld - 500000) * 0.20;
    else if (taxableOld > 250000) tax = (taxableOld - 250000) * 0.05;

    if (taxableOld <= 500000) tax = 0;
  }

  const totalTax = tax * 1.04;
  const effectiveRate = gross > 0 ? (totalTax / gross) * 100 : 0;
  const formatINR = (val: number) => '₹' + Math.round(val).toLocaleString('en-IN');

  const copyResults = () => {
    const text = `Section 44ADA: Gross Receipts ${formatINR(gross)} => Deemed Taxable Income: ${formatINR(deemed)}, Tax: ${formatINR(totalTax)} (Effective Rate: ${effectiveRate.toFixed(2)}%)`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <CalculatorLayout
      category="Professional & Freelancer Taxes"
      badge="Section 44ADA Presumptive"
      title="Presumptive Professional Tax Calculator (Section 44ADA)"
      subtitle="Model deemed taxable income (50% presumptive profit rule), advance tax liabilities, and statutory compliance exemptions for developers, consultants, and notified professionals."
      formula="Deemed Taxable Profit = Max [ 0.50 × Gross Professional Receipts, Declared Profit ]"
      mathematicalPrinciples={
        <>
          <p>
            Section 44ADA was introduced under the Income Tax Act to simplify compliance for individual resident professionals, sole proprietorships, and partnership firms (excluding LLPs) engaged in notified professions. Eligible vocations defined under Section 44AA(1) encompass software development, legal, medical, engineering, architectural, accountancy, technical consultancy, and interior decoration.
          </p>
          <p>
            Under this presumptive regime, profits and gains from profession are deemed conclusively to be 50% of gross receipts. Assessees are legally exempt from maintaining cumbersome statutory books of account under Section 44AA or undergoing mandatory tax audit under Section 44AB.
          </p>
        </>
      }
      variables={[
        { variable: 'Gross Receipts', name: 'Annual Turnover', definition: 'Aggregate billings from notified professional services up to ₹75,00,000.' },
        { variable: 'Deemed Income (50%)', name: 'Statutory Profit Floor', definition: 'Presumed taxable income without requiring expense bills or depreciation schedules.' },
        { variable: 'Advance Tax', name: 'Payment Deadline', definition: 'Exempt from quarterly installments; 100% advance tax payable on or before March 15.' },
      ]}
      statutoryNotes={
        <>
          <p><strong>Digital Receipts Threshold:</strong> The statutory limit of ₹75 Lakhs applies provided cash receipts do not exceed 5% of gross turnover; otherwise, capped at ₹50 Lakhs.</p>
          <p><strong>Section 44ADA(2) Expense Blanket:</strong> No separate deduction for office rent, hardware, or staff salaries is permitted from the 50% deemed income.</p>
        </>
      }
      faqs={[
        {
          question: 'Can a professional declare income below 50% under Section 44ADA?',
          answer: 'Yes, but doing so forfeits the presumptive exemptions. If an assessee claims that actual profits are lower than 50% and total income exceeds the basic exemption limit, they are legally compelled under Section 44ADA(4) to maintain formal books of account under Section 44AA and obtain a Chartered Accountant tax audit report under Section 44AB.',
        },
        {
          question: 'Are Limited Liability Partnerships (LLPs) permitted to adopt Section 44ADA?',
          answer: 'No. The statutory definition under Section 44ADA(1) restricts eligibility to resident individuals and partnership firms. Limited Liability Partnerships (LLPs) and private limited corporations are expressly prohibited from utilizing Section 44ADA presumptive accounting.',
        },
        {
          question: 'Can separate business expenses or depreciation be deducted from deemed 50% income?',
          answer: 'No. Under Section 44ADA(2), all allowable deductions under Sections 30 to 38 (including office rent, hardware depreciation, Internet costs, and employee wages) are deemed to have been fully given effect within the 50% statutory expense allowance.',
        },
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 space-y-4">
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label htmlFor="p44-gross-input" className="block text-xs font-semibold text-slate-300 uppercase tracking-wide">Gross Annual Professional Receipts (₹)</label>
              <span className="text-xs text-slate-500">Max Limit: ₹75 Lakhs</span>
            </div>
            <input
              id="p44-gross-input"
              type="number"
              inputMode="numeric"
              value={gross}
              step={50000}
              min={100000}
              max={7500000}
              onChange={(e) => setGross(Number(e.target.value))}
              className="w-full bg-slate-950 border border-slate-700 text-slate-100 rounded-lg px-3.5 py-2 font-mono text-sm focus:border-cyan-500 focus:outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="p44-regime-select" className="block text-xs font-semibold text-slate-300 uppercase tracking-wide">Assessment Tax Regime</label>
            <select
              id="p44-regime-select"
              value={regime}
              onChange={(e) => setRegime(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 text-slate-200 rounded-lg px-3 py-2 text-sm focus:border-cyan-500 focus:outline-none"
            >
              <option value="new">New Tax Regime (Section 115BAC Slabs)</option>
              <option value="old">Old Tax Regime (Standard Slabs + ₹1.5L 80C)</option>
            </select>
          </div>

          <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-400">
            Receipts Threshold Note: Statutory limit is ₹75,00,000 provided non-cash/digital receipts constitute &ge; 95% of total turnover.
          </div>
        </div>

        <div className="lg:col-span-6 bg-slate-950 border border-slate-800 rounded-lg p-6 flex flex-col justify-between space-y-6 min-h-[220px]">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Deemed Taxable Income (50%)</span>
              <span className="text-xl font-mono font-bold text-white tabular-nums">{formatINR(deemed)}</span>
            </div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-rose-400">Total Tax Payable (+4% Cess)</span>
              <span className="text-lg font-mono font-bold text-rose-400 tabular-nums">{formatINR(totalTax)}</span>
            </div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Effective Tax Rate</span>
              <span className="text-lg font-mono font-bold text-emerald-400 tabular-nums">{effectiveRate.toFixed(2)}%</span>
            </div>

            <div className="p-2.5 bg-slate-900 rounded border border-slate-800 text-xs text-slate-300">
              Advance Tax Rule: Section 44ADA assessees pay 100% advance tax in a single tranche on or before <span className="text-cyan-400 font-bold">March 15</span>.
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={copyResults}
              className="w-full py-2.5 px-4 text-xs font-semibold text-slate-200 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              {copied ? '✓ Copied to Clipboard!' : 'Copy Section 44ADA Breakdown'}
            </button>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}

import React, { useState } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';
import { Link } from 'react-router-dom';

export default function IncomeTaxCalculator() {
  const [salary, setSalary] = useState<number>(1500000);
  const [sec80c, setSec80c] = useState<number>(150000);
  const [sec80d, setSec80d] = useState<number>(25000);
  const [hra, setHra] = useState<number>(120000);
  const [homeInterest, setHomeInterest] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  // New Regime (115BAC) under Finance Act 2024 revisions
  const newStandardDeduction = 75000;
  const newTaxable = Math.max(0, salary - newStandardDeduction);
  let newTax = 0;
  if (newTaxable > 1500000) newTax = 140000 + (newTaxable - 1500000) * 0.30;
  else if (newTaxable > 1200000) newTax = 80000 + (newTaxable - 1200000) * 0.20;
  else if (newTaxable > 1000000) newTax = 50000 + (newTaxable - 1000000) * 0.15;
  else if (newTaxable > 700000) newTax = 20000 + (newTaxable - 700000) * 0.10;
  else if (newTaxable > 300000) newTax = (newTaxable - 300000) * 0.05;

  if (newTaxable <= 700000) newTax = 0;
  else if (newTaxable > 700000 && newTaxable <= 727777) {
    newTax = Math.min(newTax, newTaxable - 700000);
  }
  const newTotal = newTax * 1.04;

  // Old Regime
  const oldStandardDeduction = 50000;
  const totalOldDeductions = oldStandardDeduction + Math.min(sec80c, 150000) + sec80d + hra + Math.min(homeInterest, 200000);
  const oldTaxable = Math.max(0, salary - totalOldDeductions);
  let oldTax = 0;
  if (oldTaxable > 1000000) oldTax = 112500 + (oldTaxable - 1000000) * 0.30;
  else if (oldTaxable > 500000) oldTax = 12500 + (oldTaxable - 500000) * 0.20;
  else if (oldTaxable > 250000) oldTax = (oldTaxable - 250000) * 0.05;

  if (oldTaxable <= 500000) oldTax = 0;
  const oldTotal = oldTax * 1.04;

  const diff = Math.abs(newTotal - oldTotal);
  const formatINR = (val: number) => '₹' + Math.round(val).toLocaleString('en-IN');

  const copyResults = () => {
    const rec = newTotal < oldTotal ? `Save ${formatINR(diff)} in New Regime` : `Save ${formatINR(diff)} in Old Regime`;
    const text = `Income Tax Comparison: Gross ${formatINR(salary)} => New Regime Tax: ${formatINR(newTotal)} | Old Regime Tax: ${formatINR(oldTotal)} (${rec})`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <CalculatorLayout
      category="Direct Taxation"
      badge="Section 115BAC Comparison"
      title="Income Tax Comparison Calculator (New vs. Old Regime FY 2024–2026)"
      subtitle="Compare statutory direct tax liability between the default concessional New Regime (Section 115BAC with enhanced ₹75,000 standard deduction) and the Old Slab structure with Chapter VI-A deductions."
      formula="Tax = Σ [ Slab Income × Rate ] - Sec 87A Rebate + 4% Health & Education Cess"
      whoItsFor={
        <>
          <p>
            <strong>What It Computes:</strong> This statutory tool provides a line-by-line comparative assessment of your net income tax liability under India's two concurrent taxation frameworks: the default New Tax Regime (Section 115BAC) and the traditional Old Tax Regime with itemized Chapter VI-A deductions.
          </p>
          <p>
            <strong>Target Audience:</strong> Indispensable for salaried corporate employees declaring tax regimes to payroll teams (via Form 12BB), pensioners, and self-employed consultants determining whether lock-in investments (PPF, ELSS, insurance) save enough tax to justify opting out of Section 115BAC.
          </p>
        </>
      }
      mathematicalPrinciples={
        <>
          <p>
            The Indian direct taxation framework bifurcates assessment into two distinct paths: the concessional New Tax Regime introduced under Section 115BAC (designated as the default regime under the Finance Act), and the traditional Old Tax Regime.
          </p>
          <p>
            The New Regime offers compressed slab rates but disallows conventional exemptions such as House Rent Allowance (Section 10(13A)), Chapter VI-A investments (80C, 80D), and interest on self-occupied housing loans (Section 24(b)). However, the standard deduction for salaried individuals under Section 115BAC has been statutorily enhanced to ₹75,000, and full tax rebate under Section 87A neutralizes tax for net incomes up to ₹7,00,000 (effective taxable threshold of ₹7,75,000 for salaried assessees).
          </p>
        </>
      }
      formulaExplanation={
        <>
          <p>
            Under both regimes, tax is computed progressively using marginal rate brackets:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-300">
            <li><strong>New Regime Taxable Base:</strong> <code className="text-amber-300">Gross Salary - ₹75,000 Standard Deduction</code>. Slabs apply at 5% (₹3L–₹7L), 10% (₹7L–₹10L), 15% (₹10L–₹12L), 20% (₹12L–₹15L), and 30% (&gt; ₹15L).</li>
            <li><strong>Old Regime Taxable Base:</strong> <code className="text-amber-300">Gross Salary - (₹50k Std Deduction + Min(80C, ₹1.5L) + 80D + HRA + Min(Sec 24b, ₹2L))</code>. Slabs apply at 5% (₹2.5L–₹5L), 20% (₹5L–₹10L), and 30% (&gt; ₹10L).</li>
            <li><strong>Rebate & Cess:</strong> Section 87A rebate wipes out tax if taxable base ≤ ₹7L (New) or ≤ ₹5L (Old). Finally, a mandatory 4% Health & Education Cess is levied on the net tax amount.</li>
          </ul>
        </>
      }
      variables={[
        { variable: 'Gross CTC', name: 'Annual Gross Salary', definition: 'Aggregate annual compensation package inclusive of basic pay, allowances, and bonuses.' },
        { variable: 'Std Deduction', name: 'Standard Deduction', definition: '₹75,000 under Section 115BAC New Regime; ₹50,000 under Old Slab Regime.' },
        { variable: 'Sec 80C', name: 'Chapter VI-A Investments', definition: 'Statutory deduction up to ₹1,50,000 covering EPF, PPF, ELSS, and term life insurance (Old Regime only).' },
        { variable: 'Sec 87A', name: 'Tax Rebate', definition: '100% tax rebate up to ₹7,00,000 taxable income in New Regime; up to ₹5,00,000 in Old Regime.' },
      ]}
      workedExample={
        <>
          <div className="font-semibold text-white mb-1">
            Real-World Scenario: ₹15,00,000 Gross Salary with ₹1.5L 80C, ₹25k 80D, and ₹1.2L HRA
          </div>
          <p className="text-xs text-slate-300">
            Let us compare an IT professional with ₹15,00,000 gross annual pay:
          </p>
          <div className="space-y-1.5 font-mono text-xs bg-slate-900/60 p-3 rounded border border-slate-800/80 mt-2">
            <div className="text-amber-300 font-bold">A. New Tax Regime (Section 115BAC):</div>
            <div>• Net Taxable: ₹15,00,000 - ₹75,000 = ₹14,25,000</div>
            <div>• ₹0 - ₹3,00,000: Nil</div>
            <div>• ₹3,00,000 - ₹7,00,000 (₹4L @ 5%): ₹20,000</div>
            <div>• ₹7,00,000 - ₹10,00,000 (₹3L @ 10%): ₹30,000</div>
            <div>• ₹10,00,000 - ₹12,00,000 (₹2L @ 15%): ₹30,000</div>
            <div>• ₹12,00,000 - ₹14,25,000 (₹2.25L @ 20%): ₹45,000</div>
            <div>• Base Tax: ₹1,25,000 | +4% Cess: ₹5,000 = <strong className="text-amber-300">₹1,30,000</strong></div>
            <div className="pt-2 border-t border-slate-800 text-amber-300 font-bold">B. Old Tax Regime:</div>
            <div>• Deductions: ₹50k Std + ₹1.5L 80C + ₹25k 80D + ₹1.2L HRA = ₹3,45,000</div>
            <div>• Net Taxable: ₹15,00,000 - ₹3,45,000 = ₹11,55,000</div>
            <div>• Slabs Tax: ₹12,500 (5%) + ₹1,00,000 (20%) + ₹46,500 (30%) = ₹1,59,000</div>
            <div>• Base Tax: ₹1,59,000 | +4% Cess: ₹6,360 = <strong className="text-amber-300">₹1,65,360</strong></div>
            <div className="pt-1 text-emerald-400 font-bold text-sm">
              • Verdict: New Regime saves ₹35,360 in net taxes!
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            <strong>Key Insight:</strong> Even with ₹3,45,000 in deductions, the New Regime wins because its tax slabs (10%, 15%, 20%) are much lower than the Old Regime 20% and 30% brackets.
          </p>
        </>
      }
      howToReadResults={
        <>
          <p>
            <strong>The Break-Even Deduction Threshold:</strong> If your total eligible exemptions (80C + 80D + HRA + Home Loan interest) exceed approximately ₹3,85,000 to ₹4,25,000, the Old Regime starts saving you tax. Below that threshold, the New Regime is superior.
          </p>
          <p>
            <strong>Zero Tax up to ₹7.75 Lakh:</strong> Salaried individuals earning up to ₹7,75,000 pay zero income tax in the New Regime due to the ₹75,000 standard deduction and Section 87A rebate.
          </p>
        </>
      }
      statutoryNotes={
        <>
          <p><strong>Finance Act 2024–2026 Directives:</strong> Section 115BAC is the statutory default assessment path. Salaried assessees may elect to opt into the Old Tax Regime annually at the time of filing their ITR.</p>
          <p>Assessees with business or professional income (PGBP) can toggle regimes only once in their lifetime using Form 10-IEA.</p>
        </>
      }
      faqs={[
        {
          question: 'What is the mathematical breakeven threshold of deductions between Old and New regimes?',
          answer: 'For an individual earning ₹15 Lakhs gross income, total eligible Chapter VI-A deductions and exemptions (80C + 80D + HRA + Sec 24(b) interest) must exceed approximately ₹3,75,000 to ₹4,00,000 for the Old Regime to yield lower net liability than Section 115BAC. If cumulative deductions are below this breakeven threshold, the New Regime reliably saves capital.',
        },
        {
          question: 'Can a salaried employee switch regimes annually upon filing Form 10-IEA?',
          answer: 'Yes. Assessees without business or professional income (salaried taxpayers) have the statutory flexibility to toggle between the New and Old regimes on an annual basis directly within the ITR filing utility.',
        },
        {
          question: 'How does marginal relief function under Section 87A in the New Regime?',
          answer: 'Marginal relief ensures that when taxable income slightly surpasses ₹7,00,000 (e.g. ₹7,15,000), the incremental tax payable cannot exceed the incremental income earned above ₹7,00,000.',
        },
        {
          question: 'Are employer NPS contributions tax-free under the New Tax Regime?',
          answer: 'Yes. Under Section 80CCD(2), employer contributions to your NPS account up to 14% of salary for government employees and 10% for corporate employees continue to be tax-deductible even under the New Tax Regime.',
        },
        {
          question: 'What is the standard deduction for pensioners in the New Regime?',
          answer: 'Under the Finance Act 2024, family pensioners receive an enhanced standard deduction of ₹25,000 (up from ₹15,000), while standard pensioners receive the full ₹75,000 standard deduction under Section 115BAC.',
        },
      ]}
      relatedArticles={[
        {
          title: 'New vs Old Tax Regime in India: Slabs, Deductions, and Break-Even Salary Analysis',
          path: '/articles/new-vs-old-tax-regime',
          readTime: '10 min',
          summary: 'A statutory guide for salaried and professional taxpayers navigating Section 115BAC, standard deduction, and break-even math.',
        },
        {
          title: 'How Loan EMI is Calculated: The Reducing Balance Formula & Prepayment Impact',
          path: '/articles/how-loan-emi-is-calculated',
          readTime: '8 min',
          summary: 'Understand how Section 24(b) home loan interest deductions compare between the Old and New Tax Regimes.',
        },
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 space-y-4">
          <div className="space-y-1.5">
            <label htmlFor="tax-salary-input" className="block text-xs font-semibold text-slate-300 uppercase tracking-wide">Gross Annual Taxable Salary / CTC (₹)</label>
            <input
              id="tax-salary-input"
              type="number"
              inputMode="numeric"
              value={salary}
              step={25000}
              min={0}
              onChange={(e) => setSalary(Number(e.target.value))}
              className="w-full bg-slate-950 border border-slate-700 text-slate-100 rounded-lg px-3.5 py-2 font-mono text-sm focus:border-amber-500 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="tax-80c-input" className="block text-xs font-semibold text-slate-300 uppercase tracking-wide">Section 80C (Max ₹1.5L)</label>
              <input
                id="tax-80c-input"
                type="number"
                inputMode="numeric"
                value={sec80c}
                step={5000}
                max={150000}
                min={0}
                onChange={(e) => setSec80c(Number(e.target.value))}
                className="w-full bg-slate-950 border border-slate-700 text-slate-100 rounded-lg px-3.5 py-2 font-mono text-sm focus:border-amber-500 focus:outline-none"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="tax-80d-input" className="block text-xs font-semibold text-slate-300 uppercase tracking-wide">Section 80D Health Cover (₹)</label>
              <input
                id="tax-80d-input"
                type="number"
                inputMode="numeric"
                value={sec80d}
                step={2500}
                min={0}
                onChange={(e) => setSec80d(Number(e.target.value))}
                className="w-full bg-slate-950 border border-slate-700 text-slate-100 rounded-lg px-3.5 py-2 font-mono text-sm focus:border-amber-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="tax-hra-input" className="block text-xs font-semibold text-slate-300 uppercase tracking-wide">HRA Exemption (Old)</label>
              <input
                id="tax-hra-input"
                type="number"
                inputMode="numeric"
                value={hra}
                step={5000}
                min={0}
                onChange={(e) => setHra(Number(e.target.value))}
                className="w-full bg-slate-950 border border-slate-700 text-slate-100 rounded-lg px-3.5 py-2 font-mono text-sm focus:border-amber-500 focus:outline-none"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="tax-home-input" className="block text-xs font-semibold text-slate-300 uppercase tracking-wide">Sec 24(b) Home Interest</label>
              <input
                id="tax-home-input"
                type="number"
                inputMode="numeric"
                value={homeInterest}
                step={10000}
                max={200000}
                min={0}
                onChange={(e) => setHomeInterest(Number(e.target.value))}
                className="w-full bg-slate-950 border border-slate-700 text-slate-100 rounded-lg px-3.5 py-2 font-mono text-sm focus:border-amber-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="text-xs text-slate-400 bg-slate-950/60 p-3 rounded-lg border border-slate-800">
            Standard deduction applied: <span className="text-amber-400 font-mono">₹75,000</span> for New Regime; <span className="text-slate-300 font-mono">₹50,000</span> for Old Regime. Health & Education Cess: <span className="text-slate-300 font-mono">4%</span>.
          </div>
        </div>

        <div className="lg:col-span-6 bg-slate-950 border border-slate-800 rounded-lg p-6 flex flex-col justify-between space-y-6 min-h-[220px]">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-sm font-semibold text-white">Comparative Breakdown</span>
              <span className={`text-xs font-bold px-2 py-0.5 rounded ${newTotal <= oldTotal ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-amber-950 text-amber-400 border border-amber-800'}`}>
                {newTotal <= oldTotal ? 'New Regime Saves More' : 'Old Regime Saves More'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-3 bg-slate-900/60 rounded border border-slate-800">
                <div className="text-slate-400 font-sans text-xs font-semibold uppercase">New Regime (115BAC)</div>
                <div className="mt-2 text-slate-300 text-xs">Taxable: <span className="text-white font-bold">{formatINR(newTaxable)}</span></div>
                <div className="mt-2 text-amber-300 text-base font-bold pt-2 border-t border-slate-800">{formatINR(newTotal)}</div>
              </div>

              <div className="p-3 bg-slate-900/60 rounded border border-slate-800">
                <div className="text-slate-400 font-sans text-xs font-semibold uppercase">Old Slab Regime</div>
                <div className="mt-2 text-slate-300 text-xs">Taxable: <span className="text-white font-bold">{formatINR(oldTaxable)}</span></div>
                <div className="mt-2 text-amber-300 text-base font-bold pt-2 border-t border-slate-800">{formatINR(oldTotal)}</div>
              </div>
            </div>

            <div className="p-3 bg-slate-900 rounded border border-slate-800 flex justify-between items-center text-xs">
              <span className="text-slate-300">Estimated Annual Difference:</span>
              <span className="text-emerald-400 font-mono font-bold text-sm">
                Save {formatINR(diff)} {newTotal <= oldTotal ? 'in New' : 'in Old'}
              </span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={copyResults}
              className="w-full py-2.5 px-4 text-xs font-semibold text-slate-200 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              {copied ? '✓ Copied to Clipboard!' : 'Copy Tax Comparison Summary'}
            </button>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}

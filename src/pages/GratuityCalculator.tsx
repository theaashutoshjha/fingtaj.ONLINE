import React, { useState } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';

export default function GratuityCalculator() {
  const [salary, setSalary] = useState<number>(95000);
  const [years, setYears] = useState<number>(12);
  const [copied, setCopied] = useState<boolean>(false);

  // Gratuity = (15 * Last Drawn Salary * Tenure) / 26
  const total = (15 * salary * years) / 26;
  const statutoryCap = 2000000; // ₹20 Lakhs
  const taxFree = Math.min(total, statutoryCap);
  const taxable = Math.max(0, total - statutoryCap);

  const formatINR = (val: number) => '₹' + Math.round(val).toLocaleString('en-IN');

  const copyResults = () => {
    const text = `Gratuity Calculation: Basic+DA ${formatINR(salary)} for ${years} yrs => Entitlement: ${formatINR(total)}, Tax-Free: ${formatINR(taxFree)}, Taxable: ${formatINR(taxable)}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <CalculatorLayout
      category="Terminal Benefits & Labour Laws"
      badge="Payment of Gratuity Act 1972"
      title="Gratuity Benefit Calculator (15/26 Working Day Factor)"
      subtitle="Compute statutory gratuity entitlement, 15/26 wage factoring, and compare against the Section 10(10) ₹20 Lakh lifetime tax-free ceiling."
      formula="Gratuity = ( 15 × Last Drawn Monthly Salary × Completed Years of Service ) / 26"
      mathematicalPrinciples={
        <>
          <p>
            The Payment of Gratuity Act, 1972 mandates statutory terminal separation compensation to employees in commercial and industrial establishments with 10 or more staff members. Gratuity vests after completion of minimum 5 consecutive years of service.
          </p>
          <p>
            For organizations covered under the Act, the formula assumes a 26-working-day calendar month (excluding 4 statutory weekly rest days), granting 15 days of last drawn wage per completed year of tenure. Any tenure portion in excess of six months is rounded upward to a full calendar year. Under Section 10(10) of the Income Tax Act, the lifetime statutory exemption ceiling for non-government private employees stands at ₹20,00,000.
          </p>
        </>
      }
      variables={[
        { variable: 'Salary', name: 'Last Drawn Basic + DA', definition: 'Last drawn basic pay plus dearness allowance. Excludes bonus, commission, and HRA.' },
        { variable: 'Tenure', name: 'Completed Years of Service', definition: 'Continuous service years. Period exceeding 6 months is rounded to the next full year.' },
        { variable: 'Divisor (26)', name: 'Working Days per Month', definition: 'Statutory monthly working day convention established under Section 4(2).' },
        { variable: 'Sec 10(10) Cap', name: 'Tax-Free Limit', definition: 'Lifetime tax exemption ceiling fixed at ₹20,00,000 for private sector employees.' },
      ]}
      statutoryNotes={
        <>
          <p><strong>Section 4(1) Continuous Service Waiver:</strong> The 5-year vesting requirement is waived if employment is terminated due to death or permanent disablement.</p>
          <p><strong>Taxability of Excess:</strong> Gratuity received exceeding ₹20 Lakhs is taxable as salary income under Section 17(1).</p>
        </>
      }
      faqs={[
        {
          question: 'When does the 5-year continuous service rule get legally waived?',
          answer: 'Under the second proviso to Section 4(1) of the Payment of Gratuity Act, the mandatory 5-year vesting threshold is completely waived if termination of employment occurs due to the death of the employee or permanent total disablement resulting from accident or disease.',
        },
        {
          question: 'Can an employer legally pay gratuity above the ₹20 Lakh statutory cap?',
          answer: 'Yes. Employers are free to offer higher contractual gratuity under ex-gratia policies. However, any amount disbursed above the ₹20,00,000 statutory ceiling is treated as taxable salary under Section 17(1) of the Income Tax Act.',
        },
        {
          question: 'Does Last Drawn Salary include commissions, performance bonuses, or HRA?',
          answer: 'No. Section 2(s) of the Act restricts salary strictly to Basic Pay and Dearness Allowance (DA). Special allowances, performance incentives, overtime wages, and house rent allowance are strictly excluded from the statutory gratuity formula.',
        },
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label htmlFor="grat-salary-input" className="font-medium text-slate-200">Last Drawn Monthly Salary (Basic + DA)</label>
              <span className="font-mono text-cyan-400 font-semibold">{formatINR(salary)}</span>
            </div>
            <input
              id="grat-salary-input"
              type="range"
              min="15000"
              max="500000"
              step="5000"
              value={salary}
              onChange={(e) => setSalary(Number(e.target.value))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-500">
              <span>₹15,000</span>
              <span>₹2,50,000</span>
              <span>₹5,00,000</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label htmlFor="grat-years-input" className="font-medium text-slate-200">Completed Continuous Service (Years)</label>
              <span className="font-mono text-cyan-400 font-semibold">{years} Years</span>
            </div>
            <input
              id="grat-years-input"
              type="range"
              min="5"
              max="45"
              step="1"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-500">
              <span>5 Years (Vesting)</span>
              <span>25 Years</span>
              <span>45 Years</span>
            </div>
          </div>

          <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-400">
            Statutory Vesting Rule: Minimum 5 years of continuous service required (waived in case of death or disabling accident).
          </div>
        </div>

        <div className="lg:col-span-6 bg-slate-950 border border-slate-800 rounded-lg p-6 flex flex-col justify-between space-y-6 min-h-[220px]">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Total Statutory Gratuity</span>
              <span className="text-2xl font-mono font-extrabold text-cyan-300 tabular-nums">{formatINR(total)}</span>
            </div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Tax-Free Quantum (Section 10(10))</span>
              <span className="text-lg font-mono font-bold text-emerald-400 tabular-nums">{formatINR(taxFree)}</span>
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-rose-400">Taxable Gratuity (Above ₹20L Cap)</span>
              <span className="text-lg font-mono font-bold text-rose-400 tabular-nums">{formatINR(taxable)}</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={copyResults}
              className="w-full py-2.5 px-4 text-xs font-semibold text-slate-200 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              {copied ? '✓ Copied to Clipboard!' : 'Copy Gratuity Entitlement'}
            </button>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}

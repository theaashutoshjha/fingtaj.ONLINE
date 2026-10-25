import React, { useState } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';
import { Link } from 'react-router-dom';

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
      whoItsFor={
        <>
          <p>
            <strong>What It Computes:</strong> This statutory labour law engine calculates the exact separation gratuity payable by employers covered under the Payment of Gratuity Act, 1972. It computes your total statutory entitlement, tests against the ₹20 Lakh Section 10(10) lifetime tax-exempt ceiling, and isolates any taxable surplus.
          </p>
          <p>
            <strong>Target Audience:</strong> Designed for private corporate employees, industrial workers, mining personnel, and educational institution staff completing 5 or more years of continuous service who are retiring, resigning, or negotiating separation packages.
          </p>
        </>
      }
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
      formulaExplanation={
        <>
          <p>
            The statutory arithmetic behind the 15/26 formula:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-300">
            <li><strong>Last Drawn Salary:</strong> Defined under Section 2(s) strictly as <code className="text-amber-300">Last Basic Pay + Dearness Allowance (DA)</code>. Special allowances, commissions, bonuses, and HRA are statutorily excluded.</li>
            <li><strong>Why Divisor is 26:</strong> In a 30-day month, labour law deducts 4 statutory Sundays/rest days, arriving at 26 working days. Dividing monthly pay by 26 calculates the employee's exact daily wage.</li>
            <li><strong>15 Days Factor:</strong> An employee is legally entitled to 15 days of wages for every completed year of service.</li>
            <li><strong>Rounding Convention:</strong> Service tenure exceeding 6 months is rounded up to the nearest year (e.g., 7 years and 7 months is rounded to 8 years). Service under 6 months is ignored.</li>
          </ul>
        </>
      }
      variables={[
        { variable: 'Salary', name: 'Last Drawn Basic + DA', definition: 'Last drawn basic pay plus dearness allowance. Excludes bonus, commission, and HRA.' },
        { variable: 'Tenure', name: 'Completed Years of Service', definition: 'Continuous service years. Period exceeding 6 months is rounded to the next full year.' },
        { variable: 'Divisor (26)', name: 'Working Days per Month', definition: 'Statutory monthly working day convention established under Section 4(2).' },
        { variable: 'Sec 10(10) Cap', name: 'Tax-Free Limit', definition: 'Lifetime tax exemption ceiling fixed at ₹20,00,000 for private sector employees.' },
      ]}
      workedExample={
        <>
          <div className="font-semibold text-white mb-1">
            Real-World Scenario: A Senior Architect with Last Basic+DA of ₹95,000 Resigning after 12 Years of Service
          </div>
          <p className="text-xs text-slate-300">
            Let us calculate the gratuity payout for a private corporate employee:
          </p>
          <div className="space-y-1.5 font-mono text-xs bg-slate-900/60 p-3 rounded border border-slate-800/80 mt-2">
            <div>• Last Drawn Monthly Basic + DA: ₹95,000</div>
            <div>• Daily Wage Rate: ₹95,000 / 26 ≈ ₹3,653.85 / Day</div>
            <div>• Gratuity per Year of Service (15 Days): 15 × ₹3,653.85 ≈ ₹54,807.69</div>
            <div>• Total Completed Service Years: 12 Years</div>
            <div className="text-amber-300 font-bold pt-1 border-t border-slate-800">
              • Statutory Gratuity Entitlement: 12 × ₹54,807.69 = ₹6,57,692
            </div>
            <div className="text-emerald-400 font-bold">
              • Section 10(10) Tax-Exempt Amount: ₹6,57,692 (Well within the ₹20L Cap)
            </div>
            <div className="text-slate-300">
              • Taxable Gratuity: ₹0 (100% Tax-Free Cash Remittance)
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            <strong>Key Insight:</strong> The entire <strong>₹6,57,692</strong> is received completely tax-free and credited directly to the employee's bank account upon clearance of separation documentation.
          </p>
        </>
      }
      howToReadResults={
        <>
          <p>
            <strong>The ₹20 Lakh Statutory Exemption Cap:</strong> For private sector non-government employees, Section 10(10) limits the cumulative tax-free gratuity to ₹20,00,000 across your entire working lifetime (including all prior employers). Any gratuity disbursed above ₹20 Lakhs is added to salary and taxed at your marginal slab rate.
          </p>
          <p>
            <strong>Government Employee Exemption:</strong> Central, State, and defense government personnel enjoy 100% tax exemption on their entire gratuity without any statutory ceiling.
          </p>
        </>
      }
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
        {
          question: 'What is the rounding rule for partial years of service?',
          answer: 'If the duration of service beyond completed years exceeds 6 calendar months (e.g., 8 years and 7 months), it is rounded up to the next full year (9 years). If it is 6 months or less (e.g., 8 years and 4 months), it is rounded down to 8 years.',
        },
        {
          question: 'Can an employer forfeit an employee gratuity?',
          answer: 'Under Section 4(6) of the Act, gratuity can be forfeited only to the extent of financial damage caused if an employee was dismissed for willful riotous conduct, violence, moral turpitude, or fraud. An employer cannot forfeit gratuity for simple resignation or standard performance disputes.',
        },
      ]}
      relatedArticles={[
        {
          title: 'New vs Old Tax Regime in India: Slabs, Deductions, and Break-Even Salary Analysis',
          path: '/articles/new-vs-old-tax-regime',
          readTime: '10 min',
          summary: 'Learn how terminal separation benefits like Gratuity interact with Section 115BAC tax calculations.',
        },
        {
          title: 'Understanding Real vs Nominal Returns: How Inflation Stealthily Erodes Savings',
          path: '/articles/understanding-real-vs-nominal-returns',
          readTime: '8 min',
          summary: 'Discover how to deploy lump-sum terminal separation gratuity to maintain long-term purchasing power.',
        },
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label htmlFor="grat-salary-input" className="font-medium text-slate-200">Last Drawn Monthly Salary (Basic + DA)</label>
              <span className="font-mono text-amber-400 font-semibold">{formatINR(salary)}</span>
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
              <span className="font-mono text-amber-400 font-semibold">{years} Years</span>
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
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">Total Statutory Gratuity</span>
              <span className="text-2xl font-mono font-extrabold text-amber-300 tabular-nums">{formatINR(total)}</span>
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

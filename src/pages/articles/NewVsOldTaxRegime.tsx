import React from 'react';
import ArticleLayout from '../../components/ArticleLayout';
import { Link } from 'react-router-dom';

export default function NewVsOldTaxRegime() {
  return (
    <ArticleLayout
      title="New vs Old Tax Regime in India: Slabs, Deductions, and Break-Even Salary Analysis (FY 2024–2026)"
      subtitle="A definitive mathematical and statutory guide for salaried and professional taxpayers navigating Section 115BAC, the enhanced ₹75,000 standard deduction, and Chapter VI-A deductions."
      category="Direct Taxation"
      readTime="10 min"
      publishedDate="October 2026"
      calculatorLink={{
        name: 'Income Tax Calculator (Sec 115BAC)',
        path: '/income-tax-calculator',
        badge: 'Finance Act Slabs',
      }}
    >
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          1. The Statutory Pivot: Section 115BAC as the Default Regime
        </h2>
        <p>
          Following the enactments of Finance Act 2023 and the subsequent amendments in Finance Act 2024, the concessional <strong>New Tax Regime under Section 115BAC</strong> has been established as the statutory default regime for individuals, Hindu Undivided Families (HUFs), Association of Persons (AOPs), and Body of Individuals (BOIs).
        </p>
        <p>
          Taxpayers wishing to utilize the historical Old Tax Regime must now actively opt out by submitting <strong>Form 10-IEA</strong> prior to the filing deadline under Section 139(1) of the Income Tax Act, 1961.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          2. Updated Tax Slabs Under the New Tax Regime (FY 2024-25 & FY 2025-26)
        </h2>
        <p>
          Under the revised Section 115BAC framework, standard deduction for salaried employees and pensioners was enhanced from ₹50,000 to <strong>₹75,000</strong>. The updated slab structures are as follows:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-slate-800 my-4">
            <thead className="bg-slate-900 text-slate-300">
              <tr>
                <th className="p-3 border-b border-slate-800">Total Taxable Income Slab</th>
                <th className="p-3 border-b border-slate-800">New Regime (Sec 115BAC) Rate</th>
                <th className="p-3 border-b border-slate-800">Old Tax Regime Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              <tr>
                <td className="p-3">Up to ₹2,50,000</td>
                <td className="p-3 text-emerald-400 font-semibold">Nil</td>
                <td className="p-3 text-emerald-400 font-semibold">Nil</td>
              </tr>
              <tr>
                <td className="p-3">₹2,50,001 to ₹3,00,000</td>
                <td className="p-3 text-emerald-400 font-semibold">Nil</td>
                <td className="p-3 font-mono text-amber-400">5%</td>
              </tr>
              <tr>
                <td className="p-3">₹3,00,001 to ₹5,00,000</td>
                <td className="p-3 font-mono text-amber-400">5%</td>
                <td className="p-3 font-mono text-amber-400">5%</td>
              </tr>
              <tr>
                <td className="p-3">₹5,00,001 to ₹7,00,000</td>
                <td className="p-3 font-mono text-amber-400">5% (rebate up to ₹7L)</td>
                <td className="p-3 font-mono text-amber-400">20%</td>
              </tr>
              <tr>
                <td className="p-3">₹7,00,001 to ₹10,00,000</td>
                <td className="p-3 font-mono text-amber-400">10%</td>
                <td className="p-3 font-mono text-amber-400">20%</td>
              </tr>
              <tr>
                <td className="p-3">₹10,00,001 to ₹12,00,000</td>
                <td className="p-3 font-mono text-amber-400">15%</td>
                <td className="p-3 font-mono text-rose-400">30%</td>
              </tr>
              <tr>
                <td className="p-3">₹12,00,001 to ₹15,00,000</td>
                <td className="p-3 font-mono text-rose-400">20%</td>
                <td className="p-3 font-mono text-rose-400">30%</td>
              </tr>
              <tr>
                <td className="p-3">Above ₹15,00,000</td>
                <td className="p-3 font-mono text-rose-400 font-bold">30%</td>
                <td className="p-3 font-mono text-rose-400 font-bold">30%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs text-slate-400">
          *Note: Under Section 87A, a resident individual with taxable income up to ₹7,00,000 in the New Regime receives a tax rebate up to ₹25,000, reducing net tax to zero. Combined with the ₹75,000 standard deduction, salaried employees earning up to <strong>₹7,75,000 pay zero income tax</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          3. Deductions Allowed vs. Forfeited in the New Regime
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
            <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Permitted in New Regime (115BAC)</h3>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>✓ Enhanced Standard Deduction of ₹75,000 for salaried/pensioners.</li>
              <li>✓ Section 80CCD(2) employer contribution to NPS up to 14% of salary.</li>
              <li>✓ Transport allowance for specially-abled employees.</li>
              <li>✓ Voluntary retirement exemption under Section 10(10C) up to ₹5 Lakh.</li>
              <li>✓ Gratuity exemption under Section 10(10) up to ₹20 Lakh.</li>
            </ul>
          </div>

          <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
            <h3 className="text-xs font-bold text-rose-400 uppercase tracking-wider">Vacated / Not Allowed in New Regime</h3>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>✗ Section 80C deductions (PPF, ELSS, EPF, LIC, tuition) up to ₹1.5L.</li>
              <li>✗ Section 80D health insurance premiums up to ₹25k - ₹100k.</li>
              <li>✗ Section 10(13A) House Rent Allowance (HRA) exemption.</li>
              <li>✗ Section 24(b) Home loan interest deduction up to ₹2 Lakhs.</li>
              <li>✗ Leave Travel Concession (LTC) and standard children education allowance.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          4. The Mathematical Break-Even Analysis: When Does Old Regime Win?
        </h2>
        <p>
          Whether the Old or New Regime saves more tax depends entirely on your <strong>total aggregate eligible deductions</strong>.
        </p>
        <p>
          At an annual gross compensation of ₹15,00,000:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-300">
          <li>
            <strong>New Regime Tax Liability:</strong> Gross ₹15,00,000 - ₹75,000 standard deduction = ₹14,25,000 taxable. Slabs yield ₹1,35,000 + 4% cess = <strong>₹1,40,400</strong>.
          </li>
          <li>
            <strong>Old Regime Tax Liability:</strong> To beat ₹1,40,400 in the Old Regime, you must declare more than <strong>₹4,25,000 in aggregate deductions</strong> (e.g., ₹50k std deduction + ₹1.5L 80C + ₹50k 80D + ₹1.75L HRA/Home Loan interest).
          </li>
        </ul>
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs text-amber-300">
          Rule of Thumb: If your aggregate eligible deductions (80C + 80D + HRA + Home Loan Interest) exceed ₹3,75,000 to ₹4,25,000, the Old Regime usually results in lower net tax. If your deductions are below ₹3,50,000, the New Regime is overwhelmingly superior.
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          5. Actionable Advice for Tax Planning
        </h2>
        <p>
          Salaried individuals can choose their preferred regime when declaring taxes to their employer payroll team at the start of the financial year, and can switch regimes when filing their actual Income Tax Return (ITR-1 or ITR-2). However, individuals with business or professional income (ITR-3 / ITR-4) can only switch back to the Old Regime once in their lifetime!
        </p>
        <p>
          Test your specific salary structure, standard deduction, and Chapter VI-A deductions in real-time with the{' '}
          <Link to="/income-tax-calculator" className="text-amber-400 hover:underline font-semibold">
            FingTaj Income Tax Comparison Calculator
          </Link>{' '}
          or compute your exact rent relief in the{' '}
          <Link to="/hra-calculator" className="text-amber-400 hover:underline font-semibold">
            HRA Exemption Calculator
          </Link>.
        </p>
      </section>
    </ArticleLayout>
  );
}

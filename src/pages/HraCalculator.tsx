import React, { useState } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';
import { Link } from 'react-router-dom';

export default function HraCalculator() {
  const [basic, setBasic] = useState<number>(800000);
  const [hraReceived, setHraReceived] = useState<number>(360000);
  const [rentPaid, setRentPaid] = useState<number>(300000);
  const [isMetro, setIsMetro] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  const limit1 = hraReceived;
  const limit2 = Math.max(0, rentPaid - (0.10 * basic));
  const limit3 = (isMetro ? 0.50 : 0.40) * basic;
  const exempt = Math.min(limit1, limit2, limit3);
  const taxable = Math.max(0, hraReceived - exempt);

  const formatINR = (val: number) => '₹' + Math.round(val).toLocaleString('en-IN');

  const copyResults = () => {
    const text = `HRA Exemption: Exempt HRA: ${formatINR(exempt)}, Taxable HRA: ${formatINR(taxable)} (Actual Rent: ${formatINR(rentPaid)}, Basic+DA: ${formatINR(basic)})`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <CalculatorLayout
      category="Salary & Payroll Exemptions"
      badge="Section 10(13A) Rule 2A"
      title="House Rent Allowance (HRA) Exemption Calculator"
      subtitle="Compute tax-exempt and taxable HRA components under the statutory three-limit test prescribed by Section 10(13A) and Rule 2A of the Income-tax Rules 1962."
      formula="Exemption = Min [ Actual HRA, (Rent Paid - 10% of Basic), (50% or 40% of Basic) ]"
      whoItsFor={
        <>
          <p>
            <strong>What It Computes:</strong> This payroll tax calculator computes the exact statutory tax-exempt and taxable House Rent Allowance (HRA) fractions under Rule 2A of the Income-tax Rules, 1962. It tests your annual rent receipts against the three binding legal criteria and identifies which limit is governing your tax relief.
          </p>
          <p>
            <strong>Target Audience:</strong> Designed for salaried corporate and public sector employees living in rented accommodation who opt for the Old Tax Regime. It helps you prepare rental declarations for Form 12BB, plan tenancy agreements with landlords, and determine whether high metro rentals justify remaining in the Old Regime.
          </p>
        </>
      }
      mathematicalPrinciples={
        <>
          <p>
            House Rent Allowance (HRA) provided by employers to salaried assessees is eligible for tax exemption strictly under the Old Tax Regime pursuant to Section 10(13A) read alongside Rule 2A of the Income-tax Rules, 1962.
          </p>
          <p>
            The tax-exempt quantum is determined objectively as the minimum among three statutory limits: (a) Actual HRA received from the employer during the financial year; (b) Actual rent paid for residential accommodation in excess of 10% of salary (Basic + DA); or (c) 50% of salary for accommodation located in the four constitutional metros (Delhi, Mumbai, Kolkata, Chennai) or 40% of salary in non-metro jurisdictions. The remaining balance constitutes taxable salary.
          </p>
        </>
      }
      formulaExplanation={
        <>
          <p>
            The three statutory tests prescribed under Rule 2A operate as follows:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-300">
            <li><strong>Limit 1 (Actual HRA Received):</strong> Total HRA component reported in your Form 16 / monthly payslip.</li>
            <li><strong>Limit 2 (Excess Rent Test):</strong> <code className="text-amber-300">Rent Paid - 10% of (Basic + DA)</code>. The law assumes an employee should spend at least 10% of their base salary on housing; only rent exceeding this threshold is deductible.</li>
            <li><strong>Limit 3 (Location Ceiling):</strong> <code className="text-amber-300">50% of Basic Salary</code> in Delhi, Mumbai, Kolkata, or Chennai; <code className="text-amber-300">40% of Basic Salary</code> in Bengaluru, Hyderabad, Pune, and all other non-metro locations.</li>
            <li><strong>Taxable Portion:</strong> Any HRA received exceeding the lowest of these three limits is added directly to your gross taxable salary.</li>
          </ul>
        </>
      }
      variables={[
        { variable: 'Limit 1', name: 'Actual HRA Received', definition: 'The exact gross HRA amount reported in the employee monthly salary payslip or Form 16.' },
        { variable: 'Limit 2', name: 'Rent Paid minus 10% Salary', definition: 'Actual accommodation expenditure exceeding the statutory 10% baseline expectation.' },
        { variable: 'Limit 3', name: 'Metro / Non-Metro Cap', definition: '50% of Basic+DA for Mumbai, Delhi, Kolkata, Chennai; 40% for all other locations.' },
      ]}
      workedExample={
        <>
          <div className="font-semibold text-white mb-1">
            Real-World Scenario: Basic ₹8,00,000, HRA Received ₹3,60,000, Rent Paid ₹3,00,000 in Mumbai (Metro)
          </div>
          <p className="text-xs text-slate-300">
            Let us evaluate a salaried employee paying ₹25,000 monthly rent in a metro location:
          </p>
          <div className="space-y-1.5 font-mono text-xs bg-slate-900/60 p-3 rounded border border-slate-800/80 mt-2">
            <div>• Annual Basic Salary (Salary for HRA): ₹8,00,000</div>
            <div>• Annual HRA Received: ₹3,60,000 (₹30,000/mo)</div>
            <div>• Annual Rent Paid: ₹3,00,000 (₹25,000/mo)</div>
            <div className="pt-1 border-t border-slate-800 text-slate-300">• Test 1: Actual HRA Received = ₹3,60,000</div>
            <div className="text-emerald-400 font-bold">• Test 2: Rent Paid - 10% of Basic = ₹3,00,000 - ₹80,000 = ₹2,20,000 (Lowest / Binding Limit)</div>
            <div className="text-slate-300">• Test 3: 50% of Metro Basic = 50% of ₹8,00,000 = ₹4,00,000</div>
            <div className="text-emerald-400 font-extrabold text-sm pt-1 border-t border-slate-800">
              • Statutory Tax-Exempt HRA: ₹2,20,000
            </div>
            <div className="text-rose-400 font-bold">
              • Taxable HRA Component: ₹3,60,000 - ₹2,20,000 = ₹1,40,000
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            <strong>Key Insight:</strong> The employee reduces taxable income by <strong>₹2,20,000</strong>. At the 30% slab, this single exemption saves ₹68,640 in direct taxes!
          </p>
        </>
      }
      howToReadResults={
        <>
          <p>
            <strong>The Binding Constraint:</strong> Observe which of the three tests is binding (lowest). In almost 85% of cases, Limit 2 (Rent minus 10% of Basic) is the binding constraint. Increasing your rent or restructuring your salary to keep Basic around 40-50% of CTC optimizes this benefit.
          </p>
          <p>
            <strong>New Tax Regime Incompatibility:</strong> Under Section 115BAC, HRA cannot be claimed. If your exempt HRA exceeds ₹2,00,000 to ₹3,00,000, compare your net liability using our Income Tax Comparison tool before filing your return.
          </p>
        </>
      }
      statutoryNotes={
        <>
          <p><strong>Landlord PAN Mandatory Reporting:</strong> Where total annual rent exceeds ₹1,00,000 per financial year, the employee must report the landlord PAN to the employer under CBDT Circular mandates.</p>
          <p><strong>Regime Restriction:</strong> HRA exemption cannot be claimed under the Section 115BAC New Tax Regime.</p>
        </>
      }
      faqs={[
        {
          question: 'Is landlord PAN mandatory for claiming HRA tax exemption?',
          answer: 'Under CBDT Circular guidelines, if aggregate rent remitted to a landlord exceeds ₹1,00,000 per annum (approx ₹8,333 per month), the assessee must mandatorily report the landlord Permanent Account Number (PAN) or a signed statutory declaration under Form 60 to the employer.',
        },
        {
          question: 'Can an employee claim HRA while paying rent to parents?',
          answer: 'Yes, provided genuine banking transaction trails exist (electronic bank transfers, registered rent receipts, and tenancy agreement), the property is legally owned by the parents, and the parents declare this rental receipts as Income from House Property in their respective returns.',
        },
        {
          question: 'Can HRA exemption be claimed under the New Tax Regime (Section 115BAC)?',
          answer: 'No. Section 10(13A) HRA exemption is exclusively accessible to taxpayers who opt for the Old Tax Regime. Taxpayers assessing income under Section 115BAC forfeit HRA deductions in exchange for lower baseline marginal slab rates.',
        },
        {
          question: 'Why are Bengaluru, Hyderabad, and Pune classified as non-metros for HRA?',
          answer: 'The Income-tax Rules Rule 2A specifically defines metro cities according to the constitutional classification from 1962: Delhi, Mumbai, Kolkata, and Chennai (50% limit). All other booming IT hubs (Bengaluru, Hyderabad, Pune, Gurugram, Noida) statutorily fall under the 40% non-metro tier.',
        },
        {
          question: 'Can I simultaneously claim HRA and home loan tax deductions?',
          answer: 'Yes. If you own a home in one city (or distant suburb) but reside in rented accommodation near your workplace due to genuine employment reasons, you can claim Section 10(13A) HRA for the rented home and Section 24(b) / 80C deductions for your purchased home.',
        },
      ]}
      relatedArticles={[
        {
          title: 'New vs Old Tax Regime in India: Slabs, Deductions, and Break-Even Salary Analysis',
          path: '/articles/new-vs-old-tax-regime',
          readTime: '10 min',
          summary: 'A statutory guide for salaried professionals evaluating HRA exemption against the concessional Section 115BAC slabs.',
        },
        {
          title: 'How Loan EMI is Calculated: The Reducing Balance Formula & Prepayment Impact',
          path: '/articles/how-loan-emi-is-calculated',
          readTime: '8 min',
          summary: 'Learn how to combine Section 24(b) home loan interest benefits with HRA rent planning.',
        },
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 space-y-4">
          <div className="space-y-1.5">
            <label htmlFor="hra-basic-input" className="block text-xs font-semibold text-slate-300 uppercase tracking-wide">Annual Basic Salary + Dearness Allowance (DA)</label>
            <input
              id="hra-basic-input"
              type="number"
              inputMode="numeric"
              value={basic}
              step={10000}
              min={0}
              onChange={(e) => setBasic(Number(e.target.value))}
              className="w-full bg-slate-950 border border-slate-700 text-slate-100 rounded-lg px-3.5 py-2 font-mono text-sm focus:border-amber-500 focus:outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="hra-received-input" className="block text-xs font-semibold text-slate-300 uppercase tracking-wide">Annual HRA Received from Employer</label>
            <input
              id="hra-received-input"
              type="number"
              inputMode="numeric"
              value={hraReceived}
              step={5000}
              min={0}
              onChange={(e) => setHraReceived(Number(e.target.value))}
              className="w-full bg-slate-950 border border-slate-700 text-slate-100 rounded-lg px-3.5 py-2 font-mono text-sm focus:border-amber-500 focus:outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="hra-rent-input" className="block text-xs font-semibold text-slate-300 uppercase tracking-wide">Total Actual Rent Paid in Financial Year</label>
            <input
              id="hra-rent-input"
              type="number"
              inputMode="numeric"
              value={rentPaid}
              step={5000}
              min={0}
              onChange={(e) => setRentPaid(Number(e.target.value))}
              className="w-full bg-slate-950 border border-slate-700 text-slate-100 rounded-lg px-3.5 py-2 font-mono text-sm focus:border-amber-500 focus:outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <span className="block text-xs font-semibold text-slate-300 uppercase tracking-wide">City of Residence Classification</span>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setIsMetro(true)}
                className={`p-2.5 rounded-lg border text-left text-xs transition-colors ${isMetro ? 'bg-amber-950/60 border-amber-500 text-amber-200' : 'bg-slate-950 border-slate-800 text-slate-400'}`}
              >
                <div className="font-bold">Metro City (50%)</div>
                <div className="text-slate-500 text-[10px]">Delhi, Mumbai, Kolkata, Chennai</div>
              </button>
              <button
                type="button"
                onClick={() => setIsMetro(false)}
                className={`p-2.5 rounded-lg border text-left text-xs transition-colors ${!isMetro ? 'bg-amber-950/60 border-amber-500 text-amber-200' : 'bg-slate-950 border-slate-800 text-slate-400'}`}
              >
                <div className="font-bold">Non-Metro (40%)</div>
                <div className="text-slate-500 text-[10px]">All other Indian cities</div>
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 bg-slate-950 border border-slate-800 rounded-lg p-6 flex flex-col justify-between space-y-6 min-h-[220px]">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Tax-Exempt HRA Amount</span>
              <span className="text-2xl font-mono font-extrabold text-emerald-400 tabular-nums">{formatINR(exempt)}</span>
            </div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-rose-400">Taxable HRA Portion</span>
              <span className="text-lg font-mono font-bold text-rose-400 tabular-nums">{formatINR(taxable)}</span>
            </div>

            <div className="p-3 bg-slate-900 rounded border border-slate-800 text-xs space-y-1">
              <div className="text-slate-400 font-semibold">Rule 2A Limit Benchmark:</div>
              <div className="text-slate-300">1. Actual HRA: <span className="font-mono text-amber-300">{formatINR(limit1)}</span></div>
              <div className="text-slate-300">2. Rent - 10% Salary: <span className="font-mono text-amber-300">{formatINR(limit2)}</span> {exempt === limit2 ? '(Binding)' : ''}</div>
              <div className="text-slate-300">3. {isMetro ? '50%' : '40%'} of Salary: <span className="font-mono text-amber-300">{formatINR(limit3)}</span> {exempt === limit3 ? '(Binding)' : ''}</div>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={copyResults}
              className="w-full py-2.5 px-4 text-xs font-semibold text-slate-200 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              {copied ? '✓ Copied to Clipboard!' : 'Copy HRA Calculation'}
            </button>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}

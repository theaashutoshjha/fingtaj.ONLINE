import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import SocialLinks from '../components/SocialLinks';

interface ToolCard {
  id: string;
  title: string;
  category: string;
  path: string;
  description: string;
  formula: string;
  act: string;
  keywords: string;
}

const TOOLS: ToolCard[] = [
  {
    id: 'sip',
    title: 'Systematic Investment Plan (SIP) Calculator',
    category: 'Wealth Accumulation',
    path: '/sip-calculator',
    description: 'Calculate compounding capital gains, monthly annuity dues, and long-term portfolio appreciation under Rupee Cost Averaging.',
    formula: 'M = P × [((1+i)^n - 1) / i] × (1+i)',
    act: 'SEBI Mutual Fund Guidelines',
    keywords: 'sip mutual fund equity investment cagr returns wealth compound',
  },
  {
    id: 'emi',
    title: 'Home & Personal Loan EMI Amortization',
    category: 'Debt & Mortgages',
    path: '/loan-emi-calculator',
    description: 'Compute equated monthly installments and reducing balance interest amortizations complying with RBI Master Directions.',
    formula: 'E = [P × r × (1+r)^n] / [(1+r)^n - 1]',
    act: 'RBI Master Directions',
    keywords: 'emi home loan personal loan car loan reducing balance interest bank mortgage',
  },
  {
    id: 'tax',
    title: 'Income Tax Comparison (New vs. Old Regime FY 2024-2026)',
    category: 'Direct Taxation',
    path: '/income-tax-calculator',
    description: 'Compare net liability under Section 115BAC (with enhanced ₹75,000 standard deduction) against Old Slabs with Chapter VI-A deductions.',
    formula: 'Tax = Σ [Slab × Rate] - Sec 87A + 4% Cess',
    act: 'Section 115BAC & Finance Act 2024',
    keywords: 'income tax salary new regime old regime 80c 80d slab 115bac deduction',
  },
  {
    id: 'ppf',
    title: 'Public Provident Fund (PPF) Maturity Calculator',
    category: 'Small Savings & Sovereign Debt',
    path: '/ppf-calculator',
    description: 'Model sovereign EEE-exempt wealth growth under the 7.1% government rate with 5th-of-month balance accrual rules.',
    formula: 'A = P × [((1+r)^t - 1) / r] × (1+r)',
    act: 'Public Provident Fund Scheme 2019',
    keywords: 'ppf public provident fund post office sovereign 7.1 tax free eee 80c',
  },
  {
    id: 'inflation',
    title: 'Real Inflation-Adjusted Return & Purchasing Power',
    category: 'Macroeconomics',
    path: '/inflation-adjusted-return-calculator',
    description: 'Calculate future purchasing power erosion using the Fisher equation to discount nominal growth against CPI rates.',
    formula: 'Real Rate = [(1 + Nominal) / (1 + CPI)] - 1',
    act: 'Fisher Equation Model',
    keywords: 'inflation cpi real return purchasing power fisher nominal erosion',
  },
  {
    id: 'fd',
    title: 'Fixed Deposit (FD) & Section 194A TDS Calculator',
    category: 'Banking & Fixed Income',
    path: '/fd-calculator',
    description: 'Estimate terminal maturity corpus under quarterly bank compounding and evaluate Section 194A TDS threshold breaches.',
    formula: 'A = P × [1 + (r / 4)]^(4 × t)',
    act: 'Section 194A Income Tax Act',
    keywords: 'fd fixed deposit bank quarterly compounding tds 194a term deposit',
  },
  {
    id: 'hra',
    title: 'House Rent Allowance (HRA) Exemption Calculator',
    category: 'Payroll & Allowances',
    path: '/hra-calculator',
    description: 'Evaluate statutory tax-exempt and taxable HRA components using the Rule 2A three-limit test under Section 10(13A).',
    formula: 'Exempt = Min [Actual HRA, Rent - 10% Sal, 50%/40% Sal]',
    act: 'Section 10(13A) Rule 2A',
    keywords: 'hra rent allowance salary exemption section 10 13a metro rule 2a',
  },
  {
    id: 'gratuity',
    title: 'Gratuity Benefit Calculator (15/26 Rule)',
    category: 'Labour Laws & Retirement',
    path: '/gratuity-calculator',
    description: 'Calculate statutory gratuity entitlement under the Payment of Gratuity Act 1972 and test against the ₹20 Lakh tax-free cap.',
    formula: 'Gratuity = (15 × Last Salary × Tenure) / 26',
    act: 'Payment of Gratuity Act, 1972',
    keywords: 'gratuity retirement 15 26 salary basic da continuous service 20 lakh',
  },
  {
    id: 'capital-gains',
    title: 'Capital Gains Tax (LTCG / STCG) Estimator',
    category: 'Capital Markets',
    path: '/capital-gains-tax-calculator',
    description: 'Calculate capital gains tax on equity mutual funds (20% STCG, 12.5% LTCG above ₹1.25L) and debt funds under Section 50AA.',
    formula: 'Tax = (Gains - Exemption) × Rate + 4% Cess',
    act: 'Sections 111A, 112A, 50AA',
    keywords: 'capital gains ltcg stcg shares mutual funds 112a 111a equity debt',
  },
  {
    id: 'section-44ada',
    title: 'Presumptive Professional Tax (Section 44ADA)',
    category: 'Professional & Freelance',
    path: '/section-44ada-calculator',
    description: 'Model 50% deemed taxable profits, advance tax obligations, and book-keeping relief for notified professionals and consultants.',
    formula: 'Deemed Profit = 50% × Gross Receipts',
    act: 'Section 44ADA Income Tax Act',
    keywords: '44ada presumptive taxation freelancing software developer consultant',
  },
];

export default function Home() {
  const [search, setSearch] = useState('');

  const filteredTools = TOOLS.filter((tool) => {
    const q = search.toLowerCase().trim();
    if (!q) return true;
    return (
      tool.title.toLowerCase().includes(q) ||
      tool.category.toLowerCase().includes(q) ||
      tool.keywords.toLowerCase().includes(q) ||
      tool.act.toLowerCase().includes(q)
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SEO
        title="FingTaj — Institutional-Grade Statutory Financial Calculators for India"
        description="High-precision client-side Indian financial calculators. Compute SIP wealth, Home Loan EMI, Income Tax (Section 115BAC), Gratuity, and Capital Gains with zero data collection."
        canonicalPath="/"
        keywords="statutory financial calculator, income tax calculator 115bac, loan emi calculator, sip calculator india, gratuity calculator, zero telemetry"
      />

      {/* Hero Banner */}
      <section className="border border-slate-800 bg-slate-900/60 rounded-2xl p-6 sm:p-10 relative overflow-hidden">
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400">
            <span>Statutory Financial Architecture</span>
            <span aria-hidden="true">·</span>
            <span>Income Tax Act 1961</span>
            <span aria-hidden="true">·</span>
            <span>Finance Act 2024-2026</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Institutional-Grade Statutory Financial Computation
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            High-precision algorithmic calculators complying with Indian statutory frameworks. Every calculation runs strictly client-side in browser memory with zero tracking, zero remote logging, and zero financial telemetry.
          </p>

          {/* Social Communities Strip */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold text-slate-400">Join Our Community:</span>
            <SocialLinks layout="inline" />
          </div>
        </div>

        {/* Live Search & Filter */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
          <div className="relative flex-grow max-w-lg">
            <svg className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tools (e.g. 'Section 115BAC', 'EMI', 'HRA', 'PPF')..."
              className="w-full bg-slate-950 border border-slate-700 text-slate-200 placeholder-slate-500 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>

          <div className="text-xs text-slate-400 flex items-center gap-2 self-center sm:self-auto">
            <span className="font-mono text-cyan-400 font-bold">{filteredTools.length}</span>
            <span>of 10 Statutory Tools Available</span>
          </div>
        </div>
      </section>

      {/* Grid of Dedicated Calculators */}
      <section className="space-y-6">
        <div className="flex justify-between items-end border-b border-slate-800 pb-3">
          <div>
            <h2 className="text-xl font-bold text-white">Statutory Financial Tools Directory</h2>
            <p className="text-xs text-slate-400 mt-1">Each tool opens a dedicated, fully indexed URL with extensive technical documentation.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all hover:bg-slate-900/60 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>{tool.category}</span>
                  <span className="font-mono text-cyan-400/80 text-[11px]">{tool.act}</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {tool.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {tool.description}
                </p>
                <div className="p-2.5 bg-slate-950 rounded border border-slate-800/80 font-mono text-[11px] text-cyan-300 truncate">
                  {tool.formula}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <Link
                  to={tool.path}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <span>Launch Dedicated Tool</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-12 border border-slate-800 rounded-xl bg-slate-900/20 text-slate-400 text-sm">
            No statutory tools match your query "{search}". Try searching for "SIP", "Tax", "EMI", or "PPF".
          </div>
        )}
      </section>

      {/* Trust & E-E-A-T Guarantee Strip */}
      <section className="p-6 bg-slate-900/30 border border-slate-800 rounded-xl grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
        <div>
          <div className="text-cyan-400 font-bold mb-1">🔒 Zero Telemetry Guarantee</div>
          <p className="text-slate-400 leading-relaxed">All financial numbers, salary amounts, and loan terms calculate purely in your browser window. No server databases.</p>
        </div>
        <div>
          <div className="text-cyan-400 font-bold mb-1">⚖️ Statutory Gazette Alignment</div>
          <p className="text-slate-400 leading-relaxed">Directly modeled on official Indian acts: Income Tax Act 1961, Finance Act 2024–2026, and RBI Master Directions.</p>
        </div>
        <div>
          <div className="text-cyan-400 font-bold mb-1">👨‍💻 Human Engineering Accountability</div>
          <p className="text-slate-400 leading-relaxed">Architected and maintained by Ashutosh Jha, Senior Financial Systems Engineer based in Chennai, India.</p>
        </div>
      </section>
    </div>
  );
}

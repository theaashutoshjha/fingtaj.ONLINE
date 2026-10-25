import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import SocialLinks from '../components/SocialLinks';
import { BookOpen, Clock, ArrowRight, ShieldCheck, Scale, Cpu, Search, Sparkles } from 'lucide-react';

interface ToolCard {
  id: string;
  title: string;
  category: 'Wealth' | 'Loans' | 'Tax' | 'Savings' | 'Salary';
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
    category: 'Wealth',
    path: '/sip-calculator',
    description: 'Calculate compounding capital gains, monthly annuity dues, and long-term portfolio appreciation under Rupee Cost Averaging.',
    formula: 'M = P × [((1+i)^n - 1) / i] × (1+i)',
    act: 'SEBI Mutual Fund Guidelines',
    keywords: 'sip mutual fund equity investment cagr returns wealth compound',
  },
  {
    id: 'step-up-sip',
    title: 'Step-Up / Top-Up SIP Wealth Calculator',
    category: 'Wealth',
    path: '/step-up-sip-calculator',
    description: 'Model exponential wealth compounding by stepping up monthly mutual fund contributions annually with salary appraisals.',
    formula: 'Corpus = Σ [ P_year × (1 + i)^months_remaining ]',
    act: 'AMFI / SEBI Top-Up Mandates',
    keywords: 'step up top up sip mutual fund appraisal increment wealth multiplier',
  },
  {
    id: 'emi',
    title: 'Home & Personal Loan EMI Amortization',
    category: 'Loans',
    path: '/loan-emi-calculator',
    description: 'Compute equated monthly installments and reducing balance interest amortizations complying with RBI Master Directions.',
    formula: 'E = [P × r × (1+r)^n] / [(1+r)^n - 1]',
    act: 'RBI Master Directions',
    keywords: 'emi home loan personal loan car loan reducing balance interest bank mortgage',
  },
  {
    id: 'tax',
    title: 'Income Tax Comparison (New vs. Old Regime FY 2024-2026)',
    category: 'Tax',
    path: '/income-tax-calculator',
    description: 'Compare net liability under Section 115BAC (with enhanced ₹75,000 standard deduction) against Old Slabs with Chapter VI-A deductions.',
    formula: 'Tax = Σ [Slab × Rate] - Sec 87A + 4% Cess',
    act: 'Section 115BAC & Finance Act 2024',
    keywords: 'income tax salary new regime old regime 80c 80d slab 115bac deduction',
  },
  {
    id: 'ppf',
    title: 'Public Provident Fund (PPF) Maturity Calculator',
    category: 'Savings',
    path: '/ppf-calculator',
    description: 'Model sovereign EEE-exempt wealth growth under the 7.1% government rate with 5th-of-month balance accrual rules.',
    formula: 'A = P × [((1+r)^t - 1) / r] × (1+r)',
    act: 'Public Provident Fund Scheme 2019',
    keywords: 'ppf public provident fund post office sovereign 7.1 tax free eee 80c',
  },
  {
    id: 'cagr',
    title: 'CAGR & Absolute Return Calculator',
    category: 'Wealth',
    path: '/cagr-calculator',
    description: 'Determine geometric mean annualized compound growth rate and point-to-point performance for stocks, funds, and real estate.',
    formula: 'CAGR = ( End / Start )^( 1 / n ) - 1',
    act: 'SEBI Performance Reporting Standards',
    keywords: 'cagr absolute return geometric mean growth equity property portfolio irr xirr',
  },
  {
    id: 'nps',
    title: 'National Pension System (NPS) Calculator',
    category: 'Savings',
    path: '/nps-calculator',
    description: 'Estimate terminal retirement corpus at age 60, 60% tax-free lump-sum withdrawal, and monthly annuity pension yield under PFRDA.',
    formula: 'Corpus = Annuity Due | Pension = (Annuity × Rate) / 12',
    act: 'PFRDA Act & Section 80CCD',
    keywords: 'nps national pension system retirement 80ccd annuity lump sum pfrda',
  },
  {
    id: 'inflation',
    title: 'Real Inflation-Adjusted Return & Purchasing Power',
    category: 'Wealth',
    path: '/inflation-adjusted-return-calculator',
    description: 'Calculate future purchasing power erosion using the Fisher equation to discount nominal growth against CPI rates.',
    formula: 'Real Rate = [(1 + Nominal) / (1 + CPI)] - 1',
    act: 'Fisher Equation Model',
    keywords: 'inflation cpi real return purchasing power fisher nominal erosion',
  },
  {
    id: 'fd',
    title: 'Fixed Deposit (FD) & Section 194A TDS Calculator',
    category: 'Savings',
    path: '/fd-calculator',
    description: 'Estimate terminal maturity corpus under quarterly bank compounding and evaluate Section 194A TDS threshold breaches.',
    formula: 'A = P × [1 + (r / 4)]^(4 × t)',
    act: 'Section 194A Income Tax Act',
    keywords: 'fd fixed deposit bank quarterly compounding tds 194a term deposit',
  },
  {
    id: 'rd',
    title: 'Recurring Deposit (RD) Calculator',
    category: 'Savings',
    path: '/rd-calculator',
    description: 'Compute maturity proceeds and quarterly compound interest on monthly bank deposits under IBA & RBI Master Directions.',
    formula: 'M = P × [ (1 + i)^n - 1 ] / [ 1 - (1 + i)^(-1/3) ]',
    act: 'RBI Interest on Deposits Directions',
    keywords: 'rd recurring deposit monthly savings quarterly compounding bank iba',
  },
  {
    id: 'hra',
    title: 'House Rent Allowance (HRA) Exemption Calculator',
    category: 'Salary',
    path: '/hra-calculator',
    description: 'Evaluate statutory tax-exempt and taxable HRA components using the Rule 2A three-limit test under Section 10(13A).',
    formula: 'Exempt = Min [Actual HRA, Rent - 10% Sal, 50%/40% Sal]',
    act: 'Section 10(13A) Rule 2A',
    keywords: 'hra rent allowance salary exemption section 10 13a metro rule 2a',
  },
  {
    id: 'gratuity',
    title: 'Gratuity Benefit Calculator (15/26 Rule)',
    category: 'Salary',
    path: '/gratuity-calculator',
    description: 'Calculate statutory gratuity entitlement under the Payment of Gratuity Act 1972 and test against the ₹20 Lakh tax-free cap.',
    formula: 'Gratuity = (15 × Last Salary × Tenure) / 26',
    act: 'Payment of Gratuity Act, 1972',
    keywords: 'gratuity retirement 15 26 salary basic da continuous service 20 lakh',
  },
  {
    id: 'capital-gains',
    title: 'Capital Gains Tax (LTCG / STCG) Estimator',
    category: 'Tax',
    path: '/capital-gains-tax-calculator',
    description: 'Calculate capital gains tax on equity mutual funds (20% STCG, 12.5% LTCG above ₹1.25L) and debt funds under Section 50AA.',
    formula: 'Tax = (Gains - Exemption) × Rate + 4% Cess',
    act: 'Sections 111A, 112A, 50AA',
    keywords: 'capital gains ltcg stcg shares mutual funds 112a 111a equity debt',
  },
  {
    id: 'section-44ada',
    title: 'Presumptive Professional Tax (Section 44ADA)',
    category: 'Tax',
    path: '/section-44ada-calculator',
    description: 'Model 50% deemed taxable profits, advance tax obligations, and book-keeping relief for notified professionals and consultants.',
    formula: 'Deemed Profit = 50% × Gross Receipts',
    act: 'Section 44ADA Income Tax Act',
    keywords: '44ada presumptive taxation freelancing software developer consultant',
  },
];

const FEATURED_ARTICLES = [
  {
    slug: 'how-loan-emi-is-calculated',
    title: 'How Loan EMI is Calculated: The Reducing Balance Formula & Prepayment Impact',
    readTime: '8 min',
    summary: 'Why early mortgage payments are 80%+ interest, and how a single extra annual prepayment shaves 4 years off your debt.',
    badge: 'Debt & Mortgages',
  },
  {
    slug: 'sip-vs-lump-sum-investing',
    title: 'SIP vs Lump Sum Investing: Rupee Cost Averaging and Market Cycles',
    readTime: '9 min',
    summary: 'A rigorous comparative analysis of systematic monthly investing versus one-time lump-sum capital deployment.',
    badge: 'Wealth & Equity',
  },
  {
    slug: 'step-up-sip-wealth-accelerator',
    title: 'How a 10% Annual Step-Up Supercharges Mutual Fund Wealth',
    readTime: '7 min',
    summary: 'Why keeping your monthly SIP flat while your salary expands is a financial mistake, and how top-ups create 2.2x wealth.',
    badge: 'Compounding',
  },
  {
    slug: 'new-vs-old-tax-regime',
    title: 'New vs Old Tax Regime: Slabs, Deductions, and Break-Even Salary Guide',
    readTime: '10 min',
    summary: 'A statutory guide for salaried and professional taxpayers navigating Section 115BAC with the ₹75,000 standard deduction.',
    badge: 'Direct Tax',
  },
];

export default function Home() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Wealth', 'Loans', 'Tax', 'Savings', 'Salary'];

  const filteredTools = TOOLS.filter((tool) => {
    const matchesCat = selectedCategory === 'All' || tool.category === selectedCategory;
    const q = search.toLowerCase().trim();
    if (!q) return matchesCat;
    const matchesQuery =
      tool.title.toLowerCase().includes(q) ||
      tool.category.toLowerCase().includes(q) ||
      tool.keywords.toLowerCase().includes(q) ||
      tool.act.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SEO
        title="FingTaj — Institutional-Grade Statutory Financial Calculators for India"
        description="High-precision client-side Indian financial calculators. Compute SIP wealth, Step-Up SIP, Loan EMI, Income Tax (Section 115BAC), NPS, PPF, and Capital Gains with zero data collection."
        canonicalPath="/"
        keywords="statutory financial calculator, income tax calculator 115bac, loan emi calculator, sip calculator india, step up sip, nps calculator, zero telemetry"
      />

      {/* Hero Banner: Sovereign Obsidian Vault with Imperial Gold Accents */}
      <section className="relative border border-[#1E2433] bg-gradient-to-b from-[#0D1017] via-[#0A0C13] to-[#08090D] rounded-2xl p-6 sm:p-10 overflow-hidden shadow-xl shadow-black/50">
        {/* Subtle Ambient Gold Glow in Top-Right */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-amber-400/90">
            <span>Sovereign Financial Architecture</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Income Tax Act 1961</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Finance Act 2024-2026</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>RBI Master Directions</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Institutional-Grade{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
              Statutory Financial Computation
            </span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
            Fourteen high-precision algorithmic calculation engines and in-depth research guides complying with Indian statutory frameworks. Every calculation executes strictly client-side in browser memory with zero tracking, zero remote logging, and zero financial telemetry.
          </p>

          {/* Social Communities Strip */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold text-zinc-400">Join Our Community:</span>
            <SocialLinks layout="inline" />
          </div>
        </div>

        {/* Live Search & Filter Bar */}
        <div className="mt-8 pt-6 border-t border-[#1E2433] flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between relative z-10">
          {/* Search Input */}
          <div className="relative flex-grow max-w-lg">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tools (e.g. 'Step-Up SIP', 'NPS', 'Section 115BAC', 'EMI')..."
              className="w-full bg-[#06070B] border border-[#22293A] text-zinc-100 placeholder-zinc-500 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/50 transition-all shadow-inner"
            />
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-zinc-950 font-bold shadow-sm'
                    : 'bg-[#121622] text-zinc-400 hover:text-white hover:bg-[#181D2A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs text-zinc-400 flex items-center gap-2 shrink-0">
            <span className="font-mono text-amber-400 font-bold">{filteredTools.length}</span>
            <span>of 14 Tools Active</span>
          </div>
        </div>
      </section>

      {/* Grid of Dedicated Calculators */}
      <section className="space-y-6">
        <div className="flex justify-between items-end border-b border-[#1E2433] pb-3">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Statutory Financial Computation Suite</span>
            </h2>
            <p className="text-xs text-zinc-400 mt-1">Each tool opens a dedicated, fully indexed URL with verified formulas and 600–1000+ words of editorial guidance.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              className="bg-[#0F121A] border border-[#1E2433] hover:border-amber-500/40 rounded-xl p-6 flex flex-col justify-between transition-all hover:bg-[#131722] group shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span className="font-semibold text-zinc-300">{tool.category}</span>
                  <span className="font-mono text-amber-400/90 text-[11px] font-medium">{tool.act}</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  {tool.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {tool.description}
                </p>
                <div className="p-2.5 bg-[#06070B] rounded-lg border border-[#1E2433] font-mono text-[11px] text-amber-300/90 truncate">
                  {tool.formula}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1E2433]">
                <Link
                  to={tool.path}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-zinc-200 bg-[#161B26] hover:bg-gradient-to-r hover:from-amber-400 hover:to-amber-500 hover:text-zinc-950 rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Launch Dedicated Engine</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-12 border border-[#1E2433] rounded-xl bg-[#0F121A] text-zinc-400 text-sm">
            No statutory tools match your search "{search}". Try searching for "SIP", "Tax", "EMI", or "PPF".
          </div>
        )}
      </section>

      {/* Featured Educational Research & Guides Section */}
      <section className="space-y-6 pt-4 border-t border-[#1E2433]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 border-b border-[#1E2433] pb-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
              <BookOpen className="w-4 h-4" />
              <span>Editorial Research & Financial Engineering</span>
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight">In-Depth Educational Guides & Formulas</h2>
          </div>
          <Link
            to="/articles"
            className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 font-semibold transition"
          >
            <span>Explore All 6 Research Guides</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURED_ARTICLES.map((article) => (
            <Link
              key={article.slug}
              to={`/articles/${article.slug}`}
              className="p-5 bg-[#0F121A] hover:bg-[#141824] border border-[#1E2433] hover:border-amber-500/40 rounded-xl transition group flex flex-col justify-between shadow-sm"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span className="text-amber-400 font-semibold">{article.badge}</span>
                  <div className="flex items-center gap-1 text-zinc-500">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime} Read</span>
                  </div>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                  {article.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {article.summary}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#1E2433] flex items-center gap-1 text-xs text-amber-400 font-semibold group-hover:translate-x-1 transition-transform">
                <span>Read Full Analysis</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trust & E-E-A-T Guarantee Strip */}
      <section className="p-6 bg-[#0B0E15] border border-[#1E2433] rounded-xl grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-zinc-300">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-amber-400 font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Zero Telemetry Guarantee</span>
          </div>
          <p className="text-zinc-400 leading-relaxed">All financial numbers, salary amounts, and loan terms calculate purely in your browser window. Zero remote database storage.</p>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-amber-400 font-bold">
            <Scale className="w-4 h-4 text-amber-400" />
            <span>Statutory Gazette Alignment</span>
          </div>
          <p className="text-zinc-400 leading-relaxed">Directly modeled on official Indian statutes: Income Tax Act 1961, Finance Act 2024–2026, and RBI Master Directions.</p>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-amber-400 font-bold">
            <Cpu className="w-4 h-4 text-amber-400" />
            <span>Human Engineering Accountability</span>
          </div>
          <p className="text-zinc-400 leading-relaxed">Conceived, architected, and maintained by Ashutosh Kumar, Senior Computational Finance Engineer based in Chennai, India.</p>
        </div>
      </section>
    </div>
  );
}

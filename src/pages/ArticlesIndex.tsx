import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { BookOpen, Clock, ArrowRight, Calculator } from 'lucide-react';

export const ARTICLES_LIST = [
  {
    slug: 'how-loan-emi-is-calculated',
    title: 'How Loan EMI is Calculated: The Reducing Balance Formula, Amortization Schedule & Prepayment Impact',
    category: 'Debt & Mortgages',
    readTime: '8 min',
    updatedDate: 'October 2026',
    summary: 'A mathematical breakdown of equated monthly installments, why early payments are 80%+ interest, and how an extra annual prepayment slashes 4 years off a 20-year mortgage.',
    calculator: {
      name: 'Loan EMI Calculator',
      path: '/loan-emi-calculator',
    },
  },
  {
    slug: 'sip-vs-lump-sum-investing',
    title: 'SIP vs Lump Sum Investing: Rupee Cost Averaging, Market Volatility, and 20-Year Return Analysis',
    category: 'Wealth & Investments',
    readTime: '9 min',
    updatedDate: 'October 2026',
    summary: 'A rigorous comparative analysis of systematic monthly investing versus one-time lump-sum capital deployment across bull, bear, and sideways equity market cycles.',
    calculator: {
      name: 'SIP Wealth Calculator',
      path: '/sip-calculator',
    },
  },
  {
    slug: 'step-up-sip-wealth-accelerator',
    title: 'How a 10% Annual Step-Up Supercharges Mutual Fund Wealth: The Compounding Multiplier',
    category: 'Wealth Accumulation',
    readTime: '7 min',
    updatedDate: 'October 2026',
    summary: 'Why keeping your monthly SIP flat while your salary grows is a major financial oversight, and how incremental annual top-ups produce 2.2x higher terminal corpus.',
    calculator: {
      name: 'Step-Up SIP Calculator',
      path: '/step-up-sip-calculator',
    },
  },
  {
    slug: 'new-vs-old-tax-regime',
    title: 'New vs Old Tax Regime in India: Slabs, Deductions, and Break-Even Salary Analysis (FY 2024–2026)',
    category: 'Direct Taxation',
    readTime: '10 min',
    updatedDate: 'October 2026',
    summary: 'A statutory guide for salaried and professional taxpayers navigating Section 115BAC, the enhanced ₹75,000 standard deduction, and Chapter VI-A deductions.',
    calculator: {
      name: 'Income Tax Calculator',
      path: '/income-tax-calculator',
    },
  },
  {
    slug: 'understanding-real-vs-nominal-returns',
    title: 'Understanding Real vs Nominal Returns: How Inflation Stealthily Erodes Savings',
    category: 'Macroeconomics & Inflation',
    readTime: '8 min',
    updatedDate: 'October 2026',
    summary: 'The Fisher Equation demystified: why an 7.5% bank fixed deposit can leave you poorer in purchasing power after tax, and how to protect long-term retirement capital.',
    calculator: {
      name: 'Inflation Calculator',
      path: '/inflation-adjusted-return-calculator',
    },
  },
  {
    slug: 'ppf-rules-interest-calculation-guide',
    title: 'PPF Rules & Interest Calculation Guide: The 5th Day Rule, Tax-Free Compounding & 15-Year Extensions',
    category: 'Sovereign Savings & Debt',
    readTime: '8 min',
    updatedDate: 'October 2026',
    summary: 'A complete statutory manual on Public Provident Fund Scheme 2019, how depositing after the 5th costs a full month of interest, and maximizing the EEE tax exemption.',
    calculator: {
      name: 'PPF Calculator',
      path: '/ppf-calculator',
    },
  },
];

export default function ArticlesIndex() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <SEO
        title="Financial Guides & Research Articles | FingTaj"
        description="Deep-dive educational guides and mathematical breakdowns on EMI amortization, SIP compounding, New vs Old Tax Regime, and inflation protection."
        canonicalPath="/articles"
      />

      <header className="border-b border-[#1E2433] pb-6 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
          <BookOpen className="w-4 h-4" />
          <span>FingTaj Research & Educational Knowledge Base</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Financial Engineering & Statutory Guides
        </h1>
        <p className="text-sm sm:text-base text-zinc-300 max-w-3xl leading-relaxed">
          Comprehensive, formula-backed research articles authored to help Indian taxpayers, salaried professionals, and long-term investors understand the exact mechanics behind their wealth decisions.
        </p>
      </header>

      {/* Grid of Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ARTICLES_LIST.map((article) => (
          <article
            key={article.slug}
            className="bg-[#0F121A] border border-[#1E2433] hover:border-amber-500/40 rounded-xl p-6 flex flex-col justify-between hover:bg-[#141824] transition group shadow-sm"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span className="text-amber-400 font-bold uppercase tracking-wider">
                  {article.category}
                </span>
                <div className="flex items-center gap-1.5 text-zinc-500">
                  <Clock className="w-3 h-3" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              <h2 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                <Link to={`/articles/${article.slug}`}>
                  {article.title}
                </Link>
              </h2>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-3">
                {article.summary}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1E2433] flex items-center justify-between">
              <Link
                to={`/articles/${article.slug}`}
                className="text-xs font-semibold text-amber-400 group-hover:text-amber-300 flex items-center gap-1 transition"
              >
                <span>Read Full Analysis</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to={article.calculator.path}
                className="text-[11px] font-mono text-zinc-400 hover:text-white flex items-center gap-1.5 transition"
              >
                <Calculator className="w-3.5 h-3.5 text-amber-400" />
                <span>{article.calculator.name}</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

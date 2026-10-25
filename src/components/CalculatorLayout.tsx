import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SEO from './SEO';
import SocialLinks from './SocialLinks';
import { ChevronRight, Calculator, MessageCircle, BookOpen, Lightbulb, CheckCircle2, HelpCircle } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface VariableRow {
  variable: string;
  name: string;
  definition: string;
}

export interface RelatedArticle {
  title: string;
  path: string;
  readTime: string;
  summary: string;
}

interface CalculatorLayoutProps {
  category: string;
  badge: string;
  title: string;
  subtitle: string;
  formula: string;
  formulaExplanation?: React.ReactNode;
  whoItsFor?: React.ReactNode;
  mathematicalPrinciples: React.ReactNode;
  variables: VariableRow[];
  workedExample?: React.ReactNode;
  howToReadResults?: React.ReactNode;
  statutoryNotes: React.ReactNode;
  faqs: FAQItem[];
  relatedArticles?: RelatedArticle[];
  children: React.ReactNode;
}

export const ALL_TOOLS = [
  { title: 'SIP Wealth Calculator', path: '/sip-calculator', cat: 'Wealth', desc: 'Annuity due mutual fund compounding & Rupee Cost Averaging' },
  { title: 'Step-Up / Top-Up SIP', path: '/step-up-sip-calculator', cat: 'Wealth', desc: 'Accelerated compounding with annual % contribution increments' },
  { title: 'Home Loan EMI Amortization', path: '/loan-emi-calculator', cat: 'Loans', desc: 'RBI reducing balance monthly interest amortization schedule' },
  { title: 'Income Tax (Section 115BAC)', path: '/income-tax-calculator', cat: 'Tax', desc: 'New vs Old slab comparison FY 2024–2026 with ₹75k std deduction' },
  { title: 'PPF Maturity & Interest', path: '/ppf-calculator', cat: 'Savings', desc: '7.1% sovereign compounding returns & 5th-day deposit rule' },
  { title: 'Inflation-Adjusted Returns', path: '/inflation-adjusted-return-calculator', cat: 'Macro', desc: 'Real purchasing power and nominal CAGR via Fisher Equation' },
  { title: 'Fixed Deposit (FD) & TDS', path: '/fd-calculator', cat: 'Savings', desc: 'Quarterly bank compounding with Section 194A TDS thresholds' },
  { title: 'Recurring Deposit (RD)', path: '/rd-calculator', cat: 'Savings', desc: 'Monthly deposit quarterly compounding under RBI Master Directions' },
  { title: 'CAGR & Absolute Return', path: '/cagr-calculator', cat: 'Wealth', desc: 'Compound Annual Growth Rate vs absolute return for assets' },
  { title: 'National Pension System (NPS)', path: '/nps-calculator', cat: 'Retirement', desc: 'PFRDA 60% lump-sum & 40% annuity pension yield estimator' },
  { title: 'HRA Exemption Calculator', path: '/hra-calculator', cat: 'Salary', desc: 'Section 10(13A) Rule 2A metro vs non-metro tax relief' },
  { title: 'Gratuity Calculator', path: '/gratuity-calculator', cat: 'Salary', desc: 'Payment of Gratuity Act 1972 statutory 15/26 formula' },
  { title: 'Capital Gains Tax (112A/111A)', path: '/capital-gains-tax-calculator', cat: 'Tax', desc: 'Finance Act 2024 LTCG @ 12.5% and STCG @ 20% on equity' },
  { title: 'Section 44ADA Presumptive Tax', path: '/section-44ada-calculator', cat: 'Tax', desc: '50% deemed profits for notified professionals up to ₹75 Lakh' },
];

export default function CalculatorLayout({
  category,
  badge,
  title,
  subtitle,
  formula,
  formulaExplanation,
  whoItsFor,
  mathematicalPrinciples,
  variables,
  workedExample,
  howToReadResults,
  statutoryNotes,
  faqs,
  relatedArticles,
  children,
}: CalculatorLayoutProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const location = useLocation();

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Filter related tools (exclude current page)
  const relatedTools = ALL_TOOLS.filter((t) => t.path !== location.pathname).slice(0, 4);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <SEO
        title={`${title} — Statutory Financial Calculator India | FingTaj`}
        description={subtitle}
        canonicalPath={location.pathname}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: category, path: '/' },
          { name: title, path: location.pathname },
        ]}
        faqs={faqs}
      />

      {/* Semantic Breadcrumbs & Editorial Header */}
      <div className="border-b border-[#1E2433] pb-6">
        <nav aria-label="Breadcrumb" className="mb-3">
          <ol className="flex items-center gap-2 text-xs text-zinc-400">
            <li>
              <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            </li>
            <li>
              <span className="text-zinc-300">{category}</span>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            </li>
            <li aria-current="page">
              <span className="text-amber-400 font-mono font-medium">{badge}</span>
            </li>
          </ol>
        </nav>

        {/* Clean Typographic Header (Zero-Pill Discipline) */}
        <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-amber-400/90 mb-2">
          <span>{category}</span>
          <span className="text-zinc-600">·</span>
          <span className="text-zinc-300 font-medium">Statutory Framework: {badge}</span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
          {title}
        </h1>
        <p className="text-sm sm:text-base text-zinc-300 mt-2.5 max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* What it Calculates & Who It's For Callout */}
      {whoItsFor && (
        <section aria-labelledby="who-its-for-heading" className="bg-[#0F121A] border border-amber-500/20 rounded-xl p-5 sm:p-6 text-sm text-zinc-300 leading-relaxed shadow-sm">
          <div className="flex items-center gap-2.5 mb-3.5 pb-2.5 border-b border-[#1E2433]">
            <div className="p-1.5 rounded-md bg-amber-500/10 text-amber-400">
              <Lightbulb className="w-4 h-4" />
            </div>
            <h2 id="who-its-for-heading" className="text-base font-bold text-white tracking-tight">
              Scope of Computation & Profile Applicability
            </h2>
          </div>
          <div className="space-y-3">
            {whoItsFor}
          </div>
        </section>
      )}

      {/* Interactive GUI Slot */}
      <section aria-label="Interactive Financial Calculation Engine" className="bg-[#0D1017] border border-[#1E2433] rounded-2xl p-5 sm:p-8 shadow-lg shadow-black/40">
        {children}
      </section>

      {/* Mathematical Principles & Plain Language Formula Breakdown */}
      <section className="border-t border-[#1E2433] pt-8 space-y-6 text-sm text-zinc-300 leading-relaxed">
        <div>
          <h2 className="text-xl font-bold text-white mb-2 tracking-tight">Mathematical Principles & Operational Mechanics</h2>
          <div className="space-y-3">
            {mathematicalPrinciples}
          </div>
        </div>

        {/* Formula Box - Institutional Gilded Obsidian Panel */}
        <div className="relative bg-[#06070B] p-4 sm:p-5 rounded-xl border border-amber-500/30 font-mono text-xs sm:text-sm overflow-x-auto shadow-inner">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 via-amber-500 to-transparent" />
          <div className="text-zinc-500 select-none text-[11px] mb-1">// Sovereign Computational Formulation:</div>
          <div className="font-semibold text-amber-300 tracking-wide text-sm sm:text-base py-1">{formula}</div>
        </div>

        {/* Plain Language Formula Explanation */}
        {formulaExplanation && (
          <div className="bg-[#0F121A] border border-[#1E2433] rounded-xl p-4 sm:p-5 text-xs sm:text-sm leading-relaxed text-zinc-300 space-y-2">
            <h3 className="text-xs uppercase tracking-wider font-bold text-amber-400">The Formula Explained in Plain English</h3>
            <div className="space-y-2 text-zinc-300">
              {formulaExplanation}
            </div>
          </div>
        )}

        {/* Variables Table */}
        <div className="overflow-x-auto rounded-xl border border-[#1E2433]">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#121622] text-zinc-300">
              <tr>
                <th className="p-3.5 border-b border-[#1E2433] font-semibold">Notation</th>
                <th className="p-3.5 border-b border-[#1E2433] font-semibold">Mathematical Variable</th>
                <th className="p-3.5 border-b border-[#1E2433] font-semibold">Operational & Statutory Definition</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1E2433] text-zinc-300">
              {variables.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#141824]/50 transition-colors">
                  <td className="p-3.5 font-mono text-amber-400 font-bold whitespace-nowrap">{row.variable}</td>
                  <td className="p-3.5 font-medium text-zinc-200">{row.name}</td>
                  <td className="p-3.5 text-zinc-400">{row.definition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Step-by-Step Worked Example with Real Numbers */}
      {workedExample && (
        <section className="border-t border-[#1E2433] pt-8 space-y-4 text-sm text-zinc-300 leading-relaxed">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight">
              Step-by-Step Worked Example (Real-World Numbers)
            </h2>
          </div>
          <div className="p-5 sm:p-6 bg-[#0B0E15] border border-[#1E2433] rounded-xl space-y-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
            {workedExample}
          </div>
        </section>
      )}

      {/* How to Read the Result & Strategic Actions */}
      {howToReadResults && (
        <section className="border-t border-[#1E2433] pt-8 space-y-4 text-sm text-zinc-300 leading-relaxed">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-md bg-amber-500/10 text-amber-400">
              <HelpCircle className="w-4 h-4" />
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight">
              How to Interpret Your Results & Strategic Next Steps
            </h2>
          </div>
          <div className="p-5 sm:p-6 bg-[#0F121A] border border-[#1E2433] rounded-xl space-y-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
            {howToReadResults}
          </div>
        </section>
      )}

      {/* Statutory Framework Notes */}
      <section className="border-t border-[#1E2433] pt-8 space-y-3 text-sm text-zinc-300 leading-relaxed">
        <h2 className="text-lg font-bold text-white tracking-tight">Statutory Governance & Regulatory Authority Framework</h2>
        <div className="p-4 bg-[#08090D] border border-[#1E2433] rounded-xl text-xs leading-relaxed text-zinc-400 space-y-2">
          {statutoryNotes}
        </div>
      </section>

      {/* Technical FAQs Accordion */}
      <section className="border-t border-[#1E2433] pt-8 space-y-4">
        <h2 className="text-lg font-bold text-white tracking-tight">Technical & Statutory Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className="bg-[#0F121A] border border-[#1E2433] hover:border-[#2A3347] rounded-xl overflow-hidden transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-5 py-4 flex justify-between items-center text-xs sm:text-sm font-semibold text-zinc-200 hover:text-amber-400 focus:outline-none transition-colors"
                >
                  <span className="pr-4">{faq.question}</span>
                  <span className={`text-amber-400 text-xs transform transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-xs text-zinc-400 leading-relaxed border-t border-[#1E2433] pt-3.5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Recommended In-Depth Articles & Guides (Reciprocal Linking) */}
      {relatedArticles && relatedArticles.length > 0 && (
        <section className="border-t border-[#1E2433] pt-8 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>In-Depth Educational Guides & Research</span>
            </h2>
            <Link to="/articles" className="text-xs text-amber-400 hover:underline">
              Explore All Guides →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedArticles.map((article) => (
              <Link
                key={article.path}
                to={article.path}
                className="p-4 bg-[#0F121A] hover:bg-[#141824] border border-[#1E2433] hover:border-amber-500/40 rounded-xl transition group block shadow-sm"
              >
                <div className="flex items-center justify-between text-[11px] text-zinc-500 mb-1.5 font-mono">
                  <span className="text-amber-400 font-semibold">Educational Guide</span>
                  <span>{article.readTime}</span>
                </div>
                <div className="font-semibold text-sm text-white group-hover:text-amber-300 transition-colors">
                  {article.title}
                </div>
                <p className="text-xs text-zinc-400 mt-1.5 line-clamp-2 leading-relaxed">
                  {article.summary}
                </p>
                <div className="mt-3 text-xs text-amber-400 font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>Read Full Analysis</span>
                  <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Related Calculators Cross-Link Mesh */}
      <section className="border-t border-[#1E2433] pt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Calculator className="w-4 h-4 text-amber-400" />
            <span>Explore Related Statutory Calculators</span>
          </h2>
          <Link to="/" className="text-xs text-amber-400 hover:underline">
            View All 14 Calculators →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {relatedTools.map((tool) => (
            <Link
              key={tool.path}
              to={tool.path}
              className="p-3.5 bg-[#0F121A] hover:bg-[#141824] border border-[#1E2433] hover:border-amber-500/40 rounded-xl transition group block"
            >
              <div className="text-[10px] uppercase font-mono text-amber-400 mb-1">{tool.cat}</div>
              <div className="font-semibold text-xs text-white group-hover:text-amber-300 transition-colors">
                {tool.title}
              </div>
              <p className="text-[11px] text-zinc-400 mt-1 line-clamp-2">
                {tool.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Community Channels Mini Banner */}
      <div className="p-4 bg-[#0F121A] border border-[#1E2433] rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-zinc-300">
          <MessageCircle className="w-4 h-4 text-amber-400" />
          <span>Have a complex case or need calculations explained? Join our official community:</span>
        </div>
        <SocialLinks layout="inline" />
      </div>
    </div>
  );
}

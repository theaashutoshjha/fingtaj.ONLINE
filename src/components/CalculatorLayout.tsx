import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SEO, { FAQSchemaItem } from './SEO';
import SocialLinks from './SocialLinks';
import { ChevronRight, Calculator, MessageCircle } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface VariableRow {
  variable: string;
  name: string;
  definition: string;
}

interface CalculatorLayoutProps {
  category: string;
  badge: string;
  title: string;
  subtitle: string;
  formula: string;
  mathematicalPrinciples: React.ReactNode;
  variables: VariableRow[];
  statutoryNotes: React.ReactNode;
  faqs: FAQItem[];
  children: React.ReactNode;
}

const ALL_TOOLS = [
  { title: 'SIP Wealth Calculator', path: '/sip-calculator', cat: 'Wealth', desc: 'Annuity due mutual fund compounding' },
  { title: 'Home Loan EMI Amortization', path: '/loan-emi-calculator', cat: 'Loans', desc: 'RBI reducing balance interest schedule' },
  { title: 'Income Tax (Section 115BAC)', path: '/income-tax-calculator', cat: 'Tax', desc: 'New vs Old slab comparison FY 24-26' },
  { title: 'PPF Maturity & Interest', path: '/ppf-calculator', cat: 'Savings', desc: '7.1% sovereign compounding returns' },
  { title: 'Inflation-Adjusted Returns', path: '/inflation-adjusted-return-calculator', cat: 'Macro', desc: 'Real purchasing power and nominal CAGR' },
  { title: 'Fixed Deposit (FD) & TDS', path: '/fd-calculator', cat: 'Savings', desc: 'Quarterly compounding with Section 194A TDS' },
  { title: 'HRA Exemption Calculator', path: '/hra-calculator', cat: 'Salary', desc: 'Section 10(13A) metro vs non-metro tax relief' },
  { title: 'Gratuity Calculator', path: '/gratuity-calculator', cat: 'Salary', desc: 'Payment of Gratuity Act 15/26 formula' },
  { title: 'Capital Gains Tax (112A/111A)', path: '/capital-gains-tax-calculator', cat: 'Tax', desc: 'Equity mutual funds LTCG & STCG' },
  { title: 'Section 44ADA Presumptive Tax', path: '/section-44ada-calculator', cat: 'Tax', desc: '50% deemed profits for professionals' },
];

export default function CalculatorLayout({
  category,
  badge,
  title,
  subtitle,
  formula,
  mathematicalPrinciples,
  variables,
  statutoryNotes,
  faqs,
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

      {/* Semantic Breadcrumbs & Header */}
      <div className="border-b border-slate-800 pb-5">
        <nav aria-label="Breadcrumb" className="mb-2">
          <ol className="flex items-center gap-1.5 text-xs text-slate-400">
            <li>
              <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3 h-3 text-slate-600" />
            </li>
            <li>
              <span>{category}</span>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3 h-3 text-slate-600" />
            </li>
            <li aria-current="page">
              <span className="text-cyan-400 font-mono font-medium">{badge}</span>
            </li>
          </ol>
        </nav>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
          {title}
        </h1>
        <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Interactive GUI Slot */}
      <section className="bg-slate-900/40 border border-slate-800 rounded-xl p-5 sm:p-8">
        {children}
      </section>

      {/* Mathematical Principles & Formula */}
      <section className="border-t border-slate-800/80 pt-8 space-y-6 text-sm text-slate-300 leading-relaxed">
        <div>
          <h2 className="text-xl font-bold text-white mb-2">Mathematical Principles & Computational Methodology</h2>
          <div className="space-y-3">
            {mathematicalPrinciples}
          </div>
        </div>

        {/* Formula Box */}
        <div className="bg-slate-950 p-4 sm:p-5 rounded-lg border border-slate-800 font-mono text-cyan-300 text-xs sm:text-sm overflow-x-auto shadow-inner">
          <span className="text-slate-500 select-none">// Mathematical Invariant Formulation:</span>
          <div className="mt-1 font-semibold text-cyan-200">{formula}</div>
        </div>

        {/* Variables Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-slate-800">
            <thead className="bg-slate-900 text-slate-300">
              <tr>
                <th className="p-3 border-b border-slate-800 font-semibold">Notation</th>
                <th className="p-3 border-b border-slate-800 font-semibold">Mathematical Variable</th>
                <th className="p-3 border-b border-slate-800 font-semibold">Operational & Statutory Definition</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {variables.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-900/30">
                  <td className="p-3 font-mono text-cyan-400 font-bold">{row.variable}</td>
                  <td className="p-3 font-medium text-slate-200">{row.name}</td>
                  <td className="p-3 text-slate-400">{row.definition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Statutory Framework Notes */}
      <section className="border-t border-slate-800/80 pt-8 space-y-3 text-sm text-slate-300 leading-relaxed">
        <h2 className="text-lg font-bold text-white">Statutory Governance & Compliance Framework</h2>
        <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-lg text-xs leading-relaxed text-slate-400 space-y-2">
          {statutoryNotes}
        </div>
      </section>

      {/* Technical FAQs Accordion */}
      <section className="border-t border-slate-800/80 pt-8 space-y-4">
        <h2 className="text-lg font-bold text-white">Technical & Statutory Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-lg overflow-hidden transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-4 py-3.5 flex justify-between items-center text-xs sm:text-sm font-semibold text-slate-200 hover:text-cyan-400 focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <span className={`text-cyan-400 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-xs text-slate-400 leading-relaxed border-t border-slate-800/60 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Related Calculators Cross-Link Mesh (Internal Linking Check 336–365) */}
      <section className="border-t border-slate-800/80 pt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Calculator className="w-4 h-4 text-cyan-400" />
            <span>Explore Related Statutory Calculators</span>
          </h2>
          <Link to="/" className="text-xs text-cyan-400 hover:underline">
            View All 10 Calculators →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {relatedTools.map((tool) => (
            <Link
              key={tool.path}
              to={tool.path}
              className="p-3 bg-slate-900/70 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-xl transition group block"
            >
              <div className="text-[10px] uppercase font-mono text-cyan-400 mb-1">{tool.cat}</div>
              <div className="font-semibold text-xs text-white group-hover:text-cyan-300 transition-colors">
                {tool.title}
              </div>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                {tool.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Community Channels Mini Banner */}
      <div className="p-4 bg-slate-900/40 border border-slate-800/80 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-300">
          <MessageCircle className="w-4 h-4 text-cyan-400" />
          <span>Have a complex case or need calculations explained? Join the community:</span>
        </div>
        <SocialLinks layout="inline" />
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Breadcrumb & Header */}
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
          <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <span>/</span>
          <span>{category}</span>
          <span>/</span>
          <span className="text-cyan-400 font-mono">{badge}</span>
        </div>
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
    </div>
  );
}

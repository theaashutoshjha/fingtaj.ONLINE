import React from 'react';
import { BookOpen, ShieldCheck, CheckCircle2, Award, Terminal, FileCode2, Scale, RefreshCw, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Methodology() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-zinc-300">
      <SEO
        title="Calculation Methodology & Editorial Standards — FingTaj"
        description="FingTaj's institutional methodology, statutory verification protocol, and fact-checking standards for Indian financial calculators and research guides under E-E-A-T principles."
        canonicalPath="/methodology"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Calculation Methodology', path: '/methodology' },
        ]}
      />

      {/* Header */}
      <div className="mb-10 text-center sm:text-left border-b border-[#1E2433] pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-950/40 text-amber-300 border border-amber-800/50 mb-3">
          <BookOpen className="w-3.5 h-3.5 text-amber-400" />
          <span>E-E-A-T & Statutory Standards</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Calculation Methodology & Editorial Standards
        </h1>
        <p className="mt-3 text-sm text-zinc-400">
          Last Updated: <strong>October 25, 2026</strong> | Published by: <strong>Ashutosh Kumar, Lead Engineering Architect</strong>
        </p>
      </div>

      <div className="space-y-10 text-justify leading-relaxed text-sm sm:text-base">
        {/* Preamble */}
        <section className="bg-[#0F121A] border border-[#1E2433] p-6 rounded-2xl space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            Our Institutional Commitment to Mathematical Integrity
          </h2>
          <p className="text-zinc-300 text-sm">
            In financial calculations, computational errors and rounded approximations can alter personal budgeting, tax liability forecasts, and retirement planning. <strong>FingTaj</strong> was founded to eliminate the opaque formulas and telemetry trackers common to commercial lead-generation portals. Every calculator on this site is engineered directly from primary statutory sources, verified with automated mathematical test benches, and executed strictly inside client browser memory.
          </p>
        </section>

        {/* Section 1: Statutory Authority & Legislative Foundations */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Scale className="w-5 h-5 text-amber-400" />
            1. Primary Statutory & Regulatory Authorities
          </h2>
          <p>
            We do not rely on secondary summaries or unverified blog posts. Every formula implemented across FingTaj is derived from official acts enacted by the Parliament of India, gazette notifications, or regulatory guidelines issued by the following authorities:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-1">
            <div className="p-4 bg-[#0F121A] rounded-xl border border-[#1E2433] space-y-2">
              <span className="font-bold text-amber-300">Income Tax Department & CBDT</span>
              <p className="text-zinc-400">
                Income-tax Act, 1961, Section 115BAC (New Concessional Tax Regime), Section 10(13A) read with Rule 2A (HRA exemption), Section 112A / 111A (Capital Gains Tax rates), and Section 44ADA (Presumptive Taxation for Professionals).
              </p>
            </div>

            <div className="p-4 bg-[#0F121A] rounded-xl border border-[#1E2433] space-y-2">
              <span className="font-bold text-amber-300">Reserve Bank of India (RBI)</span>
              <p className="text-zinc-400">
                Master Direction – Reserve Bank of India (Interest Rate on Advances) Directions, 2016, governing standard reducing-balance actuarial compounding and amortization schedules.
              </p>
            </div>

            <div className="p-4 bg-[#0F121A] rounded-xl border border-[#1E2433] space-y-2">
              <span className="font-bold text-amber-300">Ministry of Labour & Employment</span>
              <p className="text-zinc-400">
                The Payment of Gratuity Act, 1972, Section 4(2), mandating the statutory 15/26 formula based on 26 working days in a calendar month and the statutory ceiling limit of ₹20,00,000.
              </p>
            </div>

            <div className="p-4 bg-[#0F121A] rounded-xl border border-[#1E2433] space-y-2">
              <span className="font-bold text-amber-300">Ministry of Finance & PFRDA</span>
              <p className="text-zinc-400">
                Public Provident Fund Scheme, 2019 (G.S.R. 915(E)), specifying monthly interest accruals on the lowest balance between the 5th and end of each calendar month, and PFRDA annuity regulations.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Verification Protocols & Test Harnesses */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Terminal className="w-5 h-5 text-amber-400" />
            2. Double-Entry Mathematical Verification Protocol
          </h2>
          <p>
            Before any new calculator or algorithmic revision is deployed to production on <code className="text-amber-300 font-mono">fingtaj.online</code>, it must pass a three-tier quality assurance protocol:
          </p>

          <ol className="list-decimal list-inside space-y-2.5 text-zinc-300 text-sm pl-2">
            <li>
              <strong className="text-white">Statutory Rule Mapping:</strong> The legal clause is codified into a pure JavaScript/TypeScript function with zero external network dependencies.
            </li>
            <li>
              <strong className="text-white">Government Test Vector Benchmarking:</strong> The function output is checked against published illustrative examples from the Central Board of Direct Taxes (CBDT) income tax utility, official bank amortization schedules, or EPFO/PPF gazette circulars across extreme edge cases (e.g., income exactly at tax slab boundaries, zero-day tenures, maximum legal deduction limits).
            </li>
            <li>
              <strong className="text-white">Precision & Rounding Audits:</strong> Floating-point arithmetic is audited to prevent IEEE-754 binary floating-point roundoff issues, using rounding rules recognized by Indian tax authorities (Section 288A/288B rounding to nearest ₹10).
            </li>
          </ol>
        </section>

        {/* Section 3: Editorial Guidelines for Research Guides */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <FileCode2 className="w-5 h-5 text-amber-400" />
            3. Editorial Guidelines & Fact-Checking Process
          </h2>
          <p>
            In addition to interactive calculators, FingTaj maintains educational research guides (such as <em>"How Loan EMI is Calculated"</em> and <em>"SIP vs Lump Sum Investing"</em>) to ensure comprehensive user understanding. Our editorial policy adheres to strict journalistic standards:
          </p>

          <div className="space-y-3 pt-1">
            <div className="p-4 bg-[#0F121A] rounded-xl border border-[#1E2433] flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white text-sm">Original, Non-Templated Analysis</span>
                <p className="text-xs text-zinc-400 mt-1">
                  Every guide is authored independently with original worked examples, transparent step-by-step mathematical proofs, and nuanced pros/cons. We do not use automated syndication or generic filler.
                </p>
              </div>
            </div>

            <div className="p-4 bg-[#0F121A] rounded-xl border border-[#1E2433] flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white text-sm">Zero Commercial Bias</span>
                <p className="text-xs text-zinc-400 mt-1">
                  Our research guides do not recommend specific branded mutual funds, banks, credit cards, or brokers. We evaluate financial mechanisms purely on mathematical and statutory merit.
                </p>
              </div>
            </div>

            <div className="p-4 bg-[#0F121A] rounded-xl border border-[#1E2433] flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white text-sm">Annual Legislative Review</span>
                <p className="text-xs text-zinc-400 mt-1">
                  Every February following the Union Budget presentation by the Finance Minister, all tax brackets, surcharge thresholds, standard deductions, and capital gain exemptions are immediately audited and re-benchmarked.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Corrections & Public Errata Policy */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <RefreshCw className="w-5 h-5 text-amber-400" />
            4. Corrections & Errata Reporting Policy
          </h2>
          <p>
            We strive for flawless mathematical accuracy. However, if a user, chartered accountant, or financial professional notices a potential discrepancy between a statutory circular and our calculator logic, we maintain a rapid errata protocol:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-zinc-400 text-xs sm:text-sm pl-2">
            <li><strong>Acknowledgment:</strong> Errata inquiries sent to <code className="text-amber-300 font-mono">support@fingtaj.online</code> are reviewed within 24 to 48 business hours.</li>
            <li><strong>Verification:</strong> Our engineering team checks the cited gazette notification or statutory clause against our unit test harness.</li>
            <li><strong>Public Resolution:</strong> If a discrepancy exists, the logic is corrected immediately, the change is date-stamped in the release logs, and public credit is extended to the reporter if requested.</li>
          </ul>
        </section>

        {/* Section 5: Author Bio & Transparency */}
        <section className="bg-[#121622] border border-[#22293A] p-6 rounded-2xl space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            Lead Author & Technical Governance
          </h2>
          <p className="text-sm text-zinc-300 leading-relaxed">
            FingTaj is architected and curated by <strong>Ashutosh Kumar</strong>, a financial systems engineer based in Chennai, India. The project was conceived out of frustration with advertising-laden fintech sites that require telephone numbers, email signups, and remote telemetry logging just to calculate a simple monthly loan EMI or tax liability.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-zinc-400">
            <span>Primary Desk: Chennai, Tamil Nadu, India</span>
            <span>•</span>
            <a href="mailto:support@fingtaj.online" className="text-amber-400 hover:underline">
              support@fingtaj.online
            </a>
            <span>•</span>
            <a
              href="https://www.linkedin.com/in/ashutosh-kumar-r/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline inline-flex items-center gap-1"
            >
              LinkedIn Profile
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

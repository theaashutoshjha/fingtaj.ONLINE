import React from 'react';
import { ShieldCheck, Cpu, Scale, FileText, CheckCircle2, UserCheck, ExternalLink, Mail, Award, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import SocialLinks from '../components/SocialLinks';
import SEO from '../components/SEO';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-zinc-300">
      <SEO
        title="About FingTaj — Zero-Telemetry Statutory Financial Engineering & Governance"
        description="Learn about FingTaj, an institutional-grade, zero-telemetry financial calculation suite built for Indian taxpayers, salaried professionals, and investors by Ashutosh Kumar."
        canonicalPath="/about"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about' },
        ]}
      />
      {/* Header */}
      <div className="mb-10 text-center sm:text-left border-b border-[#1E2433] pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-950/40 text-amber-300 border border-amber-800/50 mb-3">
          <Award className="w-3.5 h-3.5" />
          <span>Institutional Computational Integrity & E-E-A-T Compliance</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">About FingTaj</h1>
        <p className="mt-3 text-lg text-zinc-400 max-w-2xl">
          An institutional-grade, zero-telemetry financial computation suite purpose-built for Indian taxpayers, salaried professionals, and long-term capital allocators.
        </p>
      </div>

      {/* Quick Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
        <div className="bg-[#0F121A] border border-[#1E2433] rounded-xl p-4 text-center">
          <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">14</div>
          <div className="text-xs text-zinc-400 mt-1 uppercase font-semibold">Statutory Engines</div>
        </div>
        <div className="bg-[#0F121A] border border-[#1E2433] rounded-xl p-4 text-center">
          <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">0 Bytes</div>
          <div className="text-xs text-zinc-400 mt-1 uppercase font-semibold">Financial Data Sent</div>
        </div>
        <div className="bg-[#0F121A] border border-[#1E2433] rounded-xl p-4 text-center">
          <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">100%</div>
          <div className="text-xs text-zinc-400 mt-1 uppercase font-semibold">Client-Side Private</div>
        </div>
        <div className="bg-[#0F121A] border border-[#1E2433] rounded-xl p-4 text-center">
          <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">2026</div>
          <div className="text-xs text-zinc-400 mt-1 uppercase font-semibold">Finance Act Compliant</div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="space-y-12">
        {/* Section 1: The Founding Vision */}
        <section className="space-y-4">
          <div className="flex items-center gap-2.5 text-white">
            <BookOpen className="w-6 h-6 text-amber-400" />
            <h2 className="text-2xl font-bold">1. The Founding Mission: Demystifying Statutory Finance</h2>
          </div>
          <p className="leading-relaxed text-zinc-300 text-justify">
            Modern personal finance in India has evolved into a labyrinth of complex legal amendments, competing tax regimes, and opaque loan amortizations. For years, ordinary salaried employees and self-employed professionals seeking basic financial clarity—such as calculating monthly loan EMIs or comparing Old versus New Tax Regimes under <strong>Section 115BAC</strong>—have been forced through commercial fintech lead-generation funnels.
          </p>
          <p className="leading-relaxed text-zinc-300 text-justify">
            These commercial websites frequently demand user mobile numbers, emails, and financial parameters before displaying results, subsequently monetizing user intent by selling high-interest loans, speculative financial products, or sharing sensitive personal data with third-party telemarketers.
          </p>
          <p className="leading-relaxed text-zinc-300 text-justify">
            <strong>FingTaj was founded to break this predatory paradigm.</strong> We believe that computational financial literacy is a fundamental public utility. Our mission is to provide clean, uncompromised, institutional-grade mathematical models that run with zero telemetry, zero paywalls, and zero solicitation.
          </p>
        </section>

        {/* Section 2: Zero Telemetry Architecture */}
        <section className="space-y-4 bg-[#0F121A] border border-[#1E2433] rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-2.5 text-white">
            <Cpu className="w-6 h-6 text-amber-400" />
            <h2 className="text-2xl font-bold">2. Technical Architecture: Zero-Telemetry Execution</h2>
          </div>
          <p className="leading-relaxed text-zinc-300">
            FingTaj is architected from the ground up as a purely client-side evaluation engine. When you interact with our calculators:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div className="bg-[#08090D] border border-[#1E2433] p-4 rounded-xl">
              <div className="flex items-center gap-2 text-amber-300 font-semibold mb-2">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <span>In-Memory Evaluation</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Every mathematical formula—from reducing balance amortizations to compound annual growth rates (CAGR)—runs strictly inside your device’s V8/JavaScript runtime memory.
              </p>
            </div>
            <div className="bg-[#08090D] border border-[#1E2433] p-4 rounded-xl">
              <div className="flex items-center gap-2 text-emerald-300 font-semibold mb-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Zero Server-Side Payloads</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                No payload containing your salary, home loan principal, interest rates, or deductions is ever serialized or transmitted over the wire to remote servers or analytics providers.
              </p>
            </div>
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Even if your network connection disconnects after loading the page, our entire suite of calculators continues to operate with full mathematical capability directly in your browser.
          </p>
        </section>

        {/* Section 3: Statutory Standards */}
        <section className="space-y-4">
          <div className="flex items-center gap-2.5 text-white">
            <Scale className="w-6 h-6 text-amber-400" />
            <h2 className="text-2xl font-bold">3. Statutory Frameworks & Regulatory Conformity</h2>
          </div>
          <p className="leading-relaxed text-zinc-300">
            Our computational models are continuously benchmarked against published Indian gazette statutes and circulars:
          </p>
          <div className="space-y-3">
            <div className="p-4 bg-[#0F121A] border border-[#1E2433] rounded-xl">
              <h3 className="text-base font-semibold text-white">Income-tax Act, 1961 (Section 115BAC & Section 87A)</h3>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Incorporates revised slab architectures under the New Tax Regime, Standard Deduction adjustments (₹75,000 for salaried employees as per recent statutory provisions), Section 87A full tax rebates up to statutory taxable thresholds, and marginal relief calculations for incomes marginally exceeding rebate barriers.
              </p>
            </div>

            <div className="p-4 bg-[#0F121A] border border-[#1E2433] rounded-xl">
              <h3 className="text-base font-semibold text-white">Payment of Gratuity Act, 1972</h3>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Strict adherence to the statutory 15/26 formula: <code className="text-amber-300 font-mono">(15 × Last Drawn Basic Salary × Years of Service) ÷ 26</code>, incorporating statutory non-taxable gratuity caps (₹20,00,000) and service tenure rounding conventions.
              </p>
            </div>

            <div className="p-4 bg-[#0F121A] border border-[#1E2433] rounded-xl">
              <h3 className="text-base font-semibold text-white">Reserve Bank of India (RBI) Reducing Balance Standard</h3>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Formulated using exact reducing balance monthly compounding interest schedules: <code className="text-amber-300 font-mono">E = P × r × (1 + r)^n ÷ ((1 + r)^n - 1)</code>, providing full amortization schedules splitting interest vs. principal repayment down to the paisa.
              </p>
            </div>

            <div className="p-4 bg-[#0F121A] border border-[#1E2433] rounded-xl">
              <h3 className="text-base font-semibold text-white">Section 44ADA Presumptive Taxation Scheme</h3>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Calculates deemed net taxable income at 50% of gross receipts for eligible professionals (software engineers, doctors, lawyers, accountants, architects) up to the statutory gross turnover threshold (₹75,00,000 where cash receipts do not exceed 5%).
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Author & Governance (E-E-A-T) */}
        <section className="space-y-6 border border-amber-500/30 bg-gradient-to-br from-[#0F121A] to-[#08090D] p-6 sm:p-8 rounded-2xl shadow-sm">
          <div className="flex items-center gap-2.5 text-white">
            <UserCheck className="w-6 h-6 text-amber-400" />
            <h2 className="text-2xl font-bold">4. Technical Governance & Author Leadership</h2>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-700 flex items-center justify-center text-zinc-950 text-2xl font-black font-mono shrink-0 shadow-lg shadow-amber-500/20">
              AK
            </div>
            <div className="space-y-3">
              <div>
                <h3 className="text-xl font-bold text-white">Ashutosh Kumar</h3>
                <p className="text-sm text-amber-400 font-medium">Founding Architect & Computational Finance Engineer</p>
                <p className="text-xs text-zinc-400">Head of Mathematical Modeling at FingTaj • Chennai, Tamil Nadu, India</p>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed text-justify">
                Ashutosh Kumar is a Full-Stack Systems Engineer and computational finance specialist dedicated to software ergonomics, cryptographic privacy, and automated statutory modeling. With a rigorous background in full-stack web applications, algorithmic mathematics, and financial compliance, he created FingTaj to give Indian citizens access to dependable, unmonitored financial modeling tools.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold pt-2">
                <a
                  href="https://www.linkedin.com/in/ashutosh-kumar-r/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141824] hover:bg-[#1A2030] text-zinc-200 border border-[#22293A] transition"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                  LinkedIn: ashutosh-kumar-r
                </a>
                <a
                  href="https://x.com/FinGTaj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141824] hover:bg-[#1A2030] text-zinc-200 border border-[#22293A] transition"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                  X (Twitter): @FinGTaj
                </a>
                <a
                  href="mailto:support@fingtaj.online"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141824] hover:bg-[#1A2030] text-zinc-200 border border-[#22293A] transition"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  support@fingtaj.online
                </a>
              </div>
            </div>
          </div>

          {/* Official Community & Social Media Channels Grid */}
          <div className="pt-6 border-t border-[#1E2433]">
            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-200 mb-3">
              Official FingTaj Social & Community Outlets
            </h3>
            <SocialLinks layout="cards" />
          </div>
        </section>

        {/* Section 5: Verification & Quality Assurance */}
        <section className="space-y-4">
          <div className="flex items-center gap-2.5 text-white">
            <FileText className="w-6 h-6 text-amber-400" />
            <h2 className="text-2xl font-bold">5. Mathematical Peer-Review & Accuracy Auditing</h2>
          </div>
          <p className="leading-relaxed text-zinc-300 text-justify">
            Before any calculator or algorithm update is released on FingTaj:
          </p>
          <ul className="space-y-2 text-sm text-zinc-300 list-disc list-inside">
            <li><strong>Cross-Benchmarking:</strong> Calculations are benchmarked against official Central Board of Direct Taxes (CBDT) e-filing utilities, RBI repayment circular tables, and State Bank of India (SBI) amortization records.</li>
            <li><strong>Continuous Automated Regression:</strong> We run automated unit and end-to-end test suites covering extreme edge cases (e.g. leap year gratuity calculations, marginal tax relief transitions around ₹7,00,000 / ₹7,75,000, and long-term capital gain grandfathering clauses).</li>
            <li><strong>User Feedback Cycle:</strong> When legislative changes or budget notifications occur, our models are updated within 48 hours of gazette publication.</li>
          </ul>
        </section>

        {/* Section 6: Educational YMYL Disclaimer */}
        <section className="p-6 bg-[#0F121A] border border-amber-500/30 rounded-xl space-y-2 text-sm">
          <h3 className="font-bold text-amber-300 flex items-center gap-2">
            <span>⚠️</span> Statutory YMYL (Your Money Your Life) Notice
          </h3>
          <p className="text-zinc-300 leading-relaxed text-xs">
            Calculations and schedules generated by FingTaj are designed strictly for educational, informational, and personal modeling purposes. FingTaj is not a registered financial advisor with the Securities and Exchange Board of India (SEBI), nor does it provide certified Chartered Accountancy or formal legal advice. Financial decisions should always be evaluated in consultation with certified financial and tax professionals.
          </p>
        </section>
      </div>

      {/* Footer Navigation CTA */}
      <div className="mt-12 pt-8 border-t border-[#1E2433] flex flex-wrap items-center justify-between gap-4">
        <Link to="/" className="text-sm font-semibold text-amber-400 hover:underline">
          ← Explore All 14 Statutory Calculators
        </Link>
        <Link to="/contact" className="text-sm font-semibold text-amber-400 hover:underline">
          Contact the Engineering Team →
        </Link>
      </div>
    </div>
  );
}

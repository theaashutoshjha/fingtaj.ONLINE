import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';
import { ShieldCheck, BookOpen, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[#1E2433] bg-[#06070B] text-sm text-zinc-400 mt-20 pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-[#1E2433]">
          {/* Brand Info & Mission (Col 1) */}
          <div className="lg:col-span-1 space-y-4">
            <Link to="/" className="flex items-center gap-3 text-white group w-fit">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#141824] to-[#0A0C12] border border-amber-500/30 flex items-center justify-center p-1 shadow-sm group-hover:border-amber-400/60 transition-colors">
                <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                  <defs>
                    <linearGradient id="footGold" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FDE68A" />
                      <stop offset="50%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#B45309" />
                    </linearGradient>
                  </defs>
                  <path d="M12 14L24 8L36 14H12Z" fill="url(#footGold)" />
                  <rect x="11" y="16.5" width="26" height="3" rx="1.5" fill="url(#footGold)" />
                  <rect x="22.5" y="19" width="3" height="19" rx="1.5" fill="url(#footGold)" />
                  <path d="M14 24H21" stroke="url(#footGold)" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M14 30H19" stroke="url(#footGold)" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-xl font-extrabold tracking-tight">
                Fing<span className="text-amber-400">Taj</span>
              </span>
            </Link>

            <p className="text-xs text-zinc-400 leading-relaxed">
              Institutional-grade statutory financial calculators and research guides for Indian taxpayers, salaried professionals, and long-term capital allocators. Built with a strict zero-telemetry client-side architecture.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0F121A] border border-[#22293A] text-[11px] text-amber-300 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Client-Side In-Memory Engine</span>
            </div>

            {/* Social Channels in Brand Column */}
            <div className="pt-2">
              <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                Official Channels
              </span>
              <SocialLinks layout="icons-only" />
            </div>
          </div>

          {/* Col 2: Wealth & Accumulation */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-200">
              Wealth & Accumulation
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/sip-calculator" className="hover:text-amber-400 transition-colors">SIP Wealth Calculator</Link>
              </li>
              <li>
                <Link to="/step-up-sip-calculator" className="hover:text-amber-400 transition-colors">Step-Up / Top-Up SIP</Link>
              </li>
              <li>
                <Link to="/cagr-calculator" className="hover:text-amber-400 transition-colors">CAGR & Absolute Return</Link>
              </li>
              <li>
                <Link to="/ppf-calculator" className="hover:text-amber-400 transition-colors">PPF Maturity (7.1% Sovereign)</Link>
              </li>
              <li>
                <Link to="/inflation-adjusted-return-calculator" className="hover:text-amber-400 transition-colors">Inflation-Adjusted Returns</Link>
              </li>
              <li>
                <Link to="/nps-calculator" className="hover:text-amber-400 transition-colors">National Pension System (NPS)</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Debt, Banking & Taxation */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-200">
              Loans & Taxation
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/loan-emi-calculator" className="hover:text-amber-400 transition-colors">Home Loan EMI Amortization</Link>
              </li>
              <li>
                <Link to="/income-tax-calculator" className="hover:text-amber-400 transition-colors">Income Tax (Section 115BAC)</Link>
              </li>
              <li>
                <Link to="/capital-gains-tax-calculator" className="hover:text-amber-400 transition-colors">Capital Gains (112A / 111A)</Link>
              </li>
              <li>
                <Link to="/section-44ada-calculator" className="hover:text-amber-400 transition-colors">Section 44ADA Presumptive</Link>
              </li>
              <li>
                <Link to="/hra-calculator" className="hover:text-amber-400 transition-colors">HRA Exemption (Sec 10(13A))</Link>
              </li>
              <li>
                <Link to="/gratuity-calculator" className="hover:text-amber-400 transition-colors">Gratuity (15/26 Formula)</Link>
              </li>
              <li>
                <Link to="/fd-calculator" className="hover:text-amber-400 transition-colors">Fixed Deposit & TDS</Link>
              </li>
              <li>
                <Link to="/rd-calculator" className="hover:text-amber-400 transition-colors">Recurring Deposit (RD)</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Research Guides & Articles */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-200 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Research Guides</span>
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/articles/how-loan-emi-is-calculated" className="hover:text-amber-400 transition-colors">How EMI is Calculated</Link>
              </li>
              <li>
                <Link to="/articles/sip-vs-lump-sum-investing" className="hover:text-amber-400 transition-colors">SIP vs Lump Sum Investing</Link>
              </li>
              <li>
                <Link to="/articles/step-up-sip-wealth-accelerator" className="hover:text-amber-400 transition-colors">Step-Up SIP Accelerator</Link>
              </li>
              <li>
                <Link to="/articles/new-vs-old-tax-regime" className="hover:text-amber-400 transition-colors">New vs Old Tax Regime</Link>
              </li>
              <li>
                <Link to="/articles/understanding-real-vs-nominal-returns" className="hover:text-amber-400 transition-colors">Real vs Nominal Returns</Link>
              </li>
              <li>
                <Link to="/articles/ppf-rules-interest-calculation-guide" className="hover:text-amber-400 transition-colors">PPF 5th Day Rule Guide</Link>
              </li>
              <li className="pt-1">
                <Link to="/articles" className="text-amber-400 hover:underline font-semibold">
                  Browse All Research Guides →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Governance & Author */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-200">
              Governance & Compliance
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/methodology" className="hover:text-amber-400 transition-colors">Calculation Methodology</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-amber-400 transition-colors">Privacy Policy (AdSense & GDPR)</Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="hover:text-amber-400 transition-colors">Cookie Policy & Preferences</Link>
              </li>
              <li>
                <Link to="/disclaimer" className="hover:text-amber-400 transition-colors">Financial & Legal Disclaimer</Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-amber-400 transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors">Contact Support & SLA</Link>
              </li>
              <li className="pt-2 border-t border-[#1E2433]">
                <a
                  href="https://www.linkedin.com/in/ashutosh-kumar-r/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-zinc-400 hover:text-amber-400 transition"
                >
                  <span>Lead: Ashutosh Kumar</span>
                  <ExternalLink className="w-3 h-3 text-amber-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Legal Disclaimers & Copyright */}
        <div className="pt-8 space-y-4 text-xs text-zinc-500">
          <p className="leading-relaxed text-justify">
            <strong className="text-zinc-300">Statutory YMYL Notice:</strong> FingTaj (<a href="https://fingtaj.online" className="text-zinc-300 hover:text-amber-400 underline">https://fingtaj.online</a>) is an independent financial engineering utility. Calculations, estimates, and schedules are provided solely for educational, self-planning, and computational modeling purposes and do not constitute formal investment, tax, or legal advisory services. Users must consult a certified Chartered Accountant or SEBI-registered investment advisor prior to executing binding financial agreements. Review our <Link to="/disclaimer" className="text-amber-400 hover:underline">Disclaimer</Link>, <Link to="/privacy-policy" className="text-amber-400 hover:underline">Privacy Policy</Link>, and <Link to="/cookie-policy" className="text-amber-400 hover:underline">Cookie Policy</Link>.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-[#141824] text-[11px] text-zinc-500">
            <div>
              © {new Date().getFullYear()} FingTaj. All statutory computation engines run strictly in-memory on the client machine.
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link to="/privacy-policy" className="hover:text-amber-400 transition">Privacy</Link>
              <span>•</span>
              <Link to="/cookie-policy" className="hover:text-amber-400 transition">Cookies</Link>
              <span>•</span>
              <Link to="/disclaimer" className="hover:text-amber-400 transition">Disclaimer</Link>
              <span>•</span>
              <Link to="/terms-of-service" className="hover:text-amber-400 transition">Terms</Link>
              <span>•</span>
              <Link to="/methodology" className="hover:text-amber-400 transition">Methodology</Link>
              <span>•</span>
              <a href="mailto:support@fingtaj.online" className="hover:text-amber-400 transition">support@fingtaj.online</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

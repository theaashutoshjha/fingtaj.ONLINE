import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';
import { ShieldCheck, Scale, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-sm text-slate-400 mt-20 pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info & Mission (Cols 1-2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 text-white group w-fit">
              <svg className="w-8 h-8 text-cyan-400 transition-transform group-hover:scale-105" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="#0f172a" stroke="#0891b2" strokeWidth="1.5"/>
                <path d="M8 22L14 14L18 18L24 10" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="24" cy="10" r="2" fill="#22d3ee"/>
                <path d="M8 10H16" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>
                <path d="M8 14H12" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="text-xl font-bold tracking-tight">
                Fing<span className="text-cyan-400">Taj</span>
              </span>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Institutional-grade statutory financial calculators for Indian taxpayers, salaried professionals, and long-term capital allocators. Built with a strict zero-telemetry architecture where your personal numbers never leave your device.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-cyan-300 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>100% Client-Side In-Memory Execution</span>
            </div>

            {/* Social Channels in Brand Column */}
            <div className="pt-2">
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Official Social & Community Channels
              </span>
              <SocialLinks layout="icons-only" />
            </div>
          </div>

          {/* Col 3: Wealth & Investments */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Wealth & Investment
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/sip-calculator" className="hover:text-cyan-400 transition-colors">SIP Wealth Calculator</Link>
              </li>
              <li>
                <Link to="/ppf-calculator" className="hover:text-cyan-400 transition-colors">PPF Maturity (7.1% Sovereign)</Link>
              </li>
              <li>
                <Link to="/fd-calculator" className="hover:text-cyan-400 transition-colors">Fixed Deposit (FD) & TDS</Link>
              </li>
              <li>
                <Link to="/inflation-adjusted-return-calculator" className="hover:text-cyan-400 transition-colors">Inflation-Adjusted Returns</Link>
              </li>
              <li>
                <Link to="/capital-gains-tax-calculator" className="hover:text-cyan-400 transition-colors">Capital Gains (112A / 111A)</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Debt & Direct Taxation */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Debt & Tax Regimes
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/loan-emi-calculator" className="hover:text-cyan-400 transition-colors">Home & Loan EMI Amortization</Link>
              </li>
              <li>
                <Link to="/income-tax-calculator" className="hover:text-cyan-400 transition-colors">Income Tax (Section 115BAC)</Link>
              </li>
              <li>
                <Link to="/hra-calculator" className="hover:text-cyan-400 transition-colors">HRA Exemption (Sec 10(13A))</Link>
              </li>
              <li>
                <Link to="/gratuity-calculator" className="hover:text-cyan-400 transition-colors">Gratuity (15/26 Formula)</Link>
              </li>
              <li>
                <Link to="/section-44ada-calculator" className="hover:text-cyan-400 transition-colors">Section 44ADA Presumptive Tax</Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Governance & Author */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Governance & Legal
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="hover:text-cyan-400 transition-colors">About Us & Methodology</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-cyan-400 transition-colors">Privacy Policy (AdSense & GDPR)</Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-cyan-400 transition-colors">Terms of Service & Disclaimer</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact Support & SLA</Link>
              </li>
              <li className="pt-2 border-t border-slate-800">
                <a
                  href="https://www.linkedin.com/in/ashutosh-kumar-r/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-cyan-400 transition"
                >
                  <span>Lead: Ashutosh Kumar</span>
                  <ExternalLink className="w-3 h-3 text-cyan-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Legal Disclaimers & Copyright */}
        <div className="pt-8 space-y-4 text-xs text-slate-500">
          <p className="leading-relaxed text-justify">
            <strong className="text-slate-400">Statutory YMYL Notice:</strong> FingTaj (<a href="https://fingtaj.online" className="text-slate-400 hover:text-cyan-400 underline">https://fingtaj.online</a>) is an independent financial technology utility. Calculations, estimates, and schedules are provided solely for educational, self-planning, and computational modeling purposes and do not constitute formal investment, tax, or legal advisory services. Users must consult a certified Chartered Accountant or SEBI-registered investment advisor prior to executing binding financial agreements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-slate-900 text-[11px] text-slate-600">
            <div>
              © {new Date().getFullYear()} FingTaj. All statutory computation engines run strictly in-memory on the client machine.
            </div>
            <div className="flex items-center gap-4">
              <span>Chennai, Tamil Nadu, India</span>
              <span>•</span>
              <a href="mailto:support@fingtaj.online" className="hover:text-cyan-400 transition">support@fingtaj.online</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

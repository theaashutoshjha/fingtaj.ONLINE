import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, Calculator, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  const quickLinks = [
    { title: 'SIP Calculator', path: '/sip-calculator', desc: 'Annuity due mutual fund returns' },
    { title: 'Home Loan EMI', path: '/loan-emi-calculator', desc: 'RBI reducing balance amortization' },
    { title: 'Income Tax (Sec 115BAC)', path: '/income-tax-calculator', desc: 'New vs Old slab comparison' },
    { title: 'PPF Maturity', path: '/ppf-calculator', desc: '7.1% sovereign compounding' },
    { title: 'Gratuity Calculator', path: '/gratuity-calculator', desc: '15/26 formula & ₹20L ceiling' },
    { title: 'Capital Gains Tax', path: '/capital-gains-tax-calculator', desc: 'LTCG (12.5%) & STCG (20%)' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center text-slate-300">
      <SEO
        title="404 — Page Not Found | FingTaj"
        description="The requested page could not be located. Explore our suite of zero-telemetry statutory financial calculators for Indian taxpayers and investors."
        canonicalPath="/404"
      />

      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-rose-950/80 text-rose-300 border border-rose-800 mb-6 font-mono">
        HTTP 404: RESOURCE_NOT_FOUND
      </div>

      <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-4">
        Page Not Found
      </h1>

      <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto mb-8">
        The statutory financial calculation URL you requested does not exist or has been moved to an updated canonical route.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-3 rounded-lg transition shadow-lg cursor-pointer text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to FingTaj Hub</span>
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-medium px-6 py-3 rounded-lg transition text-sm"
        >
          <span>Report a Broken Link</span>
        </Link>
      </div>

      <div className="border-t border-slate-800/80 pt-10 text-left">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Calculator className="w-5 h-5 text-cyan-400" />
          <span>Popular Statutory Calculators</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {quickLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="p-3.5 bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/40 rounded-xl transition group block"
            >
              <div className="font-semibold text-white group-hover:text-cyan-300 transition-colors text-sm">
                {item.title}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                {item.desc}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

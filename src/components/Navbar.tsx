import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'All Calculators', path: '/' },
    { name: 'SIP', path: '/sip-calculator' },
    { name: 'Loan EMI', path: '/loan-emi-calculator' },
    { name: 'Income Tax', path: '/income-tax-calculator' },
    { name: 'PPF', path: '/ppf-calculator' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        {/* Brand Lockup */}
        <Link to="/" className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group">
          <svg className="w-8 h-8 text-cyan-400 transition-transform group-hover:scale-105" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" fill="#0f172a" stroke="#0891b2" strokeWidth="1.5"/>
            <path d="M8 22L14 14L18 18L24 10" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="24" cy="10" r="2" fill="#22d3ee"/>
            <path d="M8 10H16" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>
            <path d="M8 14H12" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
            Fing<span className="text-cyan-400">Taj</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors whitespace-nowrap ${
                  isActive ? 'text-cyan-400 font-semibold' : 'hover:text-cyan-400'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Affordance & Trust Badge */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-cyan-400/90 bg-cyan-950/40 border border-cyan-800/60 px-2.5 py-1 rounded">
            <span>🔒 Client-Side Private</span>
            <span className="text-slate-500">·</span>
            <span className="text-slate-400">0 Telemetry</span>
          </div>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950 px-4 py-3 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-sm text-slate-300 hover:text-cyan-400"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-slate-800 text-xs text-slate-500">
            🔒 In-browser memory calculation only
          </div>
        </div>
      )}
    </header>
  );
}

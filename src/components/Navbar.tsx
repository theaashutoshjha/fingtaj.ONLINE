import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'All Calculators', path: '/' },
    { name: 'Research Guides', path: '/articles' },
    { name: 'SIP Wealth', path: '/sip-calculator' },
    { name: 'Step-Up SIP', path: '/step-up-sip-calculator' },
    { name: 'Loan EMI', path: '/loan-emi-calculator' },
    { name: 'Income Tax 115BAC', path: '/income-tax-calculator' },
    { name: 'About & E-E-A-T', path: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#08090D]/95 backdrop-blur-md border-b border-[#1E2433]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        {/* Brand Lockup */}
        <Link to="/" className="flex items-center gap-3 whitespace-nowrap shrink-0 group">
          {/* Bespoke Sovereign Monogram Emblem */}
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#141824] to-[#0A0C12] border border-amber-500/30 flex items-center justify-center p-1.5 shadow-md shadow-amber-950/20 group-hover:border-amber-400/60 transition-colors">
            <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
              <defs>
                <linearGradient id="navGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FDE68A" />
                  <stop offset="50%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#B45309" />
                </linearGradient>
              </defs>
              <path d="M12 14L24 8L36 14H12Z" fill="url(#navGold)" />
              <rect x="11" y="16.5" width="26" height="3" rx="1.5" fill="url(#navGold)" />
              <rect x="22.5" y="19" width="3" height="19" rx="1.5" fill="url(#navGold)" />
              <path d="M14 24H21" stroke="url(#navGold)" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M14 30H19" stroke="url(#navGold)" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M25.5 35C27.5 33 30.5 28.5 35 24" stroke="#FDE68A" strokeWidth="2.2" strokeLinecap="round" />
              <polygon points="35,21 38,24 35,27 32,24" fill="url(#navGold)" />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-amber-100 transition-colors flex items-center gap-0.5">
              Fing<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">Taj</span>
            </span>
            <span className="text-[9px] font-mono font-semibold tracking-widest text-zinc-400 uppercase -mt-0.5">
              Statutory Vault
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-zinc-300">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path === '/articles' && location.pathname.startsWith('/articles'));
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors whitespace-nowrap py-1 relative ${
                  isActive ? 'text-amber-400 font-semibold' : 'hover:text-amber-300'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Affordance & Trust Badge */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-amber-300/90 bg-[#121622] border border-amber-500/20 px-3 py-1.5 rounded-md shadow-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-zinc-200">Zero Server Telemetry</span>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-400">100% Client-Side</span>
          </div>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white rounded-lg focus:outline-none"
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
        <div className="lg:hidden border-b border-[#1E2433] bg-[#0A0C14] px-4 py-3 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-zinc-300 hover:text-amber-400"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-[#1E2433] text-xs text-zinc-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Client-side in-memory computation only</span>
          </div>
        </div>
      )}
    </header>
  );
}

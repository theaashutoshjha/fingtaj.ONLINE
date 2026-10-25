import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Cookie, X, Check } from 'lucide-react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [adCookiesAllowed, setAdCookiesAllowed] = useState<boolean>(true);

  useEffect(() => {
    const consent = localStorage.getItem('fingtaj_cookie_consent');
    if (!consent) {
      // Delay showing banner slightly to avoid interfering with LCP/FCP
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(
      'fingtaj_cookie_consent',
      JSON.stringify({
        necessary: true,
        advertising: true,
        timestamp: new Date().toISOString(),
      })
    );
    setShowBanner(false);
  };

  const handleRejectNonEssential = () => {
    localStorage.setItem(
      'fingtaj_cookie_consent',
      JSON.stringify({
        necessary: true,
        advertising: false,
        timestamp: new Date().toISOString(),
      })
    );
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem(
      'fingtaj_cookie_consent',
      JSON.stringify({
        necessary: true,
        advertising: adCookiesAllowed,
        timestamp: new Date().toISOString(),
      })
    );
    setShowBanner(false);
    setShowSettings(false);
  };

  if (!showBanner) return null;

  return (
    <div
      role="region"
      aria-label="Cookie and Privacy Consent Notice"
      className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 bg-[#08090D]/95 backdrop-blur-md border-t border-[#1E2433] shadow-2xl transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {!showSettings ? (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1.5 max-w-3xl">
              <div className="flex items-center gap-2">
                <Cookie className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-sm font-bold text-white tracking-wide">
                  Privacy & Cookie Notice (AdSense & Statutory Compliance)
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                FingTaj operates with a <strong className="text-amber-300">zero-telemetry architecture</strong>—your financial calculations never leave your browser memory. We and our advertising partners (including Google AdSense) use cookies to serve relevant ads, measure performance, and prevent fraud in compliance with GDPR, CCPA, and India DPDPA. Read our{' '}
                <Link to="/cookie-policy" className="text-amber-400 underline hover:text-amber-300 font-medium">
                  Cookie Policy
                </Link>{' '}
                and{' '}
                <Link to="/privacy-policy" className="text-amber-400 underline hover:text-amber-300 font-medium">
                  Privacy Policy
                </Link>{' '}
                for full disclosures.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 shrink-0 w-full md:w-auto">
              <button
                onClick={() => setShowSettings(true)}
                className="text-xs px-3 py-2 rounded-lg border border-[#22293A] text-zinc-300 hover:text-white hover:bg-[#121622] transition-colors cursor-pointer"
              >
                Customise
              </button>
              <button
                onClick={handleRejectNonEssential}
                className="text-xs px-3.5 py-2 rounded-lg border border-[#22293A] bg-[#0F121A] text-zinc-300 hover:text-white hover:bg-[#141824] transition-colors cursor-pointer"
              >
                Reject Non-Essential
              </button>
              <button
                onClick={handleAcceptAll}
                className="text-xs px-4 py-2 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-zinc-950 font-bold shadow-md shadow-amber-950/30 transition-all cursor-pointer"
              >
                Accept All
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#1E2433] pb-3">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-amber-400" />
                <h3 className="text-sm font-bold text-white">Cookie Consent Preferences</h3>
              </div>
              <button
                onClick={() => setShowSettings(false)}
                className="text-zinc-400 hover:text-white p-1"
                aria-label="Close preferences"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-[#0F121A] rounded-lg border border-[#1E2433] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">Strictly Necessary Cookies</span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded">
                    Always Active
                  </span>
                </div>
                <p className="text-zinc-400 text-[11px] leading-relaxed">
                  Required for client-side state storage, session security, and basic portal functionality. Zero financial calculation data is saved or transmitted.
                </p>
              </div>

              <div className="p-3 bg-[#0F121A] rounded-lg border border-[#1E2433] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">AdSense & DoubleClick Cookies</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={adCookiesAllowed}
                      onChange={(e) => setAdCookiesAllowed(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-8 h-4 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-amber-500"></div>
                  </label>
                </div>
                <p className="text-zinc-400 text-[11px] leading-relaxed">
                  Enables Google AdSense to serve non-intrusive, relevant advertisements and limit ad frequency. You can opt out at any time.
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-[#1E2433]">
              <button
                onClick={() => setShowSettings(false)}
                className="text-xs px-3 py-1.5 rounded-lg border border-[#22293A] text-zinc-300 hover:text-white cursor-pointer"
              >
                Back
              </button>
              <button
                onClick={handleSavePreferences}
                className="text-xs px-4 py-1.5 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-zinc-950 font-bold flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <Check className="w-3.5 h-3.5" />
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

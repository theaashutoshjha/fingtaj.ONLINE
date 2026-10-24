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
      className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 shadow-2xl transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {!showSettings ? (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1.5 max-w-3xl">
              <div className="flex items-center gap-2">
                <Cookie className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-sm font-bold text-white tracking-wide">
                  Privacy & Cookie Notice (AdSense & Statutory Compliance)
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                FingTaj operates with a <strong className="text-cyan-300">zero-telemetry architecture</strong>—your financial calculations never leave your browser. We and our advertising partners (including Google AdSense) use standard cookies to serve relevant ads, measure ad performance, and maintain security in compliance with GDPR, CCPA, and India DPDPA. Read our{' '}
                <Link to="/privacy-policy" className="text-cyan-400 underline hover:text-cyan-300 font-medium">
                  Privacy Policy
                </Link>{' '}
                for full statutory disclosures.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 shrink-0 w-full md:w-auto">
              <button
                onClick={() => setShowSettings(true)}
                className="text-xs px-3 py-2 rounded-lg border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              >
                Customise
              </button>
              <button
                onClick={handleRejectNonEssential}
                className="text-xs px-3.5 py-2 rounded-lg border border-slate-700 bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              >
                Reject Non-Essential
              </button>
              <button
                onClick={handleAcceptAll}
                className="text-xs px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold shadow-sm hover:shadow-cyan-500/20 transition-all"
              >
                Accept All
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-cyan-400" />
                <h3 className="text-sm font-bold text-white">Cookie Consent Preferences</h3>
              </div>
              <button
                onClick={() => setShowSettings(false)}
                className="text-slate-400 hover:text-white p-1"
                aria-label="Close preferences"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">Strictly Necessary Cookies</span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded">
                    Always Active
                  </span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Required for client-side state storage, session security, and basic portal functionality. Zero financial calculation data is saved or transmitted.
                </p>
              </div>

              <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">AdSense & DoubleClick Cookies</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={adCookiesAllowed}
                      onChange={(e) => setAdCookiesAllowed(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-8 h-4 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-cyan-500"></div>
                  </label>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Enables Google AdSense to serve non-intrusive, relevant advertisements and limit ad frequency. You can opt out at any time.
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-800">
              <button
                onClick={() => setShowSettings(false)}
                className="text-xs px-3 py-1.5 rounded-lg border border-slate-700 text-slate-300 hover:text-white"
              >
                Back
              </button>
              <button
                onClick={handleSavePreferences}
                className="text-xs px-4 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold flex items-center gap-1.5"
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

import React from 'react';
import { Cookie, ShieldCheck, Settings, ExternalLink, Globe, Lock, Sliders, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function CookiePolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-zinc-300">
      <SEO
        title="Cookie Policy & Ad Preferences — FingTaj"
        description="Comprehensive Cookie Policy for FingTaj. Learn how we utilize essential cookies, Google AdSense DoubleClick DART cookies, Consent Mode v2, and how to manage your privacy preferences."
        canonicalPath="/cookie-policy"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Cookie Policy', path: '/cookie-policy' },
        ]}
      />

      {/* Header */}
      <div className="mb-10 text-center sm:text-left border-b border-[#1E2433] pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-950/40 text-amber-300 border border-amber-800/50 mb-3">
          <Cookie className="w-3.5 h-3.5 text-amber-400" />
          <span>EU, UK & Global AdSense Cookie Compliance</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Cookie Policy</h1>
        <p className="mt-3 text-sm text-zinc-400">
          Last Updated: <strong>October 25, 2026</strong> | Governing Domain: <strong>https://fingtaj.online</strong>
        </p>
      </div>

      <div className="space-y-10 text-justify leading-relaxed text-sm sm:text-base">
        {/* Preamble */}
        <section className="bg-[#0F121A] border border-[#1E2433] p-6 rounded-2xl space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            Clear, Transparent Cookie Disclosures
          </h2>
          <p className="text-zinc-300 text-sm">
            This Cookie Policy explains how <strong>FingTaj</strong> ("we", "us", or "our") uses cookies, local web storage tokens, web beacons, and related technologies on our website (<a href="https://fingtaj.online" className="text-amber-400 underline">https://fingtaj.online</a>). This policy is formulated in strict accordance with Google AdSense program policies, the European Union General Data Protection Regulation (GDPR), the ePrivacy Directive (Directive 2002/58/EC), the UK Data Protection Act, California Consumer Privacy Act (CCPA/CPRA), and the Indian Digital Personal Data Protection Act (DPDPA 2023).
          </p>
        </section>

        {/* Section 1: What Are Cookies */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Globe className="w-5 h-5 text-amber-400" />
            1. What Are Cookies and Web Storage?
          </h2>
          <p>
            Cookies are small text data files transferred to and stored in your web browser or device memory by websites you visit. They allow a site to recognize your browser, remember user settings (such as cookie consent decisions), and provide aggregated, anonymous analytical metrics.
          </p>
          <p className="text-zinc-400 text-sm">
            In addition to HTTP cookies, modern web platforms may use HTML5 LocalStorage and SessionStorage. At FingTaj, <strong>LocalStorage is solely used to preserve your cookie consent choices and client-side UI configurations</strong>. We do not store or track any financial numbers, salaries, or loan parameters across browser sessions.
          </p>
        </section>

        {/* Section 2: Detailed Cookie Classification */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Sliders className="w-5 h-5 text-amber-400" />
            2. Categories of Cookies Used on FingTaj
          </h2>
          <p>
            We organize cookies into three functional classifications. Below is an itemized breakdown of what is loaded and why:
          </p>

          <div className="space-y-4 pt-2">
            {/* Essential */}
            <div className="p-5 bg-[#0F121A] rounded-2xl border border-[#1E2433] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-white">A. Strictly Necessary & Security Cookies</span>
                <span className="text-[11px] font-mono font-semibold uppercase px-2.5 py-1 bg-emerald-500/20 text-emerald-400 rounded-md">
                  Exempt from Consent
                </span>
              </div>
              <p className="text-zinc-400 text-xs sm:text-sm">
                These cookies and storage tokens are essential for core site navigation, security hardening, and bot mitigation:
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-zinc-300 pl-2">
                <li><code className="text-amber-300 font-mono">fingtaj_cookie_consent</code>: Stores your preference regarding advertising cookies in local storage so the consent banner is not presented repeatedly.</li>
                <li><code className="text-amber-300 font-mono">__cf_bm</code> / <code className="text-amber-300 font-mono">cf_clearance</code>: Placed by Cloudflare network edge nodes to differentiate human visitors from malicious automated bot traffic and DDoS attacks.</li>
              </ul>
            </div>

            {/* Google AdSense / DART */}
            <div className="p-5 bg-[#0F121A] rounded-2xl border border-amber-500/40 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-white flex items-center gap-2">
                  <Cookie className="w-4 h-4 text-amber-400" />
                  B. Google AdSense & DoubleClick Advertising Cookies
                </span>
                <span className="text-[11px] font-mono font-semibold uppercase px-2.5 py-1 bg-amber-500/20 text-amber-300 rounded-md">
                  User Configurable
                </span>
              </div>
              <p className="text-zinc-400 text-xs sm:text-sm">
                FingTaj integrates <strong>Google AdSense</strong> to display advertisements. Google and its certified third-party vendor networks use cookies to serve ads based on prior visits to our site or other sites on the Internet:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-zinc-300 pl-2">
                <li><strong>DoubleClick DART Cookie:</strong> Used by Google to serve ads to users based on their navigation history across the web. You may opt out of personalized advertising by visiting Google Ad Settings.</li>
                <li><strong>Common Identifiers:</strong> Cookies such as <code className="text-amber-300 font-mono">_gads</code>, <code className="text-amber-300 font-mono">_gac_</code>, and <code className="text-amber-300 font-mono">IDE</code> help Google prevent fraud, limit frequency caps (ensuring you do not see the same ad repeatedly), and evaluate advertising performance.</li>
                <li><strong>Google Consent Mode v2:</strong> When you select "Reject Non-Essential", our site communicates signals to Google preventing personalized profiling, adhering to European Consent Mode standards.</li>
              </ul>
            </div>

            {/* In-Memory Zero Telemetry */}
            <div className="p-5 bg-[#0F121A] rounded-2xl border border-[#1E2433] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-white">C. Financial Calculation In-Memory Guarantee</span>
                <span className="text-[11px] font-mono font-semibold uppercase px-2.5 py-1 bg-emerald-500/20 text-emerald-400 rounded-md">
                  Zero Tracking
                </span>
              </div>
              <p className="text-zinc-400 text-xs sm:text-sm">
                No cookies, web beacons, or tracking pixels are ever associated with the financial figures you input into our calculators. Your calculations take place exclusively in volatile browser RAM and evaporate upon closing the tab.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Opt-Out & Ad Preference Controls */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Settings className="w-5 h-5 text-amber-400" />
            3. How to Manage and Opt Out of Advertising Cookies
          </h2>
          <p>
            You have absolute control over your digital footprint. You can opt out of personalized interest-based advertising via the following industry portals:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[#121622] rounded-xl border border-[#22293A] hover:border-amber-400/50 transition-colors group flex items-start justify-between"
            >
              <div>
                <span className="font-bold text-white text-sm group-hover:text-amber-400 flex items-center gap-1.5">
                  Google Ad Settings
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
                <p className="text-xs text-zinc-400 mt-1">
                  Manage personal ad preferences, mute unwanted ads, and turn off personalization across all Google services.
                </p>
              </div>
            </a>

            <a
              href="https://optout.networkadvertising.org"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[#121622] rounded-xl border border-[#22293A] hover:border-amber-400/50 transition-colors group flex items-start justify-between"
            >
              <div>
                <span className="font-bold text-white text-sm group-hover:text-amber-400 flex items-center gap-1.5">
                  NAI Opt-Out Portal
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
                <p className="text-xs text-zinc-400 mt-1">
                  Network Advertising Initiative centralized multi-vendor consumer opt-out page for behavioral targeting.
                </p>
              </div>
            </a>

            <a
              href="https://aboutads.info/choices"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[#121622] rounded-xl border border-[#22293A] hover:border-amber-400/50 transition-colors group flex items-start justify-between"
            >
              <div>
                <span className="font-bold text-white text-sm group-hover:text-amber-400 flex items-center gap-1.5">
                  DAA WebChoices
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
                <p className="text-xs text-zinc-400 mt-1">
                  Digital Advertising Alliance tool to manage cookie preferences across participating ad networks.
                </p>
              </div>
            </a>

            <a
              href="https://www.youronlinechoices.eu/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[#121622] rounded-xl border border-[#22293A] hover:border-amber-400/50 transition-colors group flex items-start justify-between"
            >
              <div>
                <span className="font-bold text-white text-sm group-hover:text-amber-400 flex items-center gap-1.5">
                  EDAA Your Online Choices
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
                <p className="text-xs text-zinc-400 mt-1">
                  European Interactive Digital Advertising Alliance consumer guide for European and UK residents.
                </p>
              </div>
            </a>
          </div>
        </section>

        {/* Section 4: Browser Level Controls */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Lock className="w-5 h-5 text-amber-400" />
            4. Managing Cookies in Your Web Browser
          </h2>
          <p>
            You can configure your browser to reject all cookies, notify you when a cookie is sent, or delete stored cookies whenever you close your browser. Consult your browser vendor’s documentation:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-zinc-400 text-xs sm:text-sm pl-2">
            <li><strong>Google Chrome:</strong> Settings &gt; Privacy and security &gt; Third-party cookies.</li>
            <li><strong>Mozilla Firefox:</strong> Settings &gt; Privacy & Security &gt; Cookies and Site Data.</li>
            <li><strong>Apple Safari:</strong> Preferences / Settings &gt; Privacy &gt; Block all cookies / Prevent cross-site tracking.</li>
            <li><strong>Microsoft Edge:</strong> Settings &gt; Cookies and site permissions &gt; Manage and delete cookies and site data.</li>
          </ul>
          <p className="text-zinc-400 text-xs">
            Note: If you disable all cookies in your browser, you may still use FingTaj's financial calculators without restriction, as our mathematical computations do not rely on cookies to execute.
          </p>
        </section>

        {/* Section 5: Contact & Inquiries */}
        <section className="bg-[#0F121A] border border-[#1E2433] p-6 rounded-2xl space-y-3">
          <h2 className="text-base font-bold text-white">Questions About Our Cookie Practices?</h2>
          <p className="text-zinc-400 text-xs sm:text-sm">
            If you have questions regarding this Cookie Policy or would like to exercise any privacy rights, reach out to our team at{' '}
            <a href="mailto:support@fingtaj.online" className="text-amber-400 hover:underline">
              support@fingtaj.online
            </a>
            . Also see our companion{' '}
            <Link to="/privacy-policy" className="text-amber-400 hover:underline">
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link to="/disclaimer" className="text-amber-400 hover:underline">
              Statutory Disclaimer
            </Link>.
          </p>
        </section>
      </div>
    </div>
  );
}

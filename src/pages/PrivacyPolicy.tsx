import React from 'react';
import { ShieldCheck, Cookie, Lock, EyeOff, Globe, HelpCircle, Mail, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-slate-300">
      <SEO
        title="Privacy Policy & Google AdSense Disclosures — FingTaj"
        description="Official FingTaj Privacy Policy detailing our zero-telemetry client-side computational architecture, Google AdSense DoubleClick DART cookies, GDPR, CCPA, and DPDPA compliance."
        canonicalPath="/privacy-policy"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Privacy Policy', path: '/privacy-policy' },
        ]}
      />
      {/* Header */}
      <div className="mb-10 text-center sm:text-left border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-800 mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Statutory Privacy & AdSense Compliance</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Privacy Policy</h1>
        <p className="mt-3 text-sm text-slate-400">
          Last Updated: <strong>October 24, 2026</strong> | Governing Domain: <strong>https://www.fingtaj.com</strong>
        </p>
      </div>

      <div className="space-y-10 text-justify leading-relaxed text-sm sm:text-base">
        {/* Preamble */}
        <section className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Lock className="w-5 h-5 text-cyan-400" />
            Commitment to Zero-Telemetry Financial Privacy
          </h2>
          <p className="text-slate-300 text-sm">
            At FingTaj (accessible from <a href="https://www.fingtaj.com" className="text-cyan-400 underline">https://www.fingtaj.com</a>), one of our core architectural priorities is the absolute privacy of our visitors. This Privacy Policy document outlines the types of information that are collected or recorded by FingTaj, how it is handled, and our compliance with Google AdSense, the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA/CPRA), and the Digital Personal Data Protection Act (DPDPA, 2023) of India.
          </p>
        </section>

        {/* Section 1: Zero-Telemetry Execution */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <EyeOff className="w-5 h-5 text-cyan-400" />
            1. Zero-Telemetry Policy for Financial Inputs
          </h2>
          <p>
            Unlike conventional fintech platforms and lead-generation portals, <strong>FingTaj does not collect, record, transmit, or log any financial parameters you enter into our calculators</strong>.
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-400 text-sm pl-2">
            <li>Your monthly salary, gross receipts, and professional turnover remain strictly within your device’s local memory.</li>
            <li>Loan principals, interest rates, tenures, and amortization tables are computed locally via client-side JavaScript.</li>
            <li>Provident fund contributions, gratuity service years, and capital gain numbers are never sent to remote application servers or third-party telemarketers.</li>
          </ul>
          <p className="text-slate-300 text-sm">
            Our computational scripts run completely within your client browser (V8 / JavaScriptCore / SpiderMonkey). If you disconnect your internet connection while using any calculator, the application continues to calculate flawlessly.
          </p>
        </section>

        {/* Section 2: Google AdSense and Third-Party Advertising */}
        <section className="space-y-4 border border-cyan-800/40 bg-slate-900/40 p-6 rounded-2xl">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Cookie className="w-5 h-5 text-cyan-400" />
            2. Google AdSense & Third-Party Advertising Cookies
          </h2>
          <p>
            FingTaj uses <strong>Google AdSense</strong> to display advertisements. Google is a third-party vendor on our site. Google uses cookies, including the <strong>DoubleClick DART cookie</strong>, to serve advertisements to visitors based on their visit to www.fingtaj.com and other websites across the Internet.
          </p>
          
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 text-sm">
            <h3 className="font-semibold text-cyan-300">Mandatory AdSense Disclosure Clauses:</h3>
            <p className="text-slate-300">
              • Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to this website or other websites.
            </p>
            <p className="text-slate-300">
              • Google's use of advertising cookies enables it and its partners to serve ads to users based on their visits to FingTaj and/or other sites on the Internet.
            </p>
            <p className="text-slate-300">
              • Users may opt out of personalized advertising by visiting Google's official Ad Settings page at{' '}
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline font-mono">
                https://adssettings.google.com
              </a>.
            </p>
            <p className="text-slate-300">
              • Alternatively, users can opt out of a third-party vendor's use of cookies for personalized advertising by visiting the Network Advertising Initiative or AboutAds at{' '}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline font-mono">
                https://www.aboutads.info/choices/
              </a>.
            </p>
          </div>
        </section>

        {/* Section 3: Log Files */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">3. Log Files & Edge Network Infrastructure</h2>
          <p>
            FingTaj follows a standard procedure of utilizing log files maintained at the hosting and content delivery network (CDN) level (such as Cloudflare and Google Cloud). The information collected by log files includes:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-400 text-sm pl-2">
            <li>Internet Protocol (IP) addresses</li>
            <li>Browser type and version (User-Agent string)</li>
            <li>Internet Service Provider (ISP)</li>
            <li>Date and timestamp of request</li>
            <li>Referring/exit pages and HTTP status codes</li>
            <li>Number of static asset clicks</li>
          </ul>
          <p className="text-slate-400 text-sm">
            These logs are strictly aggregated and anonymized for administering the site, mitigating DDoS attacks, analyzing routing latency, and preventing infrastructure abuse. They are not linked to any personally identifiable information.
          </p>
        </section>

        {/* Section 4: Web Storage & Local Cookies */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">4. Local Browser Storage Usage</h2>
          <p>
            FingTaj does not set invasive tracking or fingerprinting cookies. We use browser <code className="text-cyan-300 font-mono">localStorage</code> solely for enhancing client-side user experience:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-400 text-sm pl-2">
            <li>Persisting local UI preferences (such as dark mode settings or recent calculation presets).</li>
            <li>Recording support ticket dispatch IDs generated locally on the Contact Us page so users can cross-reference their questions.</li>
          </ul>
          <p className="text-slate-400 text-sm">
            You can clear your local browser storage at any time via your browser settings without impacting the performance of our tools.
          </p>
        </section>

        {/* Section 5: GDPR Rights */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Globe className="w-5 h-5 text-cyan-400" />
            5. GDPR Data Protection Rights (European Economic Area)
          </h2>
          <p>
            Under the General Data Protection Regulation (GDPR), users within the EEA are entitled to specific rights regarding their personal data:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
            <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg">
              <strong className="text-white block mb-1">Right to Access:</strong> You have the right to request copies of your personal data held by us.
            </div>
            <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg">
              <strong className="text-white block mb-1">Right to Rectification:</strong> You have the right to request that we correct inaccurate or incomplete information.
            </div>
            <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg">
              <strong className="text-white block mb-1">Right to Erasure:</strong> You have the right to request that we erase your personal data under certain conditions.
            </div>
            <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg">
              <strong className="text-white block mb-1">Right to Restrict Processing:</strong> You have the right to request the restriction of processing of your personal data.
            </div>
          </div>
          <p className="text-xs text-slate-400">
            Because FingTaj does not retain user accounts or financial calculation databases, we hold zero financial records on our servers. Inquiries regarding data privacy can be dispatched to <code className="text-cyan-300 font-mono">support@fingtaj.com</code>.
          </p>
        </section>

        {/* Section 6: CCPA/CPRA Rights */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">6. CCPA / CPRA Privacy Disclosures (California Residents)</h2>
          <p>
            Under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA), California residents have specific rights regarding their personal information:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-400 text-sm pl-2">
            <li><strong>Right to Know:</strong> Request disclosure of the categories and specific pieces of personal data collected.</li>
            <li><strong>Right to Delete:</strong> Request deletion of personal data collected from the consumer.</li>
            <li><strong>Do Not Sell or Share:</strong> FingTaj does not sell or rent consumer personal data to data brokers. You may opt out of third-party advertising cookies via the Google Ads Settings link provided above.</li>
            <li><strong>Non-Discrimination:</strong> We do not discriminate against any user for exercising their CCPA/CPRA privacy rights.</li>
          </ul>
        </section>

        {/* Section 7: India DPDPA Compliance */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">7. Compliance with India Digital Personal Data Protection Act (DPDPA 2023)</h2>
          <p>
            FingTaj operates in full alignment with the provisions of India’s <strong>Digital Personal Data Protection Act, 2023</strong>. Because our computational tools process financial variables purely in-memory on the client machine, FingTaj does not act as a data fiduciary for your calculated financial numbers. No digital personal data is indexed, harvested, or transferred outside Indian borders.
          </p>
        </section>

        {/* Section 8: Children's Privacy */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">8. Children's Online Privacy Protection Act (COPPA)</h2>
          <p>
            FingTaj does not knowingly collect any Personal Identifiable Information from children under the age of 13. If a parent or guardian believes that FingTaj has information of a child under the age of 13 in its communications, please contact us immediately and we will promptly remove such records from our email correspondence.
          </p>
        </section>

        {/* Section 9: Security */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">9. Data Security & Cryptographic Transport</h2>
          <p>
            All communications between your client device and FingTaj are encrypted using standard <strong>TLS 1.3 / HTTPS</strong> cryptographic protocols. Static assets are served via secure edge networks with strict Content Security Policies (CSP) and HTTP Strict Transport Security (HSTS) headers enabled.
          </p>
        </section>

        {/* Section 10: DPO & Grievance Contact */}
        <section className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Mail className="w-5 h-5 text-cyan-400" />
            10. Privacy Officer & Grievance Redressal
          </h2>
          <p className="text-slate-300 text-sm">
            For any queries, concerns, or legal notices concerning this Privacy Policy, please contact our Data Grievance Officer:
          </p>
          <div className="text-xs text-slate-400 space-y-1 font-mono">
            <p>Attention: Data Grievance Redressal</p>
            <p>Lead Engineer: Ashutosh Jha</p>
            <p>Email: <a href="mailto:support@fingtaj.com" className="text-cyan-400 underline">support@fingtaj.com</a></p>
            <p>Physical Jurisdiction: Chennai, Tamil Nadu, 600001, India</p>
            <p>Response Timeline: Within 48 business hours</p>
          </div>
        </section>
      </div>

      {/* Footer Navigation */}
      <div className="mt-12 pt-8 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <Link to="/terms-of-service" className="text-sm font-semibold text-cyan-400 hover:underline">
          Review Terms of Service →
        </Link>
        <Link to="/contact" className="text-sm font-semibold text-cyan-400 hover:underline">
          Contact Privacy Desk →
        </Link>
      </div>
    </div>
  );
}

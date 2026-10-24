import React from 'react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-slate-300">
      <h1 className="text-3xl font-bold text-white mb-6">About FingTaj</h1>
      
      <section className="space-y-6">
        <p className="text-lg text-slate-200">
          FingTaj is a dedicated financial calculation engine designed to deliver fast, transparent, and private statutory computation tools for Indian taxpayers, salaried professionals, and long-term investors.
        </p>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">Our Engineering Principle: Zero Telemetry</h2>
          <p>
            Traditional online calculators often transmit salary and loan data to remote marketing databases. FingTaj runs entirely in-memory using client-side JavaScript. Your financial parameters never leave your local browser window.
          </p>
        </div>

        <div className="border border-slate-800 bg-slate-900/60 p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-white mb-2">Author & Technical Governance (E-E-A-T)</h2>
          <p className="text-slate-300">
            FingTaj is engineered and maintained by <strong>Ashutosh Jha</strong>, a Full-Stack Systems Engineer and financial computation enthusiast based in <strong>Chennai, Tamil Nadu, India</strong>.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-cyan-400">
            <span>Primary Contact: support@fingtaj.com</span>
            <span>•</span>
            <a href="https://github.com/imaashutoshjha" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub Profile</a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/imaashutoshjha" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn Profile</a>
          </div>
        </div>
      </section>
    </div>
  );
}

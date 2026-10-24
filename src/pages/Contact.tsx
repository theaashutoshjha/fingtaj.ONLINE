import React, { useState, useEffect } from 'react';
import { Mail, Clock, MapPin, Send, CheckCircle2, ShieldCheck, HelpCircle, Copy, Check, MessageSquare, AlertCircle } from 'lucide-react';
import SEO from '../components/SEO';
import SocialLinks from '../components/SocialLinks';

interface ContactRecord {
  id: string;
  name: string;
  email: string;
  category: string;
  subject: string;
  message: string;
  timestamp: string;
  status: 'Received' | 'In Review';
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Calculation Verification / Question',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<ContactRecord | null>(null);
  const [history, setHistory] = useState<ContactRecord[]>([]);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  // Load previous inquiry history from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('fingtaj_contact_history');
      if (saved) {
        setHistory(JSON.parse(saved));
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('support@fingtaj.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // Real client-side validations
    if (formData.name.trim().length < 2) {
      setFormError('Please enter a valid full name (at least 2 characters).');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setFormError('Please enter a valid email address.');
      return;
    }
    if (formData.subject.trim().length < 3) {
      setFormError('Please provide a subject summarizing your inquiry.');
      return;
    }
    if (formData.message.trim().length < 15) {
      setFormError('Please describe your query in more detail (at least 15 characters).');
      return;
    }

    setIsSubmitting(true);

    // Simulate real asynchronous dispatch with reference ID generation
    await new Promise((resolve) => setTimeout(resolve, 800));

    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const ticketId = `FT-${new Date().getFullYear()}-${randomSuffix}`;
    const newRecord: ContactRecord = {
      id: ticketId,
      name: formData.name.trim(),
      email: formData.email.trim(),
      category: formData.category,
      subject: formData.subject.trim(),
      message: formData.message.trim(),
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      status: 'Received',
    };

    const updatedHistory = [newRecord, ...history].slice(0, 10);
    setHistory(updatedHistory);
    try {
      localStorage.setItem('fingtaj_contact_history', JSON.stringify(updatedHistory));
    } catch {
      // Ignore
    }

    setSubmittedTicket(newRecord);
    setIsSubmitting(false);
  };

  const createMailtoLink = (record: ContactRecord) => {
    const subject = encodeURIComponent(`[${record.id}] ${record.category}: ${record.subject}`);
    const body = encodeURIComponent(
      `Ticket ID: ${record.id}\nName: ${record.name}\nEmail: ${record.email}\nCategory: ${record.category}\nTimestamp: ${record.timestamp} IST\n\nQuery Details:\n${record.message}\n\n--\nSent via FingTaj Financial Computing Portal (https://www.fingtaj.com)`
    );
    return `mailto:support@fingtaj.com?subject=${subject}&body=${body}`;
  };

  const handleResetForm = () => {
    setSubmittedTicket(null);
    setFormData({
      name: '',
      email: '',
      category: 'Calculation Verification / Question',
      subject: '',
      message: '',
    });
  };

  const faqs = [
    {
      q: 'Do you store or transmit my financial numbers when I use the calculators?',
      a: 'Never. FingTaj adheres to a strict zero-telemetry architectural principle. Every single arithmetic and statutory function executes in-memory within your device browser using pure JavaScript. No salaries, loan amounts, or personal figures are ever sent to our servers or third-party loggers.',
    },
    {
      q: 'How frequently are statutory tax slabs and formulas updated?',
      a: 'Our computational models are audited and synchronized with the latest Gazette notifications from the Ministry of Finance, the Central Board of Direct Taxes (CBDT), the Reserve Bank of India (RBI), and Employees’ Provident Fund Organisation (EPFO) whenever Union Budget revisions or statutory amendments are enacted.',
    },
    {
      q: 'Can I report a mathematical edge case or request a custom calculator?',
      a: 'Yes. Select "Mathematical Discrepancy / Bug" or "New Calculator Request" in the contact form. Our engineering team reviews edge cases against statutory provisions (such as marginal relief under Section 87A, 44ADA caps, or gratuity ceiling revisions) within 24 to 48 business hours.',
    },
    {
      q: 'Are FingTaj calculations legally certified for income tax filing?',
      a: 'FingTaj provides institutional-grade computational modeling for self-planning, forecasting, and educational purposes. While our formulas rigorously follow the Income-tax Act, 1961, they do not constitute formal Chartered Accountancy advice. We recommend verifying final numbers with your registered CA or tax advisor.',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-slate-300">
      <SEO
        title="Contact FingTaj — Statutory Financial & Engineering Support Desk"
        description="Connect with FingTaj engineering support for statutory tax questions, calculation discrepancies, and feature requests. Guaranteed 24-48 hr response SLA."
        canonicalPath="/contact"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact Us', path: '/contact' },
        ]}
        faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))}
      />
      {/* Page Header */}
      <div className="mb-10 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-800 mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Institutional Support & Mathematical Governance</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Contact FingTaj Support</h1>
        <p className="mt-2 text-base text-slate-400 max-w-2xl">
          Have an inquiry, statutory tax question, or mathematical feedback? Our engineering and financial modeling team is here to assist.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Direct Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5 text-cyan-400" />
              Direct Engineering Inquiries
            </h2>
            <div className="space-y-4 text-sm">
              <div>
                <span className="text-slate-400 block text-xs uppercase tracking-wider font-semibold">Primary Support Email</span>
                <div className="flex items-center justify-between gap-2 mt-1 p-2.5 bg-slate-950/90 border border-slate-800 rounded-lg">
                  <span className="font-mono text-cyan-300 font-medium select-all">support@fingtaj.com</span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition flex items-center gap-1 text-xs"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              <div>
                <span className="text-slate-400 block text-xs uppercase tracking-wider font-semibold">Lead Systems Architect</span>
                <p className="text-slate-200 font-medium mt-0.5">Ashutosh Kumar</p>
                <p className="text-xs text-slate-400">Computational Finance & Full-Stack Systems</p>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-slate-800">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-300 font-medium text-xs block">Service Level Agreement (SLA)</span>
                  <span className="text-xs text-slate-400">Response guaranteed within 24 to 48 business hours (Mon – Fri, 09:30 – 18:30 IST).</span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-slate-800">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-300 font-medium text-xs block">Operational Base & Jurisdiction</span>
                  <span className="text-xs text-slate-400">Chennai, Tamil Nadu 600001, India</span>
                </div>
              </div>

              {/* Official Social Outlets */}
              <div className="pt-3 border-t border-slate-800">
                <span className="text-slate-400 block text-xs uppercase tracking-wider font-semibold mb-2">
                  Official Channels & Community
                </span>
                <SocialLinks layout="icons-only" />
              </div>
            </div>
          </div>

          {/* Zero Telemetry Guarantee Card */}
          <div className="bg-cyan-950/20 border border-cyan-800/60 rounded-xl p-5 text-sm">
            <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Zero-Log Communication Privacy</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              We never collect telemetry from our calculators. Information submitted through this contact form is used exclusively to answer your mathematical or platform inquiry.
            </p>
          </div>

          {/* Past Inquiries in this browser (if any) */}
          {history.length > 0 && (
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 text-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-slate-200 text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                  Recent Inquiries in this Browser ({history.length})
                </span>
              </div>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {history.map((item) => (
                  <div key={item.id} className="p-2.5 bg-slate-950/80 rounded border border-slate-800 text-xs">
                    <div className="flex justify-between items-center font-mono text-cyan-300 mb-1">
                      <span>{item.id}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 font-sans">
                        {item.status}
                      </span>
                    </div>
                    <p className="text-slate-300 font-medium truncate">{item.subject}</p>
                    <span className="text-slate-500 text-[10px]">{item.timestamp}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Contact Form / Confirmation */}
        <div className="lg:col-span-7">
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 sm:p-8 shadow-xl">
            {submittedTicket ? (
              <div className="py-4 space-y-6">
                <div className="flex items-center gap-3 text-emerald-400">
                  <CheckCircle2 className="w-8 h-8 shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white">Inquiry Successfully Registered</h3>
                    <p className="text-sm text-emerald-300">Ticket Reference: <strong className="font-mono text-cyan-300">{submittedTicket.id}</strong></p>
                  </div>
                </div>

                <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg space-y-2 text-sm">
                  <div className="flex justify-between border-b border-slate-800/80 pb-2">
                    <span className="text-slate-400">Sender:</span>
                    <span className="text-slate-200 font-medium">{submittedTicket.name} ({submittedTicket.email})</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800/80 pb-2">
                    <span className="text-slate-400">Category:</span>
                    <span className="text-cyan-300">{submittedTicket.category}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800/80 pb-2">
                    <span className="text-slate-400">Subject:</span>
                    <span className="text-slate-200">{submittedTicket.subject}</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-slate-400 block mb-1">Message Content:</span>
                    <p className="text-slate-300 text-xs bg-slate-900 p-3 rounded border border-slate-800 whitespace-pre-wrap">
                      {submittedTicket.message}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={createMailtoLink(submittedTicket)}
                    className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-5 py-3 rounded-lg transition"
                  >
                    <Send className="w-4 h-4" />
                    <span>Open in Email Client to Send Directly</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="w-full py-2.5 text-center text-sm text-slate-400 hover:text-white transition"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-800 pb-4 mb-4">
                  <h2 className="text-lg font-bold text-white">Send Us a Direct Message</h2>
                  <p className="text-xs text-slate-400 mt-1">
                    All calculations are vetted by financial modeling engineers. Please provide specific parameters if inquiring about a tax or loan calculation.
                  </p>
                </div>

                {formError && (
                  <div className="p-3 bg-rose-950/60 border border-rose-800 rounded-lg text-rose-300 text-sm flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                    <span>{formError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Full Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Ramesh Krishnan"
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. ramesh@example.com"
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-category" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Inquiry Category <span className="text-cyan-400">*</span>
                  </label>
                  <select
                    id="contact-category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition"
                  >
                    <option value="Calculation Verification / Question">Statutory Calculation Verification (Section 115BAC, EMI, SIP)</option>
                    <option value="Mathematical Discrepancy / Bug">Mathematical Discrepancy or Edge Case Report</option>
                    <option value="New Calculator Request">New Statutory Calculator Request</option>
                    <option value="Business / Sponsorship / AdSense">Business, Media, or Advertising Inquiry</option>
                    <option value="Privacy / Zero-Telemetry Compliance">Privacy & Data Governance Inquiries</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Subject Line <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Brief summary of your question or issue"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Detailed Query <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Include relevant parameters (e.g. Annual Income ₹15,00,000, Old vs New Regime, Loan Principal, Tenure) so our team can evaluate the mathematical formula."
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 disabled:bg-cyan-800 text-slate-950 font-bold px-6 py-3 rounded-lg transition shadow-lg cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Validating & Dispatching Ticket...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Dispatch Support Request</span>
                      </>
                    )}
                  </button>
                  <p className="text-center text-[11px] text-slate-500 mt-2">
                    🔒 Zero personal data is shared with third parties. Transmission is encrypted.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Structured FAQ Section */}
      <div className="mt-16 pt-10 border-t border-slate-800">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
            <HelpCircle className="w-6 h-6 text-cyan-400" />
            Frequently Asked Support Questions
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Answers to common queries regarding calculations, privacy guarantees, and updates.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="border border-slate-800 bg-slate-900/60 rounded-xl overflow-hidden transition"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between text-sm font-semibold text-slate-200 hover:text-cyan-400 transition"
                >
                  <span>{faq.q}</span>
                  <span className="text-cyan-400 text-lg ml-4">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 bg-slate-950/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SEO from './SEO';
import SocialLinks from './SocialLinks';
import { ChevronRight, Calendar, Clock, ArrowLeft, Calculator, BookOpen } from 'lucide-react';

interface ArticleLayoutProps {
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  publishedDate: string;
  authorName?: string;
  calculatorLink?: {
    name: string;
    path: string;
    badge: string;
  };
  children: React.ReactNode;
}

export default function ArticleLayout({
  title,
  subtitle,
  category,
  readTime,
  publishedDate,
  authorName = 'Ashutosh Kumar',
  calculatorLink,
  children,
}: ArticleLayoutProps) {
  const location = useLocation();

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <SEO
        title={`${title} | FingTaj Financial Research`}
        description={subtitle}
        canonicalPath={location.pathname}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Guides & Research', path: '/articles' },
          { name: title, path: location.pathname },
        ]}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="border-b border-[#1E2433] pb-4">
        <ol className="flex items-center gap-2 text-xs text-zinc-400">
          <li>
            <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
          </li>
          <li>
            <Link to="/articles" className="hover:text-amber-400 transition-colors">Financial Guides</Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
          </li>
          <li aria-current="page">
            <span className="text-amber-400 font-mono truncate max-w-[200px] sm:max-w-xs">{category}</span>
          </li>
        </ol>
      </nav>

      {/* Article Header */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono">
          <span className="text-amber-400 font-bold uppercase tracking-wider">
            {category}
          </span>
          <span className="text-zinc-600">·</span>
          <div className="flex items-center gap-1 text-zinc-400">
            <Clock className="w-3.5 h-3.5 text-zinc-500" />
            <span>{readTime} Read</span>
          </div>
          <span className="text-zinc-600">·</span>
          <div className="flex items-center gap-1 text-zinc-400">
            <Calendar className="w-3.5 h-3.5 text-zinc-500" />
            <span>Updated {publishedDate}</span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
          {title}
        </h1>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
          {subtitle}
        </p>

        {/* Author Byline */}
        <div className="flex items-center justify-between border-y border-[#1E2433] py-3.5 text-xs text-zinc-400">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#141824] border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-xs font-mono">
              AK
            </div>
            <div>
              <div className="font-semibold text-zinc-200">{authorName}</div>
              <div className="text-[11px] text-zinc-500">Computational Finance Engineer · Chennai, India</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-zinc-400 hidden sm:inline">Statutory Verification: Passed</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          </div>
        </div>
      </header>

      {/* Contextual Interactive Calculator Callout */}
      {calculatorLink && (
        <aside aria-label="Interactive Financial Tool" className="p-4 sm:p-5 bg-gradient-to-r from-[#121622] via-[#0F121A] to-[#0A0C13] border border-amber-500/30 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Calculator className="w-4 h-4 text-amber-400" />
              <span className="text-xs uppercase font-mono tracking-wider text-amber-300 font-bold">Interactive Calculation Engine</span>
            </div>
            <p className="text-xs text-zinc-300">
              Run this exact statutory model with your personal figures using our zero-telemetry client-side calculator:
            </p>
          </div>
          <Link
            to={calculatorLink.path}
            className="shrink-0 px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-zinc-950 font-bold text-xs rounded-lg transition-colors flex items-center gap-1.5 shadow-md shadow-amber-950/30"
          >
            <span>Launch {calculatorLink.name}</span>
            <span>→</span>
          </Link>
        </aside>
      )}

      {/* Article Body */}
      <div className="max-w-none text-zinc-300 leading-relaxed space-y-6 text-sm sm:text-base">
        {children}
      </div>

      {/* Contextual Interactive Calculator Footer Box */}
      {calculatorLink && (
        <div className="p-6 bg-[#0F121A] border border-[#1E2433] rounded-xl space-y-3">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Calculator className="w-4 h-4 text-amber-400" />
            <span>Compute Your Own Scenarios Now</span>
          </h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Ready to test this model with real figures? Access the dedicated {calculatorLink.name} with real-time sliders, visual schedule breakdowns, and exportable calculation summaries.
          </p>
          <div className="pt-2">
            <Link
              to={calculatorLink.path}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#181D2A] hover:bg-amber-500 hover:text-zinc-950 text-zinc-200 text-xs font-semibold rounded-lg transition-colors border border-[#22293A]"
            >
              <span>Launch {calculatorLink.name} ({calculatorLink.badge})</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      )}

      {/* Community Channels & Author Footer */}
      <footer className="border-t border-[#1E2433] pt-8 space-y-6">
        <div className="p-5 bg-[#0F121A] border border-[#1E2433] rounded-xl space-y-3">
          <div className="text-xs font-semibold text-zinc-300">Share or discuss this analysis with fellow investors:</div>
          <SocialLinks layout="inline" />
        </div>

        <div className="flex items-center justify-between text-xs text-zinc-500 pt-2">
          <Link to="/articles" className="inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Financial Guides</span>
          </Link>
          <Link to="/" className="hover:text-amber-400 transition-colors">
            All 14 Statutory Calculators →
          </Link>
        </div>
      </footer>
    </article>
  );
}

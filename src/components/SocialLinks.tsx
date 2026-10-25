import React from 'react';

export interface SocialLinkItem {
  name: string;
  url: string;
  handle: string;
  description: string;
  ariaLabel: string;
  icon: (props: { className?: string }) => React.ReactElement;
  accentClass: string;
  badgeClass: string;
}

export const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    name: 'X (Twitter)',
    handle: '@FinGTaj',
    url: 'https://x.com/FinGTaj',
    description: 'Official announcements, Union Budget alerts & financial market insights',
    ariaLabel: 'Follow FingTaj on X (formerly Twitter)',
    accentClass: 'hover:text-white hover:border-zinc-500',
    badgeClass: 'bg-[#121622] text-zinc-300 border-[#22293A]',
    icon: ({ className = 'w-5 h-5' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    handle: '@fingtaj',
    url: 'https://www.youtube.com/@fingtaj',
    description: 'Statutory calculation video walkthroughs, tax tutorials & amortization masterclasses',
    ariaLabel: 'Subscribe to FingTaj on YouTube',
    accentClass: 'hover:text-red-400 hover:border-red-500/50',
    badgeClass: 'bg-red-950/40 text-red-300 border-red-800/60',
    icon: ({ className = 'w-5 h-5' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp Channel',
    handle: 'FinGTaj Community',
    url: 'https://whatsapp.com/channel/0029Vb7gkNgIt5rwnKzp0Y0K',
    description: 'Instant notifications on CBDT circulars, tax slab revisions & rate changes',
    ariaLabel: 'Join the FingTaj Official WhatsApp Channel',
    accentClass: 'hover:text-emerald-400 hover:border-emerald-500/50',
    badgeClass: 'bg-emerald-950/40 text-emerald-300 border-emerald-800/60',
    icon: ({ className = 'w-5 h-5' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.53c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.03 2.6c.13.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    handle: 'Ashutosh Kumar',
    url: 'https://www.linkedin.com/in/ashutosh-kumar-r/',
    description: 'Founding architect profile, software systems engineering & financial technology thought leadership',
    ariaLabel: 'Connect with Ashutosh Kumar on LinkedIn',
    accentClass: 'hover:text-amber-400 hover:border-amber-500/50',
    badgeClass: 'bg-amber-950/30 text-amber-300 border-amber-800/40',
    icon: ({ className = 'w-5 h-5' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.64 1.64 0 0 0-1.66 1.64c0 .91.74 1.65 1.66 1.65a1.65 1.65 0 0 0 1.66-1.65c0-.9-.75-1.64-1.66-1.64z" />
      </svg>
    ),
  },
  {
    name: 'Quora',
    handle: 'FinGTaj Space',
    url: 'https://www.quora.com/profile/FinGTaj',
    description: 'Expert answers on Indian income tax slabs, Section 115BAC, EMI formulas & gratuity rules',
    ariaLabel: 'Read FinGTaj financial answers on Quora',
    accentClass: 'hover:text-amber-400 hover:border-amber-500/50',
    badgeClass: 'bg-amber-950/40 text-amber-300 border-amber-800/60',
    icon: ({ className = 'w-5 h-5' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 5.03 3.73 9.19 8.57 9.88l-.29 1.46c-.05.26.15.5.41.5h.39c.2 0 .39-.1.49-.27l1.37-2.32c.67.07 1.36.1 2.06.1 5.52 0 10-4.48 10-10S17.52 2 12 2zm1.2 14.8c-.5 0-.9-.2-1.3-.5-.4.4-.9.6-1.5.6-1.4 0-2.3-1.1-2.3-2.8 0-1.8 1.1-3 2.5-3 .7 0 1.3.3 1.7.8V9.3h1.7v7.5h-.8zm-1.4-2.5c0-.9-.5-1.5-1.2-1.5s-1.2.6-1.2 1.5.5 1.5 1.2 1.5 1.2-.6 1.2-1.5z" />
      </svg>
    ),
  },
];

interface SocialLinksProps {
  layout?: 'icons-only' | 'cards' | 'inline';
  className?: string;
}

export default function SocialLinks({ layout = 'icons-only', className = '' }: SocialLinksProps) {
  if (layout === 'cards') {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
        {SOCIAL_LINKS.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.ariaLabel}
              className={`p-4 bg-[#0F121A] hover:bg-[#141824] border border-[#1E2433] hover:border-amber-500/40 rounded-xl transition duration-200 group flex flex-col justify-between ${item.accentClass}`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-white text-sm group-hover:text-amber-300 transition-colors flex items-center gap-2">
                    <Icon className="w-4 h-4 text-zinc-400 group-hover:text-amber-400 transition-colors" />
                    {item.name}
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${item.badgeClass}`}>
                    {item.handle}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-3 text-[11px] font-semibold text-amber-400 flex items-center gap-1">
                <span>Connect & Follow</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </a>
          );
        })}
      </div>
    );
  }

  if (layout === 'inline') {
    return (
      <div className={`flex flex-wrap items-center gap-2 ${className}`}>
        {SOCIAL_LINKS.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.ariaLabel}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0F121A] border border-[#1E2433] text-zinc-300 text-xs font-medium transition duration-150 hover:bg-[#161B26] hover:border-amber-500/40 ${item.accentClass}`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{item.name}</span>
            </a>
          );
        })}
      </div>
    );
  }

  // icons-only default
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {SOCIAL_LINKS.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.ariaLabel}
            title={`${item.name} (${item.handle})`}
            className={`w-9 h-9 flex items-center justify-center rounded-lg bg-[#0F121A] border border-[#1E2433] text-zinc-400 hover:text-white hover:border-amber-500/40 transition duration-150 group ${item.accentClass}`}
          >
            <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
          </a>
        );
      })}
    </div>
  );
}

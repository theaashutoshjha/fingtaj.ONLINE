import React, { useEffect, useRef } from 'react';

interface AdSlotProps {
  slotId?: string;
  format?: 'auto' | 'rectangle' | 'horizontal';
  className?: string;
}

/**
 * AdSlot Component
 * Compliant with Google AdSense Policies:
 * 1. Explicitly labeled with "Advertisement" as required by AdSense Placement Policies.
 * 2. Guaranteed min-height to eliminate Cumulative Layout Shift (CLS < 0.1).
 * 3. Safely activates window.adsbygoogle only when real ad scripts are loaded.
 * 4. Never obscures interactive calculation controls or navigation.
 */
export default function AdSlot({
  slotId,
  format = 'auto',
  className = '',
}: AdSlotProps) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only attempt to push to adsbygoogle if AdSense script is present and slotId is configured
    try {
      if (typeof window !== 'undefined' && slotId && (window as unknown as { adsbygoogle?: unknown[] }).adsbygoogle) {
        ((window as unknown as { adsbygoogle: unknown[] }).adsbygoogle =
          (window as unknown as { adsbygoogle: unknown[] }).adsbygoogle || []).push({});
      }
    } catch {
      // Graceful fallback if ad blocker is active or script not loaded
    }
  }, [slotId]);

  return (
    <aside
      aria-label="Advertisement"
      className={`my-8 overflow-hidden rounded-xl border border-slate-800/80 bg-slate-950/60 p-4 text-center ${className}`}
    >
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/60">
        <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 font-semibold">
          Advertisement
        </span>
        <span className="text-[10px] text-slate-600">
          Google AdSense Compliant Slot
        </span>
      </div>

      <div
        ref={adRef}
        className="min-h-[90px] sm:min-h-[120px] flex items-center justify-center rounded-lg bg-slate-900/40 border border-dashed border-slate-800"
      >
        {slotId ? (
          <ins
            className="adsbygoogle"
            style={{ display: 'block', minHeight: '90px' }}
            data-ad-client="ca-pub-3594420471814241"
            data-ad-slot={slotId}
            data-ad-format={format}
            data-full-width-responsive="true"
          />
        ) : (
          <div className="py-4 px-3 text-center space-y-1">
            <p className="text-xs text-slate-500 font-mono">
              Sponsored Financial Content Slot
            </p>
            <p className="text-[11px] text-slate-600">
              Reserved for certified institutional partners & Google AdSense units.
            </p>
          </div>
        )}
      </div>
    </aside>
  );
}

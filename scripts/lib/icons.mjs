// Inline SVG icon set (24×24, stroke = currentColor) and the brand mark. No emoji anywhere in the UI.
const P = {
  land: '<path d="M4 17.5 7.5 6.5l12 2.5-2.5 10z"/><path d="M4 21h13M20 4v5"/>',
  brick: '<rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M3 9.7h18M3 14.3h18M9 5v4.7M15 9.7v4.6M9 14.3V19"/>',
  cost: '<circle cx="12" cy="12" r="9"/><path d="M8.5 8h7M8.5 11.2h7M9.5 8c3.6 0 4.5 1.6 4.5 3.1S12.9 14 9.5 14l4.5 3.5"/>',
  key: '<circle cx="8" cy="12" r="3.6"/><path d="M11.6 12H21M17.5 12v3.2M20.5 12v2.2"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1"/>',
  ruler: '<path d="M3.5 15 15 3.5 20.5 9 9 20.5z"/><path d="m7.5 11.5 2 2M10.5 8.5l2 2M13.5 5.5l2 2"/>',
  frame: '<path d="M3 21h18M5 21V10.5L12 5l7 5.5V21M10 21v-6h4v6"/>',
  sofa: '<path d="M5 11V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3M3 13.2a2 2 0 0 1 4 0V14h10v-.8a2 2 0 0 1 4 0V18H3z"/><path d="M5 18v2M19 18v2"/>',
  arrow: '<path d="M5 12h14M13.5 6l6 6-6 6"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  shield: '<path d="M12 3 4.5 6v5.5c0 4.5 3 8 7.5 9.5 4.5-1.5 7.5-5 7.5-9.5V6z"/><path d="m9 12 2.2 2.2L15.5 10"/>',
  pin: '<path d="M12 21s6.5-5.6 6.5-11a6.5 6.5 0 0 0-13 0C5.5 15.4 12 21 12 21z"/><circle cx="12" cy="10" r="2.4"/>',
  book: '<path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H19v15H6a2 2 0 0 0-2 2zM4 19.5V5.5M8 8h7"/>',
  sparkle: '<path d="M12 3v5M12 16v5M3 12h5M16 12h5M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3"/>',
};
export const icon = (name, size = 24, cls = '') => `<svg class="ic ${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${P[name]}</svg>`;

// Brand mark: an arched doorway (the “opening” of a home) standing on a measuring baseline.
export const MARK = `<svg class="mark" viewBox="0 0 40 40" width="38" height="38" aria-hidden="true" focusable="false"><rect width="40" height="40" rx="11" fill="#16231e"/><path d="M12.5 29V20a7.5 7.5 0 0 1 15 0v9" fill="none" stroke="#f5efe4" stroke-width="3" stroke-linecap="round"/><rect x="8.5" y="29" width="23" height="3.2" rx="1.6" fill="#e0714d"/><path d="M20 12.5v3" stroke="#e0714d" stroke-width="2.2" stroke-linecap="round"/></svg>`;
export const MARK_SVG_FILE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><rect width="40" height="40" rx="11" fill="#16231e"/><path d="M12.5 29V20a7.5 7.5 0 0 1 15 0v9" fill="none" stroke="#f5efe4" stroke-width="3" stroke-linecap="round"/><rect x="8.5" y="29" width="23" height="3.2" rx="1.6" fill="#e0714d"/><path d="M20 12.5v3" stroke="#e0714d" stroke-width="2.2" stroke-linecap="round"/></svg>`;

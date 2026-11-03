// Single place for site-wide settings. Edit here, then run `npm run build`.
export default {
  name: 'Fingtaj',
  url: 'https://fingtaj.online',
  locale: 'en_IN',
  tagline: 'Measure twice. Build once. Calculators and guides for Indian homes',
  description: '30 free calculators and 72 practical guides on land measurement, building materials, house construction cost, property registration, solar and home maintenance in India.',
  email: 'contact@fingtaj.online',
  buildDate: new Date().toISOString().slice(0, 10),
  updatedLabel: 'November 2026',

  // ---- Verification & monetisation (as provided) ----
  adsensePub: 'ca-pub-3594420471814241',
  gaId: 'G-GRXC5MH7PC',
  gscVerification: '',   // paste ONLY the content="..." value of Search Console's HTML-tag method (leave '' for DNS verification)
  bingVerification: '',

  // ---- Instant indexing (IndexNow: Bing, Yandex, Seznam, Naver, Yep) ----
  indexNowKey: 'c7e2b8f64a1d9e5b3f0c8e2a1b4d7f9e',

  founder: 'Ashutosh Jha',
  team: 'Fingtaj Editorial Team',
  social: {},
};

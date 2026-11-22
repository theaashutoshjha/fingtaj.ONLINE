// Single place for site-wide settings. Edit here, then run `npm run build`.
export default {
  name: 'Fingtaj',
  url: 'https://www.fingtaj.online',
  locale: 'en_IN',
  tagline: 'Measure twice. Build once. Calculators and guides for Indian homes',
  description: '30 free calculators and 72 practical guides on land measurement, building materials, house construction cost, property registration, solar and home maintenance in India.',
  email: 'contact@fingtaj.online',
  launchDate: '2026-11-03',
  lastModified: '2026-11-22',
  updatedLabel: 'November 2026',

  // ---- Verification & monetisation (as provided) ----
  adsensePub: 'ca-pub-3594420471814241',
  gaId: 'G-GRXC5MH7PC',
  gscVerification: '',   // paste ONLY the content="..." value of Search Console's HTML-tag method (leave '' for DNS verification)
  bingVerification: '',

  // ---- Instant indexing (IndexNow: Bing, Yandex, Seznam, Naver, Yep) ----
  indexNowKey: 'dd42d910f10e14978a7dd6380733ff08',

  // ---- AI Crawler & Robots.txt Policy ----
  // 'block-training': allows search bots (Google, Bing, OAI-SearchBot, Claude-SearchBot, Perplexity) but disallows AI model training scrapers (GPTBot, ClaudeBot, CCBot, Google-Extended, etc.)
  // 'allow': allows all public crawlers and AI bots without training restrictions
  aiCrawlerPolicy: 'block-training',

  founder: 'Ashutosh Jha',
  team: 'Fingtaj Editorial Team',
  social: {},
};

import cfg from '../../site.config.mjs';
import { icon, MARK } from './icons.mjs';

export const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
export const abs = (p) => cfg.url + (p === '/' ? '/' : p);
export const json = (o) => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, '\\u003c')}</script>`;

export const ASSET_V = { css: '', js: '' }; // filled by build with content hashes

const EEA = ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'IS', 'LI', 'NO', 'GB', 'CH'];

const WORDMARK = `<span class="wm">fingtaj<i>.</i></span>`;
const BRAND = `<a class="brand" href="/" aria-label="${cfg.name} — home">${MARK}${WORDMARK}</a>`;

const header = (path, ctx) => `<div class="strip"><div class="wrap"><span><b>Free</b> calculators · no sign-up · your numbers never leave your browser</span><span>Reviewed ${cfg.updatedLabel}</span></div></div>
<header class="hdr"><div class="wrap">${BRAND}
<button class="menu" aria-expanded="false" aria-controls="nav" aria-label="Open menu">Menu</button>
<nav class="nav" id="nav" aria-label="Main"><ul>
<li class="mega-wrap"><a href="/calculators"${path === '/calculators' ? ' aria-current="page"' : ''}>Calculators ${icon('chevron', 15)}</a>
<div class="mega"><div>${ctx.calcCats.map((k) => `<section style="--hue:${k.hue}"><h4>${icon(k.icon, 18)}<a href="/calculators#${k.id}">${esc(k.name)}</a></h4><ul>${k.items.map((c) => `<li><a href="/${c.slug}">${esc(c.menu)}</a></li>`).join('')}</ul></section>`).join('')}</div></div></li>
<li><a href="/guides"${path === '/guides' || path.startsWith('/guides/') || path.startsWith('/topics/') ? ' aria-current="page"' : ''}>Guides</a></li>
<li><a href="/about"${path === '/about' ? ' aria-current="page"' : ''}>About</a></li>
<li><a href="/contact"${path === '/contact' ? ' aria-current="page"' : ''}>Contact</a></li></ul>
<button class="sbtn" data-search type="button" aria-label="Search">${icon('search', 17)} Search <kbd class="vh">/</kbd></button></nav></div></header>`;

const footer = (ctx) => `<footer class="ftr"><div class="wrap">
<div class="ftr-top"><h2>Measure twice. <em>Build once.</em></h2><a class="btn" href="/calculators">Open the calculators ${icon('arrow', 18)}</a></div>
<div class="fgrid">
<div>${BRAND}<p class="about">Free calculators and plain-English guides for people building, buying and looking after a home in India. Independent, supported by ads, never sponsored by builders or brands.</p><p class="about"><a href="mailto:${cfg.email}">${cfg.email}</a></p></div>
<div><div class="fh">Calculators</div><ul>${ctx.calcCats.map((k) => `<li><a href="/calculators#${k.id}">${esc(k.name)}</a></li>`).join('')}</ul></div>
<div><div class="fh">Guides</div><ul>${ctx.topics.map((t) => `<li><a href="/topics/${t.id}">${esc(t.name)}</a></li>`).join('')}</ul></div>
<div><div class="fh">About</div><ul><li><a href="/about">Our story</a></li><li><a href="/editorial-policy">Editorial policy</a></li><li><a href="/how-we-calculate">How we calculate</a></li><li><a href="/sources">Standards &amp; sources</a></li><li><a href="/faq">FAQ</a></li><li><a href="/contact">Contact</a></li></ul></div>
<div><div class="fh">Legal</div><ul><li><a href="/privacy-policy">Privacy policy</a></li><li><a href="/terms">Terms of use</a></li><li><a href="/disclaimer">Disclaimer</a></li><li><a href="/cookie-policy">Cookie policy</a></li><li><a href="/sitemap">Site map</a></li></ul></div>
</div>
<div class="fine"><p>${cfg.name} is an educational publication. Content is general information, not engineering, legal, tax or financial advice. Calculators give planning estimates from the assumptions shown; building codes, tariffs, duties and subsidies differ by state and change often — check with your local authority and consult a licensed engineer, architect or lawyer before you act.</p><p>© ${new Date().getFullYear()} ${cfg.name} · fingtaj.online</p></div>
<div class="big-wm" aria-hidden="true">fingtaj.</div></div></footer>
<div id="search-ov" class="ov" role="dialog" aria-modal="true" aria-label="Search"><div class="box"><label class="vh" for="q">Search</label><input id="q" type="search" placeholder="Search calculators and guides — try “bigha”, “brick” or “stamp duty”" autocomplete="off"><ul></ul></div></div>
<div id="cookie" class="cookie" role="region" aria-label="Cookie notice"><p>We use cookies for analytics and to show ads through Google AdSense. Accept or decline the non-essential ones — details in our <a href="/cookie-policy">cookie policy</a>.</p><button data-consent="denied" type="button">Decline</button><button class="ok" data-consent="granted" type="button">Accept</button></div>`;

/**
 * Renders a full HTML document.
 * opts: title, desc, path, type ('website'|'article'), image, jsonld[], body, crumbs [[name,path]], noindex, published, modified, section, extraHead, scripts, hero
 */
export function page(opts, ctx) {
  const { title, desc, path, body } = opts;
  const url = abs(path);
  const fullTitle = opts.rawTitle ? title : `${title} | ${cfg.name}`;
  const img = opts.image ? (opts.image.startsWith('http') ? opts.image : cfg.url + opts.image) : cfg.url + '/og-image.png';
  const robots = opts.noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1';
  const crumbsLd = opts.crumbs && opts.crumbs.length > 1 ? json({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: opts.crumbs.map(([n, p], i) => ({ '@type': 'ListItem', position: i + 1, name: n, item: abs(p) })) }) : '';
  const crumbsHtml = opts.crumbs && opts.crumbs.length > 1 ? `<nav class="crumbs" aria-label="Breadcrumb">${opts.crumbs.map(([n, p], i) => (i === opts.crumbs.length - 1 ? `<span aria-current="page" style="margin:0;opacity:1;color:var(--ink)">${esc(n)}</span>` : `<a href="${p}">${esc(n)}</a><span>/</span>`)).join('')}</nav>` : '';
  // gtag.js is injected after the page has loaded (and the browser is idle) so analytics never competes with first paint.
  const ga = cfg.gaId ? `<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('consent','default',{ad_storage:'granted',analytics_storage:'granted',ad_user_data:'granted',ad_personalization:'granted'});gtag('consent','default',{ad_storage:'denied',analytics_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',region:${JSON.stringify(EEA)}});gtag('js',new Date());gtag('config','${cfg.gaId}');addEventListener('load',function(){var l=function(){var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id=${cfg.gaId}';document.head.appendChild(s)};'requestIdleCallback' in window?requestIdleCallback(l,{timeout:2500}):setTimeout(l,1500)});</script>` : '';
  return `<!doctype html>
<html lang="en-IN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${url}">
<meta name="robots" content="${robots}">
<meta name="author" content="${esc(opts.author || cfg.team)}">
<meta name="theme-color" content="#16231e">
${cfg.gscVerification ? `<meta name="google-site-verification" content="${esc(cfg.gscVerification)}">` : ''}${cfg.bingVerification ? `<meta name="msvalidate.01" content="${esc(cfg.bingVerification)}">` : ''}
<meta name="google-adsense-account" content="${cfg.adsensePub}">
<meta property="og:site_name" content="${cfg.name}">
<meta property="og:locale" content="${cfg.locale}">
<meta property="og:type" content="${opts.type || 'website'}">
<meta property="og:title" content="${esc(opts.ogTitle || title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${img}">
<meta property="og:image:alt" content="${esc(opts.imageAlt || title)}">
${opts.type === 'article' ? `<meta property="article:published_time" content="${opts.published}">\n<meta property="article:modified_time" content="${opts.modified}">\n<meta property="article:section" content="${esc(opts.section || '')}">\n<meta property="article:author" content="${cfg.team}">` : ''}
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(opts.ogTitle || title)}">
<meta name="twitter:description" content="${esc(desc)}">
<meta name="twitter:image" content="${img}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="alternate" type="application/rss+xml" title="${cfg.name} guides" href="/feed.xml">
<link rel="preload" href="/assets/fonts/dmsans-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/fraunces-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preconnect" href="https://pagead2.googlesyndication.com" crossorigin>
${cfg.gaId ? '<link rel="preconnect" href="https://www.googletagmanager.com" crossorigin>' : ''}
<link rel="stylesheet" href="/assets/site.css?v=${ASSET_V.css}">
${ga}
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${cfg.adsensePub}" crossorigin="anonymous"></script>
${(opts.jsonld || []).map(json).join('\n')}
${crumbsLd}
${opts.extraHead || ''}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
${header(path, ctx)}
<main id="main">
${opts.hero ? opts.hero : ''}<div class="wrap">${crumbsHtml}</div>
${body}
</main>
${footer(ctx)}
<script src="/assets/site.js?v=${ASSET_V.js}" defer></script>
${(opts.scripts || []).join('\n')}
</body>
</html>`;
}

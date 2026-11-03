// Fingtaj (home, land & construction) static site generator. `npm run build` → dist/
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import cfg from '../site.config.mjs';
import { page, esc, abs, ASSET_V } from './lib/layout.mjs';
import { icon } from './lib/icons.mjs';
import { loadGuides, relatedGuides, guidesForCalc, TOPICS } from './lib/guides.mjs';
import { CALCS, CATEGORIES as CALC_CATS, defaults } from '../calc/index.js';
import { renderResult, inr } from '../calc/lib.js';
import { STATIC_PAGES } from './lib/pages.mjs';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const R = (...p) => path.join(root, ...p);
const write = (rel, data) => { const f = path.join(dist, rel); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, data); };
const copyDir = (from, to) => { fs.mkdirSync(to, { recursive: true }); for (const e of fs.readdirSync(from, { withFileTypes: true })) { const a = path.join(from, e.name), b = path.join(to, e.name); e.isDirectory() ? copyDir(a, b) : fs.copyFileSync(a, b); } };
const hash = (f) => crypto.createHash('md5').update(fs.readFileSync(f)).digest('hex').slice(0, 8);
const fmtDate = (d) => new Date(d + 'T00:00:00Z').toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
const trimTo = (s, n) => (s.length <= n ? s : s.slice(0, s.slice(0, n - 1).lastIndexOf(' ')).replace(/[,;:\-–—(]$/, '') + '…');

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });
copyDir(R('assets'), path.join(dist, 'assets'));
fs.rmSync(path.join(dist, 'assets/fonts/fonts.json'), { force: true });
copyDir(R('calc'), path.join(dist, 'assets/calc'));
fs.rmSync(path.join(dist, 'assets/calc/index.js'), { force: true });
copyDir(R('public'), dist);
ASSET_V.css = hash(R('assets/site.css')); ASSET_V.js = hash(R('assets/site.js'));
const uiV = hash(R('assets/calc-ui.js'));

// ---------- data ----------
const guides = await loadGuides(CALCS.map((c) => c.slug));
const MENU = { 'unit-converter': 'Unit converter', 'land-area-converter': 'Land area converter', 'ac-tonnage-calculator': 'AC size (tonnage)', 'land-price-calculator': 'Land price & rate', 'material-thumb-rule-estimator': 'Cement & steel thumb rule' };
const menuLabel = (c) => MENU[c.slug] || c.title.replace(/\s*\(.*\)/, '').replace(/ (Calculator|Converter|Estimator|Planner)$/, '').replace(/^Construction /, '');
const calcCats = CALC_CATS.map((k) => ({ ...k, items: CALCS.filter((c) => c.category === k.id).map((c) => ({ slug: c.slug, menu: menuLabel(c) })) }));
const catOf = (c) => CALC_CATS.find((k) => k.id === c.category);
const topSlugs = ['land-area-converter', 'brick-quantity-calculator', 'concrete-calculator', 'construction-cost-calculator', 'stamp-duty-calculator', 'steel-weight-calculator', 'solar-rooftop-calculator', 'electricity-bill-calculator'];
const topCalcs = topSlugs.map((s) => CALCS.find((c) => c.slug === s));
const ctx = { topics: TOPICS, calcCats };
const pages = [], searchIndex = [];
const emit = (rel, opts) => {
  write(rel === '/' ? 'index.html' : rel.replace(/^\//, '') + '.html', page(opts, ctx));
  if (!opts.noindex) pages.push({ path: rel, lastmod: (opts.modified || cfg.buildDate).slice(0, 10) });
};

// ---------- shared JSON-LD ----------
const orgLd = { '@type': 'Organization', '@id': cfg.url + '/#org', name: cfg.name, url: cfg.url, logo: { '@type': 'ImageObject', url: cfg.url + '/logo-512.png', width: 512, height: 512 }, email: cfg.email, founder: { '@type': 'Person', name: cfg.founder } };
const websiteLd = { '@type': 'WebSite', '@id': cfg.url + '/#website', url: cfg.url, name: cfg.name, description: cfg.tagline, inLanguage: 'en-IN', publisher: { '@id': cfg.url + '/#org' } };
const faqLd = (faqs) => ({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) });
const faqHtml = (faqs) => `<div class="faq">${faqs.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div>`;
const DISCLAIMER = `<div class="disc"><b>General information, not professional advice.</b> Building codes, duties, tariffs, subsidies and prices differ by state and change often. Check with your local authority and consult a licensed structural engineer, architect, lawyer or tax professional before you build, buy or sign. See our <a href="/disclaimer">disclaimer</a> and <a href="/editorial-policy">editorial policy</a>.</div>`;

const guideCard = (g) => `<a class="card gcard" style="--hue:${g.topic.hue}" href="${g.urlPath}"><span class="tag">${icon(g.topic.icon, 16)} ${esc(g.topic.name)}</span><h3>${esc(g.title)}</h3><p>${esc(trimTo(g.desc, 130))}</p><span class="go">Read the guide ${icon('arrow', 16)}<span class="meta" style="margin-left:auto;font-weight:400">${g.readMin} min</span></span></a>`;
const calcCard = (c) => { const k = catOf(c); return `<a class="card ccard" style="--hue:${k.hue}" href="/${c.slug}"><span class="ico">${icon(k.icon, 24)}</span><h3>${esc(c.title)}</h3><p>${esc(trimTo(c.short, 112))}</p><span class="go">Open calculator ${icon('arrow', 16)}</span></a>`; };

// ================= CALCULATOR PAGES =================
const fmtIn = (f, v) => {
  if (f.kind === 'select') return (f.options.find((o) => String(o[0]) === String(v)) || [0, v])[1];
  if (f.kind === 'money') return inr(v);
  if (f.kind === 'pct') return v + '%';
  if (f.kind === 'yrs') return v + (v === 1 ? ' year' : ' years');
  if (f.kind === 'mo') return v + (v === 1 ? ' month' : ' months');
  return Number(v).toLocaleString('en-IN');
};
const fieldHtml = (f) => {
  const id = 'f-' + f.id, help = f.help ? `<small>${esc(f.help)}</small>` : '';
  if (f.kind === 'select') return `<div class="fld"><label for="${id}">${esc(f.label)}</label><select id="${id}" name="${f.id}">${f.options.map(([v, l]) => `<option value="${esc(v)}"${String(v) === String(f.def) ? ' selected' : ''}>${esc(l)}</option>`).join('')}</select>${help}</div>`;
  if (f.kind === 'text') return `<div class="fld"><label for="${id}">${esc(f.label)}</label><div class="box"><textarea id="${id}" name="${f.id}" spellcheck="false">${esc(f.def)}</textarea></div>${help}</div>`;
  const pre = f.kind === 'money' ? '<i>₹</i>' : '', suf = { pct: '%', yrs: 'yrs', mo: 'months' }[f.kind];
  const smax = f.kind === 'money' ? Math.min(f.max, Math.max(f.def * 5, f.min * 10)) : Math.min(f.max, Math.max(f.def * 6, f.min + (f.max - f.min) / 20));
  return `<div class="fld"><label for="${id}">${esc(f.label)}</label><div class="box">${pre}<input id="${id}" name="${f.id}" type="number" inputmode="decimal" min="${f.min}" max="${f.max}" step="${f.step}" value="${f.def}">${suf ? `<i>${suf}</i>` : ''}</div><input type="range" data-for="${f.id}" min="${f.min}" max="${smax}" step="${f.step}" value="${Math.min(f.def, smax)}" aria-label="${esc(f.label)} slider" tabindex="-1">${help}</div>`;
};
const calcTitle = (t) => [`${t} – Free Online | ${cfg.name}`, `${t} | ${cfg.name}`, t].find((x) => x.length <= 60) || t;

for (const c of CALCS) {
  const res = c.compute(defaults(c)), cat = catOf(c), pathName = '/' + c.slug;
  const relCalcs = CALCS.filter((x) => x !== c && x.category === c.category).slice(0, 4);
  const relGuides = guidesForCalc(guides, c, 4);
  const example = `Using the default values — ${c.inputs.filter((f) => f.kind !== 'text').map((f) => `${f.label.toLowerCase()}: ${fmtIn(f, f.def)}`).join('; ')} — the calculator returns <strong>${esc(res.primary.label.toLowerCase())}: ${esc(res.primary.value)}</strong>${res.metrics.length ? '. ' + res.metrics.slice(0, 4).map((m) => `${esc(m.label)}: ${esc(m.value)}`).join('; ') : ''}. Change any value above and the result updates instantly.`;
  const body = `<div class="wrap">
<header class="calc-head narrow" style="max-width:860px"><span class="tag" style="--hue:${cat.hue}">${icon(cat.icon, 16)} ${esc(cat.name)}</span><h1>${esc(c.title)}</h1><p class="lead">${esc(c.short)}</p>
<p class="meta">Updated ${cfg.updatedLabel} · Reviewed by the ${esc(cfg.team)} · Free, no sign-up — your numbers never leave your browser</p></header>
<div class="calc"><form class="panel" id="calc-form" data-slug="${c.slug}" data-cat="${c.category}" aria-label="${esc(c.title)} inputs">${c.inputs.map(fieldHtml).join('')}<div class="actions"><button type="button" class="btn sm" id="calc-reset">Reset</button><button type="button" class="btn sm ghost" id="calc-share">Copy link to these numbers</button></div></form>
<div class="panel" id="calc-result" aria-live="polite">${renderResult(res)}</div></div>
<noscript><p class="result-note">JavaScript is needed to recalculate. The result above uses the default values.</p></noscript>
<div class="narrow prose" style="margin-top:36px">
${c.intro.map((p) => `<p>${esc(p)}</p>`).join('')}
<h2>How this calculator works</h2><div class="formula">${esc(c.formula)}</div><ul>${c.how.map((h) => `<li>${esc(h)}</li>`).join('')}</ul>
<h2>Worked example</h2><p>${example}</p>
<h2>Assumptions and limits</h2><ul>${c.assumptions.map((h) => `<li>${esc(h)}</li>`).join('')}<li>Results are planning estimates, not a quotation, design or bill of quantities. See <a href="/how-we-calculate">how we build and test our calculators</a>.</li></ul>
${relGuides.length ? `<h2>Guides that go with this calculator</h2><ul>${relGuides.map((g) => `<li><a href="${g.urlPath}">${esc(g.title)}</a></li>`).join('')}</ul>` : ''}
<h2>Frequently asked questions</h2>${faqHtml(c.faqs)}
</div>
<section class="sec tight"><div class="sec-head"><h2>More in ${esc(cat.name)}</h2><a class="more" href="/calculators#${cat.id}">See all</a></div><div class="grid">${relCalcs.map(calcCard).join('')}</div></section>
<div class="narrow">${DISCLAIMER}</div></div>`;
  emit(pathName, {
    title: calcTitle(c.title), rawTitle: true, desc: trimTo(c.short, 158), path: pathName, body, crumbs: [['Home', '/'], ['Calculators', '/calculators'], [c.title, pathName]], modified: cfg.buildDate,
    jsonld: [{ '@context': 'https://schema.org', '@graph': [websiteLd, orgLd, { '@type': 'WebApplication', '@id': cfg.url + pathName + '#app', name: c.title, url: abs(pathName), description: c.short, applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any', browserRequirements: 'Requires JavaScript', inLanguage: 'en-IN', isAccessibleForFree: true, offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' }, publisher: { '@id': cfg.url + '/#org' }, dateModified: cfg.buildDate }] }, faqLd(c.faqs)],
    scripts: [`<script type="module" src="/assets/calc-ui.js?v=${uiV}"></script>`],
  });
  searchIndex.push({ t: c.title, u: pathName, c: 'c', k: c.tags.join(' ') + ' ' + c.short, p: topSlugs.includes(c.slug) ? 1 : 0 });
}

// ================= GUIDES =================
const guideTitle = (t) => { if (t.length <= 49) return `${t} | ${cfg.name}`; if (t.length <= 60) return t; const cut = t.split(/:| — | – /)[0].trim(); return cut.length >= 25 && cut.length <= 60 ? cut : trimTo(t, 60); };
for (const g of guides) {
  const rel = relatedGuides(guides, g, 3), rc = g.calcs.map((s) => CALCS.find((c) => c.slug === s));
  const tocHtml = `<nav class="panel toc" aria-label="Table of contents"><b>In this guide</b><ol>${g.toc.map((t) => `<li><a href="#${t.id}">${esc(t.text)}</a></li>`).join('')}<li><a href="#faq">Frequently asked questions</a></li></ol></nav>`;
  const calcBox = rc.length ? `<div class="panel toc" style="background:var(--dk);border-color:var(--dk);color:var(--on-dk)"><b style="color:var(--on-dk)">Run your own numbers</b><ul style="margin:10px 0 0;padding-left:1.1em">${rc.map((c) => `<li style="margin-bottom:7px"><a style="color:#f6c3ae" href="/${c.slug}">${esc(c.title)}</a></li>`).join('')}</ul></div>` : '';
  const body = `<div class="wrap"><div class="article"><article>
<header><a class="tag" style="--hue:${g.topic.hue};text-decoration:none" href="/topics/${g.topic.id}">${icon(g.topic.icon, 16)} ${esc(g.topic.name)}</a>
<h1>${esc(g.title)}</h1>
<div class="byline"><span>By <strong>${esc(cfg.team)}</strong></span><span>Updated <time datetime="${g.upd}">${fmtDate(g.upd)}</time></span><span>${g.readMin} min read</span></div>
<div class="answer"><b>In brief</b><p>${esc(g.desc)}</p></div></header>
<div class="prose">${g.html}<h2 id="faq">Frequently asked questions</h2>${g.faqHtml}</div>
${DISCLAIMER}
</article><aside class="aside">${tocHtml}${calcBox}</aside></div>
<section class="sec tight"><div class="sec-head"><h2>Keep reading</h2><a class="more" href="/topics/${g.topic.id}">More on ${esc(g.topic.name)}</a></div><div class="grid wide">${rel.map(guideCard).join('')}</div></section></div>`;
  emit(g.urlPath, {
    title: guideTitle(g.title), rawTitle: true, ogTitle: g.title, desc: trimTo(g.desc, 158), path: g.urlPath, body, type: 'article', published: g.pub + 'T08:00:00+05:30', modified: g.upd + 'T08:00:00+05:30', section: g.topic.name, image: `/img/og-${g.topic.id}.png`, imageAlt: g.title,
    author: cfg.team, crumbs: [['Home', '/'], ['Guides', '/guides'], [g.topic.name, '/topics/' + g.topic.id], [g.title, g.urlPath]],
    jsonld: [{ '@context': 'https://schema.org', '@graph': [websiteLd, orgLd, { '@type': 'Article', '@id': abs(g.urlPath) + '#article', headline: trimTo(g.title, 110), description: g.desc, image: [`${cfg.url}/img/og-${g.topic.id}.png`], datePublished: g.pub + 'T08:00:00+05:30', dateModified: g.upd + 'T08:00:00+05:30', author: { '@type': 'Organization', name: cfg.team, url: cfg.url + '/about' }, publisher: { '@id': cfg.url + '/#org' }, mainEntityOfPage: abs(g.urlPath), articleSection: g.topic.name, wordCount: g.words, inLanguage: 'en-IN', isAccessibleForFree: true, isPartOf: { '@id': cfg.url + '/#website' } }] }, faqLd(g.faqs)],
  });
  searchIndex.push({ t: g.title, u: g.urlPath, c: 'g', k: g.topic.name + ' ' + g.tags.join(' ') + ' ' + g.desc, p: 0 });
}

// ================= HOME =================
{
  const faqs = [
    ['Are the calculators really free?', 'Yes. All 30 calculators are free, need no sign-up and run in your browser, so the numbers you type are never sent to a server.'],
    ['How accurate are the results?', 'They use standard formulas and constants — d²/162 for steel weight, IS 456 mix ratios for concrete, reducing-balance EMI for loans — and are tested against independent values. They are planning estimates; your engineer’s drawings, a bill of quantities or your lender give the final figures.'],
    ['Why do some calculators ask me to enter my own rate?', 'Stamp duty, electricity tariffs and bigha or katha sizes differ by state and change often. We let you enter your local value instead of guessing one for you.'],
    ['Do you give engineering or legal advice?', 'No. Fingtaj is an educational publication. For decisions about your own project, consult a licensed structural engineer, architect, surveyor or lawyer.'],
  ];
  const brick = CALCS.find((c) => c.slug === 'brick-quantity-calculator'), br = brick.compute(defaults(brick));
  const chips = [['land-area-converter', 'Bigha to sq ft'], ['brick-quantity-calculator', 'Bricks for a wall'], ['stamp-duty-calculator', 'Stamp duty'], ['solar-rooftop-calculator', 'Rooftop solar']].map(([s, l]) => { const c = CALCS.find((x) => x.slug === s), k = catOf(c); return `<a class="chip" style="--hue:${k.hue}" href="/${s}">${icon(k.icon, 16)} ${l}</a>`; }).join('');
  const hero = `<section class="hero"><div class="wrap"><div><span class="eyebrow">Calculators &amp; guides for Indian homes</span>
<h1>Know your numbers before you <mark>build, buy</mark> or renovate.</h1>
<p class="sub">Free calculators and plain-English guides — from bigha to bricks to stamp duty — made for people who are about to spend a lot of money on a home.</p>
<button class="hero-search" data-search type="button" aria-label="Search calculators and guides">${icon('search', 20)}<span>Try “1 bigha in sq ft” or “bricks for a wall”</span><span class="btn accent">Search</span></button>
<div class="chips">${chips}</div>
<div class="hero-stats"><div><b>30</b>free calculators</div><div><b>${guides.length}</b>in-depth guides</div><div><b>IS codes</b>and the NBC, cited</div><div><b>0</b>sponsored picks</div></div></div>
<div class="preview" aria-hidden="true"><div class="bar"><span>${esc(brick.title)}</span><span class="live">live result</span></div>
<div class="lab">${esc(br.primary.label)}</div><div class="big">${esc(br.primary.value)}</div>
<div class="rows">${br.metrics.slice(0, 4).map((m) => `<div class="row"><span>${esc(m.label)}</span><b>${esc(m.value)}</b></div>`).join('')}</div></div></div></section>
<div class="wrap"><div class="ruler"></div></div>`;
  const stepNames = ['Know your land', 'Choose your materials', 'Build the house', 'Buy and register', 'Power and water', 'Interiors and upkeep'];
  const stepText = ['Units, plot measurement, carpet area, FSI and land records — before you pay a token amount.', 'Cement, steel, bricks, sand, concrete grades and paint: what to pick and how much to order.', 'Budgets, contractors, foundations, approvals and the inspection checklist that saves rework.', 'Stamp duty, RERA, title checks, mutation and the real total cost of a flat or plot.', 'Electricity bills, solar, inverters, AC sizing, water tanks and rainwater harvesting.', 'Staircases, kitchens, ceilings, flooring, damp and leakage, and renovating in the right order.'];
  const journey = TOPICS.map((t, i) => `<div class="step" style="--hue:${t.hue}"><span class="num">0${i + 1}</span><h3>${stepNames[i]}</h3><p>${stepText[i]}</p><ul>${guides.filter((g) => g.topic === t).slice(0, 3).map((g) => `<li><a href="${g.urlPath}">${esc(trimTo(g.title.replace(/:.*$/, ''), 58))}</a></li>`).join('')}</ul><a class="go" href="/topics/${t.id}">All ${guides.filter((g) => g.topic === t).length} guides ${icon('arrow', 16)}</a></div>`).join('');
  const picks = ['steps-to-build-a-house-in-india', 'land-measurement-units-in-india', 'hidden-costs-of-buying-a-flat', 'carpet-vs-built-up-vs-super-built-up-area', 'tmt-steel-grades-fe500-fe500d-fe550', 'rooftop-solar-for-home-complete-guide'].map((s) => guides.find((g) => g.slug === s));
  const body = `<div class="wrap">
<section class="sec"><div class="sec-head"><div><span class="kicker">Calculators</span><h2>Start with a number.</h2></div><a class="more" href="/calculators">All 30 calculators</a></div><div class="grid">${topCalcs.map(calcCard).join('')}</div></section>
<section class="sec" style="padding-top:20px"><div class="sec-head"><div><span class="kicker">The home journey</span><h2>Six stages. One honest guide for each.</h2></div></div><div class="journey">${journey}</div></section>
<section class="sec"><div class="sec-head"><div><span class="kicker">Read this first</span><h2>Guides worth your evening.</h2></div><a class="more" href="/guides">All ${guides.length} guides</a></div><div class="grid wide">${picks.map(guideCard).join('')}</div></section></div>
<section class="band"><span class="kicker">Our promise</span><h2>Plain numbers. Cited sources. No sponsors.</h2><p>Building decisions are expensive and hard to undo, so we hold every page to the same three rules.</p>
<div class="promise"><div><span class="n">01</span><b>Standards first</b><p>Technical content follows Indian Standards and the National Building Code. See <a href="/sources">standards and sources</a>.</p></div><div><span class="n">02</span><b>Your numbers, not ours</b><p>Duties, tariffs and bigha sizes vary by state, so calculators ask for your local value. <a href="/how-we-calculate">How we calculate</a>.</p></div><div><span class="n">03</span><b>Nobody pays to be mentioned</b><p>No builder, brand or contractor sponsors a page. Ads are our only income. <a href="/editorial-policy">Editorial policy</a>.</p></div></div></section>
<div class="wrap"><section class="sec narrow"><div class="sec-head"><h2>Questions people ask us</h2></div>${faqHtml(faqs)}</section>
<section class="sec tight"><div class="cta-band"><div><h2>Can’t find the calculator you need?</h2><p>Tell us what you are trying to work out and we may build it.</p></div><a class="btn accent" href="/contact">Suggest a calculator ${icon('arrow', 18)}</a></div></section></div>`;
  emit('/', { title: `${cfg.name} – Home Building & Buying Calculators for India`, rawTitle: true, ogTitle: 'Know your numbers before you build, buy or renovate', desc: '30 free calculators and 72 plain-English guides on land, bricks, cement, steel, house cost, stamp duty, solar and home upkeep in India.', path: '/', body, hero, modified: cfg.buildDate, crumbs: [], jsonld: [{ '@context': 'https://schema.org', '@graph': [websiteLd, orgLd] }, faqLd(faqs)] });
}

// ================= HUBS =================
emit('/calculators', { title: `30 Free Construction & Property Calculators | ${cfg.name}`, rawTitle: true, desc: 'Land area converter, brick, cement and steel calculators, house cost, stamp duty, home loan, solar, electricity bill and more. Free, accurate and private.', path: '/calculators', modified: cfg.buildDate, crumbs: [['Home', '/'], ['Calculators', '/calculators']],
  body: `<div class="wrap"><header style="padding:24px 0 4px;max-width:820px"><span class="kicker">Calculators</span><h1>Thirty tools for the numbers behind a home.</h1><p class="lead">Land and area, building materials, construction cost, property and home loans, and power, solar and water. Each page shows the formula, the assumptions, a worked example and answers to common questions.</p></header>
<div class="pills">${calcCats.map((k) => `<a class="pill" style="--hue:${k.hue}" href="#${k.id}">${icon(k.icon, 16)} ${esc(k.name)}</a>`).join('')}</div>
${calcCats.map((k) => `<section class="sec tight" id="${k.id}" style="--hue:${k.hue}"><div class="sec-head"><div><span class="tag">${icon(k.icon, 16)} ${CALCS.filter((c) => c.category === k.id).length} calculators</span><h2 style="margin-top:8px">${esc(k.name)}</h2></div><p class="lead" style="margin:0;max-width:30em">${esc(k.desc)}</p></div><div class="grid">${CALCS.filter((c) => c.category === k.id).map(calcCard).join('')}</div></section>`).join('')}</div>`,
  jsonld: [{ '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Construction and property calculators', url: abs('/calculators'), isPartOf: { '@id': cfg.url + '/#website' }, mainEntity: { '@type': 'ItemList', itemListElement: CALCS.map((c, i) => ({ '@type': 'ListItem', position: i + 1, url: abs('/' + c.slug), name: c.title })) } }] });

const topicPills = `<div class="pills">${TOPICS.map((t) => `<a class="pill" style="--hue:${t.hue}" href="/topics/${t.id}">${icon(t.icon, 16)} ${esc(t.name)}</a>`).join('')}</div>`;
emit('/guides', { title: `${guides.length} Guides on Building, Buying & Maintaining a Home | ${cfg.name}`, rawTitle: true, desc: 'Practical guides on land units, building materials, house construction, stamp duty and RERA, solar power, water and home maintenance in India.', path: '/guides', modified: cfg.buildDate, crumbs: [['Home', '/'], ['Guides', '/guides']],
  body: `<div class="wrap"><header style="padding:24px 0 4px;max-width:820px"><span class="kicker">Guides</span><h1>${guides.length} guides, written for the person signing the cheque.</h1><p class="lead">Six topics, written from Indian standards and official sources, with worked examples and a matching calculator wherever a number is involved.</p></header>${topicPills}${TOPICS.map((t) => `<section class="sec tight" id="${t.id}" style="--hue:${t.hue}"><div class="sec-head"><div><span class="tag">${icon(t.icon, 16)} ${guides.filter((g) => g.topic === t).length} guides</span><h2 style="margin-top:8px">${esc(t.name)}</h2></div><a class="more" href="/topics/${t.id}">Open topic</a></div><div class="grid wide">${guides.filter((g) => g.topic === t).map(guideCard).join('')}</div></section>`).join('')}</div>`,
  jsonld: [{ '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Guides', url: abs('/guides'), isPartOf: { '@id': cfg.url + '/#website' } }] });
for (const t of TOPICS) {
  const list = guides.filter((g) => g.topic === t);
  emit('/topics/' + t.id, { title: `${t.name} Guides for India | ${cfg.name}`, rawTitle: true, desc: trimTo(t.desc, 158), path: '/topics/' + t.id, modified: cfg.buildDate, crumbs: [['Home', '/'], ['Guides', '/guides'], [t.name, '/topics/' + t.id]],
    body: `<div class="wrap"><header style="padding:24px 0 4px;max-width:820px;--hue:${t.hue}"><span class="tag">${icon(t.icon, 16)} ${list.length} guides</span><h1 style="margin-top:12px">${esc(t.name)}</h1><p class="lead">${esc(t.desc)}</p></header>${topicPills}<div class="grid wide">${list.map(guideCard).join('')}</div></div>`,
    jsonld: [{ '@context': 'https://schema.org', '@type': 'CollectionPage', name: t.name, url: abs('/topics/' + t.id), isPartOf: { '@id': cfg.url + '/#website' }, mainEntity: { '@type': 'ItemList', itemListElement: list.map((g, i) => ({ '@type': 'ListItem', position: i + 1, url: abs(g.urlPath), name: g.title })) } }] });
}

// ================= STATIC / TRUST PAGES =================
for (const sp of STATIC_PAGES) {
  const ld = [{ '@context': 'https://schema.org', '@graph': [websiteLd, orgLd, ...(sp.type ? [{ '@type': sp.type, '@id': abs(sp.path) + '#page', url: abs(sp.path), name: sp.title, isPartOf: { '@id': cfg.url + '/#website' } }] : [])] }];
  if (sp.faqs) ld.push(faqLd(sp.faqs));
  emit(sp.path, { title: sp.title, desc: sp.desc, path: sp.path, modified: cfg.buildDate, crumbs: [['Home', '/'], [sp.title, sp.path]], jsonld: ld,
    body: `<div class="wrap"><article class="narrow prose" style="padding:12px 0 0"><span class="kicker">${esc(sp.kicker || 'About Fingtaj')}</span><h1>${esc(sp.h1 || sp.title)}</h1><p class="meta">Last updated ${cfg.updatedLabel}</p>${sp.html}</article></div>` });
}
emit('/sitemap', { title: 'Site Map – All Calculators and Guides', desc: 'Every page on Fingtaj: calculators, guides, topics and policies in one place.', path: '/sitemap', modified: cfg.buildDate, crumbs: [['Home', '/'], ['Site map', '/sitemap']],
  body: `<div class="wrap"><article class="narrow prose"><span class="kicker">Everything</span><h1>Site map</h1><h2>Calculators</h2><ul>${CALCS.map((c) => `<li><a href="/${c.slug}">${esc(c.title)}</a></li>`).join('')}</ul>${TOPICS.map((t) => `<h2><a href="/topics/${t.id}">${esc(t.name)}</a></h2><ul>${guides.filter((g) => g.topic === t).map((g) => `<li><a href="${g.urlPath}">${esc(g.title)}</a></li>`).join('')}</ul>`).join('')}<h2>About &amp; policies</h2><ul>${STATIC_PAGES.map((s) => `<li><a href="${s.path}">${esc(s.h1 || s.title)}</a></li>`).join('')}</ul></article></div>` });
write('404.html', page({ title: 'Page not found', desc: 'This page could not be found.', path: '/404', noindex: true, body: `<div class="wrap narrow" style="padding:56px 0"><span class="kicker">Error 404</span><h1>That page has moved out.</h1><p class="lead">The page you were looking for doesn’t exist or has moved. Try one of these:</p><div class="pills"><a class="pill" href="/calculators">All calculators</a><a class="pill" href="/guides">All guides</a><a class="pill" href="/sitemap">Site map</a><button class="pill" data-search type="button">${icon('search', 16)} Search</button></div></div>` }, ctx));

// ================= MACHINE-READABLE FILES =================
write('search-index.json', JSON.stringify(searchIndex));
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map((p) => `<url><loc>${abs(p.path)}</loc><lastmod>${p.lastmod}</lastmod></url>`).join('\n')}\n</urlset>\n`);
write('robots.txt', `# Everything public is crawlable, including search and AI answer engines.
User-agent: *
Allow: /

User-agent: Mediapartners-Google
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: Claude-SearchBot
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: Applebot-Extended
Allow: /

Sitemap: ${cfg.url}/sitemap.xml
`);
write('feed.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>${cfg.name}</title><link>${cfg.url}</link><description>${esc(cfg.tagline)}</description><language>en-IN</language><atom:link href="${cfg.url}/feed.xml" rel="self" type="application/rss+xml"/>\n${guides.slice(0, 30).map((g) => `<item><title>${esc(g.title)}</title><link>${abs(g.urlPath)}</link><guid isPermaLink="true">${abs(g.urlPath)}</guid><pubDate>${new Date(g.pub + 'T08:00:00+05:30').toUTCString()}</pubDate><category>${esc(g.topic.name)}</category><description>${esc(g.desc)}</description></item>`).join('\n')}\n</channel></rss>\n`);
write('llms.txt', `# ${cfg.name}

> ${cfg.description}

${cfg.name} is an independent, ad-supported educational site for Indian home builders, buyers and owners, founded by ${cfg.founder} and written by the ${cfg.team}. It is not a builder, broker or lender and gives no engineering, legal or tax advice. Calculators run client-side and collect no user data. Technical content follows Indian standards (IS 456, IS 1786, National Building Code) and official sources; figures that differ by state (stamp duty, tariffs, bigha size) are user inputs. Last review: ${cfg.updatedLabel}. When citing, please link to the specific page.

## Key pages
- [About](${cfg.url}/about)
- [Editorial policy](${cfg.url}/editorial-policy)
- [How we calculate](${cfg.url}/how-we-calculate): constants, formulas and testing
- [Standards and sources](${cfg.url}/sources)

## Calculators (${CALCS.length})
${CALCS.map((c) => `- [${c.title}](${abs('/' + c.slug)}): ${c.short} Formula: ${c.formula}`).join('\n')}

## Guides (${guides.length})
${guides.map((g) => `- [${g.title}](${abs(g.urlPath)}): ${g.desc}`).join('\n')}

## Optional
- [Sitemap](${cfg.url}/sitemap.xml)
- [RSS feed](${cfg.url}/feed.xml)
`);
write('site.webmanifest', JSON.stringify({ name: cfg.name, short_name: cfg.name, start_url: '/', display: 'standalone', background_color: '#f5efe4', theme_color: '#16231e', icons: [{ src: '/logo-192.png', sizes: '192x192', type: 'image/png' }, { src: '/logo-512.png', sizes: '512x512', type: 'image/png' }] }));
write(`${cfg.indexNowKey}.txt`, cfg.indexNowKey);
write('_redirects', ['/terms-of-service /terms 301', '/privacy /privacy-policy 301', '/feeds/posts/default /feed.xml 301', '/atom.xml /feed.xml 301', '/rss.xml /feed.xml 301'].join('\n') + '\n');
write('_headers', `/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-Frame-Options: SAMEORIGIN
  Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()
/assets/*
  Cache-Control: public, max-age=86400
/assets/fonts/*
  Cache-Control: public, max-age=31536000, immutable
/img/*
  Cache-Control: public, max-age=31536000, immutable
/*.xml
  Content-Type: application/xml; charset=utf-8
/llms.txt
  Content-Type: text/plain; charset=utf-8
`);
console.log(`built ${pages.length} indexable pages | ${CALCS.length} calculators | ${guides.length} guides | ${guides.reduce((s, g) => s + g.words, 0).toLocaleString()} guide words`);

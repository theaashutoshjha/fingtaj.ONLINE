import fs from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';

const root = path.resolve(import.meta.dirname, '../..');

export const CATEGORIES = [
  { name: 'Money & Personal Finance', slug: 'money-personal-finance', desc: 'Budgeting, saving, emergency funds, salary, tax and everyday money decisions explained for Indian households.' },
  { name: 'Trading & Investing', slug: 'trading-investing', desc: 'SIPs, mutual funds, index funds, stocks, brokers and gold — how investing works in India and how to start without costly mistakes.' },
  { name: 'Loans & Credit', slug: 'loans-credit', desc: 'CIBIL scores, personal loans, home loans and credit cards — how lenders decide and how to borrow without a debt trap.' },
];

export const slugify = (s) => s.toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// Old internal URLs that point to articles that are not part of the 51 published posts → nearest existing article.
const REMAP = {
  'credit-score-cibil-what-it-is-and-how': 'what-is-cibil-score-and-how-to-check-it',
  'what-is-cibil-score-how-to-check-free': 'what-is-cibil-score-and-how-to-check-it',
  'cibil-score-guide': 'how-to-improve-your-cibil-score-fast-in', 'how-to-improve-cibil-score': 'how-to-improve-your-cibil-score-fast-in', 'cibil-score-kaise-badhaye': 'how-to-improve-your-cibil-score-fast-in', 'cibil-score-kya-hota-hai': 'what-is-cibil-score-and-how-to-check-it',
  'what-is-home-loan-and-how-does-it-work': 'how-to-get-home-loan-in-india-complete', 'home-loan-guide-india': 'how-to-get-home-loan-in-india-complete', 'home-loan-tips-india': 'how-to-get-home-loan-in-india-complete', 'home-loan-prepay-vs-invest': 'how-to-get-home-loan-in-india-complete',
  'best-way-to-take-personal-loan-in-india': 'personal-loan-in-india-what-you-must', 'personal-loan-guide-india': 'personal-loan-in-india-what-you-must', 'personal-loan-complete-guide': 'personal-loan-in-india-what-you-must', 'personal-loan-apply-online-india': 'personal-loan-in-india-what-you-must', 'personal-loan-interest-rate-india': 'personal-loan-in-india-what-you-must',
  'best-trading-apps-in-india-for': 'best-trading-app-in-india-with-low', 'full-service-vs-discount-broker-india': 'zerodha-vs-groww-which-one-should-you',
  'credit-card-tips-india': 'what-happens-if-you-dont-pay-your', 'credit-card-debt-management': 'what-happens-if-you-dont-pay-your', 'how-to-get-out-of-credit-card-debt': 'what-happens-if-you-dont-pay-your', 'credit-card-interest-kaise-bachaye': 'what-happens-if-you-dont-pay-your',
  'emergency-fund-india': 'how-to-build-emergency-fund-step-by', 'emergency-fund-guide': 'how-to-build-emergency-fund-step-by', 'emergency-fund-before-investing': 'how-to-build-emergency-fund-step-by', 'emergency-fund-kaise-banaye': 'how-to-build-emergency-fund-step-by',
  'how-to-split-salary-india': 'how-to-split-your-salary-in-india', 'saving-vs-investing-difference': 'saving-vs-investing-whats-difference',
  'term-insurance-guide-india': 'term-life-insurance-in-india-what-it-is', 'term-insurance-guide': 'term-life-insurance-in-india-what-it-is', 'term-insurance-vs-endowment-plan': 'term-life-insurance-in-india-what-it-is',
  'sip-mutual-fund-beginners': 'how-to-start-sip-investment-in-india', 'mutual-fund-sip-india': 'how-to-start-sip-investment-in-india', 'sip-investment-guide': 'how-to-start-sip-investment-in-india', 'best-mutual-funds-sip-2026': 'how-to-start-sip-investment-in-india', 'best-sip-mutual-funds-india-2026': 'how-to-start-sip-investment-in-india',
  'mutual-funds-for-beginners': 'how-to-start-sip-investment-in-india', 'mutual-fund-guide-beginners-india': 'how-to-start-sip-investment-in-india', 'how-to-start-investing-in-india': 'how-to-start-investing-with-small-money', 'how-to-build-investment-portfolio-india': 'how-to-start-investing-with-small-money',
  'index-fund-vs-active-fund-india': 'how-to-invest-in-index-funds-india-for', 'direct-vs-regular-mutual-funds': '@switch-direct',
  'elss-tax-saving-mutual-fund': 'tax-saving-investment-options-in-india', '80c-tax-saving-investments': 'tax-saving-investment-options-in-india', 'nps-vs-ppf-retirement-india': 'tax-saving-investment-options-in-india',
  'capital-gains-tax-india-guide': 'how-mutual-fund-gains-are-taxed-in',
  'personal-finance-guide-india': 'how-to-manage-your-money-smartly-even', 'budgeting-tips-india': 'how-to-manage-your-money-smartly-even', 'monthly-budget-plan-india': 'how-to-split-your-salary-in-india',
  'home-loan-eligibility-calculator-india': '/loan-eligibility-calculator', 'emergency-fund-calculator-india': '/emergency-fund-calculator', 'how-to-check-cibil-score-free': 'what-is-cibil-score-and-how-to-check-it',
};
const STATIC_MAP = { 'p/about-author': '/about/ashutosh-jha', author: '/about/ashutosh-jha', contact: '/contact', 'p/contact-us': '/contact', 'p/about-us': '/about', 'p/privacy-policy': '/privacy-policy', 'p/disclaimer': '/disclaimer', 'p/cookies': '/cookie-policy', 'p/editorial-policy': '/editorial-policy', 'p/terms-and-conditions': '/terms', 'p/faq': '/faq', '': '/' };

const stripHtml = (h) => h.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();
const trimTo = (s, n) => { if (s.length <= n) return s; const c = s.slice(0, n - 1); return c.slice(0, c.lastIndexOf(' ')).replace(/[,;:\-–—(]$/, '') + '…'; };

// SEO <title>: ≤60 chars. Drops trailing "(2026 Guide)" style suffixes, then cuts at the first colon/dash if needed.
function seoTitle(t) {
  t = t.replace(/\s*\((?:20\d\d(?:[–-]\d\d)?[^)]*|Step-by-Step Guide[^)]*|Complete Guide[^)]*)\)\s*$/i, '').trim();
  if (t.length <= 60) return t;
  const cut = t.split(/:| — | – | \(/)[0].trim();
  if (cut.length >= 22 && cut.length <= 60) return cut;
  const w = t.slice(0, 60);
  return w.slice(0, w.lastIndexOf(' ')).replace(/[,;:\-–—(]$/, '');
}

export function loadPosts() {
  const raw = JSON.parse(fs.readFileSync(path.join(root, 'content/posts.raw.json'), 'utf8'));
  const imgMap = JSON.parse(fs.readFileSync(path.join(root, 'content/img/map.json'), 'utf8'));
  const cleanTitle = (t) => t.replace(/\s+/g, ' ').trim();

  // first pass: URLs
  const descriptions = JSON.parse(fs.readFileSync(path.join(root, 'content/descriptions.json'), 'utf8'));
  const posts = raw.map((p, i) => {
    p = { ...p, desc: descriptions[i] || p.desc };
    const pub = p.pub.slice(0, 10);
    let urlPath;
    if (p.fn) urlPath = p.fn.replace(/\.html$/, '');
    else urlPath = `/${pub.slice(0, 4)}/${pub.slice(5, 7)}/${slugify(p.title).slice(0, 46).replace(/-$/, '')}`;
    return { ...p, title: cleanTitle(p.title), pub, upd: (p.upd || p.pub).slice(0, 10), urlPath, key: urlPath.split('/').pop(), category: CATEGORIES.find((c) => c.name === p.cats[0]) };
  });
  const byKey = new Map(posts.map((p) => [p.key, p]));
  const switchDirect = posts.find((p) => /regular-to-direct/.test(p.urlPath) || /switch-mutual-fund-from-regular/.test(p.urlPath));
  byKey.set('@switch-direct', switchDirect);

  const unresolved = [];
  const resolve = (href, from) => {
    const m = href.match(/^https?:\/\/(?:www\.)?fingtaj\.com(\/[^?#]*)?(#.*)?$/i);
    if (!m) return null;
    const p = (m[1] || '/').replace(/\.html$/, '').replace(/^\/|\/$/g, '');
    const hash = m[2] || '';
    if (STATIC_MAP[p] !== undefined) return STATIC_MAP[p] + hash;
    const key = p.split('/').pop();
    if (byKey.has(key) && byKey.get(key)) return byKey.get(key).urlPath + hash;
    if (REMAP[key]) { const t = REMAP[key]; if (t.startsWith('/')) return t; const tp = byKey.get(t); if (tp) return tp.urlPath; }
    unresolved.push(`${from.key} -> ${href}`);
    return false; // unwrap
  };

  for (const p of posts) {
    // One post's source HTML was corrupted in Blogger (a "<1 year" literal swallowed a sentence and a link).
    // Restore the sentence with the current, correct rules.
    let src = p.body.replace(/Short-term capital gains \(held <1 [\s\S]*?<\/1><\/p><\/article>/, 'Gains on listed equity held for less than 12 months are short-term and taxed at 20%; gains on holdings longer than 12 months are long-term and taxed at 12.5% above ₹1.25 lakh a year. Brokerage and similar transaction costs can be deducted from the gain when computing tax. <a href="https://www.fingtaj.com/2026/05/how-mutual-fund-gains-are-taxed-in.html">Understanding how mutual fund gains are taxed</a>');
    // other literal "<1 year"-style text would otherwise be parsed as a tag
    const $ = cheerio.load(src.replace(/<(?=[\d₹$])/g, '&lt;'), null, false);
    $('article').each((_, el) => { $(el).replaceWith($(el).contents()); });

    // ---- remove author bio / disclaimer / last-updated sections that every post repeated ----
    const SKIP = /^(about the author.*|.*disclaimer.*|.*adsense.*|author bio|important notices?:?)$/i;
    let skipping = false;
    $.root().children().each((_, el) => {
      const $el = $(el), tag = el.tagName;
      if (/^h[1-6]$/.test(tag)) {
        const t = $el.text().replace(/\s+/g, ' ').trim();
        skipping = SKIP.test(t);
        if (skipping) $el.remove();
        return;
      }
      if (skipping) { $el.remove(); return; }
      // run-in "About the Author: …", "Disclaimer: …" and "Last updated" paragraphs (the page template supplies these)
      // (an inline "Disclaimer:" note under a table or projection is kept unless it is in the closing boilerplate)
      const nTop = $.root().children().length, pos = $el.index();
      if (tag === 'p' && (/^\s*(about the author|last updated)\b/i.test($el.text()) || (/^\s*disclaimer\s*:/i.test($el.text()) && pos >= nTop - 6))) $el.remove();
    });
    $('hr').each((_, el) => { const n = $(el).next(); if (!n.length || n[0].tagName === 'hr') $(el).remove(); });

    // ---- images ----
    let hero = null;
    $('img').each((_, el) => {
      const src = $(el).attr('src'); const m = imgMap[src] || imgMap[src.replace(/&/g, '&amp;')];
      const holder = $(el).closest('a');
      if (!m) { (holder.length ? holder : $(el)).remove(); return; }
      const alt = $(el).attr('alt') || p.title;
      if (!hero) { hero = { file: m.file, small: m.small, width: m.width, height: m.height, alt }; (holder.length ? holder : $(el)).remove(); return; }
      const fig = `<figure class="fig"><img src="/img/${m.file}" width="${m.width}" height="${m.height}" alt="${alt.replace(/"/g, '&quot;')}" loading="lazy" decoding="async"></figure>`;
      (holder.length ? holder : $(el)).replaceWith(fig);
    });
    p.hero = hero;

    // ---- checkboxes → glyph ----
    $('input[type=checkbox]').each((_, el) => { $(el).replaceWith('☐ '); });
    $('input,button,form,script,style,iframe').remove();

    // ---- links ----
    $('a').each((_, el) => {
      const $a = $(el); const href = $a.attr('href') || '';
      if (/^https?:\/\/(?:www\.)?fingtaj\.com/i.test(href)) {
        const r = resolve(href, p);
        if (r === false) { $a.replaceWith($a.contents()); return; }
        $a.attr('href', r);
      } else if (/^https?:\/\//i.test(href)) { $a.attr('rel', 'noopener'); $a.attr('target', '_blank'); }
      else if (!href || href.startsWith('#')) { /* keep */ }
      else if (href.startsWith('mailto:')) { /* keep */ }
    });

    // ---- strip presentational attributes ----
    $('*').each((_, el) => {
      const keep = { a: ['href', 'rel', 'target'], img: ['src', 'alt', 'width', 'height', 'loading', 'decoding'], td: ['colspan', 'rowspan'], th: ['colspan', 'rowspan', 'scope'], ol: ['start'], figure: ['class'] };
      const allowed = keep[el.tagName] || [];
      for (const k of Object.keys(el.attribs || {})) if (!allowed.includes(k)) $(el).removeAttr(k);
    });
    $('span,font,div').each((_, el) => { $(el).replaceWith($(el).contents()); });
    $('p').each((_, el) => { const h = $(el).html().replace(/&nbsp;|<br\s*\/?>|\s/g, ''); if (!h) $(el).remove(); });
    $('br').each((_, el) => { if (!$(el).parent().is('p,li,td,th,blockquote')) $(el).remove(); });
    $('table').attr('data-t', '1');

    // ---- headings: ids + toc ----
    const toc = []; const used = new Set();
    $('h1').each((_, el) => { el.tagName = 'h2'; });
    $('h2').each((_, el) => {
      const t = $(el).text().replace(/\s+/g, ' ').trim(); if (!t) { $(el).remove(); return; }
      let id = slugify(t).slice(0, 60) || 'section'; while (used.has(id)) id += '-2'; used.add(id);
      $(el).attr('id', id); toc.push({ id, text: t });
    });

    // ---- FAQ extraction (for FAQPage schema) ----
    const faqs = []; const faqH = $('h2').filter((_, el) => /faq|frequently asked/i.test($(el).text())).first();
    if (faqH.length) {
      let cur = faqH.next();
      let q = null, a = [];
      const flush = () => { if (q && a.length) faqs.push({ q, a: a.join(' ').replace(/\s+/g, ' ').trim() }); q = null; a = []; };
      while (cur.length && cur[0].tagName !== 'h2') {
        if (cur[0].tagName === 'h3') { flush(); q = cur.text().replace(/^\s*(Q\d*[.:)]?|\d+[.)])\s*/i, '').trim(); }
        else if (q) a.push(cur.text());
        cur = cur.next();
      }
      flush();
    }
    p.faqs = faqs.slice(0, 10).filter((f) => f.q.length > 8 && f.a.length > 30);

    p.html = $.root().html().replace(/\n{3,}/g, '\n\n').replace(/\bFing[Tt]aj(\.com)?\b/g, 'FinGTaj').trim();
    p.toc = toc.filter((t) => !/faq|frequently asked/i.test(t.text) || true);
    const plain = stripHtml(p.html);
    p.words = plain.split(' ').length;
    p.readMin = Math.max(2, Math.round(p.words / 220));
    const firstP = $('p').filter((_, el) => $(el).text().trim().length > 80).first().text().replace(/\s+/g, ' ').trim();
    p.excerpt = trimTo(stripHtml(p.desc || '') .length >= 80 ? stripHtml(p.desc) : firstP, 158);
    p.answer = stripHtml(p.desc || '').length >= 80 ? stripHtml(p.desc) : trimTo(firstP, 300);
    p.seoTitle = seoTitle(p.title);
    p.text = plain;
  }
  posts.sort((a, b) => (a.pub < b.pub ? 1 : -1));
  return { posts, unresolved };
}

// ---- relatedness ----
const STOP = new Set('a an and are as at be by can do does for from get how i if in india indian is it me my of on or should the to what when which who why with you your will vs'.split(' '));
const words = (s) => new Set(s.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').split(/\s+/).filter((w) => w.length > 2 && !STOP.has(w)));

export function related(posts, p, n = 3) {
  const w = words(p.title + ' ' + p.key.replace(/-/g, ' '));
  return posts.filter((x) => x !== p).map((x) => {
    const xw = words(x.title + ' ' + x.key.replace(/-/g, ' ')); let s = 0; for (const t of w) if (xw.has(t)) s += 2;
    if (x.category === p.category) s += 1.5; return { x, s };
  }).sort((a, b) => b.s - a.s || (a.x.pub < b.x.pub ? 1 : -1)).slice(0, n).map((r) => r.x);
}

export function calcsForPost(calcs, p, n = 3) {
  const hay = (p.title + ' ' + p.key.replace(/-/g, ' ')).toLowerCase();
  return calcs.map((c) => ({ c, s: c.tags.reduce((s, t) => s + (hay.includes(t) ? 2 : 0), 0) + (hay.includes(c.slug.replace('-calculator', '').replace(/-/g, ' ')) ? 3 : 0) }))
    .filter((r) => r.s > 0).sort((a, b) => b.s - a.s).slice(0, n).map((r) => r.c);
}

export function postsForCalc(posts, c, n = 3) {
  return posts.map((p) => {
    const hay = (p.title + ' ' + p.key.replace(/-/g, ' ')).toLowerCase();
    return { p, s: c.tags.reduce((s, t) => s + (hay.includes(t) ? 2 : 0), 0) };
  }).filter((r) => r.s > 0).sort((a, b) => b.s - a.s).slice(0, n).map((r) => r.p);
}

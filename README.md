# Fingtaj — Home, Land & Construction (fingtaj.online)

30 free calculators + 72 practical guides + full trust pages = **102 content pages**, pre-rendered to plain HTML (122 pages in the sitemap, ≈85,000 words).
No framework and no server. `npm run build` writes everything to `dist/`.

> **No one can guarantee AdSense approval.** Google decides manually and publishes no exact criteria. This build removes the usual causes of a
> "low value content" rejection and follows Google's published requirements — see [Before you apply](#before-you-apply).

## What is included

| Area | Count | Notes |
|---|---|---|
| Calculators | 30 | Land & area (4), building materials (8), cost & budget (4), property & home loan (5), power/solar/water (6), home tools (3) |
| Guides | 72 | Land & measurement 12 · Building materials 14 · House construction 14 · Property buying 12 · Power, solar & water 10 · Interiors & maintenance 10 |
| Trust pages | 10 | About, Editorial policy, How we calculate, Standards & sources, Contact, Privacy, Terms, Disclaimer, Cookie policy, FAQ |

Every calculator page has an intro, formula, assumptions, a *generated* worked example, FAQs, related guides and related calculators.
Every guide has an "In brief" summary, table of contents, worked examples, FAQs (with FAQ schema), related calculators and related guides.

## Design (v2 — "paper & ink")

* **Identity:** wordmark *fingtaj.* in Fraunces with a terracotta full stop; mark = an arched doorway standing on a measuring baseline. Tagline: *Measure twice. Build once.*
* **Colour:** warm paper (#f5efe4), ink-green (#16231e), terracotta accent (#c1502e); each topic has its own earthy hue. Full dark mode.
* **Type:** Fraunces (headings) + DM Sans (text), both self-hosted in `assets/fonts` — no third-party font requests.
* **Layout:** top info strip, sticky header with a full calculators mega-menu, editorial hero with a live result card, "home journey" in six stages, ink calculator results panel, large footer with watermark wordmark. Custom line icons (no emoji).
* Regenerate logo/icons/social cards after changing them: `npm run assets` (installs sharp locally; not needed on Cloudflare).

## Settings you provided (kept exactly)

* AdSense: `<meta name="google-adsense-account" content="ca-pub-3594420471814241">` + the `adsbygoogle.js?client=ca-pub-3594420471814241` script on every page; `ads.txt` with `google.com, pub-3594420471814241, DIRECT, f08c47fec0942fa0`.
* Google Analytics `G-GRXC5MH7PC` (loaded after the page has loaded, with Consent Mode v2 defaults — denied only for EEA/UK/CH until accepted).
* IndexNow key `dd42d910f10e14978a7dd6380733ff08` — key file is generated at `https://www.fingtaj.online/dd42d910f10e14978a7dd6380733ff08.txt`.
* Sitemap: `https://www.fingtaj.online/sitemap.xml` (referenced in `robots.txt`).
* Search Console: if you verified with the *HTML tag* method, paste the `content="…"` value into `gscVerification` in `site.config.mjs`. Domain/DNS verification needs nothing.

Contact email: `contact@fingtaj.online` (set in `site.config.mjs`).

## Deploy on Cloudflare

* Build command `npm run build` · deploy command `npx wrangler deploy` · root directory `/` (Workers Builds), or output directory `dist` for a Pages project.
* `wrangler.jsonc` uses the Worker name **`fingtaj-online`** (not `fingtaj`, which is your finance site). If your existing project for this domain has another name, change `name` to match.
* Node 22 is pinned in `.node-version`. The only runtime dependency is `cheerio` (used by the audit script); image tooling (`sharp`) is *not* needed in the Cloudflare build — icons/social cards are pre-generated (`npm run assets`).
* This build **replaces** the 29-page site currently on fingtaj.online. If any old URLs are indexed and worth keeping, add 301 rules to `public/_redirects` (the build writes its own `_redirects` — edit `scripts/build.mjs`).

Local preview: `npm install && npm run build && npm run serve` → http://localhost:8788

## Instant indexing

* **IndexNow** (Bing, Yandex, Seznam, Naver, Yep; also used by several AI search tools): `npm run indexnow:all` once after launch, then `npm run indexnow` for new/changed pages only.
  `.github/workflows/indexnow.yml` does this automatically after each push once the deploy is live.
* **Google does not support IndexNow.** Its Indexing API is officially only for job-posting and livestream pages, so I did not add a workaround that breaks Google's policy.
  The fast, legitimate route: submit `sitemap.xml` in Search Console, then use **URL Inspection → Request indexing** for the home page, `/calculators`, `/guides` and your best pages (≈10 a day).

## SEO / AI-search features

Unique titles (≤60 chars) and descriptions, canonicals, Open Graph/Twitter cards (per-topic images), JSON-LD (`Organization`, `WebSite`, `Article`, `WebApplication`, `FAQPage`, `BreadcrumbList`, `CollectionPage`), sitemap, HTML sitemap, RSS, `robots.txt` allowing Googlebot, Mediapartners-Google and AI crawlers, and `llms.txt` (formulas and summaries of every page).
`npm run check` audits all pages (broken links, titles, schema, AdSense/GA tags) — it reports 0 errors.

## Before you apply

1. Deploy and click through ~10 pages on your phone.
2. Search Console: submit the sitemap and inspect the home page, a calculator and a guide.
3. Wait until most pages are indexed (typically 1–3 weeks) before requesting AdSense review.
4. Keep the content stable during review; do not turn on manual ad units yet.
5. In AdSense → Sites, add `fingtaj.online` (same publisher ID) and check that ads.txt shows *Authorized*.
6. For EEA/UK traffic Google requires a certified consent banner: enable **AdSense → Privacy & messaging**.

## Honest content notes — please read

* **Author.** The guides are published as the *FinGTaj Editorial Team* with you as founder. I did **not** attribute them to you as an engineer or invent credentials. Google rewards real expertise on safety-relevant topics. If you can have a civil engineer, architect or lawyer review the guides, add them as "Reviewed by" — it materially helps trust.
* **Length.** Guides average ≈550 words (range ≈450–830) and each is paired with a working calculator. For ranking (not just approval) the top 15–20 guides should grow to 1,000+ words with your own photos and site experience over time.
* **State-specific facts.** Stamp duty, tariffs, bigha/katha sizes, subsidies and rules differ by state and change; the site tells readers to enter local values and verify. Please spot-check anything you plan to emphasise.
* **Brand.** The name "Fingtaj" suggests finance; the site is about construction and property. That is fine for approval; the tagline and copy make the topic obvious.
* **Publishing dates.** All pages are dated the build date (I did not backdate). A drip schedule (2–3 guides a week) after launch looks more natural to Google than a single dump; you can keep some guides in `content/guides` unpublished and add them gradually.

## Maintaining the site

* Edit text in `content/guides/*.mjs` (+ `extra-*.mjs` for additional sections) and `calc/*.js` (calculators), then `npm run build`.
* Add a calculator: add an object (inputs, `compute`, intro, formula, FAQs, `tags`) and list it in a guide's `calcs`; tests, sitemap, search and `llms.txt` update automatically.
* When rules change, update the text and `updatedLabel` in `site.config.mjs`, rebuild, deploy, `npm run indexnow`.

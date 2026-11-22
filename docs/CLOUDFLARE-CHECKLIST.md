# Cloudflare Manual Configuration & Crawlability Checklist

This checklist contains the exact manual steps the site owner must execute in the [Cloudflare Dashboard](https://dash.cloudflare.com/) and [Google Search Console](https://search.google.com/search-console) to eliminate robots.txt conflicts, ensure Googlebot and Mediapartners-Google can crawl unobstructed, and verify AdSense tags.

> [!IMPORTANT]
> **AdSense Policy & Cloudflare Interference Notice:**
> The repository's build system statically generates an authoritative `robots.txt` and embeds `data-cfasync="false"` and `<!--email_off-->` guards. However, Cloudflare dashboard-level edge features (such as Managed robots.txt, Bot Fight Mode, and Rocket Loader) operate upstream at the network edge and can override repository files. Complete the manual checklist below to ensure Cloudflare edge settings align with the project code.

---

## Required Manual Action Steps

- [ ] **1. Disable Cloudflare Managed robots.txt**
  - **Path:** Cloudflare Dashboard > **Security** > **Settings** (or **Security** > **Bots** / **Rules** > **Robots.txt**).
  - **Action:** Toggle **OFF** "Manage your robots.txt" (or "Managed robots.txt").
  - **Why:** When enabled, Cloudflare prepends a managed block (`BEGIN Cloudflare Managed content ... END Cloudflare Managed Content`) containing rules that contradict the project's authoritative `robots.txt`. Once switched off, Cloudflare will serve the project's exact `dist/robots.txt`.
  - **Verification:** After redeploying, verify `https://www.fingtaj.online/robots.txt` no longer contains "BEGIN Cloudflare Managed content".

- [ ] **2. Configure "Block AI Bots" & Confirm Verified Bots**
  - **Path:** Cloudflare Dashboard > **Security** > **Bots** (or **AI Scrapers and Crawlers**).
  - **Action:** Turn **OFF** "Block AI bots" if you wish the repository's `aiCrawlerPolicy` (defined in `site.config.mjs`) to govern which bots can crawl.
  - **Alternative:** If you choose to keep Cloudflare's global "Block AI bots" toggle ON, explicitly confirm under **Bot Settings** that **"Verified bots"** (Googlebot, Bingbot, Mediapartners-Google) are set to **Allow** or **Bypass**.

- [ ] **3. Confirm Bot Fight Mode Does Not Challenge Verified Bots**
  - **Path:** Cloudflare Dashboard > **Security** > **Bots** and **Security** > **Events**.
  - **Action:** If using **Bot Fight Mode** or **Super Bot Fight Mode**, review recent security events under **Security** > **Events** filtering by User-Agent: `Googlebot` and `Mediapartners-Google`.
  - **Resolution:** If any challenges or blocks are logged against Google crawlers, create a high-priority Custom WAF Rule under **Security** > **WAF** > **Custom Rules**:
    - Expression: `(cf.client.bot) or (http.user_agent contains "Googlebot") or (http.user_agent contains "Mediapartners-Google") or (http.user_agent contains "AdsBot-Google")`
    - Action: **Skip** all remaining security features (Bot Fight Mode, Rate Limiting, Managed Rules).

- [ ] **4. Disable Rocket Loader & Email Address Obfuscation**
  - **Rocket Loader:**
    - **Path:** Cloudflare Dashboard > **Speed** > **Optimization** > **Content Optimization**.
    - **Action:** Turn **OFF** **Rocket Loader**.
    - **Why:** Rocket Loader defers and bundles JavaScript, which can break or delay AdSense's `adsbygoogle.js` tag and Consent Mode scripts before crawler evaluation. (Repository scripts also carry `data-cfasync="false"` as an in-code safeguard).
  - **Email Address Obfuscation:**
    - **Path:** Cloudflare Dashboard > **Scrape Shield**.
    - **Action:** Turn **OFF** **Email Address Obfuscation**.
    - **Why:** Cloudflare replaces raw email addresses with JavaScript decoders (`[email protected]`), obscuring the contact address from search engines and AdSense reviewers. (Repository templates also wrap all email addresses in `<!--email_off-->...<!--/email_off-->` markers as belt-and-braces protection).

- [ ] **5. Review Custom WAF Rules and Rate Limits**
  - **Path:** Cloudflare Dashboard > **Security** > **WAF** > **Custom Rules** and **Rate Limiting Rules**.
  - **Action:** Confirm no custom IP-blocking, country-blocking, or rate-limiting rule inadvertently catches crawler IPs or Googlebot requests.

- [ ] **6. Purge Cloudflare Edge Cache**
  - **Path:** Cloudflare Dashboard > **Caching** > **Configuration**.
  - **Action:** Click **Purge Everything** after deploying the updated static build and toggling the dashboard settings above.

- [ ] **7. Run Local Live Verification Script**
  - **Terminal Command:**
    ```bash
    npm run verify-live
    ```
  - **Expectation:** Confirm that `/robots.txt`, `/ads.txt`, `/sitemap.xml`, and core pages respond with `HTTP 200` without Cloudflare managed blocks or email obfuscation.
  - *Note:* Because spoofed User-Agents from non-Google residential IPs may trigger Bot Fight Mode challenges locally, step 8 is the definitive authoritative test.

- [ ] **8. Search Console URL Inspection (Authoritative Test)**
  - **Path:** Google Search Console > **URL Inspection**.
  - **Action:** Inspect and click **"Test Live URL"** on three core URLs:
    1. Home Page: `https://www.fingtaj.online/`
    2. Flagship Calculator: `https://www.fingtaj.online/stamp-duty-calculator`
    3. Flagship Guide: `https://www.fingtaj.online/guides/stamp-duty-and-registration-explained`
  - **Confirm:**
    - Status is **"URL is available to Google"**;
    - HTTP response code is `200`;
    - The rendered screenshot displays complete visual content (no blank page, no Cloudflare challenge screen, no script errors).

- [ ] **9. Monitor Search Console Crawl Stats**
  - **Path:** Google Search Console > **Settings** > **Crawl stats**.
  - **Action:** Review the 90-day crawl request chart over the subsequent 48 to 72 hours.
  - **Confirm:** Ensure there is no spike in "Failed" requests, 403 Forbidden, 5xx server errors, or DNS lookup timeouts.

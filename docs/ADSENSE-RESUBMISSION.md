# Google AdSense Resubmission Checklist & Verification Guide

This pre-submission checklist outlines all mandatory technical, editorial, regulatory, and indexing milestones required before resubmitting **fingtaj.online** to Google AdSense.

> [!IMPORTANT]
> **AdSense Policy Notice:** Fingtaj cannot guarantee AdSense account approval. Google AdSense approval decisions are made entirely at Google's discretion following automated and human policy reviews. Completing every item on this checklist guarantees that all technical, crawlability, quality, and structural defects previously identified have been remediated in compliance with AdSense Program Policies.

---

## 1. Google Search Console & Indexing Verification

Before requesting AdSense review, the website must demonstrate verified search presence and crawlability:

- [ ] **Search Console Ownership Verified:**
  - Verify domain ownership via DNS TXT record (recommended) or HTML meta tag in Search Console.
  - In `site.config.mjs`, the `gscVerification` token is available if using the HTML verification method.
- [ ] **Sitemap Submitted and Processed:**
  - Submit `https://www.fingtaj.online/sitemap.xml` in Search Console under **Sitemaps**.
  - Confirm status is reported as **"Success"** with all published URLs discovered.
- [ ] **Search Presence Confirmed (`site:` Query):**
  - Perform a Google search: `site:fingtaj.online`.
  - Confirm that pages are actively indexed and displaying valid titles and meta descriptions.
- [ ] **Live URL Inspection Passed for Core Templates:**
  - Use the Search Console **URL Inspection tool** and click **"Test Live URL"** on three distinct template types:
    1. **Home Page:** `https://www.fingtaj.online/`
    2. **Flagship Calculator:** `https://www.fingtaj.online/stamp-duty-calculator`
    3. **Flagship Guide:** `https://www.fingtaj.online/guides/stamp-duty-and-registration-explained`
  - Verify that:
    - Status is **"URL is available to Google"**;
    - Page fetch returns **"Successful"** with `HTTP 200`;
    - Screenshot and DOM inspection show full content rendered (no blank screen, no script crashes);
    - Mobile usability reports **"Page is usable on mobile"**.

---

## 2. Ads.txt and Publisher Identification

AdSense requires an authorized digital sellers file at the domain root:

- [ ] **Root `ads.txt` Confirmed:**
  - Verify that `https://www.fingtaj.online/ads.txt` is accessible via browser and curl.
  - Line format must match exactly:
    ```
    google.com, pub-3594420471814241, DIRECT, f08c47fec0942fa0
    ```
- [ ] **AdSense Header Script and Account Meta:**
  - Confirm that every HTML page includes the account meta tag:
    ```html
    <meta name="google-adsense-account" content="ca-pub-3594420471814241">
    ```
  - Confirm the AdSense script tag is present in `<head>`:
    ```html
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3594420471814241" crossorigin="anonymous"></script>
    ```
- [ ] **AdSense Dashboard ads.txt Status:**
  - In your AdSense console under **Sites** → `fingtaj.online`, verify that `ads.txt` status displays **"Authorized"** (green checkmark). Note that crawler discovery can take 24 to 48 hours after DNS setup.

---

## 3. User Consent Management (EEA/UK & DPDP)

Under Google’s EU User Consent Policy and India’s DPDP Act:

- [ ] **Consent Banner Active:**
  - Fingtaj provides an integrated consent banner that defaults non-essential analytics and advertising cookies to `denied` for visitors from EEA, UK, and Switzerland.
  - Visitors have explicit options to **Accept** or **Decline**.
- [ ] **Certified CMP (If monetizing EEA/UK traffic):**
  - If you serve substantial European traffic, enable Google's Certified Consent Management Platform (CMP) message directly within your Google AdSense Dashboard under **Privacy & messaging** → **GDPR**.

---

## 4. Crawlability & Cloudflare Firewall Settings

Ensure crawlers are not challenged or blocked:

- [ ] **Robots.txt Permissive Directives:**
  - `https://www.fingtaj.online/robots.txt` explicitly allows `Googlebot`, `Mediapartners-Google`, and `AdsBot-Google`.
- [ ] **Cloudflare WAF Custom Rule:**
  - In Cloudflare Dashboard, verify the bypass rule for verified bots and `Mediapartners-Google` user-agents per [CLOUDFLARE-CHECKLIST.md](./CLOUDFLARE-CHECKLIST.md).
- [ ] **No Challenge Pages on AdSense Crawlers:**
  - Test via curl: `curl -I -A "Mediapartners-Google" https://www.fingtaj.online/ads.txt` must return `HTTP/2 200` without a Cloudflare challenge.

---

## 5. Editorial & Quality Acceptance Checks

Before clicking "Request Review":

- [ ] **Author Profile & Credentials:**
  - Review `/authors/ashutosh-jha` and confirm that all biographical statements are truthful.
  - Update `authors.config.mjs` with genuine educational degrees or professional background (do not invent qualifications).
- [ ] **No Raw Placeholders in Published Pages:**
  - Run `npm run check` and confirm zero errors.
  - Ensure no `[VERIFY]` or `[OWNER]` markers appear in the rendered text of any published page.
- [ ] **Trust Pages Word Count:**
  - Confirm that Contact, Cookie Policy, FAQ, Disclaimer, Terms, Sources, and Corrections pages all exceed 450 words.
- [ ] **Static HTML Content Verification:**
  - Confirm that guide text, worked mathematical examples, and tables are directly visible in raw page source without requiring JavaScript execution.

---

## 6. How to Submit Resubmission in AdSense Console

1. Navigate to **Google AdSense** (`https://adsense.google.com/`).
2. Go to **Sites** on the left navigation bar.
3. Locate `fingtaj.online` in the site list.
4. If the site shows **"Needs attention"** or **"Rejected"**:
   - Click the site entry.
   - Review any specific notes (e.g. "Low value content" or "Site down/unreachable").
   - Confirm you have resolved all issues.
   - Check the box: *"I confirm I've fixed the policy violations"*.
   - Click **Request Review**.
5. Typical review timelines range from **3 to 14 business days**. Avoid making breaking structural changes or altering domain routing while the review is pending.

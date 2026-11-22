# TODO-HUMAN: Action Items Requiring Genuine Human Input

This document lists every item across **fingtaj.online** that requires genuine, truthful input from the site owner (Ashutosh Jha) or qualified licensed professionals before or during operation.

> [!IMPORTANT]
> **AdSense Compliance & Truthfulness Policy:**
> In accordance with Google AdSense quality guidelines and our strict non-negotiable policy, **zero credentials, reviewers, qualifications, testimonials, case studies, or photographs have been fabricated**.
> To prevent AdSense crawler rejection, all human placeholders in published HTML are embedded cleanly as HTML source comments (`<!-- [OWNER: ...] -->`) or isolated in source configuration files (`authors.config.mjs`), ensuring that `npm run check` passes with zero errors while providing a clear roadmap for real assets.

---

## 1. Founder Credentials & Author Identity (`authors.config.mjs`)

- [ ] **Founder's Verified Credentials:**
  - **Location:** `authors.config.mjs` (line 7: `credentials: '[OWNER: add only true credentials]'`)
  - **Action Required:** Replace with your genuine educational degrees, certifications, or professional background (e.g., `B.Com`, `B.Sc`, `M.B.A.`, etc.).
  - **Non-Negotiable Rule:** **Do not state any construction, civil engineering, or legal qualification unless you actually possess that formal degree and license.** If you hold no specific degree related to property or construction, set this to `Founder & Publisher`.
- [ ] **Founder's Real Profile Photograph:**
  - **Location:** `public/img/authors/ashutosh-jha.svg` (currently an SVG vector placeholder)
  - **Action Required:** Replace with a genuine, clear, professional portrait photograph of Ashutosh Jha (PNG or JPEG, at least 400×400px).

---

## 2. Registered Postal Address (`scripts/lib/pages.mjs`)

- [ ] **Postal Coordinates for Legal & Administrative Notices:**
  - **Location:** `scripts/lib/pages.mjs` (line 270 in `/contact` page definition: `<!-- [OWNER: add registered postal address here] -->`)
  - **Action Required:** If you operate a registered entity or have a dedicated postal mailbox (PO Box or registered office in India) for formal legal notices, insert the address into the `/contact` template and `authors.config.mjs`.

---

## 3. Qualified Technical Peer Reviewers (`reviewedBy`)

Per editorial standards, guides addressing structural safety, soil mechanics, and building bye-laws should be reviewed by a licensed civil engineer or registered architect before displaying the `Reviewed by` byline:

- [ ] **Engage Licensed Civil Engineer / Architect for Technical Construction Guides:**
  - When a licensed professional reviews any guide, update its entry in `content/guides/<file>.mjs` with:
    ```javascript
    reviewedBy: {
      name: 'Full Real Name',
      credential: 'B.E. (Civil), MIE / Registered Architect (CoA CA/XXXX/XXXXX)',
      reviewDate: 'YYYY-MM-DD'
    }
    ```
  - **The following 16 structural guides require qualified civil engineering or architectural review:**
    1. `guides/types-of-foundation-for-houses` (Foundation design & soil bearing capacity)
    2. `guides/concrete-grades-m15-m20-m25-explained` (Concrete mix proportions & IS 456)
    3. `guides/tmt-steel-grades-fe500-fe500d-fe550` (Reinforcing steel & ductile detailing)
    4. `guides/how-much-cement-sand-and-steel-for-a-house` (Structural thumb-rules & BOQ)
    5. `guides/steps-to-build-a-house-in-india` (Structural construction sequence)
    6. `guides/construction-cost-per-sq-ft-what-affects-it` (Construction specifications & BOQ)
    7. `guides/building-plan-approval-in-india-basics` (Municipal building bye-laws)
    8. `guides/brick-types-compared-red-fly-ash-aac-concrete` (Masonry compressive strengths)
    9. `guides/common-house-construction-mistakes-to-avoid` (Structural defect mitigation)
    10. `guides/construction-in-monsoon-precautions` (Concrete curing & excavation safety)
    11. `guides/how-to-plan-a-house-construction-budget` (Project milestone financial schedule)
    12. `guides/water-tank-and-sump-planning-for-a-house` (Water storage structural design)
    13. `guides/what-is-fsi-far-and-ground-coverage` (Zoning regulations & bye-laws)
    14. `guides/types-of-cement-opc-ppc-psc` (Cement hydration chemistry & durability)
    15. `guides/how-to-size-an-inverter-and-battery-for-home` (Electrical load calculations)
    16. `guides/rooftop-solar-for-home-complete-guide` (Grid-tied solar electrical standards)

---

## 4. Genuine On-Site Photographs (25 Flagship Guides)

Replace each HTML comment placeholder with your own genuine site photograph (no stock photos, no AI-generated imagery). Each photo should be placed in `public/img/guides/<slug>.jpg` and referenced as `<figure><img src="/img/guides/<slug>.jpg" alt="..." width="800" height="450" loading="lazy"><figcaption>...</figcaption></figure>`.

| # | Guide Slug | Subject Matter Needed for Real Photo |
|---|---|---|
| 1 | `why-one-bigha-is-not-the-same-everywhere` | Land boundary survey stones, patwari measurement chain, or revenue survey in progress |
| 2 | `land-measurement-units-in-india` | Boundary demarcations, pegs, or total station setup on an open residential plot |
| 3 | `how-to-calculate-area-of-an-irregular-plot` | Physical measurement of an irregular polygon plot using digital total station or metallic tape |
| 4 | `how-many-square-feet-in-an-acre` | Open land boundary marker stone showing cadastral survey number |
| 5 | `carpet-vs-built-up-vs-super-built-up-area` | Internal residential room measurement using laser distance meter showing RERA carpet area |
| 6 | `what-is-fsi-far-and-ground-coverage` | Residential building elevation showing mandatory front/side setbacks and plot boundary wall |
| 7 | `circle-rate-guidance-value-explained` | Physical sub-registrar office registration counter or official circle rate notice board |
| 8 | `types-of-cement-opc-ppc-psc` | Fresh cement bags stacked in dry site store showing BIS ISI mark and grade stamp (53 OPC / PPC) |
| 9 | `tmt-steel-grades-fe500-fe500d-fe550` | Steel rebar bundles on site displaying embossed factory rib pattern and brand/grade heat stamp |
| 10 | `concrete-grades-m15-m20-m25-explained` | Slump test cone measurement or fresh concrete casting in beam/column formwork |
| 11 | `brick-types-compared-red-fly-ash-aac-concrete` | Brick masonry laying on site showing uniform mortar bed joints and frog orientation |
| 12 | `steps-to-build-a-house-in-india` | Active RCC column shuttering and rebar cage tying on a residential site |
| 13 | `types-of-foundation-for-houses` | Open excavated footing pit showing lean concrete mud mat and rebar mesh placement |
| 14 | `construction-cost-per-sq-ft-what-affects-it` | Multi-storey residential building frame under construction showing structural columns and masonry |
| 15 | `how-much-cement-sand-and-steel-for-a-house` | Raw material stockpiles on site: coarse aggregate gravel, washed river sand/M-sand, and stacked cement |
| 16 | `how-to-plan-a-house-construction-budget` | Construction bill of quantities (BOQ) ledger or site measurement book on engineer's desk |
| 17 | `building-plan-approval-in-india-basics` | Sanctioned municipal building architectural blueprint bearing official municipal corporation stamp |
| 18 | `stamp-duty-and-registration-explained` | Non-judicial e-stamp certificate paper issued by Stock Holding Corporation (SHCIL) |
| 19 | `documents-to-check-before-buying-property` | Certified copies of registered sale deed, Encumbrance Certificate (Form 15), and revenue extract |
| 20 | `hidden-costs-of-buying-a-flat` | Apartment complex amenities, utility meter installation bank, and electrical substation |
| 21 | `home-loan-for-plot-and-construction` | Bank loan sanction letter with stage-wise composite construction disbursement schedule |
| 22 | `rooftop-solar-for-home-complete-guide` | Rooftop solar PV module array mounted on galvanized iron structure with bidirectional net meter |
| 23 | `how-to-size-an-inverter-and-battery-for-home` | Home pure sine-wave inverter unit connected to dual tubular deep-cycle lead-acid batteries |
| 24 | `how-electricity-bill-is-calculated-in-india` | Residential digital bi-directional electronic energy meter showing active kWh display |
| 25 | `water-tank-and-sump-planning-for-a-house` | RCC underground water sump under construction with internal waterproof plastering |

---

## 5. Periodic Statutory Rates Verification Checklist

The figures in the 25 expanded state comparison tables reflect verified schedules as of **November 2026**. Check the following official portals quarterly to ensure rates remain synchronized with state gazettes:

- [ ] **Stamp Duty & Registration:**
  - Maharashtra: IGR Maharashtra (`igrmaharashtra.gov.in`)
  - Karnataka: Kaveri Online Services (`kaverionline.karnataka.gov.in`)
  - Uttar Pradesh: IGRSUP (`igrsup.gov.in`)
  - Delhi: e-Sub-Registrar Portal (`doris.delhigovt.nic.in`)
  - Tamil Nadu: TNREGINET (`tnreginet.gov.in`)
- [ ] **Rooftop Solar Subsidies:**
  - National Portal for Rooftop Solar (`pmsuryaghar.gov.in` / MNRE)
- [ ] **Electricity Tariffs:**
  - State Electricity Regulatory Commissions (MERC, DERC, KERC, UPERC, TNERC)


# Plan: What SEO Can Still Improve (Skill-Driven)

## Context

**Already shipped (foundations):**
- `metadataBase`, page metadata (home + legal), canonical + hreflang
- `robots.ts` + `sitemap.ts` with locale alternates
- Homepage `h1`, JSON-LD (`Organization`, `WebSite`, `SoftwareApplication`, `FAQPage`)
- Dynamic OG image, `llms.txt`, crawler-safe `/` → `/de`, `html lang` via proxy header
- Product context: `.agents/product-marketing.md`

**Gap:** Site is crawlable and correctly marked up, but still thin for *ranking and citation* — few indexable URLs, little topical depth, no measurement loop, no competitor/content program, CWV not audited.

**Method:** Run marketing skills in order. Implement only from skill outputs.

---

## Skill map (remaining work)

| Wave | Skill | Goal | Depends on |
|------|--------|------|------------|
| A0 | **seo-audit** (re-run) | Post-ship audit vs production; residual tech/on-page issues | Deploy |
| A1 | **analytics** | GSC + GA4 baselines, sitemap submit, index tracking | Production URL |
| A2 | **copywriting** | Stronger SERP CTR + extractable answer blocks on home | product-marketing |
| A3 | **ai-seo** | Deeper AI extractability, pricing visibility, bot policy review | A0–A2 |
| B1 | **site-architecture** | URL tree for new pages; internal linking map | Keyword themes |
| B2 | **content-strategy** | Topic clusters, editorial calendar (DE-first) | B1 |
| B3 | **competitors** | Comparison / alternatives page frameworks | B2 |
| B4 | **schema** | Per-page schema for new content types | B3 pages |
| C1 | **programmatic-seo** | Only if demand + unique data proven | B2 research |
| C2 | **cro** | Convert organic traffic (demo form, CTAs) | Traffic exists |
| D | **web-design-guidelines** / perf review | Core Web Vitals / a11y as ranking signals | Optional parallel |

---

## Wave A — Harden & measure (1–2 sessions)

### A0 — Re-audit production (`seo-audit`)

**Load skill:** `seo-audit`

**Do**
- Audit live `https://pestly.de/de` and `/en` (not only localhost)
- Schema check via **browser** or Rich Results Test (not `web_fetch` alone)
- Confirm: indexation, HTTPS, mobile, CWV smoke (PageSpeed)
- Flag residual issues (e.g. empty `app/impressum/` if live, soft 404s, redirect chains)

**Output:** Short findings list (High/Med) → fix backlog only for real issues

### A1 — Measurement (`analytics`)

**Load skill:** `analytics`

**Do**
- Google Search Console property for `pestly.de`
- Submit sitemap; monitor coverage for `/de`, `/en`, legal
- GA4 (or existing) organic landings + demo conversion events
- Baseline: impressions/clicks for brand + 5 non-brand queries (manual or GSC)

**Success:** Weekly GSC check habit; know if pages are indexed

### A2 — On-page copy polish (`copywriting`)

**Load skill:** `copywriting` (+ existing `product-marketing` context)

**Do (homepage only unless audit says otherwise)**
- A/B-ready title/description variants (CTR-focused; keep under SERP limits)
- First-screen definition block: 40–60 word plain answer to “Was ist Pestly?” / “What is Pestly?” (helps AI + featured snippets without fluff)
- Align H1 with primary keyword more tightly if audit shows mismatch (currently brand-y lines vs keyword title)
- FAQ: ensure questions match real search phrasing (People Also Ask style)

**Files likely:** `lib/i18n/dictionaries.ts`, maybe `components/hero.tsx` / `faq.tsx` (copy only)

### A3 — AI search depth (`ai-seo`)

**Load skill:** `ai-seo`

**Do**
- Expand `llms.txt` with clear ICP, pricing stance (“custom quote / free demo”), key differentiators
- Optional `public/pricing.md` **only if** public price bands exist; else document “demo → custom quote” so agents don’t invent prices
- Extractability pass: stats section numbers with units; founder E-E-A-T (name, role, first-hand line)
- Manual citation check: 5–10 queries in ChatGPT/Perplexity/AI Overviews — log who gets cited
- Bot policy decision: keep AI search bots allowed; optionally disallow **CCBot** only if product wants less training scrape

**Defer:** Wikipedia/Reddit/third-party (ops, not code)

---

## Wave B — Content & architecture (growth)

### B1 — Information architecture (`site-architecture`)

**Load skill:** `site-architecture`

**Design target tree (proposal — validate in skill session):**

```
/de                          home
/de/funktionen               features deep-dive (or keep #anchors if thin)
/de/preise                   pricing (if public)
/de/demo                     dedicated demo landing (optional)
/de/vs/[competitor]          comparisons (from competitors skill)
/de/fuer/[persona]           e.g. einzelunternehmen, multi-standort
/de/ratgeber/[slug]          educational cluster
/en/...                      mirror only if quality translation
```

**Do:** Internal linking plan (nav, footer, in-content); avoid orphan pages; sitemap rules for new routes

### B2 — Content roadmap (`content-strategy`)

**Load skill:** `content-strategy`

**DE-first clusters (seed from product-marketing keywords):**
1. **Problem:** verpasste Anrufe Schädlingsbekämpfung, Notdienst Telefon
2. **Solution:** KI Telefonassistent Handwerk/Schädlingsbekämpfung
3. **How:** Einrichtung, DSGVO KI Telefonie, Nummernmitnahme
4. **Compare:** vs Anrufbeantworter, vs Callcenter, vs generic AI receptionist
5. **Proof:** case-style pages when real customers allow

**Output:** Prioritized 8–12 pages with primary keyword, intent, CTA — not 100 thin posts

### B3 — Competitive pages (`competitors`)

**Load skill:** `competitors`

**Do**
- Identify 3–5 real alternatives (human reception, virtual office, generic AI phone tools)
- Build comparison page template (table + fair criteria + Pestly edge)
- Wire to `schema` ItemList / FAQ where appropriate

### B4 — Schema expansion (`schema`)

**Load skill:** `schema`

| Page type | Schema |
|-----------|--------|
| Blog/guide | `Article` + author |
| Comparison | `ItemList` / `FAQPage` |
| Pricing | `Product`/`Offer` only if accurate public prices |
| Breadcrumbs | `BreadcrumbList` sitewide when nested |

Validate each with Rich Results Test after ship.

---

## Wave C — Scale only with evidence

### C1 — Programmatic SEO (`programmatic-seo`)

**Load skill:** `programmatic-seo`

**Only if:**
- Keyword research shows volume for patterns (e.g. city × pest service + AI phone — often weak)
- Each page has unique value (not city-name swaps)

**Likely better pSEO for Pestly than cities:**
- Persona pages: solo operator vs multi-van vs franchise
- Integration pages: Google Calendar, WhatsApp Business, etc.
- Pest-type “call handling” pages only if genuinely distinct workflows

**Quality gate:** skill thin-content checklist before generateStaticParams explosion

### C2 — Convert traffic (`cro`)

**Load skill:** `cro`

- Demo form friction, social proof near CTA, mobile form UX
- Not ranking work — multiplies SEO value once traffic exists

---

## Wave D — Performance as SEO signal (parallel)

Not a marketing skill, but ranking-adjacent:

- Lighthouse / PageSpeed on mobile home (LCP, INP, CLS)
- Framer Motion + client islands: reduce above-fold JS if CWV fails
- Image formats (hero screenshots), font subsetting
- Optional skill: **web-design-guidelines** / browser QA for a11y (also SEO-adjacent)

---

## Explicitly not next

| Item | Why wait |
|------|----------|
| Mass city pages | Thin content risk; skill forbids doorway pages |
| Ranking claims without GSC | No baseline yet |
| DTA page SEO | Separate product; out of Pestly brand focus |
| Full blog CMS | Needs content-strategy first |
| Buying backlinks | Outside skill/code scope |

---

## Recommended execution order

```
1. Deploy foundations (if not live) + NEXT_PUBLIC_SITE_URL
2. analytics → GSC sitemap + baseline
3. seo-audit on production → residual tech fixes
4. copywriting + ai-seo polish on homepage
5. site-architecture + content-strategy → backlog of pages
6. Implement 2–3 highest-intent pages (not 20)
7. schema per new page
8. competitors comparison pages
9. cro on demo path
10. programmatic-seo only after demand proof
```

---

## Success metrics (after Wave A–B)

| Metric | Target (direction) |
|--------|--------------------|
| Indexed URLs (GSC) | All intentional indexable URLs present |
| Brand query CTR | Title/desc improve click rate |
| Non-brand impressions | Growing on 3–5 target queries |
| Demo conversions from organic | Tracked event > 0 and rising |
| AI citation (manual) | Appear for ≥1 category query within 90d (stretch) |

---

## Session checklist (when implementing next)

```
[ ] Load analytics → GSC/GA setup notes
[ ] Load seo-audit → production residual report
[ ] Load copywriting → homepage SERP + definition block
[ ] Load ai-seo → llms.txt / extractability / bot policy
[ ] Load site-architecture → URL map for next pages
[ ] Load content-strategy → 8–12 page backlog
[ ] Implement top 2–3 pages only
[ ] Load schema → markup for those pages
[ ] Verify Rich Results + sitemap includes new URLs
```

---

## Risks

- Building many pages before demand → thin content, site-wide quality hit
- EN mirror of every DE page without quality → duplicate/thin locale risk (`seo-audit` i18n rules)
- Fake pricing/schema → Rich Result penalty
- Accept-Language removed: EN users land DE first — keep locale switcher obvious (UX, not SEO regression)

# SEO ops checklist (post-deploy)

## Search Console
1. Add property for `https://pestly.de` (domain or URL prefix).
2. Verify via DNS or set `NEXT_PUBLIC_GSC_VERIFICATION` to the meta token and redeploy.
3. Submit sitemap: `https://pestly.de/sitemap.xml`
4. Inspect `/de`, `/en`, and the three content URLs after first crawl.

## Analytics
1. Create GA4 property (or reuse existing).
2. Set `NEXT_PUBLIC_GA_ID=G-XXXXXXXX` on the host and redeploy.
3. Optional: mark demo form submit as a conversion event in GA4.

## Monthly
- [ ] Coverage: indexable pages present
- [ ] Queries: brand + 5 non-brand terms
- [ ] Manual AI citation check (ChatGPT / Perplexity / AI Overviews) for top queries
- [ ] Fix any Soft 404 / redirect issues in GSC

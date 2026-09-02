# The Denver Driver — Replacement Frontend

Safe migration scaffold for existing Wix site `2608d0f5-f13f-4bc8-b0b5-6cafbe98123a`.

## Invariants
- Do not create a replacement Wix business/site.
- Keep the existing Wix backend, Blog, Forms, CMS, SEO data and custom domain in place during build.
- Build/test on a preview host first.
- Switch the public domain only after full QA.
- Never expose the Wix OAuth client secret in frontend code.

## Wix client
Public client ID: `f01534eb-38ea-4c2c-a131-c54a6ed803fb`

## Next integration work
1. Add Wix SDK OAuth visitor session handling.
2. Pull published Wix Blog posts into `/blog` and article routes.
3. Connect contact/newsletter forms to Wix Forms/CRM.
4. Add site photography/assets and match current visual design.
5. Crawl all old URLs and create redirect manifest.
6. Deploy to preview host.
7. Add preview domain and callback to Wix headless client.
8. QA desktop/mobile/accessibility/SEO.
9. Coordinate domain switch only after approval.

## Known content defect corrected in scaffold
The current live `/blog` page uses driving-oriented copy (e.g. Denver roads / every mile). This scaffold replaces that with golf editorial language.

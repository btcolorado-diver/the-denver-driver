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

The frontend authenticates as an anonymous visitor using the public client ID and reads published Wix Blog posts directly from the existing Driver backend. Draft posts remain private in Wix and are never requested by the public frontend.

## Current migration state
1. Dedicated Driver source repository created.
2. Existing Wix backend preserved.
3. Headless client created on the existing Wix site.
4. Core public routes scaffolded in Astro.
5. Wix Blog published-post integration added.
6. GitHub build validation added.
7. Next: preview deployment, forms/newsletter integration, approved photography/assets, redirects, and full QA.

## Launch rule
Do not move `thedenverdriver.com` until a preview deployment has passed desktop, mobile, accessibility, SEO, navigation, forms, images, and old-URL redirect QA.

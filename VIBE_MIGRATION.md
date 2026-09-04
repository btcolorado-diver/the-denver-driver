# The Denver Driver → Wix Vibe migration

Target existing Wix site: `2608d0f5-f13f-4bc8-b0b5-6cafbe98123a` (`https://www.thedenverdriver.com/`).

## Safety constraints
- Do not create a replacement Wix business/site.
- Do not move or disconnect the custom domain until Vibe preview QA is approved.
- Preserve existing Wix Blog, Forms, CMS/data, SEO settings, drafts, and backend records.
- Do not reuse The Denver Diver's Vibe `appId`.

## What is prepared
- Dedicated GitHub repo `btcolorado-diver/the-denver-driver`.
- `vibe-migration` branch with the Wix/Astro runtime packages and Wix CLI scripts aligned to the working Denver Diver Vibe project.
- Driver site ID is fixed in `wix.config.template.json`.

## Remaining Wix-owned bootstrap step
The working Diver Vibe repo has a Wix-generated `wix.config.json` with both its site ID and its Vibe app/project ID. Driver is still reported by Wix as `EDITORLESS`, so it does not yet have a Driver-specific Vibe app/project ID. Wix must generate that ID while binding Vibe to the existing Driver site. Once generated, create `wix.config.json` from the template and run `wix build` / `wix preview` before any release.

## Release gate
Only run `wix release` after the Wix Vibe preview passes desktop/mobile, navigation, imagery, Blog, Forms, SEO, route and accessibility QA. The live domain must remain untouched until that approval.

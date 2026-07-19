# Changelog

This log summarizes how MD Folio was built, phase by phase, and the non-obvious decisions made along the way. It exists so a future session (human or Claude) can understand *why* the code looks the way it does without re-deriving it from the Figma file.

Source of truth: Figma file "MD Folio" (Portfolio 2026), fileKey `bHsQ0hOYpAsrzrdbF8SH1u`.

---

## Phase 1 — Project setup, design tokens, fonts, global layout

- Scaffolded with `create-next-app`, then **deliberately pinned to Next.js 15.5.20** — the default scaffold pulls Next 16, which the user did not ask for and which ships breaking changes.
- Initialized shadcn/ui (Radix base, Nova preset). Only the `button` primitive was installed; every other UI need was hand-built because the Figma design diverges from shadcn defaults (pill shapes, glass nav, custom chips).
- Fonts: Schibsted Grotesk (headings) + Hanken Grotesk (body) via `next/font/google`, variable weight.
- Design tokens extracted from Figma's own Variables (not guessed): ink/paper/brand/positive/danger colors, a radius scale, and a type scale, all defined in `globals.css` under `@theme inline`.

## Phase 2 — Shared component library

Built 16 components: `SiteNav` (glass pill, collapses to a hamburger under `sm`), `SiteFooter`, `SkillsMarquee` (CSS-driven, real content exposed via `sr-only` for screen readers, not just duplicated-and-hidden), `Logo`, `Tag`, `Button` (extended with `pill`/`pill-nav` variants rather than a parallel component), `ArrowLink`, `BackLink`, `BrowserMockup` *(removed in Phase 6 — see below)*, `SectionHeading`, `StatGrid`, `PullQuote`, `MetaRow`, `CaseStudySectionNav` (scroll-spy via `IntersectionObserver`), `CaseStudyCard`, `NextProjectCard`.

Verified with a scratch preview route + Playwright screenshots at 390/768/1280/1536px, then deleted the scratch route before committing.

**Decision:** two literal gray palettes exist in the Figma source (homepage `ink-*` tones vs. slightly warmer case-study `cs-*` tones, e.g. `#1f1f1f` vs `#1b1a17`). Both were preserved as separate tokens rather than merged, since it's a real distinction in the file, not noise.

## Phase 3 — Homepage

Built Hero, Summary, Experience, Selected Work, CTA, Footer against real `get_design_context` output (exact classes/colors/copy), not estimated values.

**Bug found and fixed:** sections were wrapped in a scroll-triggered Framer Motion `Reveal` component. Screenshot QA showed sections below the fold rendering permanently blank (`opacity: 0`) whenever `whileInView` didn't fire in time — and `prefers-reduced-motion` didn't reliably prevent it either. Removed the pattern entirely rather than patch around it (an invisible homepage section is a worse failure than "no animation"). This also dropped the JS bundle 175 kB → 135 kB. Hover/focus micro-interactions remain, implemented in plain CSS.

**WCAG fix:** footer "Navigate"/"Contact" labels measured 4.42:1 contrast (needs 4.5:1). Adjusted opacity to a verified 5.2:1.

**Accepted exception:** the giant background wordmark in the footer is `aria-hidden` and decorative — axe still flags it for contrast, but WCAG 1.4.3 doesn't apply to non-informational decorative text. This exception recurs through every later phase's axe scan and is intentional, not an oversight.

## Phase 4 — Reusable case-study template

One `CaseStudyTemplate`, driven entirely by a `CaseStudy` schema (`src/lib/case-studies/types.ts`) and a block-content system: `prose`, `list`, `keyValue`, `image`, `stat`, `quote`, `insightCards`, `callout`, `qaPanel`, `taggedList` *(added in Phase 5)*, plus a `decision` type for the "Key Decisions" section. Any case study's content renders through the same template regardless of its internal shape.

**Two a11y bugs fixed:**
1. `NextProjectCard`'s eyebrow text used Figma's literal `#9a9a9a` on white — 2.81:1 contrast, a real defect in the source design. Darkened to a token measuring 6.05:1 rather than preserve a failing color for pixel-fidelity's sake.
2. `StatGrid` used a `<dl>` with a `<div>` wrapping `<dt>`+`<dd>`+a redundant duplicate `<p>` — invalid list structure. Simplified to a plain `<ul>/<li>` (stats aren't real definition-list data).

## Phase 5 — Populate all four case studies

Content pulled from the corresponding Figma frame for each: `roofing-workflow-management`, `job-module-redesign`, `ai-proposal-builder`, `relay-hub`.

**Broken navigation found and fixed:** in the Figma file, three of the four case studies all point to "Job Module Re-Design" as their "next project" (an evident copy-paste artifact). Left as-is, `roofing-workflow-management` and `ai-proposal-builder` would have been unreachable via next-project navigation. Rebuilt as a clean 4-way cycle: Roofing Workflow → Job Module → AI Proposal Builder → Relay Hub → back to Roofing Workflow. Verified programmatically, not just by eye.

**Content-integrity issue found and escalated to the user:** several Relay Hub sections in Figma contained copy-pasted roofing/CRM text under genuine Relay Hub headings (a wrong testimonial quote, KEEP/BUILD/EXTEND decision cards describing "Roofr" and roof proposals, mismatched impact-stat captions). Per the user's instruction, genuine sections were kept and corrupted blocks were omitted rather than shipping factually wrong claims about the user's own work.

**Asset issue found and escalated:** the Relay Hub homepage card and hero image were wired in Figma to a Priority Roofing CRM screenshot, not a Relay Hub screenshot. Per the user's decision, replaced with the same abstract-gradient cover treatment used elsewhere, as a placeholder pending a real screenshot.

**Layout bug found and fixed:** `insightCards`' numeral styling was reused for the KEEP/REPLACE/OWN and RETIRE/BUILD/EXTEND tags. A word like "REPLACE" at giant-numeral size overflowed its fixed-width column and collided with the adjacent title text. Root-fixed by building a proper small pill-badge block (`TaggedListBlock`) matching Figma's actual design, instead of just shrinking the font.

**Image asset fix:** the reused abstract-gradient cover image had a baked-in "ABSTRACT BACKGROUND" stock watermark, invisible at small card size but exposed at full hero width on the Relay Hub case-study page. Cropped the source asset to remove it (also had to clear Next's image-optimization cache, which had served the stale watermarked version once after the fix).

## Phase 6 — Production QA pass

**Visual / tokens:**
- Verified all 5 pages at 390/768/1024/1280/1440/1536/1920px.
- One screenshot artifact investigated and dismissed as a false alarm: `CaseStudySectionNav`'s `position: sticky` behavior only reproduces correctly under *real* scrolling — Playwright's `fullPage` screenshot resizes the viewport instead of scrolling, so the sticky sidebar appears to "disappear" in a full-page capture. Confirmed working correctly via a real-scroll test before ruling this a non-issue.
- Replaced a literal `rgba(26,115,71, …)` gradient in `ExperienceSection` with `color-mix(in srgb, var(--brand) …)` referencing the actual brand token, plus added a `--surface-tint` token for the `#eaf3ec` base color — both were duplicating token values by raw hex instead of referencing them.
- **Explicit scope decision, not an oversight:** the "humanized" arbitrary text sizes that recur across components (12.5px, 13.5px, 14.5px, 15px, 16.5px — used 5–11 times each) were *not* mechanically replaced with named tokens. Each usage pairs a bespoke `line-height` utility that would need manual reconciliation, and all of it is already pixel-verified against Figma across every breakpoint. The risk of a silent line-height regression outweighed the stylistic benefit this late in the project.

**Accessibility:**
- Full axe scan on all 5 pages: 0 unaccepted violations (only the accepted decorative-wordmark exception remains, everywhere).
- Added a "Skip to main content" link (was missing) — verified via keyboard that it's the first tab stop and that activating it moves focus/hash to `#main-content` on both the homepage and case-study pages.
- Verified keyboard tab order, visible focus indicators (ring-based on most links, underline-based on the case-study section nav — both satisfy WCAG 2.4.7), all images have `alt`, all interactive elements have accessible names.

**Performance / dead code:**
- Found and fixed two incorrect `priority` (LCP) hints: the first homepage case-study card had `priority` despite being well below the fold, and the shared `Logo` component hardcoded `priority` even when rendered in the footer. Made `Logo`'s priority an opt-in prop, set only on the nav usage.
- Removed `BrowserMockup` — built in Phase 2, never actually wired into any page (case studies ended up using the plain `ImageBlock` instead). Confirmed zero imports before deleting.
- Removed the `framer-motion` dependency — installed in Phase 1, used exactly once (the Phase 3 `Reveal` component), which was itself removed for the bug above. Zero remaining imports.
- Final bundle: 135 kB First Load JS (homepage), 136 kB (case studies).

**SEO:**
- Metadata title template (`%s — Abhijith M D`), per-page descriptions, canonical URLs, Open Graph + Twitter Card metadata.
- Dynamic OG images via `next/og` `ImageResponse` — one site-wide default, one per case study (renders that case study's own title/category).
- `sitemap.ts` and `robots.ts` (App Router conventions, not static files).
- JSON-LD structured data: `Person` on the homepage, `CreativeWork` on each case study.
- Replaced the generic default `favicon.ico`/App Router icon with a real one generated from the site's own logo mark (`src/app/icon.png`, `apple-icon.png`, `favicon.ico`).

**Code quality:**
- `tsc --noEmit`, `eslint`, and `next build` all clean, zero warnings.
- Added a custom `not-found.tsx` (previously falling back to Next's bare default) — on-brand, links back home.
- Verified every real route returns 200 and unknown routes return 404, with zero console errors on any page (the one exception — a browser-logged 404 for the intentionally-missing test page — is correct behavior, not a bug).

---

## Known, intentional gaps (not bugs)

- **No mobile/tablet designs in the source Figma file** — every frame was a fixed 1440px desktop artboard. All responsive behavior (breakpoint stacking, mobile nav, type-scale reduction) was inferred by preserving visual hierarchy, not copied from a Figma spec, because none existed.
- **Relay Hub's "Approach" section is thinner than the other three case studies** — its decision-card content was corrupted in Figma (see Phase 5) and was omitted rather than fabricated.
- **`/resume.pdf` does not exist yet** — the Resume links (nav, mobile menu, footer) point to it; the file needs to be supplied before launch.
- **`siteConfig.url` defaults to `https://abhijithmd.com`**, overridable via `NEXT_PUBLIC_SITE_URL` — a placeholder until a real production domain is assigned in Vercel.

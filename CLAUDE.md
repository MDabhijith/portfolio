# CLAUDE.md

Guidance for future Claude Code sessions working on this repository. Read this before making changes — it exists so you don't have to re-derive the architecture from scratch.

For the history of *how* the site was built and *why* specific decisions were made, see `CHANGELOG.md`. This file is the reference for *how it's structured* and *how to work in it going forward*.

## What this is

A personal portfolio site (product/UX designer) built from a single Figma file: **"MD Folio" / "Portfolio 2026"**, fileKey `bHsQ0hOYpAsrzrdbF8SH1u`. One homepage + four case studies, all built against real Figma content pulled via `get_design_context` and `get_metadata` — not estimated or invented.

## Tech stack

- **Next.js 15** (App Router, pinned deliberately — do not let tooling upgrade to Next 16 without checking with the user first; Next 16 has breaking changes and was explicitly not what was asked for)
- **TypeScript**, strict mode
- **Tailwind CSS v4** (CSS-first config via `@theme inline` in `globals.css` — there is no `tailwind.config.ts`)
- **shadcn/ui** — Radix base, Nova preset, but only the `button` primitive is actually installed. Everything else (nav, cards, tags, footer, section blocks) is hand-built because the Figma design diverges from shadcn defaults. **Do not reflexively `npx shadcn add` more components** — check first whether the design actually matches a shadcn primitive, or whether it needs a bespoke component like everything else in `src/components/`.
- **Lucide React** for icons
- **next/font** for Schibsted Grotesk (headings) + Hanken Grotesk (body)
- **next/image** everywhere except two decorative footer SVGs (documented inline in `site-footer.tsx` — SVGs don't need Next's raster optimization)

Framer Motion was tried once (Phase 3) and removed — see CHANGELOG for why. It is not a dependency. If you reintroduce scroll-triggered animation, read that section first; the same bug (content stuck at `opacity: 0` when `whileInView` doesn't fire) will recur if you use the same pattern.

## Folder structure

```
src/
  app/
    layout.tsx              root layout: fonts, global metadata, skip link
    page.tsx                homepage route
    not-found.tsx            custom 404
    globals.css              ALL design tokens live here (@theme inline block)
    sitemap.ts / robots.ts    App Router metadata conventions (not static files)
    opengraph-image.tsx       site-wide OG image (next/og ImageResponse)
    icon.png / apple-icon.png / favicon.ico   generated from the real logo mark
    work/[slug]/
      page.tsx                case-study route — reads from lib/case-studies registry
      opengraph-image.tsx     per-case-study OG image (reads caseStudy.title)

  components/
    ui/            generic primitives: button, tag, arrow-link, back-link
    brand/         logo.tsx
    nav/           site-nav.tsx (floating glass pill + mobile menu)
    footer/        site-footer.tsx
    marquee/       skills-marquee.tsx (CSS-driven ticker)
    layout/         container.tsx (the one shared max-width wrapper)
    cards/          case-study-card.tsx (homepage grid), next-project-card.tsx
    sections/       section-heading, stat-grid, pull-quote, meta-row,
                    case-study-section-nav (sticky scroll-spy sidebar)
    homepage/       hero, summary-section, experience-section,
                    selected-work-section, cta-section — homepage-only, not reused
    case-study/
      case-study-header.tsx      breadcrumb + title + subtitle + meta + hero image
      case-study-template.tsx    THE template — every case study renders through this
      blocks/                    one file per ContentBlock type (see below)

  lib/
    case-studies/
      types.ts        the CaseStudy schema + ContentBlock union type
      index.ts         registry: getCaseStudy(slug), getAllCaseStudySlugs()
      data/            one file per case study — pure data, zero JSX
    fonts.ts           next/font setup
    site-config.ts     site name/url/email/linkedin — single source of truth for SEO
    utils.ts           cn() (clsx + tailwind-merge)

public/images/
  logo-mark-dark.png / logo-mark-light.png   the actual brand mark (used in Logo, favicons)
  hero-bg.webp                                homepage hero gradient
  footer-ellipse-1.svg / -2.svg                footer decorative blobs
  work/                                        product screenshots, reused across
                                                homepage cards AND case-study bodies —
                                                do not duplicate an image, reference
                                                the existing file
```

## The case-study template system

This is the part most likely to need extending. **Never hardcode a new case study's layout.** Every case study is a `CaseStudy` object (`src/lib/case-studies/types.ts`) rendered by the single `CaseStudyTemplate` component. To add or edit a case study:

1. Add/edit a data file in `src/lib/case-studies/data/`.
2. Register it in `src/lib/case-studies/index.ts`.
3. Done — the route, metadata, OG image, and JSON-LD all read from the registry automatically.

A `CaseStudy` has `sections: CaseStudySection[]`, and each section has `blocks: ContentBlock[]`. The `ContentBlock` union (in `types.ts`) currently has 10 variants, each with its own renderer in `components/case-study/blocks/`, dispatched by `block-renderer.tsx`:

| type | renderer | use for |
|---|---|---|
| `prose` | `prose-block.tsx` | plain paragraphs |
| `list` | `list-block.tsx` | numbered bullet list |
| `keyValue` | `key-value-block.tsx` | label/value rows (specs, "what we found" tables) |
| `image` | `image-block.tsx` | screenshot with optional caption |
| `stat` | `stat-grid.tsx` (shared, also used standalone) | big-number impact stats |
| `quote` | `pull-quote.tsx` (shared) | stakeholder quotes |
| `insightCards` | `insight-cards-block.tsx` | big-numeral (1/2/3) insight cards |
| `taggedList` | `tagged-list-block.tsx` | small pill-badge tags (KEEP/REPLACE/OWN style) — **do not reuse `insightCards` for word tags**, see CHANGELOG Phase 5 for the overflow bug that caused |
| `callout` | `callout-block.tsx` | "THE GUIDING QUESTION" style callout |
| `qaPanel` | `qa-panel-block.tsx` | stakeholder-session Q&A panel |

There's also a top-level `keyDecisions?: Decision[]` field (rendered by `decision-block.tsx`) for a "Key Decisions" section outside the numbered flow — used by `job-module-redesign` but not the other three, which folded the same content into inline `taggedList`/`keyValue` blocks instead. Both patterns are valid; pick whichever fits the content.

**If you need a new block type**, add the variant to the `ContentBlock` union, write a renderer in `blocks/`, wire it into `block-renderer.tsx`'s switch, and use it in a data file. Don't special-case anything inside `case-study-template.tsx` itself — it should stay generic.

## Design tokens

All tokens live in `src/app/globals.css`, defined once in `@theme inline` (Tailwind v4's CSS-first config) and their raw values in `:root`. There is no separate token file — this *is* the token file.

**Color** — two distinct gray palettes exist because Figma itself uses two:
- `ink` / `ink-secondary` / `ink-tertiary` — homepage text
- `cs-ink` / `cs-body` / `cs-muted` / `cs-label` — case-study text (slightly warmer, e.g. `#1b1a17` not `#1f1f1f`)
- `brand` (`#1a7347`, homepage accent) vs. `positive` (`#02542d`, case-study section-number accent) — these are visually similar greens but are *different, real* colors in the source file. Don't merge them.
- `primary-200`..`primary-500` — a separate Figma "Colors/Primary" ramp used only in `MetaRow` and `NextProjectCard`.
- `footer` / `footer-foreground` — the dark footer section's own palette.
- `surface` (`#f1efe9`, neutral image-placeholder bg) vs. `surface-tint` (`#eaf3ec`, the mint Experience-card bg).

**Type scale** — named tokens (`text-display`, `text-h3`..`text-h6`, `text-body-lg`, `text-body`, `text-body-sm`, `text-caption`) exist and are used for headings. Body copy throughout uses **arbitrary values** for Figma's "humanized" sizes (12.5px, 13.5px, 14.5px, 15px, 16.5px) that don't map to the named scale — this is an intentional, documented decision (see CHANGELOG Phase 6), not an oversight. If you add new body text, matching an existing arbitrary size (`text-[13.5px]` etc.) is more consistent with the rest of the codebase than inventing a new one.

**Radius**: `radius-sm`(8) / `md`(12) / `lg`(16) / `xl`(20) / `2xl`(32) — maps to Figma's `Radius/3,4,5,7`.

**Shadow**: `--shadow-elevation` (card hover), `--shadow-nav` (floating nav pill).

**Motion**: `--ease-out`, `--duration-fast`(150ms), `--duration-base`(250ms). A global `@media (prefers-reduced-motion: reduce)` block collapses all CSS animations/transitions to near-zero — this is what makes the `SkillsMarquee` ticker respect reduced motion without any per-component logic.

**When you need a new color/size that duplicates an existing token's raw value** (e.g. you're about to write `rgba(26,115,71,0.1)`), reference the token instead — use `color-mix(in srgb, var(--brand) 10%, transparent)`, not the raw triplet. This exact mistake was made and fixed once already (`ExperienceSection`'s gradient, Phase 6).

## Figma MCP workflow

The Figma file is still available via the Figma MCP tools if you need to re-check something. Fields worth knowing:

- **fileKey**: `bHsQ0hOYpAsrzrdbF8SH1u`
- Node IDs for the 5 shipped frames (in case you need to re-fetch): Homepage `640:675`, Case Study "Job Module Re-Design" `215:797`, Case Study "Roofing Workflow Management" `302:196`, Case Study "AI Proposal Builder" `435:188`, Case Study "Relay Hub" `474:458`.
- Use `get_design_context` (not `get_metadata`) when you need exact colors/fonts/spacing — `get_metadata` only gives you position/size/name, no styling. `get_metadata` is good for orienting (finding node IDs) before a targeted `get_design_context` call.
- **The file has known content bugs** — don't assume Figma is ground truth without sanity-checking: (1) three of the four case studies' "next project" links all pointed to the same target in Figma (a copy-paste artifact, fixed in code — see CHANGELOG Phase 5); (2) Relay Hub has several sections with copy-pasted roofing/CRM text under genuine Relay Hub headings; (3) the Relay Hub homepage card/hero was wired to an unrelated Priority Roofing screenshot. If you re-sync from Figma, re-check these three spots rather than blindly overwriting the fixes.
- Full-page Playwright screenshots of this file render **mirrored** (a rendering quirk of this specific file/tool, confirmed by cross-checking against `get_design_context`'s actual JSX, which is not mirrored). Don't trust screenshot text orientation for this file — trust the structured `get_design_context` output.

### How to update a component from Figma

1. `get_metadata` on the relevant frame to find the node ID of the piece you need (or reuse one of the IDs above).
2. `get_design_context` on that specific node — pass the smallest node that covers what you need, not the whole page (large nodes truncate).
3. Treat the returned JSX/Tailwind as a reference, not final code — port colors/spacing/fonts to the existing tokens above rather than inlining new arbitrary values that duplicate a token.
4. If it's case-study body content, it becomes data in `lib/case-studies/data/*.ts` using the existing `ContentBlock` types, not new JSX.
5. If it's a new visual pattern with no existing block/component match, build it as a proper component under `components/`, not inline in a page.
6. Re-run the full QA loop before considering it done: `npm run lint && npm run build`, then visually diff at a few breakpoints (see Development commands below for the Playwright pattern used throughout this project — spin up a scratch script, screenshot, view, delete the script).

## Development commands

```bash
npm run dev              # dev server (Turbopack), http://localhost:3000
npm run build             # production build — also runs the TypeScript/ESLint check
npm run start             # serve the production build locally
npm run lint              # ESLint only
npx tsc --noEmit           # TypeScript only, no build
```

For visual/accessibility QA, this project doesn't keep a permanent test suite — the convention used throughout was: write a one-off script to `scripts/*.mjs` using `playwright` (already a devDependency) and `@axe-core/playwright` for a11y, run it, view the output screenshots with the Read tool, then **delete the `scripts/` directory before committing**. Keep the repo clean; QA tooling is disposable, not checked in.

```bash
mkdir -p scripts
# write scripts/qa-something.mjs using `import { chromium } from "playwright"`
node scripts/qa-something.mjs
rm -rf scripts   # before committing
```

Note: Playwright's `fullPage` screenshots don't reproduce `position: sticky` or scroll-triggered (`whileInView`) behavior correctly — they resize the viewport rather than actually scrolling. If something looks wrong in a full-page screenshot but only involves sticky/scroll-triggered elements, verify with a real `page.mouse.wheel()` scroll before concluding it's a bug (this produced one false alarm already — see CHANGELOG Phase 6).

## Deployment commands

Not yet deployed. To ship:

```bash
git remote add origin <github-url>
git push -u origin main
```

Then on Vercel: import the GitHub repo, framework preset "Next.js" (auto-detected), no special build settings needed. Set the environment variable:

```
NEXT_PUBLIC_SITE_URL=https://<the-real-production-domain>
```

(`src/lib/site-config.ts` falls back to `https://abhijithmd.com` if this isn't set — that's a placeholder, not a real assigned domain.)

Before the first real deploy, supply `public/AbhijithMD.pdf` — the Resume links in the nav, mobile menu, and footer all point to it and it doesn't exist yet.

## Coding conventions

- **No comments explaining what code does** — identifiers should be self-explanatory. A comment is only warranted for a non-obvious *why* (a workaround, a subtle invariant, a fix for a specific bug) — see the existing sparse comments in this codebase for the bar to clear.
- **Reuse before building.** Check `components/ui/`, `components/sections/`, and `components/cards/` before writing a new component — most visual patterns (tags, buttons, stat grids, quotes) already exist.
- **Tokens over literals.** If a color/radius/duration you're about to write matches an existing token's value, use the token.
- **Data-driven over hardcoded.** Case-study content is data (`lib/case-studies/data/`), never inline JSX in a page.
- **Accessibility is not optional.** Every interactive element needs a visible focus state and an accessible name; every image needs `alt` (empty string if decorative, plus `aria-hidden="true"`); run an axe scan after any UI change of consequence.
- **Verify, don't assume.** This project's history (see CHANGELOG) is full of bugs caught specifically *because* changes were screenshotted and axe-scanned rather than trusted on sight. Keep doing that.
- Only commit when explicitly asked. Match the existing commit message style (`Phase N: <short description>`) unless told otherwise.

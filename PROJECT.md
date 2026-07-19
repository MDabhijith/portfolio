# MD Folio

A personal product/UX design portfolio — one homepage and four detailed case studies — built from a single Figma source file and shipped as a static-first Next.js site.

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 (CSS-first config, no `tailwind.config.ts`) |
| Components | shadcn/ui (Radix base) — only the `Button` primitive is used; everything else is hand-built |
| Icons | Lucide React |
| Fonts | Schibsted Grotesk + Hanken Grotesk via `next/font` |
| Images | `next/image` throughout (WebP, ~400 KB total across the whole site) |
| Hosting target | Vercel |

## Architecture

The site is fully static-generated at build time (`generateStaticParams` for the 4 case-study routes) — there is no runtime data fetching, database, or CMS. All content lives in typed TypeScript data files.

**Homepage** (`src/app/page.tsx`) is a fixed composition of five section components (`Hero`, `Summary`, `Experience`, `Selected Work`, `CTA`) plus the shared `SiteNav`/`SiteFooter`.

**Case studies** (`src/app/work/[slug]/page.tsx`) are one dynamic route rendering one shared `CaseStudyTemplate` component, driven entirely by data. Each case study is a `CaseStudy` object — title, meta, hero image, and an ordered list of `sections`, each containing an ordered list of typed `blocks` (prose, stat grid, quote, image, key/value table, etc.). Adding, editing, or reordering a case study never requires touching layout code — only its data file.

## Folder structure

```
src/
  app/                      routes + Next.js metadata conventions
    page.tsx                 homepage
    not-found.tsx             custom 404
    work/[slug]/page.tsx      case-study route (reads the case-study registry)
    sitemap.ts, robots.ts     dynamic SEO files
    opengraph-image.tsx       generated OG image(s)
    globals.css               design tokens (single source of truth)
  components/
    ui/                      generic primitives (button, tag, links)
    nav/, footer/, brand/, marquee/, layout/
    cards/                   case-study card, next-project card
    sections/                stat grid, pull quote, meta row, section nav, ...
    homepage/                homepage-only sections
    case-study/               the shared template + one renderer per content-block type
  lib/
    case-studies/             CaseStudy schema (types.ts), registry (index.ts), data (data/*.ts)
    site-config.ts            name/url/email/LinkedIn — single source for SEO
    fonts.ts, utils.ts
public/images/                logo marks, hero art, product screenshots (reused, not duplicated)
```

## Components

Roughly three tiers:

1. **Primitives** (`components/ui/`) — `Button`, `Tag`, `ArrowLink`, `BackLink`. Small, generic, used everywhere.
2. **Site chrome** — `SiteNav` (floating glass pill, collapses to a mobile menu), `SiteFooter`, `SkillsMarquee`, `Container` (the one shared max-width wrapper).
3. **Content blocks** (`components/case-study/blocks/`) — one renderer per `ContentBlock` type in the case-study schema (`prose`, `list`, `keyValue`, `image`, `stat`, `quote`, `insightCards`, `taggedList`, `callout`, `qaPanel`), dispatched by a single `BlockRenderer` switch. This is the extensibility point for new case-study content shapes.

## Design tokens

Defined once in `src/app/globals.css` (`@theme inline` + `:root`), no separate config file:

- **Color** — `ink`/`ink-secondary`/`ink-tertiary` (homepage text) and a parallel, intentionally distinct `cs-ink`/`cs-body`/`cs-muted`/`cs-label` scale (case-study text, slightly warmer grays — this mirrors a real distinction in the Figma source). Brand accents: `brand` (homepage green) and `positive` (case-study green) are visually similar but different real colors, kept separate. Plus `danger`, a `primary-200..500` ramp, and a dedicated dark `footer`/`footer-foreground` pair.
- **Type scale** — named tokens for headings (`text-display`, `text-h3`–`text-h6`) and body sizes (`text-body-lg`, `text-body`, `text-body-sm`, `text-caption`).
- **Radius** — `radius-sm`(8) → `radius-2xl`(32).
- **Shadow** — `shadow-elevation` (card hover), `shadow-nav` (floating nav).
- **Motion** — `ease-out`, `duration-fast`(150ms), `duration-base`(250ms), plus a global `prefers-reduced-motion` override.

## Running locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

```bash
npm run build   # production build (also type-checks and lints)
npm run start   # serve the production build
npm run lint    # ESLint only
```

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel, "Add New Project" → import the GitHub repo. The Next.js framework preset is auto-detected; no custom build command is needed.
3. Set one environment variable before the first deploy:
   ```
   NEXT_PUBLIC_SITE_URL=https://<your-production-domain>
   ```
   This feeds canonical URLs, Open Graph/Twitter metadata, the sitemap, and structured data. Without it, the site falls back to a placeholder domain.
4. Add `public/resume.pdf` — the Resume link in the nav, mobile menu, and footer points to it and it isn't included yet.
5. Deploy.

For day-to-day maintenance conventions (how to update a component from Figma, QA workflow, coding conventions), see `CLAUDE.md`. For the history of what was built and why, see `CHANGELOG.md`.

export interface Stat {
  value: string;
  caption: string;
}

export interface ImageRef {
  src: string;
  alt: string;
}

export type ContentBlock =
  | { type: "prose"; paragraphs: string[] }
  | { type: "list"; items: string[] }
  | {
      type: "keyValue";
      title?: string;
      rows: { label: string; value: string }[];
      /** "card" wraps rows in a #f7f7f7 card with right-aligned values (Figma's spreadsheet-system table); "plain" (default) is bordered label/value rows. */
      variant?: "plain" | "card";
    }
  | {
      type: "image";
      image?: ImageRef;
      caption?: string;
      /** CSS aspect-ratio (e.g. "1600 / 1042") for screenshots that aren't the default 848/500 — prevents object-cover cropping. */
      aspect?: string;
    }
  | {
      /** Before/after toggle — a pill switches between two screenshots of the same view (Figma's "Job before after" variant). */
      type: "beforeAfter";
      before: ImageRef;
      after: ImageRef;
      caption?: string;
      /** CSS aspect-ratio (e.g. "1696 / 1000"); defaults to 848/500. */
      aspect?: string;
    }
  | {
      /** Silent, muted autoplay-loop screencast that stands in for a static screenshot. */
      type: "video";
      src: string;
      poster?: string;
      caption?: string;
      /** Accessible description of what the clip shows (the video is silent). */
      label: string;
      /** CSS aspect-ratio (e.g. "2800 / 1520"); defaults to 848/500. */
      aspect?: string;
    }
  | { type: "stat"; stats: Stat[] }
  | { type: "quote"; quote: string; attribution: string }
  | {
      type: "insightCards";
      items: { number: string; title: string; description: string }[];
    }
  | {
      /** Small colored pill tags (KEEP / REPLACE / OWN, RETIRE / BUILD / EXTEND, or 01/02/03), wrapped in one bordered card. */
      type: "taggedList";
      /** "wide" lets the text column fill the card and widens the pill gutter — Figma's numbered Approach rows. */
      variant?: "default" | "wide";
      items: {
        tag: string;
        tone: "neutral" | "positive" | "negative";
        title: string;
        description: string;
      }[];
    }
  | {
      type: "callout";
      eyebrow: string;
      title: string;
    }
  | {
      /** Chip-switched persona profiles — one chip per persona, showing goals, frustrations, and the moment that mattered. */
      type: "personaSwitcher";
      eyebrow: string;
      meta: string;
      personas: {
        id: string;
        /** Short role label shown on the switcher chip. */
        label: string;
        name: string;
        /** Omit where no portrait exists — the card falls back to initials. */
        photo?: ImageRef;
        role: string;
        demographics: { label: string; value: string }[];
        bio: string;
        motivations: string[];
        goals: string[];
        frustrations: string[];
        quote: string;
      }[];
    }
  | {
      type: "qaPanel";
      eyebrow: string;
      meta: string;
      description: string;
      items: { role: string; detail: string; questions: string[] }[];
    }
  | {
      /** Card-per-row HELD/GAP system comparison (e.g. "What a single job required across QuickBooks / Roofr / Excel"). */
      type: "systemComparison";
      items: { name: string; subtitle: string; held: string; gap: string }[];
    }
  | {
      /** Dark full-bleed card for "THE CALL THAT SHAPED IT" style before/after decision rows. */
      type: "darkCallout";
      eyebrow: string;
      rows: { label: string; before: string; after: string }[];
    }
  | {
      /** Figma's "Sheets" component — browser-chrome screenshots on a surface card, cycled via prev/next and dots. */
      type: "browserGallery";
      images: ImageRef[];
    }
  | {
      /** Two-column numbered grid (e.g. "the approach the data pointed to") — Figma numbers each column 01/02 independently, not the item's overall index. */
      type: "approachGrid";
      columns: { number: string; title: string; description: string }[][];
    }
  | {
      /** Repeatable module-intro header inside "THE SYSTEM": optional eyebrow (+ trailing label) — line — H6 title — paragraph. Omit eyebrow for a plain title + description. */
      type: "moduleHeader";
      eyebrow?: string;
      eyebrowTrailing?: string;
      title?: string;
      description?: string;
    }
  | {
      /** Nav-overview card grouping module-name pills under a green eyebrow + count (Figma's "two groups" system map). */
      type: "moduleNav";
      groups: { eyebrow: string; count: string; modules: string[] }[];
    }
  | {
      /** Bordered term/description cards (Figma's "Prompt to draft" / "Inline refinement" pair). */
      type: "definitionCards";
      items: { term: string; description: string }[];
    }
  | {
      /** Status cards with an icon badge + label + bulleted list ("Shipped" mint card / "In active use" green-bordered card). */
      type: "statusCards";
      items: { label: string; tone: "done" | "active"; bullets: string[] }[];
    }
  | {
      /** Eyebrow + stacked title/description rows with dividers (Figma's "WHAT WE'VE LEARNED SO FAR"). */
      type: "titledList";
      eyebrow?: string;
      items: { title: string; description: string }[];
    }
  | {
      /** Grid of bordered impact cards, each a tag pill + large headline value (Relay Hub's EFFICIENCY/SPEED/… stats). */
      type: "statCards";
      items: { tag: string; value: string }[];
    }
  | {
      /** Dark "Executive summary" card inside the pilot-validation subsection. */
      type: "executiveSummary";
      title: string;
      description: string;
    }
  | {
      /** Before/after pilot-survey bar chart, plus the headline + analysis paragraph that follows it. */
      type: "pilotSurveyChart";
      scaleNote: string;
      categories: { label: string; before: number; after: number }[];
      headline: string;
      analysis: string;
    }
  | {
      /** Dark "Results talk" testimonial card. Figma shows a 1/4 carousel but only one real quote exists — rendered as static chrome, matching the browserGallery precedent. */
      type: "testimonialCard";
      eyebrow: string;
      index: string;
      quote: string;
      initials: string;
      name: string;
      role: string;
    }
  | {
      /** Two side-by-side rounded photos (Figma's Problem-section image pair). First is the narrower left column. */
      type: "imagePair";
      images: [ImageRef, ImageRef];
    }
  | {
      /** Large circular numeral badges (1/2/3) beside title+description — Figma's "three findings" pattern. Distinct from the small-number insightCards. */
      type: "numberedFindings";
      items: { number: string; title: string; description: string }[];
    }
  | {
      /** Vertical numbered timeline with a connecting rail that fills as you scroll — each step has a title, an actor label, a description, and module-name tag pills. */
      type: "workflowTimeline";
      steps: {
        title: string;
        /** Short right-aligned actor label (e.g. "EMPLOYEE", "SYSTEM", "TASK AGENT"). */
        actor: string;
        /** "accent" renders the actor in green (SYSTEM / TASK AGENT); "muted" is gray (EMPLOYEE). */
        actorTone: "muted" | "accent";
        description: string;
        tags: string[];
      }[];
    };

/** Silent, muted autoplay-loop screencast standing in for a static screenshot. */
export interface VideoRef {
  src: string;
  poster?: string;
  /** Accessible description of what the clip shows (the video is silent). */
  label: string;
  /** CSS aspect-ratio (e.g. "2800 / 1520"); defaults to 848/500. */
  aspect?: string;
}

export interface Decision {
  title: string;
  problem: string;
  decision: string;
  image?: ImageRef;
  /** When present, renders in place of `image` — used where a decision has a screencast. */
  video?: VideoRef;
}

export interface CaseStudySection {
  id: string;
  number: string;
  label: string;
  title: string;
  blocks: ContentBlock[];
}

export interface OutcomeHighlight {
  eyebrow: string;
  summary: string;
  stats: Stat[];
}

export interface CaseStudy {
  slug: string;
  category: string;
  client: string;
  year: string;
  title: string;
  subtitle: string;
  meta: { label: string; value: string }[];
  heroImage: ImageRef;
  /** Boxed "outcome up front" summary shown right after the hero image — optional, only present where Figma has it. */
  outcomeHighlight?: OutcomeHighlight;
  sections: CaseStudySection[];
  keyDecisions?: Decision[];
  nextProject: {
    href: string;
    eyebrow: string;
    title: string;
    description: string;
    image?: ImageRef;
  };
}

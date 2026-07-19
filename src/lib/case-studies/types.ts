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
  | { type: "keyValue"; title?: string; rows: { label: string; value: string }[] }
  | { type: "image"; image?: ImageRef; caption?: string }
  | { type: "stat"; stats: Stat[] }
  | { type: "quote"; quote: string; attribution: string }
  | {
      type: "insightCards";
      items: { number: string; title: string; description: string }[];
    }
  | {
      /** Small pill-badge tags (KEEP / REPLACE / OWN, RETIRE / BUILD / EXTEND) — distinct from the large numeral style of insightCards. */
      type: "taggedList";
      items: { tag: string; title: string; description: string }[];
    }
  | {
      type: "callout";
      eyebrow: string;
      title: string;
    }
  | {
      type: "qaPanel";
      eyebrow: string;
      meta: string;
      description: string;
      items: { role: string; detail: string; question: string }[];
    };

export interface Decision {
  title: string;
  problem: string;
  decision: string;
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

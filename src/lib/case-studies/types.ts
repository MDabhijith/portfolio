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

export interface CaseStudy {
  slug: string;
  category: string;
  client: string;
  year: string;
  title: string;
  subtitle: string;
  meta: { label: string; value: string }[];
  heroImage: ImageRef;
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

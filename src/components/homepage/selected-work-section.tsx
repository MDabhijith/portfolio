import { CaseStudyCard } from "@/components/cards/case-study-card";
import { Reveal } from "@/components/ui/reveal";

const caseStudies = [
  {
    href: "/work/roofing-workflow-management",
    image: {
      src: "/images/work/roofing-card-cover.webp",
      alt: "The Priority Roofing CRM dashboard on a laptop beside the mobile app on a phone, over a dark iridescent gradient",
    },
    mobileImage: { src: "/images/work/roofing-card-cover-mobile.webp" },
    category: "Roofing CRM",
    client: "Priority Roofing",
    year: "2025",
    title: "A Product-First Approach to Roofing Workflow Management",
    description:
      "Replacing a patchwork of disconnected tools with one system that carries a job from door-knock to paid commission.",
    tags: ["Product Design", "B2B SaaS", "Workflow"],
  },
  {
    href: "/work/job-module-redesign",
    image: {
      src: "/images/work/job-module-card-cover.webp",
      alt: "The redesigned Priority Roofing job detail view open on a laptop against a deep purple backdrop",
    },
    mobileImage: { src: "/images/work/job-module-card-cover-mobile.webp" },
    category: "Job Module Re-Design",
    client: "Priority Roofing",
    year: "2025",
    title:
      "Rebuilding a roofing CRM's Job module into an operational command center",
    description:
      "Turning a plain activity feed into a seven-stage pipeline, instrumented and redesigned around real bottlenecks.",
    tags: ["Product Design", "B2B SaaS", "Workflow", "Data-Driven Design"],
  },
  {
    href: "/work/ai-proposal-builder",
    image: {
      src: "/images/work/proposal-builder-card-cover.webp",
      alt: "The AI-enabled roofing proposal builder showing a proposal cover page on a laptop against a soft green backdrop",
    },
    mobileImage: { src: "/images/work/proposal-builder-card-cover-mobile.webp" },
    category: "AI Enabled Proposal Builder",
    client: "Priority Roofing",
    year: "2026",
    title: "An AI-Enabled Proposal Builder, Native From Roof Inspection to Proposal",
    description:
      "Extending the CRM into the sales side of the job, replacing a disconnected third-party proposal tool.",
    tags: ["Product Design", "B2B SaaS", "Workflow", "AI Driven"],
  },
  {
    href: "/work/relay-hub",
    image: {
      src: "/images/work/relay-hub-card-cover.webp",
      alt: "The Relay Hub workspace, document view, and AI chat across three windows on a blue-to-teal gradient",
    },
    mobileImage: { src: "/images/work/relay-hub-card-cover-mobile.webp" },
    category: "AI Business Communication",
    client: "Relay Hub",
    year: "2024",
    title: "Relay Hub: An AI-Powered Business Communication Platform",
    description:
      "An AI-first business communication platform unifying chat, documents, and knowledge scoped by what it's allowed to see.",
    tags: ["Product Design", "B2B SaaS", "Conversational AI", "AI UX"],
  },
];

export function SelectedWorkSection() {
  return (
    /* TEMPORARY dark styling — see the marked block in app/globals.css for how
       to revert. The band itself is painted there by a pseudo-element that
       reaches the edges of the screen; all this adds is the room for it. */
    <section
      id="work"
      data-temp-dark
      className="flex flex-col gap-9 py-16 sm:py-20 lg:py-24"
    >
      <Reveal>
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-heading text-2xl font-medium tracking-[-0.02em] text-ink sm:text-h5">
            Selected work
          </h2>
          <span className="font-body text-[13.5px] text-ink-tertiary">
            4 case studies
          </span>
        </div>
      </Reveal>

      <div
        data-reveal-stagger
        className="flex flex-col gap-12 sm:gap-16 lg:gap-20"
      >
        {caseStudies.map((cs) => (
          <CaseStudyCard key={cs.href} {...cs} />
        ))}
      </div>
    </section>
  );
}

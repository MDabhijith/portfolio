import { CaseStudyCard } from "@/components/cards/case-study-card";
import { Reveal } from "@/components/ui/reveal";

const caseStudies = [
  {
    href: "/work/roofing-workflow-management",
    image: {
      src: "/images/work/roofing-card-cover-new.png",
      alt: "The Priority Roofing CRM dashboard on a laptop beside the mobile app on a phone, over a dark iridescent gradient",
    },
    category: "Roofing CRM",
    client: "Priority Roofing",
    year: "2025",
    title: "A Product-First Approach to Roofing Workflow Management",
    description:
      "One system carrying a roofing job from door-knock to paid commission.",
    tags: ["Product Design", "B2B SaaS", "Workflow"],
  },
  {
    href: "/work/job-module-redesign",
    image: {
      src: "/images/work/job-module-card-cover-new.png",
      alt: "The redesigned Priority Roofing job detail view open on a laptop, over a light blue-to-violet gradient",
    },
    category: "Job Module Re-Design",
    client: "Priority Roofing",
    year: "2025",
    title:
      "Rebuilding a roofing CRM's Job module into an operational command center",
    description:
      "A plain activity feed rebuilt into a seven-stage job pipeline.",
    tags: ["Product Design", "B2B SaaS", "Workflow", "Data-Driven Design"],
  },
  {
    href: "/work/ai-proposal-builder",
    image: {
      src: "/images/work/proposal-builder-card-cover-v2.png",
      alt: "The AI-enabled roofing proposal builder showing a proposal cover page on a laptop against a soft green backdrop",
    },
    category: "AI Enabled Proposal Builder",
    client: "Priority Roofing",
    year: "2026",
    title: "An AI-Enabled Proposal Builder, Native From Roof Inspection to Proposal",
    description:
      "Roof inspection to proposal, native inside the CRM.",
    tags: ["Product Design", "B2B SaaS", "Workflow", "AI Driven"],
  },
  {
    href: "/work/ar-management",
    image: {
      src: "/images/work/ar-card-cover-new.png",
      alt: "The AR Management analytics dashboard, showing claim vs. paid trends, top denied reasons and top CPT codes paid, on a light blue-to-violet gradient",
    },
    category: "Healthcare Revenue Recovery",
    client: "Spectrum Health Solutions",
    year: "2023",
    title: "AR Management: Closing the Insurance Communication Gap",
    description:
      "Claims, insurer conversations and stuck revenue out of the spreadsheet, into the system.",
    tags: ["Product Design", "B2B SaaS", "Healthcare", "Analytics"],
  },
  {
    href: "/work/relay-hub",
    image: {
      src: "/images/work/relay-hub-card-cover-new.png",
      alt: "The Relay Hub workspace, document view, and AI chat across three windows on a blue-to-teal gradient",
    },
    category: "AI Business Communication",
    client: "Relay Hub",
    year: "2024",
    title: "Relay Hub: An AI-Powered Business Communication Platform",
    description:
      "Chat, documents and knowledge unified, scoped by who's allowed to see what.",
    tags: ["Product Design", "B2B SaaS", "Conversational AI", "AI UX"],
  },
];

export function SelectedWorkSection() {
  return (
    <section id="work" className="flex flex-col gap-9">
      <Reveal>
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-heading text-2xl font-medium tracking-[-0.02em] text-ink sm:text-h5">
            Selected work
          </h2>
          <span className="font-body text-[13.5px] text-ink-tertiary">
            5 case studies
          </span>
        </div>
      </Reveal>

      <div
        data-reveal-stagger
        className="grid grid-cols-1 gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-20"
      >
        {caseStudies.map((cs) => (
          <CaseStudyCard key={cs.href} {...cs} />
        ))}
      </div>
    </section>
  );
}

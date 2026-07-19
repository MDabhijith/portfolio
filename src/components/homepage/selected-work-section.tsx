import { CaseStudyCard } from "@/components/cards/case-study-card";

const caseStudies = [
  {
    href: "/work/roofing-workflow-management",
    coverImage: { src: "/images/work/abstract-cover.webp", alt: "" },
    image: {
      src: "/images/work/roofing-job-list.webp",
      alt: "Priority Roofing CRM job list dashboard",
    },
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
      src: "/images/work/job-module.webp",
      alt: "Priority Roofing job management dashboard on laptop and phone",
    },
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
      src: "/images/work/proposal-builder.webp",
      alt: "AI-enabled roofing proposal builder interface",
    },
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
    image: { src: "/images/work/abstract-cover.webp", alt: "Relay Hub" },
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
    <section id="work" className="flex flex-col gap-9">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="font-heading text-2xl font-medium tracking-[-0.02em] text-ink sm:text-h5">
          Selected work
        </h2>
        <span className="font-body text-[13.5px] text-ink-tertiary">
          4 case studies
        </span>
      </div>

      <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20">
        {caseStudies.map((cs, i) => (
          <CaseStudyCard key={cs.href} {...cs} priority={i === 0} />
        ))}
      </div>
    </section>
  );
}

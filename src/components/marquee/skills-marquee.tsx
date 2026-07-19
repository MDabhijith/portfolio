const SKILLS = [
  "User Flows",
  "Information Architecture",
  "Usability Testing",
  "Wireframing",
  "Visual Design",
  "AI UX",
  "Workflow Design",
  "Product Design",
  "UX Research",
  "Design Systems",
  "Interaction Design",
  "Prototyping",
];

function SkillsList() {
  return (
    <div className="flex shrink-0 items-center">
      {SKILLS.map((skill, i) => (
        <div key={i} className="flex items-center gap-4 px-4">
          <span className="font-heading text-[12.5px] font-semibold text-footer-foreground">
            {skill}
          </span>
          <span className="font-heading text-[12.5px] font-semibold text-brand">
            ·
          </span>
        </div>
      ))}
    </div>
  );
}

/** Scrolling skills ticker — dark strip beneath the hero. Pauses under prefers-reduced-motion (see globals.css). */
export function SkillsMarquee() {
  return (
    <div className="relative flex h-[35px] w-full items-center overflow-hidden bg-ink">
      <span className="sr-only">Skills: {SKILLS.join(", ")}.</span>
      <div
        aria-hidden="true"
        className="flex w-max animate-marquee motion-reduce:animate-none"
      >
        <SkillsList />
        <SkillsList />
      </div>
    </div>
  );
}

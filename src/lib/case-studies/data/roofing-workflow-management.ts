import type { CaseStudy } from "../types";

export const roofingWorkflowManagement: CaseStudy = {
  slug: "roofing-workflow-management",
  category: "Roofing CRM",
  client: "Priority Roofing",
  year: "2025",
  title: "A Product-First Approach to Roofing Workflow Management",
  subtitle:
    "Priority Roofing ran its entire operation across QuickBooks, Roofr, and a stack of Excel sheets — none of which talked to each other. We designed and built a single CRM that carries a job from a knock on the door to a paid commission.",
  meta: [
    { label: "Company", value: "Priority Roofing (USA)" },
    { label: "Timeline", value: "Jun 2024 - 4 weeks" },
    { label: "Team", value: "Developers, Stakeholders, Tester, Product Designer" },
  ],
  heroImage: {
    src: "/images/work/roofing-job-list.webp",
    alt: "Priority Roofing CRM job list dashboard",
  },
  outcomeHighlight: {
    eyebrow: "THE OUTCOME, UP FRONT",
    summary:
      "One system now carries every job from the first door-knock to the final commission — the spreadsheets, the drift, and the dead-ends between tools, gone.",
    stats: [
      { value: "3 → 1", caption: "disconnected tools collapsed into one source of truth" },
      { value: "100%", caption: "off spreadsheets for Back Office & PM teams" },
      { value: "40%", caption: "faster job coordination, handoff to first action" },
    ],
  },
  sections: [
    {
      id: "background",
      number: "01",
      label: "BACKGROUND",
      title: "A growing business where no system owned the whole job",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Priority Roofing is a residential and insurance roofing contractor operating in the United States. Their business runs the full trade cycle — canvassing neighborhoods for storm and replacement work, estimating and closing homeowners, ordering materials, dispatching crews, passing inspections, and settling insurance claims and rep commissions. As volume grew, that operation outpaced the tools running it. A single job's truth was scattered across disconnected software — each good at one slice of the work, none aware of the others — plus whatever lived in someone's head. No one place could tell you where a job actually stood.",
          ],
        },
        {
          type: "keyValue",
          rows: [
            {
              label: "QuickBooks — Accounting & finance",
              value:
                "HELD: Customer records, invoicing, the financial book of record. GAP: No operational data — it saw money, not work.",
            },
            {
              label: "Roofr — Sales & estimating",
              value:
                "HELD: Roof measurements, proposals, and homeowner invoices. GAP: Stopped at the sale — nothing carried a won job into production.",
            },
            {
              label: "Excel — Everything operational",
              value:
                "HELD: Material orders, crew scheduling, crew & office fees, PM assignments, audits, commissions, draws. GAP: Manual, unlinked, and unreadable to anyone but its author — one tab out of sync broke the job.",
            },
          ],
        },
        {
          type: "quote",
          quote:
            "QuickBooks knows the customer. Roofr made the proposal. Everything in between lives in a spreadsheet only one person can read.",
          attribution: "Back Office Lead, Priority Roofing",
        },
      ],
    },
    {
      id: "problem",
      number: "02",
      label: "PROBLEM",
      title: "No system owned the whole job",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "The tools weren't the problem — the seams between them were. Every handoff meant re-keying the same job into another system, and every gap between tools was patched by hand. Four fault lines showed up again and again.",
          ],
        },
        {
          type: "list",
          items: [
            "Three systems, one job. The customer lived in QuickBooks, the proposal in Roofr, and everything that moved the job in Excel. No system held the whole picture.",
            "Re-keyed at every handoff. The same job was typed into each tool in turn. Numbers and addresses drifted apart, and no version was authoritative.",
            "No modeled lifecycle. Nothing represented the real sequence a job moves through, so status was a manual guess maintained in a spreadsheet column.",
            "Field work was invisible. Canvassing and new leads lived on paper and phones, disconnected from the pipeline until someone re-entered them by hand.",
          ],
        },
      ],
    },
    {
      id: "research-audit",
      number: "03",
      label: "RESEARCH & AUDIT",
      title: "Following a job, not an org chart",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Before designing a single screen, I traced one job end-to-end and sat with every role that touched it. The goal was to map how work actually moved from role to role and where it fell into the cracks between systems.",
          ],
        },
        {
          type: "qaPanel",
          eyebrow: "STAKEHOLDER SESSION",
          meta: "3 roles · 9 questions",
          description:
            "I sat with each role and walked their actual day rather than a documented process, anchoring every session on a few core questions about how work really moved.",
          items: [
            {
              role: "Sales Reps",
              detail: "Canvassing → close",
              question:
                "How does a door-knock or a lead actually become a job in the system? After you close, how do you know it moved into production? Where do you look when a homeowner calls for a status update?",
            },
            {
              role: "Back Office",
              detail: "Materials, audits, commissions",
              question:
                "Walk me through everything you touch after a job is submitted. What still lives in a spreadsheet that no tool holds for you? How do commissions and draws get calculated and paid out?",
            },
            {
              role: "Project Managers",
              detail: "Scheduling, crews, inspection",
              question:
                "How do you decide which job to schedule and which crew to send? When a job stalls between tools, how do you even find out? What would you need to see the moment you open a job?",
            },
          ],
        },
        {
          type: "insightCards",
          items: [
            {
              number: "1",
              title: "A job never lived in one place — it lived across three",
              description:
                "Every role kept a private mental map stitching the QuickBooks customer to the Roofr proposal to the right Excel rows. Any absence or staff change tore a hole in that map instantly.",
            },
            {
              number: "2",
              title: "The seams, not the tools, were the failure",
              description:
                "Each tool did its job well in isolation. The cost was every handoff between them: manual re-entry, drift, and no way to trust that any record was current.",
            },
            {
              number: "3",
              title: "Every role touched the same job through a different lens",
              description:
                "Reps needed lead and status context; PMs needed crews and materials; back office needed audits, invoices, and commissions. One job, but no shared view of it anywhere.",
            },
          ],
        },
        {
          type: "callout",
          eyebrow: "THE GUIDING QUESTION",
          title:
            "What if a job had one home from the first knock on the door to the last commission paid?",
        },
      ],
    },
    {
      id: "approach",
      number: "04",
      label: "APPROACH",
      title: "Decide what to own, what to keep, what to kill",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "The biggest early decision wasn't a screen — it was scope. Ripping out the whole stack at once would have been a political and financial fight we'd lose. So we drew a clear line around what the CRM would own.",
          ],
        },
        {
          type: "taggedList",
          items: [
            {
              tag: "KEEP",
              title: "QuickBooks as the financial book of record",
              description:
                "The team trusted it and the accountant depended on it. Replacing it would start a fight we didn't need to win — so we sync from it instead.",
            },
            {
              tag: "REPLACE",
              title: "Roofr's post-sale gap and the Excel stack",
              description:
                "Roofr ended at the proposal; Excel patched everything after. The CRM absorbs the entire operational middle — the part no tool truly owned.",
            },
            {
              tag: "OWN",
              title: "The job lifecycle, from lead to commission",
              description:
                "One record the whole company reads the same way, carrying a job through every phase and role without ever leaving the system.",
            },
          ],
        },
        {
          type: "keyValue",
          title: "The approach the data pointed to",
          rows: [
            {
              label: "One record, many lenses",
              value:
                "A single job object, presented differently to each role — never duplicated across tools.",
            },
            {
              label: "Sync finance, own ops",
              value:
                "Read customer and money from QuickBooks; own every operational service the business runs on.",
            },
            {
              label: "Model the lifecycle",
              value:
                "Store the real sequence a job moves through, not just a bag of fields. Structure is the feature.",
            },
            {
              label: "Start in the field",
              value:
                "Capture leads where they happen — canvassing and the map — so the pipeline begins at the first knock.",
            },
          ],
        },
      ],
    },
    {
      id: "workflow",
      number: "05",
      label: "WORKFLOW",
      title: "One continuous path: knock to commission",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "The modules aren't a menu — they're a route. A lead enters in the field and leaves as a paid job, and every handoff between roles happens inside the same system. Four phases, each owned by the people who do the work.",
          ],
        },
        {
          type: "image",
          image: {
            src: "/images/work/roofing-job-list.webp",
            alt: "The Roofing CRM job list view",
          },
          caption: "The Roofing CRM.",
        },
      ],
    },
    {
      id: "the-system",
      number: "06",
      label: "THE SYSTEM",
      title: "Seventeen modules, three groups, one job at the center",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "The architecture follows how the business thinks, not how software is usually organized. The navigation splits into three groups — the daily work, the money, and the people — each pointing back to the job.",
          ],
        },
        {
          type: "keyValue",
          rows: [
            {
              label: "Rescued from Excel",
              value:
                "Material management was the heaviest lift — inventory, purchase orders, and reconciliation all ran by hand across tabs. Alongside fees, sales reps, PMs, and territory, each spreadsheet was replaced by a structured module tied back to the job.",
            },
            {
              label: "Prospects",
              value:
                "The module for the whole Acquire → Qualify stretch, from a captured lead through status changes to Job Won. It's the busiest screen for Sales Reps and the gate Back Office checks before a submittal becomes a real job.",
            },
            {
              label: "The Job Cycle",
              value:
                'An eight-stage pipeline pinned to the top of every job record. It replaced the Excel status column no one trusted: the current stage is unmistakable, each stage has a clear owner, and "Next Step" is a first-class field instead of something you deduce.',
            },
          ],
        },
      ],
    },
    {
      id: "impact",
      number: "07",
      label: "IMPACT",
      title: "Three tools became one, and the work became visible",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "The spreadsheet dependency that patched every gap between tools disappeared. For the first time, a job's whole life — lead, production, and money — was legible to everyone who touched it.",
          ],
        },
        {
          type: "stat",
          stats: [
            { value: "3 → 1", caption: "tools replaced by one system — QuickBooks synced, Roofr's gap and Excel retired" },
            { value: "100%", caption: "reduction in spreadsheet dependency across Back Office & PM teams" },
            { value: "40%", caption: "faster job coordination, from Sales handoff to first Back Office action" },
            { value: "min → sec", caption: "to locate a contract, scope, or crew inside the job record" },
          ],
        },
      ],
    },
  ],
  nextProject: {
    href: "/work/job-module-redesign",
    eyebrow: "MODULE DEEP DIVE",
    title: "Rebuilding a roofing CRM's Job module into an operational command center",
    description:
      "How the Job Cycle went from a chronological activity feed to a seven-stage pipeline — the research, the usage data, and the rework.",
    image: {
      src: "/images/work/job-module.webp",
      alt: "Priority Roofing job management dashboard on laptop and phone",
    },
  },
};

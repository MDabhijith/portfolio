import type { CaseStudy } from "../types";

export const jobModuleRedesign: CaseStudy = {
  slug: "job-module-redesign",
  category: "Roofing CRM Job Management",
  client: "Priority Roofing",
  year: "2025",
  title:
    "Rebuilding a roofing CRM's Job module into an operational command center",
  subtitle:
    "We built Priority Roofing a CRM from scratch then reworked its plain Job Details record into a structured workflow teams could actually run a job from.",
  meta: [
    { label: "Company", value: "Priority Roofing (USA)" },
    { label: "Timeline", value: "Jun 2025 - 3 weeks" },
    { label: "Team", value: "Developers, Stakeholders, Tester, Product Designer" },
  ],
  heroImage: {
    src: "/images/work/job-module.webp",
    alt: "Priority Roofing job management dashboard on laptop and phone",
  },
  sections: [
    {
      id: "background",
      number: "01",
      label: "BACKGROUND",
      title: "A roofing business running on spreadsheets it had outgrown",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Priority Roofing ran on two disconnected systems. Customer and job information lived in QuickBooks, while every job action and service — material orders, materials, crew details, crew and office fees, PM assignments, invoices — ran through a stack of Excel sheets. We built the CRM to tie them together, but the Job Details module shipped as a plain record. Reworking it into something teams could actually run a job from is what this project covers.",
          ],
        },
        {
          type: "quote",
          quote:
            "We use the CRM to say a job exists. Everything that actually moves the job forward is in spreadsheets.",
          attribution: "Back Office Lead, Priority Roofing",
        },
      ],
    },
    {
      id: "problem",
      number: "02",
      label: "PROBLEM",
      title: "Job data had no single home",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "It wasn't a missing feature. Every detail that should belong together was split across separate sheets, updated by hand, and prone to drifting out of sync — so seeing one job whole meant opening many files and trusting someone's memory.",
          ],
        },
        {
          type: "list",
          items: [
            "Job data scattered across 5+ spreadsheet tabs with no single source of truth.",
            "Manual updates led to errors — records drifted out of sync across files.",
            "No structural way to link a job to its crew, materials, invoices, and customer.",
          ],
        },
      ],
    },
    {
      id: "research-audit",
      number: "03",
      label: "RESEARCH & AUDIT",
      title: "Mapping the workflow before opening a design tool",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "I mapped the existing Excel system end-to-end — every sheet of job actions and services, the data it held, and how teams moved between them. Customer and job records sat in QuickBooks; everything that moved a job lived in at least five disconnected sheets, with no structure or links back to the job.",
          ],
        },
        {
          type: "keyValue",
          title: "What a single job required across the spreadsheet system",
          rows: [
            { label: "Job tracker sheet", value: "Status updated manually" },
            { label: "Crew schedule sheet", value: "Separate from job record" },
            { label: "Materials & inventory sheet", value: "No link to job or cost" },
            { label: "Invoice & payments sheet", value: "Updated ad-hoc, prone to gaps" },
            { label: "Customer info sheet", value: "Duplicated across records" },
          ],
        },
      ],
    },
    {
      id: "approach",
      number: "04",
      label: "APPROACH",
      title: "How people actually worked, not what was documented",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Stakeholder walkthroughs with every role surfaced the workarounds and mental shortcuts. Three findings shaped everything that followed.",
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
              detail: "First contact → handoff",
              questions: [
                "Once you close a deal, how do you know it actually moved forward?",
                "What do you check before telling a homeowner what happens next?",
                "Where do you look when a customer calls asking for an update?",
              ],
            },
            {
              role: "Back Office",
              detail: "Materials, audits, commission",
              questions: [
                "Walk me through everything you touch after a job is submitted.",
                "How do you know a job is ready for you to act on?",
                "What do you keep in a spreadsheet that the CRM doesn't hold?",
              ],
            },
            {
              role: "Project Managers",
              detail: "Scheduling, crews, inspection",
              questions: [
                "How do you decide which job to schedule next?",
                "When a job stalls, how do you find out — and from whom?",
                "What would you need to see the moment you open a job?",
              ],
            },
          ],
        },
        {
          type: "callout",
          eyebrow: "THE GUIDING QUESTION",
          title:
            "How might we give every role a shared, reliable view of a job without adding complexity to their workflow?",
        },
        {
          type: "insightCards",
          items: [
            {
              number: "1",
              title: "Linked data lived in people's heads, not in the system",
              description:
                "Users kept a mental map of which job linked to which customer, crew, invoice, and material order. There was no structural relationship between records — any absence or staff change created immediate knowledge gaps and risk of error.",
            },
            {
              number: "2",
              title: "Every update was a separate manual action across multiple files",
              description:
                "There were no triggers or linked fields. Updating a job meant independently editing cells across multiple sheets. Small inconsistencies compounded quickly — no one could be sure a record reflected the current state of a job.",
            },
            {
              number: "3",
              title: "Each role had a different relationship to the same job data",
              description:
                "Sales reps needed customer and status context. Project managers needed crew and materials. Office staff needed invoices and payments. Executives needed an overview. All of these users were touching the same job data but had no shared, unified view of it.",
            },
          ],
        },
      ],
    },
    {
      id: "solution",
      number: "05",
      label: "SOLUTION",
      title: "Make the Job Detail page where work happens",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "A job's customer and core details come straight from QuickBooks, while every service that used to live in Excel — orders, crews, fees, PM work, invoices — is pulled in and categorized under Job Info. The Job Details page works like a home screen for the job, not a flat form: open it and every answer is one place away.",
          ],
        },
        {
          type: "keyValue",
          rows: [
            {
              label: "Visibility",
              value:
                'Anyone should answer "where is this job and what happens next?" in under five seconds.',
            },
            {
              label: "Sequence",
              value: "The operational lifecycle has a real order. The interface should reflect it.",
            },
            {
              label: "Containment",
              value:
                "Everything tied to a job — documents, notes, requests, estimates, photos — lives inside the job.",
            },
          ],
        },
        {
          type: "image",
          image: {
            src: "/images/work/job-module.webp",
            alt: "The redesigned Job Detail page with the Job Cycle pipeline pinned to the top",
          },
          caption:
            "The redesigned Job Detail page, with the Job Cycle pipeline pinned to the top.",
        },
        {
          type: "prose",
          paragraphs: [
            "The first version captured everything as a feed — every event timestamped, with a manual status dropdown on top. It looked organized and shipped fast. But once live, usage data showed it was documenting jobs, not moving them.",
          ],
        },
        {
          type: "stat",
          stats: [
            { value: "68%", caption: "of job opens ended with the user still checking the spreadsheet" },
            { value: "5.2 days", caption: "average time a job sat at a stage with no recorded next action" },
            { value: "1 in 3", caption: "jobs had a status that disagreed with the latest feed entry" },
            { value: "9 / 12", caption: "users couldn't name the next step without calling the office" },
          ],
        },
        {
          type: "quote",
          quote: "I can see everything that happened. I still can't tell you what to do next.",
          attribution: "Field usability interview, Priority Roofing",
        },
        {
          type: "prose",
          paragraphs: [
            'The feed answered "what is this job?" but never "what happens next, and whose move is it?" so teams kept the spreadsheet open beside it, and the problem we set out to solve was still unsolved.',
          ],
        },
        {
          type: "keyValue",
          title: "The approach the data pointed to",
          rows: [
            {
              label: "Make it forward-looking",
              value: 'Stop logging what happened and start surfacing the next action — promote "Next Step" to a first-class field.',
            },
            {
              label: "One source of truth",
              value: "Derive status from the pipeline itself, retiring the manual dropdown so state can never disagree with reality.",
            },
            {
              label: "Assign every stage",
              value: "Give each of the seven stages a single clear owner, so handoffs are explicit and nothing stalls unseen.",
            },
          ],
        },
        {
          type: "image",
          image: {
            src: "/images/work/job-module.webp",
            alt: "The final solution — a seven-stage pipeline",
          },
          caption: "The final solution — a seven-stage pipeline.",
        },
        {
          type: "prose",
          paragraphs: [
            'The feed became a horizontal pipeline of the seven real operational stages, rendered as a stepper across the top of every job. The current stage is unmistakable, "Next Step" is promoted to a first-class field, and each stage carries a single clear owner.',
          ],
        },
      ],
    },
    {
      id: "impact",
      number: "06",
      label: "IMPACT",
      title: "Jobs that sat silently in a spreadsheet became visible",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            'Bottlenecks at "Audit Work Order" surfaced operational issues leadership didn\'t know they had. The qualitative shift mattered as much as the numbers: the work finally had a single, shared home.',
          ],
        },
        {
          type: "stat",
          stats: [
            { value: "100%", caption: "reduction in spreadsheet dependency across Back Office & PM teams" },
            { value: "40%", caption: "faster job coordination, Sales handoff to first Back Office action" },
            { value: "3 wks", caption: "to daily adoption across Back Office and Project Manager roles" },
            { value: "min → sec", caption: "to locate a contract or insurance scope inside the job" },
          ],
        },
      ],
    },
  ],
  keyDecisions: [
    {
      title: "Job Cycle as a stepper, not a checklist",
      problem: "How do we visually represent the operational lifecycle?",
      decision:
        "Horizontal stepper. Its linearity communicates sequence at a glance, and placing it atop every Job Detail screen makes the workflow the frame the user reads everything else through. Stages stay re-openable for jobs that kick back.",
    },
    {
      title: '"Next Step" as a first-class field',
      problem:
        "Users opened the job to find out what to do next — the CRM made them deduce it from status.",
      decision:
        "Hybrid. The next step is computed from the Job Cycle by default, but the right roles can override it when reality diverges — reliable in the 90% case, with room for the edge cases.",
    },
    {
      title: "Categorize post-submittal work under Job Info",
      problem:
        "After a job was submitted, the work it generated — material orders, scheduling, audits, COC, commission — had nowhere structured to live, so it spilled back into spreadsheets.",
      decision:
        "Everything a job produces after submittal is grouped under a single Job Info area, organized by category instead of scattered fields so the record grows with the job rather than sprawling across files.",
    },
    {
      title: "Sync customer & job info from QuickBooks, own the operations",
      problem:
        "Customer and job information lived in QuickBooks and the team trusted it — duplicating or replacing it would create two sources of truth and a political fight.",
      decision:
        "One-way sync. Customer and job details flow in from QuickBooks as read-only fields, while every operational service that used to live in Excel — materials, crew, fees, PM, invoicing — moves into the Job module the CRM owns.",
    },
  ],
  nextProject: {
    href: "/work/ai-proposal-builder",
    eyebrow: "AI ENABLED PROPOSAL BUILDER",
    title: "AI-Enabled Proposal Builder, From Roof Inspection to Proposal",
    description:
      "Extending the CRM into the sales side of the job: a native proposal system with an AI editor at its core, so a rep never has to leave the CRM to sell a job.",
    image: {
      src: "/images/work/proposal-builder.webp",
      alt: "AI-enabled roofing proposal builder interface",
    },
  },
};

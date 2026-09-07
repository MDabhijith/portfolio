import type { CaseStudy } from "../types";

export const jobModuleRedesign: CaseStudy = {
  slug: "job-module-redesign",
  category: "Roofing CRM Job Management",
  client: "Priority Roofing",
  year: "2025",
  title:
    "Turning a Plain Job Record Into a Screen Teams Actually Work From",
  subtitle:
    "We built Priority Roofing a CRM from scratch, then rebuilt its plain Job Details page into a real workflow, one teams could run a job from instead of just reading about it.",
  meta: [
    { label: "Company", value: "Priority Roofing (USA)" },
    { label: "Timeline", value: "Jun 2025 - 3 weeks" },
    { label: "Team", value: "Developers, Stakeholders, Tester, Product Designer" },
  ],
  heroImage: {
    src: "/images/work/job-module-banner.png",
    alt: "The Priority Roofing CRM job list on a laptop, showing customers, job types, statuses, and sales reps",
  },
  sections: [
    {
      id: "background",
      number: "01",
      label: "BACKGROUND",
      title: "The CRM Launched. The Job Page Stayed Simple.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Priority Roofing used to run on two disconnected systems: customer and job info in QuickBooks, everything else, material orders, crew details, fees, invoices, scattered across a stack of Excel sheets. We built them a CRM to tie it together, and it shipped.",
            "To hit that launch date, one screen stayed intentionally simple: the Job Details page, the record every role opens dozens of times a day. It shipped as a plain record, the right fields in one place, nothing more. That was a deliberate tradeoff to launch on time, not an oversight. The plan was always to come back to it once the CRM was live and real usage existed to design from.",
          ],
        },
        {
          type: "browserGallery",
          images: [
            {
              src: "/images/work/sheets-mockup.webp",
              alt: "Spreadsheet tracking job and location data across multiple tabs",
            },
            {
              src: "/images/work/sheets-mockup-transforms.webp",
              alt: "Spreadsheet transform tab converting raw job submittal fields into structured data",
            },
            {
              src: "/images/work/sheets-mockup-office-inputs.webp",
              alt: "Spreadsheet office inputs tab tracking GAF warranty, material orders, and crew invoice details",
            },
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
      title: "The Plain Record Didn't Hold Up",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Once the CRM was live, the Job Details page did exactly what it was built to do: show a job's fields in one place. What it didn't do was tell anyone what to do next. Status, ownership, sequence, the things that actually move a job forward, were still something people worked out from memory or a spreadsheet on the side.",
          ],
        },
        {
          type: "list",
          items: [
            "The page showed fields, not progress, there was no sense of where a job actually stood.",
            "A manual status dropdown could say anything, whether or not it matched reality.",
            "Teams kept their old spreadsheets open right next to the CRM, just to know what to do next.",
          ],
        },
        {
          type: "imagePair",
          images: [
            {
              src: "/images/work/job-problem-stress.webp",
              alt: "Back-office staff working heads-down at a desk piled with paperwork",
            },
            {
              src: "/images/work/job-problem-spreadsheet.webp",
              alt: "A laptop showing the roofing catalog spreadsheet the team ran jobs from",
            },
          ],
        },
      ],
    },
    {
      id: "research-audit",
      number: "03",
      label: "RESEARCH & AUDIT",
      title: "Auditing How the Live CRM Was Actually Being Used",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "This wasn't a blank-canvas redesign, it started with an audit of how people actually used the live CRM, spreadsheets and all. Customer and job records now sat correctly in the CRM. Everything that actually moved a job forward still lived in habits and side-spreadsheets nobody had been able to retire.",
          ],
        },
        {
          type: "keyValue",
          variant: "card",
          title: "What the Live Job Page Still Didn't Capture",
          rows: [
            { label: "Job tracker sheet", value: "Still updated manually, alongside the CRM" },
            { label: "Crew schedule sheet", value: "Still kept separate from the job record" },
            { label: "Materials & inventory sheet", value: "Still no link to the job or its cost" },
            { label: "Invoice & payments sheet", value: "Still updated ad-hoc, prone to gaps" },
            { label: "Customer info sheet", value: "Still duplicated outside the CRM" },
          ],
        },
      ],
    },
    {
      id: "approach",
      number: "04",
      label: "APPROACH",
      title: "How People Actually Worked, Not What Was Documented",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Walking through each role's actual day, now that the CRM was part of it, surfaced the workarounds and shortcuts people relied on to get real work done. Three findings shaped everything that followed.",
          ],
        },
        {
          type: "qaPanel",
          eyebrow: "STAKEHOLDER SESSION",
          meta: "3 roles · 9 questions",
          description:
            "I sat with each role and walked their actual day, not a documented process, anchoring every session on a few core questions about how work really moved.",
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
                "When a job stalls, how do you find out, and from whom?",
                "What would you need to see the moment you open a job?",
              ],
            },
          ],
        },
        {
          type: "callout",
          eyebrow: "THE GUIDING QUESTION",
          title:
            "How do we give every role one reliable view of a job, without making their day harder?",
        },
        {
          type: "numberedFindings",
          items: [
            {
              number: "1",
              title: "The links between records only lived in people's heads",
              description:
                "People kept a mental map of which job linked to which customer, crew, invoice, and material order, because nothing in the system actually connected them. Any absence or staff change created an immediate knowledge gap and a real risk of error.",
            },
            {
              number: "2",
              title: "Every update meant editing several files by hand",
              description:
                "Nothing was linked or automatic. Updating a job meant editing cells across multiple sheets separately, and small mistakes added up fast. No one could be sure a record reflected the real, current state of a job.",
            },
            {
              number: "3",
              title: "Every role needed something different from the same job",
              description:
                "Sales reps needed customer and status info. Project managers needed crew and materials. Office staff needed invoices and payments. Everyone touched the same job data, but nobody had one shared view of it.",
            },
          ],
        },
      ],
    },
    {
      id: "solution",
      number: "05",
      label: "SOLUTION",
      title: "Make the Job Detail Page Where Work Actually Happens",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "A job's customer and core details now come straight from QuickBooks, while everything that used to live in Excel, orders, crews, fees, PM work, invoices, is pulled in and grouped under Job Info. The Job Details page works like a home screen for the job, not a flat form: open it, and every answer is one click away.",
          ],
        },
        {
          type: "keyValue",
          rows: [
            {
              label: "Visibility",
              value:
                'Anyone should be able to answer "where is this job, and what happens next?" in under five seconds.',
            },
            {
              label: "Sequence",
              value: "A job moves through real stages in a real order. The interface should show that order.",
            },
            {
              label: "Containment",
              value:
                "Everything tied to a job, documents, notes, requests, estimates, photos, should live inside the job.",
            },
          ],
        },
        {
          type: "image",
          image: {
            src: "/images/work/job-detail-redesigned.webp",
            alt: "The redesigned Job Detail page, customer and job info up top, with the Job Cycle activity pipeline below",
          },
          caption:
            "The redesigned Job Detail page, with the Job Cycle pipeline pinned to the top.",
        },
        {
          type: "prose",
          paragraphs: [
            "The first redesign attempt logged everything as a feed, every event timestamped, with a manual status dropdown on top. It looked organized and shipped fast. But once it was live, the usage data showed it was recording jobs, not moving them forward, a better-dressed version of the same plain record.",
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
            'The feed answered "what is this job?" but never "what happens next, and whose job is it?" So teams kept the spreadsheet open next to it anyway, and the problem we set out to fix was still unfixed.',
          ],
        },
        {
          type: "keyValue",
          title: "What the Data Told Us to Do",
          rows: [
            {
              label: "Look forward, not back",
              value: 'Stop logging what already happened and start showing the next action. Make "Next Step" its own clear field.',
            },
            {
              label: "One true status",
              value: "Get rid of the manual dropdown. Read status straight from the pipeline, so it can never disagree with reality.",
            },
            {
              label: "Give every stage an owner",
              value: "Each of the seven stages gets one clear owner, so handoffs are obvious and nothing stalls without anyone noticing.",
            },
          ],
        },
        {
          type: "image",
          image: {
            src: "/images/work/job-detail-pipeline.webp",
            alt: "The final Job Details page with the seven-stage pipeline stepper across the top and Job Info below",
          },
          caption: "The final solution, a seven-stage pipeline.",
        },
        {
          type: "prose",
          paragraphs: [
            'The feed became a horizontal pipeline of the seven real stages a job goes through, shown as a stepper across the top of every job. The current stage is unmistakable, "Next Step" is its own clear field, and each stage has one clear owner.',
          ],
        },
      ],
    },
    {
      id: "impact",
      number: "06",
      label: "IMPACT",
      title: "Jobs That Sat Silently in a Spreadsheet Became Visible",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            'Slowdowns at the "Audit Work Order" stage revealed operational problems leadership didn\'t even know they had. But the biggest shift wasn\'t in the numbers: the work finally had one shared home.',
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
      title: "Show the Job Cycle as a Stepper, Not a Checklist",
      problem: "How do we show a job's real stages at a glance?",
      decision:
        "A horizontal stepper. Its left-to-right order shows sequence instantly, and putting it at the top of every Job Detail screen makes it the first thing people read. Stages can still be reopened for jobs that get kicked back.",
      video: {
        src: "/images/work/job-decision-stepper.mp4",
        poster: "/images/work/job-decision-pipeline.webp",
        label:
          "Screencast walking across the seven-stage Job Cycle stepper pinned to the top of a Job Detail page",
        aspect: "2800 / 1520",
      },
    },
    {
      title: 'Give "Next Step" Its Own Field',
      problem:
        "People opened a job to find out what to do next, and the CRM made them guess it from the status.",
      decision:
        "A hybrid. The next step is worked out from the Job Cycle by default, but the right roles can override it when reality doesn't match. Reliable for the normal case, flexible for the exceptions.",
      video: {
        src: "/images/work/job-decision-next-step-vid.mp4",
        poster: "/images/work/job-decision-next-step.webp",
        label:
          "Screencast of a Job Detail page showing the Next Step field surfaced as a first-class value alongside the pipeline",
        aspect: "2800 / 1520",
      },
    },
    {
      title: "Group Everything After Submittal Under Job Info",
      problem:
        "Once a job was submitted, the work it created, material orders, scheduling, audits, invoicing, commission, had nowhere structured to live, so it spilled back into spreadsheets.",
      decision:
        "Everything a job produces after submittal now sits in one Job Info area, grouped by category instead of scattered fields, so the record grows with the job instead of sprawling across files.",
      video: {
        src: "/images/work/job-decision-job-info-vid.mp4",
        poster: "/images/work/job-decision-job-info.webp",
        label:
          "Screencast of the Job Info area grouping a job's post-submittal work, orders, scheduling, audits, commission, by category",
        aspect: "2800 / 1520",
      },
    },
    {
      title: "Sync Customer Info From QuickBooks, Own the Rest",
      problem:
        "Customer and job info lived in QuickBooks and the team already trusted it. Duplicating or replacing it would create two conflicting records and a fight nobody wanted.",
      decision:
        "A one-way sync. Customer and job details flow in from QuickBooks as read-only fields, while everything operational that used to live in Excel, materials, crew, fees, PM work, invoicing, moves into the Job module the CRM owns.",
      image: {
        src: "/images/work/job-decision-quickbooks.webp",
        alt: "The Commission Details view with financials synced alongside QuickBooks",
      },
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

import type { CaseStudy } from "../types";

export const jobModuleRedesign: CaseStudy = {
  slug: "job-module-redesign",
  category: "Roofing CRM Job Management",
  client: "Priority Roofing",
  year: "2025",
  title: "Turning the Job Into an Operational Command Center",
  subtitle:
    "The first version of the Job Module replaced three disconnected tools with a single job record. Once it was live, we went back to the people using it every day, sales, back office, project managers, to see what was working and what wasn't. Their feedback pointed to a clear next step: turn the Job page from a record you read into the command center you run a job from.",
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
      title: "The First Version of the Job Module",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Priority Roofing ran jobs across two disconnected systems: customer and job info in QuickBooks, everything else, material orders, crew details, fees, invoices, scattered across Excel. The first version of the Job Module closed that gap: one CRM, one job record, one place every role could open instead of three.",
            "It shipped with the fields every role needed: customer details, job type, assignments, status. Progress showed as a timeline, a log of what had happened, ordered by date. Job-specific actions, requesting materials, logging a payment, pulling a commission, lived wherever the CRM's general navigation put them, not attached to the job itself.",
          ],
        },
        {
          type: "image",
          image: {
            src: "/images/work/job-crm-list.png",
            alt: "The Priority Roofing CRM Job In List view, showing job address, customer, contact info, and stage",
          },
          caption: "The Job In List view, the first version of the Job Module.",
          aspect: "1458 / 870",
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
        {
          type: "prose",
          paragraphs: [
            "The first version did what it was built to do: replaced the spreadsheets, gave every role one place to look, shipped fast enough to start collecting real usage. It was never meant to be final, it was the baseline the next version would be designed from.",
          ],
        },
      ],
    },
    {
      id: "evaluation",
      number: "02",
      label: "POST-DEPLOYMENT EVALUATION",
      title: "Faster Coordination, Tracked From Week One",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Before the user research that shaped the redesign, we tracked one operational number in week one: how many jobs moved from Pre-Production to Post-Production with a coordinated, on-time handoff, rather than stalling between roles.",
          ],
        },
        {
          type: "pilotSurveyChart",
          scaleNote:
            "% of jobs moving Pre-Production → Post-Production with a coordinated, on-time handoff",
          beforeLabel: "Before launch",
          afterLabel: "After week 1",
          categories: [
            {
              label: "Pre-Production → Post-Production",
              before: 20,
              after: 38,
            },
          ],
          max: 100,
          unit: "%",
          headline: "Faster coordination nearly doubled within the first week.",
          analysis:
            "In week one, the share of jobs moving Pre-Production to Post-Production with a coordinated handoff rose from 20% to 38%, an early sign the module was changing how work moved, ahead of the deeper research that followed.",
        },
      ],
    },
    {
      id: "post-launch-research",
      number: "03",
      label: "POST-LAUNCH RESEARCH",
      title: "We Went Back to the People Using It",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Once the first version had real usage, we went back to the three roles who open a job daily, sales, back office, project managers, to test it against how they actually worked. Two methods ran in parallel: a task-based usability test on the live page, and a pilot survey on what the CRM still didn't do for them.",
          ],
        },
        {
          type: "image",
          image: {
            src: "/images/work/roofing-job-cycle-before.webp",
            alt: "The first version of the Job Details page, with Job Cycle shown as a timestamped activity feed",
          },
          caption: "The first version's Job Cycle, a history-style feed of past events.",
          aspect: "1600 / 868",
        },
        {
          type: "qaPanel",
          eyebrow: "CUSTOMER 1:1 SESSION",
          meta: "3 roles · 9 questions",
          description:
            "I sat with each role and walked their actual experience using the CRM, not the documented process, anchoring each session on questions built from their own feedback.",
          items: [
            {
              role: "Sales Reps",
              detail: "First contact → handoff",
              questions: [
                "Since the CRM launched, how do you check in it whether a deal actually moved forward?",
                "What do you open in the CRM before telling a homeowner what happens next?",
                "When a customer calls for an update, where in the CRM do you look first?",
              ],
            },
            {
              role: "Back Office",
              detail: "Materials, audits, commission",
              questions: [
                "Walk me through everything you do in the CRM after a job is submitted.",
                "How does the CRM tell you a job is ready for you to act on?",
                "What do you still keep in a spreadsheet because the CRM doesn't hold it?",
              ],
            },
            {
              role: "Project Managers",
              detail: "Scheduling, crews, inspection",
              questions: [
                "How does the CRM help you decide which job to schedule next?",
                "When a job stalls, does the CRM tell you, or do you find out some other way?",
                "What would you need the CRM to show you the moment you open a job?",
              ],
            },
          ],
        },
        {
          type: "callout",
          eyebrow: "THE GUIDING QUESTION",
          title:
            "What would it take to make the Job page the one place every role could see the whole cycle, act on it, and never have to leave?",
        },
        {
          type: "numberedFindings",
          items: [
            {
              number: "1",
              title: "The page showed a status. It never showed the cycle",
              description:
                "A rep could see a deal had closed, back office a job submitted, a PM a job scheduled. None could see the rest of the cycle: stages done, stages ahead, or what data belonged to any of them.",
            },
            {
              number: "2",
              title: "Frequent actions took too many clicks to reach",
              description:
                "Calling a customer, pulling directions, adding a calendar hold, fixing an address, small tasks done on almost every job, all lived outside the job, in general navigation. Every session showed the same pattern: leave the job, find the action, come back.",
            },
            {
              number: "3",
              title: "Important job actions were easy to miss",
              description:
                "Requesting a payment, pulling a 3.5% commission, ordering a satellite measurement, these mattered as much as anything else on the job, but nothing in the interface treated them that way, people found them by memory.",
            },
            {
              number: "4",
              title: "Specs and roof context meant leaving the job to find them",
              description:
                "Job specifications and the roof itself were the two pieces of context people reached for most, and both required navigating away from the job, or out to the map.",
            },
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "Four gaps, one shared cause: the page showed information but wasn't built around how people actually worked, in sequence, with frequent actions close at hand and context available when needed. That's the redesign this research set up.",
          ],
        },
      ],
    },
    {
      id: "decisions-goal",
      number: "04",
      label: "DECISIONS & GOAL",
      title: "Five Decisions, One Goal",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Individually, the findings pointed at different parts of the page. Together, they became five decisions, and one shared goal.",
          ],
        },
        {
          type: "titledList",
          variant: "cards",
          items: [
            {
              title: "Replace the history log with an end-to-end Job Cycle.",
              description:
                "A timestamped log said what had happened. It never said where the job stood or what came next.",
              icon: "route",
            },
            {
              title: "Keep Job Details as the anchor.",
              description:
                "People expected Details to be the first thing they saw, and the page they could always return to without losing their place.",
              icon: "anchor",
            },
            {
              title: "Add Quick Actions for the tasks people repeat on every job.",
              description:
                "Calling a customer, getting directions, scheduling a visit, fixing an address, these happened on almost every job, none lived where the job did.",
              icon: "zap",
            },
            {
              title: "Give job-management actions a dedicated, visible place.",
              description:
                "Requesting a payment, pulling a commission, ordering a measurement carried real weight but had no clear place in the interface.",
              icon: "briefcase",
            },
            {
              title: "Surface specs and roof context directly inside the job.",
              description:
                "Specifications and the roof itself were what people reached for most, and both required leaving the job to find them.",
              icon: "mapPin",
            },
          ],
        },
        {
          type: "callout",
          eyebrow: "THE GOAL",
          title:
            "Give the Job page one job: show the whole cycle, and put whatever each stage needs, information, actions, context, right where people are already working.",
        },
      ],
    },
    {
      id: "redesign",
      number: "05",
      label: "THE REDESIGN",
      title: "The Job Page, Rebuilt Around How People Actually Work",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "This wasn't about adding more surface area. It was about putting the right thing, progress, information, frequent actions, management actions, context, exactly where people needed it, and nowhere else. Six pieces came out of that.",
          ],
        },
        {
          type: "moduleHeader",
          title: "End-to-End Job Cycle",
          description:
            "The history-style log became a horizontal pipeline of the real stages a job moves through, stage done, current, ahead, always visible across the top of the page. Instead of reading backward through events, the cycle just shows it.",
        },
        {
          type: "video",
          src: "/images/work/job-decision-stepper.mp4",
          poster: "/images/work/job-decision-pipeline.webp",
          label:
            "Screencast walking across the seven-stage Job Cycle stepper pinned to the top of a Job Detail page",
          caption: "The end-to-end Job Cycle, replacing the old event-by-event timeline.",
          aspect: "2800 / 1520",
        },
        {
          type: "moduleHeader",
          title: "Job Details as the Home View",
          description:
            "The page always opens on Details first, customer info, job type, the cycle, all in one view, so nobody has to relocate before starting work. Every other piece, actions, management tools, context, sits inside this same view instead of pulling people away.",
        },
        {
          type: "video",
          src: "/images/work/job-details-home.mp4",
          poster: "/images/work/job-detail-redesigned.webp",
          label:
            "Screencast of the Job Details page, customer and job info up top, with the Job Cycle pipeline below",
          caption: "Job Details stays the anchor view, with everything else built around it.",
          aspect: "2940 / 1602",
        },
        // The Roof Preview screenshot below is a placeholder — that surface is real
        // and shipped, but not yet captured. Swap in a real screenshot when available.
        {
          type: "moduleHeader",
          title: "Actions",
          description:
            "Quick Actions and Job Management live under the same Actions button, grouped by how often each gets used. Quick Actions covers the tasks repeated on nearly every job, Call Customer, Navigate to Location, Create Calendar Event, Edit Job Address. Job Management covers the less frequent, higher-stakes ones, Create Request, Request Payment, 3.5% Commission, Request Satellite Measurement, previously found by memory or not at all.",
        },
        {
          type: "image",
          image: {
            src: "/images/work/job-actions.png",
            alt: "The Actions menu on the Job Details page, grouping Quick Actions and Job Management",
          },
          caption: "The Actions button: Quick Actions and Job Management, grouped in one place.",
          aspect: "1458 / 804",
        },
        {
          type: "moduleHeader",
          title: "Job Specification",
          description:
            "Specs were one of the two pieces of context people reached for most on a job. A direct access point puts them one click from Details, instead of a search through the record.",
        },
        {
          type: "video",
          src: "/images/work/job-specification.mp4",
          label: "Screencast of the Job Specification panel, accessible directly from the Job Details page",
          caption: "Job Specification, one click from Details.",
          aspect: "2940 / 1602",
        },
        {
          type: "moduleHeader",
          title: "Roof Preview From Map View",
          description:
            "The second piece of context people wanted was the roof itself. Roof Preview surfaces it directly inside Map View, so a person scheduling or scoping a job sees the roof without leaving the map.",
        },
        {
          type: "image",
          image: {
            src: "/images/work/job-roof-preview.png",
            alt: "A roof preview shown directly inside Map View for a selected job",
          },
          caption: "Roof Preview, surfaced without leaving Map View.",
          aspect: "2940 / 1600",
        },
        {
          type: "prose",
          paragraphs: [
            "Six pieces, but not six equal priorities. Putting them all on the page at once would just rebuild the original problem with more buttons. Each piece sits at a different level of the same hierarchy.",
          ],
        },
        {
          type: "taggedList",
          variant: "wide",
          items: [
            {
              tag: "PRIMARY CONTEXT",
              tone: "neutral",
              title: "Job Details",
              description:
                "The view everything else is built around. Whatever a person is doing, this is where they start and return to.",
            },
            {
              tag: "JOB PROGRESSION",
              tone: "neutral",
              title: "Job Cycle",
              description:
                "Sits inside Details, always visible, answering where the job stands without needing to be asked.",
            },
            {
              tag: "FREQUENT ACTIONS",
              tone: "neutral",
              title: "Quick Actions",
              description:
                "One tap from Details, for the handful of tasks that come up on nearly every job.",
            },
            {
              tag: "JOB MANAGEMENT",
              tone: "neutral",
              title: "Management actions",
              description:
                "Its own space inside Details, for less frequent but higher-stakes operations.",
            },
            {
              tag: "SUPPORTING CONTEXT",
              tone: "neutral",
              title: "Job Specification & Roof Preview",
              description:
                "Available on demand, right when a decision needs them, not competing for attention otherwise.",
            },
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "Underneath all six is one idea: a job's owner shouldn't have to keep leaving the job to do the job, because switching context is where time and accuracy get lost.",
          ],
        },
        {
          type: "callout",
          eyebrow: "THE DESIGN PRINCIPLE",
          title:
            "Progress, information, frequent actions, management actions, and context should live in one place, because the job someone is working on is that place.",
        },
      ],
    },
    {
      id: "impact",
      number: "06",
      label: "IMPACT",
      title: "Impact",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "The redesign hasn't run its own multi-week evaluation yet, so every projection below traces back to something real. Two numbers come from the shipped UI: every Quick Action or Job Management item is two taps once the Actions menu is open, measured, not guessed. The rest extrapolate from the one real post-launch signal we have: coordinated handoffs closed 22.5% of the gap to their ceiling in week one (20% → 38%), applied as a conservative rate to each baseline metric below.",
          ],
        },
        {
          type: "barChart",
          orientation: "vertical",
          note: "Relative improvement per metric. Measured baselines and shipped-UI values are marked, the rest are projected, most at the week-1 gap-closure rate.",
          unit: "%",
          bars: [
            { label: "Spreadsheet check", value: 85, estimated: true, detail: "68→10%" },
            { label: "Named next step", value: 67, estimated: true, detail: "3→5 of 12" },
            { label: "Steps: payment", value: 67, estimated: true, detail: "6→2" },
            { label: "Steps: call", value: 50, estimated: true, detail: "4→2" },
            { label: "Audit Work Order", value: 50, estimated: true, detail: "3→1.5 days" },
            { label: "Time to next step", value: 24, estimated: true, detail: "38→29 sec" },
          ],
          headline: "Spreadsheet checks saw the sharpest projected drop.",
          analysis:
            "Job Details and Job Info were built specifically to remove the reason people left for a spreadsheet, so that one's projected more aggressively. The two step-count metrics come from the shipped UI, not a guess. The rest apply the same 22.5% gap-closure rate week one actually produced, a conservative basis, not a best case.",
        },
        {
          type: "list",
          items: [
            "3 weeks to daily use by Back Office and Project Managers.",
            "Minutes → seconds to find a contract or insurance scope.",
            "Slowdowns at Audit Work Order became visible, revealing problems leadership didn't know about.",
          ],
        },
      ],
    },
  ],
  nextProject: {
    href: "/work/ai-proposal-builder",
    eyebrow: "AI ENABLED PROPOSAL BUILDER",
    title: "AI-Enabled Proposal Builder, From Roof Inspection to Proposal",
    description:
      "Extending the CRM into the sales side of the job: a native proposal system with an AI editor at its core, so a rep never has to leave the CRM to sell a job.",
    image: {
      src: "/images/work/proposal-builder-card-cover-v2.png",
      alt: "The AI-enabled roofing proposal builder showing a proposal cover page on a laptop against a soft green backdrop",
    },
    themeColor: "#0a331f",
  },
};

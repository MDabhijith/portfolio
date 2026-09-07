import type { CaseStudy } from "../types";

export const relayHub: CaseStudy = {
  slug: "relay-hub",
  category: "AI Business Communication",
  client: "Relay Hub",
  year: "2024",
  title: "One AI Layer for Chat, Documents, and Company Knowledge",
  subtitle:
    "Relay Hub brings chat, documents, and company knowledge into one AI-powered platform, one that only shows people what they're allowed to see.",
  meta: [
    { label: "Company", value: "Relay Hub" },
    { label: "Timeline", value: "2024 - 3 weeks" },
    { label: "Team", value: "Developers, Stakeholders, Tester, Product Designer" },
  ],
  heroImage: {
    src: "/images/work/relay-hub-banner.png",
    alt: "Relay Hub open on a laptop, with a document and an ask-anything chat panel side by side",
  },
  outcomeHighlight: {
    eyebrow: "WHERE THIS IS TODAY",
    summary:
      "AI is built into every conversation, and grounded in the company's own documents, storage, and past discussions, not bolted on as a separate chatbot.",
    stats: [
      {
        value: "AI-native",
        caption:
          "every module reads from and writes to the same AI-grounded knowledge layer",
      },
      {
        value: "Full",
        caption: "system spanning communication, knowledge, and governance",
      },
      {
        value: "3",
        caption: "AI reference modes, internal, external, hybrid",
      },
    ],
  },
  sections: [
    {
      id: "background",
      number: "01",
      label: "BACKGROUND",
      title: "A Company's Knowledge, Scattered Across Every Tool",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "A typical team uses separate tools for chat, for documents, and for AI. Each tool does its own job well, but none of them know about the others, and none of them know the company. The cost shows up in the gaps between tools. An employee asks a question in chat that a document already answered. A useful AI conversation disappears the moment the tab closes. A new hire spends their first weeks just finding where things live. And whenever leadership considered letting AI read company documents, the same question stalled everything: who is it allowed to see, and on whose behalf?",
          ],
        },
        {
          type: "quote",
          quote:
            "Every AI conversation I have is genuinely useful for about ten minutes, and then it's gone. Nobody else on my team ever sees it, and I'll probably ask the same question again next month.",
          attribution: "Stakeholder interview, early discovery",
        },
      ],
    },
    {
      id: "problem",
      number: "02",
      label: "PROBLEM",
      title: "One Root Cause Behind Every Disconnected Tool",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "I researched chat tools, cloud storage, and standalone AI assistants. Each category solved one slice of the problem well. None of them treated knowledge, conversation, security, and AI as one connected system.",
          ],
        },
        {
          type: "insightCards",
          items: [
            {
              number: "01",
              title: "Chat tools hold conversations, not knowledge",
              description:
                "Chat tools are great in the moment. None of them treat a conversation, or a meeting, as something the company can draw on again later.",
            },
            {
              number: "02",
              title: "Documentation is scattered across drives no one tool can see",
              description:
                "Cloud storage and docs tools each hold real, current company documents, but nothing connects a document to the conversation that needed it, or shows it before someone has to go looking.",
            },
            {
              number: "03",
              title: "Knowledge stays trapped inside one-off conversations",
              description:
                "A good answer worked out in a thread or a meeting rarely turns into something the next person can find. It just becomes one more thing to ask about again.",
            },
            {
              number: "04",
              title: "AI assistants don't know the company",
              description:
                "A standalone AI tool knows a lot about the internet and nothing about this company, its policies, its customers, or its own past answers.",
            },
            {
              number: "05",
              title: "Security wasn't built for AI",
              description:
                "Existing permission systems control who can open a file. None of them answer the harder question: what should AI be allowed to say about that file, and to whom?",
            },
          ],
        },
        {
          type: "callout",
          eyebrow: "THE GUIDING QUESTION",
          title:
            "What if a company's AI wasn't a separate tool starting from nothing, but already knew what the company knew, and what it was allowed to say?",
        },
      ],
    },
    {
      id: "research-audit",
      number: "03",
      label: "RESEARCH & AUDIT",
      title: "How Long It Took Each Role to Find an Answer",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "The gap between tools is easy to describe and hard to feel. So instead of auditing the tools, I followed real questions through the company and watched what each role had to do to answer them. The same question cost a different amount of work depending on who was asking, and that difference is where the product needed to focus.",
          ],
        },
        {
          type: "personaSwitcher",
          eyebrow: "WHO THE WORK RUNS THROUGH",
          meta: "3 personas",
          personas: [
            {
              id: "office-hr",
              label: "Office HR",
              name: "Elena Marsh",
              photo: {
                src: "/images/work/persona-relay-hr.webp",
                alt: "Portrait of Elena Marsh, the office HR lead, in a dark blazer",
              },
              role: "Office HR · policy → onboarding",
              demographics: [
                { label: "Age", value: "41" },
                { label: "Location", value: "Austin, TX" },
                { label: "Tools", value: "Chat, docs, drives" },
                { label: "Tech", value: "High, non-technical" },
              ],
              bio: "Owns the policy documents and answers questions about them one thread at a time. The answers are all written down and have been for years; people ask her anyway, because asking her is faster than finding the current version across three drives.",
              motivations: [
                "Wants her time back from questions she has already answered",
                "Being the person new hires trust in their first week",
                "Policy applied consistently rather than remembered differently",
              ],
              goals: [
                "Answer a policy question once and have it stay answered",
                "Point people to the current version, not a stale copy",
                "Get new hires productive without a week of hand-holding",
              ],
              frustrations: [
                "The same five questions arrive every week in five threads",
                "Nobody can tell which copy of a policy is current",
                "A generic AI answers confidently and gets the policy wrong",
              ],
              quote:
                "The answer is written down. It has been written down for two years. People still ask me, because finding it is harder than asking me.",
            },
            {
              id: "research-team",
              label: "Research Team",
              name: "James Holloway",
              photo: {
                src: "/images/work/persona-relay-researcher.webp",
                alt: "Portrait of James Holloway, a research team member, in a light grey suit",
              },
              role: "Research Team · sources → findings",
              demographics: [
                { label: "Age", value: "28" },
                { label: "Location", value: "Austin, TX" },
                { label: "Tools", value: "Drives, docs, AI chat" },
                { label: "Tech", value: "Expert, AI-native" },
              ],
              bio: "Works across long documents and prior findings and already leans on AI for most of it. Every good answer is worked out in a private session that closes and takes the reasoning with it, so the same ground gets covered again next quarter by someone else.",
              motivations: [
                "Doing new work rather than re-deriving old work",
                "Being able to show where a finding came from",
                "Building on what the team already established",
              ],
              goals: [
                "Ask across everything the company knows, not one folder",
                "Keep a useful AI answer where the next person can find it",
                "Stop re-deriving what a colleague already worked out",
              ],
              frustrations: [
                "AI sessions evaporate the moment the tab closes",
                "Source documents live in drives the AI cannot see",
                "No way to tell whether an answer was grounded or invented",
              ],
              quote:
                "I'll spend an hour getting to a genuinely good answer, and next month someone on my team will spend the same hour getting to the same one.",
            },
            {
              id: "manager",
              label: "Manager",
              name: "Tom Whitfield",
              photo: {
                src: "/images/work/persona-relay-manager.webp",
                alt: "Portrait of Tom Whitfield, a manager, in a charcoal blazer",
              },
              role: "Manager · oversight → access",
              demographics: [
                { label: "Age", value: "45" },
                { label: "Location", value: "Austin, TX" },
                { label: "Tools", value: "Chat, summaries, email" },
                { label: "Tech", value: "Moderate, time-poor" },
              ],
              bio: "Needs the state of things without reading everything, and is the person who has to sign off before an AI goes anywhere near company documents. Every proposal to connect the drives stalls on the same unanswered question: what is it allowed to say, and to whom.",
              motivations: [
                "Decisions made on current information, not last week's",
                "Giving the team AI without owning a data-leak incident",
                "Fewer status meetings that exist only to catch up",
              ],
              goals: [
                "See where things stand without chasing four threads",
                "Let the team use AI without opening the whole drive",
                "Trust that an answer respects who asked it",
              ],
              frustrations: [
                "Context arrives as a scroll-back, never as a summary",
                "Permission models cover files, not what AI may say about them",
                "No audit trail for what the AI told whom",
              ],
              quote:
                "I'm not worried about the AI being wrong. I'm worried about it being right to the wrong person.",
            },
          ],
        },
        {
          type: "qaPanel",
          eyebrow: "STAKEHOLDER SESSION",
          meta: "3 roles · 9 questions",
          description:
            "I sat with each role and walked a real question through their actual day, not a documented process, focusing on how the answer was found, kept, and shared.",
          items: [
            {
              role: "Office HR",
              detail: "Policy, onboarding",
              questions: [
                "Walk me through the last policy question someone asked you.",
                "Where does the current version of that answer actually live?",
                "What happens to your answer after you send it?",
              ],
            },
            {
              role: "Research Team",
              detail: "Documents, findings",
              questions: [
                "Show me how you'd answer a question spanning several documents.",
                "What do you do with a good AI answer once you have it?",
                "How would you know if an answer came from our documents or not?",
              ],
            },
            {
              role: "Managers",
              detail: "Oversight, access",
              questions: [
                "How do you catch up on what your team worked out this week?",
                "What would have to be true before AI could read company files?",
                "Who decides what the AI is allowed to say, and to whom?",
              ],
            },
          ],
        },
        {
          type: "insightCards",
          items: [
            {
              number: "01",
              title: "The answer existed; finding it cost more than asking",
              description:
                "Almost every question traced back to a document that already had the answer. The problem was never missing content, it was finding it, so the fix had to be a better way in, not more content.",
            },
            {
              number: "02",
              title: "Good answers died at the end of a session",
              description:
                "The company's best thinking happened inside private AI chats and one-off threads, and none of it survived in a form the next person could find.",
            },
            {
              number: "03",
              title: "Permission was the gate on everything else",
              description:
                "Every role wanted the same thing, and every manager stalled on the same question. Until AI access could be scoped per person, no amount of usefulness would get it approved.",
            },
          ],
        },
        {
          type: "callout",
          eyebrow: "THE GUIDING QUESTION",
          title:
            "What would it take for a question to be answered once, kept where the next person will find it, and shown only to whoever is allowed to see it?",
        },
      ],
    },
    {
      id: "approach",
      number: "04",
      label: "APPROACH",
      title: "Five Decisions, One Idea: an Agent for Every Task",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "The product could have been a chat app with a search bar added on, or a wiki with a chatbot added on. Each decision below was really the same one, made again in a different part of the product: treat knowledge, conversation, and AI as one system, not three.",
          ],
        },
        {
          type: "taggedList",
          variant: "wide",
          items: [
            {
              tag: "01",
              tone: "positive",
              title:
                "Chat, research, and every workspace read from and write to the same shared knowledge layer.",
              description:
                "Every module risked becoming its own silo, the same failure as the tools it replaced.",
            },
            {
              tag: "02",
              tone: "positive",
              title:
                "Every response can pull from and cite the company's own knowledge, not just what a model already knew.",
              description:
                "A generic AI answer is only marginally better than no answer at all.",
            },
            {
              tag: "03",
              tone: "positive",
              title:
                "Every recurring task gets its own agent, set up for that job and its documents.",
              description:
                "One fixed assistant either tried to do every job at once, or fell short on tasks it wasn't built for.",
            },
            {
              tag: "04",
              tone: "positive",
              title:
                "Connect directly to those sources and pull live, instead of copying files into a new system.",
              description:
                "Cloud storage already held the real, current documents.",
            },
            {
              tag: "05",
              tone: "positive",
              title:
                "Any conversation can run two models against the same prompt, side by side, before committing to an answer.",
              description:
                "Picking whichever model answered first risked picking the weaker answer.",
            },
          ],
        },
      ],
    },
    {
      id: "workflow",
      number: "05",
      label: "WORKFLOW AND USERFLOW",
      title: "One Path From a Question to a Grounded Answer",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "An employee opens the agent built for the job, HR, onboarding, research, instead of a generic chat. The question carries their role and access before any search happens, so the agent only pulls from what that person is allowed to see: the Knowledge Base, past answers, and connected drives like Google Drive or Dropbox. For bigger questions, they can run the same prompt against two models side by side and pick the better answer.",
          ],
        },
        {
          type: "workflowTimeline",
          steps: [
            {
              title: "Employee opens a task agent",
              actor: "EMPLOYEE",
              actorTone: "muted",
              description:
                "Instead of a generic chat, they pick the agent built for the job, HR, onboarding, research, or continue an existing thread.",
              tags: ["AI Workspace"],
            },
            {
              title: "Question is scoped to what they can see",
              actor: "SYSTEM",
              actorTone: "accent",
              description:
                "The request carries the employee's role and access before any search happens, it isn't filtered after the fact.",
              tags: ["Role-Based Permissions"],
            },
            {
              title: "Agent retrieves from the Knowledge Base and connected drives",
              actor: "TASK AGENT",
              actorTone: "accent",
              description:
                "The agent pulls only from documents that person is allowed to see, company policy, past answers, files in OneDrive, Google Drive, or Dropbox.",
              tags: ["Knowledge Base", "Cloud Integrations"],
            },
            {
              title: "Two models can be compared before answering",
              actor: "EMPLOYEE",
              actorTone: "muted",
              description:
                "For bigger questions, the employee can run the same prompt against two models side by side and pick the better answer.",
              tags: ["Model Comparison"],
            },
            {
              title: "Answer returns with its source",
              actor: "TASK AGENT",
              actorTone: "accent",
              description:
                "The agent answers in plain language and shows what it drew on, so it reads as grounded, not guessed.",
              tags: ["AI Workspace"],
            },
            {
              title: "Conversation is saved to the right Hub",
              actor: "SYSTEM",
              actorTone: "accent",
              description:
                "The exchange is kept with the project or department it belongs to, so the next person asking the same question finds it instead of starting over.",
              tags: ["Hubs"],
            },
          ],
        },
      ],
    },
    {
      id: "the-system",
      number: "06",
      label: "THE SYSTEM",
      title: "One Knowledge Layer, With an Agent for Every Task",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "The system splits into three parts: where people work day-to-day, where knowledge actually lives, and how collaboration stays governed. Every part feeds the same AI, instead of being three separate products sharing a login screen.",
          ],
        },
        {
          type: "moduleNav",
          groups: [
            {
              eyebrow: "DAILY WORKSPACE",
              count: "Where people work",
              modules: ["AI Workspace"],
            },
            {
              eyebrow: "KNOWLEDGE LAYER",
              count: "Where knowledge lives",
              modules: [
                "Knowledge Base",
                "AI-Powered Knowledge Retrieval",
                "Cloud Integrations",
                "Task Agents",
              ],
            },
            {
              eyebrow: "COLLABORATION AND GOVERNANCE",
              count: "Scoped by team & role",
              modules: [
                "Collaborative Workspaces",
                "Hubs",
                "Role-Based Permissions",
              ],
            },
            {
              eyebrow: "GENERATION QUALITY",
              count: "Weighing output before committing",
              modules: ["Model Comparison"],
            },
          ],
        },
        {
          type: "image",
          image: {
            src: "/images/work/relay-login.webp",
            alt: "The Relay Hub login page, Revolutionizing Business Communication",
          },
          caption: "The Relay Hub login page.",
        },
        {
          type: "moduleHeader",
          eyebrow: "WHAT EACH MODULE DOES",
          title: "AI Workspace",
          description:
            "A chat experience that already feels familiar from modern AI apps, built for a business. A teammate can talk to AI or a colleague in the same thread, continue a conversation across projects, share it with the team, pull in company knowledge, or hand off to a task agent, built to feel like a teammate, not a standalone chatbot.",
        },
        {
          type: "image",
          image: {
            src: "/images/work/relay-workspace.webp",
            alt: "The AI Workspace with a start-new-chat empty state and configured agents",
          },
          caption: "Start a new chat window.",
          aspect: "1600 / 1042",
        },
        {
          type: "moduleHeader",
          title: "Knowledge Base",
          description:
            "The structured home for SOPs, HR policy, onboarding guides, technical docs, research, customer information, and internal process, organized so AI can actually reason over it, not just index it as a pile of files.",
        },
        {
          type: "image",
          image: {
            src: "/images/work/relay-knowledgebase.webp",
            alt: "Chatting against the company knowledge base",
          },
          caption: "Chat Knowledgebase.",
          aspect: "1600 / 1036",
        },
        {
          type: "moduleHeader",
          title: "AI-Powered Knowledge Retrieval",
          description:
            "Chat is the main way employees reach company knowledge. Instead of digging through folders, they ask a plain question and AI finds the relevant information, summarizes it, and answers in context.",
        },
        {
          type: "image",
          image: {
            src: "/images/work/relay-chat.webp",
            alt: "The chat interface comparing two model responses to a policy question",
          },
          caption: "The chat interface.",
          aspect: "1600 / 1038",
        },
        {
          type: "moduleHeader",
          title: "Cloud Integrations",
          description:
            "Direct connections to Google Drive and Dropbox. Instead of duplicating documents into a new system, AI pulls straight from wherever the company already keeps them, respecting each source's own permissions.",
        },
        {
          type: "image",
          image: {
            src: "/images/work/relay-cloud.webp",
            alt: "Connecting Google Drive, Dropbox, and uploading documents",
          },
          caption: "Connect Google Drive, Dropbox, upload document interface.",
          aspect: "1600 / 1040",
        },
        {
          type: "moduleHeader",
          title: "Task Agents",
          description:
            "Instead of one generic assistant, a company sets up agents around its own recurring work: an HR agent for policy questions, an onboarding agent, a research agent. Each one is built for its task and scoped to the same permissions and documents as the person asking.",
        },
        {
          type: "image",
          image: {
            src: "/images/work/relay-agents.webp",
            alt: "The agent management module for configuring task agents",
          },
          caption: "Agent management.",
          aspect: "1600 / 1042",
        },
        {
          type: "moduleHeader",
          title: "Hubs",
          description:
            "Dedicated spaces set up per project, a research hub, a client hub, any recurring body of work. Each one holds its own chats, documents, and agents, so context stays contained to what that project needs.",
        },
        {
          type: "image",
          image: {
            src: "/images/work/relay-hubs.webp",
            alt: "The hub management module for per-project spaces",
          },
          caption: "Hub management module.",
          aspect: "1600 / 1032",
        },
        {
          type: "moduleHeader",
          title: "Model Comparison",
          description:
            "Two models can run against the same prompt side by side, so a team can compare answers directly and pick the better one before committing.",
        },
        {
          type: "image",
          image: {
            src: "/images/work/relay-model-comparison.webp",
            alt: "Two models answering the same prompt side by side for comparison",
          },
          caption: "Multiple model comparison.",
          aspect: "1600 / 1032",
        },
      ],
    },
    {
      id: "impact",
      number: "07",
      label: "IMPACT",
      title: "What This Is Worth So Far, Measured Where It Counts",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "This is a working product, not a finished launch. The core flow is built and in use, and we're still refining it. So the honest version of \"impact\" here is a status report: what's shipped, what's being sharpened now, and what's still ahead.",
          ],
        },
        {
          type: "statCards",
          items: [
            { tag: "EFFICIENCY", value: "~60% fewer tool switches" },
            { tag: "SPEED", value: "2x faster policy answers" },
            { tag: "ONBOARDING", value: "~3 weeks faster ramp" },
            { tag: "RETENTION", value: "Conversations retained" },
          ],
        },
        {
          type: "titledList",
          eyebrow: "WHAT WE'VE LEARNED SO FAR",
          items: [
            {
              title:
                "Knowledge has to be the center, or the product just becomes another silo",
              description:
                "Early versions treated the Knowledge Base as just one module among many. Once it became the shared foundation every other module read from, the product stopped feeling like a bundle of separate features.",
            },
            {
              title:
                "Trustworthy AI is a UX problem before it is a model problem",
              description:
                "The biggest factor in whether people trusted an AI answer wasn't accuracy alone. It was whether they could see what the answer was based on.",
            },
            {
              title: "Permission has to live inside retrieval, not just at login",
              description:
                "Treating access control as something added after the AI works undersells how central it is. Permission became part of every search itself, not a filter added to the response afterward.",
            },
          ],
        },
      ],
    },
  ],
  nextProject: {
    href: "/work/ar-management",
    eyebrow: "HEALTHCARE REVENUE RECOVERY",
    title: "AR Management: Closing the Insurance Communication Gap",
    description:
      "An add-on Accounts Receivable module built into a patient management system, giving the AR team one place to track claims, communicate with insurers, and recover stuck revenue.",
    image: {
      src: "/images/work/ar-card-cover.webp",
      alt: "The AR Management analytics dashboard, showing claim vs. paid trends, top denied reasons and top CPT codes paid",
    },
  },
};

import type { CaseStudy } from "../types";

export const relayHub: CaseStudy = {
  slug: "relay-hub",
  category: "AI Business Communication",
  client: "Relay Hub",
  year: "2024",
  title: "Relay Hub: An AI-Powered Business Communication Platform",
  subtitle:
    "An AI-first business communication platform unifying chat, documents, and knowledge, scoped by what it's allowed to see.",
  meta: [
    { label: "Company", value: "Relay Hub" },
    { label: "Timeline", value: "2024 - 3 weeks" },
    { label: "Team", value: "Developers, Stakeholders, Tester, Product Designer" },
  ],
  heroImage: {
    src: "/images/work/relay-hero.webp",
    alt: "Relay Hub open on a laptop, with a document and an ask-anything chat panel side by side",
  },
  outcomeHighlight: {
    eyebrow: "WHERE THIS IS TODAY",
    summary:
      "An AI layer built into every conversation, grounded in the company's own documents, storage, and past discussions, not a chatbot bolted onto a workspace.",
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
      title: "A company's knowledge, spread across every tool it uses",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "A typical team runs its day across separate tools for talk, for documentation, and for anything that needs an AI to think it through. Each tool does its one job well. None of them know the others exist, and none of them know the company. The cost of that isn't visible in any single tool. It shows up in the gaps between them. An employee asks a question in chat that was already answered in a doc they never saw. An AI conversation produces a genuinely useful answer, then evaporates the moment the tab closes, because nothing carries it into the next person's context. A new hire spends their first weeks discovering where things live rather than doing the job they were hired for. And every time leadership considered letting AI actually touch company documents, the same question stalled the conversation: who is it allowed to see, and on whose behalf?",
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
      title: "Disconnected by design, one root cause",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Competitive research into chat tools, cloud storage, and standalone AI assistants confirmed the shape of the gap: every category solved one slice of this well, and none of them treated knowledge, conversation, security, and AI as parts of the same system.",
          ],
        },
        {
          type: "insightCards",
          items: [
            {
              number: "01",
              title: "Chat tools hold conversations, not knowledge",
              description:
                "Chat tools are excellent at the moment of talking. None of them treat a conversation, or a meeting, as something the organization should be able to draw on later.",
            },
            {
              number: "02",
              title: "Documentation is scattered across drives no one tool can see",
              description:
                "Cloud storage and docs tools each store real, current company documents, but nothing connects a document to the conversation that needed it, or surfaces it before someone has to go looking.",
            },
            {
              number: "03",
              title: "Knowledge stays trapped inside one-off conversations",
              description:
                "A genuinely good answer, worked out in a thread or a meeting, rarely turns into something the next person can find. It just becomes one more thing to ask about again.",
            },
            {
              number: "04",
              title: "AI assistants answer generically, not organizationally",
              description:
                "A standalone AI tool is fluent about the internet and knows nothing about this company, its policies, its customers, its own past answers.",
            },
            {
              number: "05",
              title: "Security was never designed for AI to have an opinion",
              description:
                "Existing permission models govern who can open a file. None of them were built to answer the harder question of what an AI should be allowed to say about that file, and to whom.",
            },
          ],
        },
        {
          type: "callout",
          eyebrow: "THE GUIDING QUESTION",
          title:
            "What if a company's AI wasn't a separate tool answering from nothing, but a layer that already knew what the company knew, and what it was allowed to say?",
        },
      ],
    },
    {
      id: "approach",
      number: "03",
      label: "APPROACH",
      title: "Six decisions, one idea: an agent for every task",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "The product could have been a chat app with a search bar bolted on, or a wiki with a chatbot bolted on. Each decision below was really the same one, made again in a new part of the product: treat knowledge, conversation, and AI as one system, never three.",
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
                "Chat, research, and every workspace read from and write to one shared knowledge layer.",
              description:
                "Every module risked becoming its own silo, the same failure as the tools it replaced.",
            },
            {
              tag: "02",
              tone: "positive",
              title:
                "Every response can retrieve and cite the company's own knowledge, not just what a model already knew.",
              description:
                "A generic AI answer is only marginally better than no answer at all.",
            },
            {
              tag: "03",
              tone: "positive",
              title:
                "Every recurring task type gets its own configured agent, scoped to that job and its documents.",
              description:
                "A single fixed assistant either tried to do every job at once, or fell short on tasks it wasn't built for.",
            },
            {
              tag: "04",
              tone: "positive",
              title:
                "Connect to those sources directly and retrieve live, instead of copying files into a new system of record.",
              description:
                "Cloud storage already held the real, current documents.",
            },
            {
              tag: "05",
              tone: "positive",
              title:
                "Any conversation can run two models against the same prompt, side by side, before committing to an answer.",
              description:
                "Settling for whichever model answered first risked settling for the weaker generation.",
            },
          ],
        },
      ],
    },
    {
      id: "workflow",
      number: "04",
      label: "WORKFLOW AND USERFLOW",
      title: "One continuous path: a question to a grounded, permissioned answer",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "An employee opens the agent built for the job, HR, onboarding, research, rather than a generic chat. The question carries their role and access scope before any retrieval happens, so the agent pulls only from what that person is allowed to see: the Knowledge Base, past answers, and connected drives like Google Drive or Dropbox. For higher-stakes questions, they can run the same prompt against two models side by side and pick the stronger answer.",
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
              title: "Question is scoped to a permission set",
              actor: "SYSTEM",
              actorTone: "accent",
              description:
                "The request carries the employee's role and access scope before any retrieval happens, not as a filter applied after.",
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
                "For higher-stakes questions, the employee can run the same prompt against two models side by side and pick the stronger generation.",
              tags: ["Model Comparison"],
            },
            {
              title: "Answer returns with its source",
              actor: "TASK AGENT",
              actorTone: "accent",
              description:
                "The agent responds in plain language and cites what it drew on, so the answer reads as grounded rather than guessed.",
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
      number: "05",
      label: "THE SYSTEM",
      title: "One shared knowledge layer, an agent built for every task",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "The information architecture splits into where people work day-to-day, where knowledge actually lives, and how collaboration stays governed, every layer feeding the same AI context rather than three separate products sharing a login screen.",
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
            "A chat experience deliberately familiar from modern LLM interfaces, extended into a business environment. A teammate can talk to AI or to a colleague in the same thread, continue a conversation across projects, share it with the team, reference company knowledge, or hand off to a task agent set up for that kind of question, built to feel like a business teammate rather than a standalone chatbot.",
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
            "The structured home for SOPs, HR policy, onboarding guides, technical documentation, research, customer information, and internal process, organized so AI can reason over it directly rather than just index it as a pile of files.",
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
            "Chat is the primary way employees reach company knowledge. Instead of navigating folders, they ask a plain-language question and AI retrieves the relevant information, summarizes it, and answers in context, turning document management into conversational discovery.",
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
            "Direct connections to Google Drive and Dropbox. Rather than duplicating documents into a new system of record, AI retrieves straight from wherever the company already keeps them, respecting each source's own access permissions.",
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
            "Instead of one generic assistant, a company configures agents around its own recurring work, an HR agent for policy questions, an onboarding agent, a research agent, each one instructed for its task and scoped to the same permissions and documents as the person asking, so business communication runs through the agent built for that job rather than a single catch-all bot.",
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
            "Dedicated spaces set up per project, a research hub, a client hub, any recurring body of work, each holding its own chats, documents, and agents so context stays contained to what that project actually needs.",
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
            "Two models can run against the same prompt side by side, so a team can weigh outputs directly and choose the stronger generation before committing to an answer.",
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
      number: "06",
      label: "IMPACT",
      title: "What agents built for the job are worth, measured where it counts.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "This is a working product, not a finished launch. It's in the product stage. The core flow is built and in use, and we're actively refining it, so the honest version of \"impact\" here is a status report: what's shipped, what's being sharpened right now, and what's still ahead.",
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
                "Early explorations treated Knowledge Base as one module among several. Once it became the shared substrate every other module read from, the product stopped feeling like a bundle of features.",
            },
            {
              title:
                "Trustworthy AI is a UX problem before it is a model problem",
              description:
                "The single biggest lever on whether people relied on an AI answer was not accuracy alone. It was whether they could see what it was grounded in and cite it back.",
            },
            {
              title: "Permission has to live inside retrieval, not just at login",
              description:
                "Treating access control as a feature added after the AI works undersells how central it is. Permission scope became an input to every retrieval call, not a filter bolted onto the response afterward.",
            },
          ],
        },
      ],
    },
  ],
  nextProject: {
    href: "/work/roofing-workflow-management",
    eyebrow: "ROOFING CRM",
    title: "A Product-First Approach to Roofing Workflow Management",
    description:
      "Priority Roofing ran its entire operation across QuickBooks, Roofr, and a stack of Excel sheets, none of which talked to each other. We designed and built a single CRM that carries a job from a knock on the door to a paid commission.",
    image: {
      src: "/images/work/roofing-job-list.webp",
      alt: "Priority Roofing CRM job list dashboard",
    },
  },
};

import { Mail, Phone, Bot, Video, ClipboardCheck, MessageCircle } from 'lucide-react';
import { ReactNode } from 'react';

export interface Project {
  title: string;
  category: string;
  description: string;
  solution: string[];
  stats: string[];
  icon: ReactNode;
  color: string;
  image?: string;
  images?: string[];
  videoUrl?: string;
}

export const projectData: Project[] = [
  {
    title: "Customer Support AI Chatbot",
    category: "Customer Support",
    description: "NLP chatbot handling 800+ monthly inquiries with context-aware responses.",
    solution: [
      "Integrated OpenAI for context generation",
      "Automated FAQ handling and routing",
      "Deployed via web widget and messaging platforms"
    ],
    stats: ["85% resolution rate", "800+ monthly inquiries handled", "Instant 24/7 support"],
    icon: <Bot className="text-primary" />,
    color: "from-primary/20: to-background"
  },
  {
    title: "AI Video Clipping System",
    category: "Content Automation",
    description: "Converts long-form video into optimized shorts for YouTube, TikTok & Instagram.",
    solution: [
      "Analyzes long-form video content using AI",
      "Automatically extracts viral-worthy clips",
      "Exports formatted shorts without manual editing"
    ],
    stats: ["10+ videos/week automated", "Zero manual editing", "Cross-platform ready"],
    icon: <Video className="text-primary" />,
    color: "from-primary/20: to-background"
  },
  {
    title: "HR Job Evaluation System",
    category: "Operations",
    description: "AI-powered resume screening & candidate scoring workflow.",
    solution: [
      "Reads incoming resumes and extracts data",
      "Scores applicants against job requirements",
      "Surfaces top candidates automatically"
    ],
    stats: ["Saved 18 hrs/week", "Eliminated bias", "Instant applicant scoring"],
    icon: <ClipboardCheck className="text-primary" />,
    color: "from-primary/20: to-background"
  },
  {
    title: "WhatsApp Booking Bot (Spa)",
    category: "Booking",
    description: "Intelligent booking + reminders via WhatsApp Business API.",
    solution: [
      "Connected WhatsApp Business API to calendar",
      "Automated appointment scheduling conversational flow",
      "Triggered pre-appointment reminders"
    ],
    stats: ["35% fewer no-shows", "24/7 self-service booking", "Improved customer experience"],
    icon: <MessageCircle className="text-primary" />,
    color: "from-primary/20: to-background"
  },
  {
    title: "Content Generation System",
    category: "Marketing",
    description: "Auto-generates blog posts, social copy & marketing content from brand guidelines.",
    solution: [
      "Stored brand voice guidelines in vector database",
      "Generated structured multi-platform content",
      "Drafted directly into CMS for review"
    ],
    stats: ["Scalable content", "Zero extra headcount", "Maintained brand consistency"],
    icon: <Bot className="text-primary" />,
    color: "from-primary/20: to-background"
  },
  {
    title: "Email Management Automation",
    category: "Administration",
    description: "Categorizes & routes 1,000+ weekly emails with 90% accuracy.",
    solution: [
      "Read incoming emails directly from inbox",
      "Categorized by intent and urgency using LLM",
      "Routed to correct department or auto-drafted reply"
    ],
    stats: ["From chaos to zero inbox", "1,000+ weekly emails", "90% categorization accuracy"],
    icon: <Mail className="text-primary" />,
    color: "from-primary/20: to-background"
  }
];

export const processSteps = [
  {
    num: "01",
    title: "Discover",
    desc: "I audit your current operations to identify what's eating your team's time and where AI can step in."
  },
  {
    num: "02",
    title: "Design",
    desc: "I architect a custom automation blueprint tailored to your stack, goals, and budget."
  },
  {
    num: "03",
    title: "Build",
    desc: "I develop, test, and deploy the solution using best-in-class tools — mostly self-hosted to cut your SaaS costs."
  },
  {
    num: "04",
    title: "Optimize",
    desc: "Post-launch, I monitor performance and fine-tune until the system runs like clockwork."
  }
];

export const skills = [
  "AI Workflow Automation",
  "AI Agent Development",
  "API & Webhook Integration",
  "Process Optimization",
  "CRM Automation",
  "Chatbot Development",
  "Marketing Automation",
  "Customer Onboarding Automation",
  "Data Processing & Sync",
  "Self-Hosted System Architecture"
];

export const technicalSkills = {
  automation: ['n8n', 'Make.com', 'Zapier', 'Webhooks', 'REST APIs'],
  ai: ['OpenAI', 'Claude', 'Gemini', 'Prompt Engineering', 'Lovable'],
  crm: ['GoHighLevel', 'HubSpot', 'Klaviyo', 'Manychat'],
  database: ['Airtable', 'Supabase', 'PostgreSQL', 'Google Sheets', 'Notion'],
  comms: ['WhatsApp Business API', 'Slack', 'Google Workspace', 'Meta Ads Manager']
};

export const testimonials = [
  {
    quote: "Emmanuel automated our entire onboarding process. What used to take our team 3 hours now runs by itself.",
    name: "John Doe",
    company: "Acme Corp"
  },
  {
    quote: "Our AI chatbot handles most customer questions now. Response time went from hours to seconds.",
    name: "Jane Smith",
    company: "TechFlow"
  },
  {
    quote: "He didn't just build a workflow — he completely rethought how our operations run.",
    name: "Michael Johnson",
    company: "Growth Agency"
  }
];

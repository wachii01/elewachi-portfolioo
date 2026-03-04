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
    description: "Built intelligent chatbot handling 800+ monthly customer inquiries with natural language understanding and context-aware responses.",
    solution: [
      "Integrated natural language understanding",
      "Delivered context-aware responses",
      "Automated customer inquiry handling"
    ],
    stats: ["800+ monthly inquiries", "Intelligent routing"],
    icon: <Bot className="text-primary" />,
    color: "from-primary/20: to-background"
  },
  {
    title: "AI Video Clipping System",
    category: "Content Automation",
    description: "Developed automated system converting long-form videos into optimized shorts for YouTube Short, TikTok, and Instagram, processing 10+ videos weekly.",
    solution: [
      "Processed long-form videos automatically",
      "Optimized clips for multiple platforms",
      "Streamlined short-form content creation"
    ],
    stats: ["10+ videos processed weekly", "Multi-platform export"],
    icon: <Video className="text-primary" />,
    color: "from-primary/20: to-background"
  },
  {
    title: "HR Job Evaluation System",
    category: "Operations",
    description: "Created AI-powered workflow for automated resume screening and candidate evaluation, reducing hiring team workload by 18 hours per week.",
    solution: [
      "Automated resume screening workflow",
      "Implemented candidate evaluation scoring",
      "AI-powered candidate analysis"
    ],
    stats: ["Reduced workload by 18 hrs/wk", "Automated screening"],
    icon: <ClipboardCheck className="text-primary" />,
    color: "from-primary/20: to-background"
  },
  {
    title: "Content Generation System",
    category: "Marketing",
    description: "Built AI content automation generating blog posts, social media content, and marketing copy based on brand guidelines and SEO parameters.",
    solution: [
      "Generated blog posts & social content",
      "Applied brand guidelines formatting",
      "Integrated SEO parameters automatically"
    ],
    stats: ["Consistent brand voice", "SEO-optimized copy"],
    icon: <Bot className="text-primary" />,
    color: "from-primary/20: to-background"
  },
  {
    title: "UGC Video Generation Platform",
    category: "Content Automation",
    description: "Developed automated system for user-generated content processing and quality control, handling 200+ submissions monthly.",
    solution: [
      "Processed user-generated content",
      "Automated quality control checks",
      "Managed large-scale media submissions"
    ],
    stats: ["200+ submissions monthly", "Automated QC"],
    icon: <Video className="text-primary" />,
    color: "from-primary/20: to-background"
  },
  {
    title: "WhatsApp Chatbot for Spa & Massage",
    category: "Booking",
    description: "Implemented intelligent booking system via WhatsApp Business API with automated appointment reminders and customer service responses.",
    solution: [
      "Integrated WhatsApp Business API",
      "Automated appointment reminders",
      "Handled customer service responses"
    ],
    stats: ["Intelligent booking", "Automated reminders"],
    icon: <MessageCircle className="text-primary" />,
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
  ai: ['OpenAI', 'Claude', 'Gemini', 'Prompt Engineering'],
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

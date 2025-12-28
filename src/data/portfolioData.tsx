import { Mail, Phone, Bot, Video, ClipboardCheck, MessageCircle } from 'lucide-react';
import { ReactNode } from 'react';

export interface Project {
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  stats: string[];
  icon: ReactNode;
  color: string;
}

export const projectData: Project[] = [
  {
    title: "Customer Support AI Agent",
    category: "Ecommerce",
    description: "A smart system that reads incoming emails, classifies them as support-related, and drafts accurate replies using ChatGPT. It only notifies humans for complex issues. Built with Python and OpenAI API.",
    problem: "Customer support teams were drowning in repetitive inquiries, leading to slow response times, burnout, and missed sales opportunities during peak hours.",
    solution: "Built an intelligent email classification system using Python and OpenAI API that automatically reads, categorizes, and drafts responses. Human agents only step in for complex edge cases.",
    stats: ["60% faster response time", "90% accurate drafts", "Scaled support w/o hiring"],
    icon: <Mail className="text-primary" />,
    color: "from-primary/20 to-accent/5"
  },
  {
    title: "Custom AI Assistant (AE)",
    category: "Marketing Agency",
    description: "An AI assistant for Account Executives. It summarizes client emails, updates ClickUp automatically, and pushes key updates to the team via Slack. This reduced admin time by 70%.",
    problem: "Account Executives were spending 70% of their time on non-revenue generating admin tasks like CRM updates and email summaries instead of closing deals.",
    solution: "Created an AI-powered assistant that auto-summarizes client emails, syncs updates to ClickUp, and pushes actionable insights to Slack—freeing AEs to focus on revenue.",
    stats: ["70% drop in admin workload", "Faster client replies", "Team focused on strategy"],
    icon: <Bot className="text-accent" />,
    color: "from-accent/20 to-primary/5"
  },
  {
    title: "Inbound Call AI Agent",
    category: "Service Business",
    description: "Integrated n8n, Retell AI, and Cal.com to create a voice agent that answers calls, handles FAQs, and books appointments 24/7. It handles over 50 calls a day completely autonomously.",
    problem: "High volume of missed calls during off-hours and inability to handle simultaneous inquiries resulted in significant lost revenue and leads.",
    solution: "Deployed a 24/7 voice AI agent using n8n, Retell AI, and Cal.com that answers calls, handles FAQs, and books appointments autonomously—handling 50+ calls daily.",
    stats: ["15+ hours/week saved", "40% increase in leads", "2x faster booking"],
    icon: <Phone className="text-green-400" />,
    color: "from-green-500/20 to-emerald-500/5"
  },
  {
    title: "AI Video Clipping System",
    category: "Content Creation",
    description: "Automated system converting long-form videos into optimized shorts for YouTube, TikTok, and Instagram. Processes 10+ videos weekly with zero manual editing.",
    problem: "Manual editing of long-form content into shorts was inconsistent, time-consuming (4+ hours per video), and expensive to scale with human editors.",
    solution: "Built an automated pipeline that analyzes long-form videos, identifies viral-worthy moments, and exports platform-optimized shorts—zero manual editing required.",
    stats: ["10+ videos processed weekly", "Automated editing workflow", "Multi-platform distribution"],
    icon: <Video className="text-orange-400" />,
    color: "from-orange-500/20 to-red-500/5"
  },
  {
    title: "HR Job Evaluation System",
    category: "HR Tech",
    description: "AI-powered workflow for automated resume screening and candidate evaluation based on specific job criteria.",
    problem: "HR managers spent countless hours manually screening unqualified resumes, creating a bottleneck that delayed the hiring of top talent.",
    solution: "Developed an AI screening workflow that scores resumes against job criteria, filters top candidates, and surfaces qualified applicants instantly to HR.",
    stats: ["18 hours/week saved", "Automated screening", "Instant candidate scoring"],
    icon: <ClipboardCheck className="text-pink-400" />,
    color: "from-pink-500/20 to-rose-500/5"
  },
  {
    title: "WhatsApp Booking Bot",
    category: "Spa & Wellness",
    description: "Intelligent booking system via WhatsApp Business API with automated appointment reminders and customer service responses.",
    problem: "Manual appointment scheduling via text was inefficient, leading to double-bookings, high no-show rates, and delayed customer responses.",
    solution: "Implemented a WhatsApp chatbot using the Business API that handles bookings, sends automated reminders, and provides instant customer support 24/7.",
    stats: ["24/7 Booking capability", "Reduced no-shows", "Instant customer support"],
    icon: <MessageCircle className="text-teal-400" />,
    color: "from-teal-500/20 to-emerald-500/5"
  }
];

export const processSteps = [
  {
    num: "01",
    title: "Audit & Analyze",
    desc: "I don't guess. I dive deep into your current workflows, interviewing your team to identify the true bottlenecks and time-drains."
  },
  {
    num: "02",
    title: "Strategy",
    desc: "Before building, I map out the logic visually. We define clear triggers, actions, and edge-cases to ensure the system is bulletproof."
  },
  {
    num: "03",
    title: "Build & Integrate",
    desc: "This is where the magic happens. I connect your tools (CRM, Email, Slack, AI) using n8n, Make, or custom code to create a seamless flow."
  },
  {
    num: "04",
    title: "Test & Optimize",
    desc: "I stress-test the system to ensure reliability. Once live, I monitor performance and iterate to maximize efficiency and ROI."
  }
];

export const RESUME_CONTEXT = `
Name: Elewachi Emmanuel
Role: AI Automation Expert | n8n Developer
Location: Abuja, Nigeria
Contact: elewachiemmanuel@gmail.com
Summary: AI Automation Specialist with 4+ years of experience building intelligent workflows. Reduces manual workload by 15-20 hours weekly.
Technical Skills: n8n, Make.com, Zapier, Python, OpenAI API, Claude, Gemini, GoHighLevel, Airtable, Google Sheets, SQL.
Experience:
- AI Automation Expert at Thelix Holdings (July 2025 - Present): Automated 60+ processes, reduced costs by 40%.
- AI Automation Expert (Contract) at Personatify (Mar 2025 - Sep 2025): Built AI chatbots, appointment scheduling systems (35% less no-shows).
- Digital Marketing Expert at Naija Essential Mart.
- Social Media Marketing Expert at Africum Wellness.
Freelance Projects:
- AI Video Clipping System: Automated short-form content creation.
- HR Job Evaluation System: Reduced hiring workload by 18 hours/week.
- WhatsApp Chatbot for Spa: Intelligent booking system.
- Content Generation System.
Education: B.Tech in Cyber Security Science, Federal University of Technology, Minna (2023).
Key Projects: Customer Support AI Agent, Custom AI Assistant for Account Executives, Inbound Call AI Agent (Retell AI).
Personality: Professional, innovative, results-driven, helpful.
`;

export const skills = [
  "Zapier", "Make.com", "n8n", "Python", "OpenAI API", 
  "GoHighLevel", "Airtable", "ClickUp", "JavaScript", 
  "Prompt Eng.", "REST APIs", "Webhooks"
];

export const technicalSkills = {
  automation: ['n8n', 'Make.com', 'Zapier', 'API Integration', 'Webhooks', 'Workflow Automation'],
  ai: ['OpenAI', 'Claude', 'Gemini', 'AI Agent Dev', 'Prompt Engineering', 'Chatbot Dev', 'Lovable'],
  crm: ['GoHighLevel (GHL)', 'HubSpot', 'Klaviyo', 'Manychat', 'CRM Automation'],
  database: ['Airtable', 'Google Sheets', 'Notion', 'PostgreSQL', 'Supabase', 'Slack', 'Meta Ads']
};

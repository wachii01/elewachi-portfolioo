import { technicalSkills } from '@/data/portfolioData';

// Grid of tools — using simple-icons CDN + wikimedia for reliable SVGs
const toolGrid = [
  // Row 1
  { name: 'n8n', icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/N8n-logo-new.svg' },
  { name: 'Zapier', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/zapier.svg', invert: true },
  { name: 'Make.com', icon: 'https://images.ctfassets.net/qqlj6g4ee76j/2gVFl0AzRYuWaFOEm79BK0/4e02e0cff1599f1f3cb4f3f39a97e3e0/make-logo-mark.svg' },
  { name: 'OpenAI', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg', invert: true },
  { name: 'Claude AI', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/anthropic.svg', invert: true },
  // Row 2
  { name: 'GoHighLevel', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gohighlevel.svg', invert: true },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazonwebservices.svg', invert: true },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  // Row 3
  { name: 'Google', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg' },
  { name: 'HubSpot', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/hubspot.svg', invert: true },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg', invert: true },
  { name: 'Notion', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/notion.svg', invert: true },
  { name: 'Gmail', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gmail.svg', invert: true },
  // Row 4
  { name: 'WhatsApp', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/whatsapp.svg', invert: true },
  { name: 'Telegram', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/telegram.svg', invert: true },
  { name: 'Slack', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg' },
  { name: 'Softr', icon: 'https://softr.io/wp-content/uploads/2023/02/softr-logo-blue.svg' },
  { name: 'Antigravity', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googlegemini.svg', invert: true },
  // Row 5
  { name: 'Airtable', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/airtable.svg', invert: true },
  { name: 'Manychat', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/manychat.svg', invert: true },
  { name: 'Microsoft', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoft.svg', invert: true },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'Klaviyo', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/klaviyo.svg', invert: true },
];

const categoryLabels: Record<string, string> = {
  automation: 'Automation & Integration',
  ai: 'AI & Intelligence',
  crm: 'CRM & Marketing',
  database: 'Data & Storage',
  comms: 'Communication',
};

const ToolStackSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-background" id="tools">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <span className="text-muted-foreground text-sm tracking-widest uppercase">Tech Stack</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16">
          Tech Stack & Integrations
        </h2>

        {/* Tool icon grid with L-bracket corners */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5 md:gap-6 mb-8">
          {toolGrid.map((tool) => (
            <div
              key={tool.name}
              className="group flex flex-col items-center gap-3"
            >
              {/* Card with white L-bracket corners */}
              <div className="relative w-full aspect-square max-w-[100px] flex items-center justify-center bg-card/50 hover:bg-card transition-all duration-300">
                {/* White L-bracket corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/30 group-hover:border-white/60 transition-colors duration-300"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/30 group-hover:border-white/60 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/30 group-hover:border-white/60 transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/30 group-hover:border-white/60 transition-colors duration-300"></div>

                <img
                  src={tool.icon}
                  alt={tool.name}
                  className={`w-9 h-9 md:w-10 md:h-10 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300 ${tool.invert ? 'invert' : ''}`}
                  loading="lazy"
                />
              </div>
              {/* Tool name label */}
              <span className="text-muted-foreground group-hover:text-foreground text-xs font-medium transition-colors duration-300 text-center leading-tight">
                {tool.name}
              </span>
            </div>
          ))}
        </div>

        {/* "And more" indicator */}
        <p className="text-muted-foreground/50 text-sm text-center mb-20 pb-16 border-b border-border">
          And more .........
        </p>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Object.entries(technicalSkills).map(([key, skills]) => (
            <div key={key}>
              <h3 className="text-lg font-bold text-foreground mb-4">{categoryLabels[key] || key}</h3>
              <div className="space-y-2">
                {skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span className="text-muted-foreground text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolStackSection;

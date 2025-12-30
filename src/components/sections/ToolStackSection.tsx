import softrLogo from '@/assets/softr-logo.png';
import ghlLogo from '@/assets/ghl-logo.png';
import makeLogo from '@/assets/make-logo.png';

const tools = [
  { name: "n8n", logo: "https://n8n.io/favicon.ico" },
  { name: "Zapier", logo: "https://cdn.zapier.com/zapier/images/favicon.ico" },
  { name: "Make.com", logo: makeLogo },
  { name: "Lovable", logo: "https://lovable.dev/favicon.ico" },
  { name: "Softr", logo: softrLogo },
  { name: "Google Workspace", logo: "https://www.gstatic.com/images/branding/product/2x/hh_drive_96dp.png" },
  { name: "OpenAI", logo: "https://openai.com/favicon.ico" },
  { name: "Claude", logo: "https://claude.ai/favicon.ico" },
  { name: "Notion", logo: "https://www.notion.so/images/favicon.ico" },
  { name: "Airtable", logo: "https://airtable.com/favicon.ico" },
  { name: "HubSpot", logo: "https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png" },
  { name: "GHL", logo: ghlLogo },
];

const ToolStackSection = () => {
  return (
    <section className="py-20 px-6 md:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-accent">
          My Tool Stack
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          The platforms and technologies I use to build powerful automations
        </p>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 md:gap-8">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-background/50 border border-border hover:border-primary/30 hover:bg-background transition-all duration-300 group"
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src={tool.logo}
                  alt={`${tool.name} logo`}
                  className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(tool.name)}&background=random&color=fff&size=40`;
                  }}
                />
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors text-center">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolStackSection;

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
    <section className="py-20 px-6 md:px-8 bg-secondary/30 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-accent">
          My <span className="text-primary">Tool Stack</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          The platforms and technologies I use to build powerful automations
        </p>
        
        <div className="relative">
          <div className="flex animate-marquee-fast gap-4 md:gap-8">
            {[...tools, ...tools].map((tool, index) => (
              <div
                key={`${tool.name}-${index}`}
                className="flex flex-col items-center gap-2 p-2 md:p-4 rounded-xl md:rounded-2xl bg-background/50 border border-border hover:border-primary/30 hover:bg-background transition-all duration-300 group flex-shrink-0 min-w-[80px] md:min-w-[120px]"
              >
                <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center">
                  <img
                    src={tool.logo}
                    alt={`${tool.name} logo`}
                    className="w-6 h-6 md:w-10 md:h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(tool.name)}&background=random&color=fff&size=40`;
                    }}
                  />
                </div>
                <span className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors text-center whitespace-nowrap">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolStackSection;

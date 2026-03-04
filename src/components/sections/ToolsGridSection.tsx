const tools = [
    // Row 1
    { name: 'TypeScript', logo: 'https://cdn.simpleicons.org/typescript/3178C6' },
    { name: 'n8n', logo: 'https://cdn.simpleicons.org/n8n/EA4B71' },
    // Row 2
    { name: 'Vercel', logo: 'https://cdn.simpleicons.org/vercel/ffffff' },
    { name: 'OpenAI', logo: 'https://cdn.simpleicons.org/openai/74AA9C' },
    { name: 'Supabase', logo: 'https://cdn.simpleicons.org/supabase/3FCF8E' },
    { name: 'Make.com', logo: 'https://cdn.simpleicons.org/make/6D00CC' },
    { name: 'AWS', logo: 'https://cdn.simpleicons.org/amazonaws/FF9900' },
    // Row 3
    { name: 'PostgreSQL', logo: 'https://cdn.simpleicons.org/postgresql/4169E1' },
    { name: 'Airtable', logo: 'https://cdn.simpleicons.org/airtable/18BFFF' },
    { name: 'Google Cloud', logo: 'https://cdn.simpleicons.org/googlecloud/4285F4' },
    { name: 'Zapier', logo: 'https://cdn.simpleicons.org/zapier/FF4A00' },
    { name: 'GitHub', logo: 'https://cdn.simpleicons.org/github/ffffff' },
    // Row 4
    { name: 'Notion', logo: 'https://cdn.simpleicons.org/notion/ffffff' },
    { name: 'Gmail', logo: 'https://cdn.simpleicons.org/gmail/EA4335' },
    { name: 'WhatsApp', logo: 'https://cdn.simpleicons.org/whatsapp/25D366' },
    { name: 'Instagram', logo: 'https://cdn.simpleicons.org/instagram/E4405F' },
    { name: 'Telegram', logo: 'https://cdn.simpleicons.org/telegram/26A5E4' },
    // Row 5
    { name: 'Facebook', logo: 'https://cdn.simpleicons.org/facebook/0866FF' },
    { name: 'Slack', logo: 'https://cdn.simpleicons.org/slack/4A154B' },
    { name: 'HubSpot', logo: 'https://cdn.simpleicons.org/hubspot/FF7A59' },
    { name: 'Python', logo: 'https://cdn.simpleicons.org/python/3776AB' },
    { name: 'Microsoft', logo: 'https://cdn.simpleicons.org/windows/0078D4' },
    // Row 6 - User's key tools
    { name: 'Softr', logo: 'https://avatars.githubusercontent.com/u/61489953?s=200&v=4' },
    { name: 'GoHighLevel', logo: 'https://cdn.brandfetch.io/idh2fv7OKQ/theme/dark/symbol.svg?k=bfHSJFAPEG' },
    { name: 'Antigravity', logo: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg' },
    { name: 'Claude AI', logo: 'https://cdn.simpleicons.org/anthropic/ffffff' },
    { name: 'Redis', logo: 'https://cdn.simpleicons.org/redis/FF4438' },
];

const ToolsGridSection = () => {
    return (
        <section className="py-16 px-6 md:px-12 bg-background" id="tools">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                    Tech Stack & Integrations
                </h2>

                <div className="grid grid-cols-6 gap-3 md:gap-6">
                    {tools.map((tool, i) => (
                        <div key={i} className="flex flex-col items-center gap-2 group">
                            {/* Card with L-corners */}
                            <div className="relative w-full aspect-square flex items-center justify-center p-3 bg-white/[0.03]">
                                {/* L-corners */}
                                <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-border/60" />
                                <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-border/60" />
                                <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-border/60" />
                                <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-border/60" />

                                <img
                                    src={tool.logo}
                                    alt={tool.name}
                                    className="w-7 h-7 md:w-8 md:h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                                    loading="lazy"
                                />
                            </div>
                            <span className="text-muted-foreground text-[10px] md:text-xs text-center leading-tight group-hover:text-foreground transition-colors duration-300">
                                {tool.name}
                            </span>
                        </div>
                    ))}
                </div>

                <p className="text-muted-foreground text-sm text-center mt-10">And more ..........</p>
            </div>
        </section>
    );
};

export default ToolsGridSection;

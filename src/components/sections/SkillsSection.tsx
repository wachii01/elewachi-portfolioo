const skillCategories = [
    {
        title: 'AI & Automation',
        skills: [
            'AI Workflow Automation',
            'AI Agent Development',
            'Agentic Workflow Development',
            'AI Voice Agent',
            'Prompt Engineering',
            'Chatbot Development',
            'NLP & Language Models',
            'AI-Powered Data Extraction',
            'Conversational AI Design',
            'AI Content Generation',
            'Vector Database Integration',
            'RAG (Retrieval Augmented Generation)',
        ],
    },
    {
        title: 'Business Automation',
        skills: [
            'Process Optimization',
            'CRM Automation',
            'Marketing Automation',
            'Lead Generation',
            'Email Sequence Automation',
            'Customer Onboarding Automation',
            'Appointment Scheduling Systems',
            'Invoice & Payment Automation',
            'Data Processing & Sync',
            'Document Generation',
            'Report Automation',
            'Internal Operations Automation',
        ],
    },
    {
        title: 'Integration & Development',
        skills: [
            'API & Webhook Integration',
            'REST API Development',
            'No-Code / Low-Code Development',
            'Self-Hosted System Architecture',
            'Database Design & Management',
            'Multi-Channel Communication Systems',
            'Cloud Infrastructure (AWS)',
            'WhatsApp Business API',
            'Google Workspace Automation',
            'CRM Integration (HubSpot, GHL)',
            'Third-Party SaaS Integration',
            'Custom Workflow Scripting',
        ],
    },
    {
        title: 'Marketing & Growth',
        skills: [
            'Lead Qualification Systems',
            'Marketing Funnel Automation',
            'Social Media Automation',
            'Content Distribution Systems',
            'Email Marketing (Klaviyo, Mailchimp)',
            'Campaign Performance Tracking',
            'Customer Segmentation',
            'Retargeting & Follow-up Systems',
            'Landing Page Optimization',
            'Analytics & Reporting',
            'A/B Testing Automation',
            'Multi-Platform Ad Management',
        ],
    },
];

const SkillsSection = () => {
    return (
        <section className="py-32 px-6 md:px-12 bg-background" id="skills">
            <div className="max-w-6xl mx-auto">
                <div className="mb-6">
                    <span className="text-muted-foreground text-sm tracking-widest uppercase">Expertise</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16">
                    What I Bring to<br />the Table
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="relative p-8 group">
                            {/* L-bracket corners */}
                            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-primary/30 group-hover:border-primary/60 transition-colors duration-300"></div>
                            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-primary/30 group-hover:border-primary/60 transition-colors duration-300"></div>

                            <h3 className="text-xl font-bold text-foreground mb-6">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="px-3 py-1.5 rounded-full bg-secondary border border-border text-muted-foreground text-xs hover:text-foreground hover:border-primary/30 transition-all duration-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;

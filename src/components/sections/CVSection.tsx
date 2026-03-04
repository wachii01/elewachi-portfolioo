import { Calendar, Cpu, Briefcase, GraduationCap, MapPin, ArrowRight } from 'lucide-react';
import { technicalSkills } from '@/data/portfolioData';

const experiences = [
    {
        role: 'AI Automation Expert',
        company: 'Thelix Holdings',
        location: 'Texas, USA (Remote)',
        period: 'July 2025 - Present',
        isCurrent: true,
        achievements: [
            'Design and implement end-to-end AI automation workflows for sales, customer onboarding, data processing, and operational systems using n8n, OpenAI, and Claude.',
            'Reduced manual processing time by 20+ hours per week through intelligent workflow automation across multiple departments.',
            'Automated 60+ repetitive business processes including lead qualification, customer follow-ups, and data synchronization.',
            'Built custom AI agents for customer support that handle 500+ inquiries monthly with 85% resolution rate.',
            'Decreased operational costs by 40% through self-hosted automation solutions.',
        ],
    },
    {
        role: 'AI Automation Expert (Contract)',
        company: 'Personatify',
        location: 'Thailand (Remote)',
        period: 'March 2025 - September 2025',
        isCurrent: false,
        achievements: [
            'Developed AI-powered chatbots using n8n, OpenAI, Claude, and Manychat for customer engagement and lead generation.',
            'Built intelligent appointment scheduling system that automated booking workflows and reduced no-shows by 35%.',
            'Created email management automation that processed and categorized 1,000+ emails weekly with 90% accuracy.',
            'Designed multi-channel communication Agent integrating WhatsApp Business API.',
        ],
    },
    {
        role: 'Digital Marketing Expert',
        company: 'Naija Essential Mart',
        location: 'Ilorin, Nigeria (Remote)',
        period: 'February 2024 - April 2025',
        isCurrent: false,
        achievements: [
            'Developed and automated marketing workflows to streamline campaign execution and customer data management.',
            'Built automated email sequences in Klaviyo that increased conversion rates by 28% through behavior-based triggers.',
            'Implemented marketing automation systems that processed customer data and personalized 10,000+ monthly communications.',
        ],
    },
    {
        role: 'Social Media Marketing Expert',
        company: 'Africum Wellness',
        location: 'Lagos, Nigeria (Remote)',
        period: 'May 2023 - August 2024',
        isCurrent: false,
        achievements: [
            'Automated social media content scheduling and posting workflows across Facebook, Instagram, and X (Twitter).',
            'Built automated engagement tracking systems to monitor campaign performance and audience behavior.',
            'Increased follower engagement by 150% through data-driven automation.',
        ],
    },
];

const CVSection = () => {
    return (
        <section className="py-16 px-6 md:px-12 bg-background" id="cv">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                        Curriculum <span className="font-accent text-primary italic">Vitae</span>
                    </h2>
                    <p className="text-muted-foreground">AI Automation Expert | n8n Developer</p>
                </div>

                {/* Summary */}
                <div className="glass rounded-3xl p-8 mb-16 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Professional Summary</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">
                        AI Automation Specialist with 4+ years of experience building intelligent workflows and automation systems that drive operational efficiency. Expertise in designing and deploying AI-powered solutions using no/low code tools to automate complex business processes. Proven track record of reducing manual workload by 15-20 hours weekly while eliminating operational costs through smart automation and self-hosted solutions.
                    </p>
                </div>

                {/* Experience Journey Map */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-foreground mb-10 flex items-center gap-3">
                        <Briefcase className="text-primary" size={24} />
                        Experience Journey
                    </h3>

                    <div className="relative">
                        {/* Central timeline line */}
                        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-border hidden md:block"></div>

                        <div className="space-y-8">
                            {experiences.map((exp, idx) => (
                                <div key={idx} className="relative flex gap-6 md:gap-10">
                                    {/* Timeline node */}
                                    <div className="hidden md:flex flex-col items-center flex-shrink-0 w-16">
                                        <div className={`relative z-10 w-10 h-10 rounded-full border-4 border-background flex items-center justify-center ${exp.isCurrent
                                            ? 'bg-primary shadow-lg shadow-primary/30'
                                            : 'bg-card border-border'
                                            }`}>
                                            <span className={`text-xs font-bold ${exp.isCurrent ? 'text-primary-foreground' : 'text-muted-foreground'}`}>
                                                {String(idx + 1).padStart(2, '0')}
                                            </span>
                                        </div>
                                        {/* Connector arrow */}
                                        {idx < experiences.length - 1 && (
                                            <div className="flex-1"></div>
                                        )}
                                    </div>

                                    {/* Card */}
                                    <div className={`flex-1 relative group ${exp.isCurrent ? 'glass rounded-2xl overflow-hidden' : 'bg-card border border-border rounded-2xl'
                                        } p-6 md:p-8 transition-all duration-300 hover:shadow-lg`}>
                                        {/* Current indicator */}
                                        {exp.isCurrent && (
                                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
                                        )}

                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                                            <div>
                                                <h4 className="text-xl font-bold text-foreground flex items-center gap-2">
                                                    {exp.role}
                                                    {exp.isCurrent && (
                                                        <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider bg-primary/20 text-primary rounded-full font-medium">
                                                            Current
                                                        </span>
                                                    )}
                                                </h4>
                                                <p className="text-primary text-sm flex items-center gap-2 mt-1">
                                                    <MapPin className="w-3 h-3" />
                                                    {exp.company} | {exp.location}
                                                </p>
                                            </div>
                                            <span className="text-muted-foreground text-xs font-mono whitespace-nowrap flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {exp.period}
                                            </span>
                                        </div>

                                        <ul className="space-y-2">
                                            {exp.achievements.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm font-light">
                                                    <ArrowRight className="w-3 h-3 text-primary mt-1.5 flex-shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div>
                    <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                        <GraduationCap className="text-primary" size={24} />
                        Education
                    </h3>
                    <div className="glass rounded-2xl p-6">
                        <h4 className="text-lg font-bold text-foreground">Bachelor of Technology (B.Tech) in Cyber Security Science</h4>
                        <p className="text-muted-foreground">Federal University of Technology, Minna | Minna, Nigeria</p>
                        <p className="text-sm text-muted-foreground mt-2">Graduated: December 2023</p>
                        <p className="text-sm text-primary mt-2 font-medium">Award: Class Representative of the Year</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CVSection;

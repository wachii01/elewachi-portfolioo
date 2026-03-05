import { Rocket, Search, Settings } from 'lucide-react';

const journeyMilestones = [
    {
        icon: <Rocket className="w-5 h-5 text-primary" />,
        title: 'Where I Started',
        timeline: '4 YEARS AGO',
        description: 'I began as a ',
        highlight: 'Direct Response Copywriter and Marketer',
        rest: '. This taught me the psychology of sales and the importance of customer communication.',
    },
    {
        icon: <Search className="w-5 h-5 text-primary" />,
        title: 'The Pivot',
        timeline: 'THE REALIZATION',
        description: 'I realized great copy fails if operations are messy. I fell in love with logic and building systems that "just work" without human error.',
        highlight: '',
        rest: '',
    },
    {
        icon: <Settings className="w-5 h-5 text-green-500" />,
        title: 'Where I Am Now',
        timeline: 'PRESENT DAY',
        description: 'Now, I engineer scalable AI systems for agencies. I combine marketing insight with technical expertise to build automations that drive revenue.',
        highlight: '',
        rest: '',
    },
];

const JourneySection = () => {
    return (
        <section className="py-16 px-6 md:px-12 bg-transparent" id="journey">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16">
                    Elewachi's <span className="font-accent text-primary italic">Journey</span>
                </h2>

                {/* Journey timeline */}
                <div className="relative">
                    {journeyMilestones.map((milestone, idx) => (
                        <div key={idx} className="relative">
                            {/* Card */}
                            <div className="relative bg-card border border-border p-8 mb-4 group hover:border-border/80 transition-all duration-300">
                                {/* Header row */}
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 bg-secondary border border-border flex items-center justify-center flex-shrink-0">
                                        {milestone.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-foreground">{milestone.title}</h3>
                                        <span className="text-primary text-xs tracking-widest uppercase font-medium">
                                            {milestone.timeline}
                                        </span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-muted-foreground leading-relaxed">
                                    {milestone.description}
                                    {milestone.highlight && (
                                        <strong className="text-foreground">{milestone.highlight}</strong>
                                    )}
                                    {milestone.rest}
                                </p>
                            </div>

                            {/* Connector line between cards */}
                            {idx < journeyMilestones.length - 1 && (
                                <div className="flex justify-center">
                                    <div className="w-px h-6 bg-border"></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JourneySection;

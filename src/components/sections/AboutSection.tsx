import { PenTool, Search, Cpu } from 'lucide-react';
import { skills } from '@/data/portfolioData';

const AboutSection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-background">
      <div className="max-w-4xl mx-auto flex flex-col gap-16">
        {/* Journey */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Elewachi's <span className="text-primary font-accent text-5xl ml-2 align-middle">Journey</span>
          </h2>
          <div className="space-y-4 relative">
            <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-accent/50 via-primary/50 to-green-900/50 md:block hidden"></div>

            {/* Step 1 */}
            <div className="bg-card border border-border p-6 rounded-2xl relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mr-4 border border-accent/20">
                  <PenTool size={18} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-foreground font-bold">Where I Started</h3>
                  <p className="text-[10px] text-accent font-mono uppercase tracking-wider">4 Years Ago</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">
                I began as a <span className="text-foreground font-medium">Direct Response Copywriter and Marketer</span>. This taught me the psychology of sales and the importance of customer communication.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-card border border-border p-6 rounded-2xl relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 border border-primary/20">
                  <Search size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-foreground font-bold">The Pivot</h3>
                  <p className="text-[10px] text-primary font-mono uppercase tracking-wider">The Realization</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">
                I realized great copy fails if operations are messy. I fell in love with logic and building systems that "just work" without human error.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-card border border-border p-6 rounded-2xl relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-green-900/30 flex items-center justify-center mr-4 border border-green-500/20">
                  <Cpu size={18} className="text-green-400" />
                </div>
                <div>
                  <h3 className="text-foreground font-bold">Where I Am Now</h3>
                  <p className="text-[10px] text-green-400 font-mono uppercase tracking-wider">Present Day</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">
                Now, I engineer scalable AI systems for agencies. I combine marketing insight with technical expertise to build automations that drive revenue.
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Elewachi's <span className="text-primary font-accent text-5xl ml-2 align-middle">Skills</span>
          </h2>
          <div className="flex flex-wrap gap-3 content-start mb-12">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-lg bg-secondary border border-border text-muted-foreground text-sm hover:bg-muted hover:border-primary/50 hover:text-foreground transition-all duration-300 cursor-default font-light"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

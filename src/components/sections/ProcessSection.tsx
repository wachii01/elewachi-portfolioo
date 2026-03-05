import { processSteps } from '@/data/portfolioData';

const ProcessSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-transparent" id="process">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-6">
          <span className="text-muted-foreground text-sm tracking-widest uppercase">Why you need this</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16">
          Your Business Could Be Scaling<br />Faster. Here's What's Stopping You.
        </h2>

        {/* L-bracket cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="relative p-8 md:p-10">
            {/* L-bracket corners */}
            <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/50" />
            <span className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary/50" />
            <span className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary/50" />
            <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/50" />
            <p className="text-foreground text-lg leading-relaxed">
              Missed follow-ups, slow replies, and inconsistent execution aren't effort problems — they're system problems. You're paying human salaries to do work that was never meant for humans in the first place.
            </p>
          </div>
          <div className="relative p-8 md:p-10">
            <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/50" />
            <span className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary/50" />
            <span className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary/50" />
            <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/50" />
            <p className="text-foreground text-lg leading-relaxed">
              Every unreturned call, delayed response, and dropped lead is revenue you already earned — just never collected. My AI systems close those gaps instantly, consistently, and at any volume your business throws at them.
            </p>
          </div>
        </div>

        {/* How I Work — Step-by-step diagram */}
        <div className="border-t border-border pt-16">
          <h3 className="text-3xl font-bold text-foreground mb-12">How I Work</h3>

          {/* Step cards in a connected flow */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {processSteps.map((step, idx) => (
              <div key={idx} className="flex items-stretch">
                {/* Card */}
                <div className="relative p-6 md:p-8 flex-1 group">
                  {/* L-bracket corners */}
                  <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-primary/40 group-hover:border-primary transition-colors duration-300"></div>
                  <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-border/40 group-hover:border-border transition-colors duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-border/40 group-hover:border-border transition-colors duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-primary/40 group-hover:border-primary transition-colors duration-300"></div>

                  {/* Step number */}
                  <span className="text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-300 mb-3 block">
                    {step.num}
                  </span>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-foreground mb-3">{step.title}</h4>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>

                {/* Connector arrow between cards (not after last card) */}
                {idx < processSteps.length - 1 && (
                  <>
                    {/* Desktop: horizontal connector */}
                    <div className="hidden md:flex items-center justify-center w-8 flex-shrink-0">
                      <div className="flex items-center">
                        <div className="w-6 border-t border-dashed border-primary/30"></div>
                        <svg className="w-3 h-3 text-primary/50 -ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    {/* Mobile: vertical connector */}
                    <div className="flex md:hidden justify-center py-2">
                      <div className="flex flex-col items-center">
                        <div className="h-6 border-l border-dashed border-primary/30"></div>
                        <svg className="w-3 h-3 text-primary/50 -mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

import { processSteps } from '@/data/portfolioData';

const ProcessSection = () => (
  <section className="py-24 px-4 bg-card">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
        How I <span className="text-primary font-accent text-4xl md:text-5xl ml-2">Work</span>
      </h2>
      <p className="text-muted-foreground text-center mb-16 max-w-lg mx-auto font-light">
        My approach to building successful, scalable automation systems.
      </p>
      <div className="grid gap-6">
        {processSteps.map((step, idx) => (
          <div
            key={idx}
            className="group flex flex-col md:flex-row items-center md:items-start gap-6 bg-secondary border border-border p-8 rounded-3xl hover:border-primary/30 transition-colors duration-300"
          >
            <div className="text-5xl font-bold text-primary/40 group-hover:text-primary/60 transition-colors duration-300 font-accent">
              {step.num}
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base font-light">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;

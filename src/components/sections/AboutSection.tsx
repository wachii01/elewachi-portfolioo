import { CheckCircle2, Zap, Shield, Globe } from 'lucide-react';

const AboutSection = () => {
  const valueProps = [
    {
      icon: <Zap className="w-5 h-5 text-primary" />,
      text: "I don't just automate tasks — I eliminate bottlenecks that are silently draining your revenue.",
    },
    {
      icon: <Shield className="w-5 h-5 text-green-500" />,
      text: "My Cybersecurity background means every system I build is secure, resilient, and production-ready.",
    },
    {
      icon: <Globe className="w-5 h-5 text-blue-400" />,
      text: "I've delivered for teams across the US, UK, and Africa — from lean startups to mid-size agencies.",
    },
  ];

  const whoWeWorkWith = [
    "Business owners drowning in manual processes they shouldn't be doing.",
    "Founders scaling fast but losing deals to slow response times.",
    "Agencies spending more on staff than on growth.",
    "Teams who know AI is the future and want to be five steps ahead.",
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-background" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <div>
            <div className="mb-6">
              <span className="text-muted-foreground text-sm tracking-widest uppercase">About</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              I don't just build<br />automations.<br />
              <span className="text-primary italic">I replace chaos<br />with clockwork.</span>
            </h2>
            <div className="w-16 h-px bg-primary mb-8"></div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm Emmanuel — and I've spent 4+ years turning messy, manual business operations into intelligent systems that run themselves. While most people automate tasks, I architect <strong className="text-foreground">entire operational ecosystems</strong> that eliminate human bottlenecks and generate revenue around the clock.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The result? My clients save 15–20 hours per week, cut costs by 40%, and close more deals — all on autopilot. No extra hires. No extra overhead. Just systems that execute relentlessly.
            </p>

            {/* Value props */}
            <div className="space-y-4">
              {valueProps.map((prop, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center flex-shrink-0 mt-0.5">
                    {prop.icon}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{prop.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — checklist */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
              Built For
            </h3>
            <div className="border-l border-border pl-8 space-y-8">
              {whoWeWorkWith.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground text-lg leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import profilePicture from '@/assets/profile-picture.jpg';

const AnimatedHeroWord = () => {
  const words = ['Build', 'Scale', 'Design'];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex(prev => (prev + 1) % words.length);
        setFade(true);
      }, 500);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`inline-block transition-all duration-500 transform ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        } text-primary`}
    >
      {words[index]}
    </span>
  );
};

const HeroSection = () => {
  return (
    <section className="relative flex flex-col justify-center items-center text-center px-6 md:px-12 pt-32 pb-0 overflow-hidden bg-background">
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Profile picture — small, centered */}
        <div className="mb-10 relative">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-border shadow-lg">
            <img
              src={profilePicture}
              alt="Elewachi Emmanuel"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Main Heading — large serif with animated cycling word */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8">
          I <AnimatedHeroWord /> AI systems that
          generate more revenue while
          replacing the tasks <span className="text-primary italic">that slow you down.</span>
        </h1>

        {/* Subtitle */}
        <div className="max-w-2xl mx-auto mb-6">
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed italic">
            You can't scale a business that still runs on manual follow-ups, disconnected tools, and processes that break the moment your team gets busy.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-foreground text-lg md:text-xl leading-relaxed font-medium italic">
            Get to know me — watch a quick intro on who I am and what I do.
          </p>
        </div>

        {/* YouTube Video embed */}
        <div className="w-full max-w-3xl mx-auto mb-20 rounded-lg overflow-hidden border border-border shadow-2xl">
          <iframe
            src="https://www.youtube.com/embed/WWAV273LfO8"
            title="About Elewachi Emmanuel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full aspect-video"
          />
        </div>

        {/* Stats cards with L-shaped corners — 2x2 grid on mobile */}
        <div className="w-full max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 border-t border-border pt-10 mb-20">
          {[
            { value: '20+', label: 'Hrs/week Saved' },
            { value: '60+', label: 'Processes Automated' },
            { value: '40%', label: 'Cost Reduction' },
            { value: '500+', label: 'AI Interactions Monthly' },
          ].map((stat, i) => (
            <div key={i} className="relative p-6 flex flex-col items-center">
              {/* Top-left L-corner */}
              <span className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-primary/50 rounded-tl-sm" />
              {/* Top-right L-corner */}
              <span className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-primary/50 rounded-tr-sm" />
              {/* Bottom-left L-corner */}
              <span className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-primary/50 rounded-bl-sm" />
              {/* Bottom-right L-corner */}
              <span className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-primary/50 rounded-br-sm" />

              <span className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</span>
              <span className="text-sm text-muted-foreground text-center">{stat.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HeroSection;

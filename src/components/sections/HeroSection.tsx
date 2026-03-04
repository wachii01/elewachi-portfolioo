import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import profilePicture from '@/assets/profile-picture.jpg';
import thailandReview from '@/assets/thailand-client-review.mp4';

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
            Watch this demo to see how my AI systems make you available 24/7.
          </p>
        </div>

        {/* Video embed */}
        <div className="w-full max-w-3xl mx-auto mb-20 rounded-lg overflow-hidden border border-border shadow-2xl">
          <video
            src={thailandReview}
            controls
            className="w-full aspect-video object-cover"
            poster=""
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Stats strip with thin dividers */}
        <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-0 border-t border-border pt-10">
          <div className="flex-1 flex flex-col items-center py-4 md:py-0">
            <span className="text-3xl md:text-4xl font-bold text-foreground mb-1">20+</span>
            <span className="text-sm text-muted-foreground">Hrs/week Saved</span>
          </div>
          <div className="hidden md:block w-px h-12 bg-border"></div>
          <div className="flex-1 flex flex-col items-center py-4 md:py-0">
            <span className="text-3xl md:text-4xl font-bold text-foreground mb-1">60+</span>
            <span className="text-sm text-muted-foreground">Processes Automated</span>
          </div>
          <div className="hidden md:block w-px h-12 bg-border"></div>
          <div className="flex-1 flex flex-col items-center py-4 md:py-0">
            <span className="text-3xl md:text-4xl font-bold text-foreground mb-1">40%</span>
            <span className="text-sm text-muted-foreground">Cost Reduction</span>
          </div>
          <div className="hidden md:block w-px h-12 bg-border"></div>
          <div className="flex-1 flex flex-col items-center py-4 md:py-0">
            <span className="text-3xl md:text-4xl font-bold text-foreground mb-1">500+</span>
            <span className="text-sm text-muted-foreground">AI Interactions Monthly</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

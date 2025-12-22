import { useState, useEffect } from 'react';
import { Star, Zap, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AnimatedHeroWord = () => {
  const [word, setWord] = useState('Build');
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setWord(prev => prev === 'Build' ? 'Scale' : 'Build');
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`inline-block transition-all duration-500 transform ${
        fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } text-primary mx-2 font-accent tracking-wide`}
      style={{ fontSize: '1.3em' }}
    >
      {word}
    </span>
  );
};

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-10 pb-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Badge */}
        <div className="mb-8 animate-bounce-subtle">
          <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-1.5">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm text-muted-foreground font-medium">AI Automation Expert</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight leading-tight mb-8">
          I <AnimatedHeroWord /> Business <br />
          Systems.
        </h1>

        {/* Subtitle */}
        <div className="max-w-xl mx-auto mb-10 space-y-2">
          <p className="text-muted-foreground text-lg flex items-center justify-center gap-2">
            <span className="text-2xl">👋</span> Hi, I'm Elewachi Emmanuel.
          </p>
          <p className="text-muted-foreground leading-relaxed font-light text-lg">
            I help businesses save time, reduce costs, and eliminate repetitive work through smart workflow automation and AI integrations.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Button
            onClick={() => onNavigate('contact')}
            size="lg"
            className="rounded-full px-8 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 hover:-translate-y-1 transition-all duration-300"
          >
            <Zap className="w-5 h-5 mr-2 fill-current" />
            Hire Me
          </Button>
          <Button
            onClick={() => onNavigate('work')}
            variant="outline"
            size="lg"
            className="rounded-full px-8 bg-secondary/50 hover:bg-secondary border-border hover:border-primary/30 transition-all duration-300"
          >
            <Briefcase className="w-5 h-5 mr-2" />
            View Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

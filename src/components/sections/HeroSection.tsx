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
    <section className="relative flex flex-col justify-center items-start text-left px-6 md:px-12 pt-32 pb-0 overflow-hidden bg-transparent">
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-start">
        {/* Profile picture — small, centered */}
        <div className="mb-10 relative fade-in-up">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-border shadow-lg">
            <img
              src={profilePicture}
              alt="Elewachi Emmanuel"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-8 fade-in-up delay-100">
          I <AnimatedHeroWord /> AI systems that
          generate<br className="hidden md:block" />
          more revenue while replacing the<br className="hidden md:block" />
          tasks <span className="text-primary italic">that slow you down.</span>
        </h1>

        {/* Subtitle */}
        <div className="max-w-2xl mb-12 fade-in-up delay-200">
          <p className="font-['JetBrains_Mono'] text-sm sm:text-base text-gray-400 leading-relaxed">
            You can't scale a business that still runs on manual follow-ups, disconnected tools, and processes that break the moment your team gets busy.
          </p>
        </div>

        {/* Video Section */}
        <div className="w-full flex flex-col items-start fade-in-up delay-300">
          <p className="font-['JetBrains_Mono'] text-sm sm:text-base text-gray-400 mb-8 max-w-lg text-left">
            Get to know me — watch a quick intro on who I am and what I do.
          </p>

          {/* YouTube Video embed */}
          <div className="w-full max-w-3xl overflow-hidden border border-border shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/WWAV273LfO8"
              title="About Elewachi Emmanuel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full aspect-video"
            />
          </div>
        </div>

        {/* Buttons — below video, always side by side */}
        <div className="flex flex-row items-center gap-4 sm:gap-6 mt-8 mb-20 w-full sm:w-auto fade-in-up delay-400">
          <a
            href="#"
            className="flex-1 sm:flex-none px-8 py-4 bg-gradient-to-r from-primary to-[#e66000] hover:from-[#ff8533] hover:to-primary text-white font-medium flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(255,107,0,0.2)] hover:shadow-[0_0_30px_rgba(255,107,0,0.4)]"
          >
            View My Work
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </a>
          <a
            href="#"
            className="flex-1 sm:flex-none px-8 py-4 bg-transparent border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-medium flex items-center justify-center gap-2 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
            Book a Call
          </a>
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
              <span className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-primary/50" />
              {/* Top-right L-corner */}
              <span className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-primary/50" />
              {/* Bottom-left L-corner */}
              <span className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-primary/50" />
              {/* Bottom-right L-corner */}
              <span className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-primary/50" />

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

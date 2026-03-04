import HeroSection from './components/sections/HeroSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ProcessSection from './components/sections/ProcessSection';
import ToolStackSection from './components/sections/ToolStackSection';
import SkillsSection from './components/sections/SkillsSection';
import JourneySection from './components/sections/JourneySection';
import ReviewsSection from './components/sections/ReviewsSection';
import AboutSection from './components/sections/AboutSection';
import LetterSection from './components/sections/LetterSection';
import CVSection from './components/sections/CVSection';
import ContactForm from './components/sections/ContactForm';
import BottomDock from './components/navigation/BottomDock';
import ChatWidget from './components/ChatWidget';

const App = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Blue edge vignette glow */}
      <div className="fixed inset-0 z-[60] pointer-events-none" aria-hidden="true">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-blue-600/[0.07] to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-blue-600/[0.07] to-transparent"></div>
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-blue-600/[0.05] to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-blue-600/[0.05] to-transparent"></div>
      </div>

      <main>
        <HeroSection />
        <ProjectsSection />
        <ReviewsSection />
        <ProcessSection />
        <ToolStackSection />
        <SkillsSection />
        <JourneySection />
        <AboutSection />
        <LetterSection />
        <CVSection />
        <ContactForm />
      </main>

      <BottomDock activePage="home" onNavigate={scrollToSection} />
      <ChatWidget />
    </div>
  );
};

export default App;

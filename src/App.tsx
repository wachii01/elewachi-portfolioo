import { useState, useEffect } from 'react';
import HeroSection from './components/sections/HeroSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ProcessSection from './components/sections/ProcessSection';
import SkillsSection from './components/sections/SkillsSection';
import ToolsGridSection from './components/sections/ToolsGridSection';
import JourneySection from './components/sections/JourneySection';
import ReviewsSection from './components/sections/ReviewsSection';
import AboutSection from './components/sections/AboutSection';
import LetterSection from './components/sections/LetterSection';
import CVSection from './components/sections/CVSection';
import ContactForm from './components/sections/ContactForm';
import BottomDock from './components/navigation/BottomDock';
import ChatWidget from './components/ChatWidget';

const App = () => {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  // Home View renders the main sections
  const HomeView = () => (
    <>
      <HeroSection />
      <ProjectsSection limit={4} isSimpleView={true} />
      <ReviewsSection />
      <ProcessSection />
      <SkillsSection />
      <ToolsGridSection />
      <JourneySection />
      <AboutSection />
      <ContactForm />
    </>
  );

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <main>
        {activePage === 'home' && <HomeView />}
        {activePage === 'projects' && (
          <div className="pt-20 pb-32">
            <div className="text-center mb-10 px-6">
              <h1 className="text-5xl font-bold text-foreground">
                Full <span className="font-accent text-primary">Portfolio</span>
              </h1>
            </div>
            <ProjectsSection />
          </div>
        )}
        {activePage === 'letter' && (
          <div className="pt-24 pb-28">
            <LetterSection />
          </div>
        )}
        {activePage === 'cv' && (
          <div className="pt-20">
            <CVSection />
          </div>
        )}
        {activePage === 'contact' && (
          <div className="pt-24 pb-28">
            <ContactForm />
          </div>
        )}
      </main>

      <BottomDock activePage={activePage} onNavigate={setActivePage} />
      <ChatWidget />
    </div>
  );
};

export default App;

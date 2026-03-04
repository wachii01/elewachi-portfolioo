import { useState, useEffect } from 'react';
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
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  // Home View renders the main sections
  const HomeView = () => (
    <>
      <HeroSection />
      <ProjectsSection limit={3} isSimpleView={true} />
      <ReviewsSection />
      <ProcessSection />
      <ToolStackSection />
      <SkillsSection />
      <JourneySection />
      <AboutSection />
      <ContactForm />
    </>
  );

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <main>
        {activePage === 'home' && <HomeView />}
        {activePage === 'works' && (
          <div className="pt-20">
            <ProjectsSection />
          </div>
        )}
        {activePage === 'letter' && (
          <div className="pt-20 min-h-screen flex items-center">
            <LetterSection />
          </div>
        )}
        {activePage === 'cv' && (
          <div className="pt-20">
            <CVSection />
          </div>
        )}
        {activePage === 'contact' && (
          <div className="pt-20 min-h-screen flex items-center">
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

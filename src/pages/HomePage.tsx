import HeroSection from '@/components/sections/HeroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ProcessSection from '@/components/sections/ProcessSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactForm from '@/components/sections/ContactForm';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => {
  return (
    <div className="fade-in">
      <HeroSection onNavigate={onNavigate} />
      <ProjectsSection limit={3} isSimpleView={true} onNavigate={onNavigate} />
      <ProcessSection />
      <AboutSection />
      <ContactForm />
    </div>
  );
};

export default HomePage;

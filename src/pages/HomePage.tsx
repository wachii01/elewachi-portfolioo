import HeroSection from '@/components/sections/HeroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ProcessSection from '@/components/sections/ProcessSection';
import ToolStackSection from '@/components/sections/ToolStackSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactForm from '@/components/sections/ContactForm';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => {
  return (
    <div className="fade-in">
      <HeroSection onNavigate={onNavigate} />
      <ProjectsSection isSimpleView={true} />
      <ProcessSection />
      <ToolStackSection />
      <ReviewsSection />
      <AboutSection />
      <ContactForm />
    </div>
  );
};

export default HomePage;

import ProjectsSection from '@/components/sections/ProjectsSection';

const WorkPage = () => {
  return (
    <div className="fade-in pt-20 pb-32">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-foreground">
          Full <span className="font-accent text-primary">Portfolio</span>
        </h1>
      </div>
      <ProjectsSection />
    </div>
  );
};

export default WorkPage;

import { projectData } from '@/data/portfolioData';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface ProjectsSectionProps {
  limit?: number;
  isSimpleView?: boolean;
}

const ProjectsSection = ({ limit, isSimpleView }: ProjectsSectionProps) => {
  const projects = limit ? projectData.slice(0, limit) : projectData;

  return (
    <section className={`px-6 md:px-12 bg-transparent ${isSimpleView ? 'pb-10 pt-10' : 'py-16'}`} id="projects">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-6">
          <span className="text-muted-foreground text-sm tracking-widest uppercase">Use Cases</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-16">
          What My AI Agents &<br />Automations Can Do
        </h2>

        {/* Cards grid — dark maroon/red fills */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <Dialog key={idx}>
              <DialogTrigger asChild>
                <button className="text-left w-full group">
                  <div className="bg-[#1a1a1a] hover:bg-[#222222] border border-[#2a2a2a] p-8 md:p-10 transition-all duration-300 h-full flex flex-col">
                    <span className="text-muted-foreground text-xs tracking-widest uppercase mb-4">{project.category}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{project.title}</h3>
                    <p className="text-gray-400 text-sm md:text-base mb-8 leading-relaxed">{project.description}</p>

                    <div className="mt-auto space-y-3">
                      {project.solution.slice(0, 2).map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="text-primary mt-0.5 text-lg">⌘</span>
                          <span className="text-gray-300 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent className="bg-card border-border max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-foreground flex items-center gap-3">
                    {project.icon}
                    {project.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6 pt-4">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-3">What I Did</h4>
                    <ul className="space-y-2">
                      {project.solution.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-primary mt-1">✓</span>
                          <span className="text-muted-foreground text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-3">Key Outcomes</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stats.map((stat, i) => (
                        <span key={i} className="bg-secondary text-primary text-xs font-medium px-3 py-1.5 rounded-full border border-primary/20">
                          {stat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

import { useState, cloneElement, ReactElement } from 'react';
import { ArrowRight, CheckCircle, ChevronDown, ChevronUp, BarChart2, Camera, Video, AlertCircle, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Project, projectData } from '@/data/portfolioData';

interface ProjectCardProps {
  project: Project;
  isSimpleView?: boolean;
  onNavigate?: (page: string) => void;
}

const ProjectCard = ({ project, isSimpleView = false, onNavigate }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`relative rounded-3xl border border-border bg-gradient-to-br ${project.color} p-8 transition-all duration-300 hover:border-primary/30 group flex flex-col`}>
      <div className="flex flex-col h-full items-start">
        {/* Icon & Header */}
        <div className="w-14 h-14 rounded-2xl bg-background/40 border border-border flex items-center justify-center shrink-0 shadow-xl mb-6">
          {cloneElement(project.icon as ReactElement, { size: 28 })}
        </div>

        <div className="flex-1 w-full">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 rounded-full bg-secondary border border-border text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              {project.category}
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{project.title}</h3>

          <p className="text-muted-foreground leading-relaxed mb-6 text-sm font-light border-l-2 border-border pl-4">
            {project.description}
          </p>

          {/* Expanded Content */}
          {!isSimpleView && isExpanded && (
            <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
              {/* THE PROBLEM */}
              <div className="mb-6 bg-destructive/10 rounded-xl p-4 border border-destructive/10">
                <h4 className="text-[10px] font-bold text-destructive uppercase tracking-wider mb-2 flex items-center">
                  <AlertCircle size={12} className="mr-2" /> The Problem
                </h4>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* PROJECT IMAGE PLACEHOLDER */}
              <div className="mb-6 rounded-xl overflow-hidden border border-border bg-secondary/20 aspect-video flex items-center justify-center group/image">
                <div className="text-center">
                  <Camera size={24} className="mx-auto text-muted-foreground mb-2 group-hover/image:text-primary transition-colors" />
                  <span className="text-xs text-muted-foreground group-hover/image:text-foreground transition-colors">Project Screenshot</span>
                </div>
              </div>

              {/* KEY OUTCOMES */}
              <div className="bg-secondary/20 rounded-xl p-4 border border-border w-full mb-6">
                <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-3 flex items-center">
                  <BarChart2 size={12} className="mr-2" /> Key Outcomes
                </h4>
                <div className="space-y-2">
                  {project.stats.map((stat, i) => (
                    <div key={i} className="flex items-start text-xs text-foreground">
                      <CheckCircle size={14} className="text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span>{stat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* WATCH DEMO */}
              <div>
                <h4 className="text-[10px] font-bold text-primary uppercase tracking-wider mb-2 flex items-center">
                  <Video size={12} className="mr-2" /> Watch Demo
                </h4>
                <div className="rounded-xl overflow-hidden border border-border bg-secondary/40 aspect-video flex items-center justify-center group/video cursor-pointer hover:border-primary/30 transition-all">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center backdrop-blur-sm border border-border group-hover/video:scale-110 group-hover/video:bg-primary group-hover/video:border-transparent transition-all">
                    <Play className="text-foreground ml-1" size={24} fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 w-full">
          {isSimpleView ? (
            <Button
              onClick={() => onNavigate && onNavigate('work')}
              variant="outline"
              className="w-full rounded-xl bg-secondary/50 hover:bg-secondary border-border hover:border-primary/30 transition-all group-hover:border-primary/30 group-hover:bg-secondary"
            >
              <span className="text-sm font-medium">See Details</span>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          ) : (
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              variant="outline"
              className="w-full rounded-xl bg-secondary/50 hover:bg-secondary border-border hover:border-primary/30 transition-all"
            >
              <span className="text-sm font-medium">{isExpanded ? "See Less" : "Read More"}</span>
              {isExpanded ? (
                <ChevronUp size={16} className="ml-2" />
              ) : (
                <ChevronDown size={16} className="ml-2" />
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

interface ProjectsSectionProps {
  limit?: number | null;
  isSimpleView?: boolean;
  onNavigate?: (page: string) => void;
}

const ProjectsSection = ({ limit = null, isSimpleView = false, onNavigate }: ProjectsSectionProps) => {
  const displayedProjects = limit ? projectData.slice(0, limit) : projectData;

  return (
    <section className="py-24 px-4 relative bg-secondary/40">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {limit ? "Featured " : "All "}
            <span className="text-primary font-accent text-4xl md:text-5xl ml-2">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light">
            Real world problems solved with intelligent automation.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {displayedProjects.map((project, idx) => (
            <ProjectCard
              key={idx}
              project={project}
              isSimpleView={isSimpleView}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

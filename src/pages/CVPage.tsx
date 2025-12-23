import { Calendar, Cpu, Briefcase, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { technicalSkills } from '@/data/portfolioData';

interface CVPageProps {
  onNavigate: (page: string) => void;
}

const PROFILE_PIC = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300';

const CVPage = ({ onNavigate }: CVPageProps) => {
  return (
    <section className="min-h-screen pt-20 pb-32 px-4 fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-2">
            Curriculum <span className="font-accent text-primary font-normal">Vitae</span>
          </h2>
          <p className="text-muted-foreground">AI Automation Expert | n8n Developer</p>
          <Button onClick={() => onNavigate('contact')} className="mt-6 rounded-full px-8">
            <Calendar className="w-4 h-4 mr-2" /> Hire Elewachi
          </Button>
        </div>

        {/* Summary */}
        <div className="glass rounded-3xl p-8 mb-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
          <h3 className="text-2xl font-bold text-foreground mb-4">Professional Summary</h3>
          <p className="text-muted-foreground font-light leading-relaxed">
            AI Automation Specialist with 4+ years of experience building intelligent workflows and automation systems that drive operational efficiency. Expertise in designing and deploying AI-powered solutions using no/low code tools to automate complex business processes. Proven track record of reducing manual workload by 15-20 hours weekly while eliminating operational costs through smart automation and self-hosted solutions.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 pl-2 flex items-center">
            <Cpu className="mr-3 text-primary" size={24} /> Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-3 pl-2">Automation & Integration</h4>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.automation.map((s) => (
                  <span key={s} className="px-3 py-1.5 rounded-lg bg-secondary border border-border text-muted-foreground text-xs">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-3 pl-2">AI & Development</h4>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.ai.map((s) => (
                  <span key={s} className="px-3 py-1.5 rounded-lg bg-secondary border border-border text-muted-foreground text-xs">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-3 pl-2">CRM & Marketing</h4>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.crm.map((s) => (
                  <span key={s} className="px-3 py-1.5 rounded-lg bg-secondary border border-border text-muted-foreground text-xs">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-3 pl-2">Database & Business Tools</h4>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.database.map((s) => (
                  <span key={s} className="px-3 py-1.5 rounded-lg bg-secondary border border-border text-muted-foreground text-xs">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 pl-2 flex items-center">
            <Briefcase className="mr-3 text-primary" size={24} /> Experience
          </h3>
          <div className="space-y-6">
            <div className="relative pl-8 border-l border-border space-y-12">
              {/* Thelix */}
              <div className="relative">
                <span className="absolute -left-[39px] top-1 w-5 h-5 rounded-full border-4 border-background bg-primary"></span>
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <div>
                    <h4 className="text-xl font-bold text-foreground">AI Automation Expert</h4>
                    <p className="text-primary text-sm">Thelix Holdings | Texas, USA (Remote)</p>
                  </div>
                  <span className="text-muted-foreground text-xs font-mono mt-1 md:mt-0">July 2025 - Present</span>
                </div>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm font-light">
                  <li>Design and implement end-to-end AI automation workflows for sales, customer onboarding, data processing, and operational systems using n8n, OpenAI, and Claude.</li>
                  <li>Reduced manual processing time by 20+ hours per week through intelligent workflow automation across multiple departments.</li>
                  <li>Automated 60+ repetitive business processes including lead qualification, customer follow-ups, and data synchronization.</li>
                  <li>Built custom AI agents for customer support that handle 500+ inquiries monthly with 85% resolution rate.</li>
                  <li>Decreased operational costs by 40% through self-hosted automation solutions.</li>
                </ul>
              </div>

              {/* Personatify */}
              <div className="relative">
                <span className="absolute -left-[39px] top-1 w-5 h-5 rounded-full border-4 border-background bg-primary/50"></span>
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <div>
                    <h4 className="text-xl font-bold text-foreground">AI Automation Expert (Contract)</h4>
                    <p className="text-primary text-sm">Personatify | Thailand (Remote)</p>
                  </div>
                  <span className="text-muted-foreground text-xs font-mono mt-1 md:mt-0">March 2025 - September 2025</span>
                </div>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm font-light">
                  <li>Developed AI-powered chatbots using n8n, OpenAI, Claude, and Manychat for customer engagement and lead generation.</li>
                  <li>Built intelligent appointment scheduling system that automated booking workflows and reduced no-shows by 35%.</li>
                  <li>Created email management automation that processed and categorized 1,000+ emails weekly with 90% accuracy.</li>
                  <li>Designed multi-channel communication Agent integrating WhatsApp Business API.</li>
                </ul>
              </div>

              {/* Naija Essential */}
              <div className="relative">
                <span className="absolute -left-[39px] top-1 w-5 h-5 rounded-full border-4 border-background bg-primary/20"></span>
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <div>
                    <h4 className="text-xl font-bold text-foreground">Digital Marketing Expert</h4>
                    <p className="text-primary text-sm">Naija Essential Mart | Ilorin, Nigeria (Remote)</p>
                  </div>
                  <span className="text-muted-foreground text-xs font-mono mt-1 md:mt-0">February 2024 - April 2025</span>
                </div>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm font-light">
                  <li>Developed and automated marketing workflows to streamline campaign execution and customer data management.</li>
                  <li>Built automated email sequences in Klaviyo that increased conversion rates by 28% through behavior-based triggers.</li>
                  <li>Implemented marketing automation systems that processed customer data and personalized 10,000+ monthly communications.</li>
                </ul>
              </div>

              {/* Africum */}
              <div className="relative">
                <span className="absolute -left-[39px] top-1 w-5 h-5 rounded-full border-4 border-background bg-primary/10"></span>
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <div>
                    <h4 className="text-xl font-bold text-foreground">Social Media Marketing Expert</h4>
                    <p className="text-primary text-sm">Africum Wellness | Lagos, Nigeria (Remote)</p>
                  </div>
                  <span className="text-muted-foreground text-xs font-mono mt-1 md:mt-0">May 2023 - August 2024</span>
                </div>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm font-light">
                  <li>Automated social media content scheduling and posting workflows across Facebook, Instagram, and X (Twitter).</li>
                  <li>Built automated engagement tracking systems to monitor campaign performance and audience behavior.</li>
                  <li>Increased follower engagement by 150% through data-driven automation.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 pl-2 flex items-center">
            <GraduationCap className="mr-3 text-primary" size={24} /> Education
          </h3>
          <div className="glass rounded-2xl p-6">
            <h4 className="text-lg font-bold text-foreground">Bachelor of Technology (B.Tech) in Cyber Security Science</h4>
            <p className="text-muted-foreground">Federal University of Technology, Minna | Minna, Nigeria</p>
            <p className="text-sm text-muted-foreground mt-2">Graduated: December 2023</p>
            <p className="text-sm text-primary mt-2 font-medium">Award: Class Representative of the Year</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVPage;

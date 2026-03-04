import { Home, Briefcase, FileText, Mail, ScrollText } from 'lucide-react';
import profilePicture from '@/assets/profile-picture.jpg';

interface BottomDockProps {
  activePage: string;
  onNavigate: (sectionId: string) => void;
}

const navItems = [
  { id: 'projects', label: 'Works', icon: <Briefcase className="w-4 h-4" /> },
  { id: 'letter', label: 'Letter', icon: <ScrollText className="w-4 h-4" /> },
  { id: 'cv', label: 'CV', icon: <FileText className="w-4 h-4" /> },
  { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> },
];

const BottomDock = ({ activePage, onNavigate }: BottomDockProps) => {
  return (
    <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center gap-1 bg-card/90 backdrop-blur-xl border border-border rounded-full px-2 py-2 shadow-2xl">
        {/* Profile + Home */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 bg-[#4101F6] hover:bg-[#3600cc] text-white rounded-full pl-1.5 pr-4 py-1.5 transition-all duration-300 hover:scale-105"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white/20">
            <img
              src={profilePicture}
              alt="Emmanuel"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <span className="font-semibold text-xs">Home</span>
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-border mx-1"></div>

        {/* Nav items */}
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300 text-xs font-medium"
          >
            {item.icon}
            <span className="hidden sm:inline">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default BottomDock;

import { Home, Briefcase, User, FileText, MessageSquare } from 'lucide-react';

interface BottomDockProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  { icon: <Home size={20} />, label: 'Home', id: 'home' },
  { icon: <Briefcase size={20} />, label: 'Work', id: 'work' },
  { icon: <User size={20} />, label: 'CV', id: 'cv' },
  { icon: <FileText size={20} />, label: 'Letter', id: 'letter' },
  { icon: <MessageSquare size={20} />, label: 'Contact', id: 'contact' },
];

const BottomDock = ({ activePage, onNavigate }: BottomDockProps) => {
  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center glass rounded-2xl p-2 shadow-2xl shadow-primary/10">
        {navItems.map((item) => {
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center w-14 h-14 rounded-xl transition-all duration-300 ${
                isActive
                  ? 'bg-primary text-primary-foreground shadow-lg -translate-y-2 scale-110'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              {item.icon}
              <span className="text-[10px] mt-1 font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default BottomDock;

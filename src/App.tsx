import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import CVPage from './pages/CVPage';
import LetterPage from './pages/LetterPage';
import ContactPage from './pages/ContactPage';
import BottomDock from './components/navigation/BottomDock';
import ChatWidget from './components/ChatWidget';

const App = () => {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage onNavigate={setActivePage} />;
      case 'work':
        return <WorkPage />;
      case 'cv':
        return <CVPage onNavigate={setActivePage} />;
      case 'letter':
        return <LetterPage onNavigate={setActivePage} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>{renderPage()}</main>
      <BottomDock activePage={activePage} onNavigate={setActivePage} />
      <ChatWidget />
    </div>
  );
};

export default App;

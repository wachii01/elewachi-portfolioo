import { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RESUME_CONTEXT } from '@/data/portfolioData';

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: "Hi! I'm Elewachi's AI Assistant. Ask me anything about his skills, experience, or how he can help your business.",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response (would integrate with Lovable AI in production)
    setTimeout(() => {
      const responses = [
        `Based on Elewachi's experience, he specializes in ${input.toLowerCase().includes('automation') ? 'building intelligent automation workflows using n8n, Make.com, and custom integrations.' : 'AI-powered solutions that save businesses 15-20 hours weekly.'}`,
        `Great question! Elewachi has 4+ years of experience in automation and has helped businesses reduce operational costs by up to 40%.`,
        `Elewachi's approach involves deep workflow auditing, strategic planning, and building bulletproof systems. Would you like to schedule a consultation?`,
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages((prev) => [...prev, { role: 'assistant', text: randomResponse }]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-24 right-4 z-50 flex flex-col items-end pointer-events-auto">
      {isOpen && (
        <div className="glass rounded-2xl w-80 sm:w-96 shadow-2xl slide-up mb-4 overflow-hidden flex flex-col h-[500px]">
          {/* Header */}
          <div className="bg-primary/10 p-4 border-b border-border flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-accent p-0.5">
                <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                  <Bot size={20} className="text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm">AI Elewachi</h3>
                <p className="text-xs text-green-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> Online
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-primary text-primary-foreground rounded-br-none'
                      : 'bg-secondary text-foreground rounded-bl-none border border-border'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-secondary rounded-2xl rounded-bl-none px-4 py-3 border border-border">
                  <Loader2 size={16} className="text-primary animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-3 bg-card border-t border-border">
            <div className="relative">
              <Input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my automation skills..."
                className="w-full bg-secondary rounded-full pl-4 pr-12 py-3 text-sm border-border"
              />
              <Button
                type="submit"
                size="icon"
                disabled={!input.trim() || isLoading}
                className="absolute right-1.5 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-primary hover:bg-primary/90"
              >
                <Send size={14} />
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-primary to-accent shadow-lg glow hover:scale-105 transition-all duration-300"
      >
        {isOpen ? <X className="text-primary-foreground" /> : <MessageSquare className="text-primary-foreground" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full border-2 border-background"></span>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;

import { useState } from 'react';
import { Mail, ArrowRight, CheckCircle, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-8">
          <Mail className="text-primary w-6 h-6" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Ready to reclaim your time?
        </h2>
        <p className="text-xl text-muted-foreground mb-12 font-light">
          Let's discuss how we can automate your workflow today.
        </p>
        <form
          onSubmit={handleSubmit}
          className="text-left glass p-8 md:p-10 rounded-3xl shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">Name</label>
              <Input
                type="text"
                required
                placeholder="John Doe"
                className="bg-secondary/40 border-border rounded-xl"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
              <Input
                type="email"
                required
                placeholder="john@example.com"
                className="bg-secondary/40 border-border rounded-xl"
              />
            </div>
          </div>
          <div className="mb-8">
            <label className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
            <Textarea
              rows={4}
              required
              placeholder="Tell me about your bottleneck..."
              className="bg-secondary/40 border-border rounded-xl resize-none"
            />
          </div>
          <Button
            disabled={status !== 'idle'}
            className="w-full bg-foreground text-background hover:bg-foreground/90 font-bold py-6 rounded-xl transition-colors"
          >
            {status === 'idle' && (
              <>
                Send Message <ArrowRight size={20} className="ml-2" />
              </>
            )}
            {status === 'sending' && 'Sending...'}
            {status === 'success' && (
              <>
                <CheckCircle className="text-green-600 w-5 h-5 mr-2" /> Sent Successfully
              </>
            )}
          </Button>
        </form>
        <div className="mt-16 flex justify-center gap-8 pb-10">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

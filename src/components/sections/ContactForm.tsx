import { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
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
    <section className="py-16 px-6 md:px-12 bg-transparent" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-muted-foreground text-sm tracking-widest uppercase">Get Started</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Ready to reclaim<br />your <span className="text-primary italic">time?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Stop drowning in manual work. Let's discuss how we can automate your workflow and scale your operations.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 mb-16">
          <a
            href="https://cal.com/elewachii/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-[#4101F6] hover:bg-[#3600cc] text-white font-semibold py-7 px-10 shadow-xl shadow-[#4101F6]/20 hover:shadow-[#4101F6]/40 transition-all duration-300"
            >
              Book a Free Audit Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/elewachi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-sm font-medium flex items-center gap-2 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            Connect with me on LinkedIn
          </a>
        </div>

        {/* Contact form */}
        <div className="border-t border-border pt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Or send a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Name</label>
                  <Input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="bg-secondary/50 border-border focus:border-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Email</label>
                  <Input
                    type="email"
                    required
                    placeholder="john@company.com"
                    className="bg-secondary/50 border-border focus:border-primary/50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Project Details</label>
                <Textarea
                  rows={5}
                  required
                  placeholder="Tell me about your current bottleneck..."
                  className="bg-secondary/50 border-border focus:border-primary/50 rounded-lg resize-none"
                />
              </div>
              <Button
                disabled={status !== 'idle'}
                className="w-full h-12 bg-foreground text-background hover:bg-foreground/90 font-semibold transition-colors"
              >
                {status === 'idle' && (
                  <>
                    Send Message <ArrowRight size={18} className="ml-2" />
                  </>
                )}
                {status === 'sending' && 'Sending...'}
                {status === 'success' && (
                  <>
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2" /> Message Received
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

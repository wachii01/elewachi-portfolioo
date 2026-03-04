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
    <section className="py-32 px-6 md:px-12 bg-background" id="contact">
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
        <div className="flex justify-center mb-16">
          <a
            href="https://cal.com/elewachii/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-[#4101F6] hover:bg-[#3600cc] text-white font-semibold py-7 px-10 rounded-full shadow-xl shadow-[#4101F6]/20 hover:shadow-[#4101F6]/40 transition-all duration-300"
            >
              Book a Free Audit Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
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
                    className="bg-secondary/50 border-border focus:border-primary/50 rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Email</label>
                  <Input
                    type="email"
                    required
                    placeholder="john@company.com"
                    className="bg-secondary/50 border-border focus:border-primary/50 rounded-lg"
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
                className="w-full h-12 bg-foreground text-background hover:bg-foreground/90 font-semibold rounded-lg transition-colors"
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

const LetterSection = () => {
    return (
        <section className="py-16 px-6 md:px-12 bg-background" id="letter">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-5xl font-accent text-foreground mb-2">Letter</h2>
                <p className="text-muted-foreground mb-8 text-sm">To my next team and Employer</p>
                <div className="glass rounded-[2rem] p-8 md:p-12 shadow-2xl relative">
                    <h3 className="text-2xl font-accent text-foreground mb-8">To My Next Team,</h3>
                    <div className="space-y-6 text-muted-foreground font-light leading-relaxed text-sm md:text-base">
                        <p>
                            I see every role as a journey. My path into automation started with curiosity—wondering why brilliant people were stuck doing robotic tasks—and grew through the resilience of building solutions that actually work.
                        </p>
                        <p>
                            Each step has shown me how much can happen when systems are built to serve people, not the other way around. I have worked with teams across time zones and turned messy, manual workflows into sleek, autonomous operations. Along the way, I learned that true efficiency comes from steady effort and a deep understanding of the human process behind the data.
                        </p>
                        <p>
                            I know I still have much to learn, and I look forward to gaining that knowledge from the work we do together. Every new challenge is a chance to grow, and I embrace that growth with confidence in what I already bring. My belief is simple: leave every system stronger than I found it and help those around me reach further.
                        </p>
                        <p>
                            If we work together, I will bring focus and commitment. I will carry the skills I have grown, the hunger to keep learning, and the energy to move both the work and the team forward.
                        </p>
                        <p>
                            I would be honored to bring this drive to your team. Let us begin the journey together.
                        </p>
                    </div>
                    <div className="mt-12">
                        <p className="text-muted-foreground mb-2">Sincerely,</p>
                        <p className="text-4xl font-accent text-foreground">Elewachi</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LetterSection;

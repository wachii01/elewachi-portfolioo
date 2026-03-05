import thailandReview from '@/assets/thailand-client-review.mp4';
import { testimonials } from '@/data/portfolioData';

const ReviewsSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-transparent" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <span className="text-muted-foreground text-sm tracking-widest uppercase">Testimonials</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-16">
          What Clients Say
        </h2>

        {/* Testimonial carousel-style cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="relative p-8 md:p-10 border border-primary/50 bg-[#1a1a1a]"
            >

              <p className="text-foreground text-lg leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Video review */}
        <div className="max-w-3xl mx-auto">
          <div className="overflow-hidden border border-border shadow-xl">
            <video
              src={thailandReview}
              controls
              className="w-full aspect-video object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center text-muted-foreground text-sm mt-4">
            Video testimonial — Operations Director, Thailand
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

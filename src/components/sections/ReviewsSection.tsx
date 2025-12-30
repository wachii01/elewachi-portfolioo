import thailandReview from '@/assets/thailand-client-review.mp4';

const ReviewsSection = () => {
  return (
    <section className="py-20 px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-accent">
          Client <span className="text-primary">Reviews</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          What my clients say about working with me
        </p>
        
        <div className="flex justify-center">
          <div className="relative rounded-2xl overflow-hidden border border-border bg-background/50 shadow-xl max-w-2xl w-full">
            <video
              src={thailandReview}
              controls
              className="w-full aspect-video object-cover"
              poster=""
            >
              Your browser does not support the video tag.
            </video>
            <div className="p-6">
              <p className="text-muted-foreground text-center">
                Video review from a client in Thailand
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

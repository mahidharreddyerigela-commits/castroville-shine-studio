import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const ReviewsCarousel = () => {
  const [currentReview, setCurrentReview] = useState(0);
  
  const reviews = [
    {
      name: "Ashley Grogan",
      text: "Excellent service and quality work! The team was professional and completed my car tinting perfectly. Highly recommend H.P. Tint for anyone looking for reliable window tinting services.",
      rating: 5
    },
    {
      name: "Robin Breon", 
      text: "Outstanding results on our commercial storefront. The graphics look amazing and the tint has significantly reduced our cooling costs. Professional team from start to finish.",
      rating: 5
    },
    {
      name: "Gabriel Moreno",
      text: "Top-notch automotive tinting service. The ceramic film looks great and the installation was flawless. Will definitely be returning for my other vehicles.",
      rating: 5
    },
    {
      name: "Xavier Martinez",
      text: "Fantastic work on our home's solar film installation. Immediate difference in temperature and our energy bills have already dropped. Couldn't be happier!",
      rating: 5
    },
    {
      name: "Mia Love Emley",
      text: "Professional, reliable, and affordable. H.P. Tint exceeded our expectations with their commercial window services. The team is knowledgeable and efficient.",
      rating: 5
    },
    {
      name: "Reyes Manriquez",
      text: "Excellent customer service and quality installation. The industrial window film has improved our warehouse conditions significantly. Highly recommend their services!",
      rating: 5
    }
  ];

  // Auto-rotate reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-20 bg-brand-navy text-white" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="font-semibold text-lg">5.0 Google Rating</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-white/80">
            Real reviews from satisfied customers across Castroville
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 text-white/90">
                "{reviews[currentReview].text}"
              </blockquote>
              
              <cite className="font-display text-xl font-semibold text-accent">
                — {reviews[currentReview].name}
              </cite>
            </div>
          </div>
          
          {/* Navigation */}
          <button 
            onClick={prevReview}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button 
            onClick={nextReview}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
          
          {/* Review indicators */}
          <div className="flex justify-center mt-8 gap-3">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentReview === index ? 'bg-accent' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BeforeAfterGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/lovable-uploads/ptwf-luxury-suv-mercedes.jpeg",
      title: "Luxury SUV PremiumTech Tinting",
      description:
        "Professional PremiumTech ceramic tint installation on Mercedes-Benz SUV",
    },
    {
      image: "/lovable-uploads/4b1b3c9c-832a-4543-9cd9-b898727dde6e.png",
      title: "Classic & Modern Vehicle Tinting",
      description:
        "Expert PremiumTech film application on both vintage and contemporary vehicles",
    },
    {
      image: "/lovable-uploads/9e7ab8c2-d8b4-40af-b9fe-49feba4e6bc2.png",
      title: "Range Rover Premium Tinting",
      description:
        "High-end PremiumTech window film for luxury vehicle protection and privacy",
    },
    {
      image: "/lovable-uploads/01a02a7d-269a-4b4a-be3a-7aab2fbf7d79.png",
      title: "Residential Skylight Installation",
      description:
        "Professional PremiumTech film installation for residential energy efficiency",
    },
    {
      image: "/lovable-uploads/f90565c3-7ce3-4ce3-9559-b398332b6604.png",
      title: "Modern Home Window Tinting",
      description:
        "Residential PremiumTech films for comfort and energy savings",
    },
    {
      image: "/lovable-uploads/6b40dbfd-d825-418f-94a2-2075222af2b2.png",
      title: "Residential Exterior Protection",
      description:
        "Complete home window film solution with PremiumTech technology",
    },
    {
      image: "/lovable-uploads/91b189e5-c51d-4c5a-a8db-2737da652218.png",
      title: "Commercial Vehicle Tinting",
      description:
        "Professional PremiumTech installation for commercial fleet vehicles",
    },
    {
      image: "/lovable-uploads/24ca000f-eda2-4343-8e3c-5fe971c940f6.png",
      title: "Commercial Storefront",
      description:
        "Professional storefront and commercial window film solutions",
    },
    {
      image: "/lovable-uploads/967838c8-5e75-4edd-a361-4979e5332f4b.png",
      title: "Lake House Window Film",
      description:
        "Premium PremiumTech residential installation for lakefront property",
    },
    {
      image: "/lovable-uploads/e76eb60a-f5c8-438c-ade5-b56336dde93b.png",
      title: "Contemporary Home Tinting",
      description:
        "Modern residential PremiumTech film for enhanced comfort and style",
    },
    {
      image: "/lovable-uploads/bf61a768-f5ba-41ab-b12d-30c7595b3410.png",
      title: "Deck Area Window Protection",
      description:
        "PremiumTech films for outdoor living spaces and patio doors",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="gallery" className="py-20 bg-secondary" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Professional Work
          </h2>
          <p className="text-xl text-muted-foreground">
            Recent PremiumTech installations showcasing our quality and expertise
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-brand">
            <img
              src={slides[currentSlide]!.image}
              alt={slides[currentSlide]!.title}
              className="w-full h-96 md:h-[500px] object-cover"
            />

            {/* Overlay with project info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-navy/90 to-transparent p-8">
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                {slides[currentSlide]!.title}
              </h3>
              <p className="text-white/90">
                {slides[currentSlide]!.description}
              </p>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            aria-label="Previous project"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next project"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          {/* Slide indicators */}
          <div className="flex justify-center mt-6 gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-accent" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;

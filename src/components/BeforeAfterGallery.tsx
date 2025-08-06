import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import beforeAfter1 from "@/assets/before-after-1.jpg";
import beforeAfter2 from "@/assets/before-after-2.jpg";
import beforeAfter3 from "@/assets/before-after-3.jpg";
import beforeAfter4 from "@/assets/before-after-4.jpg";

const BeforeAfterGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: beforeAfter1,
      title: "Commercial Storefront Transformation",
      description: "Enhanced privacy and reduced glare for better customer experience"
    },
    {
      image: beforeAfter2,
      title: "Residential Solar Film Installation",
      description: "Dramatic heat reduction while maintaining natural light"
    },
    {
      image: beforeAfter3,
      title: "Automotive Ceramic Tint",
      description: "Premium privacy and UV protection for luxury vehicles"
    },
    {
      image: beforeAfter4,
      title: "Industrial Window Film",
      description: "Energy efficiency and equipment protection for warehouses"
    }
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
            See the Difference
          </h2>
          <p className="text-xl text-muted-foreground">
            Real results from our professional installations
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-brand">
            <img 
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-96 md:h-[500px] object-cover"
            />
            
            {/* Overlay with project info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-navy/90 to-transparent p-8">
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                {slides[currentSlide].title}
              </h3>
              <p className="text-white/90">
                {slides[currentSlide].description}
              </p>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          
          <button 
            onClick={nextSlide}
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
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-accent' : 'bg-muted'
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
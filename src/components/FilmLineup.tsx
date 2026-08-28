import { Check } from "lucide-react";

const FilmLineup = () => {
  const films = [
    {
      image: "/lovable-uploads/ptwf-premium-bmw.jpg",
      alt: "Red BMW M4 tinted with PremiumTech Premium AA Series window film",
      badge: "Premium AA Series",
      tagline: "Maximum performance, top-tier comfort",
      features: [
        "Richmond IR & Indy Ceramic IR options",
        "Up to 85% infrared heat rejection",
        "Over 99% UV rejection",
      ],
    },
    {
      image: "/lovable-uploads/ptwf-economy-lambo.jpg",
      alt: "Black Lamborghini Urus tinted with PremiumTech Economy Series window film",
      badge: "Economy Series",
      tagline: "Great looks and protection on a budget",
      features: [
        "Grand Touring Carbon & Grand AM Nano Ceramic",
        "Dyed & carbon options from 05%–86% VLT",
        "Excellent value without compromise",
      ],
    },
    {
      image: "/lovable-uploads/ptwf-selfremove-evoque.jpg",
      alt: "Red Range Rover Evoque with PremiumTech Self-Remove removable window film",
      badge: "Self-Remove Series",
      tagline: "Perfect for leased & rental vehicles",
      features: [
        "Removes cleanly with no adhesive residue",
        "Ideal for leases, rentals & fleets",
        "Same heat & UV protection while installed",
      ],
    },
  ];

  const scrollToQuote = () => {
    const element = document.getElementById("quote-form");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="film-lineup" className="py-20 bg-secondary" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Our PremiumTech Film Lineup
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We install PremiumTech Window Film (PTWF) exclusively — pick the
            series that fits your ride and your budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {films.map((film, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-brand group hover:scale-[1.03] transition-all duration-300 flex flex-col"
            >
              <div className="overflow-hidden bg-white">
                <img
                  src={film.image}
                  alt={film.alt}
                  loading="lazy"
                  className="w-full h-52 object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <span className="inline-block self-start bg-accent text-accent-foreground font-display font-semibold text-sm px-3 py-1 rounded-full mb-3">
                  {film.badge}
                </span>
                <p className="text-lg font-semibold text-primary mb-4">
                  {film.tagline}
                </p>
                <ul className="space-y-2 mb-6">
                  {film.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={scrollToQuote}
                  className="btn-navy mt-auto w-full"
                >
                  Get a Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilmLineup;

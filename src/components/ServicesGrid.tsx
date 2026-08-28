import { Building2, Store, Home, Car } from "lucide-react";

const ServicesGrid = () => {
  const services = [
    {
      icon: Building2,
      title: "Industrial PremiumTech Tinting",
      description:
        "PremiumTech films reduce heat & protect machinery. Ask for a tailored quote.",
      gradient: "from-brand-navy to-brand-navy/80",
    },
    {
      icon: Store,
      title: "Commercial Storefronts",
      description:
        "Branded graphics that pull customers in. Enquire today.",
      gradient: "from-accent to-accent/80",
    },
    {
      icon: Home,
      title: "Residential PremiumTech Solar Film",
      description:
        "PremiumTech films keep rooms cooler, lower bills. Get a free evaluation.",
      gradient: "from-brand-navy to-brand-navy/80",
    },
    {
      icon: Car,
      title: "Automotive PremiumTech Window Tint",
      description:
        "PremiumTech films keep you shaded on the road. Book your slot.",
      gradient: "from-accent to-accent/80",
    },
  ];

  const scrollToQuote = () => {
    const element = document.getElementById("quote-form");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 bg-background" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional PremiumTech window film solutions for every need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${service.gradient} p-8 text-white group hover:scale-105 transition-all duration-300 shadow-brand`}
            >
              <div className="relative z-10">
                <service.icon className="w-12 h-12 mb-6 opacity-90" />
                <h3 className="font-display text-2xl font-bold mb-4">
                  {service.title}
                </h3>
                <p className="text-white/90 mb-6 text-lg">
                  {service.description}
                </p>
                <button
                  onClick={scrollToQuote}
                  className="btn-outline border-white text-white hover:bg-white hover:text-primary"
                >
                  Enquire
                </button>
              </div>

              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;

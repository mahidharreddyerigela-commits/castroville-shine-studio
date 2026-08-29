import { Phone, FileText, Star } from "lucide-react";

const heroImage = "/lovable-uploads/2999464a-f48f-4cf6-b870-53245f723f66.png";

const HeroSection = () => {
  const scrollToQuote = () => {
    const element = document.getElementById("quote-form");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Company Header */}
      <header className="relative z-50 bg-brand-navy text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-2">
            <img
              src="/lovable-uploads/c05630c2-9a48-4dac-8d9f-7ec625f89229.png"
              alt="H.P. Tint Graphics and Signs logo"
              className="w-16 h-16 md:w-20 md:h-20"
            />
            <div>
              <h1 className="font-display text-2xl md:text-3xl font-bold">
                H.P. Tint Graphics and Signs
                <span className="block text-base md:text-lg font-medium text-white/80">
                  Professional Window Tinting in Castroville, TX
                </span>
              </h1>
            </div>
          </div>
          <p className="text-white/80 text-sm md:text-base">
            PremiumTech Window Film Installer & Vendor • Castroville, TX
          </p>
        </div>
      </header>

      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
        data-aos="fade-up"
      >
        {/* Navy overlay */}
        <div className="absolute inset-0 bg-brand-navy/70"></div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            PremiumTech Window Film for Every Surface
          </h2>

          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-lg md:text-xl">
              Trusted by businesses, homeowners & drivers
            </span>
            <div className="flex items-center gap-1">
              <span className="text-accent text-lg md:text-xl">•</span>
              <span className="text-lg md:text-xl">Google</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-lg md:text-xl font-semibold">5.0</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <a
              href="tel:+12109564089"
              className="btn-navy flex items-center gap-3 text-lg px-8 py-4 w-full sm:w-auto"
            >
              <Phone size={24} />
              <span>Call Now</span>
            </a>

            <button
              onClick={scrollToQuote}
              className="btn-amber flex items-center gap-3 text-lg px-8 py-4 w-full sm:w-auto"
            >
              <FileText size={24} />
              <span>Request a Quote</span>
            </button>
          </div>

          <div className="mt-12 text-sm md:text-base opacity-90">
            <p>
              Authorized PremiumTech installer & vendor • Lifetime warranty •
              Local Castroville experts
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

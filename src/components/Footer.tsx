import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              H.P. Tint Graphics and Signs
            </h3>
            <p className="text-primary-foreground/80 mb-4">
              Castroville's PremiumTech Window Film installer and vendor for
              industrial, commercial, residential and automotive projects.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/hptintgraphicsandsigns/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit H.P. Tint on Facebook"
                className="bg-accent text-accent-foreground p-3 rounded-full hover:scale-110 transition-transform duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/hptintgraphicsandsigns?igsh=NGFtanc4ZWExbzF0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit H.P. Tint on Instagram"
                className="bg-accent text-accent-foreground p-3 rounded-full hover:scale-110 transition-transform duration-300"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("reviews")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("quote-form")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              Our Services
            </h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Industrial Tinting</li>
              <li>Commercial Storefronts</li>
              <li>Residential Solar Film</li>
              <li>Automotive Window Tint</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  1306 US-90 W Suite 1
                  <br />
                  Castroville, TX 78009
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-accent flex-shrink-0" />
                <a
                  href="tel:+12109564089"
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  (210) 956-4089
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Mon-Fri: 9 AM - 4 PM
                  <br />
                  Saturday: By Appointment Only
                  <br />
                  Sunday: Closed
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2026 H.P. Tint Graphics and Signs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

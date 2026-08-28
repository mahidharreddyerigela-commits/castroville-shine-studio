import { MapPin, Clock, Phone, Mail } from "lucide-react";

const MapSection = () => {
  return (
    <section id="location" className="py-20 bg-background" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Visit Our Castroville Location
          </h2>
          <p className="text-xl text-muted-foreground">
            Conveniently located to serve San Antonio and surrounding areas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-brand">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.8234567890123!2d-98.87654321098765!3d29.35432109876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z1306%20US-90%20W%20Suite%201%2C%20Castroville%2C%20TX%2078009!5e0!3m2!1sen!2sus!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="H.P. Tint Location"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 shadow-brand">
              <h3 className="font-display text-2xl font-bold text-primary mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent rounded-full p-3">
                    <MapPin className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Address</h4>
                    <p className="text-muted-foreground">
                      1306 US-90 W Suite 1
                      <br />
                      Castroville, TX 78009
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent rounded-full p-3">
                    <Clock className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 9 AM - 5 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent rounded-full p-3">
                    <Phone className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Phone</h4>
                    <a
                      href="tel:+12109564089"
                      className="text-accent font-medium hover:underline"
                    >
                      (210) 956-4089
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent rounded-full p-3">
                    <Mail className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">
                      Service Area
                    </h4>
                    <p className="text-muted-foreground">
                      Castroville, San Antonio, and surrounding areas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;

import { Award, Shield, Star, MapPin } from "lucide-react";

const CertificationsStrip = () => {
  const certifications = [
    {
      icon: Award,
      name: "MaxPro Films Authorized Dealer",
      description: "Official MaxPro Films dealer status"
    },
    {
      icon: Shield,
      name: "SunTek® Certified",
      description: "Premium film installer"
    },
    {
      icon: Star,
      name: "BBB A+ Rating",
      description: "Better Business Bureau"
    },
    {
      icon: MapPin,
      name: "Local First SA",
      description: "Supporting local business"
    }
  ];

  return (
    <section id="certifications" className="py-16 bg-secondary" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
            Trusted & Certified
          </h2>
          <p className="text-lg text-muted-foreground">
            Partnered with industry leaders for quality assurance
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-4 group-hover:scale-110 group-hover:bg-accent transition-all duration-300">
                <cert.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-display text-lg font-semibold text-primary mb-2">
                {cert.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsStrip;
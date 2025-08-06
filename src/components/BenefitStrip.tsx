import { Zap, Shield, Eye, Award } from "lucide-react";

const BenefitStrip = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Energy Savings",
      description: "Reduce cooling costs up to 30%"
    },
    {
      icon: Shield,
      title: "UV & Heat Rejection",
      description: "99% UV protection guaranteed"
    },
    {
      icon: Eye,
      title: "Privacy & Security",
      description: "Enhanced privacy without darkness"
    },
    {
      icon: Award,
      title: "Lifetime Warranty",
      description: "Film & workmanship guaranteed"
    }
  ];

  return (
    <section id="benefits" className="py-16 bg-secondary" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-primary">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitStrip;
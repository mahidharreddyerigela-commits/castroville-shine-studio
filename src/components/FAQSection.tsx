import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "How long does tinting take?",
      answer: "Most tinting jobs take about 1-2 hours, depending on the size and complexity of the project. Automotive tinting typically takes 1-3 hours, while larger commercial or residential projects may take longer. We'll provide you with an accurate time estimate during your consultation."
    },
    {
      question: "Is my tint street-legal?",
      answer: "Yes, we strictly follow all Texas state regulations for window tinting. We ensure all automotive tints meet legal VLT (Visible Light Transmission) requirements, and we provide documentation to prove compliance. Our team stays updated on all local and state laws."
    },
    {
      question: "Do you offer warranty?",
      answer: "Absolutely! We provide a lifetime warranty on both the film and our workmanship. This covers bubbling, peeling, discoloration, and installation defects. We stand behind our quality work and use only premium MaxPro Films materials."
    },
    {
      question: "What types of film do you use?",
      answer: "We use only premium MaxPro Films from the industry leader in window film technology. MaxPro offers ceramic films, carbon films, and crystalline films for different performance needs and budgets. We'll recommend the best MaxPro option based on your specific requirements."
    },
    {
      question: "Can you remove old tint?",
      answer: "Yes, we provide professional tint removal services. We safely remove old, damaged, or bubbling tint without damaging your windows or leaving adhesive residue. This service is often included when you're upgrading to new, higher-quality MaxPro film."
    },
    {
      question: "Do you service commercial buildings?",
      answer: "Absolutely! We specialize in commercial MaxPro window film installation for offices, retail stores, restaurants, and industrial facilities. Our commercial services include energy-saving films, privacy films, decorative graphics, and safety/security films."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 bg-secondary" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our window tinting services
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full bg-card rounded-xl p-6 text-left hover:shadow-md transition-all duration-300 flex items-center justify-between"
              >
                <h3 className="font-display text-lg md:text-xl font-semibold text-primary pr-4">
                  {faq.question}
                </h3>
                {openFAQ === index ? (
                  <ChevronUp className="w-6 h-6 text-accent flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-accent flex-shrink-0" />
                )}
              </button>
              
              {openFAQ === index && (
                <div className="bg-card rounded-xl mt-2 p-6 pt-0">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

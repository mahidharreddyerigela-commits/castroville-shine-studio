import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    // For now, we'll just show a success message
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <section id="quote-form" className="py-20 bg-brand-navy text-white" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12">
              <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 className="font-display text-3xl font-bold mb-4">
                Thank You!
              </h2>
              <p className="text-xl text-white/90 mb-6">
                We've received your quote request and will contact you within 24 hours.
              </p>
              <p className="text-white/80">
                Need immediate assistance? Call us at{" "}
                <a href="tel:+12109564089" className="text-accent font-semibold hover:underline">
                  (210) 956-4089
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote-form" className="py-20 bg-brand-navy text-white" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-white/80">
            Tell us about your project and we'll provide a customized quote
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="(210) 555-0123"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                Project Type *
              </label>
              <select
                id="projectType"
                name="projectType"
                required
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              >
                <option value="" className="text-gray-800">Select project type</option>
                <option value="automotive" className="text-gray-800">Automotive Window Tint</option>
                <option value="residential" className="text-gray-800">Residential Solar Film</option>
                <option value="commercial" className="text-gray-800">Commercial Storefront</option>
                <option value="industrial" className="text-gray-800">Industrial Tinting</option>
                <option value="other" className="text-gray-800">Other</option>
              </select>
            </div>
            
            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                placeholder="Tell us more about your project, preferred timeline, or any specific requirements..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full btn-amber flex items-center justify-center gap-3 text-lg py-4"
            >
              <Send size={24} />
              <span>Send Quote Request</span>
            </button>
            
            <p className="text-sm text-white/70 text-center mt-4">
              * Required fields. We typically respond within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
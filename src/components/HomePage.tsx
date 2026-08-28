import { useEffect } from "react";

import HeroSection from "@/components/HeroSection";
import BenefitStrip from "@/components/BenefitStrip";
import ServicesGrid from "@/components/ServicesGrid";
import FilmLineup from "@/components/FilmLineup";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import CertificationsStrip from "@/components/CertificationsStrip";
import MapSection from "@/components/MapSection";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

export default function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    const elementsToAnimate = document.querySelectorAll("[data-aos]");
    elementsToAnimate.forEach((el) => {
      el.classList.add("fade-up");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitStrip />
      <ServicesGrid />
      <FilmLineup />
      <BeforeAfterGallery />
      <ReviewsCarousel />
      <CertificationsStrip />
      <MapSection />
      <FAQSection />
      <ContactForm />
      <Footer />
      <MobileStickyBar />
    </div>
  );
}

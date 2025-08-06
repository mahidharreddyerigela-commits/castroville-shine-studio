import { Phone, MessageCircle } from "lucide-react";

const MobileStickyBar = () => {
  return (
    <div className="mobile-sticky-bar md:hidden">
      <a 
        href="tel:+12109564089"
        className="flex-1 btn-navy flex items-center justify-center gap-2"
      >
        <Phone size={20} />
        <span className="font-semibold">CALL NOW</span>
      </a>
      <a 
        href="https://wa.me/12109564089"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 btn-amber flex items-center justify-center gap-2"
      >
        <MessageCircle size={20} />
        <span className="font-semibold">WhatsApp</span>
      </a>
    </div>
  );
};

export default MobileStickyBar;
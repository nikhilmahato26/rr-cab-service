import React from "react";
import { Phone, MessageSquare, CalendarCheck } from "lucide-react";
import { getPhoneLink, scrollToBooking } from "../../utils/contact";
import { getGeneralEnquiryUrl } from "../../utils/whatsapp";

export const MobileActionBar: React.FC = () => {
  const whatsappUrl = getGeneralEnquiryUrl();

  return (
    <nav
      aria-label="Mobile quick actions"
      className="fixed bottom-0 inset-x-0 z-40 bg-navy/95 backdrop-blur-lg border-t border-navy-light/80 p-2 sm:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.25)]"
    >
      <div className="grid grid-cols-3 gap-2">
        {/* Call Button */}
        <a
          href={getPhoneLink()}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-navy-light/90 active:bg-navy-light text-white font-semibold text-xs tracking-tight transition-transform active:scale-95"
          aria-label="Call RR Cab Service directly"
        >
          <Phone className="w-5 h-5 text-yellow mb-1" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366] text-white active:bg-[#20ba59] font-bold text-xs tracking-tight transition-transform active:scale-95 shadow-sm"
          aria-label="Message RR Cab Service on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 fill-white stroke-none mb-1" />
          <span>WhatsApp</span>
        </a>

        {/* Book Button */}
        <button
          onClick={() => scrollToBooking()}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-yellow text-navy font-black text-xs tracking-tight active:bg-yellow-hover transition-transform active:scale-95 shadow-yellow-glow"
          aria-label="Scroll to cab booking enquiry form"
        >
          <CalendarCheck className="w-5 h-5 text-navy mb-1" />
          <span>Book Cab</span>
        </button>
      </div>
    </nav>
  );
};

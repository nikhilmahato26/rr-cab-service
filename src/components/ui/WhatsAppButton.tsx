import React from "react";
import { MessageSquare } from "lucide-react";
import { getGeneralEnquiryUrl } from "../../utils/whatsapp";

export const WhatsAppFloatingButton: React.FC = () => {
  const whatsappUrl = getGeneralEnquiryUrl();

  return (
    <aside
      aria-label="Contact options"
      className="fixed bottom-20 sm:bottom-8 right-5 z-40 flex items-center group select-none"
    >
      {/* Tooltip on hover */}
      <span className="hidden md:inline-flex mr-3 px-3 py-1.5 rounded-lg bg-navy text-white text-xs font-semibold shadow-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        Chat on WhatsApp
      </span>

      {/* Button with ripple rings */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with RR Cab Service on WhatsApp"
        className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group-hover:bg-[#20ba59]"
      >
        {/* Subtle pulsing background ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-75 -z-10" />
        <MessageSquare className="w-7 h-7 fill-white stroke-none" />
      </a>
    </aside>
  );
};

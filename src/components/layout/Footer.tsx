import React from "react";
import { Logo } from "../ui/Logo";
import { BUSINESS_CONFIG } from "../../config/business";
import { VEHICLES } from "../../data/vehicles";
import { TRIP_TYPES } from "../../data/tripTypes";
import { getPhoneLink, getEmailLink, scrollToBooking } from "../../utils/contact";
import { Phone, Mail, MapPin, ArrowUp, MessageSquare } from "lucide-react";
import { getGeneralEnquiryUrl } from "../../utils/whatsapp";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Our Fleet", href: "#fleet" },
    { name: "Services", href: "#services" },
    { name: "Trip Types", href: "#trip-types" },
    { name: "Popular Destinations", href: "#destinations" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-navy text-white pt-16 pb-24 sm:pb-16 border-t border-navy-light/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-navy-light/40">
          {/* Brand & Intro (Cols 1 & 2 on lg) */}
          <div className="lg:col-span-2">
            <Logo variant="light" size="md" className="mb-4" />
            <p className="text-slate-300 text-sm leading-relaxed mt-4 max-w-md">
              Rajveer Ranveer Tours and Travels, also known as RR Cab Service, is based at Surur, Mahabaleshwar Phata, Wai, Satara, Maharashtra. We provide customers with vehicle options for local travel, outstation journeys, one-way trips, round trips, and destination travel enquiries.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={getGeneralEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366] text-white text-xs font-bold shadow-md hover:bg-[#20ba59] transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-white stroke-none" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href={getPhoneLink()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-navy-light text-white text-xs font-bold border border-yellow/20 hover:border-yellow transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-yellow" />
                <span>Call Us</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-extrabold text-base text-white tracking-wide uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-yellow rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-yellow transition-colors inline-block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Vehicles */}
          <div>
            <h4 className="font-heading font-extrabold text-base text-white tracking-wide uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-yellow rounded-full" />
              Our Vehicles
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {VEHICLES.map((v) => (
                <li key={v.id}>
                  <button
                    onClick={() => scrollToBooking({ vehicle: `${v.name} — ${v.rateDisplay}` })}
                    className="hover:text-yellow transition-colors text-left flex items-center justify-between w-full py-0.5 cursor-pointer"
                  >
                    <span>{v.name}</span>
                    <span className="text-xs font-bold text-yellow">{v.rateDisplay}</span>
                  </button>
                </li>
              ))}
            </ul>

            <h4 className="font-heading font-extrabold text-sm text-white tracking-wide uppercase mt-6 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-3 bg-yellow rounded-full" />
              Trip Types
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {TRIP_TYPES.map((t) => (
                <li key={t.id}>
                  <button
                    onClick={() => scrollToBooking({ tripType: t.name })}
                    className="hover:text-yellow transition-colors text-left cursor-pointer"
                  >
                    {t.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-heading font-extrabold text-base text-white tracking-wide uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-yellow rounded-full" />
              Contact
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-yellow mt-1 flex-shrink-0" />
                <a
                  href={getPhoneLink()}
                  className="hover:text-yellow transition-colors font-bold text-white"
                >
                  {BUSINESS_CONFIG.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-yellow mt-1 flex-shrink-0" />
                <a
                  href={getEmailLink()}
                  className="hover:text-yellow transition-colors break-all"
                >
                  {BUSINESS_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-yellow mt-1 flex-shrink-0" />
                <a
                  href={BUSINESS_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow transition-colors leading-relaxed"
                >
                  {BUSINESS_CONFIG.address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>{BUSINESS_CONFIG.copyright}</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-light text-slate-200 hover:text-yellow hover:bg-navy-border transition-colors cursor-pointer"
            aria-label="Scroll back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

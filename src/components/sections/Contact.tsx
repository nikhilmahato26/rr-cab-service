import React from "react";
import { BUSINESS_CONFIG } from "../../config/business";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  ExternalLink,
  CalendarCheck,
  Compass,
} from "lucide-react";
import { getPhoneLink, getEmailLink, scrollToBooking } from "../../utils/contact";
import { getGeneralEnquiryUrl } from "../../utils/whatsapp";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="GET IN TOUCH"
          title="CONTACT"
          highlightText="RR CAB SERVICE"
          description="Have questions about car availability, outstation journeys, or per-kilometre charges? Reach out through any of our direct contact channels."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Column 1: Contact Details & CTAs (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-card flex flex-col justify-between">
            <div>
              <div className="border-b border-slate-100 pb-6 mb-6">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">
                  Business Entity
                </span>
                <h3 className="text-2xl font-black font-heading text-navy">
                  {BUSINESS_CONFIG.businessName}
                </h3>
                <p className="text-sm font-bold text-yellow-dark uppercase tracking-wider mt-1">
                  Brand: {BUSINESS_CONFIG.brandName}
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-6 mb-8">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-navy flex items-center justify-center text-yellow flex-shrink-0 shadow-md">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Phone Number
                    </span>
                    <a
                      href={getPhoneLink()}
                      className="text-lg sm:text-xl font-black text-navy hover:text-yellow-dark transition-colors inline-block mt-0.5"
                    >
                      {BUSINESS_CONFIG.phoneDisplay}
                    </a>
                    <p className="text-xs text-charcoal-muted mt-0.5">
                      Available for route enquiries and direct phone assistance.
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-navy flex items-center justify-center text-yellow flex-shrink-0 shadow-md">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Email Address
                    </span>
                    <a
                      href={getEmailLink()}
                      className="text-base sm:text-lg font-bold text-navy hover:text-yellow-dark transition-colors inline-block mt-0.5 break-all"
                    >
                      {BUSINESS_CONFIG.email}
                    </a>
                    <p className="text-xs text-charcoal-muted mt-0.5">
                      Send your detailed travel plans and itinerary requirements.
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-navy flex items-center justify-center text-yellow flex-shrink-0 shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Office Location
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-navy mt-0.5 leading-relaxed">
                      {BUSINESS_CONFIG.address}
                    </p>
                    <p className="text-xs text-charcoal-muted mt-0.5">
                      Conveniently located at Surur, Mahabaleshwar Phata near Wai.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button
                variant="yellow"
                href={getPhoneLink()}
                icon={<Phone className="w-4 h-4" />}
                className="font-bold"
              >
                Call Now
              </Button>

              <Button
                variant="navy"
                href={getGeneralEnquiryUrl()}
                external
                icon={<MessageSquare className="w-4 h-4 text-yellow" />}
                className="font-bold"
              >
                WhatsApp Us
              </Button>

              <Button
                variant="outline"
                href={getEmailLink()}
                icon={<Mail className="w-4 h-4" />}
                className="font-bold"
              >
                Email Us
              </Button>

              <Button
                variant="white"
                onClick={() => scrollToBooking()}
                icon={<CalendarCheck className="w-4 h-4 text-navy" />}
                className="font-bold border border-slate-200"
              >
                Book a Cab
              </Button>
            </div>
          </div>

          {/* Column 2: Location Card with Google Maps Search Link (5 cols) */}
          <div className="lg:col-span-5 bg-navy rounded-3xl p-8 sm:p-10 text-white shadow-card flex flex-col justify-between relative overflow-hidden border border-navy-border">
            {/* Background Map Graphic Hint */}
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-64 h-64 bg-yellow/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-light text-yellow text-xs font-bold uppercase tracking-wider mb-4 border border-yellow/20">
                <Compass className="w-3.5 h-3.5" />
                <span>LOCATION & REACH</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black font-heading mb-4">
                VISIT US AT SURUR, WAI
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Strategically positioned at the Mahabaleshwar Phata on the highway junction at Surur, Wai, Satara. Ideally placed for quick access to Mahabaleshwar, Panchgani, Pune, Satara, and Kolhapur routes.
              </p>

              {/* Location Highlights Box */}
              <div className="bg-navy-light/80 rounded-2xl p-5 border border-white/10 mb-8 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-yellow uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>Key Proximity</span>
                </div>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                  <li>Surur Junction / Mahabaleshwar Phata</li>
                  <li>Wai Tehsil, Satara District</li>
                  <li>Convenient gateway to Western Ghats tourist spots</li>
                </ul>
              </div>
            </div>

            {/* Google Maps Search Action Link (no invented coordinates) */}
            <div>
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-yellow hover:bg-yellow-hover text-navy font-black text-sm uppercase tracking-wider shadow-yellow-glow transition-all duration-200"
              >
                <span>OPEN IN GOOGLE MAPS</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <p className="text-center text-[11px] text-slate-400 mt-3">
                Opens Google Maps search for: At/Surur, Mahabaleshwar Phata, Wai, Satara, Maharashtra
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

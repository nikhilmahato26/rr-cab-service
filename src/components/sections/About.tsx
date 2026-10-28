import React from "react";
import { Button } from "../ui/Button";
import { BUSINESS_CONFIG } from "../../config/business";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { getPhoneLink, getEmailLink } from "../../utils/contact";

export const About: React.FC = () => {
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-navy aspect-[4/3]">
              <img
                src="/images/dest-roadtrip.jpg"
                alt="Scenic Western Ghats mountain highway around Wai and Mahabaleshwar"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-navy/95 backdrop-blur-md rounded-2xl p-4 border border-yellow/30 text-white flex items-center gap-3.5 shadow-xl">
                  <div className="w-12 h-12 rounded-xl bg-navy-light/90 p-1 border border-yellow/30 flex items-center justify-center flex-shrink-0">
                    <img
                      src="/images/rr-logo.png"
                      alt="RR Cab Service Official Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-yellow uppercase tracking-wider mb-0.5">
                      Based in Maharashtra
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-200 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-yellow flex-shrink-0" />
                      Surur, Mahabaleshwar Phata, Wai, Satara
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent decorative block */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow/20 rounded-3xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-navy/10 rounded-3xl -z-10" />
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy text-yellow text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow" />
              ABOUT RR CAB SERVICE
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-navy tracking-tight leading-tight mb-6">
              YOUR TRAVEL PARTNER IN{" "}
              <span className="relative inline-block text-navy">
                <span className="relative z-10 px-1">WAI, SATARA</span>
                <span
                  className="absolute inset-x-0 bottom-1.5 h-3 sm:h-4 bg-yellow -z-10 rounded-sm -rotate-1"
                  aria-hidden="true"
                />
              </span>
            </h2>

            <div className="space-y-4 text-base text-charcoal-muted leading-relaxed mb-8">
              <p>
                Rajveer Ranveer Tours and Travels, also known as RR Cab Service, is based at Surur, Mahabaleshwar Phata, Wai, Satara, Maharashtra. We provide customers with vehicle options for local travel, outstation journeys, one-way trips, round trips, and destination travel enquiries.
              </p>
              <p>
                Our listed fleet includes Toyota Innova Crysta, Kia Carens Clavis with Sunroof, Maruti Suzuki Ertiga, and Hyundai Aura. Contact us to discuss your route, preferred vehicle, and applicable trip charges.
              </p>
            </div>

            {/* Quick Contact Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <a
                href={getPhoneLink()}
                className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-slate-200 hover:border-yellow transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center text-yellow group-hover:bg-yellow group-hover:text-navy transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    Phone Enquiry
                  </span>
                  <span className="text-sm font-black text-navy">
                    {BUSINESS_CONFIG.phoneDisplay}
                  </span>
                </div>
              </a>

              <a
                href={getEmailLink()}
                className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-slate-200 hover:border-yellow transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center text-yellow group-hover:bg-yellow group-hover:text-navy transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    Email Enquiry
                  </span>
                  <span className="text-xs font-bold text-navy truncate block">
                    {BUSINESS_CONFIG.email}
                  </span>
                </div>
              </a>
            </div>

            {/* CTA */}
            <Button
              variant="yellow"
              size="lg"
              onClick={handleContactClick}
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
              className="font-extrabold uppercase tracking-wider"
            >
              CONTACT RR CAB SERVICE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

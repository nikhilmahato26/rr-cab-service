import React from "react";
import { BookingForm } from "./BookingForm";
import { SectionHeading } from "../ui/SectionHeading";
import { BUSINESS_CONFIG } from "../../config/business";
import { Phone, MessageSquare, ShieldCheck, CheckCircle2 } from "lucide-react";
import { getPhoneLink } from "../../utils/contact";
import { getGeneralEnquiryUrl } from "../../utils/whatsapp";

export const BookingSection: React.FC = () => {
  return (
    <section id="booking-section" className="py-20 sm:py-28 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAST & RELIABLE ENQUIRY"
          title="LET'S PLAN YOUR"
          highlightText="NEXT JOURNEY"
          description="Submit your travel requirements below to generate an instant enquiry for RR Cab Service. We will review vehicle availability and confirm trip terms directly with you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Booking Form (8 cols on lg) */}
          <div className="lg:col-span-8">
            <BookingForm
              id="booking-form-main"
              isCompact={false}
              title="REQUEST A CAB BOOKING"
              eyebrow="TRIP DETAILS"
            />
          </div>

          {/* Quick Help & Assurance Sidebar (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Contact Card */}
            <div className="bg-navy rounded-3xl p-6 sm:p-7 text-white shadow-card border border-navy-border">
              <span className="text-xs font-bold text-yellow uppercase tracking-widest block mb-2">
                Need Faster Assistance?
              </span>
              <h4 className="text-xl font-black font-heading mb-3">
                Call or WhatsApp Directly
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Prefer to speak directly with the driver or travel operator? Reach out on phone or WhatsApp for quick route availability.
              </p>

              <div className="space-y-3">
                <a
                  href={getPhoneLink()}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-yellow text-navy font-black text-xs uppercase tracking-wider shadow-yellow-glow hover:bg-yellow-hover transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
                </a>

                <a
                  href={getGeneralEnquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#20ba59] transition-colors"
                >
                  <MessageSquare className="w-4 h-4 fill-white stroke-none" />
                  <span>WhatsApp Operator</span>
                </a>
              </div>
            </div>

            {/* Transparent Booking Promise */}
            <div className="bg-surface rounded-3xl p-6 border border-slate-200/90 shadow-sm">
              <h4 className="text-base font-extrabold font-heading text-navy mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-navy" />
                <span>Enquiry Principles</span>
              </h4>

              <ul className="space-y-3 text-xs text-charcoal-muted">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Upright listed rates:</strong> Per-kilometre rates are clearly visible before you submit.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>No unexpected fees:</strong> Tolls, parking, and driver allowances are discussed upfront.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct confirmation:</strong> Your enquiry is addressed directly by Rajveer Ranveer Tours and Travels.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { VEHICLES } from "../../data/vehicles";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { scrollToBooking } from "../../utils/contact";
import { AlertCircle, CheckCircle, ArrowRight } from "lucide-react";

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="HONEST & UPRIGHT PRICING"
          title="CLEAR"
          highlightText="PER-KILOMETRE RATES"
          description="We believe in straightforward per-kilometre rates so you know the vehicle costs upfront. Review our rates and request an estimate for your journey."
        />

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {VEHICLES.map((v, index) => {
            const isFeatured = index === 0; // Innova Crysta
            return (
              <div
                key={v.id}
                className={`rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between border ${
                  isFeatured
                    ? "bg-navy text-white border-yellow shadow-card-hover relative"
                    : "bg-white text-navy border-slate-200/90 shadow-card hover:shadow-card-hover"
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-yellow text-navy px-3.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider shadow-md">
                      Spacious Choice
                    </span>
                  </div>
                )}

                <div>
                  <h3
                    className={`text-xl font-extrabold font-heading mb-2 ${
                      isFeatured ? "text-white" : "text-navy"
                    }`}
                  >
                    {v.name}
                  </h3>

                  <div className="my-6">
                    <div className="flex items-baseline gap-1">
                      <span
                        className={`text-4xl sm:text-5xl font-black font-heading tracking-tight ${
                          isFeatured ? "text-yellow" : "text-navy"
                        }`}
                      >
                        ₹{v.ratePerKm}
                      </span>
                      <span
                        className={`text-sm font-semibold uppercase tracking-wider ${
                          isFeatured ? "text-slate-300" : "text-charcoal-muted"
                        }`}
                      >
                        / km
                      </span>
                    </div>
                    <span
                      className={`inline-block mt-1 text-xs font-medium ${
                        isFeatured ? "text-slate-300" : "text-slate-500"
                      }`}
                    >
                      Per kilometre running rate
                    </span>
                  </div>

                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      isFeatured ? "text-slate-200" : "text-charcoal-muted"
                    }`}
                  >
                    {v.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100/10">
                  <Button
                    variant={isFeatured ? "yellow" : "navy"}
                    fullWidth
                    onClick={() =>
                      scrollToBooking({ vehicle: `${v.name} — ${v.rateDisplay}` })
                    }
                    icon={<ArrowRight className="w-4 h-4" />}
                    iconPosition="right"
                  >
                    GET A TRIP ESTIMATE
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Rate Comparison Summary Table (For quick scanning) */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200/80 shadow-card overflow-hidden mb-10">
          <div className="bg-navy px-6 py-4 flex items-center justify-between text-white">
            <h4 className="font-heading font-black text-sm uppercase tracking-wider text-yellow">
              Rate Quick Reference Table
            </h4>
            <span className="text-xs text-slate-300">Base Running Rate</span>
          </div>
          <div className="divide-y divide-slate-100">
            {VEHICLES.map((v) => (
              <div
                key={v.id}
                className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="font-bold text-navy text-sm sm:text-base">
                    {v.name}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-black font-heading text-navy text-base sm:text-lg">
                    {v.rateDisplay}
                  </span>
                  <button
                    onClick={() =>
                      scrollToBooking({ vehicle: `${v.name} — ${v.rateDisplay}` })
                    }
                    className="hidden sm:inline-flex text-xs font-bold text-navy hover:text-yellow-dark underline cursor-pointer"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mandatory Rate Transparency Notice */}
        <div className="max-w-3xl mx-auto p-5 sm:p-6 rounded-2xl bg-amber-50 border border-amber-200/90 text-amber-950 flex items-start gap-4">
          <AlertCircle className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
          <div className="text-xs sm:text-sm leading-relaxed space-y-1.5">
            <p className="font-bold text-amber-900">Important Rate Notice:</p>
            <p>
              Rates are quoted per kilometre. Please confirm the total route distance, minimum billing requirements, tolls, parking, driver allowances, and any other applicable charges with the business before confirming your booking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

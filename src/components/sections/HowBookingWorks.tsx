import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { Map, Car, Send, CheckCircle2 } from "lucide-react";

export const HowBookingWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Step 1 — Choose Your Trip",
      description: "Select Local, Outstation, One Way, or Round Trip.",
      icon: <Map className="w-6 h-6 text-yellow" />,
    },
    {
      number: "02",
      title: "Step 2 — Select Your Vehicle",
      description:
        "Choose from Innova Crysta, Kia Carens Clavis with Sunroof, Ertiga, or Aura.",
      icon: <Car className="w-6 h-6 text-yellow" />,
    },
    {
      number: "03",
      title: "Step 3 — Send Your Enquiry",
      description:
        "Provide your pickup location, destination, travel date, and requirements.",
      icon: <Send className="w-6 h-6 text-yellow" />,
    },
    {
      number: "04",
      title: "Step 4 — Confirm Your Journey",
      description:
        "Discuss the route, final charges, vehicle availability, and applicable terms with the business.",
      icon: <CheckCircle2 className="w-6 h-6 text-yellow" />,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="EASY 4-STEP PROCESS"
          title="HOW BOOKING"
          highlightText="WORKS"
          description="A simple, straightforward enquiry process designed to get you the right vehicle with complete clarity."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center shadow-md">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-black font-heading text-slate-200 group-hover:text-yellow transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-black font-heading text-navy mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-charcoal-muted leading-relaxed">
                  {step.description}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                  <span className="text-xl font-bold">→</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

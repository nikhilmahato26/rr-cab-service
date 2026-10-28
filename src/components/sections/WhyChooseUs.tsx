import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import {
  Car,
  DollarSign,
  Compass,
  MapPin,
  MessageCircle,
} from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: <Car className="w-6 h-6 text-yellow" />,
      title: "Multiple Vehicle Options",
      description: "Choose from four listed vehicle options.",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-yellow" />,
      title: "Transparent Listed Rates",
      description: "View the supplied per-kilometre rates before enquiring.",
    },
    {
      icon: <Compass className="w-6 h-6 text-yellow" />,
      title: "Flexible Trip Enquiries",
      description: "Choose between local, outstation, one-way, and round-trip enquiries.",
    },
    {
      icon: <MapPin className="w-6 h-6 text-yellow" />,
      title: "Destination Enquiries",
      description: "Ask about travel to Mahabaleshwar, Lonavala, Shirdi, Goa, Mumbai, and other destinations.",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-yellow" />,
      title: "Direct Communication",
      description: "Contact the business by phone, WhatsApp, or email.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="SERVICE HIGHLIGHTS"
          title="WHY CHOOSE"
          highlightText="RR CAB SERVICE?"
          description="We focus on simple, transparent car hire with clear communication and dependable vehicles for your trips."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {points.map((item, idx) => (
            <div
              key={item.title}
              className={`p-7 rounded-2xl bg-surface border border-slate-200/80 hover:border-yellow/50 transition-all duration-300 shadow-sm hover:shadow-card hover:-translate-y-1 ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-5 shadow-md">
                {item.icon}
              </div>
              <h3 className="text-lg font-black font-heading text-navy mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

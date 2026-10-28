import React from "react";
import { SERVICES } from "../../data/services";
import { ServiceCard } from "../ui/ServiceCard";
import { SectionHeading } from "../ui/SectionHeading";

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="TAILORED TRAVEL OPTIONS"
          title="CAB SERVICES FOR"
          highlightText="EVERY JOURNEY"
          description="We provide reliable cab services designed to match your specific route, family group size, and travel schedule."
        />

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { VEHICLES } from "../../data/vehicles";
import { VehicleCard } from "../ui/VehicleCard";
import { SectionHeading } from "../ui/SectionHeading";
import { BUSINESS_CONFIG } from "../../config/business";
import { Info } from "lucide-react";

export const Fleet: React.FC = () => {
  return (
    <section id="fleet" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="OUR AVAILABLE FLEET"
          title="CHOOSE THE RIGHT CAR FOR YOUR"
          highlightText="JOURNEY"
          description="Explore our available vehicle options and their per-kilometre rates. Contact us to discuss your travel requirements and confirm the final trip cost."
        />

        {/* 4 Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {VEHICLES.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>

        {/* Mandatory Note below Fleet */}
        <div className="mt-12 max-w-3xl mx-auto p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3.5">
          <div className="w-8 h-8 rounded-xl bg-navy/5 flex items-center justify-center flex-shrink-0 text-navy mt-0.5">
            <Info className="w-4 h-4 text-navy" />
          </div>
          <div>
            <p className="text-sm font-semibold text-navy">
              {BUSINESS_CONFIG.fleetDisclaimer}
            </p>
            <p className="text-xs text-charcoal-muted mt-1 leading-relaxed">
              {BUSINESS_CONFIG.rateNotice}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

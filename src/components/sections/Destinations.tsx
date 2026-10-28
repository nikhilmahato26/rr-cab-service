import React from "react";
import { DESTINATIONS } from "../../data/destinations";
import { DestinationCard } from "../ui/DestinationCard";
import { SectionHeading } from "../ui/SectionHeading";

export const Destinations: React.FC = () => {
  return (
    <section id="destinations" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="WHERE DO YOU WANT TO GO?"
          title="POPULAR"
          highlightText="DESTINATIONS"
          description="Explore frequent travel destinations and enquire about your cab arrangements from Wai and Satara. Custom routes across Maharashtra and neighboring states are also welcome."
        />

        {/* 6 Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DESTINATIONS.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>

        {/* Destination Disclaimer Note */}
        <div className="mt-12 text-center text-xs text-charcoal-muted max-w-2xl mx-auto">
          <p>
            Destinations listed above represent popular routes for cab enquiries. RR Cab Service does not offer fixed tour packages, hotel bookings, or scheduled group itineraries. Please contact us to confirm your specific route, date, and vehicle availability.
          </p>
        </div>
      </div>
    </section>
  );
};

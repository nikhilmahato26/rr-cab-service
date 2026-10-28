import React from "react";
import type { Destination } from "../../data/destinations";
import { Button } from "./Button";
import { MapPin, ArrowUpRight } from "lucide-react";
import { scrollToBooking } from "../../utils/contact";

interface DestinationCardProps {
  destination: Destination;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  const handleEnquire = () => {
    scrollToBooking({
      destination: destination.name === "More Destinations" ? "" : destination.name,
    });
  };

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between">
      {/* Landscape Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        <img
          src={destination.image}
          alt={destination.altText}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 group-hover:opacity-95"
        />
        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-black/20" />

        {/* Tag Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy/90 backdrop-blur-md text-yellow text-xs font-bold uppercase tracking-wider border border-yellow/30 shadow-md">
            <MapPin className="w-3 h-3 text-yellow" />
            {destination.tag}
          </span>
        </div>

        {/* Destination Name on image bottom */}
        <div className="absolute bottom-3 left-4 right-4 z-10">
          <h3 className="text-2xl font-black text-white font-heading tracking-tight drop-shadow-md">
            {destination.name}
          </h3>
        </div>
      </div>

      {/* Description & Action */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-4">
        <p className="text-sm text-charcoal-muted leading-relaxed">
          {destination.description}
        </p>

        <Button
          variant="outline"
          size="sm"
          fullWidth
          onClick={handleEnquire}
          icon={<ArrowUpRight className="w-4 h-4 text-navy group-hover:text-white transition-colors" />}
          iconPosition="right"
          className="group-hover:border-navy"
        >
          {destination.buttonText}
        </Button>
      </div>
    </div>
  );
};

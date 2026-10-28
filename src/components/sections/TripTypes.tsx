import React from "react";
import { TRIP_TYPES } from "../../data/tripTypes";
import { SectionHeading } from "../ui/SectionHeading";
import { scrollToBooking } from "../../utils/contact";
import { Check, ArrowRight, MapPin, Compass, Navigation, Repeat } from "lucide-react";

export const TripTypes: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case "MapPin":
        return <MapPin className="w-6 h-6 text-yellow" />;
      case "Compass":
        return <Compass className="w-6 h-6 text-yellow" />;
      case "Navigation":
        return <Navigation className="w-6 h-6 text-yellow" />;
      case "Repeat":
        return <Repeat className="w-6 h-6 text-yellow" />;
      default:
        return <Compass className="w-6 h-6 text-yellow" />;
    }
  };

  const handleEnquire = (tripName: string) => {
    scrollToBooking({ tripType: tripName });
  };

  return (
    <section id="trip-types" className="py-20 sm:py-28 bg-navy text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-navy-light/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          dark
          eyebrow="FLEXIBLE TRAVEL OPTIONS"
          title="TRAVEL YOUR"
          highlightText="WAY"
          description="Whether you need transportation within the town or for long-distance intercity journeys, select your journey type and send an enquiry."
        />

        {/* 4 Large Trip-Type Cards with Navy backgrounds & Yellow checkmarks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRIP_TYPES.map((trip) => (
            <div
              key={trip.id}
              className="group bg-navy-light/80 hover:bg-navy-light border border-navy-border/80 hover:border-yellow/50 rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-1.5"
            >
              <div>
                {/* Header with Icon and Yellow Checkmark */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center border border-white/10 group-hover:border-yellow/40 transition-colors">
                    {getIcon(trip.iconName)}
                  </div>
                  <div className="w-7 h-7 rounded-full bg-yellow flex items-center justify-center text-navy shadow-sm">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                </div>

                {/* Sub-badge */}
                <span className="text-[11px] font-bold uppercase tracking-widest text-yellow font-heading">
                  {trip.badge}
                </span>

                {/* Trip Name */}
                <h3 className="text-2xl font-black text-white font-heading mt-1 mb-3">
                  {trip.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-8">
                  {trip.description}
                </p>
              </div>

              {/* Enquire Now Button */}
              <button
                onClick={() => handleEnquire(trip.name)}
                className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-navy hover:bg-yellow text-white hover:text-navy font-bold text-xs uppercase tracking-wider border border-white/10 hover:border-yellow transition-all duration-200 cursor-pointer"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

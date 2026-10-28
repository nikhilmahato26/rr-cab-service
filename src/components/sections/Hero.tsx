import React from "react";
import { Button } from "../ui/Button";
import { scrollToBooking } from "../../utils/contact";
import { Check, ChevronRight, Phone } from "lucide-react";
import { BUSINESS_CONFIG } from "../../config/business";

export const Hero: React.FC = () => {
  const heroHighlights = [
    "Local Travel",
    "Outstation Trips",
    "One-Way Trips",
    "Round Trips",
  ];

  const handleExploreFleet = (e: React.MouseEvent) => {
    e.preventDefault();
    const fleetSection = document.getElementById("fleet");
    if (fleetSection) {
      fleetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative bg-navy text-white overflow-hidden">
      {/* Background Hero Image with Deep Navy Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-maharashtra-road.jpg"
          alt="Scenic winding highway through the Western Ghats mountains near Wai and Mahabaleshwar"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
          priority-hint="high"
        />
        {/* Multilayer gradient for perfect contrast and modern luxury vibe */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-36">
        <div className="max-w-3xl">
          {/* Eyebrow with Brand Logo */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-navy/90 backdrop-blur-md p-1 border border-yellow/30 shadow-md flex items-center justify-center flex-shrink-0">
              <img
                src="/images/rr-logo.png"
                alt="RR Cab Service Official Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/80 backdrop-blur-md border border-yellow/30 text-yellow text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md">
              <span className="w-2 h-2 rounded-full bg-yellow animate-pulse" />
              <span>RR CAB SERVICE • WAI, SATARA, MAHARASHTRA</span>
            </div>
          </div>

          {/* Main Heading with Yellow Brush Accent */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
            EVERY JOURNEY STARTS WITH THE{" "}
            <span className="relative inline-block text-navy">
              <span className="relative z-10 px-2">RIGHT RIDE</span>
              <span
                className="absolute inset-x-0 bottom-1 sm:bottom-2 h-4 sm:h-7 bg-yellow -z-10 rounded -rotate-1"
                aria-hidden="true"
              />
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-normal mb-8 max-w-2xl drop-shadow">
            Travel comfortably with Rajveer Ranveer Tours and Travels. Explore our range of cars for local travel, outstation journeys, one-way trips, round trips, and visits to popular destinations across Maharashtra.
          </p>

          {/* Hero Highlights (Navy badge with yellow checkmark) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-10">
            {heroHighlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-navy/80 backdrop-blur-md border border-white/10 shadow-sm"
              >
                <div className="w-5 h-5 rounded-full bg-yellow flex items-center justify-center flex-shrink-0 text-navy">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                  {highlight}
                </span>
              </div>
            ))}
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button
              variant="yellow"
              size="lg"
              onClick={() => scrollToBooking()}
              icon={<ChevronRight className="w-5 h-5" />}
              iconPosition="right"
              className="text-base font-extrabold uppercase tracking-wider"
            >
              BOOK A CAB
            </Button>

            <Button
              variant="white"
              size="lg"
              onClick={handleExploreFleet}
              className="text-base font-bold"
            >
              EXPLORE OUR FLEET
            </Button>

            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-navy-light/60 backdrop-blur-md text-white hover:text-yellow text-sm font-semibold border border-white/10 transition-colors"
            >
              <Phone className="w-4 h-4 text-yellow" />
              <span>{BUSINESS_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

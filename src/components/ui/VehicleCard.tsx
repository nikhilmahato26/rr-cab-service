import React from "react";
import type { Vehicle } from "../../data/vehicles";
import { Button } from "./Button";
import { Phone, MessageSquare, ArrowRight } from "lucide-react";
import { getPhoneLink, scrollToBooking } from "../../utils/contact";
import { getVehicleEnquiryUrl } from "../../utils/whatsapp";

interface VehicleCardProps {
  vehicle: Vehicle;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  const whatsappUrl = getVehicleEnquiryUrl({
    vehicleName: vehicle.name,
    listedRate: vehicle.rateDisplay,
  });

  const handleBookClick = () => {
    scrollToBooking({ vehicle: `${vehicle.name} — ${vehicle.rateDisplay}` });
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between">
      {/* Top Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={vehicle.image}
          alt={vehicle.altText}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Floating Rate Tag */}
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-navy/95 backdrop-blur-md text-white px-3.5 py-1.5 rounded-xl border border-yellow/40 shadow-lg flex items-center gap-1.5">
            <span className="text-xs uppercase tracking-wider text-slate-300 font-medium">Rate:</span>
            <span className="text-lg font-black text-yellow tracking-tight">{vehicle.rateDisplay}</span>
          </div>
        </div>

        {/* Quick Badge */}
        <div className="absolute bottom-3 left-3 z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-sm text-navy text-[11px] font-bold uppercase tracking-wider shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Per Kilometre Basis
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2.5">
            <h3 className="text-xl font-extrabold text-navy font-heading group-hover:text-navy-light transition-colors">
              {vehicle.name}
            </h3>
          </div>

          <p className="text-sm text-charcoal-muted leading-relaxed mb-6">
            {vehicle.description}
          </p>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
          {/* Main Book Button */}
          <Button
            variant="yellow"
            fullWidth
            onClick={handleBookClick}
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
          >
            {vehicle.ctaText}
          </Button>

          {/* Quick Contact Row */}
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              size="sm"
              href={getPhoneLink()}
              icon={<Phone className="w-3.5 h-3.5" />}
              aria-label={`Call to book ${vehicle.name}`}
            >
              Call
            </Button>
            <Button
              variant="navy"
              size="sm"
              href={whatsappUrl}
              external
              icon={<MessageSquare className="w-3.5 h-3.5 text-yellow" />}
              aria-label={`WhatsApp enquiry for ${vehicle.name}`}
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

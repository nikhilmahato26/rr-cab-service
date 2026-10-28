import React from "react";
import type { ServiceItem } from "../../data/services";
import {
  MapPin,
  Compass,
  ArrowRightCircle,
  RotateCcw,
  Users,
  Map,
  ArrowRight,
} from "lucide-react";
import { scrollToBooking } from "../../utils/contact";

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const getIcon = () => {
    switch (service.iconName) {
      case "MapPin":
        return <MapPin className="w-6 h-6 text-yellow" />;
      case "Compass":
        return <Compass className="w-6 h-6 text-yellow" />;
      case "ArrowRightCircle":
        return <ArrowRightCircle className="w-6 h-6 text-yellow" />;
      case "RotateCcw":
        return <RotateCcw className="w-6 h-6 text-yellow" />;
      case "Users":
        return <Users className="w-6 h-6 text-yellow" />;
      case "Map":
        return <Map className="w-6 h-6 text-yellow" />;
      default:
        return <MapPin className="w-6 h-6 text-yellow" />;
    }
  };

  const handleEnquire = () => {
    scrollToBooking({
      tripType: service.prefillType,
      destination: service.prefillDestination,
    });
  };

  return (
    <div className="group bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      <div>
        {/* Icon & Index Badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110">
            {getIcon()}
          </div>
          <span className="text-xs font-bold text-navy/40 font-heading">
            SERVICE
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-extrabold text-navy font-heading mb-3 group-hover:text-navy-light transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-charcoal-muted leading-relaxed mb-6">
          {service.description}
        </p>
      </div>

      {/* Button */}
      <button
        onClick={handleEnquire}
        className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-yellow text-navy font-bold text-xs uppercase tracking-wider transition-all duration-200 group-hover:border-transparent cursor-pointer"
      >
        <span>Enquire About Service</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
};

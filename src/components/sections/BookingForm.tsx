import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  bookingSchema,
  TRIP_TYPE_OPTIONS,
  VEHICLE_OPTIONS,
} from "../../types/booking";
import type { BookingSchemaType } from "../../types/booking";
import { getBookingFormEnquiryUrl } from "../../utils/whatsapp";
import { BUSINESS_CONFIG } from "../../config/business";
import {
  Calendar,
  MapPin,
  Car,
  User,
  Phone,
  Mail,
  FileText,
  Check,
  Send,
  Info,
  CheckCircle2,
} from "lucide-react";
import { Button } from "../ui/Button";

interface BookingFormProps {
  id?: string;
  isCompact?: boolean;
  title?: string;
  eyebrow?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  id = "booking-section",
  isCompact = false,
  title = "LET'S PLAN YOUR NEXT JOURNEY",
  eyebrow = "ONLINE BOOKING ENQUIRY",
}) => {
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<BookingSchemaType>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      tripType: "Outstation",
      pickupLocation: "",
      destination: "",
      travelDate: "",
      returnDate: "",
      preferredVehicle: VEHICLE_OPTIONS[0],
      additionalRequirements: "",
    },
  });

  const selectedTripType = watch("tripType");

  // Listen to cross-component prefill events
  useEffect(() => {
    const handlePrefill = (
      e: CustomEvent<{ tripType?: string; vehicle?: string; destination?: string }>
    ) => {
      const { tripType, vehicle, destination } = e.detail;
      if (tripType) {
        const matched = TRIP_TYPE_OPTIONS.find(
          (t) => t.toLowerCase() === tripType.toLowerCase()
        );
        if (matched) setValue("tripType", matched);
      }
      if (vehicle) {
        const matchedV = VEHICLE_OPTIONS.find((v) =>
          v.toLowerCase().includes(vehicle.toLowerCase())
        );
        if (matchedV) setValue("preferredVehicle", matchedV);
      }
      if (destination) {
        setValue("destination", destination);
      }
    };

    window.addEventListener("rr-cab-prefill" as any, handlePrefill as any);
    return () =>
      window.removeEventListener("rr-cab-prefill" as any, handlePrefill as any);
  }, [setValue]);

  const onSubmit = (data: BookingSchemaType) => {
    // 1. Generate formatted WhatsApp URL
    const whatsappUrl = getBookingFormEnquiryUrl({
      fullName: data.fullName,
      phoneNumber: data.phoneNumber,
      email: data.email,
      tripType: data.tripType,
      pickupLocation: data.pickupLocation,
      destination: data.destination,
      travelDate: data.travelDate,
      returnDate: data.returnDate,
      preferredVehicle: data.preferredVehicle,
      additionalRequirements: data.additionalRequirements,
    });

    // 2. Set user confirmation banner
    setSubmittedMessage(
      "Your booking enquiry has been formatted! WhatsApp is opening so you can send your enquiry directly to RR Cab Service for confirmation."
    );

    // 3. Open WhatsApp using business number
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      id={id}
      className={`bg-white rounded-3xl border border-slate-200/90 shadow-card-hover overflow-hidden transition-all duration-300 ${
        isCompact ? "p-6 sm:p-8" : "p-6 sm:p-10 lg:p-12"
      }`}
    >
      {/* Header */}
      <div className="mb-8">
        {eyebrow && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy text-yellow text-xs font-bold uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow" />
            {eyebrow}
          </div>
        )}
        <h3 className="text-2xl sm:text-3xl font-black font-heading text-navy tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-charcoal-muted mt-2">
          Fill in your journey requirements. We will prepare your enquiry to discuss vehicle availability, final charges, and trip details.
        </p>
      </div>

      {/* Confirmation Alert Banner */}
      {submittedMessage && (
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
          <div className="text-sm">
            <p className="font-bold">{submittedMessage}</p>
            <p className="text-emerald-700 text-xs mt-1">
              Note: This is an enquiry. Official booking requires confirmation of distance, vehicle availability, and applicable charges from RR Cab Service.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Trip Type Selector - Navy Labels with Yellow Checkmarks */}
        <div>
          <label className="block text-xs font-bold font-heading uppercase tracking-wider text-navy mb-2.5">
            Select Trip Type <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {TRIP_TYPE_OPTIONS.map((type) => {
              const isSelected = selectedTripType === type;
              return (
                <button
                  type="button"
                  key={type}
                  onClick={() => setValue("tripType", type)}
                  className={`flex items-center justify-between p-3 rounded-xl border-2 transition-all cursor-pointer select-none text-left ${
                    isSelected
                      ? "bg-navy text-white border-navy shadow-md ring-2 ring-yellow/50"
                      : "bg-surface text-navy border-slate-200 hover:border-slate-300 hover:bg-slate-100"
                  }`}
                  aria-pressed={isSelected}
                >
                  <span className="font-heading font-extrabold text-sm tracking-tight">
                    {type}
                  </span>
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${
                      isSelected
                        ? "bg-yellow text-navy"
                        : "bg-slate-200 text-transparent"
                    }`}
                  >
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                </button>
              );
            })}
          </div>
          {errors.tripType && (
            <p className="text-xs text-red-600 mt-1 font-medium">
              {errors.tripType.message}
            </p>
          )}
        </div>

        {/* 2-Column Responsive Inputs: Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs font-bold font-heading uppercase tracking-wider text-navy mb-1.5"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-3.5 pointer-events-none" />
              <input
                id="fullName"
                type="text"
                placeholder="e.g. Rahul Sharma"
                {...register("fullName")}
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl border bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                  errors.fullName
                    ? "border-red-400 focus:ring-red-200"
                    : "border-slate-300 focus:border-navy focus:ring-navy/20"
                }`}
              />
            </div>
            {errors.fullName && (
              <p className="text-xs text-red-600 mt-1 font-medium">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-xs font-bold font-heading uppercase tracking-wider text-navy mb-1.5"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-3.5 pointer-events-none" />
              <input
                id="phoneNumber"
                type="tel"
                placeholder="e.g. 9876543210"
                {...register("phoneNumber")}
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl border bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                  errors.phoneNumber
                    ? "border-red-400 focus:ring-red-200"
                    : "border-slate-300 focus:border-navy focus:ring-navy/20"
                }`}
              />
            </div>
            {errors.phoneNumber && (
              <p className="text-xs text-red-600 mt-1 font-medium">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>
        </div>

        {/* Email Address (Optional) */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-bold font-heading uppercase tracking-wider text-navy mb-1.5 flex items-center justify-between"
          >
            <span>Email Address</span>
            <span className="text-[11px] font-normal text-slate-400 lowercase">
              optional
            </span>
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-3.5 pointer-events-none" />
            <input
              id="email"
              type="email"
              placeholder="e.g. rahul@example.com"
              {...register("email")}
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl border bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                errors.email
                  ? "border-red-400 focus:ring-red-200"
                  : "border-slate-300 focus:border-navy focus:ring-navy/20"
              }`}
            />
          </div>
          {errors.email && (
            <p className="text-xs text-red-600 mt-1 font-medium">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* 2-Column Responsive Inputs: Pickup & Destination */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="pickupLocation"
              className="block text-xs font-bold font-heading uppercase tracking-wider text-navy mb-1.5"
            >
              Pickup Location <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-3.5 pointer-events-none" />
              <input
                id="pickupLocation"
                type="text"
                placeholder="e.g. Wai, Satara, Surur..."
                {...register("pickupLocation")}
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl border bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                  errors.pickupLocation
                    ? "border-red-400 focus:ring-red-200"
                    : "border-slate-300 focus:border-navy focus:ring-navy/20"
                }`}
              />
            </div>
            {errors.pickupLocation && (
              <p className="text-xs text-red-600 mt-1 font-medium">
                {errors.pickupLocation.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="destination"
              className="block text-xs font-bold font-heading uppercase tracking-wider text-navy mb-1.5"
            >
              Destination <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-yellow-dark absolute left-3.5 top-3.5 pointer-events-none" />
              <input
                id="destination"
                type="text"
                placeholder="e.g. Mahabaleshwar, Pune, Mumbai, Goa..."
                {...register("destination")}
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl border bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                  errors.destination
                    ? "border-red-400 focus:ring-red-200"
                    : "border-slate-300 focus:border-navy focus:ring-navy/20"
                }`}
              />
            </div>
            {errors.destination && (
              <p className="text-xs text-red-600 mt-1 font-medium">
                {errors.destination.message}
              </p>
            )}
          </div>
        </div>

        {/* Preferred Vehicle Dropdown */}
        <div>
          <label
            htmlFor="preferredVehicle"
            className="block text-xs font-bold font-heading uppercase tracking-wider text-navy mb-1.5"
          >
            Preferred Vehicle <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Car className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-3.5 pointer-events-none" />
            <select
              id="preferredVehicle"
              {...register("preferredVehicle")}
              className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-300 bg-slate-50/50 text-sm font-semibold text-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all appearance-none cursor-pointer"
            >
              {VEHICLE_OPTIONS.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-navy">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
          {errors.preferredVehicle && (
            <p className="text-xs text-red-600 mt-1 font-medium">
              {errors.preferredVehicle.message}
            </p>
          )}
        </div>

        {/* 2-Column Dates: Travel Date & Return Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="travelDate"
              className="block text-xs font-bold font-heading uppercase tracking-wider text-navy mb-1.5"
            >
              Travel Date <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-3.5 pointer-events-none" />
              <input
                id="travelDate"
                type="date"
                {...register("travelDate")}
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl border bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                  errors.travelDate
                    ? "border-red-400 focus:ring-red-200"
                    : "border-slate-300 focus:border-navy focus:ring-navy/20"
                }`}
              />
            </div>
            {errors.travelDate && (
              <p className="text-xs text-red-600 mt-1 font-medium">
                {errors.travelDate.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="returnDate"
              className="block text-xs font-bold font-heading uppercase tracking-wider text-navy mb-1.5 flex items-center justify-between"
            >
              <span>Return Date</span>
              <span className="text-[11px] font-normal text-slate-400 lowercase">
                optional
              </span>
            </label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-3.5 pointer-events-none" />
              <input
                id="returnDate"
                type="date"
                {...register("returnDate")}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all"
              />
            </div>
          </div>
        </div>

        {/* Additional Requirements (Optional) */}
        <div>
          <label
            htmlFor="additionalRequirements"
            className="block text-xs font-bold font-heading uppercase tracking-wider text-navy mb-1.5 flex items-center justify-between"
          >
            <span>Additional Requirements</span>
            <span className="text-[11px] font-normal text-slate-400 lowercase">
              optional
            </span>
          </label>
          <div className="relative">
            <FileText className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-3.5 pointer-events-none" />
            <textarea
              id="additionalRequirements"
              rows={2}
              placeholder="e.g. Specific pickup time, extra stops, or notes..."
              {...register("additionalRequirements")}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all resize-none"
            />
          </div>
        </div>

        {/* Rate Transparency & Confirmation Notice */}
        <div className="p-4 rounded-xl bg-surface border border-slate-200/80 text-xs text-charcoal-muted flex items-start gap-3">
          <Info className="w-4 h-4 text-navy mt-0.5 flex-shrink-0" />
          <div className="space-y-1">
            <p className="font-semibold text-navy">
              {BUSINESS_CONFIG.rateNotice}
            </p>
            <p>
              Please note: Submitting this form creates a formatted enquiry. Final booking is confirmed after discussing route details with the business.
            </p>
          </div>
        </div>

        {/* Submit CTA */}
        <Button
          type="submit"
          variant="yellow"
          fullWidth
          size="lg"
          disabled={isSubmitting}
          icon={<Send className="w-5 h-5 text-navy" />}
          iconPosition="right"
          className="text-base font-black uppercase tracking-wider"
        >
          {isCompact ? "REQUEST A BOOKING" : "SEND BOOKING ENQUIRY"}
        </Button>
      </form>
    </div>
  );
};

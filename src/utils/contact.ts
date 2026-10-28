import { BUSINESS_CONFIG } from "../config/business";

export const getPhoneLink = (): string => `tel:${BUSINESS_CONFIG.phoneRaw}`;
export const getEmailLink = (subject: string = "Cab Booking Enquiry"): string =>
  `mailto:${BUSINESS_CONFIG.email}?subject=${encodeURIComponent(subject)}`;

export const scrollToBooking = (params?: {
  tripType?: string;
  vehicle?: string;
  destination?: string;
}) => {
  const element = document.getElementById("booking-section");
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // Dispatch custom event for prefilling form
  if (params && (params.tripType || params.vehicle || params.destination)) {
    window.dispatchEvent(
      new CustomEvent("rr-cab-prefill", {
        detail: params,
      })
    );
  }
};

import { BUSINESS_CONFIG } from "../config/business";

export interface BookingFormData {
  fullName: string;
  phoneNumber: string;
  email?: string;
  tripType: string;
  pickupLocation: string;
  destination: string;
  travelDate: string;
  returnDate?: string;
  preferredVehicle: string;
  additionalRequirements?: string;
}

/**
 * Creates a direct WhatsApp link with pre-filled message
 */
export const createWhatsAppUrl = (message: string): string => {
  return `https://wa.me/${BUSINESS_CONFIG.phoneClean}?text=${encodeURIComponent(message)}`;
};

/**
 * General Enquiry Message
 */
export const getGeneralEnquiryUrl = (): string => {
  const message =
    "Hello RR Cab Service, I would like to enquire about your cab services. Please share the available options and booking details.";
  return createWhatsAppUrl(message);
};

/**
 * Vehicle-Specific Enquiry Message
 */
export const getVehicleEnquiryUrl = (params: {
  vehicleName: string;
  listedRate: string;
  pickupLocation?: string;
  destination?: string;
  tripType?: string;
  travelDate?: string;
  returnDate?: string;
}): string => {
  const lines: string[] = [
    "Hello RR Cab Service, I am interested in booking the following vehicle.\n",
    `Vehicle: ${params.vehicleName}`,
    `Listed Rate: ${params.listedRate}`,
  ];

  if (params.pickupLocation) lines.push(`Pickup Location: ${params.pickupLocation}`);
  if (params.destination) lines.push(`Destination: ${params.destination}`);
  if (params.tripType) lines.push(`Trip Type: ${params.tripType}`);
  if (params.travelDate) lines.push(`Travel Date: ${params.travelDate}`);
  if (params.returnDate) lines.push(`Return Date: ${params.returnDate}`);

  lines.push("\nPlease confirm vehicle availability, route distance, final charges, and applicable terms.");

  return createWhatsAppUrl(lines.join("\n"));
};

/**
 * Destination Enquiry Message
 */
export const getDestinationEnquiryUrl = (params: {
  destination: string;
  pickupLocation?: string;
  tripType?: string;
  travelDate?: string;
  preferredVehicle?: string;
}): string => {
  const lines: string[] = [
    `Hello RR Cab Service, I would like to enquire about a cab journey to ${params.destination}.\n`,
  ];

  if (params.pickupLocation) lines.push(`Pickup Location: ${params.pickupLocation}`);
  lines.push(`Destination: ${params.destination}`);
  if (params.tripType) lines.push(`Trip Type: ${params.tripType}`);
  if (params.travelDate) lines.push(`Travel Date: ${params.travelDate}`);
  if (params.preferredVehicle) lines.push(`Preferred Vehicle: ${params.preferredVehicle}`);

  lines.push("\nPlease share the available options and applicable charges.");

  return createWhatsAppUrl(lines.join("\n"));
};

/**
 * Booking Enquiry Form Message Generator
 */
export const getBookingFormEnquiryUrl = (data: BookingFormData): string => {
  const lines: string[] = [
    "Hello RR Cab Service, I would like to send a cab booking enquiry with the following details:\n",
    `Name: ${data.fullName}`,
    `Phone: ${data.phoneNumber}`,
  ];

  if (data.email && data.email.trim()) {
    lines.push(`Email: ${data.email.trim()}`);
  }

  lines.push(`Trip Type: ${data.tripType}`);
  lines.push(`Pickup Location: ${data.pickupLocation}`);
  lines.push(`Destination: ${data.destination}`);
  lines.push(`Travel Date: ${data.travelDate}`);

  if (data.returnDate && data.returnDate.trim()) {
    lines.push(`Return Date: ${data.returnDate.trim()}`);
  }

  lines.push(`Preferred Vehicle: ${data.preferredVehicle}`);

  if (data.additionalRequirements && data.additionalRequirements.trim()) {
    lines.push(`Additional Requirements: ${data.additionalRequirements.trim()}`);
  }

  lines.push("\nPlease confirm vehicle availability, route distance, final charges, and applicable terms.");

  return createWhatsAppUrl(lines.join("\n"));
};

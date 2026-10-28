import { z } from "zod";

export const TRIP_TYPE_OPTIONS = [
  "Local",
  "Outstation",
  "One Way",
  "Round Trip",
] as const;

export const VEHICLE_OPTIONS = [
  "Toyota Innova Crysta — ₹20/km",
  "Kia Carens Clavis with Sunroof — ₹18/km",
  "Maruti Suzuki Ertiga — ₹15/km",
  "Hyundai Aura — ₹14/km",
  "Any Available Vehicle",
] as const;

export const bookingSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Please enter your full name (at least 2 characters)" }),
  phoneNumber: z
    .string()
    .regex(/^[0-9+\s-]{10,15}$/, { message: "Please enter a valid 10-digit phone number" }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .optional()
    .or(z.literal("")),
  tripType: z.enum(TRIP_TYPE_OPTIONS),
  pickupLocation: z
    .string()
    .min(2, { message: "Please enter your pickup location" }),
  destination: z
    .string()
    .min(2, { message: "Please enter your destination" }),
  travelDate: z
    .string()
    .min(1, { message: "Please select your travel date" }),
  returnDate: z.string().optional().or(z.literal("")),
  preferredVehicle: z.string().min(1, { message: "Please select a preferred vehicle" }),
  additionalRequirements: z.string().optional().or(z.literal("")),
});

export type BookingSchemaType = z.infer<typeof bookingSchema>;

export const BUSINESS_CONFIG = {
  businessName: "Rajveer Ranveer Tours and Travels",
  brandName: "RR Cab Service",
  tagline: "Every Journey Starts with the Right Ride",
  phoneDisplay: "+91 9096989585",
  phoneRaw: "+919096989585",
  phoneClean: "919096989585",
  email: "rajveertravels2023@gmail.com",
  address: "At/Surur, Mahabaleshwar Phata, Wai, Satara, Maharashtra – 415517, India.",
  addressShort: "Surur, Mahabaleshwar Phata, Wai, Satara, Maharashtra – 415517",
  locationName: "Surur, Mahabaleshwar Phata, Wai, Satara",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Surur+Mahabaleshwar+Phata+Wai+Satara+Maharashtra+415517",
  
  // Per-kilometre rate note
  rateNotice: "Rates are quoted per kilometre. Please contact us to confirm trip distance, minimum billing requirements, tolls, parking, driver allowances, and other applicable charges.",
  
  // Rate disclaimer below fleet
  fleetDisclaimer: "Listed rates are per kilometre. Final trip charges and applicable conditions should be confirmed directly with RR Cab Service.",
  
  // Confirmation reminder
  contactPrompt: "CONTACT US TO CONFIRM YOUR TRIP DETAILS",

  // Copyright
  copyright: "© 2026 Rajveer Ranveer Tours and Travels. All rights reserved."
} as const;

export type BusinessConfig = typeof BUSINESS_CONFIG;

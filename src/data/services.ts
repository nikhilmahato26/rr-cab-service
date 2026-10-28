export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  prefillType?: string;
  prefillDestination?: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "local-cab",
    title: "1. Local Cab Service",
    description: "Enquire about cab travel for local journeys and nearby destinations.",
    iconName: "MapPin",
    prefillType: "Local",
  },
  {
    id: "outstation-cab",
    title: "2. Outstation Cab Service",
    description: "Discuss your planned intercity journey and vehicle requirements.",
    iconName: "Compass",
    prefillType: "Outstation",
  },
  {
    id: "one-way-cab",
    title: "3. One-Way Cab",
    description: "Contact us about transportation for one-way journeys.",
    iconName: "ArrowRightCircle",
    prefillType: "One Way",
  },
  {
    id: "round-trip-cab",
    title: "4. Round-Trip Cab",
    description: "Enquire about cab arrangements for journeys with a return trip.",
    iconName: "RotateCcw",
    prefillType: "Round Trip",
  },
  {
    id: "family-travel",
    title: "5. Family Travel",
    description: "Explore the available vehicles for your family travel requirements.",
    iconName: "Users",
    prefillType: "Round Trip",
  },
  {
    id: "destination-travel",
    title: "6. Destination Travel",
    description: "Enquire about travelling to popular destinations such as Mahabaleshwar, Lonavala, Shirdi, Goa, and Mumbai.",
    iconName: "Map",
    prefillDestination: "Mahabaleshwar",
  },
];

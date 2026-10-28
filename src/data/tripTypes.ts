export interface TripType {
  id: string;
  name: string;
  badge: string;
  description: string;
  iconName: string;
}

export const TRIP_TYPES: TripType[] = [
  {
    id: "local",
    name: "Local",
    badge: "Local Cab",
    description: "For local travel enquiries around your preferred location.",
    iconName: "MapPin",
  },
  {
    id: "outstation",
    name: "Outstation",
    badge: "Intercity Journey",
    description: "For journeys between cities and destinations.",
    iconName: "Compass",
  },
  {
    id: "one-way",
    name: "One Way",
    badge: "Single Direction",
    description: "For trips where you need transportation in one direction.",
    iconName: "Navigation",
  },
  {
    id: "round-trip",
    name: "Round Trip",
    badge: "Return Journey",
    description: "For journeys that include a return trip.",
    iconName: "Repeat",
  },
];

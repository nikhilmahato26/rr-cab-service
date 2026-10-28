export interface Vehicle {
  id: string;
  name: string;
  ratePerKm: number;
  rateDisplay: string;
  description: string;
  ctaText: string;
  image: string;
  altText: string;
}

export const VEHICLES: Vehicle[] = [
  {
    id: "innova-crysta",
    name: "Toyota Innova Crysta",
    ratePerKm: 20,
    rateDisplay: "₹20/km",
    description: "An option for customers looking for a spacious vehicle for family and outstation travel.",
    ctaText: "BOOK INNOVA CRYSTA",
    image: "/images/innova-crysta.jpg",
    altText: "Pearl white Toyota Innova Crysta MPV parked overlooking scenic Maharashtra mountains",
  },
  {
    id: "kia-carens-clavis",
    name: "Kia Carens Clavis with Sunroof",
    ratePerKm: 18,
    rateDisplay: "₹18/km",
    description: "Explore this vehicle option for your planned journey and travel requirements.",
    ctaText: "BOOK KIA CARENS CLAVIS",
    image: "/images/kia-carens-clavis.jpg",
    altText: "Modern Kia Carens Clavis with Sunroof in imperial blue on mountain highway",
  },
  {
    id: "maruti-ertiga",
    name: "Maruti Suzuki Ertiga",
    ratePerKm: 15,
    rateDisplay: "₹15/km",
    description: "An option for family journeys and planned travel.",
    ctaText: "BOOK ERTIGA",
    image: "/images/maruti-ertiga.jpg",
    altText: "Maruti Suzuki Ertiga family vehicle on highway roadside",
  },
  {
    id: "hyundai-aura",
    name: "Hyundai Aura",
    ratePerKm: 14,
    rateDisplay: "₹14/km",
    description: "Explore this vehicle option for your local or longer-distance travel requirements.",
    ctaText: "BOOK AURA",
    image: "/images/hyundai-aura.jpg",
    altText: "White Hyundai Aura sedan on scenic hillside road",
  },
];

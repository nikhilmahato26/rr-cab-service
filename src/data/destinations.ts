export interface Destination {
  id: string;
  name: string;
  tag: string;
  description: string;
  image: string;
  altText: string;
  buttonText: string;
}

export const DESTINATIONS: Destination[] = [
  {
    id: "mahabaleshwar",
    name: "Mahabaleshwar",
    tag: "Hill Station Enquiry",
    description: "Plan a journey to Mahabaleshwar and enquire about your cab requirements.",
    image: "/images/dest-mahabaleshwar.jpg",
    altText: "Scenic viewpoint in Mahabaleshwar overlooking green valleys and mountains",
    buttonText: "ENQUIRE ABOUT THIS DESTINATION",
  },
  {
    id: "lonavala",
    name: "Lonavala",
    tag: "Scenic Hills Enquiry",
    description: "Enquire about cab travel to Lonavala and its scenic surroundings.",
    image: "/images/dest-lonavala.jpg",
    altText: "Lush green valley and waterfalls in Lonavala Khandala ghats",
    buttonText: "ENQUIRE ABOUT THIS DESTINATION",
  },
  {
    id: "shirdi",
    name: "Shirdi",
    tag: "Pilgrimage Travel Enquiry",
    description: "Contact us to discuss travel arrangements for a visit to Shirdi.",
    image: "/images/dest-shirdi.jpg",
    altText: "Serene golden temple architecture and courtyard in Shirdi",
    buttonText: "ENQUIRE ABOUT THIS DESTINATION",
  },
  {
    id: "goa",
    name: "Goa",
    tag: "Coastal Road Trip Enquiry",
    description: "Enquire about your planned journey to Goa.",
    image: "/images/dest-goa.jpg",
    altText: "Tropical coastal highway along turquoise Arabian sea with palm trees in Goa",
    buttonText: "ENQUIRE ABOUT THIS DESTINATION",
  },
  {
    id: "mumbai",
    name: "Mumbai",
    tag: "City Travel Enquiry",
    description: "Plan a cab journey to Mumbai and confirm your travel requirements.",
    image: "/images/dest-mumbai.jpg",
    altText: "Panoramic view of Bandra-Worli Sea Link and Mumbai skyline at sunset",
    buttonText: "ENQUIRE ABOUT THIS DESTINATION",
  },
  {
    id: "more-destinations",
    name: "More Destinations",
    tag: "Custom Route Enquiry",
    description: "Have another destination in mind? Contact us with your preferred route.",
    image: "/images/dest-roadtrip.jpg",
    altText: "Scenic open highway winding through green hills with road signs in Maharashtra",
    buttonText: "ENQUIRE ABOUT THIS DESTINATION",
  },
];

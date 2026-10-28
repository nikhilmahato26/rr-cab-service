import { HelmetProvider, Helmet } from "react-helmet-async";
import { Home } from "./pages/Home";

export function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>RR Cab Service | Car Rental in Wai, Satara, Maharashtra</title>
        <meta
          name="description"
          content="Book a cab with Rajveer Ranveer Tours and Travels (RR Cab Service) in Wai, Satara. Explore Innova Crysta, Kia Carens Clavis, Ertiga, and Aura with listed per-kilometre rates for local and outstation travel enquiries."
        />
        <meta
          name="keywords"
          content="RR Cab Service, Rajveer Ranveer Tours and Travels, cab service Wai Satara, car rental Wai Maharashtra, Innova Crysta rental Wai, Kia Carens Clavis rental, Ertiga cab service Satara, Aura cab service Wai, Mahabaleshwar cab service, Lonavala cab enquiry, Shirdi cab service, one-way cab Wai, outstation cab Satara"
        />
        <link rel="canonical" href="https://rrcabservice.com/" />
      </Helmet>
      <Home />
    </HelmetProvider>
  );
}

export default App;

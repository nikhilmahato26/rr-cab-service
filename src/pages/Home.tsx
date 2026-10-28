import React from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { MobileActionBar } from "../components/layout/MobileActionBar";
import { WhatsAppFloatingButton } from "../components/ui/WhatsAppButton";
import { Hero } from "../components/sections/Hero";
import { BookingPanel } from "../components/sections/BookingPanel";
import { Fleet } from "../components/sections/Fleet";
import { TripTypes } from "../components/sections/TripTypes";
import { Destinations } from "../components/sections/Destinations";
import { Services } from "../components/sections/Services";
import { Pricing } from "../components/sections/Pricing";
import { WhyChooseUs } from "../components/sections/WhyChooseUs";
import { HowBookingWorks } from "../components/sections/HowBookingWorks";
import { About } from "../components/sections/About";
import { BookingSection } from "../components/sections/BookingSection";
import { Contact } from "../components/sections/Contact";

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-surface selection:bg-yellow selection:text-navy">
      {/* 1. Sticky Navbar */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Quick Booking Enquiry */}
        <BookingPanel />

        {/* 4. Our Fleet with Per-Kilometre Rates */}
        <Fleet />

        {/* 5. Trip Types — Local, Outstation, One Way, Round Trip */}
        <TripTypes />

        {/* 6. Popular Destinations */}
        <Destinations />

        {/* 7. Our Services */}
        <Services />

        {/* 8. Rate Transparency Section */}
        <Pricing />

        {/* 9. Why Choose RR Cab Service */}
        <WhyChooseUs />

        {/* 10. How Booking Works */}
        <HowBookingWorks />

        {/* 11. About Us */}
        <About />

        {/* 12. Booking Enquiry Form */}
        <BookingSection />

        {/* 13. Contact and Location */}
        <Contact />
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* 15. Floating WhatsApp Button (Desktop & Tablet) */}
      <WhatsAppFloatingButton />

      {/* 16. Mobile Sticky Call / WhatsApp / Book Bar */}
      <MobileActionBar />
    </div>
  );
};

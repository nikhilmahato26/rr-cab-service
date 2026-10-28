import React from "react";
import { BookingForm } from "./BookingForm";

export const BookingPanel: React.FC = () => {
  return (
    <section className="relative z-20 -mt-10 sm:-mt-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <BookingForm
        id="quick-booking"
        isCompact={true}
        title="QUICK BOOKING ENQUIRY"
        eyebrow="FAST ROUTE ESTIMATE & BOOKING"
      />
    </section>
  );
};

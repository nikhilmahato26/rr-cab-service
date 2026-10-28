import React, { useState, useEffect } from "react";
import { Logo } from "../ui/Logo";
import { BUSINESS_CONFIG } from "../../config/business";
import { getPhoneLink, scrollToBooking } from "../../utils/contact";
import { Phone, Menu, X, CalendarCheck } from "lucide-react";
import { Button } from "../ui/Button";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Our Fleet", href: "#fleet" },
    { name: "Services", href: "#services" },
    { name: "Trip Types", href: "#trip-types" },
    { name: "Popular Destinations", href: "#destinations" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg py-3 border-b border-navy-light/60"
          : "bg-navy py-4 border-b border-navy-light/30"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="focus:outline-none focus:ring-2 focus:ring-yellow rounded-lg"
            aria-label="RR Cab Service Home"
          >
            <Logo variant="light" size="sm" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-yellow hover:bg-navy-light/50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action & Phone */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={getPhoneLink()}
              className="hidden md:inline-flex items-center gap-2 text-white hover:text-yellow transition-colors font-bold text-sm"
              aria-label={`Call ${BUSINESS_CONFIG.phoneDisplay}`}
            >
              <div className="w-8 h-8 rounded-full bg-navy-light flex items-center justify-center border border-yellow/30 text-yellow">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>{BUSINESS_CONFIG.phoneDisplay}</span>
            </a>

            <Button
              variant="yellow"
              size="sm"
              onClick={() => scrollToBooking()}
              icon={<CalendarCheck className="w-4 h-4" />}
            >
              Book Your Cab
            </Button>
          </div>

          {/* Mobile Right Bar: Book Button + Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <Button
              variant="yellow"
              size="sm"
              onClick={() => scrollToBooking()}
              className="text-xs px-3 py-1.5"
            >
              Book
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-navy-light focus:outline-none focus:ring-2 focus:ring-yellow"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-dark border-t border-navy-light/60 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2.5 rounded-lg text-base font-semibold text-slate-200 hover:text-yellow hover:bg-navy-light transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-navy-light/50 flex flex-col gap-3">
            <a
              href={getPhoneLink()}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-navy-light text-white font-bold text-sm border border-yellow/20"
            >
              <Phone className="w-4 h-4 text-yellow" />
              <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
            </a>

            <Button
              variant="yellow"
              fullWidth
              size="md"
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToBooking();
              }}
              icon={<CalendarCheck className="w-4 h-4" />}
            >
              Book Your Cab
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

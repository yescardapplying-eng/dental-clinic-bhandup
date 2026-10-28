"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useBooking } from "@/context/BookingContext";
import DentalLogo from "@/components/DentalLogo";
import { clinicConfig } from "@/data/clinicData";
import {
  Menu,
  X,
  Calendar,
  Phone,
  MapPin,
  Clock,
  Home,
  User,
  Sparkles,
  MessageSquare,
  Images,
  PhoneCall,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { openBooking } = useBooking();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Handle ESC key and prevent body scroll when mobile menu is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // Desktop primary navigation links
  const desktopNavLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  // Mobile drawer links
  const mobileNavLinks = [
    { label: "Home", href: "/", icon: Home },
    { label: "About Us", href: "/about", icon: User },
    { label: "Services & Treatments", href: "/services", icon: Sparkles },
    { label: "Patient Reviews", href: "/reviews", icon: MessageSquare },
    { label: "Clinic Gallery", href: "/gallery", icon: Images },
    { label: "Contact & Location", href: "/contact", icon: MapPin },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-surface-border transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 py-3.5 flex items-center justify-between gap-4">
          {/* Clinic Logo */}
          <DentalLogo />

          {/* Desktop Navigation - 4 primary links */}
          <nav
            className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-700"
            aria-label="Main Navigation"
          >
            {desktopNavLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-1 relative transition-colors hover:text-navy focus-visible:outline-teal ${
                    isActive
                      ? "text-navy font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-teal rounded-sm"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Action: Book Now & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => openBooking()}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs md:text-sm font-semibold rounded-xl bg-teal text-white hover:bg-teal-600 transition-all hover:shadow-card active:scale-95 focus-visible:ring-2 focus-visible:ring-teal"
            >
              Book Now
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-modal"
              aria-label="Open mobile menu"
              className="md:hidden p-2.5 rounded-xl text-navy hover:bg-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-teal active:scale-95"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* 
        BULLETPROOF FULL-SCREEN MOBILE NAVIGATION MODAL
        Renders at z-50 at top of DOM to guarantee 100% visibility on all mobile devices
      */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="md:hidden fixed inset-0 z-50 bg-white flex flex-col justify-between overflow-y-auto animate-fadeIn"
        >
          {/* Top Bar with Logo & Close Button */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-surface-border bg-surface-offwhite shrink-0">
            <DentalLogo />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="p-2.5 rounded-xl text-slate-700 hover:text-navy hover:bg-slate-200 transition-colors focus-visible:ring-2 focus-visible:ring-teal active:scale-95"
            >
              <X className="w-6 h-6 text-navy" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="px-5 py-6 flex-grow">
            <p className="text-[11px] font-bold uppercase tracking-wider text-teal mb-3">
              Explore Dental Practice
            </p>
            <nav className="space-y-1.5" aria-label="Mobile Links">
              {mobileNavLinks.map((item) => {
                const Icon = item.icon;
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? "bg-pale-mint text-teal-900 font-semibold shadow-subtle"
                        : "text-slate-800 hover:bg-slate-100 active:scale-[0.99]"
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? "text-teal" : "text-slate-500"}`} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Bottom Actions & Contact Information */}
          <div className="p-5 border-t border-surface-border bg-surface-offwhite space-y-3 shrink-0">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openBooking();
              }}
              className="w-full py-3.5 rounded-xl bg-teal text-white text-center font-semibold text-sm shadow-card hover:bg-teal-600 transition-all flex items-center justify-center gap-2 active:scale-98"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>

            <a
              href={`tel:${clinicConfig.phone}`}
              className="w-full py-3 rounded-xl border border-surface-border bg-white text-navy text-center font-semibold text-sm hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-teal" />
              <span>Call: {clinicConfig.phoneDisplay}</span>
            </a>

            <div className="pt-2 text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-teal" />
              <span>Bhandup West, Mumbai • Mon–Sat</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

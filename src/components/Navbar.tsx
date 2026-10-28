"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useBooking } from "@/context/BookingContext";
import DentalLogo from "@/components/DentalLogo";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { openBooking } = useBooking();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Handle ESC key for mobile drawer
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

  // ONLY 4 primary navigation links as strictly required
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-30 w-full bg-white/95 backdrop-blur-md border-b border-surface-border transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 py-3 flex items-center justify-between gap-4">
        {/* Dental Clinic Logo & Name */}
        <DentalLogo />

        {/* Desktop Navigation - Strictly 4 links */}
        <nav
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-700"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
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

        {/* Header Action: Compact Book Now CTA */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => openBooking()}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs md:text-sm font-semibold rounded-xl bg-teal text-white hover:bg-teal-600 transition-colors shadow-subtle active:scale-95 focus-visible:ring-2 focus-visible:ring-teal"
          >
            Book Now
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="md:hidden p-2 rounded-xl text-slate-700 hover:text-navy hover:bg-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-teal"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden fixed inset-x-0 top-[65px] bottom-0 bg-white/98 backdrop-blur-lg border-t border-surface-border z-40 overflow-y-auto px-6 py-6 flex flex-col justify-between"
        >
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? "bg-pale-mint text-teal-800 font-semibold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-navy"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-surface-border space-y-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openBooking();
              }}
              className="w-full py-3 rounded-xl bg-teal text-white text-center font-semibold text-sm shadow-subtle hover:bg-teal-600 transition-colors"
            >
              Book Now
            </button>
            <a
              href="tel:+911234567890"
              className="block w-full py-3 rounded-xl border border-surface-border text-navy text-center font-semibold text-sm hover:bg-slate-50 transition-colors"
            >
              Call Front Desk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

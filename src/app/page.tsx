"use client";

import Image from "next/image";
import Link from "next/link";
import { useBooking } from "@/context/BookingContext";
import { clinicConfig, servicesData, homepageFaqs } from "@/data/clinicData";
import ServiceCard from "@/components/ServiceCard";
import FaqAccordion from "@/components/FaqAccordion";
import GoogleReviewsShowcase from "@/components/GoogleReviewsShowcase";
import {
  Calendar,
  PhoneCall,
  ShieldCheck,
  Clock,
  Sparkles,
  MapPin,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function HomePage() {
  const { openBooking } = useBooking();

  // Structured Data for Local SEO (Dentist / MedicalBusiness)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: clinicConfig.name,
    image: "https://dentalclinic.com/images/hero/hero-clinic.jpg",
    telephone: clinicConfig.phone,
    email: clinicConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: clinicConfig.address.area,
      addressRegion: clinicConfig.address.state,
      addressCountry: clinicConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "19.1458",
      longitude: "72.9342",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "13:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "17:00",
        closes: "21:00",
      },
    ],
    priceRange: "₹₹",
  };

  return (
    <>
      {/* Local SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white border-b border-surface-border py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content (7 cols on desktop) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pale-mint text-teal-800 text-xs font-semibold mb-5 w-fit border border-teal-100">
                <MapPin className="w-3.5 h-3.5 text-teal" />
                <span>Bhandup West, Mumbai</span>
              </div>

              {/* Concise, professional headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-navy tracking-tight leading-tight sm:leading-tight mb-4">
                Gentle, Modern Dental Care in Bhandup West
              </h1>

              {/* Short, meaningful supporting paragraph (Strictly 17 words, within 12-25 words) */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 max-w-xl">
                Providing gentle, ethical dental treatments with advanced sterilization, modern equipment, and personalized care for your entire family.
              </p>

              {/* CTA Group: Book Now & Call Now */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
                <button
                  type="button"
                  onClick={() => openBooking()}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-teal text-white text-sm font-semibold hover:bg-teal-600 transition-colors shadow-subtle active:scale-95 focus-visible:ring-2 focus-visible:ring-teal"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Book Now</span>
                </button>

                <a
                  href={`tel:${clinicConfig.phone}`}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-surface-border text-navy text-sm font-semibold hover:bg-slate-50 transition-colors active:scale-95 focus-visible:ring-2 focus-visible:ring-teal"
                >
                  <PhoneCall className="w-4 h-4 mr-2 text-teal" />
                  <span>Call Now</span>
                </a>
              </div>

              {/* Factually Supported Trust Indicators */}
              <div className="pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal shrink-0" />
                  <span className="font-medium text-navy">Sterilized Instruments</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-teal shrink-0" />
                  <span className="font-medium text-navy">Prior Appointments</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-teal shrink-0" />
                  <span className="font-medium text-navy">Transparent Guidance</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image (5 cols on desktop) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-surface-border bg-slate-100 aspect-[4/3] sm:aspect-[16/11]">
                <Image
                  src="/images/hero/hero-clinic.jpg"
                  alt="Modern dental clinic operatory and consultation room in Bhandup West"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>

              {/* Compact Consultation Badge */}
              <div className="absolute -bottom-4 -left-3 sm:bottom-4 sm:left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-surface-border shadow-card flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-navy">Evening & Morning Slots</p>
                  <p className="text-[11px] text-slate-500">Mon–Sat appointments available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SHOWCASE SECTION */}
      <section className="py-14 bg-surface-offwhite" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal">
                Our Services
              </span>
              <h2 id="services-heading" className="text-2xl sm:text-3xl font-heading font-bold text-navy mt-1">
                Comprehensive Dental Treatments
              </h2>
              <p className="text-sm text-slate-600 mt-2 max-w-xl">
                Conservative and preventive treatments performed with advanced clinical precision and attentive patient care.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-teal hover:text-teal-700 transition-colors self-start sm:self-auto"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Responsive Services Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT THE DENTIST & CLINIC SUMMARY */}
      <section className="py-14 bg-white border-y border-surface-border" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Doctor Portrait */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-card border border-surface-border aspect-[4/5] bg-slate-100 max-w-md mx-auto">
                <Image
                  src="/images/doctor/dr-sharma.jpg"
                  alt={`Portrait of ${clinicConfig.doctor.name}, ${clinicConfig.doctor.credentials}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Doctor Details & Clinic Standards */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-wider text-teal">
                About The Practice
              </span>
              <h2 id="about-heading" className="text-2xl sm:text-3xl font-heading font-bold text-navy mt-1 mb-2">
                {clinicConfig.doctor.name}
              </h2>
              <p className="text-sm font-semibold text-teal-700 mb-4">
                {clinicConfig.doctor.credentials} • {clinicConfig.doctor.designation}
              </p>

              <div className="space-y-3 text-sm text-slate-600 leading-relaxed mb-6">
                <p>{clinicConfig.doctor.bioParagraphs[0]}</p>
                <p>{clinicConfig.doctor.bioParagraphs[1]}</p>
              </div>

              {/* Verified Clinical Protocols */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="flex items-start gap-2.5 bg-surface-offwhite p-3 rounded-xl border border-surface-border">
                  <CheckCircle className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 font-medium">Autoclave sterilization for every visit</span>
                </div>
                <div className="flex items-start gap-2.5 bg-surface-offwhite p-3 rounded-xl border border-surface-border">
                  <CheckCircle className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 font-medium">Digital diagnostic low-radiation X-rays</span>
                </div>
                <div className="flex items-start gap-2.5 bg-surface-offwhite p-3 rounded-xl border border-surface-border">
                  <CheckCircle className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 font-medium">Detailed patient consultations</span>
                </div>
                <div className="flex items-start gap-2.5 bg-surface-offwhite p-3 rounded-xl border border-surface-border">
                  <CheckCircle className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 font-medium">Child-friendly dental environment</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-navy text-white text-xs sm:text-sm font-semibold hover:bg-navy-600 transition-colors"
                >
                  <span>Learn More</span>
                </Link>
                <button
                  type="button"
                  onClick={() => openBooking()}
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-surface-border text-navy text-xs sm:text-sm font-semibold hover:bg-slate-50 transition-colors"
                >
                  <span>Book Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GOOGLE REVIEWS SHOWCASE */}
      <GoogleReviewsShowcase />

      {/* 5. HOMEPAGE FAQ SECTION - EXACTLY 6 FAQS AS REQUIRED */}
      <section className="py-14 bg-white border-t border-surface-border" aria-labelledby="faq-section-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-teal">
              Common Queries
            </span>
            <h2 id="faq-section-heading" className="text-2xl sm:text-3xl font-heading font-bold text-navy mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Essential information regarding appointments, consultation fees, and visiting our Bhandup West clinic.
            </p>
          </div>

          {/* Exactly 6 FAQs Accordion */}
          <FaqAccordion faqs={homepageFaqs} idPrefix="home-faq" />
        </div>
      </section>

      {/* 6. LOCATION & TIMINGS BANNER */}
      <section className="py-12 bg-pale-mint/40 border-t border-teal-100" aria-label="Clinic visit summary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-surface-border shadow-card p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div>
              <div className="flex items-center gap-2 text-teal font-semibold text-xs uppercase tracking-wider mb-1">
                <MapPin className="w-4 h-4" />
                <span>Clinic Location</span>
              </div>
              <h3 className="font-heading font-bold text-base text-navy">Bhandup West, Mumbai</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Easily accessible from Bhandup railway station and western transit arteries.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-teal font-semibold text-xs uppercase tracking-wider mb-1">
                <Clock className="w-4 h-4" />
                <span>Consultation Timings</span>
              </div>
              <p className="text-xs text-navy font-semibold">Mon – Sat: 10:00 AM – 1:30 PM & 5:00 PM – 9:00 PM</p>
              <p className="text-xs text-slate-500 mt-0.5">Sunday consultations scheduled by prior request</p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-2.5">
              <button
                type="button"
                onClick={() => openBooking()}
                className="w-full text-center px-4 py-2.5 rounded-xl bg-teal text-white text-xs font-semibold hover:bg-teal-600 transition-colors shadow-subtle"
              >
                Book Now
              </button>
              <a
                href={`tel:${clinicConfig.phone}`}
                className="w-full text-center px-4 py-2.5 rounded-xl border border-surface-border text-navy text-xs font-semibold hover:bg-slate-50 transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

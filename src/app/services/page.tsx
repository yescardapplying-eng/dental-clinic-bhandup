import type { Metadata } from "next";
import Link from "next/link";
import { servicesData } from "@/data/clinicData";
import ServiceCard from "@/components/ServiceCard";
import { Sparkles, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Dental Treatments & Services",
  description:
    "Explore our complete range of dental treatments in Bhandup West, Mumbai: Root canal, dental implants, teeth cleaning, braces, whitening, crowns, and pediatric dentistry.",
};

export default function ServicesPage() {
  return (
    <div className="py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs text-slate-500">
            <li>
              <Link href="/" className="hover:text-navy transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-teal font-medium" aria-current="page">
              Services
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-teal">
            Clinical Care
          </span>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy mt-1 tracking-tight">
            Comprehensive Dental Treatments
          </h1>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            From routine preventive cleanings to advanced root canals and restorative implants, we provide comprehensive, gentle oral healthcare tailored to every stage of life.
          </p>
        </div>

        {/* 10 Services Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {servicesData.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        {/* Bottom Booking Callout */}
        <div className="bg-pale-mint/60 border border-teal-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-1">
              Unsure which treatment you need?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              Schedule a comprehensive initial consultation with our dental surgeon in Bhandup West for a thorough clinical examination and clear diagnosis.
            </p>
          </div>
          <Link
            href="/contact"
            className="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-teal text-white text-xs sm:text-sm font-semibold hover:bg-teal-600 transition-colors shadow-subtle shrink-0"
          >
            Request Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}

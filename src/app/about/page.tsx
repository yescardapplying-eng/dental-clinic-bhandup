import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { clinicConfig, aboutFaqs } from "@/data/clinicData";
import FaqAccordion from "@/components/FaqAccordion";
import {
  ShieldCheck,
  CheckCircle2,
  Stethoscope,
  HeartPulse,
  Sparkles,
  Award,
  Clock,
  MapPin,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Clinic & Dentist",
  description:
    "Learn about our dentist, clinical philosophy, multi-stage sterilization standards, and patient care approach in Bhandup West, Mumbai.",
};

export default function AboutPage() {
  return (
    <div className="py-10 sm:py-14 animate-fadeInUp">
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
              About
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-teal">
            Meet Your Dental Team
          </span>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy mt-1 tracking-tight">
            About the Clinic & Dentist
          </h1>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Delivering ethical, patient-centric oral healthcare rooted in gentle clinical techniques, transparent advice, and uncompromising sterilization.
          </p>
        </div>

        {/* Doctor Profile Section */}
        <div className="bg-white rounded-2xl border border-surface-border shadow-card p-6 sm:p-8 lg:p-10 mb-12 hover:shadow-elevated transition-shadow duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-subtle border border-surface-border aspect-[4/5] bg-slate-100 max-w-sm mx-auto">
                <Image
                  src="/images/doctor/dr-sharma.jpg"
                  alt={`Portrait of ${clinicConfig.doctor.name}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pale-mint text-teal-800 text-xs font-semibold mb-3">
                <Stethoscope className="w-3.5 h-3.5 text-teal" />
                <span>Lead Dental Surgeon</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy">
                {clinicConfig.doctor.name}
              </h2>
              <p className="text-sm font-semibold text-teal-700 mt-1 mb-4">
                {clinicConfig.doctor.credentials}
              </p>

              {/* Bio Paragraphs */}
              <div className="space-y-3.5 text-sm text-slate-600 leading-relaxed mb-6">
                {clinicConfig.doctor.bioParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Verified Credential & Registration Field */}
              <div className="bg-surface-offwhite rounded-xl border border-surface-border p-4 mb-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-navy mb-1.5 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-teal" />
                  <span>Clinical Registration Notice</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {clinicConfig.doctor.registrationNotice}
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Practicing under dental council ethical standards with continuous professional development.
                </p>
              </div>

              {/* Quick Action */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-teal text-white text-xs sm:text-sm font-semibold hover:bg-teal-600 transition-all shadow-subtle hover:shadow-card hover:-translate-y-0.5"
                >
                  <span>Contact Clinic</span>
                </Link>
                <a
                  href={`tel:${clinicConfig.phone}`}
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-surface-border text-navy text-xs sm:text-sm font-semibold hover:bg-slate-50 transition-colors"
                >
                  <span>Call Front Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Our Core Values / Philosophy */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-teal">
              Our Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy mt-1">
              Patient-First Dental Care
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-surface-border shadow-subtle hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal flex items-center justify-center mb-4">
                <HeartPulse className="w-5 h-5 icon-animate" />
              </div>
              <h3 className="text-base font-heading font-bold text-navy mb-2">
                Conservative Approach
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We believe preserving your natural teeth is paramount. We recommend treatments that maintain tooth structure whenever clinically viable.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-surface-border shadow-subtle hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5 icon-animate" />
              </div>
              <h3 className="text-base font-heading font-bold text-navy mb-2">
                Class-B Autoclave Sterilization
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Patient safety is non-negotiable. Every non-disposable instrument undergoes rigorous multi-step ultrasonic cleaning and pressurized steam sterilization.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-surface-border shadow-subtle hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5 icon-animate" />
              </div>
              <h3 className="text-base font-heading font-bold text-navy mb-2">
                Transparent Guidance
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                No surprises. We explain diagnostics, procedure steps, visit schedules, and treatment charges clearly before initiating any dental procedure.
              </p>
            </div>
          </div>
        </div>

        {/* Clinic Facilities */}
        <div className="bg-surface-offwhite rounded-2xl border border-surface-border p-6 sm:p-8 mb-14">
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-4">
            Clinic Infrastructure & Equipment
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm text-slate-700">
            <div className="p-4 rounded-xl bg-white border border-surface-border hover:shadow-subtle transition-shadow">
              <p className="font-bold text-navy mb-1">Ergonomic Dental Chair</p>
              <p className="text-slate-500 text-xs">Smooth movement for patient comfort during lengthy procedures.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-surface-border hover:shadow-subtle transition-shadow">
              <p className="font-bold text-navy mb-1">Digital RVG Radiography</p>
              <p className="text-slate-500 text-xs">Instant high-resolution tooth imaging with up to 80% reduced radiation.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-surface-border hover:shadow-subtle transition-shadow">
              <p className="font-bold text-navy mb-1">Rotary Endodontic Motors</p>
              <p className="text-slate-500 text-xs">Precision instrumentation for faster, smoother root canal treatments.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-surface-border hover:shadow-subtle transition-shadow">
              <p className="font-bold text-navy mb-1">Dedicated Sterilization Bay</p>
              <p className="text-slate-500 text-xs">Sealed pouching and biological indicator monitored autoclave runs.</p>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: 3 RELEVANT FAQS FOR ABOUT US */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-teal">
              FAQs
            </span>
            <h2 className="text-2xl font-heading font-bold text-navy mt-1">
              Questions About Our Clinic & Dentist
            </h2>
          </div>
          <FaqAccordion faqs={aboutFaqs} idPrefix="about-faq" />
        </div>
      </div>
    </div>
  );
}

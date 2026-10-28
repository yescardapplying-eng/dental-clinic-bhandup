import type { Metadata } from "next";
import Link from "next/link";
import { clinicConfig, reviewsFaqs } from "@/data/clinicData";
import GoogleReviewsCarousel from "@/components/GoogleReviewsCarousel";
import FaqAccordion from "@/components/FaqAccordion";
import { ShieldCheck, MessageSquare, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Patient Reviews & Feedback",
  description:
    "Patient experiences and verified feedback for Dental Clinic in Bhandup West, Mumbai. Transparent, authentic clinical standards.",
};

export default function ReviewsPage() {
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
              Reviews
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-teal">
            Patient Care & Experience
          </span>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy mt-1 tracking-tight">
            Patient Reviews & Feedback
          </h1>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Our patients' trust is the cornerstone of our clinical practice. We maintain strict compliance with medical ethics by only presenting authentic feedback approved by our patients.
          </p>
        </div>

        {/* Verification Ethics Notice Card */}
        <div className="bg-white rounded-2xl border border-surface-border p-6 shadow-subtle mb-10 max-w-4xl hover:shadow-card transition-shadow">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-teal shrink-0 mt-0.5 icon-animate" />
            <div>
              <h2 className="text-sm font-heading font-bold text-navy">
                Our Verification & Transparency Commitment
              </h2>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                In strict adherence to medical council guidelines, we never purchase ratings, generate fake testimonials, or fabricate Google reviews. Every testimonial displayed on this website is authenticated from genuine clinical visits with patient consent.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Google Reviews Carousel */}
        <div className="mb-14">
          <GoogleReviewsCarousel />
        </div>

        {/* Review Submission Guidance */}
        <div className="bg-surface-offwhite rounded-2xl border border-surface-border p-6 sm:p-8 max-w-3xl mx-auto text-center mb-16 shadow-subtle">
          <MessageSquare className="w-8 h-8 text-teal mx-auto mb-3" />
          <h2 className="text-lg font-heading font-bold text-navy mb-2">
            Have you visited our Bhandup West clinic?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-lg mx-auto leading-relaxed">
            We value your honest thoughts regarding our hygiene standards, consultation thoroughness, and chairside comfort. Please take a moment to leave a review on Google.
          </p>
          <a
            href="https://maps.google.com/?q=Bhandup+West+Mumbai+Dental+Clinic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-teal text-white text-xs sm:text-sm font-semibold hover:bg-teal-600 transition-all hover:shadow-card hover:-translate-y-0.5 shadow-subtle"
          >
            <span>Leave a Google Review</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* BOTTOM SECTION: 3 RELEVANT FAQS FOR REVIEWS */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-teal">
              FAQs
            </span>
            <h2 className="text-2xl font-heading font-bold text-navy mt-1">
              Questions About Reviews & Patient Feedback
            </h2>
          </div>
          <FaqAccordion faqs={reviewsFaqs} idPrefix="reviews-faq" />
        </div>
      </div>
    </div>
  );
}

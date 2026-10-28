import type { Metadata } from "next";
import Link from "next/link";
import { clinicConfig } from "@/data/clinicData";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: `Terms and conditions of website use and appointment request procedures for ${clinicConfig.name}, Bhandup West, Mumbai.`,
};

export default function TermsPage() {
  return (
    <div className="py-10 sm:py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Terms & Conditions
            </li>
          </ol>
        </nav>

        <h1 className="text-3xl font-heading font-extrabold text-navy mb-4 tracking-tight">
          Terms & Conditions
        </h1>
        <p className="text-xs text-slate-500 mb-8">
          Last updated: October 2026 • Governing website access and clinical appointment requests
        </p>

        <div className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-subtle space-y-6 text-sm text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-base font-heading font-bold text-navy mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this website, you agree to comply with and be bound by the following terms and conditions. If you disagree with any part of these terms, please refrain from using our online booking request tools.
            </p>
          </section>

          <section>
            <h2 className="text-base font-heading font-bold text-navy mb-2">
              2. Nature of Online Appointment Requests
            </h2>
            <p>
              Submitting an appointment request form through this website does not constitute an automatically confirmed appointment or establish an emergency medical commitment. All appointment requests are processed by clinic staff and are subject to final phone or WhatsApp confirmation based on clinician schedule and operatory availability.
            </p>
          </section>

          <section>
            <h2 className="text-base font-heading font-bold text-navy mb-2">
              3. Clinic Cancellation & Rescheduling Courtesy
            </h2>
            <p>
              If you are unable to attend your scheduled consultation, we kindly request notification at least 3 hours in advance via telephone or WhatsApp message so the reserved chairside time may be offered to other patients requiring dental attention.
            </p>
          </section>

          <section>
            <h2 className="text-base font-heading font-bold text-navy mb-2">
              4. Treatment Estimates & Clinical Variations
            </h2>
            <p>
              Any treatment summaries, step descriptions, or fee indications discussed on this website or during preliminary inquiry are general educational descriptions. Definitive treatment plans, clinical procedures, and exact fees can only be determined after a direct, in-person clinical examination and necessary radiographic evaluation by our dental surgeon.
            </p>
          </section>

          <section>
            <h2 className="text-base font-heading font-bold text-navy mb-2">
              5. Governing Law
            </h2>
            <p>
              These terms are governed by the laws of Maharashtra, India, and any disputes shall be subject to the exclusive jurisdiction of the competent courts in Mumbai.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}


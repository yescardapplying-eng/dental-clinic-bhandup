import type { Metadata } from "next";
import Link from "next/link";
import { clinicConfig } from "@/data/clinicData";
import { AlertTriangle, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Medical & Dental Disclaimer",
  description: `Official medical information disclaimer for ${clinicConfig.name}, Bhandup West, Mumbai.`,
};

export default function MedicalDisclaimerPage() {
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
              Medical Disclaimer
            </li>
          </ol>
        </nav>

        <h1 className="text-3xl font-heading font-extrabold text-navy mb-4 tracking-tight">
          Medical & Dental Disclaimer
        </h1>
        <p className="text-xs text-slate-500 mb-8">
          Important patient guidance regarding clinical information and online healthcare communication
        </p>

        <div className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-subtle space-y-6 text-sm text-slate-600 leading-relaxed">
          {/* Important Alert Notice */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-bold mb-1">
                Website Content is for General Informational Purposes Only
              </strong>
              <span>
                The information provided on this website—including treatment overviews, procedures, aftercare tips, and FAQs—is designed to support, not replace, the relationship between a patient and their dental surgeon.
              </span>
            </div>
          </div>

          <section>
            <h2 className="text-base font-heading font-bold text-navy mb-2">
              1. No Doctor-Patient Relationship Prior to Clinical Examination
            </h2>
            <p>
              Browsing this website, submitting an appointment request form, or contacting the clinic through electronic messaging does not create a formal doctor-patient relationship. A binding clinical relationship is established only upon an in-person diagnostic consultation at our Bhandup West clinic.
            </p>
          </section>

          <section>
            <h2 className="text-base font-heading font-bold text-navy mb-2">
              2. Individualized Clinical Assessment Required
            </h2>
            <p>
              Dental conditions, bone density, occlusal habits, medical histories, and healing responses vary significantly from individual to individual. No information on this website should be interpreted as medical advice, clinical diagnosis, or a specific treatment recommendation for your personal oral condition.
            </p>
          </section>

          <section>
            <h2 className="text-base font-heading font-bold text-navy mb-2">
              3. Absence of Guaranteed Treatment Outcomes
            </h2>
            <p>
              Dentistry and medicine are biological disciplines with inherent clinical variables. We do not provide guarantees or absolute assurances of specific treatment lifespans or aesthetic outcomes. Every treatment plan is formulated according to recognized dental standards to achieve the best feasible clinical results.
            </p>
          </section>

          <section>
            <h2 className="text-base font-heading font-bold text-navy mb-2">
              4. Acute Dental Emergencies
            </h2>
            <p>
              If you are experiencing severe, uncontrollable bleeding, sudden facial swelling affecting breathing or swallowing, or acute maxillofacial trauma, please seek immediate emergency care at the nearest hospital emergency department or contact emergency medical services immediately.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

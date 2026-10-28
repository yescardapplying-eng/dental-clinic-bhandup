import type { Metadata } from "next";
import Link from "next/link";
import { clinicConfig } from "@/data/clinicData";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy and healthcare patient data protection statement for ${clinicConfig.name}, Bhandup West, Mumbai.`,
};

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </li>
          </ol>
        </nav>

        <h1 className="text-3xl font-heading font-extrabold text-navy mb-4 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-500 mb-8">
          Last updated: October 2026 • Effective for {clinicConfig.name}, Bhandup West, Mumbai
        </p>

        <div className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-subtle space-y-6 text-sm text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-base font-heading font-bold text-navy mb-2">
              1. Overview & Commitment to Patient Privacy
            </h2>
            <p>
              At {clinicConfig.name}, accessible from our website, we prioritize the confidentiality and security of our patients' personal information. This Privacy Policy outlines the types of information we collect, how it is used, and how your privacy is protected when you request an appointment or contact our Bhandup West clinic.
            </p>
          </section>

          <section>
            <h2 className="text-base font-heading font-bold text-navy mb-2">
              2. Information We Collect
            </h2>
            <p className="mb-2">
              We collect only the minimal personal information necessary to facilitate your dental appointment request:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Patient Name</li>
              <li>Contact telephone or mobile number</li>
              <li>Requested consultation date and preferred timing slot</li>
              <li>Selected dental procedure or treatment of interest</li>
              <li>Voluntary notes regarding dental symptoms or inquiries</li>
            </ul>
            <p className="mt-2 text-xs text-slate-500">
              We do not collect sensitive payment credentials or unnecessary medical history through public web forms.
            </p>
          </section>

          <section>
            <h2 className="text-base font-heading font-bold text-navy mb-2">
              3. Purpose & Use of Collected Information
            </h2>
            <p>
              Your contact details are used strictly for clinical communication:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 mt-2">
              <li>Confirming or rescheduling your dental consultation appointment</li>
              <li>Providing clinic directions and pre-visit consultation instructions</li>
              <li>Responding to specific treatment queries via phone or WhatsApp</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-heading font-bold text-navy mb-2">
              4. Non-Disclosure & Security
            </h2>
            <p>
              We never sell, rent, lease, or distribute patient contact details to commercial marketing entities. Access to patient contact requests is restricted exclusively to authorized clinical reception staff.
            </p>
          </section>

          <section>
            <h2 className="text-base font-heading font-bold text-navy mb-2">
              5. Contact Us Regarding Your Privacy
            </h2>
            <p>
              If you have questions regarding our privacy practices or wish to update your contact preferences, please contact our clinic directly at{" "}
              <a href={`mailto:${clinicConfig.email}`} className="text-teal font-medium hover:underline">
                {clinicConfig.email}
              </a>{" "}
              or call{" "}
              <a href={`tel:${clinicConfig.phone}`} className="text-teal font-medium hover:underline">
                {clinicConfig.phoneDisplay}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

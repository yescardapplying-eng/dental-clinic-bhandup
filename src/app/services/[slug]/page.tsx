import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { servicesData, clinicConfig } from "@/data/clinicData";
import FaqAccordion from "@/components/FaqAccordion";
import {
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Clock,
  HeartHandshake,
  Calendar,
  PhoneCall,
  ArrowRight,
} from "lucide-react";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) return { title: "Treatment Not Found" };

  return {
    title: `${service.title} in Bhandup West`,
    description: `${service.shortDesc} Consultation and care at ${clinicConfig.name}, Bhandup West, Mumbai.`,
    openGraph: {
      title: `${service.title} | ${clinicConfig.name} Bhandup West`,
      description: service.shortDesc,
      images: [
        {
          url: service.image,
          width: 800,
          height: 600,
          alt: service.title,
        },
      ],
    },
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  // Schema for medical procedure
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.title,
    description: service.shortDesc,
    procedureType: "NonSurgicalProcedure",
    bodyLocation: "Oral cavity",
    relevantSpecialty: {
      "@type": "MedicalSpecialty",
      name: "Dentistry",
    },
    provider: {
      "@type": "Dentist",
      name: clinicConfig.name,
      telephone: clinicConfig.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: clinicConfig.address.area,
        addressRegion: clinicConfig.address.state,
        addressCountry: clinicConfig.address.country,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

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
              <li>
                <Link href="/services" className="hover:text-navy transition-colors">
                  Services
                </Link>
              </li>
              <li>/</li>
              <li className="text-teal font-medium truncate max-w-[200px]" aria-current="page">
                {service.title}
              </li>
            </ol>
          </nav>

          {/* 1. SHORT HERO */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-teal">
                Dental Care Bhandup West
              </span>
              <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy mt-1 tracking-tight">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
                {service.heroSnippet}
              </p>

              {/* Appointment CTA */}
              <div className="flex flex-wrap items-center gap-3.5 mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-teal text-white text-xs sm:text-sm font-semibold hover:bg-teal-600 transition-colors shadow-subtle"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Book Now</span>
                </Link>
                <a
                  href={`tel:${clinicConfig.phone}`}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-surface-border text-navy text-xs sm:text-sm font-semibold hover:bg-slate-50 transition-colors"
                >
                  <PhoneCall className="w-4 h-4 mr-2 text-teal" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-card border border-surface-border aspect-[4/3] bg-slate-100">
                <Image
                  src={service.image}
                  alt={`${service.title} in Bhandup West`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* 2. RELEVANT CONTENT OVERVIEW */}
          <div className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-subtle mb-10">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-4">
              Understanding {service.title}
            </h2>
            <div className="space-y-3.5 text-sm sm:text-base text-slate-600 leading-relaxed">
              {service.overview.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* 3. POSSIBLE TREATMENT STEPS */}
          <div className="mb-12">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-teal">
                Treatment Pathway
              </span>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mt-1">
                Typical Clinical Steps
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Treatment steps may vary based on clinical assessment, tooth condition, and individual patient anatomy.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {service.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-surface-border p-5 shadow-subtle flex flex-col justify-between"
                >
                  <div>
                    <span className="w-7 h-7 rounded-lg bg-teal-50 text-teal font-heading font-bold text-xs flex items-center justify-center mb-3">
                      0{idx + 1}
                    </span>
                    <h3 className="font-heading font-bold text-sm text-navy mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. SUITABILITY AND LIMITATIONS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Suitable For */}
            <div className="bg-white rounded-2xl border border-teal-100 p-6 shadow-subtle">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-teal" />
                <h3 className="font-heading font-bold text-base text-navy">
                  When Is This Treatment Considered?
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                {service.suitability.suitableFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Limitations & Contraindications */}
            <div className="bg-white rounded-2xl border border-surface-border p-6 shadow-subtle">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-5 h-5 text-amber-600" />
                <h3 className="font-heading font-bold text-base text-navy">
                  Clinical Suitability & Limitations
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                {service.suitability.notSuitableFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[11px] text-slate-500 mt-4 pt-3 border-t border-slate-100">
                * Note: Final clinical suitability is confirmed strictly through in-person dental consultation and diagnostic radiographs.
              </p>
            </div>
          </div>

          {/* 5. AFTERCARE GUIDANCE */}
          <div className="bg-surface-offwhite rounded-2xl border border-surface-border p-6 sm:p-8 mb-12">
            <div className="flex items-center gap-2.5 mb-4">
              <HeartHandshake className="w-5 h-5 text-teal" />
              <h2 className="text-lg sm:text-xl font-heading font-bold text-navy">
                Post-Treatment Care & Maintenance
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
              {service.aftercare.map((tip, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-surface-border">
                  <span className="text-teal font-bold">•</span>
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 6. EXACTLY 3 RELEVANT FAQS AS STRICTLY REQUIRED */}
          <div className="max-w-4xl mx-auto mb-14">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-teal">
                FAQ
              </span>
              <h2 className="text-2xl font-heading font-bold text-navy mt-1">
                Frequently Asked Questions About {service.title}
              </h2>
            </div>

            {/* Exactly 3 FAQs Accordion */}
            <FaqAccordion faqs={service.faqs} idPrefix={`treatment-${service.slug}`} />
          </div>

          {/* 7. APPOINTMENT CTA BOX */}
          <div className="bg-navy text-white rounded-2xl p-6 sm:p-8 text-center max-w-3xl mx-auto shadow-elevated">
            <h2 className="text-xl sm:text-2xl font-heading font-bold mb-2">
              Consult with Our Dental Surgeon in Bhandup West
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mb-6 max-w-lg mx-auto">
              Have specific questions regarding {service.title.toLowerCase()} or wish to discuss treatment options? We are here to guide you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal text-white text-xs sm:text-sm font-semibold hover:bg-teal-600 transition-colors"
              >
                Book Now
              </Link>
              <a
                href={`tel:${clinicConfig.phone}`}
                className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/20 text-white text-xs sm:text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                Call Front Desk
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

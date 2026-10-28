import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { clinicConfig, galleryFaqs } from "@/data/clinicData";
import FaqAccordion from "@/components/FaqAccordion";
import { ShieldCheck, Eye, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Clinic Gallery & Facilities",
  description:
    "Tour the facilities at Dental Clinic, Bhandup West, Mumbai: Modern operatory chairs, digital radiography, dedicated sterilization bay, and comfortable reception.",
};

const galleryItems = [
  {
    title: "Modern Dental Operatory",
    category: "Treatment Area",
    image: "/images/gallery/operatory.jpg",
    description: "Ergonomic clinical dental unit designed for maximum patient comfort during restorative and surgical procedures.",
  },
  {
    title: "Reception & Waiting Lounge",
    category: "Clinic Ambience",
    image: "/images/gallery/reception.jpg",
    description: "A calm, comfortable reception area where patients are welcomed promptly for scheduled consultation slots.",
  },
  {
    title: "Dedicated Sterilization Bay",
    category: "Hygiene & Safety",
    image: "/images/gallery/sterilization.jpg",
    description: "Rigorous Class-B autoclave sterilization protocol with biological monitoring and sealed packaging.",
  },
  {
    title: "Consultation & Diagnostic Suite",
    category: "Consultation",
    image: "/images/gallery/consultation-room.jpg",
    description: "Quiet consultation space dedicated to in-depth case discussions and digital radiograph review.",
  },
  {
    title: "Advanced Dental Instruments",
    category: "Equipment",
    image: "/images/services/root-canal.jpg",
    description: "Precision micro-endodontic and ultrasonic scaling instruments maintained to international clinical standards.",
  },
  {
    title: "Modern Healthcare Setting",
    category: "Clinic Ambience",
    image: "/images/hero/hero-clinic.jpg",
    description: "Bright, hygienic clinical treatment environment situated conveniently in Bhandup West, Mumbai.",
  },
];

export default function GalleryPage() {
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
              Gallery
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-teal">
            Virtual Tour
          </span>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy mt-1 tracking-tight">
            Clinic Facilities & Environment
          </h1>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Take a look inside our modern dental practice in Bhandup West. We maintain a clean, tranquil, and thoroughly sterilized clinical environment for all patients.
          </p>
        </div>

        {/* Clinical Integrity Notice */}
        <div className="bg-white rounded-2xl border border-surface-border p-5 mb-10 shadow-subtle flex items-start gap-3 max-w-3xl hover:shadow-card transition-shadow">
          <ShieldCheck className="w-5 h-5 text-teal shrink-0 mt-0.5 icon-animate" />
          <p className="text-xs text-slate-600 leading-relaxed">
            <strong>Clinical Integrity Notice:</strong> We showcase authentic clinic facilities and operatory setups. In accordance with medical ethics, we do not publish digitally altered or fabricated before-and-after smile transformations.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-surface-border overflow-hidden shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
            >
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-[11px] font-semibold text-teal-800 px-2.5 py-1 rounded-lg border border-surface-border shadow-sm">
                  {item.category}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h2 className="font-heading font-bold text-base text-navy mb-1.5 group-hover:text-teal transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM SECTION: 3 RELEVANT FAQS FOR GALLERY */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-teal">
              FAQs
            </span>
            <h2 className="text-2xl font-heading font-bold text-navy mt-1">
              Questions About Our Clinic Setup & Safety
            </h2>
          </div>
          <FaqAccordion faqs={galleryFaqs} idPrefix="gallery-faq" />
        </div>

        {/* Visit Callout */}
        <div className="bg-navy text-white rounded-2xl p-6 sm:p-8 text-center max-w-2xl mx-auto shadow-elevated">
          <h2 className="text-xl sm:text-2xl font-heading font-bold mb-2">
            Experience Gentle Care in Person
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
            Visit our Bhandup West clinic for an in-depth oral examination. Prior appointments are recommended for minimal waiting time.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-teal text-white text-xs sm:text-sm font-semibold hover:bg-teal-600 transition-all hover:shadow-card hover:-translate-y-0.5"
            >
              Request Appointment
            </Link>
            <a
              href={`tel:${clinicConfig.phone}`}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl border border-white/20 text-white text-xs sm:text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              Call Front Desk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

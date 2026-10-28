import Link from "next/link";
import Image from "next/image";
import { ServiceDetail } from "@/data/clinicData";
import {
  ShieldCheck,
  Anchor,
  Sparkles,
  Smile,
  Sun,
  Layers,
  HeartPulse,
  Activity,
  AlertCircle,
  Baby,
  ArrowRight,
} from "lucide-react";

interface ServiceCardProps {
  service: ServiceDetail;
}

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Anchor,
  Sparkles,
  Smile,
  Sun,
  Layers,
  HeartPulse,
  Activity,
  AlertCircle,
  Baby,
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = iconMap[service.iconName] || ShieldCheck;

  return (
    <article className="flex flex-col h-full bg-white rounded-2xl border border-surface-border shadow-subtle hover:shadow-card transition-all duration-200 overflow-hidden group">
      {/* Visual Header */}
      <div className="relative w-full h-44 overflow-hidden bg-slate-100">
        <Image
          src={service.image}
          alt={`${service.title} consultation at Dental Clinic Bhandup`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm p-2 rounded-xl text-teal shadow-sm">
          <IconComponent className="w-5 h-5" aria-hidden="true" />
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-grow p-5 sm:p-6 justify-between">
        <div>
          <h3 className="font-heading font-bold text-base sm:text-lg text-navy mb-2 group-hover:text-teal transition-colors">
            <Link href={`/services/${service.slug}`} className="focus-visible:outline-teal">
              {service.title}
            </Link>
          </h3>
          {/* Strictly 10-18 words description */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
            {service.shortDesc}
          </p>
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-teal hover:text-teal-700 transition-colors focus-visible:outline-teal"
            aria-label={`Learn more about ${service.title}`}
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}

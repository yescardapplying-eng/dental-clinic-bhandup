import Link from "next/link";
import { clinicConfig } from "@/data/clinicData";

interface DentalLogoProps {
  variant?: "default" | "footer";
  className?: string;
}

export default function DentalLogo({ variant = "default", className = "" }: DentalLogoProps) {
  const isFooter = variant === "footer";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 group focus-visible:rounded-lg ${className}`}
      aria-label={`${clinicConfig.name} - Homepage`}
    >
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 shrink-0 ${
          isFooter ? "bg-teal text-white shadow-subtle" : "bg-navy text-white shadow-subtle"
        }`}
      >
        {/* Medical Cross + Clean Tooth Emblem */}
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 2C7.5 2 5 5 5 9.5c0 3 1.5 6.5 2.5 9 1 2.5 2.5 3.5 4.5 3.5s3.5-1 4.5-3.5c1-2.5 2.5-6 2.5-9C19 5 16.5 2 12 2z" />
          <path d="M12 7v6" strokeWidth="2.2" stroke="#278C87" />
          <path d="M9 10h6" strokeWidth="2.2" stroke="#278C87" />
        </svg>
      </div>

      <div className="flex flex-col min-w-0">
        <span
          className={`font-heading font-bold text-lg leading-tight tracking-tight truncate ${
            isFooter ? "text-white" : "text-navy"
          }`}
        >
          {clinicConfig.name}
        </span>
        <span
          className={`text-xs font-medium tracking-wide truncate ${
            isFooter ? "text-slate-300" : "text-teal-600"
          }`}
        >
          Bhandup West, Mumbai
        </span>
      </div>
    </Link>
  );
}

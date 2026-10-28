import Link from "next/link";
import { ArrowLeft, Home, Calendar } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl border border-surface-border p-8 shadow-card text-center">
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-teal bg-teal-50 px-3 py-1 rounded-full border border-teal-100 mb-4">
          404 - Page Not Found
        </span>
        <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy mb-3">
          Page Not Available
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
          The dental service or page you are looking for may have moved or is temporarily unavailable. Please explore our main treatments or return home.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-navy text-white text-xs sm:text-sm font-semibold hover:bg-navy-600 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-surface-border text-navy text-xs sm:text-sm font-semibold hover:bg-slate-50 transition-colors"
          >
            <span>All Treatments</span>
          </Link>
        </div>
      </div>
    </div>
  );
}


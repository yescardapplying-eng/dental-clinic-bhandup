import Link from "next/link";
import DentalLogo from "@/components/DentalLogo";
import { clinicConfig } from "@/data/clinicData";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-slate-300 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand & Introduction */}
          <div>
            <DentalLogo variant="footer" className="mb-4" />
            {/* Strictly 15-18 words introduction */}
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Modern dental practice in Bhandup West dedicated to gentle treatments, preventive oral health, and personalized family care.
            </p>
            <p className="text-xs text-slate-400">
              Ethical, conservative dental healthcare in a calm, modern environment.
            </p>
          </div>

          {/* Col 2: Navigation & Pages */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-teal-300 mb-4 font-heading">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Clinic & Dentist
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  All Treatments
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-white transition-colors">
                  Patient Reviews
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Clinic Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Treatments */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-teal-300 mb-4 font-heading">
              Dental Treatments
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/root-canal-treatment" className="hover:text-white transition-colors">
                  Root Canal Treatment
                </Link>
              </li>
              <li>
                <Link href="/services/dental-implants" className="hover:text-white transition-colors">
                  Dental Implants
                </Link>
              </li>
              <li>
                <Link href="/services/teeth-cleaning" className="hover:text-white transition-colors">
                  Teeth Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/braces-and-aligners" className="hover:text-white transition-colors">
                  Braces & Aligners
                </Link>
              </li>
              <li>
                <Link href="/services/teeth-whitening" className="hover:text-white transition-colors">
                  Teeth Whitening
                </Link>
              </li>
              <li>
                <Link href="/services/crowns-and-bridges" className="hover:text-white transition-colors">
                  Crowns & Bridges
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Legal */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-teal-300 mb-4 font-heading">
              Contact & Hours
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                <span>
                  {clinicConfig.address.area}, {clinicConfig.address.city}, {clinicConfig.address.state}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal shrink-0" />
                <a
                  href={`tel:${clinicConfig.phone}`}
                  className="hover:text-white transition-colors font-medium text-white"
                >
                  {clinicConfig.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal shrink-0" />
                <a
                  href={`mailto:${clinicConfig.email}`}
                  className="hover:text-white transition-colors break-words-safe"
                >
                  {clinicConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                <span>
                  Mon–Sat: 10:00 AM – 1:30 PM & 5:00 PM – 9:00 PM
                  <br />
                  Sun: By Prior Appointment
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-navy-700/60 mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-400">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <span>•</span>
              <Link href="/medical-disclaimer" className="hover:text-white transition-colors">
                Medical Disclaimer
              </Link>
            </div>
          </div>
        </div>

        {/* 
          CRITICAL ATTRIBUTION LINE:
          Designed by Noorweb (where "Noorweb" is the anchor linking to https://www.noorweb.in).
          Absolute final footer element.
        */}
        <div className="pt-6 border-t border-navy-800 text-center text-xs text-slate-400">
          <p>
            © {currentYear} {clinicConfig.name}. All rights reserved. Designed by{" "}
            <a
              href="https://www.noorweb.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-300 hover:text-white underline underline-offset-2 transition-colors font-medium"
            >
              Noorweb
            </a>.
          </p>
        </div>
      </div>
    </footer>
  );
}

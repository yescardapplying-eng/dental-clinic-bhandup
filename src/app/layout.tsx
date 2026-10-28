import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import BookingModal from "@/components/BookingModal";
import { BookingProvider } from "@/context/BookingContext";
import { clinicConfig } from "@/data/clinicData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#12304A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dentalclinic.com"),
  title: {
    default: "Dental Clinic Bhandup West | Comprehensive Dental Care Mumbai",
    template: `%s | ${clinicConfig.name} Bhandup West`,
  },
  description:
    "Modern dental clinic in Bhandup West, Mumbai offering gentle root canals, dental implants, teeth cleaning, braces, and pediatric dental care.",
  keywords: [
    "dental clinic bhandup west",
    "dentist in bhandup",
    "dental implants mumbai",
    "root canal treatment bhandup",
    "teeth cleaning bhandup",
    "braces aligners bhandup west",
  ],
  authors: [{ name: clinicConfig.name }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Dental Clinic Bhandup West | Comprehensive Dental Care Mumbai",
    description:
      "Modern dental clinic in Bhandup West, Mumbai offering gentle root canals, dental implants, teeth cleaning, braces, and pediatric dental care.",
    url: "https://dentalclinic.com",
    siteName: clinicConfig.name,
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="min-h-screen flex flex-col bg-surface-offwhite text-slate-800 antialiased selection:bg-teal selection:text-white">
        <BookingProvider>
          {/* Header Navigation */}
          <Navbar />

          {/* Main Content Landmark */}
          <main id="main-content" className="flex-grow">
            {children}
          </main>

          {/* Floating WhatsApp Action (Shown on every page) */}
          <WhatsAppFloating />

          {/* Global Appointment Request Modal */}
          <BookingModal />

          {/* Site Footer with Noorweb attribution as absolute last item */}
          <Footer />
        </BookingProvider>
      </body>
    </html>
  );
}

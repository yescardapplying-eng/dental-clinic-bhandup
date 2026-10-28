"use client";

import React, { useState } from "react";
import Link from "next/link";
import { clinicConfig, servicesData, contactFaqs } from "@/data/clinicData";
import FaqAccordion from "@/components/FaqAccordion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  MessageCircle,
} from "lucide-react";

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [treatment, setTreatment] = useState("General Consultation");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredSlot, setPreferredSlot] = useState("Morning (10:00 AM – 1:30 PM)");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) {
      errs.fullName = "Please enter your full name.";
    }
    const cleanPhone = phoneNumber.replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phoneNumber = "Please enter a valid 10-digit mobile number.";
    }
    if (!preferredDate) {
      errs.preferredDate = "Please select a preferred date.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName("");
    setPhoneNumber("");
    setPreferredDate("");
    setMessage("");
    setErrors({});
  };

  const today = new Date().toISOString().split("T")[0];

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
              Contact
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-teal">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy mt-1 tracking-tight">
            Contact & Appointment Request
          </h1>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Have questions about dental treatments or wish to schedule a consultation in Bhandup West? Reach out by phone, WhatsApp, or through our appointment request form.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          {/* Left Column: Contact Cards & Clinic Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Details Card */}
            <div className="bg-white rounded-2xl border border-surface-border p-6 shadow-subtle hover:shadow-card transition-shadow">
              <h2 className="text-base font-heading font-bold text-navy mb-4">
                Clinic Information
              </h2>

              <div className="space-y-4 text-sm text-slate-600">
                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 icon-animate" />
                  </div>
                  <div>
                    <strong className="block text-navy font-semibold text-xs uppercase tracking-wide">
                      Location
                    </strong>
                    <span>{clinicConfig.address.area}, {clinicConfig.address.city}, {clinicConfig.address.state}, {clinicConfig.address.country}</span>
                    <p className="text-xs text-slate-400 mt-1">
                      {clinicConfig.address.landmarkNote}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5 italic">
                      {clinicConfig.address.pinCodeNote}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 icon-animate" />
                  </div>
                  <div>
                    <strong className="block text-navy font-semibold text-xs uppercase tracking-wide">
                      Phone Number
                    </strong>
                    <a
                      href={`tel:${clinicConfig.phone}`}
                      className="text-teal font-semibold hover:underline"
                    >
                      {clinicConfig.phoneDisplay}
                    </a>
                    <p className="text-xs text-slate-400 mt-0.5">Direct reception line</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4 icon-animate" />
                  </div>
                  <div>
                    <strong className="block text-navy font-semibold text-xs uppercase tracking-wide">
                      WhatsApp Inquiries
                    </strong>
                    <a
                      href={`https://wa.me/${clinicConfig.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal font-semibold hover:underline"
                    >
                      {clinicConfig.whatsappDisplay}
                    </a>
                    <p className="text-xs text-slate-400 mt-0.5">Appointment coordination & inquiries</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 icon-animate" />
                  </div>
                  <div>
                    <strong className="block text-navy font-semibold text-xs uppercase tracking-wide">
                      Email Address
                    </strong>
                    <a
                      href={`mailto:${clinicConfig.email}`}
                      className="text-slate-700 hover:text-teal break-words-safe font-medium"
                    >
                      {clinicConfig.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Timings Card */}
            <div className="bg-white rounded-2xl border border-surface-border p-6 shadow-subtle hover:shadow-card transition-shadow">
              <h2 className="text-base font-heading font-bold text-navy mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal" />
                <span>Consultation Timings</span>
              </h2>
              <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="font-medium text-navy">Monday – Saturday</span>
                  <span className="text-right">10:00 AM – 1:30 PM<br />5:00 PM – 9:00 PM</span>
                </div>
                <div className="flex justify-between py-1 pt-2">
                  <span className="font-medium text-navy">Sunday</span>
                  <span className="text-teal font-medium">Prior Appointment Only</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Appointment Request Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-card hover:shadow-elevated transition-shadow duration-300">
              <h2 className="text-xl font-heading font-bold text-navy mb-1">
                Request an Appointment
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Fill in your preferred date and contact details. Our reception will contact you to confirm your consultation timing.
              </p>

              {isSubmitted ? (
                <div className="py-8 text-center animate-fadeIn">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-navy mb-2">
                    Request Received Successfully
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-navy">{fullName}</strong>. We have received your consultation request for{" "}
                    <span className="font-semibold text-teal-700">{treatment}</span> on{" "}
                    <span className="font-semibold text-navy">{preferredDate}</span> ({preferredSlot}).
                  </p>
                  <div className="bg-mint-light/60 border border-teal-100 rounded-xl p-4 mb-6 text-xs text-slate-700 text-left max-w-md mx-auto">
                    <p className="font-bold text-teal-900 mb-1">Next Step</p>
                    <p>
                      Our receptionist will call or WhatsApp you at <strong>{phoneNumber}</strong> during regular clinic hours to confirm your consultation slot and share specific directions.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl bg-navy text-white text-xs sm:text-sm font-semibold hover:bg-navy-600 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-navy mb-1">
                      Patient Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patel"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-white text-navy placeholder:text-slate-400 focus:outline-none ${
                        errors.fullName ? "border-red-400 bg-red-50/20" : "border-surface-border focus:border-teal"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-navy mb-1">
                      Mobile Number (10 Digits) *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-500">
                        +91
                      </span>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="9876543210"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
                        className={`w-full pl-12 pr-3.5 py-2.5 text-sm rounded-xl border bg-white text-navy placeholder:text-slate-400 focus:outline-none ${
                          errors.phoneNumber ? "border-red-400 bg-red-50/20" : "border-surface-border focus:border-teal"
                        }`}
                      />
                    </div>
                    {errors.phoneNumber && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.phoneNumber}
                      </p>
                    )}
                  </div>

                  {/* Treatment Choice */}
                  <div>
                    <label htmlFor="contact-treatment" className="block text-xs font-semibold text-navy mb-1">
                      Dental Treatment
                    </label>
                    <select
                      id="contact-treatment"
                      value={treatment}
                      onChange={(e) => setTreatment(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-surface-border bg-white text-navy focus:outline-none focus:border-teal"
                    >
                      <option value="General Consultation">General Consultation / Examination</option>
                      {servicesData.map((svc) => (
                        <option key={svc.slug} value={svc.title}>
                          {svc.title}
                        </option>
                      ))}
                      <option value="Emergency Toothache">Emergency Toothache Relief</option>
                    </select>
                  </div>

                  {/* Date & Preferred Slot */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="contact-date" className="block text-xs font-semibold text-navy mb-1">
                        Preferred Date *
                      </label>
                      <input
                        id="contact-date"
                        type="date"
                        min={today}
                        required
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className={`w-full px-3 py-2 text-sm rounded-xl border bg-white text-navy focus:outline-none ${
                          errors.preferredDate ? "border-red-400 bg-red-50/20" : "border-surface-border focus:border-teal"
                        }`}
                      />
                      {errors.preferredDate && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.preferredDate}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-slot" className="block text-xs font-semibold text-navy mb-1">
                        Preferred Timing Slot
                      </label>
                      <select
                        id="contact-slot"
                        value={preferredSlot}
                        onChange={(e) => setPreferredSlot(e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-xl border border-surface-border bg-white text-navy focus:outline-none focus:border-teal"
                      >
                        <option value="Morning (10:00 AM – 1:30 PM)">Morning (10:00 AM – 1:30 PM)</option>
                        <option value="Evening (5:00 PM – 9:00 PM)">Evening (5:00 PM – 9:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-navy mb-1">
                      Optional Notes / Symptoms
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      maxLength={300}
                      placeholder="Briefly describe your dental concern, pain location, or questions..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2 text-sm rounded-xl border border-surface-border bg-white text-navy placeholder:text-slate-400 focus:outline-none focus:border-teal resize-none"
                    />
                  </div>

                  {/* Privacy Notice */}
                  <p className="text-[11px] text-slate-500 leading-tight">
                    Privacy Assurance: We respect your confidential healthcare details. Your phone number is used strictly by clinic reception to coordinate your dental consultation.
                  </p>

                  {/* Action */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3 rounded-xl bg-teal text-white text-xs sm:text-sm font-semibold hover:bg-teal-600 transition-all hover:shadow-card hover:-translate-y-0.5 shadow-subtle disabled:opacity-60 active:scale-95"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Request"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* 
          NEW GOOGLE MAP SECTION - DIRECTLY REQUESTED BY USER
          Visual interactive map of Bhandup West clinic location
        */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-card">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal">
                  Find Us On The Map
                </span>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mt-1">
                  Clinic Location: Bhandup West, Mumbai
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Located near Bhandup railway station with convenient access across central Mumbai.
                </p>
              </div>

              <a
                href="https://maps.google.com/?q=Bhandup+West+Mumbai+Maharashtra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-teal text-white text-xs sm:text-sm font-semibold hover:bg-teal-600 transition-all hover:shadow-card hover:-translate-y-0.5 shadow-subtle self-start sm:self-auto shrink-0"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Google Map iframe */}
            <div className="w-full h-80 sm:h-96 rounded-xl overflow-hidden border border-surface-border shadow-inner bg-slate-100">
              <iframe
                title="Google Map location of Bhandup West Mumbai"
                src={clinicConfig.address.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: 3 RELEVANT FAQS FOR CONTACT PAGE */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-teal">
              FAQs
            </span>
            <h2 className="text-2xl font-heading font-bold text-navy mt-1">
              Questions About Appointments & Reaching Our Clinic
            </h2>
          </div>
          <FaqAccordion faqs={contactFaqs} idPrefix="contact-faq" />
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { useBooking } from "@/context/BookingContext";
import { clinicConfig, servicesData } from "@/data/clinicData";
import { X, Calendar, Clock, CheckCircle2, AlertCircle } from "lucide-react";

export default function BookingModal() {
  const { isOpen, closeBooking, selectedService } = useBooking();

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredSlot, setPreferredSlot] = useState("Morning (10:00 AM – 1:30 PM)");
  const [treatment, setTreatment] = useState("");
  const [notes, setNotes] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedService) {
      const match = servicesData.find((s) => s.slug === selectedService);
      if (match) {
        setTreatment(match.title);
      } else {
        setTreatment(selectedService);
      }
    } else {
      setTreatment("General Consultation");
    }
  }, [selectedService, isOpen]);

  // Handle ESC key and scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeBooking();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeBooking]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) {
      newErrors.fullName = "Please enter your name.";
    }

    const cleanPhone = phoneNumber.replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phoneNumber = "Please enter a valid 10-digit phone number.";
    }

    if (!preferredDate) {
      newErrors.preferredDate = "Please choose a preferred date.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief request processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName("");
    setPhoneNumber("");
    setPreferredDate("");
    setNotes("");
    setErrors({});
    closeBooking();
  };

  if (!isOpen) return null;

  // Minimum date today
  const today = new Date().toISOString().split("T")[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div className="relative w-full max-w-lg my-8 bg-white rounded-2xl shadow-elevated border border-surface-border overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-surface-border bg-surface-offwhite">
          <div>
            <h2 id="booking-modal-title" className="text-lg font-heading font-bold text-navy">
              Request Appointment
            </h2>
            <p className="text-xs text-slate-500">
              {clinicConfig.name} • {clinicConfig.address.area}
            </p>
          </div>
          <button
            onClick={closeBooking}
            type="button"
            className="p-1.5 rounded-lg text-slate-400 hover:text-navy hover:bg-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-teal"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="py-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-heading font-bold text-navy mb-2">
                Request Received
              </h3>
              <p className="text-sm text-slate-600 mb-4 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-navy">{fullName}</strong>. Your appointment request for{" "}
                <span className="font-semibold text-teal-700">{treatment}</span> on{" "}
                <span className="font-semibold text-navy">{preferredDate}</span> has been noted.
              </p>
              <div className="bg-mint-light/60 border border-teal-100 rounded-xl p-3.5 mb-6 text-xs text-slate-700 text-left">
                <p className="font-semibold text-teal-900 mb-1">What happens next?</p>
                <p>
                  Our clinic reception in Bhandup West will call or WhatsApp you at{" "}
                  <strong>{phoneNumber}</strong> during clinic hours to confirm your exact appointment timing and provide consultation details.
                </p>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-navy text-white text-sm font-semibold hover:bg-navy-600 transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="bg-pale-mint/50 border border-teal-100 rounded-xl p-3 text-xs text-slate-700 flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>
                  This is an appointment request flow. Our reception confirms the final available slot via phone or WhatsApp.
                </span>
              </div>

              {/* Full Name */}
              <div>
                <label htmlFor="patient-name" className="block text-xs font-semibold text-navy mb-1">
                  Full Name *
                </label>
                <input
                  id="patient-name"
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
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

              {/* Phone Number */}
              <div>
                <label htmlFor="patient-phone" className="block text-xs font-semibold text-navy mb-1">
                  Mobile Number (10 Digits) *
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-500">
                    +91
                  </span>
                  <input
                    id="patient-phone"
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

              {/* Treatment Selection */}
              <div>
                <label htmlFor="patient-treatment" className="block text-xs font-semibold text-navy mb-1">
                  Treatment / Service
                </label>
                <select
                  id="patient-treatment"
                  value={treatment}
                  onChange={(e) => setTreatment(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-surface-border bg-white text-navy focus:outline-none focus:border-teal"
                >
                  <option value="General Consultation">General Dental Consultation</option>
                  {servicesData.map((svc) => (
                    <option key={svc.slug} value={svc.title}>
                      {svc.title}
                    </option>
                  ))}
                  <option value="Emergency Toothache">Emergency Toothache</option>
                </select>
              </div>

              {/* Date & Preferred Slot Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="patient-date" className="block text-xs font-semibold text-navy mb-1">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <input
                      id="patient-date"
                      type="date"
                      min={today}
                      required
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className={`w-full px-3 py-2 text-sm rounded-xl border bg-white text-navy focus:outline-none ${
                        errors.preferredDate ? "border-red-400 bg-red-50/20" : "border-surface-border focus:border-teal"
                      }`}
                    />
                  </div>
                  {errors.preferredDate && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.preferredDate}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="patient-slot" className="block text-xs font-semibold text-navy mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    id="patient-slot"
                    value={preferredSlot}
                    onChange={(e) => setPreferredSlot(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-surface-border bg-white text-navy focus:outline-none focus:border-teal"
                  >
                    <option value="Morning (10:00 AM – 1:30 PM)">Morning (10:00 AM – 1:30 PM)</option>
                    <option value="Evening (5:00 PM – 9:00 PM)">Evening (5:00 PM – 9:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Short Note */}
              <div>
                <label htmlFor="patient-notes" className="block text-xs font-semibold text-navy mb-1">
                  Optional Note / Symptoms
                </label>
                <textarea
                  id="patient-notes"
                  rows={2}
                  maxLength={200}
                  placeholder="e.g. Pain in lower left molar when drinking cold water"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-surface-border bg-white text-navy placeholder:text-slate-400 focus:outline-none focus:border-teal resize-none"
                />
              </div>

              {/* Privacy Notice */}
              <p className="text-[11px] text-slate-500 leading-tight">
                By submitting this request, you agree to our privacy policy. Your information is used strictly by clinic staff to schedule your visit.
              </p>

              {/* Submit Button */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={closeBooking}
                  className="px-4 py-2.5 rounded-xl border border-surface-border text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-xl bg-teal text-white text-xs font-semibold hover:bg-teal-600 transition-colors shadow-subtle disabled:opacity-60"
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}


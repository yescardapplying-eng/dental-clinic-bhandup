import React from "react";
import { Star, MessageSquarePlus, ExternalLink, ShieldCheck } from "lucide-react";
import { clinicConfig } from "@/data/clinicData";

interface VerifiedReview {
  id: string;
  author: string;
  date: string;
  rating: number;
  treatment: string;
  comment: string;
  source: string;
}

// Configurable approved patient feedback list.
// As instructed: Never fabricate Google reviews. In accordance with clinical advertising ethics,
// real patient testimonials are published only with written verification and consent.
export const approvedReviews: VerifiedReview[] = [
  // Ready to be populated when authentic, signed patient feedback forms are received.
];

export default function GoogleReviewsShowcase() {
  const hasReviews = approvedReviews.length > 0;

  return (
    <section className="py-12 bg-surface-offwhite" aria-labelledby="reviews-section-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-teal">
            Patient Feedback & Transparency
          </span>
          <h2 id="reviews-section-title" className="text-2xl sm:text-3xl font-heading font-bold text-navy mt-1">
            Patient Experiences
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            In compliance with healthcare transparency standards, we only publish verified, authorized patient reviews.
          </p>
        </div>

        {hasReviews ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approvedReviews.map((rev) => (
              <article
                key={rev.id}
                className="bg-white rounded-2xl p-6 border border-surface-border shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-navy/10 text-navy font-bold flex items-center justify-center text-sm">
                        {rev.author.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-sm text-navy">{rev.author}</h3>
                        <p className="text-xs text-slate-500">{rev.date}</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-medium text-teal bg-teal-50 px-2 py-0.5 rounded-full border border-teal-100">
                      {rev.source}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 mb-3 text-amber-400">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-amber-400" aria-hidden="true" />
                    ))}
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed italic">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Treatment: {rev.treatment}</span>
                  <span className="flex items-center gap-1 text-teal font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" /> Verified
                  </span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-subtle text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-teal-50 text-teal flex items-center justify-center mb-3">
              <MessageSquarePlus className="w-6 h-6" />
            </div>
            <h3 className="text-base sm:text-lg font-heading font-bold text-navy mb-2">
              Share Your Dental Consultation Feedback
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-md mx-auto leading-relaxed">
              We uphold genuine medical ethics and do not display simulated reviews. If you have recently visited our Bhandup West clinic, your authentic feedback helps us continually refine our patient care.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://maps.google.com/?q=Bhandup+West+Mumbai+Dental+Clinic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-teal text-white text-xs sm:text-sm font-semibold hover:bg-teal-600 transition-colors shadow-subtle"
              >
                <span>Leave a Review</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="tel:+911234567890"
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-surface-border text-navy text-xs sm:text-sm font-semibold hover:bg-slate-50 transition-colors"
              >
                Feedback Front Desk
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}


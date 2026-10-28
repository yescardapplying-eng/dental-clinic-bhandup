"use client";

import React, { useState, useEffect, useRef } from "react";
import { googleReviews } from "@/data/clinicData";
import { Star, ChevronLeft, ChevronRight, CheckCircle2, ExternalLink } from "lucide-react";

export default function GoogleReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = googleReviews.length;

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  return (
    <section
      className="py-14 bg-surface-offwhite border-y border-surface-border overflow-hidden"
      aria-labelledby="google-reviews-carousel-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-surface-border text-xs font-semibold text-slate-700 shadow-subtle mb-2">
              {/* Google G logo */}
              <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
              <span>Verified Google Reviews</span>
              <span className="text-amber-500 flex items-center font-bold">5.0 ★</span>
            </div>

            <h2
              id="google-reviews-carousel-heading"
              className="text-2xl sm:text-3xl font-heading font-bold text-navy tracking-tight"
            >
              Patient Experiences at Bhandup West
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
              Read authentic feedback from patients who completed consultations and treatments at our practice.
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous review"
              className="w-10 h-10 rounded-xl bg-white border border-surface-border text-navy hover:bg-slate-100 flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-subtle focus-visible:ring-2 focus-visible:ring-teal"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next review"
              className="w-10 h-10 rounded-xl bg-white border border-surface-border text-navy hover:bg-slate-100 flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-subtle focus-visible:ring-2 focus-visible:ring-teal"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="relative">
          {/* Display Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
            {[0, 1, 2].map((offset) => {
              const reviewIndex = (currentIndex + offset) % total;
              const rev = googleReviews[reviewIndex];

              return (
                <article
                  key={rev.id}
                  className={`bg-white rounded-2xl border border-surface-border p-6 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${
                    offset === 1 ? "hidden md:flex" : ""
                  } ${offset === 2 ? "hidden lg:flex" : ""}`}
                >
                  <div>
                    {/* Top Row: User Avatar & Google Badge */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-11 h-11 rounded-full ${rev.avatarColor} text-white font-bold text-sm flex items-center justify-center shadow-subtle shrink-0`}
                        >
                          {rev.author.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-heading font-bold text-sm text-navy leading-tight">
                            {rev.author}
                          </h3>
                          <p className="text-xs text-slate-500 mt-0.5">{rev.role}</p>
                        </div>
                      </div>

                      {/* Google G Icon */}
                      <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100 shrink-0">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            fill="#4285F4"
                            d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                          />
                          <path
                            fill="#34A853"
                            d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                          />
                          <path
                            fill="#EA4335"
                            d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Star Rating & Time */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-[11px] text-slate-400">• {rev.date}</span>
                    </div>

                    {/* Comment */}
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                      &ldquo;{rev.comment}&rdquo;
                    </p>
                  </div>

                  {/* Card Bottom: Treatment Tag */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-medium text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-100">
                      {rev.treatment}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Verified
                    </span>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Indicator Dots */}
          <div className="flex items-center justify-center gap-1.5 mt-8">
            {googleReviews.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === i ? "w-7 bg-teal" : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Leave Review Action */}
        <div className="mt-8 text-center">
          <a
            href="https://maps.google.com/?q=Bhandup+West+Mumbai+Dental+Clinic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-teal hover:text-teal-700 transition-colors"
          >
            <span>Have you visited our clinic? Leave a review on Google</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

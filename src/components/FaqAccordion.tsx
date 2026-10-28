"use client";

import React, { useState } from "react";
import { FAQItem } from "@/data/clinicData";
import { ChevronDown } from "lucide-react";

interface FaqAccordionProps {
  faqs: FAQItem[];
  idPrefix?: string;
}

export default function FaqAccordion({ faqs, idPrefix = "faq" }: FaqAccordionProps) {
  // First item open by default for scanning
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const headingId = `${idPrefix}-heading-${index}`;
        const contentId = `${idPrefix}-content-${index}`;

        return (
          <div
            key={index}
            className={`border rounded-xl transition-colors duration-200 overflow-hidden ${
              isOpen
                ? "bg-white border-teal/40 shadow-subtle"
                : "bg-white border-surface-border hover:border-slate-300"
            }`}
          >
            <h3>
              <button
                type="button"
                id={headingId}
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => toggle(index)}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 text-navy font-heading font-semibold text-sm sm:text-base focus-visible:outline-teal"
              >
                <span className="min-w-0 pr-2">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-teal shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-teal-700" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>

            {isOpen && (
              <div
                id={contentId}
                role="region"
                aria-labelledby={headingId}
                className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100"
              >
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

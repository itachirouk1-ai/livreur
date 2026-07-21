"use client";

import { reviews } from "@/lib/reviews";
import { ReviewCard } from "../ui/review-card";
import { siteContent } from "@/lib/site-content";
import { useLocalePreference } from "@/lib/use-locale";

export function ReviewsSection() {
  const locale = useLocalePreference();
  const copy = siteContent[locale];
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="py-5 sm:py-5">
      <div className="mx-auto max-w-7xl px-4">
        {/* Title */}
        <div className="mx-auto mb-3 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1 text-sm font-semibold text-orange-600 dark:text-orange-400">
            {copy.reviewsBadge}
          </span>

        
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <div className="group flex">
            <div className="flex w-max animate-marquee gap-6 group-hover:[animation-play-state:paused]">
              {duplicatedReviews.map((review, index) => (
                <ReviewCard
                  key={`${review.id}-${index}`}
                  review={review}
                />
              ))}
            </div>
          </div>

          {/* Left Gradient */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent sm:w-32" />

          {/* Right Gradient */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent sm:w-32" />
        </div>
      </div>
    </section>
  );
}
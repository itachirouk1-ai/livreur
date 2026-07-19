"use client";

import { reviews } from "@/lib/reviews";
import { ReviewCard } from "../ui/review-card";


export function ReviewsSection() {
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Title */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1 text-sm font-semibold text-orange-600 dark:text-orange-400">
            ⭐ Avis Clients
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Ce que disent nos clients
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
            Découvrez les avis de nos clients satisfaits après leurs livraisons
            à Marrakech.
          </p>
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
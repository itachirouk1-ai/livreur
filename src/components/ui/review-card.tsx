"use client";

import Image from "next/image";
import { Star, BadgeCheck } from "lucide-react";

export interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  review: string;
}

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article
      className="
        w-[80vw] max-w-[360px] shrink-0
        rounded-3xl
        border border-slate-200/80 dark:border-slate-700/70
        bg-white/80 dark:bg-slate-900/70
        backdrop-blur-xl
        p-6
        shadow-lg
        transition-all duration-300
        hover:-translate-y-1
        hover:border-orange-500/60
        hover:shadow-2xl
      "
    >
      {/* Header */}
      <div className="flex items-center gap-4">
<img
  src={review.avatar}
  alt={review.name}
  width={56}
  height={56}
  className="rounded-full w-14 h-14 object-cover"
/>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1">
            <h3 className="truncate text-base font-bold text-slate-900 dark:text-white">
              {review.name}
            </h3>

            <BadgeCheck className="h-4 w-4 shrink-0 text-emerald-500" />
          </div>

          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
            {review.date}
          </p>
        </div>
      </div>

      {/* Stars */}
      <div className="mt-5 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 ${
              index < review.rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-slate-300 dark:text-slate-600"
            }`}
          />
        ))}
      </div>

      {/* Review */}
      <p className="mt-5 line-clamp-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
        {review.review}
      </p>
    </article>
  );
}
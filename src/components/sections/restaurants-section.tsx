'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { siteContent, withLocaleHref } from '@/lib/site-content';
import { useLocalePreference } from '@/lib/use-locale';

interface Restaurant {
  name: string;
  description: string;
  badge?: string;
  emoji?: string;
  href?: string;
  accent?: string;
}

interface RestaurantsSectionProps {
  restaurants: Restaurant[];
}

export function RestaurantsSection({ restaurants }: RestaurantsSectionProps) {
  const locale = useLocalePreference();
  const copy = siteContent[locale];

  return (
    <section className="mx-auto mt-5 sm:mt-10 max-w-7xl px-2 sm:px-0">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-12 sm:mb-16"
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className=" text-center sm:text-left text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-slate-950 dark:text-white">
              
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 bg-clip-text text-transparent">
                {copy.restaurantsHeading}
              </span>
            </h2>
            <p className="mt-2 sm:mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              {copy.restaurantsDescription}
            </p>
          </div>
          <div className="hidden sm:block">
            <Link
              href={withLocaleHref('/#services', locale)}
              className="inline-flex h-11 sm:h-12 items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 px-6 sm:px-8 text-sm sm:text-base font-bold text-white shadow-[0_12px_30px_rgba(249,115,22,0.3)] transition-all hover:scale-[1.04]"
            >
              {copy.exploreServices}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {restaurants.map((restaurant, index) => (
          <motion.div
            key={restaurant.name}
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="group flex h-full flex-col"
          >
            <Link href={withLocaleHref(restaurant.href ?? '/#services', locale)} className="flex h-full flex-col">
              <div className="relative flex-1 overflow-hidden rounded-[24px] shadow-[0_16px_40px_rgba(15,23,42,0.12)] transition-all duration-300 hover:shadow-[0_24px_60px_rgba(15,23,42,0.18)] sm:rounded-[28px]">
                <div className={`absolute inset-0 bg-gradient-to-br ${restaurant.accent ?? 'from-orange-400 via-amber-400 to-red-500'} opacity-80`} />
                <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/40" />

                <div className="relative flex h-64 items-center justify-center text-6xl sm:h-72 sm:text-7xl">
                  {restaurant.emoji ?? '🏪'}
                </div>

                {restaurant.badge && (
                  <div className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-orange-600 shadow-lg backdrop-blur sm:text-sm">
                    <Sparkles className="h-4 w-4" />
                    {restaurant.badge}
                  </div>
                )}
              </div>

              <div className="mt-4 flex flex-1 flex-col">
                <h3 className="text-xl font-bold text-slate-950 dark:text-white sm:text-2xl">
                  {restaurant.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
                  {restaurant.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:text-primary/90">
                  <span>{copy.seeVendorPage}</span>
                  <span aria-hidden="true">→</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

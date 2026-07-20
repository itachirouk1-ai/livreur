
"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { siteContent, withLocaleHref } from '@/lib/site-content';
import { useLocalePreference } from '@/lib/use-locale';
import Image from 'next/image';

interface Restaurant {
  name: string;
  description: string;
  badge?: string;
  emoji?: string;
  href?: string;
  accent?: string;
  logoUrl?: string;
  logoAlt?: string;
}

interface RestaurantsSectionProps {
  restaurants: Restaurant[];
}

export function RestaurantsSection({ restaurants }: RestaurantsSectionProps) {
  const locale = useLocalePreference();
  const copy = siteContent[locale];
  
  return (
    <section className="mx-auto mt-2 sm:mt-10 max-w-7xl px-2 sm:px-0">
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
          
        </div>
      </motion.div>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2">
        {restaurants.map((restaurant, index) => (
          <motion.div
            key={restaurant.name}
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="group flex h-full flex-col rounded-[28px] border border-slate-200 p-2 transition-all duration-300 hover:border-orange-500 dark:border-slate-700"
          >
            <Link href={withLocaleHref(restaurant.href ?? '/#services', locale)} className="flex h-full flex-col">
              <div className="relative flex-1 overflow-hidden rounded-[24px] shadow-[0_16px_40px_rgba(15,23,42,0.12)] transition-all duration-300 hover:shadow-[0_24px_60px_rgba(15,23,42,0.18)] sm:rounded-[28px]">
                <div className={`absolute inset-0 bg-gradient-to-br ${restaurant.accent ?? 'from-orange-400 via-amber-400 to-red-500'} opacity-80`} />
                <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/40" />

                <div className="relative h-64 sm:h-72">
                  {restaurant.logoUrl ? (
  <Image
    src={restaurant.logoUrl}
    alt={restaurant.logoAlt ?? restaurant.name}
    fill
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    className="object-cover transition-transform duration-300 group-hover:scale-105"
  />
) : (
  <div className="flex h-full items-center justify-center text-6xl sm:text-7xl">
    {restaurant.emoji ?? "🏪"}
  </div>
)}
                </div>

                {restaurant.badge && (
                  <div className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-orange-600 shadow-lg backdrop-blur sm:text-sm">
                    <Sparkles className="h-4 w-4" />
                    {restaurant.badge}
                  </div>
                )}
              </div>

              <div className="mt-4 flex flex-col">
                <h3 className="text-xl font-bold text-slate-950 dark:text-white sm:text-2xl">
                 {restaurant.name}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
  {restaurant.description.replace(/\n/g, " ")}
</p>        
              <div className="mt-5">
  <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
    <span>{copy.seeVendorPage}</span>
    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
  </div>
</div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

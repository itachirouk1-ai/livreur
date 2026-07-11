"use client";

import { motion } from "framer-motion";

export interface BrandLogoItem {
  id: string;
  name: string;
  logoUrl: string;
  logoAlt: string;
  category?: string;
}

interface BrandsSectionProps {
  brands: BrandLogoItem[];
  heading?: string;
  description?: string;
}

export function BrandsSection({ brands, heading = "Top brands", description = "Discover leading brands for this service." }: BrandsSectionProps) {
  const loopedBrands = [...brands, ...brands];

  if (brands.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto max-w-7xl px-4 mt-12 sm:mt-20">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.36em] text-orange-500 font-semibold">
            {heading}
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-slate-950 dark:text-white">
            {description}
          </h2>
        </div>
      </div>

      <div className="relative mt-8 overflow-hidden rounded-[32px] border border-slate-200/70 bg-white/90 p-3 shadow-[0_28px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/40">
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white dark:from-slate-950 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white dark:from-slate-950 to-transparent pointer-events-none" />

        <div className="marquee-track">
          {loopedBrands.map((brand, index) => (
            <motion.div
              key={`${brand.id}-${index}`}
              whileHover={{ scale: 1.03 }}
              className="flex-shrink-0 w-auto sm:w-28"
            >
              <article className="rounded-[20px] text-center transition duration-200 hover:-translate-y-0.5 hover:shadow-lg">
                <div className="h-10 w-10 overflow-hidden rounded-2xl py-1 sm:h-12 sm:w-12">
                  <img
                    src={brand.logoUrl}
                    alt={brand.logoAlt}
                    loading="lazy"
                    decoding="async"
                    width={48}
                    height={48}
                    className="h-full w-full object-contain"
                  />
                </div>
                <p className="mt-2 text-[0.65rem] font-semibold text-slate-900 dark:text-white">
                  {brand.name}
                </p>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

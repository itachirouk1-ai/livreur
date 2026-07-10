"use client";

import { motion } from "framer-motion";

interface ServiceCategory {
  name: string;
  emoji: string;
}

export interface BrandLogoItem {
  id: string;
  name: string;
  logoUrl?: string;
  logoAlt?: string;
  logoEmoji?: string;
}

interface CategoriesSectionProps {
  categories: ServiceCategory[];
  brands?: BrandLogoItem[];
  accentTextClass?: string;
  accentGradient?: string;
}

export function CategoriesSection({
  categories,
  brands,
  accentTextClass,
  accentGradient,
}: CategoriesSectionProps) {
  const accentClasses = getAccentClasses(accentTextClass);
  const uniqueBrands = (brands ?? []).filter(
    (brand, index, allBrands) =>
      allBrands.findIndex((item) => item.id === brand.id) === index
  );

  return (
    <section className="mx-auto max-w-7xl px-1 mt-1">
      <div className={`relative overflow-hidden rounded-[32px] w-full py-1 border ${accentClasses.borderClass} ${accentClasses.softClass}`}>
        <div className="marquee-track">
          <div className="marquee-group">
            {categories.map((category) => (
              <Card
                key={`1-${category.name}`}
                category={category}
                accentClasses={accentClasses}
              />
            ))}
          </div>

          <div className="marquee-group">
            {categories.map((category) => (
              <Card
                key={`2-${category.name}`}
                category={category}
                accentClasses={accentClasses}
              />
            ))}
          </div>
        </div>
      </div>

      {uniqueBrands.length > 0 ? (
        <div className={`overflow-hidden rounded-[32px] mt-1 border ${accentClasses.borderClass} ${accentClasses.softClass}`}>
          <div className="marquee-track">
            <div className="marquee-group">
              {uniqueBrands.map((brand, index) => (
                <BrandCard
                  key={`brand-a-${brand.id}-${index}`}
                  brand={brand}
                  accentClasses={accentClasses}
                />
              ))}
            </div>
            <div className="marquee-group">
              {uniqueBrands.map((brand, index) => (
                <BrandCard
                  key={`brand-b-${brand.id}-${index}`}
                  brand={brand}
                  accentClasses={accentClasses}
                />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function Card({
  category,
  accentClasses,
}: {
  category: ServiceCategory;
  accentClasses: ReturnType<typeof getAccentClasses>;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex-shrink-0 w-20 py-2 sm:w-24"
    >
      <div className={`flex h-28 flex-col items-center justify-center rounded-[24px] border text-center transition-all hover:shadow-lg ${accentClasses.borderClass} ${accentClasses.softClass}`}>
        <div className="text-3xl sm:text-4xl">{category.emoji}</div>

        <p className={`mt-2 text-sm font-semibold ${accentClasses.textClass}`}>
          {category.name}
        </p>
      </div>
    </motion.div>
  );
}

function BrandCard({
  brand,
  accentClasses,
}: {
  brand: BrandLogoItem;
  accentClasses: ReturnType<typeof getAccentClasses>;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="flex-shrink-0 w-auto sm:w-32"
    >
      <article className={`flex h-28 flex-col items-center justify-center rounded-[24px] border px-3 py-4 text-center transition duration-200 hover:-translate-y-0.5 hover:shadow-lg ${accentClasses.borderClass} ${accentClasses.softClass}`}>
        <div className="mx-auto flex h-14 w-14 items-center justify-center overflow-hidden rounded-3xl bg-white shadow-inner sm:h-16 sm:w-16">
          {brand.logoUrl ? (
            <img
              src={brand.logoUrl}
              alt={brand.logoAlt || brand.name}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-contain"
            />
          ) : (
            <span className="text-2xl">
              {brand.logoEmoji || brand.name.charAt(0)}
            </span>
          )}
        </div>
        <p className={`mt-2 text-xs font-semibold ${accentClasses.textClass}`}>
          {brand.name}
        </p>
      </article>
    </motion.div>
  );
}

function getAccentClasses(accentTextClass?: string) {
  if (accentTextClass?.includes("red")) {
    return {
      textClass: "text-red-600 dark:text-red-400",
      borderClass: "border-red-200/80 dark:border-red-800/50",
      softClass: "bg-red-50/80 dark:bg-red-950/20",
    };
  }

  if (accentTextClass?.includes("emerald") || accentTextClass?.includes("green")) {
    return {
      textClass: "text-emerald-600 dark:text-emerald-400",
      borderClass: "border-emerald-200/80 dark:border-emerald-800/50",
      softClass: "bg-emerald-50/80 dark:bg-emerald-950/20",
    };
  }

  if (accentTextClass?.includes("blue") || accentTextClass?.includes("sky") || accentTextClass?.includes("cyan")) {
    return {
      textClass: "text-blue-600 dark:text-blue-400",
      borderClass: "border-blue-200/80 dark:border-blue-800/50",
      softClass: "bg-blue-50/80 dark:bg-blue-950/20",
    };
  }

  if (accentTextClass?.includes("pink")) {
    return {
      textClass: "text-pink-600 dark:text-pink-400",
      borderClass: "border-pink-200/80 dark:border-pink-800/50",
      softClass: "bg-pink-50/80 dark:bg-pink-950/20",
    };
  }

  if (accentTextClass?.includes("purple") || accentTextClass?.includes("fuchsia")) {
    return {
      textClass: "text-purple-600 dark:text-purple-400",
      borderClass: "border-purple-200/80 dark:border-purple-800/50",
      softClass: "bg-purple-50/80 dark:bg-purple-950/20",
    };
  }

  if (accentTextClass?.includes("amber") || accentTextClass?.includes("yellow")) {
    return {
      textClass: "text-amber-600 dark:text-amber-400",
      borderClass: "border-amber-200/80 dark:border-amber-800/50",
      softClass: "bg-amber-50/80 dark:bg-amber-950/20",
    };
  }

  if (accentTextClass?.includes("indigo")) {
    return {
      textClass: "text-indigo-600 dark:text-indigo-400",
      borderClass: "border-indigo-200/80 dark:border-indigo-800/50",
      softClass: "bg-indigo-50/80 dark:bg-indigo-950/20",
    };
  }

  return {
    textClass: "text-slate-700 dark:text-slate-200",
    borderClass: "border-slate-200/80 dark:border-slate-700/60",
    softClass: "bg-slate-50/80 dark:bg-slate-900/50",
  };
}
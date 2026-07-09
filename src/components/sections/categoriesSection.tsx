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
}

export function CategoriesSection({
  categories,
  brands,
}: CategoriesSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-1 mt-1 sm:mt-24">
      <div className="relative overflow-hidden rounded-[32px] w-full py-1 ">
        <div className="marquee-track">
          <div className="marquee-group">
            {categories.map((category) => (
              <Card key={`1-${category.name}`} category={category} />
            ))}
          </div>

          <div className="marquee-group">
            {categories.map((category) => (
              <Card key={`2-${category.name}`} category={category} />
            ))}
          </div>
        </div>
      </div>

      {brands && brands.length > 0 ? (
        <div className=" overflow-hidden rounded-[32px] mt-3">
          

          <div className="marquee-track">
            <div className="marquee-group">
              {brands.map((brand) => (
                <BrandCard key={`1-${brand.id}`} brand={brand} />
              ))}
            </div>
            <div className="marquee-group">
              {brands.map((brand) => (
                <BrandCard key={`2-${brand.id}`} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function Card({ category }: { category: ServiceCategory }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex-shrink-0 w-28 sm:w-36"
    >
      <div className="rounded-[24px] p-1 hover:shadow-lg transition-all">
        <div className="text-center">
          <div className="text-4xl">{category.emoji}</div>

          <p className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">
            {category.name}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function BrandCard({ brand }: { brand: BrandLogoItem }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="flex-shrink-0 w-28 sm:w-32"
    >
      <article className="rounded-[24px] text-center transition duration-200 hover:-translate-y-0.5 hover:shadow-lg">
        <div className="mx-auto flex h-14 w-14 items-center justify-center overflow-hidden rounded-3xl bg-white shadow-inner">
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
        <p className="mt-1 text-xs font-semibold text-slate-900 dark:text-white">
          {brand.name}
        </p>
      </article>
    </motion.div>
  );
}
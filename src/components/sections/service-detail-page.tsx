"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CategoriesSection } from "@/components/sections/categoriesSection";
import { AnimatedCallButton } from "@/components/ui/AnimatedCallButton";
import { AnimatedJoinButton } from "@/components/ui/animated-join-button";

interface ServiceCategory {
  name: string;
  emoji: string;
}

interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
}

interface ServiceVendor {
  id: string;
  name: string;
  brand: string;
  logo: string;
  logoUrl?: string;
  logoAlt?: string;
  description: string;
}

interface ServiceDetailPageProps {
  slug?: string;
  heroImageUrl?: string;
  title: string;
  titleColor: string;
  accentGradient?: string;
  description: string;
  deliveryTime: string;
  features: ServiceFeature[];
  categories: ServiceCategory[];
  vendors: ServiceVendor[];
}

function getAccentTextClass(accentTextClass?: string) {
  if (accentTextClass?.includes("red")) {
    return "text-red-600 dark:text-red-400";
  }

  if (accentTextClass?.includes("emerald") || accentTextClass?.includes("green")) {
    return "text-emerald-600 dark:text-emerald-400";
  }

  if (accentTextClass?.includes("blue") || accentTextClass?.includes("sky") || accentTextClass?.includes("cyan")) {
    return "text-blue-600 dark:text-blue-400";
  }

  if (accentTextClass?.includes("pink")) {
    return "text-pink-600 dark:text-pink-400";
  }

  if (accentTextClass?.includes("purple") || accentTextClass?.includes("fuchsia")) {
    return "text-purple-600 dark:text-purple-400";
  }

  if (accentTextClass?.includes("amber") || accentTextClass?.includes("yellow")) {
    return "text-amber-600 dark:text-amber-400";
  }

  if (accentTextClass?.includes("indigo")) {
    return "text-indigo-600 dark:text-indigo-400";
  }

  return "text-slate-700 dark:text-slate-200";
}

function getAccentBadgeClass(accentTextClass?: string) {
  if (accentTextClass?.includes("red")) {
    return "bg-red-500";
  }

  if (accentTextClass?.includes("emerald") || accentTextClass?.includes("green")) {
    return "bg-emerald-500";
  }

  if (accentTextClass?.includes("blue") || accentTextClass?.includes("sky") || accentTextClass?.includes("cyan")) {
    return "bg-blue-500";
  }

  if (accentTextClass?.includes("pink")) {
    return "bg-pink-500";
  }

  if (accentTextClass?.includes("purple") || accentTextClass?.includes("fuchsia")) {
    return "bg-purple-500";
  }

  if (accentTextClass?.includes("amber") || accentTextClass?.includes("yellow")) {
    return "bg-amber-500";
  }

  if (accentTextClass?.includes("indigo")) {
    return "bg-indigo-500";
  }

  return "bg-slate-500";
}

export function ServiceDetailPageComponent({
  slug,
  heroImageUrl,
  title,
  titleColor,
  accentGradient,
  description,
  deliveryTime,
  features,
  categories,
  vendors,
}: ServiceDetailPageProps) {
  const brandItems = vendors.map((vendor) => ({
    id: vendor.id,
    name: vendor.brand,
    logoUrl: vendor.logoUrl,
    logoAlt: vendor.logoAlt || `${vendor.brand} brand logo`,
    logoEmoji: vendor.logo,
  }));

  const uniqueBrandItems = Array.from(
    new Map(brandItems.map((brand) => [brand.id, brand])).values()
  );
  const accentTextClass = getAccentTextClass(titleColor);
  const accentBadgeClass = getAccentBadgeClass(titleColor);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-1 pt-1 sm:px-6 lg:px-8 lg:pt-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-7xl"
        >
          {/* Hero Content */}
          <div className="relative">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`relative h-64 overflow-hidden rounded-[32px] border border-white/60 bg-gradient-to-br ${accentGradient ?? "from-orange-200 via-amber-100 to-orange-100 dark:from-orange-900/30 dark:via-amber-900/30 dark:to-orange-900/30"} shadow-[0_20px_80px_-30px_rgba(15,23,42,0.3)] sm:h-80 lg:h-[28rem]`}
            >
              {heroImageUrl ? (
                <img
                  src={heroImageUrl}
                  alt={title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-9xl sm:text-[120px] lg:text-[140px]">
                  🍔
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/35 to-transparent" />

              <div className="absolute inset-0 z-10 flex items-start justify-center px-6 text-center sm:px-10 lg:justify-start lg:pl-12 lg:text-left">
                <div className="max-w-2xl pt-2 sm:pt-4 lg:pt-6">
                  <h1 className="text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                    {title}
                  </h1>
                </div>
              </div>

              <div className="absolute bottom-3 left-2 right-2 z-20 flex flex-col gap-2 sm:bottom-6 sm:left-3 sm:right-3 sm:flex-row sm:items-center sm:justify-between sm:gap-3 lg:bottom-6 lg:left-6 lg:right-6 lg:gap-3">
                <AnimatedCallButton label="Appeler" />
                <AnimatedJoinButton label="WhatsApp" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Categories + Brand logos */}
      <CategoriesSection
        categories={categories}
        brands={uniqueBrandItems}
        accentTextClass={titleColor}
      />

      {/* Vendors Section */}
      {vendors.length > 0 && (
        <section className="mx-auto mt-16 sm:mt-24 max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Les Meilleurs Restaurants
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Nous livrons vos plats préférés de n&apos;importe quel restaurant de Marrakech directement à votre domicile !
            </p>
          </div>

          <div className="space-y-6">
            {vendors.map((vendor, index) => (
              <motion.div
                key={`${vendor.id}-${index}`}
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex gap-4 sm:gap-6 pb-6 border-b border-slate-200 dark:border-slate-800 last:border-0"
              >
                {/* Logo */}
                <div className="h-24 w-24 sm:h-28 sm:w-28 flex-shrink-0 rounded-[20px] overflow-hidden shadow-lg bg-white">
                  <img
                    src={`https://picsum.photos/seed/${vendor.id}/320/320`}
                    alt={vendor.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <Link
                    href={`/services/${slug}/vendors/${vendor.id}`}
                    className="group block rounded-[28px] border border-slate-200/80 bg-white/90 p-4 transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700/80 dark:bg-slate-950/70 dark:hover:border-slate-500"
                  >
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                        {vendor.name}
                      </h3>
                      <p className={`${accentTextClass} font-semibold text-sm sm:text-base mt-1`}>
                        {vendor.brand}
                      </p>
                      <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3">
                        {vendor.description}
                      </p>
                    </div>

                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:text-primary/90">
                      <span>Voir la page du vendeur</span>
                      <span aria-hidden="true">→</span>
                    </div>
                  </Link>
                </div>

                {/* WhatsApp Button */}
                <div className="flex-shrink-0 flex items-center">
                  <Button className="h-12 w-12 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg p-0 flex items-center justify-center">
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.536.946-2.504 2.292-2.504 3.964 0 1.744.822 3.357 2.322 4.521l-.333 2.332 2.532-1.313c1.24.657 2.305 1.059 2.715 1.059.033 0 .066 0 .098 0 5.338 0 9.516-4.226 9.516-9.45 0-2.409-.906-4.869-2.562-6.603-1.656-1.735-3.935-2.908-6.784-2.908z"/>
                    </svg>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

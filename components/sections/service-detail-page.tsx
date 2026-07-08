"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
  description: string;
}

interface ServiceDetailPageProps {
  title: string;
  titleColor: string;
  description: string;
  deliveryTime: string;
  features: ServiceFeature[];
  categories: ServiceCategory[];
  vendors: ServiceVendor[];
}

export function ServiceDetailPageComponent({
  title,
  titleColor,
  description,
  deliveryTime,
  features,
  categories,
  vendors,
}: ServiceDetailPageProps) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.16),_transparent_32%),linear-gradient(135deg,_#fffaf5_0%,_#fff8f0_50%,_#fef3e8_100%)] text-slate-900 transition-colors duration-500 dark:bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.22),_transparent_38%),linear-gradient(135deg,_#111111_0%,_#171717_45%,_#1f1a17_100%)] dark:text-slate-50">
      {/* Hero Section */}
      <section className="px-4 pt-6 sm:px-6 lg:px-8 lg:pt-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-7xl"
        >
          {/* Hero Content */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div>
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] ${titleColor}`}>
                {title}
              </h1>
              <p className="mt-4 sm:mt-6 max-w-xl text-base sm:text-lg text-slate-600 dark:text-slate-300">
                {description}
              </p>
            </div>

            {/* Hero Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-64 sm:h-80 lg:h-96 rounded-[32px] bg-gradient-to-br from-orange-200 via-amber-100 to-orange-100 dark:from-orange-900/30 dark:via-amber-900/30 dark:to-orange-900/30 flex items-center justify-center"
            >
              <div className="text-9xl sm:text-[120px] lg:text-[140px]">🍔</div>

              {/* Delivery Time Badge */}
              <div className="absolute bottom-6 right-6 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2.5 shadow-lg backdrop-blur">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white">
                  ⏱
                </div>
                <div>
                  <p className="text-xs text-slate-500">Livraison en</p>
                  <p className="font-bold text-red-600">{deliveryTime}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="mx-auto mt-16 sm:mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-4xl sm:text-5xl mb-3">{feature.icon}</div>
              <h3 className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      {categories.length > 0 && (
        <section className="mx-auto mt-16 sm:mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8">Populaire</h2>

          <div className="flex gap-4 overflow-x-auto pb-4 sm:pb-0 sm:grid sm:grid-cols-4 sm:gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex-shrink-0 w-24 sm:w-full text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="rounded-[24px] bg-white/70 dark:bg-slate-900/70 p-4 sm:p-6 shadow-lg backdrop-blur cursor-pointer transition-all hover:shadow-xl"
                >
                  <div className="text-5xl sm:text-6xl mb-2 sm:mb-3">{category.emoji}</div>
                  <p className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white">
                    {category.name}
                  </p>
                </motion.div>
              </motion.div>
            ))}

            {/* Plus Button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: categories.length * 0.08 }}
              className="flex-shrink-0 w-24 sm:w-full"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-[24px] bg-white/70 dark:bg-slate-900/70 p-4 sm:p-6 shadow-lg backdrop-blur cursor-pointer transition-all hover:shadow-xl h-full flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl mb-2">+</div>
                  <p className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white">Plus</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

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
                key={vendor.id}
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex gap-4 sm:gap-6 pb-6 border-b border-slate-200 dark:border-slate-800 last:border-0"
              >
                {/* Logo */}
                <div className="h-24 w-24 sm:h-28 sm:w-28 flex-shrink-0 rounded-[20px] bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center text-5xl sm:text-6xl shadow-lg">
                  {vendor.logo}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                      {vendor.name}
                    </h3>
                    <p className="text-orange-600 font-semibold text-sm sm:text-base mt-1">
                      {vendor.brand}
                    </p>
                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3">
                      {vendor.description}
                    </p>
                  </div>
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

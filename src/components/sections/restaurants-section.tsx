"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Restaurant {
  name: string;
  description: string;
  badge?: string;
}

interface RestaurantsSectionProps {
  restaurants: Restaurant[];
}

export function RestaurantsSection({ restaurants }: RestaurantsSectionProps) {
  return (
    <section className="mx-auto mt-20 sm:mt-32 max-w-7xl px-2 sm:px-0">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-12 sm:mb-16"
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-slate-950 dark:text-white">
              Les Meilleurs <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 bg-clip-text text-transparent">Restaurants</span>
            </h2>
            <p className="mt-2 sm:mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Nous livrons vos plats préférés de n&apos;importe quel restaurant directement à votre domicile !
            </p>
          </div>
          <Button className="hidden sm:inline-flex h-11 sm:h-12 items-center gap-2 rounded-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-600 px-6 sm:px-8 text-sm sm:text-base font-bold text-white shadow-[0_12px_30px_rgba(16,185,129,0.35)] hover:shadow-[0_16px_36px_rgba(16,185,129,0.45)] transition-all hover:scale-[1.04]">
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.536.946-2.504 2.292-2.504 3.964 0 1.744.822 3.357 2.322 4.521l-.333 2.332 2.532-1.313c1.24.657 2.305 1.059 2.715 1.059.033 0 .066 0 .098 0 5.338 0 9.516-4.226 9.516-9.45 0-2.409-.906-4.869-2.562-6.603-1.656-1.735-3.935-2.908-6.784-2.908z"/>
            </svg>
            Whatspp
          </Button>
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
            className="group flex flex-col h-full"
          >
            <div className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] flex-1 shadow-[0_16px_40px_rgba(15,23,42,0.12)] hover:shadow-[0_24px_60px_rgba(15,23,42,0.18)] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-amber-400 to-red-500 opacity-80" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />

              <div className="relative h-64 sm:h-72 flex items-center justify-center text-6xl sm:text-7xl">
                🍽️
              </div>

              {restaurant.badge && (
                <div className="absolute top-4 left-4 inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-xs sm:text-sm font-bold text-orange-600 shadow-lg backdrop-blur">
                  <Sparkles className="h-4 w-4" />
                  {restaurant.badge}
                </div>
              )}
            </div>

            <div className="mt-4 flex-1 flex flex-col">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white">{restaurant.name}</h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed flex-1">
                {restaurant.description}
              </p>
              <Button className="mt-4 w-full h-11 sm:h-12 rounded-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-600 px-4 sm:px-6 text-sm sm:text-base font-bold text-white shadow-[0_12px_30px_rgba(16,185,129,0.35)] hover:shadow-[0_16px_36px_rgba(16,185,129,0.45)] transition-all hover:scale-[1.02]">
                <svg className="mr-2 h-4 w-4 sm:h-5 sm:w-5 fill-current inline" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.536.946-2.504 2.292-2.504 3.964 0 1.744.822 3.357 2.322 4.521l-.333 2.332 2.532-1.313c1.24.657 2.305 1.059 2.715 1.059.033 0 .066 0 .098 0 5.338 0 9.516-4.226 9.516-9.45 0-2.409-.906-4.869-2.562-6.603-1.656-1.735-3.935-2.908-6.784-2.908z"/>
                </svg>
                Order Now
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
      <motion.div
        initial={{ x: -24, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-2xl"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200/70 bg-orange-50/80 px-4 py-2 text-sm font-medium text-orange-700 shadow-sm backdrop-blur dark:border-orange-400/20 dark:bg-orange-500/10 dark:text-orange-300">
          <Sparkles className="h-4 w-4" />
          Disponible 24/7
        </div>
        <h1 className="text-3xl font-semibold leading-[1.05] tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-7xl dark:text-white">
          Delivery in <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">Marrakech</span>
        </h1>
        <p className="mt-4 sm:mt-6 max-w-xl text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-slate-600 sm:text-xl dark:text-slate-300">
          Your favorite restaurants, pharmacies, supermarkets, flowers and more delivered quickly anywhere in Marrakech.
        </p>
        <div className="mt-6 sm:mt-8 flex flex-col gap-2 sm:gap-3 sm:flex-row">
          <Button className="inline-flex h-11 sm:h-13 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-600 px-6 sm:px-8 text-sm sm:text-base font-bold text-white shadow-[0_16px_40px_rgba(16,185,129,0.35)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(16,185,129,0.45)] hover:scale-[1.02]">
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.536.946-2.504 2.292-2.504 3.964 0 1.744.822 3.357 2.322 4.521l-.333 2.332 2.532-1.313c1.24.657 2.305 1.059 2.715 1.059.033 0 .066 0 .098 0 5.338 0 9.516-4.226 9.516-9.45 0-2.409-.906-4.869-2.562-6.603-1.656-1.735-3.935-2.908-6.784-2.908z"/>
            </svg>
            Order on WhatsApp
          </Button>
          <Button variant="outline" className="h-11 sm:h-13 rounded-full border border-slate-300/80 bg-white/80 px-6 sm:px-8 text-sm sm:text-base font-semibold text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
            Explore Services
          </Button>
        </div>
        <div className="mt-6 sm:mt-8 flex flex-col gap-2 sm:flex-row sm:gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 shadow-sm backdrop-blur dark:bg-slate-900/70">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            Trusted riders
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 shadow-sm backdrop-blur dark:bg-slate-900/70">
            <Clock3 className="h-4 w-4 text-orange-500" />
            Fast delivery
          </span>
        </div>
      </motion.div>
    </section>
  );
}

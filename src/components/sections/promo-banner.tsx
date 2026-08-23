'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function PromoBanner() {
  return (
    <div className="sticky top-0 z-50 h-10 overflow-hidden border-b border-orange-200/80 bg-orange-50 text-slate-900 shadow-[0_4px_20px_rgba(15,23,42,0.1)] dark:border-white/10 dark:bg-[#111827] dark:text-white dark:shadow-[0_4px_20px_rgba(15,23,42,0.18)] sm:h-11">
      <motion.div
        initial={{ y: -14, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="relative mx-auto flex h-full max-w-7xl items-center justify-center gap-2 px-4 text-sm font-semibold tracking-wide sm:text-base"
      >
        <span className="absolute inset-0 -translate-x-full animate-[promo-shimmer_4s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-orange-300/20 to-transparent dark:via-white/10" />
        <motion.span
          animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.08, 1.08, 1] }}
          transition={{ duration: 3.2, repeat: Infinity, repeatDelay: 2.5, ease: 'easeInOut' }}
          className="relative text-orange-500 dark:text-orange-300"
        >
          <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
          className="relative whitespace-nowrap"
        >
          Livraison à Marrakech à partir de
        </motion.span>
        <motion.span
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: [1, 1.06, 1] }}
          transition={{ duration: 0.55, delay: 0.3, scale: { duration: 2.4, repeat: Infinity, repeatDelay: 2.8, ease: 'easeInOut' } }}
          className="relative inline-flex whitespace-nowrap rounded-full bg-gradient-to-r from-red-500 to-red-500 px-3 py-1 text-sm font-extrabold tracking-wide text-white shadow-[0_0_0_3px_rgba(249,115,22,0.18),0_5px_16px_rgba(234,88,12,0.38)] dark:from-orange-400 dark:to-red-500 sm:text-base"
        >
          29 DH
        </motion.span>
      </motion.div>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import ShinyText from '@/components/ui/ShinyText';

export function PromoBanner() {
  return (
    <motion.div
      animate={{
        scale: [1, 1.025, 1],
        boxShadow: [
          '0 10px 30px rgba(220, 38, 38, 0.35)',
          '0 16px 42px rgba(220, 38, 38, 0.52)',
          '0 10px 30px rgba(220, 38, 38, 0.35)',
        ],
      }}
      transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 2.5, ease: 'easeInOut' }}
      whileHover={{ scale: 1.06, y: -3, rotate: -1 }}
      whileTap={{ scale: 0.98 }}
      role="status"
      aria-label="À partir de 30 DH"
      className="relative z-10 mx-auto isolate w-fit max-w-full rounded-full bg-gradient-to-r from-red-500 via-red-600 to-red-700 px-1 py-1 font-[var(--font-outfit)] text-white dark:from-red-400 dark:via-red-500 dark:to-red-600"
    >
      <span className="pointer-events-none absolute -inset-1 -z-10 rounded-full bg-red-500/35 blur-xl dark:bg-red-400/25" aria-hidden="true" />
      <motion.span
        initial={{ x: '-140%', skewX: -18 }}
        animate={{ x: '180%' }}
        transition={{ duration: 1.2, delay: 0.8, repeat: Infinity, repeatDelay: 3.2, ease: 'easeInOut' }}
        className="pointer-events-none absolute inset-y-0 left-0 z-20 w-1/3 bg-gradient-to-r from-transparent via-white/45 to-transparent"
        aria-hidden="true"
      />
      <motion.div
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative flex flex-nowrap items-center justify-center gap-1 rounded-full px-4 text-center sm:gap-3 sm:px-7 sm:py-3.5"
      >
        <motion.span
          animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.08, 1.08, 1] }}
          transition={{ duration: 3.2, repeat: Infinity, repeatDelay: 2.5, ease: 'easeInOut' }}
          className="relative text-red-100 dark:text-white"
        >
          <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
        </motion.span>
        <ShinyText
          text="À partir de 30 DH"
          speed={2}
          delay={0.5}
          color="#ffffff"
          shineColor="#ffffff"
          spread={90}
          direction="left"
          className="whitespace-nowrap text-2xl font-black tracking-tight drop-shadow-sm sm:text-3xl"
        />
      </motion.div>
    </motion.div>
  );
}

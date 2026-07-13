'use client';

import { Suspense } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { siteContent } from '@/lib/site-content';
import { useLocalePreference } from '@/lib/use-locale';
import { DarkLightModeToggle } from './darklightmode';

export function Header() {
  const locale = useLocalePreference();
  const copy = siteContent[locale];

  return (
    <header className="sticky top-0 z-40 pt-1 sm:px-3 lg:px-4">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mx-auto flex w-full flex-wrap items-center justify-between gap-3 px-3 py-2 max-w-7xl rounded-[28px] border border-white/70 bg-white/70 shadow-[0_20px_45px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70 sm:flex-nowrap sm:px-6"
      >
        <div className="flex items-center gap-3">
          <button
            aria-label={copy.menuLabel}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-slate-700 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white dark:bg-slate-900/80 dark:text-slate-200"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            <Image
              src="/logos/applogo.png"
              alt="Allo Deliverer Kech logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover shadow-lg shadow-orange-200"
              priority
            />
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                {copy.brandName}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Suspense fallback={<div className="h-11 w-[145px]" />}>
            <DarkLightModeToggle />
          </Suspense>
        </div>
      </motion.nav>
    </header>
  );
}

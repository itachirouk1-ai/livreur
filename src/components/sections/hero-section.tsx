'use client';

import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Clock3 } from 'lucide-react';
import Link from 'next/link';
import { AnimatedCallButton } from '@/components/ui/AnimatedCallButton';
import { AnimatedJoinButton } from '@/components/ui/animated-join-button';
import { Button } from '@/components/ui/button';
import { contactLinks, siteContent, withLocaleHref } from '@/lib/site-content';
import { useLocalePreference } from '@/lib/use-locale';

export function HeroSection() {
  const locale = useLocalePreference();
  const copy = siteContent[locale];

  const handleWhatsApp = () => {
    window.open(contactLinks.whatsapp, '_blank', 'noopener,noreferrer');
  };

  const handleCall = () => {
    window.location.href = contactLinks.phone;
  };

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
          {copy.heroBadge}
        </div>
        <h1 className="text-3xl font-semibold leading-[1.05] tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-7xl dark:text-white">
          {copy.heroTitleLine1}{' '}
          <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
            {copy.heroTitleLine2}
          </span>
        </h1>
        <p className="mt-4 sm:mt-6 max-w-xl text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-slate-600 sm:text-xl dark:text-slate-300">
          {copy.heroDescription}
        </p>
        <div className="mt-6 sm:mt-8 flex flex-col gap-2 sm:gap-3 sm:flex-row">
          <AnimatedCallButton label={copy.callNow} onClick={handleCall} />
          <AnimatedJoinButton label={copy.orderOnWhatsApp} onClick={handleWhatsApp} />
          <Link href={withLocaleHref('/#services', locale)}>
            <Button
              variant="outline"
              className="h-11 sm:h-13 rounded-full border border-slate-300/80 bg-white/80 px-6 sm:px-8 text-sm sm:text-base font-semibold text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
            >
              {copy.exploreServices}
            </Button>
          </Link>
        </div>
        <div className="mt-6 sm:mt-8 flex flex-col gap-2 sm:flex-row sm:gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 shadow-sm backdrop-blur dark:bg-slate-900/70">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            {copy.trustedRiders}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 shadow-sm backdrop-blur dark:bg-slate-900/70">
            <Clock3 className="h-4 w-4 text-orange-500" />
            {copy.fastDelivery}
          </span>
        </div>
      </motion.div>
    </section>
  );
}

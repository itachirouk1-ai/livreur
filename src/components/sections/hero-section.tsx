'use client';

import { motion } from 'framer-motion';
import { Clock3 } from 'lucide-react';
import Link from 'next/link';
import { AnimatedCallButton } from '@/components/ui/AnimatedCallButton';
import { AnimatedJoinButton } from '@/components/ui/animated-join-button';
import { contactLinks, siteContent, withLocaleHref } from '@/lib/site-content';
import { useLocalePreference } from '@/lib/use-locale';
import { trackContactConversion } from '@/lib/gtag';
import { PromoBanner } from '@/components/sections/promo-banner';

export function HeroSection() {
  const locale = useLocalePreference();
  const copy = siteContent[locale];

  const handleWhatsApp = () => {
    trackContactConversion('whatsapp', () => {
      window.open(contactLinks.whatsapp, '_blank', 'noopener,noreferrer');
    });
  };

  const handleCall = () => {
    trackContactConversion('phone', () => {
      window.location.href = contactLinks.phone;
    });
  };

  return (
    <section className="relative h-[65vh] w-full overflow-hidden border-b-2 border-[var(--brand-terracotta)] border-t-2 border-[var(--brand-terracotta)] sm:h-[80vh]">
      {/* GIF Background */}
      <div className="absolute inset-0 h-full w-full bg-[#111111]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/logos/livreurmarrakech.webp"
          aria-label="Delivery motion background"
          className="h-full w-full object-cover"
        >
          <source src="/herovid.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(25,18,15,0.8)_0%,rgba(25,18,15,0.48)_48%,rgba(25,18,15,0.12)_100%)]" />
      </div>

      {/* Text Content Overlay */}
      <div className="relative z-10 flex items-stretch justify-start h-full mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ x: -24, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex min-h-full w-full max-w-3xl flex-1 flex-col justify-between py-6 sm:py-10"
        >
          <div className="mt-0 flex max-w-2xl flex-col gap-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-200">
              <Clock3 className="h-4 w-4" />
              {copy.heroBadge}
            </div>
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-white drop-shadow-lg sm:text-6xl lg:text-[5rem]">
              {copy.heroTitleLine1}
            </h1>
            <p className="max-w-xl text-base font-light leading-normal tracking-wide text-gray-200 sm:text-xl lg:text-2xl">
              {copy.heroDescription}
            </p>
          </div>

          
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-between w-full max-w-xl">
            <AnimatedCallButton label={copy.callNow} onClick={handleCall} />
            <AnimatedJoinButton label={copy.orderOnWhatsApp} onClick={handleWhatsApp} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

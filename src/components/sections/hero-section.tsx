'use client';

import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Clock3 } from 'lucide-react';
import Link from 'next/link';
import { AnimatedCallButton } from '@/components/ui/AnimatedCallButton';
import { AnimatedJoinButton } from '@/components/ui/animated-join-button';
import { Button } from '@/components/ui/button';
import ShinyText from '@/components/ui/ShinyText';
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
    <section className="relative w-full h-[70vh] sm:h-[80vh] overflow-hidden border-b-2 border-b-orange-500 border-t-2 border-t-orange-500 w-full">
      {/* GIF Background */}
      <div className="absolute inset-0 h-full w-full bg-[#111111]">
        <img
          src="/herovid.gif"
          alt="Delivery motion background"
          className="h-full w-full object-cover"
        />
        {/* Dark Overlay for text readability */}
        
      </div>

      {/* Text Content Overlay */}
      <div className="relative z-10 flex items-stretch justify-start h-full mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ x: -24, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full max-w-3xl flex-1 min-h-full flex flex-col justify-between py-2"
        >
          <div className="flex flex-col gap-1 max-w-2xl mt-[-1rem]">
            <h1 className="text-4xl text-bold sm:text-6xl lg:text-[5rem] font-bold leading-tight tracking-tight text-white drop-shadow-lg">
              <ShinyText
  text={copy.heroTitleLine1}
  speed={2}
  delay={1}
  color="#ffffff"
  shineColor="#ff0000"
  spread={90}
  direction="left"
  yoyo={false}
  pauseOnHover={false}
  disabled={false}
/>
            </h1>
            <p className="text-base sm:text-xl lg:text-2xl leading-normal text-gray-200 font-light tracking-wide max-w-xl">
              <ShinyText
  text={copy.heroDescription}
  speed={2}
  delay={1}
  color="#ffffff"
  shineColor="#ff0000"
  spread={90}
  direction="left"
  yoyo={false}
  pauseOnHover={false}
  disabled={false}
/>
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

'use client';

import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Clock3 } from 'lucide-react';
import Link from 'next/link';
import { AnimatedCallButton } from '@/components/ui/AnimatedCallButton';
import { AnimatedJoinButton } from '@/components/ui/animated-join-button';
import { Button } from '@/components/ui/button';
import { DiaTextReveal } from '@/components/ui/dia-text-reveal';
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
    <section className="relative w-full h-[80vh] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/herovid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Text Content Overlay */}
      <div className="relative z-10 flex items-center justify-start h-full mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ x: -24, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className=" px-2 w-full h-full flex flex-col justify-between py-1 sm:py-1"
        >
          <div>
            <div className="flex flex-col gap-4 sm:gap-6 max-w-2xl">
              <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold leading-tight tracking-tight text-white drop-shadow-lg">
                <DiaTextReveal
                  className="text-2xl sm:text-4xl lg:text-7xl font-bold leading-tight tracking-tight"
                  colors={['#ffffff']}
                  text={copy.heroTitleLine1}
                />
              </h1>
              <p className="text-sm sm:text-base lg:text-xl leading-relaxed text-gray-200 font-light tracking-wide max-w-xl">
                <DiaTextReveal
                  className="text-sm sm:text-base lg:text-xl leading-relaxed text-gray-200 font-light tracking-wide"
                  colors={['#ffffff']}
                  text={copy.heroDescription}
                />
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-5 sm:gap-4 sm:flex-row w-full">
            
              <AnimatedCallButton label={copy.callNow} onClick={handleCall} />
            
            
              <AnimatedJoinButton label={copy.orderOnWhatsApp} onClick={handleWhatsApp} />
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { contactLinks, siteContent } from '@/lib/site-content';
import { useLocalePreference } from '@/lib/use-locale';
import { Icon } from '@iconify/react';
import { Button } from '../ui/button';
import { ChevronRight, Grid2X2, House, Info, PhoneCall, PhoneCallIcon } from 'lucide-react';

const footerServices = [
  { href: "/restaurants", fr: "Restaurants", en: "Restaurants" },
  { href: "/pharmacies", fr: "Pharmacies", en: "Pharmacies" },
  { href: "/supermarkets", fr: "Supermarchés", en: "Supermarkets" },
  { href: "/fleurs", fr: "Fleurs", en: "Flowers" },
  { href: "/cosmetics", fr: "Cosmétiques", en: "Cosmetics" },
  { href: "/shopping", fr: "Shopping", en: "Shopping" },
  { href: "/colis", fr: "Livraison de colis", en: "Parcel Delivery" },
  { href: "/documents", fr: "Documents", en: "Documents" },
  { href: "/boulangerie", fr: "Boulangerie", en: "Bakery" },
];

export function Footer() {
  const locale = useLocalePreference();
  const copy = siteContent[locale];

  // TypeScript definition solved using explicitly typed Variants object
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", // TypeScript is now happy since the type is tied to Variants
        stiffness: 60, 
        damping: 14 
      } 
    }
  };
  const handleWhatsApp = () => {
    window.open(contactLinks.whatsapp, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="relative mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      {/* Premium Top Glow Line Accent */}
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent shadow-[0_0_15px_rgba(249,115,22,0.15)]"></div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 relative z-10">
        {/* Main footer content with staggered motion animation */}
             {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl text-center font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 mb-2">
              {copy.brandName}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {copy.heroDescription}
            </p>
          </motion.div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-10 mb-12"
        >
     
            
          {/* Services */}
          <motion.div variants={itemVariants}>
      <h4 className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 bg-clip-text text-transparent mb-3 text-center text-2xl md:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text">
  {copy.footerServicesTitle}
</h4>
            <div className="grid grid-cols-2 gap-3">
              {footerServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-orange-500/40 dark:hover:bg-orange-500/10 dark:hover:text-orange-400 shadow-sm hover:shadow"
                >
                  <span className="text-base transition-transform duration-300 group-hover:scale-110">
                    {service.href === "/restaurants" ? "🍔" : service.href === "/pharmacies" ? "💊" : service.href === "/supermarkets" ? "🛒" : service.href === "/fleurs" ? "🌸" : service.href === "/cosmetics" ? "💄" : service.href === "/shopping" ? "🛍️" : service.href === "/colis" ? "📦" : service.href === "/documents" ? "📄" : "🥖"}
                  </span>

                  <span className="truncate font-medium">
                    {locale === 'fr' ? service.fr : service.en}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>

        

          {/* Contact */}
          <motion.div variants={itemVariants}>
  <h4 className="mb-5 text-base font-bold text-slate-900 dark:text-white">
    {copy.footerContactTitle}
  </h4>

  <div className="space-y-3">
    {/* Phone */}
    <Link
  href={contactLinks.phone}
  className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-green-500/40"
>
  <div className="flex items-center gap-4">
    


<div className="rounded-lg bg-green-100 p-2 text-green-600 dark:bg-green-900/30 dark:text-green-400">
  <PhoneCall className="h-4 w-4" />
</div>
    <div>
      <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
        {copy.footerCallUs}
      </p>

      <p className="mt-0.5 text-base font-bold text-slate-900 dark:text-white">
        +212 6 33 11 50 90
      </p>
    </div>
  </div>

  <ChevronRight className="h-5 w-5 text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-green-500" />
</Link>

    {/* WhatsApp */}
    <a
      href={contactLinks.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between rounded-2xl border border-green-200 bg-green-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-green-900 dark:bg-green-950/20"
    >
      <div className="flex items-center gap-3">
        <Icon
                icon="logos:whatsapp-icon"
                className="mr-2 h-8 w-8 size-auto"
              />
        <div>
          <p className="text-sm text-green-700 dark:text-green-400">
            WhatsApp
          </p>

          <p className="font-semibold text-slate-900 dark:text-white">
            {copy.footerReplyMinutes}
          </p>
        </div>
      </div>

      <span className="text-xl transition-transform group-hover:translate-x-1">
        →
      </span>
    </a>

    {/* Status */}
    <div className="flex items-center justify-center gap-2 rounded-full border border-green-200 bg-green-50 py-3 dark:border-green-900 dark:bg-green-950/20">
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
      </span>

      <span className="text-sm font-medium text-green-700 dark:text-green-400">
        {copy.footerAvailability}
      </span>
    </div>
  </div>
</motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8">
          {/* WhatsApp Button Wrapper */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-between gap-4"
          >
            <Button
              onClick={handleWhatsApp}
              className="mt-0 w-full h-11 sm:h-12
               rounded-full
              bg-gradient-to-r from-red-900 via-red-500 to-pink-900 px-4 sm:px-6 text-2xl sm:text-base font-bold text-white shadow-[0_12px_30px_rgba(16,185,129,0.35)] hover:shadow-[0_16px_36px_rgba(16,185,129,0.45)] 
              transition-all hover:scale-[1.02]"
            >
              <Icon
                icon="logos:whatsapp-icon"
                className="mr-2 h-8 w-8 size-auto"
              />
              {copy.orderOnWhatsApp}
            </Button>

                 <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              {copy.footerCopyright}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
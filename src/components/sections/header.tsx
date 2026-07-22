'use client';

import { Suspense, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { siteContent } from '@/lib/site-content';
import { useLocalePreference } from '@/lib/use-locale';
import { DarkLightModeToggle } from './darklightmode';
import Link from 'next/link';
import { MobileMenu } from '@/components/ui/mobile-menu';
import { DesktopNavigation } from '@/components/ui/desktop-navigation';
import { getLocalizedServiceContent, getLocalizedVendorContent, getServiceBySlug, getVendorSlug, getAllServiceSlugs } from '@/lib/services-data';

export function Header() {
  const locale = useLocalePreference();
  const copy = siteContent[locale];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopOpen, setIsDesktopOpen] = useState(false);

  // Build services with vendors
  const services = getAllServiceSlugs()
    .map(serviceSlug => {
      const service = getServiceBySlug(serviceSlug);
      if (!service) return null;

      return {
        label: getLocalizedServiceContent(serviceSlug, locale).title || service.title,
        slug: serviceSlug,
        emoji: service.heroImage,
        vendors: service.vendors.map(vendor => ({
          label: getLocalizedVendorContent(serviceSlug, vendor, locale).name,
          slug: getVendorSlug(vendor),
          brand: vendor.brand,
          emoji: vendor.logo,
          logoUrl: vendor.logoUrl,
        })),
      };
    })
    .filter(Boolean) as Array<{
      label: string;
      slug: string;
      emoji?: string;
      vendors: Array<{
        label: string;
        slug: string;
        brand: string;
        emoji?: string;
        logoUrl?: string;
      }>;
    }>;

  return (
    <>
      <header className="sticky top-0 z-40 pt-1 sm:px-3 lg:px-4">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto flex w-full items-center justify-between max-w-7xl rounded-[28px] border border-white/70 bg-white/70 shadow-[0_20px_45px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70 sm:flex-nowrap sm:px-6"
        >
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label={copy.menuLabel}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-slate-700 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white dark:bg-slate-900/80 dark:text-slate-200 sm:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* Desktop dropdown menu button */}
            <div className="hidden sm:flex items-center relative">
              <button
                onClick={() => setIsDesktopOpen(!isDesktopOpen)}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-slate-700 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white dark:bg-slate-900/80 dark:text-slate-200"
              >
                <Menu className="h-5 w-5" />
              </button>

              {/* Desktop Services Dropdown */}
              {isDesktopOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-96 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-xl z-50 p-4 max-h-96 overflow-y-auto"
                  onMouseLeave={() => setIsDesktopOpen(false)}
                >
                  <DesktopNavigation services={services} locale={locale} />
                </motion.div>
              )}
            </div>

            <div className="flex items-center gap-2">
              <Link href="/" >
              <Image
                src="/logos/applogo.png"
                alt="Marrakech Livreur logo"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover shadow-lg shadow-orange-200"
                priority
              />
              </Link>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                  {copy.brandName}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Suspense fallback={<div className="h-11" />}>
              <DarkLightModeToggle />
            </Suspense>
          </div>
        </motion.nav>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        items={services}
        locale={locale}
      />
    </>
  );
}

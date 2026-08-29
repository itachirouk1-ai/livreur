'use client';

import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { siteContent } from '@/lib/site-content';
import { useLocalePreference } from '@/lib/use-locale';
import { DarkLightModeToggle } from './darklightmode';
import Link from 'next/link';
import { MobileMenu } from '@/components/ui/mobile-menu';
import { DesktopNavigation } from '@/components/ui/desktop-navigation';
import {
  getLocalizedServiceContent,
  getLocalizedVendorContent,
  getServiceBySlug,
  getVendorSlug,
  getAllServiceSlugs,
} from '@/lib/services-data';

export function Header() {
  const locale = useLocalePreference();
  const copy = siteContent[locale];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopOpen, setIsDesktopOpen] = useState(false);
  const desktopMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isDesktopOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (!desktopMenuRef.current?.contains(event.target as Node)) {
        setIsDesktopOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDesktopOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDesktopOpen]);

  const handleDesktopMenuKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Escape') {
      setIsDesktopOpen(false);
      event.currentTarget.focus();
    }
  };

  // Build services with vendors
  const services = useMemo(
    () =>
      getAllServiceSlugs()
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
        }>,
    [locale],
  );

  return (
    <>
      <header className="relative z-40 pt-1 sm:px-3 lg:px-4">
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
            <div ref={desktopMenuRef} className="relative hidden items-center sm:flex">
              <button
                type="button"
                onClick={() => setIsDesktopOpen(!isDesktopOpen)}
                onKeyDown={handleDesktopMenuKeyDown}
                aria-label={copy.menuLabel}
                aria-expanded={isDesktopOpen}
                aria-haspopup="menu"
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
                  role="menu"
                  className="absolute left-0 top-full z-50 mt-2 max-h-[calc(100vh-5rem)] w-96 overflow-y-auto rounded-lg border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-800 dark:bg-slate-900"
                >
                  <DesktopNavigation services={services} locale={locale} />
                </motion.div>
              )}
            </div>

            <div className="flex items-center gap-2">
              <Link href="/">
                <Image
                  src="/logos/applogo.webp"
                  alt="Bibis Delivery logo"
                  width={40}
                  height={40}
                  priority
                  className="h-10 w-10 rounded-full object-cover shadow-lg shadow-orange-200"
                />
              </Link>
              <div className="hidden sm:block leading-tight">
                <motion.p
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.2, ease: 'easeOut' }}
                  className="cursor-default font-heading text-sm font-bold tracking-tight text-[var(--brand-terracotta)] transition-transform duration-200 hover:-translate-y-0.5 dark:text-orange-300"
                >
                  {copy.brandName}
                </motion.p>
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                  Livraison locale, 24/7
                </span>
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

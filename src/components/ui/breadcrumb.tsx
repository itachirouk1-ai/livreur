'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLocalePreference } from '@/lib/use-locale';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  showBack?: boolean;
  className?: string;
}

export function Breadcrumb({
  items,
  showBack = true,
  className,
}: BreadcrumbProps) {
  const router = useRouter();
  const locale = useLocalePreference();

  const handleBack = () => {
    router.back();
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4',
        className,
      )}
      aria-label="Breadcrumb"
    >
      <div className="flex items-center gap-2 flex-wrap">
        {/* Back Button */}
        {showBack && (
          <button
            onClick={handleBack}
            className="flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 text-sm"
            aria-label="Go back"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Back</span>
          </button>
        )}

        {/* Breadcrumb Items */}
        <div className="flex items-center gap-1 flex-wrap">
          {/* Home Link */}
          <Link
            href={`/${locale !== 'fr' ? `?lang=${locale}` : ''}`}
            className="flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
          >
            <Home className="h-4 w-4" />
            <span className="text-sm font-medium">Home</span>
          </Link>

          {/* Breadcrumb separators and items */}
          {items.map((item, index) => (
            <div key={item.href} className="flex items-center gap-1">
              <ChevronRight className="h-4 w-4 text-slate-400 dark:text-slate-600" />
              {index === items.length - 1 ? (
                <span className="px-2 py-1 text-sm font-semibold text-slate-900 dark:text-white truncate max-w-xs sm:max-w-none">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="px-2 py-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 text-sm font-medium truncate max-w-xs sm:max-w-none"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

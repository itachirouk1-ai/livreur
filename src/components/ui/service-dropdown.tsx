'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Vendor {
  label: string;
  slug: string;
  brand: string;
  emoji?: string;
  logoUrl?: string;
}

interface ServiceDropdownProps {
  service: {
    label: string;
    slug: string;
    emoji?: string;
    vendors: Vendor[];
  };
  className?: string;
  onVendorClick?: () => void;
  locale?: string;
}

export function ServiceDropdown({
  service,
  className,
  onVendorClick,
  locale = 'fr',
}: ServiceDropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        contentRef.current &&
        !contentRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={cn('relative', className)}>
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-2 w-full px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
      >
        <div className="flex items-center gap-2">
          {service.emoji && <span className="text-lg">{service.emoji}</span>}
          <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
            {service.label}
          </span>
        </div>
        <ChevronDown
          className={cn(
            'h-4 w-4 text-slate-600 dark:text-slate-400 transition-transform duration-200',
            isOpen && 'rotate-180',
          )}
        />
      </button>

      {/* Dropdown Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-lg z-50"
          >
            <div className="p-2">
              {service.vendors.length > 0 ? (
                <div className="space-y-1">
                  {service.vendors.map((vendor) => (
                    <Link
                      key={vendor.slug}
                      href={`/${service.slug}/${vendor.slug}${locale !== 'fr' ? `?lang=${locale}` : ''}`}
                      onClick={() => {
                        setIsOpen(false);
                        onVendorClick?.();
                      }}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-md hover:bg-orange-100 dark:hover:bg-slate-800 transition-colors group"
                    >
                      <div className="flex-shrink-0 h-10 w-10 rounded-lg overflow-hidden bg-white shadow-sm">
                        {vendor.logoUrl ? (
                          <Image
                            src={vendor.logoUrl}
                            alt={vendor.brand}
                            width={40}
                            height={40}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <span className="h-full w-full flex items-center justify-center text-lg">
                            {vendor.emoji || '🏪'}
                          </span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-900 dark:text-slate-100 truncate group-hover:text-orange-600 dark:group-hover:text-orange-400">
                          {vendor.label}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                          {vendor.brand}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="px-4 py-2 text-sm text-slate-500 dark:text-slate-400 text-center">
                  No vendors available
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

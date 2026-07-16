'use client';

import * as React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface NavigationItem {
  label: string;
  slug: string;
  emoji?: string;
  subItems?: {
    label: string;
    slug: string;
    brand: string;
    emoji?: string;
  }[];
}

interface NavigationMenuProps {
  items: NavigationItem[];
  className?: string;
  onNavigate?: () => void;
  locale?: string;
}

export function NavigationMenu({
  items,
  className,
  onNavigate,
  locale = 'fr',
}: NavigationMenuProps) {
  const [expandedItem, setExpandedItem] = React.useState<string | null>(null);

  return (
    <nav
      className={cn(
        'flex flex-col gap-1 w-full',
        className,
      )}
    >
      {items.map((item) => (
        <div key={item.slug}>
          <div className="relative group">
            <Link
              href={`/${item.slug}${locale !== 'fr' ? `?lang=${locale}` : ''}`}
              onClick={() => {
                onNavigate?.();
              }}
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
            >
              <div className="flex items-center gap-2">
                {item.emoji && <span className="text-lg">{item.emoji}</span>}
                <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                  {item.label}
                </span>
              </div>
              {item.subItems && item.subItems.length > 0 && (
                <ChevronRight
                  className={cn(
                    'h-4 w-4 text-slate-600 dark:text-slate-400 transition-transform duration-200',
                    expandedItem === item.slug && 'rotate-90',
                  )}
                />
              )}
            </Link>
          </div>

          {/* Submenu */}
          <AnimatePresence>
            {item.subItems && item.subItems.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: expandedItem === item.slug ? 1 : 0,
                  height: expandedItem === item.slug ? 'auto' : 0,
                }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
                onMouseEnter={() => setExpandedItem(item.slug)}
                onMouseLeave={() => setExpandedItem(null)}
              >
                <div className="pl-2 py-1 space-y-1">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.slug}
                      href={`/${item.slug}/${subItem.slug}${locale !== 'fr' ? `?lang=${locale}` : ''}`}
                      onClick={() => {
                        onNavigate?.();
                        setExpandedItem(null);
                      }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-orange-100 dark:hover:bg-slate-700 transition-colors text-sm group"
                    >
                      {subItem.emoji && <span className="text-base">{subItem.emoji}</span>}
                      <div className="flex-1">
                        <p className="font-medium text-slate-900 dark:text-slate-100 group-hover:text-orange-600 dark:group-hover:text-orange-400">
                          {subItem.label}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {subItem.brand}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Divider for non-mobile view */}
          {item.subItems && item.subItems.length > 0 && (
            <button
              onClick={() => setExpandedItem(expandedItem === item.slug ? null : item.slug)}
              className="w-full text-left px-4 py-2 text-xs text-slate-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
            >
              {expandedItem === item.slug ? 'Collapse' : 'View vendors'}
            </button>
          )}
        </div>
      ))}
    </nav>
  );
}

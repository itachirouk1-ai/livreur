'use client';

import * as React from 'react';
import { ServiceDropdown } from './service-dropdown';
import { cn } from '@/lib/utils';

interface Vendor {
  label: string;
  slug: string;
  brand: string;
  emoji?: string;
  logoUrl?: string;
}

interface Service {
  label: string;
  slug: string;
  emoji?: string;
  vendors: Vendor[];
}

interface DesktopNavigationProps {
  services: Service[];
  className?: string;
  locale?: string;
}

export function DesktopNavigation({
  services,
  className,
  locale = 'fr',
}: DesktopNavigationProps) {
  return (
    <nav className={cn('hidden sm:flex flex-col gap-1 w-full', className)}>
      {services.map((service) => (
        <ServiceDropdown
          key={service.slug}
          service={service}
          locale={locale}
        />
      ))}
    </nav>
  );
}

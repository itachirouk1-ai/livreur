'use client';

import { createContext, useContext, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

import { getLocaleFromQuery, type Locale } from '@/lib/site-content';

const LocaleContext = createContext<Locale>('fr');

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const locale = useMemo<Locale>(
    () => getLocaleFromQuery(searchParams?.toString()),
    [searchParams],
  );

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export function useLocalePreference(): Locale {
  return useContext(LocaleContext);
}

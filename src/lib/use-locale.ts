"use client";

import { useEffect, useState } from "react";

import { getLocaleFromQuery, type Locale } from "@/lib/site-content";

export function useLocalePreference() {
  const [locale, setLocale] = useState<Locale>("fr");

  useEffect(() => {
    const syncLocale = () => {
      const nextLocale = getLocaleFromQuery(window.location.search);
      setLocale(nextLocale);
      document.documentElement.lang = nextLocale;
    };

    syncLocale();
    window.addEventListener("popstate", syncLocale);
    window.addEventListener("hashchange", syncLocale);

    return () => {
      window.removeEventListener("popstate", syncLocale);
      window.removeEventListener("hashchange", syncLocale);
    };
  }, []);

  return locale;
}

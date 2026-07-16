'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChevronDown, Check } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { siteContent, type Locale } from '@/lib/site-content';
import { useLocalePreference } from '@/lib/use-locale';

export default function LanguageToggle() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const locale = useLocalePreference();
  const copy = siteContent[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const handleLocaleChange = (nextLocale: Locale) => {
    const params = new URLSearchParams(searchParams.toString());

    if (nextLocale === 'en') {
      params.set('lang', 'en');
    } else {
      params.delete('lang');
    }

    const queryString = params.toString();
    const nextUrl = `${pathname}${queryString ? `?${queryString}` : ''}`;
    router.replace(nextUrl, { scroll: false });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={copy.languageLabel}
        className="flex h-9 min-w-[120px] items-center justify-between rounded-xl border border-slate-300 bg-white px-3 text-xs font-medium text-slate-800 shadow-sm transition-all duration-200 hover:bg-slate-50 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 sm:h-11 sm:min-w-[145px] sm:px-4 sm:text-sm"
      >
        <div className="flex items-center gap-2">
          <Image
            src={
              locale === 'fr'
                ? '/logos/vecteezy_france-flag-round-icon-french-flag-circle_69019068.png'
                : '/logos/vecteezy_united-kingdom-flag-round-icon-uk-flag-circle_68202952.png'
            }
            alt={locale === 'fr' ? copy.french : copy.english}
            width={20}
            height={20}
            className="h-5 w-5 rounded-full object-cover"
            priority
          />
          <span>{locale === 'fr' ? copy.french : copy.english}</span>
        </div>
        <ChevronDown className="ml-3 h-4 w-4 opacity-60" />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-44 rounded-xl border border-slate-200 bg-white p-1 shadow-xl dark:border-slate-700 dark:bg-slate-900"
      >
        <DropdownMenuItem
          onClick={() => handleLocaleChange('fr')}
          className={cn(
            'flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 transition-colors',
            locale === 'fr' && 'bg-slate-100 dark:bg-slate-800',
          )}
        >
          <img
            src="/logos/vecteezy_france-flag-round-icon-french-flag-circle_69019068.png"
            alt={copy.french}
            className="h-5 w-5 rounded-full object-cover"
          />
          <span className="flex-1">{copy.french}</span>

          {locale === 'fr' && <Check className="h-4 w-4 text-primary" />}
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => handleLocaleChange('en')}
          className={cn(
            'flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 transition-colors',
            locale === 'en' && 'bg-slate-100 dark:bg-slate-800',
          )}
        >
          <img
            src="/logos/vecteezy_united-kingdom-flag-round-icon-uk-flag-circle_68202952.png"
            alt={copy.english}
            className="h-5 w-5 rounded-full object-cover"
          />
          <span className="flex-1">{copy.english}</span>

          {locale === 'en' && <Check className="h-4 w-4 text-primary" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

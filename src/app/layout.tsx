import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { LocaleProvider } from '@/lib/use-locale';
import { siteContent, siteUrl, type Locale } from '@/lib/site-content';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteContent.fr.homeMetaTitle,
  description: siteContent.fr.homeMetaDescription,
  alternates: {
    languages: {
      fr: '/',
      en: '/?lang=en',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Suspense fallback={null}>
            <LocaleProvider>{children}</LocaleProvider>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}

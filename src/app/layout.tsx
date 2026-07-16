import { Suspense } from 'react';
import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { LocaleProvider } from '@/lib/use-locale';
import { siteContent, siteUrl, type Locale } from '@/lib/site-content';
import { Footer } from '@/components/sections/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteContent.fr.homeMetaTitle,
  description: siteContent.fr.homeMetaDescription,
  keywords: 'livraison, Marrakech, restaurants, pharmacies, supermarchés, fleurs, cosmétiques',
  authors: [{ name: 'Allo Deliverer Marrakech' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    title: siteContent.fr.homeMetaTitle,
    description: siteContent.fr.homeMetaDescription,
    siteName: 'Allo Deliverer Marrakech',
    images: [
      {
        url: `${siteUrl}/logos/applogo.png`,
        width: 1200,
        height: 630,
        alt: 'Allo Deliverer Marrakech - Fast Delivery Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteContent.fr.homeMetaTitle,
    description: siteContent.fr.homeMetaDescription,
    images: [`${siteUrl}/logos/applogo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
            <LocaleProvider>
              {children}
              <Footer />
            </LocaleProvider>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}

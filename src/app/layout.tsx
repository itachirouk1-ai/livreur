import { Suspense } from 'react';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { LocaleProvider } from '@/lib/use-locale';
import { Footer } from '@/components/sections/footer';
import FloatingWhatsApp from '@/components/sections/FloatingWhatsApp';
import { buildHomeMetadata, buildStructuredDataJson } from '@/lib/seo';
import { siteContent, type Locale } from '@/lib/site-content';

const googleAdsId = 'AW-18386439505';

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
  ...buildHomeMetadata(),
  metadataBase: new URL('https://marrakechlivreur.com'),
  authors: [{ name: 'Marrakech Livreur' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = buildStructuredDataJson();

  return (
    <html
      lang="fr"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAdsId}');
          `}
        </Script>
        <ThemeProvider>
          <Suspense fallback={null}>
            <LocaleProvider>
              {children}
              <Footer />
              <FloatingWhatsApp />
            </LocaleProvider>
          </Suspense>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}

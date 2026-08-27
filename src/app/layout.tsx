import { Suspense } from 'react';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Geist, Outfit } from 'next/font/google';
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

const outfit = Outfit({
  variable: '--font-outfit',
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
  authors: [{ name: 'Bibis Delivery' }],
  icons: {
    icon: '/logos/bibis-favicon.webp',
    shortcut: '/logos/bibis-favicon.webp',
    apple: '/logos/bibis-favicon.webp',
  },
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
      className={`${geistSans.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PMZ8W29X');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PMZ8W29X"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function() {
              window.dataLayer.push(arguments);
            };
            window.gtag('js', new Date());
            window.gtag('config', '${googleAdsId}');
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

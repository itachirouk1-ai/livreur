import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // Script loading for Google Tag Manager and Google Ads
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://googleads.g.doubleclick.net https://*.doubleclick.net https://*.googleadservices.com https://connect.facebook.net",
              "script-src-elem 'self' 'unsafe-inline' https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://googleads.g.doubleclick.net https://*.doubleclick.net https://*.googleadservices.com https://connect.facebook.net",
              // Network requests for conversion tracking, analytics, and remarketing
              "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com https://*.googletagmanager.com https://region1.google-analytics.com https://region1.googletagmanager.com https://googleads.g.doubleclick.net https://*.doubleclick.net https://ad.doubleclick.net https://www.google.com https://*.google.com https://www.googleadservices.com https://*.googleadservices.com",
              // Image pixels for conversion tracking and analytics
              "img-src 'self' data: https: https://www.google-analytics.com https://www.googletagmanager.com https://googleads.g.doubleclick.net https://ad.doubleclick.net https://www.facebook.com https://connect.facebook.net",
              "font-src 'self' data:",
              "style-src 'self' 'unsafe-inline'",
              "media-src 'self' data: https:",
              "frame-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://googleads.g.doubleclick.net https://www.google.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self' https://www.google.com",
              "frame-ancestors 'none'",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;

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
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://googleads.g.doubleclick.net https://connect.facebook.net",
              "script-src-elem 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://googleads.g.doubleclick.net https://connect.facebook.net",
              "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://region1.google-analytics.com https://region1.googletagmanager.com https://googleads.g.doubleclick.net https://www.google.com https://www.googleadservices.com https://www.google-analytics.com",
              "img-src 'self' data: https: https://www.google-analytics.com https://www.googletagmanager.com https://googleads.g.doubleclick.net https://www.facebook.com https://connect.facebook.net",
              "font-src 'self' data:",
              "style-src 'self' 'unsafe-inline'",
              "media-src 'self' data: https:",
              "frame-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://googleads.g.doubleclick.net https://www.google.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self' https://www.google.com",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;

import type { MetadataRoute } from 'next';
import { servicesData } from '@/lib/services-data';

const siteUrl = 'https://marrakechlivreur.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const baseUrl = siteUrl;

  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
  ];

  const serviceRoutes = Object.keys(servicesData).map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const vendorRoutes = Object.entries(servicesData).flatMap(([slug, service]) =>
    service.vendors.map((vendor) => ({
      url: `${baseUrl}/${slug}/${vendor.id}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))
  );

  return [...staticRoutes, ...serviceRoutes, ...vendorRoutes];
}

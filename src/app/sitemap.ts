import type { MetadataRoute } from 'next';
import { getAllServiceVendorParams, servicesData } from '@/lib/services-data';

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

  const vendorRoutes = getAllServiceVendorParams().map(({ serviceSlug, vendorId }) => ({
    url: `${baseUrl}/${serviceSlug}/${vendorId}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...vendorRoutes];
}

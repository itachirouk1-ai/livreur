'use client';

import { Header } from '@/components/sections/header';
import { HeroSection } from '@/components/sections/hero-section';
import { ServicesSection } from '@/components/sections/services-section';
import { RestaurantsSection } from '@/components/sections/restaurants-section';
import { siteContent } from '@/lib/site-content';
import { getAllServiceSlugs, getServiceBySlug, getVendorSlug } from '@/lib/services-data';
import DeliveryZonesSection from '@/components/ui/DeliveryZonesSection';


export default function Home() {
  // Helper function to shuffle array
  const shuffle = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Get random vendors from all services
  const getRandomFeaturedStores = () => {
    const allVendors: Array<{
      name: string;
      description: string;
      slug: string;
      serviceSlug: string;
      emoji: string;
      brand: string;
      bgGradient: string;
    }> = [];

    // Collect all vendors from all services
    getAllServiceSlugs().forEach(serviceSlug => {
      const service = getServiceBySlug(serviceSlug);
      if (service) {
        service.vendors.forEach(vendor => {
          allVendors.push({
            name: vendor.name,
            description: vendor.description,
            slug: getVendorSlug(vendor),
            serviceSlug: serviceSlug,
            emoji: vendor.logo || '🏪',
            brand: vendor.brand,
            bgGradient: service.bgGradient,
          });
        });
      }
    });

    // Shuffle and get random 3 vendors
    const shuffled = shuffle(allVendors);
    return shuffled.slice(0, 3).map(vendor => ({
      name: vendor.brand,
      description: vendor.description,
      badge: vendor.name.length > 30 ? vendor.name.substring(0, 27) + '...' : vendor.name,
      emoji: vendor.emoji,
      href: `/${vendor.serviceSlug}/${vendor.slug}`,
      accent: vendor.bgGradient,
      
    }));
  };

 const services = [
  {
    slug: 'restaurants',
    title: 'Restaurants',
    emoji: '🍔',
    image: "/logos/restaurants-marrakech-livraison-adomicile.png",
    bgGradient: 'from-orange-400 via-orange-500 to-red-600',
    highlight: true,
  },
  {
    slug: 'pharmacies',
    title: 'Pharmacies',
    emoji: '💊',
    image: '/logos/pharmacie-marrakech-livraison-adomicile.png',
    bgGradient: 'from-emerald-400 via-green-500 to-teal-600',
    highlight: true,
  },
  {
    slug: 'supermarkets',
    title: 'Supermarkets',
    emoji: '🛒',
    image: '/logos/supermarkets-marrakech-livraison-adomicile.png',
    bgGradient: 'from-blue-400 via-cyan-500 to-sky-600',
    highlight: false,
  },
  {
    slug: 'flowers',
    title: 'Flowers',
    emoji: '🌸',
    image: '/logos/flowers-marrakech-livraison-adomicile.png',
    bgGradient: 'from-pink-400 via-rose-500 to-red-600',
    highlight: false,
  },
  {
    slug: 'cosmetics',
    title: 'Cosmetics',
    emoji: '💄',
    image: '/logos/cosmetique-marrakech-livraison-adomicile.png',
    bgGradient: 'from-violet-400 via-purple-500 to-fuchsia-600',
    highlight: false,
  },
  {
    slug: 'shopping',
    title: 'Shopping',
    emoji: '🛍️',
    image: '/logos/shopping-marrakech-livraison-adomicile.png',
    bgGradient: 'from-amber-400 via-orange-500 to-yellow-600',
    highlight: false,
  },
  {
    slug: 'parcel-delivery',
    title: 'Parcel Delivery',
    emoji: '📦',
    image: '/logos/colis-marrakech-livraison-adomicile.png',
    bgGradient: 'from-slate-400 via-zinc-500 to-gray-600',
    highlight: false,
  },
  {
    slug: 'documents',
    title: 'Documents',
    emoji: '📄',
    image:'/logos/documents-marrakech-livraison-adomicile.png',
    bgGradient: 'from-indigo-400 via-blue-500 to-cyan-600',
    highlight: false,
  },
  {
    slug: 'bakery',
    title: 'Bakery',
    emoji: '🥖',
    image: '/logos/bakery-marrakech-livraison-adomicile.png',
    bgGradient: 'from-yellow-400 via-amber-500 to-orange-600',
    highlight: false,
  },
];

  const featuredStores = getRandomFeaturedStores();

  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-50">
      <Header />

      <main className="pb-2 pt-1 sm:pb-1 sm:pt-1 md:px-1 lg:px-1 lg:pt-1">
        <HeroSection />
        <ServicesSection services={services} />
        <DeliveryZonesSection />
        <RestaurantsSection restaurants={featuredStores} />
      </main>
    </div>
  );
}

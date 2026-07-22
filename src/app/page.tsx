
import { Header } from '@/components/sections/header';
import { HeroSection } from '@/components/sections/hero-section';
import { ServicesSection } from '@/components/sections/services-section';
import { RestaurantsSection } from '@/components/sections/restaurants-section';
import { getLocaleFromQuery, type Locale } from '@/lib/site-content';
import { getAllServiceSlugs, getLocalizedServiceContent, getLocalizedVendorContent, getServiceBySlug, getVendorSlug } from '@/lib/services-data';
import DeliveryZonesSection from '@/components/ui/DeliveryZonesSection';
import { ReviewsSection } from '@/components/sections/reviews-section';
import DeliveryMap from '@/components/sections/DeliveryMap';
import FAQSection from '@/components/sections/faq';


export default async function Home({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const locale: Locale = getLocaleFromQuery((await searchParams).lang);
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
      logoUrl?: string;
      logoAlt?: string;
    }> = [];

    getAllServiceSlugs().forEach(serviceSlug => {
      const service = getServiceBySlug(serviceSlug);
      if (service) {
        service.vendors.forEach(vendor => {
          const localizedVendor = getLocalizedVendorContent(serviceSlug, vendor, locale);
          allVendors.push({
            name: localizedVendor.name,
            description: localizedVendor.description,
            slug: getVendorSlug(vendor),
            serviceSlug,
            emoji: vendor.logo || '🏪',
            brand: localizedVendor.brand,
            bgGradient: service.bgGradient,
            logoUrl: vendor.logoUrl,
            logoAlt: localizedVendor.logoAlt,
          });
        });
      }
    });

    const featured = shuffle(allVendors).slice(0, 3);

    return featured.map((vendor) => ({
      name: vendor.brand,
      description: vendor.description,
      badge: vendor.name.length > 30 ? `${vendor.name.substring(0, 27)}...` : vendor.name,
      emoji: vendor.emoji,
      href: `/${vendor.serviceSlug}/${vendor.slug}`,
      accent: vendor.bgGradient,
      logoUrl: vendor.logoUrl,
      logoAlt: vendor.logoAlt,
    }));
  };

 const services = [
  {
    slug: 'restaurants',
    title: getLocalizedServiceContent('restaurants', locale).title || 'Restaurants',
    emoji: '🍔',
    image: "/logos/restaurants-marrakech-livraison-adomicile.png",
    bgGradient: 'from-orange-400 via-orange-500 to-red-600',
    highlight: true,
  },
  {
    slug: 'pharmacies',
    title: getLocalizedServiceContent('pharmacies', locale).title || 'Pharmacies',
    emoji: '💊',
    image: '/logos/pharmacie-marrakech-livraison-adomicile.png',
    bgGradient: 'from-emerald-400 via-green-500 to-teal-600',
    highlight: true,
  },
  {
    slug: 'supermarkets',
    title: getLocalizedServiceContent('supermarkets', locale).title || 'Supermarkets',
    emoji: '🛒',
    image: '/logos/supermarkets-marrakech-livraison-adomicile.png',
    bgGradient: 'from-blue-400 via-cyan-500 to-sky-600',
    highlight: false,
  },
  {
    slug: 'fleurs',
    title: getLocalizedServiceContent('fleurs', locale).title || 'Flowers',
    emoji: '🌸',
    image: '/logos/flowers-marrakech-livraison-adomicile.png',
    bgGradient: 'from-pink-400 via-rose-500 to-red-600',
    highlight: false,
  },
  {
    slug: 'cosmetics',
    title: getLocalizedServiceContent('cosmetics', locale).title || 'Cosmetics',
    emoji: '💄',
    image: '/logos/cosmetique-marrakech-livraison-adomicile.png',
    bgGradient: 'from-violet-400 via-purple-500 to-fuchsia-600',
    highlight: false,
  },
  {
    slug: 'shopping',
    title: getLocalizedServiceContent('shopping', locale).title || 'Shopping',
    emoji: '🛍️',
    image: '/logos/shopping-marrakech-livraison-adomicile.png',
    bgGradient: 'from-amber-400 via-orange-500 to-yellow-600',
    highlight: false,
  },
  {
    slug: 'colis',
    title: getLocalizedServiceContent('colis', locale).title || 'Parcel Delivery',
    emoji: '📦',
    image: '/logos/colis-marrakech-livraison-adomicile.png',
    bgGradient: 'from-slate-400 via-zinc-500 to-gray-600',
    highlight: false,
  },
  {
    slug: 'documents',
    title: getLocalizedServiceContent('documents', locale).title || 'Document Delivery',
    emoji: '📄',
    image:'/logos/documents-marrakech-livraison-adomicile.png',
    bgGradient: 'from-indigo-400 via-blue-500 to-cyan-600',
    highlight: false,
  },
  {
    slug: 'boulangerie',
    title: getLocalizedServiceContent('boulangerie', locale).title || 'Bakery Delivery',
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
        <ReviewsSection/>
        <FAQSection/>
        <DeliveryMap/>
      </main>
    </div>
  );
}

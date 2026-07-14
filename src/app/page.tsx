'use client';

import { Header } from '@/components/sections/header';
import { HeroSection } from '@/components/sections/hero-section';
import { ServicesSection } from '@/components/sections/services-section';
import { RestaurantsSection } from '@/components/sections/restaurants-section';
import { siteContent } from '@/lib/site-content';


export default function Home() {
  const services = [
    {
      slug: 'restaurants',
      title: 'Restaurants',
      emoji: '🍔',
      bgGradient: 'from-orange-400 via-orange-500 to-red-600',
      highlight: true,
    },
    {
      slug: 'pharmacies',
      title: 'Pharmacies',
      emoji: '💊',
      bgGradient: 'from-emerald-400 via-green-500 to-teal-600',
      highlight: true,
    },
    {
      slug: 'supermarkets',
      title: 'Supermarkets',
      emoji: '🛒',
      bgGradient: 'from-blue-400 via-cyan-500 to-sky-600',
      highlight: false,
    },
    {
      slug: 'flowers',
      title: 'Flowers',
      emoji: '🌸',
      bgGradient: 'from-pink-400 via-rose-500 to-red-600',
      highlight: false,
    },
    {
      slug: 'cosmetics',
      title: 'Cosmetics',
      emoji: '💄',
      bgGradient: 'from-violet-400 via-purple-500 to-fuchsia-600',
      highlight: false,
    },
    {
      slug: 'shopping',
      title: 'Shopping',
      emoji: '🛍',
      bgGradient: 'from-amber-400 via-orange-500 to-yellow-600',
      highlight: false,
    },
    {
      slug: 'parcel-delivery',
      title: 'Parcel Delivery',
      emoji: '📦',
      bgGradient: 'from-slate-400 via-zinc-500 to-gray-600',
      highlight: false,
    },
    {
      slug: 'documents',
      title: 'Documents',
      emoji: '📄',
      bgGradient: 'from-indigo-400 via-blue-500 to-cyan-600',
      highlight: false,
    },
    {
      slug: 'bakery',
      title: 'Bakery',
      emoji: '🥖',
      bgGradient: 'from-yellow-400 via-amber-500 to-orange-600',
      highlight: false,
    },
  ];

  const featuredStores = [
    {
      name: 'Bloom & Co.',
      description:
        'Boutique de fleurs premium avec bouquets élégants et livraison rapide pour anniversaires, mariages et événements.',
      badge: 'Fleuriste préféré',
      emoji: '🌸',
      href: '/flowers',
      accent: 'from-pink-400 via-rose-500 to-red-600',
    },
    {
      name: 'Marrakech Market',
      description:
        'Marché local incontournable pour épicerie, produits frais et courses quotidiennes livrées à votre porte.',
      badge: 'Marché populaire',
      emoji: '🛒',
      href: '/supermarkets',
      accent: 'from-blue-400 via-cyan-500 to-sky-600',
    },
    {
      name: 'City Pharmacy',
      description:
        'Pharmacie de confiance pour médicaments, soins et produits de santé livrés discrètement et rapidement.',
      badge: 'Pharmacie fiable',
      emoji: '💊',
      href: '/pharmacies',
      accent: 'from-emerald-400 via-green-500 to-teal-600',
    },
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.16),_transparent_32%),linear-gradient(135deg,_#fffaf5_0%,_#fff8f0_50%,_#fef3e8_100%)] text-slate-900 transition-colors duration-500 dark:bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.22),_transparent_38%),linear-gradient(135deg,_#0f1219_0%,_#000000_45%,_#000000_100%)] dark:text-slate-50">
      <Header />

      <main className=" pb-2 pt-1 sm:pb-1 sm:pt-1 md:px-1 lg:px-1 lg:pt-1">
        <HeroSection />
        <ServicesSection services={services} />
        <RestaurantsSection restaurants={featuredStores} />
      </main>
    </div>
  );
}

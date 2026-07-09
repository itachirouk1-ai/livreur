"use client";

import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { RestaurantsSection } from "@/components/sections/restaurants-section";

const services = [
  { slug: "restaurants", title: "Restaurants", emoji: "🍔", bgGradient: "from-orange-400 via-orange-500 to-red-600", highlight: true },
  { slug: "pharmacies", title: "Pharmacies", emoji: "💊", bgGradient: "from-emerald-400 via-green-500 to-teal-600", highlight: true },
  { slug: "supermarkets", title: "Supermarkets", emoji: "🛒", bgGradient: "from-blue-400 via-cyan-500 to-sky-600", highlight: false },
  { slug: "flowers", title: "Flowers", emoji: "🌸", bgGradient: "from-pink-400 via-rose-500 to-red-600", highlight: false },
  { slug: "cosmetics", title: "Cosmetics", emoji: "💄", bgGradient: "from-violet-400 via-purple-500 to-fuchsia-600", highlight: false },
  { slug: "shopping", title: "Shopping", emoji: "🛍", bgGradient: "from-amber-400 via-orange-500 to-yellow-600", highlight: false },
  { slug: "parcel-delivery", title: "Parcel Delivery", emoji: "📦", bgGradient: "from-slate-400 via-zinc-500 to-gray-600", highlight: false },
  { slug: "documents", title: "Documents", emoji: "📄", bgGradient: "from-indigo-400 via-blue-500 to-cyan-600", highlight: false },
  { slug: "bakery", title: "Bakery", emoji: "🥖", bgGradient: "from-yellow-400 via-amber-500 to-orange-600", highlight: false },
];

const restaurants = [
  { name: "McDonald's", description: "Fast-food classique avec burgers savoureux et frites croustillantes. Profitez de nos menus spéciaux et livraison rapide.", badge: "Populaire" },
  { name: "KFC", description: "Poulet frit délicieux avec assaisonnement emblématique. Combos variés et portions généreuses livrées directement à votre porte.", badge: "Favori" },
  { name: "Burger King", description: "Burgers grillés à la flamme avec garnitures premium. Whopper emblématique et accompagnements classiques pour une satisfaction garantie." },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.16),_transparent_32%),linear-gradient(135deg,_#fffaf5_0%,_#fff8f0_50%,_#fef3e8_100%)] text-slate-900 transition-colors duration-500 dark:bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.22),_transparent_38%),linear-gradient(135deg,_#111111_0%,_#171717_45%,_#1f1a17_100%)] dark:text-slate-50">
      <Header />

      <main className="px-4 pb-16 pt-6 sm:pb-20 sm:pt-8 md:px-6 lg:px-8 lg:pt-12">
        <HeroSection />
        <ServicesSection services={services} />
        <RestaurantsSection restaurants={restaurants} />
      </main>
    </div>
  );
}

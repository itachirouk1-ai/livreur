'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CategoriesSection } from '@/components/sections/categoriesSection';
import { AnimatedCallButton } from '@/components/ui/AnimatedCallButton';
import { AnimatedJoinButton } from '@/components/ui/animated-join-button';
import { getLocalizedVendorContent, getVendorSlug } from '@/lib/services-data';
import { contactLinks, siteContent, type Locale } from '@/lib/site-content';
import { Icon } from '@iconify/react';
import DeliveryZonesSection from '../ui/DeliveryZonesSection';
// lib/service-hero-images.ts



export const serviceHeroImages = [
  {
    slug: "restaurants",
    heroImageUrl: "/logos/restaurants-marrakech-livraison-adomicile.png",
  },
  {
    slug: "pharmacies",
    heroImageUrl: "/logos/pharmacie-marrakech-livraison-adomicile.png",
  },
  {
    slug: "supermarkets",
    heroImageUrl: "/logos/supermarkets-marrakech-livraison-adomicile.png",
  },
  {
    slug: "fleurs",
    heroImageUrl: "/logos/flowers-marrakech-livraison-adomicile.png",
  },
  {
    slug: "cosmetics",
    heroImageUrl: "/logos/cosmetique-marrakech-livraison-adomicile.png",
  },
  {
    slug: "shopping",
    heroImageUrl: "/logos/shopping-marrakech-livraison-adomicile.png",
  },
  {
    slug: "colis",
    heroImageUrl: "/logos/colis-marrakech-livraison-adomicile.png",
  },
  {
    slug: "documents",
    heroImageUrl: "/logos/documents-marrakech-livraison-adomicile.png",
  },
  {
    slug: "boulangerie",
    heroImageUrl: "/logos/bakery-marrakech-livraison-adomicile.png",
  },
];



interface ServiceCategory {
  name: string;
  emoji: string;
}

interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
}

interface ServiceVendor {
  id: string;
  slug?: string;
  name: string;
  brand: string;
  logo: string;
  logoUrl?: string;
  logoAlt?: string;
  description: string;
}

interface ServiceDetailPageProps {
  locale?: Locale;
  slug?: string;
  heroImageUrl?: string;
  title: string;
  titleColor: string;
  accentGradient?: string;
  description: string;
  deliveryTime: string;
  features: ServiceFeature[];
  categories: ServiceCategory[];
  vendors: ServiceVendor[];
}

function getAccentTextClass(accentTextClass?: string) {
  if (accentTextClass?.includes('red')) {
    return 'text-red-600 dark:text-red-400';
  }

  if (accentTextClass?.includes('emerald') || accentTextClass?.includes('green')) {
    return 'text-emerald-600 dark:text-emerald-400';
  }

  if (
    accentTextClass?.includes('blue') ||
    accentTextClass?.includes('sky') ||
    accentTextClass?.includes('cyan')
  ) {
    return 'text-blue-600 dark:text-blue-400';
  }

  if (accentTextClass?.includes('pink')) {
    return 'text-pink-600 dark:text-pink-400';
  }

  if (accentTextClass?.includes('purple') || accentTextClass?.includes('fuchsia')) {
    return 'text-purple-600 dark:text-purple-400';
  }

  if (accentTextClass?.includes('amber') || accentTextClass?.includes('yellow')) {
    return 'text-amber-600 dark:text-amber-400';
  }

  if (accentTextClass?.includes('indigo')) {
    return 'text-indigo-600 dark:text-indigo-400';
  }

  return 'text-slate-700 dark:text-slate-200';
}

function DetailInfoSection({
  title,
  accentTextClass,
  children,
}: {
  title: string;
  accentTextClass: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h3 className={`text-sm font-semibold uppercase tracking-[0.2em] ${accentTextClass} dark:text-slate-400`}>
        {title}
      </h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function getServiceSEOContent(slug?: string, title?: string, locale: Locale = 'fr') {
  const baseTitle = title ?? (locale === 'en' ? 'Delivery service' : 'Service de livraison');

  const contentBySlug: Record<string, { fr: { heading: string; intro: string; bullets: string[]; neighborhoods: string[]; relatedSearches: string[] }; en: { heading: string; intro: string; bullets: string[]; neighborhoods: string[]; relatedSearches: string[] } }> = {
    restaurants: {
      fr: {
        heading: `${baseTitle} à Marrakech`,
        intro:
          'Que vous recherchiez une livraison restaurant Marrakech pour un dîner rapide, un repas entre amis ou une commande tardive, notre service couvre toute la ville avec une livraison à domicile fiable et rapide.',
        bullets: [
          'Livraison repas depuis les restaurants les plus recherchés de Marrakech',
          'Commande simple via WhatsApp ou téléphone',
          'Service disponible 24h/24 pour les envies de dernière minute',
        ],
        neighborhoods: ['Guéliz', 'Hivernage', 'Agdal', 'Massira', 'Médina', 'Targa', 'Sidi Ghanem'],
        relatedSearches: [
          'restaurant delivery marrakech',
          'food delivery marrakech',
          'mcdonald\'s delivery marrakech',
          'kfc delivery marrakech',
          'burger king marrakech delivery',
          'pizza hut marrakech delivery',
          'domino\'s delivery marrakech',
        ],
      },
      en: {
        heading: `${baseTitle} in Marrakech`,
        intro:
          'Whether you need a fast restaurant delivery in Marrakech for dinner, a meal with friends, or a late-night order, our service covers the whole city with reliable home delivery.',
        bullets: [
          'Meal delivery from the most popular restaurants in Marrakech',
          'Simple ordering by WhatsApp or phone',
          'Available 24/7 for last-minute cravings',
        ],
        neighborhoods: ['Guéliz', 'Hivernage', 'Agdal', 'Massira', 'Médina', 'Targa', 'Sidi Ghanem'],
        relatedSearches: [
          'restaurant delivery marrakech',
          'food delivery marrakech',
          'mcdonald\'s delivery marrakech',
          'kfc delivery marrakech',
          'burger king marrakech delivery',
          'pizza hut marrakech delivery',
          'domino\'s delivery marrakech',
        ],
      },
    },
    pharmacies: {
      fr: {
        heading: `Livraison pharmacie Marrakech et produits de santé`,
        intro:
          'Pour une livraison pharmacie Marrakech rapide, discrète et fiable, nous accompagnons les habitants et visiteurs avec des livraisons de médicaments et produits essentiels à domicile.',
        bullets: [
          'Livraison de médicaments et produits de santé',
          'Service rapide et adapté aux urgences',
          'Disponibilité pratique pour les résidents et touristes',
        ],
        neighborhoods: ['Guéliz', 'Hivernage', 'Agdal', 'Palmeraie', 'Médina', 'Daoudiate'],
        relatedSearches: ['livraison pharmacie marrakech', 'pharmacy delivery marrakech'],
      },
      en: {
        heading: `Pharmacy delivery in Marrakech and health products`,
        intro:
          'For fast, discreet and reliable pharmacy delivery in Marrakech, we support residents and visitors with medicine and essential product drops at home.',
        bullets: [
          'Delivery of medicines and health products',
          'Fast service adapted to emergencies',
          'Convenient availability for residents and tourists',
        ],
        neighborhoods: ['Guéliz', 'Hivernage', 'Agdal', 'Palmeraie', 'Médina', 'Daoudiate'],
        relatedSearches: ['pharmacy delivery marrakech', 'medicine delivery marrakech'],
      },
    },
    supermarkets: {
      fr: {
        heading: `Livraison supermarché Marrakech pour vos courses`,
        intro:
          'Notre livraison supermarché Marrakech permet de faire ses courses du quotidien sans sortir de chez soi, avec une prise en charge rapide et un service pratique.',
        bullets: [
          'Courses de première nécessité et produits du quotidien',
          'Livraison à domicile dans plusieurs quartiers de Marrakech',
          'Idéal pour les familles, bureaux et résidences',
        ],
        neighborhoods: ['Guéliz', 'Hivernage', 'Agdal', 'Massira', 'Route de Casablanca', 'Sidi Ghanem'],
        relatedSearches: ['livraison supermarché marrakech', 'grocery delivery marrakech'],
      },
      en: {
        heading: `Supermarket delivery in Marrakech for your groceries`,
        intro:
          'Our supermarket delivery service in Marrakech lets you shop for everyday essentials without leaving home, with fast pickup and a convenient service.',
        bullets: [
          'Essentials and everyday products delivered',
          'Home delivery across several Marrakech neighborhoods',
          'Perfect for families, offices and residences',
        ],
        neighborhoods: ['Guéliz', 'Hivernage', 'Agdal', 'Massira', 'Route de Casablanca', 'Sidi Ghanem'],
        relatedSearches: ['supermarket delivery marrakech', 'grocery delivery marrakech'],
      },
    },
    fleurs: {
      fr: {
        heading: `Livraison fleurs Marrakech pour toutes les occasions`,
        intro:
          'Pour une livraison fleurs Marrakech élégante et rapide, nous proposons des bouquets et fleurs à domicile pour les anniversaires, événements et moments spéciaux.',
        bullets: [
          'Bouquets et fleurs livrés rapidement',
          'Service adapté aux occasions spéciales',
          'Livraison dans les quartiers clés de Marrakech',
        ],
        neighborhoods: ['Hivernage', 'Guéliz', 'Agdal', 'Palmeraie', 'Médina'],
        relatedSearches: ['livraison fleurs marrakech', 'flower delivery marrakech'],
      },
      en: {
        heading: `Flower delivery in Marrakech for every occasion`,
        intro:
          'For elegant and quick flower delivery in Marrakech, we offer bouquets and flowers at home for birthdays, events and special moments.',
        bullets: [
          'Bouquets and flowers delivered quickly',
          'Service suited to special occasions',
          'Delivery across the key districts of Marrakech',
        ],
        neighborhoods: ['Hivernage', 'Guéliz', 'Agdal', 'Palmeraie', 'Médina'],
        relatedSearches: ['flower delivery marrakech', 'bouquet delivery marrakech'],
      },
    },
    cosmetics: {
      fr: {
        heading: `Livraison cosmétiques Marrakech et soins beauté`,
        intro:
          'Profitez d’une livraison cosmétiques Marrakech simple et rapide pour vos produits beauté, soins et accessoires du quotidien.',
        bullets: [
          'Produits de beauté et soins livrés à domicile',
          'Service pratique pour les commandes rapides',
          'Adapté aux résidents et visiteurs',
        ],
        neighborhoods: ['Guéliz', 'Hivernage', 'Agdal', 'Massira', 'Médina'],
        relatedSearches: ['cosmetics delivery marrakech', 'beauty delivery marrakech'],
      },
      en: {
        heading: `Cosmetics delivery in Marrakech and beauty care`,
        intro:
          'Enjoy simple and fast cosmetics delivery in Marrakech for beauty products, care items and everyday essentials.',
        bullets: [
          'Beauty products and care items delivered home',
          'Convenient service for quick orders',
          'Suited to residents and visitors',
        ],
        neighborhoods: ['Guéliz', 'Hivernage', 'Agdal', 'Massira', 'Médina'],
        relatedSearches: ['cosmetics delivery marrakech', 'beauty delivery marrakech'],
      },
    },
    shopping: {
      fr: {
        heading: `Livraison shopping Marrakech et achats à domicile`,
        intro:
          'Notre service de livraison shopping Marrakech vous aide à recevoir vos achats préférés à domicile, rapidement et sans perte de temps.',
        bullets: [
          'Achats pratiques pour les produits du quotidien',
          'Livraison rapide dans plusieurs zones de Marrakech',
          'Solution simple pour les déplacements réduits',
        ],
        neighborhoods: ['Guéliz', 'Hivernage', 'Agdal', 'Daoudiate', 'Targa'],
        relatedSearches: ['shopping delivery marrakech', 'achat à domicile marrakech'],
      },
      en: {
        heading: `Shopping delivery in Marrakech and purchases at home`,
        intro:
          'Our shopping delivery service in Marrakech helps you receive your favorite purchases at home quickly and without hassle.',
        bullets: [
          'Practical purchases for everyday essentials',
          'Fast delivery across several areas of Marrakech',
          'A simple solution for reduced travel',
        ],
        neighborhoods: ['Guéliz', 'Hivernage', 'Agdal', 'Daoudiate', 'Targa'],
        relatedSearches: ['shopping delivery marrakech', 'home shopping marrakech'],
      },
    },
    colis: {
      fr: {
        heading: `Livraison colis Marrakech et petits envois`,
        intro:
          'Pour une livraison colis Marrakech rapide, nous intervenons pour les petits paquets, documents et envois urgents à travers la ville.',
        bullets: [
          'Livraison de colis et petits paquets',
          'Service adapté aux documents et envois urgents',
          'Disponibilité pratique 24h/24',
        ],
        neighborhoods: ['Guéliz', 'Hivernage', 'Agdal', 'Sidi Ghanem', 'Médina'],
        relatedSearches: ['livraison colis marrakech', 'courier marrakech'],
      },
      en: {
        heading: `Parcel delivery in Marrakech and small shipments`,
        intro:
          'For quick parcel delivery in Marrakech, we handle small packages, documents and urgent shipments across the city.',
        bullets: [
          'Delivery of parcels and small packages',
          'Service adapted to documents and urgent shipments',
          'Practical availability 24/7',
        ],
        neighborhoods: ['Guéliz', 'Hivernage', 'Agdal', 'Sidi Ghanem', 'Médina'],
        relatedSearches: ['parcel delivery marrakech', 'courier marrakech'],
      },
    },
    documents: {
      fr: {
        heading: `Livraison documents Marrakech rapide`,
        intro:
          'Que ce soit pour des papiers, dossiers ou courriers, notre livraison documents Marrakech permet de gagner du temps avec un service à domicile fiable.',
        bullets: [
          'Transport de documents sensibles et urgents',
          'Service rapide et sécurisé',
          'Adapté aux professionnels et particuliers',
        ],
        neighborhoods: ['Guéliz', 'Hivernage', 'Agdal', 'Médina', 'Route de Casablanca'],
        relatedSearches: ['livraison documents marrakech', 'courier marrakech'],
      },
      en: {
        heading: `Fast document delivery in Marrakech`,
        intro:
          'Whether it is papers, files or letters, our document delivery service in Marrakech helps you save time with a reliable home service.',
        bullets: [
          'Transport of sensitive and urgent documents',
          'Fast and secure service',
          'Suitable for professionals and individuals',
        ],
        neighborhoods: ['Guéliz', 'Hivernage', 'Agdal', 'Médina', 'Route de Casablanca'],
        relatedSearches: ['document delivery marrakech', 'courier marrakech'],
      },
    },
    boulangerie: {
      fr: {
        heading: `Livraison boulangerie Marrakech et produits frais`,
        intro:
          'Pour une livraison boulangerie Marrakech pratique, nous livrons pain, pâtisseries et produits frais à domicile dans plusieurs quartiers de la ville.',
        bullets: [
          'Pain frais, pâtisseries et produits gourmands',
          'Livraison rapide pour les petites commandes',
          'Idéal pour les matins et pauses gourmandes',
        ],
        neighborhoods: ['Guéliz', 'Hivernage', 'Agdal', 'Massira', 'Médina'],
        relatedSearches: ['bakery delivery marrakech', 'pain livraison marrakech'],
      },
      en: {
        heading: `Bakery delivery in Marrakech and fresh products`,
        intro:
          'For practical bakery delivery in Marrakech, we deliver bread, pastries and fresh products at home across several neighborhoods of the city.',
        bullets: [
          'Fresh bread, pastries and treats',
          'Fast delivery for small orders',
          'Ideal for mornings and sweet breaks',
        ],
        neighborhoods: ['Guéliz', 'Hivernage', 'Agdal', 'Massira', 'Médina'],
        relatedSearches: ['bakery delivery marrakech', 'bread delivery marrakech'],
      },
    },
  };

  const localizedContent = contentBySlug[slug ?? '']?.[locale] ?? {
    heading: locale === 'en' ? `${baseTitle} in Marrakech` : `${baseTitle} à Marrakech`,
    intro: locale === 'en'
      ? 'We offer a fast and convenient home delivery service in Marrakech for everyday needs across the city.'
      : 'Nous proposons un service de livraison à domicile à Marrakech, rapide et pratique, pour répondre aux besoins du quotidien dans toute la ville.',
    bullets: locale === 'en'
      ? ['Fast home delivery', 'Service suited to residents and visitors', 'Coverage across several Marrakech neighborhoods']
      : ['Livraison rapide à domicile', 'Service adapté aux habitants et visiteurs', 'Couverture dans plusieurs quartiers de Marrakech'],
    neighborhoods: ['Guéliz', 'Hivernage', 'Agdal', 'Médina'],
    relatedSearches: locale === 'en' ? ['home delivery marrakech', 'marrakech courier'] : ['livraison à domicile marrakech', 'livreur marrakech'],
  };

  return localizedContent;
}
export function getVendorSEOContent(
  serviceSlug: string,
  vendor: ServiceVendor,
  locale: Locale = "fr"
) {
  switch (serviceSlug) {
    case "pharmacies":
      return {
        heading: `Livraison ${vendor.brand} à Marrakech`,
        sections: [
          {
            title: `Livraison ${vendor.brand}`,
            content: `Vous recherchez une livraison ${vendor.brand} rapide à Marrakech ? Allo Livreur Kech assure la livraison de médicaments, produits de parapharmacie et produits de santé directement depuis ${vendor.brand} jusqu'à votre domicile.`,
          },
          {
            title: "Médicaments et produits disponibles",
            content:
              "Nous livrons les médicaments, vitamines, produits bébé, matériel médical, produits d'hygiène, parapharmacie et bien plus encore.",
          },
          {
            title: "Pourquoi choisir Allo Livreur Kech ?",
            content:
              "Livraison rapide, disponible 24h/24, commande par WhatsApp et service professionnel partout à Marrakech.",
          },
          {
            title: "Quartiers desservis",
            content:
              "Guéliz, Hivernage, Agdal, Massira, Daoudiate, Targa, M'Hamid, Médina et tous les quartiers de Marrakech.",
          },
        ],
      };

    case "restaurants":
      return {
        heading: `Livraison ${vendor.brand} à Marrakech`,
        sections: [
          {
            title: `Livraison ${vendor.brand} à domicile`,
            content: `Allo Livreur Kech récupère votre commande directement chez ${vendor.brand} et la livre rapidement à votre domicile, bureau, hôtel ou riad partout à Marrakech.`,
          },
          {
            title: `Menu ${vendor.brand}`,
            content:
              "Nous livrons burgers, pizzas, tacos, sandwiches, salades, desserts, boissons et tous les plats proposés par le restaurant.",
          },
          {
            title: "Pourquoi choisir Allo Livreur Kech ?",
            content:
              "Commande par WhatsApp, livraison rapide 24h/24, service fiable et couverture complète de Marrakech.",
          },
          {
            title: "Quartiers desservis",
            content:
              "Guéliz, Hivernage, Agdal, Massira, Daoudiate, Targa, Sidi Ghanem, Palmeraie, Médina et tous les quartiers de Marrakech.",
          },
        ],
      };

    case "supermarkets":
      return {
        heading: `Livraison ${vendor.brand} à Marrakech`,
        sections: [
          {
            title: `Livraison ${vendor.brand}`,
            content: `Allo Livreur Kech récupère vos courses chez ${vendor.brand} et les livre rapidement partout à Marrakech.`,
          },
          {
            title: "Produits disponibles",
            content:
              "Fruits, légumes, viandes, boissons, produits ménagers, produits laitiers, snacks, produits bébé et tous les articles disponibles en magasin.",
          },
          {
            title: "Pourquoi choisir Allo Livreur Kech ?",
            content:
              "Livraison rapide 24h/24, commande simple via WhatsApp et service fiable.",
          },
          {
            title: "Quartiers desservis",
            content:
              "Livraison dans tous les quartiers de Marrakech : Guéliz, Agdal, Massira, Daoudiate, Targa, Médina, Hivernage...",
          },
        ],
      };

    case "fleurs":
      return {
        heading: `Livraison ${vendor.brand} à Marrakech`,
        sections: [
          {
            title: `Livraison de fleurs ${vendor.brand}`,
            content: `Nous récupérons vos bouquets chez ${vendor.brand} et les livrons rapidement partout à Marrakech.`,
          },
          {
            title: "Bouquets disponibles",
            content:
              "Roses, bouquets, fleurs de mariage, anniversaires, cadeaux, compositions florales et fleurs fraîches.",
          },
          {
            title: "Pourquoi choisir Allo Livreur Kech ?",
            content:
              "Livraison express, fleurs protégées et livraison le jour même.",
          },
          {
            title: "Quartiers desservis",
            content:
              "Tous les quartiers de Marrakech.",
          },
        ],
      };

    case "cosmetics":
      return {
        heading: `Livraison ${vendor.brand} à Marrakech`,
        sections: [
          {
            title: `Livraison ${vendor.brand}`,
            content: `Recevez rapidement vos produits ${vendor.brand} partout à Marrakech.`,
          },
          {
            title: "Produits disponibles",
            content:
              "Soins visage, maquillage, parfums, soins cheveux, corps, beauté homme et accessoires.",
          },
          {
            title: "Pourquoi choisir Allo Livreur Kech ?",
            content:
              "Livraison rapide, produits authentiques et commande via WhatsApp.",
          },
          {
            title: "Quartiers desservis",
            content:
              "Service disponible dans toute la ville de Marrakech.",
          },
        ],
      };

    case "shopping":
      return {
        heading: `Livraison Shopping ${vendor.brand}`,
        sections: [
          {
            title: `Shopping ${vendor.brand}`,
            content: `Nous récupérons vos achats chez ${vendor.brand} et les livrons rapidement à Marrakech.`,
          },
          {
            title: "Articles disponibles",
            content:
              "Mode, chaussures, électronique, beauté, maison, sport, bébé et bien plus.",
          },
          {
            title: "Pourquoi choisir Allo Livreur Kech ?",
            content:
              "Livraison rapide, pratique et disponible 24h/24.",
          },
          {
            title: "Quartiers desservis",
            content:
              "Livraison partout à Marrakech.",
          },
        ],
      };

    case "colis":
      return {
        heading: `Livraison de colis ${vendor.brand}`,
        sections: [
          {
            title: `Expédition ${vendor.brand}`,
            content: `Nous récupérons et livrons vos colis rapidement avec ${vendor.brand}.`,
          },
          {
            title: "Types de colis",
            content:
              "Documents, colis standards, colis urgents, colis fragiles, cadeaux et colis professionnels.",
          },
          {
            title: "Pourquoi choisir Allo Livreur Kech ?",
            content:
              "Livraison sécurisée, rapide et disponible 24h/24.",
          },
          {
            title: "Zones desservies",
            content:
              "Tous les quartiers de Marrakech.",
          },
        ],
      };

    case "documents":
      return {
        heading: `Livraison Documents ${vendor.brand}`,
        sections: [
          {
            title: `Livraison de documents`,
            content: `Nous récupérons vos documents chez ${vendor.brand} et les livrons rapidement en toute confidentialité.`,
          },
          {
            title: "Documents pris en charge",
            content:
              "Contrats, dossiers administratifs, certificats, documents bancaires, médicaux et juridiques.",
          },
          {
            title: "Pourquoi choisir Allo Livreur Kech ?",
            content:
              "Livraison express, confidentielle et sécurisée.",
          },
          {
            title: "Quartiers desservis",
            content:
              "Service disponible dans toute la ville de Marrakech.",
          },
        ],
      };

    case "boulangerie":
      return {
        heading: `Livraison ${vendor.brand} à Marrakech`,
        sections: [
          {
            title: `Livraison ${vendor.brand}`,
            content: `Recevez pains, viennoiseries, pâtisseries et gâteaux de ${vendor.brand} directement chez vous.`,
          },
          {
            title: "Produits disponibles",
            content:
              "Pain, croissants, pâtisseries, sandwiches, café, petit-déjeuner, desserts et boissons.",
          },
          {
            title: "Pourquoi choisir Allo Livreur Kech ?",
            content:
              "Livraison rapide, produits frais et service disponible toute la journée.",
          },
          {
            title: "Quartiers desservis",
            content:
              "Livraison dans tous les quartiers de Marrakech.",
          },
        ],
      };

    default:
      return null;
  }
}
function getVendorSectionCopy(slug?: string, locale: Locale = 'fr') {
  const copyBySlug: Record<
    string,
    { fr: { heading: string; description: string }; en: { heading: string; description: string } }
  > = {
    restaurants: {
      fr: {
        heading: 'Restaurants populaires',
        description:
          'Nous livrons vos plats préférés de n’importe quel restaurant de Marrakech directement à votre domicile !',
      },
      en: {
        heading: 'Popular   Restaurants',
        description:
          'We deliver your favorite meals from any restaurant in Marrakech straight to your doorstep!',
      },
    },
    pharmacies: {
      fr: {
        heading: 'Les meilleures pharmacies',
        description:
          'Nous livrons vos médicaments et produits de santé directement chez vous, rapidement et en toute confidentialité !',
      },
      en: {
        heading: 'Top Pharmacies',
        description:
          'We deliver your medicines and health products straight to your door, fast and discreet!',
      },
    },
    supermarkets: {
      fr: {
        heading: 'Supermarchés populaires',
        description:
          'Nous livrons vos courses préférées de n’importe quel supermarché de Marrakech directement à votre domicile !',
      },
      en: {
        heading: 'Popular   Supermarkets',
        description:
          'We deliver your favorite groceries from any supermarket in Marrakech straight to your doorstep!',
      },
    },
    fleurs: {
      fr: {
        heading: 'Les meilleures fleurs',
        description:
          'Nous livrons vos bouquets et fleurs préférés directement chez vous pour toutes les occasions !',
      },
      en: {
        heading: 'Top Flowers',
        description:
          'We deliver your favorite bouquets and flowers straight to you for every occasion!',
      },
    },
    cosmetics: {
      fr: {
        heading: 'Les meilleures marques beauté',
        description:
          'Nous livrons vos produits de beauté préférés directement chez vous, rapidement et en toute confiance !',
      },
      en: {
        heading: 'Top Beauty Brands',
        description:
          'We deliver your favorite beauty products straight to you, fast and with confidence!',
      },
    },
    shopping: {
      fr: {
        heading: 'populaires Boutiques',
        description:
          'Nous livrons vos achats préférés directement chez vous, à Marrakech, en quelques minutes !',
      },
      en: {
        heading: 'Popular   Shops',
        description:
          'We deliver your favorite shopping straight to you in Marrakech in just a few minutes!',
      },
    },
  };

  return (
    copyBySlug[slug ?? '']?.[locale] ??
    (locale === 'en'
      ? {
          heading: 'Popular Services',
          description: 'We deliver your favorite products straight to your home, fast and easy!',
        }
      : {
          heading: 'Services populaires',
          description:
            'Nous livrons vos produits préférés directement chez vous, rapidement et facilement !',
        })
  );
}


export function ServiceDetailPageComponent({
  locale = 'fr',
  slug,
  heroImageUrl,
  title,
  titleColor,
  accentGradient,
  categories,
  vendors,
  
}: ServiceDetailPageProps) {
  const heroImage = serviceHeroImages.find(
  (service) => service.slug === slug
)?.heroImageUrl;
  const copy = siteContent[locale];
  const brandItems = vendors.map(vendor => {
    const localizedVendor = getLocalizedVendorContent(slug ?? '', vendor, locale);
    return {
      id: vendor.id,
      name: localizedVendor.brand,
      logoUrl: vendor.logoUrl,
      logoAlt: localizedVendor.logoAlt || `${vendor.brand} brand logo`,
      logoEmoji: vendor.logo,
    };
  });

  const uniqueBrandItems = Array.from(new Map(brandItems.map(brand => [brand.id, brand])).values());
  const accentTextClass = getAccentTextClass(titleColor);
  const vendorSectionCopy = getVendorSectionCopy(slug, locale);
  const seoContent = getServiceSEOContent(slug, title, locale);
  const handleWhatsApp = () => {
    window.open(contactLinks.whatsapp, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-1 pt-1 sm:px-6 lg:px-2 lg:pt-2 flex flex-col">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-7xl mx-auto"
        >
          {/* Hero Content */}
          <div className="relative">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`relative h-64 overflow-hidden rounded-[32px] border border-white/60 bg-gradient-to-br ${accentGradient ?? 'from-orange-200 via-amber-100 to-orange-100 dark:from-orange-900/30 dark:via-amber-900/30 dark:to-orange-900/30'} shadow-[0_20px_80px_-30px_rgba(15,23,42,0.3)] sm:h-80 lg:h-[28rem]`}
            >
{heroImage ? (
  <Image
    src={heroImage}
    alt={title}
    fill
    loading="eager"
    className="object-cover"
  />
) : (
  <div className="flex h-full items-center justify-center text-9xl sm:text-[120px] lg:text-[140px]">
    {/* fallback */}
  </div>
)}

              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/35 to-transparent" />

              <div className="absolute inset-0 z-10 flex items-start justify-center px-6 text-center sm:px-10 lg:justify-start lg:pl-12 lg:text-left">
                <div className="max-w-2xl pt-2 sm:pt-4 lg:pt-6">
                  <h1
                    className={`text-3xl text-white font-bold tracking-[-0.03em] sm:text-4xl lg:text-5xl xl:text-6xl`}
                  >
                    {title}
                  </h1>
                </div>
              </div>

              <div className="absolute bottom-3 left-2 right-2 z-20 flex flex-col gap-2 sm:bottom-6 sm:left-3 sm:right-3 sm:flex-row sm:items-center sm:justify-between sm:gap-3 lg:bottom-6 lg:left-6 lg:right-6 lg:gap-3">
                <AnimatedCallButton label={copy.callNow} />
                <AnimatedJoinButton label={copy.orderOnWhatsApp} />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Categories + Brand logos */}
      <CategoriesSection
        categories={categories}
        brands={uniqueBrandItems}
        accentTextClass={titleColor}
      />

      <section className="mx-auto mt-2 w-full max-w-7xl sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-slate-200/80 bg-white p-2 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/70">
          <h2 className={`${accentTextClass} text-center text-xl sm:text-2xl font-bold mb-2`}>
            {seoContent.heading}
          </h2>
          <p className="text-sm sm:text-base leading-7 text-slate-600 dark:text-slate-300">
            {seoContent.intro}
          </p>

          <div className="mt-2 grid gap-4 md:grid-cols-2">
            <div>
              <h3 className={`text-left text-sm font-semibold uppercase tracking-[0.2em] ${accentTextClass}`}>
                {copy.serviceDetailWhatWeOffer}
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {seoContent.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-1 text-blach">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
           <DeliveryZonesSection accentClass={titleColor} />

         
        </div>
      </section>

      {/* Vendors Section */}
      {vendors.length > 0 && (
        <section className="mx-auto mt-3 sm:mt-5 max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
          <div className="mb-8">
            <h2 className={`${accentTextClass} text-2xl sm:text-3xl font-bold mb-2`}>
              {vendorSectionCopy.heading}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              {vendorSectionCopy.description}
            </p>
          </div>

          <div className="space-y-6">
            {vendors.map((vendor, index) => {
              const vendorSlug = getVendorSlug(vendor);
              const localizedVendor = getLocalizedVendorContent(slug ?? '', vendor, locale);
              const vendorTitle = localizedVendor.name?.trim() || localizedVendor.brand?.trim() || copy.seeVendorPage;
              return (
                <motion.div
                  key={`${vendorSlug}-${index}`}
                  initial={{ y: 24, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-2 sm:p-6 bg-white rounded-[20px] border border-slate-200/80 dark:border-slate-800/60 shadow-md"
                >
                  {/* Logo */}
                  <div className=" w-full h-40 w-24 sm:h-28 sm:w-28 flex-shrink-0 rounded-[20px] overflow-hidden shadow-lg bg-white relative">
                    <Image
                      src={vendor.logoUrl ?? '/logos/applogo.png'}
                      alt={localizedVendor.logoAlt ?? localizedVendor.name}
                      fill
                      
                      loading="eager"
                      sizes="(max-width: 640px) 96px, (max-width: 1024px) 112px, 128px"
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 self-stretch">
                    <Link
                      href={`/${slug}/${vendorSlug}`}
                      className="group flex h-full flex-col justify-between gap-3 rounded-xl p-2 transition-colors duration-200 sm:p-3"
                    >
                      <div className="space-y-2">
                        <h3 className={`font-bold text-base leading-snug break-words sm:text-lg ${accentTextClass}`}>
                          {vendorTitle}
                        </h3>

                        <p className="text-sm leading-6 text-slate-600 line-clamp-3 dark:text-slate-700">
                          {localizedVendor.description}
                        </p>
                      </div>

                      <div className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 transition-colors group-hover:text-red-700 dark:text-red-400 dark:group-hover:text-red-300">
                        <span>{copy.seeVendorPage}</span>
                        <span aria-hidden="true">→</span>
                      </div>
                    </Link>
                  </div>

                  {/* WhatsApp Button */}
                  <div className="w-full sm:w-auto sm:flex-shrink-0 sm:ml-4 sm:order-none order-last">
                    <Button
                                  onClick={handleWhatsApp}
                                  className="mt-0 w-full h-11 sm:h-12
                                   rounded-full
                                  bg-gradient-to-r from-red-900 via-red-500 to-pink-900 px-4 sm:px-6 text-2xl sm:text-base font-bold text-white shadow-[0_12px_30px_rgba(16,185,129,0.35)] hover:shadow-[0_16px_36px_rgba(16,185,129,0.45)] 
                                  transition-all hover:scale-[1.02]"
                                >
                                  <Icon
                                  
                                    icon="logos:whatsapp-icon"
                                    className="mr-2 h-8 w-8 size-auto"
                                  />
                                  {copy.orderOnWhatsApp}
                                </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}

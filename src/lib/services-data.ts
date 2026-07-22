import type { Locale } from '@/lib/site-content';

export interface ServiceCategory {
  name: string;
  emoji: string;
}

export interface ServiceVendor {
  id: string;
  slug?: string;
  name: string;
  brand: string;
  logo: string;
  logoEmoji?: string;
  logoUrl?: string;
  logoAlt?: string;
  description: string;
  rating?: number;
  bgColor?: string;
}

export interface ServiceOccasion {
  name: string;
  emoji: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  titleColor: string;
  description: string;
  deliveryTime: string;
  heroImage: string;
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  categories: ServiceCategory[];
  vendors: ServiceVendor[];
  bgGradient: string;
}

export type LocalizedServiceContent = Pick<ServiceDetail, 'title' | 'description' | 'deliveryTime' | 'features' | 'categories'>;

export interface LocalizedVendorContent {
  name: string;
  brand: string;
  description: string;
  logoAlt?: string;
}

const localizedServiceOverrides: Record<string, Partial<Record<Locale, LocalizedServiceContent>>> = {
  restaurants: {
    en: {
      title: 'Food Delivery',
      description: 'Get your favorite meals delivered quickly to your doorstep in Marrakech.',
      deliveryTime: '30-60 min',
      features: [
        { icon: '🚗', title: 'Wide choice of restaurants', description: 'Hundreds of partner restaurants' },
        { icon: '👍', title: 'Hot and fresh prices', description: 'Competitive rates and guaranteed quality' },
        { icon: '⚡', title: 'Fast delivery', description: 'Express delivery in under an hour' },
        { icon: '🎧', title: 'Available 24/7', description: 'Order anytime day or night' },
      ],
      categories: [
        { name: 'Burgers', emoji: '🍔' },
        { name: 'Pizzas', emoji: '🍕' },
        { name: 'Tacos', emoji: '🌮' },
        { name: 'Sushi', emoji: '🍣' },
        { name: 'Sandwiches', emoji: '🥪' },
        { name: 'Chicken', emoji: '🍗' },
        { name: 'Pasta', emoji: '🍝' },
        { name: 'Salads', emoji: '🥗' },
        { name: 'Desserts', emoji: '🍰' },
        { name: 'Drinks', emoji: '🥤' },
      ],
    },
  },
  pharmacies: {
    en: {
      title: 'Medicine Delivery',
      description: 'Get your medicines and health essentials delivered quickly and discreetly at home.',
      deliveryTime: '20-40 min',
      features: [
        { icon: '🏥', title: 'Licensed pharmacies', description: 'Certified and approved pharmacy network' },
        { icon: '✓', title: 'Secure delivery', description: 'Discreet packaging and secure transport' },
        { icon: '⚡', title: 'Ultra-fast delivery', description: 'Order received in under 45 minutes' },
        { icon: '🛡️', title: 'Privacy guaranteed', description: '100% discreet and confidential service' },
      ],
      categories: [
        { name: 'Prescriptions', emoji: '📄' },
        { name: 'Medicines', emoji: '💊' },
        { name: 'Vitamins', emoji: '💪' },
        { name: 'Hygiene', emoji: '🧼' },
        { name: 'Body care', emoji: '🧴' },
        { name: 'Baby & mom', emoji: '🍼' },
        { name: 'First aid', emoji: '🩹' },
        { name: 'Medical equipment', emoji: '🩺' },
        { name: 'Face care', emoji: '🧴' },
        { name: 'Supplements', emoji: '🌿' },
      ],
    },
  },
  supermarkets: {
    en: {
      title: 'Grocery Delivery',
      description: 'Have all your everyday essentials delivered straight to your door in Marrakech.',
      deliveryTime: '45-90 min',
      features: [
        { icon: '🏪', title: 'Large selection', description: 'Thousands of products available' },
        { icon: '💰', title: 'Competitive prices', description: 'Best offers and promotions' },
        { icon: '📦', title: 'Fast delivery', description: 'Your groceries in less than 2 hours' },
        { icon: '🚚', title: 'Reliable delivery', description: 'Fast and quality service' },
      ],
      categories: [
        { name: 'Fruits', emoji: '🍎' },
        { name: 'Vegetables', emoji: '🥬' },
        { name: 'Meat', emoji: '🥩' },
        { name: 'Fish', emoji: '🐟' },
        { name: 'Dairy', emoji: '🥛' },
        { name: 'Bakery', emoji: '🍞' },
        { name: 'Drinks', emoji: '🥤' },
        { name: 'Snacks', emoji: '🍪' },
        { name: 'Household', emoji: '🧽' },
        { name: 'Frozen foods', emoji: '🧊' },
      ],
    },
  },
  fleurs: {
    en: {
      title: 'Flower Delivery',
      description: 'The most beautiful flowers delivered straight to your home in Marrakech.',
      deliveryTime: '30-45 min',
      features: [
        { icon: '🌹', title: 'Large selection', description: 'Fresh and beautiful flowers' },
        { icon: '💐', title: 'Premium arrangements', description: 'Bouquets created by professionals' },
        { icon: '⚡', title: 'Fast delivery', description: 'Express delivery in less than an hour' },
        { icon: '🎀', title: 'Special gifts', description: 'Premium and personalized packaging' },
      ],
      categories: [
        { name: 'Bouquets', emoji: '💐' },
        { name: 'Roses', emoji: '🌹' },
        { name: 'Wedding', emoji: '💍' },
        { name: 'Birthday', emoji: '🎂' },
        { name: 'Love', emoji: '❤️' },
        { name: 'Party', emoji: '🎉' },
        { name: 'Birth', emoji: '👶' },
        { name: 'Thank you', emoji: '🙏' },
        { name: 'Gifts', emoji: '🎁' },
      ],
    },
  },
  cosmetics: {
    en: {
      title: 'Cosmetics Delivery',
      description: 'Get your beauty and care products delivered quickly to your home in Marrakech.',
      deliveryTime: '30-60 min',
      features: [
        { icon: '✨', title: 'Beauty essentials', description: 'Products for skincare and beauty' },
        { icon: '💄', title: 'Premium brands', description: 'A selection of famous beauty brands' },
        { icon: '⚡', title: 'Fast delivery', description: 'Quick and practical service' },
        { icon: '🛍️', title: 'Easy ordering', description: 'Simple ordering and home delivery' },
      ],
      categories: [
        { name: 'Skincare', emoji: '🧴' },
        { name: 'Makeup', emoji: '💄' },
        { name: 'Haircare', emoji: '💇' },
        { name: 'Fragrance', emoji: '🌸' },
        { name: 'Wellness', emoji: '🧘' },
        { name: 'Body care', emoji: '🫧' },
      ],
    },
  },
  shopping: {
    en: {
      title: 'Shopping Delivery',
      description: 'Enjoy fast shopping delivery in Marrakech for your favorite purchases and everyday needs.',
      deliveryTime: '30-60 min',
      features: [
        { icon: '🛍️', title: 'Practical purchases', description: 'Everyday products delivered home' },
        { icon: '⚡', title: 'Fast delivery', description: 'Quick delivery across Marrakech' },
        { icon: '💳', title: 'Easy checkout', description: 'Simple ordering and direct delivery' },
      ],
      categories: [
        { name: 'Fashion', emoji: '👗' },
        { name: 'Electronics', emoji: '📱' },
        { name: 'Home', emoji: '🏠' },
        { name: 'Accessories', emoji: '👜' },
        { name: 'Gifts', emoji: '🎁' },
      ],
    },
  },
  colis: {
    en: {
      title: 'Parcel Delivery',
      description: 'Fast parcel delivery service in Marrakech for small packages, documents and urgent shipments.',
      deliveryTime: '20-45 min',
      features: [
        { icon: '📦', title: 'Parcel delivery', description: 'Small packages and urgent items' },
        { icon: '🧾', title: 'Document delivery', description: 'Documents and important papers' },
        { icon: '⚡', title: 'Fast service', description: 'Available 24/7 for urgent requests' },
      ],
      categories: [
        { name: 'Parcels', emoji: '📦' },
        { name: 'Documents', emoji: '📄' },
        { name: 'Urgent', emoji: '🚀' },
      ],
    },
  },
  documents: {
    en: {
      title: 'Document Delivery',
      description: 'Fast and reliable document delivery service in Marrakech for papers, files and sensitive mail.',
      deliveryTime: '20-40 min',
      features: [
        { icon: '📄', title: 'Secure transport', description: 'Sensitive and urgent documents' },
        { icon: '🔒', title: 'Confidential', description: 'Reliable and discreet handling' },
        { icon: '⚡', title: 'Quick dispatch', description: 'Fast service for professionals and individuals' },
      ],
      categories: [
        { name: 'Papers', emoji: '📑' },
        { name: 'Files', emoji: '🗂️' },
        { name: 'Urgent', emoji: '🚀' },
      ],
    },
  },
  boulangerie: {
    en: {
      title: 'Bakery Delivery',
      description: 'Enjoy fresh bread, pastries and bakery products delivered quickly to your home in Marrakech.',
      deliveryTime: '20-40 min',
      features: [
        { icon: '🥖', title: 'Fresh bakery', description: 'Bread and pastries delivered fresh' },
        { icon: '⚡', title: 'Fast delivery', description: 'Quick service for small orders' },
        { icon: '☕', title: 'Morning treats', description: 'Great for breakfast and snack breaks' },
      ],
      categories: [
        { name: 'Bread', emoji: '🥖' },
        { name: 'Pastries', emoji: '🥐' },
        { name: 'Morning', emoji: '☀️' },
        { name: 'Desserts', emoji: '🍰' },
      ],
    },
  },
};

export function getVendorSlug(vendor: ServiceVendor) {
  if (vendor.slug) return vendor.slug;
  if (vendor.id) return vendor.id;
  return vendor.brand
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function getServiceBySlug(slug: string): ServiceDetail | null {
  return servicesData[slug] || null;
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(servicesData);
}

export function getVendorByServiceAndId(serviceSlug: string, vendorId: string) {
  const service = getServiceBySlug(serviceSlug);
  if (!service) return null;
  return (
    service.vendors.find(vendor => vendor.id === vendorId || getVendorSlug(vendor) === vendorId) ||
    null
  );
}

export function getAllServiceVendorParams() {
  return Object.values(servicesData).flatMap(service => {
    const uniqueVendors = Array.from(
      new Map(service.vendors.map(vendor => [getVendorSlug(vendor), vendor])).values(),
    );
    return uniqueVendors.map(vendor => ({
      serviceSlug: service.slug,
      vendorId: getVendorSlug(vendor),
    }));
  });
}

export function getLocalizedServiceContent(slug: string, locale: Locale): LocalizedServiceContent {
  const service = servicesData[slug];
  const override = localizedServiceOverrides[slug]?.[locale];

  return {
    title: override?.title ?? service.title,
    description: override?.description ?? service.description,
    deliveryTime: override?.deliveryTime ?? service.deliveryTime,
    features: override?.features ?? service.features,
    categories: override?.categories ?? service.categories,
  };
}

export function getLocalizedVendorContent(serviceSlug: string, vendor: ServiceVendor, locale: Locale): LocalizedVendorContent {
  if (locale === 'fr') {
    return {
      name: vendor.name,
      brand: vendor.brand,
      description: vendor.description,
      logoAlt: vendor.logoAlt || `${vendor.brand} brand logo`,
    };
  }

  const brandName = vendor.brand || vendor.name;
  const descriptionBySlug: Record<string, string> = {
    restaurants: `Fast and reliable ${brandName} delivery in Marrakech for your home, office, hotel or riad.`,
    pharmacies: `Reliable ${brandName} delivery in Marrakech for medicines and everyday health essentials.`,
    supermarkets: `Convenient ${brandName} delivery in Marrakech for groceries and daily essentials.`,
    fleurs: `Elegant ${brandName} delivery in Marrakech with fresh flowers and bouquets for every occasion.`,
    cosmetics: `Fast ${brandName} delivery in Marrakech for beauty products and everyday care essentials.`,
    shopping: `Practical ${brandName} delivery in Marrakech for shopping and everyday purchases.`,
    colis: `Reliable ${brandName} delivery in Marrakech for parcels, documents and urgent shipments.`,
    documents: `Secure ${brandName} delivery in Marrakech for documents, papers and important files.`,
    boulangerie: `Fresh ${brandName} delivery in Marrakech for bread, pastries and bakery treats.`,
  };

  return {
    name: `${brandName} delivery in Marrakech`,
    brand: vendor.brand,
    description: descriptionBySlug[serviceSlug] ?? `Reliable ${brandName} service in Marrakech with fast home delivery.`,
    logoAlt: vendor.logoAlt || `${brandName} brand logo`,
  };
}

export const servicesData: Record<string, ServiceDetail> = {
  restaurants: {
    slug: 'restaurants',
    title: 'Livraison de REPAS',
    titleColor: 'text-red-600',
    description: 'Vos plats préférés livrés rapidement chez vous à Marrakech.',
    deliveryTime: '30-60 min',
    
    heroImage: '🍔',
    features: [
      {
        icon: '🚗',
        title: 'Large choix de restaurants',
        description: 'Des centaines de restaurants partenaires',
      },
      {
        icon: '👍',
        title: 'Prix chauds et frais',
        description: 'Tarifs compétitifs et qualité garantie',
      },
      {
        icon: '🌸',
        title: 'Livraison rapide',
        description: "Livraison express en moins d'une heure",
      },
      {
        icon: '🎧',
        title: 'Service disponible 24/7',
        description: 'Commandez à tout moment du jour et de la nuit',
      },
    ],
    categories: [
      { name: 'Burgers', emoji: '🍔' },
  { name: 'Pizzas', emoji: '🍕' },
  { name: 'Tacos', emoji: '🌮' },
  { name: 'Sushi', emoji: '🍣' },
  { name: 'Sandwiches', emoji: '🥪' },
  { name: 'Poulet', emoji: '🍗' },
  { name: 'Pâtes', emoji: '🍝' },
  { name: 'Salades', emoji: '🥗' },
  { name: 'Desserts', emoji: '🍰' },
  { name: 'Boissons', emoji: '🥤' },
    ],
    vendors: [
  {
    id: 'mcdonalds',
    name: 'livraison mcdonalds marrakech',
    brand: "McDonald's",
    logo: '🍟',
    logoUrl: "/logos/restaurant/livraison marrakech a domicile mc Donald's.jfif",
    logoAlt: "McDonald's brand logo",
    description:
      "Livraison McDonald's Marrakech à domicile avec Livreur Marrakech. Commandez vos burgers, menus, frites, desserts et boissons McDonald's sans vous déplacer. Notre service récupère votre commande directement au restaurant et assure une livraison rapide chez vous, au bureau, à l'hôtel ou au riad partout à Marrakech."
  },

  {
    id: 'kfc',
    name: 'Livraison KFC marrakech',
    brand: 'KFC',
    logo: '🍗',
    logoUrl: '/logos/restaurant/livraison marrakech a domicile kfc.png',
    logoAlt: 'KFC brand logo',
    description:
      "Livraison KFC Marrakech rapide à domicile avec Livreur Marrakech. Profitez de vos buckets de poulet, Hot Wings, Tenders, Zinger Burgers et menus KFC préférés livrés directement chez vous. Nous récupérons votre commande au restaurant KFC et assurons une livraison rapide partout à Marrakech : Guéliz, Hivernage, Agdal, Massira, Médina et tous les quartiers."
  },

  {
    id: 'burgerking',
    name: 'livraison burger king marrakech',
    brand: 'Burger King',
    logo: '👑',
    logoUrl: '/logos/restaurant/livraison marrakech a domicile  burger king.png',
    logoAlt: 'Burger King brand logo',
    description:
      "Livraison Burger King Marrakech à domicile avec Livreur Marrakech. Commandez vos Whoppers, burgers, frites, menus et boissons Burger King avec une livraison rapide et fiable. Votre commande est récupérée directement au restaurant puis livrée chaude à votre domicile, bureau, hôtel ou riad partout à Marrakech."
  },

  {
    id: 'dominos',
    name: 'livraison Domino\'s Pizza marrakech',
    brand: "Domino's",
    logo: '🍕',
    logoUrl: '/logos/restaurant/livraison marrakech a domicile  Domino\'s.png',
    logoAlt: "Domino's brand logo",
    description:
      "Livraison Domino's Pizza Marrakech rapide à domicile avec Livreur Marrakech. Savourez vos pizzas Domino's, Chicken Wings, desserts et boissons livrés directement chez vous. Notre service de livraison restaurant Marrakech assure une commande chaude et rapide à domicile, au bureau, à l'hôtel ou au riad."
  },

  {
    id: 'papa-johns',
    name: 'livraison papa johns marrakech',
    brand: "Papa John's",
    logo: '🍕',
    logoUrl: '/logos/restaurant/livraison marrakech a domicile  papa johns.png',
    logoAlt: "Papa John's brand logo",
    description:
      "Livraison Papa John's Marrakech à domicile avec Livreur Marrakech. Commandez vos pizzas Pepperoni, Four Cheese, BBQ Chicken, menus familiaux et spécialités Papa John's. Nous récupérons votre commande directement au restaurant et assurons une livraison pizza rapide partout à Marrakech."
  },

  {
    id: 'tacos-de-lyon',
    name: 'livraison tacos de lyon marrakech',
    brand: 'Tacos de Lyon',
    logo: '🌮',
    logoUrl: '/logos/restaurant/livraison marrakech a domicile  tacos de lyon.png',
    logoAlt: 'Tacos de Lyon brand logo',
    description:
      "Livraison Tacos de Lyon Marrakech à domicile avec Livreur Marrakech. Profitez de vos French Tacos, tacos poulet, steak, mixte, frites et menus gourmands livrés rapidement partout à Marrakech. Service disponible pour livraison à domicile, bureau, hôtel et riad."
  },

  {
    id: 'crusty',
    name: 'livraison crusty marrakech',
    brand: 'Crusty',
    logo: '🥖',
    logoUrl: '/logos/restaurant/livraison marrakech a domicile crusty.jfif',
    logoAlt: 'Crusty brand logo',
    description:
      "Livraison Crusty Marrakech rapide avec Livreur Marrakech. Commandez vos burgers artisanaux, sandwichs, wraps, paninis, tacos et menus Crusty sans vous déplacer. Notre service assure une livraison restaurant rapide à domicile, au bureau, à l'hôtel ou au riad partout à Marrakech."
  },

  {
    id: 'otacos',
    name: 'livraison o\'tacos marrakech',
    brand: "O'Tacos",
    logo: '🌮',
    logoUrl: '/logos/restaurant/livraison marrakech a domicile o\'tacos.png',
    logoAlt: "O'Tacos brand logo",
    description:
      "Livraison O'Tacos Marrakech à domicile avec Livreur Marrakech. Retrouvez vos French Tacos, tacos steak, poulet, sauce fromagère, nuggets, frites et menus O'Tacos livrés rapidement. Commandez facilement et profitez d'une livraison fast-food Marrakech partout dans la ville."
  },

  {
    id: 'pizza-hut',
    name: 'livraison pizza hut marrakech',
    brand: 'Pizza Hut',
    logo: '🍕',
    logoUrl: '/logos/restaurant/livraison marrakech a domicile pizza hut.png',
    logoAlt: 'Pizza Hut brand logo',
    description:
      "Livraison Pizza Hut Marrakech rapide à domicile avec Livreur Marrakech. Commandez vos pizzas, Chicken Wings, desserts, boissons et menus Pizza Hut préférés. Nous assurons une livraison pizza Marrakech chaude et rapide chez vous, au bureau, à l'hôtel ou au riad."
  },

  {
    id: 'quick',
    name: 'livraison quick marrakech',
    brand: 'Quick',
    logo: '🍔',
    logoUrl: '/logos/restaurant/livraison marrakech a domicile quick.png',
    logoAlt: 'Quick brand logo',
    description:
      "Livraison Quick Marrakech à domicile avec Livreur Marrakech. Profitez de vos burgers Giant, Long Chicken, wraps, frites et menus Quick livrés rapidement partout à Marrakech. Notre service de livraison fast-food vous apporte votre commande chaude directement chez vous, au bureau, à l'hôtel ou au riad."
  },
],
    bgGradient: 'from-orange-400 via-orange-500 to-red-600',
  },
  pharmacies: {
    slug: 'pharmacies',
    title: 'Livraison de MÉDICAMENTS',
    titleColor: 'text-emerald-600',
    description: 'Vos médicaments livrés rapidement et discrètement chez vous.',
    deliveryTime: '20-40 min',
    heroImage: '💊',
    features: [
      {
        icon: '🏥',
        title: 'Pharmacies agréées',
        description: 'Réseau de pharmacies certifiées et approuvées',
      },
      {
        icon: '✓',
        title: 'Livraison sécurisée',
        description: 'Emballage discret et transport sécurisé',
      },
      {
        icon: '⚡',
        title: 'Livraison ultra-rapide',
        description: 'Commande reçue en moins de 45 minutes',
      },
      {
        icon: '🛡️',
        title: 'Confidentialité garantie',
        description: 'Service 100% discret et confidentiel',
      },
    ],
    categories: [
        { name: 'Ordonnances', emoji: '📄' },
  { name: 'Médicaments', emoji: '💊' },
  { name: 'Vitamines', emoji: '💪' },
  { name: 'Hygiène', emoji: '🧼' },
  { name: 'Soins du corps', emoji: '🧴' },
  { name: 'Bébé & Maman', emoji: '🍼' },
  { name: 'Premiers secours', emoji: '🩹' },
  { name: 'Matériel médical', emoji: '🩺' },
  { name: 'Soins du visage', emoji: '🧴' },
  { name: 'Compléments alimentaires', emoji: '🌿' },
    ],
   vendors: [
 {
  id: 'Pharmacie-Centrale-Marrakech',
  name: 'Pharmacie Centrale Marrakech',
  brand: 'Pharmacie Centrale',
  logoUrl: "/logos/pharmacies/pharmacie livraison marrakech a domicile parapharmacie.webp",
  logoAlt: "Pharmacie Centrale brand logo",
  logo: '⚕️',
  description:
    "Livraison pharmacie Marrakech rapide avec Livreur Marrakech. Pharmacie Centrale propose médicaments, produits de santé, parapharmacie et soins du quotidien. Nous récupérons vos produits en pharmacie et assurons une livraison rapide à domicile, au bureau, à l'hôtel ou au riad partout à Marrakech.",
},

{
  id: 'Pharmacie-Carre-Eden',
  name: 'Pharmacie Carré Eden',
  brand: 'Carré Eden',
  logo: '🩺',
  logoUrl: "/logos/pharmacies/pharmacie livraison marrakech a domicile parapharmacie.webp",
  logoAlt: "Carré Eden brand logo",
  description:
    "Livraison Pharmacie Carré Eden Marrakech à domicile avec Livreur Marrakech. Retrouvez vos médicaments, produits de parapharmacie, soins beauté et produits de santé livrés rapidement partout à Marrakech. Service pratique pour particuliers, hôtels, riads et bureaux.",
},

{
  id: 'Pharmacie-Gueliz',
  name: 'Pharmacie Guéliz',
  brand: 'Pharmacie Guéliz',
  logo: '⚕️',
  logoUrl: "/logos/pharmacies/pharmacie livraison marrakech a domicile parapharmacie.webp",
  logoAlt: "Pharmacie Guéliz brand logo",
  description:
    "Livraison pharmacie Guéliz Marrakech avec Livreur Marrakech. Commandez vos médicaments, produits de santé, compléments, soins et articles de parapharmacie avec une livraison rapide à domicile. Nous assurons la récupération de vos achats en pharmacie dans le quartier Guéliz et partout à Marrakech.",
},

{
  id: 'Pharmacie-Majorelle',
  name: 'Pharmacie Majorelle',
  brand: 'Pharmacie Majorelle',
  logo: '⚕️',
  logoUrl: "/logos/pharmacies/pharmacie livraison marrakech a domicile parapharmacie.webp",
  logoAlt: "Pharmacie Majorelle brand logo",
  description:
    "Livraison Pharmacie Majorelle Marrakech rapide à domicile avec Livreur Marrakech. Profitez d'un service de livraison de médicaments, dermocosmétiques, produits de bien-être et parapharmacie directement chez vous, au bureau, à l'hôtel ou au riad.",
},

{
  id: 'Pharmacie-Victor-Hugo',
  name: 'Pharmacie Victor Hugo',
  brand: 'Pharmacie Victor Hugo',
  logo: '⚕️',
  logoUrl: "/logos/pharmacies/pharmacie livraison marrakech a domicile parapharmacie.webp",
  logoAlt: "Pharmacie Victor Hugo brand logo",
  description:
    "Livraison pharmacie Victor Hugo Marrakech avec Livreur Marrakech. Nous récupérons vos médicaments, produits pharmaceutiques et articles de santé auprès de la pharmacie Victor Hugo et nous assurons une livraison rapide partout à Marrakech.",
},

{
  id: 'Pharmacie-Hivernage',
  name: 'Pharmacie Hivernage',
  brand: 'Pharmacie Hivernage',
  logo: '⚕️',
  logoUrl: "/logos/pharmacies/pharmacie livraison marrakech a domicile parapharmacie.webp",
  logoAlt: "Pharmacie Hivernage brand logo",
  description:
    "Livraison Pharmacie Hivernage Marrakech à domicile avec Livreur Marrakech. Service de livraison rapide pour médicaments, produits de santé, soins beauté et parapharmacie. Commandez facilement et recevez vos produits directement à votre adresse à Marrakech.",
},

{
  id: 'Pharmacie-Targa',
  name: 'Pharmacie Targa',
  brand: 'Pharmacie Targa',
  logo: '⚕️',
  logoUrl: "/logos/pharmacies/pharmacie livraison marrakech a domicile parapharmacie.webp",
  logoAlt: "Pharmacie Targa brand logo",
  description:
    "Livraison Pharmacie Targa Marrakech rapide avec Livreur Marrakech. Une solution simple pour recevoir vos médicaments, produits de santé et articles de pharmacie à domicile. Nous livrons aux particuliers, familles, bureaux, hôtels et riads partout à Marrakech.",
},

{
  id: 'Pharmacie-Menara',
  name: 'Pharmacie Ménara',
  brand: 'Pharmacie Ménara',
  logo: '⚕️',
  logoUrl: "/logos/pharmacies/pharmacie livraison marrakech a domicile parapharmacie.webp",
  logoAlt: "Pharmacie Ménara brand logo",
  description:
    "Livraison Pharmacie Ménara Marrakech avec Livreur Marrakech. Profitez d'un service de livraison pharmacie pratique pour vos médicaments, produits pharmaceutiques, soins et articles de parapharmacie. Livraison rapide à domicile partout à Marrakech.",
},
],
    bgGradient: 'from-emerald-400 via-green-500 to-teal-600',
  },
  supermarkets: {
    slug: 'supermarkets',
    title: "Livraison d'ÉPICERIE",
    titleColor: 'text-blue-600',
    description: 'Tous vos produits du quotidien livrés directement chez vous.',
    deliveryTime: '45-90 min',
    heroImage: '🛒',
    features: [
      {
        icon: '🏪',
        title: 'Large sélection',
        description: 'Des milliers de produits disponibles',
      },
      {
        icon: '💰',
        title: 'Prix compétitifs',
        description: 'Les meilleures offres et promotions',
      },
      {
        icon: '📦',
        title: 'Livraison rapide',
        description: 'Vos courses en moins de 2 heures',
      },
      {
        icon: '🚚',
        title: 'Livraison fiable',
        description: 'Service rapide et de qualité',
      },
    ],
    categories: [
        { name: 'Fruits', emoji: '🍎' },
  { name: 'Légumes', emoji: '🥬' },
  { name: 'Viandes', emoji: '🥩' },
  { name: 'Poissons', emoji: '🐟' },
  { name: 'Produits laitiers', emoji: '🥛' },
  { name: 'Boulangerie', emoji: '🍞' },
  { name: 'Boissons', emoji: '🥤' },
  { name: 'Snacks', emoji: '🍪' },
  { name: 'Produits ménagers', emoji: '🧽' },
  { name: 'Produits surgelés', emoji: '🧊' },
    ],
    vendors: [
  {
    id: 'aswak-assalam',
    name: 'Livraison Aswak Assalam Marrakech',
    brand: 'Aswak Assalam',
    logo: '🏪',
    logoUrl: '/logos/supermarkets/livraison marrakech a domicile aswak-assalam.png',
    logoAlt: 'Aswak Assalam brand logo',
    description:
      "Livraison Aswak Assalam Marrakech à domicile avec Livreur Marrakech. Commandez vos courses, produits alimentaires, produits frais, boissons et essentiels de la maison sans vous déplacer. Nous récupérons vos achats chez Aswak Assalam et assurons une livraison rapide partout à Marrakech, à domicile, au bureau, à l'hôtel ou au riad.",
  },

  {
    id: 'bim',
    name: 'Livraison BIM Marrakech',
    brand: 'BIM',
    logo: '🛒',
    logoUrl: '/logos/supermarkets/livraison marrakech a domicile bim.png',
    logoAlt: 'BIM brand logo',
    description:
      "Livraison BIM Marrakech rapide avec Livreur Marrakech. Profitez de vos courses du quotidien, produits alimentaires, boissons, produits ménagers et promotions BIM livrés directement chez vous. Notre service de livraison supermarché Marrakech vous permet de faire vos achats facilement sans déplacement.",
  },

  {
    id: 'carrefour',
    name: 'Livraison Carrefour Marrakech',
    brand: 'Carrefour',
    logo: '🛍️',
    logoUrl: '/logos/supermarkets/livraison marrakech a domicile carrefour.png',
    logoAlt: 'Carrefour brand logo',
    description:
      "Livraison Carrefour Marrakech à domicile avec Livreur Marrakech. Commandez vos produits alimentaires, fruits et légumes, boissons, produits d'entretien et articles du quotidien. Nous récupérons vos courses chez Carrefour et nous les livrons rapidement partout à Marrakech.",
  },

  {
    id: 'label-vie',
    name: 'Livraison Label Vie Marrakech',
    brand: 'Label Vie',
    logo: '🧺',
    logoUrl: '/logos/supermarkets/livraison marrakech a domicile label-vie.png',
    logoAlt: 'Label Vie brand logo',
    description:
      "Livraison Label Vie Marrakech rapide avec Livreur Marrakech. Retrouvez vos courses, produits frais, alimentation, boissons et produits essentiels livrés à domicile. Service pratique pour particuliers, familles, bureaux, hôtels et riads partout à Marrakech.",
  },

  {
    id: 'marjane',
    name: 'Livraison Marjane Marrakech',
    brand: 'Marjane',
    logo: '🏬',
    logoUrl: '/logos/supermarkets/livraison marrakech a domicile marjane.png',
    logoAlt: 'Marjane brand logo',
    description:
      "Livraison Marjane Marrakech à domicile avec Livreur Marrakech. Faites vos courses facilement et recevez vos produits alimentaires, boissons, produits d'hygiène, entretien maison et articles du quotidien rapidement chez vous. Notre service assure une livraison supermarché fiable partout à Marrakech.",
  },
],
    bgGradient: 'from-blue-400 via-cyan-500 to-sky-600',
  },
  fleurs: {
    slug: 'fleurs',
    title: 'Livraison de FLEURS',
    titleColor: 'text-pink-600',
    description: 'Les plus belles fleurs livrées directement chez vous.',
    deliveryTime: '30-45 min',
    heroImage: '🌸',
    features: [
      {
        icon: '🌹',
        title: 'Large sélection',
        description: 'Fleurs fraîches et magnifiques',
      },
      {
        icon: '💐',
        title: 'Arrangements premium',
        description: 'Bouquets créés par des professionnels',
      },
      {
        icon: '⚡',
        title: 'Livraison rapide',
        description: "Livraison express en moins d'une heure",
      },
      {
        icon: '🎀',
        title: 'Cadeaux spéciaux',
        description: 'Emballage premium et personnalisé',
      },
    ],
    categories: [
     { name: 'Bouquets', emoji: '💐' },
  { name: 'Roses', emoji: '🌹' },
  { name: 'Mariage', emoji: '💍' },
  { name: 'Anniversaire', emoji: '🎂' },
  { name: 'Amour', emoji: '❤️' },
  { name: 'Fête', emoji: '🎉' },
  { name: 'Naissance', emoji: '👶' },
  { name: 'Remerciement', emoji: '🙏' },
  { name: 'Cadeaux', emoji: '🎁' },
    ],
vendors: [
  {
    id: 'the-bloom-room-marrakech',
    name: 'The Bloom Room Marrakech',
    brand: 'The Bloom Room',
    logo: '💐',
    description:
      "Livraison fleurs Marrakech à domicile avec Livreur Marrakech. The Bloom Room propose des bouquets élégants, fleurs fraîches, roses et compositions florales pour anniversaires, mariages, cadeaux et toutes les occasions. Nous récupérons vos fleurs chez le fleuriste et assurons une livraison rapide partout à Marrakech.",
  },

  {
    id: 'jawhara-fleurs-marrakech',
    name: 'Jawhara Fleurs Marrakech',
    brand: 'Jawhara Fleurs',
    logo: '🌺',
    description:
      "Livraison fleurs Marrakech avec Jawhara Fleurs et Livreur Marrakech. Découvrez des bouquets personnalisés, roses fraîches et créations florales raffinées livrées directement à domicile. Service de livraison fleurs Marrakech pour cadeaux, événements, hôtels, riads et particuliers.",
  },

  {
    id: 'kech-flora-marrakech',
    name: 'Kech Flora Marrakech',
    brand: 'Kech Flora',
    logo: '🌼',
    description:
      "Livraison fleurs Kech Flora Marrakech à domicile avec Livreur Marrakech. Profitez de fleurs fraîches, plantes décoratives et bouquets personnalisés pour toutes les occasions. Livraison rapide de fleurs à Marrakech pour particuliers, entreprises, hôtels et événements.",
  },

  {
    id: 'florajia-fleuriste-marrakech',
    name: 'Florajia Fleuriste Marrakech',
    brand: 'Florajia Fleuriste',
    logo: '🌻',
    description:
      "Livraison Florajia Fleuriste Marrakech avec Livreur Marrakech. Commandez des bouquets modernes, compositions florales élégantes et cadeaux fleuris livrés rapidement à domicile, bureau, hôtel ou riad. Un service professionnel de livraison fleurs Marrakech disponible tous les jours.",
  },

  {
    id: 'paradis-of-flowers-marrakech',
    name: 'Paradis of Flowers Marrakech',
    brand: 'Paradis of Flowers',
    logo: '🌿',
    description:
      "Livraison Paradis of Flowers Marrakech à domicile avec Livreur Marrakech. Retrouvez une sélection de fleurs naturelles, bouquets de luxe et compositions florales raffinées livrées rapidement partout à Marrakech. Parfait pour cadeaux, mariages, anniversaires et événements.",
  },

  {
    id: 'signature-flowers-marrakech',
    name: 'Signature Flowers Marrakech',
    brand: 'Signature Flowers',
    logo: '🥀',
    description:
      "Livraison Signature Flowers Marrakech avec Livreur Marrakech. Spécialiste des bouquets haut de gamme, roses, décorations florales et créations personnalisées. Livraison fleurs Marrakech rapide à domicile, hôtel, riad, bureau ou entreprise.",
  },
],
    bgGradient: 'from-pink-400 via-rose-500 to-red-600',
  },
  cosmetics: {
    slug: 'cosmetics',
    title: 'Livraison de COSMÉTIQUES',
    titleColor: 'text-purple-600',
    description: 'Tous vos produits de beauté livrés rapidement.',
    deliveryTime: '25-40 min',
    heroImage: '💄',
    features: [
      {
        icon: '💅',
        title: 'Large sélection',
        description: 'Marques et produits de beauté premium',
      },
      {
        icon: '✨',
        title: 'Prix compétitifs',
        description: 'Meilleures offres sur les cosmétiques',
      },
      {
        icon: '🚀',
        title: 'Livraison rapide',
        description: "Recevez vos produits en moins d'une heure",
      },
      {
        icon: '🛡️',
        title: 'Produits authentiques',
        description: "Garantie d'authenticité et de qualité",
      },
    ],
    categories: [
      { name: 'Skincare', emoji: '✨' },
  { name: 'Maquillage', emoji: '💄' },
  { name: 'Parfums', emoji: '🌸' },
  { name: 'Soins cheveux', emoji: '💇' },
  
  { name: 'Soins visage', emoji: '🧖‍♀️' },
  { name: 'Corps & Bain', emoji: '🛁' },
  { name: 'Ongles', emoji: '💅' },
  { name: 'Beauté Homme', emoji: '🧔' },
  { name: 'Nouveautés', emoji: '🆕' },
    ],
   vendors: [
  {
    id: 'la-roche-posay',
    name: 'livraison la roche-posay marrakech',
    brand: 'La Roche-Posay',
    logo: '🧴',
    logoUrl: '/logos/cosmetic/livraison marrakech a domicile la-roche-posay.png',
    logoAlt: 'La Roche-Posay brand logo',
    description:
      "Livraison La Roche-Posay Marrakech à domicile avec Livreur Marrakech. Retrouvez vos soins dermatologiques, crèmes hydratantes, nettoyants visage et produits pour peaux sensibles livrés rapidement partout à Marrakech. Commandez vos produits beauté sans vous déplacer.",
  },

  {
    id: 'bioderma',
    name: 'livraison bioderma marrakech',
    brand: 'Bioderma',
    logo: '🧴',
    logoUrl: '/logos/cosmetic/livraison marrakech a domicile bioderma.png',
    logoAlt: 'Bioderma brand logo',
    description:
      "Livraison Bioderma Marrakech rapide avec Livreur Marrakech. Commandez vos soins visage, eaux micellaires, crèmes hydratantes et produits dermatologiques Bioderma avec une livraison beauté à domicile partout à Marrakech.",
  },

  {
    id: 'cerave',
    name: 'livraison cerave marrakech',
    brand: 'CeraVe',
    logo: '🧴',
    logoUrl: '/logos/cosmetic/livraison marrakech a domicile cerave.png',
    logoAlt: 'CeraVe brand logo',
    description:
      "Livraison CeraVe Marrakech à domicile avec Livreur Marrakech. Profitez des soins CeraVe pour visage et corps, crèmes hydratantes, nettoyants et produits enrichis en céramides livrés rapidement chez vous, au bureau, à l'hôtel ou au riad.",
  },

  {
    id: 'kiko-milano',
    name: 'livraison kiko milano marrakech',
    brand: 'KIKO Milano',
    logo: '💄',
    logoUrl: '/logos/cosmetic/livraison marrakech a domicile kiko-milano.png',
    logoAlt: 'KIKO Milano brand logo',
    description:
      "Livraison KIKO Milano Marrakech avec Livreur Marrakech. Retrouvez vos produits de maquillage, rouges à lèvres, mascaras, fonds de teint et soins beauté KIKO livrés directement à domicile. Service de livraison cosmétique rapide partout à Marrakech.",
  },

  {
    id: 'marionnaud',
    name: 'livraison marionnaud marrakech',
    brand: 'Marionnaud',
    logo: '💋',
    logoUrl: '/logos/cosmetic/livraison marrakech a domicile marionnaud.png',
    logoAlt: 'Marionnaud brand logo',
    description:
      "Livraison Marionnaud Marrakech à domicile avec Livreur Marrakech. Commandez vos parfums, maquillage, soins visage et produits beauté des grandes marques avec une livraison rapide partout à Marrakech.",
  },

  {
    id: 'vichy',
    name: 'livraison vichy marrakech',
    brand: 'Vichy',
    logo: '💧',
    logoUrl: '/logos/cosmetic/livraison marrakech a domicile vichy.jpg',
    logoAlt: 'Vichy brand logo',
    description:
      "Livraison Vichy Marrakech rapide avec Livreur Marrakech. Découvrez les soins Vichy pour visage, corps, hydratation et protection de la peau livrés directement chez vous. Un service simple pour vos achats beauté et parapharmacie à Marrakech.",
  },

  {
    id: 'yves-rocher',
    name: 'livraison yves rocher marrakech',
    brand: 'Yves Rocher',
    logo: '🌿',
    logoUrl: '/logos/cosmetic/livraison marrakech a domicile yves-rocher.png',
    logoAlt: 'Yves Rocher brand logo',
    description:
      "Livraison Yves Rocher Marrakech à domicile avec Livreur Marrakech. Commandez vos soins naturels, produits visage, corps, parfums et cosmétiques à base de plantes livrés rapidement partout à Marrakech.",
  },

  {
    id: 'flomar',
    name: 'livraison flomar marrakech',
    brand: 'Flomar',
    logo: '💄',
    logoUrl: '/logos/cosmetic/livraison marrakech a domicile flomar.jpg',
    logoAlt: 'Flomar brand logo',
    description:
      "Livraison Flormar Marrakech avec Livreur Marrakech. Retrouvez vos produits maquillage, rouges à lèvres, fonds de teint, vernis et accessoires beauté livrés rapidement à domicile. Service de livraison cosmétique pratique partout à Marrakech.",
  },
],
    bgGradient: 'from-violet-400 via-purple-500 to-fuchsia-600',
  },
  shopping: {
    slug: 'shopping',
    title: 'Livraison SHOPPING',
    titleColor: 'text-amber-600',
    description: 'Tous vos achats livrés directement chez vous.',
    deliveryTime: '60-120 min',
    heroImage: '🛍',
    features: [
      {
        icon: '👗',
        title: 'Large variété',
        description: 'Vêtements, accessoires, équipements',
      },
      {
        icon: '💳',
        title: 'Meilleurs prix',
        description: 'Prix réduits et offres exclusives',
      },
      {
        icon: '📦',
        title: 'Livraison rapide',
        description: 'Recevez vos achats en moins de 2 heures',
      },
      {
        icon: '↩️',
        title: 'Retours faciles',
        description: 'Politique de retour simple et rapide',
      },
    ],
    categories: [
        { name: 'Mode', emoji: '👕' },
  { name: 'Chaussures', emoji: '👟' },
  { name: 'Beauté', emoji: '💄' },
  { name: 'Électronique', emoji: '📱' },
  { name: 'Maison', emoji: '🛋️' },
  { name: 'High-Tech', emoji: '💻' },
  { name: 'Sport', emoji: '🏋️' },
  { name: 'Bébé', emoji: '🍼' },
  { name: 'Animalerie', emoji: '🐶' },
  { name: 'Promotions', emoji: '🏷️' },
    ],
    vendors: [
  {
    id: 'carre-eden-shopping-center',
    name: 'Livraison Carré Eden Shopping Center Marrakech',
    brand: 'Carré Eden Shopping Center',
    logo: '🛍️',
    logoUrl: '/logos/shopping/livraison marrakech a domicile CARRE EDEN SHOPPING CENTER .png',
    logoAlt: 'Carré Eden Shopping Center brand logo',
    description:
      "Livraison Carré Eden Marrakech à domicile avec un service rapide pour vos achats shopping, mode, beauté, accessoires, restaurants et boutiques du centre commercial. Livreur Marrakech récupère vos commandes à Carré Eden Guéliz et vous les livre rapidement chez vous, au bureau, à l'hôtel ou au riad partout à Marrakech."
  },
  {
    id: 'center-commercial-almazar',
    name: 'Livraison Centre Commercial Almazar Marrakech',
    brand: 'Centre Commercial Almazar',
    logo: '🏬',
    logoUrl: '/logos/shopping/livraison marrakech a domicile Centre Commercial Almazar.png',
    logoAlt: 'Centre Commercial Almazar brand logo',
    description:
      "Service de livraison Centre Commercial Almazar Marrakech pour vos achats shopping, vêtements, beauté, accessoires, cadeaux et produits des boutiques du mall. Avec Livreur Marrakech, profitez d'une livraison à domicile rapide depuis Almazar vers tous les quartiers de Marrakech."
  },
  {
    id: 'm-avenue',
    name: 'Livraison M Avenue Marrakech',
    brand: 'M Avenue',
    logo: '🛒',
    logoUrl: '/logos/shopping/livraison marrakech a domicile M Avenue (Hivernage).png',
    logoAlt: 'M Avenue brand logo',
    description:
      "Livraison M Avenue Marrakech à domicile pour vos achats premium dans les boutiques, restaurants, espaces beauté et commerces de l'Hivernage. Livreur Marrakech récupère vos commandes à M Avenue et assure une livraison rapide, pratique et sécurisée partout dans la ville."
  },
  {
    id: 'plaza-marrakech',
    name: 'Livraison Plaza Marrakech',
    brand: 'Plaza Marrakech',
    logo: '🛍️',
    logoUrl: '/logos/shopping/livraison marrakech a domicile Plaza Marrakech.png',
    logoAlt: 'Plaza Marrakech brand logo',
    description:
      "Livraison Plaza Marrakech rapide à domicile pour vos achats shopping, mode, accessoires, produits beauté et commandes auprès des boutiques partenaires. Notre service de livraison Marrakech vous permet de recevoir vos achats facilement chez vous, au bureau ou dans votre hôtel."
  },
  {
    id: 'manara-mall',
    name: 'Livraison Manara Mall Marrakech',
    brand: 'Manara Mall',
    logo: '🏬',
    logoUrl: '/logos/shopping/livraison marrakech a domicile manara-mall.png',
    logoAlt: 'Manara Mall brand logo',
    description:
      "Livraison Manara Mall Marrakech à domicile pour vos achats dans les boutiques, magasins, enseignes mode, beauté et loisirs. Livreur Marrakech assure la récupération de vos commandes au centre commercial Manara Mall et une livraison rapide dans tous les quartiers de Marrakech."
  },
],
    bgGradient: 'from-amber-400 via-orange-500 to-yellow-600',
  },
  colis: {
    slug: 'colis',
    title: 'Livraison de COLIS',
    titleColor: 'text-slate-600',
    description: 'Envoyez et recevez vos colis en toute sécurité.',
    deliveryTime: '1-2 heures',
    heroImage: '📦',
    features: [
      {
        icon: '🔒',
        title: 'Sécurisé',
        description: 'Livraison sécurisée et assurée',
      },
      {
        icon: '📍',
        title: 'Suivi en temps réel',
        description: 'Suivi GPS de votre colis',
      },
      {
        icon: '💪',
        title: 'Manutention soignée',
        description: 'Emballage renforcé et sécurisé',
      },
      {
        icon: '⏰',
        title: 'Livraison rapide',
        description: 'Livraison dans les délais convenus',
      },
    ],
    categories: [
       { name: 'Documents', emoji: '📄' },
  { name: 'Petits colis', emoji: '📮' },
  { name: 'Colis standard', emoji: '📦' },
  { name: 'Colis urgents', emoji: '🚀' },
  { name: 'Colis fragiles', emoji: '🥚' },
  { name: 'Cadeaux', emoji: '🎁' },
  { name: 'Retours', emoji: '🔄' },
  { name: 'Entreprises', emoji: '🏢' },
  { name: 'Livraison le jour même', emoji: '🕒' },
  { name: 'Express', emoji: '⚡' },
    ],
   vendors: [
  {
    id: 'amana',
    name: 'livraison amana marrakech',
    brand: 'Amana',
    logo: '📦',
    logoUrl: '/logos/parcel-delivery/livraison marrakech a domicile  amana-messagerie.png',
    logoAlt: 'Amana brand logo',
    description:
      "Livraison Amana Marrakech à domicile pour vos colis, courriers et documents partout dans la ville. Livreur Marrakech vous accompagne pour récupérer, envoyer ou déposer vos colis avec un service rapide et fiable vers toutes les destinations au Maroc."
  },
  {
    id: 'chronopost',
    name: 'livraison chronopost marrakech',
    brand: 'Chronopost',
    logo: '🚚',
    logoUrl: '/logos/parcel-delivery/livraison marrakech a domicile chronopost.webp',
    logoAlt: 'Chronopost brand logo',
    description:
      "Livraison Chronopost Marrakech express pour vos colis, documents professionnels et envois urgents. Profitez d'un service de livraison rapide à Marrakech avec Livreur Marrakech pour vos expéditions nationales et internationales."
  },
  {
    id: 'dhl',
    name: 'livraison dhl marrakech',
    brand: 'DHL Express',
    logo: '✈️',
    logoUrl: '/logos/parcel-delivery/livraison marrakech a domicile dhl.jfif',
    logoAlt: 'DHL Express brand logo',
    description:
      "Livraison DHL Express Marrakech à domicile pour colis, documents et expéditions internationales. Livreur Marrakech facilite vos envois avec un service rapide, sécurisé et adapté aux particuliers comme aux entreprises."
  },
  {
    id: 'fedex',
    name: 'livraison fedex marrakech',
    brand: 'FedEx',
    logo: '📮',
    logoUrl: '/logos/parcel-delivery/livraison marrakech a domicile fedex.png',
    logoAlt: 'FedEx brand logo',
    description:
      "Livraison FedEx Marrakech rapide pour vos colis, documents et marchandises. Notre service de livraison à domicile Marrakech vous aide à gérer vos expéditions avec simplicité et efficacité partout dans la ville."
  },
  {
    id: 'ups',
    name: 'livraison ups marrakech',
    brand: 'UPS',
    logo: '📫',
    logoUrl: '/logos/parcel-delivery/livraison marrakech a domicile ups marrakech.png',
    logoAlt: 'UPS brand logo',
    description:
      "Livraison UPS Marrakech à domicile pour particuliers et professionnels. Livreur Marrakech récupère vos colis, documents et commandes afin de faciliter vos expéditions rapides au Maroc et à l'international."
  },
  {
    id: 'aramex',
    name: 'livraison aramex marrakech',
    brand: 'Aramex',
    logo: '🚛',
    logoUrl: '/logos/parcel-delivery/livraison marrakech a domicile aramex marrakech.png',
    logoAlt: 'Aramex brand logo',
    description:
      "Livraison Aramex Marrakech express pour colis, documents et services logistiques. Avec Livreur Marrakech, bénéficiez d'une livraison rapide à domicile pour vos envois professionnels et personnels partout à Marrakech."
  },
],
    bgGradient: 'from-slate-400 via-zinc-500 to-gray-600',
  },
  documents: {
    slug: 'documents',
    title: 'Livraison de DOCUMENTS',
    titleColor: 'text-indigo-600',
    description: 'Livrez vos documents importants en toute confiance.',
    deliveryTime: '20-30 min',
    heroImage: '📄',
    features: [
      {
        icon: '🔐',
        title: 'Confidentiel',
        description: 'Livraison totalement confidentielle',
      },
      {
        icon: '✅',
        title: 'Certificat livraison',
        description: 'Preuve de livraison garantie',
      },
      {
        icon: '⚡',
        title: 'Ultra-rapide',
        description: 'Livraison express en 30 minutes',
      },
      {
        icon: '🛡️',
        title: 'Protégé',
        description: 'Documents protégés et assurés',
      },
    ],
    categories: [
    { name: 'Contrats', emoji: '📋' },
  { name: 'Factures', emoji: '🧾' },
  { name: 'Documents administratifs', emoji: '🏛️' },
  { name: 'Documents bancaires', emoji: '🏦' },
  { name: 'Documents médicaux', emoji: '🏥' },
  { name: 'Documents juridiques', emoji: '⚖️' },
  { name: 'Courriers', emoji: '✉️' },
  { name: 'Certificats', emoji: '🎓' },
  { name: 'Dossiers', emoji: '📁' },
  { name: 'Livraison express', emoji: '⚡' },
    ],
   vendors: [
  {
    id: 'impression-marrakech',
    name: 'impression marrakech',
    brand: 'Impression Marrakech',
    logo: '🖨️',
    logoUrl: '/logos/documents/livraison marrakech a domicile FAV_ICON_ALPHA.png',
    logoAlt: 'Impression Marrakech',
    description:
      "Service d'impression Marrakech rapide pour documents professionnels et personnels. Livreur Marrakech récupère vos impressions couleur ou noir et blanc, flyers, dossiers, affiches et supports administratifs puis assure une livraison à domicile, au bureau, à l'hôtel ou au riad partout à Marrakech."
  },
  {
    id: 'photocopie-marrakech',
    name: 'photocopie marrakech',
    brand: 'Photocopie Marrakech',
    logo: '📄',
    logoUrl: '/logos/documents/livraison marrakech a domicile photocopie marrakech.png',
    logoAlt: 'Photocopie Marrakech',
    description:
      "Service de photocopie Marrakech pour copies A4, A3, couleur et noir et blanc avec livraison rapide à domicile. Livreur Marrakech vous permet de commander vos photocopies, dossiers administratifs et documents professionnels sans vous déplacer."
  },
  {
    id: 'scan-documents-marrakech',
    name: 'scan de documents marrakech',
    brand: 'Scan de Documents Marrakech',
    logo: '📠',
    logoUrl: '/logos/documents/livraison marrakech a domicile Impression noir et blanc Marrakech.png',
    logoAlt: 'Scan de Documents Marrakech',
    description:
      "Scan documents Marrakech pour numérisation de contrats, pièces administratives, dossiers professionnels et documents importants. Profitez d'un service rapide de numérisation avec récupération et livraison à domicile par Livreur Marrakech."
  },
  {
    id: 'reliure-marrakech',
    name: 'reliure marrakech',
    brand: 'Reliure Marrakech',
    logo: '📚',
    logoUrl: '/logos/documents/livraison marrakech a domicile impression-marrakech.png',
    logoAlt: 'Reliure Marrakech',
    description:
      "Service de reliure Marrakech pour mémoires, rapports, thèses, dossiers scolaires et documents professionnels. Livreur Marrakech récupère vos documents et assure une livraison rapide après impression et finition."
  },
  {
    id: 'plastification-marrakech',
    name: 'plastification marrakech',
    brand: 'Plastification Marrakech',
    logo: '🪪',
    logoUrl: '/logos/documents/livraison marrakech a domicile papeterie-chatr.jfif',
    logoAlt: 'Plastification Marrakech',
    description:
      "Plastification Marrakech pour cartes, certificats, documents administratifs, badges et supports professionnels. Service rapide avec livraison à domicile partout à Marrakech grâce à Livreur Marrakech."
  },
  {
    id: 'impression-a4-a3-marrakech',
    name: 'impression a4 a3 marrakech',
    brand: 'Impression A4 / A3 Marrakech',
    logo: '📑',
    logoUrl: '/logos/documents/livraison marrakech a domicile print-house.png',
    logoAlt: 'Impression A4 A3 Marrakech',
    description:
      "Impression A4 et A3 Marrakech professionnelle pour flyers, affiches, plans, présentations, dossiers administratifs et documents d'entreprise. Livreur Marrakech assure la récupération et la livraison rapide de vos impressions partout dans la ville."
  },
],
    bgGradient: 'from-indigo-400 via-blue-500 to-cyan-600',
  },
  boulangerie: {
    slug: 'boulangerie',
    title: 'Livraison de BOULANGERIE',
    titleColor: 'text-yellow-600',
    description: 'Du pain frais et des pâtisseries livrés chaud chez vous.',
    deliveryTime: '15-30 min',
    heroImage: '🥖',
    features: [
      {
        icon: '🥐',
        title: 'Frais chaque jour',
        description: 'Produits faits maison chaque jour',
      },
      {
        icon: '😋',
        title: 'Délicieux',
        description: 'Les meilleures recettes traditionnelles',
      },
      {
        icon: '🚀',
        title: 'Livraison ultra-rapide',
        description: 'Chaud et frais à votre porte',
      },
      {
        icon: '🎂',
        title: 'Gâteaux personnalisés',
        description: 'Gâteaux et pâtisseries sur commande',
      },
    ],
    categories: [
       { name: 'Pain', emoji: '🍞' },
  { name: 'Viennoiseries', emoji: '🥐' },
  { name: 'Pâtisseries', emoji: '🧁' },
  { name: 'Gâteaux', emoji: '🎂' },
  { name: 'Tartes', emoji: '🥧' },
  { name: 'Macarons', emoji: '🍬' },
  { name: 'Sandwichs', emoji: '🥪' },
  { name: 'Café', emoji: '☕' },
  { name: 'Jus frais', emoji: '🧃' },
  { name: 'Petit-déjeuner', emoji: '🍳' },
    ],
vendors: [
  {
    id: 'amoud',
    name: 'livraison amoud marrakech',
    brand: 'Amoud',
    logo: '🥖',
    logoUrl: '/logos/bakery/livraison marrakech a domicile amoud.jfif',
    logoAlt: 'Amoud brand logo',
    description:
      "Livraison Amoud Marrakech à domicile pour pains frais, viennoiseries, pâtisseries marocaines, gâteaux et produits de boulangerie. Livreur Marrakech récupère vos commandes chez Amoud et assure une livraison rapide à domicile, au bureau, à l'hôtel ou au riad partout à Marrakech."
  },
  {
    id: 'paul',
    name: 'livraison paul marrakech',
    brand: 'PAUL',
    logo: '🥐 ',
    logoUrl: '/logos/bakery/livraison marrakech a domicile paul.jfif',
    logoAlt: 'PAUL brand logo',
    description:
      "Livraison PAUL Marrakech à domicile pour pains artisanaux, croissants, viennoiseries françaises, sandwiches, pâtisseries et desserts. Profitez d'un service de livraison boulangerie Marrakech rapide avec Livreur Marrakech partout dans la ville."
  },
  {
    id: 'patisserie-amandine',
    name: 'livraison patisserie amandine marrakech',
    brand: 'Pâtisserie Amandine',
    logo: '🍰',
    logoUrl: '/logos/bakery/livraison marrakech a domicile patisserie-amandine.jpg',
    logoAlt: 'Pâtisserie Amandine brand logo',
    description:
      "Livraison Pâtisserie Amandine Marrakech pour gâteaux artisanaux, pâtisseries fines, tartes, viennoiseries et créations gourmandes. Livreur Marrakech vous apporte vos desserts et commandes pâtisserie rapidement à domicile ou sur votre lieu de travail."
  },
  {
    id: 'gontran-cherrier',
    name: 'livraison gontran cherrier marrakech',
    brand: 'Gontran Cherrier',
    logo: '🥨',
    logoUrl: '/logos/bakery/livraison marrakech a domicile gontran-cherrier.png',
    logoAlt: 'Gontran Cherrier brand logo',
    description:
      "Livraison Gontran Cherrier Marrakech pour pains artisanaux, baguettes, viennoiseries françaises, pâtisseries et créations gourmandes. Profitez d'une livraison boulangerie rapide à Marrakech avec récupération de vos commandes par Livreur Marrakech."
  },
  {
    id: 'patisserie-des-princes',
    name: 'livraison patisserie des princes marrakech',
    brand: 'Pâtisserie des Princes',
    logo: '🧁',
    logoUrl: '/logos/bakery/livraison marrakech a domicile patisserie-des-princes.png',
    logoAlt: 'Pâtisserie des Princes brand logo',
    description:
      "Livraison Pâtisserie des Princes Marrakech pour pâtisseries marocaines traditionnelles, cornes de gazelle, gâteaux, douceurs orientales et desserts raffinés. Livreur Marrakech assure une livraison rapide pour vos événements, cadeaux et envies gourmandes."
  },
  {
    id: 'charif',
    name: 'livraison boulangerie charif marrakech',
    brand: 'Boulangerie Charif',
    logo: '🍞',
    logoUrl: '/logos/bakery/livraison marrakech a domicile charif.jfif',
    logoAlt: 'Boulangerie Charif brand logo',
    description:
      "Livraison Boulangerie Charif Marrakech à domicile pour pains frais, viennoiseries, sandwiches et pâtisseries du quotidien. Commandez facilement et recevez vos produits de boulangerie rapidement grâce au service Livreur Marrakech."
  },
],
    bgGradient: 'from-yellow-400 via-amber-500 to-orange-600',
  },
};


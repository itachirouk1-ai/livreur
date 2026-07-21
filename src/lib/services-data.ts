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

export function getLocalizedServiceContent(slug: string, locale: Locale): LocalizedServiceContent {
  const service = servicesData[slug];

  if (!service) {
    return {
      title: '',
      description: '',
      deliveryTime: '',
      features: [],
      categories: [],
    };
  }

  const override = localizedServiceOverrides[slug]?.[locale];

  return {
    title: override?.title ?? service.title,
    description: override?.description ?? service.description,
    deliveryTime: override?.deliveryTime ?? service.deliveryTime,
    features: override?.features ?? service.features,
    categories: override?.categories ?? service.categories,
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
   description: `🍟 Livraison McDonald's Marrakech à domicile 24h/7j
Vous recherchez une livraison McDonald's à Marrakech rapide, fiable et disponible à toute heure ? Avec Allo Livreur Kech, profitez d'un service de livraison McDonald's à domicile partout à Marrakech. Nous récupérons votre commande directement dans le restaurant McDonald's de votre choix et nous la livrons rapidement, chaude et fraîche, à votre domicile, votre bureau, votre hôtel ou votre riad.
Que vous soyez à Guéliz, Hivernage, Agdal, Massira, M'hamid, Daoudiate, Targa, Sidi Ghanem, Palmeraie, Route de Casablanca, Route de l'Ourika ou dans la Médina, notre équipe assure une livraison McDo rapide dans tous les quartiers de Marrakech.
🍔 Commandez tous vos produits McDonald's préférés
🍔 Big Mac
🥩 Big Tasty
🍗 McChicken
🧀 Double Cheeseburger
🐟 Filet-O-Fish
🍗 Chicken McNuggets
🎁 Happy Meal
🍟 Frites
🥔 Potatoes
🍦 McFlurry
🍨 Sundae
🍰 Desserts
🥤 Boissons
🚀 Livraison McDonald's rapide partout à Marrakech
Notre service est disponible 24h/24 et 7j/7 afin de répondre à toutes vos envies. Nous assurons une livraison rapide, sécurisée et professionnelle pour tous vos repas McDonald's.
❤️ Pourquoi choisir Allo Livreur Kech ?
✅ Livraison rapide
✅ Disponible 24h/24 et 7j/7
✅ Commande simple via WhatsApp
✅ Livraison dans tous les quartiers de Marrakech
✅ Repas livré chaud et frais
✅ Service professionnel

📍 Zones desservies
📍 Guéliz
📍 Hivernage
📍 Agdal
📍 Massira
📍 M'hamid
📍 Daoudiate
📍 Targa
📍 Sidi Ghanem
📍 Palmeraie
📍 Route de Casablanca
📍 Route de l'Ourika
📍 Médina
📍 Semlalia
📍 Hay Charaf
📲 Commandez dès maintenant votre McDonald's avec Allo Livreur Kech et profitez d'une livraison rapide à domicile partout à Marrakech.`,
      },
      {
        id: 'kfc',
        name: 'Livraison KFC marrakech',
        brand: 'KFC',
        logo: '🍗',
        logoUrl: '/logos/restaurant/livraison marrakech a domicile kfc.png',
        logoAlt: 'KFC brand logo',
       description: `🍗 Livraison KFC Marrakech à domicile 24h/7j
Vous recherchez une livraison KFC à Marrakech rapide, fiable et disponible à toute heure ? Avec Allo Livreur Kech, profitez d'un service de livraison KFC à domicile partout à Marrakech. Nous récupérons votre commande directement dans le restaurant KFC de votre choix et nous la livrons rapidement, chaude, croustillante et prête à être dégustée, à votre domicile, votre bureau, votre hôtel ou votre riad.
Que vous soyez à Guéliz, Hivernage, Agdal, Massira, M'hamid, Daoudiate, Targa, Sidi Ghanem, Palmeraie, Route de Casablanca, Route de l'Ourika, Semlalia, Hay Charaf ou dans la Médina, notre équipe assure une livraison KFC rapide dans tous les quartiers de Marrakech.
🍗 Commandez tous vos produits KFC préférés
🍗 Bucket de Poulet
🍗 Hot Wings
🍗 Tenders
🍔 Zinger Burger
🍔 Colonel Burger
🌯 Twister
🍟 Frites
🧀 Cheese Fries
🥗 Salades
🥤 Boissons
🍦 Glaces
🍰 Desserts
🥤 Menus & Combos
🚀 Livraison KFC rapide partout à Marrakech
Notre service de livraison KFC Marrakech est disponible 24h/24 et 7j/7 afin de satisfaire toutes vos envies de poulet frit. Nous assurons une livraison rapide, sécurisée et professionnelle afin que votre commande arrive toujours chaude et croustillante. Que vous souhaitiez un repas en famille, un déjeuner au bureau, un dîner entre amis ou une envie gourmande en soirée, Allo Livreur Kech est votre partenaire de confiance pour la livraison KFC à domicile à Marrakech.
❤️ Pourquoi choisir Allo Livreur Kech ?
✅ Livraison rapide
✅ Disponible 24h/24 et 7j/7
✅ Commande simple via WhatsApp
✅ Livraison dans tous les quartiers de Marrakech
✅ Poulet livré chaud et croustillant
✅ Service professionnel
✅ Livraison à domicile, au bureau, à l'hôtel et au riad
📍 Zones desservies
📍 Guéliz
📍 Hivernage
📍 Agdal
📍 Massira
📍 M'hamid
📍 Daoudiate
📍 Targa
📍 Sidi Ghanem
📍 Palmeraie
📍 Route de Casablanca
📍 Route de l'Ourika
📍 Médina
📍 Semlalia
📍 Hay Charaf
📲 Commandez dès maintenant votre KFC avec Allo Livreur Kech et profitez d'une livraison KFC rapide à domicile partout à Marrakech. Savourez vos Buckets, Zinger Burgers, Hot Wings, Tenders, Twisters, frites et desserts préférés sans quitter votre maison grâce à notre service de livraison disponible tous les jours, 24h/24 et 7j/7.`}
      ,
      {
        id: 'burgerking',
        name: 'livraison burger king marrakech',
        brand: 'Burger King',
        logo: '👑',
        logoUrl: '/logos/restaurant/livraison marrakech a domicile  burger king.png',
        logoAlt: 'Burger King brand logo',
       description: `👑 Livraison Burger King Marrakech à domicile 24h/7j
Vous recherchez une livraison Burger King à Marrakech rapide, fiable et disponible à toute heure ? Avec Allo Livreur Kech, profitez d'un service de livraison Burger King à domicile partout à Marrakech. Nous récupérons votre commande directement dans le restaurant Burger King de votre choix et nous la livrons rapidement, chaude et savoureuse, à votre domicile, votre bureau, votre hôtel ou votre riad.
Que vous soyez à Guéliz, Hivernage, Agdal, Massira, M'hamid, Daoudiate, Targa, Sidi Ghanem, Palmeraie, Route de Casablanca, Route de l'Ourika, Semlalia, Hay Charaf ou dans la Médina, notre équipe assure une livraison Burger King rapide dans tous les quartiers de Marrakech.
🍔 Commandez tous vos produits Burger King préférés
👑 Whopper
🧀 Double Whopper
🍗 Chicken Royale
🥓 Steakhouse
🌶️ Spicy Chicken
🧀 Cheeseburger
🍔 Hamburger
🍟 Frites
🧅 Onion Rings
🥗 Salades
🥤 Boissons
🍦 Desserts
🥤 Menus & Combos
🚀 Livraison Burger King rapide partout à Marrakech
Notre service de livraison Burger King Marrakech est disponible 24h/24 et 7j/7 afin de satisfaire toutes vos envies de burgers grillés à la flamme. Nous assurons une livraison rapide, sécurisée et professionnelle afin que votre commande arrive toujours chaude et fraîche. Que vous souhaitiez un déjeuner, un dîner, un repas entre amis ou un menu en famille, Allo Livreur Kech est votre partenaire de confiance pour la livraison Burger King à domicile à Marrakech.
❤️ Pourquoi choisir Allo Livreur Kech ?
✅ Livraison rapide
✅ Disponible 24h/24 et 7j/7
✅ Commande simple via WhatsApp
✅ Livraison dans tous les quartiers de Marrakech
✅ Burgers livrés chauds et savoureux
✅ Service professionnel
✅ Livraison à domicile, au bureau, à l'hôtel et au riad
📍 Zones desservies
📍 Guéliz
📍 Hivernage
📍 Agdal
📍 Massira
📍 Mhamid
📍 Daoudiate
📍 Targa
📍 Sidi Ghanem
📍 Palmeraie
📍 Route de Casablanca
📍 Route de l'Ourika
📍 Médina
📍 Semlalia
📍 Hay Charaf
📲 Commandez dès maintenant votre Burger King avec Allo Livreur Kech et profitez d'une livraison Burger King rapide à domicile partout à Marrakech. Savourez vos Whoppers, Chicken Royale, Steakhouse, Onion Rings, frites et desserts préférés sans quitter votre maison grâce à notre service de livraison disponible tous les jours, 24h/24 et 7j/7.`,}
,
      {
        id: 'dominos',
        name: 'livraison Domino\'s Pizza marrakech',
        brand: "Domino's",
        logo: '🍕',
        logoUrl: '/logos/restaurant/livraison marrakech a domicile  Domino\'s.png',
        logoAlt: "Domino's brand logo",
        description: `🍕 Livraison Domino's Pizza Marrakech à domicile 24h/7j
Vous recherchez une livraison Domino's Pizza à Marrakech rapide, fiable et disponible à toute heure ? Avec Allo Livreur Kech, profitez d'un service de livraison Domino's Pizza à domicile partout à Marrakech. Nous récupérons votre commande directement dans le restaurant Domino's Pizza de votre choix et nous la livrons rapidement, chaude, croustillante et prête à être dégustée, à votre domicile, votre bureau, votre hôtel ou votre riad.
Commandez les célèbres pizzas Domino's, les Chicken Wings, le Garlic Bread, les desserts, les boissons et toutes les spécialités de la carte Domino's sans quitter votre maison. Que vous soyez seul, en famille ou entre amis, Domino's Pizza propose un large choix de pizzas classiques, gourmandes, spéciales, végétariennes et personnalisables pour satisfaire toutes les envies.
Notre service de livraison Domino's Marrakech dessert tous les quartiers de la ville : Guéliz, Hivernage, Agdal, Massira, M'hamid, Daoudiate, Targa, Sidi Ghanem, Palmeraie, Route de Casablanca, Route de l'Ourika, Semlalia, Hay Charaf, Médina et bien d'autres. Votre commande est livrée rapidement à votre domicile, votre bureau, votre hôtel ou votre riad avec un service professionnel et sécurisé.
🍕 Commandez toutes vos spécialités Domino's Pizza préférées
🍕 Pepperoni
🧀 Margherita
🍗 Chicken BBQ
🥩 Extravaganza
🌶️ Spicy Pizza
🧀 4 Fromages
🥬 Veggie Pizza
🍗 Chicken Wings
🧄 Garlic Bread
🥗 Salades
🥤 Boissons
🍪 Cookies
🍰 Desserts
🥤 Menus & Offres
🚀 Livraison Domino's Pizza rapide partout à Marrakech
Notre service de livraison Domino's Pizza Marrakech est disponible 24h/24 et 7j/7 afin de satisfaire toutes vos envies de pizza. Nous assurons une livraison rapide, sécurisée et professionnelle afin que votre commande arrive toujours chaude et croustillante. Que vous souhaitiez une pizza pour le déjeuner, le dîner, une soirée entre amis, un repas en famille ou une commande tard le soir, Allo Livreur Kech est votre partenaire de confiance pour la livraison Domino's Pizza à Marrakech.
❤️ Pourquoi choisir Allo Livreur Kech ?
✅ Livraison rapide
✅ Disponible 24h/24 et 7j/7
✅ Commande simple via WhatsApp
✅ Livraison dans tous les quartiers de Marrakech
✅ Pizzas livrées chaudes et croustillantes
✅ Service professionnel
✅ Livraison à domicile, au bureau, à l'hôtel et au riad
✅ Service rapide et sécurisé
📍 Zones desservies
📍 Guéliz
📍 Hivernage
📍 Agdal
📍 Massira
📍 M'hamid
📍 Daoudiate
📍 Targa
📍 Sidi Ghanem
📍 Palmeraie
📍 Route de Casablanca
📍 Route de l'Ourika
📍 Médina
📍 Semlalia
📍 Hay Charaf
⭐ Pourquoi commander Domino's Pizza avec Allo Livreur Kech ?
Grâce à Allo Livreur Kech, commander Domino's Pizza à Marrakech devient simple, rapide et pratique. Nous récupérons votre commande directement au restaurant Domino's Pizza afin de garantir la fraîcheur, la qualité et le goût authentique de chaque pizza. Que vous ayez envie d'une Pepperoni, d'une Margherita, d'une Chicken BBQ, d'une 4 Fromages, d'une Veggie Pizza ou d'une Extravaganza, notre équipe assure une livraison rapide partout à Marrakech. Nous livrons également vos Chicken Wings, Garlic Bread, Cookies, desserts et boissons directement chez vous, au bureau, dans votre hôtel ou votre riad.
📲 Commandez dès maintenant votre Domino's Pizza avec Allo Livreur Kech et profitez d'une livraison Domino's Pizza rapide à domicile partout à Marrakech. Savourez vos pizzas préférées, vos Chicken Wings, votre Garlic Bread, vos desserts et vos boissons grâce à notre service de livraison disponible tous les jours, 24h/24 et 7j/7.`,
},
      {
        id: 'papa-johns',
        name: 'livraison papa johns marrakech',
        brand: 'Papa John\'s',
        logo: '🍕',
        logoUrl: '/logos/restaurant/livraison marrakech a domicile  papa johns.png',
        logoAlt: 'Papa John\'s brand logo',
        description: `🍕 Livraison Papa John\'s Marrakech à domicile 24h/7j
Vous recherchez une livraison Papa John\'s à Marrakech rapide, fiable et disponible à toute heure ? Avec Allo Livreur Kech, profitez d'un service de livraison Papa John\'s à domicile partout à Marrakech. Nous récupérons votre commande directement dans le restaurant Papa John\'s de votre choix et nous la livrons rapidement, chaude, savoureuse et prête à être dégustée, à votre domicile, votre bureau, votre hôtel, votre riad ou votre résidence. Que vous soyez à Guéliz, Hivernage, Agdal, Massira, M'hamid, Daoudiate, Targa, Sidi Ghanem, Palmeraie, Route de Casablanca, Route de l'Ourika, Semlalia, Victor Hugo, Amerchich, Hay Charaf ou dans la Médina, notre équipe assure une livraison Papa John\'s rapide dans tous les quartiers de Marrakech.
🍕 Commandez toutes vos pizzas Papa John\'s préférées
🍕 Pepperoni Pizza
🧀 Four Cheese Pizza
🥩 Meat Feast
🍗 BBQ Chicken Pizza
🌶️ Spicy Chicken Pizza
🍄 Veggie Pizza
🥓 Super Papa\'s
🍕 Margherita
🥖 Garlic Bread
🧀 Cheese Sticks
🍗 Chicken Wings
🥗 Salades
🍟 Frites
🥤 Boissons
🍰 Desserts
🍨 Glaces
👨‍👩‍👧 Menus Familiaux
🚀 Livraison Papa John\'s rapide partout à Marrakech
Notre service de livraison Papa John\'s Marrakech est disponible 24h/24 et 7j/7 afin de satisfaire toutes vos envies de pizza. Chaque commande est récupérée directement auprès du restaurant Papa John\'s afin de garantir une pizza chaude, une pâte moelleuse, des ingrédients frais et un fromage fondant. Que vous souhaitiez une pizza pour un déjeuner, un dîner, une soirée entre amis, un repas en famille, un anniversaire ou un match de football, Allo Livreur Kech assure une livraison rapide, professionnelle et sécurisée partout à Marrakech. Nous livrons également les hôtels, les riads, les bureaux, les appartements, les villas, les résidences et tous les établissements de Marrakech.
❤️ Pourquoi choisir Allo Livreur Kech ?
✅ Livraison Papa John\'s rapide
✅ Disponible 24h/24 et 7j/7
✅ Commande simple via WhatsApp
✅ Livraison dans tous les quartiers de Marrakech
✅ Pizzas livrées chaudes et fraîches
✅ Livraison à domicile, au bureau, à l'hôtel et au riad
✅ Service professionnel et sécurisé
✅ Temps de livraison optimisé
📍 Zones desservies
📍 Guéliz
📍 Hivernage
📍 Agdal
📍 Massira
📍 M'hamid
📍 Daoudiate
📍 Targa
📍 Sidi Ghanem
📍 Route de Casablanca
📍 Route de l'Ourika
📍 Palmeraie
📍 Médina
📍 Semlalia
📍 Victor Hugo
📍 Amerchich
📍 Hay Charaf
📲 Commandez dès maintenant votre Papa John\'s avec Allo Livreur Kech et profitez d'une livraison Papa John\'s rapide à domicile partout à Marrakech. Que vous recherchiez une livraison Papa John\'s Marrakech, une livraison pizza Marrakech, une pizza à domicile, un livreur pizza ou une livraison rapide de pizzas à Marrakech, notre équipe est disponible 24h/24 et 7j/7 pour vous livrer vos pizzas préférées directement chez vous, chaudes, fraîches et prêtes à être dégustées.`,},
      {
        id: 'tacos-de-lyon',
        name: 'livraison tacos de lyon marrakech',
        brand: 'Tacos de Lyon',
        logo: '🌮',
        logoUrl: '/logos/restaurant/livraison marrakech a domicile  tacos de lyon.png',
        logoAlt: 'Tacos de Lyon brand logo',
        description: `🌮 Livraison Tacos de Lyon Marrakech à domicile 24h/7j
Vous recherchez une livraison Tacos de Lyon à Marrakech rapide, fiable et disponible à toute heure ? Avec Allo Livreur Kech, profitez d'un service de livraison Tacos de Lyon à domicile partout à Marrakech. Nous récupérons votre commande directement dans le restaurant Tacos de Lyon de votre choix et nous la livrons rapidement, chaude et généreusement garnie, à votre domicile, votre bureau, votre hôtel, votre riad ou votre résidence. Que vous soyez à Guéliz, Hivernage, Agdal, Massira, M'hamid, Daoudiate, Targa, Sidi Ghanem, Palmeraie, Route de Casablanca, Route de l'Ourika, Semlalia, Victor Hugo, Amerchich, Hay Charaf ou dans la Médina, notre équipe assure une livraison Tacos de Lyon rapide dans tous les quartiers de Marrakech.
🌮 Commandez tous vos Tacos de Lyon préférés
🌮 French Tacos
🥩 Tacos Bœuf
🍗 Tacos Poulet
🌭 Tacos Merguez
🥓 Tacos Mixte
🧀 Sauce Fromagère
🍟 Frites
🥓 Nuggets
🧀 Mozzarella Sticks
🥗 Salades
🥤 Boissons
🍰 Desserts
🥤 Menus & Formules
🚀 Livraison Tacos de Lyon rapide partout à Marrakech
Notre service de livraison Tacos de Lyon Marrakech est disponible 24h/24 et 7j/7 afin de satisfaire toutes vos envies de tacos français. Chaque commande est récupérée directement auprès du restaurant afin de garantir des tortillas chaudes, une viande savoureuse, du fromage fondant et des ingrédients toujours frais. Que vous souhaitiez un déjeuner rapide, un dîner, un repas entre amis, une soirée en famille ou une envie gourmande tard dans la nuit, Allo Livreur Kech assure une livraison rapide, professionnelle et sécurisée partout à Marrakech. Nous livrons également les hôtels, les riads, les bureaux, les appartements, les villas, les résidences et tous les établissements de Marrakech.
❤️ Pourquoi choisir Allo Livreur Kech ?
✅ Livraison Tacos de Lyon rapide
✅ Disponible 24h/24 et 7j/7
✅ Commande simple via WhatsApp
✅ Livraison dans tous les quartiers de Marrakech
✅ Tacos livrés chauds et généreux
✅ Livraison à domicile, au bureau, à l'hôtel et au riad
✅ Service professionnel et sécurisé
✅ Temps de livraison optimisé
📍 Zones desservies
📍 Guéliz
📍 Hivernage
📍 Agdal
📍 Massira
📍 M'hamid
📍 Daoudiate
📍 Targa
📍 Sidi Ghanem
📍 Route de Casablanca
📍 Route de l'Ourika
📍 Palmeraie
📍 Médina
📍 Semlalia
📍 Victor Hugo
📍 Amerchich
📍 Hay Charaf
📲 Commandez dès maintenant votre Tacos de Lyon avec Allo Livreur Kech et profitez d'une livraison Tacos de Lyon rapide à domicile partout à Marrakech. Que vous recherchiez une livraison tacos Marrakech, une livraison Tacos de Lyon Marrakech, une livraison French Tacos, une livraison fast-food Marrakech ou une livraison à domicile disponible 24h/24, notre équipe est prête à vous livrer vos tacos, frites, boissons et menus préférés directement chez vous, rapidement et toujours bien chauds.`,},
      {
        id: 'crusty',
        name: 'livraison crusty marrakech',
        brand: 'Crusty',
        logo: '🥖',
        logoUrl: '/logos/restaurant/livraison marrakech a domicile crusty.jfif',
        logoAlt: 'Crusty brand logo',
       description: `🥪 Livraison Crusty Marrakech à domicile 24h/7j
Vous recherchez une livraison Crusty à Marrakech rapide, fiable et disponible à toute heure ? Avec Allo Livreur Kech, profitez d'un service de livraison Crusty à domicile partout à Marrakech. Nous récupérons votre commande directement chez Crusty et nous la livrons rapidement, chaude et savoureuse, à votre domicile, votre bureau, votre hôtel ou votre riad.
Crusty est l'adresse idéale pour les amateurs de sandwichs gourmands, burgers artisanaux, paninis, wraps, tacos, salades fraîches et menus généreux. Préparés avec du pain croustillant, des ingrédients frais, des viandes de qualité, des sauces maison et des légumes soigneusement sélectionnés, les repas Crusty séduisent tous les gourmands à Marrakech.
Que vous soyez à Guéliz, Hivernage, Agdal, Massira, M'hamid, Daoudiate, Targa, Sidi Ghanem, Palmeraie, Route de Casablanca, Route de l'Ourika, Semlalia, Hay Charaf ou dans la Médina, notre équipe assure une livraison Crusty rapide dans tous les quartiers de Marrakech.
🥪 Commandez tous vos produits Crusty préférés
🍔 Burgers Artisanaux
🥪 Sandwichs Gourmands
🌯 Wraps
🥙 Paninis
🌮 Tacos
🍗 Chicken Crispy
🥩 Sandwichs Steak
🧀 Burgers au Fromage
🍟 Frites
🥗 Salades
🥤 Boissons
🍰 Desserts
🥤 Menus & Formules
🚀 Livraison Crusty rapide partout à Marrakech
Notre service de livraison Crusty Marrakech est disponible 24h/24 et 7j/7 afin de satisfaire toutes vos envies. Nous assurons une livraison rapide, sécurisée et professionnelle afin que votre commande arrive toujours chaude et prête à être dégustée. Que vous souhaitiez un déjeuner, un dîner, un repas entre amis ou une pause gourmande, Allo Livreur Kech est votre partenaire de confiance pour la livraison Crusty à domicile à Marrakech.
❤️ Pourquoi choisir Allo Livreur Kech ?
✅ Livraison rapide
✅ Disponible 24h/24 et 7j/7
✅ Commande simple via WhatsApp
✅ Livraison dans tous les quartiers de Marrakech
✅ Repas livrés chauds et savoureux
✅ Service professionnel
✅ Livraison à domicile, au bureau, à l'hôtel et au riad
✅ Service rapide et sécurisé
📍 Zones desservies
📍 Guéliz
📍 Hivernage
📍 Agdal
📍 Massira
📍 M'hamid
📍 Daoudiate
📍 Targa
📍 Sidi Ghanem
📍 Palmeraie
📍 Route de Casablanca
📍 Route de l'Ourika
📍 Médina
📍 Semlalia
📍 Hay Charaf
⭐ Pourquoi commander Crusty avec Allo Livreur Kech ?
Grâce à Allo Livreur Kech, commander Crusty à Marrakech devient simple, rapide et pratique. Nous récupérons votre commande directement chez Crusty afin de préserver toute la qualité, la fraîcheur et le goût de vos sandwichs, burgers et menus préférés. Que vous ayez envie d'un burger artisanal, d'un sandwich gourmand, d'un wrap, d'un panini ou d'un tacos généreux, nous assurons une livraison rapide partout à Marrakech.
📲 Commandez dès maintenant votre Crusty avec Allo Livreur Kech et profitez d'une livraison Crusty rapide à domicile partout à Marrakech. Savourez vos burgers artisanaux, sandwichs, wraps, paninis, tacos, frites et desserts préférés grâce à notre service de livraison disponible tous les jours, 24h/24 et 7j/7.`,
},
      {
        id: 'otacos',
        name: 'livraison o\'tacos marrakech',
        brand: "O'Tacos",
        logo: '🌮',
        logoUrl: '/logos/restaurant/livraison marrakech a domicile o\'tacos.png',
        logoAlt: "O'Tacos brand logo",
       description: `🌮 Livraison O'Tacos Marrakech à domicile 24h/7j
Vous recherchez une livraison O'Tacos à Marrakech rapide, fiable et disponible à toute heure ? Avec Allo Livreur Kech, profitez d'un service de livraison O'Tacos à domicile partout à Marrakech. Nous récupérons votre commande directement dans le restaurant O'Tacos de votre choix et nous la livrons rapidement, chaude et prête à être dégustée, à votre domicile, votre bureau, votre hôtel ou votre riad.
O'Tacos est la référence du célèbre French Tacos avec ses tortillas généreusement garnies de viandes savoureuses, de fromage fondant, de la célèbre sauce fromagère O'Tacos et d'un large choix d'ingrédients. Que vous souhaitiez composer votre propre tacos ou choisir une recette signature, Allo Livreur Kech vous permet de profiter de toute la carte O'Tacos sans quitter votre domicile.
Que vous soyez à Guéliz, Hivernage, Agdal, Massira, M'hamid, Daoudiate, Targa, Sidi Ghanem, Palmeraie, Route de Casablanca, Route de l'Ourika, Semlalia, Hay Charaf ou dans la Médina, notre équipe assure une livraison O'Tacos rapide dans tous les quartiers de Marrakech.
🌮 Commandez tous vos produits O'Tacos préférés
🌮 French Tacos
🥩 Tacos Steak
🍗 Tacos Poulet
🌶️ Tacos Spicy
🧀 Sauce Fromagère
🍟 Frites
🍗 Nuggets
🧅 Onion Rings
🥗 Salades
🥤 Boissons
🍰 Desserts
🍪 Cookies
🥤 Menus & Formules
🚀 Livraison O'Tacos rapide partout à Marrakech
Notre service de livraison O'Tacos Marrakech est disponible 24h/24 et 7j/7 afin de satisfaire toutes vos envies de tacos. Nous assurons une livraison rapide, sécurisée et professionnelle afin que votre commande arrive toujours chaude, généreuse et pleine de saveurs. Que ce soit pour un déjeuner, un dîner, un repas entre amis, une soirée ou une envie gourmande tard dans la nuit, Allo Livreur Kech est votre partenaire de confiance pour la livraison O'Tacos à domicile à Marrakech.
❤️ Pourquoi choisir Allo Livreur Kech ?
✅ Livraison rapide
✅ Disponible 24h/24 et 7j/7
✅ Commande simple via WhatsApp
✅ Livraison dans tous les quartiers de Marrakech
✅ Tacos livrés chauds et savoureux
✅ Service professionnel
✅ Livraison à domicile, au bureau, à l'hôtel et au riad
✅ Service rapide et sécurisé
📍 Zones desservies
📍 Guéliz
📍 Hivernage
📍 Agdal
📍 Massira
📍 M'hamid
📍 Daoudiate
📍 Targa
📍 Sidi Ghanem
📍 Palmeraie
📍 Route de Casablanca
📍 Route de l'Ourika
📍 Médina
📍 Semlalia
📍 Hay Charaf
⭐ Pourquoi commander O'Tacos avec Allo Livreur Kech ?
Grâce à Allo Livreur Kech, commander O'Tacos à Marrakech devient simple, rapide et pratique. Nous récupérons votre commande directement au restaurant afin de préserver la qualité, la fraîcheur et le goût authentique de votre French Tacos. Que vous choisissiez un tacos au poulet, au steak, plusieurs viandes, avec la célèbre sauce fromagère, des frites, des nuggets ou un menu complet, notre équipe assure une livraison rapide partout à Marrakech. Nous livrons également vos boissons, desserts et menus O'Tacos directement chez vous, à votre bureau, dans votre hôtel ou votre riad.
Notre objectif est de vous offrir la meilleure expérience de livraison O'Tacos Marrakech avec un service rapide, professionnel et disponible tous les jours. Plus besoin de vous déplacer ou d'attendre longtemps, il suffit de nous envoyer votre commande via WhatsApp et notre livreur s'occupe du reste. Nous assurons la livraison O'Tacos dans tous les quartiers de Marrakech avec un suivi rapide et un service de qualité.
📲 Commandez dès maintenant votre O'Tacos avec Allo Livreur Kech et profitez d'une livraison O'Tacos rapide à domicile partout à Marrakech. Savourez vos French Tacos, frites, nuggets, desserts et boissons préférés grâce à notre service de livraison disponible tous les jours, 24h/24 et 7j/7.`,}
,
      {
        id: 'pizza-hut',
        name: 'livraison pizza hut marrakech',
        brand: 'Pizza Hut',
        logo: '🍕',
        logoUrl: '/logos/restaurant/livraison marrakech a domicile pizza hut.png',
        logoAlt: 'Pizza Hut brand logo',
       description: `🍕 Livraison Pizza Hut Marrakech à domicile 24h/7j
Vous recherchez une livraison Pizza Hut à Marrakech ou une livraison pizza à domicile rapide, fiable et disponible à toute heure ? Avec Allo Livreur Kech, profitez d'un service de livraison pizza Marrakech disponible 24h/24 et 7j/7. Nous récupérons votre commande directement chez Pizza Hut Marrakech et nous vous livrons vos pizzas préférées rapidement, chaudes, croustillantes et prêtes à être dégustées. Que ce soit pour un déjeuner, un dîner, une soirée entre amis, un repas en famille, une fête d'anniversaire, un match de football ou une envie de pizza tard le soir, notre équipe assure une livraison rapide partout à Marrakech. Plus besoin de vous déplacer ou d'attendre longtemps, il vous suffit de commander et notre livreur s'occupe du reste. Nous livrons votre commande à votre domicile, votre appartement, votre villa, votre bureau, votre hôtel, votre riad ou tout autre lieu de votre choix. Que vous soyez à Guéliz, Hivernage, Agdal, Massira, M'hamid, Daoudiate, Targa, Sidi Ghanem, Palmeraie, Route de Casablanca, Route de l'Ourika, Semlalia, Victor Hugo, Amerchich, Hay Charaf ou dans la Médina, Allo Livreur Kech assure une livraison pizza rapide dans tous les quartiers de Marrakech.
🍕 Commandez toutes vos pizzas Pizza Hut préférées
🍕 Pepperoni Lovers
🧀 Quatre Fromages
🥩 Meat Lovers
🍗 Chicken Supreme
🌶️ Spicy Chicken
🥓 BBQ Chicken
🍕 Super Supreme
🧀 Cheese Lovers
🍄 Pizza Végétarienne
🥖 Garlic Bread
🍗 Chicken Wings
🧀 Mozzarella Sticks
🥗 Salades
🍟 Frites
🥤 Boissons
🍰 Desserts
🍨 Glaces
👨‍👩‍👧 Menus Familiaux
🚀 Livraison Pizza Hut rapide partout à Marrakech
Notre service de livraison Pizza Hut Marrakech est disponible tous les jours, 24h/24 et 7j/7, afin de satisfaire toutes vos envies de pizza. Chaque commande est récupérée directement auprès du restaurant Pizza Hut pour garantir une qualité optimale, une pizza chaude, un fromage fondant et une pâte toujours croustillante. Nous assurons une livraison rapide, professionnelle et sécurisée afin que vous puissiez profiter de votre repas sans attendre. Que vous commandiez une pizza individuelle, une pizza familiale, plusieurs pizzas pour une soirée ou un menu complet avec boissons et desserts, notre équipe veille à ce que votre commande arrive dans les meilleures conditions. Nous assurons également la livraison de pizzas pour les entreprises, les hôtels, les riads, les bureaux, les appartements, les résidences, les maisons d'hôtes et tous les établissements situés à Marrakech.
❤️ Pourquoi choisir Allo Livreur Kech ?
✅ Livraison Pizza Hut rapide
✅ Livraison pizza Marrakech 24h/24 et 7j/7
✅ Commande simple via WhatsApp
✅ Livraison dans tous les quartiers de Marrakech
✅ Pizzas livrées chaudes et croustillantes
✅ Livraison à domicile, au bureau, à l'hôtel et au riad
✅ Service professionnel et sécurisé
✅ Temps de livraison optimisé
✅ Disponible tous les jours de la semaine
📍 Zones desservies
📍 Guéliz
📍 Hivernage
📍 Agdal
📍 Massira
📍 M'hamid
📍 Daoudiate
📍 Targa
📍 Sidi Ghanem
📍 Route de Casablanca
📍 Route de l'Ourika
📍 Palmeraie
📍 Médina
📍 Semlalia
📍 Victor Hugo
📍 Amerchich
📍 Hay Charaf
📲 Commandez dès maintenant votre Pizza Hut avec Allo Livreur Kech et profitez d'une livraison pizza à domicile rapide partout à Marrakech. Que vous recherchiez une livraison Pizza Hut Marrakech, une livraison pizza Marrakech, une pizza à domicile, un livreur pizza ou une livraison rapide de pizzas à Marrakech, notre équipe est disponible 24h/24 et 7j/7 pour vous apporter vos pizzas préférées directement chez vous, chaudes, fraîches et prêtes à être dégustées.`,}
,
      {
        id: 'quick',
        name: 'livraison quick marrakech',
        brand: 'Quick',
        logo: '🍔',
        logoUrl: '/logos/restaurant/livraison marrakech a domicile quick.png',
        logoAlt: 'Quick brand logo',
        description: `🍔 Livraison Quick Marrakech à domicile 24h/7j
Vous recherchez une livraison Quick à Marrakech rapide, fiable et disponible à toute heure ? Avec Allo Livreur Kech, profitez d'un service de livraison Quick à domicile partout à Marrakech. Nous récupérons votre commande directement dans le restaurant Quick de votre choix et nous la livrons rapidement, chaude et savoureuse, à votre domicile, votre bureau, votre hôtel, votre riad ou votre résidence. Que vous soyez à Guéliz, Hivernage, Agdal, Massira, M'hamid, Daoudiate, Targa, Sidi Ghanem, Palmeraie, Route de Casablanca, Route de l'Ourika, Semlalia, Victor Hugo, Amerchich, Hay Charaf ou dans la Médina, notre équipe assure une livraison Quick rapide dans tous les quartiers de Marrakech.
🍔 Commandez tous vos produits Quick préférés
🍔 Giant
🍔 Long Chicken
🍔 Quick'N Toast
🍗 Chicken Wings
🍗 Chicken Box
🌯 Wraps
🍟 Frites
🧀 Cheese Fries
🥗 Salades
🥤 Boissons
🍦 Glaces
🍰 Desserts
🥤 Menus & Combos
🚀 Livraison Quick rapide partout à Marrakech
Notre service de livraison Quick Marrakech est disponible 24h/24 et 7j/7 afin de satisfaire toutes vos envies de burgers et de restauration rapide. Chaque commande est récupérée directement auprès du restaurant Quick afin de garantir des burgers chauds, des frites croustillantes et des produits toujours frais. Que vous souhaitiez un déjeuner rapide, un dîner en famille, un repas entre collègues, une soirée entre amis ou une envie de fast-food tard dans la nuit, Allo Livreur Kech assure une livraison rapide, professionnelle et sécurisée partout à Marrakech. Nous livrons également les hôtels, les riads, les bureaux, les appartements, les villas, les résidences et tous les établissements de Marrakech.
❤️ Pourquoi choisir Allo Livreur Kech ?
✅ Livraison Quick rapide
✅ Disponible 24h/24 et 7j/7
✅ Commande simple via WhatsApp
✅ Livraison dans tous les quartiers de Marrakech
✅ Burgers livrés chauds et frais
✅ Livraison à domicile, au bureau, à l'hôtel et au riad
✅ Service professionnel et sécurisé
✅ Temps de livraison optimisé
📍 Zones desservies
📍 Guéliz
📍 Hivernage
📍 Agdal
📍 Massira
📍 M'hamid
📍 Daoudiate
📍 Targa
📍 Sidi Ghanem
📍 Route de Casablanca
📍 Route de l'Ourika
📍 Palmeraie
📍 Médina
📍 Semlalia
📍 Victor Hugo
📍 Amerchich
📍 Hay Charaf
📲 Commandez dès maintenant votre Quick avec Allo Livreur Kech et profitez d'une livraison Quick rapide à domicile partout à Marrakech. Que vous recherchiez une livraison Quick Marrakech, une livraison burger Marrakech, une livraison fast-food Marrakech ou une livraison à domicile disponible 24h/24, notre équipe est prête à vous livrer vos burgers, sandwiches, wraps, frites et desserts préférés directement chez vous, rapidement et toujours chauds.`,
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
    'Votre pharmacie de confiance avec une large gamme de médicaments et produits de santé.',
},
{
  id: 'Pharmacie-Carre-Eden',
  name: 'Pharmacie Carré Eden',
  brand: 'Carré Eden',
  logo: '🩺',
  logoUrl: "/logos/pharmacies/pharmacie livraison marrakech a domicile parapharmacie.webp",
  logoAlt: "Carré Eden brand logo",
  description:
    'Pharmacie moderne proposant médicaments, parapharmacie et conseils professionnels.',
},
{
  id: 'Pharmacie-Gueliz',
  name: 'Pharmacie Guéliz',
  brand: 'Pharmacie Guéliz',
  logo: '⚕️',
  logoUrl: "/logos/pharmacies/pharmacie livraison marrakech a domicile parapharmacie.webp",
  logoAlt: "Pharmacie Guéliz brand logo",
  description:
    'Une pharmacie reconnue avec une large sélection de produits de santé.',
},
{
  id: 'Pharmacie-Majorelle',
  name: 'Pharmacie Majorelle',
  brand: 'Pharmacie Majorelle',
  logo: '⚕️',
  logoUrl: "/logos/pharmacies/pharmacie livraison marrakech a domicile parapharmacie.webp",
  logoAlt: "Pharmacie Majorelle brand logo",
  description:
    'Large choix de médicaments, dermocosmétiques et produits de bien-être.',
},
{
  id: 'Pharmacie-Victor-Hugo',
  name: 'Pharmacie Victor Hugo',
  brand: 'Pharmacie Victor Hugo',
  logo: '⚕️',
  logoUrl: "/logos/pharmacies/pharmacie livraison marrakech a domicile parapharmacie.webp",
  logoAlt: "Pharmacie Victor Hugo brand logo",
  description:
    'Des soins pharmaceutiques de qualité et un accompagnement personnalisé.',
},
{
  id: 'Pharmacie-Hivernage',
  name: 'Pharmacie Hivernage',
  brand: 'Pharmacie Hivernage',
  logo: '⚕️',
  logoUrl: "/logos/pharmacies/pharmacie livraison marrakech a domicile parapharmacie.webp",
  logoAlt: "Pharmacie Hivernage brand logo",
  description:
    'Produits de santé, médicaments et conseils pharmaceutiques.',
},
{
  id: 'Pharmacie-Targa',
  name: 'Pharmacie Targa',
  brand: 'Pharmacie Targa',
  logo: '⚕️',
  logoUrl: "/logos/pharmacies/pharmacie livraison marrakech a domicile parapharmacie.webp",
  logoAlt: "Pharmacie Targa brand logo",
  description:
    'Une pharmacie complète pour toute la famille.',
},
{
  id: 'Pharmacie-Menara',
  name: 'Pharmacie Ménara',
  brand: 'Pharmacie Ménara',
  logo: '⚕️',
  logoUrl: "/logos/pharmacies/pharmacie livraison marrakech a domicile parapharmacie.webp",
  logoAlt: "Pharmacie Ménara brand logo",
  description:
    'Votre partenaire santé avec une sélection de produits pharmaceutiques.',
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
          'Aswak Assalam vous propose une large sélection de produits du quotidien, des produits frais et des essentiels de la maison livrés rapidement à Marrakech.',
      },
      {
        id: 'bim',
        name: 'Livraison BIM Marrakech',
        brand: 'BIM',
        logo: '🛒',
        logoUrl: '/logos/supermarkets/livraison marrakech a domicile bim.png',
        logoAlt: 'BIM brand logo',
        description:
          'BIM offre des produits de grande consommation, des courses de proximité et des promotions régulières pour faciliter vos achats à domicile.',
      },
      {
        id: 'carrefour',
        name: 'Livraison Carrefour Marrakech',
        brand: 'Carrefour',
        logo: '🛍️',
        logoUrl: '/logos/supermarkets/livraison marrakech a domicile carrefour.png',
        logoAlt: 'Carrefour brand logo',
        description:
          'Carrefour met à votre disposition une grande variété de produits alimentaires et ménagers, livrés rapidement chez vous.',
      },
      {
        id: 'label-vie',
        name: 'Livraison Label Vie Marrakech',
        brand: 'Label Vie',
        logo: '🧺',
        logoUrl: '/logos/supermarkets/livraison marrakech a domicile label-vie.png',
        logoAlt: 'Label Vie brand logo',
        description:
          'Label Vie vous accompagne avec des produits frais, des essentiels du quotidien et une expérience de livraison pratique à Marrakech.',
      },
      {
        id: 'marjane',
        name: 'Livraison Marjane Marrakech',
        brand: 'Marjane',
        logo: '🏬',
        logoUrl: '/logos/supermarkets/livraison marrakech a domicile marjane.png',
        logoAlt: 'Marjane brand logo',
        description:
          'Marjane propose une sélection complète de produits alimentaires, boissons, produits d’entretien et bien plus encore, livrés chez vous.',
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
  id: 'flower1',
  name: 'The Bloom Room Marrakech',
  brand: 'The Bloom Room',
  logo: '💐',
  description:
    'Une fleuristerie haut de gamme proposant des bouquets élégants, des fleurs fraîches et des compositions florales pour toutes les occasions.',
},
{
  id: 'flower3',
  name: 'Jawhara Fleurs',
  brand: 'Jawhara Fleurs',
  logo: '🌺',
  description:
    'Boutique de fleurs proposant des bouquets personnalisés, des roses fraîches et des compositions florales raffinées.',
},
{
  id: 'flower4',
  name: 'Kech Flora',
  brand: 'Kech Flora',
  logo: '🌼',
  description:
    'Fleuriste reconnu offrant des fleurs fraîches, des plantes décoratives et des bouquets pour toutes les occasions.',
},
{
  id: 'flower5',
  name: 'Florajia Fleuriste',
  brand: 'Florajia Fleuriste',
  logo: '🌻',
  description:
    'Créations florales modernes, bouquets élégants et cadeaux fleuris avec un service professionnel.',
},
{
  id: 'flower7',
  name: 'Paradis of Flowers',
  brand: 'Paradis of Flowers',
  logo: '🌿',
  description:
    'Large sélection de fleurs naturelles, bouquets de luxe et compositions florales livrées rapidement.',
},
{
  id: 'flower8',
  name: 'Signature Flowers Marrakech',
  brand: 'Signature Flowers',
  logo: '🥀',
  description:
    'Fleuriste spécialisé dans les bouquets haut de gamme, les roses et les décorations florales pour tous les événements.',
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
          'La Roche-Posay propose des soins dermatologiques premium adaptés à toutes les peaux sensibles, avec une formule douce et protectrice.',
      },
      {
        id: 'bioderma',
        name: 'livraison bioderma marrakech',
        brand: 'Bioderma',
        logo: '🧴',
        logoUrl: '/logos/cosmetic/livraison marrakech a domicile bioderma.png',
        logoAlt: 'Bioderma brand logo',
        description:
          'Bioderma offre des soins visage et corps efficaces pour hydrater, apaiser et renforcer la barrière cutanée au quotidien.',
      },
      {
        id: 'cerave',
        name: 'livraison cerave marrakech',
        brand: 'CeraVe',
        logo: '🧴',
        logoUrl: '/logos/cosmetic/livraison marrakech a domicile cerave.png',
        logoAlt: 'CeraVe brand logo',
        description:
          'CeraVe propose des produits de soin enrichis en céramides pour restaurer et maintenir l appareil hydrolipidique de la peau.',
      },
      {
        id: 'kiko-milano',
        name: 'livraison kiko milano marrakech',
        brand: 'KIKO Milano',
        logo: '💄',
        logoUrl: '/logos/cosmetic/livraison marrakech a domicile kiko-milano.png',
        logoAlt: 'KIKO Milano brand logo',
        description:
          'KIKO Milano propose du maquillage tendance et des soins beauté à prix accessibles pour un look professionnel au quotidien.',
      },
      {
        id: 'marionnaud',
        name: 'livraison marionnaud marrakech',
        brand: 'Marionnaud',
        logo: '💋',
        logoUrl: '/logos/cosmetic/livraison marrakech a domicile marionnaud.png',
        logoAlt: 'Marionnaud brand logo',
        description:
          'Marionnaud propose une sélection de parfums, maquillage et soins de grandes marques pour un shopping beauté complet.',
      },
      {
        id: 'vichy',
        name: 'livraison vichy marrakech',
        brand: 'Vichy',
        logo: '💧',
        logoUrl: '/logos/cosmetic/livraison marrakech a domicile vichy.jpg',
        logoAlt: 'Vichy brand logo',
        description:
          'Vichy propose des soins dermatologiques formulés pour hydrater, fortifier et protéger les peaux fragiles.',
      },
      {
        id: 'yves-rocher',
        name: 'livraison yves rocher marrakech',
        brand: 'Yves Rocher',
        logo: '🌿',
        logoUrl: '/logos/cosmetic/livraison marrakech a domicile yves-rocher.png',
        logoAlt: 'Yves Rocher brand logo',
        description:
          'Yves Rocher combine plantes et beauté pour des soins naturels et respectueux de la peau.',
      },
      {
        id: 'flomar',
        name: 'livraison flomar marrakech',
        brand: 'Flomar',
        logo: '💄',
        logoUrl: '/logos/cosmetic/livraison marrakech a domicile flomar.jpg',
        logoAlt: 'Flomar brand logo',
        description:
          'Flomar propose des produits de maquillage professionnels pour une mise en beauté simple et raffinée.',
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
          'Un centre commercial incontournable à Guéliz avec boutiques, mode, beauté et services variés livrés avec praticité.',
      },
      {
        id: 'center-commercial-almazar',
        name: 'Livraison Centre Commercial Almazar Marrakech',
        brand: 'Centre Commercial Almazar',
        logo: '🏬',
        logoUrl: '/logos/shopping/livraison marrakech a domicile Centre Commercial Almazar.png',
        logoAlt: 'Centre Commercial Almazar brand logo',
        description:
          'Almazar regroupe plusieurs enseignes et services pour vos achats du quotidien, livrés rapidement à domicile.',
      },
      {
        id: 'm-avenue',
        name: 'Livraison M Avenue Marrakech',
        brand: 'M Avenue',
        logo: '🛒',
        logoUrl: '/logos/shopping/livraison marrakech a domicile M Avenue (Hivernage).png',
        logoAlt: 'M Avenue brand logo',
        description:
          'M Avenue propose une expérience shopping premium avec mode, beauté et accessoires dans un cadre élégant.',
      },
      {
        id: 'plaza-marrakech',
        name: 'Livraison Plaza Marrakech',
        brand: 'Plaza Marrakech',
        logo: '🛍️',
        logoUrl: '/logos/shopping/livraison marrakech a domicile Plaza Marrakech.png',
        logoAlt: 'Plaza Marrakech brand logo',
        description:
          'Plaza Marrakech offre un large choix de boutiques et produits variés pour répondre à toutes vos envies shopping.',
      },
      {
        id: 'manara-mall',
        name: 'Livraison Manara Mall Marrakech',
        brand: 'Manara Mall',
        logo: '🏬',
        logoUrl: '/logos/shopping/livraison marrakech a domicile manara-mall.png',
        logoAlt: 'Manara Mall brand logo',
        description:
          'Manara Mall vous accompagne avec des options shopping modernes, pratiques et accessibles à Marrakech.',
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
      "Amana est l'un des principaux services de livraison et d'expédition de colis au Maroc, avec une couverture nationale et des délais rapides.",
  },
  {
    id: 'chronopost',
    name: 'livraison chronopost marrakech',
    brand: 'Chronopost',
    logo: '🚚',
    logoUrl: '/logos/parcel-delivery/livraison marrakech a domicile chronopost.webp',
    logoAlt: 'Chronopost brand logo',
    description:
      "Chronopost propose des services d'expédition express de colis et de documents au Maroc et à l'international.",
  },
  {
    id: 'dhl',
    name: 'livraison dhl marrakech',
    brand: 'DHL Express',
    logo: '✈️',
    logoUrl: '/logos/parcel-delivery/livraison marrakech a domicile dhl.jfif',
    logoAlt: 'DHL Express brand logo',
    description:
      "DHL Express est spécialisé dans la livraison rapide de colis et de documents vers des destinations nationales et internationales.",
  },
  {
    id: 'fedex',
    name: 'livraison fedex marrakech',
    brand: 'FedEx',
    logo: '📮',
    logoUrl: '/logos/parcel-delivery/livraison marrakech a domicile fedex.png',
    logoAlt: 'FedEx brand logo',
    description:
      "FedEx assure des services de livraison express de colis, documents et marchandises dans le monde entier.",
  },
  {
    id: 'ups',
    name: 'livraison ups marrakech',
    brand: 'UPS',
    logo: '📫',
    logoUrl: '/logos/parcel-delivery/livraison marrakech a domicile ups marrakech.png',
    logoAlt: 'UPS brand logo',
    description:
      "UPS propose des solutions fiables d'expédition et de livraison de colis pour les particuliers et les entreprises.",
  },
  {
    id: 'aramex',
    name: 'livraison aramex marrakech',
    brand: 'Aramex',
    logo: '🚛',
    logoUrl: '/logos/parcel-delivery/livraison marrakech a domicile aramex marrakech.png',
    logoAlt: 'Aramex brand logo',
    description:
      "Aramex fournit des services de livraison express, de logistique et d'expédition de colis au Maroc et à l'international.",
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
      "Service d'impression couleur et noir et blanc à Marrakech pour tous vos documents personnels et professionnels avec livraison rapide.",
  },
  {
    id: 'photocopie-marrakech',
    name: 'photocopie marrakech',
    brand: 'Photocopie Marrakech',
    logo: '📄',
    logoUrl: '/logos/documents/livraison marrakech a domicile photocopie marrakech.png',
    logoAlt: 'Photocopie Marrakech',
    description:
      "Photocopies A4, A3, couleur et noir et blanc avec un service rapide et une livraison à domicile à Marrakech.",
  },
  {
    id: 'scan-documents-marrakech',
    name: 'scan de documents marrakech',
    brand: 'Scan de Documents Marrakech',
    logo: '📠',
    logoUrl: '/logos/documents/livraison marrakech a domicile Impression noir et blanc Marrakech.png',
    logoAlt: 'Scan de Documents Marrakech',
    description:
      "Numérisation de documents, contrats, dossiers administratifs et papiers importants avec une qualité professionnelle.",
  },
  {
    id: 'reliure-marrakech',
    name: 'reliure marrakech',
    brand: 'Reliure Marrakech',
    logo: '📚',
    logoUrl: '/logos/documents/livraison marrakech a domicile impression-marrakech.png',
    logoAlt: 'Reliure Marrakech',
    description:
      "Reliure de mémoires, rapports, thèses, dossiers administratifs et documents professionnels avec livraison rapide.",
  },
  {
    id: 'plastification-marrakech',
    name: 'plastification marrakech',
    brand: 'Plastification Marrakech',
    logo: '🪪',
    logoUrl: '/logos/documents/livraison marrakech a domicile papeterie-chatr.jfif',
    logoAlt: 'Plastification Marrakech',
    description:
      "Service de plastification de cartes, certificats, documents administratifs et supports professionnels à Marrakech.",
  },
  {
    id: 'impression-a4-a3-marrakech',
    name: 'impression a4 a3 marrakech',
    brand: 'Impression A4 / A3 Marrakech',
    logo: '📑',
    logoUrl: '/logos/documents/livraison marrakech a domicile print-house.png',
    logoAlt: 'Impression A4 A3 Marrakech',
    description:
      "Impression professionnelle en format A4 et A3 pour affiches, plans, présentations, flyers et documents administratifs.",
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
      "Amoud est une boulangerie et pâtisserie renommée proposant des pains artisanaux, viennoiseries, pâtisseries marocaines et françaises avec livraison rapide à Marrakech.",
  },
  {
    id: 'paul',
    name: 'livraison paul marrakech',
    brand: 'PAUL',
    logo: '🥐 ',
    logoUrl: '/logos/bakery/livraison marrakech a domicile paul.jfif',
    logoAlt: 'PAUL brand logo',
    description:
      "PAUL est une célèbre boulangerie française proposant pains frais, croissants, sandwiches, pâtisseries et desserts livrés rapidement à Marrakech.",
  },
  {
    id: 'patisserie-amandine',
    name: 'livraison patisserie amandine marrakech',
    brand: 'Pâtisserie Amandine',
    logo: '🍰',
    logoUrl: '/logos/bakery/livraison marrakech a domicile patisserie-amandine.jpg',
    logoAlt: 'Pâtisserie Amandine brand logo',
    description:
      "Pâtisserie Amandine propose des gâteaux artisanaux, viennoiseries, pâtisseries fines et pains de qualité avec livraison à domicile à Marrakech.",
  },
  {
    id: 'gontran-cherrier',
    name: 'livraison gontran cherrier marrakech',
    brand: 'Gontran Cherrier',
    logo: '🥨',
    logoUrl: '/logos/bakery/livraison marrakech a domicile gontran-cherrier.png',
    logoAlt: 'Gontran Cherrier brand logo',
    description:
      "Gontran Cherrier est reconnu pour ses pains artisanaux, viennoiseries françaises et créations gourmandes préparées chaque jour.",
  },
  {
    id: 'patisserie-des-princes',
    name: 'livraison patisserie des princes marrakech',
    brand: 'Pâtisserie des Princes',
    logo: '🧁',
    logoUrl: '/logos/bakery/livraison marrakech a domicile patisserie-des-princes.png',
    logoAlt: 'Pâtisserie des Princes brand logo',
    description:
      "Pâtisserie des Princes est une référence à Marrakech pour les pâtisseries marocaines, cornes de gazelle, gâteaux et douceurs traditionnelles.",
  },
  {
    id: 'charif',
    name: 'livraison boulangerie charif marrakech',
    brand: 'Boulangerie Charif',
    logo: '🍞',
    logoUrl: '/logos/bakery/livraison marrakech a domicile charif.jfif',
    logoAlt: 'Boulangerie Charif brand logo',
    description:
      "Boulangerie Charif prépare chaque jour des pains frais, viennoiseries, pâtisseries et sandwiches avec livraison rapide à Marrakech.",
  },
],
    bgGradient: 'from-yellow-400 via-amber-500 to-orange-600',
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

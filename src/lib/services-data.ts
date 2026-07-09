export interface ServiceCategory {
  name: string;
  emoji: string;
}

export interface ServiceVendor {
  id: string;
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

export const servicesData: Record<string, ServiceDetail> = {
  restaurants: {
    slug: "restaurants",
    title: "Livraison de REPAS",
    titleColor: "text-red-600",
    description: "Vos plats préférés livrés rapidement chez vous à Marrakech.",
    deliveryTime: "30-60 min",
    heroImage: "🍔",
    features: [
      {
        icon: "🚗",
        title: "Large choix de restaurants",
        description: "Des centaines de restaurants partenaires",
      },
      {
        icon: "👍",
        title: "Prix chauds et frais",
        description: "Tarifs compétitifs et qualité garantie",
      },
      {
        icon: "🌸",
        title: "Livraison rapide",
        description: "Livraison express en moins d'une heure",
      },
      {
        icon: "🎧",
        title: "Service disponible 24/7",
        description: "Commandez à tout moment du jour et de la nuit",
      },
    ],
    categories: [
      { name: "Burgers", emoji: "🍔" },
      { name: "Pizzas", emoji: "🍕" },
      { name: "Tacos", emoji: "🌮" },
      { name: "Sushi", emoji: "🍣" },
    ],
    vendors: [
      {
        id: "mcdonalds",
        name: "livraison mcdonald_s-marrakech",
        brand: "McDonald's",
        logo: "🍟",
        logoUrl: "/logos/mcdonalds.svg",
        logoAlt: "McDonald's brand logo",
        description:
          "McDonald's est une option pratique pour satisfaire vos envies de fast-food. Savourez les classiques comme les Big Mac, les frites et les Happy Meals, livrés directement à votre domicile. Que vous soyez à la recherche d'une option rapide pour la pause du midi, d'une collation en fin de soirée d'un repas familier pour toute la famille, McDonald's à cela chose chose pour tout le monde et rend facile à utiliser. Commandez maintenant et découvrez le goût emblématique de McDonald's sans quitter le confort de votre foyer.",
      },
      {
        id: "kfc",
        name: "Livraison KFC marrakech",
        brand: "KFC",
        logo: "🍗",
        logoUrl: "/logos/kfc.svg",
        logoAlt: "KFC brand logo",
        description:
          "KFC est la pour vous livrer son bon poulet frit à s'en lécher les doigts, directement sur la pas de votre porte. Choisissez parmi des seaux, des combos ou des morceaux individuels, tous dotés de l'enrobage croustillant emblématique de KFC et d'un poulet tendre et juteux. N'oubliez pas d'ajouter vos accompagnements préférés comme la purée de pommes de terre, la salade de chou ou les frites pour compléter votre repas. Que vous ayez envie d'une expérience classique de poulet frit Kentucky ou d'un festin familial satisfaisant, KFC offre des options délicieuses pour tous les goûts. Commandez maintenant et profitez des célèbres saveurs du Colonel sans quitter votre maison à Marrakech.",
      },
      {
        id: "burgerking",
        name: "livraison burger king marrakech",
        brand: "Burger King",
        logo: "👑",
        logoUrl: "/logos/burgerking.svg",
        logoAlt: "Burger King brand logo",
        description:
          "Burger King vous propose des plats grillés à la flamme, livrés frais et chauds à votre domicile. Savourez leur Whopper emblématique, explorez leur variété de burgers grillés à la flamme comme le",
      },
    ],
    bgGradient: "from-orange-400 via-orange-500 to-red-600",
  },
  pharmacies: {
    slug: "pharmacies",
    title: "Livraison de MÉDICAMENTS",
    titleColor: "text-emerald-600",
    description: "Vos médicaments livrés rapidement et discrètement chez vous.",
    deliveryTime: "20-40 min",
    heroImage: "💊",
    features: [
      {
        icon: "🏥",
        title: "Pharmacies agréées",
        description: "Réseau de pharmacies certifiées et approuvées",
      },
      {
        icon: "✓",
        title: "Livraison sécurisée",
        description: "Emballage discret et transport sécurisé",
      },
      {
        icon: "⚡",
        title: "Livraison ultra-rapide",
        description: "Commande reçue en moins de 45 minutes",
      },
      {
        icon: "🛡️",
        title: "Confidentialité garantie",
        description: "Service 100% discret et confidentiel",
      },
    ],
    categories: [
      { name: "Médicaments", emoji: "💊" },
      { name: "Vitamines", emoji: "🥗" },
      { name: "Soin", emoji: "🧴" },
      { name: "Hygiène", emoji: "🧼" },
    ],
    vendors: [
      {
        id: "pharmacy1",
        name: "Pharmacie Centrale Marrakech",
        brand: "Pharmacie Centrale",
        logo: "⚕️",
        description: "Votre pharmacie de confiance avec une large gamme de médicaments et produits de santé.",
      },
      {
        id: "pharmacy1",
        name: "Pharmacie Centrale Marrakech",
        brand: "Pharmacie Centrale",
        logo: "⚕️",
        description: "Votre pharmacie de confiance avec une large gamme de médicaments et produits de santé.",
      },
      {
        id: "pharmacy1",
        name: "Pharmacie Centrale Marrakech",
        brand: "Pharmacie Centrale",
        logo: "⚕️",
        description: "Votre pharmacie de confiance avec une large gamme de médicaments et produits de santé.",
      },
      {
        id: "pharmacy1",
        name: "Pharmacie Centrale Marrakech",
        brand: "Pharmacie Centrale",
        logo: "⚕️",
        description: "Votre pharmacie de confiance avec une large gamme de médicaments et produits de santé.",
      },
      {
        id: "pharmacy1",
        name: "Pharmacie Centrale Marrakech",
        brand: "Pharmacie Centrale",
        logo: "⚕️",
        description: "Votre pharmacie de confiance avec une large gamme de médicaments et produits de santé.",
      },
      {
        id: "pharmacy1",
        name: "Pharmacie Centrale Marrakech",
        brand: "Pharmacie Centrale",
        logo: "⚕️",
        description: "Votre pharmacie de confiance avec une large gamme de médicaments et produits de santé.",
      },
      {
        id: "pharmacy1",
        name: "Pharmacie Centrale Marrakech",
        brand: "Pharmacie Centrale",
        logo: "⚕️",
        description: "Votre pharmacie de confiance avec une large gamme de médicaments et produits de santé.",
      },
      {
        id: "pharmacy1",
        name: "Pharmacie Centrale Marrakech",
        brand: "Pharmacie Centrale",
        logo: "⚕️",
        description: "Votre pharmacie de confiance avec une large gamme de médicaments et produits de santé.",
      },
    ],
    bgGradient: "from-emerald-400 via-green-500 to-teal-600",
  },
  supermarkets: {
    slug: "supermarkets",
    title: "Livraison d'ÉPICERIE",
    titleColor: "text-blue-600",
    description: "Tous vos produits du quotidien livrés directement chez vous.",
    deliveryTime: "45-90 min",
    heroImage: "🛒",
    features: [
      {
        icon: "🏪",
        title: "Large sélection",
        description: "Des milliers de produits disponibles",
      },
      {
        icon: "💰",
        title: "Prix compétitifs",
        description: "Les meilleures offres et promotions",
      },
      {
        icon: "📦",
        title: "Livraison rapide",
        description: "Vos courses en moins de 2 heures",
      },
      {
        icon: "🚚",
        title: "Livraison fiable",
        description: "Service rapide et de qualité",
      },
    ],
    categories: [
      { name: "Fruits", emoji: "🍎" },
      { name: "Légumes", emoji: "🥬" },
      { name: "Produits laitiers", emoji: "🥛" },
      { name: "Boulangerie", emoji: "🍞" },
    ],
   vendors: [
      {
        id: "mcdonalds",
        name: "livraison mcdonald_s-marrakech",
        brand: "McDonald's",
        logo: "🍟",
        logoUrl: "/logos/mcdonalds.svg",
        logoAlt: "McDonald's brand logo",
        description:
          "McDonald's est une option pratique pour satisfaire vos envies de fast-food. Savourez les classiques comme les Big Mac, les frites et les Happy Meals, livrés directement à votre domicile. Que vous soyez à la recherche d'une option rapide pour la pause du midi, d'une collation en fin de soirée d'un repas familier pour toute la famille, McDonald's à cela chose chose pour tout le monde et rend facile à utiliser. Commandez maintenant et découvrez le goût emblématique de McDonald's sans quitter le confort de votre foyer.",
      },
      {
        id: "kfc",
        name: "Livraison KFC marrakech",
        brand: "KFC",
        logo: "🍗",
        logoUrl: "/logos/kfc.svg",
        logoAlt: "KFC brand logo",
        description:
          "KFC est la pour vous livrer son bon poulet frit à s'en lécher les doigts, directement sur la pas de votre porte. Choisissez parmi des seaux, des combos ou des morceaux individuels, tous dotés de l'enrobage croustillant emblématique de KFC et d'un poulet tendre et juteux. N'oubliez pas d'ajouter vos accompagnements préférés comme la purée de pommes de terre, la salade de chou ou les frites pour compléter votre repas. Que vous ayez envie d'une expérience classique de poulet frit Kentucky ou d'un festin familial satisfaisant, KFC offre des options délicieuses pour tous les goûts. Commandez maintenant et profitez des célèbres saveurs du Colonel sans quitter votre maison à Marrakech.",
      },
      {
        id: "burgerking",
        name: "livraison burger king marrakech",
        brand: "Burger King",
        logo: "👑",
        logoUrl: "/logos/burgerking.svg",
        logoAlt: "Burger King brand logo",
        description:
          "Burger King vous propose des plats grillés à la flamme, livrés frais et chauds à votre domicile. Savourez leur Whopper emblématique, explorez leur variété de burgers grillés à la flamme comme le",
      },
    ],
    bgGradient: "from-blue-400 via-cyan-500 to-sky-600",
  },
  flowers: {
    slug: "flowers",
    title: "Livraison de FLEURS",
    titleColor: "text-pink-600",
    description: "Les plus belles fleurs livrées directement chez vous.",
    deliveryTime: "30-45 min",
    heroImage: "🌸",
    features: [
      {
        icon: "🌹",
        title: "Large sélection",
        description: "Fleurs fraîches et magnifiques",
      },
      {
        icon: "💐",
        title: "Arrangements premium",
        description: "Bouquets créés par des professionnels",
      },
      {
        icon: "⚡",
        title: "Livraison rapide",
        description: "Livraison express en moins d'une heure",
      },
      {
        icon: "🎀",
        title: "Cadeaux spéciaux",
        description: "Emballage premium et personnalisé",
      },
    ],
    categories: [
      { name: "Roses", emoji: "🌹" },
      { name: "Tulipes", emoji: "🌷" },
      { name: "Marguerites", emoji: "🌼" },
      { name: "Bouquets", emoji: "💐" },
    ],
    vendors: [],
    bgGradient: "from-pink-400 via-rose-500 to-red-600",
  },
  cosmetics: {
    slug: "cosmetics",
    title: "Livraison de COSMÉTIQUES",
    titleColor: "text-purple-600",
    description: "Tous vos produits de beauté livrés rapidement.",
    deliveryTime: "25-40 min",
    heroImage: "💄",
    features: [
      {
        icon: "💅",
        title: "Large sélection",
        description: "Marques et produits de beauté premium",
      },
      {
        icon: "✨",
        title: "Prix compétitifs",
        description: "Meilleures offres sur les cosmétiques",
      },
      {
        icon: "🚀",
        title: "Livraison rapide",
        description: "Recevez vos produits en moins d'une heure",
      },
      {
        icon: "🛡️",
        title: "Produits authentiques",
        description: "Garantie d'authenticité et de qualité",
      },
    ],
    categories: [
      { name: "Skincare", emoji: "🧴" },
      { name: "Maquillage", emoji: "💄" },
      { name: "Parfums", emoji: "🌸" },
      { name: "Soins cheveux", emoji: "💇" },
    ],
    vendors: [
      {
        id: "mcdonalds",
        name: "livraison mcdonald_s-marrakech",
        brand: "McDonald's",
        logo: "🍟",
        logoUrl: "/logos/mcdonalds.svg",
        logoAlt: "McDonald's brand logo",
        description:
          "McDonald's est une option pratique pour satisfaire vos envies de fast-food. Savourez les classiques comme les Big Mac, les frites et les Happy Meals, livrés directement à votre domicile. Que vous soyez à la recherche d'une option rapide pour la pause du midi, d'une collation en fin de soirée d'un repas familier pour toute la famille, McDonald's à cela chose chose pour tout le monde et rend facile à utiliser. Commandez maintenant et découvrez le goût emblématique de McDonald's sans quitter le confort de votre foyer.",
      },
      {
        id: "kfc",
        name: "Livraison KFC marrakech",
        brand: "KFC",
        logo: "🍗",
        logoUrl: "/logos/kfc.svg",
        logoAlt: "KFC brand logo",
        description:
          "KFC est la pour vous livrer son bon poulet frit à s'en lécher les doigts, directement sur la pas de votre porte. Choisissez parmi des seaux, des combos ou des morceaux individuels, tous dotés de l'enrobage croustillant emblématique de KFC et d'un poulet tendre et juteux. N'oubliez pas d'ajouter vos accompagnements préférés comme la purée de pommes de terre, la salade de chou ou les frites pour compléter votre repas. Que vous ayez envie d'une expérience classique de poulet frit Kentucky ou d'un festin familial satisfaisant, KFC offre des options délicieuses pour tous les goûts. Commandez maintenant et profitez des célèbres saveurs du Colonel sans quitter votre maison à Marrakech.",
      },
      {
        id: "burgerking",
        name: "livraison burger king marrakech",
        brand: "Burger King",
        logo: "👑",
        logoUrl: "/logos/burgerking.svg",
        logoAlt: "Burger King brand logo",
        description:
          "Burger King vous propose des plats grillés à la flamme, livrés frais et chauds à votre domicile. Savourez leur Whopper emblématique, explorez leur variété de burgers grillés à la flamme comme le",
      },
    ],
    bgGradient: "from-violet-400 via-purple-500 to-fuchsia-600",
  },
  shopping: {
    slug: "shopping",
    title: "Livraison SHOPPING",
    titleColor: "text-amber-600",
    description: "Tous vos achats livrés directement chez vous.",
    deliveryTime: "60-120 min",
    heroImage: "🛍",
    features: [
      {
        icon: "👗",
        title: "Large variété",
        description: "Vêtements, accessoires, équipements",
      },
      {
        icon: "💳",
        title: "Meilleurs prix",
        description: "Prix réduits et offres exclusives",
      },
      {
        icon: "📦",
        title: "Livraison rapide",
        description: "Recevez vos achats en moins de 2 heures",
      },
      {
        icon: "↩️",
        title: "Retours faciles",
        description: "Politique de retour simple et rapide",
      },
    ],
    categories: [
      { name: "Vêtements", emoji: "👕" },
      { name: "Accessoires", emoji: "👜" },
      { name: "Chaussures", emoji: "👞" },
      { name: "Électronique", emoji: "📱" },
    ],
    vendors: [],
    bgGradient: "from-amber-400 via-orange-500 to-yellow-600",
  },
  "parcel-delivery": {
    slug: "parcel-delivery",
    title: "Livraison de COLIS",
    titleColor: "text-slate-600",
    description: "Envoyez et recevez vos colis en toute sécurité.",
    deliveryTime: "1-2 heures",
    heroImage: "📦",
    features: [
      {
        icon: "🔒",
        title: "Sécurisé",
        description: "Livraison sécurisée et assurée",
      },
      {
        icon: "📍",
        title: "Suivi en temps réel",
        description: "Suivi GPS de votre colis",
      },
      {
        icon: "💪",
        title: "Manutention soignée",
        description: "Emballage renforcé et sécurisé",
      },
      {
        icon: "⏰",
        title: "Livraison rapide",
        description: "Livraison dans les délais convenus",
      },
    ],
    categories: [
      { name: "Petits colis", emoji: "📮" },
      { name: "Colis standard", emoji: "📦" },
      { name: "Documents", emoji: "📄" },
      { name: "Fragiles", emoji: "🥚" },
    ],
    vendors: [],
    bgGradient: "from-slate-400 via-zinc-500 to-gray-600",
  },
  documents: {
    slug: "documents",
    title: "Livraison de DOCUMENTS",
    titleColor: "text-indigo-600",
    description: "Livrez vos documents importants en toute confiance.",
    deliveryTime: "20-30 min",
    heroImage: "📄",
    features: [
      {
        icon: "🔐",
        title: "Confidentiel",
        description: "Livraison totalement confidentielle",
      },
      {
        icon: "✅",
        title: "Certificat livraison",
        description: "Preuve de livraison garantie",
      },
      {
        icon: "⚡",
        title: "Ultra-rapide",
        description: "Livraison express en 30 minutes",
      },
      {
        icon: "🛡️",
        title: "Protégé",
        description: "Documents protégés et assurés",
      },
    ],
    categories: [
      { name: "Contrats", emoji: "📋" },
      { name: "Rapports", emoji: "📊" },
      { name: "Correspondance", emoji: "✉️" },
      { name: "Certificats", emoji: "🎓" },
    ],
    vendors: [],
    bgGradient: "from-indigo-400 via-blue-500 to-cyan-600",
  },
  bakery: {
    slug: "bakery",
    title: "Livraison de BOULANGERIE",
    titleColor: "text-yellow-600",
    description: "Du pain frais et des pâtisseries livrés chaud chez vous.",
    deliveryTime: "15-30 min",
    heroImage: "🥖",
    features: [
      {
        icon: "🥐",
        title: "Frais chaque jour",
        description: "Produits faits maison chaque jour",
      },
      {
        icon: "😋",
        title: "Délicieux",
        description: "Les meilleures recettes traditionnelles",
      },
      {
        icon: "🚀",
        title: "Livraison ultra-rapide",
        description: "Chaud et frais à votre porte",
      },
      {
        icon: "🎂",
        title: "Gâteaux personnalisés",
        description: "Gâteaux et pâtisseries sur commande",
      },
    ],
    categories: [
      { name: "Pain", emoji: "🍞" },
      { name: "Croissants", emoji: "🥐" },
      { name: "Gâteaux", emoji: "🎂" },
      { name: "Pâtisseries", emoji: "🧁" },
    ],
    vendors: [],
    bgGradient: "from-yellow-400 via-amber-500 to-orange-600",
  },
};

export function getServiceBySlug(slug: string): ServiceDetail | null {
  return servicesData[slug] || null;
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(servicesData);
}

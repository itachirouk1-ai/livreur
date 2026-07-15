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
        name: 'livraison mcdonald_s-marrakech',
        brand: "McDonald's",
        logo: '🍟',
        logoUrl: "/logos/restaurant/livraison marrakech a domicile mc Donald's.png",
        logoAlt: "McDonald's brand logo",
        description:
          "McDonald's est une option pratique pour satisfaire vos envies de fast-food. Savourez les classiques comme les Big Mac, les frites et les Happy Meals, livrés directement à votre domicile. Que vous soyez à la recherche d'une option rapide pour la pause du midi, d'une collation en fin de soirée d'un repas familier pour toute la famille, McDonald's à cela chose chose pour tout le monde et rend facile à utiliser. Commandez maintenant et découvrez le goût emblématique de McDonald's sans quitter le confort de votre foyer.",
      },
      {
        id: 'kfc',
        name: 'Livraison KFC marrakech',
        brand: 'KFC',
        logo: '🍗',
        logoUrl: '/logos/restaurant/livraison marrakech a domicile kfc.png',
        logoAlt: 'KFC brand logo',
        description:
          "KFC est la pour vous livrer son bon poulet frit à s'en lécher les doigts, directement sur la pas de votre porte. Choisissez parmi des seaux, des combos ou des morceaux individuels, tous dotés de l'enrobage croustillant emblématique de KFC et d'un poulet tendre et juteux. N'oubliez pas d'ajouter vos accompagnements préférés comme la purée de pommes de terre, la salade de chou ou les frites pour compléter votre repas. Que vous ayez envie d'une expérience classique de poulet frit Kentucky ou d'un festin familial satisfaisant, KFC offre des options délicieuses pour tous les goûts. Commandez maintenant et profitez des célèbres saveurs du Colonel sans quitter votre maison à Marrakech.",
      },
      {
        id: 'burgerking',
        name: 'livraison burger king marrakech',
        brand: 'Burger King',
        logo: '👑',
        logoUrl: '/logos/restaurant/livraison marrakech a domicile  burger king.png',
        logoAlt: 'Burger King brand logo',
        description:
          'Burger King vous propose des plats grillés à la flamme, livrés frais et chauds à votre domicile. Savourez leur Whopper emblématique, explorez leur variété de burgers grillés à la flamme comme le',
      },
      {
        id: 'dominos',
        name: 'livraison Domino\'s marrakech',
        brand: "Domino's",
        logo: '🍕',
        logoUrl: '/logos/restaurant/livraison marrakech a domicile  Domino\'s.png',
        logoAlt: "Domino's brand logo",
        description:
          'Domino\'s propose une large sélection de pizzas personnalisables, des classiques aux créations gourmandes, livrées chaudes directement à votre porte.',
      },
      {
        id: 'papa-johns',
        name: 'livraison papa johns marrakech',
        brand: 'Papa John\'s',
        logo: '🍕',
        logoUrl: '/logos/restaurant/livraison marrakech a domicile  papa johns.png',
        logoAlt: 'Papa John\'s brand logo',
        description:
          'Papa John\'s vous apporte des pizzas artisanales préparées avec des ingrédients frais et une pâte moelleuse, pour un repas rapide et savoureux.',
      },
      {
        id: 'tacos-de-lyon',
        name: 'livraison tacos de lyon marrakech',
        brand: 'Tacos de Lyon',
        logo: '🌮',
        logoUrl: '/logos/restaurant/livraison marrakech a domicile  tacos de lyon.png',
        logoAlt: 'Tacos de Lyon brand logo',
        description:
          'Tacos de Lyon offre des tacos généreux et savoureux, garnis de viandes, de sauces et de fromages fondants, livrés directement à votre domicile.',
      },
      {
        id: 'crusty',
        name: 'livraison crusty marrakech',
        brand: 'Crusty',
        logo: '🥖',
        logoUrl: '/logos/restaurant/livraison marrakech a domicile crusty.png',
        logoAlt: 'Crusty brand logo',
        description:
          'Crusty propose des sandwichs et plats chauds préparés avec du pain croustillant et des ingrédients de qualité, pour une livraison gourmande et rapide.',
      },
      {
        id: 'otacos',
        name: 'livraison o\'tacos marrakech',
        brand: "O'Tacos",
        logo: '🌮',
        logoUrl: '/logos/restaurant/livraison marrakech a domicile o\'tacos.png',
        logoAlt: "O'Tacos brand logo",
        description:
          'O\'Tacos livre des tacos et menus généreux, avec des sauces savoureuses et des accompagnements variés, pour une expérience de street food conviviale.',
      },
      {
        id: 'pizza-hut',
        name: 'livraison pizza hut marrakech',
        brand: 'Pizza Hut',
        logo: '🍕',
        logoUrl: '/logos/restaurant/livraison marrakech a domicile pizza hut.png',
        logoAlt: 'Pizza Hut brand logo',
        description:
          'Pizza Hut propose des pizzas classiques et gourmandes, avec des combinaisons de saveurs et des bords moelleux, livrées directement chez vous.',
      },
      {
        id: 'quick',
        name: 'livraison quick marrakech',
        brand: 'Quick',
        logo: '🍔',
        logoUrl: '/logos/restaurant/livraison marrakech a domicile quick.png',
        logoAlt: 'Quick brand logo',
        description:
          'Quick est une option de fast-food rapide et savoureuse, avec des burgers, frites et menus complets pour un repas facile à commander.',
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
  flowers: {
    slug: 'flowers',
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
        logoUrl: '/logos/shopping/livraison marrakech a domicile CARRE EDEN SHOPPING CENTER (Guéliz).webp',
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
  'parcel-delivery': {
    slug: 'parcel-delivery',
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
  bakery: {
    slug: 'bakery',
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

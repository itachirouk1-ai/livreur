export type Locale = 'fr' | 'en';

export const siteUrl = 'https://marrakechlivreur.com';

export const siteContent: Record<
  Locale,
  {
    brandName: string;
    heroBadge: string;
    heroTitleLine1: string;
    heroDescription: string;
    callNow: string;
    orderOnWhatsApp: string;
    exploreServices: string;
    trustedRiders: string;
    fastDelivery: string;
    
    servicesHeadingLine2: string;
    servicesSubtitle: string;
    
    orderNow: string;
    restaurantsHeading: string;
    restaurantsDescription: string;
    seeVendorPage: string;
    backToService: string;
    serviceLabel: string;
    estimatedDeliveryTime: string;
    
    vendorBrand: string;
    vendorDetails: string;
    vendorInternalName: string;
    vendorBadge: string;
    returnToService: string;
    homeMetaTitle: string;
    homeMetaDescription: string;
    serviceMetaTitle: string;
    serviceMetaDescription: string;
    vendorMetaTitle: string;
    vendorMetaDescription: string;
    menuLabel: string;
    languageLabel: string;
    english: string;
    french: string;
    reviewsBadge: string;
    deliveryZonesBadge: string;
    deliveryZonesHeading: string;
    deliveryZonesDescription: string;
    deliveryMapBadge: string;
    deliveryMapHeading: string;
    serviceDetailWhatWeOffer: string;
    serviceDetailCoveredAreas: string;
    serviceDetailRelatedSearches: string;
    faqBadge: string;
    faqHeadingLine1: string;
    faqHeadingLine2: string;
    faqDescription: string;
    footerServicesTitle: string;
    footerContactTitle: string;
    footerCallUs: string;
    footerReplyMinutes: string;
    footerAvailability: string;
    footerCopyright: string;
  }
> = {
  fr: {
    brandName: 'MARRAKECH LIVREUR',
    heroBadge: 'Disponible 24/7',
    heroTitleLine1: 'Livraison Rapide à Marrakech',
    heroDescription:
      'Restaurants, pharmacies, supermarchés, fleurs, documents et bien plus. Commandez facilement par téléphone ou WhatsApp et profitez d\'une livraison rapide partout à Marrakech 7j/7.',
    callNow: 'Appeler',
    orderOnWhatsApp: 'WhatsApp',
    exploreServices: 'Explorer les services',
    trustedRiders: 'Coursiers de confiance',
    fastDelivery: 'Livraison rapide',
    servicesHeadingLine2: 'Nous Livrons Tout Partout',
    servicesSubtitle: 'Marrakech : chacun à votre domicile !',
    
    orderNow: 'Commander maintenant',
    restaurantsHeading: 'populaires Boutiques',
    restaurantsDescription:
      'Découvrez les boutiques et services les plus demandés à Marrakech, de la fleuristerie au marché local en passant par les pharmacies.',
    seeVendorPage: 'Voir la page',
    backToService: 'Retour au service',
    serviceLabel: 'Service',
    estimatedDeliveryTime: 'Temps de livraison estimé',
    
    vendorBrand: 'Marque',
    vendorDetails: 'Détails du vendeur',
    vendorInternalName: 'Nom interne',
    vendorBadge: 'Vendeur',
    returnToService: 'Retour au service',
    homeMetaTitle: 'Marrakech Livreur | Livreur Marrakech 24h à domicile',
    homeMetaDescription:
      'Livraison rapide à Marrakech pour restaurants, pharmacies, supermarchés, fleurs, documents et courses. Commandez maintenant.',
    serviceMetaTitle: 'Services de livraison Marrakech | Marrakech Livreur',
    serviceMetaDescription:
      'Découvrez nos services de livraison à Marrakech, rapides, fiables et disponibles 24/7.',
    vendorMetaTitle: 'Vendeurs de livraison Marrakech | Marrakech Livreur',
    vendorMetaDescription: 'Consultez les vendeurs partenaires et commandez en quelques clics.',
    menuLabel: 'Ouvrir le menu principal',
    languageLabel: 'Changer la langue',
    english: 'English',
    french: 'Français',
    reviewsBadge: '⭐ Avis Clients',
    deliveryZonesBadge: 'Zones desservies',
    deliveryZonesHeading: 'Livraison partout à Marrakech',
    deliveryZonesDescription: 'Nous livrons rapidement dans les principaux quartiers de Marrakech.',
    deliveryMapBadge: '📍 Zone de livraison',
    deliveryMapHeading: 'Livraison à domicile à Marrakech',
    serviceDetailWhatWeOffer: 'Ce que nous proposons',
    serviceDetailCoveredAreas: 'Quartiers couverts',
    serviceDetailRelatedSearches: 'Recherches associées',
    faqBadge: 'Questions fréquentes',
    faqHeadingLine1: 'Tout ce que vous devez',
    faqHeadingLine2: 'savoir',
    faqDescription: 'Retrouvez les réponses aux questions les plus fréquentes concernant notre service de livraison à domicile à Marrakech.',
    footerServicesTitle: 'Nos Services',
    footerContactTitle: 'Nous contacter',
    footerCallUs: 'Appelez-nous',
    footerReplyMinutes: 'Réponse en quelques minutes',
    footerAvailability: 'Disponible 24h/24 • 7j/7',
    footerCopyright: '© 2026 Marrakech Livreur. Tous droits réservés.',
  },
  en: {
    brandName: 'MARRAKECH LIVREUR',
    heroBadge: 'Available 24/7',
    heroTitleLine1: 'Fast Delivery in Marrakech',
    
    heroDescription:
      'Restaurants, pharmacies, supermarkets, flowers, documents and more. Order easily by phone or WhatsApp and enjoy fast delivery across Marrakech, 7 days a week.',
    callNow: 'Call now',
    orderOnWhatsApp: 'WhatsApp',
    exploreServices: 'Explore services',
    trustedRiders: 'Trusted riders',
    fastDelivery: 'Fast delivery',
    servicesHeadingLine2: 'We Deliver Everywhere',
    servicesSubtitle: 'Marrakech: your doorstep, covered.',
    
    orderNow: 'Order now',
    restaurantsHeading: 'Popular stores',
    restaurantsDescription:
      'Discover the most requested shops and services in Marrakech, from flower boutiques to local markets and pharmacies.',
    seeVendorPage: 'View page',
    backToService: 'Back to service',
    serviceLabel: 'Service',
    estimatedDeliveryTime: 'Estimated delivery time',
    
    vendorBrand: 'Brand',
    vendorDetails: 'Vendor details',
    vendorInternalName: 'Internal name',
    vendorBadge: 'Vendor',
    returnToService: 'Back to service',
    homeMetaTitle: 'Marrakech Livreur | Fast delivery in Marrakech',
    homeMetaDescription:
      'Fast delivery in Marrakech for restaurants, pharmacies, supermarkets, flowers, documents and groceries. Order now.',
    serviceMetaTitle: 'Delivery services in Marrakech | Marrakech Livreur',
    serviceMetaDescription:
      'Discover our fast, reliable and 24/7 delivery services in Marrakech.',
    vendorMetaTitle: 'Delivery vendors in Marrakech | Marrakech Livreur',
    vendorMetaDescription: 'Browse our partner vendors and place your order in a few clicks.',
    menuLabel: 'Open main menu',
    languageLabel: 'Change language',
    english: 'English',
    french: 'Français',
    reviewsBadge: '⭐ Customer Reviews',
    deliveryZonesBadge: 'Delivery zones',
    deliveryZonesHeading: 'Delivery across Marrakech',
    deliveryZonesDescription: 'We deliver quickly across the main neighborhoods of Marrakech.',
    deliveryMapBadge: '📍 Delivery zone',
    deliveryMapHeading: 'Home delivery in Marrakech',
    serviceDetailWhatWeOffer: 'What we offer',
    serviceDetailCoveredAreas: 'Covered neighborhoods',
    serviceDetailRelatedSearches: 'Related searches',
    faqBadge: 'Frequently Asked Questions',
    faqHeadingLine1: 'Everything you need to',
    faqHeadingLine2: 'know',
    faqDescription: 'Find answers to the most common questions about our home delivery service in Marrakech.',
    footerServicesTitle: 'Our Services',
    footerContactTitle: 'Contact Us',
    footerCallUs: 'Call us',
    footerReplyMinutes: 'Reply in a few minutes',
    footerAvailability: 'Available 24/7',
    footerCopyright: '© 2026 Marrakech Livreur. All rights reserved.',
  },
};

export const contactLinks = {
  whatsapp: "https://wa.me/212633115090?text=Salut%20!%20Je%20souhaite%20passer%20une%20commande.",
  phone: 'tel:+212633115090',
};

export function getLocaleFromQuery(queryString?: string | null): Locale {
  const params = new URLSearchParams(queryString ?? '');
  return params.get('lang')?.toLowerCase() === 'en' ? 'en' : 'fr';
}

export function getLocaleFromSearchParams(searchParams?: URLSearchParams | null): Locale {
  return getLocaleFromQuery(searchParams?.toString());
}

export function withLocaleHref(path: string, locale: Locale) {
  if (!path || path === '/') {
    return locale === 'en' ? '/?lang=en' : '/';
  }

  const [pathnameAndQuery, hash = ''] = path.split('#');
  const [pathName, existingQuery = ''] = pathnameAndQuery.split('?');
  const params = new URLSearchParams(existingQuery);

  if (locale === 'en') {
    params.set('lang', 'en');
  } else {
    params.delete('lang');
  }

  const query = params.toString();
  const finalPath = query ? `${pathName}?${query}` : pathName;

  return hash ? `${finalPath}#${hash}` : finalPath;
}

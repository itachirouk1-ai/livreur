export type Locale = 'fr' | 'en';

export const siteUrl = 'https://allodelivererkech.com';

export const siteContent: Record<
  Locale,
  {
    brandName: string;
    heroBadge: string;
    heroTitleLine1: string;
    heroTitleLine2: string;
    heroDescription: string;
    callNow: string;
    orderOnWhatsApp: string;
    exploreServices: string;
    trustedRiders: string;
    fastDelivery: string;
    servicesHeadingLine1: string;
    servicesHeadingLine2: string;
    servicesSubtitle: string;
    popularBadge: string;
    orderNow: string;
    restaurantsHeading: string;
    restaurantsDescription: string;
    seeVendorPage: string;
    backToService: string;
    serviceLabel: string;
    estimatedDeliveryTime: string;
    aboutLabel: string;
    vendorBrand: string;
    vendorDetails: string;
    vendorInternalName: string;
    vendorBadge: string;
    returnToService: string;
  }
> = {
  fr: {
    brandName: 'ALLO DELIVERER MARRAKECH',
    heroBadge: 'Disponible 24/7',
    heroTitleLine1: 'Livraison à',
    heroTitleLine2: 'Marrakech',
    heroDescription:
      'Vos restaurants, pharmacies, supermarchés, fleurs et bien plus encore livrés rapidement partout à Marrakech.',
    callNow: 'Appeler',
    orderOnWhatsApp: 'Commander sur WhatsApp',
    exploreServices: 'Explorer les services',
    trustedRiders: 'Coursiers de confiance',
    fastDelivery: 'Livraison rapide',
    servicesHeadingLine1: 'Nous Livrons',
    servicesHeadingLine2: 'Tout Partout',
    servicesSubtitle: 'Marrakech : chacun à votre domicile !',
    popularBadge: 'Populaire',
    orderNow: 'Commander maintenant',
    restaurantsHeading: 'Restaurants',
    restaurantsDescription:
      "Nous livrons vos plats préférés de n'importe quel restaurant directement à votre domicile !",
    seeVendorPage: 'Voir la page du vendeur',
    backToService: 'Retour au service',
    serviceLabel: 'Service',
    estimatedDeliveryTime: 'Temps de livraison estimé',
    aboutLabel: 'À propos',
    vendorBrand: 'Marque',
    vendorDetails: 'Détails du vendeur',
    vendorInternalName: 'Nom interne',
    vendorBadge: 'Vendeur',
    returnToService: 'Retour au service',
  },
  en: {
    brandName: 'ALLO DELIVERER MARRAKECH',
    heroBadge: 'Available 24/7',
    heroTitleLine1: 'Delivery in',
    heroTitleLine2: 'Marrakech',
    heroDescription:
      'Your favorite restaurants, pharmacies, supermarkets, flowers, and much more, delivered quickly across Marrakech.',
    callNow: 'Call now',
    orderOnWhatsApp: 'Order on WhatsApp',
    exploreServices: 'Explore services',
    trustedRiders: 'Trusted riders',
    fastDelivery: 'Fast delivery',
    servicesHeadingLine1: 'We Deliver',
    servicesHeadingLine2: 'Everywhere',
    servicesSubtitle: 'Marrakech: your doorstep, covered.',
    popularBadge: 'Popular',
    orderNow: 'Order now',
    restaurantsHeading: 'Restaurants',
    restaurantsDescription:
      'We deliver your favorite meals from any restaurant straight to your doorstep.',
    seeVendorPage: 'View vendor page',
    backToService: 'Back to service',
    serviceLabel: 'Service',
    estimatedDeliveryTime: 'Estimated delivery time',
    aboutLabel: 'About',
    vendorBrand: 'Brand',
    vendorDetails: 'Vendor details',
    vendorInternalName: 'Internal name',
    vendorBadge: 'Vendor',
    returnToService: 'Back to service',
  },
};

export const contactLinks = {
  whatsapp: 'https://wa.me/212600000000?text=Bonjour%20Allo%20Deliverer%20Kech',
  phone: 'tel:+212600000000',
};

export function getLocaleFromQuery(queryString?: string | null): Locale {
  const params = new URLSearchParams(queryString ?? '');
  return params.get('lang')?.toLowerCase() === 'en' ? 'en' : 'fr';
}

export function getLocaleFromSearchParams(searchParams?: URLSearchParams | null): Locale {
  return getLocaleFromQuery(searchParams?.toString());
}

export function withLocaleHref(path: string, locale: Locale) {
  if (!path) {
    return `?lang=${locale}`;
  }

  if (locale === 'en') {
    return `${path}${path.includes('?') ? '&' : '?'}lang=en`;
  }

  return path;
}

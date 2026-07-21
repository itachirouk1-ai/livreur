import type { Metadata } from 'next';
import { contactLinks, type Locale } from './site-content';
import { getLocalizedServiceContent, getServiceBySlug, getVendorByServiceAndId } from './services-data';

export const siteUrl = 'https://marrakechlivreur.com';
export const siteName = 'Marrakech Livreur';
export const businessPhone = '+212633115090';
export const cityName = 'Marrakech';
export const businessDescription =
  'Service de livraison à domicile 24h/24 à Marrakech pour restaurants, pharmacies, fleurs, documents, colis et courses.';

function buildCanonical(path: string) {
  const normalizedPath = path === '/' ? '/' : path.replace(/\/+$/, '');
  return `${siteUrl}${normalizedPath}`;
}

export function buildHomeMetadata(): Metadata {
  return {
    title: 'Marrakech Livreur | Livreur Marrakech 24h à domicile',
    description:
      'Besoin d’un livreur Marrakech rapide ? Livraison à domicile 24h pour restaurants, pharmacies, fleurs, documents et courses. Commandez maintenant.',
    keywords: [
      'livreur marrakech',
      'livraison marrakech',
      'livreur à domicile marrakech',
      'livraison à domicile marrakech',
      'coursier marrakech',
      'livraison rapide marrakech',
      'livraison 24h marrakech',
      'delivery marrakech',
      'delivery service marrakech',
    ],
    alternates: {
      canonical: buildCanonical('/'),
      languages: {
        fr: buildCanonical('/'),
        en: buildCanonical('/?lang=en'),
      },
    },
    openGraph: {
      title: 'Marrakech Livreur | Livreur Marrakech 24h à domicile',
      description:
        'Livraison rapide à domicile à Marrakech pour restaurants, pharmacies, supermarchés, fleurs, documents et courses, disponible 24h/24.',
      url: buildCanonical('/'),
      siteName,
      type: 'website',
      locale: 'fr_FR',
      images: [
        {
          url: `${siteUrl}/logos/applogo.png`,
          width: 1200,
          height: 630,
          alt: 'Marrakech Livreur livraison rapide à domicile 24h',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Marrakech Livreur | Livreur Marrakech 24h',
      description:
        'Commandez avec un livreur Marrakech fiable pour une livraison à domicile rapide, sûre et disponible 24h/24.',
      images: [`${siteUrl}/logos/applogo.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

function getServiceSeoData(slug: string) {
  switch (slug) {
    case 'restaurants':
      return {
        title: 'Livraison restaurants Marrakech | Livreur à domicile 24h',
        description:
          'Commande de repas à Marrakech avec un livreur à domicile rapide, fiable et disponible 24h/24. Livraison restaurant Marrakech partout dans la ville.',
        h1: 'Livraison restaurants Marrakech : livreur à domicile rapide',
        keywords: [
          'restaurant delivery marrakech',
          'food delivery marrakech',
          'delivery food marrakech',
          'mcdonald\'s delivery marrakech',
          'mcdelivery marrakech',
          'kfc delivery marrakech',
          'burger king marrakech delivery',
          'pizza hut marrakech delivery',
          'domino\'s delivery marrakech',
        ],
      };
    case 'pharmacies':
      return {
        title: 'Livraison pharmacie Marrakech | Pharmacie à domicile 24h',
        description:
          'Livraison de médicaments et produits de santé à Marrakech avec un service rapide, discret et disponible 24h/24.',
        h1: 'Livraison pharmacie Marrakech : service rapide et discret',
        keywords: ['livraison pharmacie marrakech', 'pharmacy delivery marrakech'],
      };
    case 'supermarkets':
      return {
        title: 'Livraison supermarché Marrakech | Courses à domicile 24h',
        description:
          'Faites vos courses à Marrakech sans sortir de chez vous grâce à une livraison supermarché rapide et fiable.',
        h1: 'Livraison supermarché Marrakech : courses à domicile',
        keywords: ['livraison supermarché marrakech', 'grocery delivery marrakech'],
      };
    case 'fleurs':
      return {
        title: 'Livraison fleurs Marrakech | Fleuriste à domicile',
        description:
          'Livraison de bouquets et fleurs à Marrakech, rapide et élégante, pour toutes vos occasions.',
        h1: 'Livraison fleurs Marrakech : fleuriste à domicile',
        keywords: ['livraison fleurs marrakech', 'flower delivery marrakech'],
      };
    case 'cosmetics':
      return {
        title: 'Livraison cosmétiques Marrakech | Produits beauté à domicile',
        description:
          'Découvrez une livraison cosmétiques Marrakech rapide pour vos produits beauté et soins, partout dans la ville.',
        h1: 'Livraison cosmétiques Marrakech',
        keywords: ['cosmetics delivery marrakech', 'beauty delivery marrakech'],
      };
    case 'shopping':
      return {
        title: 'Livraison shopping Marrakech | Achats à domicile',
        description:
          'Profitez d’une livraison shopping Marrakech rapide pour vos achats et produits du quotidien.',
        h1: 'Livraison shopping Marrakech',
        keywords: ['shopping delivery marrakech', 'achat à domicile marrakech'],
      };
    case 'colis':
      return {
        title: 'Livraison colis Marrakech | Courier rapide 24h',
        description:
          'Service de livraison colis Marrakech rapide pour vos envois, documents et petits paquets, disponible 24h/24.',
        h1: 'Livraison colis Marrakech : service rapide 24h',
        keywords: ['livraison colis marrakech', 'courier marrakech'],
      };
    case 'documents':
      return {
        title: 'Livraison documents Marrakech | Service rapide 24h',
        description:
          'Livraison documents Marrakech rapide et fiable pour vos papiers, dossiers et courriers sensibles.',
        h1: 'Livraison documents Marrakech',
        keywords: ['livraison documents marrakech', 'courier marrakech'],
      };
    case 'boulangerie':
      return {
        title: 'Livraison boulangerie Marrakech | Pain et pâtisseries',
        description:
          'Livraison boulangerie Marrakech rapide pour pain frais, pâtisseries et produits de boulangerie à domicile.',
        h1: 'Livraison boulangerie Marrakech',
        keywords: ['bakery delivery marrakech', 'pain livraison marrakech'],
      };
    default:
      return {
        title: 'Livraison à domicile Marrakech | Marrakech Livreur',
        description: businessDescription,
        h1: 'Livraison à domicile Marrakech',
        keywords: ['livraison marrakech', 'livreur marrakech'],
      };
  }
}

export function buildServicePageMetadata(slug: string, locale: Locale = 'fr'): Metadata {
  const seo = getServiceSeoData(slug);
  const localizedService = getLocalizedServiceContent(slug, locale);
  const canonicalPath = `/${slug}`;
  const isEnglish = locale === 'en';

  return {
    title: isEnglish
      ? `${localizedService.title || seo.h1} in Marrakech | Fast home delivery`
      : seo.title,
    description: isEnglish
      ? `${localizedService.description || seo.description} Fast, reliable and available 24/7.`
      : seo.description,
    keywords: [
      'livreur marrakech',
      'livraison marrakech',
      ...seo.keywords,
    ],
    alternates: {
      canonical: buildCanonical(canonicalPath),
      languages: {
        fr: buildCanonical(canonicalPath),
        en: buildCanonical(`${canonicalPath}?lang=en`),
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: buildCanonical(canonicalPath),
      siteName,
      type: 'website',
      locale: 'fr_FR',
      images: [
        {
          url: `${siteUrl}/logos/applogo.png`,
          width: 1200,
          height: 630,
          alt: `${seo.h1} à Marrakech`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [`${siteUrl}/logos/applogo.png`],
    },
  };
}

export function buildVendorPageMetadata(slug: string, vendorId: string): Metadata {
  const service = getServiceBySlug(slug);
  const vendor = getVendorByServiceAndId(slug, vendorId);
  const canonicalPath = `/${slug}/${vendorId}`;

  if (!service || !vendor) {
    return {
      title: 'Vendeur introuvable | Marrakech Livreur',
      description: 'La page demandée est introuvable.',
    };
  }

  const title = `${vendor.brand} livraison Marrakech | Livreur rapide 24h`;
  const description = `Commande ${vendor.brand} à Marrakech avec un livreur rapide, fiable et disponible 24h/24. Livraison à domicile partout dans la ville.`;

  return {
    title,
    description,
    keywords: [
      'livreur marrakech',
      `${vendor.brand.toLowerCase()} livraison marrakech`,
      `${service.slug} ${cityName.toLowerCase()}`,
      'livraison à domicile marrakech',
    ],
    alternates: {
      canonical: buildCanonical(canonicalPath),
      languages: {
        fr: buildCanonical(canonicalPath),
        en: buildCanonical(`${canonicalPath}?lang=en`),
      },
    },
    openGraph: {
      title,
      description,
      url: buildCanonical(canonicalPath),
      siteName,
      type: 'website',
      locale: 'fr_FR',
      images: [
        {
          url: vendor.logoUrl ?? `${siteUrl}/logos/applogo.png`,
          width: 1200,
          height: 630,
          alt: `${vendor.brand} livraison Marrakech à domicile`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [vendor.logoUrl ?? `${siteUrl}/logos/applogo.png`],
    },
  };
}

export function buildStructuredDataJson() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        logo: `${siteUrl}/logos/applogo.png`,
        sameAs: [`https://wa.me/${contactLinks.whatsapp.replace(/^https:\/\/wa\.me\//, '').replace(/\?text=.*$/, '')}`],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: businessPhone,
            contactType: 'customer service',
            areaServed: cityName,
            availableLanguage: ['French', 'English'],
          },
        ],
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#localbusiness`,
        name: siteName,
        url: siteUrl,
        telephone: businessPhone,
        address: {
          '@type': 'PostalAddress',
          addressLocality: cityName,
          addressCountry: 'MA',
        },
        areaServed: {
          '@type': 'City',
          name: cityName,
        },
        description: businessDescription,
        serviceArea: {
          '@type': 'City',
          name: cityName,
        },
        priceRange: '€',
      },
      {
        '@type': 'DeliveryService',
        '@id': `${siteUrl}/#deliveryservice`,
        name: siteName,
        url: siteUrl,
        serviceArea: {
          '@type': 'City',
          name: cityName,
        },
        availableChannel: {
          '@type': 'ServiceChannel',
          servicePhone: businessPhone,
          serviceUrl: contactLinks.whatsapp,
        },
        description: businessDescription,
      },
    ],
  };
}

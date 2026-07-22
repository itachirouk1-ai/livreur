import type { Locale } from "./site-content";
import type { ServiceVendor } from "./services-data";

export function getVendorSEOContent(
  serviceSlug: string,
  vendor: ServiceVendor,
  locale: Locale = "fr"
) {
  switch (serviceSlug) {
    case "pharmacies":
      return {
        heading: `Livraison ${vendor.name} à Marrakech`,
        sections: [
          {
            title: `Livraison ${vendor.name}`,
            content: `Vous recherchez une livraison ${vendor.name} rapide à Marrakech ? Allo Livreur Kech assure la livraison de médicaments, produits de parapharmacie et produits de santé directement depuis ${vendor.name} jusqu'à votre domicile.`,
          },
          {
            title: "Médicaments et produits disponibles",
            content: `Nous livrons les médicaments, vitamines, produits bébé, matériel médical, produits d'hygiène, parapharmacie et bien plus encore.`,
          },
          {
            title: "Pourquoi choisir Allo Livreur Kech ?",
            content: `Livraison rapide, disponible 24h/24, commande par WhatsApp et service professionnel partout à Marrakech.`,
          },
          {
            title: "Zones desservies",
            content: `Guéliz, Hivernage, Agdal, Massira, Daoudiate, Targa, M'Hamid, Médina et tous les quartiers de Marrakech.`,
          },
        ],
      };

    case "restaurants":
      return {
        heading: `Livraison ${vendor.name} à Marrakech`,
        sections: [
          {
            title: `Livraison ${vendor.name} à domicile`,
            content: `Vous recherchez une livraison ${vendor.name} à Marrakech ? Allo Livreur Kech récupère votre commande directement chez ${vendor.name} et assure une livraison rapide à domicile, au bureau, à l'hôtel ou au riad. Notre service de livraison de restaurant à Marrakech est disponible 24h/24 et couvre tous les quartiers de la ville.`,
          },
          {
            title: `Menu ${vendor.name} livré partout à Marrakech`,
            content: `Commandez facilement vos burgers, pizzas, tacos, sandwiches, salades, desserts, boissons et toutes les spécialités proposées par ${vendor.name}. Nous assurons une livraison rapide afin que vos repas arrivent chauds, frais et prêts à être dégustés.`,
          },
          {
            title: "Pourquoi choisir Allo Livreur Kech ?",
            content: `Profitez d'un service de livraison restaurant Marrakech rapide, fiable et professionnel. Commande simple via WhatsApp, livraison 24h/24, suivi rapide et intervention dans toute la ville de Marrakech.`,
          },
          {
            title: "Quartiers desservis",
            content: `Nous livrons ${vendor.name} à Guéliz, Hivernage, Agdal, Massira, Daoudiate, Targa, M'Hamid, Sidi Ghanem, Palmeraie, Route de Casablanca, Route de l'Ourika, Médina, Semlalia et dans tous les quartiers de Marrakech.`,
          },
        ],
      };

    case "supermarkets":
      return {
        heading: `Livraison ${vendor.brand} à Marrakech`,
        sections: [
          {
            title: `Livraison ${vendor.brand} à domicile`,
            content: `Besoin d'une livraison ${vendor.brand} à Marrakech ? Allo Livreur Kech récupère vos courses directement chez ${vendor.brand} et les livre rapidement à votre domicile, bureau ou hôtel partout à Marrakech.`,
          },
          {
            title: `Produits disponibles chez ${vendor.brand}`,
            content: `Nous pouvons livrer des fruits et légumes, viandes, produits laitiers, boissons, produits surgelés, produits ménagers, snacks, articles pour bébé, produits d'hygiène ainsi que tous les articles disponibles chez ${vendor.brand}.`,
          },
          {
            title: "Pourquoi choisir Allo Livreur Kech ?",
            content: `Profitez d'un service de livraison rapide, disponible 24h/24 et 7j/7. Commandez facilement via WhatsApp, évitez les déplacements et recevez vos courses en toute sécurité où que vous soyez à Marrakech.`,
          },
          {
            title: "Quartiers desservis à Marrakech",
            content: `Nous assurons la livraison ${vendor.brand} à Guéliz, Hivernage, Agdal, Massira, Daoudiate, Targa, M'Hamid, Sidi Ghanem, Médina, Palmeraie et dans tous les quartiers de Marrakech.`,
          },
        ],
      };
      case "fleurs":
  return {
    heading: `Livraison ${vendor.brand} à Marrakech`,
    sections: [
      {
        title: `Livraison ${vendor.brand} à domicile`,
        content: `Vous recherchez une livraison ${vendor.brand} à Marrakech ? Allo Livreur Kech récupère vos bouquets, compositions florales et cadeaux directement chez ${vendor.brand} et les livre rapidement à votre domicile, bureau, hôtel ou au destinataire de votre choix partout à Marrakech.`,
      },
      {
        title: `Bouquets et fleurs disponibles chez ${vendor.brand}`,
        content: `Nous livrons des bouquets de roses, fleurs fraîches, compositions florales, plantes décoratives, cadeaux fleuris, fleurs de mariage, bouquets d'anniversaire, cadeaux de naissance, fleurs de fête et toutes les créations florales proposées par ${vendor.brand}.`,
      },
      {
        title: `Pourquoi choisir Allo Livreur Kech ?`,
        content: `Notre service assure une livraison de fleurs rapide, fiable et professionnelle partout à Marrakech. Commandez facilement par WhatsApp, choisissez votre fleuriste préféré et nous livrons vos fleurs fraîches avec le plus grand soin.`,
      },
      {
        title: `Zones desservies à Marrakech`,
        content: `Nous assurons la livraison ${vendor.brand} à Guéliz, Hivernage, Agdal, Massira, Daoudiate, Targa, Sidi Ghanem, M'Hamid, Palmeraie, Médina, Route de Casablanca, Route de l'Ourika et dans tous les quartiers de Marrakech.`,
      },
    ],
  };case "cosmetics":
  return {
    heading: `Livraison ${vendor.brand} à Marrakech`,
    sections: [
      {
        title: `Livraison ${vendor.brand} à domicile`,
        content: `Vous recherchez une livraison ${vendor.brand} à Marrakech ? Allo Livreur Kech récupère vos produits de beauté, cosmétiques et soins directement chez ${vendor.brand} et les livre rapidement à votre domicile, bureau ou hôtel partout à Marrakech.`,
      },
      {
        title: `Produits ${vendor.brand} disponibles`,
        content: `Nous livrons les soins du visage, soins du corps, produits dermatologiques, maquillage, parfums, soins capillaires, produits d'hygiène, protections solaires, soins anti-âge et tous les articles proposés par ${vendor.brand}.`,
      },
      {
        title: `Pourquoi choisir Allo Livreur Kech ?`,
        content: `Profitez d'une livraison rapide de cosmétiques à Marrakech, disponible 24h/24 et 7j/7. Commandez facilement par WhatsApp et recevez vos produits de beauté en toute sécurité, sans avoir à vous déplacer.`,
      },
      {
        title: `Livraison dans tous les quartiers de Marrakech`,
        content: `Nous livrons ${vendor.brand} à Guéliz, Hivernage, Agdal, Massira, Daoudiate, Targa, Sidi Ghanem, M'Hamid, Palmeraie, Route de Casablanca, Route de l'Ourika, Médina et dans tous les quartiers de Marrakech.`,
      },
    ],
  };
  case "shopping":
  return {
    heading: `Livraison ${vendor.brand} à Marrakech`,
    sections: [
      {
        title: `Livraison ${vendor.brand} à domicile`,
        content: `Vous recherchez une livraison ${vendor.brand} à Marrakech ? Allo Livreur Kech récupère vos achats directement chez ${vendor.brand} et les livre rapidement à votre domicile, bureau, hôtel ou riad partout à Marrakech.`,
      },
      {
        title: `Produits disponibles chez ${vendor.brand}`,
        content: `Nous pouvons livrer des vêtements, chaussures, sacs, accessoires de mode, produits de beauté, articles high-tech, électronique, décoration, articles pour la maison, équipements de sport, jouets, cadeaux et tous les produits disponibles chez ${vendor.brand}.`,
      },
      {
        title: `Pourquoi choisir Allo Livreur Kech ?`,
        content: `Profitez d'un service de livraison shopping rapide, fiable et disponible 24h/24 à Marrakech. Commandez facilement via WhatsApp et recevez vos achats sans perdre de temps dans les déplacements ou les files d'attente.`,
      },
      {
        title: `Quartiers desservis à Marrakech`,
        content: `Nous assurons la livraison ${vendor.brand} à Guéliz, Hivernage, Agdal, Massira, Daoudiate, Targa, Sidi Ghanem, M'Hamid, Palmeraie, Route de Casablanca, Route de l'Ourika, Médina et dans tous les quartiers de Marrakech.`,
      },
    ],
  };
  case "colis":
  return {
    heading: `Livraison ${vendor.brand} à Marrakech`,
    sections: [
      {
        title: `Livraison ${vendor.brand} de colis et documents`,
        content: `Vous recherchez une livraison ${vendor.brand} à Marrakech ? Allo Livreur Kech récupère vos colis, documents et paquets directement chez ${vendor.brand} et assure une livraison rapide à domicile, au bureau, à l'hôtel ou à toute autre adresse à Marrakech.`,
      },
      {
        title: `Quels types de colis livrons-nous ?`,
        content: `Nous livrons des documents importants, petits colis, colis standards, colis fragiles, cadeaux, commandes e-commerce, pièces détachées, équipements professionnels ainsi que tout autre envoi disponible chez ${vendor.brand}.`,
      },
      {
        title: `Pourquoi choisir Allo Livreur Kech ?`,
        content: `Notre service de livraison de colis à Marrakech est rapide, fiable et disponible 24h/24 et 7j/7. Commandez facilement via WhatsApp et bénéficiez d'une livraison sécurisée dans tous les quartiers de Marrakech.`,
      },
      {
        title: `Zones de livraison à Marrakech`,
        content: `Nous assurons la livraison ${vendor.brand} à Guéliz, Hivernage, Agdal, Massira, Daoudiate, Targa, M'Hamid, Sidi Ghanem, Route de Casablanca, Route de l'Ourika, Palmeraie, Médina, Semlalia ainsi que dans tous les quartiers de Marrakech.`,
      },
    ],
  };
  case "documents":
  return {
    heading: `Livraison ${vendor.brand} à Marrakech`,
    sections: [
      {
        title: `Livraison de documents ${vendor.brand}`,
        content: `Besoin d'une livraison de documents à Marrakech ? Allo Livreur Kech récupère vos documents chez ${vendor.brand} et les livre rapidement à votre domicile, bureau, administration, entreprise ou tout autre lieu à Marrakech en toute confidentialité.`,
      },
      {
        title: `Documents pris en charge`,
        content: `Nous livrons tous types de documents : contrats, dossiers administratifs, documents bancaires, documents médicaux, certificats, factures, courriers, dossiers juridiques, impressions, photocopies, reliures, plastifications et autres documents importants.`,
      },
      {
        title: `Pourquoi choisir Allo Livreur Kech ?`,
        content: `Notre service assure une livraison rapide, sécurisée et confidentielle de vos documents partout à Marrakech. Commande simple via WhatsApp, disponibilité 24h/24 et prise en charge professionnelle pour les particuliers comme les entreprises.`,
      },
      {
        title: `Zones desservies`,
        content: `Nous livrons les documents à Guéliz, Hivernage, Agdal, Massira, Daoudiate, Targa, M'Hamid, Sidi Ghanem, Route de Casablanca, Route de l'Ourika, Médina, Semlalia, Palmeraie ainsi que dans tous les quartiers de Marrakech.`,
      },
    ],
  };
  case "boulangerie":
  return {
    heading: `Livraison ${vendor.brand} à Marrakech`,
    sections: [
      {
        title: `Livraison ${vendor.brand} à domicile`,
        content: `Envie de commander chez ${vendor.brand} à Marrakech ? Allo Livreur Kech récupère vos commandes directement chez ${vendor.brand} et les livre rapidement à votre domicile, bureau, hôtel ou riad. Profitez d'une livraison de boulangerie rapide partout à Marrakech.`,
      },
      {
        title: `Produits disponibles chez ${vendor.brand}`,
        content: `Nous livrons tous les produits disponibles chez ${vendor.brand} : pains artisanaux, baguettes, croissants, viennoiseries, pâtisseries, gâteaux, tartes, macarons, sandwiches, cafés, boissons, petits-déjeuners et autres spécialités de boulangerie.`,
      },
      {
        title: `Pourquoi choisir Allo Livreur Kech ?`,
        content: `Notre service assure une livraison rapide, fiable et professionnelle de vos produits de boulangerie partout à Marrakech. Commande simple via WhatsApp, disponibilité 24h/24 et livraison de produits frais directement chez vous.`,
      },
      {
        title: `Zones desservies`,
        content: `Nous livrons ${vendor.brand} à Guéliz, Hivernage, Agdal, Massira, Daoudiate, Targa, M'Hamid, Sidi Ghanem, Route de Casablanca, Route de l'Ourika, Médina, Semlalia, Palmeraie ainsi que dans tous les quartiers de Marrakech.`,
      },
    ],
  };
    default:
      return null;
  }
}
import type { Locale } from "./site-content";
import type { ServiceVendor } from "./services-data";

export function getVendorSEOContent(
  serviceSlug: string,
  vendor: ServiceVendor,
  locale: Locale = "fr"
) {
  switch (serviceSlug) {
    case "restaurants":
  return {
    heading: `🍔 Livraison ${vendor.name} à Marrakech`,
    sections: [
      {
        title: `🛵 Livraison ${vendor.name} à domicile`,
        content: `Envie d'un bon repas ? 🍽️ Livreur Marrakech récupère votre commande directement chez ${vendor.name} et assure une livraison rapide à domicile, au bureau, à l'hôtel ou au riad. Notre service de livraison de repas est disponible 24h/24 pour satisfaire toutes vos envies.`,
      },
      {
        title: `Ce que nous vous livrons depuis ${vendor.name} :`,
        content: `🍔 Burgers, pizzas, tacos et plats rapides\n🥗 Salades, plats traditionnels et spécialités\n🍰 Desserts et gourmandises\n🥤 Boissons fraîches`,
      },
      {
        title: "⭐ Pourquoi choisir notre service ?",
        content: `⚡ Livraison express pour que vos repas arrivent bien chauds\n🕒 Service disponible 24h/24 (idéal pour la nuit)\n📲 Commande simple et directe via WhatsApp\n🤝 Suivi de commande et service professionnel`,
      },
      {
        title: "📍 Quartiers desservis à Marrakech",
        content: `Nous livrons rapidement à : Guéliz, l'Hivernage, l'Agdal, Massira, Daoudiate, Targa, M'Hamid, Sidi Ghanem, la Palmeraie, Route de Casablanca, Route de l'Ourika, la Médina, Semlalia et dans tous les quartiers de la ville ocre.`,
      },
    ],
  };
case "pharmacies":
  return {
    heading: `💊 Livraison Pharmacie ${vendor.name} à Marrakech`,
    sections: [
      {
          
          title: `🛵 Service de livraison ${vendor.name}`,
          content: `Besoin d'un médicament en urgence ? 🏥 Notre service assure une livraison rapide et sécurisée depuis la pharmacie ${vendor.name} directement à votre domicile. Un service idéal pour vos urgences de nuit ou vos besoins quotidiens.`,
        },
      {
        title: "Ce que nous vous livrons :",
        content: `💊 Médicaments (avec ou sans ordonnance)\n🩹 Produits de parapharmacie et soins\n👶 Lait et produits pour bébé\n🩺 Matériel de premiers secours`,
      },
      {
        title: "⭐ Pourquoi nous choisir ?",
        content: `⚡ Livraison express partout à Marrakech\n🕒 Service de garde disponible 24h/24\n📲 Commande simple et rapide via WhatsApp\n🤝 Discrétion totale et professionnalisme`,
      },
      {
        title: "📍 Zones desservies à Marrakech",
        content: `Nous livrons rapidement à : Guéliz, l'Hivernage, l'Agdal, Massira, Daoudiate, Targa, M'Hamid, la Médina et tous les autres quartiers.`,
      },
    ],
  };
    case "supermarkets":
  return {
    heading: `🛒 Livraison ${vendor.brand} à Marrakech`,
    sections: [
      {
        title: `🛵 Vos courses ${vendor.brand} livrées à domicile`,
        content: `Pas le temps de faire les courses ? 🛍️ Livreur Marrakech récupère vos achats directement chez ${vendor.brand} et vous les livre rapidement à domicile, au bureau ou à l'hôtel. Évitez les files d'attente et recevez vos produits sans avoir à vous déplacer.`,
      },
      {
        title: `Ce que nous vous livrons depuis ${vendor.brand} :`,
        content: `🍎 Fruits et légumes frais\n🥩 Viandes, volailles et produits laitiers\n🥤 Boissons, snacks et produits surgelés\n🧼 Produits ménagers, d'hygiène et articles pour bébé`,
      },
      {
        title: "⭐ Pourquoi choisir notre service ?",
        content: `⚡ Livraison rapide et soignée de vos courses\n🕒 Service disponible 24h/24 et 7j/7\n📲 Commande simple avec une simple liste sur WhatsApp\n🤝 Gain de temps absolu et confort garanti`,
      },
      {
        title: "📍 Quartiers desservis à Marrakech",
        content: `Nous livrons vos achats dans un délai record à : Guéliz, l'Hivernage, l'Agdal, Massira, Daoudiate, Targa, M'Hamid, Sidi Ghanem, la Médina, la Palmeraie et dans tous les quartiers de la ville ocre.`,
      },
    ],
  };case "fleurs":
  return {
    heading: `Livraison ${vendor.brand} à Marrakech`,
    sections: [
      {
        title: `Livraison ${vendor.brand} à domicile`,
        content: `Vous recherchez une livraison ${vendor.brand} à Marrakech ? Livreur Marrakech récupère vos bouquets, compositions florales et cadeaux directement chez ${vendor.brand} et les livre rapidement à votre domicile, bureau, hôtel ou au destinataire de votre choix partout à Marrakech.`,
      },
      {
        title: `Bouquets et fleurs disponibles chez ${vendor.brand}`,
        content: `Nous livrons des bouquets de roses, fleurs fraîches, compositions florales, plantes décoratives, cadeaux fleuris, fleurs de mariage, bouquets d'anniversaire, cadeaux de naissance, fleurs de fête et toutes les créations florales proposées par ${vendor.brand}.`,
      },
      {
        title: `Pourquoi choisir Livreur Marrakech ?`,
        content: `Notre service assure une livraison de fleurs rapide, fiable et professionnelle partout à Marrakech. Commandez facilement par WhatsApp, choisissez votre fleuriste préféré et nous livrons vos fleurs fraîches avec le plus grand soin.`,
      },
      {
        title: `Zones desservies à Marrakech`,
        content: `Nous assurons la livraison ${vendor.brand} à Guéliz, Hivernage, Agdal, Massira, Daoudiate, Targa, Sidi Ghanem, M'Hamid, Palmeraie, Médina, Route de Casablanca, Route de l'Ourika et dans tous les quartiers de Marrakech.`,
      },
    ],
  };
  case "cosmetics":
  return {
    heading: `✨ Livraison de cosmétiques ${vendor.brand} à Marrakech`,
    sections: [
      {
        title: `🛵 Vos produits de beauté ${vendor.brand} à domicile`,
        content: `Besoin de vos produits de beauté préférés rapidement ? 🌸 Livreur Marrakech récupère vos commandes directement chez ${vendor.brand} et vous les livre en un clin d'œil à domicile, au bureau ou à l'hôtel. Prenez soin de vous sans avoir à vous déplacer.`,
      },
      {
        title: `Gamme de soins et produits ${vendor.brand} :`,
        content: `✨ Maquillage, parfums et soins du visage\n🌿 Crèmes naturelles, capsules de bien-être et produits à base d'herbes\n💆‍♀️ Soins capillaires (soins leave-in, kératine et huiles)\n☀️ Protections solaires, soins dermatologiques et anti-âge`,
      },
      {
        title: "⭐ Pourquoi faire appel à nos coursiers ?",
        content: `⚡ Livraison express pour recevoir vos articles de beauté rapidement\n🕒 Service disponible 24h/24 et 7j/7\n📲 Commande simple via WhatsApp pour un gain de temps\n🤝 Transport soigné pour protéger vos produits délicats`,
      },
      {
        title: "📍 Tous les quartiers de Marrakech couverts",
        content: `Nous livrons vos cosmétiques à : Guéliz, l'Hivernage, l'Agdal, Massira, Daoudiate, Targa, Sidi Ghanem, M'Hamid, la Palmeraie, Route de Casablanca, Route de l'Ourika, la Médina et dans l'ensemble de la ville ocre.`,
      },
    ],
  }; case "shopping":
    return {
      heading: `Livraison ${vendor.brand} à Marrakech`,
      sections: [
        {
          title: `Livraison ${vendor.brand} à domicile`,
          content: `Vous recherchez une livraison ${vendor.brand} à Marrakech ? Livreur Marrakech récupère vos achats directement chez ${vendor.brand} et les livre rapidement à votre domicile, bureau, hôtel ou riad partout à Marrakech.`,
        },
        {
          title: `Produits disponibles chez ${vendor.brand}`,
          content: `Nous pouvons livrer des vêtements, chaussures, sacs, accessoires de mode, produits de beauté, articles high-tech, électronique, décoration, articles pour la maison, équipements de sport, jouets, cadeaux et tous les produits disponibles chez ${vendor.brand}.`,
        },
        {
          title: `Pourquoi choisir Livreur Marrakech ?`,
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
    heading: `📦 Livraison de colis et documents ${vendor.brand} à Marrakech`,
    sections: [
      {
        title: `🛵 Expédition et livraison ${vendor.brand}`,
        content: `Besoin d'envoyer ou de recevoir un colis en urgence ? 📦 Livreur Marrakech récupère vos paquets, documents et envois directement chez ${vendor.brand} et assure une livraison rapide et sécurisée à domicile, au bureau, ou à l'adresse de votre choix à Marrakech.`,
      },
      {
        title: `Ce que nous transportons et livrons :`,
        content: `📄 Documents administratifs, contrats et courriers sensibles\n📦 Petits colis, paquets et commandes e-commerce\n🎁 Cadeaux et envois spéciaux pour vos proches\n⚙️ Pièces détachées et équipements professionnels`,
      },
      {
        title: "⭐ Pourquoi faire confiance à nos coursiers ?",
        content: `⚡ Rapidité d'exécution pour respecter vos délais\n🕒 Service de livraison disponible 24h/24 et 7j/7\n📲 Commande et suivi simples via WhatsApp\n🤝 Sécurité, discrétion et manipulation soignée de vos biens`,
      },
      {
        title: "📍 Quartiers desservis à Marrakech",
        content: `Nous assurons la livraison de vos colis à : Guéliz, l'Hivernage, l'Agdal, Massira, Daoudiate, Targa, M'Hamid, Sidi Ghanem, la Palmeraie, Route de Casablanca, Route de l'Ourika, la Médina, Semlalia et dans toute la ville ocre.`,
      },
    ],
  };case "documents":
  return {
    heading: `Livraison ${vendor.brand} à Marrakech`,
    sections: [
      {
        title: `Livraison de documents ${vendor.brand}`,
        content: `Besoin d'une livraison de documents à Marrakech ? Livreur Marrakech récupère vos documents chez ${vendor.brand} et les livre rapidement à votre domicile, bureau, administration, entreprise ou tout autre lieu à Marrakech en toute confidentialité.`,
      },
      {
        title: `Documents pris en charge`,
        content: `Nous livrons tous types de documents : contrats, dossiers administratifs, documents bancaires, documents médicaux, certificats, factures, courriers, dossiers juridiques, impressions, photocopies, reliures, plastifications et autres documents importants.`,
      },
      {
        title: `Pourquoi choisir Livreur Marrakech ?`,
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
    heading: `🥐 Livraison boulangerie et pâtisserie ${vendor.brand} à Marrakech`,
    sections: [
      {
        title: `🛵 Pain frais et viennoiseries ${vendor.brand}`,
        content: `Envie de savourer du pain chaud ou des viennoiseries tout juste sortis du four ? 🥖 Livreur Marrakech récupère votre commande directement chez ${vendor.brand} et vous la livre rapidement à domicile, au bureau, à l'hôtel ou au riad pour commencer la journée du bon pied.`,
      },
      {
        title: `Ce que nous vous livrons depuis ${vendor.brand} :`,
        content: `🥖 Pains artisanaux, baguettes croustillantes et pains spéciaux\n🥐 Croissants, pains au chocolat et viennoiseries dorées\n🎂 Pâtisseries fines, gâteaux d'anniversaire, tartes et macarons\n☕ Sandwiches, cafés, boissons et formules petit-déjeuner`,
      },
      {
        title: "⭐ Pourquoi choisir notre service ?",
        content: `⚡ Livraison express pour que vos produits arrivent frais et croustillants\n🕒 Service idéal pour vos petits-déjeuners et pauses gourmandes\n📲 Commande simple et rapide via WhatsApp\n🤝 Soin particulier apporté pour transporter vos pâtisseries délicates`,
      },
      {
        title: "📍 Quartiers desservis à Marrakech",
        content: `Nous livrons ${vendor.brand} rapidement à : Guéliz, l'Hivernage, l'Agdal, Massira, Daoudiate, Targa, M'Hamid, Sidi Ghanem, Route de Casablanca, Route de l'Ourika, la Médina, Semlalia, la Palmeraie et dans tous les quartiers de la ville ocre.`,
      },
    ],
  };default:
      return null;
  }
}
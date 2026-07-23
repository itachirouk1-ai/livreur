import type { Locale } from "./site-content";
import type { ServiceVendor } from "./services-data";

export function getVendorSEOContent(
  serviceSlug: string,
  vendor: ServiceVendor,
  locale: Locale = "fr"
) {
  if (!vendor || !serviceSlug) return null;

  const vendorName = vendor.name || vendor.brand || "";
  const slug = serviceSlug.toLowerCase().trim();
  const isEn = String(locale).toLowerCase().startsWith("en");

  switch (slug) {
    case "restaurants":
      return isEn
        ? {
            heading: `🍔 ${vendorName} Delivery in Marrakech`,
            sections: [
              {
                title: `🛵 ${vendorName} Home Delivery`,
                content: `Craving a great meal? 🍽️ Livreur Marrakech picks up your order directly from ${vendorName} and ensures fast delivery to your home, office, hotel, or riad. Our food delivery service is available 24/7 to satisfy all your cravings.`,
              },
              {
                title: `What we deliver from ${vendorName}:`,
                content: `🍔 Burgers, pizzas, tacos, and fast food\n🥗 Salads, traditional dishes, and specialties\n🍰 Desserts and sweet treats\n🥤 Cold beverages`,
              },
              {
                title: "⭐ Why choose our service?",
                content: `⚡ Express delivery so your meals arrive piping hot\n🕒 24/7 service available (ideal for late nights)\n📲 Simple and direct ordering via WhatsApp\n🤝 Order tracking and professional service`,
              },
              {
                title: "📍 Neighborhoods served in Marrakech",
                content: `We deliver quickly to: Guéliz, Hivernage, Agdal, Massira, Daoudiate, Targa, M'Hamid, Sidi Ghanem, Palmeraie, Route de Casablanca, Route de l'Ourika, Medina, Semlalia, and all neighborhoods across the ochre city.`,
              },
            ],
          }
        : {
            heading: `🍔 Livraison ${vendorName} à Marrakech`,
            sections: [
              {
                title: `🛵 Livraison à domicile ${vendorName}`,
                content: `Envie d'un bon repas ? 🍽️ Livreur Marrakech récupère votre commande directement chez ${vendorName} et assure une livraison rapide à votre domicile, bureau, hôtel ou riad. Notre service de livraison de repas est disponible 24/7 pour satisfaire toutes vos envies.`,
              },
              {
                title: `Ce que nous livrons depuis ${vendorName} :`,
                content: `🍔 Burgers, pizzas, tacos et fast-food\n🥗 Salades, plats traditionnels et spécialités\n🍰 Desserts et douceurs\n🥤 Boissons fraîches`,
              },
              {
                title: "⭐ Pourquoi choisir notre service ?",
                content: `⚡ Livraison express pour que vos repas arrivent bien chauds\n🕒 Service disponible 24/7 (idéal pour les envies nocturnes)\n📲 Commande simple et directe via WhatsApp\n🤝 Suivi de commande et service professionnel`,
              },
              {
                title: "📍 Quartiers desservis à Marrakech",
                content: `Nous livrons rapidement à : Guéliz, Hivernage, Agdal, Massira, Daoudiate, Targa, M'Hamid, Sidi Ghanem, Palmeraie, Route de Casablanca, Route de l'Ourika, Médina, Semlalia, et tous les quartiers de la ville ocre.`,
              },
            ],
          };

    case "pharmacies":
      return isEn
        ? {
            heading: `💊 Pharmacy Delivery from ${vendorName} in Marrakech`,
            sections: [
              {
                title: `🛵 ${vendorName} Delivery Service`,
                content: `Need urgent medication? 🏥 Our service guarantees fast and safe delivery from ${vendorName} pharmacy straight to your door. An ideal service for night emergencies or daily needs.`,
              },
              {
                title: "What we deliver:",
                content: `💊 Medications (with or without prescription)\n🩹 Parapharmacy products and skincare\n👶 Baby milk and baby products\n🩺 First aid equipment`,
              },
              {
                title: "⭐ Why choose us?",
                content: `⚡ Express delivery anywhere in Marrakech\n🕒 24/7 duty pharmacy service available\n📲 Simple and fast ordering via WhatsApp\n🤝 Total discretion and professionalism`,
              },
              {
                title: "📍 Coverage areas in Marrakech",
                content: `We deliver quickly to: Guéliz, Hivernage, Agdal, Massira, Daoudiate, Targa, M'Hamid, Medina, and all other neighborhoods.`,
              },
            ],
          }
        : {
            heading: `💊 Livraison Pharmacie ${vendorName} à Marrakech`,
            sections: [
              {
                title: `🛵 Service de livraison ${vendorName}`,
                content: `Besoin d'un médicament en urgence ? 🏥 Notre service vous garantit une livraison rapide et sécurisée depuis la pharmacie ${vendorName} directement à votre porte. Un service idéal pour les urgences nocturnes ou les besoins quotidiens.`,
              },
              {
                title: "Ce que nous livrons :",
                content: `💊 Médicaments (avec ou sans ordonnance)\n🩹 Produits de parapharmacie et soins\n👶 Lait infantile et produits pour bébé\n🩺 Matériel de premier secours`,
              },
              {
                title: "⭐ Pourquoi nous choisir ?",
                content: `⚡ Livraison express partout à Marrakech\n🕒 Service pharmacie de garde disponible 24/7\n📲 Commande simple et rapide via WhatsApp\n🤝 Discrétion et professionnalisme garantis`,
              },
              {
                title: "📍 Zones de couverture à Marrakech",
                content: `Nous livrons rapidement à : Guéliz, Hivernage, Agdal, Massira, Daoudiate, Targa, M'Hamid, Médina, et tous les autres quartiers.`,
              },
            ],
          };

    case "supermarkets":
      return isEn
        ? {
            heading: `🛒 ${vendorName} Grocery Delivery in Marrakech`,
            sections: [
              {
                title: `🛵 Your ${vendorName} groceries delivered to your door`,
                content: `No time to go grocery shopping? 🛍️ Livreur Marrakech collects your purchases directly from ${vendorName} and delivers them fast to your home, office, or hotel. Skip the lines and get your products without moving.`,
              },
              {
                title: `What we deliver from ${vendorName}:`,
                content: `🍎 Fresh fruits and vegetables\n🥩 Meat, poultry, and dairy products\n🥤 Drinks, snacks, and frozen goods\n🧼 Household items, hygiene products, and baby supplies`,
              },
              {
                title: "⭐ Why choose our service?",
                content: `⚡ Fast and careful grocery delivery\n🕒 Service available 24/7\n📲 Simple ordering with a quick list on WhatsApp\n🤝 Ultimate time saver and guaranteed comfort`,
              },
              {
                title: "📍 Neighborhoods served in Marrakech",
                content: `We deliver your purchases in record time to: Guéliz, Hivernage, Agdal, Massira, Daoudiate, Targa, M'Hamid, Sidi Ghanem, Medina, Palmeraie, and all neighborhoods across the ochre city.`,
              },
            ],
          }
        : {
            heading: `🛒 Livraison Courses ${vendorName} à Marrakech`,
            sections: [
              {
                title: `🛵 Vos courses ${vendorName} livrées chez vous`,
                content: `Pas le temps de faire les courses ? 🛍️ Livreur Marrakech récupère vos achats directement chez ${vendorName} et vous les livre rapidement à domicile, au bureau ou à l'hôtel. Évitez les files d'attente et recevez vos produits sans vous déplacer.`,
              },
              {
                title: `Ce que nous livrons depuis ${vendorName} :`,
                content: `🍎 Fruits et légumes frais\n🥩 Viandes, volailles et produits laitiers\n🥤 Boissons, snacks et produits surgelés\n🧼 Produits ménagers, d'hygiène et pour bébé`,
              },
              {
                title: "⭐ Pourquoi choisir notre service ?",
                content: `⚡ Livraison de courses rapide et soignée\n🕒 Service disponible 24/7\n📲 Commande simple avec une liste rapide sur WhatsApp\n🤝 Gain de temps ultime et confort garanti`,
              },
              {
                title: "📍 Quartiers desservis à Marrakech",
                content: `Nous livrons vos achats en temps record à : Guéliz, Hivernage, Agdal, Massira, Daoudiate, Targa, M'Hamid, Sidi Ghanem, Médina, Palmeraie, et tous les quartiers de la ville ocre.`,
              },
            ],
          };

    case "shopping":
      return isEn
        ? {
            heading: `🛍️ Shopping & Store Delivery from ${vendorName} in Marrakech`,
            sections: [
              {
                title: `🛵 Your purchases from ${vendorName} delivered instantly`,
                content: `Found what you need at ${vendorName}? 🛍️ Livreur Marrakech picks up your shopping bags, boutique items, and orders directly from the store and delivers them straight to your home, office, or hotel with total care.`,
              },
              {
                title: `What we pick up and deliver from ${vendorName}:`,
                content: `👗 Clothing, shoes, and fashion accessories\n📱 Electronics, gadgets, and tech items\n🎁 Gifts, home decor, and specialty items\n🛍️ All orders and retail purchases from ${vendorName}`,
              },
              {
                title: "⭐ Why use our shopping delivery service?",
                content: `⚡ Fast and secure transport for all your retail items\n🕒 Flexible delivery times to fit your schedule\n📲 Easy ordering or pickup coordination via WhatsApp\n🤝 Professional handlers ensuring your items arrive pristine`,
              },
              {
                title: "📍 Neighborhoods served in Marrakech",
                content: `We deliver your shopping items to: Guéliz, Hivernage, Agdal, Massira, Daoudiate, Targa, M'Hamid, Sidi Ghanem, Palmeraie, Route de Casablanca, Route de l'Ourika, Medina, and all neighborhoods across the ochre city.`,
              },
            ],
          }
        : {
            heading: `🛍️ Livraison Shopping & Boutiques ${vendorName} à Marrakech`,
            sections: [
              {
                title: `🛵 Vos achats chez ${vendorName} livrés instantanément`,
                content: `Vous avez trouvé ce qu'il vous faut chez ${vendorName} ? 🛍️ Livreur Marrakech récupère vos sacs de shopping, articles de boutique et commandes directement en magasin et vous les livre rapidement à domicile, au bureau ou à l'hôtel avec le plus grand soin.`,
              },
              {
                title: `Ce que nous récupérons et livrons depuis ${vendorName} :`,
                content: `👗 Vêtements, chaussures et accessoires de mode\n📱 Électronique, gadgets et produits tech\n🎁 Cadeaux, décoration d'intérieur et articles spécialisés\n🛍️ Toutes commandes et achats en boutique chez ${vendorName}`,
              },
              {
                title: "⭐ Pourquoi utiliser notre service de livraison shopping ?",
                content: `⚡ Transport rapide et sécurisé pour tous vos articles de magasin\n🕒 Horaires de livraison flexibles pour s'adapter à votre emploi du temps\n📲 Commande ou coordination de retrait facile via WhatsApp\n🤝 Coursiers professionnels garantissant l'arrivée intacte de vos articles`,
              },
              {
                title: "📍 Quartiers desservis à Marrakech",
                content: `Nous livrons vos articles de shopping à : Guéliz, Hivernage, Agdal, Massira, Daoudiate, Targa, M'Hamid, Sidi Ghanem, Palmeraie, Route de Casablanca, Route de l'Ourika, Médina, et tous les quartiers de la ville ocre.`,
              },
            ],
          };

    case "fleurs":
      return isEn
        ? {
            heading: `💐 Flower and Bouquet Delivery from ${vendorName} in Marrakech`,
            sections: [
              {
                title: `🛵 Your ${vendorName} flowers and gifts delivered with care`,
                content: `Want to brighten someone's day or mark a special occasion? 🌷 Livreur Marrakech retrieves your bouquets and floral arrangements directly from ${vendorName} and ensures fast delivery to your home, office, hotel, or directly to the recipient of your choice. A beautiful surprise delivered in a flash!`,
              },
              {
                title: `Floral creations we deliver:`,
                content: `🌹 Romantic rose bouquets and fresh seasonal flowers\n🌷 Decorative plants and elegant floral arrangements\n🎀 Flower gifts for birthdays, weddings, celebrations, and newborns\n💐 All custom creations offered by ${vendorName}`,
              },
              {
                title: "⭐ Why entrust us with your flower delivery?",
                content: `⚡ Express delivery to guarantee vibrant freshness\n🤝 Extremely delicate handling to protect your bouquets\n📲 Simple ordering via WhatsApp (perfect for last-minute surprises)\n💌 Friendly hand-to-hand delivery with a smile`,
              },
              {
                title: "📍 Neighborhoods served in Marrakech",
                content: `We deliver your thoughtful gifts to: Guéliz, Hivernage, Agdal, Massira, Daoudiate, Targa, Sidi Ghanem, M'Hamid, Palmeraie, Medina, Route de Casablanca, Route de l'Ourika, and all areas of the ochre city.`,
              },
            ],
          }
        : {
            heading: `💐 Livraison Fleurs et Bouquets ${vendorName} à Marrakech`,
            sections: [
              {
                title: `🛵 Vos fleurs et cadeaux ${vendorName} livrés avec soin`,
                content: `Envie de faire plaisir ou de marquer une occasion spéciale ? 🌷 Livreur Marrakech récupère vos bouquets et compositions florales directement chez ${vendorName} et assure une livraison rapide à votre domicile, bureau, hôtel, ou directement au destinataire de votre choix. Une belle surprise livrée en un éclair !`,
              },
              {
                title: `Créations florales que nous livrons :`,
                content: `🌹 Bouquets de roses romantiques et fleurs fraîches de saison\n🪴 Plantes décoratives et arrangements floraux élégants\n🎀 Cadeaux floraux pour anniversaires, mariages, fêtes et naissances\n💐 Toutes les créations sur-mesure proposées par ${vendorName}`,
              },
              {
                title: "⭐ Pourquoi nous confier votre livraison de fleurs ?",
                content: `⚡ Livraison express pour garantir une fraîcheur éclatante\n🤝 Manipulation extrêmement délicate pour protéger vos bouquets\n📲 Commande simple via WhatsApp (parfait pour les surprises de dernière minute)\n💌 Remise en main propre chaleureuse et avec le sourire`,
              },
              {
                title: "📍 Quartiers desservis à Marrakech",
                content: `Nous livrons vos attentions à : Guéliz, Hivernage, Agdal, Massira, Daoudiate, Targa, Sidi Ghanem, M'Hamid, Palmeraie, Médina, Route de Casablanca, Route de l'Ourika, et toutes les zones de la ville ocre.`,
              },
            ],
          };

    case "documents":
      return isEn
        ? {
            heading: `📄 Document Delivery from ${vendorName} in Marrakech`,
            sections: [
              {
                title: `🛵 Express courier for your ${vendorName} documents`,
                content: `Need to send or receive an urgent or confidential document? 📁 Livreur Marrakech picks up your mail and documents from ${vendorName} and ensures fast, secure hand delivery. A professional courier service ideal for businesses, offices, and individuals.`,
              },
              {
                title: `What we transport securely:`,
                content: `📑 Contracts, notarized deeds, and legal or accounting documents\n🪪 ID cards, passports, and urgent administrative files\n✉️ Sensitive mail, confidential files, and registered letters\n🖨️ Professional prints, blueprints, and invoices`,
              },
              {
                title: "⭐ Why use our courier service?",
                content: `⚡ Fast and secure hand delivery to the exact address\n🔒 Total confidentiality guaranteed for sensitive documents\n📲 Immediate ordering and delivery tracking via WhatsApp\n🤝 Total time saver for your administrative steps`,
              },
              {
                title: "📍 Business districts and zones served",
                content: `We deliver your documents to: Guéliz, Hivernage, Agdal, Massira, Daoudiate, Targa, M'Hamid, Sidi Ghanem industrial area, Palmeraie, Medina, and everywhere across the ochre city.`,
              },
            ],
          }
        : {
            heading: `📄 Livraison Documents ${vendorName} à Marrakech`,
            sections: [
              {
                title: `🛵 Coursier express pour vos documents ${vendorName}`,
                content: `Besoin d'envoyer ou de recevoir un document urgent ou confidentiel ? 📁 Livreur Marrakech récupère vos courriers et documents chez ${vendorName} et garantit une remise en main propre rapide et sécurisée. Un service de coursier professionnel idéal pour les entreprises, bureaux et particuliers.`,
              },
              {
                title: `Ce que nous transportons en toute sécurité :`,
                content: `📑 Contrats, actes notariés et documents juridiques ou comptables\n🪪 Cartes d'identité, passeports et dossiers administratifs urgents\n✉️ Courriers sensibles, plis confidentiels et lettres recommandées\n🖨️ Impressions professionnelles, plans et factures`,
              },
              {
                title: "⭐ Pourquoi utiliser notre service de coursier ?",
                content: `⚡ Remise en main propre rapide et sécurisée à l'adresse exacte\n🔒 Confidentialité totale garantie pour vos documents sensibles\n📲 Commande immédiate et suivi de livraison via WhatsApp\n🤝 Gain de temps précieux pour vos démarches administratives`,
              },
              {
                title: "📍 Quartiers d'affaires et zones desservies",
                content: `Nous livrons vos documents à : Guéliz, Hivernage, Agdal, Massira, Daoudiate, Targa, M'Hamid, zone industrielle Sidi Ghanem, Palmeraie, Médina, et partout dans la ville ocre.`,
              },
            ],
          };

    case "cosmetics":
      return isEn
        ? {
            heading: `✨ Cosmetics Delivery from ${vendorName} in Marrakech`,
            sections: [
              {
                title: `🛵 Your ${vendorName} beauty products delivered to your door`,
                content: `Need your favorite beauty products fast? 🌸 Livreur Marrakech picks up your orders directly from ${vendorName} and delivers them in a flash to your home, office, or hotel. Take care of yourself without traveling.`,
              },
              {
                title: `Skincare and product range from ${vendorName}:`,
                content: `✨ Makeup, perfumes, and facial care\n🌿 Natural creams, wellness capsules, and herbal products\n💆‍♀️ Hair care (leave-in treatments, keratin, and oils)\n☀️ Sun protection, dermatological care, and anti-aging`,
              },
              {
                title: "⭐ Why call our couriers?",
                content: `⚡ Express delivery to receive your beauty items quickly\n🕒 24/7 service available\n📲 Simple ordering via WhatsApp to save time\n🤝 Careful transport to protect delicate products`,
              },
              {
                title: "📍 All Marrakech neighborhoods covered",
                content: `We deliver your cosmetics to: Guéliz, Hivernage, Agdal, Massira, Daoudiate, Targa, Sidi Ghanem, M'Hamid, Palmeraie, Route de Casablanca, Route de l'Ourika, Medina, and across the entire ochre city.`,
              },
            ],
          }
        : {
            heading: `✨ Livraison Cosmétiques ${vendorName} à Marrakech`,
            sections: [
              {
                title: `🛵 Vos produits de beauté ${vendorName} livrés chez vous`,
                content: `Besoin de vos produits de beauté préférés rapidement ? 🌸 Livreur Marrakech récupère vos commandes directement chez ${vendorName} et vous les livre en un éclair à domicile, au bureau ou à l'hôtel. Prenez soin de vous sans vous déplacer.`,
              },
              {
                title: `Gamme de soins et produits chez ${vendorName} :`,
                content: `✨ Maquillage, parfums et soins du visage\n🌿 Crèmes naturelles, gélules bien-être et produits d'herboristerie\n💆‍♀️ Soins capillaires (soins sans rincage, kératine et huiles)\n☀️ Protections solaires, soins dermatologiques et anti-âge`,
              },
              {
                title: "⭐ Pourquoi faire appel à nos coursiers ?",
                content: `⚡ Livraison express pour recevoir vos articles de beauté rapidement\n🕒 Service disponible 24/7\n📲 Commande simple via WhatsApp pour gagner du temps\n🤝 Transport soigné pour protéger les produits délicats`,
              },
              {
                title: "📍 Tous les quartiers de Marrakech couverte",
                content: `Nous livrons vos cosmétiques à : Guéliz, Hivernage, Agdal, Massira, Daoudiate, Targa, Sidi Ghanem, M'Hamid, Palmeraie, Route de Casablanca, Route de l'Ourika, Médina, et dans toute la ville ocre.`,
              },
            ],
          };

    case "colis":
      return isEn
        ? {
            heading: `📦 Parcel and Document Delivery from ${vendorName} in Marrakech`,
            sections: [
              {
                title: `🛵 Shipping and delivery for ${vendorName}`,
                content: `Need to send or receive a parcel urgently? 📦 Livreur Marrakech collects your packages, documents, and shipments directly from ${vendorName} and ensures fast, secure delivery to your home, office, or chosen address in Marrakech.`,
              },
              {
                title: `What we transport and deliver:`,
                content: `📄 Administrative documents, contracts, and sensitive mail\n📦 Small parcels, packages, and e-commerce orders\n🎁 Gifts and special deliveries for loved ones\n⚙️ Spare parts and professional equipment`,
              },
              {
                title: "⭐ Why trust our couriers?",
                content: `⚡ Fast execution to meet your deadlines\n🕒 Delivery service available 24/7\n📲 Easy ordering and tracking via WhatsApp\n🤝 Security, discretion, and careful handling of your goods`,
              },
              {
                title: "📍 Neighborhoods served in Marrakech",
                content: `We deliver your parcels to: Guéliz, Hivernage, Agdal, Massira, Daoudiate, Targa, M'Hamid, Sidi Ghanem, Palmeraie, Route de Casablanca, Route de l'Ourika, Medina, Semlalia, and all across the ochre city.`,
              },
            ],
          }
        : {
            heading: `📦 Livraison Colis et Paquets ${vendorName} à Marrakech`,
            sections: [
              {
                title: `🛵 Expédition et livraison pour ${vendorName}`,
                content: `Besoin d'envoyer ou de recevoir un colis en urgence ? 📦 Livreur Marrakech récupère vos paquets, documents et envois directement chez ${vendorName} et garantit une livraison rapide et sécurisée à votre domicile, bureau ou adresse de votre choix à Marrakech.`,
              },
              {
                title: `Ce que nous transportons et livrons :`,
                content: `📄 Documents administratifs, contrats et courriers sensibles\n📦 Petits colis, paquets et commandes e-commerce\n🎁 Cadeaux et livraisons spéciales pour vos proches\n⚙️ Pièces de rechange et matériel professionnel`,
              },
              {
                title: "⭐ Pourquoi faire confiance à nos coursiers ?",
                content: `⚡ Exécution rapide pour respecter vos délais\n🕒 Service de livraison disponible 24/7\n📲 Commande et suivi faciles via WhatsApp\n🤝 Sécurité, discrétion et soin apporté à vos marchandises`,
              },
              {
                title: "📍 Quartiers desservis à Marrakech",
                content: `Nous livrons vos colis à : Guéliz, Hivernage, Agdal, Massira, Daoudiate, Targa, M'Hamid, Sidi Ghanem, Palmeraie, Route de Casablanca, Route de l'Ourika, Médina, Semlalia, et partout dans la ville ocre.`,
              },
            ],
          };

    case "boulangerie":
      return isEn
        ? {
            heading: `🥐 Bakery and Pastry Delivery from ${vendorName} in Marrakech`,
            sections: [
              {
                title: `🛵 Fresh bread and pastries from ${vendorName}`,
                content: `Craving warm bread or oven-fresh pastries? 🥖 Livreur Marrakech collects your order directly from ${vendorName} and delivers it quickly to your home, office, hotel, or riad to start the day right.`,
              },
              {
                title: `What we deliver from ${vendorName}:`,
                content: `🥖 Artisanal breads, crispy baguettes, and specialty breads\n🥐 Croissants, pain au chocolat, and golden pastries\n🎂 Fine pastries, birthday cakes, tarts, and macarons\n☕ Sandwiches, coffee, drinks, and breakfast combos`,
              },
              {
                title: "⭐ Why choose our service?",
                content: `⚡ Express delivery so your products arrive fresh and crispy\n🕒 Ideal service for breakfast and snack breaks\n📲 Simple and fast ordering via WhatsApp\n🤝 Special care taken when transporting delicate pastries`,
              },
              {
                title: "📍 Neighborhoods served in Marrakech",
                content: `We deliver from ${vendorName} quickly to: Guéliz, Hivernage, Agdal, Massira, Daoudiate, Targa, M'Hamid, Sidi Ghanem, Route de Casablanca, Route de l'Ourika, Medina, Semlalia, Palmeraie, and all neighborhoods across the ochre city.`,
              },
            ],
          }
        : {
            heading: `🥐 Livraison Boulangerie et Pâtisserie ${vendorName} à Marrakech`,
            sections: [
              {
                title: `🛵 Pain frais et viennoiseries de chez ${vendorName}`,
                content: `Envie de pain chaud ou de viennoiseries sortant du four ? 🥖 Livreur Marrakech récupère votre commande directement chez ${vendorName} et vous la livre rapidement à domicile, au bureau, hôtel ou riad pour bien commencer la journée.`,
              },
              {
                title: `Ce que nous livrons depuis ${vendorName} :`,
                content: `🥖 Pains artisanaux, baguettes croustillantes et pains spécialisés\n🥐 Croissants, pains au chocolat et viennoiseries dorées\n🎂 Pâtisseries fines, gâteaux d'anniversaire, tartes et macarons\n☕ Sandwichs, café, boissons et formules petit-déjeuner`,
              },
              {
                title: "⭐ Pourquoi choisir notre service ?",
                content: `⚡ Livraison express pour que vos produits arrivent frais et croustillants\n🕒 Service idéal pour le petit-déjeuner et les pauses goûter\n📲 Commande simple et rapide via WhatsApp\n🤝 Soin particulier apporté au transport des pâtisseries délicates`,
              },
              {
                title: "📍 Quartiers desservis à Marrakech",
                content: `Nous livrons rapidement depuis ${vendorName} à : Guéliz, Hivernage, Agdal, Massira, Daoudiate, Targa, M'Hamid, Sidi Ghanem, Route de Casablanca, Route de l'Ourika, Médina, Semlalia, Palmeraie, et tous les quartiers de la ville ocre.`,
              },
            ],
          };

    default:
      return null;
  }
}
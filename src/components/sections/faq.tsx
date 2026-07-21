"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { siteContent } from "@/lib/site-content";
import { useLocalePreference } from "@/lib/use-locale";

const frFaqs = [
  {
    question: "Quel est le meilleur livreur Marrakech pour une livraison rapide ?",
    answer:
      "Marrakech Livreur propose une livraison rapide à domicile à Marrakech pour les repas, médicaments, courses, fleurs, documents et colis, avec un service adapté aux urgences et aux commandes du quotidien.",
  },
  {
    question: "Livrez-vous partout à Marrakech ?",
    answer:
      "Oui, nous livrons dans plusieurs quartiers de Marrakech, notamment Guéliz, Hivernage, Agdal, Massira, Daoudiate, Targa, Sidi Ghanem, Palmeraie, Route de Casablanca et la Médina.",
  },
  {
    question: "Proposez-vous une livraison 24h Marrakech ?",
    answer:
      "Oui, nous pouvons répondre à des besoins de livraison 24h Marrakech selon la disponibilité et le type de commande, notamment pour les besoins urgents ou les commandes tardives.",
  },
  {
    question: "Vous livrez aussi des repas de restaurants ?",
    answer:
      "Oui, nous proposons une livraison restaurant Marrakech pour les repas de restaurants, fast-food et plats à emporter, avec une prise en charge rapide et une livraison fiable à domicile.",
  },
  {
    question: "Pouvez-vous livrer des médicaments et produits de santé ?",
    answer:
      "Oui, nous assurons une livraison pharmacie Marrakech pour les médicaments, produits de santé et articles essentiels, avec un service rapide et discret.",
  },
  {
    question: "Comment passer une commande ?",
    answer:
      "Contactez-nous simplement par WhatsApp ou téléphone. Envoyez-nous votre commande ou le lien du restaurant, puis nous nous occupons de tout jusqu'à la livraison.",
  },
];

const enFaqs = [
  {
    question: "What is the best delivery service in Marrakech for fast delivery ?",
    answer:
      "Marrakech Livreur offers fast home delivery in Marrakech for meals, medicines, groceries, flowers, documents and parcels, with a service designed for urgent requests and everyday orders.",
  },
  {
    question: "Do you deliver across Marrakech ?",
    answer:
      "Yes, we deliver across several neighborhoods in Marrakech, including Guéliz, Hivernage, Agdal, Massira, Daoudiate, Targa, Sidi Ghanem, Palmeraie, the Route de Casablanca and the Medina.",
  },
  {
    question: "Do you offer 24h delivery in Marrakech ?",
    answer:
      "Yes, we can support 24h delivery needs in Marrakech depending on availability and the type of order, especially for urgent or late requests.",
  },
  {
    question: "Do you also deliver restaurant meals ?",
    answer:
      "Yes, we provide restaurant delivery in Marrakech for meals, fast food and takeaway orders, with fast pickup and reliable home delivery.",
  },
  {
    question: "Can you deliver medicines and health products ?",
    answer:
      "Yes, we provide pharmacy delivery in Marrakech for medicines, health products and everyday essentials, with a fast and discreet service.",
  },
  {
    question: "How do I place an order ?",
    answer:
      "Simply contact us by WhatsApp or phone. Send us your order or the restaurant link, and we will take care of the rest until delivery.",
  },
];

export default function FAQSection() {
  const locale = useLocalePreference();
  const copy = siteContent[locale];
  const faqs = locale === 'fr' ? frFaqs : enFaqs;
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Background Blur */}
      <div className="absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl dark:bg-orange-500/20" />
      <div className="absolute right-0 top-1/2 -z-10 h-80 w-80 rounded-full bg-red-500/5 blur-3xl" />

    <div className="mx-auto max-w-5xl px-4">

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .5 }}
        className="flex justify-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-600 dark:text-orange-400">
          <HelpCircle className="h-4 w-4" />
          {copy.faqBadge}
        </div>
      </motion.div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: .1 }}
        className="mx-auto mt-6 max-w-3xl text-center"
      >
        <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-6xl">
          {copy.faqHeadingLine1}
          <span className="block bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 bg-clip-text text-transparent">
            {copy.faqHeadingLine2}
          </span>
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
          {copy.faqDescription}
        </p>
      </motion.div>

      {/* FAQ Container */}
<div className="mt-16 space-y-5">
  {faqs.map((faq, index) => {
    const isOpen = openIndex === index;

    return (
      <motion.div
        key={index}
        layout
        transition={{
          duration: 0.35,
          type: "spring",
          stiffness: 120,
          damping: 18,
        }}
        className={`overflow-hidden rounded-3xl border backdrop-blur-xl transition-all duration-300 ${
          isOpen
            ? "border-orange-500/40 bg-gradient-to-br from-orange-500/10 via-red-500/5 to-transparent shadow-2xl shadow-orange-500/10"
            : "border-slate-200 bg-white hover:border-orange-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-orange-500/40"
        }`}
      >
        <button
          onClick={() =>
            setOpenIndex(isOpen ? null : index)
          }
          className="flex w-full items-center justify-between gap-1 p-2 text-left sm:p-1"
        >
          <h3 className="text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
            {faq.question}
          </h3>

          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg"
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
              className="overflow-hidden"
            >
              <div className="border-t border-slate-200 px-6 pb-7 pt-6 dark:border-slate-800 sm:px-8">
                <p className="text-base leading-8 text-slate-600 dark:text-slate-400">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          )}
                </AnimatePresence>
      </motion.div>
    );
  })}
</div>

    </div>
  </section>
    </>
  );
}
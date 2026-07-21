"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Quels types de produits pouvez-vous livrer ?",
    answer:
      "Nous livrons des repas de restaurants, des courses de supermarché, des médicaments de pharmacie, des fleurs, des produits de beauté, des colis, des documents et bien plus encore partout à Marrakech.",
  },
  {
    question: "Combien de temps prend une livraison ?",
    answer:
      "La majorité des livraisons sont effectuées entre 20 et 45 minutes selon votre quartier, le magasin choisi et les conditions de circulation.",
  },
  {
    question: "Comment passer une commande ?",
    answer:
      "Contactez-nous simplement par WhatsApp ou téléphone. Envoyez-nous votre commande ou le lien du restaurant, puis nous nous occupons de tout jusqu'à la livraison.",
  },
  {
    question: "Dans quelles zones de Marrakech livrez-vous ?",
    answer:
      "Nous livrons dans Guéliz, Hivernage, Agdal, Massira, Daoudiate, Targa, Sidi Ghanem, Route de Casablanca et la plupart des quartiers de Marrakech.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
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
          Questions fréquentes
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
          Tout ce que vous devez
          <span className="block bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 bg-clip-text text-transparent">
            savoir
          </span>
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
          Retrouvez les réponses aux questions les plus fréquentes concernant
          notre service de livraison à domicile à Marrakech.
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
);
}
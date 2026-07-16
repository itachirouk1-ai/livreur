'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { contactLinks, siteContent } from '@/lib/site-content';
import { useLocalePreference } from '@/lib/use-locale';

export function Footer() {
  const locale = useLocalePreference();
  const copy = siteContent[locale];

  return (
    <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              {copy.brandName}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {copy.heroDescription}
            </p>
          </div>

          {/* Info Links */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
              {locale === 'fr' ? 'Informations' : 'Information'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                >
                  {locale === 'fr' ? 'Accueil' : 'Home'}
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                >
                  {locale === 'fr' ? 'Services' : 'Services'}
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                >
                  {locale === 'fr' ? 'À propos' : 'About'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
              {locale === 'fr' ? 'Nous contacter' : 'Contact Us'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={contactLinks.phone}
                  className="text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                >
                  {locale === 'fr' ? 'Appeler' : 'Call'}: +212 6 00 00 00 00
                </a>
              </li>
              <li>
                <span className="text-slate-600 dark:text-slate-400">
                  {locale === 'fr' ? 'Disponible 24/7' : 'Available 24/7'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8">
          {/* WhatsApp Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {locale === 'fr'
                ? '© 2024 Allo Livreur Marrakech. Tous droits réservés.'
                : '© 2024 Allo Deliverer Marrakech. All rights reserved.'}
            </p>

            <motion.a
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.536.946-2.504 2.292-2.504 3.964 0 1.744.822 3.357 2.322 4.521l-.333 2.332 2.532-1.313c1.24.657 2.305 1.059 2.715 1.059.033 0 .066 0 .098 0 5.338 0 9.516-4.226 9.516-9.45 0-2.409-.906-4.869-2.562-6.603-1.656-1.735-3.935-2.908-6.784-2.908z" />
              </svg>
              {locale === 'fr' ? 'Nous écrire sur WhatsApp' : 'Message us on WhatsApp'}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

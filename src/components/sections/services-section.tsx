

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { contactLinks, siteContent, withLocaleHref } from '@/lib/site-content';
import { useLocalePreference } from '@/lib/use-locale';
import Image from 'next/image';

interface Service {
   slug: string;
  title: string;
  emoji: string;
  bgGradient: string;
  highlight: boolean;
  image: string;
}

interface ServicesSectionProps {
  services: Service[];
}

export function ServicesSection({ services }: ServicesSectionProps) {
  const locale = useLocalePreference();
  const copy = siteContent[locale];

  const handleWhatsApp = () => {
    window.open(contactLinks.whatsapp, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="services" className="mx-auto mt-2 sm:mt-2 max-w-7xl px-2 sm:px-0">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-12 sm:mb-16 text-center"
      >
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-slate-950 dark:text-white">
          
          <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
            {copy.servicesHeadingLine2}
          </span>
        </h2>
        <p className="mt-3 sm:mt-4 max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-300 mx-auto">
          {copy.servicesSubtitle}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-2 xl:gap-8">
        {services.map((service, index) => (
          <div key={service.title} className="flex flex-col gap-3">
            <Link href={withLocaleHref(`/${service.slug}`, locale)}>
              <motion.div
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col cursor-pointer group"
              >
                <motion.article
  whileHover={{ y: -8, scale: 1.02 }}
  className="group relative flex-1 overflow-hidden rounded-[28px] sm:rounded-[32px] shadow-[0_24px_54px_rgba(15,23,42,0.14)] transition-all duration-300 hover:shadow-[0_32px_64px_rgba(249,115,22,0.18)]"
>
  {/* Background Image */}
  <Image
    src={service.image}
    alt={service.title}
    fill
    className="object-cover transition-transform duration-700 group-hover:scale-110"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/35" />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

  {/* Content */}
  <div className="relative flex h-56 sm:h-72 flex-col items-center justify-center p-6 sm:p-8 text-center">
    <div className="text-5xl sm:text-7xl transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6">
      {service.emoji}
    </div>

    <h3 className="mt-4 sm:mt-6 text-xl sm:text-3xl font-bold text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
      {service.title}
    </h3>
  </div>
</motion.article>
              </motion.div>
            </Link>

            <Button
              onClick={handleWhatsApp}
              className="mt-0 w-full h-11 sm:h-12 rounded-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-600 px-4 sm:px-6 text-sm sm:text-base font-bold text-white shadow-[0_12px_30px_rgba(16,185,129,0.35)] hover:shadow-[0_16px_36px_rgba(16,185,129,0.45)] transition-all hover:scale-[1.02]"
            >
              <svg
                className="mr-2 h-5 w-5 fill-current inline"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.536.946-2.504 2.292-2.504 3.964 0 1.744.822 3.357 2.322 4.521l-.333 2.332 2.532-1.313c1.24.657 2.305 1.059 2.715 1.059.033 0 .066 0 .098 0 5.338 0 9.516-4.226 9.516-9.45 0-2.409-.906-4.869-2.562-6.603-1.656-1.735-3.935-2.908-6.784-2.908z" />
              </svg>
              {copy.orderOnWhatsApp}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}

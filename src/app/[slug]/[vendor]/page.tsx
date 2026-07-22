
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { connection } from 'next/server';

import { Header } from '@/components/sections/header';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { getLocalizedServiceContent, getLocalizedVendorContent, getServiceBySlug, getVendorByServiceAndId } from '@/lib/services-data';
import { contactLinks, getLocaleFromQuery, siteContent, type Locale } from '@/lib/site-content';
import { AnimatedCallButton } from '@/components/ui/AnimatedCallButton';
import { AnimatedJoinButton } from '@/components/ui/animated-join-button';
import { buildVendorPageMetadata } from '@/lib/seo';
import { getVendorSEOContent } from '@/lib/vendor-seo';

interface VendorPageProps {
  params: Promise<{
    slug: string;
    vendor: string;
  }>;
  searchParams: Promise<{
    lang?: string;
  }>;
}

export async function generateMetadata({ params, searchParams }: VendorPageProps) {
  await connection();
  const { slug, vendor } = await params;
  await searchParams;
  const service = getServiceBySlug(slug);
  const vendorData = getVendorByServiceAndId(slug, vendor);

  const locale = (await searchParams).lang?.toLowerCase() === 'en' ? 'en' : 'fr';

  if (!service || !vendorData) {
    return {
      title: locale === 'en' ? 'Vendor not found' : 'Vendeur non trouvé',
      description: locale === 'en' ? 'The requested vendor page could not be found.' : 'Page de vendeur introuvable.',
    };
  }

  return buildVendorPageMetadata(slug, vendor);
}

export default async function VendorPage({ params, searchParams }: VendorPageProps) {
  await connection();
  const { slug, vendor } = await params;
  const locale: Locale = getLocaleFromQuery((await searchParams).lang);
  const copy = siteContent[locale];
  const service = getServiceBySlug(slug);
  const vendorData = getVendorByServiceAndId(slug, vendor);
  const localizedService = service ? getLocalizedServiceContent(service.slug, locale) : null;

  if (!service || !vendorData) {
    notFound();
  }

  const vendorSeo = getVendorSEOContent(slug, vendorData, locale);

return (
  <>
    <Header />

    <Breadcrumb
      items={[
        {
          label: localizedService?.title || service.title,
          href: `/${slug}${locale !== "fr" ? `?lang=${locale}` : ""}`,
        },
        {
          label: getLocalizedVendorContent(slug, vendorData, locale).brand,
          href: `/${slug}/${vendor}${locale !== "fr" ? `?lang=${locale}` : ""}`,
        },
      ]}
      showBack
    />

    <main className="px-3 pb-1 pt-1 sm:px-3 lg:px-3 lg:pt-3">
      <section className="grid gap-1">
        <div className="mx-auto w-full max-w-6xl space-y-8">
          <div>
            <div className="flex items-center rounded-3xl bg-slate-50 p-2 shadow-sm dark:bg-slate-900 sm:p-2">
              <div className="w-full text-center lg:text-center">
                <h1 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {getLocalizedVendorContent(slug, vendorData, locale).name}
                </h1>
              </div>
            </div>
          </div>

          {/* Hero */}
          <div className="rounded-[32px] border border-slate-200/80 bg-white p-1 shadow-lg dark:border-slate-800/80 dark:bg-slate-950/70">
            <div className="space-y-4">
              <div className="relative h-72 overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-900">
                <Image
                  src={vendorData.logoUrl ?? "/logos/applogo.png"}
                  alt={
                    getLocalizedVendorContent(slug, vendorData, locale)
                      .logoAlt ?? vendorData.brand
                  }
                  fill
                  className="object-cover"
                />

                <div className="absolute bottom-3 left-2 right-2 z-20 flex flex-col gap-2 sm:bottom-6 sm:left-3 sm:right-3 sm:flex-row sm:items-center sm:justify-between lg:left-6 lg:right-6">
                  <AnimatedCallButton label={copy.callNow} />
                  <AnimatedJoinButton label={copy.orderOnWhatsApp} />
                </div>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="space-y-4 rounded-[32px] border border-slate-200/80 bg-white p-4 shadow-lg dark:border-slate-800/80 dark:bg-slate-950/70">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-100 text-3xl dark:bg-slate-900">
                {vendorData.logo}
              </div>

              <div>
                <p className="text-xl font-semibold text-slate-900 dark:text-white">
                  {getLocalizedVendorContent(slug, vendorData, locale).brand}
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                {copy.serviceLabel}
              </h2>

              <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-600 dark:text-slate-300">
                {getLocalizedVendorContent(slug, vendorData, locale).description}
              </p>
            </div>

{vendorSeo?.sections?.map((section, index) => (
  <article
    key={section.title}
    className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-950"
  >
    <span className="absolute right-6 top-5 text-6xl font-black text-slate-100 dark:text-slate-800">
      {String(index + 1).padStart(2, "0")}
    </span>

    <div className="mb-6 h-1.5 w-16 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 transition-all duration-500 group-hover:w-28" />

    <h3 className="relative z-10 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
      {section.title}
    </h3>

    <p className="relative z-10 mt-5 whitespace-pre-line text-[15px] leading-8 text-slate-600 dark:text-slate-300">
      {section.content}
    </p>
  </article>
))}
          </div>
        </div>
      </section>
    </main>
  </>
);
}
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { connection } from 'next/server';

import { Header } from '@/components/sections/header';
import { getServiceBySlug, getVendorByServiceAndId } from '@/lib/services-data';
import { getLocaleFromQuery, siteContent, type Locale } from '@/lib/site-content';

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

  if (!service || !vendorData) {
    return {
      title: 'Vendeur non trouvé',
      description: 'Page de vendeur introuvable.',
    };
  }

  return {
    title: `${vendorData.brand} | ${service.title}`,
    description: vendorData.description,
    alternates: {
      canonical: `/${slug}/${vendor}`,
      languages: {
        fr: `/${slug}/${vendor}`,
        en: `/${slug}/${vendor}?lang=en`,
      },
    },
  };
}

export default async function VendorPage({ params, searchParams }: VendorPageProps) {
  await connection();
  const { slug, vendor } = await params;
  const locale: Locale = getLocaleFromQuery((await searchParams).lang);
  const copy = siteContent[locale];
  const service = getServiceBySlug(slug);
  const vendorData = getVendorByServiceAndId(slug, vendor);

  if (!service || !vendorData) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pt-10">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                <Link
                  href={`/${service.slug}`}
                  className="font-semibold text-primary hover:text-primary/90"
                >
                  {copy.backToService} {service.title}
                </Link>
              </p>
              <h1 className="text-3xl font-bold tracking-[-0.03em] text-slate-900 dark:text-white sm:text-4xl">
                {vendorData.brand}
              </h1>
              <p className="mt-3 max-w-3xl text-base text-slate-600 dark:text-slate-300">
                {vendorData.description}
              </p>
            </div>
            <div className="flex items-center gap-4 rounded-3xl bg-slate-50 p-4 shadow-sm dark:bg-slate-900 sm:p-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-md dark:bg-slate-800">
                <span className="text-4xl">{vendorData.logo}</span>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                  {copy.vendorBadge}
                </p>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">
                  {vendorData.name}
                </p>
              </div>
            </div>
          </div>

          <section className="grid gap-6 lg:grid-cols-[1fr_320px]">
            <div className="space-y-6 rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-lg dark:border-slate-800/80 dark:bg-slate-950/70">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-100 text-3xl dark:bg-slate-900">
                  {vendorData.logo}
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{copy.vendorBrand}</p>
                  <p className="text-xl font-semibold text-slate-900 dark:text-white">
                    {vendorData.brand}
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {copy.aboutLabel}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {vendorData.description}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-900">
                  <p className="text-sm text-slate-500 dark:text-slate-400">{copy.serviceLabel}</p>
                  <p className="mt-2 font-semibold text-slate-900 dark:text-white">
                    {service.title}
                  </p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-900">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {copy.estimatedDeliveryTime}
                  </p>
                  <p className="mt-2 font-semibold text-slate-900 dark:text-white">
                    {service.deliveryTime}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-lg dark:border-slate-800/80 dark:bg-slate-950/70">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-900 relative h-72">
                  <Image
                    src={
                      vendorData.logoUrl ?? `https://picsum.photos/seed/${vendorData.id}/640/420`
                    }
                    alt={vendorData.logoAlt ?? vendorData.brand}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                    {copy.vendorDetails}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    ID:{' '}
                    <span className="font-medium text-slate-900 dark:text-white">
                      {vendorData.id}
                    </span>
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {copy.vendorInternalName}:{' '}
                    <span className="font-medium text-slate-900 dark:text-white">
                      {vendorData.name}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

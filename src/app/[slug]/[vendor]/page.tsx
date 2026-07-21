
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { connection } from 'next/server';

import { Header } from '@/components/sections/header';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { getServiceBySlug, getVendorByServiceAndId } from '@/lib/services-data';
import { contactLinks, getLocaleFromQuery, siteContent, type Locale } from '@/lib/site-content';
import { AnimatedCallButton } from '@/components/ui/AnimatedCallButton';
import { AnimatedJoinButton } from '@/components/ui/animated-join-button';
import { buildVendorPageMetadata } from '@/lib/seo';

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

  if (!service || !vendorData) {
    notFound();
  }

  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          {
            label: service.title,
            href: `/${slug}${locale !== 'fr' ? `?lang=${locale}` : ''}`,
          },
          {
            label: vendorData.brand,
            href: `/${slug}/${vendor}${locale !== 'fr' ? `?lang=${locale}` : ''}`,
          },
        ]}
        showBack={true}
      />
      <main className="px-3 pb-1 pt-1 sm:px-3 lg:px-3 lg:pt-3">
          <section className="grid gap-1">
            <div className="mx-auto max-w-6xl space-y-8 w-full ">
                <div >
                  <div className="flex items-center rounded-3xl bg-slate-50 p-2 shadow-sm dark:bg-slate-900 sm:p-2">
                <div className='text-center w-full lg:text-center'>
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">
                  {vendorData.name}
                </p>
              </div>
            </div>
          </div>

        
        </div>

            <div className="rounded-[32px] border border-slate-200/80 bg-white p-1 shadow-lg dark:border-slate-800/80 dark:bg-slate-950/70">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-900 relative h-72">
                  <Image
                    src={vendorData.logoUrl ?? '/logos/applogo.png'}
                    alt={vendorData.logoAlt ?? vendorData.brand}
                    fill
                    className="object-cover"
                    
                  />
                 <div className="absolute bottom-3 left-2 right-2 z-20 flex flex-col gap-2 sm:bottom-6 sm:left-3 sm:right-3 sm:flex-row sm:items-center sm:justify-between sm:gap-3 lg:bottom-6 lg:left-6 lg:right-6 lg:gap-3">
                                <AnimatedCallButton label={copy.callNow} />
                                <AnimatedJoinButton label={copy.orderOnWhatsApp} />
                 </div>
                </div>
      
              </div>
            </div>

             <div className="space-y-1 rounded-[32px] border border-slate-200/80 bg-white p-2 shadow-lg dark:border-slate-800/80 dark:bg-slate-950/70">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-100 text-3xl dark:bg-slate-900">
                  {vendorData.logo}
                </div>
                <div>
                  
                  <p className="text-xl font-semibold text-slate-900 dark:text-white">
                    {vendorData.brand}
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {copy.aboutLabel}
                </h2>
                <p className="whitespace-pre-line mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {vendorData.description}
                </p>
              </div>
            </div>
          </section>
       
      </main>
    </>
  );
}

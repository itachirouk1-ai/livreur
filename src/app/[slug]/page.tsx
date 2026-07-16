import { getServiceBySlug } from '@/lib/services-data';
import { ServiceDetailPageComponent } from '@/components/sections/service-detail-page';
import { Header } from '@/components/sections/header';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { notFound } from 'next/navigation';
import { connection } from 'next/server';

import { getLocaleFromQuery, siteContent, type Locale } from '@/lib/site-content';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    lang?: string;
  }>;
}

export function getLocaleFromSearchParams(searchParams: Promise<{ lang?: string }>) {
  return searchParams.then(({ lang }) => getLocaleFromQuery(lang));
}

export async function generateMetadata({ params, searchParams }: ServicePageProps) {
  await connection();
  const { slug } = await params;
  const locale = await getLocaleFromSearchParams(searchParams);
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: locale === 'en' ? 'Service not found' : 'Service introuvable',
      description: locale === 'en' ? 'The requested service could not be found.' : 'Le service demandé est introuvable.',
    };
  }

  const copy = siteContent[locale];

  return {
    title: `${service.title} | ${copy.serviceMetaTitle}`,
    description: service.description || copy.serviceMetaDescription,
    alternates: {
      canonical: `/${slug}`,
      languages: {
        fr: `/${slug}`,
        en: `/${slug}?lang=en`,
      },
    },
  };
}

export default async function ServicePage({ params, searchParams }: ServicePageProps) {
  await connection();
  const { slug } = await params;
  const locale: Locale = await getLocaleFromSearchParams(searchParams);
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <div>
        <Header />
      <Breadcrumb
        items={[
          {
            label: service.title,
            href: `/${slug}${locale !== 'fr' ? `?lang=${locale}` : ''}`,
          },
        ]}
        showBack={true}
      />
      </div>
      <main className="px-1 pb-1 sm:pb-10 md:px-2 lg:px-2 lg:pt-1">
        <ServiceDetailPageComponent
          locale={locale}
          slug={service.slug}
          title={service.title}
          titleColor={service.titleColor}
          accentGradient={service.bgGradient}
          description={service.description}
          deliveryTime={service.deliveryTime}
          features={service.features}
          categories={service.categories}
          vendors={service.vendors}
        />
      </main>
    </>
  );
}

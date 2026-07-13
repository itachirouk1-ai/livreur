import { getServiceBySlug } from '@/lib/services-data';
import { ServiceDetailPageComponent } from '@/components/sections/service-detail-page';
import { Header } from '@/components/sections/header';
import { notFound } from 'next/navigation';
import { connection } from 'next/server';

import { getLocaleFromQuery, type Locale } from '@/lib/site-content';

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
      title: 'Service not found',
    };
  }

  return {
    title: `${service.title} | ALLO DELIVERER KECH`,
    description: service.description,
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

  const heroImageUrl = `https://picsum.photos/seed/${service.slug}/1200/800`;

  return (
    <>
      <Header />
      <main className="px-1 pb-1 sm:pb-20 md:px-6 lg:px-8 lg:pt-12">
        <ServiceDetailPageComponent
          locale={locale}
          slug={service.slug}
          heroImageUrl={heroImageUrl}
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

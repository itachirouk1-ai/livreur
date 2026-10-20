import { getLocalizedServiceContent, getServiceBySlug } from '@/lib/services-data';
import { ServiceDetailPageComponent } from '@/components/sections/service-detail-page';
import { Header } from '@/components/sections/header';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { notFound } from 'next/navigation';
import { connection } from 'next/server';

import { getLocaleFromQuery, siteContent, type Locale } from '@/lib/site-content';
import { buildServicePageMetadata } from '@/lib/seo';

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

  return buildServicePageMetadata(slug);
}

export default async function ServicePage({ params, searchParams }: ServicePageProps) {
  await connection();
  const { slug } = await params;
  const locale: Locale = await getLocaleFromSearchParams(searchParams);
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const localizedService = getLocalizedServiceContent(service.slug, locale);

  return (
    <>
      <div>
        <Header />
      <Breadcrumb
        items={[
          {
            label: localizedService.title || service.title,
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
          title={localizedService.title || service.title}
          titleColor={service.titleColor}
          accentGradient={service.bgGradient}
          description={localizedService.description || service.description}
          deliveryTime={localizedService.deliveryTime || service.deliveryTime}
          features={localizedService.features || service.features}
          categories={localizedService.categories || service.categories}
          vendors={service.vendors}
        />
      </main>
    </>
  );
}

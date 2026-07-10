import { getServiceBySlug, getAllServiceSlugs } from "@/lib/services-data";
import { ServiceDetailPageComponent } from "@/components/sections/service-detail-page";
import { Header } from "@/components/sections/header";
import { notFound } from "next/navigation";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service not found",
    };
  }

  return {
    title: `${service.title} | ALLO DELIVERER KECH`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
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

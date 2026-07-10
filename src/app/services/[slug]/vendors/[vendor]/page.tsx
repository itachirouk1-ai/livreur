import Link from "next/link";
import { notFound } from "next/navigation";

import { Header } from "@/components/sections/header";
import { getAllServiceVendorParams, getServiceBySlug, getVendorByServiceAndId } from "@/lib/services-data";

interface VendorPageProps {
  params: {
    slug: string;
    vendor: string;
  };
}

export async function generateStaticParams() {
  return getAllServiceVendorParams().map(({ serviceSlug, vendorId }) => ({
    slug: serviceSlug,
    vendor: vendorId,
  }));
}

export async function generateMetadata({ params }: VendorPageProps) {
  const service = getServiceBySlug(params.slug);
  const vendor = getVendorByServiceAndId(params.slug, params.vendor);

  if (!service || !vendor) {
    return {
      title: "Vendeur non trouvé",
      description: "Page de vendeur introuvable.",
    };
  }

  return {
    title: `${vendor.brand} | ${service.title}`,
    description: vendor.description,
  };
}

export default function VendorPage({ params }: VendorPageProps) {
  const service = getServiceBySlug(params.slug);
  const vendor = getVendorByServiceAndId(params.slug, params.vendor);

  if (!service || !vendor) {
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
                <Link href={`/services/${service.slug}`} className="font-semibold text-primary hover:text-primary/90">
                  Retour au service {service.title}
                </Link>
              </p>
              <h1 className="text-3xl font-bold tracking-[-0.03em] text-slate-900 dark:text-white sm:text-4xl">
                {vendor.brand}
              </h1>
              <p className="mt-3 max-w-3xl text-base text-slate-600 dark:text-slate-300">
                {vendor.description}
              </p>
            </div>
            <div className="flex items-center gap-4 rounded-3xl bg-slate-50 p-4 shadow-sm dark:bg-slate-900 sm:p-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-md dark:bg-slate-800">
                <span className="text-4xl">{vendor.logo}</span>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Vendor</p>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">{vendor.name}</p>
              </div>
            </div>
          </div>

          <section className="grid gap-6 lg:grid-cols-[1fr_320px]">
            <div className="space-y-6 rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-lg dark:border-slate-800/80 dark:bg-slate-950/70">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-100 text-3xl dark:bg-slate-900">
                  {vendor.logo}
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Marque</p>
                  <p className="text-xl font-semibold text-slate-900 dark:text-white">{vendor.brand}</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">À propos</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{vendor.description}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-900">
                  <p className="text-sm text-slate-500 dark:text-slate-400">Service</p>
                  <p className="mt-2 font-semibold text-slate-900 dark:text-white">{service.title}</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-900">
                  <p className="text-sm text-slate-500 dark:text-slate-400">Temps de livraison estimé</p>
                  <p className="mt-2 font-semibold text-slate-900 dark:text-white">{service.deliveryTime}</p>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-lg dark:border-slate-800/80 dark:bg-slate-950/70">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <img
                    src={vendor.logoUrl ?? `https://picsum.photos/seed/${vendor.id}/640/420`}
                    alt={vendor.logoAlt ?? vendor.brand}
                    className="h-72 w-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Détails du vendeur</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    ID: <span className="font-medium text-slate-900 dark:text-white">{vendor.id}</span>
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Nom interne: <span className="font-medium text-slate-900 dark:text-white">{vendor.name}</span>
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

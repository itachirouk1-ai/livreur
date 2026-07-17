"use client";

import { MapPin } from "lucide-react";
import Marquee from "@/components/ui/marquee";

const deliveryZones = [
  "Guéliz",
  "Hivernage",
  "Agdal",
  "Massira",
  "Mhamid",
  "Daoudiate",
  "Targa",
  "Sidi Ghanem",
  "Palmeraie",
  "Route de Casablanca",
  "Route de l'Ourika",
  "Médina",
  "Semlalia",
  "Hay Charaf",
];

function ZoneCard({ zone }: { zone: string }) {
  return (
    <div className="group flex h-14 items-center gap-3 rounded-full border border-slate-200/70 bg-white/90 px-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900/80 dark:hover:border-red-500/40">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-50 transition-colors group-hover:bg-red-100 dark:bg-red-500/10 dark:group-hover:bg-red-500/20">
        <MapPin className="h-4 w-4 text-red-500" />
      </div>

      <span className="whitespace-nowrap text-sm font-semibold text-slate-700 dark:text-slate-100">
        {zone}
      </span>
    </div>
  );
}

export default function DeliveryZonesSection() {
  return (
    <section className="relative overflow-hidden py-2">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-red-50/30 to-transparent dark:via-red-950/10" />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-2 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 dark:border-red-500/20 dark:bg-red-500/10">
            <MapPin className="h-4 w-4 text-red-500" />
            <span className="text-sm font-semibold text-red-600 dark:text-red-400">
              Zones desservies
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Livraison partout à Marrakech
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
            Nous livrons rapidement dans les principaux quartiers de Marrakech.
          </p>
        </div>

        {/* Marquee */}
        <Marquee
          pauseOnHover
          speed={45}
          repeat={8}
          className="[--gap:1rem]"
        >
          {deliveryZones.map((zone) => (
            <ZoneCard key={zone} zone={zone} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
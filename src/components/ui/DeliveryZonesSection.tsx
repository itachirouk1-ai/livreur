"use client";

import { MapPin } from "lucide-react";
import Marquee from "@/components/ui/marquee";
import { siteContent } from "@/lib/site-content";
import { useLocalePreference } from "@/lib/use-locale";

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

function getAccentClasses(accentClass?: string) {
  const normalizedClass = accentClass ?? "text-red-600";

  if (normalizedClass.includes("emerald") || normalizedClass.includes("green")) {
    return {
      text: "text-emerald-700 dark:text-emerald-400",
      icon: "text-emerald-500",
      badge: "border-emerald-200 bg-emerald-50 dark:border-emerald-500/20 dark:bg-emerald-500/10",
      badgeText: "text-emerald-600 dark:text-emerald-400",
      cardBorder: "border-emerald-200/70 hover:border-emerald-300 dark:hover:border-emerald-500/40",
      cardBg: "bg-white/90 dark:bg-slate-900/80",
      iconBg: "bg-emerald-50 group-hover:bg-emerald-100 dark:bg-emerald-500/10 dark:group-hover:bg-emerald-500/20",
    };
  }

  if (normalizedClass.includes("blue") || normalizedClass.includes("sky") || normalizedClass.includes("cyan")) {
    return {
      text: "text-blue-700 dark:text-blue-400",
      icon: "text-blue-500",
      badge: "border-blue-200 bg-blue-50 dark:border-blue-500/20 dark:bg-blue-500/10",
      badgeText: "text-blue-600 dark:text-blue-400",
      cardBorder: "border-blue-200/70 hover:border-blue-300 dark:hover:border-blue-500/40",
      cardBg: "bg-white/90 dark:bg-slate-900/80",
      iconBg: "bg-blue-50 group-hover:bg-blue-100 dark:bg-blue-500/10 dark:group-hover:bg-blue-500/20",
    };
  }

  if (normalizedClass.includes("pink")) {
    return {
      text: "text-pink-700 dark:text-pink-400",
      icon: "text-pink-500",
      badge: "border-pink-200 bg-pink-50 dark:border-pink-500/20 dark:bg-pink-500/10",
      badgeText: "text-pink-600 dark:text-pink-400",
      cardBorder: "border-pink-200/70 hover:border-pink-300 dark:hover:border-pink-500/40",
      cardBg: "bg-white/90 dark:bg-slate-900/80",
      iconBg: "bg-pink-50 group-hover:bg-pink-100 dark:bg-pink-500/10 dark:group-hover:bg-pink-500/20",
    };
  }

  if (normalizedClass.includes("purple") || normalizedClass.includes("fuchsia")) {
    return {
      text: "text-purple-700 dark:text-purple-400",
      icon: "text-purple-500",
      badge: "border-purple-200 bg-purple-50 dark:border-purple-500/20 dark:bg-purple-500/10",
      badgeText: "text-purple-600 dark:text-purple-400",
      cardBorder: "border-purple-200/70 hover:border-purple-300 dark:hover:border-purple-500/40",
      cardBg: "bg-white/90 dark:bg-slate-900/80",
      iconBg: "bg-purple-50 group-hover:bg-purple-100 dark:bg-purple-500/10 dark:group-hover:bg-purple-500/20",
    };
  }

  if (normalizedClass.includes("amber") || normalizedClass.includes("yellow")) {
    return {
      text: "text-amber-700 dark:text-amber-400",
      icon: "text-amber-500",
      badge: "border-amber-200 bg-amber-50 dark:border-amber-500/20 dark:bg-amber-500/10",
      badgeText: "text-amber-600 dark:text-amber-400",
      cardBorder: "border-amber-200/70 hover:border-amber-300 dark:hover:border-amber-500/40",
      cardBg: "bg-white/90 dark:bg-slate-900/80",
      iconBg: "bg-amber-50 group-hover:bg-amber-100 dark:bg-amber-500/10 dark:group-hover:bg-amber-500/20",
    };
  }

  if (normalizedClass.includes("indigo")) {
    return {
      text: "text-indigo-700 dark:text-indigo-400",
      icon: "text-indigo-500",
      badge: "border-indigo-200 bg-indigo-50 dark:border-indigo-500/20 dark:bg-indigo-500/10",
      badgeText: "text-indigo-600 dark:text-indigo-400",
      cardBorder: "border-indigo-200/70 hover:border-indigo-300 dark:hover:border-indigo-500/40",
      cardBg: "bg-white/90 dark:bg-slate-900/80",
      iconBg: "bg-indigo-50 group-hover:bg-indigo-100 dark:bg-indigo-500/10 dark:group-hover:bg-indigo-500/20",
    };
  }

  return {
    text: "text-red-700 dark:text-red-400",
    icon: "text-red-500",
    badge: "border-red-200 bg-red-50 dark:border-red-500/20 dark:bg-red-500/10",
    badgeText: "text-red-600 dark:text-red-400",
    cardBorder: "border-red-200/70 hover:border-red-300 dark:hover:border-red-500/40",
    cardBg: "bg-white/90 dark:bg-slate-900/80",
    iconBg: "bg-red-50 group-hover:bg-red-100 dark:bg-red-500/10 dark:group-hover:bg-red-500/20",
  };
}

function ZoneCard({ zone, accentClasses }: { zone: string; accentClasses: ReturnType<typeof getAccentClasses> }) {
  return (
    <div className={`group flex h-14 items-center gap-3 rounded-full border px-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${accentClasses.cardBorder} ${accentClasses.cardBg} dark:border-slate-700`}>
      <div className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${accentClasses.iconBg}`}>
        <MapPin className={`h-4 w-4 ${accentClasses.icon}`} />
      </div>

      <span className={`whitespace-nowrap text-sm font-semibold text-slate-700 dark:text-slate-100 ${accentClasses.text}`}>
        {zone}
      </span>
    </div>
  );
}

export default function DeliveryZonesSection({ accentClass }: { accentClass?: string }) {
  const locale = useLocalePreference();
  const copy = siteContent[locale];
  const accentClasses = getAccentClasses(accentClass);

  return (
    <section className="relative overflow-hidden py-2">
      {/* Background */}
      <div className={`absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-slate-50/30 to-transparent dark:via-slate-950/10 ${accentClass ? "" : ""}`} />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-1 text-center">
          <div className={`mb-2 inline-flex items-center gap-2 rounded-full border px-4 py-2 ${accentClasses.badge}`}>
            <MapPin className={`h-4 w-4 ${accentClasses.icon}`} />
            <span className={`text-sm font-semibold ${accentClasses.badgeText}`}>
              {copy.deliveryZonesBadge}
            </span>
          </div>

         
        </div>

        {/* Marquee */}
        <Marquee
          pauseOnHover
          speed={45}
          repeat={8}
          className="[--gap:1rem]"
        >
          {deliveryZones.map((zone) => (
            <ZoneCard key={zone} zone={zone} accentClasses={accentClasses} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
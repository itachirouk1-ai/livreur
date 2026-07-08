"use client";

import { motion } from "framer-motion";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setMounted(true), 0);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6 lg:px-8">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto flex max-w-7xl items-center justify-between rounded-[28px] border border-white/70 bg-white/70 px-4 py-3 shadow-[0_20px_45px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70"
      >
        <div className="flex items-center gap-3">
          <button
            aria-label="Open main menu"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-slate-700 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white dark:bg-slate-900/80 dark:text-slate-200"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-amber-500 text-sm font-semibold text-white shadow-lg shadow-orange-200">
              A
            </div>
            <div className="hidden sm:block">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                ALLO DELIVERER KECH
              </p>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">Premium delivery</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-3 py-2 text-sm text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 md:flex">
            <span className="text-xs font-semibold uppercase tracking-[0.3em]">FR</span>
            <span className="text-slate-300">/</span>
            <span className="text-xs font-semibold uppercase tracking-[0.3em]">EN</span>
          </div>
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Toggle color mode"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="h-11 w-11 rounded-full border border-slate-200/80 bg-white/80 text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
          >
            {mounted && resolvedTheme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
          <Button className="hidden h-11 items-center gap-2 rounded-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-600 px-6 text-sm font-bold text-white shadow-[0_12px_30px_rgba(16,185,129,0.35)] hover:shadow-[0_16px_40px_rgba(16,185,129,0.45)] transition-all duration-200 hover:scale-[1.04] sm:inline-flex">
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.536.946-2.504 2.292-2.504 3.964 0 1.744.822 3.357 2.322 4.521l-.333 2.332 2.532-1.313c1.24.657 2.305 1.059 2.715 1.059.033 0 .066 0 .098 0 5.338 0 9.516-4.226 9.516-9.45 0-2.409-.906-4.869-2.562-6.603-1.656-1.735-3.935-2.908-6.784-2.908z"/>
            </svg>
            WhatsApp
          </Button>
        </div>
      </motion.nav>
    </header>
  );
}

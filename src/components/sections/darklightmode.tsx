"use client"
import { useTheme } from "@/components/ui/theme-provider"
import styles from "./darklightmode.module.css"

export function DarkLightModeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <div className="flex justify-center items-center gap-2 sm:gap-3">
      <div className="hidden items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-3 py-2 text-sm text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 md:flex">
        <span className="text-xs font-semibold uppercase tracking-[0.3em]">FR</span>
        <span className="text-slate-300">/</span>
        <span className="text-xs font-semibold uppercase tracking-[0.3em]">EN</span>
      </div>

      <div className={styles.wrapper}>
        <label className={styles.sparkSwitch} aria-label="Toggle color mode">
          <input
            type="checkbox"
            checked={isDark}
            onChange={(event) => setTheme(event.target.checked ? "dark" : "light")}
            aria-label="Toggle color mode"
          />
          <div className="track">
            <div className="stars">
              <span className="star" />
              <span className="star" />
              <span className="star" />
              <span className="star" />
            </div>
            <div className="knob">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor" />
              </svg>
            </div>
          </div>
        </label>
      </div>
    </div>
  )
}
;
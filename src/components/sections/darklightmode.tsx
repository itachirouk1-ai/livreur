"use client"
import { useTheme } from "@/components/ui/theme-provider"
import styles from "./darklightmode.module.css"
import LanguageToggle from "./languagetoggle"

export function DarkLightModeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      <LanguageToggle />

      <div className={styles.wrapper}>
        <label className={styles.sparkSwitch} aria-label="Toggle color mode">
          <input
            type="checkbox"
            checked={isDark}
            onChange={(event) => setTheme(event.target.checked ? "dark" : "light")}
            aria-label="Toggle color mode"
          />
          <div className={styles.track}>
            <div className={styles.stars}>
              <span className={styles.star} />
              <span className={styles.star} />
              <span className={styles.star} />
              <span className={styles.star} />
            </div>
            <div className={styles.knob}>
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
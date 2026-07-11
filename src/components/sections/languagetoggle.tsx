"use client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { ChevronDown, Check } from "lucide-react"
import { useEffect } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"

type LanguageToggleProps = {
  className?: string
}

type Locale = "fr" | "en"

const languages: Array<{ code: Locale; label: string }> = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
]

export default function LanguageToggle({ className }: LanguageToggleProps) {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const locale = (searchParams.get("lang")?.toLowerCase() === "en" ? "en" : "fr") as Locale

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const handleLocaleChange = (nextLocale: Locale) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("lang", nextLocale)

    const queryString = params.toString()
    const nextUrl = `${pathname}${queryString ? `?${queryString}` : ""}`

    router.replace(nextUrl, { scroll: false })
  }

  return (
    <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <button
      type="button"
      className="hidden md:flex h-11 min-w-[145px] items-center justify-between rounded-xl border border-slate-300 bg-white px-4 text-sm font-medium text-slate-800 shadow-sm transition-all duration-200 hover:bg-slate-50 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
    >
      <div className="flex items-center gap-2">
        <span className="text-lg">{locale === "fr" ? "🇫🇷" : "🇺🇸"}</span>

        <span>
          {locale === "fr" ? "Français" : "English"}
        </span>
      </div>

      <ChevronDown className="ml-3 h-4 w-4 opacity-60" />
    </button>
  </DropdownMenuTrigger>

  <DropdownMenuContent
    align="end"
    className="w-44 rounded-xl border border-slate-200 bg-white p-1 shadow-xl dark:border-slate-700 dark:bg-slate-900"
  >
    <DropdownMenuItem
      onClick={() => handleLocaleChange("fr")}
      className={cn(
        "flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 transition-colors",
        locale === "fr" && "bg-slate-100 dark:bg-slate-800"
      )}
    >
      <span className="text-lg">🇫🇷</span>
      <span className="flex-1">Français</span>

      {locale === "fr" && (
        <Check className="h-4 w-4 text-primary" />
      )}
    </DropdownMenuItem>

    <DropdownMenuItem
      onClick={() => handleLocaleChange("en")}
      className={cn(
        "flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 transition-colors",
        locale === "en" && "bg-slate-100 dark:bg-slate-800"
      )}
    >
      <span className="text-lg">🇺🇸</span>
      <span className="flex-1">English</span>

      {locale === "en" && (
        <Check className="h-4 w-4 text-primary" />
      )}
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
  )
}

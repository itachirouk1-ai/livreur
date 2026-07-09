"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

interface SwitchProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ className, checked = false, onCheckedChange, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={checked}
        data-state={checked ? "checked" : "unchecked"}
        className={cn(
          "relative inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full border border-transparent bg-slate-200/80 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 dark:bg-slate-700/80",
          checked && "bg-orange-500/90 dark:bg-orange-500",
          className,
        )}
        onClick={() => onCheckedChange?.(!checked)}
        {...props}
      >
        <span
          className={cn(
            "pointer-events-none block h-5 w-5 translate-x-1 rounded-full bg-white shadow-lg transition-transform duration-200",
            checked && "translate-x-6",
          )}
        />
      </button>
    )
  },
)

Switch.displayName = "Switch"

export { Switch }

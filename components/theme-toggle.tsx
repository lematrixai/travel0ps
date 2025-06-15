"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-9 h-9" /> // Placeholder to prevent layout shift
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative w-9 h-9 rounded-full border bg-background p-2 hover:bg-accent"
    >
      <div className="relative w-full h-full">
        <Sun 
          className={`absolute inset-0 w-full h-full transition-all duration-300 ${
            theme === "light" ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
          }`}
        />
        <Moon 
          className={`absolute inset-0 w-full h-full transition-all duration-300 ${
            theme === "dark" ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
          }`}
        />
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  )
} 
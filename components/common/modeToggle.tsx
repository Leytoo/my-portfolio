"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0)
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return <Button variant="outline" size="icon" disabled />

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      title="Toggle theme"
    >
      {theme === "dark" ? (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all duration-300" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all duration-300" />
      )}
      <span className="sr-only hidden"></span>
    </Button>
  )
}

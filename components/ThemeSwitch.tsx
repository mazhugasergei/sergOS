"use client"

import { cn } from "@/lib/utils"
import { Moon, SunMedium } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeButton({ className }: { className?: string }) {
  const [clientTheme, setClientTheme] = useState("")
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setClientTheme(theme || "dark")
  }, [theme])

  return (
    <button
      onClick={() => setTheme(clientTheme === "dark" ? "light" : "dark")}
      className={`block flex items-center gap-2 rounded-full p-2 -m-2 ${className}`}
    >
      <SunMedium size={16} className={clientTheme !== "light" ? "opacity-50" : ""} />
      <Moon size={16} className={clientTheme !== "dark" ? "opacity-50" : ""} />
    </button>
  )
}

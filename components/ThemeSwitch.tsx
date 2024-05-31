"use client"

import { Moon, SunMedium, SunMoon } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeButton() {
  const [clientTheme, setClientTheme] = useState("")
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setClientTheme(theme || "dark")
  }, [theme])

  return (
    <div className="flex items-center gap-2">
      <button onClick={() => setTheme("light")} className={`${clientTheme !== "light" ? "opacity-40" : ""} p-1 -m-1`}>
        <SunMedium size={16} />
      </button>
      <button onClick={() => setTheme("dark")} className={`${clientTheme !== "dark" ? "opacity-40" : ""} p-1 -m-1`}>
        <Moon size={16} />
      </button>
    </div>
  )
}

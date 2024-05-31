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
    <button
      onClick={() => setTheme(clientTheme === "dark" ? "light" : "dark")}
      className="self-start flex items-center gap-2 rounded-full p-2 -m-2"
    >
      <SunMedium size={16} className={clientTheme !== "light" ? "opacity-50" : ""} />
      <Moon size={16} className={clientTheme !== "dark" ? "opacity-50" : ""} />
    </button>
  )
}

"use client"

import ThemeButton from "./ThemeButton"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BiSolidHome } from "react-icons/bi"

export default function Nav() {
  const pathname = usePathname()

  const routes = [
    {
      name: "Home",
      href: "/",
      icon: <BiSolidHome />,
    },
  ]

  const linkStyle =
    "min-w-[12.4375rem] flex items-center space-x-3 rounded-[.375rem] px-2 py-[.375rem] text-sm font-medium hover:bg-[#E5E5E5] dark:hover:bg-[#404040] transition-colors"

  const headingStyle = "text-xs font-semibold text-gray-1000 text-opacity-40 dark:text-white px-2 pt-5 pb-2"

  return (
    <nav className="p-3">
      {/* routes */}
      <ul className="flex flex-col gap-1">
        {routes.map((route) => (
          <li key={route.name}>
            <Link
              href={route.href}
              className={cn(
                linkStyle,
                pathname === route.href ? "text-white bg-[#050505] hover:bg-[#050505] dark:bg-[#404040]" : ""
              )}
            >
              {route.icon}
              <span>{route.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      <h4 className={headingStyle}>Projects</h4>

      <ul>
        <li>
          <Link href="/" className={linkStyle}>
            <BiSolidHome />
            <span>Lorem</span>
          </Link>
        </li>
      </ul>

      <ThemeButton />
    </nav>
  )
}

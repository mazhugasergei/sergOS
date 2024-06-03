"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Nav({ className }: { className?: string }) {
  const pathname = usePathname()

  const routes = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Craft",
      href: "/craft",
    },
  ]

  return (
    <nav className={`${className}`}>
      <ul className="my-6">
        {routes.map((route) => (
          <li key={route.name}>
            <Link
              href={route.href}
              className={`"block text-[0.8125rem] opacity-${
                pathname === route.href ? 100 : 60
              } hover:opacity-100 transition-opacity p-1 -mx-1"`}
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

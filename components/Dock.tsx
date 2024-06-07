"use client"

import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export default function Dock() {
  const pathname = usePathname()
  const [menuOpened, setMenuOpened] = useState(false)
  const menuBtn = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    document.addEventListener("click", (e) => {
      const target = e.target as HTMLElement
      if (!menuBtn.current?.contains(target)) setMenuOpened(false)
    })
  }, [])

  const routes = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Diary",
      href: "/diary",
    },
  ]

  const currentRoute = routes.find((route) => route.href === "/" + pathname.split("/")[1])

  const links = [
    {
      name: "Twitter",
      href: "https://twitter.com/mazhugasergei",
    },
    {
      name: "GitHub",
      href: "https://github.com/mazhugasergei",
    },
    {
      name: "Telegram",
      href: "https://t.me/mazhugasergei",
    },
  ]

  return (
    <div>
        {/* <- white space at the bottom */}
      <div className="container w-full fixed bottom-2 left-1/2 -translate-x-1/2 flex justify-center text-[0.875rem]">
        {/* visible dock */}
        <div className="relative max-w-full bg-background-lighter rounded-full p-0.5">
          {/* menu */}
          {menuOpened && (
            <menu className="absolute left-0 bottom-full w-full bg-background-lighter rounded-[1rem] p-0.5 mb-1">
              <div className="bg-background rounded-[0.875rem] space-y-2 p-4">
                <ul className="flex flex-col gap-2">
                  {routes.map((route) => (
                    <li key={route.name}>
                      <Link
                        href={route.href}
                        className={`"block text-[0.8125rem] text-${
                          pathname === route.href ? "primary" : "muted"
                        } hover:text-primary transition p-1 -mx-1"`}
                      >
                        {route.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </menu>
          )}

          {/* button */}
          <div className="overflow-auto scrollbar-hidden rounded-full flex">
            {/* menu btn */}
            <button
              ref={menuBtn}
              onClick={() => setMenuOpened(!menuOpened)}
              className="flex items-center gap-2 bg-primary text-background dark:text-background rounded-full px-4 py-2"
            >
              {currentRoute ? currentRoute.name : "404 Not Found"}
              <Menu size={14} />
            </button>

            {/* links */}
            {links.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                className={`bg-background p-2 ${i === 0 ? "rounded-l-full pl-4" : ""} ${
                  i === links.length - 1 ? "rounded-r-full pr-4" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

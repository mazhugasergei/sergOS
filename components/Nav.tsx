"use client"

import ThemeButton from "./ThemeButton"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BiSolidHome } from "react-icons/bi"
import Image from "next/image"

type Category = { name?: string; items: { name: string; href: string; icon: JSX.Element; type?: "external" }[] }

const categories: Category[] = [
  {
    items: [
      {
        name: "Home",
        href: "/",
        icon: <BiSolidHome />,
      },
    ],
  },
  {
    name: "Projects",
    items: [
      {
        name: "FEFU Open Day",
        href: "https://dod.dvfu.ru",
        icon: <Image src="/fefu.logo.svg" alt="fefu" width={14} height={14} />,
        type: "external",
      },
    ],
  },
  {
    name: "Online",
    items: [],
  },
]

export default function Nav() {
  const pathname = usePathname()

  const linkStyle =
    "min-w-[12.4375rem] flex items-center space-x-3 rounded-[.375rem] px-2 py-[.375rem] text-sm font-medium hover:bg-[#E5E5E5] dark:hover:bg-[#404040] transition-colors"

  const headingStyle = "text-xs font-semibold text-gray-1000 text-opacity-40 dark:text-white px-2 pt-5 pb-2"

  return (
    <nav className="p-3">
      {categories.map((category, i) => (
        <div key={`category_${i}`}>
          {category.name && <h4 className={headingStyle}>{category.name}</h4>}
          <ul className="flex flex-col gap-1">
            {category.items.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  target={item.type === "external" ? "_blank" : ""}
                  className={cn(
                    linkStyle,
                    pathname === item.href ? "text-white bg-[#050505] hover:bg-[#050505] dark:bg-[#404040]" : ""
                  )}
                >
                  {item.icon}
                  <span className="flex-1">{item.name}</span>
                  {item.type === "external" && <LinkArrow />}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* <ThemeButton /> */}
    </nav>
  )
}

const LinkArrow = () => {
  return (
    <span className="pl-3 pr-1">
      <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.00195 6.32617V0.824219C9.00195 0.490234 8.79102 0.267578 8.45117 0.267578L2.94922 0.279297C2.62109 0.279297 2.41016 0.519531 2.41016 0.794922C2.41016 1.07031 2.65039 1.30469 2.92578 1.30469H4.66602L7.45508 1.19922L6.39453 2.13672L1.16211 7.38086C1.05664 7.48633 0.998047 7.61523 0.998047 7.73828C0.998047 8.01367 1.24414 8.27734 1.53125 8.27734C1.66602 8.27734 1.78906 8.22461 1.89453 8.11914L7.13281 2.875L8.07617 1.81445L7.96484 4.48047V6.34961C7.96484 6.61914 8.19922 6.86523 8.48633 6.86523C8.76172 6.86523 9.00195 6.63672 9.00195 6.32617Z"
          fill="currentColor"
        ></path>
      </svg>
    </span>
  )
}

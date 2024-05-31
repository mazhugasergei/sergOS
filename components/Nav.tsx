import Link from "next/link"

export default function Nav({ className }: { className?: string }) {
  const routes = [
    {
      name: "test page ",
      href: "/test",
    },
    {
      name: "test page  ",
      href: "/test",
    },
    {
      name: "test page   ",
      href: "/test",
    },
  ]

  return (
    <nav className={`${className}`}>
      <ul className="my-6">
        {routes.map((route) => (
          <li key={route.name}>
            <Link
              href={route.href}
              className="block text-[0.8125rem] opacity-60 hover:opacity-100 transition-opacity p-1 -mx-1"
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

import Link from "next/link"

export default function CustomLink({
  href,
  external = false,
  className,
  children,
}: {
  href: string
  external?: boolean
  className?: string
  children: React.ReactNode
}) {
  return (
    <Link
      {...{ href }}
      target={external ? "_blank" : "_self"}
      className={`inline-flex items-center underline decoration-1 decoration-[#a0a0a0] underline-offset-[0.1875rem] ${className}`}
    >
      {children}
    </Link>
  )
}

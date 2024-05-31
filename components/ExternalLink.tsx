import Link from "next/link"
import LinkArrow from "./LinkArrow"

export default ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link
      {...{ href }}
      target="_blank"
      className="inline-flex items-center text-[#2563eb] dark:text-[#66a0ff] hover:underline"
    >
      {children}
    </Link>
  )
}

import Link from "next/link"

export default function OnlineLink({ href, title, action }: { href: string; title: string; action: string }) {
  return (
    <Link {...{ href }} target="_blank" className="group flex items-center gap-4 text-[0.9375rem]">
      <span className="shrink-0 group-hover:text-[#2563eb] group-hover:dark:text-[#66a0ff] group-hover:underline">
        {title}
      </span>
      <div className="w-full border-t border-gray-300 border-dashed dark:border-gray-800" />
      <div className="text-[#737373] dark:text-[#a3a3a3]">{action}</div>
    </Link>
  )
}

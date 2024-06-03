import Link from "next/link"

export default function AsideAlt() {
  return (
    <aside className="max-w-[42rem] lg:fixed top-0 flex flex-col lg:pt-[inherit] lg:px-6 mx-auto">
      <Link href="/craft" className="flex items-center gap-1 opacity-60 hover:opacity-100 transition-opacity p-1 -m-1">
        <svg width="18px" height="18px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" color="currentColor">
          <path
            d="M10.25 4.75l-3.5 3.5 3.5 3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M6.75 8.25h6a4 4 0 014 4v7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <span className="text-[0.875rem]">Craft</span>
      </Link>
    </aside>
  )
}

import ExternalLink from "@/components/ExternalLink"
import Section from "@/components/Section"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const paragraphStyles = "leading-[1.75] text-[#404040] dark:text-[#a3a3a3]"

  return (
    <div className="space-y-[4rem]">
      {/* about */}
      <Section>
        <p className={paragraphStyles}>
          Hey, I'm Sergei, a web developer. Our team is currently building{" "}
          <ExternalLink href="https://github.com/SVIT-Solutions/whale-hunter">Whale Hunter</ExternalLink>, a tool for
          analyzing transactions in blockchains.
        </p>
        <p className={paragraphStyles}>
          Before Whale Hunter I was building{" "}
          <ExternalLink href="https://github.com/stars/mazhugasergei/lists/commercial">
            commercial projects
          </ExternalLink>
          .
        </p>
      </Section>
      {/* online */}
      <Section title="Online">
        <Link href="https://github.com/mazhugasergei" target="_blank" className="group flex items-center gap-4">
          <span className="group-hover:text-[#2563eb] group-hover:underline">GitHub</span>
          <div className="w-full border-t border-gray-300 border-dashed dark:border-gray-800" />
          <div className="text-[#737373] dark:text-[#a3a3a3]">Follow</div>
        </Link>
      </Section>
      {/* map */}
      <Section title="Where">
        <Image src="/map.png" alt="map" width={567} height={567} className="rounded-2xl" />
        <div className="flex items-center justify-end gap-2 text-sm text-[#a3a3a3] dark:text-[#737373] mt-2">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>Vladivostok, Primorsky Krai</span>
        </div>
      </Section>
    </div>
  )
}

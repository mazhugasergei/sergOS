import CodeBlock from "@/components/CodeBlock"
import CustomImage from "@/components/CustomImage"
import ExternalLink from "@/components/ExternalLink"
import Link from "next/link"
import Prism from "prismjs"

export default function Home() {
  const paragraphStyles = "text-[0.9375rem] leading-[1.75rem]"

  return (
    <div className="flex flex-col gap-[1.4375rem]">
      <CodeBlock
        code={`import { create } from 'zustand'

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}))`}
        language="javascript"
      />

      {/* about */}
      <section className="flex flex-col gap-2">
        <h1>About</h1>
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

        <p className={paragraphStyles}>
          I have also created{" "}
          <ExternalLink href="https://www.npmjs.com/package/tgreports">Telegram Catcher Bot</ExternalLink> that catches
          errors and sends them to your Telegram.
        </p>
      </section>

      {/* projects */}
      <section className="flex flex-col gap-2">
        <div className="space-y-3">
          <OnlineLink href="https://dod.dvfu.ru" title="FEFU Open Day" action="Visit" />
          <OnlineLink href="https://kancoo.tech" title="KANCOO" action="Visit" />
        </div>
      </section>

      {/* map */}
      <section className="flex flex-col gap-2">
        <CustomImage src="/map.png" alt="map" className="aspect-[944/502]" />
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
      </section>

      {/* online */}
      <section className="flex flex-col gap-2">
        <div className="space-y-3">
          <OnlineLink href="https://twitter.com/mazhugasergei" title="Twitter" action="Follow" />
          <OnlineLink href="https://github.com/mazhugasergei" title="GitHub" action="Follow" />
          <OnlineLink href="https://t.me/mazhugasergei" title="Telegram" action="Contact" />
        </div>
      </section>
    </div>
  )
}

const OnlineLink = ({ href, title, action }: { href: string; title: string; action: string }) => {
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

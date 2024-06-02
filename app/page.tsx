import Image from "@/components/Image"
import Link from "@/components/Link"
import OnlineLink from "@/components/OnlineLink"

export default function Page() {
  return (
    <>
      {/* about */}
      <section>
        <h2>About</h2>
        <p>
          Hey, I'm Sergei, a web developer. Our team is currently building{" "}
          <Link href="https://github.com/SVIT-Solutions/whale-hunter" external>
            Whale Hunter
          </Link>
          , a tool for analyzing transactions in blockchains. Before Whale Hunter I was building{" "}
          <Link href="https://github.com/stars/mazhugasergei/lists/commercial" external>
            commercial projects
          </Link>
          . I have also created{" "}
          <Link href="https://www.npmjs.com/package/tgreports" external>
            Telegram Catcher Bot
          </Link>{" "}
          that catches errors and sends them to your Telegram.
        </p>
      </section>

      {/* projects */}
      <section>
        <h2>Projects</h2>
        <div className="space-y-1.5">
          <OnlineLink href="https://dod.dvfu.ru" title="FEFU Open Day" action="Visit" />
          <OnlineLink href="https://kancoo.tech" title="KANCOO" action="Visit" />
        </div>
      </section>

      {/* online */}
      <section>
        <h2>Online</h2>
        <div className="space-y-1.5">
          <OnlineLink href="https://twitter.com/mazhugasergei" title="Twitter" action="Follow" />
          <OnlineLink href="https://github.com/mazhugasergei" title="GitHub" action="Follow" />
          <OnlineLink href="https://t.me/mazhugasergei" title="Telegram" action="Contact" />
        </div>
      </section>

      {/* map */}
      <section>
        <Image src="/map.png" alt="map" className="aspect-[944/502]" />
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
    </>
  )
}

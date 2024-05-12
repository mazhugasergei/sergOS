import Image from "next/image"

export default function Home() {
  return (
    <div className="space-y-[4rem]">
      <Section>
        <p>a</p>
      </Section>
      <Section title="Online">
        <p>a</p>
      </Section>
      <Section title="Where">
        <Image src="/map.png" alt="map" width={567} height={567} className="rounded-2xl" />
        <div className="flex items-center justify-end gap-2 text-sm text-[#737373] mt-2">
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

const Section = ({ title, children }: { title?: string; children: React.ReactNode }) => {
  return (
    <section className="grid max-md:flex-col gap-6 md:grid-cols-[1fr_5fr]">
      <h4 className="max-md:text-lg max-md:font-bold md:text-[#737373] md:justify-self-end">{title}</h4>
      <div>{children}</div>
    </section>
  )
}

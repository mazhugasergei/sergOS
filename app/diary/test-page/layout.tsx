import AsideAlt from "@/components/AsideAlt"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AsideAlt title="Diary" href="/diary" />
      <main>{children}</main>
    </>
  )
}

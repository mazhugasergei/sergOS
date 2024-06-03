import AsideAlt from "@/components/AsideAlt"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AsideAlt />
      <main>{children}</main>
    </>
  )
}

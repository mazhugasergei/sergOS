import Aside from "@/components/Aside"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Aside />
      <main>{children}</main>
    </>
  )
}

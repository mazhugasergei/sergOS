import Dock from "@/components/Dock"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Dock />
    </>
  )
}

import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvide"
import Aside from "@/components/Aside"

export const metadata: Metadata = {
  // title: "Sergei Mazhuga",
  // description: "Generated by create next app",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="container lg:flex text-[#171717] dark:text-[#ededed] dark:bg-[#161616] py-10">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Aside />
          <main className="w-full max-w-[42rem] mx-auto">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}

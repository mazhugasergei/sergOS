import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import { ThemeProvider } from "@/components/ThemeProvide"
import Aside from "@/components/Aside"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  // title: "Sergei Mazhuga",
  // description: "Generated by create next app",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`overflow-hidden dark:text-white dark:bg-[#050505] ${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex">
            <Aside />
            <div id="content" className="h-screen overflow-y-auto w-full">
              <Header />
              <main className="min-h-[200vh] container max-w-3xl mx-auto py-10">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

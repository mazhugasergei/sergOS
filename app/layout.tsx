import Dock from "@/components/Dock"
import "./styles/globals.scss"
import { ThemeProvider } from "@/components/ThemeProvide"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="container text-[0.9375rem] text-[#171717] dark:text-[#ededed] bg-background">
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <main className="py-12">{children}</main>
          <Dock />
        </ThemeProvider>
      </body>
    </html>
  )
}

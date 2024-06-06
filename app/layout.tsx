import Dock from "@/components/Dock"
import "./styles/globals.scss"
import { ThemeProvider } from "@/components/ThemeProvide"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="container text-[0.9375rem] text-[#171717] dark:text-[#ededed] dark:bg-[#161616] py-12">
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          {children}
          <Dock />
        </ThemeProvider>
      </body>
    </html>
  )
}

import HeaderBG from "./HeaderBG"
import Nav from "./Nav"
import ThemeButton from "./ThemeButton"
import { Button } from "./ui/button"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  return (
    <header className="min-h-[3.0625rem] sticky z-9 top-0 w-full flex items-center justify-between border-b border-border/40 backdrop-blur-xl py-2 px-3">
      <HeaderBG parentId="content" />
      <ThemeButton />
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="ghost" className="h-8 w-8 lg:hidden">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="w-full !max-w-[20rem] p-0">
          <div className="flex items-center gap-3 px-3 py-2">
            <SheetClose asChild>
              <Button size="icon" variant="ghost" className="h-8 w-8">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </Button>
            </SheetClose>
            <h2 className="text-sm font-bold">Sergei Mazhuga</h2>
          </div>
          <Nav />
        </SheetContent>
      </Sheet>
    </header>
  )
}

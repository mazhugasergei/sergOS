import HeaderBG from "./HeaderBG"
import Nav from "./Nav"
import { ScrollArea } from "./ui/scroll-area"

export default function Aside() {
  return (
    <aside
      id="aside"
      className="max-lg:hidden h-screen overflow-y-auto sticky top-0 z-10 shrink-0 bg-[#fafafa] dark:bg-[#171717] border-r border-[#EEEFF2] dark:border-[#262626]"
    >
      <h2 className="sticky top-0 min-h-[3.0625rem] flex items-center text-sm font-bold border-b border-[#fafafa]/40 dark:border-[#171717]/40 backdrop-blur-xl px-3 py-2">
        <HeaderBG parentId="aside" />
        <span className="pl-2">Sergei Mazhuga</span>
      </h2>
      <Nav />
    </aside>
  )
}

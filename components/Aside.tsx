import Nav from "./Nav"

export default function Aside() {
  return (
    <aside className="max-lg:hidden h-screen z-10 sticky top-0 shrink-0 bg-[#fafafa] dark:bg-[#171717] border-r border-[#EEEFF2] dark:border-[#262626]">
      <h2 className="min-h-[3.0625rem] flex items-center text-sm font-bold px-3 py-2">
        <span className="pl-2">Sergei Mazhuga</span>
      </h2>
      <Nav />
    </aside>
  )
}

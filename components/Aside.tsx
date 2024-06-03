import Nav from "./Nav"
import Resolution from "./Resolution"
import ThemeSwitch from "./ThemeSwitch"

export default function Aside() {
  return (
    <aside className="max-lg:hidden h-screen fixed top-0 flex flex-col py-[inherit] px-6">
      <h2 className="text-[1rem]">
        Mazhuga <br />
        Sergei
      </h2>

      <Nav className="my-2" />

      <ThemeSwitch />

      <div className="opacity-50 font-mono text-xs mt-auto">
        <Resolution />
      </div>
    </aside>
  )
}

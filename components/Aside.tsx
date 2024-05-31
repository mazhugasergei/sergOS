import { cn } from "@/lib/utils"
import Nav from "./Nav"
import Resolution from "./Resolution"

export default function Aside() {
  return (
    <aside
      className={cn(
        "max-lg:max-w-[42rem] max-lg:mx-auto",
        "flex flex-col pb-6",
        "lg:h-screen lg:fixed top-0 lg:px-6 lg:pt-[inherit]"
      )}
    >
      <h2 className="mb-2">
        Mazhuga <br className="hidden lg:max-xl:block" />
        Sergei
      </h2>
      <Nav className="max-lg:hidden" />
      <div className="max-lg:hidden font-mono text-xs opacity-50 mt-auto">
        <Resolution />
      </div>
    </aside>
  )
}

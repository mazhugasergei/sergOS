import CodeBlock from "@/components/CodeBlock"
import Video from "@/components/Video"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link"

export default () => {
  return (
    <div className="flex flex-col gap-2">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Test</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* about */}
      <section className="flex flex-col gap-2">
        <h1>Lorem Ipsum</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta dolores, non consectetur beatae ea iure
          placeat sapiente consequatur, minus, sed quisquam architecto quibusdam odit sequi cumque doloribus tempore
          corporis modi laborum perspiciatis repudiandae qui. Vel temporibus provident et ducimus commodi error,
          suscipit, laboriosam vero fuga sequi soluta illo culpa, eum possimus aut aliquam officiis beatae magnam totam?
          Ducimus quaerat sequi iusto vitae, aliquam fuga quibusdam, tempore culpa autem est aspernatur eveniet
          doloremque illo provident in? Magni autem minus hic dolor?
        </p>
        <CodeBlock
          code={`import { create } from 'zustand'

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}))`}
          language="javascript"
        />
      </section>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit dolorum quae velit! Veritatis maiores iure
        consequatur, adipisci quidem quae odit nesciunt cum expedita voluptate culpa earum non magnam fugiat veniam.
      </p>

      {/* video */}
      <Video src="/test.mp4" />
    </div>
  )
}

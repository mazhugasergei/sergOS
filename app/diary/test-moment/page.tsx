import CodeBlock from "@/components/CodeBlock"
import CopyURL from "@/components/CopyURL"
import Video from "@/components/Video"

export default () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1>Test Moment</h1>
          <div className="text-[0.8125rem] opacity-50">June 2024</div>
        </div>
        <CopyURL />
      </div>
      <section>
        <h2>Lorem Ipsum</h2>
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

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit dolorum quae velit! Veritatis maiores iure
          consequatur, adipisci quidem quae odit nesciunt cum expedita voluptate culpa earum non magnam fugiat veniam.
        </p>

        <Video src="/test.mp4" />
      </section>
    </>
  )
}

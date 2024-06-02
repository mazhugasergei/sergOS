import CodeBlock from "@/components/CodeBlock"
import Video from "@/components/Video"
import Image from "@/components/Image"
import Link from "@/components/Link"
import Moment from "@/components/Moment"

export default () => {
  return (
    <Moment title="Test Moment" subtitle="June 2024">
      <section>
        <h2>Lorem Ipsum</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. <Link href="#">Soluta</Link> dolores, non
          consectetur beatae ea iure placeat sapiente consequatur, minus, sed quisquam architecto quibusdam odit sequi
          cumque doloribus tempore corporis modi laborum perspiciatis repudiandae qui. Vel temporibus provident et
          ducimus commodi error, suscipit, laboriosam vero fuga sequi soluta illo culpa, eum possimus aut aliquam
          officiis beatae magnam totam? Ducimus quaerat sequi iusto vitae, aliquam fuga quibusdam, tempore culpa autem
          est aspernatur eveniet doloremque illo provident in? Magni autem minus hic dolor?
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

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla nisi ducimus neque quisquam tempore, suscipit
          libero pariatur doloribus cupiditate laborum. Libero culpa aperiam ut repudiandae reiciendis nemo ipsa non
          minus.
        </p>

        <Image src="/test.jpg" alt="test" />
      </section>
    </Moment>
  )
}

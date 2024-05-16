export default ({ title, children }: { title?: string; children: React.ReactNode }) => {
  return (
    <section className="grid max-md:flex-col gap-6 md:grid-cols-[1fr_5fr]">
      <h4 className="max-md:text-lg max-md:font-bold md:text-[#9B9B9B] md:dark:text-[#737373] md:justify-self-end">
        {title}
      </h4>
      <div>{children}</div>
    </section>
  )
}

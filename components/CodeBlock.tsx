export default function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="overflow-x-auto text-[0.8125rem] leading-[1.5] bg-[#1C1C1C] border-[0.0625rem] border-[#282828] rounded-[.75rem] p-[1.5625rem]">
      <code>{children}</code>
    </pre>
  )
}

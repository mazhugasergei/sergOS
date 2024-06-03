import CopyURL from "@/components/CopyURL"

export default function Post({
  title,
  subtitle,
  children,
}: {
  title?: string
  subtitle?: string
  children: React.ReactNode
}) {
  return (
    <>
      {title && (
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h1>{title}</h1>
            {subtitle && <div className="text-[0.8125rem] opacity-60">{subtitle}</div>}
          </div>
          <CopyURL />
        </div>
      )}
      <div className="flex flex-col gap-2">{children}</div>
    </>
  )
}

import Image from "next/image"

export default function CustomImage({
  src,
  alt,
  border = false,
  className,
}: {
  src: string
  alt: string
  border?: boolean
  className?: string
}) {
  return (
    <Image
      {...{ src, alt }}
      width={1000}
      height={1000}
      className={`w-full rounded-2xl pointer-events-none ${
        border ? "border-[0.0625rem] border-[#282828]" : ""
      } ${className}`}
    />
  )
}

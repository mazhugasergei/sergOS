"use client"

import { useEffect, useState } from "react"

export default function HeaderBG({ parentId }: { parentId: string }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const parent = document.getElementById(parentId)
    if (!parent) return
    parent.addEventListener("scroll", (e) => {
      setValue(Math.min(62, parent.scrollTop * 2))
    })
  }, [])

  return (
    <>
      <div className="absolute inset-0 z-[-1] bg-[#fff] dark:bg-[#323232]" style={{ opacity: value / 100 }} />
    </>
  )
}

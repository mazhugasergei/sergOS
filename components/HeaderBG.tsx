"use client"

import { useEffect, useState } from "react"

export default function HeaderBG() {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const content = document.getElementById("content")
    if (!content) return
    content.addEventListener("scroll", (e) => {
      setValue(Math.min(62, content.scrollTop * 2))
    })
  }, [])

  return (
    <>
      <div className="absolute inset-0 z-[-1] bg-[#fff] dark:bg-[#323232]" style={{ opacity: value / 100 }} />
    </>
  )
}

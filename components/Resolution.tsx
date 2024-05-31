"use client"

import { useEffect, useState } from "react"

export default function Resolution() {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
    window.addEventListener("resize", (e) => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    })
  }, [])

  return (
    <div className={`${width && height ? "opacity-100" : "opacity-0"} transition-opacity`}>
      {width} x {height}
    </div>
  )
}

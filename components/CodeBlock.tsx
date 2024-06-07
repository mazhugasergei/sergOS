"use client"

import { useEffect, useRef, useState } from "react"
import Prism from "prismjs"
import "@/app/styles/prism.scss"
import { Check, Clipboard } from "lucide-react"
import { Button } from "./ui/button"

const CodeBlock = ({ code, language }: { code: string; language: string }) => {
  const ref = useRef<HTMLElement>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (ref.current) Prism.highlightElement(ref.current)
  }, [code, language])

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false)
      }, 1000)
    }
  }, [copied])

  return (
    <pre
      tabIndex={-1}
      className={`overflow-x-auto relative text-[0.8125rem] leading-[1.5] bg-[#1c1c1c] border rounded-[.75rem] p-[1.5625rem] my-3 language-${language}`}
    >
      {/* copy button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => {
          navigator.clipboard.writeText(code)
          setCopied(true)
        }}
        className="absolute top-4 right-4 !text-[currentColor] hover:bg-[#fff]/10 rounded-lg"
      >
        <Clipboard size={13} className={copied ? "opacity-0" : "opacity-80"} />
        <Check size={13} className={`opacity-${copied ? "80" : "0"} -ml-[0.8125rem] `} />
      </Button>

      {/* code */}
      <code ref={ref} className={`language-${language}`}>
        {code}
      </code>
    </pre>
  )
}

export default CodeBlock

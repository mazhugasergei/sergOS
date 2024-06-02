"use client"

import { useEffect, useRef, useState } from "react"
import Prism from "prismjs"
import "@/app/styles/prism.scss"
import { Check, Copy } from "lucide-react"

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
      }, 800)
    }
  }, [copied])

  return (
    <pre
      tabIndex={-1}
      className={`group/codeblock overflow-x-auto relative text-[0.8125rem] leading-[1.5] bg-[#252B37] dark:bg-[#1c1c1c] dark:border border-[#282828] rounded-[.75rem] p-[1.5625rem] my-3 language-${language}`}
    >
      {/* copy button */}
      <button
        onClick={() => {
          navigator.clipboard.writeText(code)
          setCopied(true)
        }}
        className="group/button transition opacity-0 group-hover/codeblock:opacity-100 absolute top-4 right-4 bg-[#000]/10 hover:bg-[#000]/20 rounded-lg border border-[#282828] p-2.5"
      >
        <Copy size={13} className={`transition ${copied ? "opacity-0" : "opacity-60 group-hover/button:opacity-80"}`} />
        <Check size={13} className={`transition opacity-${copied ? "80" : "0"} -mt-[0.875rem] `} />
      </button>

      {/* code */}
      <code ref={ref} className={`language-${language}`}>
        {code}
      </code>
    </pre>
  )
}

export default CodeBlock

"use client"

import { Check, Link2 } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useEffect, useState } from "react"

export default function CopyURL() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false)
      }, 1000)
    }
  }, [copied])

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={() => {
              navigator.clipboard.writeText(window.location.href)
              setCopied(true)
            }}
            className="aspect-square bg-background brightness-[.96] hover:brightness-[.935] dark:brightness-[1.6] dark:hover:brightness-[2] transition rounded-full p-2.5"
          >
            <Link2 size={16} className={`${copied ? "opacity-0" : "opacity-50 dark:opacity-35"}`} />
            <Check size={16} className={`${copied ? "opacity-50 dark:opacity-35" : "opacity-0"} -mt-4`} />
          </button>
        </TooltipTrigger>
        <TooltipContent className="bg-background text-xs text-secondary border px-2 py-1 mb-1">
          <p>Copy URL</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

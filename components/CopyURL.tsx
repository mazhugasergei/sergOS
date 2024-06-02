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
      }, 800)
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
            className="aspect-square bg-[#f3f3f3] dark:bg-[#232323] dark:hover:bg-[#282828] transition-colors rounded-full p-2.5"
          >
            <Link2 size={16} className={`${copied ? "opacity-0" : "opacity-60"}`} />
            <Check size={16} className={`${copied ? "opacity-60" : "opacity-0"} -mt-4`} />
          </button>
        </TooltipTrigger>
        <TooltipContent className="text-xs dark:text-[#929292] bg-[#1C1C1C] border border-[#282828] px-2 py-1 mb-1">
          <p>Copy URL</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

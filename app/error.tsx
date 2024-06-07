"use client"

import Link from "@/components/Link"
import { Unplug } from "lucide-react"

export default function Error() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl">500</h1>
      <h2>Oops, something happened</h2>
      <Unplug size={48} className="mt-4" />
      <Link href="/" className="mt-4">
        Retry
      </Link>
    </div>
  )
}

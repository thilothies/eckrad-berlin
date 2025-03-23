"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Beim Seitenwechsel automatisch nach oben scrollen
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}


"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const scrollY = window.scrollY
      const direction = scrollY > lastScrollY ? "down" : "up"

      if (scrollY > 10) {
        setIsScrolled(direction === "down")
      } else {
        setIsScrolled(false)
      }

      lastScrollY = scrollY
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "bg-transparent backdrop-blur-none border-transparent"
          : "bg-white backdrop-blur supports-[backdrop-filter]:bg-white/95"
      }`}
    >
      <div className="container flex h-16 items-center">
        <div className={`mr-4 flex transition-opacity duration-300 ${isScrolled ? "opacity-0" : "opacity-100"}`}>
          <Link href="/" className="mr-6 flex items-center">
            <span className="font-extrabold text-xl text-primary">eckRAD</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav
            className={`hidden md:flex items-center space-x-8 text-sm transition-opacity duration-300 ${isScrolled ? "opacity-0" : "opacity-100"}`}
          >
            <Link href="/bikes" className="transition-colors hover:text-primary/80 text-black font-bold uppercase">
              Bikes
            </Link>
            <Link href="/service" className="transition-colors hover:text-primary/80 text-black font-bold uppercase">
              Service
            </Link>
            <Link href="/foerderung" className="transition-colors hover:text-primary/80 text-black font-bold uppercase">
              Förderung
            </Link>
            <Link href="/kontakt" className="transition-colors hover:text-primary/80 text-black font-bold uppercase">
              Kontakt
            </Link>
            <Link href="/ueber-uns" className="transition-colors hover:text-primary/80 text-black font-bold uppercase">
              Über uns
            </Link>
          </nav>
          <Button
            asChild
            size="sm"
            className={`hidden md:inline-flex bg-purple-400 hover:bg-purple-500 text-white font-semibold transition-opacity duration-300 ${isScrolled ? "opacity-0" : "opacity-100"}`}
          >
            <Link href="#buchen">PROBEFAHRT BUCHEN</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className={`md:hidden border-white/20 text-primary hover:bg-white/10 hover:text-primary transition-opacity duration-300 ${isScrolled ? "opacity-0" : "opacity-100"}`}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menü öffnen</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white text-primary">
              <nav className="flex flex-col space-y-4 mt-6">
                <Link href="/bikes" className="text-lg font-bold hover:text-primary/80 text-black uppercase">
                  Bikes
                </Link>
                <Link href="/service" className="text-lg font-bold hover:text-primary/80 text-black uppercase">
                  Service
                </Link>
                <Link href="/foerderung" className="text-lg font-bold hover:text-primary/80 text-black uppercase">
                  Förderung
                </Link>
                <Link href="/kontakt" className="text-lg font-bold hover:text-primary/80 text-black uppercase">
                  Kontakt
                </Link>
                <Link href="/ueber-uns" className="text-lg font-bold hover:text-primary/80 text-black uppercase">
                  Über uns
                </Link>
                <Button asChild className="mt-2 bg-purple-400 hover:bg-purple-500 text-white font-semibold">
                  <Link href="#buchen">PROBEFAHRT BUCHEN</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}


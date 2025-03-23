"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const categories = [
  {
    id: "mini",
    name: "Mini",
    description: "Kompakte Lastenräder für den Stadtverkehr. Ideal für den täglichen Einkauf und kleine Transporte.",
    image: "/images/muli-cargo-bike.png",
    link: "/bikes?category=Mini",
  },
  {
    id: "kindertaxi",
    name: "Kindertaxi",
    description:
      "Sichere und komfortable Lastenräder für den Transport von Kindern. Mit speziellen Sitzen und Sicherheitsfeatures.",
    image: "/images/urban-arrow-family-green.png",
    link: "/bikes?category=Kindertaxi",
  },
  {
    id: "hundetaxi",
    name: "Hundetaxi",
    description:
      "Speziell konzipierte Lastenräder für den Transport von Hunden. Mit sicheren Boxen und rutschfesten Böden.",
    image: "/placeholder.svg?height=600&width=400&text=Hundetaxi",
    link: "/bikes?category=Hundetaxi",
  },
  {
    id: "b2b",
    name: "B2B",
    description:
      "Professionelle Lastenräder für Unternehmen. Ideal für Lieferdienste, Handwerker und gewerbliche Nutzung.",
    image: "/placeholder.svg?height=600&width=400&text=B2B",
    link: "/bikes?category=B2B",
  },
]

export function BikeCategories() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(3)

  const updateVisibleItems = useCallback(() => {
    if (window.innerWidth < 640) {
      setVisibleItems(1)
    } else if (window.innerWidth < 1024) {
      setVisibleItems(2)
    } else {
      setVisibleItems(3)
    }
  }, [])

  useEffect(() => {
    updateVisibleItems()
    window.addEventListener("resize", updateVisibleItems)
    return () => window.removeEventListener("resize", updateVisibleItems)
  }, [updateVisibleItems])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + visibleItems >= categories.length ? 0 : prevIndex + 1))
  }, [visibleItems])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.max(0, categories.length - visibleItems) : prevIndex - 1))
  }, [visibleItems])

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-6">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="rounded-full bg-white hover:bg-primary/10"
          aria-label="Vorherige Kategorie"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="rounded-full bg-white hover:bg-primary/10"
          aria-label="Nächste Kategorie"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
        >
          {categories.map((category) => (
            <div
              key={category.id}
              className={cn(
                "flex-shrink-0 px-2",
                visibleItems === 1 ? "w-full" : visibleItems === 2 ? "w-1/2" : "w-1/3",
              )}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col">
                <div className="relative aspect-[2/3] overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">{category.description}</p>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                    <Link href={category.link}>Entdecken</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: Math.ceil(categories.length / visibleItems) }).map((_, index) => {
          const isActive = index === Math.floor(currentIndex / visibleItems)
          return (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * visibleItems)}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-colors",
                isActive ? "bg-primary" : "bg-primary/30 hover:bg-primary/50",
              )}
              aria-label={`Gehe zu Slide ${index + 1}`}
            />
          )
        })}
      </div>
    </div>
  )
}


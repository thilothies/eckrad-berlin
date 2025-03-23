"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const slides = [
  {
    image: "/images/urban-arrow-city.png",
    title: "Entdecke dein perfektes Lastenrad",
    description: "Qualität, Service und Leidenschaft für Fahrräder seit über 20 Jahren.",
    buttonText: "Bikes entdecken",
    buttonLink: "#bikes",
  },
  {
    image: "/images/urban-arrow-street.png",
    title: "Sicher unterwegs mit der ganzen Familie",
    description: "Unsere Lastenräder bieten Platz für Kinder, Einkäufe und alles, was du transportieren möchtest.",
    buttonText: "Kindertaxis ansehen",
    buttonLink: "/bikes?category=Kindertaxi",
  },
  {
    image: "/images/lifestyle/muli-kids-corner.png",
    title: "Nachhaltige Mobilität für jeden Tag",
    description: "Mit unseren E-Lastenrädern kommst du umweltfreundlich und staufrei durch die Stadt.",
    buttonText: "Jetzt beraten lassen",
    buttonLink: "#kontakt",
  },
]

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1)
  }, [current])

  const prevSlide = useCallback(() => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1)
  }, [current])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === current ? "opacity-100" : "opacity-0",
            )}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              fill
              alt={`Slide ${index + 1}`}
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-primary/30" />
            <div className="absolute inset-0 flex items-center">
              <div className="container px-4 md:px-6">
                <div className="max-w-[600px] space-y-4 text-white">
                  <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>
                  <p className="text-base md:text-xl text-white/90 font-light">{slide.description}</p>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row pt-2">
                    <Button asChild className="bg-accent hover:bg-accent/90 text-black font-semibold">
                      <Link href={slide.buttonLink}>
                        {slide.buttonText}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="bg-white/10 text-white border-white/20 hover:bg-white/20 font-medium"
                    >
                      <Link href="#buchen">Probefahrt buchen</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Vorheriges Bild"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Nächstes Bild"
      >
        <ArrowRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-colors",
              index === current ? "bg-white" : "bg-white/50 hover:bg-white/75",
            )}
            aria-label={`Gehe zu Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}


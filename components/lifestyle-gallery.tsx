"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const lifestyleImages = [
  {
    src: "/images/lifestyle/muli-shopping.png",
    alt: "Einkaufen mit dem Lastenrad",
    caption: "Einfach einkaufen mit dem Lastenrad",
    description: "Praktisch und umweltfreundlich: Mit dem Lastenrad zum Wochenmarkt oder Supermarkt.",
  },
  {
    src: "/images/lifestyle/lastenrad-kind-stadt.png",
    alt: "Kindertransport mit dem Lastenrad",
    caption: "Sicher unterwegs mit den Kleinen",
    description: "Bequem und sicher durch die Stadt: Lastenräder sind ideal für den Kindertransport.",
  },
  {
    src: "/images/lifestyle/muli-kids-corner.png",
    alt: "Familienmobilität mit dem Lastenrad",
    caption: "Familienmobilität neu gedacht",
    description: "Flexibel und schnell durch die Stadt - mit den Kindern immer im Blick.",
  },
  {
    src: "/images/lifestyle/muli-bridge.png",
    alt: "Modernes Lastenrad Design",
    caption: "Stylish unterwegs",
    description: "Lastenräder vereinen Funktionalität mit modernem Design für den urbanen Lifestyle.",
  },
  {
    src: "/images/lifestyle/dog-cargo-bike.png",
    alt: "Hund im Lastenrad",
    caption: "Tierisch gute Mobilität",
    description: "Auch Vierbeiner genießen die Fahrt im komfortablen Lastenrad - ideal für Ausflüge mit dem Haustier.",
  },
  {
    src: "/images/lifestyle/woman-dog-cargo-bike.png",
    alt: "Frau mit Hund im Lastenrad",
    caption: "Gemeinsam die Stadt erkunden",
    description: "Mit dem Lastenrad sind Ausflüge mit dem Hund entspannt und umweltfreundlich.",
  },
  {
    src: "/images/lifestyle/family-forest-ride.png",
    alt: "Familie auf Waldausflug mit Lastenrad",
    caption: "Naturerlebnisse für die ganze Familie",
    description: "Mit dem Lastenrad in die Natur - für unvergessliche Familienausflüge abseits der Stadt.",
  },
  {
    src: "/images/lifestyle/black-cargo-bike.png",
    alt: "Elegantes schwarzes Lastenrad",
    caption: "Eleganz trifft Funktionalität",
    description: "Lastenräder gibt es auch in edlem Design - perfekt für den urbanen Lifestyle.",
  },
  {
    src: "/images/lifestyle/family-picnic.png",
    alt: "Familienpicknick mit Lastenrad",
    caption: "Spontane Picknicks leicht gemacht",
    description: "Alles dabei für den perfekten Tag im Grünen - dank geräumigem Lastenrad.",
  },
  {
    src: "/images/lifestyle/yellow-cargo-bike.png",
    alt: "Gelbes Lastenrad vor modernem Gebäude",
    caption: "Farbenfroh durch den Alltag",
    description: "Lastenräder sind nicht nur praktisch, sondern auch ein echter Hingucker.",
  },
  {
    src: "/images/lifestyle/balloons-cargo-bike.png",
    alt: "Lastenrad mit Kind und Luftballons",
    caption: "Für besondere Momente im Leben",
    description: "Von Kindergeburtstagen bis Familienfesten - mit dem Lastenrad wird jeder Anlass zum Highlight.",
  },
]

export function LifestyleGallery() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [visibleItems, setVisibleItems] = useState(1)

  const updateVisibleItems = useCallback(() => {
    if (window.innerWidth < 640) {
      setVisibleItems(1)
    } else if (window.innerWidth < 1024) {
      setVisibleItems(1)
    } else {
      setVisibleItems(1)
    }
  }, [])

  useEffect(() => {
    updateVisibleItems()
    window.addEventListener("resize", updateVisibleItems)
    return () => window.removeEventListener("resize", updateVisibleItems)
  }, [updateVisibleItems])

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === lifestyleImages.length - visibleItems ? 0 : prev + 1))
  }, [visibleItems])

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? lifestyleImages.length - visibleItems : prev - 1))
  }, [visibleItems])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [nextSlide, isAutoPlaying])

  // Pause autoplay when user interacts with controls
  const handleManualControl = (callback: () => void) => {
    setIsAutoPlaying(false)
    callback()
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <div>
      {/* Main large image slider */}
      <div className="relative overflow-hidden rounded-xl">
        <div className="relative aspect-[16/9] md:aspect-[21/9]">
          {lifestyleImages.map((image, index) => (
            <div
              key={index}
              className={cn(
                "absolute inset-0 transition-opacity duration-1000",
                index === current ? "opacity-100" : "opacity-0",
              )}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-2">{image.caption}</h3>
                <p className="text-sm md:text-base text-white/90 max-w-md">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => handleManualControl(prevSlide)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
          aria-label="Vorheriges Bild"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => handleManualControl(nextSlide)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
          aria-label="Nächstes Bild"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-1 max-w-[80%]">
          {lifestyleImages.map((_, index) => (
            <button
              key={index}
              onClick={() => handleManualControl(() => setCurrent(index))}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-colors",
                index === current ? "bg-white" : "bg-white/50 hover:bg-white/75",
              )}
              aria-label={`Gehe zu Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}


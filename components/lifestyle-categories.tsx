"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

const categories = [
  {
    id: "alle",
    name: "Alle Bilder",
    images: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: "familie",
    name: "Familie",
    images: [1, 2, 6, 8, 10],
  },
  {
    id: "haustiere",
    name: "Haustiere",
    images: [4, 5],
  },
  {
    id: "einkaufen",
    name: "Einkaufen",
    images: [0],
  },
  {
    id: "freizeit",
    name: "Freizeit & Ausflüge",
    images: [6, 8],
  },
  {
    id: "design",
    name: "Design",
    images: [3, 7, 9],
  },
]

const lifestyleImages = [
  {
    src: "/images/lifestyle/muli-shopping.png",
    alt: "Einkaufen mit dem Lastenrad",
    caption: "Einfach einkaufen mit dem Lastenrad",
  },
  {
    src: "/images/lifestyle/lastenrad-kind-stadt.png",
    alt: "Kindertransport mit dem Lastenrad",
    caption: "Sicher unterwegs mit den Kleinen",
  },
  {
    src: "/images/lifestyle/muli-kids-corner.png",
    alt: "Familienmobilität mit dem Lastenrad",
    caption: "Familienmobilität neu gedacht",
  },
  {
    src: "/images/lifestyle/muli-bridge.png",
    alt: "Modernes Lastenrad Design",
    caption: "Stylish unterwegs",
  },
  {
    src: "/images/lifestyle/dog-cargo-bike.png",
    alt: "Hund im Lastenrad",
    caption: "Tierisch gute Mobilität",
  },
  {
    src: "/images/lifestyle/woman-dog-cargo-bike.png",
    alt: "Frau mit Hund im Lastenrad",
    caption: "Gemeinsam die Stadt erkunden",
  },
  {
    src: "/images/lifestyle/family-forest-ride.png",
    alt: "Familie auf Waldausflug mit Lastenrad",
    caption: "Naturerlebnisse für die ganze Familie",
  },
  {
    src: "/images/lifestyle/black-cargo-bike.png",
    alt: "Elegantes schwarzes Lastenrad",
    caption: "Eleganz trifft Funktionalität",
  },
  {
    src: "/images/lifestyle/family-picnic.png",
    alt: "Familienpicknick mit Lastenrad",
    caption: "Spontane Picknicks leicht gemacht",
  },
  {
    src: "/images/lifestyle/yellow-cargo-bike.png",
    alt: "Gelbes Lastenrad vor modernem Gebäude",
    caption: "Farbenfroh durch den Alltag",
  },
  {
    src: "/images/lifestyle/balloons-cargo-bike.png",
    alt: "Lastenrad mit Kind und Luftballons",
    caption: "Für besondere Momente im Leben",
  },
]

export function LifestyleCategories() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <div className="space-y-6">
      <Tabs defaultValue="alle">
        <TabsList className="grid w-full" style={{ gridTemplateColumns: `repeat(${categories.length}, 1fr)` }}>
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {category.images.map((imageIndex) => {
                const image = lifestyleImages[imageIndex]
                return (
                  <div
                    key={imageIndex}
                    className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                    onClick={() => setSelectedImage(imageIndex)}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white p-3 text-sm font-medium">{image.caption}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={lifestyleImages[selectedImage].src || "/placeholder.svg"}
                alt={lifestyleImages[selectedImage].alt}
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute top-2 right-2">
              <button
                className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white">
              <h3 className="text-xl font-bold">{lifestyleImages[selectedImage].caption}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


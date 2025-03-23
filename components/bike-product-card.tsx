"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

interface Bike {
  id: number
  name: string
  price: number
  brand: string
  category: string
  type: string
  popularity: number
  image: string
  description: string
  features?: string[]
}

interface BikeProductCardProps {
  bike: Bike
}

export function BikeProductCard({ bike }: BikeProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const formatPrice = (price: number) => {
    return price.toLocaleString("de-DE", {
      style: "currency",
      currency: "EUR",
    })
  }

  // Map brand names to appropriate images for certain products
  const getBikeImage = () => {
    if (bike.brand === "Urban Arrow" && bike.type === "Kindertaxi") {
      return "/images/urban-arrow-family-green.png"
    } else if (bike.brand === "Muli" && bike.type === "Mini") {
      return "/images/muli-cargo-bike.png"
    } else {
      return bike.image
    }
  }

  const isRieseAndMueller = bike.brand === "Riese & Müller"

  return (
    <div
      className="group relative overflow-hidden rounded-lg border bg-white shadow-sm flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={getBikeImage() || "/placeholder.svg"}
          alt={bike.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <Badge className="bg-primary text-white">{bike.type}</Badge>
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <div className="mb-2">
          <div className="text-xs font-medium text-muted-foreground">{bike.brand}</div>
          <h3 className="font-semibold text-lg">{bike.name}</h3>
        </div>

        <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-1">{bike.description}</p>

        <div className="mt-auto">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xl font-bold text-primary">{formatPrice(bike.price)}</span>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < bike.popularity ? "text-accent" : "text-gray-300"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Details
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>{bike.name}</DialogTitle>
                  <DialogDescription>
                    {bike.brand} | {bike.type}
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                    <Image src={getBikeImage() || "/placeholder.svg"} alt={bike.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Beschreibung</h4>
                    <p className="text-muted-foreground">{bike.description}</p>
                  </div>
                  {bike.features && bike.features.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2">Features</h4>
                      <ul className="list-disc pl-5 text-muted-foreground">
                        {bike.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{formatPrice(bike.price)}</span>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < bike.popularity ? "text-accent" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mt-2">
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-primary hover:bg-primary/90 text-white">Angebot anfragen</Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
                      >
                        Probefahrt vereinbaren
                      </Button>
                    </div>

                    {isRieseAndMueller && (
                      <Button
                        variant="outline"
                        className="flex items-center justify-center gap-2 border-[#173A62] text-[#173A62] hover:bg-[#173A62] hover:text-white"
                        onClick={() => window.open("https://www.r-m.de", "_blank")}
                      >
                        <ExternalLink className="h-4 w-4" />
                        Jetzt konfigurieren
                      </Button>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <Button className="flex-1 bg-primary hover:bg-primary/90 text-white">Anfragen</Button>
          </div>

          {isRieseAndMueller && (
            <Button
              variant="outline"
              className="w-full mt-2 flex items-center justify-center gap-2 border-[#173A62] text-[#173A62] hover:bg-[#173A62] hover:text-white"
              onClick={() => window.open("https://www.r-m.de", "_blank")}
            >
              <ExternalLink className="h-4 w-4" />
              Jetzt konfigurieren
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}


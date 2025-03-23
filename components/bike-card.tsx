"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface BikeCardProps {
  name: string
  price: string
  type: string
  image: string
}

export function BikeCard({ name, price, type, image }: BikeCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative overflow-hidden rounded-lg border bg-white shadow-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden">
        <Image
          src={image || "/placeholder.svg?height=300&width=400"}
          width={400}
          height={300}
          alt={name}
          className="object-cover transition-transform duration-300 group-hover:scale-105 aspect-[4/3] w-full"
        />
      </div>
      <div className="p-4">
        <div className="text-xs font-medium text-muted-foreground mb-1">{type}</div>
        <h3 className="font-semibold tracking-tight">{name}</h3>
        <p className="text-sm text-accent font-bold">{price}</p>
      </div>

      {/* Hover Overlay */}
      <div
        className={`absolute inset-0 bg-primary/80 flex flex-col items-center justify-center p-4 space-y-3 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Button className="w-full bg-accent hover:bg-accent/90 text-black font-semibold">Angebot anfragen</Button>
        <Button variant="outline" className="w-full border-white text-white hover:bg-white/20 font-semibold">
          Probefahrt vereinbaren
        </Button>
      </div>
    </div>
  )
}


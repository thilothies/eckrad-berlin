import { BikeCard } from "@/components/bike-card"

const featuredBikes = [
  { name: "Mountain Bike Pro", price: "€1.299,99", type: "MTB", image: "/placeholder.svg?height=300&width=400" },
  { name: "City Cruiser", price: "€899,99", type: "Urban", image: "/placeholder.svg?height=300&width=400" },
  { name: "Race Master", price: "€1.599,99", type: "Road", image: "/placeholder.svg?height=300&width=400" },
  { name: "E-Rider Deluxe", price: "€2.499,99", type: "Electric", image: "/placeholder.svg?height=300&width=400" },
  { name: "Mountain Explorer", price: "€1.199,99", type: "MTB", image: "/placeholder.svg?height=300&width=400" },
  { name: "Urban Commuter", price: "€949,99", type: "Urban", image: "/placeholder.svg?height=300&width=400" },
  { name: "Speed Racer", price: "€1.799,99", type: "Road", image: "/placeholder.svg?height=300&width=400" },
  { name: "E-City Comfort", price: "€2.199,99", type: "Electric", image: "/placeholder.svg?height=300&width=400" },
]

export function BikeShopWindow() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {featuredBikes.map((bike, index) => (
        <BikeCard key={index} name={bike.name} price={bike.price} type={bike.type} image={bike.image} />
      ))}
    </div>
  )
}


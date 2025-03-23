import { BikeProductCard } from "@/components/bike-product-card"

interface Bike {
  id: number
  name: string
  price: number
  brand: string
  category: string
  popularity: number
  image: string
  description: string
}

interface BikeGridProps {
  bikes: Bike[]
}

export function BikeGrid({ bikes }: BikeGridProps) {
  if (bikes.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium">Keine Fahrräder gefunden</h3>
        <p className="text-muted-foreground">Bitte passe deine Filtereinstellungen an.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {bikes.map((bike) => (
        <BikeProductCard key={bike.id} bike={bike} />
      ))}
    </div>
  )
}


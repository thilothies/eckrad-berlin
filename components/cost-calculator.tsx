"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { bikeData } from "@/lib/bike-data"
import { Calculator, Car, Bike, BarChart3, Heart, Leaf, Activity, Smile, Droplet, Wind } from "lucide-react"

// Konstanten für die Berechnungen
const FUEL_PRICE_PER_LITER = 1.85 // Euro
const AVERAGE_CAR_CONSUMPTION = 7.5 // Liter pro 100 km
const AVERAGE_CAR_PRICE = 25000 // Euro
const AVERAGE_CAR_INSURANCE = 800 // Euro pro Jahr
const AVERAGE_CAR_MAINTENANCE = 600 // Euro pro Jahr
const AVERAGE_CAR_DEPRECIATION = 0.15 // 15% pro Jahr
const AVERAGE_BIKE_MAINTENANCE = 150 // Euro pro Jahr
const AVERAGE_BIKE_INSURANCE = 120 // Euro pro Jahr
const AVERAGE_BIKE_DEPRECIATION = 0.1 // 10% pro Jahr
const CO2_PER_LITER = 2.37 // kg CO2 pro Liter Benzin
const CALORIES_PER_KM = 30 // Kalorien pro km mit dem Fahrrad

interface CostCalculatorProps {
  className?: string
}

export function CostCalculator({ className }: CostCalculatorProps) {
  // Zustand für Eingabewerte
  const [distance, setDistance] = useState(10) // km pro Tag
  const [timeFrame, setTimeFrame] = useState<"day" | "month" | "year">("day")
  const [carPrice, setCarPrice] = useState(AVERAGE_CAR_PRICE)
  const [carConsumption, setCarConsumption] = useState(AVERAGE_CAR_CONSUMPTION)
  const [carInsurance, setCarInsurance] = useState(AVERAGE_CAR_INSURANCE)
  const [carMaintenance, setCarMaintenance] = useState(AVERAGE_CAR_MAINTENANCE)
  const [carDepreciation, setCarDepreciation] = useState(AVERAGE_CAR_DEPRECIATION)
  const [selectedBikeId, setSelectedBikeId] = useState<number | null>(null)
  const [bikeInsurance, setBikeInsurance] = useState(AVERAGE_BIKE_INSURANCE)
  const [bikeMaintenance, setBikeMaintenance] = useState(AVERAGE_BIKE_MAINTENANCE)
  const [bikeDepreciation, setBikeDepreciation] = useState(AVERAGE_BIKE_DEPRECIATION)
  const [activeTab, setActiveTab] = useState("financial")

  // Zustand für Ergebnisse
  const [results, setResults] = useState({
    carCostPerYear: 0,
    bikeCostPerYear: 0,
    savingsPerYear: 0,
    savingsPerMonth: 0,
    savingsAfterFiveYears: 0,
    breakEvenMonths: 0,
    co2SavingsPerYear: 0,
    caloriesBurnedPerYear: 0,
    healthScore: 0,
    funScore: 0,
    weatherProtection: 0,
    comfortScore: 0,
    environmentScore: 0,
    overallScore: 0,
  })

  // Ausgewähltes Fahrrad
  const selectedBike = bikeData.find((bike) => bike.id === selectedBikeId)

  // Nur Lastenräder filtern
  const cargoBikes = bikeData.filter((bike) => bike.category === "Cargo")

  // Berechnung der Kosten und anderen Faktoren
  useEffect(() => {
    if (!selectedBike) return

    // Konvertiere Distanz auf Jahresbasis
    let annualDistance = distance
    if (timeFrame === "day") {
      annualDistance = distance * 365
    } else if (timeFrame === "month") {
      annualDistance = distance * 12
    }

    // Auto-Kosten
    const fuelCostPerYear = (annualDistance * carConsumption * FUEL_PRICE_PER_LITER) / 100
    const carDepreciationCost = carPrice * carDepreciation
    const carCostPerYear = fuelCostPerYear + carInsurance + carMaintenance + carDepreciationCost

    // Fahrrad-Kosten
    const bikePrice = selectedBike.price
    const bikeDepreciationCost = bikePrice * bikeDepreciation
    const bikeCostPerYear = bikeInsurance + bikeMaintenance + bikeDepreciationCost

    // Einsparungen
    const savingsPerYear = carCostPerYear - bikeCostPerYear
    const savingsPerMonth = savingsPerYear / 12
    const savingsAfterFiveYears = savingsPerYear * 5 - bikePrice

    // Amortisationszeit in Monaten
    const monthlySavings = savingsPerYear / 12
    const breakEvenMonths = monthlySavings > 0 ? Math.ceil(bikePrice / monthlySavings) : Number.POSITIVE_INFINITY

    // Umwelt und Gesundheit
    const co2SavingsPerYear = (annualDistance * carConsumption * CO2_PER_LITER) / 100
    const caloriesBurnedPerYear = annualDistance * CALORIES_PER_KM

    // Subjektive Bewertungen (Skala 1-10)
    const healthScore = 9 // Radfahren ist sehr gesund
    const funScore = 8 // Radfahren macht Spaß
    const weatherProtection = 3 // Weniger Schutz vor Wetter als im Auto
    const comfortScore = selectedBike.type === "Kindertaxi" ? 7 : 6 // Komfort je nach Fahrradtyp
    const environmentScore = 10 // Sehr umweltfreundlich

    // Gesamtbewertung
    const overallScore =
      ((savingsPerYear > 0 ? 10 : 5) + // Finanzieller Vorteil
        healthScore +
        funScore +
        weatherProtection +
        comfortScore +
        environmentScore) /
      6

    setResults({
      carCostPerYear,
      bikeCostPerYear,
      savingsPerYear,
      savingsPerMonth,
      savingsAfterFiveYears,
      breakEvenMonths,
      co2SavingsPerYear,
      caloriesBurnedPerYear,
      healthScore,
      funScore,
      weatherProtection,
      comfortScore,
      environmentScore,
      overallScore,
    })
  }, [
    distance,
    timeFrame,
    carPrice,
    carConsumption,
    carInsurance,
    carMaintenance,
    carDepreciation,
    selectedBike,
    bikeInsurance,
    bikeMaintenance,
    bikeDepreciation,
  ])

  // Formatierung von Währungsbeträgen
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  // Bewertungssterne rendern
  const renderRating = (score: number, max = 10) => {
    return (
      <div className="flex items-center">
        {Array.from({ length: max }).map((_, i) => (
          <div key={i} className={`w-4 h-4 rounded-full mr-1 ${i < score ? "bg-primary" : "bg-gray-200"}`} />
        ))}
        <span className="ml-2 text-sm font-medium">
          {score}/{max}
        </span>
      </div>
    )
  }

  return (
    <div className={className}>
      <div className="flex flex-col items-center text-center space-y-4 mb-8">
        <div className="inline-flex items-center justify-center rounded-md bg-primary/10 p-1 px-2">
          <Calculator className="mr-1 h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">Kostenrechner</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tighter">Vorteilsrechner: Cargobike vs. Auto</h2>
        <p className="max-w-[700px] text-muted-foreground font-light">
          Vergleiche die Kosten, Gesundheits- und Umweltvorteile eines Cargobikes mit denen eines Autos
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Eingabebereich */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Deine Eingaben</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Cargobike-Auswahl */}
                <div>
                  <Label className="flex items-center mb-2">
                    <Bike className="mr-2 h-4 w-4 text-primary" />
                    Wähle dein Cargobike
                  </Label>
                  <Select onValueChange={(value) => setSelectedBikeId(Number(value))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Wähle ein Cargobike" />
                    </SelectTrigger>
                    <SelectContent>
                      {cargoBikes.map((bike) => (
                        <SelectItem key={bike.id} value={bike.id.toString()}>
                          {bike.brand} {bike.name} - {formatCurrency(bike.price)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Strecke */}
                <div>
                  <div className="flex justify-between mb-2">
                    <Label htmlFor="distance" className="flex items-center">
                      <BarChart3 className="mr-2 h-4 w-4 text-primary" />
                      Strecke: {distance} km
                    </Label>
                    <Tabs defaultValue="day" onValueChange={(value) => setTimeFrame(value as "day" | "month" | "year")}>
                      <TabsList className="h-7">
                        <TabsTrigger value="day" className="text-xs px-2">
                          Tag
                        </TabsTrigger>
                        <TabsTrigger value="month" className="text-xs px-2">
                          Monat
                        </TabsTrigger>
                        <TabsTrigger value="year" className="text-xs px-2">
                          Jahr
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                  <Slider
                    id="distance"
                    min={1}
                    max={timeFrame === "day" ? 100 : timeFrame === "month" ? 1000 : 20000}
                    step={timeFrame === "day" ? 1 : timeFrame === "month" ? 10 : 100}
                    value={[distance]}
                    onValueChange={(value) => setDistance(value[0])}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {/* Auto-Kosten */}
                <div>
                  <Label className="flex items-center mb-2">
                    <Car className="mr-2 h-4 w-4 text-primary" />
                    Auto-Kosten
                  </Label>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs text-muted-foreground mb-1">
                        <span>Kaufpreis</span>
                        <span>{formatCurrency(carPrice)}</span>
                      </div>
                      <Slider
                        min={5000}
                        max={50000}
                        step={1000}
                        value={[carPrice]}
                        onValueChange={(value) => setCarPrice(value[0])}
                      />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-muted-foreground mb-1">
                        <span>Verbrauch</span>
                        <span>{carConsumption} l/100km</span>
                      </div>
                      <Slider
                        min={4}
                        max={15}
                        step={0.1}
                        value={[carConsumption]}
                        onValueChange={(value) => setCarConsumption(value[0])}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="carInsurance" className="text-xs">
                          Versicherung (€/Jahr)
                        </Label>
                        <Input
                          id="carInsurance"
                          type="number"
                          value={carInsurance}
                          onChange={(e) => setCarInsurance(Number(e.target.value))}
                          className="h-8 text-sm"
                        />
                      </div>
                      <div>
                        <Label htmlFor="carMaintenance" className="text-xs">
                          Wartung (€/Jahr)
                        </Label>
                        <Input
                          id="carMaintenance"
                          type="number"
                          value={carMaintenance}
                          onChange={(e) => setCarMaintenance(Number(e.target.value))}
                          className="h-8 text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cargobike-Kosten */}
                <div>
                  <Label className="flex items-center mb-2">
                    <Bike className="mr-2 h-4 w-4 text-primary" />
                    Cargobike-Kosten
                  </Label>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="bikeInsurance" className="text-xs">
                          Versicherung (€/Jahr)
                        </Label>
                        <Input
                          id="bikeInsurance"
                          type="number"
                          value={bikeInsurance}
                          onChange={(e) => setBikeInsurance(Number(e.target.value))}
                          className="h-8 text-sm"
                        />
                      </div>
                      <div>
                        <Label htmlFor="bikeMaintenance" className="text-xs">
                          Wartung (€/Jahr)
                        </Label>
                        <Input
                          id="bikeMaintenance"
                          type="number"
                          value={bikeMaintenance}
                          onChange={(e) => setBikeMaintenance(Number(e.target.value))}
                          className="h-8 text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-muted-foreground mb-1">
                        <span>Wertverlust pro Jahr</span>
                        <span>{(bikeDepreciation * 100).toFixed(0)}%</span>
                      </div>
                      <Slider
                        min={0.05}
                        max={0.2}
                        step={0.01}
                        value={[bikeDepreciation]}
                        onValueChange={(value) => setBikeDepreciation(value[0])}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Ergebnisbereich */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardHeader className="pb-2">
              <CardTitle>Deine Vorteile</CardTitle>
              <CardDescription>Basierend auf deinen Eingaben</CardDescription>
            </CardHeader>
            <CardContent>
              {selectedBike ? (
                <div className="space-y-4">
                  <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="financial">
                        <Calculator className="h-4 w-4 mr-1" />
                        <span className="hidden sm:inline">Finanziell</span>
                      </TabsTrigger>
                      <TabsTrigger value="health">
                        <Heart className="h-4 w-4 mr-1" />
                        <span className="hidden sm:inline">Gesundheit</span>
                      </TabsTrigger>
                      <TabsTrigger value="environment">
                        <Leaf className="h-4 w-4 mr-1" />
                        <span className="hidden sm:inline">Umwelt</span>
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="financial" className="pt-4">
                      <div className="bg-gradient-to-r from-primary/10 to-primary/20 p-4 rounded-lg mb-4">
                        <div className="text-center">
                          <div className="text-lg font-medium">Jährliche Ersparnis</div>
                          <div className="text-3xl font-bold text-primary">
                            {formatCurrency(results.savingsPerYear)}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {formatCurrency(results.savingsPerMonth)} pro Monat
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-3">
                        <div className="bg-mint-light p-3 rounded-lg">
                          <div className="text-xs text-muted-foreground">Auto-Kosten/Jahr</div>
                          <div className="text-base font-bold text-primary">
                            {formatCurrency(results.carCostPerYear)}
                          </div>
                        </div>
                        <div className="bg-mint-light p-3 rounded-lg">
                          <div className="text-xs text-muted-foreground">Bike-Kosten/Jahr</div>
                          <div className="text-base font-bold text-primary">
                            {formatCurrency(results.bikeCostPerYear)}
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-2">
                          <div className="text-xs text-muted-foreground">Amortisationszeit</div>
                          <div className="text-sm font-semibold">
                            {results.breakEvenMonths === Number.POSITIVE_INFINITY
                              ? "Nicht erreichbar"
                              : `${results.breakEvenMonths} Monate`}
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="text-xs text-muted-foreground">Nach 5 Jahren</div>
                          <div className="text-sm font-semibold">{formatCurrency(results.savingsAfterFiveYears)}</div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="health" className="pt-4">
                      <div className="bg-gradient-to-r from-primary/10 to-primary/20 p-4 rounded-lg mb-4">
                        <div className="text-center">
                          <div className="text-lg font-medium">Verbrannte Kalorien</div>
                          <div className="text-3xl font-bold text-primary">
                            {Math.round(results.caloriesBurnedPerYear).toLocaleString()} kcal
                          </div>
                          <div className="text-sm text-muted-foreground">pro Jahr</div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Activity className="h-4 w-4 text-primary mr-2" />
                            <span className="text-sm">Gesundheitswert</span>
                          </div>
                          {renderRating(results.healthScore)}
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Smile className="h-4 w-4 text-primary mr-2" />
                            <span className="text-sm">Spaßfaktor</span>
                          </div>
                          {renderRating(results.funScore)}
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Wind className="h-4 w-4 text-primary mr-2" />
                            <span className="text-sm">Wetterschutz</span>
                          </div>
                          {renderRating(results.weatherProtection)}
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Droplet className="h-4 w-4 text-primary mr-2" />
                            <span className="text-sm">Komfort</span>
                          </div>
                          {renderRating(results.comfortScore)}
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="environment" className="pt-4">
                      <div className="bg-gradient-to-r from-primary/10 to-primary/20 p-4 rounded-lg mb-4">
                        <div className="text-center">
                          <div className="text-lg font-medium">CO₂-Einsparung</div>
                          <div className="text-3xl font-bold text-primary">
                            {Math.round(results.co2SavingsPerYear).toLocaleString()} kg
                          </div>
                          <div className="text-sm text-muted-foreground">pro Jahr</div>
                        </div>
                      </div>

                      <div className="p-3 bg-mint-light rounded-lg mb-3">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Leaf className="h-4 w-4 text-primary mr-2" />
                            <span className="text-sm">Umweltfreundlichkeit</span>
                          </div>
                          {renderRating(results.environmentScore)}
                        </div>
                      </div>

                      <div className="p-3 border border-primary/20 rounded-lg">
                        <div className="text-sm font-medium mb-1">Gesamtbewertung</div>
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                            <div
                              className="bg-primary h-2.5 rounded-full"
                              style={{ width: `${results.overallScore * 10}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-bold">{results.overallScore.toFixed(1)}</span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-2">
                          Basierend auf finanziellen, gesundheitlichen und ökologischen Faktoren
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>

                  <div className="bg-primary/10 p-3 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm font-medium">
                          {selectedBike.brand} {selectedBike.name}
                        </div>
                        <div className="text-xs text-muted-foreground">{selectedBike.type}</div>
                      </div>
                      <div className="text-base font-bold text-primary">{formatCurrency(selectedBike.price)}</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="text-muted-foreground mb-4">
                    Bitte wähle ein Cargobike aus, um deine Vorteile zu berechnen.
                  </div>
                  <Bike className="h-12 w-12 text-muted-foreground mx-auto opacity-30" />
                </div>
              )}
            </CardContent>
            <CardFooter>
              {selectedBike && (
                <div className="w-full space-y-2">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">Probefahrt vereinbaren</Button>
                  <Button variant="outline" className="w-full">
                    Angebot anfordern
                  </Button>
                </div>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}


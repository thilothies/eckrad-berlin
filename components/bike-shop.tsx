"use client"

import { useState } from "react"
import { BikeFilters } from "@/components/bike-filters"
import { BikeGrid } from "@/components/bike-grid"
import { bikeData, bikeBrands, priceRanges, bikeCategories } from "@/lib/bike-data"

export function BikeShop() {
  const [filteredBikes, setFilteredBikes] = useState(bikeData)
  const [sortOption, setSortOption] = useState("popularity")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Filter-Funktion
  const applyFilters = (
    selectedBrands: string[],
    priceRange: { min: number; max: number },
    sortBy: string,
    category: string,
  ) => {
    let result = [...bikeData]

    // Nach Kategorie filtern
    if (category !== "all") {
      result = result.filter((bike) => bike.type === category)
    }

    // Nach Marken filtern
    if (selectedBrands.length > 0) {
      result = result.filter((bike) => selectedBrands.includes(bike.brand))
    }

    // Nach Preisbereich filtern
    result = result.filter((bike) => bike.price >= priceRange.min && bike.price <= priceRange.max)

    // Sortieren
    if (sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === "popularity") {
      result.sort((a, b) => b.popularity - a.popularity)
    }

    setFilteredBikes(result)
    setSortOption(sortBy)
    setSelectedCategory(category)
  }

  return (
    <div className="space-y-6">
      <BikeFilters
        brands={bikeBrands}
        priceRanges={priceRanges}
        categories={bikeCategories}
        onFilterChange={applyFilters}
        initialSortOption={sortOption}
        initialCategory={selectedCategory}
      />
      <BikeGrid bikes={filteredBikes} />
    </div>
  )
}


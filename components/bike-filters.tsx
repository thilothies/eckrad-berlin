"use client"

import { useState } from "react"
import { Check, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface PriceRange {
  label: string
  min: number
  max: number
}

interface Category {
  id: string
  name: string
}

interface BikeFiltersProps {
  brands: string[]
  priceRanges: PriceRange[]
  categories: Category[]
  onFilterChange: (selectedBrands: string[], priceRange: PriceRange, sortBy: string, category: string) => void
  initialSortOption: string
  initialCategory: string
}

export function BikeFilters({
  brands,
  priceRanges,
  categories,
  onFilterChange,
  initialSortOption,
  initialCategory,
}: BikeFiltersProps) {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedPriceRange, setSelectedPriceRange] = useState<PriceRange>(priceRanges[0])
  const [sortOption, setSortOption] = useState(initialSortOption)
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)

  const handleBrandChange = (brand: string, checked: boolean) => {
    let newSelectedBrands: string[]

    if (checked) {
      newSelectedBrands = [...selectedBrands, brand]
    } else {
      newSelectedBrands = selectedBrands.filter((b) => b !== brand)
    }

    setSelectedBrands(newSelectedBrands)
    onFilterChange(newSelectedBrands, selectedPriceRange, sortOption, selectedCategory)
  }

  const handlePriceRangeChange = (range: PriceRange) => {
    setSelectedPriceRange(range)
    onFilterChange(selectedBrands, range, sortOption, selectedCategory)
  }

  const handleSortChange = (value: string) => {
    setSortOption(value)
    onFilterChange(selectedBrands, selectedPriceRange, value, selectedCategory)
  }

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value)
    onFilterChange(selectedBrands, selectedPriceRange, sortOption, value)
  }

  return (
    <div className="bg-white rounded-lg border shadow-sm p-4 md:p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <h2 className="text-lg font-semibold">Filter & Sortierung</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground font-medium">Sortieren nach:</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="min-w-[180px] justify-between">
                {sortOption === "popularity" && "Beliebtheit"}
                {sortOption === "price-asc" && "Preis: Aufsteigend"}
                {sortOption === "price-desc" && "Preis: Absteigend"}
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[180px]">
              <DropdownMenuRadioGroup value={sortOption} onValueChange={handleSortChange}>
                <DropdownMenuRadioItem value="popularity">Beliebtheit</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="price-asc">Preis: Aufsteigend</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="price-desc">Preis: Absteigend</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Kategorien-Tabs */}
      <div className="mb-6">
        <Tabs defaultValue={selectedCategory} onValueChange={handleCategoryChange}>
          <TabsList className="w-full grid" style={{ gridTemplateColumns: `repeat(${categories.length}, 1fr)` }}>
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Accordion type="single" collapsible defaultValue="brands" className="w-full">
          <AccordionItem value="brands">
            <AccordionTrigger className="font-medium">Marken</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-2 gap-2">
                {brands.map((brand) => (
                  <div key={brand} className="flex items-center space-x-2">
                    <Checkbox
                      id={`brand-${brand}`}
                      checked={selectedBrands.includes(brand)}
                      onCheckedChange={(checked) => handleBrandChange(brand, checked === true)}
                    />
                    <label
                      htmlFor={`brand-${brand}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {brand}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible defaultValue="price" className="w-full">
          <AccordionItem value="price">
            <AccordionTrigger className="font-medium">Preis</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {priceRanges.map((range, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div
                      className={`h-4 w-4 rounded-full border flex items-center justify-center ${
                        selectedPriceRange.label === range.label
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-muted-foreground"
                      }`}
                      onClick={() => handlePriceRangeChange(range)}
                    >
                      {selectedPriceRange.label === range.label && <Check className="h-3 w-3 text-white" />}
                    </div>
                    <label
                      className="text-sm font-medium leading-none cursor-pointer"
                      onClick={() => handlePriceRangeChange(range)}
                    >
                      {range.label}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}


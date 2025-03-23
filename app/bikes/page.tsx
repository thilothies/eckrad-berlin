import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"

import { BikeShop } from "@/components/bike-shop"
import { SiteHeader } from "@/components/site-header"
import { BikeCategories } from "@/components/bike-categories"
import { BrandShowcase } from "@/components/brand-showcase"
import { LifestyleGallery } from "@/components/lifestyle-gallery"
import { CostCalculator } from "@/components/cost-calculator"

export default function BikesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
          <Image
            src="/images/urban-arrow-city.png"
            alt="Lastenrad in der Stadt"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/40 flex items-center">
            <div className="container px-4 md:px-6">
              <div className="max-w-[700px] space-y-4 text-white">
                <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  Lastenräder für jeden Bedarf
                </h1>
                <p className="text-base md:text-xl text-white/90 font-light">
                  Entdecke unsere große Auswahl an hochwertigen Lastenrädern von führenden Marken
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lifestyle Gallery */}
        <section className="w-full py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-8">
              <h2 className="text-3xl font-bold tracking-tighter">Lastenräder im Alltag</h2>
              <p className="max-w-[700px] text-muted-foreground font-light">
                Entdecke, wie Lastenräder deinen Alltag bereichern können
              </p>
            </div>

            <LifestyleGallery />
          </div>
        </section>

        {/* Kostenvorteilsrechner */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-mint-light">
          <div className="container px-4 md:px-6">
            <CostCalculator />
          </div>
        </section>

        {/* Welches Rad passt zu dir? Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Welches Rad passt zu dir?</h2>
              <p className="max-w-[700px] text-muted-foreground font-light">
                Entdecke die perfekte Fahrradkategorie für deine Bedürfnisse
              </p>
            </div>

            <BikeCategories />
          </div>
        </section>

        {/* Marken Showcase */}
        <BrandShowcase />

        {/* Bike Shop Section */}
        <div className="container px-4 py-8 md:px-6 md:py-12">
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 font-medium mb-4">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Zurück zur Startseite
            </Link>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Fahrräder Shop</h1>
            <p className="mt-2 text-muted-foreground font-light max-w-[700px]">
              Entdecke unsere große Auswahl an hochwertigen Fahrrädern. Finde dein perfektes Rad für jedes Terrain und
              jeden Anspruch.
            </p>
          </div>

          <BikeShop />
        </div>
      </main>

      <footer className="w-full py-6 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">eckRAD</h3>
              <p className="text-sm text-white/80 font-light">
                Dein Fachgeschäft für hochwertige Fahrräder und professionellen Service.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Schnelllinks</h3>
              <nav className="flex flex-col space-y-2 text-sm text-white/80 font-light">
                <Link href="/#bikes" className="hover:text-white hover:underline">
                  Bikes
                </Link>
                <Link href="/#service" className="hover:text-white hover:underline">
                  Service
                </Link>
                <Link href="/#ueber-uns" className="hover:text-white hover:underline">
                  Über uns
                </Link>
                <Link href="/#kontakt" className="hover:text-white hover:underline">
                  Kontakt
                </Link>
                <Link href="/#buchen" className="hover:text-white hover:underline">
                  Termin buchen
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Rechtliches</h3>
              <nav className="flex flex-col space-y-2 text-sm text-white/80 font-light">
                <Link href="#" className="hover:text-white hover:underline">
                  Impressum
                </Link>
                <Link href="#" className="hover:text-white hover:underline">
                  Datenschutz
                </Link>
                <Link href="#" className="hover:text-white hover:underline">
                  AGB
                </Link>
              </nav>
            </div>
          </div>
          <div className="mt-6 border-t border-white/20 pt-6">
            <p className="text-center text-xs text-white/70 font-light">© 2025 eckRAD. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}


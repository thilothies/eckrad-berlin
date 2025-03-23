import Link from "next/link"
import Image from "next/image"
import { Bike, PenToolIcon as Tool, Users, Phone, Calendar, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { HeroCarousel } from "@/components/hero-carousel"
import { BrandShowcase } from "@/components/brand-showcase"
import { LifestyleGallery } from "@/components/lifestyle-gallery"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      {/* Hero-Bereich mit Auto-Slider */}
      <section className="w-full bg-background">
        <HeroCarousel />
      </section>

      {/* Bikes Bereich */}
      <section id="bikes" className="w-full py-12 md:py-24 lg:py-32 bg-mint-light">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center justify-center rounded-md bg-primary/10 p-1 px-2">
                <Bike className="mr-1 h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Lastenräder</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Unsere Lastenräder</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light">
                Entdecke unsere Auswahl an hochwertigen Lastenrädern für jeden Einsatzzweck.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[
                {
                  name: "Urban Arrow Family",
                  price: "€5.499,99",
                  type: "Kindertaxi",
                  brand: "Urban Arrow",
                  image: "/images/urban-arrow-family-green.png",
                },
                {
                  name: "Riese & Müller Load 75",
                  price: "€8.999,00",
                  type: "Kindertaxi",
                  brand: "Riese & Müller",
                  image: "/placeholder.svg?height=300&width=400&text=Load+75",
                },
                {
                  name: "Muli",
                  price: "€3.999,00",
                  type: "Mini",
                  brand: "Muli",
                  image: "/images/muli-cargo-bike.png",
                },
                {
                  name: "Butchers & Bicycles MK1-E",
                  price: "€7.999,00",
                  type: "Kindertaxi",
                  brand: "Butchers & Bicycles",
                  image: "/placeholder.svg?height=300&width=400&text=Butchers+MK1-E",
                },
              ].map((bike, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg border bg-white shadow-sm">
                  <div className="overflow-hidden">
                    <Image
                      src={bike.image || "/placeholder.svg"}
                      width={400}
                      height={300}
                      alt={bike.name}
                      className="object-cover transition-transform duration-300 group-hover:scale-105 aspect-[4/3] w-full"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-xs font-medium text-muted-foreground mb-1">
                      {bike.brand} | {bike.type}
                    </div>
                    <h3 className="font-semibold tracking-tight">{bike.name}</h3>
                    <p className="text-sm text-accent font-bold">{bike.price}</p>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/80 flex flex-col items-center justify-center p-4 space-y-3 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <Button className="w-full bg-accent hover:bg-accent/90 text-black font-semibold">
                      Angebot anfragen
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-white text-white hover:bg-white/20 font-semibold"
                    >
                      Probefahrt vereinbaren
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white font-medium">
              <Link href="/bikes">
                Alle Lastenräder entdecken
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Lifestyle Gallery */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <div className="inline-flex items-center justify-center rounded-md bg-primary/10 p-1 px-2">
                <Bike className="mr-1 h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Lifestyle</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Lastenräder im Alltag</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light">
                Entdecke, wie Lastenräder deinen Alltag bereichern können
              </p>
            </div>
          </div>

          <LifestyleGallery />

          <div className="flex justify-center mt-8">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white font-medium">
              <Link href="/bikes">
                Lastenräder entdecken
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Marken Showcase */}
      <BrandShowcase />

      {/* Service Bereich */}
      <section id="service" className="w-full py-12 md:py-24 lg:py-32 bg-sky">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center justify-center rounded-md bg-primary/10 p-1 px-2">
                <Tool className="mr-1 h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Service</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Unser Service</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light">
                Professionelle Wartung und Reparatur für dein Fahrrad.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            {[
              { title: "Inspektion", desc: "Komplette Überprüfung und Einstellung deines Fahrrads" },
              { title: "Reparatur", desc: "Schnelle und professionelle Reparatur aller Fahrradtypen" },
              { title: "Upgrade", desc: "Individuelle Anpassungen und Upgrades für dein Bike" },
            ].map((service, i) => (
              <div
                key={i}
                className="flex flex-col items-center space-y-4 rounded-lg border p-6 text-center bg-white shadow-sm"
              >
                <div className="rounded-full bg-primary/10 p-3">
                  <Tool className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground font-light">{service.desc}</p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-white font-medium"
                >
                  <Link href="#buchen">Termin buchen</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Über uns Bereich */}
      <section id="ueber-uns" className="w-full py-12 md:py-24 lg:py-32 bg-accent-lighter">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center justify-center rounded-md bg-primary/10 p-1 px-2">
                <Users className="mr-1 h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Über uns</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Über uns</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light">
                Lerne unser Team kennen und erfahre mehr über unsere Leidenschaft für Fahrräder.
              </p>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] mt-8">
            <Image
              src="/placeholder.svg?height=550&width=800"
              width={800}
              height={550}
              alt="Unser Team"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full shadow-md"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter">Unsere Geschichte</h3>
                <p className="text-muted-foreground font-light">
                  Seit über 20 Jahren sind wir der Ansprechpartner für alle Fahrradbegeisterten in der Region. Was als
                  kleine Werkstatt begann, ist heute ein modernes Fachgeschäft mit einem erfahrenen Team aus
                  leidenschaftlichen Radfahrern.
                </p>
                <p className="text-muted-foreground font-light">
                  Unser Ziel ist es, jedem Kunden das perfekte Fahrrad und den besten Service zu bieten. Wir legen
                  großen Wert auf persönliche Beratung und maßgeschneiderte Lösungen.
                </p>
              </div>
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white font-medium"
              >
                <Link href="#kontakt">Kontaktiere uns</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Jetzt Buchen Bereich */}
      <section id="buchen" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center justify-center rounded-md bg-white/20 p-1 px-2">
                <Calendar className="mr-1 h-4 w-4 text-white" />
                <span className="text-sm font-medium text-white">Termin</span>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tighter sm:text-5xl">JETZT BUCHEN</h2>
              <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light">
                Vereinbare einen Termin für Service, Beratung oder Probefahrt.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-lg space-y-4 py-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-white/20 p-4">
                <h3 className="font-medium text-white">Service & Reparatur</h3>
                <p className="text-sm text-white/80 font-light">Montag - Freitag: 9:00 - 18:00 Uhr</p>
              </div>
              <div className="rounded-lg bg-white/20 p-4">
                <h3 className="font-medium text-white">Beratung & Verkauf</h3>
                <p className="text-sm text-white/80 font-light">Montag - Samstag: 10:00 - 19:00 Uhr</p>
              </div>
            </div>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="w-full bg-white text-primary hover:bg-white/90 font-semibold"
            >
              <Link href="#">Termin vereinbaren</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Kontakt Bereich */}
      <section id="kontakt" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center justify-center rounded-md bg-primary/10 p-1 px-2">
                <Phone className="mr-1 h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Kontakt</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Kontaktiere uns</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light">
                Wir sind für dich da. Kontaktiere uns für Fragen, Anregungen oder Terminvereinbarungen.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="grid gap-2">
                <h3 className="text-xl font-bold">Adresse</h3>
                <p className="text-muted-foreground font-light">
                  Fahrradstraße 123
                  <br />
                  12345 Bikestadt
                </p>
              </div>
              <div className="grid gap-2">
                <h3 className="text-xl font-bold">Kontakt</h3>
                <p className="text-muted-foreground font-light">
                  Telefon: +49 123 456789
                  <br />
                  Email: info@eckrad.de
                </p>
              </div>
              <div className="grid gap-2">
                <h3 className="text-xl font-bold">Öffnungszeiten</h3>
                <p className="text-muted-foreground font-light">
                  Mo-Fr: 9:00 - 18:00 Uhr
                  <br />
                  Sa: 10:00 - 16:00 Uhr
                </p>
              </div>
            </div>
            <div className="rounded-lg border overflow-hidden shadow-sm">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="Karte mit Standort"
                className="aspect-[3/2] object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <Link href="#bikes" className="hover:text-white hover:underline">
                  Bikes
                </Link>
                <Link href="#service" className="hover:text-white hover:underline">
                  Service
                </Link>
                <Link href="#ueber-uns" className="hover:text-white hover:underline">
                  Über uns
                </Link>
                <Link href="#kontakt" className="hover:text-white hover:underline">
                  Kontakt
                </Link>
                <Link href="#buchen" className="hover:text-white hover:underline">
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


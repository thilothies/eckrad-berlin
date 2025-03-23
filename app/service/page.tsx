import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Wrench, Settings, Clock, Calendar, CheckCircle, Bike, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Beispiel-Daten für Service-Pakete
const servicePakete = [
  {
    id: 1,
    name: "Basis-Check",
    preis: 39.99,
    dauer: "ca. 30 Minuten",
    beschreibung: "Schnelle Überprüfung der wichtigsten Komponenten für sicheres Fahren.",
    leistungen: [
      "Bremsen-Check und Einstellung",
      "Reifendruck und -zustand prüfen",
      "Schaltung kontrollieren",
      "Kette ölen und prüfen",
      "Beleuchtung testen",
    ],
  },
  {
    id: 2,
    name: "Standard-Service",
    preis: 69.99,
    dauer: "ca. 60 Minuten",
    beschreibung: "Umfassender Service für regelmäßige Wartung und optimale Leistung.",
    leistungen: [
      "Alle Leistungen des Basis-Checks",
      "Komplette Reinigung",
      "Laufräder zentrieren",
      "Lager kontrollieren",
      "Verschleißteile prüfen",
      "Schrauben nachziehen",
    ],
  },
  {
    id: 3,
    name: "Premium-Service",
    preis: 119.99,
    dauer: "ca. 120 Minuten",
    beschreibung: "Vollständige Überholung für maximale Lebensdauer und Performance.",
    leistungen: [
      "Alle Leistungen des Standard-Service",
      "Komplette Demontage und Reinigung",
      "Lager fetten und einstellen",
      "Schaltung komplett neu einstellen",
      "Bremsen entlüften (bei Hydraulikbremsen)",
      "Federelemente warten (bei Federgabeln)",
      "Probefahrt und Feinabstimmung",
    ],
  },
]

// Beispiel-Daten für Reparaturen
const reparaturen = [
  {
    name: "Reifenwechsel",
    preis: "ab 15,00 €",
    dauer: "ca. 15-30 Minuten",
  },
  {
    name: "Bremsbeläge wechseln",
    preis: "ab 25,00 €",
    dauer: "ca. 30 Minuten",
  },
  {
    name: "Schaltung einstellen",
    preis: "ab 20,00 €",
    dauer: "ca. 30 Minuten",
  },
  {
    name: "Kette wechseln",
    preis: "ab 25,00 €",
    dauer: "ca. 30 Minuten",
  },
  {
    name: "Laufrad zentrieren",
    preis: "ab 30,00 €",
    dauer: "ca. 45 Minuten",
  },
  {
    name: "Hydraulische Bremsen entlüften",
    preis: "ab 35,00 €",
    dauer: "ca. 45 Minuten",
  },
  {
    name: "Tretlager wechseln",
    preis: "ab 45,00 €",
    dauer: "ca. 60 Minuten",
  },
  {
    name: "Federgabel-Service",
    preis: "ab 80,00 €",
    dauer: "ca. 90 Minuten",
  },
]

// Beispiel-Daten für Upgrades
const upgrades = [
  {
    name: "Umrüstung auf Tubeless",
    preis: "ab 60,00 €",
    beschreibung: "Umrüstung auf Tubeless-Reifen für weniger Pannen und besseren Fahrkomfort.",
  },
  {
    name: "Upgrade auf hydraulische Scheibenbremsen",
    preis: "ab 180,00 €",
    beschreibung: "Verbesserte Bremsleistung bei allen Wetterbedingungen.",
  },
  {
    name: "Schaltungsupgrade",
    preis: "ab 150,00 €",
    beschreibung: "Modernisierung der Schaltung für präziseres und leichteres Schalten.",
  },
  {
    name: "Laufradsatz-Upgrade",
    preis: "ab 250,00 €",
    beschreibung: "Leichtere und stabilere Laufräder für bessere Performance.",
  },
  {
    name: "Beleuchtungsset Installation",
    preis: "ab 70,00 €",
    beschreibung: "Moderne LED-Beleuchtung für mehr Sicherheit.",
  },
  {
    name: "E-Bike Nachrüstung",
    preis: "ab 750,00 €",
    beschreibung: "Nachrüstung eines Elektromotors an Ihrem vorhandenen Fahrrad.",
  },
]

export default function ServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero-Bereich */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-sky">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 font-medium mb-4">
                <ChevronLeft className="mr-1 h-4 w-4" />
                Zurück zur Startseite
              </Link>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Professioneller Fahrrad-Service
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light">
                  Wir bieten umfassende Wartungs- und Reparaturleistungen für alle Fahrradtypen. Unsere erfahrenen
                  Techniker sorgen dafür, dass dein Fahrrad in Bestform bleibt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service-Pakete */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-10">
              <h2 className="text-3xl font-bold tracking-tighter">Unsere Service-Pakete</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground font-light">
                Wähle das passende Service-Paket für dein Fahrrad. Alle Pakete werden von unseren zertifizierten
                Technikern durchgeführt.
              </p>
            </div>

            <div className="mb-8 bg-gradient-to-r from-sky to-mint-light p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Clock className="mr-2 h-6 w-6 text-primary" />
                Unsere Preisgestaltung nach Zeit und Fahrradtyp
              </h3>
              <p className="text-muted-foreground mb-6">
                Wir arbeiten nach dem AW-System (Arbeitswert) der Handwerks-Innung des Zweiradverbandes. Ein AW
                entspricht dabei einem standardisierten Arbeitsschritt von ca. 5 Minuten. Die Preise variieren je nach
                Fahrradtyp:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-5 rounded-lg shadow-sm flex flex-col items-center text-center transform transition-transform hover:scale-105">
                  <div className="rounded-full bg-primary/10 p-3 mb-3">
                    <Bike className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Standard-Fahrrad</h4>
                  <p className="text-2xl font-bold mb-1">
                    7,90 € <span className="text-sm font-normal text-muted-foreground">pro AW</span>
                  </p>
                  <p className="text-lg font-medium">
                    95,00 € <span className="text-sm font-normal text-muted-foreground">pro Stunde</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">(12 AW pro Stunde)</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm flex flex-col items-center text-center transform transition-transform hover:scale-105">
                  <div className="rounded-full bg-primary/10 p-3 mb-3">
                    <svg
                      className="h-8 w-8 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M10 17a6 6 0 0 0 6-6h4l-2 3 2 3h-4a6 6 0 0 1-6 6v-6z" />
                      <path d="M10 5v12" />
                      <circle cx="7" cy="9" r="2" />
                      <circle cx="7" cy="13" r="2" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Lastenrad</h4>
                  <p className="text-2xl font-bold mb-1">
                    8,90 € <span className="text-sm font-normal text-muted-foreground">pro AW</span>
                  </p>
                  <p className="text-lg font-medium">
                    106,80 € <span className="text-sm font-normal text-muted-foreground">pro Stunde</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">(12 AW pro Stunde)</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm flex flex-col items-center text-center transform transition-transform hover:scale-105">
                  <div className="rounded-full bg-primary/10 p-3 mb-3">
                    <svg
                      className="h-8 w-8 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="6" cy="17" r="3" />
                      <circle cx="18" cy="17" r="3" />
                      <circle cx="12" cy="17" r="3" />
                      <path d="M12 4v13" />
                      <path d="M8 9h8" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Dreirad</h4>
                  <p className="text-2xl font-bold mb-1">
                    9,90 € <span className="text-sm font-normal text-muted-foreground">pro AW</span>
                  </p>
                  <p className="text-lg font-medium">
                    118,80 € <span className="text-sm font-normal text-muted-foreground">pro Stunde</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">(12 AW pro Stunde)</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-primary/20 flex items-start">
                <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-3" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Eine Standard-Inspektion umfasst bei uns etwa 12 AW (ca. 1 Stunde Arbeit) ohne E-Bike-Komponenten.
                    Bei E-Bikes oder komplexeren Reparaturen kann der Zeitaufwand entsprechend höher sein. Für E-Bikes
                    berechnen wir einen Aufschlag von 20% auf die Arbeitskosten.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>Basis-Check</CardTitle>
                  <CardDescription>
                    Schnelle Überprüfung der wichtigsten Komponenten für sicheres Fahren.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-primary">ab 39,50 €</span>
                      <div className="text-xs text-muted-foreground mt-1">Standard: 5 AW × 7,90 €</div>
                      <div className="text-xs text-muted-foreground">Lastenrad: 5 AW × 8,90 €</div>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-4 w-4" />
                      ca. 30 Minuten
                    </div>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Bremsen-Check und Einstellung</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Reifendruck und -zustand prüfen</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Schaltung kontrollieren</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Kette ölen und prüfen</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Beleuchtung testen</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                    <Link href="/#buchen">Termin buchen</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>Standard-Service</CardTitle>
                  <CardDescription>Umfassender Service für regelmäßige Wartung und optimale Leistung.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-primary">ab 71,10 €</span>
                      <div className="text-xs text-muted-foreground mt-1">Standard: 9 AW × 7,90 €</div>
                      <div className="text-xs text-muted-foreground">Lastenrad: 9 AW × 8,90 €</div>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-4 w-4" />
                      ca. 60 Minuten
                    </div>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Alle Leistungen des Basis-Checks</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Komplette Reinigung</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Laufräder zentrieren</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Lager kontrollieren</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Verschleißteile prüfen</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Schrauben nachziehen</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                    <Link href="/#buchen">Termin buchen</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>Premium-Service</CardTitle>
                  <CardDescription>Vollständige Überholung für maximale Lebensdauer und Performance.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-primary">ab 118,50 €</span>
                      <div className="text-xs text-muted-foreground mt-1">Standard: 15 AW × 7,90 €</div>
                      <div className="text-xs text-muted-foreground">Lastenrad: 15 AW × 8,90 €</div>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-4 w-4" />
                      ca. 120 Minuten
                    </div>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Alle Leistungen des Standard-Service</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Komplette Demontage und Reinigung</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Lager fetten und einstellen</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Schaltung komplett neu einstellen</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Bremsen entlüften (bei Hydraulikbremsen)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Federelemente warten (bei Federgabeln)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Probefahrt und Feinabstimmung</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                    <Link href="/#buchen">Termin buchen</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-8 p-4 bg-primary/10 rounded-lg text-center">
              <p className="text-sm text-muted-foreground">
                Alle Preise sind Richtwerte und können je nach tatsächlichem Aufwand und benötigten Ersatzteilen
                variieren. Bei E-Bikes wird ein Aufschlag von 20% auf die Arbeitskosten berechnet.
              </p>
            </div>
          </div>
        </section>

        {/* Reparaturen & Upgrades */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-mint-light">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-10">
              <div className="inline-flex items-center justify-center rounded-md bg-primary/10 p-1 px-2">
                <Wrench className="mr-1 h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Reparaturen & Upgrades</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">Reparaturen & Upgrades</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground font-light">
                Neben unseren Service-Paketen bieten wir auch individuelle Reparaturen und Upgrades für dein Fahrrad an.
              </p>
            </div>

            <Tabs defaultValue="reparaturen" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="reparaturen">Reparaturen</TabsTrigger>
                <TabsTrigger value="upgrades">Upgrades</TabsTrigger>
              </TabsList>
              <TabsContent value="reparaturen" className="mt-6">
                <div className="bg-white rounded-lg border shadow-sm p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {reparaturen.map((reparatur, index) => (
                      <div key={index} className="flex justify-between items-center p-3 border-b">
                        <div>
                          <h3 className="font-medium">{reparatur.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            <Clock className="inline-block mr-1 h-3 w-3" />
                            {reparatur.dauer}
                          </p>
                        </div>
                        <span className="font-semibold text-primary">{reparatur.preis}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-sm text-muted-foreground mb-4">
                      Die angegebenen Preise sind Richtwerte und können je nach Aufwand und benötigten Teilen variieren.
                      Für ein genaues Angebot kontaktiere uns bitte direkt.
                    </p>
                    <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                      <Link href="/#buchen">Termin vereinbaren</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="upgrades" className="mt-6">
                <div className="bg-white rounded-lg border shadow-sm p-6">
                  <div className="grid grid-cols-1 gap-4">
                    {upgrades.map((upgrade, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium">{upgrade.name}</h3>
                          <span className="font-semibold text-primary">{upgrade.preis}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{upgrade.beschreibung}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-sm text-muted-foreground mb-4">
                      Die angegebenen Preise sind Richtwerte ohne Materialkosten. Für ein individuelles Angebot beraten
                      wir dich gerne persönlich.
                    </p>
                    <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                      <Link href="/#buchen">Beratungstermin buchen</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Werkstatt-Impressionen */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-10">
              <div className="inline-flex items-center justify-center rounded-md bg-primary/10 p-1 px-2">
                <Settings className="mr-1 h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Werkstatt</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">Unsere Werkstatt</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground font-light">
                Ein Blick in unsere moderne Fahrradwerkstatt. Hier arbeiten unsere Experten mit Präzision und
                Leidenschaft.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div key={index} className="overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=400&width=600&text=Werkstatt+Bild+${index}`}
                    width={600}
                    height={400}
                    alt={`Werkstatt Impression ${index}`}
                    className="aspect-[3/2] object-cover w-full transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Terminbuchung */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-10">
              <div className="inline-flex items-center justify-center rounded-md bg-white/20 p-1 px-2">
                <Calendar className="mr-1 h-4 w-4 text-white" />
                <span className="text-sm font-medium text-white">Termin</span>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tighter">JETZT TERMIN BUCHEN</h2>
              <p className="mx-auto max-w-[700px] text-white/80 font-light">
                Vereinbare einen Termin für Service, Reparatur oder Beratung. Wir freuen uns auf deinen Besuch.
              </p>
            </div>

            <div className="max-w-lg mx-auto">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-6">
                <div className="rounded-lg bg-white/20 p-4">
                  <h3 className="font-medium text-white">Service & Reparatur</h3>
                  <p className="text-sm text-white/80 font-light">Montag - Freitag: 9:00 - 18:00 Uhr</p>
                </div>
                <div className="rounded-lg bg-white/20 p-4">
                  <h3 className="font-medium text-white">Express-Service</h3>
                  <p className="text-sm text-white/80 font-light">Kleine Reparaturen oft am selben Tag möglich</p>
                </div>
              </div>

              <Button
                asChild
                size="lg"
                variant="secondary"
                className="w-full bg-white text-primary hover:bg-white/90 font-semibold"
              >
                <Link href="/#buchen">Termin vereinbaren</Link>
              </Button>
            </div>
          </div>
        </section>
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
                <Link href="/bikes" className="hover:text-white hover:underline">
                  Bikes
                </Link>
                <Link href="/service" className="hover:text-white hover:underline">
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


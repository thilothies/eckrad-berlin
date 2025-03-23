import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Bike, CreditCard, PiggyBank, FileText, CheckCircle, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FoerderungPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero-Bereich */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-accent-lighter">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 font-medium mb-4">
                <ChevronLeft className="mr-1 h-4 w-4" />
                Zurück zur Startseite
              </Link>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Förderung & Finanzierung
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light">
                  Entdecke Fördermöglichkeiten für Lastenräder und attraktive Bike-Leasing-Angebote. Wir helfen dir,
                  dein Traumrad kostengünstig zu finanzieren.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs für Förderung und Leasing */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="bafa" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="bafa">BAFA Förderung</TabsTrigger>
                <TabsTrigger value="leasing">Bike-Leasing</TabsTrigger>
              </TabsList>

              {/* BAFA Förderung Tab */}
              <TabsContent value="bafa" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <PiggyBank className="mr-2 h-6 w-6 text-primary" />
                      BAFA Förderung für Lastenräder
                    </CardTitle>
                    <CardDescription>
                      Das Bundesamt für Wirtschaft und Ausfuhrkontrolle (BAFA) fördert den Kauf von Lastenfahrrädern.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Förderung für Privatpersonen</h3>
                        <p className="text-muted-foreground mb-4">
                          Privatpersonen können beim Kauf eines Lastenfahrrads eine Förderung von bis zu 25% des
                          Kaufpreises erhalten.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                            <span>Bis zu 1.000 € Förderung möglich</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                            <span>Für Lastenräder mit und ohne elektrischen Antrieb</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                            <span>Einfacher Antragsweg</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Förderung für Unternehmen</h3>
                        <p className="text-muted-foreground mb-4">
                          Auch Unternehmen, Vereine und andere Organisationen können von der BAFA-Förderung profitieren.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                            <span>Bis zu 2.500 € Förderung pro Lastenrad</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                            <span>Förderung mehrerer Fahrzeuge möglich</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                            <span>Steuerliche Vorteile</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-mint-light p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2">Aktuelle Förderbedingungen</h3>
                      <p className="text-muted-foreground mb-2">
                        Die Förderbedingungen können sich ändern. Aktuelle Informationen findest du auf der offiziellen
                        BAFA-Website.
                      </p>
                      <Button asChild variant="outline" className="mt-2">
                        <Link
                          href="https://www.bafa.de"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          Zur BAFA-Website
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Wir unterstützen dich</h3>
                      <p className="text-muted-foreground mb-4">
                        Unser Team hilft dir gerne bei der Beantragung der BAFA-Förderung. Wir beraten dich zu den
                        aktuellen Förderbedingungen und unterstützen dich beim Antragsverfahren.
                      </p>
                      <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                        <Link href="/bikes?category=Lastenrad">Lastenräder entdecken</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Bike-Leasing Tab */}
              <TabsContent value="leasing" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CreditCard className="mr-2 h-6 w-6 text-primary" />
                      Bike-Leasing Angebote
                    </CardTitle>
                    <CardDescription>
                      Mit Bike-Leasing kannst du hochwertige Fahrräder kostengünstig über deinen Arbeitgeber
                      finanzieren.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Vorteile für Arbeitnehmer</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                            <span>Steuerliche Vorteile durch Gehaltsumwandlung</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                            <span>Monatliche Raten statt hoher Einmalzahlung</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                            <span>Inklusive Versicherung und Wartung</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                            <span>Übernahme des Fahrrads nach Leasingzeit möglich</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Vorteile für Arbeitgeber</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                            <span>Attraktives Mitarbeiter-Benefit</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                            <span>Förderung der Mitarbeitergesundheit</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                            <span>Beitrag zum Umweltschutz</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                            <span>Einfache Administration</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Unsere Leasing-Partner</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                        {[1, 2, 3].map((index) => (
                          <div key={index} className="border rounded-lg p-4 flex items-center justify-center">
                            <Image
                              src={`/placeholder.svg?height=80&width=160&text=Leasing+Partner+${index}`}
                              width={160}
                              height={80}
                              alt={`Leasing Partner ${index}`}
                              className="max-h-16 object-contain"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Wie funktioniert Bike-Leasing?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground">
                            Beim Bike-Leasing wählt der Arbeitnehmer ein Fahrrad aus, das vom Arbeitgeber geleast wird.
                            Der Arbeitnehmer zahlt die monatlichen Raten über eine Gehaltsumwandlung, wodurch sich
                            steuerliche Vorteile ergeben. Nach Ablauf der Leasingzeit (meist 36 Monate) kann das Fahrrad
                            oft zu günstigen Konditionen übernommen werden.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Welche Fahrräder kann ich leasen?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground">
                            Du kannst praktisch jedes Fahrrad aus unserem Sortiment leasen - von City-Bikes über E-Bikes
                            bis hin zu Lastenrädern. Es gibt in der Regel keine Einschränkungen bezüglich des Modells
                            oder des Preises.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Was kostet mich das Bike-Leasing?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground">
                            Die monatlichen Kosten hängen vom Kaufpreis des Fahrrads und deinem persönlichen Steuersatz
                            ab. Durch die steuerlichen Vorteile zahlst du effektiv weniger als beim direkten Kauf. Wir
                            erstellen dir gerne eine individuelle Berechnung.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <div className="bg-mint-light p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2">Informationen für Arbeitgeber</h3>
                      <p className="text-muted-foreground mb-2">
                        Sie möchten Bike-Leasing in Ihrem Unternehmen anbieten? Wir beraten Sie gerne zu den
                        Möglichkeiten und unterstützen Sie bei der Einführung.
                      </p>
                      <Button asChild className="mt-2 bg-primary hover:bg-primary/90 text-white">
                        <Link href="#kontakt">Beratungstermin vereinbaren</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Beispiel-Lastenräder */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-mint-light">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-10">
              <div className="inline-flex items-center justify-center rounded-md bg-primary/10 p-1 px-2">
                <Bike className="mr-1 h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Lastenräder</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">Förderfähige Lastenräder</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground font-light">
                Entdecke unsere Auswahl an förderfähigen Lastenrädern. Alle diese Modelle erfüllen die Anforderungen für
                die BAFA-Förderung.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Cargo Cruiser", price: "3.499,99 €", type: "E-Lastenrad", foerderung: "bis zu 1.000 €" },
                { name: "Family Transporter", price: "2.899,99 €", type: "Lastenrad", foerderung: "bis zu 725 €" },
                { name: "Business Cargo", price: "4.199,99 €", type: "E-Lastenrad", foerderung: "bis zu 1.000 €" },
              ].map((bike, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={`/placeholder.svg?height=400&width=600&text=Lastenrad+${index + 1}`}
                      fill
                      alt={bike.name}
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded">
                      {bike.type}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{bike.name}</CardTitle>
                    <CardDescription>{bike.type}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xl font-bold text-primary">{bike.price}</span>
                      <div className="bg-accent/20 text-accent-foreground px-2 py-1 rounded text-sm font-medium">
                        BAFA-Förderung: {bike.foerderung}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Effektiver Preis nach Förderung:{" "}
                      <span className="font-semibold">
                        {(
                          Number.parseFloat(bike.price.replace(".", "").replace(",", ".").replace(" €", "")) -
                          Number.parseFloat(
                            bike.foerderung.replace("bis zu ", "").replace(" €", "").replace(".", "").replace(",", "."),
                          )
                        ).toLocaleString("de-DE", {
                          style: "currency",
                          currency: "EUR",
                        })}
                      </span>
                    </p>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      <Link href="/bikes">Details</Link>
                    </Button>
                    <Button asChild className="flex-1 bg-primary hover:bg-primary/90 text-white">
                      <Link href="#kontakt">Beratung</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                <Link href="/bikes?category=Lastenrad">Alle Lastenräder ansehen</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Dokumente und Formulare */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-10">
              <div className="inline-flex items-center justify-center rounded-md bg-primary/10 p-1 px-2">
                <FileText className="mr-1 h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Dokumente</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">Dokumente & Formulare</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground font-light">
                Hier findest du wichtige Dokumente und Formulare für Förderung und Leasing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <Card className="flex items-center p-4">
                <FileText className="h-8 w-8 text-primary mr-4" />
                <div className="flex-1">
                  <h3 className="font-medium">BAFA-Förderantrag</h3>
                  <p className="text-sm text-muted-foreground">Antragsformular für die BAFA-Förderung</p>
                </div>
                <Button variant="outline" size="sm">
                  Download
                </Button>
              </Card>
              <Card className="flex items-center p-4">
                <FileText className="h-8 w-8 text-primary mr-4" />
                <div className="flex-1">
                  <h3 className="font-medium">Leasing-Checkliste</h3>
                  <p className="text-sm text-muted-foreground">Checkliste für Arbeitnehmer</p>
                </div>
                <Button variant="outline" size="sm">
                  Download
                </Button>
              </Card>
              <Card className="flex items-center p-4">
                <FileText className="h-8 w-8 text-primary mr-4" />
                <div className="flex-1">
                  <h3 className="font-medium">Arbeitgeber-Infoblatt</h3>
                  <p className="text-sm text-muted-foreground">Informationen für Unternehmen</p>
                </div>
                <Button variant="outline" size="sm">
                  Download
                </Button>
              </Card>
              <Card className="flex items-center p-4">
                <FileText className="h-8 w-8 text-primary mr-4" />
                <div className="flex-1">
                  <h3 className="font-medium">Steuerliche Vorteile</h3>
                  <p className="text-sm text-muted-foreground">Übersicht der steuerlichen Aspekte</p>
                </div>
                <Button variant="outline" size="sm">
                  Download
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Beratung */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-10">
              <h2 className="text-3xl font-extrabold tracking-tighter">Persönliche Beratung</h2>
              <p className="mx-auto max-w-[700px] text-white/80 font-light">
                Unsere Experten beraten dich gerne zu allen Fragen rund um Förderung und Finanzierung. Vereinbare einen
                Termin für eine individuelle Beratung.
              </p>
            </div>

            <div className="max-w-lg mx-auto">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="w-full bg-white text-primary hover:bg-white/90 font-semibold"
              >
                <Link href="#kontakt">Beratungstermin vereinbaren</Link>
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
                <Link href="/foerderung" className="hover:text-white hover:underline">
                  Förderung
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


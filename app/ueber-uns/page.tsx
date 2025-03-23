import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Users, Award, Clock, MapPin, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { Card, CardContent } from "@/components/ui/card"

export default function UeberUnsPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Über uns</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light">
                  Lerne unser Team kennen und erfahre mehr über unsere Leidenschaft für Fahrräder.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Unsere Geschichte */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                src="/placeholder.svg?height=550&width=800"
                width={800}
                height={550}
                alt="Unser Geschäft"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full shadow-md"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center justify-center rounded-md bg-primary/10 p-1 px-2 mb-2">
                    <Clock className="mr-1 h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Unsere Geschichte</span>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter">Von der Werkstatt zum Fachgeschäft</h2>
                  <p className="text-muted-foreground font-light">
                    Seit über 20 Jahren sind wir der Ansprechpartner für alle Fahrradbegeisterten in der Region. Was als
                    kleine Werkstatt begann, ist heute ein modernes Fachgeschäft mit einem erfahrenen Team aus
                    leidenschaftlichen Radfahrern.
                  </p>
                  <p className="text-muted-foreground font-light">
                    Im Jahr 2003 eröffnete Michael Eck, ein begeisterter Radsportler und gelernter Zweiradmechaniker,
                    eine kleine Fahrradwerkstatt. Aus seiner Leidenschaft für Fahrräder und dem Wunsch, hochwertige
                    Räder und erstklassigen Service anzubieten, entstand eckRAD - ein Fachgeschäft, das heute weit über
                    die Stadtgrenzen hinaus bekannt ist.
                  </p>
                  <p className="text-muted-foreground font-light">
                    Unser Ziel ist es, jedem Kunden das perfekte Fahrrad und den besten Service zu bieten. Wir legen
                    großen Wert auf persönliche Beratung und maßgeschneiderte Lösungen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Unser Team */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-mint-light">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-10">
              <div className="inline-flex items-center justify-center rounded-md bg-primary/10 p-1 px-2">
                <Users className="mr-1 h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Unser Team</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">Das eckRAD Team</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground font-light">
                Unser erfahrenes Team aus leidenschaftlichen Radfahrern steht dir mit Rat und Tat zur Seite.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Michael Eck",
                  position: "Inhaber & Geschäftsführer",
                  bio: "Gründer von eckRAD und leidenschaftlicher Mountainbiker seit über 30 Jahren.",
                },
                {
                  name: "Lisa Schmidt",
                  position: "Verkaufsberaterin",
                  bio: "Expertin für E-Bikes und Tourenräder. Mehrfache Teilnehmerin an Langstrecken-Radrennen.",
                },
                {
                  name: "Thomas Weber",
                  position: "Werkstattleiter",
                  bio: "Gelernter Zweiradmechaniker mit über 15 Jahren Erfahrung in der Fahrradtechnik.",
                },
                {
                  name: "Sarah Müller",
                  position: "Service & Beratung",
                  bio: "Spezialisiert auf Lastenräder und Familienfahrräder. Begeisterte Alltagsradlerin.",
                },
                {
                  name: "Jan Becker",
                  position: "Mechaniker",
                  bio: "Experte für hochwertige Rennräder und technische Innovationen im Radsport.",
                },
                {
                  name: "Sophia Klein",
                  position: "Marketing & Events",
                  bio: "Organisiert Radtouren und Events. Aktiv im Bereich Mountainbiking und Gravel.",
                },
              ].map((member, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-square relative">
                    <Image
                      src={`/placeholder.svg?height=400&width=400&text=Team+Mitglied+${index + 1}`}
                      fill
                      alt={member.name}
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-primary text-sm font-medium mb-2">{member.position}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Unsere Werte */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-10">
              <div className="inline-flex items-center justify-center rounded-md bg-primary/10 p-1 px-2">
                <Heart className="mr-1 h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Unsere Werte</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">Was uns wichtig ist</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground font-light">
                Diese Werte prägen unsere tägliche Arbeit und den Umgang mit unseren Kunden.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="rounded-full bg-primary/10 p-3">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Qualität</h3>
                <p className="text-muted-foreground font-light">
                  Wir führen ausschließlich hochwertige Marken und Produkte, die unseren strengen Qualitätsansprüchen
                  genügen.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="rounded-full bg-primary/10 p-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Beratung</h3>
                <p className="text-muted-foreground font-light">
                  Wir nehmen uns Zeit für eine ausführliche und ehrliche Beratung, um das perfekte Rad für dich zu
                  finden.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="rounded-full bg-primary/10 p-3">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Service</h3>
                <p className="text-muted-foreground font-light">
                  Unser professioneller Service sorgt dafür, dass dein Fahrrad immer in Bestform ist.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="rounded-full bg-primary/10 p-3">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Leidenschaft</h3>
                <p className="text-muted-foreground font-light">
                  Wir sind selbst begeisterte Radfahrer und teilen unsere Leidenschaft gerne mit unseren Kunden.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="rounded-full bg-primary/10 p-3">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Regionalität</h3>
                <p className="text-muted-foreground font-light">
                  Als lokales Unternehmen sind wir fest in der Region verwurzelt und unterstützen lokale
                  Radsportvereine.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="rounded-full bg-primary/10 p-3">
                  <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" />
                    <path d="M12 8.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Nachhaltigkeit</h3>
                <p className="text-muted-foreground font-light">
                  Wir setzen uns für umweltfreundliche Mobilität ein und achten auf nachhaltige Geschäftspraktiken.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Unser Geschäft */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-sky">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-10">
              <div className="inline-flex items-center justify-center rounded-md bg-primary/10 p-1 px-2">
                <MapPin className="mr-1 h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Unser Geschäft</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">Besuche uns</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground font-light">
                Auf über 500m² bieten wir dir eine große Auswahl an Fahrrädern, Zubehör und eine moderne Werkstatt.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Geschäft+Außen"
                    width={400}
                    height={300}
                    alt="Außenansicht des Geschäfts"
                    className="rounded-lg shadow-md"
                  />
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Verkaufsraum"
                    width={400}
                    height={300}
                    alt="Verkaufsraum"
                    className="rounded-lg shadow-md"
                  />
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Werkstatt"
                    width={400}
                    height={300}
                    alt="Werkstatt"
                    className="rounded-lg shadow-md"
                  />
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Beratungsbereich"
                    width={400}
                    height={300}
                    alt="Beratungsbereich"
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Adresse</h3>
                  <p className="text-muted-foreground font-light">
                    Fahrradstraße 123
                    <br />
                    12345 Bikestadt
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Öffnungszeiten</h3>
                  <div className="grid grid-cols-2 gap-2 text-muted-foreground font-light">
                    <div>Montag - Freitag</div>
                    <div>9:00 - 18:00 Uhr</div>
                    <div>Samstag</div>
                    <div>10:00 - 16:00 Uhr</div>
                    <div>Sonntag</div>
                    <div>geschlossen</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Kontakt</h3>
                  <p className="text-muted-foreground font-light">
                    Telefon: +49 123 456789
                    <br />
                    Email: info@eckrad.de
                  </p>
                </div>

                <div className="pt-4">
                  <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                    <Link href="/#kontakt">Kontaktiere uns</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Engagement */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-10">
              <div className="inline-flex items-center justify-center rounded-md bg-primary/10 p-1 px-2">
                <Heart className="mr-1 h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Engagement</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">Unser Engagement</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground font-light">
                Wir engagieren uns für die lokale Fahrradkultur und unterstützen verschiedene Initiativen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-2">Lokale Radsportvereine</h3>
                <p className="text-muted-foreground font-light mb-4">
                  Wir unterstützen lokale Radsportvereine durch Sponsoring und technische Betreuung bei Veranstaltungen.
                </p>
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Radsportverein"
                  width={400}
                  height={200}
                  alt="Radsportverein"
                  className="rounded-lg"
                />
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-2">Fahrradfreundliche Stadt</h3>
                <p className="text-muted-foreground font-light mb-4">
                  Wir setzen uns für eine fahrradfreundliche Infrastruktur in unserer Stadt ein und sind Mitglied in
                  lokalen Initiativen.
                </p>
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Fahrradstadt"
                  width={400}
                  height={200}
                  alt="Fahrradfreundliche Stadt"
                  className="rounded-lg"
                />
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-2">Jugendförderung</h3>
                <p className="text-muted-foreground font-light mb-4">
                  Mit unserem Jugendprogramm fördern wir junge Radsporttalente und bieten Fahrradkurse für Kinder an.
                </p>
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Jugendförderung"
                  width={400}
                  height={200}
                  alt="Jugendförderung"
                  className="rounded-lg"
                />
              </Card>
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
                <Link href="/ueber-uns" className="hover:text-white hover:underline">
                  Über uns
                </Link>
                <Link href="/#kontakt" className="hover:text-white hover:underline">
                  Kontakt
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


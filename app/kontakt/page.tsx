import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Phone, Mail, MapPin, MessageSquare } from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { ContactForm } from "@/components/contact-form"
import { ChatBot } from "@/components/chat-bot"

export default function KontaktPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px] overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=1200&text=Kontakt"
            alt="Kontakt"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/40 flex items-center">
            <div className="container px-4 md:px-6">
              <div className="max-w-[700px] space-y-4 text-white">
                <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  Kontaktiere uns
                </h1>
                <p className="text-base md:text-xl text-white/90 font-light">
                  Wir sind für dich da. Kontaktiere uns für Fragen, Anregungen oder Terminvereinbarungen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Kontaktinformationen und Formular */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 font-medium mb-8">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Zurück zur Startseite
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Kontaktinformationen */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Kontaktinformationen</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-primary mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold">Telefon</h3>
                        <p className="text-muted-foreground">+49 123 456789</p>
                        <p className="text-sm text-muted-foreground">Mo-Fr: 9:00 - 18:00 Uhr</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-primary mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold">E-Mail</h3>
                        <p className="text-muted-foreground">info@eckrad.de</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-primary mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold">Adresse</h3>
                        <p className="text-muted-foreground">
                          Fahrradstraße 123
                          <br />
                          12345 Bikestadt
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-6">Öffnungszeiten</h2>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Montag - Freitag</span>
                      <span className="text-muted-foreground">9:00 - 18:00 Uhr</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Samstag</span>
                      <span className="text-muted-foreground">10:00 - 16:00 Uhr</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sonntag</span>
                      <span className="text-muted-foreground">geschlossen</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg overflow-hidden border shadow-sm">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=Karte"
                    width={500}
                    height={300}
                    alt="Karte mit Standort"
                    className="w-full h-[300px] object-cover"
                  />
                </div>
              </div>

              {/* Kontaktformular */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Kontaktformular</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Chat Bot Section */}
        <section className="w-full py-12 md:py-24 bg-mint-light">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-10">
              <div className="inline-flex items-center justify-center rounded-md bg-primary/10 p-1 px-2">
                <MessageSquare className="mr-1 h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Chat</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">Hast du Fragen?</h2>
              <p className="max-w-[700px] text-muted-foreground font-light">
                Unser Chat-Assistent hilft dir gerne bei Fragen zu unseren Produkten, Services oder Terminen.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <ChatBot />
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
                <Link href="/kontakt" className="hover:text-white hover:underline">
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


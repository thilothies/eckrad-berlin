"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle } from "lucide-react"

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simuliere API-Aufruf
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Formular zurücksetzen und Erfolgsmeldung anzeigen
    setFormState({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
    setIsSubmitted(true)

    // Erfolgsmeldung nach 5 Sekunden ausblenden
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <div className="bg-white rounded-lg border p-6 shadow-sm">
      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <div className="rounded-full bg-green-100 p-3 mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold mb-2">Nachricht gesendet!</h3>
          <p className="text-muted-foreground">
            Vielen Dank für deine Nachricht. Wir werden uns so schnell wie möglich bei dir melden.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Dein Name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-Mail *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="deine@email.de"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="phone">Telefon</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formState.phone}
                onChange={handleChange}
                placeholder="Deine Telefonnummer"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Betreff *</Label>
              <Select value={formState.subject} onValueChange={handleSelectChange} required>
                <SelectTrigger id="subject">
                  <SelectValue placeholder="Wähle einen Betreff" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="allgemein">Allgemeine Anfrage</SelectItem>
                  <SelectItem value="beratung">Beratungstermin</SelectItem>
                  <SelectItem value="probefahrt">Probefahrt</SelectItem>
                  <SelectItem value="service">Service & Reparatur</SelectItem>
                  <SelectItem value="bestellung">Bestellung & Lieferung</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Nachricht *</Label>
            <Textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder="Deine Nachricht an uns"
              rows={5}
              required
            />
          </div>

          <div className="text-sm text-muted-foreground">* Pflichtfelder</div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white" disabled={isSubmitting}>
            {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
          </Button>
        </form>
      )}
    </div>
  )
}


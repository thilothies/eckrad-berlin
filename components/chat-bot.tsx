"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar } from "@/components/ui/avatar"
import { SendHorizontal, User, Bot } from "lucide-react"

// Vordefinierte Antworten für häufige Fragen
const predefinedResponses = [
  {
    keywords: ["öffnungszeiten", "geöffnet", "offen", "wann"],
    response:
      "Unsere Öffnungszeiten sind:\n- Montag bis Freitag: 9:00 - 18:00 Uhr\n- Samstag: 10:00 - 16:00 Uhr\n- Sonntag: geschlossen",
  },
  {
    keywords: ["probefahrt", "testen", "ausprobieren"],
    response:
      "Probefahrten sind jederzeit während unserer Öffnungszeiten möglich. Für eine ausführliche Beratung empfehlen wir dir, vorab einen Termin zu vereinbaren. Du kannst dazu unser Kontaktformular nutzen oder uns anrufen.",
  },
  {
    keywords: ["lastenrad", "lastenräder", "cargo", "transport"],
    response:
      "Wir führen Lastenräder verschiedener Premium-Marken wie Urban Arrow, Riese & Müller, Muli und mehr. Unsere Lastenräder sind in verschiedenen Kategorien erhältlich: Mini, Kindertaxi, Hundetaxi und B2B-Lösungen.",
  },
  {
    keywords: ["förderung", "zuschuss", "bafa", "finanzierung"],
    response:
      "Für Lastenräder gibt es attraktive Förderungen! Die BAFA bietet Zuschüsse von bis zu 1.000€ für Privatpersonen und bis zu 2.500€ für Unternehmen. Außerdem bieten wir Bike-Leasing an. Alle Details findest du auf unserer Förderungsseite.",
  },
  {
    keywords: ["reparatur", "service", "wartung", "inspektion"],
    response:
      "Unser Service-Team kümmert sich um alle Reparaturen und Wartungsarbeiten an deinem Fahrrad. Wir bieten verschiedene Service-Pakete an, von der einfachen Inspektion bis zum Premium-Service. Schau gerne auf unserer Service-Seite vorbei.",
  },
  {
    keywords: ["preis", "kosten", "preise"],
    response:
      "Die Preise für unsere Fahrräder variieren je nach Modell und Ausstattung. Unsere Lastenräder beginnen bei etwa 3.000€. Für ein konkretes Angebot schau dir gerne unseren Online-Shop an oder kontaktiere uns direkt.",
  },
  {
    keywords: ["lieferzeit", "lieferung", "verfügbarkeit"],
    response:
      "Die Lieferzeiten können je nach Modell und Verfügbarkeit variieren. Viele Modelle haben wir direkt vor Ort. Bei Bestellungen rechne bitte mit 2-4 Wochen Lieferzeit. Für genaue Informationen zu einem bestimmten Modell kontaktiere uns bitte direkt.",
  },
]

// Fallback-Antwort, wenn keine passende Antwort gefunden wird
const fallbackResponse =
  "Danke für deine Nachricht! Für diese spezifische Frage würden wir dich gerne persönlich beraten. Du kannst uns unter +49 123 456789 anrufen oder das Kontaktformular nutzen. Unser Team hilft dir gerne weiter!"

interface Message {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hallo! Ich bin der eckRAD-Assistent. Wie kann ich dir heute helfen? Du kannst mich zu unseren Lastenrädern, Öffnungszeiten, Probefahrten, Förderungen oder Service-Angeboten befragen.",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Automatisches Scrollen zum neuesten Nachricht
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()

    if (!inputValue.trim()) return

    // Benutzer-Nachricht hinzufügen
    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Bot-Antwort generieren
    setIsTyping(true)
    setTimeout(() => {
      const botResponse = generateResponse(inputValue)
      const botMessage: Message = {
        id: Date.now() + 1,
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1000) // Simuliere Verzögerung für natürlicheres Gefühl
  }

  // Generiere eine Antwort basierend auf der Benutzereingabe
  const generateResponse = (input: string): string => {
    const lowerInput = input.toLowerCase()

    // Suche nach passenden vordefinierten Antworten
    for (const item of predefinedResponses) {
      if (item.keywords.some((keyword) => lowerInput.includes(keyword))) {
        return item.response
      }
    }

    // Fallback-Antwort, wenn keine Übereinstimmung gefunden wurde
    return fallbackResponse
  }

  return (
    <div className="border rounded-lg shadow-sm bg-white overflow-hidden">
      <div className="bg-primary p-4">
        <h3 className="text-white font-semibold">eckRAD Chat-Assistent</h3>
      </div>

      {/* Chat-Verlauf */}
      <div className="h-[400px] overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`flex items-start max-w-[80%] ${message.sender === "user" ? "flex-row-reverse" : ""}`}>
              <div className={`flex-shrink-0 ${message.sender === "user" ? "ml-2" : "mr-2"}`}>
                <Avatar className={message.sender === "user" ? "bg-accent" : "bg-primary"}>
                  {message.sender === "user" ? (
                    <User className="h-5 w-5 text-accent-foreground" />
                  ) : (
                    <Bot className="h-5 w-5 text-white" />
                  )}
                </Avatar>
              </div>
              <div
                className={`p-3 rounded-lg ${
                  message.sender === "user" ? "bg-accent text-accent-foreground" : "bg-muted"
                }`}
              >
                <div className="whitespace-pre-line">{message.text}</div>
                <div className="text-xs mt-1 opacity-70">
                  {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </div>
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="flex items-start max-w-[80%]">
              <div className="flex-shrink-0 mr-2">
                <Avatar className="bg-primary">
                  <Bot className="h-5 w-5 text-white" />
                </Avatar>
              </div>
              <div className="p-3 rounded-lg bg-muted">
                <div className="flex space-x-1">
                  <div
                    className="w-2 h-2 rounded-full bg-primary animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 rounded-full bg-primary animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 rounded-full bg-primary animate-bounce"
                    style={{ animationDelay: "600ms" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Eingabeformular */}
      <form onSubmit={handleSendMessage} className="border-t p-4 flex gap-2">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Schreibe deine Nachricht..."
          className="flex-1"
        />
        <Button type="submit" size="icon" className="bg-primary hover:bg-primary/90">
          <SendHorizontal className="h-5 w-5" />
        </Button>
      </form>
    </div>
  )
}


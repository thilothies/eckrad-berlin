// Reale Lastenrad-Modelle verschiedener Marken
export const bikeData = [
  // Riese & Müller - Cargo Bikes
  {
    id: 1,
    name: "Packster 70 touring",
    price: 7099.0,
    brand: "Riese & Müller",
    category: "Cargo",
    type: "Kindertaxi",
    popularity: 5,
    image: "/placeholder.svg?height=600&width=800&text=Packster+70",
    description:
      "Das Packster 70 touring bietet viel Platz für Kinder und Gepäck. Mit seinem tiefen Einstieg und der stabilen Ladefläche ist es ideal für Familien.",
    features: [
      "Bosch Performance Line CX Motor",
      "Enviolo Schaltung",
      "Hydraulische Scheibenbremsen",
      "Bis zu 2 Kinder transportierbar",
    ],
  },
  {
    id: 2,
    name: "Load 75 vario",
    price: 8999.0,
    brand: "Riese & Müller",
    category: "Cargo",
    type: "Kindertaxi",
    popularity: 5,
    image: "/placeholder.svg?height=600&width=800&text=Load+75",
    description:
      "Das Load 75 ist das Premium-Lastenrad für anspruchsvolle Familien. Mit Vollfederung und großer Transportbox bietet es maximalen Komfort.",
    features: ["Bosch Cargo Line Motor", "Vollfederung", "Rohloff Speedhub", "Bis zu 3 Kinder transportierbar"],
  },
  {
    id: 3,
    name: "Multitinker touring",
    price: 5499.0,
    brand: "Riese & Müller",
    category: "Cargo",
    type: "Mini",
    popularity: 4,
    image: "/placeholder.svg?height=600&width=800&text=Multitinker",
    description:
      "Das kompakte Multitinker vereint Wendigkeit mit Transportkapazität. Ideal für den urbanen Alltag und kleinere Einkäufe.",
    features: [
      "Bosch Performance Line Motor",
      "Gepäckträger vorne und hinten",
      "Hydraulische Scheibenbremsen",
      "Kompakte Bauweise",
    ],
  },
  {
    id: 4,
    name: "Transporter 85 vario",
    price: 7799.0,
    brand: "Riese & Müller",
    category: "Cargo",
    type: "B2B",
    popularity: 4,
    image: "/placeholder.svg?height=600&width=800&text=Transporter+85",
    description:
      "Der Transporter 85 wurde speziell für gewerbliche Nutzung entwickelt. Mit seiner großen Ladefläche eignet er sich perfekt für Lieferdienste.",
    features: ["Bosch Cargo Line Motor", "Bis zu 200 kg Zuladung", "Enviolo Schaltung", "Große Transportfläche"],
  },

  // Urban Arrow
  {
    id: 5,
    name: "Family",
    price: 5499.0,
    brand: "Urban Arrow",
    category: "Cargo",
    type: "Kindertaxi",
    popularity: 5,
    image: "/placeholder.svg?height=600&width=800&text=Urban+Arrow+Family",
    description:
      "Das Urban Arrow Family ist das ideale Familienfahrrad mit einer geräumigen, sicheren Box für Kinder und Einkäufe.",
    features: ["Bosch Performance Line Motor", "EPP-Schaum-Box", "Hydraulische Scheibenbremsen", "Regendach optional"],
  },
  {
    id: 6,
    name: "Shorty",
    price: 4999.0,
    brand: "Urban Arrow",
    category: "Cargo",
    type: "Mini",
    popularity: 4,
    image: "/placeholder.svg?height=600&width=800&text=Urban+Arrow+Shorty",
    description:
      "Das kompakte Urban Arrow Shorty ist perfekt für den Stadtverkehr und bietet dennoch ausreichend Stauraum für Einkäufe.",
    features: ["Bosch Active Line Plus Motor", "Kompakte EPP-Box", "Shimano Nexus 8-Gang", "Wendiges Handling"],
  },
  {
    id: 7,
    name: "Cargo L",
    price: 6999.0,
    brand: "Urban Arrow",
    category: "Cargo",
    type: "B2B",
    popularity: 4,
    image: "/placeholder.svg?height=600&width=800&text=Urban+Arrow+Cargo",
    description:
      "Das Urban Arrow Cargo L wurde für professionelle Logistik entwickelt. Mit seiner großen Aluminium-Box ist es ideal für Lieferdienste.",
    features: ["Bosch Cargo Line Motor", "Große Aluminium-Box", "Bis zu 275 kg Gesamtgewicht", "Robuste Bauweise"],
  },

  // Benno
  {
    id: 8,
    name: "Boost E",
    price: 4799.0,
    brand: "Benno",
    category: "Cargo",
    type: "Mini",
    popularity: 4,
    image: "/placeholder.svg?height=600&width=800&text=Benno+Boost+E",
    description:
      "Das Benno Boost E ist ein vielseitiges Lastenrad mit verlängertem Heck für Gepäck oder Kindersitze. Kompakt und dennoch leistungsstark.",
    features: [
      "Bosch Performance Line Motor",
      "Verlängerter Gepäckträger",
      "Hydraulische Scheibenbremsen",
      "Vielseitige Transportoptionen",
    ],
  },
  {
    id: 9,
    name: "RemiDemi",
    price: 4299.0,
    brand: "Benno",
    category: "Cargo",
    type: "Mini",
    popularity: 3,
    image: "/placeholder.svg?height=600&width=800&text=Benno+RemiDemi",
    description:
      "Das Benno RemiDemi kombiniert Stil mit Funktionalität. Ein kompaktes Lastenrad für den täglichen Gebrauch in der Stadt.",
    features: [
      "Bosch Active Line Plus Motor",
      "Integrierter Frontgepäckträger",
      "Shimano 9-Gang Schaltung",
      "Stylisches Design",
    ],
  },

  // Yoonit
  {
    id: 10,
    name: "Yoonit 2.0",
    price: 5299.0,
    brand: "Yoonit",
    category: "Cargo",
    type: "Mini",
    popularity: 4,
    image: "/placeholder.svg?height=600&width=800&text=Yoonit+2.0",
    description:
      "Das Yoonit 2.0 ist ein modulares Lastenrad, das sich an deine Bedürfnisse anpasst. Kompakt, wendig und vielseitig einsetzbar.",
    features: [
      "Bosch Performance Line Motor",
      "Modulares Trägersystem",
      "Hydraulische Scheibenbremsen",
      "Made in Switzerland",
    ],
  },
  {
    id: 11,
    name: "Yoonit Trailer",
    price: 1299.0,
    brand: "Yoonit",
    category: "Accessory",
    type: "Mini",
    popularity: 3,
    image: "/placeholder.svg?height=600&width=800&text=Yoonit+Trailer",
    description:
      "Der Yoonit Trailer erweitert dein Yoonit Lastenrad um zusätzlichen Transportraum. Perfekt für größere Einkäufe oder Ausflüge.",
    features: ["Kompatibel mit Yoonit 2.0", "Leichtgewichtig", "Einfache Montage", "Erhöht Transportkapazität"],
  },

  // Muli
  {
    id: 12,
    name: "Muli",
    price: 3999.0,
    brand: "Muli",
    category: "Cargo",
    type: "Mini",
    popularity: 4,
    image: "/placeholder.svg?height=600&width=800&text=Muli",
    description:
      "Das Muli ist ein kompaktes Lastenrad mit innovativem Klappmechanismus. Trotz seiner geringen Größe bietet es viel Stauraum.",
    features: ["Shimano Steps E6100 Motor", "Faltbare Transportbox", "Shimano Nexus 8-Gang", "Parkhaus-tauglich"],
  },
  {
    id: 13,
    name: "Muli Musketier",
    price: 4499.0,
    brand: "Muli",
    category: "Cargo",
    type: "Kindertaxi",
    popularity: 4,
    image: "/placeholder.svg?height=600&width=800&text=Muli+Musketier",
    description:
      "Das Muli Musketier ist die Familienvariante des beliebten Muli. Mit zusätzlichen Sicherheitsfeatures für den Kindertransport.",
    features: [
      "Shimano Steps E6100 Motor",
      "Kindersitze für bis zu 2 Kinder",
      "Regenverdeck optional",
      "Kompakte Bauweise",
    ],
  },

  // Butchers & Bicycles
  {
    id: 14,
    name: "MK1-E",
    price: 7999.0,
    brand: "Butchers & Bicycles",
    category: "Cargo",
    type: "Kindertaxi",
    popularity: 5,
    image: "/placeholder.svg?height=600&width=800&text=Butchers+MK1-E",
    description:
      "Das MK1-E von Butchers & Bicycles ist ein Dreirad-Lastenrad mit Neigetechnik für dynamisches Fahrgefühl trotz drei Rädern.",
    features: [
      "Bosch Performance Line CX Motor",
      "Patentierte Neigetechnik",
      "NuVinci Schaltung",
      "Geräumige Transportbox",
    ],
  },

  // Chike
  {
    id: 15,
    name: "e-Cargo",
    price: 6499.0,
    brand: "Chike",
    category: "Cargo",
    type: "Kindertaxi",
    popularity: 4,
    image: "/placeholder.svg?height=600&width=800&text=Chike+e-Cargo",
    description:
      "Das Chike e-Cargo ist ein wendiges Dreirad-Lastenrad mit niedriger Einstiegshöhe und großer Transportbox für Kinder oder Einkäufe.",
    features: [
      "Bosch Performance Line Motor",
      "Shimano 10-Gang Schaltung",
      "Hydraulische Scheibenbremsen",
      "Bis zu 100 kg Zuladung in der Box",
    ],
  },
  {
    id: 16,
    name: "e-Kids",
    price: 5999.0,
    brand: "Chike",
    category: "Cargo",
    type: "Kindertaxi",
    popularity: 4,
    image: "/placeholder.svg?height=600&width=800&text=Chike+e-Kids",
    description:
      "Das Chike e-Kids wurde speziell für den Kindertransport entwickelt. Mit bequemen Sitzen und Sicherheitsgurten für bis zu drei Kinder.",
    features: ["Bosch Active Line Plus Motor", "Spezielle Kindersitze", "5-Punkt-Gurte", "Regenverdeck inklusive"],
  },

  // SBLOCS
  {
    id: 17,
    name: "Primo",
    price: 4799.0,
    brand: "SBLOCS",
    category: "Cargo",
    type: "Mini",
    popularity: 3,
    image: "/placeholder.svg?height=600&width=800&text=SBLOCS+Primo",
    description:
      "Das SBLOCS Primo ist ein kompaktes Lastenrad mit innovativem Frontlader-Konzept. Ideal für den urbanen Alltag und kleine Transporte.",
    features: ["Shimano Steps E6100 Motor", "Modulares Trägersystem", "Gates Riemenantrieb", "Made in Germany"],
  },
  {
    id: 18,
    name: "Doggo",
    price: 5299.0,
    brand: "SBLOCS",
    category: "Cargo",
    type: "Hundetaxi",
    popularity: 4,
    image: "/placeholder.svg?height=600&width=800&text=SBLOCS+Doggo",
    description:
      "Das SBLOCS Doggo wurde speziell für den Hundetransport entwickelt. Mit rutschfestem Boden und sicherer Einstiegsmöglichkeit.",
    features: ["Shimano Steps E6100 Motor", "Spezielle Hundebox", "Einfacher Ein- und Ausstieg", "Sicherheitsleine"],
  },

  // Livelo
  {
    id: 19,
    name: "Family",
    price: 5999.0,
    brand: "Livelo",
    category: "Cargo",
    type: "Kindertaxi",
    popularity: 4,
    image: "/placeholder.svg?height=600&width=800&text=Livelo+Family",
    description:
      "Das Livelo Family ist ein robustes Lastenrad für Familien. Mit seiner geräumigen Box bietet es Platz für Kinder und Einkäufe.",
    features: [
      "Bosch Performance Line Motor",
      "Geräumige Transportbox",
      "Hydraulische Scheibenbremsen",
      "Regenverdeck optional",
    ],
  },
  {
    id: 20,
    name: "Business",
    price: 6499.0,
    brand: "Livelo",
    category: "Cargo",
    type: "B2B",
    popularity: 4,
    image: "/placeholder.svg?height=600&width=800&text=Livelo+Business",
    description:
      "Das Livelo Business wurde für gewerbliche Nutzung konzipiert. Mit anpassbarer Ladefläche und robuster Bauweise für den täglichen Einsatz.",
    features: [
      "Bosch Cargo Line Motor",
      "Anpassbare Ladefläche",
      "Bis zu 180 kg Zuladung",
      "Optionale Werbeanbringung",
    ],
  },
  {
    id: 21,
    name: "Dog",
    price: 5799.0,
    brand: "Livelo",
    category: "Cargo",
    type: "Hundetaxi",
    popularity: 4,
    image: "/placeholder.svg?height=600&width=800&text=Livelo+Dog",
    description:
      "Das Livelo Dog ist speziell für Hundebesitzer konzipiert. Mit sicherer, belüfteter Box und einfachem Einstieg für den Vierbeiner.",
    features: [
      "Bosch Active Line Plus Motor",
      "Spezielle Hundebox mit Belüftung",
      "Rutschfester Boden",
      "Einfacher Einstieg",
    ],
  },
]

// Kategorien für die Filterung
export const bikeCategories = [
  { id: "all", name: "Alle Räder" },
  { id: "Mini", name: "Mini" },
  { id: "Kindertaxi", name: "Kindertaxi" },
  { id: "Hundetaxi", name: "Hundetaxi" },
  { id: "B2B", name: "B2B" },
]

// Marken für die Filterung
export const bikeBrands = [
  "Riese & Müller",
  "Urban Arrow",
  "Benno",
  "Yoonit",
  "Muli",
  "Butchers & Bicycles",
  "Chike",
  "SBLOCS",
  "Livelo",
]

// Preisbereiche für die Filterung
export const priceRanges = [
  { label: "Alle Preise", min: 0, max: Number.POSITIVE_INFINITY },
  { label: "Unter €5.000", min: 0, max: 5000 },
  { label: "€5.000 - €6.000", min: 5000, max: 6000 },
  { label: "€6.000 - €7.000", min: 6000, max: 7000 },
  { label: "Über €7.000", min: 7000, max: Number.POSITIVE_INFINITY },
]


import Image from "next/image"
import Link from "next/link"

const brands = [
  {
    name: "Urban Arrow",
    logo: "/images/logos/urban-arrow-logo.png",
    link: "/bikes?brand=Urban%20Arrow",
    width: 200,
    height: 60,
  },
  {
    name: "Riese & Müller",
    logo: "/images/logos/riese-mueller-logo.png",
    link: "/bikes?brand=Riese%20%26%20M%C3%BCller",
    width: 200,
    height: 60,
  },
  {
    name: "Benno",
    logo: "/images/logos/benno-logo.png",
    link: "/bikes?brand=Benno",
    width: 160,
    height: 60,
  },
  {
    name: "Muli",
    logo: "/images/logos/muli-logo.png",
    link: "/bikes?brand=Muli",
    width: 140,
    height: 60,
  },
  {
    name: "Yoonit",
    logo: "/images/logos/yoonit-logo.png",
    link: "/bikes?brand=Yoonit",
    width: 170,
    height: 60,
  },
  {
    name: "Butchers & Bicycles",
    logo: "/images/logos/butchers-logo.png",
    link: "/bikes?brand=Butchers%20%26%20Bicycles",
    width: 200,
    height: 80,
  },
  {
    name: "Chike",
    logo: "/images/logos/chike-logo.png",
    link: "/bikes?brand=Chike",
    width: 170,
    height: 70,
  },
]

export function BrandShowcase() {
  // Dupliziere die Marken für einen nahtlosen Übergang
  const allBrands = [...brands, ...brands]

  return (
    <div className="py-8 bg-white overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-8">
          <h2 className="text-2xl font-bold">Unsere Premium-Marken</h2>
          <p className="max-w-[700px] text-muted-foreground font-light">
            Wir führen ausschließlich hochwertige Marken mit erstklassiger Qualität
          </p>
        </div>

        <div className="relative w-full h-24 md:h-28 overflow-hidden">
          <div className="absolute whitespace-nowrap animate-marquee">
            {allBrands.map((brand, index) => (
              <Link
                key={`${brand.name}-${index}`}
                href={brand.link}
                className="inline-block mx-8 hover:opacity-80 transition-opacity"
              >
                <div className="flex items-center justify-center h-24 md:h-28">
                  <Image
                    src={brand.logo || "/placeholder.svg"}
                    alt={brand.name}
                    width={brand.width}
                    height={brand.height}
                    className="object-contain max-h-full"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


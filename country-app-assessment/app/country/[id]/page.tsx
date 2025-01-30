import Image from "next/image"
import Link from "next/link"
import { GetStaticPropsContext } from "next";
import { ArrowLeft } from "lucide-react"

type Country = {
  cca3: string
  name: { official: string }
  flags: { svg: string }
  capital?: string[]
  region: string
  subregion?: string
  population: number
  area: number
  languages?: Record<string, string>
}

async function getCountry(id: string): Promise<Country> {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${id}`)
  if (!res.ok) throw new Error("Failed to fetch country")
  const data = await res.json()
  return data[0]
}

export async function generateStaticParams() {
  const res = await fetch("https://restcountries.com/v3.1/all")
  if (!res.ok) throw new Error("Failed to fetch countries")

  const countries: Country[] = await res.json()

  return countries.map((country) => ({
    id: country.cca3,
  }))
}

export default async function CountryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; 

  if (!params?.id) {
    throw new Error("Country ID is missing");
  }
  const country = await getCountry(params.id);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 px-4 py-8">
      <div className="mx-auto max-w-2xl">
        <Link href="/" className="mb-8 inline-flex items-center text-gray-600 hover:text-gray-800">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Search
        </Link>

        <div className="overflow-hidden rounded-lg bg-white/60 shadow-lg backdrop-blur-md">
          <div className="aspect-video relative">
            <Image
              src={country.flags.svg || "/placeholder.svg"}
              alt={`Flag of ${country.name.official}`}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">{country.name.official}</h1>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h2 className="font-semibold text-gray-600">Capital</h2>
                <p className="text-gray-800">{country.capital?.[0] || "N/A"}</p>
              </div>

              <div>
                <h2 className="font-semibold text-gray-600">Region</h2>
                <p className="text-gray-800">{country.region}</p>
              </div>

              <div>
                <h2 className="font-semibold text-gray-600">Subregion</h2>
                <p className="text-gray-800">{country.subregion || "N/A"}</p>
              </div>

              <div>
                <h2 className="font-semibold text-gray-600">Population</h2>
                <p className="text-gray-800">{country.population.toLocaleString()}</p>
              </div>

              <div>
                <h2 className="font-semibold text-gray-600">Area</h2>
                <p className="text-gray-800">{country.area.toLocaleString()} km²</p>
              </div>

              <div>
                <h2 className="font-semibold text-gray-600">Languages</h2>
                <p className="text-gray-800">{Object.values(country.languages || {}).join(", ") || "N/A"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

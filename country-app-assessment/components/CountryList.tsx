"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"

async function getCountries(): Promise<Country[]> {
  const res = await fetch("https://restcountries.com/v3.1/all")
  if (!res.ok) throw new Error("Failed to fetch countries")
  return res.json()
}

type Country = {
  cca3: string;
  name: { common: string };
  population: number;
  flags: { svg: string };
};

export default function CountryList() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

  const searchParams = useSearchParams()

  useEffect(() => {
    getCountries().then(setCountries)
  }, [])

  useEffect(() => {
    const search = searchParams.get("search")
    const sort = searchParams.get("sort")

    let result: Country[] = [...countries]

    if (search) {
      result = result.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (sort) {
      result.sort((a, b) => (sort === "asc" ? a.population - b.population : b.population - a.population))
    }

    setFilteredCountries(result)
  }, [countries, searchParams])

  if (!searchParams.get("search")) {
    return null
  }

  return (
    <div className="space-y-3">
      {filteredCountries.map((country) => (
        <Link
          href={`/country/${country.cca3}`}
          key={country.cca3}
          className="flex items-center justify-between rounded-lg bg-white/60 p-4 backdrop-blur-md transition-all hover:bg-white/80"
        >
          <div className="flex items-center gap-4">
            <div className="relative h-8 w-12 overflow-hidden rounded shadow-sm">
              <Image
                src={country.flags.svg || "/placeholder.svg"}
                alt={`Flag of ${country.name.common}`}
                fill
                className="object-cover"
              />
            </div>
            <span className="font-medium text-gray-800">{country.name.common}</span>
          </div>
          <span className="text-sm text-gray-600">Pop: {country.population.toLocaleString()}</span>
        </Link>
      ))}
    </div>
  )
}

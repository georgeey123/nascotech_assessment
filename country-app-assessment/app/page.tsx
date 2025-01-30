import { Suspense } from "react"
import CountryList from "@/components/CountryList"
import SearchBar from "@/components/SearchBar"
import { Search } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-blue-50 to-blue-100 px-4 py-16">
      <div className="w-full max-w-2xl">
        <Suspense>
          <div className="relative mb-12">
            <SearchBar />
            <Search className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          </div>
        </Suspense>
        <Suspense fallback={<div className="text-center">Loading countries...</div>}>
          <CountryList />
        </Suspense>
      </div>
    </main>
  )
}


"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useCallback, useTransition } from "react"

export default function SearchBar() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
      return params.toString()
    },
    [searchParams],
  )

  return (
    <div className="flex flex-col gap-4">
      <input
        className="w-full rounded-full border border-gray-200 bg-white/80 px-6 py-4 text-lg text-black shadow-lg backdrop-blur-sm transition-all focus:border-gray-300 focus:outline-none focus:ring-0"
        placeholder="Search countries..."
        onChange={(e) => {
          startTransition(() => {
            router.push(`/?${createQueryString("search", e.target.value)}`)
          })
        }}
        defaultValue={searchParams.get("search") ?? ""}
      />
      {searchParams.get("search") && (
        <select
          className="w-full rounded-lg border border-gray-200 bg-white/80 px-4 py-2 text-black shadow-md backdrop-blur-sm"
          defaultValue={searchParams.get("sort") ?? "none"}
          onChange={(e) => {
            startTransition(() => {
              router.push(`/?${createQueryString("sort", e.target.value)}`)
            })
          }}
        >
          <option value="none">Sort by population...</option>
          <option value="asc">Population (Low to High)</option>
          <option value="desc">Population (High to Low)</option>
        </select>
      )}
    </div>
  )
}


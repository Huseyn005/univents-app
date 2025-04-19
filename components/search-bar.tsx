"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"

// Sample data for search
const searchData = {
  events: [
    {
      id: "dream-fest-2025",
      title: "Baku City Circuit 2025",
      image: "https://cdn.bakucitycircuit.com/uploads/news/267/Z1R7yQaUKbsD09nNa6OzqoKUvKteGuLeuqXOJdVc.png",
      type: "event",
    },
    {
      id: "planet-parni",
      title: "Bakı Konfransı 2025",
      image: "https://cdn.iticket.az/event/cover/RnENnGBAkTJR4lXmp67mu3vcw2NVUph7LHrbcQf3.jpg",
      type: "event",
    },
    {
      id: "la-la-land",
      title: "TECH CELL hakatonu, UFAZ",
      image:
        "https://ufaz-assets.ams3.cdn.digitaloceanspaces.com/website/media/public/images/thumbnail_image.original.format-webp.webp",
      type: "event",
    },
  ],
  venues: [
    {
      id: "crystall-hall",
      title: "Crystall Hall",
      image:
        "https://www.chinese-architects.com/images/Projects/36/74/25/ec18314792cf4e149cac1fdff3f01ebf/ec18314792cf4e149cac1fdff3f01ebf.6e7b65d0.jpg",
      type: "venue",
    },
    {
      id: "heydar-aliyev-palace",
      title: "Heydar Aliyev Palace",
      image: "https://azerbaijan.travel/fit1600x900/center/pages/714/b684f728-fa9e-46a7-a771-de33785b1554.jpg",
      type: "venue",
    },
  ],
  news: [
    {
      id: "crystall-hall",
      title: "EduHack 2025 : Innovating The Future of Learning",
      image: "https://nigdeanadoluhaber.com.tr/uploads/nohu-den-azerbaycan-da-hackathon-etkinligi96.webp",
      type: "news",
    },
    {
      id: "heydar-aliyev-palace",
      title: "BANM - Imtahan sessiyasina start verildi",
      image: "https://bhos.edu.az/kcfinder/upload/images/xebersekli76.jpg",
      type: "news",
    },
  ],
}

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showResults, setShowResults] = useState(false)
  const [searchResults, setSearchResults] = useState<any[]>([])
  const searchRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  // Handle search query change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)

    if (query.length >= 2) {
      // Search in all data
      const results = [
        ...searchData.events.filter((item) => item.title.toLowerCase().includes(query.toLowerCase())),
        ...searchData.venues.filter((item) => item.title.toLowerCase().includes(query.toLowerCase())),
        ...searchData.news.filter((item) => item.title.toLowerCase().includes(query.toLowerCase())),
      ]
      setSearchResults(results)
      setShowResults(true)
    } else {
      setShowResults(false)
    }
  }

  // Handle search form submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
      setShowResults(false)
    }
  }

  // Handle click outside to close results
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Handle result click
  const handleResultClick = () => {
    setShowResults(false)
    setSearchQuery("")
  }

  return (
    <div className="relative" ref={searchRef}>
      <form onSubmit={handleSearch} className="relative">
        <Input
          type="text"
          placeholder="Search events, venues, news..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="pr-10 rounded-full"
        />
        <Button
          type="submit"
          size="icon"
          variant="ghost"
          className="absolute right-0 top-0 h-full rounded-l-none rounded-r-full"
        >
          <Search className="h-4 w-4" />
          <span className="sr-only">Search</span>
        </Button>
      </form>

      {showResults && searchResults.length > 0 && (
        <div className="absolute z-50 mt-1 w-full rounded-md border bg-background shadow-lg">
          <div className="max-h-[70vh] overflow-auto p-2">
            {searchResults.map((result, index) => (
              <Link
                key={`${result.type}-${result.id}-${index}`}
                href={`/${result.type}s/${result.id}`}
                className="flex items-center gap-3 rounded-md p-2 hover:bg-muted"
                onClick={handleResultClick}
                {...(result.type === "news" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-md">
                  <Image src={result.image || "/placeholder.svg"} alt={result.title} fill className="object-cover" />
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="truncate text-sm font-medium">{result.title}</p>
                  <p className="text-xs text-muted-foreground capitalize">{result.type}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {showResults && searchResults.length === 0 && searchQuery.length >= 2 && (
        <div className="absolute z-50 mt-1 w-full rounded-md border bg-background p-4 shadow-lg">
          <p className="text-center text-sm text-muted-foreground">No results found for "{searchQuery}"</p>
        </div>
      )}
    </div>
  )
}

import Link from "next/link"
import Image from "next/image"
import { SearchBar } from "./search-bar"
import { MapIcon, CalendarIcon, NewspaperIcon, UserIcon, Building2Icon } from "lucide-react"

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-3 md:flex-row">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image src="https://i.ibb.co/ZRyL2N1Y/Screenshot-2025-04-19-151007-removebg-preview.png" alt="Univents Logo" width={120} height={40} className="h-10 w-auto" />
          </Link>
          <div className="hidden md:block md:w-[300px] lg:w-[400px]">
            <SearchBar />
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <Link href="/venues" className="flex items-center gap-1 text-sm font-medium">
            <Building2Icon className="h-4 w-4" />
            <span>Venues</span>
          </Link>
          <Link href="/events" className="flex items-center gap-1 text-sm font-medium">
            <CalendarIcon className="h-4 w-4" />
            <span>Events</span>
          </Link>
          <Link href="/news" className="flex items-center gap-1 text-sm font-medium">
            <NewspaperIcon className="h-4 w-4" />
            <span>News</span>
          </Link>
          <Link href="/map" className="flex items-center gap-1 text-sm font-medium">
            <MapIcon className="h-4 w-4" />
            <span>Map</span>
          </Link>
          <Link href="/account" className="flex items-center gap-1 text-sm font-medium">
            <UserIcon className="h-4 w-4" />
            <span>Account</span>
          </Link>
        </div>

        <div className="mt-4 w-full md:hidden">
          <SearchBar />
        </div>
      </div>
    </header>
  )
}

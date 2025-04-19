import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Newspaper, Building2, Search, Users } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold text-green-800">Our Services</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-bold">Event Discovery</CardTitle>
            <Calendar className="h-6 w-6 text-green-600" />
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">
              Browse and discover a wide range of events happening across Azerbaijan, from concerts and festivals to
              conferences and cultural gatherings.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-bold">Venue Information</CardTitle>
            <Building2 className="h-6 w-6 text-green-600" />
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">
              Get detailed information about venues, including capacity, facilities, location, and upcoming events
              scheduled at each venue.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-bold">News Updates</CardTitle>
            <Newspaper className="h-6 w-6 text-green-600" />
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">
              Stay informed with the latest news about events, entertainment, and cultural happenings in Azerbaijan.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-bold">Interactive Maps</CardTitle>
            <MapPin className="h-6 w-6 text-green-600" />
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">
              Find your way to events and venues with our interactive maps, making navigation easy and stress-free.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-bold">Advanced Search</CardTitle>
            <Search className="h-6 w-6 text-green-600" />
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">
              Use our powerful search functionality to quickly find specific events, venues, or news articles that match
              your interests.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-bold">Community</CardTitle>
            <Users className="h-6 w-6 text-green-600" />
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">
              Connect with other event-goers, share experiences, and become part of the vibrant MyEvents community.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

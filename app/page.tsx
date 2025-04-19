import { MapComponent } from "@/components/map-component"
import { EventsList } from "@/components/events-list"
import { NewsList } from "@/components/news-list"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="md:col-span-1">
            <h2 className="mb-4 text-2xl font-bold">Events</h2>
            <EventsList />
          </div>

          <div className="md:col-span-1">
            <MapComponent />
          </div>

          <div className="md:col-span-1">
            <h2 className="mb-4 text-2xl font-bold">News</h2>
            <NewsList />
          </div>
        </div>
      </div>
    </main>
  )
}

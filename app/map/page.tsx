import { MapComponent } from "@/components/map-component"

export default function MapPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold text-green-800">Explore Map</h1>
      <div className="mx-auto max-w-4xl">
        <MapComponent height="600px" />
      </div>
    </div>
  )
}

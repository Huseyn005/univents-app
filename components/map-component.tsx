"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Maximize2 } from "lucide-react"
import dynamic from "next/dynamic"

// Dynamically import the map components to avoid SSR issues
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false })
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false })
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false })
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false })

// Default location (Baku, Azerbaijan)
const defaultPosition = [40.409264, 49.867092]

export function MapComponent({
  position = defaultPosition,
  popupText = "Baku, Azerbaijan",
  height = "400px",
}: {
  position?: [number, number]
  popupText?: string
  height?: string
}) {
  const [mapType, setMapType] = useState<"map" | "satellite">("map")
  const [isClient, setIsClient] = useState(false)
  const mapRef = useRef<HTMLDivElement>(null)

  // Handle fullscreen toggle
  const toggleFullscreen = () => {
    if (mapRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        mapRef.current.requestFullscreen()
      }
    }
  }

  // Set isClient to true when component mounts
  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="rounded-lg border overflow-hidden">
        <div className="bg-muted p-2 flex justify-between items-center">
          <div className="flex space-x-1">
            <Button
              variant={mapType === "map" ? "secondary" : "outline"}
              size="sm"
              onClick={() => setMapType("map")}
              className="text-xs h-8"
            >
              Map
            </Button>
            <Button
              variant={mapType === "satellite" ? "secondary" : "outline"}
              size="sm"
              onClick={() => setMapType("satellite")}
              className="text-xs h-8"
            >
              Satellite
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Maximize2 className="h-4 w-4" />
            <span className="sr-only">Fullscreen</span>
          </Button>
        </div>
        <div style={{ height }} className="bg-sky-100 flex items-center justify-center">
          <p className="text-gray-500">Loading map...</p>
        </div>
        <div className="p-1 text-xs text-right text-muted-foreground border-t">
          Map data © OpenStreetMap contributors
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-lg border overflow-hidden" ref={mapRef}>
      <div className="bg-muted p-2 flex justify-between items-center">
        <div className="flex space-x-1">
          <Button
            variant={mapType === "map" ? "secondary" : "outline"}
            size="sm"
            onClick={() => setMapType("map")}
            className="text-xs h-8"
          >
            Map
          </Button>
          <Button
            variant={mapType === "satellite" ? "secondary" : "outline"}
            size="sm"
            onClick={() => setMapType("satellite")}
            className="text-xs h-8"
          >
            Satellite
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={toggleFullscreen}>
          <Maximize2 className="h-4 w-4" />
          <span className="sr-only">Fullscreen</span>
        </Button>
      </div>

      <MapContainer center={position} zoom={13} style={{ height }} scrollWheelZoom={false}>
        {mapType === "map" ? (
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        ) : (
          <TileLayer
            attribution='&copy; <a href="https://www.esri.com/">Esri</a>'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
        )}
        <Marker position={position}>
          <Popup>{popupText}</Popup>
        </Marker>
      </MapContainer>

      <div className="p-1 text-xs text-right text-muted-foreground border-t">Map data © OpenStreetMap contributors</div>
    </div>
  )
}

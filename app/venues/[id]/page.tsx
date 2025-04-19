import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MapComponent } from "@/components/map-component"

// Venue data (in a real app, this would come from a database)
const venues = {
  "crystall-hall": {
    id: "crystall-hall",
    title: "Convention Center",
    image: "https://i.ibb.co/mrfRjcqv/getlstd-property-photo.jpg",
    description:
      "In Baku, the capital of Azerbaijan, a new conference and congress centre has been created for 4,500 guests. OBERMEYER Project Management GmbH was appointed as Client´s representative and provided project management, design review and construction management services.This futuristic building comprises a central auditorium that is surrounded in circular fashion by a second building section containing 15 conference and meeting rooms, offices and restaurants. The building, designed by COOP Himmelb(l)au, an Austrian firm of architects, comprises a total surface area of almost 60,000 m².The auditorium is equipped with height-adjustable rows of seats and with seating that can be recessed, meaning that the space can accommodate a range of different seating configurations. It has a maximum capacity of 3,500 seats. Impressive: The building has a huge 405 m² multimedia screen. The lobby extends over an area of 1,800 m², the restaurant area covers a further 1,700 m² and the meeting and communication area measures 1,750 m².",
    capacity: "25,000",
    facilities: ["Parking", "Food & Beverage", "Accessibility Features", "VIP Areas"],
    coordinates: [40.397884, 49.865130] as [number, number], // Example coordinates for Crystal Hall
  },
  "heydar-aliyev-palace": {
    id: "heydar-aliyev-palace",
    title: "Heydar Aliyev Palace",
    image: "https://azerbaijan.travel/fit1600x900/center/pages/714/b684f728-fa9e-46a7-a771-de33785b1554.jpg",
    description:
      "Heydar Aliyev Palace, located in Baku, Azerbaijan, is a prominent cultural and concert venue named after the country's third president, hosting various artistic and public events. The palace serves as one of the main cultural centers in Baku, regularly hosting concerts, ballet performances, official ceremonies, and other significant cultural events. With its elegant architecture and excellent acoustics, it provides an ideal setting for both local and international performances.",
    address: "Baku, Azerbaijan",
    capacity: "2,500",
    facilities: ["Parking", "Cloakroom", "Refreshments", "Accessibility Features"],
    coordinates: [40.394963, 49.867115] as [number, number], // Example coordinates for Heydar Aliyev Palace
  },
  "academic-national-drama-theatre": {
    id: "academic-national-drama-theatre",
    title: "Academic National Drama Theatre",
    image: "https://asogroup.az/uploads/posts/2023-08/medium/1691151452_aciq-menbe31.jpg",
    description:
      "The Academic National Drama Theatre, located in Baku, Azerbaijan, is a prestigious cultural institution showcasing classical and contemporary plays, reflecting the rich theatrical traditions and artistic heritage of the nation. Founded in the early 20th century, the theatre has played a significant role in the development of Azerbaijani dramatic arts. The building itself is an architectural landmark, combining traditional Azerbaijani design elements with modern theatrical facilities.",
    address: "Baku, Azerbaijan",
    capacity: "800",
    facilities: ["Cloakroom", "Café", "Bookstore", "Guided Tours"],
    coordinates: [40.3689, 49.8334] as [number, number], // Example coordinates for Academic National Drama Theatre
  },
  "nizami-cinema": {
    id: "nizami-cinema",
    title: "Nizami Cinema",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Nizami_cinema.3.jpg",
    description:
      "Nizami Cinema, located in Baku, Azerbaijan, is the largest and one of the oldest cinemas in the country, serving as a cultural landmark that hosts film screenings, festivals, and significant cinematic events. Named after the great Azerbaijani poet Nizami Ganjavi, this historic cinema has been a centerpiece of Baku's cultural life since the Soviet era. Recently renovated with modern projection and sound equipment, it maintains its classic architectural charm while offering contemporary viewing experiences.",
    address: "Baku, Azerbaijan",
    capacity: "1,200",
    facilities: ["Concessions", "Dolby Atmos Sound", "IMAX Screenings", "VIP Seating"],
    coordinates: [40.3723, 49.8351] as [number, number], // Example coordinates for Nizami Cinema
  },
  "sea-breeze-resort": {
    id: "sea-breeze-resort",
    title: "Sea Breeze Resort",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/554984184.jpg?k=4d815b545af40653b8f949a490b9ba42377a366db80af79206c88d6c401366db&o=&hp=1",
    description:
      "Sea Breeze Resort is a premier resort and residential complex located on the picturesque coast of the Caspian Sea, approximately a 30-minute drive from Baku, Azerbaijan. The resort offers a blend of luxury accommodations and modern amenities, making it a favored destination for both relaxation and entertainment. With its private beach, multiple swimming pools, restaurants, and event spaces, Sea Breeze Resort has become a popular venue for summer festivals, corporate events, and weddings.",
    address: "Caspian Sea coast, 30 minutes from Baku, Azerbaijan",
    capacity: "Varies by venue within the resort",
    facilities: ["Private Beach", "Multiple Pools", "Restaurants", "Spa", "Conference Facilities"],
    coordinates: [40.5123, 50.1234] as [number, number], // Example coordinates for Sea Breeze Resort
  },
}

export default function VenueDetailPage({ params }: { params: { id: string } }) {
  const venue = venues[params.id as keyof typeof venues]

  if (!venue) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold">Venue not found</h1>
        <p className="mt-4">The venue you're looking for doesn't exist or has been removed.</p>
        <Link href="/venues" className="mt-6 inline-block text-blue-600 hover:underline">
          Back to venues
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/venues" className="mb-6 inline-flex items-center text-blue-600 hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to list
      </Link>

      <div className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
        <div className="relative aspect-square overflow-hidden rounded-lg md:aspect-auto md:h-full">
          <Image src={venue.image || "/placeholder.svg"} alt={venue.title} fill className="object-cover" />
        </div>

        <div className="rounded-lg border p-6">
          <h1 className="text-3xl font-bold text-green-500">{venue.title}</h1>

          <div className="mt-4 space-y-2">
            <p>
              <strong>Address:</strong> {venue.address}
            </p>
            <p>
              <strong>Capacity:</strong> {venue.capacity}
            </p>
          </div>

          <p className="mt-6 text-gray-700">{venue.description}</p>

          <div className="mt-6">
            <h3 className="font-bold">Facilities:</h3>
            <ul className="mt-2 list-inside list-disc">
              {venue.facilities.map((facility, index) => (
                <li key={index}>{facility}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8 text-center">
            <Button className="w-full max-w-xs">View Upcoming Events</Button>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="mb-4 text-xl font-bold">Location</h2>
        <MapComponent position={venue.coordinates} popupText={venue.title} />
      </div>
    </div>
  )
}

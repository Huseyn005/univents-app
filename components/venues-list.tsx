import Image from "next/image"
import Link from "next/link"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type Venue = {
  id: string
  title: string
  description: string
  image: string
  location: string
}

const venues: Venue[] = [
  {
    id: "crystall-hall",
    title: "Crystall Hall",
    description:
      "The Baku Crystal Hall is a modern multi-functional indoor arena in Baku, Azerbaijan, known for hosting events such as the Eurovision Song Contest 2012 and various sport...",
    image: "/crystal-hall.png",
    location: "Baku, Azerbaijan",
  },
  {
    id: "heydar-aliyev-palace",
    title: "Heydar Aliyev Palace",
    description:
      "Heydar Aliyev Palace, located in Baku, Azerbaijan, is a prominent cultural and concert venue named after the country's third president, hosting various artistic and public events...",
    image: "/heydar-palace.png",
    location: "Baku, Azerbaijan",
  },
]

export function VenuesList() {
  return (
    <div className="space-y-4">
      {venues.map((venue) => (
        <Link href={`/venues/${venue.id}`} key={venue.id}>
          <Card className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-video relative">
              <Image src={venue.image || "/placeholder.svg"} alt={venue.title} fill className="object-cover" />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">{venue.title}</CardTitle>
              <CardDescription className="line-clamp-3 text-sm">{venue.description}</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  )
}

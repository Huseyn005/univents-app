import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const venues = [
  {
    id: "crystall-hall",
    title: "Convention Center",
    image: "https://i.ibb.co/mrfRjcqv/getlstd-property-photo.jpg",
    description:
      "In Baku, the capital of Azerbaijan, a new conference and congress centre has been created for 4,500 guests. OBERMEYER Project Management GmbH was appointed as Client´s representative and provided project management, design review and construction management services.This futuristic building comprises a central auditorium that is surrounded in circular fashion by a second building section containing 15 conference and meeting rooms, offices and restaurants. The building, designed by COOP Himmelb(l)au, an Austrian firm of architects, comprises a total surface area of almost 60,000 m².The auditorium is equipped with height-adjustable rows of seats and with seating that can be recessed, meaning that the space can accommodate a range of different seating configurations. It has a maximum capacity of 3,500 seats. Impressive: The building has a huge 405 m² multimedia screen. The lobby extends over an area of 1,800 m², the restaurant area covers a further 1,700 m² and the meeting and communication area measures 1,750 m².",
    location: "Baku, Azerbaijan",
  },
  {
    id: "heydar-aliyev-palace",
    title: "Heydar Aliyev Palace",
    image: "https://azerbaijan.travel/fit1600x900/center/pages/714/b684f728-fa9e-46a7-a771-de33785b1554.jpg",
    description:
      "Heydar Aliyev Palace, located in Baku, Azerbaijan, is a prominent cultural and concert venue named after the country's third president, hosting various artistic and public events.",
    location: "Baku, Azerbaijan",
  },
  {
    id: "academic-national-drama-theatre",
    title: "Academic National Drama Theatre",
    image: "https://asogroup.az/uploads/posts/2023-08/medium/1691151452_aciq-menbe31.jpg",
    description:
      "The Academic National Drama Theatre, located in Baku, Azerbaijan, is a prestigious cultural institution showcasing classical and contemporary plays, reflecting the rich theatrical traditions and artistic heritage of the nation.",
    location: "Baku, Azerbaijan",
  },
  {
    id: "nizami-cinema",
    title: "Nizami Cinema",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Nizami_cinema.3.jpg",
    description:
      "Nizami Cinema, located in Baku, Azerbaijan, is the largest and one of the oldest cinemas in the country, serving as a cultural landmark that hosts film screenings, festivals, and significant cinematic events.",
    location: "Baku, Azerbaijan",
  },
  {
    id: "sea-breeze-resort",
    title: "Sea Breeze Resort",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/554984184.jpg?k=4d815b545af40653b8f949a490b9ba42377a366db80af79206c88d6c401366db&o=&hp=1",
    description:
      "Sea Breeze Resort is a premier resort and residential complex located on the picturesque coast of the Caspian Sea, approximately a 30-minute drive from Baku, Azerbaijan.",
    location: "Caspian Sea coast, 30 minutes from Baku, Azerbaijan",
  },
]

export default function VenuesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold text-green-800">Explore Venues</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {venues.map((venue) => (
          <Link href={`/venues/${venue.id}`} key={venue.id}>
            <Card className="h-full overflow-hidden hover:shadow-md transition-transform hover:scale-[1.01]">
              <div className="relative aspect-video">
                <Image
                  src={venue.image || "/placeholder.svg?height=200&width=400"}
                  alt={venue.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">{venue.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{venue.location}</p>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-4">{venue.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

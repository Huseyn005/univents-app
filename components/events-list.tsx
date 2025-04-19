import Image from "next/image"
import Link from "next/link"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type Event = {
  id: string
  title: string
  description: string
  image: string
  date: string
}

const events: Event[] = [
  {
    id: "dream-fest-2025",
    title: "Baku City Circuit 2025",
    description:
      "The 2025 Formula 1 Qatar Airways Azerbaijan Grand Prix is scheduled for September 19–21, 2025, at the Baku City Circuit, a 6.003 km street track renowned for its blend of tight corners and high-speed straights. The race will cover 51 laps, totaling 306.049 km",
    image: "https://cdn.bakucitycircuit.com/uploads/news/267/Z1R7yQaUKbsD09nNa6OzqoKUvKteGuLeuqXOJdVc.png",
    date: "July 2025",
  },
  {
    id: "planet-parni",
    title: 'Bakı Konfransı 2025 (Dil: Türkçe) (10+)',
    description:
      "5 iyul Opera Studiyasında professor Celal Şengör təqdimatında “Bakı Konfransı 2025” tədbiri baş tutacaq. Tədbir iki hissədən: 1) Professor Celal Şengörün təqdimatında mövzusu Müqəddəsdən Maddiyə: Tanrı, Təbiət və Elmi Düşüncə seminarı. 2) Professor Celal Şengör tədbir iştirakçılarının suallarını cavablayacaq. Yaşıl Elm platformasının təşkilatçılığı ilə keçiriləcək elmi tədbir Azərbaycanda baş tutacaq sayca üçüncü böyük elmi konfrans olacaq. Tədbirdə iştirak 10 yaşdan yuxarı hər kəs üçün nəzərdə tutulur.",
    image: "https://cdn.iticket.az/event/cover/RnENnGBAkTJR4lXmp67mu3vcw2NVUph7LHrbcQf3.jpg",
    date: "5 July 2025",
  },
]

export function EventsList() {
  return (
    <div className="space-y-4">
      {events.map((event) => (
        <Link href={`/events/${event.id}`} key={event.id}>
          <Card className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-video relative">
              <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">{event.title}</CardTitle>
              <CardDescription className="line-clamp-3 text-sm">{event.description}</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  )
}

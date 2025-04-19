import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const events = [
  {
    id: "dream-fest-2025",
    title: "Baku City Circuit 2025",
    image: "https://cdn.bakucitycircuit.com/uploads/news/267/Z1R7yQaUKbsD09nNa6OzqoKUvKteGuLeuqXOJdVc.png",
    description:
      "The 2025 Formula 1 Qatar Airways Azerbaijan Grand Prix is scheduled for September 19–21, 2025, at the Baku City Circuit, a 6.003 km street track renowned for its blend of tight corners and high-speed straights. The race will cover 51 laps, totaling 306.049 km",
  },
  {
    id: "planet-parni",
    title: 'Erasmus Student Network',
    image: "https://www.esn.az/sites/default/files/logo_esn_resized.png",
    description:
      "5 iyul Opera Studiyasında professor Celal Şengör təqdimatında “Bakı Konfransı 2025” tədbiri baş tutacaq. Tədbir iki hissədən: 1) Professor Celal Şengörün təqdimatında mövzusu Müqəddəsdən Maddiyə: Tanrı, Təbiət və Elmi Düşüncə seminarı. 2) Professor Celal Şengör tədbir iştirakçılarının suallarını cavablayacaq. Yaşıl Elm platformasının təşkilatçılığı ilə keçiriləcək elmi tədbir Azərbaycanda baş tutacaq sayca üçüncü böyük elmi konfrans olacaq. Tədbirdə iştirak 10 yaşdan yuxarı hər kəs üçün nəzərdə tutulur.",
  },
  {
    id: "la-la-land",
    title: "TECH CELL hakatonu, UFAZ",
    image: "https://ufaz-assets.ams3.cdn.digitaloceanspaces.com/website/media/public/images/thumbnail_image.original.format-webp.webp",
    description:
      "Join the Hackathon and gain one of the best experiences!!",
  },
  {
    id: "inception",
    title: 'SUP VC də Hakaton Həyəcanı',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuiRRLiTIzc3pqlZFt3jVvxqoY3dMhT-hu5Q&s",
    description:
      'Bu Hakaton tam sənə görədir. Komandanı yığ gəl yarış! registrasiyadan kecmeyi unutmayin.',
  },
  {
    id: "onerepublic",
    title: "AIESEC ə könüllü qəbuluna start verildi!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpA5GyYWcsU39bjdG2h2Bk3Upbs3x_Ff5U_Q&s",
    description:
      "We have fantastic news for you! Lomg awaited Volunteeriing program for Aiesec is now open. for more information click here.",
  },
  {
    id: "garabaghname",
    title: "EESTECH Azerbaijan",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQls29SSusXGljxGl8IU6rr9fTVqC15ixGRQg&s",
    description:
      'Electrical Circuits for industry 4.0',
  },
]

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold text-green-800">Explore Events</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <Link href={`/events/${event.id}`} key={event.id} className="transition-transform hover:scale-[1.01]">
            <Card className="h-full overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src={event.image || "/placeholder.svg?height=200&width=400"}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-4">{event.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MapComponent } from "@/components/map-component"

// Event data (in a real app, this would come from a database)
const events = {
  "dream-fest-2025": {
    id: "dream-fest-2025",
    title: "Baku City Circuit",
    category: "sport",
    image: "https://cdn.bakucitycircuit.com/uploads/news/267/Z1R7yQaUKbsD09nNa6OzqoKUvKteGuLeuqXOJdVc.png",
    date: "24 July 2025",
    timeFrom: "18:00:00",
    timeTo: "23:30:30",
    description:
      "The 2025 Formula 1 Qatar Airways Azerbaijan Grand Prix is scheduled for September 19–21, 2025, at the Baku City Circuit, a 6.003 km street track renowned for its blend of tight corners and high-speed straights. The race will cover 51 laps, totaling 306.049 km",
    location: "Baku city",
    coordinates: [40.371888, 49.843774] as [number, number], // Example coordinates for Sea Breeze Resort
  },
  "planet-parni": {
    id: "planet-parni",
    title: 'Bakı Konfransı 2025 (Dil: Türkçe) (10+)',
    category: "konfrans",
    image: "https://cdn.iticket.az/event/cover/RnENnGBAkTJR4lXmp67mu3vcw2NVUph7LHrbcQf3.jpg",
    date: "5 July 2025",
    timeFrom: "19:00:00",
    timeTo: "21:30:00",
    description:
      "5 iyul Opera Studiyasında professor Celal Şengör təqdimatında “Bakı Konfransı 2025” tədbiri baş tutacaq. Tədbir iki hissədən: 1) Professor Celal Şengörün təqdimatında mövzusu Müqəddəsdən Maddiyə: Tanrı, Təbiət və Elmi Düşüncə seminarı. 2) Professor Celal Şengör tədbir iştirakçılarının suallarını cavablayacaq. Yaşıl Elm platformasının təşkilatçılığı ilə keçiriləcək elmi tədbir Azərbaycanda baş tutacaq sayca üçüncü böyük elmi konfrans olacaq. Tədbirdə iştirak 10 yaşdan yuxarı hər kəs üçün nəzərdə tutulur.",
    location: "Bakı Musiqi Akademiyası nəzdində Opera Studiyasının Konsert salonu",
    coordinates: [40.377187, 49.845024] as [number, number], // Example coordinates for Heydar Aliyev Palace
  },
  "la-la-land": {
    id: "la-la-land",
    title: "TECH CELL hakatonu, UFAZ",
    category: "Hackathon",
    image: "https://ufaz-assets.ams3.cdn.digitaloceanspaces.com/website/media/public/images/thumbnail_image.original.format-webp.webp",
    date: "10 June 2025",
    timeFrom: "20:00:00",
    timeTo: "22:15:00",
    description:
      "Join the Hackathon and gain one of the best experiences!!",
    location: "UFAZ",
    coordinates: [40.3723, 49.8351] as [number, number], // Example coordinates for Nizami Cinema
  },
  inception: {
    id: "inception",
    title: 'SUP VC də Hakaton Həyəcanı',
    category: "Hackathon",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuiRRLiTIzc3pqlZFt3jVvxqoY3dMhT-hu5Q&s",
    date: "17 June 2025",
    timeFrom: "19:30:00",
    timeTo: "22:00:00",
    description:
      'Bu Hakaton tam sənə görədir. Komandanı yığ gəl yarış! registrasiyadan kecmeyi unutmayin.',
    location: "Khatai",
    coordinates: [40.3723, 49.8351] as [number, number], // Example coordinates for Nizami Cinema
  },
  onerepublic: {
    id: "onerepublic",
    title: "AIESEC könüllü qəbulu",
    category: "Volunteering",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpA5GyYWcsU39bjdG2h2Bk3Upbs3x_Ff5U_Q&s",
    date: "5 August 2025",
    timeFrom: "20:00:00",
    timeTo: "23:00:00",
    description:
      'AIESEC konullu qebuluna start verildi. Deadline dan evvel qeydiyatdan kecmeyi unutmayin!',
    location: "Globus Center",
    coordinates: [40.3456, 49.8512] as [number, number], // Example coordinates for Crystal Hall
  },
  garabaghname: {
    id: "garabaghname",
    title: "EESTECH Azerbaijan",
    category: "Hackathon",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQls29SSusXGljxGl8IU6rr9fTVqC15ixGRQg&s",
    date: "20 July 2025",
    timeFrom: "19:00:00",
    timeTo: "21:00:00",
    description:
      '"Garabaghname" is a play based on the work "The Ruler and His Daughter" by People\'s Writer Ilyas Efendiyev.',
    location: "Academic National Drama Theatre",
    coordinates: [40.3689, 49.8334] as [number, number], // Example coordinates for Academic National Drama Theatre
  },
}

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const event = events[params.id as keyof typeof events]

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold">Event not found</h1>
        <p className="mt-4">The event you're looking for doesn't exist or has been removed.</p>
        <Link href="/events" className="mt-6 inline-block text-blue-600 hover:underline">
          Back to events
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/events" className="mb-6 inline-flex items-center text-blue-600 hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to list
      </Link>

      <div className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
        <div className="relative aspect-square overflow-hidden rounded-lg md:aspect-auto md:h-full">
          <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
        </div>

        <div className="rounded-lg border p-6">
          <h1 className="text-3xl font-bold text-green-500">
            {event.title} <span className="text-xl font-normal">({event.category})</span>
          </h1>

          <div className="mt-4 space-y-2">
            <p>
              <strong>Date:</strong> {event.date}
            </p>
            <p>
              <strong>From:</strong> {event.timeFrom} <strong>To:</strong> {event.timeTo}
            </p>
          </div>

          <p className="mt-6 text-gray-700">{event.description}</p>

          <div className="mt-8 text-center">
            <Button className="w-full max-w-xs bg-black text-white hover:bg-gray-800">Buy Ticket</Button>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="mb-4 text-xl font-bold">Location</h2>
        <MapComponent position={event.coordinates} popupText={event.location} />
      </div>

      <div className="mt-8">
        <h2 className="mb-4 text-xl font-bold">Comments</h2>
        <div className="rounded-lg border p-6">
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        </div>
      </div>
    </div>
  )
}

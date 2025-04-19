import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MapComponent } from "@/components/map-component"

// News data (in a real app, this would come from a database)
const newsItems = {
  "crystall-hall": {
    id: "crystall-hall",
    title: "EduHack 2025 : Innovating The Future of Learning",
    image: "https://nigdeanadoluhaber.com.tr/uploads/nohu-den-azerbaycan-da-hackathon-etkinligi96.webp",
    description:
      "Great Opportunity for Students! EduHack Hackathon was held in Baku Congress Center on 19th and 20th of April. Students from different Universities competed in this hackathon and gained invaluable experiences.",
    date: "April 19, 2025",
    author: "Elmar Osmanli",
    category: "Hackathon",
    coordinates: [40.3456, 49.8512] as [number, number], // Example coordinates for Crystal Hall
  },
  "heydar-aliyev-palace": {
    id: "heydar-aliyev-palace",
    title: "Beynəlxalq Təhsil Sərgisi",
    image: "https://bhos.edu.az/kcfinder/upload/images/xebersekli76.jpg",
    description:
      "Baki Ali Neft Mektebinde yaz semestri imtahan sessiyasina start verildi",
    author: "Elmar Gasimov",
    category: "News",
    coordinates: [40.320140, 49.824333] as [number, number], // Example coordinates for Heydar Aliyev Palace
  },
  "academic-national-drama-theatre": {
    id: "academic-national-drama-theatre",
    title: "Azərbaycan Universiteti üzrə Brend  Tələbələr",
    image: "https://news.unec.edu.az/images/brend_telebe_180325.gif",
    description:
      "AzEdu.az Təhsil Portalı hər il ən aktiv və nümunəvi tələbələri müəyyənləşdirərək, onların bacarıqlarını tanıtmaq, tələbələr arasında sağlam rəqabət mühiti yaratmaq və onları gələcək tələbələrə çatdırmaq məqsədilə son 3 ildir “Brend tələbə” layihəsini həyata keçirir. ",
    date: "January 5, 2025",
    author: "Samil Mantashli",
    category: "News",
    coordinates: [40.370127, 49.839709] as [number, number],
  },
  "nizami-cinema": {
    id: "nizami-cinema",
    title: "Nizami Cinema",
    image: "https://glc.az/storage/ZnkFVN5EvqbtVYE204AuCzdcFGxdPNehFJ6tnuX6.webp",
    description:
      "Sərgiyə son 2 gün qaldı Sərgidə iştirak edərək universitet nümayəndələrindən universitetlərin qəbul, qeydiyyat və təhsil sistemi haqqında dolğun məlumat al. 📇 Qeydiyyat və iştirak ödənişsizdir.🔗 Qeydiyyat linki: https://shorturl.at/3Cm5n📍 Məkan: Hilton Baku🗓️ Tarix: 7 Aprel⏰ Saat: 12:00🔗Daha çox fürsət üçün:https://chat.whatsapp.com/H6PIQWtDydtDMLeelgqQwv #glcfair #xaricdetehsil #tehsilsergisi #türkiyədətəhsil #polşadatəhsil #ukraynadatəhsil",
    date: "April 7, 2025",
    author: "Elnur Gadirli",
    category: "Sergi",
    coordinates: [40.372959, 49.834478] as [number, number], // Example coordinates for Nizami Cinema
  },
  "sea-breeze-resort": {
    id: "sea-breeze-resort",
    title: "Mərkəzi Bank - Maaliyəşisən təcrübə proqramı",
    image: "https://old.tecrube.az/wp-content/uploads/2023/04/Home-8.png",
    description:
      "Azərbaycanın yüksək potensiallı gənclərini Mərkəzi Bankçılıq ilə yaxından tanış etmək, işə hazırlıq bacarıqlarını inkişaf etdirmək və praktiki təcrübəni təmin etmək məqsədi ilə Azərbaycan Respublikasının Mərkəzi Bankı “Maliyyəçisən” təcrübə poqramını həyata keçirir. Təcrübə proqramı çərçivəsində gənclər seçilən istiqamət üzrə peşəkarlardan öyrənməklə yanaşı səriştə və bacarıqlarının artırılması üçün müxtəlif bankdaxili təlimlərə cəlb olunur.",
    date: "July - August, 2025",
    author: "Elnur Gadirli",
    category: "İnternship",
    coordinates: [40.378584, 49.845370] as [number, number], // Example coordinates for Sea Breeze Resort
  },
}

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const newsItem = newsItems[params.id as keyof typeof newsItems]

  if (!newsItem) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold">News article not found</h1>
        <p className="mt-4">The article you're looking for doesn't exist or has been removed.</p>
        <Link href="/news" className="mt-6 inline-block text-blue-600 hover:underline">
          Back to news
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/news" className="mb-6 inline-flex items-center text-blue-600 hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to news
      </Link>

      <article className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-3xl font-bold text-green-500">{newsItem.title}</h1>

        <div className="mb-6 flex items-center text-sm text-gray-500">
          <span>{newsItem.date}</span>
          <span className="mx-2">•</span>
          <span>By {newsItem.author}</span>
          <span className="mx-2">•</span>
          <span>{newsItem.category}</span>
        </div>

        <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg">
          <Image src={newsItem.image || "/placeholder.svg"} alt={newsItem.title} fill className="object-cover" />
        </div>

        <div className="prose prose-lg max-w-none">
          {newsItem.description.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="mb-4 text-xl font-bold">Location</h2>
          <MapComponent position={newsItem.coordinates} popupText={newsItem.title} />
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <Button variant="outline">Share Article</Button>
          <Button>Related Events</Button>
        </div>
      </article>
    </div>
  )
}

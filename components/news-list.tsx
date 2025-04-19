import Image from "next/image"
import Link from "next/link"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type NewsItem = {
  id: string
  title: string
  description: string
  image: string
  date: string
}

const newsItems: NewsItem[] = [
  {
    id: "crystall-hall",
    title: "EduHack 2025 : Innovating The Future of Learning",
    description:
      "Great Opportunity for Students! EduHack Hackathon was held in Baku Congress Center on 19th and 20th of April. Students from different Universities competed in this hackathon and gained invaluable experiences.",
    image: "https://nigdeanadoluhaber.com.tr/uploads/nohu-den-azerbaycan-da-hackathon-etkinligi96.webp",
    date: "April 19, 2025",
  },
  {
    id: "heydar-aliyev-palace",
    title: "BANM - Imtahan sessiyasina start verildi",
    description:
      "Baki Ali Neft Mektebinde yaz semestri imtahan sessiyasina start verildi!",
    image: "https://bhos.edu.az/kcfinder/upload/images/xebersekli76.jpg",
    date: "April 20, 2025",
  },
]

export function NewsList() {
  return (
    <div className="space-y-4">
      {newsItems.map((item) => (
        <Link href={`/news/${item.id}`} key={item.id} target="_blank" rel="noopener noreferrer">
          <Card className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-video relative">
              <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">{item.title}</CardTitle>
              <CardDescription className="line-clamp-3 text-sm">{item.description}</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  )
}

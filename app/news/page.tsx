import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const newsItems = [
  {
    id: "crystall-hall",
    title: "EduHack 2025 : Innovating The Future of Learning",
    image: "https://nigdeanadoluhaber.com.tr/uploads/nohu-den-azerbaycan-da-hackathon-etkinligi96.webp",
    description:
      "Great Opportunity for Students! EduHack Hackathon was held in Baku Congress Center on 19th and 20th of April. Students from different Universities competed in this hackathon and gained invaluable experiences.",
    date: "April 19, 2025",
  },
  {
    id: "heydar-aliyev-palace",
    title: "BANM - Imtahan sessiyasina start verildi",
    image: "https://bhos.edu.az/kcfinder/upload/images/xebersekli76.jpg",
    description:
      "Baki Ali Neft Mektebinde yaz semestri imtahan sessiyasina start verildi",
    date: "April 21, 2025",
  },
  {
    id: "academic-national-drama-theatre",
    title: "Azərbaycan Universiteti üzrə Brend  Tələbələr",
    image: "https://news.unec.edu.az/images/brend_telebe_180325.gif",
    description:
      "AzEdu.az Təhsil Portalı hər il ən aktiv və nümunəvi tələbələri müəyyənləşdirərək, onların bacarıqlarını tanıtmaq, tələbələr arasında sağlam rəqabət mühiti yaratmaq və onları gələcək tələbələrə çatdırmaq məqsədilə son 3 ildir “Brend tələbə” layihəsini həyata keçirir.",
    date: "January 5, 2025",
  },
  {
    id: "nizami-cinema",
    title: "Beynəlxalq Təhsil Sərgisi",
    image: "https://glc.az/storage/ZnkFVN5EvqbtVYE204AuCzdcFGxdPNehFJ6tnuX6.webp",
    description:
      "Sərgiyə son 2 gün qaldı Sərgidə iştirak edərək universitet nümayəndələrindən universitetlərin qəbul, qeydiyyat və təhsil sistemi haqqında dolğun məlumat al. 📇 Qeydiyyat və iştirak ödənişsizdir.🔗 Qeydiyyat linki: https://shorturl.at/3Cm5n📍 Məkan: Hilton Baku🗓️ Tarix: 20 Aprel⏰ Saat: 12:00🔗Daha çox fürsət üçün:https://chat.whatsapp.com/H6PIQWtDydtDMLeelgqQwv #glcfair #xaricdetehsil #tehsilsergisi #türkiyədətəhsil #polşadatəhsil #ukraynadatəhsil",
    date: "April 7, 2024",
  },
  {
    id: "sea-breeze-resort",
    title: "Mərkəzi Bank - Maaliyəçisən təcrübə proqramı",
    image: "https://old.tecrube.az/wp-content/uploads/2023/04/Home-8.png",
    description:
      "Azərbaycanın yüksək potensiallı gənclərini Mərkəzi Bankçılıq ilə yaxından tanış etmək, işə hazırlıq bacarıqlarını inkişaf etdirmək və praktiki təcrübəni təmin etmək məqsədi ilə Azərbaycan Respublikasının Mərkəzi Bankı “Maliyyəçisən” təcrübə poqramını həyata keçirir. Təcrübə proqramı çərçivəsində gənclər seçilən istiqamət üzrə peşəkarlardan öyrənməklə yanaşı səriştə və bacarıqlarının artırılması üçün müxtəlif bankdaxili təlimlərə cəlb olunur.",
    date: "July - August, 2024",
  },
]

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold text-green-800">Latest News</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((item) => (
          <Link href={`/news/${item.id}`} key={item.id} target="_blank" rel="noopener noreferrer">
            <Card className="h-full overflow-hidden hover:shadow-md transition-transform hover:scale-[1.01]">
              <div className="relative aspect-video">
                <Image
                  src={item.image || "/placeholder.svg?height=200&width=400"}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">{item.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{item.date}</p>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-4">{item.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample data for search
const searchData = {
  events: [
    {
      id: "dream-fest-2025",
      title: "Baku City Circuit 2025",
      image: "https://cdn.bakucitycircuit.com/uploads/news/267/Z1R7yQaUKbsD09nNa6OzqoKUvKteGuLeuqXOJdVc.png",
      description:
        "The 2025 Formula 1 Qatar Airways Azerbaijan Grand Prix is scheduled for September 19–21, 2025, at the Baku City Circuit.",
      type: "event",
    },
    {
      id: "planet-parni",
      title: "Bakı Konfransı 2025",
      image: "https://cdn.iticket.az/event/cover/RnENnGBAkTJR4lXmp67mu3vcw2NVUph7LHrbcQf3.jpg",
      description:
        '5 iyul Opera Studiyasında professor Celal Şengör təqdimatında "Bakı Konfransı 2025" tədbiri baş tutacaq.',
      type: "event",
    },
    {
      id: "la-la-land",
      title: "TECH CELL hakatonu, UFAZ",
      image:
        "https://ufaz-assets.ams3.cdn.digitaloceanspaces.com/website/media/public/images/thumbnail_image.original.format-webp.webp",
      description: "Join the Hackathon and gain one of the best experiences!!",
      type: "event",
    },
    {
      id: "inception",
      title: "SUP VC də Hakaton Həyəcanı",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuiRRLiTIzc3pqlZFt3jVvxqoY3dMhT-hu5Q&s",
      description: "Bu Hakaton tam sənə görədir. Komandanı yığ gəl yarış! registrasiyadan kecmeyi unutmayin.",
      type: "event",
    },
  ],
  venues: [
    {
      id: "crystall-hall",
      title: "Convention Center",
      image:
        "https://i.ibb.co/mrfRjcqv/getlstd-property-photo.jpg",
      description:
        "In Baku, the capital of Azerbaijan, a new conference and congress centre has been created for 4,500 guests. OBERMEYER Project Management GmbH was appointed as Client´s representative and provided project management, design review and construction management services.This futuristic building comprises a central auditorium that is surrounded in circular fashion by a second building section containing 15 conference and meeting rooms, offices and restaurants. The building, designed by COOP Himmelb(l)au, an Austrian firm of architects, comprises a total surface area of almost 60,000 m².The auditorium is equipped with height-adjustable rows of seats and with seating that can be recessed, meaning that the space can accommodate a range of different seating configurations. It has a maximum capacity of 3,500 seats. Impressive: The building has a huge 405 m² multimedia screen. The lobby extends over an area of 1,800 m², the restaurant area covers a further 1,700 m² and the meeting and communication area measures 1,750 m².",
      type: "venue",
    },
    {
      id: "heydar-aliyev-palace",
      title: "Heydar Aliyev Palace",
      image: "https://azerbaijan.travel/fit1600x900/center/pages/714/b684f728-fa9e-46a7-a771-de33785b1554.jpg",
      description:
        "Heydar Aliyev Palace, located in Baku, Azerbaijan, is a prominent cultural and concert venue named after the country's third president.",
      type: "venue",
    },
    {
      id: "academic-national-drama-theatre",
      title: "Academic National Drama Theatre",
      image: "https://asogroup.az/uploads/posts/2023-08/medium/1691151452_aciq-menbe31.jpg",
      description:
        "The Academic National Drama Theatre, located in Baku, Azerbaijan, is a prestigious cultural institution showcasing classical and contemporary plays.",
      type: "venue",
    },
  ],
  news: [
    {
      id: "crystall-hall",
      title: "EduHack 2025 : Innovating The Future of Learning",
      image: "https://nigdeanadoluhaber.com.tr/uploads/nohu-den-azerbaycan-da-hackathon-etkinligi96.webp",
      description:
        "Great Opportunity for Students! EduHack Hackathon was held in Baku Congress Center on 19th and 20th of April.",
      type: "news",
    },
    {
      id: "heydar-aliyev-palace",
      title: "BANM - Imtahan sessiyasina start verildi",
      image: "https://bhos.edu.az/kcfinder/upload/images/xebersekli76.jpg",
      description: "Baki Ali Neft Mektebinde yaz semestri imtahan sessiyasina start verildi!",
      type: "news",
    },
    {
      id: "academic-national-drama-theatre",
      title: "Azərbaycan Universiteti üzrə Brend Tələbələr",
      image: "https://news.unec.edu.az/images/brend_telebe_180325.gif",
      description:
        "AzEdu.az Təhsil Portalı hər il ən aktiv və nümunəvi tələbələri müəyyənləşdirərək, onların bacarıqlarını tanıtmaq, tələbələr arasında sağlam rəqabət mühiti yaratmaq və onları gələcək tələbələrə çatdırmaq məqsədilə son 3 ildir &quot;Brend tələbə&quot; layihəsini həyata keçirir.",
      type: "news",
    },
  ],
}

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [activeTab, setActiveTab] = useState("all")
  const [searchResults, setSearchResults] = useState<{
    all: any[]
    events: any[]
    venues: any[]
    news: any[]
  }>({
    all: [],
    events: [],
    venues: [],
    news: [],
  })

  useEffect(() => {
    if (query) {
      // Search in events
      const eventResults = searchData.events.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()),
      )

      // Search in venues
      const venueResults = searchData.venues.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()),
      )

      // Search in news
      const newsResults = searchData.news.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()),
      )

      // Combine all results
      setSearchResults({
        all: [...eventResults, ...venueResults, ...newsResults],
        events: eventResults,
        venues: venueResults,
        news: newsResults,
      })
    }
  }, [query])

  const totalResults = searchResults.all.length

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-2 text-2xl font-bold">Search Results</h1>
      <p className="mb-6 text-muted-foreground">
        {totalResults} {totalResults === 1 ? "result" : "results"} for "{query}"
      </p>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="all">All ({searchResults.all.length})</TabsTrigger>
          <TabsTrigger value="events">Events ({searchResults.events.length})</TabsTrigger>
          <TabsTrigger value="venues">Venues ({searchResults.venues.length})</TabsTrigger>
          <TabsTrigger value="news">News ({searchResults.news.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          {searchResults.all.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {searchResults.all.map((result, index) => (
                <Link
                  key={`${result.type}-${result.id}-${index}`}
                  href={`/${result.type}s/${result.id}`}
                  {...(result.type === "news" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <Card className="h-full overflow-hidden hover:shadow-md transition-transform hover:scale-[1.01]">
                    <div className="relative aspect-video">
                      <Image
                        src={result.image || "/placeholder.svg?height=200&width=400"}
                        alt={result.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="line-clamp-2">{result.title}</CardTitle>
                      <p className="text-sm text-muted-foreground capitalize">{result.type}</p>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="line-clamp-3">{result.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center py-8 text-muted-foreground">No results found for "{query}"</p>
          )}
        </TabsContent>

        <TabsContent value="events" className="space-y-6">
          {searchResults.events.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {searchResults.events.map((result, index) => (
                <Link key={`event-${result.id}-${index}`} href={`/events/${result.id}`}>
                  <Card className="h-full overflow-hidden hover:shadow-md transition-transform hover:scale-[1.01]">
                    <div className="relative aspect-video">
                      <Image
                        src={result.image || "/placeholder.svg?height=200&width=400"}
                        alt={result.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="line-clamp-2">{result.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="line-clamp-3">{result.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center py-8 text-muted-foreground">No events found for "{query}"</p>
          )}
        </TabsContent>

        <TabsContent value="venues" className="space-y-6">
          {searchResults.venues.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {searchResults.venues.map((result, index) => (
                <Link key={`venue-${result.id}-${index}`} href={`/venues/${result.id}`}>
                  <Card className="h-full overflow-hidden hover:shadow-md transition-transform hover:scale-[1.01]">
                    <div className="relative aspect-video">
                      <Image
                        src={result.image || "/placeholder.svg?height=200&width=400"}
                        alt={result.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="line-clamp-2">{result.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="line-clamp-3">{result.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center py-8 text-muted-foreground">No venues found for "{query}"</p>
          )}
        </TabsContent>

        <TabsContent value="news" className="space-y-6">
          {searchResults.news.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {searchResults.news.map((result, index) => (
                <Link
                  key={`news-${result.id}-${index}`}
                  href={`/news/${result.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card className="h-full overflow-hidden hover:shadow-md transition-transform hover:scale-[1.01]">
                    <div className="relative aspect-video">
                      <Image
                        src={result.image || "/placeholder.svg?height=200&width=400"}
                        alt={result.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="line-clamp-2">{result.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="line-clamp-3">{result.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center py-8 text-muted-foreground">No news found for "{query}"</p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

import { Hero } from '@/components/home/Hero'
import { CountryLogos } from '@/components/home/CountryLogos'
import { FeaturedConsultancies } from '@/components/home/FeaturedConsultancies'
import { TopDestinations } from '@/components/home/TopDestinations'
import { LatestUpdates } from '@/components/home/LatestUpdates'

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto px-6 lg:px-20 py-8">
      <Hero />
      <CountryLogos />
      <FeaturedConsultancies />
      <TopDestinations />
      <LatestUpdates />
    </main>
  )
}

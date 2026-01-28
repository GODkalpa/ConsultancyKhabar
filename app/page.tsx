import { Hero } from '@/components/home/Hero'
import { CountryLogos } from '@/components/home/CountryLogos'
import { FeaturedConsultancies } from '@/components/home/FeaturedConsultancies'
import { IeltsPteConsultancies } from '@/components/home/IeltsPteConsultancies'
import { LatestUpdates } from '@/components/home/LatestUpdates'

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-20 py-6 md:py-8">
      <Hero />
      <CountryLogos />
      <FeaturedConsultancies />
      <IeltsPteConsultancies />
      <LatestUpdates />
    </main>
  )
}

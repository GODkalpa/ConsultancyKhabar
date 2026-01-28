import { ProfileHero } from '@/components/consultancy_profile/ProfileHero'
import { ProfileTabs } from '@/components/consultancy_profile/ProfileTabs'
import { Overview, StatsGrid, ServicesList, CountriesList, LocationMap } from '@/components/consultancy_profile/ProfileContent'

export default function ConsultancyProfilePage({ params }: { params: { slug: string } }) {
    // Use params.slug to fetch data later
    return (
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-4 md:py-8 space-y-8">
            <ProfileHero />
            <ProfileTabs />
            <div className="px-4 space-y-12 pb-20">
                <Overview />
                <StatsGrid />
                <ServicesList />
                <CountriesList />
                <LocationMap />
            </div>
        </div>
    )
}

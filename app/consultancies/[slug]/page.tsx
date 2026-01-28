import { ProfileGlassHero } from '@/components/consultancy_profile/ProfileGlassHero'
import { ProfileBentoStats } from '@/components/consultancy_profile/ProfileBentoStats'
import { ProfileSidebar } from '@/components/consultancy_profile/ProfileSidebar'
import { Overview, ServicesList, CountriesList } from '@/components/consultancy_profile/ProfileContent'
import { client } from '@/lib/sanity/client'
import { groq } from 'next-sanity'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const query = groq`*[_type == "consultancy" && slug.current == $slug][0]{
        name,
        description
    }`
    const consultancy = await client.fetch(query, { slug: params.slug })

    if (!consultancy) {
        return {
            title: 'Consultancy Not Found',
        }
    }

    return {
        title: `${consultancy.name} - Consultancy Profile`,
        description: consultancy.description?.[0]?.children?.[0]?.text || `Learn more about ${consultancy.name}.`,
    }
}

async function getConsultancy(slug: string) {
    const query = groq`*[_type == "consultancy" && slug.current == $slug][0] {
        name,
        "slug": slug.current,
        description,
        logo,
        coverImage,
        verificationBadge,
        citiesServed,
        officeLocations,
        "countries": countries[]->{name, "flag": flagImage.secure_url},
        "services": services[]->{title, description, icon},
        priceRange,
        websiteUrl,
        facebookUrl,
        instagramUrl,
        tiktokUrl,
        phone,
        email,
        googleBusinessProfileUrl,
        googleReviewsUrl,
        rankingScore,
        scoreBreakdown,
        universities,
        classes,
        reviewCount
    }`
    return client.fetch(query, { slug })
}

export default async function ConsultancyProfilePage({ params }: { params: { slug: string } }) {
    const consultancy = await getConsultancy(params.slug)

    if (!consultancy) {
        return notFound()
    }

    return (
        <div className="min-h-screen bg-white pb-24 selection:bg-blue-100 selection:text-blue-900">
            {/* 1. Immersive Glass Hero */}
            <ProfileGlassHero data={consultancy} />

            {/* 2. Bento Grid Stats (Overlapping Hero) */}
            <ProfileBentoStats data={consultancy} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 md:mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Left Main Content */}
                    <div className="lg:col-span-8 space-y-16 md:space-y-24">
                        <Overview
                            description={consultancy.description}
                            universities={consultancy.universities}
                            classes={consultancy.classes}
                        />
                        <ServicesList services={consultancy.services} />
                        <CountriesList countries={consultancy.countries} />

                        {/* Empty Space for visual breathing room at bottom */}
                        <div className="h-20" />
                    </div>

                    {/* Right Sticky Sidebar */}
                    <div className="lg:col-span-4 hidden lg:block">
                        <ProfileSidebar consultancy={consultancy} />
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar (Bottom or specific implementation) - logic usually handled in responsive sidebar component */}
            <div className="lg:hidden mt-20 px-4">
                <ProfileSidebar consultancy={consultancy} />
            </div>
        </div>
    )
}

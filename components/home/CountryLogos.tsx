import Link from 'next/link'
import { getAllCountries } from '@/lib/sanity/api'
import { Country } from '@/lib/sanity/types'

export async function CountryLogos() {
    let allCountries = await getAllCountries()

    // Fallback data if Sanity returns nothing (for development/preview)
    if (!allCountries || allCountries.length === 0) {
        allCountries = [
            { _id: '1', name: 'Australia', slug: { current: 'australia' }, flagImage: { url: 'https://flagcdn.com/au.svg' } } as Country,
            { _id: '2', name: 'USA', slug: { current: 'usa' }, flagImage: { url: 'https://flagcdn.com/us.svg' } } as Country,
            { _id: '3', name: 'Canada', slug: { current: 'canada' }, flagImage: { url: 'https://flagcdn.com/ca.svg' } } as Country,
            { _id: '4', name: 'UK', slug: { current: 'uk' }, flagImage: { url: 'https://flagcdn.com/gb.svg' } } as Country,
            { _id: '5', name: 'Japan', slug: { current: 'japan' }, flagImage: { url: 'https://flagcdn.com/jp.svg' } } as Country,
            { _id: '6', name: 'New Zealand', slug: { current: 'new-zealand' }, flagImage: { url: 'https://flagcdn.com/nz.svg' } } as Country,
            { _id: '7', name: 'South Korea', slug: { current: 'south-korea' }, flagImage: { url: 'https://flagcdn.com/kr.svg' } } as Country,
            { _id: '8', name: 'Europe', slug: { current: 'europe' }, flagImage: { url: 'https://flagcdn.com/eu.svg' } } as Country,
        ]
    }

    const TARGET_COUNTRIES = ['Australia', 'USA', 'Canada', 'United Kingdom', 'UK', 'Japan', 'New Zealand', 'South Korea', 'Europe']

    // Sort logic
    const countries = allCountries
        .sort((a, b) => {
            const indexA = TARGET_COUNTRIES.findIndex(t => a.name.includes(t))
            const indexB = TARGET_COUNTRIES.findIndex(t => b.name.includes(t))

            if (indexA !== -1 && indexB !== -1) return indexA - indexB
            if (indexA !== -1) return -1
            if (indexB !== -1) return 1
            return a.name.localeCompare(b.name)
        })
        .slice(0, 8)

    if (countries.length === 0) return null

    return (
        <section className="mb-20 pt-8 border-t border-slate-100">
            <div className="text-center mb-8">
                <p className="text-slate-500 font-medium">Trusted by students applying to</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-12 gap-y-8 transition-all duration-500">
                {countries.map((country) => (
                    <Link
                        key={country._id}
                        href={`/countries/${country.slug?.current || ''}`}
                        className="group flex flex-col items-center gap-3 hover:scale-110 transition-transform duration-300"
                        title={country.name}
                    >
                        <div className="relative w-16 h-12 shadow-sm rounded-md overflow-hidden border border-slate-200 bg-slate-50 flex items-center justify-center">
                            {country.flagImage?.url ? (
                                <img
                                    src={country.flagImage.url}
                                    alt={country.name}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <span className="text-xs font-bold text-slate-400">{country.name.substring(0, 2).toUpperCase()}</span>
                            )}
                        </div>
                        <span className="text-sm font-semibold text-slate-600 group-hover:text-primary transition-colors uppercase tracking-wider">{country.name}</span>
                    </Link>
                ))}
            </div>
        </section>
    )
}

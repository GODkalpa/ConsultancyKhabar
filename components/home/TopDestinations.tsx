import Link from 'next/link'
import { Globe, ArrowRight } from 'lucide-react'
import { getSiteSettings, getAllCountries } from '@/lib/sanity/api'
import { Country } from '@/lib/sanity/types'

export async function TopDestinations() {
    // Try to get featured countries from site settings first
    const siteSettings = await getSiteSettings()
    let countries: Country[] = siteSettings?.featuredCountries || []

    // If no featured countries in settings, get all featured ones
    if (countries.length === 0) {
        const allCountries = await getAllCountries()
        countries = allCountries.filter(c => c.isFeatured).slice(0, 4)

        // If still no featured, just take first 4
        if (countries.length === 0) {
            countries = allCountries.slice(0, 4)
        }
    }

    return (
        <section className="mb-24">
            <div className="flex items-end justify-between mb-10">
                <h2 className="text-3xl font-bold text-slate-900 font-heading tracking-tight">Top Study Destinations</h2>
                <Link href="/countries" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all group bg-primary/5 px-4 py-2 rounded-lg hover:bg-primary/10">
                    View All <ArrowRight className="h-4 w-4" />
                </Link>
            </div>

            {countries.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {countries.map((country) => (
                        <Link
                            key={country._id}
                            href={`/countries/${country.slug?.current || ''}`}
                            className="relative group h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            {country.flagImage?.url ? (
                                <img
                                    alt={country.name}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    src={country.flagImage.url}
                                />
                            ) : (
                                <div className="absolute inset-0 bg-gradient-to-br from-primary to-slate-700 flex items-center justify-center">
                                    <Globe className="h-20 w-20 text-white/30" />
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-white text-2xl font-bold font-heading mb-1">{country.name}</h3>
                                {country.intakes && country.intakes.length > 0 && (
                                    <div className="flex items-center gap-2">
                                        <div className="h-0.5 w-6 bg-accent"></div>
                                        <p className="text-slate-200 text-sm font-medium">{country.intakes.join(', ')}</p>
                                    </div>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className="text-center py-16 bg-slate-50 rounded-2xl">
                    <div className="size-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Globe className="h-8 w-8 text-slate-400" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-700 mb-2">No Destinations Yet</h3>
                    <p className="text-slate-500">Study destinations will appear here once added.</p>
                </div>
            )}
        </section>
    )
}

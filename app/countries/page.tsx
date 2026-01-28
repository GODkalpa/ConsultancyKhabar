import Link from 'next/link'
import { Users, GraduationCap, Calendar, ArrowRight, Globe } from 'lucide-react'
import { getAllCountries } from '@/lib/sanity/api'
import { Country } from '@/lib/sanity/types'

export default async function CountriesPage() {
    const countries: Country[] = await getAllCountries()

    return (
        <main className="max-w-[1440px] mx-auto px-6 lg:px-20 py-12">
            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-slate-900 mb-4">
                    Study Destinations
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Explore popular study abroad destinations. Find the perfect country for your education and career goals.
                </p>
            </div>

            {/* Countries Grid */}
            {countries.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {countries.map((country) => (
                        <Link
                            key={country._id}
                            href={`/countries/${country.slug?.current || ''}`}
                            className="group relative overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Country Image or Flag */}
                            <div className="h-32 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center overflow-hidden">
                                {country.flagImage?.url ? (
                                    <img
                                        src={country.flagImage.url}
                                        alt={country.name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <Globe className="h-12 w-12 text-slate-300" />
                                )}
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 font-heading text-slate-900 group-hover:text-primary transition-colors">
                                    {country.name}
                                </h3>

                                {country.intakes && country.intakes.length > 0 && (
                                    <p className="text-sm text-slate-500 leading-relaxed mb-4">
                                        Intakes: {country.intakes.join(', ')}
                                    </p>
                                )}

                                <div className="flex items-center justify-between text-xs">
                                    {country.isFeatured && (
                                        <span className="flex items-center gap-1 text-primary font-semibold">
                                            Featured
                                        </span>
                                    )}
                                    <span className="flex items-center gap-1 text-primary font-semibold group-hover:translate-x-1 transition-transform ml-auto">
                                        Learn More <ArrowRight className="h-3.5 w-3.5" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <div className="size-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Globe className="h-10 w-10 text-slate-400" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-700 mb-2">No Countries Available</h3>
                    <p className="text-slate-500">Countries will appear here once added in the CMS.</p>
                </div>
            )}

            {/* Info Section */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 bg-slate-50 rounded-2xl text-center">
                    <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                        <GraduationCap className="h-7 w-7" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 font-heading">World-Class Education</h3>
                    <p className="text-sm text-slate-600">Access top universities and programs recognized globally.</p>
                </div>
                <div className="p-8 bg-slate-50 rounded-2xl text-center">
                    <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                        <Calendar className="h-7 w-7" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 font-heading">Multiple Intakes</h3>
                    <p className="text-sm text-slate-600">Flexible start dates throughout the year.</p>
                </div>
                <div className="p-8 bg-slate-50 rounded-2xl text-center">
                    <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                        <Users className="h-7 w-7" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 font-heading">Verified Consultants</h3>
                    <p className="text-sm text-slate-600">Connect with trusted experts for each destination.</p>
                </div>
            </div>
        </main>
    )
}

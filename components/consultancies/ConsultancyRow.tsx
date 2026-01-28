import Link from 'next/link'
import { BadgeCheck, Star, MapPin, Building2, ChevronRight } from 'lucide-react'
import { Consultancy } from '@/lib/sanity/types'
import { cn } from '@/lib/utils'

interface ConsultancyRowProps {
    consultancy: Consultancy
}

export function ConsultancyRow({ consultancy }: ConsultancyRowProps) {
    // Convert ranking score to display rating
    const rating = consultancy.rankingScore ? (consultancy.rankingScore / 20).toFixed(1) : null

    // Generate initials if no logo
    const initials = consultancy.name
        .split(' ')
        .map(word => word[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()

    // Get primary location
    const location = consultancy.citiesServed?.[0] || 'Kathmandu'

    // Get countries for tags (max 4)
    const countries = consultancy.countries?.slice(0, 4).map(c => c.name) || []

    return (
        <Link
            href={`/consultancies/${consultancy.slug?.current || ''}`}
            className="group block bg-white rounded-xl border border-slate-200 p-5 hover:border-primary/50 hover:shadow-md transition-all duration-200"
        >
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">

                {/* 1. Logo Section */}
                <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center overflow-hidden">
                        {consultancy.logo?.url ? (
                            <img
                                className="object-contain w-full h-full p-2"
                                src={consultancy.logo.url}
                                alt={consultancy.name}
                            />
                        ) : (
                            <span className="text-slate-400 font-bold text-lg">{initials}</span>
                        )}
                    </div>
                </div>

                {/* 2. Main Info */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold text-slate-900 truncate group-hover:text-primary transition-colors">
                            {consultancy.name}
                        </h3>
                        {consultancy.verificationBadge === 'verified' && (
                            <BadgeCheck className="h-5 w-5 text-blue-500 fill-blue-50" />
                        )}
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
                        <div className="flex items-center gap-1.5">
                            <MapPin className="h-4 w-4 text-slate-400" />
                            <span>{location}</span>
                        </div>
                        {rating && (
                            <div className="flex items-center gap-1.5">
                                <Star className="h-4 w-4 text-orange-400 fill-orange-400" />
                                <span className="font-semibold text-slate-700">{rating}</span>
                                <span className="text-slate-400">Rating</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* 3. Tags / Services (Desktop Only) */}
                <div className="hidden lg:flex flex-col items-end gap-2 text-right">
                    <div className="flex flex-wrap justify-end gap-2">
                        {countries.map(country => (
                            <span key={country} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                                {country}
                            </span>
                        ))}
                        {(consultancy.countries?.length || 0) > 4 && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-500">
                                +{(consultancy.countries?.length || 0) - 4}
                            </span>
                        )}
                    </div>
                </div>

                {/* 4. Action */}
                <div className="flex-shrink-0 md:pl-4 md:border-l md:border-slate-100 h-full flex items-center">
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                        <ChevronRight className="h-5 w-5" />
                    </div>
                </div>
            </div>
        </Link>
    )
}

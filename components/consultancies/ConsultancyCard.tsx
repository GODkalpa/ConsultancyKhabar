import Link from 'next/link'
import { BadgeCheck, Star, MapPin, ArrowRight } from 'lucide-react'
import { Consultancy } from '@/lib/sanity/types'
import { cn } from '@/lib/utils'

interface ConsultancyCardProps {
    consultancy: Consultancy
}

// Deterministic gradient generator based on name
function getGradient(name: string) {
    const gradients = [
        'from-blue-500 to-cyan-400',
        'from-purple-500 to-indigo-400',
        'from-pink-500 to-rose-400',
        'from-orange-400 to-amber-300',
        'from-emerald-400 to-teal-300',
        'from-indigo-500 to-purple-500',
        'from-cyan-500 to-blue-500',
        'from-rose-500 to-orange-400',
    ]
    const index = name.length % gradients.length
    return gradients[index]
}

export function ConsultancyCard({ consultancy }: ConsultancyCardProps) {
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

    // Get countries for tags (max 3)
    const countries = consultancy.countries?.slice(0, 3).map(c => c.name) || []

    const gradient = getGradient(consultancy.name)

    return (
        <Link
            href={`/consultancies/${consultancy.slug?.current || ''}`}
            className="group relative bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 block h-full flex flex-col"
        >
            {/* Header / Cover */}
            <div className={cn("h-24 bg-gradient-to-r relative", gradient)}>
                {/* Optional pattern overlay */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
            </div>

            {/* Profile Section */}
            <div className="px-5 pb-5 flex-1 flex flex-col">
                {/* Logo & Rating Row */}
                <div className="flex justify-between items-end -mt-8 mb-4">
                    <div className="relative">
                        <div className="w-16 h-16 rounded-xl bg-white p-1 shadow-sm border border-slate-100 group-hover:shadow-md transition-shadow">
                            <div className="w-full h-full rounded-lg bg-slate-50 flex items-center justify-center overflow-hidden">
                                {consultancy.logo?.url ? (
                                    <img
                                        className="object-contain w-full h-full p-1"
                                        src={consultancy.logo.url}
                                        alt={consultancy.name}
                                    />
                                ) : (
                                    <span className="text-primary font-bold text-lg">{initials}</span>
                                )}
                            </div>
                        </div>
                        {consultancy.verificationBadge === 'verified' && (
                            <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white rounded-full p-0.5 border-2 border-white shadow-sm" title="Verified Partner">
                                <BadgeCheck className="h-3 w-3" />
                            </div>
                        )}
                    </div>

                    {rating && (
                        <div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-lg border border-slate-100 shadow-sm">
                            <Star className="h-3.5 w-3.5 text-orange-400 fill-orange-400" />
                            <span className="text-xs font-bold text-slate-800">{rating}</span>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="flex-1">
                    <h3 className="font-bold text-lg text-slate-900 mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {consultancy.name}
                    </h3>

                    <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-4">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{location}, Nepal</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                        {countries.map(country => (
                            <span key={country} className="text-[11px] font-medium text-slate-600 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                                {country}
                            </span>
                        ))}
                        {(consultancy.countries?.length || 0) > 3 && (
                            <span className="text-[11px] font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
                                +{(consultancy.countries?.length || 0) - 3}
                            </span>
                        )}
                    </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-50 mt-auto flex items-center justify-between text-xs font-medium text-slate-500 group-hover:text-blue-600 transition-colors">
                    <span>View Details</span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </Link>
    )
}

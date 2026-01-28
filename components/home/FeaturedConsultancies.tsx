import Link from 'next/link'
import { ArrowRight, Star, StarHalf, BadgeCheck, Building2 } from 'lucide-react'
import { AnimatedIcon } from '@/components/ui/AnimatedIcon'
import { getSiteSettings, getAllConsultancies } from '@/lib/sanity/api'
import { Consultancy } from '@/lib/sanity/types'

type ConsultancyCardProps = {
    consultancy: Consultancy
}

function ConsultancyCard({ consultancy }: ConsultancyCardProps) {
    // Generate initials from name
    const initials = consultancy.name
        .split(' ')
        .map(word => word[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()

    // Convert ranking score (0-100) to a 5-star rating
    const rating = consultancy.rankingScore ? (consultancy.rankingScore / 20).toFixed(1) : '0.0'

    return (
        <Link
            href={`/consultancies/${consultancy.slug?.current || ''}`}
            className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-[0_20px_40px_-5px_rgb(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1"
        >
            <div className="aspect-video bg-slate-50 flex items-center justify-center relative overflow-hidden">
                {consultancy.logo?.url ? (
                    <img
                        src={consultancy.logo.url}
                        alt={consultancy.name}
                        className="w-full h-full object-contain p-4"
                    />
                ) : (
                    <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500">
                        <span className="text-primary font-black text-2xl font-heading">{initials}</span>
                    </div>
                )}
                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0F172A_1px,transparent_1px)] [background-size:16px_16px]"></div>

                {consultancy.verificationBadge === 'verified' && (
                    <span className="absolute top-4 right-4 bg-success text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm font-heading tracking-wide">
                        <AnimatedIcon icon={BadgeCheck} className="h-3.5 w-3.5 text-white" /> VERIFIED
                    </span>
                )}
            </div>
            <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-slate-900 group-hover:text-primary transition-colors font-heading leading-tight">{consultancy.name}</h3>
                <div className="flex items-center gap-1 text-yellow-400 mb-4">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <StarHalf className="h-4 w-4 fill-current" />
                    <span className="text-sm text-slate-500 font-medium ml-2 relative top-[1px]">{rating}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                    {consultancy.citiesServed?.slice(0, 3).map(city => (
                        <span key={city} className="text-xs bg-slate-50 text-slate-600 font-medium px-2.5 py-1 rounded-md border border-slate-100">{city}</span>
                    ))}
                </div>
            </div>
        </Link>
    )
}

export async function FeaturedConsultancies() {
    // Try to get featured consultancies from site settings first
    const siteSettings = await getSiteSettings()
    let consultancies: Consultancy[] = siteSettings?.featuredConsultancies || []

    // If no featured consultancies in settings, get all and take first 4
    if (consultancies.length === 0) {
        const allConsultancies = await getAllConsultancies()
        consultancies = allConsultancies
            .filter(c => c.isFeatured || c.verificationBadge === 'verified')
            .slice(0, 4)
    }

    return (
        <section className="mb-24">
            <div className="flex items-end justify-between mb-10">
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 font-heading tracking-tight mb-2">Featured Consultancies</h2>
                    <p className="text-slate-500 text-lg">Top rated expert agencies in study abroad counseling</p>
                </div>
                <Link href="/consultancies" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all group bg-primary/5 px-4 py-2 rounded-lg hover:bg-primary/10">
                    View All Agencies <ArrowRight className="h-4 w-4" />
                </Link>
            </div>

            {consultancies.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {consultancies.slice(0, 4).map((consultancy) => (
                        <ConsultancyCard key={consultancy._id} consultancy={consultancy} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16 bg-slate-50 rounded-2xl">
                    <div className="size-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Building2 className="h-8 w-8 text-slate-400" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-700 mb-2">No Consultancies Yet</h3>
                    <p className="text-slate-500">Featured consultancies will appear here once added.</p>
                </div>
            )}
        </section>
    )
}

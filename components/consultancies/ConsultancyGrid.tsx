import Link from 'next/link'
import { BadgeCheck, Star, Building2 } from 'lucide-react'
import { AnimatedIcon } from '@/components/ui/AnimatedIcon'
import { getAllConsultancies } from '@/lib/sanity/api'
import { Consultancy } from '@/lib/sanity/types'

export async function ConsultancyGrid() {
    const consultancies: Consultancy[] = await getAllConsultancies()

    if (consultancies.length === 0) {
        return (
            <div className="text-center py-16 bg-slate-50 rounded-2xl mb-8">
                <div className="size-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Building2 className="h-10 w-10 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-700 mb-2">No Consultancies Found</h3>
                <p className="text-slate-500">Consultancies will appear here once added in the CMS.</p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {consultancies.map((consultancy) => {
                // Convert ranking score to display rating
                const rating = consultancy.rankingScore ? (consultancy.rankingScore / 20).toFixed(1) : null

                // Generate initials if no logo
                const initials = consultancy.name
                    .split(' ')
                    .map(word => word[0])
                    .slice(0, 2)
                    .join('')
                    .toUpperCase()

                // Combine cities and countries for tags
                const tags = [
                    ...(consultancy.citiesServed?.slice(0, 2) || []),
                    ...(consultancy.countries?.slice(0, 2).map(c => c.name) || [])
                ].slice(0, 4)

                return (
                    <div key={consultancy._id} className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-[0_12px_24px_rgb(0,0,0,0.06)] transition-all duration-300 group flex flex-col hover:-translate-y-1">
                        <div className="flex items-start justify-between mb-6">
                            <div className="w-20 h-20 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center overflow-hidden shadow-sm group-hover:scale-105 transition-transform duration-500">
                                {consultancy.logo?.url ? (
                                    <img
                                        className="object-contain w-full h-full p-2"
                                        src={consultancy.logo.url}
                                        alt={consultancy.name}
                                    />
                                ) : (
                                    <span className="text-primary font-black text-xl font-heading">{initials}</span>
                                )}
                            </div>
                            {consultancy.verificationBadge === 'verified' && (
                                <span className="flex items-center gap-1.5 bg-success/10 text-success px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wide border border-success/10 shadow-sm">
                                    <AnimatedIcon icon={BadgeCheck} className="h-3.5 w-3.5" /> Verified
                                </span>
                            )}
                        </div>
                        <h3 className="font-bold text-xl mb-2 text-slate-900 group-hover:text-primary transition-colors font-heading leading-tight">{consultancy.name}</h3>
                        {rating && (
                            <div className="flex items-center gap-1.5 mb-5 bg-orange-50/50 w-fit px-3 py-1 rounded-full border border-orange-100">
                                <Star className="h-4 w-4 text-orange-400 fill-orange-400" />
                                <span className="text-sm font-bold text-slate-900">{rating}</span>
                                <span className="text-slate-500 text-xs font-medium">score</span>
                            </div>
                        )}
                        {tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-8">
                                {tags.map(tag => (
                                    <span key={tag} className="text-[11px] font-semibold bg-slate-50 text-slate-600 px-2.5 py-1 rounded-md border border-slate-100">{tag}</span>
                                ))}
                            </div>
                        )}
                        <div className="mt-auto">
                            <Link
                                href={`/consultancies/${consultancy.slug?.current || ''}`}
                                className="w-full bg-slate-900 hover:bg-primary text-white py-3.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-slate-900/10 hover:shadow-primary/20 flex items-center justify-center gap-2 group/btn"
                            >
                                View Profile
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

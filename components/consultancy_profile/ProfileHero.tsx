import { BadgeCheck, MapPin, Star } from 'lucide-react'
import { AnimatedIcon } from '@/components/ui/AnimatedIcon'

interface ProfileHeroProps {
    data: {
        name: string
        logo?: any
        coverImage?: any
        verificationBadge?: string
        rankingScore?: number
        officeLocations?: { city: string }[]
    }
}

export function ProfileHero({ data }: ProfileHeroProps) {
    const coverImageUrl = data.coverImage?.secure_url || 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop'
    const logoUrl = data.logo?.secure_url

    return (
        <section className="relative group">
            {/* Cover Image with reliable aspect ratio and premium gradient */}
            <div className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-md">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                    style={{ backgroundImage: `url("${coverImageUrl}")` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
            </div>

            {/* Profile Info Overlay/Container */}
            <div className="relative px-6 -mt-20 md:-mt-24 z-10">
                <div className="flex flex-col md:flex-row items-end gap-6 text-white md:text-slate-900">
                    {/* Logo Box */}
                    <div className="size-32 md:size-40 shrink-0 bg-white rounded-2xl shadow-2xl p-1.5 ring-4 ring-white/50 backdrop-blur-sm">
                        <div className="w-full h-full rounded-xl overflow-hidden bg-white border border-slate-100 flex items-center justify-center">
                            {logoUrl ? (
                                <img src={logoUrl} alt={`${data.name} Logo`} className="w-full h-full object-contain p-2" />
                            ) : (
                                <span className="text-4xl font-bold text-slate-300">{data.name.charAt(0)}</span>
                            )}
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 pb-2 md:pb-6 text-center md:text-left w-full">
                        <div className="flex flex-col md:flex-start gap-2">
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                                <h1 className="text-3xl md:text-5xl font-black font-heading text-slate-900 tracking-tight drop-shadow-sm md:drop-shadow-none">
                                    {data.name}
                                </h1>
                                {(data.verificationBadge === 'verified' || data.verificationBadge === 'basic') && (
                                    <span className="inline-flex items-center gap-1.5 bg-blue-600 text-white px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-lg shadow-blue-500/30">
                                        <BadgeCheck className="h-3.5 w-3.5" />
                                        Verified
                                    </span>
                                )}
                            </div>

                            <p className="text-slate-600 font-medium text-lg max-w-2xl hidden md:block">
                                Your trusted partner for global education and career success.
                            </p>

                            {/* Mobile only text color adjustment since it's not over image anymore in this layout, but if it wraps... 
                                 Actually keeping text color consistency. For the 'End' alignment, on mobile it pushes down.
                             */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

import { BadgeCheck, MapPin, Star, Globe } from 'lucide-react'
import { AnimatedIcon } from '@/components/ui/AnimatedIcon'

interface ProfileGlassHeroProps {
    data: {
        name: string
        logo?: any
        coverImage?: any
        verificationBadge?: string
        rankingScore?: number
        officeLocations?: { city: string }[]
        websiteUrl?: string
    }
}

export function ProfileGlassHero({ data }: ProfileGlassHeroProps) {
    const coverImageUrl = data.coverImage?.secure_url || 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop'
    const logoUrl = data.logo?.secure_url

    return (
        <section className="relative w-full min-h-[420px] md:h-[600px] md:min-h-0 overflow-hidden rounded-b-[2.5rem] md:rounded-b-[4rem] shadow-2xl shadow-slate-200">
            {/* Background Layer with Parallax-like feel */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url("${coverImageUrl}")` }}
            >
                {/* Modern Dark Overlay for text contrast */}
                <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/80" />
            </div>

            <div className="absolute inset-0 flex flex-col justify-end pb-8 md:pb-20 px-4 md:px-12 max-w-7xl mx-auto w-full">

                {/* Floating Glass Card */}
                <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] shadow-2xl ring-1 ring-white/10 overflow-hidden group hover:bg-white/15 transition-all duration-500">

                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                    <div className="flex flex-col md:flex-row items-center md:items-end gap-5 md:gap-10 relative z-10">
                        {/* Logo */}
                        <div className="size-20 md:size-40 rounded-full md:rounded-[2rem] bg-white shadow-xl flex items-center justify-center p-2 shrink-0">
                            {logoUrl ? (
                                <img src={logoUrl} alt={data.name} className="w-full h-full object-contain rounded-full md:rounded-none" />
                            ) : (
                                <span className="text-2xl md:text-4xl font-bold text-slate-300">{data.name.charAt(0)}</span>
                            )}
                        </div>

                        {/* Text Info */}
                        <div className="flex-1 text-center md:text-left space-y-3 px-2 md:px-0">
                            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
                                <h1 className="text-2xl md:text-5xl lg:text-6xl font-black text-white tracking-tight drop-shadow-lg font-heading leading-tight">
                                    {data.name}
                                </h1>
                                {(data.verificationBadge === 'verified' || data.verificationBadge === 'basic') && (
                                    <div className="px-3 py-1 bg-blue-500/80 backdrop-blur-md text-white rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest border border-blue-400/50 flex items-center gap-1.5 shadow-lg shadow-blue-500/20">
                                        <BadgeCheck className="w-3.5 h-3.5" />
                                        Verified
                                    </div>
                                )}
                            </div>

                            <p className="text-lg md:text-xl !text-white font-medium max-w-2xl drop-shadow-md leading-relaxed">
                                Premium educational consultancy helping students achieve their global dreams.
                            </p>

                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
                                {data.officeLocations?.[0] && (
                                    <div className="flex items-center gap-2 text-white/90 bg-black/20 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
                                        <MapPin className="w-4 h-4 text-emerald-400" />
                                        <span className="text-sm font-medium">{data.officeLocations[0].city}</span>
                                    </div>
                                )}
                                {data.websiteUrl && (
                                    <a href={data.websiteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/90 bg-black/20 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md hover:bg-white/20 transition-colors">
                                        <Globe className="w-4 h-4 text-blue-400" />
                                        <span className="text-sm font-medium">Visit Website</span>
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Rating Circle (Desktop) */}
                        <div className="hidden lg:flex flex-col items-center justify-center size-32 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shrink-0">
                            <span className="text-4xl font-black text-white">{data.rankingScore ? (data.rankingScore / 20).toFixed(1) : '4.8'}</span>
                            <div className="flex gap-0.5 mt-1">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />)}
                            </div>
                            <span className="text-[10px] text-slate-300 uppercase tracking-widest mt-1">Rating</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

import Link from 'next/link'
import { ArrowRight, Star, StarHalf, BadgeCheck } from 'lucide-react'
import { AnimatedIcon } from '@/components/ui/AnimatedIcon'

type ConsultancyCardProps = {
    name: string
    initials: string
    rating: number
    reviews: number
    cities: string[]
}

function ConsultancyCard({ name, initials, rating, reviews, cities }: ConsultancyCardProps) {
    return (
        <div className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-[0_20px_40px_-5px_rgb(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1">
            <div className="aspect-video bg-slate-50 flex items-center justify-center relative overflow-hidden">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500">
                    <span className="text-primary font-black text-2xl font-heading">{initials}</span>
                </div>
                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0F172A_1px,transparent_1px)] [background-size:16px_16px]"></div>

                <span className="absolute top-4 right-4 bg-success text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm font-heading tracking-wide">
                    <AnimatedIcon icon={BadgeCheck} className="h-3.5 w-3.5 text-white" /> VERIFIED
                </span>
            </div>
            <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-slate-900 group-hover:text-primary transition-colors font-heading leading-tight">{name}</h3>
                <div className="flex items-center gap-1 text-yellow-400 mb-4">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <StarHalf className="h-4 w-4 fill-current" />
                    <span className="text-sm text-slate-500 font-medium ml-2 relative top-[1px]">{rating} <span className="text-slate-300 mx-1">•</span> {reviews} reviews</span>
                </div>
                <div className="flex flex-wrap gap-2">
                    {cities.map(city => (
                        <span key={city} className="text-xs bg-slate-50 text-slate-600 font-medium px-2.5 py-1 rounded-md border border-slate-100">{city}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export function FeaturedConsultancies() {
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <ConsultancyCard name="Elite Consultancy" initials="EC" rating={4.5} reviews={120} cities={['Kathmandu', 'Pokhara']} />
                <ConsultancyCard name="Global Ambassadors" initials="GA" rating={4.9} reviews={85} cities={['Lalitpur', 'Chitwan']} />
                <ConsultancyCard name="Vision Study Abroad" initials="VS" rating={4.2} reviews={210} cities={['Kathmandu', 'Butwal']} />
                <ConsultancyCard name="Nepal Pathways" initials="NP" rating={4.6} reviews={56} cities={['Kathmandu', 'Biratnagar']} />
            </div>
        </section>
    )
}

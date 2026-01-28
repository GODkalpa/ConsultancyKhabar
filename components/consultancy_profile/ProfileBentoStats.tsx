import { Trophy, Users, GraduationCap, MapPin } from 'lucide-react'

interface ProfileBentoStatsProps {
    data: {
        rankingScore?: number
        reviewCount?: number
        universities?: string[]
        officeLocations?: any[]
        citiesServed?: string[]
    }
}

export function ProfileBentoStats({ data }: ProfileBentoStatsProps) {
    const stats = [
        {
            label: "Global Ranking",
            value: data.rankingScore ? `#${100 - data.rankingScore}` : "Top 10",
            icon: Trophy,
        },
        {
            label: "Partner Unis",
            value: data.universities?.length ? `${data.universities.length}+` : "50+",
            icon: GraduationCap,
        },
        {
            label: "Students",
            value: "2.5k+",
            icon: Users,
        },
        {
            label: "Experience",
            value: "12+ Years",
            icon: MapPin,
        }
    ]

    return (
        <section className="relative z-20 max-w-7xl mx-auto px-4 md:px-12 mt-6 md:-mt-10 mb-12 md:mb-20">
            {/* Unified Bar Design */}
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/40 border border-slate-100 p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 items-center">
                {stats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row items-center md:gap-4 md:border-r md:last:border-r-0 border-slate-100 md:pr-4 last:pr-0 text-center md:text-left">
                        <div className="p-3 bg-slate-50 rounded-xl text-slate-900 shrink-0 mb-3 md:mb-0">
                            <stat.icon className="w-5 h-5 md:w-6 md:h-6 stroke-[1.5]" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl md:text-2xl font-bold text-slate-900 leading-none tracking-tight">
                                {stat.value}
                            </span>
                            <span className="text-[10px] md:text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1.5">
                                {stat.label}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

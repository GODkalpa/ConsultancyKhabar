import Link from 'next/link'
import { Users, GraduationCap, Calendar, ArrowRight } from 'lucide-react'

// Mock data - will be replaced with Sanity fetch
const countries = [
    { name: 'Australia', slug: 'australia', consultantCount: 45, flagEmoji: '🇦🇺', description: 'World-class universities and vibrant multicultural cities.', intakes: ['February', 'July'] },
    { name: 'Canada', slug: 'canada', consultantCount: 38, flagEmoji: '🇨🇦', description: 'Excellent post-study work opportunities and quality of life.', intakes: ['September', 'January', 'May'] },
    { name: 'United States', slug: 'united-states', consultantCount: 32, flagEmoji: '🇺🇸', description: "Home to the world's top-ranked universities and diverse programs.", intakes: ['Fall', 'Spring'] },
    { name: 'United Kingdom', slug: 'united-kingdom', consultantCount: 28, flagEmoji: '🇬🇧', description: 'Rich academic heritage with globally recognized degrees.', intakes: ['September', 'January'] },
    { name: 'Japan', slug: 'japan', consultantCount: 22, flagEmoji: '🇯🇵', description: 'Cutting-edge technology and unique cultural experience.', intakes: ['April', 'October'] },
    { name: 'Germany', slug: 'germany', consultantCount: 18, flagEmoji: '🇩🇪', description: 'Free education at public universities and strong economy.', intakes: ['Winter', 'Summer'] },
    { name: 'New Zealand', slug: 'new-zealand', consultantCount: 15, flagEmoji: '🇳🇿', description: 'Safe, welcoming environment with excellent work-study balance.', intakes: ['February', 'July'] },
    { name: 'South Korea', slug: 'south-korea', consultantCount: 12, flagEmoji: '🇰🇷', description: 'Growing hub for technology and entertainment industries.', intakes: ['March', 'September'] },
]

export default function CountriesPage() {
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {countries.map((country) => (
                    <Link
                        key={country.slug}
                        href={`/countries/${country.slug}`}
                        className="group relative overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                        {/* Flag Emoji as Hero */}
                        <div className="h-32 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center text-6xl">
                            {country.flagEmoji}
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 font-heading text-slate-900 group-hover:text-primary transition-colors">
                                {country.name}
                            </h3>
                            <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">
                                {country.description}
                            </p>

                            <div className="flex items-center justify-between text-xs">
                                <span className="flex items-center gap-1 text-slate-600">
                                    <Users className="h-3.5 w-3.5" /> {country.consultantCount} consultants
                                </span>
                                <span className="flex items-center gap-1 text-primary font-semibold group-hover:translate-x-1 transition-transform">
                                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

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

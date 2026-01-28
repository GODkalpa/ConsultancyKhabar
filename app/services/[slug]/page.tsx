import Link from 'next/link'
import { ArrowLeft, BadgeCheck, MapPin, Star, BookOpen } from 'lucide-react'
import { getService, getConsultanciesByService } from '@/lib/sanity/api'
import { notFound } from 'next/navigation'

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const service = await getService(slug)

    if (!service) {
        notFound()
    }

    // Fetch consultancies that offer this service
    const relatedConsultancies = await getConsultanciesByService(service._id)

    return (
        <main className="max-w-[1440px] mx-auto px-6 lg:px-20 py-12">
            {/* Back Link */}
            <Link href="/services" className="inline-flex items-center gap-2 text-slate-600 hover:text-primary mb-8 font-medium transition-colors">
                <ArrowLeft className="h-4 w-4" /> Back to Services
            </Link>

            {/* Header */}
            <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-slate-900 mb-4">
                    {service.title}
                </h1>
                <p className="text-lg text-slate-600 max-w-3xl">
                    {service.description}
                </p>
            </div>

            {/* Related Consultancies */}
            <section>
                <h2 className="text-2xl font-bold font-heading text-slate-900 mb-6 border-l-4 border-primary pl-4">
                    Consultancies Offering {service.title}
                </h2>
                {relatedConsultancies.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {relatedConsultancies.map((consultancy) => (
                            <Link
                                key={consultancy._id}
                                href={`/consultancies/${consultancy.slug?.current || ''}`}
                                className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors">
                                        {consultancy.name}
                                    </h3>
                                    {consultancy.verificationBadge === 'verified' && (
                                        <span className="flex items-center gap-1 bg-success/10 text-success px-2 py-0.5 rounded-full text-xs font-bold">
                                            <BadgeCheck className="h-3 w-3" /> Verified
                                        </span>
                                    )}
                                </div>
                                <div className="flex items-center gap-4 text-sm text-slate-500">
                                    {consultancy.rankingScore && (
                                        <span className="flex items-center gap-1">
                                            <Star className="h-4 w-4 text-orange-400 fill-orange-400" /> {consultancy.rankingScore}
                                        </span>
                                    )}
                                    {consultancy.citiesServed && consultancy.citiesServed.length > 0 && (
                                        <span className="flex items-center gap-1">
                                            <MapPin className="h-4 w-4" /> {consultancy.citiesServed[0]}
                                        </span>
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 bg-slate-50 rounded-2xl">
                        <div className="size-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <BookOpen className="h-8 w-8 text-slate-400" />
                        </div>
                        <p className="text-slate-500">No consultancies offering this service yet.</p>
                    </div>
                )}
            </section>
        </main>
    )
}

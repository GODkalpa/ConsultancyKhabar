import Link from 'next/link'
import { ArrowLeft, BadgeCheck, MapPin, Star } from 'lucide-react'

// Mock data - will be replaced with Sanity fetch
const serviceDetails: { [key: string]: { title: string; description: string; features: string[] } } = {
    'ielts-preparation': {
        title: 'IELTS Preparation',
        description: 'Our comprehensive IELTS preparation program is designed to help you achieve your target band score. With experienced instructors, regular mock tests, and personalized feedback, we ensure you are fully prepared for exam day.',
        features: ['Expert instructors with 10+ years experience', 'Weekly mock tests with detailed feedback', 'Study materials included', 'Flexible class timings', 'One-on-one speaking practice', 'Score guarantee programs'],
    },
    'pte-academic': {
        title: 'PTE Academic',
        description: 'Master the PTE Academic exam with our state-of-the-art computer labs and personalized coaching strategies.',
        features: ['Modern computer labs', 'Personalized scoring strategies', 'Unlimited practice tests', 'AI-based feedback', 'Flexible schedules'],
    },
    'visa-counseling': {
        title: 'Visa Counseling',
        description: 'Expert guidance through every step of the visa application process, from documentation to interview preparation.',
        features: ['Document checklist and review', 'Financial planning guidance', 'Interview simulation', 'Embassy updates', 'Success rate tracking'],
    },
}

// Mock consultancies offering this service
const relatedConsultancies = [
    { name: 'Global Education Services', slug: 'global-education-services', rating: 4.8, location: 'Kathmandu', verified: true },
    { name: 'Nepal Study Abroad', slug: 'nepal-study-abroad', rating: 4.6, location: 'Pokhara', verified: true },
    { name: 'Future Path Consultancy', slug: 'future-path-consultancy', rating: 4.5, location: 'Kathmandu', verified: false },
]

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const service = serviceDetails[slug] || {
        title: 'Service Not Found',
        description: 'The requested service could not be found.',
        features: [],
    }

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

            {/* Features */}
            {service.features.length > 0 && (
                <section className="mb-16">
                    <h2 className="text-2xl font-bold font-heading text-slate-900 mb-6 border-l-4 border-primary pl-4">What's Included</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {service.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                                <div className="size-6 bg-success/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                    <BadgeCheck className="h-4 w-4 text-success" />
                                </div>
                                <span className="text-slate-700 font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Related Consultancies */}
            <section>
                <h2 className="text-2xl font-bold font-heading text-slate-900 mb-6 border-l-4 border-primary pl-4">
                    Consultancies Offering {service.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedConsultancies.map((consultancy) => (
                        <Link
                            key={consultancy.slug}
                            href={`/consultancies/${consultancy.slug}`}
                            className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors">
                                    {consultancy.name}
                                </h3>
                                {consultancy.verified && (
                                    <span className="flex items-center gap-1 bg-success/10 text-success px-2 py-0.5 rounded-full text-xs font-bold">
                                        <BadgeCheck className="h-3 w-3" /> Verified
                                    </span>
                                )}
                            </div>
                            <div className="flex items-center gap-4 text-sm text-slate-500">
                                <span className="flex items-center gap-1">
                                    <Star className="h-4 w-4 text-orange-400 fill-orange-400" /> {consultancy.rating}
                                </span>
                                <span className="flex items-center gap-1">
                                    <MapPin className="h-4 w-4" /> {consultancy.location}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    )
}

import Link from 'next/link'
import { ArrowLeft, BadgeCheck, MapPin, Star, Calendar, ExternalLink, Users } from 'lucide-react'

// Mock data - will be replaced with Sanity fetch
const countryDetails: { [key: string]: { name: string; flagEmoji: string; description: string; intakes: string[]; visaNotes: string; officialLinks: { title: string; url: string }[] } } = {
    'australia': {
        name: 'Australia',
        flagEmoji: '🇦🇺',
        description: "Australia is one of the most popular destinations for Nepalese students. Known for its world-class universities, multicultural environment, and excellent post-study work opportunities, Australia offers a unique blend of academic excellence and quality of life. The country is home to 6 of the world's top 100 universities and provides degrees recognized globally.",
        intakes: ['February (Semester 1)', 'July (Semester 2)'],
        visaNotes: 'Student visa (subclass 500) required. Genuine Temporary Entrant (GTE) requirement. English proficiency proof (IELTS 6.0+ or equivalent). Financial capacity evidence. Overseas Student Health Cover (OSHC) mandatory.',
        officialLinks: [
            { title: 'Study in Australia (Official)', url: 'https://www.studyaustralia.gov.au/' },
            { title: 'Department of Home Affairs', url: 'https://immi.homeaffairs.gov.au/' },
        ],
    },
    'canada': {
        name: 'Canada',
        flagEmoji: '🇨🇦',
        description: 'Canada offers excellent education at affordable costs compared to other Western countries. With pathways to permanent residency through the Post-Graduation Work Permit (PGWP), Canada is an attractive destination for students looking to build a long-term future abroad.',
        intakes: ['September (Fall)', 'January (Winter)', 'May (Summer)'],
        visaNotes: 'Study permit required for programs longer than 6 months. Letter of Acceptance from DLI. Proof of financial support. Clean health and police records.',
        officialLinks: [
            { title: 'Study in Canada', url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html' },
        ],
    },
}

// Mock consultancies for this country
const relatedConsultancies = [
    { name: 'Global Education Services', slug: 'global-education-services', rating: 4.8, location: 'Kathmandu', verified: true },
    { name: 'Nepal Study Abroad', slug: 'nepal-study-abroad', rating: 4.6, location: 'Pokhara', verified: true },
    { name: 'Future Path Consultancy', slug: 'future-path-consultancy', rating: 4.5, location: 'Kathmandu', verified: false },
]

export default async function CountryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const country = countryDetails[slug] || {
        name: 'Country Not Found',
        flagEmoji: '🌍',
        description: 'The requested country could not be found.',
        intakes: [],
        visaNotes: '',
        officialLinks: [],
    }

    return (
        <main className="max-w-[1440px] mx-auto px-6 lg:px-20 py-12">
            {/* Back Link */}
            <Link href="/countries" className="inline-flex items-center gap-2 text-slate-600 hover:text-primary mb-8 font-medium transition-colors">
                <ArrowLeft className="h-4 w-4" /> Back to Countries
            </Link>

            {/* Header */}
            <div className="flex items-center gap-6 mb-12">
                <div className="text-7xl">{country.flagEmoji}</div>
                <div>
                    <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-slate-900 mb-2">
                        Study in {country.name}
                    </h1>
                    <p className="text-slate-600 flex items-center gap-4">
                        <span className="flex items-center gap-1"><Users className="h-4 w-4" /> {relatedConsultancies.length}+ Consultants</span>
                    </p>
                </div>
            </div>

            {/* Overview */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold font-heading text-slate-900 mb-4 border-l-4 border-primary pl-4">Overview</h2>
                <p className="text-slate-600 leading-relaxed max-w-4xl">{country.description}</p>
            </section>

            {/* Intakes & Visa in Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Intakes */}
                <div className="p-8 bg-slate-50 rounded-2xl">
                    <h3 className="text-xl font-bold font-heading text-slate-900 mb-4 flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary" /> Intakes
                    </h3>
                    <ul className="space-y-2">
                        {country.intakes.map((intake, i) => (
                            <li key={i} className="flex items-center gap-2 text-slate-700">
                                <BadgeCheck className="h-4 w-4 text-success" /> {intake}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Official Links */}
                <div className="p-8 bg-slate-50 rounded-2xl">
                    <h3 className="text-xl font-bold font-heading text-slate-900 mb-4 flex items-center gap-2">
                        <ExternalLink className="h-5 w-5 text-primary" /> Official Resources
                    </h3>
                    <ul className="space-y-2">
                        {country.officialLinks.map((link, i) => (
                            <li key={i}>
                                <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium flex items-center gap-1">
                                    {link.title} <ExternalLink className="h-3 w-3" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Visa Notes */}
            {country.visaNotes && (
                <section className="mb-16 p-8 bg-amber-50 border border-amber-200 rounded-2xl">
                    <h3 className="text-xl font-bold font-heading text-amber-800 mb-4">⚠️ Visa Requirements</h3>
                    <p className="text-amber-900 leading-relaxed">{country.visaNotes}</p>
                </section>
            )}

            {/* Related Consultancies */}
            <section>
                <h2 className="text-2xl font-bold font-heading text-slate-900 mb-6 border-l-4 border-primary pl-4">
                    Top Consultancies for {country.name}
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

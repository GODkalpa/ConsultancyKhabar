import Link from 'next/link'
import { AlertTriangle, CheckCircle, Info, Calendar, ArrowRight } from 'lucide-react'

// Mock data - will be replaced with Sanity fetch
const updates = [
    {
        id: '1',
        title: 'Australia Student Visa Processing Times Updated',
        type: 'info',
        country: 'Australia',
        date: '2024-01-20',
        summary: 'The Department of Home Affairs has announced updated processing times for student visa subclass 500. Current estimates range from 4-8 weeks for most applications.',
    },
    {
        id: '2',
        title: 'Canada Express Entry Draw Results - January 2024',
        type: 'success',
        country: 'Canada',
        date: '2024-01-18',
        summary: 'The latest Express Entry draw invited 5,500 candidates with a CRS score of 485 or above. This is good news for international students looking to immigrate after graduation.',
    },
    {
        id: '3',
        title: 'UK Graduate Route Visa Under Review',
        type: 'warning',
        country: 'United Kingdom',
        date: '2024-01-15',
        summary: 'The UK government is reviewing the Graduate Route visa program. No changes have been announced yet, but students should stay informed about potential updates.',
    },
    {
        id: '4',
        title: 'New Zealand Accredited Employer Work Visa Changes',
        type: 'info',
        country: 'New Zealand',
        date: '2024-01-10',
        summary: 'Immigration New Zealand has updated requirements for post-study work visas. Employers now need accreditation for most work visa applications.',
    },
]

const typeIcons = {
    info: Info,
    success: CheckCircle,
    warning: AlertTriangle,
}

const typeColors = {
    info: 'bg-blue-50 border-blue-200 text-blue-700',
    success: 'bg-green-50 border-green-200 text-green-700',
    warning: 'bg-amber-50 border-amber-200 text-amber-700',
}

const iconColors = {
    info: 'text-blue-500',
    success: 'text-green-500',
    warning: 'text-amber-500',
}

export default function ProcessUpdatesPage() {
    return (
        <main className="max-w-[1440px] mx-auto px-6 lg:px-20 py-12">
            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-slate-900 mb-4">
                    Visa & Process Updates
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Stay informed about the latest visa regulations, processing times, and policy changes affecting Nepalese students.
                </p>
            </div>

            {/* Updates List */}
            <div className="space-y-6 max-w-4xl mx-auto">
                {updates.map((update) => {
                    const IconComponent = typeIcons[update.type as keyof typeof typeIcons]
                    return (
                        <div
                            key={update.id}
                            className={`p-6 rounded-2xl border ${typeColors[update.type as keyof typeof typeColors]}`}
                        >
                            <div className="flex items-start gap-4">
                                <div className={`shrink-0 ${iconColors[update.type as keyof typeof iconColors]}`}>
                                    <IconComponent className="h-6 w-6" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-xs font-bold bg-white/50 px-2 py-0.5 rounded">
                                            {update.country}
                                        </span>
                                        <span className="text-xs flex items-center gap-1 opacity-70">
                                            <Calendar className="h-3 w-3" /> {update.date}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold font-heading mb-2">{update.title}</h3>
                                    <p className="text-sm opacity-80">{update.summary}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
                <p className="text-slate-600 mb-4">Need help understanding these updates?</p>
                <Link
                    href="/consultancies"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors"
                >
                    Find a Consultant <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
        </main>
    )
}

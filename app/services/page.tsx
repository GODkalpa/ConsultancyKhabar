import Link from 'next/link'
import { BookOpen, GraduationCap, FileText, ClipboardCheck, Globe, MonitorPlay, Briefcase, Languages } from 'lucide-react'

// Mock data - will be replaced with Sanity fetch
const services = [
    { title: 'IELTS Preparation', slug: 'ielts-preparation', description: 'Comprehensive IELTS coaching with experienced instructors and regular mock tests.', iconName: 'BookOpen' },
    { title: 'PTE Academic', slug: 'pte-academic', description: 'State-of-the-art computer labs and personalized strategies for PTE success.', iconName: 'MonitorPlay' },
    { title: 'Visa Counseling', slug: 'visa-counseling', description: 'Expert guidance on visa applications, documentation, and interview preparation.', iconName: 'ClipboardCheck' },
    { title: 'University Admission', slug: 'university-admission', description: 'End-to-end support for university applications, from shortlisting to acceptance.', iconName: 'GraduationCap' },
    { title: 'Documentation Support', slug: 'documentation-support', description: 'Professional assistance with all required documents and paperwork.', iconName: 'FileText' },
    { title: 'Country Guidance', slug: 'country-guidance', description: 'In-depth information about study destinations, culture, and opportunities.', iconName: 'Globe' },
    { title: 'Career Counseling', slug: 'career-counseling', description: 'Personalized career advice to help you choose the right path.', iconName: 'Briefcase' },
    { title: 'Language Classes', slug: 'language-classes', description: 'Learn Japanese, Korean, German, and other languages for study abroad.', iconName: 'Languages' },
]

const iconMap: { [key: string]: React.ElementType } = {
    BookOpen, GraduationCap, FileText, ClipboardCheck, Globe, MonitorPlay, Briefcase, Languages
}

export default function ServicesPage() {
    return (
        <main className="max-w-[1440px] mx-auto px-6 lg:px-20 py-12">
            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-slate-900 mb-4">
                    Our Services
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Comprehensive support for every step of your study abroad journey. From test preparation to visa counseling, we've got you covered.
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service) => {
                    const IconComponent = iconMap[service.iconName] || BookOpen
                    return (
                        <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/20"
                        >
                            <div className="size-14 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <IconComponent className="h-7 w-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-heading text-slate-900 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                                {service.description}
                            </p>
                        </Link>
                    )
                })}
            </div>

            {/* CTA Section */}
            <div className="mt-20 bg-primary rounded-3xl p-12 text-center text-white">
                <h2 className="text-3xl font-bold font-heading mb-4">Need Help Choosing?</h2>
                <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                    Not sure which services you need? Our expert counselors can help you create a personalized study abroad plan.
                </p>
                <Link
                    href="/consultancies"
                    className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors shadow-lg"
                >
                    Find a Consultancy
                </Link>
            </div>
        </main>
    )
}

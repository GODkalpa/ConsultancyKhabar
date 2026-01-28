import Link from 'next/link'
import { BookOpen, GraduationCap, FileText, ClipboardCheck, Globe, MonitorPlay, Briefcase, Languages, LucideIcon } from 'lucide-react'
import { getAllServices } from '@/lib/sanity/api'
import { Service } from '@/lib/sanity/types'

const iconMap: { [key: string]: LucideIcon } = {
    BookOpen, GraduationCap, FileText, ClipboardCheck, Globe, MonitorPlay, Briefcase, Languages
}

export default async function ServicesPage() {
    const services: Service[] = await getAllServices()

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
            {services.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service) => {
                        const IconComponent = iconMap[service.iconName || ''] || BookOpen
                        return (
                            <Link
                                key={service._id}
                                href={`/services/${service.slug?.current || ''}`}
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
            ) : (
                <div className="text-center py-16">
                    <div className="size-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <BookOpen className="h-10 w-10 text-slate-400" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-700 mb-2">No Services Available</h3>
                    <p className="text-slate-500">Services will appear here once added in the CMS.</p>
                </div>
            )}

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

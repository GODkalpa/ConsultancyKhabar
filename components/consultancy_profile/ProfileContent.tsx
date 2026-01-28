import { BookOpen, Monitor, ClipboardCheck, Navigation, MapPin } from 'lucide-react'
import { AnimatedIcon } from '@/components/ui/AnimatedIcon'

export function Overview() {
    return (
        <section id="overview" className="scroll-mt-32">
            <h2 className="text-2xl font-bold mb-6 font-heading text-slate-900 border-l-4 border-primary pl-4">About Us</h2>
            <div className="prose max-w-none text-slate-600 leading-relaxed font-sans">
                <p>Global Education Services is a premier educational consultancy based in Kathmandu, Nepal. Since our inception, we have been committed to helping Nepalese students realize their dreams of studying abroad. We provide comprehensive guidance and support throughout the entire application process, ensuring that every student makes an informed decision about their future.</p>
                <p className="mt-4">Our team of experienced counselors offers personalized advice, from selecting the right course and university to preparing for entrance exams and navigating visa requirements. We partner with top-tier institutions worldwide to bring you the best opportunities for global education.</p>
            </div>
        </section>
    )
}

export function StatsGrid() {
    return (
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                { label: 'Years Experience', value: '15+' },
                { label: 'Students Sent', value: '5000+' },
                { label: 'Visa Success Rate', value: '98%' },
                { label: 'Partner Universities', value: '50+' }
            ].map((stat, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] flex flex-col items-center text-center border border-slate-100 hover:border-primary/20 hover:shadow-lg transition-all hover:-translate-y-1 group">
                    <span className="text-4xl font-extrabold text-slate-900 mb-2 font-heading group-hover:text-primary transition-colors">{stat.value}</span>
                    <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">{stat.label}</span>
                </div>
            ))}
        </section>
    )
}

export function ServicesList() {
    return (
        <section id="services" className="scroll-mt-32">
            <h2 className="text-2xl font-bold mb-8 font-heading text-slate-900 border-l-4 border-primary pl-4">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                    <div className="size-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                        <AnimatedIcon icon={BookOpen} className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-heading text-slate-900 group-hover:text-primary transition-colors">IELTS Preparation</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">Intensive coaching with expert instructors and regular mock tests to ensure high band scores.</p>
                </div>
                <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                    <div className="size-14 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                        <AnimatedIcon icon={Monitor} className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-heading text-slate-900 group-hover:text-primary transition-colors">PTE Academic</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">State-of-the-art computer labs and personalized strategies for PTE success.</p>
                </div>
                <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                    <div className="size-14 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
                        <AnimatedIcon icon={ClipboardCheck} className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-heading text-slate-900 group-hover:text-primary transition-colors">Visa Counseling</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">End-to-end support for visa documentation, financial planning, and interview preparation.</p>
                </div>
            </div>
        </section>
    )
}

export function CountriesList() {
    return (
        <section id="countries" className="scroll-mt-32">
            <h2 className="text-2xl font-bold mb-8 font-heading text-slate-900 border-l-4 border-primary pl-4">Destinations</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                    { name: 'Australia', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCn8JBHM4ozJFXzo6p5rNa0dVBcG4KRjGOwp9M6sRLX_3H4KLgbpWH-xiIQ106r1mJ92hjHAh8EU4RjHXBjl2MzSaX5p5jNXQQTvuYF2r1Z-pKpq7t8miUNKT_5h0pe30QYRlGYnmhsB7-U6ESn1U7BBTelyGAf5ePXfjEKCr5_GzWx3kSIA8wHqVeTGNESnxCN38Pt7KN8pEkxzOz6CFyqAb140CQ_81Dl6YpvRuI5VYIxWkqK8fT2UhKuXtAf10P0hSiqWy9oqOMU' },
                    { name: 'Canada', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB04wY_pA-UzkUriRk3fi0LE5XADRS7tHArPGdMOPeEl3MWqZYKrGMg_F6ulOfQOh39TGy6FNci_sQKHHsjrTANHp4zxfYAoMb292zLfiGAOI_uo1yIG48wUnkGqBYk2e9tJeIro5SEueTR895Yt5uYd26OyDBBvKSwEl2nwKXZFNB8pjOxZR0ureQF5_0Lb62idnHH_itaO00sq9j__GCF3fcFbCYvUhvg7z4Q9z6nC4jU807psyyL9Nr74x5FWeszAwnQHQhXFbOO' },
                    { name: 'USA', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8cgwsx0VqHZ7AG3jNYdlJ6W3v2EfcQ8QwEKvCsjhmtSPijYJTK-pJBUdIF6Oi3a5eUOm816Rc8CTHTDeP3B30Hnu1yyFhccrpxXSEenADpKmOFeuJM662BUsCG8LXiOBy0MHrLcp4VHALt2p9CyHYEE9uvM7rqc_Nxt-huMpAjr80UalpUJuoY9zsTgSVv9eFkuQtzFc_oQC6tVEK9sjxfj3FigrwjbQBexrMMle21PbNWwjfc-QgK2X38NrqKPK0US4hAxGyF-11' },
                    { name: 'United Kingdom', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3Hn1lWiJJT3gYtB_xVuge8d6J3NVad0EASOWV1_nqM9S-Twyk43sV2gkbubkbhwD1zUfGf_FK9VBtgMRtcQK7pqAyZ0fMAVRco4FYmfeTXsEqgI7VNs2EF5QjDzBVAqwwVIrPmorcXSSZp4qmGrurGesy7oI1owWk8hJ8Iu2YayQ0ajF3Q7EuLYGulheMv1TNlntRasmo2OcYg0CpmA0XjrayD2YYLg6DlbHVmylQ82s3nS4DJVx1L1OJGAxBGxZo3N6qQl54gUA6' }
                ].map((country) => (
                    <div key={country.name} className="flex flex-col items-center gap-4 group cursor-pointer">
                        <div className="size-28 rounded-full border-4 border-white shadow-lg overflow-hidden bg-slate-100 flex items-center justify-center ring-1 ring-slate-100 group-hover:scale-110 transition-transform duration-500">
                            <img alt={`${country.name} Flag`} className="w-full h-full object-cover" src={country.img} />
                        </div>
                        <span className="font-bold text-slate-700 font-heading group-hover:text-primary transition-colors">{country.name}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export function LocationMap() {
    return (
        <section id="location" className="scroll-mt-32">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold font-heading text-slate-900 border-l-4 border-primary pl-4">Main Office Location</h2>
                <span className="text-sm text-primary font-bold flex items-center gap-1.5 cursor-pointer hover:underline bg-primary/5 px-3 py-1.5 rounded-lg transition-colors hover:bg-primary/10">
                    <AnimatedIcon icon={Navigation} className="h-4 w-4" /> Get Directions
                </span>
            </div>
            <div className="w-full h-[450px] rounded-3xl overflow-hidden shadow-xl bg-slate-100 relative group">
                {/* Map Placeholder */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzzKzU6aov0CFtTo3GgcIlLsdxoR9rONZakCcqWH2D1QP1WsOQVBwhtZwpYcHp1-PaqfGVBHGd9n2_kjKjzAYPzMYlj5in47lLPuumPTvpCfJG4cchgTjbFnqEjY_rPTeRbWXsH2N93cGXBpeuP4RpI5BSuF8c3TUFxBrui6rIjp0wm43Ac4aMZiUtwb2kRJVU9zcmleAMKALBXhWE55r35Bp3OgZeNbZ5erhji4fEYRdWaW69RHjFPbaNjZailDTHhre0fe8XUcwi")' }}
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-white p-5 rounded-2xl shadow-2xl border border-white/50 flex flex-col items-center animate-in fade-in zoom-in duration-500">
                        <MapPin className="h-8 w-8 text-primary mb-2 fill-primary/20" />
                        <span className="font-bold text-slate-900">Global Education Services HQ</span>
                        <span className="text-xs text-slate-500 font-medium mt-0.5">Putalisadak, Kathmandu</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

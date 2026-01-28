import Link from 'next/link'
import { School, Globe, Search } from 'lucide-react'
import { AnimatedIcon } from '@/components/ui/AnimatedIcon'

export function Hero() {
    return (
        <section className="mb-12">
            <div
                className="relative overflow-hidden rounded-2xl bg-cover bg-center min-h-[580px] flex flex-col items-center justify-center p-6 text-center shadow-2xl ring-1 ring-slate-900/5"
                style={{ backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.8)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDT2fNyb6U3OP9m9-HPdKyjtNj_p_3gsfKZyNkBTckTBm7zlWf1uZKoZ9cEwnsmEnV5kPd9Mv4c9Km2RzKClddf-9CKIDsfQ3SGvUto-6KvFR4JHDusnRREiVProerRfB1X_2H9_q9rJj7heO6zJP4V7JW3tx75UyYp-JSgrmKZvJmTucHbAkUFxmH8LV-Pa2hkR90ZOPE_c3LiqjNR3Tdv8i33JGSLZxkQGV_C5Gw03fzkzvEezs-5Uub3t7W8hoIUHCVnmngsTfx_")' }}
            >
                <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-tight mb-6 max-w-4xl font-heading tracking-tight">
                    Find Your Best Education Consultant
                </h1>
                <p className="text-slate-100/90 text-lg md:text-2xl font-light mb-12 max-w-2xl font-sans">
                    Your global journey starts here. Search through 100% verified agencies across Nepal.
                </p>

                {/* Search Card */}
                <div className="w-full max-w-5xl bg-white p-3 md:p-4 rounded-2xl shadow-xl shadow-slate-900/10 flex flex-col md:flex-row gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="flex-1 flex flex-col md:flex-row gap-3">
                        <div className="relative flex-1 group">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                                <AnimatedIcon icon={School} className="h-6 w-6" />
                            </span>
                            <select className="w-full pl-12 pr-4 h-16 rounded-xl border-slate-200 bg-slate-50 focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none text-slate-700 font-medium transition-all hover:bg-slate-100 cursor-pointer">
                                <option>Select Service (e.g. IELTS)</option>
                                <option>IELTS Preparation</option>
                                <option>PTE Academic</option>
                                <option>Visa Counseling</option>
                                <option>Documentation</option>
                            </select>
                        </div>
                        <div className="relative flex-1 group">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                                <AnimatedIcon icon={Globe} className="h-6 w-6" />
                            </span>
                            <select className="w-full pl-12 pr-4 h-16 rounded-xl border-slate-200 bg-slate-50 focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none text-slate-700 font-medium transition-all hover:bg-slate-100 cursor-pointer">
                                <option>Select Country</option>
                                <option>Australia</option>
                                <option>USA</option>
                                <option>Canada</option>
                                <option>UK</option>
                                <option>Japan</option>
                            </select>
                        </div>
                    </div>
                    <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 h-16 rounded-xl transition-all flex items-center justify-center gap-2 group shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0">
                        <span>Find Consultant</span>
                        <Search className="h-5 w-5 group-hover:translate-x-1 transition-transform stroke-[3px]" />
                    </button>
                </div>
                <p className="text-slate-200 text-sm mt-8 font-medium">
                    Popular: <Link href="#" className="underline decoration-slate-400 hover:text-white hover:decoration-white transition-all underline-offset-4">Australia</Link>, <Link href="#" className="underline decoration-slate-400 hover:text-white hover:decoration-white transition-all underline-offset-4">USA</Link>, <Link href="#" className="underline decoration-slate-400 hover:text-white hover:decoration-white transition-all underline-offset-4">Canada</Link>, <Link href="#" className="underline decoration-slate-400 hover:text-white hover:decoration-white transition-all underline-offset-4">UK</Link>
                </p>
            </div>
        </section>
    )
}

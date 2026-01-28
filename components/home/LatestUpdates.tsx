import { Newspaper, Mail, ArrowRight } from 'lucide-react'
import { AnimatedIcon } from '@/components/ui/AnimatedIcon'

export function LatestUpdates() {
    return (
        <section className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                    <h2 className="text-3xl font-bold mb-8 text-slate-900 flex items-center gap-3 font-heading tracking-tight">
                        <span className="p-2 bg-primary/10 rounded-lg">
                            <AnimatedIcon icon={Newspaper} className="h-6 w-6 text-primary" />
                        </span>
                        Latest Visa Updates
                    </h2>
                    <div className="space-y-6">
                        {/* Update 1 */}
                        <div className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgb(0,0,0,0.08)] transition-all cursor-pointer hover:border-primary/20">
                            <div className="flex justify-between items-start mb-3">
                                <span className="bg-blue-50 text-blue-700 text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wide">Australia</span>
                                <span className="text-slate-400 text-xs font-medium bg-slate-50 px-2 py-1 rounded">Oct 24, 2023</span>
                            </div>
                            <h4 className="font-bold text-xl text-slate-900 group-hover:text-primary transition-colors font-heading mb-2">New Student Visa Requirements for Subclass 500</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">The Department of Home Affairs has updated financial capacity requirements for students commencing in 2024.</p>
                            <div className="mt-4 flex items-center text-primary text-sm font-semibold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                Read Full Update <ArrowRight className="h-4 w-4 ml-1" />
                            </div>
                        </div>
                        {/* Update 2 */}
                        <div className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgb(0,0,0,0.08)] transition-all cursor-pointer hover:border-success/20">
                            <div className="flex justify-between items-start mb-3">
                                <span className="bg-green-50 text-green-700 text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wide">Canada</span>
                                <span className="text-slate-400 text-xs font-medium bg-slate-50 px-2 py-1 rounded">Oct 22, 2023</span>
                            </div>
                            <h4 className="font-bold text-xl text-slate-900 group-hover:text-success transition-colors font-heading mb-2">IRCC Announces Post-Graduation Work Permit Extension</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">International students may be eligible for an additional 18-month extension on their PGWP starting next month.</p>
                            <div className="mt-4 flex items-center text-success text-sm font-semibold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                Read Full Update <ArrowRight className="h-4 w-4 ml-1" />
                            </div>
                        </div>
                        {/* Update 3 */}
                        <div className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgb(0,0,0,0.08)] transition-all cursor-pointer hover:border-purple-600/20">
                            <div className="flex justify-between items-start mb-3">
                                <span className="bg-purple-50 text-purple-700 text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wide">USA</span>
                                <span className="text-slate-400 text-xs font-medium bg-slate-50 px-2 py-1 rounded">Oct 19, 2023</span>
                            </div>
                            <h4 className="font-bold text-xl text-slate-900 group-hover:text-purple-600 transition-colors font-heading mb-2">F-1 Visa Interview Waiver Program Extended</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">Good news for students with prior visas as the interview waiver program sees a new extension until further notice.</p>
                            <div className="mt-4 flex items-center text-purple-600 text-sm font-semibold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                Read Full Update <ArrowRight className="h-4 w-4 ml-1" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Subscribe Section */}
                <div className="bg-primary p-8 rounded-3xl text-white relative overflow-hidden h-fit shadow-2xl shadow-primary/20">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/20 rounded-full blur-xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white mb-6 rotate-3 border border-white/20">
                        <AnimatedIcon icon={Mail} className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 font-heading">Get Weekly Updates</h3>
                    <p className="text-white/80 text-sm mb-8 leading-relaxed">Join 10k+ students getting the latest visa news directly in their inbox. Updates on policy changes and scholarship deadlines.</p>
                    <div className="w-full space-y-4 relative z-10">
                        <input className="w-full h-12 rounded-xl border-0 bg-white/10 backdrop-blur placeholder:text-white/50 px-4 focus:ring-2 focus:ring-white/50 text-white text-sm transition-all" placeholder="Your email address" type="email" />
                        <button className="w-full h-12 bg-white text-primary font-bold rounded-xl hover:shadow-[0_4px_20px_rgb(255,255,255,0.3)] hover:-translate-y-0.5 transition-all active:translate-y-0">Subscribe Now</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

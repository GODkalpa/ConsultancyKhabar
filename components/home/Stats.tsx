import { Users, ShieldCheck, Map } from 'lucide-react'
import { AnimatedIcon } from '@/components/ui/AnimatedIcon'

export function Stats() {
    return (
        <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center gap-6 bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 group">
                    <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                        <AnimatedIcon icon={Users} className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                        <p className="text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-1">500+</p>
                        <p className="text-slate-500 font-medium text-lg">Verified Consultancies</p>
                    </div>
                </div>

                <div className="flex items-center gap-6 bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 group">
                    <div className="w-16 h-16 rounded-2xl bg-success/10 flex items-center justify-center text-success group-hover:bg-success/20 transition-colors">
                        <AnimatedIcon icon={ShieldCheck} className="h-8 w-8 text-success" />
                    </div>
                    <div>
                        <p className="text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-1">100%</p>
                        <p className="text-slate-500 font-medium text-lg">Trust Verification</p>
                    </div>
                </div>

                <div className="flex items-center gap-6 bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 group">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors">
                        <AnimatedIcon icon={Map} className="h-8 w-8 text-accent" />
                    </div>
                    <div>
                        <p className="text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-1">20+</p>
                        <p className="text-slate-500 font-medium text-lg">Study Destinations</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

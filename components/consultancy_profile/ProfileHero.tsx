import { School, BadgeCheck, Star, MapPin } from 'lucide-react'
import { AnimatedIcon } from '@/components/ui/AnimatedIcon'

export function ProfileHero() {
    return (
        <section className="flex flex-col gap-0 md:gap-4">
            <div className="relative w-full h-80 md:h-[420px] overflow-hidden rounded-none md:rounded-3xl shadow-2xl shadow-slate-900/10">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
                    style={{ backgroundImage: 'linear-gradient(180deg, rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD_I0U2uCRe7JdVOdtMRaDgyHQRKeGQa2xkOB5b-PgAzppqsCANqD6KkiRPC8RyMXgqG5QKJGFRZ8Q0tJ-5srlpgHmAWqpSY7rnvlL0syCqGN3vPRxQcj_dW3cx9s043uiaI13zYNpRXKe5KZm8tGzB9myj1vPfqcE07y16xRxef-Xtouv7ijvB5TziLq_cCpX2GpTC_3LNiiaWcx616GLH5a1hqLNEAEbDadEUDqD0bSwtDegQylaV45WDDLfd6WNdD0ZQ_GqcTQ3o")' }}
                />
                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-90"></div>
                <div className="absolute bottom-8 left-6 md:left-12 text-white">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-heading mb-2">Global Education Services</h1>
                    <p className="text-slate-300 font-medium text-lg">Your bridge to world-class universities</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end px-6 md:px-0 -mt-16 md:-mt-0 relative z-10 md:static">
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                    <div className="size-28 md:size-36 bg-white rounded-2xl shadow-2xl border-4 border-white overflow-hidden shrink-0 flex items-center justify-center ring-1 ring-slate-100">
                        <div className="w-full h-full bg-slate-50 flex items-center justify-center">
                            <School className="h-14 w-14 text-primary" />
                        </div>
                    </div>
                    <div className="mt-2 md:mt-8">
                        <div className="flex items-center gap-3 flex-wrap mb-2">
                            <h2 className="text-2xl md:text-3xl font-bold font-heading text-slate-900 md:hidden">Global Education Services</h2>
                            <span className="flex items-center gap-1.5 bg-success/10 text-success px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-success/10 shadow-sm">
                                <AnimatedIcon icon={BadgeCheck} className="h-3.5 w-3.5" /> Verified Agency
                            </span>
                        </div>
                        <div className="flex items-center gap-4 text-slate-600">
                            <span className="flex items-center gap-1.5 font-bold text-slate-900 bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
                                <Star className="h-4 w-4 text-orange-400 fill-orange-400" /> 4.8 Rating
                            </span>
                            <span className="flex items-center gap-1.5 font-medium">
                                <MapPin className="h-4 w-4 text-slate-400" /> Kathmandu, Nepal
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-auto mt-8 md:mt-0">
                    <button className="flex w-full md:min-w-[180px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary text-white text-base font-bold tracking-wide shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all active:translate-y-0">
                        Contact Consultancy
                    </button>
                </div>
            </div>
        </section>
    )
}

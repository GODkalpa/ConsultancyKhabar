import Link from 'next/link'
import { BarChart3, Star, BadgeCheck, TrendingUp, Users, Shield } from 'lucide-react'

export default function MethodologyPage() {
    return (
        <main className="max-w-[900px] mx-auto px-6 lg:px-0 py-12">
            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-slate-900 mb-4">
                    Ranking Methodology
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Our transparent and data-driven approach to ranking consultancies ensures you find the best match for your study abroad journey.
                </p>
            </div>

            {/* Intro */}
            <section className="mb-12">
                <p className="text-slate-600 leading-relaxed">
                    At ConsultancyKhabar, we believe in transparency and fairness. Our ranking system is designed to help students make informed decisions by evaluating consultancies on multiple objective criteria. We do not accept payments for higher rankings.
                </p>
            </section>

            {/* Scoring Breakdown */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold font-heading text-slate-900 mb-6 border-l-4 border-primary pl-4">Scoring Criteria</h2>

                <div className="space-y-6">
                    <div className="p-6 bg-slate-50 rounded-2xl">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                <Star className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg font-heading">Google Reviews Score (40%)</h3>
                                <p className="text-sm text-slate-500">Based on average rating and total review count</p>
                            </div>
                        </div>
                        <p className="text-slate-600 text-sm">We aggregate ratings from Google Business Profile. Higher average ratings and more reviews contribute to a better score.</p>
                    </div>

                    <div className="p-6 bg-slate-50 rounded-2xl">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="size-12 bg-success/10 rounded-xl flex items-center justify-center text-success">
                                <BadgeCheck className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg font-heading">Verification Status (30%)</h3>
                                <p className="text-sm text-slate-500">Document verification and legitimacy checks</p>
                            </div>
                        </div>
                        <p className="text-slate-600 text-sm">Consultancies that complete our verification process receive a "Verified" badge. This includes checking registration documents, team credentials, and physical office verification.</p>
                    </div>

                    <div className="p-6 bg-slate-50 rounded-2xl">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="size-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                                <TrendingUp className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg font-heading">Services & Coverage (20%)</h3>
                                <p className="text-sm text-slate-500">Range of services and countries offered</p>
                            </div>
                        </div>
                        <p className="text-slate-600 text-sm">We evaluate the breadth of services (test prep, visa counseling, etc.) and the number of destination countries a consultancy supports.</p>
                    </div>

                    <div className="p-6 bg-slate-50 rounded-2xl">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="size-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500">
                                <Users className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg font-heading">User Engagement (10%)</h3>
                                <p className="text-sm text-slate-500">Profile views, inquiries, and user interactions</p>
                            </div>
                        </div>
                        <p className="text-slate-600 text-sm">Higher engagement from users on our platform indicates trust and popularity among prospective students.</p>
                    </div>
                </div>
            </section>

            {/* Trust */}
            <section className="p-8 bg-primary text-white rounded-3xl text-center">
                <Shield className="h-12 w-12 mx-auto mb-4 opacity-80" />
                <h2 className="text-2xl font-bold font-heading mb-4">Our Commitment to Fairness</h2>
                <p className="text-white/80 max-w-xl mx-auto mb-8">
                    Rankings are updated monthly based on the latest data. Consultancies cannot pay for higher positions. Our methodology is continuously reviewed and improved.
                </p>
                <Link href="/consultancies" className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors">
                    View Rankings
                </Link>
            </section>
        </main>
    )
}

import { Target, Heart, Users, Globe } from 'lucide-react'

export default function AboutPage() {
    return (
        <main className="max-w-[900px] mx-auto px-6 lg:px-0 py-12">
            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-slate-900 mb-4">
                    About Us
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Helping Nepalese students make informed decisions about their study abroad journey.
                </p>
            </div>

            {/* Mission */}
            <section className="mb-16">
                <div className="flex items-start gap-6">
                    <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                        <Target className="h-7 w-7" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold font-heading text-slate-900 mb-4">Our Mission</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Every year, thousands of Nepalese students dream of studying abroad. Yet, finding a trustworthy consultancy can be overwhelming—misleading information, hidden fees, and broken promises are all too common. Our mission is to change that by providing a transparent, unbiased platform where students can discover, compare, and connect with verified consultancies.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="mb-16">
                <h2 className="text-2xl font-bold font-heading text-slate-900 mb-8 border-l-4 border-primary pl-4">What We Believe</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="size-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent mx-auto mb-4">
                            <Heart className="h-7 w-7" />
                        </div>
                        <h3 className="font-bold text-lg mb-2 font-heading">Transparency</h3>
                        <p className="text-sm text-slate-600">Honest reviews and clear ranking methodology.</p>
                    </div>
                    <div className="text-center">
                        <div className="size-14 bg-success/10 rounded-xl flex items-center justify-center text-success mx-auto mb-4">
                            <Users className="h-7 w-7" />
                        </div>
                        <h3 className="font-bold text-lg mb-2 font-heading">Student-First</h3>
                        <p className="text-sm text-slate-600">Every feature is designed with students in mind.</p>
                    </div>
                    <div className="text-center">
                        <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                            <Globe className="h-7 w-7" />
                        </div>
                        <h3 className="font-bold text-lg mb-2 font-heading">Accessibility</h3>
                        <p className="text-sm text-slate-600">Free access to information for all students.</p>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="p-8 bg-slate-50 rounded-3xl">
                <h2 className="text-2xl font-bold font-heading text-slate-900 mb-4 text-center">The Team</h2>
                <p className="text-slate-600 text-center max-w-xl mx-auto">
                    We are a small team of developers, researchers, and former study abroad students passionate about improving the experience for the next generation. Based in Kathmandu, we work closely with students, parents, and consultancies to build a platform that truly serves the community.
                </p>
            </section>
        </main>
    )
}

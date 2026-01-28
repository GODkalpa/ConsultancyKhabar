import Link from 'next/link'
import { Calendar, User, ArrowRight, Clock } from 'lucide-react'

// Mock data - will be replaced with Sanity fetch
const posts = [
    {
        title: 'Top 10 Tips for IELTS Preparation in 2024',
        slug: 'top-10-tips-ielts-preparation-2024',
        excerpt: 'Get ready to ace your IELTS exam with these proven strategies from top scorers and expert instructors.',
        author: 'ConsultancyKhabar',
        date: '2024-01-15',
        readTime: '8 min read',
        category: 'IELTS',
    },
    {
        title: 'Australia vs Canada: Which is Better for Nepalese Students?',
        slug: 'australia-vs-canada-nepalese-students',
        excerpt: 'A comprehensive comparison of two top study destinations, covering costs, opportunities, and quality of life.',
        author: 'ConsultancyKhabar',
        date: '2024-01-10',
        readTime: '12 min read',
        category: 'Destinations',
    },
    {
        title: 'New Zealand Student Visa Changes 2024',
        slug: 'new-zealand-student-visa-changes-2024',
        excerpt: 'Important updates to New Zealand student visa regulations that every applicant should know.',
        author: 'ConsultancyKhabar',
        date: '2024-01-05',
        readTime: '5 min read',
        category: 'Visa Updates',
    },
    {
        title: 'How to Choose the Right Consultancy for Your Study Abroad Journey',
        slug: 'how-to-choose-right-consultancy',
        excerpt: 'Learn what to look for in a consultancy and how to avoid common pitfalls.',
        author: 'ConsultancyKhabar',
        date: '2024-01-01',
        readTime: '6 min read',
        category: 'Guides',
    },
]

export default function BlogPage() {
    return (
        <main className="max-w-[1440px] mx-auto px-6 lg:px-20 py-12">
            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-slate-900 mb-4">
                    Blog & Resources
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Expert insights, guides, and the latest news for students planning to study abroad.
                </p>
            </div>

            {/* Featured Post */}
            {posts[0] && (
                <Link
                    href={`/blog/${posts[0].slug}`}
                    className="block mb-12 group"
                >
                    <div className="rounded-3xl bg-gradient-to-br from-primary to-slate-800 p-8 md:p-12 text-white overflow-hidden relative">
                        <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold mb-4">
                            {posts[0].category}
                        </span>
                        <h2 className="text-2xl md:text-4xl font-bold font-heading mb-4 max-w-2xl group-hover:text-accent transition-colors">
                            {posts[0].title}
                        </h2>
                        <p className="text-white/80 max-w-xl mb-6">{posts[0].excerpt}</p>
                        <div className="flex items-center gap-4 text-sm text-white/60">
                            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {posts[0].date}</span>
                            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {posts[0].readTime}</span>
                        </div>
                    </div>
                </Link>
            )}

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.slice(1).map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                        <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold mb-4">
                            {post.category}
                        </span>
                        <h3 className="text-lg font-bold mb-3 font-heading text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">
                            {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-slate-400">
                            <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {post.date}</span>
                            <span className="flex items-center gap-1 text-primary font-semibold group-hover:translate-x-1 transition-transform">
                                Read <ArrowRight className="h-3.5 w-3.5" />
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    )
}

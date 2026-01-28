import Link from 'next/link'
import { Calendar, ArrowRight, Clock, FileText } from 'lucide-react'
import { getAllPosts } from '@/lib/sanity/api'
import { Post } from '@/lib/sanity/types'

export default async function BlogPage() {
    const posts: Post[] = await getAllPosts()

    // Format date helper
    const formatDate = (dateString?: string) => {
        if (!dateString) return ''
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        })
    }

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

            {posts.length > 0 ? (
                <>
                    {/* Featured Post */}
                    {posts[0] && (
                        <Link
                            href={`/blog/${posts[0].slug?.current || ''}`}
                            className="block mb-12 group"
                        >
                            <div className="rounded-3xl bg-gradient-to-br from-primary to-slate-800 p-8 md:p-12 text-white overflow-hidden relative">
                                {posts[0].tags && posts[0].tags[0] && (
                                    <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold mb-4">
                                        {posts[0].tags[0]}
                                    </span>
                                )}
                                <h2 className="text-2xl md:text-4xl font-bold font-heading mb-4 max-w-2xl group-hover:text-accent transition-colors">
                                    {posts[0].title}
                                </h2>
                                <p className="text-white/80 max-w-xl mb-6">{posts[0].excerpt}</p>
                                <div className="flex items-center gap-4 text-sm text-white/60">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="h-4 w-4" /> {formatDate(posts[0].publishedDate)}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    )}

                    {/* Posts Grid */}
                    {posts.length > 1 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.slice(1).map((post) => (
                                <Link
                                    key={post._id}
                                    href={`/blog/${post.slug?.current || ''}`}
                                    className="group p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    {post.tags && post.tags[0] && (
                                        <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold mb-4">
                                            {post.tags[0]}
                                        </span>
                                    )}
                                    <h3 className="text-lg font-bold mb-3 font-heading text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between text-xs text-slate-400">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="h-3.5 w-3.5" /> {formatDate(post.publishedDate)}
                                        </span>
                                        <span className="flex items-center gap-1 text-primary font-semibold group-hover:translate-x-1 transition-transform">
                                            Read <ArrowRight className="h-3.5 w-3.5" />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </>
            ) : (
                <div className="text-center py-16">
                    <div className="size-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FileText className="h-10 w-10 text-slate-400" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-700 mb-2">No Blog Posts Yet</h3>
                    <p className="text-slate-500">Blog posts will appear here once published in the CMS.</p>
                </div>
            )}
        </main>
    )
}

import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react'

// Mock data - will be replaced with Sanity fetch
const postDetails: { [key: string]: { title: string; content: string; author: string; date: string; readTime: string; category: string } } = {
    'top-10-tips-ielts-preparation-2024': {
        title: 'Top 10 Tips for IELTS Preparation in 2024',
        content: `
            <p>Preparing for the IELTS exam can be challenging, but with the right strategies, you can achieve your target band score. Here are our top 10 tips:</p>
            
            <h2>1. Understand the Test Format</h2>
            <p>Before diving into preparation, make sure you understand what each section tests and how it's scored.</p>
            
            <h2>2. Practice with Real Test Materials</h2>
            <p>Use official Cambridge IELTS practice tests to familiarize yourself with the actual exam format.</p>
            
            <h2>3. Focus on Your Weak Areas</h2>
            <p>Identify which sections need the most improvement and allocate more study time accordingly.</p>
            
            <h2>4. Build Your Vocabulary</h2>
            <p>Learn new words in context and practice using them in writing and speaking.</p>
            
            <h2>5. Time Management is Key</h2>
            <p>Practice under timed conditions to improve your speed and accuracy.</p>
        `,
        author: 'ConsultancyKhabar',
        date: '2024-01-15',
        readTime: '8 min read',
        category: 'IELTS',
    },
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = postDetails[slug] || {
        title: 'Post Not Found',
        content: '<p>The requested blog post could not be found.</p>',
        author: 'Unknown',
        date: '',
        readTime: '',
        category: '',
    }

    return (
        <main className="max-w-[900px] mx-auto px-6 lg:px-0 py-12">
            {/* Back Link */}
            <Link href="/blog" className="inline-flex items-center gap-2 text-slate-600 hover:text-primary mb-8 font-medium transition-colors">
                <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>

            {/* Header */}
            <header className="mb-12">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold mb-4">
                    {post.category}
                </span>
                <h1 className="text-3xl md:text-5xl font-extrabold font-heading text-slate-900 mb-6 leading-tight">
                    {post.title}
                </h1>
                <div className="flex items-center gap-6 text-sm text-slate-500">
                    <span className="flex items-center gap-1"><User className="h-4 w-4" /> {post.author}</span>
                    <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {post.readTime}</span>
                </div>
            </header>

            {/* Content */}
            <article
                className="prose prose-slate prose-lg max-w-none prose-headings:font-heading prose-headings:text-slate-900 prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-slate-200 flex items-center gap-4">
                <span className="text-sm text-slate-600 font-medium">Share this article:</span>
                <button className="p-2 bg-slate-100 rounded-lg hover:bg-primary hover:text-white transition-colors">
                    <Share2 className="h-4 w-4" />
                </button>
            </div>
        </main>
    )
}

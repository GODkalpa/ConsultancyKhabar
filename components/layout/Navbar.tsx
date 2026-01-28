import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, BookOpen, Camera, Activity, Search, ArrowLeftRight, ArrowRight, ChevronDown, Menu } from 'lucide-react'
import { AnimatedIcon } from '@/components/ui/AnimatedIcon'

export function Navbar() {
    return (
        <>
            {/* Top Utility Bar */}
            <div className="w-full bg-white border-b border-slate-100 hidden md:block">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-20 h-10 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-primary transition-colors cursor-pointer">
                            <Mail className="h-3.5 w-3.5 text-primary" />
                            <span>info@consultancykhabar.com</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-primary transition-colors cursor-pointer">
                            <Phone className="h-3.5 w-3.5 text-primary" />
                            <span>+977 1 4440000</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                            <AnimatedIcon icon={BookOpen} className="h-[18px] w-[18px]" />
                        </Link>
                        <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                            <AnimatedIcon icon={Camera} className="h-[18px] w-[18px]" />
                        </Link>
                        <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                            <AnimatedIcon icon={Activity} className="h-[18px] w-[18px]" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Navigation Bar */}
            <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm supports-[backdrop-filter]:bg-white/60">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-4">
                    <div className="flex items-center justify-between gap-8">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 shrink-0 group">
                            <div className="relative w-[350px] h-16 group-hover:scale-105 transition-transform duration-300">
                                <Image
                                    src="/logo.png"
                                    alt="ConsultancyKhabar"
                                    fill
                                    className="object-contain object-left"
                                    priority
                                />
                            </div>
                        </Link>

                        {/* Nav Links */}
                        <nav className="hidden xl:flex items-center gap-8">
                            <Link href="/consultancies" className="group flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-primary transition-all">
                                Consultancies
                                <ChevronDown className="h-3.5 w-3.5 group-hover:rotate-180 transition-transform duration-300" />
                            </Link>
                            <Link href="/services" className="group flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-primary transition-all">
                                Services
                                <ChevronDown className="h-3.5 w-3.5 group-hover:rotate-180 transition-transform duration-300" />
                            </Link>
                            <Link href="/countries" className="group flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-primary transition-all">
                                Countries
                                <ChevronDown className="h-3.5 w-3.5 group-hover:rotate-180 transition-transform duration-300" />
                            </Link>
                            <Link href="/blog" className="text-sm font-semibold text-slate-600 hover:text-primary transition-all">
                                Blog
                            </Link>
                        </nav>

                        {/* Search & Actions */}
                        <div className="flex flex-1 items-center justify-end gap-6">
                            <div className="hidden lg:block flex-1 max-w-sm group">
                                <label className="relative block">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 group-focus-within:text-primary transition-colors">
                                        <Search className="h-4 w-4" />
                                    </span>
                                    <input className="w-full bg-slate-50 border-none rounded-xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 text-slate-900 placeholder:text-slate-400 transition-all group-hover:bg-slate-100" placeholder="Search for consultancies..." type="text" />
                                </label>
                            </div>
                            <div className="flex items-center gap-4">
                                <Link href="/compare" className="relative flex items-center gap-2 px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50 rounded-lg transition-colors group">
                                    <ArrowLeftRight className="h-4 w-4 group-hover:text-primary transition-colors" />
                                    <span className="hidden sm:inline">Compare</span>
                                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white font-bold ring-2 ring-white">0</span>
                                </Link>
                                <Link href="#" className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 transition-all hidden md:flex items-center gap-2 active:translate-y-0">
                                    <span>For Consultancies</span>
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                                {/* Mobile Menu Button */}
                                <button className="xl:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
                                    <Menu className="h-6 w-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

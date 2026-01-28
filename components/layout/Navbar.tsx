'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, BookOpen, Camera, Activity, Search, ArrowLeftRight, ArrowRight, ChevronDown, Menu, X, MapPin } from 'lucide-react'
import { AnimatedIcon } from '@/components/ui/AnimatedIcon'
import { usePathname } from 'next/navigation'

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        setMounted(true)
    }, [])

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [pathname])

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

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
                <div className="max-w-[1440px] mx-auto px-4 lg:px-20 py-4">
                    <div className="flex items-center justify-between gap-8">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 shrink-0 group">
                            <div className="relative w-[140px] sm:w-[280px] md:w-[350px] h-10 sm:h-12 md:h-16 group-hover:scale-105 transition-transform duration-300">
                                <Image
                                    src="/logo.png"
                                    alt="ConsultancyKhabar"
                                    fill
                                    className="object-contain object-left"
                                    priority
                                />
                            </div>
                        </Link>

                        {/* Desktop Nav Links */}
                        <nav className="hidden xl:flex items-center gap-8">
                            <Link href="/consultancies" className="group flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-primary transition-all">
                                Consultancies
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
                        <div className="flex flex-1 items-center justify-end gap-3 sm:gap-6">
                            <div className="hidden lg:block flex-1 max-w-sm group">
                                <label className="relative block">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 group-focus-within:text-primary transition-colors">
                                        <Search className="h-4 w-4" />
                                    </span>
                                    <input className="w-full bg-slate-50 border-none rounded-xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 text-slate-900 placeholder:text-slate-400 transition-all group-hover:bg-slate-100" placeholder="Search for consultancies..." type="text" />
                                </label>
                            </div>
                            <div className="flex items-center gap-3 sm:gap-4">
                                <Link href="/compare" className="relative flex items-center gap-2 px-2 sm:px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50 rounded-lg transition-colors group">
                                    <ArrowLeftRight className="h-5 w-5 sm:h-4 sm:w-4 group-hover:text-primary transition-colors" />
                                    <span className="hidden sm:inline">Compare</span>
                                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white font-bold ring-2 ring-white">0</span>
                                </Link>
                                <Link href="#" className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 transition-all hidden md:flex items-center gap-2 active:translate-y-0">
                                    <span>For Consultancies</span>
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                                {/* Mobile Menu Button */}
                                <button
                                    onClick={() => setIsMobileMenuOpen(true)}
                                    className="xl:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
                                >
                                    <Menu className="h-6 w-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && mounted && createPortal(
                    <div className="fixed inset-0 z-[99999] xl:hidden isolate">
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Menu Content */}
                        <div className="absolute top-0 right-0 h-full w-[320px] bg-white shadow-2xl animate-in slide-in-from-right duration-300 flex flex-col z-[100001]">
                            {/* Header */}
                            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white">
                                <div className="relative w-[140px] h-10">
                                    <Image
                                        src="/logo.png"
                                        alt="ConsultancyKhabar"
                                        fill
                                        className="object-contain object-left"
                                        priority
                                    />
                                </div>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 -mr-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all"
                                >
                                    <X className="h-6 w-6" />
                                </button>
                            </div>

                            {/* Scrollable Content */}
                            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8 bg-white">
                                {/* Navigation Links */}
                                <nav className="flex flex-col gap-2">
                                    <Link
                                        href="/"
                                        className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all font-semibold text-base ${pathname === '/'
                                                ? 'bg-primary/5 text-primary shadow-sm ring-1 ring-primary/10'
                                                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                            }`}
                                    >
                                        <div className={`size-10 rounded-full flex items-center justify-center transition-colors ${pathname === '/' ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-500'
                                            }`}>
                                            <Search className="h-5 w-5" />
                                        </div>
                                        Home
                                    </Link>
                                    <Link
                                        href="/consultancies"
                                        className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all font-semibold text-base ${pathname === '/consultancies'
                                                ? 'bg-primary/5 text-primary shadow-sm ring-1 ring-primary/10'
                                                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                            }`}
                                    >
                                        <div className={`size-10 rounded-full flex items-center justify-center transition-colors ${pathname === '/consultancies' ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-500'
                                            }`}>
                                            <BookOpen className="h-5 w-5" />
                                        </div>
                                        All Consultancies
                                    </Link>
                                    <Link
                                        href="/countries"
                                        className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all font-semibold text-base ${pathname === '/countries'
                                                ? 'bg-primary/5 text-primary shadow-sm ring-1 ring-primary/10'
                                                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                            }`}
                                    >
                                        <div className={`size-10 rounded-full flex items-center justify-center transition-colors ${pathname === '/countries' ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-500'
                                            }`}>
                                            <MapPin className="h-5 w-5" />
                                        </div>
                                        Countries
                                    </Link>
                                    <Link
                                        href="/compare"
                                        className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all font-semibold text-base ${pathname === '/compare'
                                                ? 'bg-primary/5 text-primary shadow-sm ring-1 ring-primary/10'
                                                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                            }`}
                                    >
                                        <div className={`size-10 rounded-full flex items-center justify-center transition-colors ${pathname === '/compare' ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-500'
                                            }`}>
                                            <ArrowLeftRight className="h-5 w-5" />
                                        </div>
                                        Compare
                                    </Link>
                                    <Link
                                        href="/blog"
                                        className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all font-semibold text-base ${pathname === '/blog'
                                                ? 'bg-primary/5 text-primary shadow-sm ring-1 ring-primary/10'
                                                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                            }`}
                                    >
                                        <div className={`size-10 rounded-full flex items-center justify-center transition-colors ${pathname === '/blog' ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-500'
                                            }`}>
                                            <Activity className="h-5 w-5" />
                                        </div>
                                        Blog
                                    </Link>
                                </nav>

                                {/* Contact Info */}
                                <div className="mt-auto pt-6 border-t border-slate-100">
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-2">Need Help?</h4>
                                    <div className="space-y-3">
                                        <a href="tel:+97714440000" className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                                            <div className="size-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                                                <Phone className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-slate-500 font-medium mb-0.5">Call Us Now</p>
                                                <p className="text-sm font-bold text-slate-900">+977 1 4440000</p>
                                            </div>
                                        </a>
                                        <a href="mailto:info@consultancykhabar.com" className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                                            <div className="size-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                                                <Mail className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-slate-500 font-medium mb-0.5">Send an Email</p>
                                                <p className="text-sm font-bold text-slate-900">info@consultancykhabar.com</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Footer / CTA */}
                            <div className="p-6 bg-slate-50">
                                <Link href="#" className="flex w-full items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 active:scale-[0.98] transition-all">
                                    Register as Consultancy
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>,
                    document.body
                )}
            </header>
        </>
    )
}

import Link from 'next/link'
import Image from 'next/image'
import { BookOpen, Camera, Activity, MapPin, Phone, Mail } from 'lucide-react'
import { AnimatedIcon } from '@/components/ui/AnimatedIcon'

export function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Branding & Bio */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="relative w-[200px] sm:w-[350px] h-12 sm:h-20">
                                <Image
                                    src="/logo.png"
                                    alt="ConsultancyKhabar"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed mb-8 pr-8 max-w-md">
                            The leading directory for students in Nepal seeking global education. We provide verified information, reviews, and direct connections to top consultancies nationwide.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link href="#" className="size-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30">
                                <AnimatedIcon icon={BookOpen} className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="size-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30">
                                <AnimatedIcon icon={Camera} className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="size-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30">
                                <AnimatedIcon icon={Activity} className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6 font-heading text-lg">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-sm text-slate-500 hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-primary transition-colors"></span> Home</Link></li>

                            <li><Link href="/methodology" className="text-sm text-slate-500 hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-primary transition-colors"></span> Ranking Methodology</Link></li>
                            <li><Link href="/process-updates" className="text-sm text-slate-500 hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-primary transition-colors"></span> Visa Updates</Link></li>
                            <li><Link href="/blog" className="text-sm text-slate-500 hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-primary transition-colors"></span> Blog</Link></li>
                        </ul>
                    </div>


                    {/* Contact Us */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6 font-heading text-lg">Contact Us</h4>
                        <ul className="space-y-5">
                            <li className="flex gap-4">
                                <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                                    <MapPin className="h-4 w-4" />
                                </div>
                                <span className="text-sm text-slate-500 leading-tight">Putalisadak, Kathmandu, Nepal</span>
                            </li>
                            <li className="flex gap-4">
                                <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                                    <Phone className="h-4 w-4" />
                                </div>
                                <span className="text-sm text-slate-500 cursor-pointer hover:text-primary transition-colors">+977 1 4440000</span>
                            </li>
                            <li className="flex gap-4">
                                <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                                    <Mail className="h-4 w-4" />
                                </div>
                                <span className="text-sm text-slate-500 cursor-pointer hover:text-primary transition-colors">hello@consultancykhabar.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Bottom Copyright Bar */}
                <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-sm text-slate-400 font-medium">© 2026 ConsultancyKhabar. All Rights Reserved.</p>
                    <div className="flex items-center gap-8">
                        <Link href="/privacy" className="text-sm text-slate-500 hover:text-slate-800 font-medium transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-sm text-slate-500 hover:text-slate-800 font-medium transition-colors">Terms of Service</Link>
                        <Link href="#" className="text-sm text-slate-500 hover:text-slate-800 font-medium transition-colors">Cookie Settings</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

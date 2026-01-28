import { MapPin, Phone, Mail, Globe, Facebook, Instagram, Share2, ExternalLink, CalendarCheck } from 'lucide-react'
import Link from 'next/link'

interface ProfileSidebarProps {
    consultancy: {
        name: string
        phone?: string
        email?: string
        websiteUrl?: string
        facebookUrl?: string
        instagramUrl?: string
        tiktokUrl?: string
        officeLocations?: { city: string; address?: string; googleMapUrl?: string }[]
        rankingScore?: number
        reviewCount?: number
        googleReviewsUrl?: string
    }
}

export function ProfileSidebar({ consultancy }: ProfileSidebarProps) {
    const mainLocation = consultancy.officeLocations?.[0]

    return (
        <div className="lg:pl-8 lg:border-l lg:border-slate-100 h-full">
            <div className="sticky top-32 space-y-10">
                {/* Visual Anchor: Map/Location */}
                <div className="relative aspect-[4/3] w-full bg-slate-100 rounded-2xl overflow-hidden group">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzzKzU6aov0CFtTo3GgcIlLsdxoR9rONZakCcqWH2D1QP1WsOQVBwhtZwpYcHp1-PaqfGVBHGd9n2_kjKjzAYPzMYlj5in47lLPuumPTvpCfJG4cchgTjbFnqEjY_rPTeRbWXsH2N93cGXBpeuP4RpI5BSuF8c3TUFxBrui6rIjp0wm43Ac4aMZiUtwb2kRJVU9zcmleAMKALBXhWE55r35Bp3OgZeNbZ5erhji4fEYRdWaW69RHjFPbaNjZailDTHhre0fe8XUcwi")' }}
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />

                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-bold text-slate-900 shadow-sm flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-red-500" />
                        {mainLocation?.city || 'Head Office'}
                    </div>
                </div>

                {/* Primary CTA */}
                <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">
                        Interested in {consultancy.name}?
                    </h3>
                    <p className="text-sm text-slate-500 mb-4 leading-relaxed">
                        Book a free session to discuss your options.
                    </p>

                    <Link href="#contact-form" className="group w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30">
                        <CalendarCheck className="w-4 h-4" />
                        Book Consultation
                    </Link>
                </div>

                {/* Detailed Contact info */}
                <div className="space-y-6 pt-6 border-t border-slate-100">
                    {consultancy.phone && (
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Phone</p>
                            <a href={`tel:${consultancy.phone}`} className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors font-mono">
                                {consultancy.phone}
                            </a>
                        </div>
                    )}

                    {consultancy.email && (
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email</p>
                            <a href={`mailto:${consultancy.email}`} className="text-base font-medium text-slate-600 hover:text-blue-600 transition-colors break-all">
                                {consultancy.email}
                            </a>
                        </div>
                    )}

                    {consultancy.websiteUrl && (
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Online</p>
                            <a href={consultancy.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-blue-600 hover:underline flex items-center gap-1">
                                Visit Verified Website <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                    )}
                </div>

                {/* Socials */}
                <div className="flex gap-2 pt-4">
                    {consultancy.facebookUrl && (
                        <a href={consultancy.facebookUrl} target="_blank" className="size-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-colors">
                            <Facebook className="w-4 h-4" />
                        </a>
                    )}
                    {consultancy.instagramUrl && (
                        <a href={consultancy.instagramUrl} target="_blank" className="size-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-pink-600 hover:text-white transition-colors">
                            <Instagram className="w-4 h-4" />
                        </a>
                    )}
                    <button className="size-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-colors">
                        <Share2 className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    )
}

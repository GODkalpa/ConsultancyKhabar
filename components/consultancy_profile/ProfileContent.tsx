"use client"

import { BookOpen, CheckCircle, GraduationCap, ArrowRight, Plane, MapPin, Globe, Sparkles, ArrowUpRight } from 'lucide-react'
import { AnimatedIcon } from '@/components/ui/AnimatedIcon'
import { PortableText } from 'next-sanity'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface OverviewProps {
    description?: any
    universities?: string[]
    classes?: string[]
}

export function Overview({ description, universities, classes }: OverviewProps) {
    return (
        <section id="overview" className="scroll-mt-32">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
                <div className="md:col-span-12 lg:col-span-4 lg:sticky lg:top-32">
                    <h2 className="text-3xl md:text-5xl font-black font-heading text-slate-900 leading-[0.95] tracking-tight mb-8">
                        We build<br className="hidden md:block" />
                        <span className="text-blue-600 block md:inline"> Futures.</span>
                    </h2>

                    {/* Cleaner List - No Box */}
                    <div className="space-y-6 border-t border-slate-100 pt-6">
                        <div className="flex flex-col gap-1">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Focus</span>
                            <span className="font-bold text-slate-900 text-lg flex items-center gap-2">
                                <GraduationCap className="w-5 h-5 text-blue-600" /> University Admissions
                            </span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Network</span>
                            <span className="font-bold text-slate-900 text-lg flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-emerald-600" /> Global Offices
                            </span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Training</span>
                            <span className="font-bold text-slate-900 text-lg flex items-center gap-2">
                                <BookOpen className="w-5 h-5 text-purple-600" /> Expert Test Prep
                            </span>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-12 lg:col-span-8">
                    <div className="prose prose-lg prose-slate max-w-none text-slate-600 leading-8">
                        <PortableText value={description} />
                    </div>
                </div>
            </div>
        </section>
    )
}

interface ServicesListProps {
    services?: { title: string; description?: string; icon?: any }[]
}

export function ServicesList({ services }: ServicesListProps) {
    /* Editorial List Design: Numbered, Divider-separated rows. High-end Magazine feel. */
    if (!services || services.length === 0) return null

    return (
        <section id="services" className="scroll-mt-32 border-t border-slate-900 pt-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
                <h2 className="text-3xl md:text-5xl font-black font-heading text-slate-900 tracking-tight">
                    Our Services
                </h2>
                <div className="text-slate-500 font-medium md:max-w-xs text-right hidden md:block">
                    Comprehensive support for every step of your journey abroad.
                </div>
            </div>

            <div className="grid grid-cols-1 gap-0">
                {services.map((service, idx) => (
                    <div key={idx} className="group flex flex-col md:flex-row md:items-start gap-6 md:gap-12 py-10 border-b border-slate-200 hover:border-slate-900 transition-colors duration-500 cursor-default">
                        {/* 01. Number */}
                        <div className="hidden md:block text-sm font-bold text-slate-300 md:w-12 pt-1 group-hover:text-blue-600 transition-colors">
                            {(idx + 1).toString().padStart(2, '0')}
                        </div>

                        {/* Title & Description */}
                        <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors flex items-center gap-3">
                                {service.title}
                                <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-600" />
                            </h3>
                            <p className="text-slate-500 leading-relaxed text-lg max-w-2xl">
                                {service.description || `Expert guidance and personalized support to ensure your success in ${service.title.toLowerCase()}.`}
                            </p>
                        </div>

                        {/* Icon (Subtle) */}
                        <div className="md:w-32 flex justify-end">
                            <div className="size-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                <Sparkles className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

interface CountriesListProps {
    countries?: { name: string; flag?: string }[]
}



export function CountriesList({ countries }: CountriesListProps) {
    if (!countries || countries.length === 0) return null

    return (
        <section id="countries" className="scroll-mt-32 pt-12 pb-12 md:pb-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-slate-100 pb-4">
                    <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                        <Globe className="w-6 h-6 text-slate-400" />
                        Study Destinations
                    </h3>
                    <p className="text-slate-500 font-medium">
                        Explore opportunities in these countries
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {countries.map((country) => (
                        <div
                            key={country.name}
                            className="group bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-4 hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/5 transition-all duration-300 cursor-pointer"
                        >
                            {/* Flag Circle */}
                            <div className="shrink-0 size-12 rounded-full bg-slate-50 border border-slate-100 overflow-hidden relative group-hover:ring-2 group-hover:ring-blue-500/20 transition-all">
                                {country.flag && country.flag !== 'nan' ? (
                                    <img src={country.flag} alt={country.name} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-slate-100">
                                        <Globe className="w-6 h-6 text-slate-300 group-hover:text-blue-500 transition-colors" />
                                    </div>
                                )}
                            </div>

                            {/* Name & Arrow */}
                            <div className="flex-1 flex items-center justify-between">
                                <h4 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                                    {country.name}
                                </h4>
                                <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 transition-colors" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

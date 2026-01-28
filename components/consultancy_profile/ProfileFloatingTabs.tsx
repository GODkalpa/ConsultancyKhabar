"use client"

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

export function ProfileFloatingTabs() {
    const [activeTab, setActiveTab] = useState('overview')
    const [isScrolled, setIsScrolled] = useState(false)

    const tabs = [
        { id: 'overview', label: 'Overview' },
        { id: 'services', label: 'Services' },
        { id: 'countries', label: 'Destinations' },
        { id: 'contact', label: 'Contact' },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 600)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (id: string) => {
        setActiveTab(id)
        const element = document.getElementById(id)
        if (element) {
            const offset = 120 // Height of sticky header
            const bodyRect = document.body.getBoundingClientRect().top
            const elementRect = element.getBoundingClientRect().top
            const elementPosition = elementRect - bodyRect
            const offsetPosition = elementPosition - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }

    return (
        <div className={cn(
            "fixed top-4 left-0 right-0 z-50 flex justify-center transition-all duration-300",
            isScrolled ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0 pointer-events-none"
        )}>
            <div className="bg-white/80 backdrop-blur-lg border border-white/20 shadow-lg shadow-slate-200/20 rounded-full p-1.5 flex gap-1">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => scrollToSection(tab.id)}
                        className={cn(
                            "px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300",
                            activeTab === tab.id
                                ? "bg-slate-900 text-white shadow-md transform scale-105"
                                : "text-slate-500 hover:text-slate-900 hover:bg-slate-100/50"
                        )}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    )
}

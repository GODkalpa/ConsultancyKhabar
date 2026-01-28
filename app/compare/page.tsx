'use client'

import { useState } from 'react'
import Link from 'next/link'
import { X, Star, MapPin, BadgeCheck, Phone, Globe, DollarSign, Building2 } from 'lucide-react'

// Mock data - will be replaced with Sanity fetch
const allConsultancies = [
    { id: '1', name: 'Global Education Services', slug: 'global-education-services', rating: 4.8, location: 'Kathmandu', verified: true, services: ['IELTS', 'PTE', 'Visa'], countries: ['Australia', 'Canada', 'UK'], priceRange: '$$', phone: '+977-1-4440001' },
    { id: '2', name: 'Nepal Study Abroad', slug: 'nepal-study-abroad', rating: 4.6, location: 'Pokhara', verified: true, services: ['IELTS', 'Visa', 'Counseling'], countries: ['Australia', 'USA'], priceRange: '$', phone: '+977-1-4440002' },
    { id: '3', name: 'Future Path Consultancy', slug: 'future-path-consultancy', rating: 4.5, location: 'Kathmandu', verified: false, services: ['PTE', 'Visa'], countries: ['Canada', 'UK'], priceRange: '$$$', phone: '+977-1-4440003' },
    { id: '4', name: 'Bright Future Education', slug: 'bright-future-education', rating: 4.4, location: 'Lalitpur', verified: true, services: ['IELTS', 'University Admission'], countries: ['Japan', 'Korea'], priceRange: '$$', phone: '+977-1-4440004' },
]

export default function ComparePage() {
    const [selected, setSelected] = useState<string[]>([])

    const toggleSelection = (id: string) => {
        if (selected.includes(id)) {
            setSelected(selected.filter(s => s !== id))
        } else if (selected.length < 3) {
            setSelected([...selected, id])
        }
    }

    const selectedConsultancies = allConsultancies.filter(c => selected.includes(c.id))

    return (
        <main className="max-w-[1440px] mx-auto px-6 lg:px-20 py-12">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-slate-900 mb-4">
                    Compare Consultancies
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Select up to 3 consultancies to compare their services, ratings, and offerings side by side.
                </p>
            </div>

            {/* Selection Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {allConsultancies.map((consultancy) => (
                    <button
                        key={consultancy.id}
                        onClick={() => toggleSelection(consultancy.id)}
                        className={`p-4 rounded-xl border-2 transition-all text-left ${selected.includes(consultancy.id)
                                ? 'border-primary bg-primary/5'
                                : 'border-slate-200 hover:border-primary/50'
                            } ${selected.length >= 3 && !selected.includes(consultancy.id) ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={selected.length >= 3 && !selected.includes(consultancy.id)}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <Building2 className="h-5 w-5 text-slate-400" />
                            <span className="font-bold text-sm text-slate-900 truncate">{consultancy.name}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                            <Star className="h-3 w-3 text-orange-400 fill-orange-400" /> {consultancy.rating}
                            {consultancy.verified && <BadgeCheck className="h-3 w-3 text-success" />}
                        </div>
                    </button>
                ))}
            </div>

            {/* Comparison Table */}
            {selectedConsultancies.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="p-4 text-left text-sm font-bold text-slate-900 bg-slate-50 rounded-tl-xl">Feature</th>
                                {selectedConsultancies.map((c, i) => (
                                    <th key={c.id} className={`p-4 text-left text-sm font-bold text-slate-900 bg-slate-50 ${i === selectedConsultancies.length - 1 ? 'rounded-tr-xl' : ''}`}>
                                        <div className="flex items-center justify-between">
                                            <span>{c.name}</span>
                                            <button onClick={() => toggleSelection(c.id)} className="text-slate-400 hover:text-slate-600">
                                                <X className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            <tr>
                                <td className="p-4 text-sm font-medium text-slate-600">Rating</td>
                                {selectedConsultancies.map(c => (
                                    <td key={c.id} className="p-4 text-sm">
                                        <span className="flex items-center gap-1 font-bold text-slate-900">
                                            <Star className="h-4 w-4 text-orange-400 fill-orange-400" /> {c.rating}
                                        </span>
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="p-4 text-sm font-medium text-slate-600">Verified</td>
                                {selectedConsultancies.map(c => (
                                    <td key={c.id} className="p-4 text-sm">
                                        {c.verified ? (
                                            <span className="flex items-center gap-1 text-success font-bold"><BadgeCheck className="h-4 w-4" /> Yes</span>
                                        ) : (
                                            <span className="text-slate-400">No</span>
                                        )}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="p-4 text-sm font-medium text-slate-600">Location</td>
                                {selectedConsultancies.map(c => (
                                    <td key={c.id} className="p-4 text-sm flex items-center gap-1"><MapPin className="h-4 w-4 text-slate-400" /> {c.location}</td>
                                ))}
                            </tr>
                            <tr>
                                <td className="p-4 text-sm font-medium text-slate-600">Price Range</td>
                                {selectedConsultancies.map(c => (
                                    <td key={c.id} className="p-4 text-sm flex items-center gap-1"><DollarSign className="h-4 w-4 text-slate-400" /> {c.priceRange}</td>
                                ))}
                            </tr>
                            <tr>
                                <td className="p-4 text-sm font-medium text-slate-600">Services</td>
                                {selectedConsultancies.map(c => (
                                    <td key={c.id} className="p-4 text-sm">
                                        <div className="flex flex-wrap gap-1">
                                            {c.services.map(s => <span key={s} className="bg-slate-100 px-2 py-0.5 rounded text-xs">{s}</span>)}
                                        </div>
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="p-4 text-sm font-medium text-slate-600">Countries</td>
                                {selectedConsultancies.map(c => (
                                    <td key={c.id} className="p-4 text-sm">
                                        <div className="flex flex-wrap gap-1">
                                            {c.countries.map(s => <span key={s} className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs">{s}</span>)}
                                        </div>
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="p-4 text-sm font-medium text-slate-600">Contact</td>
                                {selectedConsultancies.map(c => (
                                    <td key={c.id} className="p-4 text-sm flex items-center gap-1"><Phone className="h-4 w-4 text-slate-400" /> {c.phone}</td>
                                ))}
                            </tr>
                            <tr>
                                <td className="p-4"></td>
                                {selectedConsultancies.map(c => (
                                    <td key={c.id} className="p-4">
                                        <Link href={`/consultancies/${c.slug}`} className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">
                                            View Profile
                                        </Link>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="text-center py-16 bg-slate-50 rounded-2xl">
                    <p className="text-slate-500">Select consultancies above to start comparing.</p>
                </div>
            )}
        </main>
    )
}

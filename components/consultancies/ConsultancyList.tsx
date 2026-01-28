'use client'

import { useState, useMemo, useEffect } from 'react'
import { FilterSidebar } from './FilterSidebar'
import { ConsultancyRow } from './ConsultancyRow'
import { Pagination } from './Pagination'
import { Search, Building2, ArrowUpDown, Filter, X } from 'lucide-react'
import { Consultancy } from '@/lib/sanity/types'

export interface FilterState {
    sortBy: string
    services: string[]
    countries: string[]
    cities: string[]
    verifiedOnly: boolean
}

interface ConsultancyListProps {
    initialConsultancies: Consultancy[]
}

const ITEMS_PER_PAGE = 10 // Specific to List View

export function ConsultancyList({ initialConsultancies }: ConsultancyListProps) {
    const [searchQuery, setSearchQuery] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [filters, setFilters] = useState<FilterState>({
        sortBy: 'Popularity',
        services: [],
        countries: [],
        cities: [],
        verifiedOnly: false
    })

    // Prevent scrolling when mobile filter is open
    useEffect(() => {
        if (isFilterOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isFilterOpen])

    // Filter and Sort Logic
    const filteredConsultancies = useMemo(() => {
        let result = [...initialConsultancies]

        // Search
        if (searchQuery) {
            const query = searchQuery.toLowerCase()
            result = result.filter(c =>
                c.name.toLowerCase().includes(query) ||
                c.citiesServed?.some(city => city.toLowerCase().includes(query)) ||
                c.countries?.some(country => country.name.toLowerCase().includes(query))
            )
        }

        // Filter: Services
        if (filters.services.length > 0) {
            result = result.filter(c =>
                filters.services.some(filterService => {
                    const fs = filterService.toLowerCase().trim()

                    // 1. Check strict Services array if it exists
                    const hasService = c.services?.some(s => {
                        const st = s.title.toLowerCase()
                        if (st === fs) return true
                        if (st.includes(fs) || fs.includes(st)) return true
                        // Synonyms for common terms
                        if (fs.includes('ielts') && st.includes('test preparation')) return true
                        if (fs.includes('coaching') && st.includes('preparation')) return true
                        return false
                    })

                    // 2. Check Description (text fallback)
                    const hasKeywordInDesc = c.description?.some((block: any) =>
                        block.children?.some((child: any) => {
                            // Safe access to text property
                            const text = (child as any).text || ''
                            if (typeof text !== 'string') return false

                            const t = text.toLowerCase()
                            return t.includes(fs) ||
                                (fs.includes('ielts') && t.includes('ielts')) ||
                                (fs.includes('visa') && t.includes('visa'))
                        })
                    )

                    return hasService || hasKeywordInDesc
                })
            )
        }

        // Filter: Countries
        if (filters.countries.length > 0) {
            result = result.filter(c =>
                c.countries?.some(target =>
                    filters.countries.some(filterCountry => {
                        const t = target.name.toLowerCase().trim()
                        const f = filterCountry.toLowerCase().trim()
                        if (t === f) return true
                        // Synonym matching
                        if ((f === 'usa' && t === 'united states') || (f === 'united states' && t === 'usa')) return true
                        if ((f === 'uk' && t === 'united kingdom') || (f === 'united kingdom' && t === 'uk')) return true
                        return t.includes(f) || f.includes(t)
                    })
                )
            )
        }

        // Filter: Cities
        if (filters.cities.length > 0) {
            result = result.filter(c =>
                c.citiesServed?.some(city =>
                    filters.cities.some(filterCity =>
                        city.toLowerCase().trim() === filterCity.toLowerCase().trim()
                    )
                )
            )
        }

        // Filter: Verified
        if (filters.verifiedOnly) {
            result = result.filter(c => c.verificationBadge === 'verified')
        }

        // Sort
        switch (filters.sortBy) {
            case 'Highest Rating':
                result.sort((a, b) => (b.rankingScore || 0) - (a.rankingScore || 0))
                break
            case 'Name (A-Z)':
                result.sort((a, b) => a.name.localeCompare(b.name))
                break
            case 'Newest Listed':
                result.sort((a, b) => new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime())
                break
            default:
                result.sort((a, b) => (b.rankingScore || 0) - (a.rankingScore || 0))
                break
        }

        return result
    }, [initialConsultancies, searchQuery, filters])

    // Pagination Logic
    const totalPages = Math.ceil(filteredConsultancies.length / ITEMS_PER_PAGE)
    const paginatedConsultancies = filteredConsultancies.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    )

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-8 bg-white min-h-screen">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar - Desktop */}
                <div className="hidden lg:block w-72 flex-shrink-0">
                    <FilterSidebar
                        filters={filters}
                        onFilterChange={(newFilters) => {
                            setFilters(newFilters)
                            setCurrentPage(1)
                        }}
                    />
                </div>

                {/* Main Content */}
                <div className="flex-1 min-w-0">
                    {/* Header */}
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold text-slate-900 mb-2">Find Your Education Partner</h1>
                        <p className="text-slate-500 text-lg">
                            Browsing {filteredConsultancies.length} consultancies in Nepal
                        </p>
                    </div>

                    {/* Search & Mobile Filter Controls */}
                    <div className="mb-8 flex flex-col md:flex-row items-stretch gap-4">
                        <div className="relative flex-1">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                <Search className="h-5 w-5" />
                            </span>
                            <input
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 text-sm focus:bg-white focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                                placeholder="Search by name, location, or country..."
                                type="text"
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value)
                                    setCurrentPage(1)
                                }}
                            />
                        </div>

                        <div className="flex gap-2">
                            {/* Filter Toggle (Mobile) */}
                            <button
                                onClick={() => setIsFilterOpen(true)}
                                className="lg:hidden px-4 py-3 bg-white border border-slate-200 rounded-xl flex items-center gap-2 text-sm font-bold text-slate-700 hover:bg-slate-50 active:bg-slate-100 transition-colors"
                            >
                                <Filter className="h-4 w-4" />
                                Filters
                            </button>

                            {/* Sort Dropdown */}
                            <div className="relative min-w-[160px] md:min-w-[180px] flex-1 md:flex-none">
                                <ArrowUpDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                                <select
                                    className="w-full h-full appearance-none bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 focus:ring-2 focus:ring-slate-900 outline-none cursor-pointer"
                                    value={filters.sortBy}
                                    onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                                >
                                    <option value="Popularity">Most Popular</option>
                                    <option value="Highest Rating">Highest Rated</option>
                                    <option value="Name (A-Z)">Name (A-Z)</option>
                                    <option value="Newest Listed">Newest Added</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Active Filters (Mobile/General review) */}
                    {(filters.countries.length > 0 || filters.cities.length > 0) && (
                        <div className="flex flex-wrap gap-2 mb-6">
                            {filters.countries.map(country => (
                                <button
                                    key={country}
                                    onClick={() => {
                                        setFilters({
                                            ...filters,
                                            countries: filters.countries.filter(c => c !== country)
                                        })
                                    }}
                                    className="inline-flex items-center gap-1 px-3 py-1 bg-slate-900 text-white text-xs font-bold rounded-full hover:bg-slate-800 transition-colors"
                                >
                                    {country}
                                    <span className="opacity-60">×</span>
                                </button>
                            ))}
                            {filters.cities.map(city => (
                                <button
                                    key={city}
                                    onClick={() => {
                                        setFilters({
                                            ...filters,
                                            cities: filters.cities.filter(c => c !== city)
                                        })
                                    }}
                                    className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-full hover:bg-slate-200 transition-colors"
                                >
                                    {city}
                                    <span className="opacity-60">×</span>
                                </button>
                            ))}
                            <button
                                onClick={() => setFilters({ ...filters, countries: [], cities: [], services: [], verifiedOnly: false })}
                                className="text-xs font-bold text-red-600 hover:underline py-1 px-2"
                            >
                                Clear All
                            </button>
                        </div>
                    )}

                    {/* List Content */}
                    {paginatedConsultancies.length > 0 ? (
                        <>
                            <div className="flex flex-col gap-4">
                                {paginatedConsultancies.map((consultancy) => (
                                    <ConsultancyRow key={consultancy._id} consultancy={consultancy} />
                                ))}
                            </div>

                            <div className="mt-8 pt-8 border-t border-slate-100">
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={handlePageChange}
                                />
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-24 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                            <Building2 className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <h3 className="text-lg font-bold text-slate-900">No consultancies found</h3>
                            <p className="text-slate-500 mb-6">Try adjusting your filters or search terms.</p>
                            <button
                                onClick={() => {
                                    setFilters({
                                        sortBy: 'Popularity',
                                        services: [],
                                        countries: [],
                                        cities: [],
                                        verifiedOnly: false
                                    })
                                    setSearchQuery('')
                                }}
                                className="bg-slate-900 text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors"
                            >
                                Reset Search
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Filter Overlay */}
            {isFilterOpen && (
                <div className="fixed inset-0 z-[100] lg:hidden">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200"
                        onClick={() => setIsFilterOpen(false)}
                    />

                    {/* Sidebar Content */}
                    <div className="absolute top-0 left-0 h-full w-[300px] bg-white shadow-2xl animate-in slide-in-from-left duration-300 flex flex-col">
                        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                            <h2 className="font-heading font-bold text-lg text-slate-900 flex items-center gap-2">
                                <Filter className="h-5 w-5 text-primary" />
                                Filters
                            </h2>
                            <button
                                onClick={() => setIsFilterOpen(false)}
                                className="p-2 -mr-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto p-4 bg-slate-50/30">
                            <FilterSidebar
                                filters={filters}
                                onFilterChange={(newFilters) => {
                                    setFilters(newFilters)
                                    // Optional: Close on filter change? better to keep open so user can select multiple
                                }}
                                className="w-full"
                            />
                        </div>
                        <div className="p-4 border-t border-slate-100 bg-white">
                            <button
                                onClick={() => setIsFilterOpen(false)}
                                className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold shadow-lg shadow-slate-900/20 active:scale-[0.98] transition-all"
                            >
                                Show Results
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

'use client'

import { Search, SlidersHorizontal, ChevronDown, Check, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState, useEffect } from 'react'

export interface FilterState {
    sortBy: string
    services: string[]
    countries: string[]
    cities: string[]
    verifiedOnly: boolean
}

interface FilterBarProps {
    searchQuery: string
    onSearchChange: (query: string) => void
    onFilterChange: (filters: FilterState) => void
    className?: string
}

export function FilterBar({ searchQuery, onSearchChange, onFilterChange, className }: FilterBarProps) {
    const [filters, setFilters] = useState<FilterState>({
        sortBy: 'Popularity',
        services: [],
        countries: [],
        cities: [],
        verifiedOnly: false
    })

    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

    // Notify parent of filter changes
    useEffect(() => {
        onFilterChange(filters)
    }, [filters, onFilterChange])

    const toggleFilter = (key: 'services' | 'countries' | 'cities', value: string) => {
        setFilters(prev => {
            const current = prev[key]
            const updated = current.includes(value)
                ? current.filter(item => item !== value)
                : [...current, value]
            return { ...prev, [key]: updated }
        })
    }

    const clearFilters = () => {
        setFilters({
            sortBy: 'Popularity',
            services: [],
            countries: [],
            cities: [],
            verifiedOnly: false
        })
        setActiveDropdown(null)
    }

    const hasActiveFilters = filters.services.length > 0 || filters.countries.length > 0 || filters.cities.length > 0 || filters.verifiedOnly

    // Close dropdowns when clicking outside (simple implementation for now, ideally use a hook)
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (activeDropdown && !(e.target as Element).closest('.filter-dropdown')) {
                setActiveDropdown(null)
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [activeDropdown])

    const FilterDropdown = ({ title, type, options }: { title: string, type: 'services' | 'countries' | 'cities', options: string[] }) => (
        <div className="relative filter-dropdown">
            <button
                onClick={(e) => {
                    e.stopPropagation()
                    setActiveDropdown(activeDropdown === type ? null : type)
                }}
                className={cn(
                    "flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all border",
                    filters[type].length > 0 || activeDropdown === type
                        ? "bg-slate-900 text-white border-slate-900"
                        : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                )}
            >
                {title}
                {filters[type].length > 0 && (
                    <span className="flex items-center justify-center bg-white text-slate-900 text-[10px] w-5 h-5 rounded-full -mr-1">
                        {filters[type].length}
                    </span>
                )}
                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", activeDropdown === type ? "rotate-180" : "")} />
            </button>

            {activeDropdown === type && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-100 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="space-y-1 max-h-64 overflow-y-auto custom-scrollbar">
                        {options.map(option => (
                            <label key={option} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 cursor-pointer group">
                                <div className={cn(
                                    "w-4 h-4 rounded border flex items-center justify-center transition-colors",
                                    filters[type].includes(option)
                                        ? "bg-primary border-primary"
                                        : "border-slate-300 group-hover:border-primary"
                                )}>
                                    {filters[type].includes(option) && <Check className="h-2.5 w-2.5 text-white" />}
                                </div>
                                <span className={cn("text-sm", filters[type].includes(option) ? "font-semibold text-slate-900" : "text-slate-600")}>
                                    {option}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )

    return (
        <div className={cn("w-full sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 pb-4 pt-2", className)}>
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col gap-4">
                {/* Search and Main Filters Row */}
                <div className="flex flex-col md:flex-row items-center gap-4">
                    {/* Search Input */}
                    <div className="relative flex-1 w-full md:max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => onSearchChange(e.target.value)}
                            placeholder="Search consultancies..."
                            className="w-full bg-slate-100/50 hover:bg-slate-100 focus:bg-white border-0 ring-1 ring-slate-200 rounded-full py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary transition-all outline-none"
                        />
                    </div>

                    {/* Filter Pills */}
                    <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                        <FilterDropdown
                            title="Countries"
                            type="countries"
                            options={['Australia', 'USA', 'Canada', 'UK', 'New Zealand', 'Japan', 'Europe']}
                        />
                        <FilterDropdown
                            title="Services"
                            type="services"
                            options={['IELTS/PTE', 'Visa Processing', 'Scholarship', 'Counseling']}
                        />
                        <FilterDropdown
                            title="Location"
                            type="cities"
                            options={['Kathmandu', 'Pokhara', 'Chitwan', 'Butwal', 'Biratnagar']}
                        />

                        <div className="h-6 w-px bg-slate-200 mx-2 flex-shrink-0" />

                        <button
                            onClick={() => setFilters(prev => ({ ...prev, verifiedOnly: !prev.verifiedOnly }))}
                            className={cn(
                                "flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all border flex-shrink-0",
                                filters.verifiedOnly
                                    ? "bg-blue-50 text-blue-600 border-blue-200"
                                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                            )}
                        >
                            Verified
                            {filters.verifiedOnly && <Check className="h-3.5 w-3.5" />}
                        </button>

                        {hasActiveFilters && (
                            <button
                                onClick={clearFilters}
                                className="ml-auto md:ml-2 text-xs font-bold text-slate-500 hover:text-red-500 hover:bg-red-50 px-3 py-2 rounded-full transition-colors flex items-center gap-1 flex-shrink-0"
                            >
                                <X className="h-3.5 w-3.5" />
                                Clear
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

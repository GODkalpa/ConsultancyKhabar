import { FilterSidebar } from '@/components/consultancies/FilterSidebar'
import { ConsultancyGrid } from '@/components/consultancies/ConsultancyGrid'
import { Pagination } from '@/components/consultancies/Pagination'
import { Search } from 'lucide-react'

export default function ConsultanciesPage() {
    return (
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
                <FilterSidebar />

                <div className="flex-1">
                    {/* Header */}
                    <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-2xl font-bold">All Consultancies</h1>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">Showing 124 verified education partners in Nepal</p>
                        </div>
                        <div className="relative max-w-md w-full">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                <Search className="h-5 w-5" />
                            </span>
                            <input
                                className="w-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                placeholder="Search by name or keyword..."
                                type="text"
                            />
                        </div>
                    </div>

                    <ConsultancyGrid />
                    <Pagination />
                </div>
            </div>
        </div>
    )
}

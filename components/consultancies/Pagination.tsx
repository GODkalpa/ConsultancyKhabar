import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PaginationProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    if (totalPages <= 1) return null

    // Generate page numbers to show
    const getPageNumbers = () => {
        const delta = 2
        const range = []
        const rangeWithDots = []
        let l

        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
                range.push(i)
            }
        }

        for (let i of range) {
            if (l) {
                if (i - l === 2) {
                    rangeWithDots.push(l + 1)
                } else if (i - l !== 1) {
                    rangeWithDots.push('...')
                }
            }
            rangeWithDots.push(i)
            l = i
        }

        return rangeWithDots
    }

    return (
        <nav className="mt-12 flex items-center justify-center gap-2">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 hover:bg-primary/5 hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <ChevronLeft className="h-5 w-5" />
            </button>

            {getPageNumbers().map((page, i) => (
                typeof page === 'number' ? (
                    <button
                        key={i}
                        onClick={() => onPageChange(page)}
                        className={cn(
                            "w-10 h-10 flex items-center justify-center rounded-lg transition-colors font-bold text-sm",
                            currentPage === page
                                ? "bg-primary text-white shadow-primary/25 shadow-lg"
                                : "border border-slate-200 hover:bg-primary/5 hover:text-primary text-slate-600"
                        )}
                    >
                        {page}
                    </button>
                ) : (
                    <span key={i} className="px-2 text-slate-400">...</span>
                )
            ))}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 hover:bg-primary/5 hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <ChevronRight className="h-5 w-5" />
            </button>
        </nav>
    )
}

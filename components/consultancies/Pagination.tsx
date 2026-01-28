import { ChevronLeft, ChevronRight } from 'lucide-react'

export function Pagination() {
    return (
        <nav className="mt-12 flex items-center justify-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-primary/5 hover:text-primary transition-colors">
                <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">1</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-primary/5 hover:text-primary transition-colors">2</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-primary/5 hover:text-primary transition-colors">3</button>
            <span className="px-2 text-slate-400">...</span>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-primary/5 hover:text-primary transition-colors">12</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-primary/5 hover:text-primary transition-colors">
                <ChevronRight className="h-5 w-5" />
            </button>
        </nav>
    )
}

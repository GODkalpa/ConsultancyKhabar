import Link from 'next/link'

export function ProfileTabs() {
    return (
        <nav className="sticky top-[72px] z-40 bg-white/80 backdrop-blur-md py-4 border-b border-slate-100">
            <div className="flex gap-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
                <Link href="#" className="relative flex flex-col items-center justify-center text-primary pb-2 font-heading font-bold text-sm min-w-fit group">
                    Overview
                    <span className="absolute -bottom-[17px] w-full h-0.5 bg-primary rounded-t-full"></span>
                </Link>
                <Link href="#services" className="relative flex flex-col items-center justify-center text-slate-500 hover:text-primary pb-2 font-heading font-bold text-sm min-w-fit transition-colors group">
                    Services
                    <span className="absolute -bottom-[17px] w-0 h-0.5 bg-primary rounded-t-full group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link href="#countries" className="relative flex flex-col items-center justify-center text-slate-500 hover:text-primary pb-2 font-heading font-bold text-sm min-w-fit transition-colors group">
                    Countries
                    <span className="absolute -bottom-[17px] w-0 h-0.5 bg-primary rounded-t-full group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link href="#reviews" className="relative flex flex-col items-center justify-center text-slate-500 hover:text-primary pb-2 font-heading font-bold text-sm min-w-fit transition-colors group">
                    Reviews
                    <span className="absolute -bottom-[17px] w-0 h-0.5 bg-primary rounded-t-full group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link href="#location" className="relative flex flex-col items-center justify-center text-slate-500 hover:text-primary pb-2 font-heading font-bold text-sm min-w-fit transition-colors group">
                    Branches
                    <span className="absolute -bottom-[17px] w-0 h-0.5 bg-primary rounded-t-full group-hover:w-full transition-all duration-300"></span>
                </Link>
            </div>
        </nav>
    )
}

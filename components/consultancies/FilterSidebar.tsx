'use client'

import { Briefcase, Globe, MapPin, Filter } from 'lucide-react'
import { AnimatedIcon } from '@/components/ui/AnimatedIcon'

export function FilterSidebar() {
    return (
        <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-2xl border border-slate-100 p-6 sticky top-24 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl font-bold font-heading text-slate-900 flex items-center gap-2">
                        <Filter className="h-5 w-5 text-primary" />
                        Filters
                    </h2>
                    <button className="text-primary text-xs font-bold hover:underline bg-primary/5 px-2 py-1 rounded-md transition-colors hover:bg-primary/10">Reset All</button>
                </div>

                {/* Sort By */}
                <div className="mb-8">
                    <label className="block text-sm font-bold text-slate-900 mb-3 font-heading">Sort By</label>
                    <div className="relative">
                        <select className="w-full bg-slate-50 border-0 ring-1 ring-slate-200 rounded-xl text-sm p-4 appearance-none focus:ring-2 focus:ring-primary font-medium text-slate-700 cursor-pointer hover:bg-slate-100 transition-colors">
                            <option>Popularity</option>
                            <option>Highest Rating</option>
                            <option>Newest Listed</option>
                            <option>Name (A-Z)</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-8">
                    {/* Services */}
                    <div>
                        <div className="flex items-center gap-2 mb-4 text-slate-900">
                            <div className="size-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                                <AnimatedIcon icon={Briefcase} className="h-4 w-4" />
                            </div>
                            <span className="font-bold text-base font-heading">Services</span>
                        </div>
                        <div className="space-y-2.5">
                            {['IELTS/PTE Coaching', 'Visa Processing', 'Documentation', 'Interview Prep'].map((service, i) => (
                                <label key={i} className="flex items-center gap-3 cursor-pointer group hover:bg-slate-50 p-2 rounded-lg transition-colors -mx-2">
                                    <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary shadow-sm" defaultChecked={i === 0} />
                                    <span className="text-sm text-slate-600 font-medium group-hover:text-primary transition-colors">{service}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Countries */}
                    <div>
                        <div className="flex items-center gap-2 mb-4 text-slate-900">
                            <div className="size-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600">
                                <AnimatedIcon icon={Globe} className="h-4 w-4" />
                            </div>
                            <span className="font-bold text-base font-heading">Countries</span>
                        </div>
                        <div className="space-y-2.5">
                            {['Australia', 'USA', 'Canada', 'UK'].map((country, i) => (
                                <label key={i} className="flex items-center gap-3 cursor-pointer group hover:bg-slate-50 p-2 rounded-lg transition-colors -mx-2">
                                    <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary shadow-sm" defaultChecked={i === 0} />
                                    <span className="text-sm text-slate-600 font-medium group-hover:text-primary transition-colors">{country}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Cities */}
                    <div>
                        <div className="flex items-center gap-2 mb-4 text-slate-900">
                            <div className="size-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
                                <AnimatedIcon icon={MapPin} className="h-4 w-4" />
                            </div>
                            <span className="font-bold text-base font-heading">Cities</span>
                        </div>
                        <div className="space-y-2.5">
                            {['Kathmandu', 'Pokhara'].map((city, i) => (
                                <label key={i} className="flex items-center gap-3 cursor-pointer group hover:bg-slate-50 p-2 rounded-lg transition-colors -mx-2">
                                    <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary shadow-sm" defaultChecked={i === 0} />
                                    <span className="text-sm text-slate-600 font-medium group-hover:text-primary transition-colors">{city}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Verified Toggle */}
                    <div className="pt-6 border-t border-slate-100">
                        <label className="flex items-center justify-between cursor-pointer group">
                            <span className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">Verified Only</span>
                            <div className="relative inline-flex items-center">
                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-success shadow-inner"></div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </aside>
    )
}

import Link from 'next/link'
import { BadgeCheck, Star } from 'lucide-react'
import { AnimatedIcon } from '@/components/ui/AnimatedIcon'

export function ConsultancyGrid() {
    // Static data for now, will replace with props from Sanity
    const consultancies = [
        { name: 'Global Education Hub', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4xKILQbKJiPkaGI8KzGmsloYjTGTHvNPDpwi6T9WYmVtQ-6OrK9r4NlDwDAGzAye44A2YDEOrLGBINWW_ELMVJQBL7SPhJ0wsGVKdKgT4Sg8yW__FsYBnWASqsGVGoAnZ5IOltvjuBNf42VmRUidDcT874JHdqzcJ1mr-P-1MW6b1Lcbnw2zDvnX755ZwXSRVULldt_sUcM6S4xy-jAk4r4Wk_TmXyRPCStJcEf0FGmxbuwUITs3ac7_n8LSBsocgAWHliMSggUX1', rating: 4.9, reviews: 420, verified: true, tags: ['Kathmandu', 'Lalitpur', 'Australia'] },
        { name: 'Avenue Education', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMxZ8jq1M7r-tyWAbUBmIU8uLJKWQSctdux5by_dJAHxIFLVCK2NggjVqohGF6gdxjZx4r_oItOz_XrfMChTPTqr8hQNQwuuNwXEKqmqgZIvSihfiFpTihcOHu1LaRXCdsNiAn1zEH5ZgZEdme7aac9ZPXkU-JpEfvyZ-VI_eHgXuhyrQGmrRBcntaktPL-gzCGLLKoIJ9RfugUxq-dsFuViV6ZBDbIbjj9m2uU_FN4gdC8G5U7gHUw45DWYXbI22rdZfl3cJZCsbG', rating: 4.7, reviews: 215, verified: true, tags: ['Pokhara', 'USA', 'Canada'] },
        { name: 'Summit Consultants', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQGfU3milee4Y_IIesrumMH9TSSt6UUaZTogSJDfem6_8rNT3457aqsMDs_qqO_OoSAhCO5dJCjAI84_88WqRaamJpFyl0b2IKNONJfevngW9prDThFbhVE1Dk1XCi56O9Ad6WnJFvCKFlvnkDRugwQNsL-t8j5PT7eda-Qruc58QtyuGbv7ODw6MaGTIkEr-fsdw4IoyteKTvybvp1PXIE3N3AKSFq4tlVAmtJz1zgNIhC40n8YotDFcpsEfhRdeDsG2T1ljsttDP', rating: 4.8, reviews: 189, verified: true, tags: ['Kathmandu', 'UK', 'Germany'] },
        { name: "Bright Career Int'l", logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVwD5vnSucIaL6hUW4C9t9V_N0SfU7C8KFMJ3int1B-Q4UyuwtxROfeYHhUgipRJcFK9eu3XPe7xh6MCyjcVln8CRnkpcl5eqDZr09ddvpWNrNmvXdFDV6hql4DLnbehbMAInuoZh9Yw2pGdsabmqRgCXL8OtIo9lAr1S7BkW_BFAws5_8eySJ2NPD3fHkDz-YaqQ3ZgIzXgD_7XrFG5UNpwa9XqWoIIbmMcDX4dH223_AmODtbgFQ6eXTAah8NgmvetHuloxUHsuo', rating: 4.5, reviews: 94, verified: true, tags: ['Butwal', 'USA'] },
        { name: 'Pathway Nepal', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvq93aRxeZkRxA_Lfq9FCpuktG6Rz1XrYv5UwFM1J0gsAj4azQ0F6jP9UgweWcL8s-F4uhIAO-jHyUSfZiLheo-SJusFYcJfpuGsuSPRX8Iak_HDZ0HF788ddKIw8rB3TQAM04EoQT4uCnOx1M5S-8dNjx0M6Q5yNV8xB8gZAW4dHW85foAHDTZUyhGwGdiCjq1QY_fPrMS4NUZCWLT9VTiQUn7mGSJQJkezLx5hmQgBLc8COuKpksg-8vuT9YHZHwps5nco76GddE', rating: 4.6, reviews: 112, verified: true, tags: ['Kathmandu', 'Japan', 'Canada'] },
        { name: 'Vision Education', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIW7FPOc-hFqpw4y6aSXs_M6DObhFsawQQz6rfMwHzP3l-z-lcDSTblvutn_Vahq90B0-LBDhsyR0zR3gVqzcVgkwVifZRIhaEC3UqOZii1uSTFxlpkGLn5TC1uG5uhJAb3fpSUSPptaLUD1qOBNCXukpzj_5YhiJ605gIhQxOXtMZjgZMX4Cryns4PqoYjjsP7DViJslQzs-7x2bXw2FMEY__5gsmfT4LcyCejQKFKMGikSQJC2_dMcSUP6BqLME1QfKSHfdXXug0', rating: 4.9, reviews: 356, verified: true, tags: ['Lalitpur', 'Australia', 'UK'] },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {consultancies.map((consultancy, index) => (
                <div key={index} className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-[0_12px_24px_rgb(0,0,0,0.06)] transition-all duration-300 group flex flex-col hover:-translate-y-1">
                    <div className="flex items-start justify-between mb-6">
                        <div className="w-20 h-20 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center overflow-hidden shadow-sm group-hover:scale-105 transition-transform duration-500">
                            {/* Use standard img for now to match Stitch output, replace with Next Image or Cloudinary later */}
                            <img className="object-cover w-full h-full" src={consultancy.logo} alt={consultancy.name} />
                        </div>
                        {consultancy.verified && (
                            <span className="flex items-center gap-1.5 bg-success/10 text-success px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wide border border-success/10 shadow-sm">
                                <AnimatedIcon icon={BadgeCheck} className="h-3.5 w-3.5" /> Verified
                            </span>
                        )}
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-slate-900 group-hover:text-primary transition-colors font-heading leading-tight">{consultancy.name}</h3>
                    <div className="flex items-center gap-1.5 mb-5 bg-orange-50/50 w-fit px-3 py-1 rounded-full border border-orange-100">
                        <Star className="h-4 w-4 text-orange-400 fill-orange-400" />
                        <span className="text-sm font-bold text-slate-900">{consultancy.rating}</span>
                        <span className="text-slate-500 text-xs font-medium">({consultancy.reviews} reviews)</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {consultancy.tags.map(tag => (
                            <span key={tag} className="text-[11px] font-semibold bg-slate-50 text-slate-600 px-2.5 py-1 rounded-md border border-slate-100">{tag}</span>
                        ))}
                    </div>
                    <div className="mt-auto">
                        <button className="w-full bg-slate-900 hover:bg-primary text-white py-3.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-slate-900/10 hover:shadow-primary/20 flex items-center justify-center gap-2 group/btn">
                            View Profile
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AnimatedIconProps extends React.SVGProps<SVGSVGElement> {
    icon: LucideIcon
    className?: string
}

export function AnimatedIcon({ icon: Icon, className, ...props }: AnimatedIconProps) {
    return (
        <div className="group/icon relative flex items-center justify-center">
            <Icon
                className={cn(
                    "transition-all duration-300 ease-out group-hover/icon:scale-110 group-hover/icon:text-accent group-hover/icon:stroke-[2.5px]",
                    className
                )}
                {...props}
            />
            <div className="absolute inset-0 bg-accent/10 rounded-full scale-0 group-hover/icon:scale-150 transition-transform duration-300 opacity-0 group-hover/icon:opacity-100 pointer-events-none" />
        </div>
    )
}

import { HugeiconsIcon } from '@hugeicons/react';
import {ArrowUpRight} from '@hugeicons/core-free-icons'
import FadeIn from './FadeIn.jsx';

export default function Project({ title, date, description, tags }) {
    return (
        <FadeIn delay={0.2} className="group py-8 px-2 flex flex-col md:flex-row md:items-baseline justify-between gap-2 md:gap-4 first:border-t border-b border-border hover:bg-muted transition-color cursor-pointer">
            <span className="text-muted-foreground shrink-0">{date}</span>
            <div className="flex flex-col gap-2 flex-1 min-w-0">
                <h3 className="text-primary group-hover:text-accent transition-colors duration-200">{title}</h3>
                <p className="text-muted-foreground md:max-w-prose lg:max-w-[80ch]">
                    {description}
                </p>
                <div className="flex gap-2 flex-wrap">
                    {tags.map((tag, index) => (
                        <span key={index} className="p-1 border border-border text-muted-foreground uppercase">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>     
            <HugeiconsIcon icon={ArrowUpRight} className="hidden md:block w-6 h-6 shrink-0 text-primary group-hover:text-accent" />          
        </FadeIn>         
    )
}
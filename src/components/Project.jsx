import React from 'react'
import { HugeiconsIcon } from '@hugeicons/react';
import {ArrowUpRight} from '@hugeicons/core-free-icons'

export default function Project({ title, date, description, tags }) {
    return (
        <div className="group py-8 px-2 flex flex-col md:flex-row justify-between gap-2 md:gap-4 not-last:border-b not-last:border-border hover:bg-muted transition-transform duration-200 ease-out hover:scale-[101%] cursor-pointer">
            <span className="text-muted-foreground shrink-0">{date}</span>
            <div className="flex flex-col gap-2 flex-1 min-w-0">
                <h3 className="group-hover:text-accent transition-colors duration-200">{title}</h3>
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
        </div>         
    )
}
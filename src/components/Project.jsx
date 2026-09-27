import { useRef } from 'react'
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowUpRight } from '@hugeicons/core-free-icons'
import { motion, useMotionValue, useMotionTemplate, animate } from 'motion/react';
import FadeIn from './FadeIn.jsx';

export default function Project({ title, date, description, tags, image, link }) {
    const stateRef = useRef('rest') // 'rest' | 'hover' | 'expanded' — non serve triggerare render
    const cx = useMotionValue('50%')
    const cy = useMotionValue('50%')
    const radius = useMotionValue(0)

    const clipPath = useMotionTemplate`circle(${radius}px at ${cx} ${cy})`

    function handleMouseMove(e) {
        if (stateRef.current === 'expanded') return
        const rect = e.currentTarget.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        cx.set(`${x}%`)
        cy.set(`${y}%`)
    }

    function handleMouseEnter() {
        if (stateRef.current === 'expanded') return
        stateRef.current = 'hover'
        animate(radius, 48, { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] })
    }

    function handleMouseLeave() {
        if (stateRef.current === 'expanded') return
        stateRef.current = 'rest'
        animate(radius, 0, { duration: 0.2, ease: [0.4, 0, 0.2, 1] })
    }

    function handleClick() {
        if (stateRef.current === 'expanded' || !link) return
        stateRef.current = 'expanded'
        animate(radius, 3000, {
            duration: 0.7,
            ease: [0.25, 0.1, 0.25, 1],
            onComplete: () => {
                window.open(link, '_blank')
                // window.location.href = link // stessa scheda

                setTimeout(() => {
                    stateRef.current = 'rest'
                    animate(cx, '50%', { duration: 0.45, ease: [0.4, 0, 0.2, 1] })
                    animate(cy, '50%', { duration: 0.45, ease: [0.4, 0, 0.2, 1] })
                    animate(radius, 0, { duration: 0.45, ease: [0.4, 0, 0.2, 1] })
                }, 150)
            }
        })
    }

    return (
        <FadeIn
            delay={0.2}
            className="group relative overflow-hidden py-8 px-2 flex flex-col md:flex-row md:items-baseline justify-between gap-2 md:gap-10 border border-border rounded-4xl hover:bg-muted transition-colors duration-300 cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onClick={handleClick}
        >
            <span className="pl-4 md:pl-6 relative z-10 text-muted-foreground shrink-0">{date}</span>
            <div className="px-4 md:px-0 relative z-10 flex flex-col gap-4 flex-1 min-w-0">
                <h3 className="text-primary group-hover:text-accent transition-colors duration-200">{title}</h3>
                <p className="text-muted-foreground md:max-w-prose lg:max-w-[70ch]">
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
            <HugeiconsIcon icon={ArrowUpRight} className="relative z-10 hidden md:block w-6 h-6 shrink-0 text-primary group-hover:text-accent" />

            {image && (
                <motion.div
                    className="absolute inset-0 bg-cover bg-center pointer-events-none"
                    style={{ backgroundImage: `url(${image})`, clipPath }}
                />
            )}
        </FadeIn>
    )
}
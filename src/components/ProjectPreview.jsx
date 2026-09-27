import { forwardRef } from "react"

/**
 * Riquadro flottante che segue il cursore (via ref, mosso da ProjectsSection)
 * e mostra un crossfade tra le immagini dei progetti.
 * Nascosto su mobile: lì ogni Project mostra già la sua miniatura inline.
 */
const ProjectPreview = forwardRef(function ProjectPreview({ projects, active, isOpen }, ref) {
    return (
        <div
            ref={ref}
            aria-hidden="true"
            className="pointer-events-none fixed left-0 top-0 z-40 hidden md:block will-change-transform"
        >
            <div
                className={`relative w-80 aspect-[4/3] translate-x-8 -translate-y-1/2 overflow-hidden rounded-lg border border-border shadow-2xl transition-[opacity,scale] duration-300 ease-out ${
                    isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
            >
                {projects.map((project, i) => (
                    <img
                        key={project.title}
                        src={project.image}
                        alt=""
                        decoding="async"
                        className={`absolute inset-0 size-full object-cover transition-opacity duration-300 ${
                            i === active ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                ))}
            </div>
        </div>
    )
})

export default ProjectPreview
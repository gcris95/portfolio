import { useState } from "react"
import { projects } from "../../assets/data/projectsList"
import Project from "../Project"
import SectionTitle from "../SectionTitle"
import SectionContainer from "../SectionContainer"

export default function ProjectsSection({id}){
    const [hoveredIndex, setHoveredIndex] = useState(null)

    return(
        <SectionContainer id={id} gap={8}>
            <SectionTitle number='01' title='Selected Projects'/>
    
            <div className="flex flex-col">
                {projects.map((project, index) => (
                    <div
                        key={project.title}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="transition-opacity duration-300 not-last:mb-8"
                        style={{
                            opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0.4
                        }}
                    >
                        <Project
                            title={project.title}
                            date={project.date}
                            description={project.descriptionIt}
                            tags={project.tags}
                            image={project.image}
                            link={project.href}
                        />
                    </div>
                ))}
            </div>
        </SectionContainer>
    )
}
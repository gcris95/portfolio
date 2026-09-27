import { projects } from "../../assets/data/projectsList"
import Project from "../Project"
import SectionTitle from "../SectionTitle"

export default function ProjectsSection({id}){
    return(
        <section id={id} className="px-[clamp(1rem,-2.64rem+15.53vw,16rem)] py-20 flex flex-col gap-8 border-b border-border">
            <SectionTitle number='01' title='Selected Projects'/>
    
            <div className="flex flex-col">
                {projects.map((project) => (                 
                    <Project
                        key={project.title}
                        title={project.title}
                        date={project.date}
                        description={project.descriptionIt}
                        tags={project.tags}
                    />
                ))}
            </div>
        </section>
    )
}
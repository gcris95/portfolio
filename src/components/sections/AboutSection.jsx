import SectionTitle from "../SectionTitle";
import FadeIn from "../FadeIn";
import SectionContainer from "../SectionContainer"

const education = [
    { degree: 'Master of Science in Computer Science', school: 'Università degli Studi di Milano', year: 'Graduated 2025' },
    { degree: 'Bachelor of Science in Computer Science', school: 'Università degli Studi di Salerno', year: 'Graduated 2017' },
];

export default function AboutSection({id}){
    return(
        <SectionContainer id={id} gap={8}>
            <SectionTitle number='02' title='About'/>

            <div className="flex flex-col md:flex-row-reverse gap-6">  
                <div className="flex flex-col gap-6">
                    <FadeIn delay={0.2} className='pb-8 border-b border-border'>
                        <p className="text-muted-foreground">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.2} className="flex flex-col gap-6">
                        <h3 className="label uppercase text-muted-foreground">Education</h3>
                        <ul className="flex flex-col gap-8">
                            {education.map((e) => (
                                <li key={e.degree}>
                                    <p className="font-medium leading-snug text-primary">{e.degree}</p>
                                    <span className="label block pt-1 text-muted-foreground">{e.school} · {e.year}</span>
                                </li>
                            ))}
                        </ul>
                    </FadeIn>


                </div>
                <FadeIn className="w-full max-w-75 shrink-0 self-center" delay={0.2}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" alt="Portrait" />
                </FadeIn>                                          
            </div>            
        </SectionContainer>
    );
}
import SectionTitle from "../SectionTitle";
import FadeIn from "../FadeIn";

export default function AboutSection({id}){
    return(
        <section id={id} className="px-[clamp(1rem,-2.64rem+15.53vw,16rem)] py-20 flex flex-col gap-8 border-b border-border">
            <SectionTitle number='02' title='About'/>

            <div className="flex flex-col md:flex-row-reverse gap-6">  
                <div className="flex flex-col gap-6">
                    <FadeIn delay={0.2} className='pb-8 border-b border-border'>
                        <p className="text-muted-foreground">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </FadeIn>
                        
                    <FadeIn>
                        <span className='uppercase text-muted-foreground'>Education</span>
                    </FadeIn>
                </div>
                <FadeIn className="w-full max-w-100 md:max-w-75 shrink-0 self-center" delay={0.2}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" alt="Portrait" />
                </FadeIn>                                          
            </div>            
        </section>
    );
}
import SectionTitle from "../SectionTitle";
import FadeIn from "../FadeIn";
import { HugeiconsIcon } from "@hugeicons/react";
import { contacts } from "../../assets/data/contactsList";
import SectionContainer from "../SectionContainer"

export default function ContactSection({id}){
    return(
        <SectionContainer id={id} gap={8}>
            <SectionTitle number='03' title='Get in Touch'/>

            <div className="flex flex-col md:flex-row-reverse gap-6">  
                <div className="flex flex-col gap-6">
                    <FadeIn delay={0.2}>
                        <p className="text-muted-foreground">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </FadeIn>
                    <div className="flex flex-col gap-2">
                        {contacts.map((contact, index) => (
                            <FadeIn key={index} delay={0.2 + index * 0.2}>
                                <a className="flex gap-2 items-center group" href={contact.href}>
                                    <HugeiconsIcon icon={contact.icon} className="w-5 h-5 text-muted-foreground group-hover:text-accent" />
                                    <p className="text-muted-foreground underline group-hover:text-accent">{contact.contact}</p>
                                </a>
                            </FadeIn>
                        ))}
                    </div>
                </div>                                       
            </div>            
        </SectionContainer>
    );
}
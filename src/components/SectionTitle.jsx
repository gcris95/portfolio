import FadeIn from "./FadeIn";

export default function SectionTitle({number, title}){
    return(
        <FadeIn delay={0.1} className="flex gap-2 md:items-baseline pb-8">
            <span className="text-muted-foreground">{number}</span>
            <h2>{title}</h2>
        </FadeIn>
    );
}
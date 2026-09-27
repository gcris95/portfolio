import FadeIn from "../FadeIn";
import SectionContainer from "../SectionContainer"

export default function HeroSection({id=''}){

    function scrollTo(id) {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }

    return(
        <SectionContainer id={id} gap={2}>
            <FadeIn delay={0.1}>
                <span className="text-accent uppercase" style={{ fontSize: 'clamp(0.8rem, 2vw, 0.95rem)' }}>UI Designer &amp; Developer</span>
            </FadeIn>
            
            <FadeIn delay={0.2} className="tracking-tight leading-[1.04] text-foreground pb-4">
                <h1>Hello!</h1>
                <h2>I'm Giovanni!</h2>
                <h2>Welcome to my portfolio</h2>                    
            </FadeIn>
            <FadeIn delay={0.3} className="mt-2 flex gap-4">
                <button onClick={() => scrollTo('works')} className="px-3 py-3 bg-primary text-primary-foreground text-sm font-medium hover:opacity-75 transition-opacity cursor-pointer font-sans">View Works</button>
                <button onClick={() => scrollTo('contacts')} className="px-3 py-3 text-primary border border-border text-sm font-medium hover:bg-muted transition-colors cursor-pointer font-sans">Contact Me</button>
            </FadeIn>
        </SectionContainer>
    );
}
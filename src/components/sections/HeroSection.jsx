import FadeIn from "../FadeIn"
import SectionContainer from "../SectionContainer"
import ParticleField from "../ParticleField"

export default function HeroSection(){
    return(
        <SectionContainer gap={2} className="relative overflow-hidden min-h-[60svh] justify-center">
            <ParticleField />

            <FadeIn delay={0.1}>
                <span className="text-accent uppercase text-[clamp(0.8rem,2vw,0.95rem)]">UI Designer &amp; Developer</span>
            </FadeIn>

            <FadeIn delay={0.2} className="tracking-tight leading-[1.04] text-foreground pb-4">
                <h1>Giovanni Criscuolo</h1>
                <h2 className="text-muted-foreground"></h2>
            </FadeIn>

            <FadeIn delay={0.25}>
                <p className="text-muted-foreground max-w-lg">
                    Costruisco interfacce curate nei dettagli, con animazioni intenzionali e codice pulito.
                </p>
            </FadeIn>

            <FadeIn delay={0.3} className="mt-2 flex gap-4">
                <a href="#works" className="px-5 py-3 bg-primary text-primary-foreground text-sm font-medium hover:opacity-75 transition-opacity">View Works</a>
                <a href="#contacts" className="px-5 py-3 text-primary border border-border text-sm font-medium hover:bg-muted transition-colors">Contact Me</a>
            </FadeIn>
        </SectionContainer>
    )
}
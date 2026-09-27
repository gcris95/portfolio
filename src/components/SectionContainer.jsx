export default function SectionContainer({children, gap}){
    return(
        <section 
            className="px-[clamp(2rem,-3.61rem+19.68vw,20rem)] py-16 flex flex-col gap-(--section-gap) border-b border-border" 
            style={{ '--section-gap': gap }}
        >
            {children}
        </section>
    );
}
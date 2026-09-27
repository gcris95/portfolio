export default function SectionContainer({children, gap}){
    return(
        <section 
            className="px-[clamp(1rem,-2.64rem+15.53vw,16rem)] py-20 flex flex-col gap-(--section-gap) border-b border-border" 
            style={{ '--section-gap': gap }}
        >
            {children}
        </section>
    );
}
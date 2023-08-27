import { Container, Section, SecondSection } from "./styles";

export function EntrieCard( {title, description, date, value} ) {
    return (
        <Container>
            <Section>
                <h2> {title} </h2>
                { description && <p> {description} </p>}
            </Section>
            <SecondSection>
                <div>
                    <span> {value} </span>
                    { date && <p> {date} </p>}
                </div>
                <ul>
                    <li> 
                        <button> x </button> 
                    </li>
                    <li> 
                        <button> e </button> 
                    </li>
                </ul>
            </SecondSection>
        </Container>
    )
}
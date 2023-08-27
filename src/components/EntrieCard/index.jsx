import { Container, Section, SecondSection } from "./styles";

import { AiOutlineEdit, AiOutlineCloseCircle } from "react-icons/ai"

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
                        <button> <AiOutlineEdit/> </button> 
                    </li>
                    <li> 
                        <button> <AiOutlineCloseCircle/> </button> 
                    </li>
                </ul>
            </SecondSection>
        </Container>
    )
}
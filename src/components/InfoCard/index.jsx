import { Container } from "./styles";

export function InfoCard( {title, value, icon: Icon} ) {
    return (
        <Container>
            <div>
                <h2> {title} </h2>
                <span> {value} </span>
            </div>
            {Icon && <Icon size={20} />}
        </Container>
    )
}
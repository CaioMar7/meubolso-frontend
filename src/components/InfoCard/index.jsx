import { Container } from "./styles";

export function InfoCard( {title, value, icon: Icon, description} ) {
    return (
        <Container>
            <div>
                <h2> 
                    {title} 
                    <p> {description} </p>
                </h2>
                <span> {value} </span>
            </div>
            {Icon && <Icon size={20} />}
        </Container>
    )
}
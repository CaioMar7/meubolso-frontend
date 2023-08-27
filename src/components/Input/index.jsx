import { Container } from "./styles";

export function Input({icon: Icon, innerRef, ...rest}){
    return(
        <Container>
            {Icon && <Icon size={20} />}
            <input 
            ref={innerRef}
            {...rest}
            />
        </Container>
    )
}
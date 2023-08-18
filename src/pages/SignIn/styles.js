import { styled } from "styled-components";

export const Container = styled.div`


`

export const LoginForm = styled.form`
    width: 100%;
    height: 75%;

    position:absolute; 
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);

    border-radius: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 1rem;

    padding: 1rem 2rem;

    img {
        height: 20vh;
        width: 100%;

        object-fit: contain;
        filter: drop-shadow(3px 5px 4px #000);
    }

    border: none;

    @media screen and (min-width: 500px) {
        height: 40rem;
        max-width: 30rem;

        box-shadow: 10px 10px 21px -10px rgba(0,0,0,0.1);
        border: 1px solid ${({theme}) => theme.COLORS.GREEN_700};
    }

`

export const ButtonList = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1vw;

    width: 100%;

    button {
        width: 100%;
        height: 3rem;

        padding: 1rem 1rem;
    }
`
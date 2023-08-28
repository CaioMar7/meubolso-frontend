import { styled } from "styled-components";

export const Container = styled.li `
    height: 10rem;
    width: 100%;
    min-width: 90vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    
    background-color: ${({theme}) => theme.COLORS.GREEN_900};

    padding: 1rem;

    border-radius: 2rem;

    color: white;

    svg {
        height: 6rem;
        width: 100%;
    }

    h2 p {
        font-size: 1rem;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media screen and (min-width: 500px) {
        min-width: 15vw;
        height: 13rem;

        font-size: 1.2rem;
    }

    span {
        font-size: 2rem;

        @media screen and (min-width: 500px) {
            font-size: calc(1rem + 2vw);
        }
    }
`
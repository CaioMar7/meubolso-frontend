import { styled } from "styled-components";

export const Container = styled.footer`
    width: 100%;

    padding: 0 2rem calc(1rem + 3vh) 2rem;
    font-size: calc(.4rem + 1vh);

    p {
        text-align: center;
        color: ${({theme}) => theme.COLORS.TEXT_GREY}
    }

`
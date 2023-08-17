import { styled } from "styled-components";

export const Button = styled.button `
    color: ${({theme}) => theme.COLORS.TEXT_WHITE};
    background-color: ${({theme}) => theme.COLORS.GREEN_700};

    font-weight: 700;

    border-radius: 2rem;

    border: none;
    outline: none;

    font-size: 1.2rem;
    

    transition: all .6s;


    &:hover {
        cursor: pointer;
    }
`
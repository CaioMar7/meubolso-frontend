import { styled } from "styled-components";

export const Container = styled.li `
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 1rem;

    border-bottom-width: 1px;
    border-bottom-color: ${({theme}) => theme.COLORS.TEXT_GREY};
    border-bottom-style: solid;
`

export const Section = styled.section `
    h2 {
        font-size: 1.2rem;
    }

    p {
        font-size: .8rem;
        color: ${({theme}) => theme.COLORS.TEXT_GREY};
    }

    span {
        font-size: 1rem;
    }

    button {
        border: none;
        background-color: transparent;
    }

    div {
        display: flex;
        flex-direction: column;
    }
`

export const SecondSection = styled(Section) `
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    ul {
        padding-right: 1rem;

        display: flex;
        justify-content: center;
        align-items: center;

        gap: 1rem;

        svg {
            font-size: 1.2rem;
        }

        button {
            transition: ease .6s;
        }

        button:hover {
            cursor: pointer;
            transform: translateY(-5px);
        }
    }
`
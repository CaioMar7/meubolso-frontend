import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    display: flex;
    align-items: center;

    border: 1px solid ${({theme}) => theme.COLORS.GREEN_700};

    border-radius: 2rem;

    > input {
        height: 56px;
        width: 100%;

        padding: 1rem;
        color: ${({theme}) => theme.COLORS.TEXT_BLACK};

        outline: none;
        background: transparent;
        border: 0;
        border-radius: 2rem;

        &:placeholder {
            color: ${({theme}) => theme.COLORS.TEXT_GREY};
        }
    }

    svg {
        margin-left: 1rem;
        color: ${({theme}) => theme.COLORS.TEXT_BLACK};
    }
`
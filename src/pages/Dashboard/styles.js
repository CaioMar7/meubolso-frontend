import { styled } from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    main {
        width: 100%;
        height: 100%;

        border: 1px solid red;

        padding: 1rem;

        ul {
            width: 100%;

            display: flex;
            flex-direction: row;

            gap: 1rem;

            overflow-x: auto;

            @media screen and (min-width: 500px) {
                flex-direction: row;
                gap: 2rem;
            }
        }
    }

`


export const Legend = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    h3, p {
        font-size: 1rem;
        color: ${({theme}) => theme.COLORS.TEXT_GREY};
    }

    p {
        display: flex;
        align-items: center;
        justify-content: center;
    }

`
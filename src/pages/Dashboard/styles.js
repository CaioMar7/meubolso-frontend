import { styled } from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 90vh;


    main {
        width: 100%;
        height: 100%;

        padding: 1rem;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        gap: 1rem;

        @media screen and (min-width: 500px) {
            padding: 2rem 4rem;
        }
    }

    @media screen and (min-width: 500px) {
        height: 91vh;
    }

`

export const InfoList = styled.ul `
    width: 100%;
    min-height: 10rem;

    display: flex;
    flex-direction: row;

    gap: 1rem;

    overflow-x: auto;

    @media screen and (min-width: 500px) {
        flex-direction: row;
        gap: 2rem;

        height: 50%;
    }

`

export const Legend = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    h3, p {
        font-size: 1rem;
        color: ${({theme}) => theme.COLORS.GREEN_900};

        @media screen and (min-width: 500px) {
            font-size: 2rem;
        }
    }

    p {
        display: flex;
        align-items: center;
        justify-content: center;
    }

`

export const EntriesList = styled.ul `
    width: 100%;
    height: 100%;

    overflow-y: auto;
`

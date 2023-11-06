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

        gap: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        aside {
            display: none;

            @media screen and (min-width: 500px) {
                text-transform: uppercase;

                height: 100%;
                width: 100%;
                background-color: ${({theme}) => theme.COLORS.GREEN_900};

                border-radius: 2rem;

                display: block;
                grid-area: menulateral;

                ul {
                    padding: 3rem 2rem;
                    width: 100%;

                    display: flex;
                    flex-direction: column;
                    gap: 2rem;

                }

                li {
                    font-size: 2rem;

                    font-weight: 700;

                    color: white;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    gap: 1rem;

                &:hover {
                    cursor: pointer;
                }
                }
            }
        }


        @media screen and (min-width: 500px) {
            padding: 2rem 4rem;
            
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            grid-template-areas: 

            "menulateral infolist infolist"
            "menulateral infolist infolist"
            "menulateral legend legend"
            "menulateral entrieslist entrieslist"
            "menulateral entrieslist entrieslist"
            ;
        }
    }

    @media screen and (min-width: 500px) {
        height: 91vh;
    }

`

export const InfoList = styled.ul `
    width: 100%;
    min-height: 13rem;

    display: flex;
    flex-direction: row;

    gap: 1rem;

    overflow-x: auto;

    grid-area: infolist;

    @media screen and (min-width: 500px) {
        flex-direction: row;
        gap: 2rem;

        height: 100%;
    }

`

export const Legend = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    grid-area: legend;

    max-height: 3rem;

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

    max-height: 65vh;

    overflow-y: auto;

    grid-area: entrieslist;

    @media screen and (min-width: 500px) {
        height: 50vh;
    }
`

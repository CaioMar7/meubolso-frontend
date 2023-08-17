import { styled } from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    height: 100vh;

    position: relative;

    overflow-x: hidden;

    main {
        padding: 1rem 2rem;
    }

    footer {
        width: 100%;

        padding: 0 2rem calc(1rem + 3vh) 2rem;
        font-size: calc(.4rem + 1vh);

        p {
            text-align: center;
            color: ${({theme}) => theme.COLORS.TEXT_GREY}
        }
    }
    

    .blob-left {
        display: none;
        position: absolute;

        width: 50rem;
        height: 50rem;

        left: -30rem;
        bottom: 0rem;

        z-index: -1;

        @media screen and (min-width: 1024px) {
            display: inherit;
        }
    }


`


export const FirstSection = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    aside {
        width: 100%;

        position: relative;

        img {
            height: 40vh;
            width: 100%;

            position: relative;
        }

        .blob-middle-right {
            display: none;
            position: absolute;

            width: 80vw;
            height: 80vh;

            right: -45rem;
            bottom: -10rem;

            z-index: -1;

            @media screen and (min-width: 1024px) {
                display: inherit;
            }

            overflow-x: hidden;
        }
    }

    div {
        width: 100%;
        text-align: center;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        gap: .5rem;

        max-width: 50vh;

        h2 {
            color: ${({theme}) => theme.COLORS.TEXT_BLACK};
            font-weight: 900;
            line-height: 1.6rem;

            font-size: calc(.8rem + 1vh);
        }

        p {
            color: ${({theme}) => theme.COLORS.TEXT_GREY};
            font-size: calc(.4rem + 1vh);
        }

        button {
            margin-top: 2rem;
            padding: 1rem 2rem;
        }

        @media screen and (min-width: 500px) {
            h2 {
                font-size: calc(.8rem + 2vh);
            }

            p {
                font-size: calc(.4rem + 1.5vh);
            }
        }
    }

    @media screen and (min-width: 500px) {
        flex-direction: row;
        flex-flow: row-reverse;
    }

`
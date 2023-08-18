import { styled } from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 4rem;
    background-color: ${({theme}) => theme.COLORS.GREEN_900};
    color: ${({theme}) => theme.COLORS.TEXT_WHITE};

    display: flex;

    padding: 1rem 2rem;

    justify-content: space-between;
    align-items: center;

    div {
        h2 {
            font-size: 1.4rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        svg {
            font-size: 2rem;
        }
    }

`

export const Menu = styled.div`

@media screen and (min-width: 500px) {
        display: flex;   
}

.menuMobileBtn {
    border: none;
    background: none;
    outline: none;
    color: ${({theme}) => theme.COLORS.TEXT_WHITE};

    position: relative;

    transition: all .6s;

    z-index: 100;

    svg {
        font-size: 2rem;
    }

    @media screen and (min-width: 500px) {
        display: none;
        visibility: hidden;
        opacity: 0;
    }
}

`

export const MenuList = styled.ul`
    width: 100%;
    height: 99%;
    position: absolute;

    z-index: 1;

    text-transform: uppercase;

    top: 0px;
    right: 0px;

    text-align: right;

    color: ${({theme}) => theme.COLORS.TEXT_WHITE};

    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-weight: 700;

    gap: 4rem;

    font-size: 2rem;

    padding-top: 4rem;

    margin-top: .3rem;
    background: linear-gradient(0deg, rgba(6,75,54,1) 0%, rgba(22,144,107,1) 35%, rgba(28,174,129,1) 100%);


    display: flex;
    visibility: hidden;
    opacity: 0;

    transition: all .6s;

    
    ${({ visibility }) => visibility && `
        visibility: visible;
        opacity: 1;
    `}

    @media screen and (min-width: 500px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        padding: 0;
        margin-top: 0;

        font-size: 1.3rem;

        height: 4rem;

        gap: 2rem;

        visibility: visible;
        opacity: 1;

        position: inherit; 
        background: ${({theme}) => theme.COLORS.GREEN_900};
    }

    li {
        &:hover {
            cursor: pointer;
        }
    }


`
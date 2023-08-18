import { Container, Menu, MenuList } from "./styles"

import { TiThMenu } from "react-icons/ti"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { GiTakeMyMoney } from "react-icons/gi"

import { useState } from "react"

export function Header() {
    const authenticated = false 

    const [menuMobileOpened, setMenuMobileOpened] = useState(false)

    function toggleMenuMobile() {
        if(menuMobileOpened) {
            setMenuMobileOpened(false)
            
            return
        }

        setMenuMobileOpened(true)
    }

    return (
        <Container>
            <div>
                <h2> MeuBolso <GiTakeMyMoney/> </h2>
            </div>
            <Menu>
                <button className={"menuMobileBtn"} onClick={() => toggleMenuMobile()}> 
                {
                    menuMobileOpened ?
                    <AiOutlineCloseCircle/>
                    :
                    <TiThMenu/> 
                }    
                    
                </button> 
                <MenuList visibility={menuMobileOpened}>
                <li> Inicio </li>
                {
                    authenticated ? 
                    <>
                    <li> Dashboard </li>
                    <li> Logout </li>
                    </>
                    :
                    <>
                    <li> Login </li>
                    <li> Cadastre-se </li>
                    </>
                }
                </MenuList>
                
            </Menu>
        </Container>
    )
}
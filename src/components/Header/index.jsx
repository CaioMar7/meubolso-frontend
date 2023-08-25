import { Container, Menu, MenuList } from "./styles"

import { TiThMenu } from "react-icons/ti"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { GiTakeMyMoney } from "react-icons/gi"

import { Link } from "react-router-dom"

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
                <Link to="/">  MeuBolso <GiTakeMyMoney/>  </Link>
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
                <MenuList visibility={menuMobileOpened} >
                    <li> <Link to="/"> Inicio </Link> </li>
                    {
                        authenticated ? 
                        <>
                            <li> <Link to="/"> Dashboard </Link> </li>
                            <li> <Link to="/"> Logout </Link> </li>
                        </>
                        :
                        <>
                            <li> <Link to="/login"> Login </Link> </li>
                            <li> <Link to="/register"> Cadastre-se </Link> </li>
                        </>
                    }
                </MenuList>
                
            </Menu>
        </Container>
    )
}
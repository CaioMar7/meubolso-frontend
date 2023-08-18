import { Button } from "../../components/Button/styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Input } from "../../components/Input"
import { ButtonList, Container, LoginForm } from "./styles"
import LoginBanner from "../../assets/loginbanner.png"

import { AiOutlineUser, AiOutlineLock } from "react-icons/ai"

export function SignIn() {
    return (
        <Container>
            <Header/>
            <main>
                <LoginForm>
                    <img src={LoginBanner}/>
                    <Input placeholder="E-mail" type="text" icon={AiOutlineUser}/>
                    <Input placeholder="Passsword" type="password" icon={AiOutlineLock}  />
                    <ButtonList>
                        <Button> Entrar </Button>
                        <Button> Cadastre-se </Button>
                    </ButtonList>
                </LoginForm>
            </main>
        </Container>
    )
}
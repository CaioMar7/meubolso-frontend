import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Input } from "../../components/Input"
import { ButtonList, Container, LoginForm } from "./styles"
import LoginBanner from "../../assets/loginbanner.png"

import { AiOutlineLock, AiOutlineMail } from "react-icons/ai"

export function SignIn() {
    return (
        <Container>
            <Header/>
            <main>
                <LoginForm>
                    <img src={LoginBanner}/>
                    <Input placeholder="E-mail" type="text" icon={AiOutlineMail}/>
                    <Input placeholder="Senha" type="password" icon={AiOutlineLock}  />
                    <ButtonList>
                        <Button title="Entrar" redirect="/"/>
                        <Button title="Cadastrar"redirect="/register"/>
                    </ButtonList>
                </LoginForm>
            </main>
        </Container>
    )
}
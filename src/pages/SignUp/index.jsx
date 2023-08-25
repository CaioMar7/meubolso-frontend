import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Input } from "../../components/Input"
import { ButtonList, Container, LoginForm } from "./styles"
import RegisterBanner from "../../assets/heroregister.png"

import { AiOutlineUser, AiOutlineLock, AiOutlineMail } from "react-icons/ai"

export function SignUp() {
    return (
        <Container>
            <Header/>
            <main>
                <LoginForm>
                    <img src={RegisterBanner}/>
                    <Input placeholder="Nome" type="text" icon={AiOutlineUser}/>
                    <Input placeholder="E-mail" type="text" icon={AiOutlineMail}/>
                    <Input placeholder="Senha" type="password" icon={AiOutlineLock}/>
                    <Input placeholder="Confirmar senha" type="password" icon={AiOutlineLock}/>
                    <ButtonList>
                        <Button title="Confirmar" redirect="/"/>
                        <Button title="Login"redirect="/login"/>
                    </ButtonList>
                </LoginForm>
            </main>
        </Container>
    )
}
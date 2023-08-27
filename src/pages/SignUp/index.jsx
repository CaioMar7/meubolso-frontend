import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Input } from "../../components/Input"
import { ButtonList, Container, LoginForm } from "./styles"
import RegisterBanner from "../../assets/heroregister.png"

import { useRef } from "react"

import { AiOutlineUser, AiOutlineLock, AiOutlineMail } from "react-icons/ai"

export function SignUp() {    
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()

    const handleRegister = () => {
        console.log(`Nome: ${nameRef.current.value}`)
        console.log(`Email: ${emailRef.current.value}`)
        console.log(`Senha: ${passwordRef.current.value}`)
        console.log(`Confirmação de Senha: ${confirmPasswordRef.current.value}`)
    }

    return (
        <Container>
            <Header/>
            <main>
                <LoginForm>
                    <img src={RegisterBanner}/>
                    <Input placeholder="Nome" type="text" innerRef={nameRef} icon={AiOutlineUser}/>
                    <Input placeholder="E-mail" type="text" innerRef={emailRef} icon={AiOutlineMail}/>
                    <Input placeholder="Senha" type="password" innerRef={passwordRef} icon={AiOutlineLock}/>
                    <Input placeholder="Confirmar senha" type="password" innerRef={confirmPasswordRef} icon={AiOutlineLock}/>
                    <ButtonList>
                        <Button title="Confirmar" onClick={handleRegister}/>
                        <Button title="Login"redirect="/login"/>
                    </ButtonList>
                </LoginForm>
            </main>
        </Container>
    )
}
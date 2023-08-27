import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Input } from "../../components/Input"
import { ButtonList, Container, LoginForm } from "./styles"
import LoginBanner from "../../assets/loginbanner.png"

import { useState, useRef } from "react"

import { AiOutlineLock, AiOutlineMail } from "react-icons/ai"

export function SignIn() {

const emailRef = useRef()
const passwordRef = useRef()
const imgRef = useRef()

const handleLogin = () => {
    console.log(`Login: ${emailRef.current.value}`)
    console.log(`Password: ${passwordRef.current.value}`)
}

    return (
        <Container>
            <Header/>
            <main>
                <LoginForm>
                    <img src={LoginBanner} ref={imgRef}/>
                    <Input placeholder="E-mail" type="text" innerRef={emailRef} icon={AiOutlineMail}/>
                    <Input placeholder="Senha" type="password" innerRef={passwordRef} icon={AiOutlineLock}  />
                    <ButtonList>
                        <Button title="Entrar" onClick={handleLogin}/>
                        <Button title="Cadastrar"redirect="/register"/>
                    </ButtonList>
                </LoginForm>
            </main>
        </Container>
    )
}
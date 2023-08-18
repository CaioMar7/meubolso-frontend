import { Header } from "../../components/Header"
import { Container, FirstSection } from "./styles"

import HeroBanner from "../../assets/herobanner.svg"
import { Button } from "../../components/Button/styles"
import { Footer } from "../../components/Footer"

export function Home() {
    return (
        <Container>
            <Header/>
            <main>
                <FirstSection>
                <aside>
                    <img src={HeroBanner} alt="Menina sentada em livros com notebook olhando uma calculadora."/>
                    <svg className={"blob-middle-right"} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#1CAE81" d="M25.5,-32.9C29.8,-21.1,28,-10.6,31.2,3.3C34.5,17.1,42.9,34.2,38.5,45.9C34.2,57.5,17.1,63.8,1.6,62.2C-13.9,60.6,-27.8,51.1,-37.1,39.4C-46.5,27.8,-51.4,13.9,-56.1,-4.7C-60.9,-23.4,-65.5,-46.7,-56.1,-58.5C-46.7,-70.3,-23.4,-70.6,-6.4,-64.2C10.6,-57.8,21.1,-44.7,25.5,-32.9Z" transform="translate(100 100)" />
                    </svg>
                </aside>                    
                <div>
                    <h2> Conheça o MeuBolso APP e organize sua vida financeira!</h2>
                    <p> Com nosso APP você poderá registrar todas as entradas e saidas do seu dinheiro, organiza-los por categorias e filtra-los por datas.</p>
                    <Button> Cadastre-se </Button>
                </div>
                </FirstSection>
                <svg className={"blob-left"} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#1CAE81" d="M28.5,-30.8C43.5,-21.5,66.5,-18.6,76.4,-6.9C86.3,4.8,83,25.4,73.5,43.1C64.1,60.8,48.5,75.7,32.6,75.2C16.7,74.7,0.5,58.9,-17.6,51.1C-35.7,43.4,-55.8,43.6,-62.2,34.8C-68.6,26,-61.5,8.2,-55.4,-6.9C-49.3,-22.1,-44.4,-34.5,-35.3,-44.8C-26.3,-55.2,-13.2,-63.3,-3.2,-59.5C6.8,-55.7,13.6,-40,28.5,-30.8Z" transform="translate(100 100)" />
                </svg>
            </main>
            <Footer/>
        </Container>
    )
}
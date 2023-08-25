import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./styles";

export function Dashboard() {

    return (
        <Container>
            <Header/>
            <main>
                <ul>
                    <li> Saldo atual <span> R$ 25,00 </span></li>
                    <li> Entrada nos ultimos <span> 30 dias </span></li>
                    <li> Saida nos ultimos <span> 30 dias </span></li>
                </ul>

                <div>
                    <h2> Lançamentos </h2> 
                    <p> Filtrar </p>
                </div>

                <ul>
                    <li> 
                        <div>
                            <h3> Conta de Luz </h3>
                            <p> Conta de luz da minha loja de roupa. </p>
                        </div>
                        <div>
                            <p> 8h atrás </p>
                            <ul>
                                <li> X </li>
                                <li> E </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </main>
            <Footer/>
        </Container>
    )

}
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { InfoCard } from "../../components/InfoCard";
import { Container, Legend } from "./styles";

import { AiOutlineAreaChart, AiOutlineFilter } from "react-icons/ai"

export function Dashboard() {

    return (
        <Container>
            <Header/>
            <main>
                <ul>
                    <InfoCard title="Saldo atual" value="25,00" icon={AiOutlineAreaChart}/>
                    <InfoCard title="Entrada nos ultimos 30 dias" value="25,00"/>
                    <InfoCard title="Saida nos ultimos 30 dias" value="25,00"/>
                </ul>

                <Legend>
                    <h3> Lançamentos </h3> 
                    <p> Filtrar <AiOutlineFilter/> </p>
                </Legend>

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
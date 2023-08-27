import { EntrieCard } from "../../components/EntrieCard";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { InfoCard } from "../../components/InfoCard";
import { Container, InfoList, Legend, EntriesList } from "./styles";

import { AiOutlineAreaChart, AiOutlineFilter } from "react-icons/ai"

export function Dashboard() {

    return (
        <Container>
            <Header/>
            <main>
                <InfoList>
                    <InfoCard title="Saldo atual" value="25,00" icon={AiOutlineAreaChart}/>
                    <InfoCard title="Entrada nos ultimos 30 dias" value="25,00" icon={AiOutlineAreaChart}/>
                    <InfoCard title="Saida nos ultimos 30 dias" value="25,00" icon={AiOutlineAreaChart}/>
                </InfoList>

                <Legend>
                    <h3> Lançamentos </h3> 
                    <p> Filtrar <AiOutlineFilter/> </p>
                </Legend>

                <EntriesList>
                    <EntrieCard title="Conta de Luz" description="Competência Agosto" date="27/08/2023" value="150,00"/>
                    <EntrieCard title="Conta de Luz" description="Competência Agosto" date="27/08/2023" value="150,00"/>
                    <EntrieCard title="Conta de Luz" description="Competência Agosto" date="27/08/2023" value="150,00"/>
                    <EntrieCard title="Conta de Luz" description="Competência Agosto" date="27/08/2023" value="150,00"/>
                    <EntrieCard title="Conta de Luz" description="Competência Agosto" date="27/08/2023" value="150,00"/>
                    <EntrieCard title="Conta de Luz" description="Competência Agosto" date="27/08/2023" value="150,00"/>
                    <EntrieCard title="Conta de Luz" description="Competência Agosto" date="27/08/2023" value="150,00"/>
                </EntriesList>
            </main>
            <Footer/>
        </Container>
    )

}
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
                    <InfoCard title="Saldo atual" value="R$ 500,00" icon={AiOutlineAreaChart}/>
                    <InfoCard title="Entradas" description="ultimos 30 dias" value="R$ 600,00" icon={AiOutlineAreaChart}/>
                    <InfoCard title="Saidas" description="ultimos 30 dias" value="100,00" icon={AiOutlineAreaChart}/>
                </InfoList>

                <Legend>
                    <h3> Lançamentos </h3> 
                    <p> Filtrar <AiOutlineFilter/> </p>
                </Legend>

                <EntriesList>
                    <EntrieCard title="Conta de Luz" description="Competência Agosto" date="27/08/2023" value="50,00"/>
                    <EntrieCard title="Conta de Agua" description="Competência Agosto" date="27/08/2023" value="50,00"/>
                    <EntrieCard title="Condominio" description="Competência Agosto" date="27/08/2023" value="50,00"/>
                    <EntrieCard title="Faculdade" description="Competência Agosto" date="27/08/2023" value="50,00"/>
                    <EntrieCard title="Cartão Nubank" description="Competência Agosto" date="27/08/2023" value="50,00"/>
                    <EntrieCard title="Cartão Itau" description="Competência Agosto" date="27/08/2023" value="50,00"/>
                    <EntrieCard title="Conta de Gás" description="Competência Agosto" date="27/08/2023" value="50,00"/>
                    <EntrieCard title="Conta de Luz" description="Competência Agosto" date="27/08/2023" value="50,00"/>
                    <EntrieCard title="Conta de Luz" description="Competência Agosto" date="27/08/2023" value="50,00"/>
                    <EntrieCard title="Conta de Luz" description="Competência Agosto" date="27/08/2023" value="50,00"/>
                    <EntrieCard title="Conta de Luz" description="Competência Agosto" date="27/08/2023" value="50,00"/>
                    <EntrieCard title="Conta de Luz" description="Competência Agosto" date="27/08/2023" value="50,00"/>
                    <EntrieCard title="Conta de Luz" description="Competência Agosto" date="27/08/2023" value="50,00"/>
                </EntriesList>
            </main>
        </Container>
    )

}
import { EntrieCard } from "../../components/EntrieCard";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { InfoCard } from "../../components/InfoCard";
import { Container, InfoList, Legend, EntriesList } from "./styles";

import { api } from "../../services/api";

import { useState, useEffect } from "react";

import { AiOutlineAreaChart, AiOutlineFilter, AiOutlineHome, AiOutlineBarChart, AiOutlineUser, AiOutlineLogout } from "react-icons/ai"

export function Dashboard() {

    const [entries, setEntries] = useState([])
    const [totalEntries, setTotalEntries] = useState(0)


    function getTotalEntries() {
        const entradasFiltradas = entries.filter( entrie => entrie.type == "entrada")
        setTotalEntries(entradasFiltradas.length)
    }
    
    useEffect( () => {
        async function fetchEntries() {

            let query = `/entries/3`

            const response = await api.get(query)
            setEntries(response.data)
            getTotalEntries()
        }

        fetchEntries()
    }, [])


    return (
        <Container>
            <Header/>
            <main>

                <aside>
                    <ul>
                        <li> <AiOutlineHome/> Inicio </li>
                        <li> <AiOutlineBarChart/> Dashboard </li>
                        <li> <AiOutlineUser/> Perfil </li>
                        <li> <AiOutlineLogout/> Logout </li>
                    </ul>
                </aside>
                
                <InfoList>
                    <InfoCard title="Saldo" description="atual" value="500,00" icon={AiOutlineAreaChart}/>
                    <InfoCard title="Entradas" description="ultimos 30 dias" value="600,00" icon={AiOutlineAreaChart}/>
                    <InfoCard title="Saidas" description="ultimos 30 dias" value="100,00" icon={AiOutlineAreaChart}/>
                </InfoList>

                <Legend>
                    <h3> Lançamentos </h3> 
                    <p> Filtrar <AiOutlineFilter/> </p>
                </Legend>

                <EntriesList>
                {
                        entries.map(entrie => (
                            <EntrieCard key={entrie.id} title={entrie.description} description={entrie.category} date={entrie.created_at} value={entrie.value}/>
                        ))
                }
                </EntriesList>
            </main>
        </Container>
    )

}
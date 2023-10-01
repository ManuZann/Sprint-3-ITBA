"use client"
import { fetchUserData } from "../../../utils/filesFunctions"
import { usePathname } from 'next/navigation'

import DisplayTarjeta from "../../../components/Tarjeta/DisplayTarjeta"
import Layout from "../../../components/Layout"
import { Stack, Text } from "@chakra-ui/react"


export default function page(props){
    let cards = <Text>No hay tarjetas que mostrar</Text>
    if(!props.data.lenght) cards = props.data.map(c => <DisplayTarjeta key={c.id} card={c}/>)

    

    return(
        <Layout>
            <Stack display="flex" justify="center" align="center">
                {cards}
            </Stack>
        </Layout>
    )
}

export const getServerSideProps = async ({query}) =>{
    let idUser = parseInt(query.idUser)
    const data = await fetchUserData(idUser, "credit_cards")

    return {props: { data }}
}
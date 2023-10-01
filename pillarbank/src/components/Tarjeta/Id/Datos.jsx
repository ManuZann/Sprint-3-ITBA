import { Stack, SimpleGrid, Text } from "@chakra-ui/react"

export default function Datos({card}){
    return(
        <Stack display="flex" align="center" width="100%" justify="center" mt="2vw" mb="2vw">
            <Text fontSize='4xl'>Tarjeta de Credito</Text>
            <SimpleGrid  columns={[1, 2]} spacing={10} width="50%">
                <Text textAlign="start">Numero:</Text>
                <Text textAlign="end">{card.number}</Text>
                <Text textAlign="start">Expiracion:</Text>
                <Text textAlign="end">{card.expiry}</Text>
                <Text textAlign="start">CVC:</Text>
                <Text textAlign="end">{card.cvc}</Text>
                <Text textAlign="start">Limite:</Text>
                <Text textAlign="end">$ {card.limit}</Text>
            </SimpleGrid>
        </Stack>
    )
}
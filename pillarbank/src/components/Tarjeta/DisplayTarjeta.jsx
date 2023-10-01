"use client"
import { SimpleGrid, Stack, Stat, StatLabel, StatNumber, StatHelpText, Button, Divider } from '@chakra-ui/react'
import { InfoOutlineIcon } from '@chakra-ui/icons'

import { usePathname } from 'next/navigation'
import 'react-credit-cards-2/dist/es/styles-compiled.css'
import Link from 'next/link'
import Tarjeta from './Tarjeta'


export default function DisplayTarjeta({card}) {
  let path = usePathname()
  console.log(path[1]);
  return (
    <Stack bgColor="gray.100" boxShadow='xl' margin="10px" width="90%" position="relative" borderRadius="10px">
      <SimpleGrid columns={[1, 2]} spacing="3" 
      alignItems="center" justifyContent="space-around">
        <Stack margin="5">
          <Tarjeta card={card}/>
        </Stack>
        <Stack aling={"center"} justify={"center"} margin="5">
          <Stat>
            <StatLabel fontSize="4xl">Limite</StatLabel>
            <StatNumber>$ {card.limit}</StatNumber>
            <StatHelpText fontSize="6xs">Expira: {card.expiry}</StatHelpText>
          </Stat>
        </Stack>
      </SimpleGrid>
      <Stack position="absolute" bottom="2" right="2">
        <Link href={`/${path[1]}/tarjetas/${card.id}`}>
          <Button leftIcon={<InfoOutlineIcon/>} colorScheme='teal' variant='outline'>Mas Informacion</Button>
        </Link>
      </Stack>
    </Stack>
  )
}

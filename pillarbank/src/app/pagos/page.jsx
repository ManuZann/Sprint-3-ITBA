'use client'
import {
  Box,
  Button,
  HStack,
  Heading,
  VStack,
} from "@chakra-ui/react";
import PagosCard from "../../components/PagosCard/PagosCard";
import Layout from "../../components/Layout";
import {leerSessionStorage, escribirSessionStorage} from '../../utils/files/filesFunctions';
import * as info from '../../data/serviciosUser.json'
import {useEffect} from 'react'

export default function PagosPage() {

  useEffect(() => {
    escribirSessionStorage("servicios", info);
  }, [])
  
  const {default : data} = leerSessionStorage("servicios")
  
  const pagos = data.filter(d => d.idU === "3").map(d => d.servicios.map( s => <PagosCard name={s.name} price={s.price} />))
  

  return (
    <>
    <Layout>

      <Heading textAlign="center" mt="10px">
        Pagos
      </Heading>

      <Box textAlign="center" mt="10px" mb="15px">
        <Button>Nuevo Pago</Button>
      </Box>

      <VStack display="flex" pr='25%' pt="10px" pb='20px'>
          <Heading size="md">Pagos por vencer</Heading>
          <Button>Agregar un servicio</Button>
      </VStack>
        <VStack>
          <HStack
            border="1px"
            borderColor="gray.300"
            borderRadius="10px"
            flexWrap="wrap"
            justifyContent="right"
            spacing={6}
          >
            {pagos}
          </HStack>
        </VStack>
      
    </Layout>
    </>
  );
}
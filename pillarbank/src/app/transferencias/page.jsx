import { Box, Button, HStack, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import TransferenciaCard from "../../components/TransferenciasCard/transferenciasCard";

export default function TransferenciasPage() {
  return (
    <>
      <Heading textAlign="center" mt="10px">
        Transferencias
      </Heading>
      <Box display="grid" textAlign="center" mt="2rem" p="20px">
        <HStack justifyContent="center">
          <Button colorScheme="teal" >Transferir con Alias, CBU o CVU</Button>
          <Button colorScheme="teal" >Ingresar Dinero</Button>
        </HStack>
      </Box>
      <Box ml="5rem">
        <Heading size="md" textAlign="start">
          Transferir a contactos
        </Heading>
        <Button colorScheme="teal" mt="5px">Agregar Contacto + </Button>
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(120px, 1fr))"
          mt='10px'
        >
          <TransferenciaCard name="Aldo Andres" />
          <TransferenciaCard name="Nicolas Colombo" />
          <TransferenciaCard name="Harold" />
        </SimpleGrid>
      </Box>
    </>
  );
}
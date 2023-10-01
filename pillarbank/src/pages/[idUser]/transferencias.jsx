"use client";
import {
  Box,
  Button,
  HStack,
  Heading,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";
import TransferenciaCard from "../../components/TransferenciasCard/transferenciasCard";
import Layout from "../../components/Layout";
import { fetchTransferenciasData } from "../../utils/filesFunctions";

//Obtenemos los datos de las cuentas del banco del archivo "bankaccounts"
export async function getServerSideProps(context) {
  const { params } = context;
  const idUser = params.idUser;
  try {
    const userData = await fetchTransferenciasData(idUser, "bankaccounts");
    return {
      props: {
        user: userData,
        id: idUser,
      },
    };
  } catch (error) {
    console.log(error);
    console.error("Error al cargar los datos del usuario:", idUser);
    return {
      notFound: true,
    };
  }
}

export default function TransferenciasPage({ user, id }) {
  const cuentas = user.map((s) => (
    <TransferenciaCard cuenta={s} idActual={id} />
  ));

  return (
    <>
      <Layout>
        <Heading textAlign="center" mt="10px">
          Transferencias
        </Heading>
        <Box display="grid" textAlign="center" mt="2rem" p="20px">
          <HStack justifyContent="center">
            <Button colorScheme="teal">Transferir con Alias, CBU o CVU</Button>
          </HStack>
        </Box>
        <Box ml="5rem">
          <Heading size="md" textAlign="start">
            Transferir a contactos
          </Heading>
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(120px, 1fr))"
            mt="10px"
          >
            {cuentas}
          </SimpleGrid>
        </Box>
      </Layout>
    </>
  );
}

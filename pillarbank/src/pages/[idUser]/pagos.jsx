"use client";

import { Box, Button, HStack, Heading, VStack } from "@chakra-ui/react";
import PagosCard from "../../components/PagosCard/PagosCard";
import Layout from "../../components/Layout";
import { fetchUserData } from "../../utils/filesFunctions";
import { useRouter } from "next/navigation";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

//Obtenemos los datos del servidor
export async function getServerSideProps(context) {
  const { params } = context;
  const idUser = params.idUser;
  try {
    const userData = await fetchUserData(idUser, "serviciosUser");

    return {
      props: {
        user: userData,
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

export default function PagosPage({ user }) {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [newPago, setNewPago] = useState({
    name: "",
    price: 0,
  });

  const pagos = user.map((d) =>
    d.servicios
      .filter((s) => s.price !== 0)
      .map((s) => <PagosCard name={s.name} price={s.price} id={user[0].idU} />)
  );

  //Guardamos el nuevo servicio o pago en el archivo "servicios"
  const handleSubmit = async () => {
    await fetch("/api/servicios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idU: user[0].idU,
        servicios: [newPago],
      }),
    });
    router.push(
      {
        pathname: "/[idUser]/pagos",
        query: { idUser: user[0].idU },
      },
      undefined,
      { shallow: true }
    );
    onClose();
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setNewPago({ ...newPago, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Layout>
        <Heading textAlign="center" mt="10px">
          Pagos
        </Heading>

        <Box textAlign="center" mt="10px" mb="15px">
          <Button onClick={onOpen}>Nuevo Pago</Button>
        </Box>

        <VStack display="flex" pr="25%" pt="10px" pb="20px">
          <Heading size="md">Pagos por vencer</Heading>
        </VStack>
        <VStack>
          <HStack
            border="1px"
            borderColor="gray.300"
            borderRadius="10px"
            flexWrap="wrap"
            justifyContent="center"
            spacing={6}
            maxW="700px"
          >
            {pagos}
          </HStack>
        </VStack>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Agregar un Pago</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Nombre del pago o servicio</FormLabel>
                <Input
                  name="name"
                  placeholder="Factura..."
                  onChange={handleChange}
                  isRequired
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Costo $</FormLabel>
                <Input
                  name="price"
                  placeholder="$0.00"
                  onChange={handleChange}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
                Agregar
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Layout>
    </>
  );
}

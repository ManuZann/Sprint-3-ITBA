"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
  Avatar,
  HStack,
} from "@chakra-ui/react";
import Layout from "../../components/Layout";
import { useEffect, useState } from "react";

export default function PerfilPage() {
  const [user, setUser] = useState({});

  //Obtenemos los datos del usuario logueado
  useEffect(() => {
    const usuarioAlmacenado = sessionStorage.getItem("usuario");
    const usuario = usuarioAlmacenado ? JSON.parse(usuarioAlmacenado) : {};

    setUser(usuario);
  }, []);

  return (
    <Layout>
      <Card maxWidth="400px" m="auto" height="70%" mt="5%">
        <CardHeader>
          <HStack justify={"center"}>
            <Avatar name="" src="" size={"lg"} />
            <Heading size="lg" textAlign="center">
              Mi perfil
            </Heading>
          </HStack>
        </CardHeader>
        <CardBody marginTop="28px">
          <Stack divider={<StackDivider />} spacing="2.5" marginTop="-2rem">
            <Box>
              <Heading size="xs">Nombre</Heading>
              <Text fontSize="sm">{user.nombre}</Text>
            </Box>
            <Box>
              <Heading size="xs">Usuario</Heading>
              <Text fontSize="sm">{user.usuario}</Text>
            </Box>
            <Box>
              <Heading size="xs">Correo</Heading>
              <Text fontSize="sm">{user.correo}</Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Layout>
  );
}

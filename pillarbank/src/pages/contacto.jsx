"use client";
import {
  Stack,
  Text,
  Textarea,
  Input,
  HStack,
  Button,
  useToast,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import { useState } from "react";

export default function Contacto() {
  const toast = useToast();

  const [nombreApellido, setNombreApellido] = useState("");
  const [mail, setMail] = useState("");
  const [detalle, setDetalle] = useState("");
  return (
    <Layout>
      <Stack display="flex" align="center">
        <Stack width="80%">
          <HStack>
            <Input
              variant="filled"
              placeholder="Nombre y Apellido"
              value={nombreApellido}
              onChange={(e) => setNombreApellido(e.target.value)}
            />
            <Input
              variant="filled"
              type="email"
              placeholder="Correo Electronico"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </HStack>

          <Text mb="8px">Descripcion del problema:</Text>
          <Textarea
            value={detalle}
            onChange={(e) => setDetalle(e.target.value)}
            placeholder="Descripcion del problema"
            size="sm"
          />
          <Stack align="center">
            <Button
              colorScheme="teal"
              variant="solid"
              width="8vw"
              onClick={() =>
                enviar(toast, setNombreApellido, setMail, setDetalle)
              }
            >
              Enviar
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Layout>
  );
}

function enviar(toast, setNombreApellido, setMail, setDetalle) {
  toast({
    title: "Mensaje Enviado.",
    description: "A la brevedad nos estaremos comunicando con usted.",
    status: "success",
    duration: 9000,
    isClosable: true,
  });
  setNombreApellido("");
  setMail("");
  setDetalle("");
}

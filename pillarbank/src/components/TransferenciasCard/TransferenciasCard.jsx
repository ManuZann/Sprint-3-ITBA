import React from "react";
import {
  Button,
  Avatar,
  Card,
  CardHeader,
  Text,
  CardFooter,
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

export default function TransferenciaCard({ cuenta, idActual }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [transferencia, setTransferencia] = useState({
    id1: idActual,
    cuentaDestino: cuenta.numberAccount,
    monto: 0,
  });

  const handleSubmit = async () => {
    //Conectamos con el mismo servidor para escribir en el archivo "cuentas"
    await fetch("/api/cuentas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...transferencia,
      }),
    });
    onClose();
  };

  const handleChange = (e) => {
    console.log(transferencia);
    setTransferencia({ ...transferencia, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Card maxH="180px">
        <CardHeader textAlign="center">
          <Avatar name={cuenta.nombre} />
        </CardHeader>
        <Text textAlign="center">{cuenta.nombre}</Text>
        <CardFooter>
          <Button colorScheme="teal" onClick={onOpen}>
            Transferir
          </Button>
        </CardFooter>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Transferir a {cuenta.nombre}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={4}>
              <FormLabel>Monto</FormLabel>
              <Input name="monto" placeholder="$0.00" onChange={handleChange} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Transferir
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

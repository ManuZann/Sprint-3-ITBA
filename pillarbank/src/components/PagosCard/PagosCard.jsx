import React from "react";
import {
  Button,
  Avatar,
  Card,
  CardHeader,
  CardBody,
  Text,
  CardFooter,
  Heading,
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

export default function PagosCard({ name, price, id }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = async () => {
    await fetch("/api/pagoServicio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        price: price,
        idU: id,
      }),
    });
    onClose();
  };

  return (
    <>
      <Card
        maxH="170px"
        size="sm"
        borderRadius="10px"
        maxW="150px"
        minW="150px"
        minH="170px"
      >
        <CardHeader textAlign="center">
          <Heading size="md">{name}</Heading>
        </CardHeader>
        <CardBody></CardBody>
        <Text textAlign="center" mt="-20px">
          $ {price}
        </Text>
        <CardFooter justifyContent="center">
          <Button colorScheme="teal" onClick={onOpen}>
            Abonar
          </Button>
        </CardFooter>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Abonar</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text>Está por abonar: {name}</Text>
            <Text>Por un total de: {price}</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Pagar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

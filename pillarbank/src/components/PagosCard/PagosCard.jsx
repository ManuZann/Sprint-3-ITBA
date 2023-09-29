import React from "react";
import {
  Button,
  Card,
  CardHeader,
  Text,
  CardFooter,
  Heading,
  CardBody,
} from "@chakra-ui/react";

export default function PagosCard({name, price}) {
  return (
    <>
      <Card maxH="180px" size='sm' borderRadius='10px'>
        <CardHeader textAlign="center">
          <Heading size='md'>{name}</Heading>
        </CardHeader>
        <CardBody textAlign='center'>
            <Text>$ {price}</Text>
        </CardBody>
        <CardFooter justifyContent='center'>
          <Button colorScheme="teal">Abonar</Button>
        </CardFooter>
      </Card>
    </>
  );
}
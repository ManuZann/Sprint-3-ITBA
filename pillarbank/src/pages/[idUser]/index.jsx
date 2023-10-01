'use client'

import {
  SimpleGrid,
  Stack,
  Box,
  Icon,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import Layout from "../../components/Layout";
import CardAccount from "../../components/cuentas/AccountCard";
import AddAccount from "../../components/cuentas/AddAccount";

import { useEffect, useState } from "react";

import Accounts from "../../../public/bankaccounts.json";

export default function Account() {
  let [cuentas, setCuentas] = useState(Accounts);
  let [actualizador, setActualizador] = useState(false);
  let [componenteCuentas, setComponenteCuentas] = useState([]);

  useEffect(() => {
    let nuevComp = renderAccounts(cuentas, setCuentas, setActualizador);
    setComponenteCuentas(nuevComp);
    setActualizador(false);
  }, [actualizador]);

  return (
    <Layout>
      <Stack align="center" width="90%" margin="1" border="0.5px">
        <Accordion allowToggle width="95%">
          <AccordionItem>
            <AccordionButton
              bg="teal.400"
              _expanded={{ bg: "teal.400" }}
              _hover={{bg:"teal.300"}}
              padding="15px"
              borderRadius="3px"
              title="Expandir añadir cuenta"
            >
              <Box as="span" flex="1" textAlign="left" />
              <Icon as={AddIcon} />
            </AccordionButton>
            <AccordionPanel>
              <AddAccount
                cuentas={cuentas}
                setCuentas={setCuentas}
                setActualizador={setActualizador}
              />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <SimpleGrid columns={[1, 2, 3]} spacing="3" width="90%">
          {componenteCuentas}
        </SimpleGrid>
      </Stack>
    </Layout>
  );
}

function renderAccounts(cuentas, setCuentas, setActualizador) {
  if (cuentas.length === 0)
    return <Text textAlign="center">No hay cuentas disponibles.</Text>;
  return cuentas.map((c) => (
    <CardAccount
      key={c.id}
      cuenta={c}
      cuentas={cuentas}
      setCuentas={setCuentas}
      setActualizador={setActualizador}
    />
  ));
}

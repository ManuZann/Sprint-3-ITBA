'use client'

import {Accordion, AccordionItem, AccordionButton, AccordionIcon, Flex, Box} from "@chakra-ui/react";
import Layout from "../../components/Layout";

import PanelConvertion from "../../components/herramientas/PanelConvertion";
import PanelCalculator from "../../components/herramientas/PanelCalculator"

function AdditionalTools(){    
    return(
        <Layout>
            <Flex justify="center">
                <Accordion width="90%" allowMultiple>
                    <AccordionItem>
                        <AccordionButton _expanded={{ bg: 'gray', color: 'white' }}>
                            <Box as="span" flex='1' textAlign='left'>Conversion de Monedas</Box>
                            <AccordionIcon/>
                        </AccordionButton>
                        <PanelConvertion/>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton _expanded={{ bg: 'gray', color: 'white' }}>
                            <Box as="span" flex='1' textAlign='left'>Calculadora de Prestamos</Box>
                            <AccordionIcon/>
                        </AccordionButton>
                        <PanelCalculator/>
                    </AccordionItem>
                </Accordion>
            </Flex>
        </Layout>
    )
}



export default AdditionalTools
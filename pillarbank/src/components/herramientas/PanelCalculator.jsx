import {AccordionPanel, Stack, Select, Button, Input, InputGroup, InputLeftAddon,
        SlideFade, Table, TableCaption, Thead, Tbody, Tr, Th, useDisclosure, SimpleGrid} from "@chakra-ui/react";
import { useState } from "react";
import cuotasTable from "./Table"



function PanelCalculator(){
    //Funcion para animacion tabla
    const { isOpen, onToggle } = useDisclosure()

    //Estados para movimiento de datos entre este componente y CoutasTable
    let [monto, setMonto] = useState(0)
    let [cuota, setCuota] = useState(0)
    let [tabla, setTabla] = useState()

    return(
        <AccordionPanel borderBottomRadius="15px" bg="gray.100">
            <SimpleGrid columns={[1, 2]} spacing="10%" justify="center">
                {/*Input Monto*/}
                <InputGroup>
                    <InputLeftAddon children='$' />
                    <Input variant='filled' placeholder="Ingrese el monto:" onChange={e => setMonto(e.target.value)}/>
                </InputGroup>
                {/*Selector de Cuotas*/}
                <Select variant='flushed' placeholder='Seleccione cantidad de Cuotas' onChange={e=>setCuota(e.target.value)}>
                    <option value="3">3 cuotas.</option>
                    <option value="6">6 coutas.</option>
                    <option value="9">9 coutas.</option>
                    <option value="12">12 coutas.</option>
                    <option value="36">36 coutas.</option>
                </Select>
                
            </SimpleGrid>
            <Stack mt="15px" direction="row" justify="center">
                {/*Boton calcular para ejecutar la funcion importada cuotasTable y setear el estado tabla con el valor que devuelve*/}
                <Button colorScheme='teal' size='sm' width={["50%", "20%"]} onClick={() => cuotasTable(monto, cuota, onToggle, setTabla)}>Calcular</Button>
            </Stack>
            <hr/>
            <Stack align="center">
                {/*Columna principal tabla*/}
                <SlideFade in={isOpen} offsetY='20px'>
                    <Table variant="simple">
                        {/*Pie de tabla*/}
                        <TableCaption>Esto es solo un simulador, algunos valores pueden ser alterados.</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Numero de Cuota</Th>
                                <Th>Saldo</Th>
                                <Th>Interes</Th>
                                <Th>Cuota</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {/*Uso del estado tabla seteado al hacer click en el boton Calcular*/}
                            {tabla}
                        </Tbody>
                    </Table>
                </SlideFade>
            </Stack>
        </AccordionPanel>
    )
}

export default PanelCalculator
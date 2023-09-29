import {AccordionPanel, Select, Button, Input, Checkbox, InputGroup, InputLeftAddon, SimpleGrid} from "@chakra-ui/react";
import { useState } from "react";
import moneyCodes from "../../data/moneyCodes.json"

let apiKey = "f3ca450bb709339ac7a207c7"

function PanelConvertion(){
    //Estados para fetch y su resultado
    let [moneda1 , setMoneda1] = useState("")
    let [moneda2 , setMoneda2] = useState("")
    let [cantidad, setCantidad] = useState(0)
    let [conversion, setConversion] = useState(0)

    //Estado para mas opciones de monedas
    let [checked, setChecked] = useState(false)

    return(
        <AccordionPanel align="space-between" flexDir="row" bg="gray.100" borderBottomRadius="15px" marginBottom="10px">
            <SimpleGrid columns={[1, 3, 5]} >
                {/*Input Monto a convertir*/}
                <InputGroup>
                    <InputLeftAddon children='$' />
                    <Input variant='filled' value={cantidad} onChange={e => setCantidad(e.target.value)} />
                </InputGroup>
                {/*Select moneda del monto*/}
                <Select key="moneda1" variant='flushed' placeholder='Seleccione una Moneda' onChange={e => setMoneda1(e.target.value)}>
                    {monCodes(checked)}
                </Select>
                {/*Select moneda a convertir*/}
                <Select key="moneda2" variant='flushed' placeholder='Seleccione una Moneda' onChange={e => setMoneda2(e.target.value)}>
                    {monCodes(checked)}
                </Select>
                {/*Boton que ejecuta la funcion de la api*/}
                <Button colorScheme='teal' size='sm' onClick={async () => await accederAPI(moneda1, moneda2, cantidad, setConversion)}>Convertir</Button>
                {/*Input deshabilitado para resultado*/}
                <InputGroup>
                    <InputLeftAddon children='$' />
                    <Input variant='filled' value={conversion} disabled/>
                </InputGroup>
            </SimpleGrid>
            {/*Check para mas opciones de conversion*/}
            <Checkbox  colorScheme='gray' onChange={e => setChecked(e.target.checked)}>Mostrar todas las monedas.</Checkbox>
        </AccordionPanel>
    )
}

//Funcion para traer los datos de la API
async function accederAPI(moneda1, moneda2, cantidad, setConversion){
    //Condicional para comprobar que se pasen los datos requeridos
    if(!moneda1 || !moneda2 || !cantidad){
        
        alert("Ingrese todos los datos requeridos")
        return 0
    }
    //Fetch de la api y establecer valor del estado
    await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${moneda1}/${moneda2}/${cantidad}`)
    .then(response => response.json())
    .then(data => setConversion(data.conversion_result))
}

//Funcion para opciones de monedas
function monCodes(checked){
    let codes = []
    //Condicional de checkbox Mostrar monedas
    if(checked){
        //Recorrido de JSON con todos los valores de monedas disponibles
        moneyCodes.forEach(c => codes.push(<option key={c.code} value={c.code}>{`${c.code}: ${c.name}`}</option>))
    }else{
        //Valores predefinidos mas comunes usados
        codes = [
            <option key="ARS" value="ARS">ARS: Argentine Peso</option>,
            <option key="USD" value="USD">USD: United States Dollar</option>,
            <option key="EUR" value="EUR">EUR: Euro</option>
        ]
    }
    return codes
}

export default PanelConvertion
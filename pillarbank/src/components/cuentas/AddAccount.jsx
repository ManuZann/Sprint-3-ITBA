import { SimpleGrid, Select, Input, InputGroup, InputLeftAddon, Button} from "@chakra-ui/react"
import { useState } from "react"

function AddAccount({cuentas, setCuentas, setActualizador}){
    let [select, setSelect] = useState()
    let [inpMon, setInpMon] = useState(0)

    return(
        <SimpleGrid columns={[1, 2, 3]} spacing="3">
            <Select value={select} placeholder="Tipo de Cuenta" onChange={e => setSelect(e.target.value)}>
                <option value="Caja De Ahorro">Caja de Ahorro</option>
                <option value="Cuenta Sueldo">Cuenta Sueldo</option>
                <option value="Cuenta Corriente">Cuenta Corriente</option>
                <option value="Cuenta Prestamo">Cuenta Prestamo</option>
            </Select>
            <InputGroup>
                <InputLeftAddon children='$' />
                <Input placeholder='Cantidad Cuenta' value={inpMon} onChange={e => setInpMon(e.target.value)}/>
            </InputGroup>
            <Button colorScheme='teal' onClick={() => addAccount(select, inpMon, cuentas, setCuentas, setActualizador)}>Agregar Cuenta</Button>
        </SimpleGrid>
    )
}

function addAccount(select, inpMon, cuentas, setCuentas, setActualizador){
    if(!select) return alert("Seleccione un tipo de cuenta.")
    if(!inpMon || inpMon < 0) return alert("Ingrese el valor para la cuenta")
    
    let codigo = Math.round(Math.random()*999999)
    let codigoCuenta = `0323-${codigo} / 001`

    let cuenta = {"id": (cuentas.length + 1), "typeAccount": select, "numberAccount": codigoCuenta, "balance": inpMon}
    let nuevasCuentas = [...cuentas]
    nuevasCuentas.push(cuenta)
    setCuentas(nuevasCuentas)

    setActualizador(true)
}

export default AddAccount
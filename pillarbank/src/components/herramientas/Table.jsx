import { Tr, Td } from "@chakra-ui/react"

function cuotasTable(monto, cuotas, onToggle, setTabla){
    //Condicional para evitar la ejecucion sin datos necesarios
    if(!monto || !cuotas) return alert("Ingrese los datos requeridos.")
    
    //Funcion toggle de animacion de la tabla
    onToggle()

    //Calculo de Cuota, Saldo e Interes
    let tasaMensual = 9.83 / 100

    let cuota = (tasaMensual * monto) / (1 - (1 + tasaMensual) ** - cuotas)
    let interes = parseFloat(monto * tasaMensual * cuotas)
    let saldo = parseFloat(monto)

    //Recorrido de la cantidad de cuotas y definicion de los componentes
    let columnas = []
    
    for(let i = 1; i <= cuotas; i++){
        columnas.push(
            <Tr key={i}>
                <Td>{i}</Td>
                <Td>{saldo.toFixed(2)}</Td>
                <Td>{interes.toFixed(2)}</Td>
                <Td>{cuota.toFixed(2)}</Td>
            </Tr>
        )
        saldo -= cuota
        setTabla(columnas)
    }
}

export default cuotasTable
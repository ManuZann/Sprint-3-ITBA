import { Card, CardHeader, CardBody, CardFooter, Text, Button, Divider, Stack} from '@chakra-ui/react'

function CardAccount({cuenta, cuentas, setCuentas, setActualizador}){
    return(
        <Card key={cuenta.id} variant="outline" align="space-betwen" colorScheme='gray' w="100%">
            <CardHeader>
                <Stack flexDir="row" justify="space-between">
                    <Text fontSize='2xl'>{cuenta.typeAccount}</Text>
                    <Button borderRadius="100%" colorScheme='teal'  onClick={() => deleteAccount(cuenta.numberAccount, cuentas, setCuentas, setActualizador)}>X</Button>
                </Stack>
                </CardHeader>
            <Divider colorScheme="blackAlpha"/>
            <CardBody>
                <Stack flexDir="row" justify="space-between">
                    <Text fontSize='3xl' color="gray" align="match-parent">Saldo</Text>
                    <Text fontSize='3xl' color="gray" align="match-parent">${cuenta.balance}</Text>
                </Stack>
                <Stack flexDir="row" justify="space-between">
                    <Text fontSize='2x1' color="gray">Nro De Cuenta:</Text>
                    <Text fontSize='2x1' color="gray">{cuenta.numberAccount}</Text>
                </Stack>
            </CardBody>
            <CardFooter justify="end">
                <Button colorScheme='teal' variant='outline'>Transferir</Button>
            </CardFooter>
        </Card>
    )
}

function deleteAccount(numberAccount, cuentas, setCuentas, setActualizador){
    let filtroCuentas = cuentas.filter(c => c.numberAccount !== numberAccount)
    setCuentas(filtroCuentas)
    setActualizador(true)
}


export default CardAccount
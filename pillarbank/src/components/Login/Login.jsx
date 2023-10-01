"use client"
import {
    Flex,
    Box,
    Heading,
    Text,
    Link,
    FormControl,
    FormLabel,
    Input,
    Button,
    Checkbox,
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    HStack,
  } from "@chakra-ui/react";
  
  import { useState } from "react";
  import { useRouter } from 'next/navigation'
  import {validarCredenciales} from '../../utils/filesFunctions'
import { resolve } from "path";


  // Login box/space
  function LoginArea() {
    return (
      <Flex
        minHeight="100vh"
        width="full"
        align="Center"
        justifyContent="center"
        bg="teal"
      >
        <Box
          borderWidth={1}
          px={4}
          width="full"
          maxWidth="500px"
          borderRadius={4}
          textAlign="center"
          bg="gray.200 "
          boxShadow="dark-lg"
        >
          <LoginHeader />
          <LoginForm />
        </Box>
      </Flex>
    );
  }
  
  export default LoginArea;
  
  // Encabezado
  function LoginHeader() {
    return (
      <Box textAlign="center">
        <Heading>Inicia sesión en tu cuenta</Heading>
        <Text>
          <Link color="teal" href="/">Crea una cuenta</Link>
        </Text>
      </Box>
    );
  }
  
  // Formulario de Login
  function LoginForm() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const router = useRouter()

    const handleLogin = async (e) => {
      e.preventDefault();
    
      const userValido = await validarCredenciales(user, password)
      console.log(userValido)
      if (userValido) {
        // Almacena la información del usuario en sessionStorage
        const usuario = { nombre: userValido.nombre, usuario: userValido.usuario, correo: userValido.correo, id: userValido.id };
        sessionStorage.setItem('usuario', JSON.stringify(usuario));
      
        // Redirige a la página de inicio o a donde desees
        router.push(
          {
            pathname: "/[idUser]/",
            query: { idUser: userValido.id },
          },
          undefined,
          { shallow: true }
        );
      }
      else{setError(true)}
    };
  
    return (
      <Box my={8} textAlign="left">
        <form onSubmit={handleLogin}>
          <FormControl isRequired>
            <FormLabel>Usuario</FormLabel>
            <Input
              type="user"
              placeholder="Escribi tu nombre de Usuario"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            ></Input>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Contraseña</FormLabel>
            <Input
              type="password"
              placeholder="Escribi tu Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
          </FormControl>
  
          <HStack justifyContent="space-between" mt={4}>
            <Box>
              <Checkbox defaultChecked colorScheme="teal">
                Recuerdame
              </Checkbox>
            </Box>
            <Box>
              <Link color="teal" href="/">Olvidaste tu contraseña?</Link>
            </Box>
          </HStack>
          <Button colorScheme="teal" width="full" mt="4" type="submit">
            Iniciar Sesión
          </Button>
          {error && (
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>¡Datos incorrectos!</AlertTitle>
              <AlertDescription>
                El Usuario y/o Contraseña es incorrecto
              </AlertDescription>
            </Alert>
          )}
        </form>
      </Box>
    );
  }
  
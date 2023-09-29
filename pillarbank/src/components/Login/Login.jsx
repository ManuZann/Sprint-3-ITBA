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
    Stack,
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
          O <Link color="teal">Crea una cuenta</Link>
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

    const handleLogin = (e) => {
      e.preventDefault();
    
      // Si el usuario y la contraseña son "admin" y "password"
      if (user === "admin" && password === "admin") {
        // Inicio de sesión exitoso, redirigir a otra página
        router.push("/home");
      } else {
        setError(true);
      }
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
              <Link color="teal">Olvidaste tu contraseña?</Link>
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
  
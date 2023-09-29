import { ChakraProvider } from "@chakra-ui/react";

export default function Layout({children}){
    return(
        <ChakraProvider>
            {children}
        </ChakraProvider>
    )
}
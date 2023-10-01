import { ChakraProvider, Stack } from "@chakra-ui/react";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer"
import { usePathname } from 'next/navigation'
import Head from "next/head";

export default function Layout({children, title}){
    let path = usePathname()
    return(
        <ChakraProvider>
            <Head>
                <title>PillarBank - {title}</title>
                <link rel="icon" href="/image/logo.png" sizes="any" />
                <meta name="PillarBank" lang="es" content="Banco PillarBank" ></meta>
            </Head>
            {path == "/login"? null : <Stack mb={10}><Navbar/></Stack>}
            {children}
            {path == "/contacto" ? null : <Footer/>}
        </ChakraProvider>
    )
}
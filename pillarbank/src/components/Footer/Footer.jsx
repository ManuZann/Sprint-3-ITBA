import { Stack, Text, Divider } from "@chakra-ui/react";
import Link from "next/link";

export default function Footer(){
    return(
        <Stack align="center" justify="center" mt="10" >
            <Divider orientation='horizontal' width="90%"/>
            <Link href="/contacto">
                <Text as={"samp"}>Contactanos</Text>
            </Link>
        </Stack>
    )
}
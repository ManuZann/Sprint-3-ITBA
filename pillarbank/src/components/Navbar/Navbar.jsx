import React from "react";
import { HStack, Box, Flex, Spacer, Text} from "@chakra-ui/react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import Image from "next/image"
import { usePathname } from "next/navigation";


import Link from "next/link";

export default function Navbar () {
  const path = usePathname()
  return (
    <>
      <Box bgGradient="linear(to-t, teal.400, teal.600)" boxShadow='xl' p={4} color="black">
        <Flex>
          <Box alignItems="center" display="flex">
            <HStack display="flex" dir="row" wrap="wrap">
              <Link href={path == "/" || "/contacto" ? "/" : `/${path[1]}`} fontSize="40" fontWeight="bold">
                <Image src="/image/logo.png" alt="Logo" width={64} height={64} mr={2} />
              </Link>
              <Link href={path == "/" || "/contacto" ? "/" : `/${path[1]}`} fontSize="40" fontWeight="bold">
                <Text fontSize='2xl'>PillarBank</Text>
              </Link>
            </HStack>
          </Box>
          <Spacer />
          <Box alignItems="center" display="flex">
            {path == "/" || path == "/contacto" ? null : <DropdownMenu />}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

import React from "react";
import { Box, Flex, Link, Spacer, Text, Image, Center } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { Outlet } from "react-router-dom";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <>
    <Box bg="#008080" p={4} color="black">
      <Flex>
        <Box alignItems="center" display="flex">
          <Image src={logo} alt="Logo" w={16} h={16} mr={2} />
          <Link as={RouterLink} to="/home" fontSize="40" fontWeight="bold">
            PillarBank
          </Link>
        </Box>
        <Spacer />
        <Box alignItems="center" display="flex">
          <DropdownMenu />
        </Box>
      </Flex>
    </Box>
      <Outlet />
    </>
  );
};

export default Navbar;

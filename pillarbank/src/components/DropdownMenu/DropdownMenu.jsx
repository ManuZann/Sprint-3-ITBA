"use client"
import React, { useEffect, useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button, Divider } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons"; // Importa ChevronDownIcon desde @chakra-ui/icons
import { useRouter } from "next/router";
import Link from "next/link";

const DropdownMenu = () => {
  const router = useRouter()
  const [user, setUser] = useState({})

  useEffect(() => {
    const usuarioAlmacenado = sessionStorage.getItem("usuario");
    const usuario = usuarioAlmacenado ? JSON.parse(usuarioAlmacenado) : {};
    
    if(!usuarioAlmacenado) router.push("/login")
    setUser(usuario);
  }, []);

  return (
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Menu
        </MenuButton>
        <MenuList>
          <Link href="/">
            <MenuItem>Inicio</MenuItem>
          </Link>
          <Link href={`/${user.id}/perfil`}>
            <MenuItem>Mi perfil</MenuItem>
          </Link>
          <Link href={`/${user.id}`}>
            <MenuItem>Cuentas</MenuItem>
          </Link>
          <Link href={`/${user.id}/tarjetas`}>
            <MenuItem>Tarjetas</MenuItem>
          </Link>
          <Link href={`/${user.id}/transferencias`}>
            <MenuItem>Transferencias</MenuItem>
          </Link>
          <Link href={`/${user.id}/pagos`}>
            <MenuItem>Pagos</MenuItem>
          </Link>
          <Link href="/herramientas">
            <MenuItem>Herramientas</MenuItem>
          </Link>
          <Divider colorScheme="red" />
          <Link href="/" onClick={() => sessionStorage.clear()}>
            <MenuItem>Cerrar sesión</MenuItem>
          </Link>
        </MenuList>
      </Menu>
  );
};

export default DropdownMenu;

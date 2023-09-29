import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons"; // Importa ChevronDownIcon desde @chakra-ui/icons
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const DropdownMenu = () => {
  const { isLogged, signOut } = useAuth();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Menu
      </MenuButton>
      <MenuList>
        <Link to="/home">
          <MenuItem>Inicio</MenuItem>
        </Link>
        <Link to="/perfil">
          <MenuItem>Mi perfil</MenuItem>
        </Link>
        <Link to="/transferencias">
          <MenuItem>Transferencias</MenuItem>
        </Link>
        <Link to="/pagos">
          <MenuItem>Pagos</MenuItem>
        </Link>
        <Link to="/herramientas">
          <MenuItem>Herramientas</MenuItem>
        </Link>
        {isLogged ? (
          <Link to="/home" onClick={() => signOut()}>
            <MenuItem>Cerrar sesión</MenuItem>
          </Link>
        ) : null}
      </MenuList>
    </Menu>
  );
};

export default DropdownMenu;

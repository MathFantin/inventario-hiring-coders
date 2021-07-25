import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './style';
import { BiUserCircle } from 'react-icons/bi';
import { GiLightBackpack } from 'react-icons/gi';
import { HiHome } from 'react-icons/hi';

const MyHeader = () => {
  return(
    <Container>
      <nav>
        <Link to="/"> 
          <HiHome /> Página Inicial
        </Link>
        <Link to="/produtos">
          <GiLightBackpack /> Produtos
        </Link>
        <Link to="/clientes">
          <BiUserCircle /> Clientes
        </Link>
      </nav>
    </Container>
  );
}

export default MyHeader;
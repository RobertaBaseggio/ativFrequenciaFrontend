import React, { useState, useEffect, FormEvent } from 'react';
import { Container } from './styles';
import { GoBook } from 'react-icons/go';
import { FcSettings } from 'react-icons/fc';

const Header: React.FC = () => {
  
  return (
    <>
      <Container>
        <a href="http://localhost:3000/">
          <GoBook size={35} id='img'/> 
        </a>
        <div id="sair">
        <div >
          <FcSettings />
        </div> 
        <p >
          Sair
        </p>
      </div>
      </Container>
    </>
  )
};

export default Header;

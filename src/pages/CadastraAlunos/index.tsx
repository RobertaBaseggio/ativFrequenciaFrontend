import React, { useState, useEffect, FormEvent } from 'react';
import {  } from './styles';

import api from "../../services/api";

interface Repositorio {
  uf: string;
  state: string;
  cases: string;
  deaths: string;
  suspects: string;
  refuses: string;
}

const ListaAlunos: React.FC = () => {
  
  return (
    <>
      <div>
        Hello2 
      </div>
    </>
  )
};

export default ListaAlunos;

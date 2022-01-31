import React, { useState, useEffect, FormEvent } from 'react';
import { Cadastro } from './styles';
import Header from '../../conponents/Header';

interface Repositorio {
  
}

const ListaAlunos: React.FC = () => {
  
  return (
    <>
      <Header/>
      <Cadastro>
        <p>
          Cadastro
        </p>
        <label >
          Nome:
        </label>
        <input type="text" />
        <label >
          Data de nascimento:
        </label>
        <input type="date" id='data'/>
        <label >
          Telefone:
        </label>
        <input type="tel" id='telefone'/>
        <label>
          Sexo:
        </label>
        <input type="radio"  id='selecao'/>
        <label id='text'>
          Feminino
        </label>
        <input type="radio" id='selecao'/>
        <label id='text'>
          Masculino
        </label>
        <br></br>
        <label >
          Mãe:
        </label>
        <input type="text" />
        <label >
          Pai:
        </label>
        <input type="text" />
        <button>
          Salvar
        </button>
      </Cadastro>
    </>
  )
};

export default ListaAlunos;

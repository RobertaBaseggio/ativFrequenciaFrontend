import React, { useCallback, useEffect, useRef, useState } from 'react';
import Header from '../../conponents/Header';
import api from '../../services/api';
import { Edicao,Botoes } from './styles';
import { useRouteMatch } from "react-router-dom"

interface Aluno {
  id: number,
  nome: string
}
interface AlunoParams{
  id: string,
  nome:string
}
const ListaAlunos: React.FC<Aluno> = () => {
  const [alunos, setAluno] = useState<Aluno>(); 
  const { params } = useRouteMatch<AlunoParams>();
  const teste = {
    nome: ""
  }

  const deletar = useCallback(()=>{
        api.delete(`aluno/delete/${params.id}`);
  },[])
  const editar = useCallback(()=>{
    teste.nome = "Maria"
    api.put(`aluno/editar/${params.id}`,teste);
},[])
  return (
    <>
      <Header/>
      <Edicao onSubmit={editar}>
        <p>
          Editar
        </p>
        <label >
          Nome:
        </label>
        <input type="text"/> 
        <label >
          Data de nascimento:
        </label>
        <input type="date" id='data' />
        <label >
          Telefone:
        </label>
        <input type="tel" id='telefone' placeholder="(99)99999-9999"/>
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
        <button type='submit'>
          Salvar
        </button>
      </Edicao>
      <Botoes onSubmit={deletar}>
        <button type='submit'>
          Deletar
        </button>
      </Botoes>
    </>
  )
};

export default ListaAlunos;

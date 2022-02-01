import { FormHandles } from '@unform/core';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Header from '../../conponents/Header';
import desmarcarTodos from '../../js/desmarcar';
import api from '../../services/api';
import { Edicao,Botoes } from './styles';

interface Aluno {
  id: number,
  nome: string
}

const ListaAlunos: React.FC<Aluno> = ({id, nome}) => {

  const [alunos, setAluno] = useState<Aluno>();

  useEffect(() => {
    api.get(`/aluno/${id}`).then((response) => {
      setAluno(response.data)
    })
  }, [alunos, setAluno, id, nome]);

  const FormRef = useRef<FormHandles> (null);
  const handleSubmit = useCallback(()=>{
        api.delete(`aluno/${id}`);
        window.document.location.reload()
  },[])
  
  return (
    <>
      <Header/>
      <Edicao onSubmit={handleSubmit} ref={FormRef}>
        <p>
          Editar
        </p>
        <label >
          Nome:
        </label>
        <input type="text">
          { alunos && 
            alunos.nome
          }  
        </input> 
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
        
      </Edicao>
      <Botoes>
        <button type='submit' onClick={desmarcarTodos}>
          Deletar
        </button>
        <button>
          Salvar
        </button>
      </Botoes>
    </>
  )
};

export default ListaAlunos;

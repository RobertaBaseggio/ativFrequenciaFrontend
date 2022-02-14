import React, { useCallback, useEffect, useRef, useState } from 'react';
import Header from '../../conponents/Header';
import api from '../../services/api';
import { Edicao,Botoes } from './styles';
import { useRouteMatch } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';


interface AlunoParams{
  id: string
}

interface Aluno{
  id: number,
  nome: string
}

const ListaAlunos: React.FC = () => {

  const [alunoNome, setNome] = useState("");
  const { params } = useRouteMatch<AlunoParams>();

  const [aluno, setAluno] = useState<Aluno>();

  const teste = {
    nome: ""
  }

  useEffect(() => {
    api.get(`/aluno/${params.id}`).then((response) => {
      setAluno(response.data);
    });
  }, []);

  const deletar = useCallback(()=>{
        api.delete(`aluno/delete/${params.id}`);

        toast.success("Aluno deletado", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
  },[])

  const editar = useCallback(()=>{
    teste.nome = (document.getElementById('nome') as HTMLInputElement).value;
    api.put(`aluno/editar/${params.id}`,teste);

    toast.success("Aluno editado", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

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
          {aluno &&
            <input type="text" id='nome' placeholder={aluno.nome}/> 
          }
        
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
      <ToastContainer />
    </>
  )
};

export default ListaAlunos;

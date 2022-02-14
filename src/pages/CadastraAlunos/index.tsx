import React, { useCallback,useRef} from 'react';
import { Cadastro } from './styles';
import Header from '../../conponents/Header';
import {FormHandles} from '@unform/core';
import api from '../../services/api';
import { toast, ToastContainer } from 'react-toastify';


const ListaAlunos: React.FC = () => {
 
  const AlunoModel = {
    nome: ""
  }
  const FormRef = useRef<FormHandles> (null);
  
  const handleSubmit = useCallback(()=>{
    AlunoModel.nome = (document.getElementById('nome') as HTMLInputElement).value;
    api.post('aluno/cadastro',AlunoModel);
        
      toast.success("Aluno Cadastrado", {
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
      <Cadastro onSubmit={handleSubmit} ref={FormRef}>
        <p>
          Cadastro
        </p>
        <label >
          Nome:
        </label>
        <input type="text"  id="nome" />
        <label >
          Data de nascimento:
        </label>
        <input type="date" id='data'name="data"/>
        <label >
          Telefone:
        </label>
        <input type="tel" id='telefone' placeholder="(99)99999-9999" name="telefone"/>
        <label>
          Sexo:
        </label>
        <input type="radio" name="fem" id='selecao'/>
        <label id='text'>
          Feminino
        </label>
        <input type="radio" name="masc" id='selecao'/>
        <label id='text'>
          Masculino
        </label>
        <br></br>
        <label >
          Mãe:
        </label>
        <input type="text" name="nomeMae"/>
        <label >
          Pai:
        </label>
        <input type="text" name="nomePai"/>
        <button type='submit'>  
          Cadastrar
        </button>
      </Cadastro>
      <ToastContainer />
    </>
  )
};

export default ListaAlunos;

import React, { useState, useEffect, FormEvent } from 'react';
import { Botoes, Lista } from './styles';
import Checkbox from '@mui/material/Checkbox';
import Header from '../../conponents/Header'
import api from '../../services/api';
import { BsPlusCircle } from 'react-icons/bs';

interface Aluno {
  id: number,
  nome: string
}

const ListaAlunos: React.FC<Aluno> = ({id, nome}) => {

  const [aluno, setAluno] = useState<Aluno[]>([]);


  useEffect(() => {
    api.get(`/aluno/`).then((response) => {
      setAluno(response.data)
    })

  }, [id, nome]);

  return (
    <>  
      <Header/>
      <Lista>
        <div>
          <table>
            <thead>
              <tr>
                <td>
                  Id
                </td>
                <td>
                  Nome
                </td>
                <td>
                  1ª aula
                </td>
                <td>
                  2ª aula
                </td>
                <td>
                  3ª aula
                </td>
                <td>
                  4ª aula
                </td>
              </tr>
            </thead>
            <tbody>
              { aluno.map(aluno => (
              <tr>
                <td>
                  <a href="http://localhost:3000/edicao">
                    {aluno.id}
                  </a>
                </td>
                <td>
                  <a href="http://localhost:3000/edicao">
                    {aluno.nome}
                  </a>
                </td>
                <td>
                  <Checkbox id="i"/>
                </td>
                <td>
                  <Checkbox id="i"/>
                </td>
                <td>
                  <Checkbox id="i"/>
                </td>
                <td>
                  <Checkbox id="i"/>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
          <tr>
            <a href="http://localhost:3000/cadastro">
              <BsPlusCircle size={25} id='mais'/>
            </a>
          </tr>
        </div>
      </Lista>
      <Botoes>
        <div>
          <button>
            Limpar
          </button>   
          <button>
            Salvar
          </button>
        </div>
      </Botoes>
    </>
  )
};

export default ListaAlunos;

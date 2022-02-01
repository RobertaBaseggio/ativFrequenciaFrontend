import React, { useState, useEffect, FormEvent, useCallback } from 'react';
import { Botoes, Lista } from './styles';
import Checkbox from '@mui/material/Checkbox';
import Header from '../../conponents/Header'
import api from '../../services/api';
import { BsPlusCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';

interface Aluno {
  id: number,
  nome: string
}

interface Frequencia {
  presenca: number
}

const ListaAlunos: React.FC<Aluno> = ({id, nome}) => {

  const [aluno, setAluno] = useState<Aluno[]>([]);
  const [frequencia, setFrequencia] = useState<Frequencia[]>([]);

  const selecionarPresenca = useCallback ((presenca:number) => {
    frequencia.push({presenca:presenca})

    if(frequencia.find(frequencia => frequencia)){

    }

    console.log(frequencia)
  }, [])
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
                  <Link to={`/edicao/${aluno.id}`}>
                    {aluno.id}
                  </Link>
                </td>
                <td>
                <Link to={`/edicao/${aluno.id}`}>
                    {aluno.nome}
                  </Link>
                </td>
                <td>
                  <Checkbox name="marcar" onClick={() => selecionarPresenca(1)}/>
                </td>
                <td>
                  <Checkbox id="i" onClick={() => selecionarPresenca(1)}/>
                </td>
                <td>
                  <Checkbox id="i" onClick={() => selecionarPresenca(1)}/>
                </td>
                <td>
                  <Checkbox id="i" onClick={() => selecionarPresenca(1)}/>
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

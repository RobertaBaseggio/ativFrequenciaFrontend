import React, { useState, useEffect, useCallback } from 'react';
import { Botoes, Lista} from './styles';
import Checkbox from '@mui/material/Checkbox';
import Header from '../../conponents/Header'
import api from '../../services/api';
import { BsPlusCircle } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { MdOutlineDone } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Notificacoes from '../../conponents/Notification';
import { toast, ToastContainer } from 'react-toastify';


interface Aluno {
  idAluno: number,
  nome: string
}

interface Frequencia {
  idAluno: number 
  horario: number | undefined,
  frequencia: boolean
}

interface Chamada {
  idAluno: number,
  aula: number
}


const ListaAlunos: React.FC<Aluno> = ({idAluno, nome}) => {

  const [alunos, setAluno] = useState<Aluno[]>([]);
  const [alunoPresente1 , setAlunoPresente1] = useState<Chamada[]>([]);
  const [alunoPresente2, setAlunoPresente2] = useState<Chamada[]>([]);
  const [alunoPresente3, setAlunoPresente3] = useState<Chamada[]>([]);
  const [alunoPresente4, setAlunoPresente4] = useState<Chamada[]>([]);
  const [frequencias, setFrequencia] = useState<Frequencia[]>([]);

  const MarcaBox = useCallback  ((id: number, aula: number) => {

    switch(aula){
      case 1: 
        if(alunoPresente1.find(frequencia => frequencia.idAluno === id)){
        setAlunoPresente1(alunoPresente1.filter(frequencia => frequencia.idAluno !== id))     
      } else{
        alunoPresente1.push({idAluno: id, aula: aula})
        setAlunoPresente1(alunoPresente1);
      }
      break;

      case 2: 
        if(alunoPresente2.find(frequencia => frequencia.idAluno === id)){
        setAlunoPresente2(alunoPresente2.filter(frequencia => frequencia.idAluno !== id))     
      } else{
        alunoPresente2.push({idAluno: id, aula: aula})
        setAlunoPresente2(alunoPresente2);
      }
      break;

      case 3: 
        if(alunoPresente3.find(frequencia => frequencia.idAluno === id)){
        setAlunoPresente3(alunoPresente3.filter(frequencia => frequencia.idAluno !== id))     
      } else{
        alunoPresente3.push({idAluno: id, aula: aula})
        setAlunoPresente3(alunoPresente3);
      }
      break;

      case 4: 
        if(alunoPresente4.find(frequencia => frequencia.idAluno === id)){
        setAlunoPresente4(alunoPresente4.filter(frequencia => frequencia.idAluno !== id))     
      } else{
        alunoPresente4.push({idAluno: id, aula: aula})
        setAlunoPresente4(alunoPresente4);
      }
      break;

    }
    
  }, [alunoPresente1,alunoPresente2,alunoPresente3,alunoPresente4])


   const salvarPresencas = useCallback (() => {
     alunos.map(aluno => {
       
       if(alunoPresente1.find(aluno2 => aluno2.idAluno === aluno.idAluno)){
        let estudantePresente =  alunoPresente1.find(estudante => estudante.idAluno === aluno.idAluno)?.aula;
        frequencias.push({idAluno: aluno.idAluno ,horario: estudantePresente ,frequencia: true});
       }else{
        frequencias.push({idAluno: aluno.idAluno ,horario: 0 ,frequencia: false});
       }
      })

      alunos.map(aluno => {
       
        if(alunoPresente2.find(aluno2 => aluno2.idAluno === aluno.idAluno)){
         let estudantePresente =  alunoPresente2.find(estudante => estudante.idAluno === aluno.idAluno)?.aula;
         frequencias.push({idAluno: aluno.idAluno ,horario: estudantePresente ,frequencia: true});
        }else{
         frequencias.push({idAluno: aluno.idAluno ,horario: 0 ,frequencia: false});
        }
       })

       alunos.map(aluno => {
       
        if(alunoPresente3.find(aluno2 => aluno2.idAluno === aluno.idAluno)){
         let estudantePresente =  alunoPresente3.find(estudante => estudante.idAluno === aluno.idAluno)?.aula;
         frequencias.push({idAluno: aluno.idAluno ,horario: estudantePresente ,frequencia: true});
        }else{
         frequencias.push({idAluno: aluno.idAluno ,horario: 0 ,frequencia: false});
        }
       })

       alunos.map(aluno => {
       
        if(alunoPresente4.find(aluno2 => aluno2.idAluno === aluno.idAluno)){
         let estudantePresente =  alunoPresente4.find(estudante => estudante.idAluno === aluno.idAluno)?.aula;
         frequencias.push({idAluno: aluno.idAluno ,horario: estudantePresente ,frequencia: true});
        }else{
         frequencias.push({idAluno: aluno.idAluno ,horario: 0 ,frequencia: false});
        }
       })

    api.post(`/frequencia/cadastro`, frequencias);
    window.document.location.reload()
    
  }, [frequencias, alunos])

  useEffect(() => {
    api.get(`/aluno/`).then((response) => {
      setAluno(response.data)
    })

  }, [idAluno, nome]);

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
              { alunos.map(aluno => (
              <tr>
                <td>
                  <Link to={`/edicao/${aluno.idAluno}`}>
                    {aluno.idAluno}
                  </Link>
                </td> 
                <td>
                <Link to={`/edicao/${aluno.idAluno}`}>
                    {aluno.nome}
                    <FiEdit/>
                  </Link>
                </td>
                <td>
                  <Checkbox name="marcar" onClick={() => MarcaBox(aluno.idAluno, 1 )}/>
                </td>
                <td>
                  <Checkbox name="marcar" onClick={() => MarcaBox(aluno.idAluno, 2)}/>
                </td>
                <td>
                  <Checkbox name="marcar" onClick={() => MarcaBox(aluno.idAluno, 3)}/>
                </td>
                <td>
                  <Checkbox name="marcar" onClick={() => MarcaBox(aluno.idAluno, 4)}/>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
          <Link to={`/cadastro/`}>
            <BsPlusCircle size={25} id='mais'/>
          </Link>
        </div>
      </Lista>
      <Botoes>
        <div>  
          <button onClick={salvarPresencas}>
            Salvar
          </button>
          <ToastContainer />
        </div>
      </Botoes>
      <Notificacoes >
        <MdOutlineDone size={25}/>
        <p>
          Chamada salva
        </p>
      </Notificacoes>
    </>
  )
};

export default ListaAlunos;

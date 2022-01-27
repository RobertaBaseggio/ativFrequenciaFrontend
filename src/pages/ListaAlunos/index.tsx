import React, { useState, useEffect, FormEvent } from 'react';
import { Lista } from './styles';
import Checkbox from '@mui/material/Checkbox';
import Header from '../../conponents/Header'

interface Repositorio {

}

const ListaAlunos: React.FC = () => {
  
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
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
                <tr>
                <td>
                  1
                </td>
                <td>
                  Roberta
                </td>
                <td>
                <Checkbox {...label} />
                </td>
                <td>
                <Checkbox {...label} />
                </td>
                <td>
                <Checkbox {...label} />
                </td>
                <td>
                <Checkbox {...label} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Lista>
    </>
  )
};

export default ListaAlunos;

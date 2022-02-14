import styled, { css } from 'styled-components';
import { Form } from '@unform/web';

export const Edicao = styled(Form)`

  height: 100%;
  margin: 20vh 0 0 20vw;
  width: 63%;

    p{
      font-size: 25px;
      margin-left: 20px;
    }

    input{
      height: 30px;
      width: 250px;
      border-radius: 30px;
      border: 1px solid #c2c2c2;
      padding-left: 5px;
      margin: 30px 15% 30px 0;
    }

    #data{
      width: 127px;
    }

    #telefone{
      width: 150px;
      padding-left: 10px;
      margin-right: 211px;
    }
    
    #text{
      margin: 10px;
      align-items: center;
      margin-left: 5px;
      margin-right: 50px;
    }

    #selecao{
      width: 15px;
      height: 15px;
      margin: 2px;
    }

    button{
      width: 90px;
      height: 35px;
      border: none;
      background-color: yellowgreen;
      border-radius: 10px;
      margin-top: 10px;
      margin-left: 44vw;
      margin-right: 20px;
      cursor: pointer;
      font-size: 16px;
    }

`;


export const Botoes = styled(Form)`

  margin-left: 22vw;
  width: 50%;

    button{
      width: 90px;
      height: 35px;
      border: none;
      background-color: #c2c2c2;
      border-radius: 10px;
      position: absolute;
      top: 67vh;
      left: 56vw;
      cursor: pointer;
      font-size: 16px;
    }


`;
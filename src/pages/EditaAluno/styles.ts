import styled, { css } from 'styled-components';
import { Form } from '@unform/web';

export const Edicao = styled(Form)`

  height: 100%;
  margin: 20vh 0 0 20vw;
  width: 65%;

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

`;


export const Botoes = styled.div`

  margin-left: 22vw;
  width: 50%;

    button{
      width: 85px;
      height: 25px;
      border: none;
      background-color: yellowgreen;
      border-radius: 10px;
      margin-top: 10px;
      margin-right: 20px;
      cursor: pointer;
    }

    button:nth-child(1){
      background-color: #c2c2c2;
      margin-left: 34vw;
    }

`;
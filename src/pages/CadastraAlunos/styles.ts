import styled, { css } from 'styled-components';


export const Cadastro = styled.div`

  height: 100%;
  margin: 20vh 0 0 20vw;
  width: 65%;
  background-color: blanchedalmond;

    p{
      font-size: 25px;
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
      width: 125px;
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
      width: 85px;
      height: 25px;
      border: none;
      background-color: yellowgreen;
      border-radius: 10px;
      margin-top: 10px;
      margin-right: 20px;
      cursor: pointer;
    }

`;

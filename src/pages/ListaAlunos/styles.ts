import styled, { css } from 'styled-components';

export const Lista = styled.div`

    height: 100%;
    margin: 20vh 0 0 22vw;

    table{
      width: 60%;
      border-collapse: collapse;

      a{
        color: black;
        text-decoration: none;
      }
      
      thead{

        td{
          border: 1px solid #c2c2c2;
          text-align: center;
        }
      }
      tbody{
          height: 40px;

        td{
          border: 1px solid #c2c2c2;
          width: 35px;
          align-items: center;
          text-align: center;
        }

        td:nth-child(2){
          width: 55%;
          border: 1px solid #c2c2c2;
          text-align: start;
          padding-left: 10px;
        }
      }
    }

    #mais{
      margin: 15px 0 0 21vw;
      color: black;
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
      margin-left: 32vw;
    }

`;
import styled, { css } from 'styled-components';

export const Lista = styled.div`

    height: 100%;
    margin: 20vh 0 0 17vw;

    table{
      width: 80%;
      border-collapse: collapse;

      a{
        color: black;
        text-decoration: none;
      }
      
      thead{
        td{
          border: 1px solid yellowgreen;
          text-align: center;
          height: 40px;
          background: rgba(60, 80, 20, 0.1);
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

          svg{
            float: right;
            margin-right: 20px;
            color: #454343;
          }
        }
      }
    }

    #mais{
      margin: 15px 0 0 32vw;
      color: #454343;
    }
`;

export const Botoes = styled.div`

  width: 50%;
  float: right;

    button{
      width: 90px;
      height: 35px;
      border: none;
      background-color: yellowgreen;
      border-radius: 10px;
      margin: 10px 20px 0 27vw;
      cursor: pointer;
      font-size: 16px;
    }

`;


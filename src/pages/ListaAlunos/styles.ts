import styled, { css } from 'styled-components';


export const Lista = styled.div`

    width: 90%;
    height: 100%;
    margin: auto;

    table{
      width: 50%;
      border-collapse: collapse;

      thead{

        td{
          border: 1px solid #c2c2c2;
        }
      }
      tbody{
          height: 40px;

        td{
          border: 1px solid #c2c2c2;
          width: 35px;
        }

        td:nth-child(2){
          width: 40%;
          border: 1px solid #c2c2c2;
          
        }
      }
    }
`;
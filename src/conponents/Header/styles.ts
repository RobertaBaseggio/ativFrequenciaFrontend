import styled, { css } from 'styled-components';

export const Container = styled.div`

  width: 100vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  border-bottom: 2px solid yellowgreen;  
  background-color: white;

    #img{
      margin: 15px 0 0 20px;
      color: black;
    }

    #sair{
    width: 5vw;
    height: 2vw;
    margin: 1vh 1.5vw 1vh .5vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
      
      svg{
        height: 3vh;
        width: 1.5vw;
        cursor: pointer;
        margin:12px 7px 0 0;
      }

      p {
        font-size: .9em;
        width: 4vw;
        cursor: pointer;
        text-align: center;
        margin-top: 1.5vh;
        border-left: 2px solid yellowgreen;
      }
    
    }
    
`;
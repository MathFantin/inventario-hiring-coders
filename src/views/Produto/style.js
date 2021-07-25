import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  text-align: center;
    & .remove{
      grid-column: 5;
      & button{
        width: 15vh;
        height: 10;
        background: #ef3b2d;
        color: #fff;
        font-size: 1.1rem;
        border: none;
        padding: 10px;
        cursor: pointer;
      }
    }
  
  .new{
    display: block;
    padding: 10px 0;
    width: 35vh;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    background-color: blue;
    border: none;
    cursor: pointer;
  }
  
`
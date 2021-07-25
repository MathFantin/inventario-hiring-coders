import styled from "styled-components";

export const Container = styled.header `
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 100%;
  height: 7vh;
  margin: auto;
  
  & nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    & a{
      font-size: 3vh;
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
  @media(max-width: 768px){
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto;
    gap: 20px;
  }
`
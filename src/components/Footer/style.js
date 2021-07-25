import styled from "styled-components";

export const Footer = styled.footer `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
  padding: 10px 0;
  margin-top: 50px;

  & nav{
    display: flex;
    gap: 10px;
    justify-content: space-between;

    & a{
      font-size: 4vh;
    }
  }
  
  @media(max-width: 1200px){
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    min-height: 20px;
    margin-top: 10px;
  }
`
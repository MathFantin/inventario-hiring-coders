import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
    color: #000;
    font-family: 'Roboto Slab';
    transition: color .3s ease-in-out;
    &:hover{
      color: blue;
    }
  
  }
  main{
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    font-family: 'Roboto Slab';
  }

  section{
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0;
    
    & h1{
      font-size: 1.9rem;
      font-weight: 5000;
      padding-top: 5vh;
    }

    form{
      display: flex;
      flex-direction: column;
      padding: 20px 0;
      margin: 0 auto;
      border: 2px solid #000;

      & fieldset{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align: left;
        gap: 10px;
        padding: 10px;
        border: none;

        & input, textarea{
          height: 35px;
          padding-left: 5px;
          font-size: 1rem;
          width: 100%;
        }
        & textarea{
          height: initial;
        }

        & button{
          padding: 10px 0;
          text-transform: uppercase;
          background: blue;
          color: #fff;
          border: none;
          cursor: pointer;
        }

        & .cancelar{
          padding: 10px 0;
          text-align: center;
          text-transform: uppercase;
          background: red;
          color: #fff;
          border: none;
          cursor: pointer;
        }

      }
      @media(max-width: 768px){
        width: 100%;
      }
      .field-group{
        display: flex;
        justify-content: space-between;
        & select{
          width: 150px;
        }

        @media(max-width: 768px){
          flex-direction: column;

          & select{
            width: 100%;
          }
        }
      }
      .button-group{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;

        & button{
          padding: 10px 15px;
        }
      }
    }
    .content_wrapper{
      display: flex;
      width: 100%;
      align-items: center;
      margin: 0 auto;
    }

    .content{
      display: flex;
      width: 400px;
      margin: 0 auto;

      @media(max-width: 768px){
        width: 90vw;
      }
    }
    
    .msg{
      font-size: 1.6rem;
      font-weight: 5000;
      padding-top: 5vh;
      width: 100%;
      text-align: center;
      margin: auto;
    }

    table{
      padding-top: 5vh;
      width: 100%;
      th, td {
        border-bottom: 1px solid #ddd;
        font-size: 1.3rem;
        font-weight: 3000;
      }
    }

  }
`;
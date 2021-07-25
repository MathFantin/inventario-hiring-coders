import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import { Container } from './style';
import Header  from '../../components/Header';
import Footer from '../../components/Footer';

const Cliente = () => {
  const [clientes, setClientes] = useState([]);
  
  function removerCliente(id){
    const newClientes = clientes.filter(item => item.id !== id);
    setClientes(newClientes);
    localStorage.setItem('clientes',JSON.stringify(newClientes));
  }

  useEffect(()=>{
    const client = JSON.parse(localStorage.getItem('clientes'));
    if(client && client.length > 0){
      setClientes(client);
    }
  },[]);

  return (
    <>
      <Header />
      <section>
      <Container>
        <h1>Clientes Cadastrados</h1>
        <Link to="/cadastrar-cliente" className="new">Cadastrar Cliente</Link> 
        <div className="content_wrapper">
          {clientes && clientes.length === 0 ? <div className="msg">Nenhum cliente cadastrado</div> : 
              <table class="bordered striped centered"> 
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Endereço</th>
                    <th>Cidade</th>
                    <th>Cep</th>
                    <th>Ação</th>
                  </tr>
                </thead>
                <tbody>  
                  {clientes.map(item => (
                    <tr key={item.id}>                                                                        
                        <td>{item.nome}</td>
                        <td>{item.endereco}</td>
                        <td>{item.cidade}</td>
                        <td>{item.cep}</td>
                        <td className="remove">
                          <button onClick={()=>{removerCliente(item.id)}}>Remover</button>
                        </td>                  
                      </tr>
                  ))}  
                </tbody>
              </table>                                                                                                   
          }
        </div>         
      </Container>
      </section>
      <Footer />
    </>
  );
}

export default Cliente;
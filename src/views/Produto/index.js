import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import { Container } from './style';
import Header  from '../../components/Header';
import Footer from '../../components/Footer';

const Produto = () => {
  const [produtos, setProdutos] = useState([]);
  
  function removerProduto(id){
    const newProdutos = produtos.filter(item => item.id !== id);
    setProdutos(newProdutos);
    localStorage.setItem('produtos',JSON.stringify(newProdutos));
  }

  useEffect(()=>{
    const product = JSON.parse(localStorage.getItem('produtos'));
    if(product && product.length > 0){
      setProdutos(product);
    }
  },[]);

  return (
    <>
      <Header />
      <section>
      <Container>
        <h1>Produtos Cadastrados</h1>
        <Link to="/cadastrar-produto" className="new">Cadastrar Produtos</Link> 
        <div className="content_wrapper">
          {produtos && produtos.length === 0 ? <div className="msg">Nenhum produto cadastrado</div> : 
              <table class="bordered striped centered"> 
                <thead>
                  <tr>
                    <th>Produto</th>
                    <th>Marca</th>
                    <th>Valor</th>
                    <th>Ação</th>
                  </tr>
                </thead>
                <tbody>  
                  {produtos.map(item => (
                    <tr key={item.id}>                                                                        
                        <td>{item.marca}</td>
                        <td>{item.valor}</td>
                        <td>{item.quantidade}</td>
                        <td className="remove">
                          <button onClick={()=>{removerProduto(item.id)}}>Remover</button>
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

export default Produto;
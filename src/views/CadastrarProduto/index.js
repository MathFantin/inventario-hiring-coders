import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

function CadastrarProduto() {
  const history = useHistory();
  const [produtos, setProdutos] = useState([]);
  const [nome, setNome] = useState('');
  const [marca, setMarca] = useState('');
  const [valor, setValor] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [descricao, setDescricao] = useState('');

  function handleForm(e){
    e.preventDefault();
    const produto = {
      id: produtos.length + 1,
      nome: nome,
      marca: marca,
      valor: valor,
      quantidade: quantidade,
      descricao: descricao,
    }
    const newProduct = [...produtos, produto];
    setProdutos(newProduct);
    setTimeout(()=>{
      history.push("/produtos");
    }, 500);
  }

  useEffect(()=>{
    if(produtos.length > 0){
      localStorage.setItem('produtos',JSON.stringify(produtos));
    }
  },[produtos]);

  useEffect(()=>{
    const product = JSON.parse(localStorage.getItem('produtos'));
    if(product && product.length > 0){
      setProdutos(product);
    }
  },[]);

  return(
    <>
    <Header />
      <section>
        <h1>Cadastro de Produtos</h1>
        <div className="content_wrapper">
          <form onSubmit={handleForm}>
            <fieldset>
              <input type="text" id="nome" inputMode="text"  
                value={nome} 
                onChange={e => setNome(e.target.value)} 
                placeholder="Produto" 
                required
              />
            </fieldset>
            <fieldset>
              <input type="text" id="marca" inputMode="text"
                value={marca} 
                onChange={e => setMarca(e.target.value)} 
                placeholder="Marca"
                required
              />
            </fieldset>
            <div className="field-group">
              <fieldset>
                <input type="number" id="valor"  
                  value={valor} 
                  onChange={e => setValor(e.target.value)} 
                  placeholder="Valor" 
                  required
                />
              </fieldset>              
              <fieldset>
                <input type="number" id="quantidade" 
                  value={quantidade} 
                  onChange={e => setQuantidade(e.target.value)} 
                  placeholder="Quantidade"
                  required 
                />
              </fieldset>
            </div>
            <fieldset>
              <textarea id="descricao" value={descricao} rows="3" 
                onChange={e => setDescricao(e.target.value)}  
                placeholder="Descrição do produto" 
                required
              />
            </fieldset>
            <fieldset>
              <button type="submit">Salvar</button>
            </fieldset>
            <fieldset>
              <Link to="/produtos" className="cancelar">Cancelar</Link> 
            </fieldset>
          </form>
        </div>
      </section>
    <Footer />
    </>
  );
}

export default CadastrarProduto;
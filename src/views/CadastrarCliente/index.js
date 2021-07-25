import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

function CadastrarCliente() {
  const history = useHistory();
  const [clientes, setClientes] = useState([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');

  function handleForm(e){
    e.preventDefault();
    const cliente = {
      id: clientes.length + 1,
      nome: nome,
      email: email,
      cpf: cpf,
      telefone: telefone,
      endereco: endereco,
      complemento: complemento,
      bairro: bairro,
      cidade: cidade,
      cep: cep,
    }
    const newClient = [...clientes, cliente];
    setClientes(newClient);
    setTimeout(()=>{
      history.push("/clientes");
    }, 500);
  }

  useEffect(()=>{
    if(clientes.length > 0){
      localStorage.setItem('clientes',JSON.stringify(clientes));
    }
  },[clientes]);

  useEffect(()=>{
    const client = JSON.parse(localStorage.getItem('clientes'));
    if(client && client.length > 0){
      setClientes(client);
    }
  },[]);

  return(
    <>
    <Header />
      <section>
        <h1>Cadastro de Cliente</h1>
        <div className="content_wrapper">
          <form onSubmit={handleForm}>
            <fieldset>
              <input type="text" id="nome" inputMode="text"  
                value={nome} 
                onChange={e => setNome(e.target.value)} 
                placeholder="Nome" 
                required
              />
            </fieldset>
            <fieldset>
              <input type="email" id="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                placeholder="Email"
                required
              />
            </fieldset>
            <div className="field-group">
              <fieldset>
                <input type="text" id="cpf" inputMode="text"  
                  value={cpf} 
                  onChange={e => setCpf(e.target.value)} 
                  placeholder="CPF" 
                  required
                />
              </fieldset>              
              <fieldset>
                <input type="phone" id="telefone" value={telefone} 
                  onChange={e => setTelefone(e.target.value)} 
                  placeholder="Fone - (XX) XXXXX-XXXX"
                  required 
                />
              </fieldset>
            </div>
            <fieldset>
              <input type="text" id="endereco" inputMode="text"  
                value={endereco} 
                onChange={e => setEndereco(e.target.value)} 
                placeholder="Endereço" 
                required
              />
            </fieldset>
            <div className="field-group">
              <fieldset>
                <input type="text" id="complemento" inputMode="text"  
                  value={complemento} 
                  onChange={e => setComplemento(e.target.value)} 
                  placeholder="Complemento" 
                  required
                />
              </fieldset>
              <fieldset>
                <input type="text" id="bairro" inputMode="text"  
                  value={bairro} 
                  onChange={e => setBairro(e.target.value)} 
                  placeholder="Bairro" 
                  required
                />
              </fieldset>
            </div>
            <div className="field-group">
              <fieldset>
                <input type="text" id="cidade" inputMode="text"  
                  value={cidade} 
                  onChange={e => setCidade(e.target.value)} 
                  placeholder="Cidade" 
                  required
                />
              </fieldset>
              <fieldset>
                <input type="text" id="cep" inputMode="text"  
                  value={cep} 
                  onChange={e => setCep(e.target.value)} 
                  placeholder="CEP - XX.XXX-XXX" 
                  required
                />
              </fieldset>
            </div>
            <fieldset>
              <button type="submit">Salvar</button>
            </fieldset>
            <fieldset>
              <Link to="/clientes" className="cancelar">Cancelar</Link> 
            </fieldset>
          </form>
        </div>
      </section>
    <Footer />
    </>
  );
}

export default CadastrarCliente;
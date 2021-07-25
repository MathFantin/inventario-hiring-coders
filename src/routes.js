import React from 'react';
import { Switch, Route,  BrowserRouter,  } from 'react-router-dom';

import Home from './views/Home';
import Clientes from './views/Cliente';
import Produtos from './views/Produto';
import CadastrarCliente from "./views/CadastrarCliente";
import CadastrarProduto from "./views/CadastrarProduto";

const Routes = () => {
    return(
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path="/produtos" component={Produtos} />
            <Route exact path="/clientes" component={Clientes} />
            <Route exact path="/cadastrar-cliente" component={CadastrarCliente} />
            <Route exact path="/cadastrar-produto" component={CadastrarProduto} />
          </Switch>
        </BrowserRouter>
      </>
    )
};

export default Routes;
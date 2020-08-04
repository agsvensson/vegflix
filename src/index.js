// este arquivo é o que vai inicializar o React

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';


const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  // ao redor da aplicação, tem que ter um roteamento, é o que o BrowserRouter faz.
  // Switch é como se tivesse um if dentro para verificar qual rota é.
  // Route é como vamos declarar cada uma das páginas que a gente tem.
  <BrowserRouter>
  <Switch> 
  <Route path="/" component={Home} exact />
  <Route path="/cadastro/video" component={CadastroVideo} />
  <Route component={Pagina404} />

  </Switch> 
  </BrowserRouter>,
  document.getElementById('root') // pega e renderiza o React dentro do root
);

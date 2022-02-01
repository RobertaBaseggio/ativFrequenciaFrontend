import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ListaAlunos from '../pages/ListaAlunos';
import CadastraAluno from '../pages/CadastraAlunos';
import EditaAluno from '../pages/EditaAluno';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={ListaAlunos} />;
    <Route path="/cadastro" exact component={CadastraAluno} />;
    <Route path="/edicao/:id+" exact component={EditaAluno} />;
  </Switch>
);
 
export default Routes;